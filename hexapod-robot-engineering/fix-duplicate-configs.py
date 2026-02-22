#!/usr/bin/env python3
import glob
import re

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Find all occurrences and clean up - keep only ONE proper MathJax config
    # Pattern to find MathJax config blocks
    config_pattern = r'<script>\s+MathJax = \{\s*tex: \{\s*inlineMath: \[\[.*?\]\],\s*displayMath: \[\[.*?\]\]\s*\}\s*\};\s*</script>'

    # Find all matches
    matches = list(re.finditer(config_pattern, content, re.DOTALL))

    if len(matches) > 1:
        # Remove all but the FIRST occurrence
        # But first, check which one is proper (has \\(\\))
        for i, match in enumerate(matches):
            if '\\\\(' in match.group(0):  # This is the proper one with double backslash
                # Keep this one, remove others
                proper_match = match
                break
        else:
            # If none have double backslash, keep the first
            proper_match = matches[0]

        # Remove all other matches (working backwards to avoid index issues)
        for match in reversed(matches):
            if match != proper_match:
                content = content[:match.start()] + content[match.end():]

        with open(filename, 'w') as f:
            f.write(content)

        print(f"Fixed duplicates in {filename}")
    elif matches and "\\(\\)" in matches[0].group(0):
        print(f"Already clean: {filename}")
    elif matches:
        print(f"Found malformed config, fixing {filename}")
        # Fix the malformed config
        old_config = matches[0].group(0)
        new_config = old_config.replace("['\\\\('", "['\\\\(')").replace("')\\\\']", "[")  # This isn't quite right

        # Better: just replace malformed delimiters with proper ones
        content = content.replace("['\\(', '\\)']", "['\\\\(', '\\\\\\)']")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        # No config found - add it before the MathJax script load
        pass