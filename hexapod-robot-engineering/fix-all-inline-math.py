#!/usr/bin/env python3
import glob
import re

def fix_inline_math_delimiters(text):
    """Add missing closing delimiters to inline math"""

    # Replace patterns where \( is not properly closed

    # Pattern 1: \(something followed by space and letter (start of new word)
    # But be careful not to break things like \(a + b\) which are already correct
    text = re.sub(
        r'(\\\([^\\]*?)(?<!\\\))([ \t]+[a-zA-Z])',
        r'\1\\\)\2',
        text
    )

    # Pattern 2: \(something followed by punctuation (.,:;)\]\})
    text = re.sub(
        r'(\\\([^\\]*?)(?<!\\\))([.,:;)\]\])',
        r'\1\\\)\2',
        text
    )

    # Pattern 3: \(something at end of line
    text = re.sub(
        r'(\\\([^\\]*?)(?<!\\\))([ \t]*$)',
        r'\1\\\)\2',
        text,
        flags=re.MULTILINE
    )

    # Pattern 4: \(something followed by < (HTML tag)
    text = re.sub(
        r'(\\\([^\\]*?)(?<!\\\))(<)',
        r'\1\\\)\2',
        text
    )

    # Pattern 5: Handle multiple \( without closing in same line
    # \( ... \( ... word → convert first \( ... to \( ... \)
    text = re.sub(
        r'(\\\([^\\]*?)(?<!\\\))(\\(?![\\)])',
        r'\1\\\)\2',
        text
    )

    # Pattern 6: Remove double delimiters that may have been created
    text = text.replace('\\)\\)', '\\)')

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