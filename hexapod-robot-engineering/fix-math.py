#!/usr/bin/env python3

import glob

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Strategy: Fix math-display blocks by converting \( ... \) to $$ ... $$
    # Keep inline \( ... \) as is

    # Find all math-display blocks and fix them
    import re

    # Pattern to match math-display div content
    def fix_math_display(match):
        inner = match.group(1)
        # Replace all \( ... \) with $$ ... $$ within the math-display block
        inner = re.sub(r'\\\((.*?)\\\)', r'$$\1$$', inner, flags=re.DOTALL)
        return '<div class="math-display">\n' + inner + '\n</div>'

    content = re.sub(r'<div class="math-display">\s*\n?(.*?)\n\s*</div>', fix_math_display, content, flags=re.DOTALL)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Fixed {filename}")