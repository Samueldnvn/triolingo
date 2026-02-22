#!/usr/bin/env python3
import glob
import re

def comprehensive_fix(text):
    """Final comprehensive fix for all remaining issues"""

    # Common patterns
    patterns = [
        # \(wordspace
        (r'(\\\([^)]*)([ \t]+)', r'\1\\\)\2'),

        # \(word punctuation .
        (r'(\\\([^)]*)([.,:;])', r'\1\\\)\2'),

        # \(word closing bracket ]
        (r'(\\\([^)]*)(\])', r'\1\\\)\2'),

        # \(word at end
        (r'(\\\([^)]*)($)', r'\1\\\)\2'),

        # Double fix for nested
        (r'(\\\([^)]*)(\\\()', r'\1\\\)\2'),

        # HTML tags
        (r'(\\\([^)]*)(</)', r'\1\\\)\2'),

        # (X\( pattern
        (r'\((\\\()', r'\1'),
    ]

    for pattern, replacement in patterns:
        text = re.sub(pattern, replacement, text, flags=re.MULTILINE)

    # Clean up double \)
    text = re.sub(r'\\\)+\)', r'\\\)', text)

    return text

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Run 5 iterations to catch nested issues
    for i in range(5):
        old = content
        content = comprehensive_fix(content)
        if content == old:
            break

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Processed {filename}")