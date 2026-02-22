#!/usr/bin/env python3
import glob
import re

# Clean up duplicate MathJax configs (remove the malformed one, keep proper one)
for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Remove duplicate MathJax blocks - keep the last one (the proper one)
    # Pattern to match duplicate
    lines = content.split('\n')
    cleaned_lines = []
    in_duplicate = False
    skipped_first = False

    for i, line in enumerate(lines):
        if '<script>' in line and 'MathJax' in lines[i+1] if i+1 < len(lines) else False:
            if not skipped_first and 'MathJax' in ''.join(lines[i-5:i+10]).count('MathJax') > 1:
                skipped_first = True
                continue

        cleaned_lines.append(line)

    content = '\n'.join(cleaned_lines)

    # Also fix any malformed inline math delimiters
    content = re.sub(r"\['\(','\)'\]", r"['\\(','\\)']", content)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Cleaned {filename}")