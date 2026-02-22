#!/usr/bin/env python3
import glob
import re

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Find inline math with missing closing delimiter
    # Pattern: \( followed by stuff, but no \) before end of tag or line

    lines = content.split('\n')
    issues = []

    for line_num, line in enumerate(lines, 1):
        # Count opening and closing delimiters
        opens = line.count('\\(')
        closes = line.count('\\)')

        if opens != closes:
            issues.append((line_num, opens, closes, line.strip()[:80]))

    if issues:
        print(f"\n{filename}:")
        for line_num, opens, closes, snippet in issues[:20]:
            print(f"  Line {line_num}: {opens} opening delimiters, {closes} closing")
            print(f"    {snippet}...")