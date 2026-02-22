#!/usr/bin/env python3

import glob

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Fix broken inline math patterns
    import re

    # Pattern 1: \(...\[something\] and \(... - fix by splitting into proper inline
    content = re.sub(r'\\\( (.*?) \] and \\\( (.*?) \]', r'\\(\1\] and \2\\)', content)

    # Pattern 2: \(\θ with no closing - add closing
    content = re.sub(r'\\\(\\\\theta(?!\s*\\\))', r'\\(\\theta\\)', content)

    # Pattern 3: \$\([^)]+$ followed by some text - fix
    content = re.sub(r'\\\( ([A-Za-z_\}^\]]+?)(?<=[A-Za-z_\}^\]])\s+(?!\\)', r'\\(\1\\) ', content)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Fixed {filename}")