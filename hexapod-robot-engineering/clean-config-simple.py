#!/usr/bin/env python3
import glob
import re

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Remove the malformed duplicate MathJax config
    # It's the one with single-backslash delimiters: ['\(', '\)']
    content = re.sub(
        r'\s+<script>\s+MathJax = \{\s*tex: \{\s*inlineMath: \[\[\'\\(\', \'\\\)\'\]\],\s*displayMath: \[\[\'\$\$\', \'\$\$\'\], \[\'\\\[\', \'\\\]\'\]\]\s*\}\s*\};\s+</script>',
        '',
        content,
        flags=re.DOTALL
    )

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Cleaned {filename}")