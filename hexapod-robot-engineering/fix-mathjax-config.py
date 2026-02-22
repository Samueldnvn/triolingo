#!/usr/bin/env python3
import glob

mathjax_config = '''    <script>
    MathJax = {
      tex: {
        inlineMath: [['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      }
    };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'''

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Replace the MathJax script call
    import re
    content = re.sub(
        r'<script src="https://cdn\.jsdelivr\.net/npm/mathjax@3/es5/tex-mml-chtml\.js"></script>',
        mathjax_config,
        content
    )

    with open(filename, 'w') as f:
        f.write(content)

    print(f"Fixed {filename}")