#!/usr/bin/env python3
import glob

def smart_fix_inline_math(text):
    """Intelligently fix inline math by finding \( and adding \) at appropriate boundaries."""
    result = []
    i = 0
    in_math = False
    depth = 0

    while i < len(text):
        # Check for opening delimiter \( or \(
        if i + 1 < len(text) and text[i] == '\\' and text[i+1] == '(':
            if not in_math:
                in_math = True
                depth = 1
                result.append('\\(')
                i += 2
                continue
            else:
                depth += 1
                result.append('\\(')
                i += 2
                continue

        # Check for closing delimiter \)
        if i + 1 < len(text) and text[i] == '\\' and text[i+1] == ')':
            if in_math:
                result.append('\\)')
                depth -= 1
                if depth == 0:
                    in_math = False
                i += 2
                continue
            else:
                result.append('\\)')
                i += 2
                continue

        # Regular parentheses in math
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

        # Boundary conditions for closing math
        if in_math and depth == 1:
            # Check for space+letter (new word)
            if (text[i] in ' \t') and i + 1 < len(text) and text[i+1].isalpha():
                result.append('\\)')
                in_math = False
                result.append(text[i])
                i += 1
                continue

            # Punctuation outside math
            if text[i] in '.,:;)\]}':
                result.append('\\)')
                in_math = False
                result.append(text[i])
                i += 1
                continue

            # HTML tag
            if text[i] == '<':
                result.append('\\)')
                in_math = False
                result.append('<')
                i += 1
                continue

            # End of line
            if text[i] == '\n':
                result.append('\\)')
                in_math = False
                result.append('\n')
                i += 1
                continue

        result.append(text[i])
        i += 1

    if in_math:
        result.append('\\)')

    return ''.join(result)

def clean_up(text):
    """Clean up artifacts"""
    # Remove duplicate \)\)
    result = []
    i = 0
    while i < len(text):
        if i + 4 < len(text) and text[i:i+5] == '\\)\\)\\)\\)':
            result.append('\\)')
            i += 5
        elif i + 4 < len(text) and text[i:i+5] == '\\)\\)\\)':
            result.append('\\)')
            i += 4
        elif i + 3 < len(text) and text[i:i+4] == '\\)\\)':
            result.append('\\)')
            i += 3
        else:
            result.append(text[i])
            i += 1
    return ''.join(result)

def parse_content(text):
    """Parse and fix line by line"""
    lines = text.split('\n')
    fixed_lines = []

    for line in lines:
        # Skip script lines with template literals
        if '`<' in line or '`{' in line or 'to=' in line or 'id=' in line:
            fixed_lines.append(line)
            continue

        # Fix the line
        line = smart_fix_inline_math(line)
        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

for filename in glob.glob("lessons/*.html"):
    print(f"Processing {filename}...")

    with open(filename, 'r') as f:
        content = f.read()

    # Apply fix multiple times to catch nested
    for _ in range(3):
        old_len = len(content)
        content = parse_content(content)
        if len(content) == old_len:
            break

    # Cleanup
    content = clean_up(content)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"  Completed")