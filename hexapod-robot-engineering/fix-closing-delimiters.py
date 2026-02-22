#!/usr/bin/env python3
import glob
import re

def fix_inline_math(content):
    """Add missing closing delimiters to inline math"""

    def replace_func(match):
        # Get the matched inline math
        math_content = match.group(1)

        # Count opening and closing delimiters within the math
        # (for nested math, though this is rare in our content)
        depth = 0
        pos = 0
        closing_pos = -1

        # Find where the math expression actually ends
        # It ends before: space+word, punctuation, closing tag, etc.
        patterns = [
            r'(?=[ \t\r\n]+[a-zA-Z])',  # space followed by letter
            r'(?=[.,:;)\]\}])',  # punctuation
            r'(?=\s*</)',  # closing HTML tag
            r'(?=\s+$)',  # end of line
        ]

        for i, char in enumerate(math_content):
            if char == '\)':
                depth -= 1

        # If we don't have matching close parens, we need to add one
        # Actually, our content has bare `\(` without `\)`, so we just need to add `\)` before the next word/punctuation/tag

        # The simplest fix: find where the mathematical expression ends and add `\)` there
        # Mathematical content typically ends with patterns like:
        # - variable name ending (e.g., \(\theta\), \(\vec{F}\)
        # - brackets closing (e.g., \([F_x, F_y, F_z]\))
        # - number ending (e.g., \(\sqrt{2}+3)\)

        # For now, let's just add `\)` before the match that follows
        return match.group(0)

    # Actually, let me use a different approach:
    # Find all `\(X` patterns where X is mathematical content, and add `\)` at the appropriate boundaries

    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Process each line to fix inline math
        new_line = line

        # Pattern: \( followed by math content, then something that should be outside the math
        # Fix: Add \) before that something

        # Common patterns to fix:

        # 1. \(something space word - fix to \(something\) space word
        new_line = re.sub(r'(\\\(.*?)([ \t]+[a-zA-Z])', r'\1\\\)\2', new_line)

        # 2. \(something punctuation - fix to \(something\) punctuation
        new_line = re.sub(r'(\\\(.*?)([.,:;)\]\}])', r'\1\\\)\2', new_line)

        # 3. \(something at end of line without closing
        new_line = re.sub(r'(\\\(.*?)([ \t]*$)', r'\1\\\)\2', new_line)

        # 4. \(something opening delimiter \( - fix previous math
        new_line = re.sub(r'(\\\(.*?[^\\])(\)\\()', r'\1\\)\\2', new_line)

        # 5. Double \(\( - fix to \( one
        new_line = re.sub(r'(\\\(\\\(.*?\)\\\))', r'\\(\1\)\\)', new_line)

        fixed_lines.append(new_line)

    return '\n'.join(fixed_lines)

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    original = content
    content = fix_inline_math(content)

    if content != original:
        print(f"Fixed {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes needed: {filename}")