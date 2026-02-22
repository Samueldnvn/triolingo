#!/usr/bin/env python3
import glob
import re

def final_fix_inline_math(text):
    """Final comprehensive fix for inline math delimiters"""

    changes_made = True
    iterations = 0
    max_iterations = 50

    while changes_made and iterations < max_iterations:
        changes_made = False
        iterations += 1
        original = text

        # Fix \( followed by letter directly (missing space)
        # \(x should stay as \(x but \(x word should be \(x\) word
        for i in range(len(text) - 10):
            if text[i:i+2] == '\\(':
                # Find where this math expression might end
                # Look for: space+letter, punctuation, <, end of line
                for j in range(i+2, min(i+200, len(text))):
                    # Check for space followed by word
                    if j + 1 < len(text) and text[j] == ' ' and text[j+1].isalpha():
                        if ')\\' not in text[i:j]:
                            text = text[:j] + '\\)' + text[j:]
                            changes_made = True
                            break
                    # Check for punctuation
                    if text[j] in '.,:;)]:}':
                        if ')\\' not in text[i:j]:
                            text = text[:j] + '\\)' + text[j:]
                            changes_made = True
                            break
                    # Check for HTML tag
                    if j < len(text) - 1 and text[j:j+2] in ['< ', '<', '<']:
                        if ')\\' not in text[i:j]:
                            text = text[:j] + '\\)' + text[j:]
                            changes_made = True
                            break
                    # Check for end of line
                    if text[j] == '\n':
                        if ')\\' not in text[i:j]:
                            text = text[:j] + '\\)' + text[j:]
                            changes_made = True
                            break
                if changes_made:
                    break

        if not changes_made and text != original:
            changes_made = True

        # Clean up any double closing delimiters
        while '\\)\\)' in text:
            text = text.replace('\\)\\)', '\\)')

        # Clean up (\(  patterns
        text = re.sub(r'\((\\\()', r'\1', text)
        text = re.sub(r'\)(\\\()', r'): \1', text)
        text = re.sub(r'\\\)(\\\()', r'\\) \\(', text)

        # Fix pattern: \(\(word - remove the extra \(
        text = re.sub(r'\\\([^(][^)]*\\\)', r'', text)

    return text

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    original = content
    content = final_fix_inline_math(content)

    if content != original:
        print(f"Fixed {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes: {filename}")