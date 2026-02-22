#!/usr/bin/env python3
import glob

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    original = content

    # Fix common missing closing delimiter patterns
    # Each pattern finds \(math followed by something, and adds \) before it

    # Pattern 1: \(something space word - add \) before space
    # This is tricky because we don't want to over-match. Let me do line-by-line instead.

    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        new_line = line

        # For each line, find all \( occurrences and try to add \) before obvious boundaries

        # Simple approach: scan through and add \) at reasonable break points

        # Pattern: \(\vec{F} with -> \(\vec{F}\) with
        # Pattern: \(\sigma_y): -> \(\sigma_y\))
        # Pattern: \([F_x, F_y, F_z] measures -> \([F_x, F_y, F_z]\) measures

        # These specific replacements:
        new_line = new_line.replace('\\(\\vec{F} with', '\\(\\vec{F}\\) with')
        new_line = new_line.replace('\\(\\hat{i}, \\(\\hat{j}, \\(\\hat{k} are', '\\(\\hat{i}\\), \\(\\hat{j}\\), \\(\\hat{k}\\) are')
        new_line = new_line.replace('\\(\\sum \\vec{F} = \\vec{0} (net fo', '\\(\\sum \\vec{F} = \\vec{0}\\) (net fo')
        new_line = new_line.replace('\\(\\sum \\vec{\\tau} = \\vec{0} (net mo', '\\(\\sum \\vec{\\tau} = \\vec{0}\\) (net mo')
        new_line = new_line.replace('\\(N = 60/6 = 10 N (vertical upward)', '\\(N = 60/6 = 10 N\\) (vertical upward)')
        new_line = new_line.replace('\\(6 \\times 10 N up = 60 N, which balances gravity 60', '\\(6 \\times 10 N up = 60 N\\), which balances gravity 60')
        new_line = new_line.replace('\\(\\sum \\vec{F} = \\frac{d\\vec{p}}{dt}, where \\(\\vec{p} = m\\ve', '\\(\\sum \\vec{F} = \\frac{d\\vec{p}}{dt}\\), where \\(\\vec{p}\\) = m\\ve')

        fixed_lines.append(new_line)

    content = '\n'.join(fixed_lines)

    if content != original:
        print(f"Made changes to {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes to {filename}")