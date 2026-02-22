#!/usr/bin/env python3
"""
Manual Generator - Creates technical manual PDFs from structured content.

Input: JSON file or dict with sections, subsections, and content blocks
Output: Dense, black-and-white technical manual with compact formatting
"""

import json
import sys
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, Frame, PageTemplate, Image
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont


# Technical manual styling - black and white, dense, dry
COLORS = {
    'text': HexColor('#000000'),
    'border': HexColor('#000000'),
    'light': HexColor('#FFFFFF'),
}

# Page dimensions - tighter margins for dense layout
PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 0.7 * cm
CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN


def setup_styles():
    """Create paragraph styles for different content elements."""
    styles = getSampleStyleSheet()

    # Title styles - compact, bold, black and white
    styles.add(ParagraphStyle(
        name='ManualTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=16,
        spaceAfter=0.2 * cm,
        textColor=COLORS['text'],
        alignment=TA_LEFT
    ))

    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=11,
        spaceBefore=0.3 * cm,
        spaceAfter=0.15 * cm,
        textColor=COLORS['text'],
        leftIndent=0,
        bulletIndent=0
    ))

    styles.add(ParagraphStyle(
        name='SubsectionTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=10,
        spaceBefore=0.25 * cm,
        spaceAfter=0.1 * cm,
        textColor=COLORS['text'],
        leftIndent=0.2 * cm
    ))

    styles.add(ParagraphStyle(
        name='SubSubsectionTitle',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=9,
        spaceBefore=0.2 * cm,
        spaceAfter=0.1 * cm,
        textColor=COLORS['text'],
        leftIndent=0.4 * cm
    ))

    # Body text - compact, smaller font
    styles['BodyText'].fontName = 'Helvetica'
    styles['BodyText'].fontSize = 7
    styles['BodyText'].spaceAfter = 0.1 * cm
    styles['BodyText'].alignment = TA_JUSTIFY
    styles['BodyText'].leading = 10

    styles.add(ParagraphStyle(
        name='TipTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        spaceAfter=0.05 * cm,
        textColor=COLORS['text']
    ))

    styles.add(ParagraphStyle(
        name='TipBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        spaceAfter=0.05 * cm,
        leading=9
    ))

    styles.add(ParagraphStyle(
        name='Caption',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7,
        spaceBefore=0.1 * cm,
        spaceAfter=0.2 * cm,
        alignment=TA_CENTER,
        textColor=COLORS['text']
    ))

    return styles


def create_tip_box(tip_type, title, content, styles):
    """Create a black and white bordered box for tips/notes."""
    tip_title = Paragraph(f"<b>{title}</b>", styles['TipTitle'])
    tip_body = Paragraph(content, styles['TipBody'])

    # Create table for box with simple black border and white background
    box_data = [[tip_title], [tip_body]]
    box = Table(box_data, colWidths=[CONTENT_WIDTH - 0.3 * cm])
    box.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), COLORS['light']),
        ('BOX', (0, 0), (-1, -1), 1, COLORS['border']),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 3),
        ('RIGHTPADDING', (0, 0), (-1, -1), 3),
    ]))

    return KeepTogether([Spacer(0, 0.1 * cm), box, Spacer(0, 0.15 * cm)])


def add_page_number(canvas, doc):
    """Add page numbers to footer."""
    canvas.saveState()
    canvas.setFont('Helvetica', 7)
    canvas.setFillColor(COLORS['text'])
    canvas.drawString(
        PAGE_WIDTH - 1.5 * cm,
        0.8 * cm,
        f"{canvas.getPageNumber()}"
    )
    canvas.restoreState()


def process_section(section, elements, styles, prefix=''):
    """Recursively process sections and build PDF elements."""
    section_num = section.get('number', '')
    title = section.get('title', '')

    # Add section title
    if title:
        full_title = f"{prefix}{section_num}. {title}" if section_num else title
        if '.' in prefix or prefix:
            # Determine style based on nesting level
            dots = prefix.count('.')
            if dots == 1:
                elements.append(Paragraph(full_title, styles['SubsectionTitle']))
            else:
                elements.append(Paragraph(full_title, styles['SubSubsectionTitle']))
        else:
            elements.append(Paragraph(full_title, styles['SectionTitle']))

    # Process content blocks
    for block in section.get('content', []):
        if block['type'] == 'text':
            elements.append(Paragraph(block['text'], styles['BodyText']))
        elif block['type'] == 'tip':
            tip_box = create_tip_box(
                block.get('tip_type', 'tip'),
                block.get('title', 'Tip'),
                block['text'],
                styles
            )
            elements.append(tip_box)
        elif block['type'] == 'image':
            img_path = block.get('path', '')
            caption_text = block.get('caption', '')
            try:
                if Path(img_path).exists():
                    img = Image(img_path, width=CONTENT_WIDTH * 0.7, height=5 * cm, hAlign='CENTER')
                    elements.append(img)
                    if caption_text:
                        elements.append(Paragraph(caption_text, styles['Caption']))
            except Exception as e:
                elements.append(Paragraph(f"[Image error: {e}]", styles['BodyText']))
        elif block['type'] == 'step':
            # Special step-by-step styling
            step_num = block.get('number', '')
            step_text = f"<b>{step_num}.</b> {block['text']}"
            elements.append(Paragraph(step_text, styles['BodyText']))

    # Process subsections
    for i, subsection in enumerate(section.get('subsections', []), 1):
        subsection['number'] = subsection.get('number', str(i))
        new_prefix = f"{prefix}{section_num}." if section_num else prefix
        process_section(subsection, elements, styles, new_prefix)


def generate_manual(content_json, output_path, title="Manual"):
    """Generate PDF manual from structured JSON content."""
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=1.2 * cm,
        bottomMargin=1.2 * cm
    )

    elements = []

    # Add title page
    elements.append(Paragraph(title, styles['ManualTitle']))
    elements.append(Spacer(0, 0.3 * cm))

    # Process all sections
    for section in content_json.get('sections', []):
        process_section(section, elements, styles)

    # Build PDF
    doc.build(elements, onFirstPage=add_page_number, onLaterPages=add_page_number)
    print(f"Manual generated: {output_path}")


def main():
    """CLI entry point."""
    if len(sys.argv) < 3:
        print("Usage: python generate_manual.py <input.json> <output.pdf> [--title 'Manual Title']")
        sys.exit(1)

    input_file = Path(sys.argv[1])
    output_file = Path(sys.argv[2])
    title = sys.argv[4] if len(sys.argv) > 4 and sys.argv[3] == '--title' else input_file.stem.replace('-', ' ').title()

    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)

    with open(input_file, 'r', encoding='utf-8') as f:
        content = json.load(f)

    generate_manual(content, str(output_file), title)


# Initialize styles globally
styles = setup_styles()


if __name__ == '__main__':
    main()