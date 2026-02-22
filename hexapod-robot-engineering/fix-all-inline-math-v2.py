#!/usr/bin/env python3
import glob
import re

def fix_inline_math_delimiters(text):
    """Add missing closing delimiters to inline math"""

    # Pattern 1: \(something followed by space and letter
    # Match \( followed by any content that doesn't end with \), then space+letter
    text = re.sub(
        r'(\\\([^)]*)([ \t]+[a-zA-Z])',
        r'\1\\\)\2',
        text
    )

    # Pattern 2: \(something followed by punctuation
    text = re.sub(
        r'(\\\([^)]*)([.,:;)\]\}])',
        r'\1\\\)\2',
        text
    )

    # Pattern 3: \(something at end of line
    text = re.sub(
        r'(\\\([^)]*)([ \t]*$)',
        r'\1\\\)\2',
        text,
        flags=re.MULTILINE
    )

    # Pattern 4: \(something followed by HTML tag
    text = re.sub(
        r'(\\\([^)]*)(<)',
        r'\1\\\)\2',
        text
    )

    # Pattern 5: Handle \( followed by \( without closing first
    text = re.sub(
        r'(\\\([^)]*)(\\\()',
        r'\1\\\)\2',
        text
    )

    # Pattern 6: Remove duplicate closing delimiters
    text = re.sub(r'\\\)+\)', r'\\\)', text)

    # Pattern 7: Fix (\( double opener
    text = re.sub(r'\((\\\()', r'\1', text)

    # Pattern 8: Fix remaining patterns like )\( or )( closing then opening
    text = re.sub(r'\)(\\\()', r'): \1', text)

    return text

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    original = content
    content = fix_inline_math_delimiters(content)

    if content != original:
        print(f"Fixed {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes: {filename}")