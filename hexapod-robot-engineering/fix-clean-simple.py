#!/usr/bin/env python3
import glob
import re

# Restore modules 2-13 to a clean state then fix properly

# First, let's find all patterns that are broken and fix them systematically

def fix_inline_math_simple(text):
    """
    Simple approach: Replace patterns systematically
    """
    fixed = text

    # 1. Fix \(word space
    fixed = re.sub(r'(\\\([^(]+?)([ \t]+[a-zA-Z])', r'\1\\\)\2', fixed)

    # 2. Fix \(word punctuation
    fixed = re.sub(r'(\\\([^(]+?)([.,:;)\]\}])', r'\1\\\)\2', fixed)

    # 3. Fix \(word <
    fixed = re.sub(r'(\\\([^(]+?)(<)', r'\1\\\)\2', fixed)

    # 4. Fix \(word end of line
    fixed = re.sub(r'(\\\([^(]+?)(\n)', r'\1\\\)\2', fixed)

    # 5. Fix \(word)\( - add space between
    fixed = re.sub(r'\\\)\\(', r'\\) \\(', fixed)

    # 6. Fix (\( - remove extra (
    fixed = re.sub(r'\((\\\()', r'\1', fixed)

    # 7. Fix double \)\)
    fixed = re.sub(r'\\\)\\)+', r'\\)', fixed)

    # 8. Fix )( - replace with )
    fixed = re.sub(r'\)\\(\\)', r'\\)', fixed)
    fixed = re.sub(r'\)\\(', r') \\(', fixed)

    # 9. Fix patterns like )\(word
    fixed = re.sub(r'\)\\([a-zA-Z]', r') \\1', fixed)

    return fixed

def clean_module_01():
    """Module 01 is already correct, keep it"""
    pass

def process_file(filename):
    """Process a single file"""
    with open(filename, 'r') as f:
        content = f.read()

    original = content

    # Skip Module 01 - it's already correct
    if '01-foundations.html' in filename:
        print(f"Skipping {filename} (already correct)")
        return

    # Apply fix multiple times
    for i in range(5):
        old = content
        content = fix_inline_math_simple(content)
        if content == old:
            break

    if content != original:
        print(f"Fixed {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes: {filename}")

# Process all files
for filename in glob.glob("lessons/*.html"):
    process_file(filename)