#!/usr/bin/env python3
import glob
import re

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    # Count MathJax configs before
    before_count = content.count('MathJax = {')

    # Remove any <script> blocks that:
    # - Contain MathJax config
    # - Have single-backslash delimiters ['\(', '\)']
    # This is the malformed duplicate

    # Split by </script> tags
    parts = content.split('</script>')
    cleaned_parts = []
    seen_config = False

    for i, part in enumerate(parts):
        # Check if this part contains a MathJax config
        if 'MathJax = {' in part:
            # Check if it has the malformed single-backslash pattern
            if "\\)" in part and "\\\\)" not in part and i > 0:
                # This is the malformed duplicate - skip it (don't add to cleaned parts)
                continue
            if not seen_config:
                # This is the first (proper) config - keep it
                cleaned_parts.append(part)
                seen_config = True
            else:
                # This is another duplicate - skip it
                continue
        else:
            # Not a MathJax config - keep it
            cleaned_parts.append(part)

    content = '</script>'.join(cleaned_parts)

    # Clean up any empty or whitespace-only lines that might be left
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

    # Count after
    after_count = content.count('MathJax = {')

    if before_count != after_count:
        print(f"Cleaned {filename}: {before_count} -> {after_count} configs")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"{filename}: already clean ({after_count} config[s])")