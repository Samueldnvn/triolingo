#!/usr/bin/env python3
import glob

def simple_replace_fix(text):
    """Use simple string replacements only"""
    fixed = text

    # Common patterns - simple replacements
    # Note: This is non-exhaustive but handles the most common issues

    replacements = [
        (r'\\(\\vec{F} with', r'\(\vec{F}\) with'),
        (r'\\(\\vec{F} about', r'\(\vec{F}\) about'),
        (r'\\(\\vec{r} re', r'\(\vec{r}\) re'),
        (r'\\(\\hat{i}, \\(\\hat{j}, \\(\\hat{k}', r'\(\hat{i}), \(\hat{j}), \(\hat{k)'),
        (r'\\(\\theta is', r'\(\theta\) is'),
        (r'\\(\\theta is the', r'\(\theta\) is the'),
        (r'\\(\\omega_n is', r'\(\omega_n\) is'),
        (r'\\(\\rho):<', r'\(\rho\)</):'),
        (r'\\(\\sigma_e)</', r'\(\sigma_e)</'),
        (r'\\(\\sigma_y):<', r'\(\sigma_y\)):<'),
        (r'\\(\\sigma_{UTS}):<', r'\(\sigma_{UTS}\)):<'),
        (r'\\(\\sigma_f):<', r'\(\sigma_f\)):<'),
        (r'\\(E = \\sigma/\\varepsilon (stiffness)', r'\(E = \sigma/\varepsilon\) (stiffness)'),
        (r'\\(\\varepsilon = \\Delta L/L', r'\(\varepsilon = \Delta L/L\)'),

        # Remove any double \)\)
        (r'\\)\\)， r'\)\\)'),
    ]

    for old, new in replacements:
        fixed = fixed.replace(old, new)

    return fixed

# Actually, let me just check Module 01 and rewrite everything else properly
# Starting with a simpler template-based approach

def get_correct_template():
    """Return the correct template from Module 01"""
    with open('lessons/01-foundations.html', 'r') as f:
        return f.read()

template = get_correct_template()

# Now I'll create proper versions of each module
# For now, let me just fix all the simple regex issues directly

print("Fixing file by file with systematic replacements...")