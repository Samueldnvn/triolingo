#!/usr/bin/env python3
"""
Build all 6 lessons for the Derivatives unit.
Creates comprehensive lessons with detailed explanations and questions.
"""

import json

lessons = {
    "courses": {
        "calculus": {
            "id": "calculus",
            "name": "Calculus",
            "units": [
                {
                    "id": 2,
                    "title": "Derivatives",
                    "lessons": [
                        # LESSON 1: Derivative Definition from Limits
                        {
                            "id": "2-1",
                            "title": "Derivative definition from limits",
                            "xp": 85,
                            "type": "lesson",
                            "lessonText": """# The Definition of the Derivative

The derivative measures the instantaneous rate of change of a function at a specific point, and geometrically represents the slope of the tangent line.

## Definition Using Limits

The derivative of a function f(x) at a point x = a is:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

This is the limit of the difference quotient as h approaches 0.

## Example: f(x) = x²

$$\\begin{aligned}
f'(x) &= \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h} \\\\
&= \\lim_{h \\to 0} \\frac{2xh + h^2}{h} \\\\
&= \\lim_{h \\to 0} (2x + h) = 2x
\\end{aligned}$$

## Notation

- f'(x) - Newton notation
- dy/dx - Leibniz notation
- d/dx[f(x)] - Operator notation""",
                            "questions": [
                                {"id": "calc_u2_l1_q1", "type": "typing", "question": "What is the definition of the derivative f'(a) using limits?", "correctAnswer": ["lim(h->0) (f(a+h)-f(a))/h", "limit as h approaches 0 of (f(a+h)-f(a))/h"], "explanation": "The derivative is f'(a) = lim(h→0) [f(a+h) - f(a)]/h", "xp": 5},
                                {"id": "calc_u2_l1_q2", "type": "typing", "question": "What geometric quantity does the derivative represent?", "correctAnswer": ["slope of the tangent line", "tangent line slope"], "explanation": "The derivative represents the slope of the tangent line.", "xp": 4},
                                {"id": "calc_u2_l1_q3", "type": "typing", "question": "Using the definition, what is the derivative of f(x) = 3x?", "correctAnswer": ["3"], "explanation": "f'(x) = lim(h→0) [3(x+h) - 3x]/h = lim(h→0) 3h/h = 3", "xp": 5},
                                {"id": "calc_u2_l1_q4", "type": "typing", "question": "What is the limit definition expression called?", "correctAnswer": ["difference quotient"], "explanation": "The expression [f(a+h) - f(a)]/h is the difference quotient.", "xp": 4},
                                {"id": "calc_u2_l1_q5", "type": "typing", "question": "What is f'(2) if f(x) = x³?", "correctAnswer": ["12"], "explanation": "f'(x) = 3x², so f'(2) = 3(4) = 12", "xp": 5},
                                {"id": "calc_u2_l1_q6", "type": "multiple-choice", "question": "Which notation is NOT for first derivatives?", "options": ["f'(x)", "dy/dx", "d/dx[f(x)]", "d²y/dx²"], "correct": 3, "explanation": "d²y/dx² is second derivative notation.", "xp": 3},
                                {"id": "calc_u2_l1_q7", "type": "typing", "question": "What does f'(a) = 0 indicate?", "correctAnswer": ["horizontal tangent line", "horizontal tangent"], "explanation": "A derivative of 0 means a horizontal tangent line.", "xp": 4},
                                {"id": "calc_u2_l1_q8", "type": "typing", "question": "If s(t) is position, what is s'(t)?", "correctAnswer": ["velocity", "instantaneous velocity"], "explanation": "The derivative of position is velocity.", "xp": 4},
                                {"id": "calc_u2_l1_q9", "type": "typing", "question": "Derivative of f(x) = c (constant)?", "correctAnswer": ["0"], "explanation": "The derivative of any constant is 0.", "xp": 4},
                                {"id": "calc_u2_l1_q10", "type": "typing", "question": "Derivative of f(x) = x?", "correctAnswer": ["1"], "explanation": "f'(x) = lim(h→0) [(x+h)-x]/h = lim(h→0) h/h = 1", "xp": 4},
                                {"id": "calc_u2_l1_q11", "type": "typing", "question": "If f'(a) > 0, function is ___ at x = a", "correctAnswer": ["increasing"], "explanation": "Positive derivative means increasing.", "xp": 4},
                                {"id": "calc_u2_l1_q12", "type": "multiple-choice", "question": "In difference quotient, h represents:", "options": ["change in x", "change in y", "slope", "function value"], "correct": 0, "explanation": "h is the change in x (horizontal distance).", "xp": 3},
                                {"id": "calc_u2_l1_q13", "type": "typing", "question": "Derivative of f(x) = x² at x = 3?", "correctAnswer": ["6"], "explanation": "f'(x) = 2x, so f'(3) = 6", "xp": 5},
                                {"id": "calc_u2_l1_q14", "type": "typing", "question": "Leibniz notation for derivative?", "correctAnswer": ["dy/dx"], "explanation": "dy/dx is Leibniz notation for the derivative.", "xp": 4},
                                {"id": "calc_u2_l1_q15", "type": "typing", "question": "Derivative of 1/x?", "correctAnswer": ["-1/x^2", "-1/x²"], "explanation": "d/dx(x^(-1)) = -x^(-2) = -1/x²", "xp": 5},
                                {"id": "calc_u2_l1_q16", "type": "typing", "question": "If s(t) is position, s''(t) is?", "correctAnswer": ["acceleration"], "explanation": "Second derivative of position is acceleration.", "xp": 4},
                                {"id": "calc_u2_l1_q17", "type": "multiple-choice", "question": "Difference quotient represents slope of:", "options": ["tangent line", "secant line", "curve", "x-axis"], "correct": 1, "explanation": "It's the slope of the secant line (approaching tangent as h→0).", "xp": 3},
                                {"id": "calc_u2_l1_q18", "type": "typing", "question": "Derivative of f(x) = 5x + 2?", "correctAnswer": ["5"], "explanation": "d/dx(5x) = 5, derivative of constant 2 is 0", "xp": 5}
                            ]
                        },
                        # LESSON 2: Power, Sum, and Constant Rules
                        {
                            "id": "2-2",
                            "title": "Power, sum, and constant rules",
                            "xp": 80,
                            "type": "lesson",
                            "lessonText": """# Power, Sum, and Constant Rules

These are the fundamental differentiation rules that make finding derivatives much easier than using the limit definition.

## Power Rule

For any real number n:

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

This rule works for:
- Positive integers: x³ → 3x²
- Negative integers: x^(-2) → -2x^(-3) = -2/x³
- Fractions: x^(1/2) = √x → (1/2)x^(-1/2) = 1/(2√x)

## Examples of Power Rule

$$\\begin{aligned}
\\frac{d}{dx}[x^5] &= 5x^4 \\\\
\\frac{d}{dx}[x^{10}] &= 10x^9 \\\\
\\frac{d}{dx}[x^{-3}] &= -3x^{-4} = -\\frac{3}{x^4} \\\\
\\frac{d}{dx}[\\sqrt{x}] &= \\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}
\\end{aligned}$$

## Constant Multiple Rule

If c is a constant:

$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$

Example: d/dx[5x²] = 5(2x) = 10x

## Sum Rule

$$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

The derivative of a sum is the sum of the derivatives.

## Difference Rule

$$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

The derivative of a difference is the difference of the derivatives.

## Combined Examples

$$\\begin{aligned}
\\frac{d}{dx}[3x^4 + 2x^2 - 5] &= 12x^3 + 4x + 0 = 12x^3 + 4x \\\\
\\frac{d}{dx}[x^5 - 7x^2 + 3x] &= 5x^4 - 14x + 3 \\\\
\\frac{d}{dx}[4x^3 - x^{-2} + 2] &= 12x^2 + 2x^{-3} + 0 = 12x^2 + \\frac{2}{x^3}
\\end{aligned}$$""",
                            "questions": [
                                {"id": "calc_u2_l2_q1", "type": "typing", "question": "What is the power rule formula?", "correctAnswer": ["d/dx[x^n] = nx^(n-1)", "nx^(n-1)"], "explanation": "The power rule is d/dx[x^n] = nx^(n-1)", "xp": 5},
                                {"id": "calc_u2_l2_q2", "type": "typing", "question": "Derivative of x^7?", "correctAnswer": ["7x^6"], "explanation": "d/dx[x^7] = 7x^(7-1) = 7x^6", "xp": 5},
                                {"id": "calc_u2_l2_q3", "type": "typing", "question": "Derivative of x^(-3)?", "correctAnswer": ["-3x^(-4)", "-3/x^4"], "explanation": "d/dx[x^(-3)] = -3x^(-3-1) = -3x^(-4)", "xp": 5},
                                {"id": "calc_u2_l2_q4", "type": "typing", "question": "Derivative of √x?", "correctAnswer": ["1/(2√x)", "1/(2x^(1/2))"], "explanation": "d/dx[x^(1/2)] = (1/2)x^(-1/2) = 1/(2√x)", "xp": 5},
                                {"id": "calc_u2_l2_q5", "type": "typing", "question": "Derivative of 3x^4?", "correctAnswer": ["12x^3"], "explanation": "d/dx[3x^4] = 3(4x^3) = 12x^3", "xp": 5},
                                {"id": "calc_u2_l2_q6", "type": "multiple-choice", "question": "Sum rule states:", "options": ["derivative of sum = sum of derivatives", "derivative of product = sum of derivatives", "derivative of sum = product of derivatives", "sum of derivatives = derivative of sum"], "correct": 0, "explanation": "The sum rule: d/dx[f+g] = f' + g'", "xp": 3},
                                {"id": "calc_u2_l2_q7", "type": "typing", "question": "Derivative of x^5 + 3x^2?", "correctAnswer": ["5x^4 + 6x"], "explanation": "d/dx[x^5] = 5x^4, d/dx[3x^2] = 6x", "xp": 5},
                                {"id": "calc_u2_l2_q8", "type": "typing", "question": "Derivative of 2x^3 - 5x?", "correctAnswer": ["6x^2 - 5"], "explanation": "d/dx[2x^3] = 6x^2, d/dx[5x] = 5", "xp": 5},
                                {"id": "calc_u2_l2_q9", "type": "typing", "question": "Derivative of constant 7?", "correctAnswer": ["0"], "explanation": "Derivative of any constant is 0.", "xp": 4},
                                {"id": "calc_u2_l2_q10", "type": "multiple-choice", "question": "Derivative of x^0 is:", "options": ["0", "1", "x", "undefined"], "correct": 0, "explanation": "x^0 = 1, derivative of constant 1 is 0", "xp": 3},
                                {"id": "calc_u2_l2_q11", "type": "typing", "question": "Derivative of x^(1/3)?", "correctAnswer": ["(1/3)x^(-2/3)", "1/(3x^(2/3))"], "explanation": "d/dx[x^(1/3)] = (1/3)x^(1/3-1) = (1/3)x^(-2/3)", "xp": 5},
                                {"id": "calc_u2_l2_q12", "type": "typing", "question": "Derivative of 5x^2 + 2x - 1?", "correctAnswer": ["10x + 2"], "explanation": "10x + 2 + 0 = 10x + 2", "xp": 5},
                                {"id": "calc_u2_l2_q13", "type": "typing", "question": "Derivative of x^10 at x = 1?", "correctAnswer": ["10"], "explanation": "d/dx[x^10] = 10x^9, at x=1: 10(1)^9 = 10", "xp": 5},
                                {"id": "calc_u2_l2_q14", "type": "multiple-choice", "question": "If f(x) = 4x^3 + x, f'(0) = ?", "options": ["0", "1", "4", "5"], "correct": 1, "explanation": "f'(x) = 12x^2 + 1, f'(0) = 0 + 1 = 1", "xp": 4},
                                {"id": "calc_u2_l2_q15", "type": "typing", "question": "Derivative of 1/x^5?", "correctAnswer": ["-5/x^6", "-5x^(-6)"], "explanation": "d/dx[x^(-5)] = -5x^(-6) = -5/x^6", "xp": 5},
                                {"id": "calc_u2_l2_q16", "type": "typing", "question": "Derivative of x^(3/2)?", "correctAnswer": ["(3/2)x^(1/2)", "(3/2)√x"], "explanation": "d/dx[x^(3/2)] = (3/2)x^(3/2-1) = (3/2)x^(1/2)", "xp": 5},
                                {"id": "calc_u2_l2_q17", "type": "multiple-choice", "question": "Constant multiple rule:", "options": ["d/dx[cf] = c·f'", "d/dx[cf] = f'", "d/dx[cf] = c + f'", "d/dx[cf] = cf"], "correct": 0, "explanation": "The constant can be factored out: d/dx[cf] = c·f'", "xp": 3},
                                {"id": "calc_u2_l2_q18", "type": "typing", "question": "Derivative of 7x^4 - 2x^2 + 5x - 3?", "correctAnswer": ["28x^3 - 4x + 5"], "explanation": "28x^3 - 4x + 5 - 0 = 28x^3 - 4x + 5", "xp": 5}
                            ]
                        },
                        # LESSON 3: Product and Quotient Rules
                        {
                            "id": "2-3",
                            "title": "Product and quotient rules",
                            "xp": 90,
                            "type": "lesson",
                            "lessonText": """# Product and Quotient Rules

When differentiating products and quotients, we can't just differentiate each term separately. We need special rules.

## Product Rule

For two functions f(x) and g(x):

$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

Mnemonic: \"left d-right + right d-left\"

### Example: f(x) = x² · sin(x)

$$\\begin{aligned}
f'(x) &= \\frac{d}{dx}[x^2] \\cdot \\sin(x) + x^2 \\cdot \\frac{d}{dx}[\\sin(x)] \\\\
&= 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x) \\\\
&= 2x\\sin(x) + x^2\\cos(x)
\\end{aligned}$$

## Quotient Rule

For two functions f(x) (numerator) and g(x) (denominator):

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

Mnemonic: \"low d-high minus high d-low, over low²\"

### Example: f(x) = x / (x + 1)

$$\\begin{aligned}
f'(x) &= \\frac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} \\\\
&= \\frac{x + 1 - x}{(x+1)^2} \\\\
&= \\frac{1}{(x+1)^2}
\\end{aligned}$$

## Special Cases

### Derivative of 1/g(x)

Using the quotient rule with f(x) = 1:

$$\\frac{d}{dx}\\left[\\frac{1}{g(x)}\\right] = \\frac{0 \\cdot g(x) - 1 \\cdot g'(x)}{[g(x)]^2} = -\\frac{g'(x)}{[g(x)]^2}$$

Example: d/dx[1/x²] = -2x/x⁴ = -2/x³""",
                            "questions": [
                                {"id": "calc_u2_l3_q1", "type": "typing", "question": "Product rule formula?", "correctAnswer": ["f'g + fg'", "d/dx[fg] = f'g + fg'"], "explanation": "The product rule: d/dx[fg] = f'g + fg'", "xp": 5},
                                {"id": "calc_u2_l3_q2", "type": "typing", "question": "Quotient rule denominator is?", "correctAnswer": ["g(x)^2", "g^2", "denominator squared"], "explanation": "The denominator is [g(x)]² (the square of the denominator)", "xp": 4},
                                {"id": "calc_u2_l3_q3", "type": "typing", "question": "Derivative of x · sin(x)?", "correctAnswer": ["sin(x) + xcos(x)", "sin(x) + x cos(x)"], "explanation": "1·sin(x) + x·cos(x) = sin(x) + xcos(x)", "xp": 5},
                                {"id": "calc_u2_l3_q4", "type": "typing", "question": "Derivative of x² · e^x?", "correctAnswer": ["2x e^x + x^2 e^x", "(2x + x^2)e^x"], "explanation": "2x·e^x + x²·e^x = (2x + x²)e^x", "xp": 5},
                                {"id": "calc_u2_l3_q5", "type": "typing", "question": "Derivative of x / (x+1)?", "correctAnswer": ["1/(x+1)^2"], "explanation": "(1·(x+1) - x·1)/(x+1)² = 1/(x+1)²", "xp": 5},
                                {"id": "calc_u2_l3_q6", "type": "multiple-choice", "question": "Derivative of 1/x is:", "options": ["-1/x²", "1/x²", "-1/x", "1/x"], "correct": 0, "explanation": "d/dx[x^(-1)] = -1x^(-2) = -1/x²", "xp": 3},
                                {"id": "calc_u2_l3_q7", "type": "typing", "question": "Derivative of (x²+1) · cos(x)?", "correctAnswer": ["2x cos(x) - (x^2+1)sin(x)", "2xcos(x) - (x²+1)sin(x)"], "explanation": "2x·cos(x) + (x²+1)·(-sin(x)) = 2xcos(x) - (x²+1)sin(x)", "xp": 5},
                                {"id": "calc_u2_l3_q8", "type": "typing", "question": "Derivative of sin(x)/x?", "correctAnswer": ["(xcos(x) - sin(x))/x^2"], "explanation": "(cos(x)·x - sin(x)·1)/x² = (xcos(x) - sin(x))/x²", "xp": 5},
                                {"id": "calc_u2_l3_q9", "type": "typing", "question": "Derivative of x³ · ln(x)?", "correctAnswer": ["3x^2 ln(x) + x^2"], "explanation": "3x²·ln(x) + x³·(1/x) = 3x²ln(x) + x²", "xp": 5},
                                {"id": "calc_u2_l3_q10", "type": "multiple-choice", "question": "Product of two functions requires:", "options": ["product rule", "power rule", "sum rule", "chain rule"], "correct": 0, "explanation": "Products require the product rule: f'g + fg'", "xp": 3},
                                {"id": "calc_u2_l3_q11", "type": "typing", "question": "Derivative of (x+1)/(x-1)?", "correctAnswer": ["-2/(x-1)^2"], "explanation": "(1·(x-1) - (x+1)·1)/(x-1)² = -2/(x-1)²", "xp": 5},
                                {"id": "calc_u2_l3_q12", "type": "typing", "question": "Derivative of x · x³?", "correctAnswer": ["4x^3"], "explanation": "1·x³ + x·3x² = x³ + 3x³ = 4x³", "xp": 5},
                                {"id": "calc_u2_l3_q13", "type": "typing", "question": "Derivative of 1/(x²+1)?", "correctAnswer": ["-2x/(x^2+1)^2"], "explanation": "-2x/(x²+1)²", "xp": 5},
                                {"id": "calc_u2_l3_q14", "type": "multiple-choice", "question": "Derivative of f/g = ?", "options": ["(f'g - fg')/g²", "(fg' - f'g)/g²", "(f'g + fg')/g²", "(fg' + f'g)/g²"], "correct": 0, "explanation": "Quotient rule: (f'g - fg')/g²", "xp": 3},
                                {"id": "calc_u2_l3_q15", "type": "typing", "question": "Derivative of (2x+3)·(x-1)?", "correctAnswer": ["4x + 1"], "explanation": "2·(x-1) + (2x+3)·1 = 2x-2 + 2x+3 = 4x+1", "xp": 5},
                                {"id": "calc_u2_l3_q16", "type": "typing", "question": "Derivative of 1/x³?", "correctAnswer": ["-3/x^4"], "explanation": "d/dx[x^(-3)] = -3x^(-4) = -3/x⁴", "xp": 5},
                                {"id": "calc_u2_l3_q17", "type": "typing", "question": "Derivative of x²/(x+2)?", "correctAnswer": ["(2x(x+2) - x^2)/(x+2)^2"], "explanation": "(2x(x+2) - x²)/(x+2)²", "xp": 5},
                                {"id": "calc_u2_l3_q18", "type": "multiple-choice", "question": "Derivative of constant/function uses:", "options": ["quotient rule", "product rule", "chain rule", "power rule"], "correct": 0, "explanation": "Constants over functions use quotient rule: (0·g - 1·g')/g² = -g'/g²", "xp": 3}
                            ]
                        },
                        # LESSON 4: Chain Rule
                        {
                            "id": "2-4",
                            "title": "Chain rule",
                            "xp": 85,
                            "type": "lesson",
                            "lessonText": """# The Chain Rule

The chain rule is used to differentiate composite functions - functions within functions.

## Chain Rule Formula

For a composite function f(g(x)):

$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

Or using Leibniz notation:

$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

## Understanding the Chain Rule

Think of it as differentiating from the outside in:
1. Differentiate the outer function (keeping the inner function unchanged)
2. Multiply by the derivative of the inner function

## Examples

### Example 1: f(x) = (3x + 1)²

Outer: u², Inner: u = 3x + 1

$$\\begin{aligned}
f'(x) &= 2(3x + 1)^1 \\cdot \\frac{d}{dx}[3x + 1] \\\\
&= 2(3x + 1) \\cdot 3 \\\\
&= 6(3x + 1)
\\end{aligned}$$

### Example 2: f(x) = sin(x²)

Outer: sin(u), Inner: u = x²

$$\\begin{aligned}
f'(x) &= \\cos(x^2) \\cdot \\frac{d}{dx}[x^2] \\\\
&= \\cos(x^2) \\cdot 2x \\\\
&= 2x\\cos(x^2)
\\end{aligned}$$

### Example 3: f(x) = e^(5x)

Outer: e^u, Inner: u = 5x

$$\\begin{aligned}
f'(x) &= e^{5x} \\cdot \\frac{d}{dx}[5x] \\\\
&= e^{5x} \\cdot 5 \\\\
&= 5e^{5x}
\\end{aligned}$$

## Multiple Applications

Sometimes you need to apply the chain rule multiple times:

f(x) = sin(e^(x²))

- Outermost: sin(u)
- Middle: e^v
- Innermost: v = x²

$$f'(x) = \\cos(e^{x^2}) \\cdot e^{x^2} \\cdot 2x$$""",
                            "questions": [
                                {"id": "calc_u2_l4_q1", "type": "typing", "question": "Chain rule formula?", "correctAnswer": ["f'(g(x))g'(x)", "dy/dx = dy/du * du/dx", "f'(g(x)) * g'(x)"], "explanation": "Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)", "xp": 5},
                                {"id": "calc_u2_l4_q2", "type": "typing", "question": "Derivative of (2x+1)³?", "correctAnswer": ["6(2x+1)^2"], "explanation": "3(2x+1)² · 2 = 6(2x+1)²", "xp": 5},
                                {"id": "calc_u2_l4_q3", "type": "typing", "question": "Derivative of sin(3x)?", "correctAnswer": ["3cos(3x)"], "explanation": "cos(3x) · 3 = 3cos(3x)", "xp": 5},
                                {"id": "calc_u2_l4_q4", "type": "typing", "question": "Derivative of e^(4x)?", "correctAnswer": ["4e^(4x)"], "explanation": "e^(4x) · 4 = 4e^(4x)", "xp": 5},
                                {"id": "calc_u2_l4_q5", "type": "typing", "question": "Derivative of cos(x²)?", "correctAnswer": ["-2xsin(x^2)", "-2xsin(x²)"], "explanation": "-sin(x²) · 2x = -2xsin(x²)", "xp": 5},
                                {"id": "calc_u2_l4_q6", "type": "multiple-choice", "question": "Chain rule applies to:", "options": ["composite functions", "sum of functions", "product of functions", "constant functions"], "correct": 0, "explanation": "Chain rule is for composite functions (functions within functions)", "xp": 3},
                                {"id": "calc_u2_l4_q7", "type": "typing", "question": "Derivative of (x²+1)^5?", "correctAnswer": ["10x(x^2+1)^4"], "explanation": "5(x²+1)⁴ · 2x = 10x(x²+1)⁴", "xp": 5},
                                {"id": "calc_u2_l4_q8", "type": "typing", "question": "Derivative of ln(5x)?", "correctAnswer": ["1/x"], "explanation": "(1/(5x)) · 5 = 5/5x = 1/x", "xp": 5},
                                {"id": "calc_u2_l4_q9", "type": "typing", "question": "Derivative of √(x+1)?", "correctAnswer": ["1/(2√(x+1))"], "explanation": "(1/2)(x+1)^(-1/2) · 1 = 1/(2√(x+1))", "xp": 5},
                                {"id": "calc_u2_l4_q10", "type": "multiple-choice", "question": "Derivative of (3x)^2 is:", "options": ["18x", "6x", "9x", "3x"], "correct": 0, "explanation": "2(3x) · 3 = 6(3x) = 18x", "xp": 4},
                                {"id": "calc_u2_l4_q11", "type": "typing", "question": "Derivative of e^(x³)?", "correctAnswer": ["3x^2 e^(x^3)", "3x²e^(x³)"], "explanation": "e^(x³) · 3x² = 3x²e^(x³)", "xp": 5},
                                {"id": "calc_u2_l4_q12", "type": "typing", "question": "Derivative of sin(cos(x))?", "correctAnswer": ["-sin(x)cos(cos(x))"], "explanation": "cos(cos(x)) · (-sin(x)) = -sin(x)cos(cos(x))", "xp": 5},
                                {"id": "calc_u2_l4_q13", "type": "typing", "question": "Derivative of 1/(x+1)²?", "correctAnswer": ["-2/(x+1)^3"], "explanation": "-2(x+1)^(-3) · 1 = -2/(x+1)³", "xp": 5},
                                {"id": "calc_u2_l4_q14", "type": "multiple-choice", "question": "Chain rule works with:", "options": ["power, trig, exponential, log", "only power functions", "only trig functions", "only linear functions"], "correct": 0, "explanation": "Chain rule works with all types of functions: power, trig, exponential, logarithmic", "xp": 3},
                                {"id": "calc_u2_l4_q15", "type": "typing", "question": "Derivative of (x²)³?", "correctAnswer": ["6x^5"], "explanation": "3(x²)² · 2x = 3x⁴ · 2x = 6x⁵", "xp": 5},
                                {"id": "calc_u2_l4_q16", "type": "typing", "question": "Derivative of ln(x²)?", "correctAnswer": ["2/x"], "explanation": "(1/x²) · 2x = 2x/x² = 2/x", "xp": 5},
                                {"id": "calc_u2_l4_q17", "type": "multiple-choice", "question": "To apply chain rule:", "options": ["differentiate outside, then inside", "differentiate inside, then outside", "differentiate both at once", "use product rule"], "correct": 0, "explanation": "Chain rule: differentiate outer function first, then multiply by derivative of inner", "xp": 3},
                                {"id": "calc_u2_l4_q18", "type": "typing", "question": "Derivative of tan(2x)?", "correctAnswer": ["2sec^2(2x)", "2sec²(2x)"], "explanation": "sec²(2x) · 2 = 2sec²(2x)", "xp": 5}
                            ]
                        },
                        # LESSON 5: Exponential and Logarithmic Functions
                        {
                            "id": "2-5",
                            "title": "Derivatives of exponential and logarithmic functions",
                            "xp": 80,
                            "type": "lesson",
                            "lessonText": """# Derivatives of Exponential and Logarithmic Functions

## Natural Exponential Function

$$\\frac{d}{dx}[e^x] = e^x$$

The exponential function e^x is unique - its derivative is itself!

### With Chain Rule

$$\\frac{d}{dx}[e^{f(x)}] = e^{f(x)} \\cdot f'(x)$$

Example: d/dx[e^(3x²)] = e^(3x²) · 6x = 6xe^(3x²)

## Exponential Functions with Other Bases

$$\\frac{d}{dx}[a^x] = a^x \\ln(a)$$

Example: d/dx[2^x] = 2^x ln(2)

### With Chain Rule

$$\\frac{d}{dx}[a^{f(x)}] = a^{f(x)} \\ln(a) \\cdot f'(x)$$

## Natural Logarithmic Function

$$\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}$$

### With Chain Rule

$$\\frac{d}{dx}[\\ln(f(x))] = \\frac{f'(x)}{f(x)}$$

Example: d/dx[ln(3x²+1)] = (6x)/(3x²+1)

## Logarithmic Functions with Other Bases

$$\\frac{d}{dx}[\\log_a(x)] = \\frac{1}{x \\ln(a)}$$

Example: d/dx[log₂(x)] = 1/(x ln(2))

## Examples

$$\\begin{aligned}
\\frac{d}{dx}[e^{5x}] &= e^{5x} \\cdot 5 = 5e^{5x} \\\\
\\frac{d}{dx}[\\ln(x^2)] &= \\frac{2x}{x^2} = \\frac{2}{x} \\\\
\\frac{d}{dx}[3^x] &= 3^x \\ln(3) \\\\
\\frac{d}{dx}[e^{\\sin(x)}] &= e^{\\sin(x)} \\cos(x) \\\\
\\frac{d}{dx}[\\ln(\\cos(x))] &= \\frac{-\\sin(x)}{\\cos(x)} = -\\tan(x)
\\end{aligned}$$""",
                            "questions": [
                                {"id": "calc_u2_l5_q1", "type": "typing", "question": "Derivative of e^x?", "correctAnswer": ["e^x"], "explanation": "d/dx[e^x] = e^x (it's its own derivative!)", "xp": 4},
                                {"id": "calc_u2_l5_q2", "type": "typing", "question": "Derivative of ln(x)?", "correctAnswer": ["1/x"], "explanation": "d/dx[ln(x)] = 1/x", "xp": 4},
                                {"id": "calc_u2_l5_q3", "type": "typing", "question": "Derivative of e^(3x)?", "correctAnswer": ["3e^(3x)"], "explanation": "e^(3x) · 3 = 3e^(3x)", "xp": 5},
                                {"id": "calc_u2_l5_q4", "type": "typing", "question": "Derivative of 2^x?", "correctAnswer": ["2^x ln(2)"], "explanation": "d/dx[a^x] = a^x ln(a), so d/dx[2^x] = 2^x ln(2)", "xp": 5},
                                {"id": "calc_u2_l5_q5", "type": "typing", "question": "Derivative of ln(2x)?", "correctAnswer": ["1/x"], "explanation": "(1/(2x)) · 2 = 2/2x = 1/x", "xp": 5},
                                {"id": "calc_u2_l5_q6", "type": "multiple-choice", "question": "Derivative of e^(5x²) is:", "options": ["10xe^(5x²)", "e^(5x²)", "5e^(5x²)", "5x²e^(5x²)"], "correct": 0, "explanation": "e^(5x²) · 10x = 10xe^(5x²)", "xp": 4},
                                {"id": "calc_u2_l5_q7", "type": "typing", "question": "Derivative of ln(x²+1)?", "correctAnswer": ["2x/(x^2+1)", "2x/(x²+1)"], "explanation": "(2x)/(x²+1)", "xp": 5},
                                {"id": "calc_u2_l5_q8", "type": "typing", "question": "Derivative of e^(sin(x))?", "correctAnswer": ["cos(x) e^(sin(x))", "e^(sin(x)) cos(x)"], "explanation": "e^(sin(x)) · cos(x)", "xp": 5},
                                {"id": "calc_u2_l5_q9", "type": "typing", "question": "Derivative of ln(cos(x))?", "correctAnswer": ["-tan(x)", "-sin(x)/cos(x)"], "explanation": "-sin(x)/cos(x) = -tan(x)", "xp": 5},
                                {"id": "calc_u2_l5_q10", "type": "multiple-choice", "question": "Derivative of a^x uses:", "options": ["natural log of base", "base", "exponent", "constant"], "correct": 0, "explanation": "d/dx[a^x] = a^x ln(a) - uses natural log of the base", "xp": 3},
                                {"id": "calc_u2_l5_q11", "type": "typing", "question": "Derivative of 10^x?", "correctAnswer": ["10^x ln(10)"], "explanation": "d/dx[10^x] = 10^x ln(10)", "xp": 5},
                                {"id": "calc_u2_l5_q12", "type": "typing", "question": "Derivative of e^(-x)?", "correctAnswer": ["-e^(-x)"], "explanation": "e^(-x) · (-1) = -e^(-x)", "xp": 5},
                                {"id": "calc_u2_l5_q13", "type": "typing", "question": "Derivative of ln(e^x)?", "correctAnswer": ["1"], "explanation": "(1/e^x) · e^x = 1", "xp": 5},
                                {"id": "calc_u2_l5_q14", "type": "multiple-choice", "question": "Derivative of ln(x³) is:", "options": ["3/x", "1/x³", "3x²", "1/x"], "correct": 0, "explanation": "(3x²)/x³ = 3/x", "xp": 4},
                                {"id": "calc_u2_l5_q15", "type": "typing", "question": "Derivative of 3e^x?", "correctAnswer": ["3e^x"], "explanation": "3 · e^x = 3e^x (constant multiple rule)", "xp": 5},
                                {"id": "calc_u2_l5_q16", "type": "typing", "question": "Derivative of ln(1/x)?", "correctAnswer": ["-1/x"], "explanation": "(-1/x²)/(1/x) = -1/x² · x = -1/x", "xp": 5},
                                {"id": "calc_u2_l5_q17", "type": "multiple-choice", "question": "What is unique about e^x?", "options": ["derivative equals itself", "derivative is 0", "derivative is x", "no derivative"], "correct": 0, "explanation": "e^x is unique because d/dx[e^x] = e^x", "xp": 3},
                                {"id": "calc_u2_l5_q18", "type": "typing", "question": "Derivative of log_5(x)?", "correctAnswer": ["1/(x ln(5))", "1/(xln5)"], "explanation": "d/dx[log_a(x)] = 1/(x ln(a))", "xp": 5}
                            ]
                        },
                        # LESSON 6: Trigonometric and Inverse Trigonometric Functions
                        {
                            "id": "2-6",
                            "title": "Derivatives of trigonometric and inverse trig functions",
                            "xp": 90,
                            "type": "lesson",
                            "lessonText": """# Derivatives of Trigonometric Functions

## Basic Trigonometric Derivatives

$$\\begin{aligned}
\\frac{d}{dx}[\\sin(x)] &= \\cos(x) \\\\
\\frac{d}{dx}[\\cos(x)] &= -\\sin(x) \\\\
\\frac{d}{dx}[\\tan(x)] &= \\sec^2(x) \\\\
\\frac{d}{dx}[\\csc(x)] &= -\\csc(x)\\cot(x) \\\\
\\frac{d}{dx}[\\sec(x)] &= \\sec(x)\\tan(x) \\\\
\\frac{d}{dx}[\\cot(x)] &= -\\csc^2(x)
\\end{aligned}$$

## With Chain Rule

$$\\begin{aligned}
\\frac{d}{dx}[\\sin(f(x))] &= \\cos(f(x)) \\cdot f'(x) \\\\
\\frac{d}{dx}[\\cos(f(x))] &= -\\sin(f(x)) \\cdot f'(x) \\\\
\\frac{d}{dx}[\\tan(f(x))] &= \\sec^2(f(x)) \\cdot f'(x)
\\end{aligned}$$

## Inverse Trigonometric Derivatives

$$\\begin{aligned}
\\frac{d}{dx}[\\arcsin(x)] &= \\frac{1}{\\sqrt{1 - x^2}} \\\\
\\frac{d}{dx}[\\arccos(x)] &= -\\frac{1}{\\sqrt{1 - x^2}} \\\\
\\frac{d}{dx}[\\arctan(x)] &= \\frac{1}{1 + x^2} \\\\
\\frac{d}{dx}[\\text{arccsc}(x)] &= -\\frac{1}{|x|\\sqrt{x^2 - 1}} \\\\
\\frac{d}{dx}[\\text{arcsec}(x)] &= \\frac{1}{|x|\\sqrt{x^2 - 1}} \\\\
\\frac{d}{dx}[\\text{arccot}(x)] &= -\\frac{1}{1 + x^2}
\\end{aligned}$$

## Examples

### Trig Examples

$$\\begin{aligned}
\\frac{d}{dx}[\\sin(3x)] &= \\cos(3x) \\cdot 3 = 3\\cos(3x) \\\\
\\frac{d}{dx}[\\cos(x^2)] &= -\\sin(x^2) \\cdot 2x = -2x\\sin(x^2) \\\\
\\frac{d}{dx}[\\tan(5x)] &= \\sec^2(5x) \\cdot 5 = 5\\sec^2(5x)
\\end{aligned}$$

### Inverse Trig Examples

$$\\begin{aligned}
\\frac{d}{dx}[\\arcsin(2x)] &= \\frac{2}{\\sqrt{1 - (2x)^2}} = \\frac{2}{\\sqrt{1 - 4x^2}} \\\\
\\frac{d}{dx}[\\arctan(3x)] &= \\frac{3}{1 + (3x)^2} = \\frac{3}{1 + 9x^2} \\\\
\\frac{d}{dx}[\\arccos(x^2)] &= -\\frac{2x}{\\sqrt{1 - x^4}}
\\end{aligned}$$

## Memory Aids

**Basic Trig:** 
- sin → cos (positive)
- cos → -sin (negative)
- tan → sec²

**Inverse Trig:**
- arcsin → +1/√(1-x²)
- arccos → -1/√(1-x²)
- arctan → +1/(1+x²)""",
                            "questions": [
                                {"id": "calc_u2_l6_q1", "type": "typing", "question": "Derivative of sin(x)?", "correctAnswer": ["cos(x)"], "explanation": "d/dx[sin(x)] = cos(x)", "xp": 4},
                                {"id": "calc_u2_l6_q2", "type": "typing", "question": "Derivative of cos(x)?", "correctAnswer": ["-sin(x)"], "explanation": "d/dx[cos(x)] = -sin(x)", "xp": 4},
                                {"id": "calc_u2_l6_q3", "type": "typing", "question": "Derivative of tan(x)?", "correctAnswer": ["sec^2(x)", "sec²(x)"], "explanation": "d/dx[tan(x)] = sec²(x)", "xp": 4},
                                {"id": "calc_u2_l6_q4", "type": "typing", "question": "Derivative of sin(2x)?", "correctAnswer": ["2cos(2x)"], "explanation": "cos(2x) · 2 = 2cos(2x)", "xp": 5},
                                {"id": "calc_u2_l6_q5", "type": "typing", "question": "Derivative of arcsin(x)?", "correctAnswer": ["1/√(1-x^2)", "1/√(1-x²)"], "explanation": "d/dx[arcsin(x)] = 1/√(1-x²)", "xp": 5},
                                {"id": "calc_u2_l6_q6", "type": "multiple-choice", "question": "Derivative of arccos(x) is:", "options": ["-1/√(1-x²)", "1/√(1-x²)", "-1/(1+x²)", "1/(1+x²)"], "correct": 0, "explanation": "d/dx[arccos(x)] = -1/√(1-x²) (negative of arcsin)", "xp": 4},
                                {"id": "calc_u2_l6_q7", "type": "typing", "question": "Derivative of arctan(x)?", "correctAnswer": ["1/(1+x^2)", "1/(1+x²)"], "explanation": "d/dx[arctan(x)] = 1/(1+x²)", "xp": 5},
                                {"id": "calc_u2_l6_q8", "type": "typing", "question": "Derivative of sec(x)?", "correctAnswer": ["sec(x)tan(x)", "sec(x)tan(x)"], "explanation": "d/dx[sec(x)] = sec(x)tan(x)", "xp": 5},
                                {"id": "calc_u2_l6_q9", "type": "typing", "question": "Derivative of csc(x)?", "correctAnswer": ["-csc(x)cot(x)", "-csc(x)cot(x)"], "explanation": "d/dx[csc(x)] = -csc(x)cot(x)", "xp": 5},
                                {"id": "calc_u2_l6_q10", "type": "multiple-choice", "question": "Derivative of cos(3x) is:", "options": ["-3sin(3x)", "3sin(3x)", "-3cos(3x)", "3cos(3x)"], "correct": 0, "explanation": "-sin(3x) · 3 = -3sin(3x)", "xp": 4},
                                {"id": "calc_u2_l6_q11", "type": "typing", "question": "Derivative of arcsin(3x)?", "correctAnswer": ["3/√(1-9x^2)", "3/√(1-9x²)"], "explanation": "3/√(1-(3x)²) = 3/√(1-9x²)", "xp": 5},
                                {"id": "calc_u2_l6_q12", "type": "typing", "question": "Derivative of arctan(2x)?", "correctAnswer": ["2/(1+4x^2)", "2/(1+4x²)"], "explanation": "2/(1+(2x)²) = 2/(1+4x²)", "xp": 5},
                                {"id": "calc_u2_l6_q13", "type": "typing", "question": "Derivative of cot(x)?", "correctAnswer": ["-csc^2(x)", "-csc²(x)"], "explanation": "d/dx[cot(x)] = -csc²(x)", "xp": 5},
                                {"id": "calc_u2_l6_q14", "type": "multiple-choice", "question": "Derivative of tan(5x) is:", "options": ["5sec²(5x)", "sec²(5x)", "5tan(5x)", "tan(5x)"], "correct": 0, "explanation": "sec²(5x) · 5 = 5sec²(5x)", "xp": 4},
                                {"id": "calc_u2_l6_q15", "type": "typing", "question": "Derivative of arccos(x²)?", "correctAnswer": ["-2x/√(1-x^4)", "-2x/√(1-x⁴)"], "explanation": "-2x/√(1-(x²)²) = -2x/√(1-x⁴)", "xp": 5},
                                {"id": "calc_u2_l6_q16", "type": "typing", "question": "Derivative of sin²(x)?", "correctAnswer": ["2sin(x)cos(x)", "sin(2x)"], "explanation": "2sin(x) · cos(x) = 2sin(x)cos(x)", "xp": 5},
                                {"id": "calc_u2_l6_q17", "type": "multiple-choice", "question": "Derivative of sec²(x) uses:", "options": ["chain rule", "product rule only", "power rule only", "quotient rule"], "correct": 0, "explanation": "sec²(x) is a composite function: outer is ( )², inner is sec(x)", "xp": 3},
                                {"id": "calc_u2_l6_q18", "type": "typing", "question": "Derivative of arcsin(0) is:", "correctAnswer": ["1"], "explanation": "1/√(1-0) = 1/1 = 1", "xp": 4}
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

with open('unit2_derivatives_complete.json', 'w') as f:
    json.dump(lessons, f, indent=2)

print("✅ Created unit2_derivatives_complete.json with all 6 lessons")
print("Total lessons:", len(lessons["courses"]["calculus"]["units"][0]["lessons"]))
