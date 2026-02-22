#!/usr/bin/env python3

import glob

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Fix patterns like \( ... \)$$ → $$ ... $$
    import re
    content = re.sub(r'\\\( (.*?) \\\) \$\$', r'$$\1$$', content, flags=re.DOTALL)

    # Also fix any standalone \)\)$$ → $$ in display blocks
    content = re.sub(r'\\\)', '', content)  # Remove stray \)

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Fixed {filename}")