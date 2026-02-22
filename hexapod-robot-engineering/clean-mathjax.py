#!/usr/bin/env python3
import glob

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Remove the malformed second MathJax config (the one that's indented with spaces)
    # It has single backslash delimiters which is wrong

    # Pattern to match and remove: the config with ['\(', '\)']
    lines = content.split('\n')
    cleaned_lines = []
    skip_next = False

    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue

        # Skip the malformed config block
        if "        <script>" in line and i+1 < len(lines) and "MathJax = {" in lines[i+1]:
            # Check if it's the malformed one (by looking ahead)
            if i+2 < len(lines) and "\\" in lines[i+2] and not "\\\\" in lines[i+2]:
                # This is the malformed one - skip until matching </script>
                for j in range(i, min(i+10, len(lines))):
                    if "</script>" in lines[j]:
                        skip_next = (j == i+1)
                        break
                continue

        cleaned_lines.append(line)

    content = '\n'.join(cleaned_lines)

    # Also remove the leading whitespace before the deleted second config
    content = content.replace('    <script>\n        <script>', '<script>')
    content = content.replace('    </script>\n        <script>', '</script>')

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Cleaned {filename}")