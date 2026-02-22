#!/usr/bin/env python3
import glob
import re

def smart_fix_inline_math(text):
    """
    Intelligently fix inline math by finding \( and adding \) at appropriate boundaries.
    This works by understanding mathematical structure.
    """

    # First, let's identify all inline math blocks
    # We'll scan through character by character to build proper blocks

    result = []
    i = 0
    in_math = False
    math_start = 0
    depth = 0  # For nested ()

    while i < len(text):
        # Check for opening delimiter
        if i + 1 < len(text) and text[i:i+2] == '\\(':
            if not in_math:
                in_math = True
                math_start = i
                depth = 1
                result.append('\\(')
                i += 2
                continue
            else:
                # Nested \(
                depth += 1
                result.append('\\(')
                i += 2
                continue

        # Check for closing delimiter
        if i + 1 < len(text) and text[i:i+1] == '\\' and text[i+1] == ')':
            if in_math:
                depth -= 1
                if depth == 0:
                    in_math = False
                result.append('\\)')
                i += 2
                continue
            else:
                result.append('\\)')
                i += 2
                continue

        # Check for regular parentheses inside math
        if in_math and text[i] == '(':
            depth += 1
            result.append('(')
            i += 1
            continue

        if in_math and text[i] == ')':
            depth -= 1
            result.append(')')
            i += 1
            continue

        # If we're in math mode, check for boundary conditions
        # where we should close the math block
        if in_math and depth == 1:
            # Check for space followed by letter (start of new word)
            if (text[i] == ' ' or text[i] == '\t') and i + 1 < len(text) and text[i+1].isalpha():
                # Close the math block here
                result.append('\\)')
                in_math = False
                depth = 0
                result.append(text[i])
                i += 1
                continue

            # Check for punctuation that should be outside
            if text[i] in '.,:;)\]}':
                result.append('\\)')
                in_math = False
                depth = 0
                result.append(text[i])
                i += 1
                continue

            # Check for HTML tag
            if text[i] == '<':
                result.append('\\)')
                in_math = False
                depth = 0
                result.append('<')
                i += 1
                continue

            # Check for end of line
            if text[i] == '\n':
                result.append('\\)')
                in_math = False
                depth = 0
                result.append('\n')
                i += 1
                continue

        # Just copy the character
        result.append(text[i])
        i += 1

    # If we're still in math at the end, close it
    if in_math:
        result.append('\\)')

    # Convert back to string
    content = ''.join(result)

    # Now clean up any patterns that might have been created

    # Fix \(word)\(word patterns - add space between
    content = re.sub(r'(\\\)) \(', r'\1 \2', content)

    # Remove duplicate \)\)
    content = re.sub(r'\\\)+\)', r'\\\)', content)

    # Fix (\( patterns which are opening paren followed by math
    content = re.sub(r'\((\\\()', r'\1', content)

    # Fix patterns where we added ) too early in things like (a + b)
    # We want \(a + b\) not (a + b)
    content = re.sub(r'\(([^)]+)\)', r'\(\1\\\)', content)

    return content

def apply_multiple_passes(content):
    """Apply the fix multiple times to catch nested issues"""
    for _ in range(5):
        old = content
        content = smart_fix_inline_math(content)
        if content == old:
            break
    return content

for filename in glob.glob("lessons/*.html"):
    print(f"Processing {filename}...")

    with open(filename, 'r') as f:
        content = f.read()

    # Apply the smart fix
    content = apply_multiple_passes(content)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"  Completed {filename}")