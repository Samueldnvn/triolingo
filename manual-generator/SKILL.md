---
name: manual-generator
description: Generate dense, black-and-white technical manuals in PDF format. Use when creating documentation, guides, or educational materials that require: (1) Compact, professional formatting with minimal whitespace, (2) Clear structure with decimal-formatted headers (1, 1.1, 1.1.1), (3) Bordered note boxes for emphasis (Important Facts, Key Points, Warnings), (4) Image and diagram support with captions, (5) Step-by-step instruction format, (6) Dry, technical appearance similar to equipment or API manuals
---

# Manual Generator

Generate dense, black-and-white technical manuals with compact formatting and professional appearance.

## Quick Start

1. Create a JSON file defining the manual structure (see [Content Structure](#content-structure))
2. Run the generator script: `python manual-generator/scripts/generate_manual.py <input.json> <output.pdf> [ --title "Manual Title" ]`
3. Output: Professional PDF with styled headers, tip boxes, and formatting

## Content Structure

The manual is defined via JSON with nested sections:

```json
{
  "title": "Manual Title",
  "sections": [
    {
      "number": "1",
      "title": "Section Name",
      "content": [
        { "type": "text", "text": "Paragraph text here." },
        { "type": "step", "number": "1", "text": "First step description." },
        { "type": "image", "path": "/path/to/image.png", "caption": "Caption text" },
        { "type": "tip", "tip_type": "tip", "title": "Important Facts", "text": "Content" }
      ],
      "subsections": [
        { "number": "1", "title": "Subsection", "content": [...], "subsections": [...] }
      ]
    }
  ]
}
```

### Content Block Types

| Type | Fields | Description |
|------|--------|-------------|
| `text` | `text` | Regular body text paragraph |
| `step` | `number`, `text` | Numbered step (e.g., "1. Connect part A to part B") |
| `image` | `path`, `caption` | Insert image with optional caption |
| `tip` | `tip_type`, `title`, `text` | Styled tip box (see [Tip Box Types](#tip-box-types)) |

### Tip Box Types

| `tip_type` | Purpose | Visual Style |
|------------|---------|--------------|
| `tip` | General tips, helpful notes | Black border, white background |
| `warning` | Warnings, cautions | Black border, white background |
| `info` | Key points, important facts | Black border, white background |

Note: All tip types use identical black and white styling for a consistent, professional appearance. Use the `title` field to convey the nature of the note.

Common titles: "Important Facts", "Key Points", "Caution", "Warning", "Note", "Critical", "Reference"

### Section Numbering

- Use decimal numbering: `1` > `1.1` > `1.1.1` > `1.1.2` > `1.2`
- The script auto-generates formatted headers based on nesting depth
- `number` fields guide the hierarchy but exact formatting is automatic

## Working with Images

1. Place images in your workspace or a known path
2. Reference absolute or relative paths in the JSON
3. Supported formats: PNG, JPG, JPEG, GIF
4. Images are automatically sized to fit the page width (70% of content width)

## Best Practices

**Structure:**
- Start with overview or prerequisites sections
- Use numbered steps for procedures
- Group related steps in subsections
- Add note boxes for critical information only

**Note Boxes:**
- Use sparingly for emphasis (2-3 per section maximum)
- Keep text concise (1-2 sentences preferred)
- Use descriptive titles to convey urgency/importance
- Place note boxes before relevant steps for visibility

**Images:**
- Use clear, technical diagrams or screenshots
- Add captions explaining what the image shows
- Place images near the content they illustrate
- Images are automatically sized (60% of content width)

**Content:**
- Write in imperative mood ("Configure the service," not "You should configure")
- Keep sentences direct and factual
- Use consistent terminology throughout the manual
- Avoid conversational or casual language
- Focus on precision and clarity over elaboration

## Resources

### scripts/

**`generate_manual.py`** - Main PDF generator script. Takes JSON input and produces styled PDF output with IKEA-inspired design.

### assets/

**`example_manual.json`** - Complete example showing all content types and structure. Use as a template or reference.

## Examples

**Simple one-section manual:**
```json
{
  "title": "Basic Assembly Guide",
  "sections": [
    {
      "number": "1",
      "title": "Getting Started",
      "content": [
        { "type": "text", "text": "Read all instructions before beginning." },
        { "type": "step", "number": "1", "text": "Gather required tools." }
      ]
    }
  ]
}
```

**Manual with nested sections and tips:**
```json
{
  "sections": [
    {
      "number": "1",
      "title": "Installation",
      "content": [
        { "type": "tip", "tip_type": "warning", "title": "Caution", "text": "Turn off power before installing." }
      ],
      "subsections": [
        {
          "number": "1",
          "title": "Preparing the Area",
          "content": [
            { "type": "step", "number": "1", "text": "Clear the workspace." },
            { "type": "step", "number": "2", "text": "Verify measurements." }
          ]
        }
      ]
    }
  ]
}
```

## Troubleshooting

**Script errors:** Ensure ReportLab is installed (`pip install reportlab`)
**Missing images:** Check path accuracy in the JSON
**Layout issues:** Try shorter text in tip boxes or fewer images per page
**Font rendering:** The script uses Helvetica (standard) - no external fonts needed
**Style errors:** The script modifies ReportLab's default BodyText style directly instead of adding a duplicate

## Dependencies

Required Python package:
```bash
pip install reportlab
```

If using a system package manager (Ubuntu/Debian):
```bash
sudo apt-get install python3-reportlab
```