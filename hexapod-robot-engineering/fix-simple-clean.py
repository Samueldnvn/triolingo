#!/usr/bin/env python3
import glob
import re

def fix_inline_math_simple(text):
    """Simple pattern-based fix"""
    fixed = text

    # 1. Fix \(word space - add closing before space
    # Pattern: \(letters/numbers followed by space and letter
    fixed = re.sub(r'(\\\([^\(\)]+?)([ \t]+[a-zA-Z])', r'\1\\\)\2', fixed)

    # 2. Fix \(word punctuation
    fixed = re.sub(r'(\\\([^\(\)]+?)([.,:;)\]\}])', r'\1\\\)\2', fixed)

    # 3. Fix \(word <
    fixed = re.sub(r'(\\\([^\(\)]+?)(<)', r'\1\\\)\2', fixed)

    # 4. Fix \(word end of line
    fixed = re.sub(r'(\\\([^\(\)]+?)(\n)', r'\1\\\)\2', fixed)

    # 5. Fix doubled closing delimiters
    fixed = re.sub(r'\\\)\\)+', r'\\\)', fixed)

    # 6. Fix patterns like )\(
    fixed = re.sub(r'\)\\(\\)', r'\\\)', fixed)

    return fixed

for filename in glob.glob("lessons/*.html"):
    if '01-foundations.html' in filename:
        print(f"Skipping {filename}")
        continue

    print(f"Processing {filename}...")

    with open(filename, 'r') as f:
        content = f.read()

    original = content

    for i in range(3):
        old = content
        content = fix_inline_math_simple(content)
        if content == old:
            break

    if content != original:
        with open(filename, 'w') as f:
            f.write(content)
        print(f"  Fixed")
    else:
        print(f"  No changes")