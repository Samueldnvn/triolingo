// Calculus - All Topics
// Generated from app.js and lessons.json

window.calculusAllTopics = {
  "courseName": "Calculus",
  "units": [
    {
      "unitId": "1",
      "unitName": "Limits & Continuity",
      "lessons": [
        {
          "id": "1-1",
          "title": "Concept of limits and limit laws",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "1-2",
          "title": "One-sided limits and limits at infinity",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "1-3",
          "title": "Continuity and types of discontinuities",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "1-4",
          "title": "The Squeeze Theorem",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "2",
      "unitName": "Derivatives",
      "lessons": [
        {
          "id": "2-1",
          "title": "Derivative definition from limits",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# The Definition of the Derivative\n\nThe derivative measures the instantaneous rate of change of a function at a specific point, and geometrically represents the slope of the tangent line.\n\n## Definition Using Limits\n\nThe derivative of a function f(x) at a point x = a is:\n\n$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$\n\nThis is the limit of the difference quotient as h approaches 0.\n\n## Example: f(x) = x\u00b2\n\n$$\\begin{aligned}\nf'(x) &= \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h} \\\\\n&= \\lim_{h \\to 0} \\frac{2xh + h^2}{h} \\\\\n&= \\lim_{h \\to 0} (2x + h) = 2x\n\\end{aligned}$$\n\n## Notation\n\n- f'(x) - Newton notation\n- dy/dx - Leibniz notation\n- d/dx[f(x)] - Operator notation",
          "questions": [
            {
              "id": "calc_u2_l1_q1",
              "type": "typing",
              "question": "What is the definition of the derivative f'(a) using limits?",
              "correctAnswer": [
                "lim(h->0) (f(a+h)-f(a))/h",
                "limit as h approaches 0 of (f(a+h)-f(a))/h"
              ],
              "explanation": "The derivative is f'(a) = lim(h\u21920) [f(a+h) - f(a)]/h",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q2",
              "type": "typing",
              "question": "What geometric quantity does the derivative represent?",
              "correctAnswer": [
                "slope of the tangent line",
                "tangent line slope"
              ],
              "explanation": "The derivative represents the slope of the tangent line.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q3",
              "type": "typing",
              "question": "Using the definition, what is the derivative of f(x) = 3x?",
              "correctAnswer": [
                "3"
              ],
              "explanation": "f'(x) = lim(h\u21920) [3(x+h) - 3x]/h = lim(h\u21920) 3h/h = 3",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q4",
              "type": "typing",
              "question": "What is the limit definition expression called?",
              "correctAnswer": [
                "difference quotient"
              ],
              "explanation": "The expression [f(a+h) - f(a)]/h is the difference quotient.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q5",
              "type": "typing",
              "question": "What is f'(2) if f(x) = x\u00b3?",
              "correctAnswer": [
                "12"
              ],
              "explanation": "f'(x) = 3x\u00b2, so f'(2) = 3(4) = 12",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q6",
              "type": "multiple-choice",
              "question": "Which notation is NOT for first derivatives?",
              "options": [
                "f'(x)",
                "dy/dx",
                "d/dx[f(x)]",
                "d\u00b2y/dx\u00b2"
              ],
              "correct": 3,
              "explanation": "d\u00b2y/dx\u00b2 is second derivative notation.",
              "xp": 3
            },
            {
              "id": "calc_u2_l1_q7",
              "type": "typing",
              "question": "What does f'(a) = 0 indicate?",
              "correctAnswer": [
                "horizontal tangent line",
                "horizontal tangent"
              ],
              "explanation": "A derivative of 0 means a horizontal tangent line.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q8",
              "type": "typing",
              "question": "If s(t) is position, what is s'(t)?",
              "correctAnswer": [
                "velocity",
                "instantaneous velocity"
              ],
              "explanation": "The derivative of position is velocity.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q9",
              "type": "typing",
              "question": "Derivative of f(x) = c (constant)?",
              "correctAnswer": [
                "0"
              ],
              "explanation": "The derivative of any constant is 0.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q10",
              "type": "typing",
              "question": "Derivative of f(x) = x?",
              "correctAnswer": [
                "1"
              ],
              "explanation": "f'(x) = lim(h\u21920) [(x+h)-x]/h = lim(h\u21920) h/h = 1",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q11",
              "type": "typing",
              "question": "If f'(a) > 0, function is ___ at x = a",
              "correctAnswer": [
                "increasing"
              ],
              "explanation": "Positive derivative means increasing.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q12",
              "type": "multiple-choice",
              "question": "In difference quotient, h represents:",
              "options": [
                "change in x",
                "change in y",
                "slope",
                "function value"
              ],
              "correct": 0,
              "explanation": "h is the change in x (horizontal distance).",
              "xp": 3
            },
            {
              "id": "calc_u2_l1_q13",
              "type": "typing",
              "question": "Derivative of f(x) = x\u00b2 at x = 3?",
              "correctAnswer": [
                "6"
              ],
              "explanation": "f'(x) = 2x, so f'(3) = 6",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q14",
              "type": "typing",
              "question": "Leibniz notation for derivative?",
              "correctAnswer": [
                "dy/dx"
              ],
              "explanation": "dy/dx is Leibniz notation for the derivative.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q15",
              "type": "typing",
              "question": "Derivative of 1/x?",
              "correctAnswer": [
                "-1/x^2",
                "-1/x\u00b2"
              ],
              "explanation": "d/dx(x^(-1)) = -x^(-2) = -1/x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q16",
              "type": "typing",
              "question": "If s(t) is position, s''(t) is?",
              "correctAnswer": [
                "acceleration"
              ],
              "explanation": "Second derivative of position is acceleration.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q17",
              "type": "multiple-choice",
              "question": "Difference quotient represents slope of:",
              "options": [
                "tangent line",
                "secant line",
                "curve",
                "x-axis"
              ],
              "correct": 1,
              "explanation": "It's the slope of the secant line (approaching tangent as h\u21920).",
              "xp": 3
            },
            {
              "id": "calc_u2_l1_q18",
              "type": "typing",
              "question": "Derivative of f(x) = 5x + 2?",
              "correctAnswer": [
                "5"
              ],
              "explanation": "d/dx(5x) = 5, derivative of constant 2 is 0",
              "xp": 5
            }
          ]
        },
        {
          "id": "2-2",
          "title": "Power, sum, and constant rules",
          "xp": 80,
          "type": "lesson",
          "lessonText": "# Power, Sum, and Constant Rules\n\nThese are the fundamental differentiation rules that make finding derivatives much easier than using the limit definition.\n\n## Power Rule\n\nFor any real number n:\n\n$$\\frac{d}{dx}[x^n] = nx^{n-1}$$\n\nThis rule works for:\n- Positive integers: x\u00b3 \u2192 3x\u00b2\n- Negative integers: x^(-2) \u2192 -2x^(-3) = -2/x\u00b3\n- Fractions: x^(1/2) = \u221ax \u2192 (1/2)x^(-1/2) = 1/(2\u221ax)\n\n## Examples of Power Rule\n\n$$\\begin{aligned}\n\\frac{d}{dx}[x^5] &= 5x^4 \\\\\n\\frac{d}{dx}[x^{10}] &= 10x^9 \\\\\n\\frac{d}{dx}[x^{-3}] &= -3x^{-4} = -\\frac{3}{x^4} \\\\\n\\frac{d}{dx}[\\sqrt{x}] &= \\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\n\\end{aligned}$$\n\n## Constant Multiple Rule\n\nIf c is a constant:\n\n$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$\n\nExample: d/dx[5x\u00b2] = 5(2x) = 10x\n\n## Sum Rule\n\n$$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$\n\nThe derivative of a sum is the sum of the derivatives.\n\n## Difference Rule\n\n$$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$\n\nThe derivative of a difference is the difference of the derivatives.\n\n## Combined Examples\n\n$$\\begin{aligned}\n\\frac{d}{dx}[3x^4 + 2x^2 - 5] &= 12x^3 + 4x + 0 = 12x^3 + 4x \\\\\n\\frac{d}{dx}[x^5 - 7x^2 + 3x] &= 5x^4 - 14x + 3 \\\\\n\\frac{d}{dx}[4x^3 - x^{-2} + 2] &= 12x^2 + 2x^{-3} + 0 = 12x^2 + \\frac{2}{x^3}\n\\end{aligned}$$",
          "questions": [
            {
              "id": "calc_u2_l2_q1",
              "type": "typing",
              "question": "What is the power rule formula?",
              "correctAnswer": [
                "d/dx[x^n] = nx^(n-1)",
                "nx^(n-1)"
              ],
              "explanation": "The power rule is d/dx[x^n] = nx^(n-1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q2",
              "type": "typing",
              "question": "Derivative of x^7?",
              "correctAnswer": [
                "7x^6"
              ],
              "explanation": "d/dx[x^7] = 7x^(7-1) = 7x^6",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q3",
              "type": "typing",
              "question": "Derivative of x^(-3)?",
              "correctAnswer": [
                "-3x^(-4)",
                "-3/x^4"
              ],
              "explanation": "d/dx[x^(-3)] = -3x^(-3-1) = -3x^(-4)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q4",
              "type": "typing",
              "question": "Derivative of \u221ax?",
              "correctAnswer": [
                "1/(2\u221ax)",
                "1/(2x^(1/2))"
              ],
              "explanation": "d/dx[x^(1/2)] = (1/2)x^(-1/2) = 1/(2\u221ax)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q5",
              "type": "typing",
              "question": "Derivative of 3x^4?",
              "correctAnswer": [
                "12x^3"
              ],
              "explanation": "d/dx[3x^4] = 3(4x^3) = 12x^3",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q6",
              "type": "multiple-choice",
              "question": "Sum rule states:",
              "options": [
                "derivative of sum = sum of derivatives",
                "derivative of product = sum of derivatives",
                "derivative of sum = product of derivatives",
                "sum of derivatives = derivative of sum"
              ],
              "correct": 0,
              "explanation": "The sum rule: d/dx[f+g] = f' + g'",
              "xp": 3
            },
            {
              "id": "calc_u2_l2_q7",
              "type": "typing",
              "question": "Derivative of x^5 + 3x^2?",
              "correctAnswer": [
                "5x^4 + 6x"
              ],
              "explanation": "d/dx[x^5] = 5x^4, d/dx[3x^2] = 6x",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q8",
              "type": "typing",
              "question": "Derivative of 2x^3 - 5x?",
              "correctAnswer": [
                "6x^2 - 5"
              ],
              "explanation": "d/dx[2x^3] = 6x^2, d/dx[5x] = 5",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q9",
              "type": "typing",
              "question": "Derivative of constant 7?",
              "correctAnswer": [
                "0"
              ],
              "explanation": "Derivative of any constant is 0.",
              "xp": 4
            },
            {
              "id": "calc_u2_l2_q10",
              "type": "multiple-choice",
              "question": "Derivative of x^0 is:",
              "options": [
                "0",
                "1",
                "x",
                "undefined"
              ],
              "correct": 0,
              "explanation": "x^0 = 1, derivative of constant 1 is 0",
              "xp": 3
            },
            {
              "id": "calc_u2_l2_q11",
              "type": "typing",
              "question": "Derivative of x^(1/3)?",
              "correctAnswer": [
                "(1/3)x^(-2/3)",
                "1/(3x^(2/3))"
              ],
              "explanation": "d/dx[x^(1/3)] = (1/3)x^(1/3-1) = (1/3)x^(-2/3)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q12",
              "type": "typing",
              "question": "Derivative of 5x^2 + 2x - 1?",
              "correctAnswer": [
                "10x + 2"
              ],
              "explanation": "10x + 2 + 0 = 10x + 2",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q13",
              "type": "typing",
              "question": "Derivative of x^10 at x = 1?",
              "correctAnswer": [
                "10"
              ],
              "explanation": "d/dx[x^10] = 10x^9, at x=1: 10(1)^9 = 10",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q14",
              "type": "multiple-choice",
              "question": "If f(x) = 4x^3 + x, f'(0) = ?",
              "options": [
                "0",
                "1",
                "4",
                "5"
              ],
              "correct": 1,
              "explanation": "f'(x) = 12x^2 + 1, f'(0) = 0 + 1 = 1",
              "xp": 4
            },
            {
              "id": "calc_u2_l2_q15",
              "type": "typing",
              "question": "Derivative of 1/x^5?",
              "correctAnswer": [
                "-5/x^6",
                "-5x^(-6)"
              ],
              "explanation": "d/dx[x^(-5)] = -5x^(-6) = -5/x^6",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q16",
              "type": "typing",
              "question": "Derivative of x^(3/2)?",
              "correctAnswer": [
                "(3/2)x^(1/2)",
                "(3/2)\u221ax"
              ],
              "explanation": "d/dx[x^(3/2)] = (3/2)x^(3/2-1) = (3/2)x^(1/2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q17",
              "type": "multiple-choice",
              "question": "Constant multiple rule:",
              "options": [
                "d/dx[cf] = c\u00b7f'",
                "d/dx[cf] = f'",
                "d/dx[cf] = c + f'",
                "d/dx[cf] = cf"
              ],
              "correct": 0,
              "explanation": "The constant can be factored out: d/dx[cf] = c\u00b7f'",
              "xp": 3
            },
            {
              "id": "calc_u2_l2_q18",
              "type": "typing",
              "question": "Derivative of 7x^4 - 2x^2 + 5x - 3?",
              "correctAnswer": [
                "28x^3 - 4x + 5"
              ],
              "explanation": "28x^3 - 4x + 5 - 0 = 28x^3 - 4x + 5",
              "xp": 5
            }
          ]
        },
        {
          "id": "2-3",
          "title": "Product and quotient rules",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Product and Quotient Rules\n\nWhen differentiating products and quotients, we can't just differentiate each term separately. We need special rules.\n\n## Product Rule\n\nFor two functions f(x) and g(x):\n\n$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$\n\nMnemonic: \"left d-right + right d-left\"\n\n### Example: f(x) = x\u00b2 \u00b7 sin(x)\n\n$$\\begin{aligned}\nf'(x) &= \\frac{d}{dx}[x^2] \\cdot \\sin(x) + x^2 \\cdot \\frac{d}{dx}[\\sin(x)] \\\\\n&= 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x) \\\\\n&= 2x\\sin(x) + x^2\\cos(x)\n\\end{aligned}$$\n\n## Quotient Rule\n\nFor two functions f(x) (numerator) and g(x) (denominator):\n\n$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$\n\nMnemonic: \"low d-high minus high d-low, over low\u00b2\"\n\n### Example: f(x) = x / (x + 1)\n\n$$\\begin{aligned}\nf'(x) &= \\frac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} \\\\\n&= \\frac{x + 1 - x}{(x+1)^2} \\\\\n&= \\frac{1}{(x+1)^2}\n\\end{aligned}$$\n\n## Special Cases\n\n### Derivative of 1/g(x)\n\nUsing the quotient rule with f(x) = 1:\n\n$$\\frac{d}{dx}\\left[\\frac{1}{g(x)}\\right] = \\frac{0 \\cdot g(x) - 1 \\cdot g'(x)}{[g(x)]^2} = -\\frac{g'(x)}{[g(x)]^2}$$\n\nExample: d/dx[1/x\u00b2] = -2x/x\u2074 = -2/x\u00b3",
          "questions": [
            {
              "id": "calc_u2_l3_q1",
              "type": "typing",
              "question": "Product rule formula?",
              "correctAnswer": [
                "f'g + fg'",
                "d/dx[fg] = f'g + fg'"
              ],
              "explanation": "The product rule: d/dx[fg] = f'g + fg'",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q2",
              "type": "typing",
              "question": "Quotient rule denominator is?",
              "correctAnswer": [
                "g(x)^2",
                "g^2",
                "denominator squared"
              ],
              "explanation": "The denominator is [g(x)]\u00b2 (the square of the denominator)",
              "xp": 4
            },
            {
              "id": "calc_u2_l3_q3",
              "type": "typing",
              "question": "Derivative of x \u00b7 sin(x)?",
              "correctAnswer": [
                "sin(x) + xcos(x)",
                "sin(x) + x cos(x)"
              ],
              "explanation": "1\u00b7sin(x) + x\u00b7cos(x) = sin(x) + xcos(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q4",
              "type": "typing",
              "question": "Derivative of x\u00b2 \u00b7 e^x?",
              "correctAnswer": [
                "2x e^x + x^2 e^x",
                "(2x + x^2)e^x"
              ],
              "explanation": "2x\u00b7e^x + x\u00b2\u00b7e^x = (2x + x\u00b2)e^x",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q5",
              "type": "typing",
              "question": "Derivative of x / (x+1)?",
              "correctAnswer": [
                "1/(x+1)^2"
              ],
              "explanation": "(1\u00b7(x+1) - x\u00b71)/(x+1)\u00b2 = 1/(x+1)\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q6",
              "type": "multiple-choice",
              "question": "Derivative of 1/x is:",
              "options": [
                "-1/x\u00b2",
                "1/x\u00b2",
                "-1/x",
                "1/x"
              ],
              "correct": 0,
              "explanation": "d/dx[x^(-1)] = -1x^(-2) = -1/x\u00b2",
              "xp": 3
            },
            {
              "id": "calc_u2_l3_q7",
              "type": "typing",
              "question": "Derivative of (x\u00b2+1) \u00b7 cos(x)?",
              "correctAnswer": [
                "2x cos(x) - (x^2+1)sin(x)",
                "2xcos(x) - (x\u00b2+1)sin(x)"
              ],
              "explanation": "2x\u00b7cos(x) + (x\u00b2+1)\u00b7(-sin(x)) = 2xcos(x) - (x\u00b2+1)sin(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q8",
              "type": "typing",
              "question": "Derivative of sin(x)/x?",
              "correctAnswer": [
                "(xcos(x) - sin(x))/x^2"
              ],
              "explanation": "(cos(x)\u00b7x - sin(x)\u00b71)/x\u00b2 = (xcos(x) - sin(x))/x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q9",
              "type": "typing",
              "question": "Derivative of x\u00b3 \u00b7 ln(x)?",
              "correctAnswer": [
                "3x^2 ln(x) + x^2"
              ],
              "explanation": "3x\u00b2\u00b7ln(x) + x\u00b3\u00b7(1/x) = 3x\u00b2ln(x) + x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q10",
              "type": "multiple-choice",
              "question": "Product of two functions requires:",
              "options": [
                "product rule",
                "power rule",
                "sum rule",
                "chain rule"
              ],
              "correct": 0,
              "explanation": "Products require the product rule: f'g + fg'",
              "xp": 3
            },
            {
              "id": "calc_u2_l3_q11",
              "type": "typing",
              "question": "Derivative of (x+1)/(x-1)?",
              "correctAnswer": [
                "-2/(x-1)^2"
              ],
              "explanation": "(1\u00b7(x-1) - (x+1)\u00b71)/(x-1)\u00b2 = -2/(x-1)\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q12",
              "type": "typing",
              "question": "Derivative of x \u00b7 x\u00b3?",
              "correctAnswer": [
                "4x^3"
              ],
              "explanation": "1\u00b7x\u00b3 + x\u00b73x\u00b2 = x\u00b3 + 3x\u00b3 = 4x\u00b3",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q13",
              "type": "typing",
              "question": "Derivative of 1/(x\u00b2+1)?",
              "correctAnswer": [
                "-2x/(x^2+1)^2"
              ],
              "explanation": "-2x/(x\u00b2+1)\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q14",
              "type": "multiple-choice",
              "question": "Derivative of f/g = ?",
              "options": [
                "(f'g - fg')/g\u00b2",
                "(fg' - f'g)/g\u00b2",
                "(f'g + fg')/g\u00b2",
                "(fg' + f'g)/g\u00b2"
              ],
              "correct": 0,
              "explanation": "Quotient rule: (f'g - fg')/g\u00b2",
              "xp": 3
            },
            {
              "id": "calc_u2_l3_q15",
              "type": "typing",
              "question": "Derivative of (2x+3)\u00b7(x-1)?",
              "correctAnswer": [
                "4x + 1"
              ],
              "explanation": "2\u00b7(x-1) + (2x+3)\u00b71 = 2x-2 + 2x+3 = 4x+1",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q16",
              "type": "typing",
              "question": "Derivative of 1/x\u00b3?",
              "correctAnswer": [
                "-3/x^4"
              ],
              "explanation": "d/dx[x^(-3)] = -3x^(-4) = -3/x\u2074",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q17",
              "type": "typing",
              "question": "Derivative of x\u00b2/(x+2)?",
              "correctAnswer": [
                "(2x(x+2) - x^2)/(x+2)^2"
              ],
              "explanation": "(2x(x+2) - x\u00b2)/(x+2)\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q18",
              "type": "multiple-choice",
              "question": "Derivative of constant/function uses:",
              "options": [
                "quotient rule",
                "product rule",
                "chain rule",
                "power rule"
              ],
              "correct": 0,
              "explanation": "Constants over functions use quotient rule: (0\u00b7g - 1\u00b7g')/g\u00b2 = -g'/g\u00b2",
              "xp": 3
            }
          ]
        },
        {
          "id": "2-4",
          "title": "Chain rule",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# The Chain Rule\n\nThe chain rule is used to differentiate composite functions - functions within functions.\n\n## Chain Rule Formula\n\nFor a composite function f(g(x)):\n\n$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$\n\nOr using Leibniz notation:\n\n$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$\n\n## Understanding the Chain Rule\n\nThink of it as differentiating from the outside in:\n1. Differentiate the outer function (keeping the inner function unchanged)\n2. Multiply by the derivative of the inner function\n\n## Examples\n\n### Example 1: f(x) = (3x + 1)\u00b2\n\nOuter: u\u00b2, Inner: u = 3x + 1\n\n$$\\begin{aligned}\nf'(x) &= 2(3x + 1)^1 \\cdot \\frac{d}{dx}[3x + 1] \\\\\n&= 2(3x + 1) \\cdot 3 \\\\\n&= 6(3x + 1)\n\\end{aligned}$$\n\n### Example 2: f(x) = sin(x\u00b2)\n\nOuter: sin(u), Inner: u = x\u00b2\n\n$$\\begin{aligned}\nf'(x) &= \\cos(x^2) \\cdot \\frac{d}{dx}[x^2] \\\\\n&= \\cos(x^2) \\cdot 2x \\\\\n&= 2x\\cos(x^2)\n\\end{aligned}$$\n\n### Example 3: f(x) = e^(5x)\n\nOuter: e^u, Inner: u = 5x\n\n$$\\begin{aligned}\nf'(x) &= e^{5x} \\cdot \\frac{d}{dx}[5x] \\\\\n&= e^{5x} \\cdot 5 \\\\\n&= 5e^{5x}\n\\end{aligned}$$\n\n## Multiple Applications\n\nSometimes you need to apply the chain rule multiple times:\n\nf(x) = sin(e^(x\u00b2))\n\n- Outermost: sin(u)\n- Middle: e^v\n- Innermost: v = x\u00b2\n\n$$f'(x) = \\cos(e^{x^2}) \\cdot e^{x^2} \\cdot 2x$$",
          "questions": [
            {
              "id": "calc_u2_l4_q1",
              "type": "typing",
              "question": "Chain rule formula?",
              "correctAnswer": [
                "f'(g(x))g'(x)",
                "dy/dx = dy/du * du/dx",
                "f'(g(x)) * g'(x)"
              ],
              "explanation": "Chain rule: d/dx[f(g(x))] = f'(g(x)) \u00b7 g'(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q2",
              "type": "typing",
              "question": "Derivative of (2x+1)\u00b3?",
              "correctAnswer": [
                "6(2x+1)^2"
              ],
              "explanation": "3(2x+1)\u00b2 \u00b7 2 = 6(2x+1)\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q3",
              "type": "typing",
              "question": "Derivative of sin(3x)?",
              "correctAnswer": [
                "3cos(3x)"
              ],
              "explanation": "cos(3x) \u00b7 3 = 3cos(3x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q4",
              "type": "typing",
              "question": "Derivative of e^(4x)?",
              "correctAnswer": [
                "4e^(4x)"
              ],
              "explanation": "e^(4x) \u00b7 4 = 4e^(4x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q5",
              "type": "typing",
              "question": "Derivative of cos(x\u00b2)?",
              "correctAnswer": [
                "-2xsin(x^2)",
                "-2xsin(x\u00b2)"
              ],
              "explanation": "-sin(x\u00b2) \u00b7 2x = -2xsin(x\u00b2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q6",
              "type": "multiple-choice",
              "question": "Chain rule applies to:",
              "options": [
                "composite functions",
                "sum of functions",
                "product of functions",
                "constant functions"
              ],
              "correct": 0,
              "explanation": "Chain rule is for composite functions (functions within functions)",
              "xp": 3
            },
            {
              "id": "calc_u2_l4_q7",
              "type": "typing",
              "question": "Derivative of (x\u00b2+1)^5?",
              "correctAnswer": [
                "10x(x^2+1)^4"
              ],
              "explanation": "5(x\u00b2+1)\u2074 \u00b7 2x = 10x(x\u00b2+1)\u2074",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q8",
              "type": "typing",
              "question": "Derivative of ln(5x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "(1/(5x)) \u00b7 5 = 5/5x = 1/x",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q9",
              "type": "typing",
              "question": "Derivative of \u221a(x+1)?",
              "correctAnswer": [
                "1/(2\u221a(x+1))"
              ],
              "explanation": "(1/2)(x+1)^(-1/2) \u00b7 1 = 1/(2\u221a(x+1))",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q10",
              "type": "multiple-choice",
              "question": "Derivative of (3x)^2 is:",
              "options": [
                "18x",
                "6x",
                "9x",
                "3x"
              ],
              "correct": 0,
              "explanation": "2(3x) \u00b7 3 = 6(3x) = 18x",
              "xp": 4
            },
            {
              "id": "calc_u2_l4_q11",
              "type": "typing",
              "question": "Derivative of e^(x\u00b3)?",
              "correctAnswer": [
                "3x^2 e^(x^3)",
                "3x\u00b2e^(x\u00b3)"
              ],
              "explanation": "e^(x\u00b3) \u00b7 3x\u00b2 = 3x\u00b2e^(x\u00b3)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q12",
              "type": "typing",
              "question": "Derivative of sin(cos(x))?",
              "correctAnswer": [
                "-sin(x)cos(cos(x))"
              ],
              "explanation": "cos(cos(x)) \u00b7 (-sin(x)) = -sin(x)cos(cos(x))",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q13",
              "type": "typing",
              "question": "Derivative of 1/(x+1)\u00b2?",
              "correctAnswer": [
                "-2/(x+1)^3"
              ],
              "explanation": "-2(x+1)^(-3) \u00b7 1 = -2/(x+1)\u00b3",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q14",
              "type": "multiple-choice",
              "question": "Chain rule works with:",
              "options": [
                "power, trig, exponential, log",
                "only power functions",
                "only trig functions",
                "only linear functions"
              ],
              "correct": 0,
              "explanation": "Chain rule works with all types of functions: power, trig, exponential, logarithmic",
              "xp": 3
            },
            {
              "id": "calc_u2_l4_q15",
              "type": "typing",
              "question": "Derivative of (x\u00b2)\u00b3?",
              "correctAnswer": [
                "6x^5"
              ],
              "explanation": "3(x\u00b2)\u00b2 \u00b7 2x = 3x\u2074 \u00b7 2x = 6x\u2075",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q16",
              "type": "typing",
              "question": "Derivative of ln(x\u00b2)?",
              "correctAnswer": [
                "2/x"
              ],
              "explanation": "(1/x\u00b2) \u00b7 2x = 2x/x\u00b2 = 2/x",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q17",
              "type": "multiple-choice",
              "question": "To apply chain rule:",
              "options": [
                "differentiate outside, then inside",
                "differentiate inside, then outside",
                "differentiate both at once",
                "use product rule"
              ],
              "correct": 0,
              "explanation": "Chain rule: differentiate outer function first, then multiply by derivative of inner",
              "xp": 3
            },
            {
              "id": "calc_u2_l4_q18",
              "type": "typing",
              "question": "Derivative of tan(2x)?",
              "correctAnswer": [
                "2sec^2(2x)",
                "2sec\u00b2(2x)"
              ],
              "explanation": "sec\u00b2(2x) \u00b7 2 = 2sec\u00b2(2x)",
              "xp": 5
            }
          ]
        },
        {
          "id": "2-5",
          "title": "Derivatives of exponential and logarithmic functions",
          "xp": 80,
          "type": "lesson",
          "lessonText": "# Derivatives of Exponential and Logarithmic Functions\n\n## Natural Exponential Function\n\n$$\\frac{d}{dx}[e^x] = e^x$$\n\nThe exponential function e^x is unique - its derivative is itself!\n\n### With Chain Rule\n\n$$\\frac{d}{dx}[e^{f(x)}] = e^{f(x)} \\cdot f'(x)$$\n\nExample: d/dx[e^(3x\u00b2)] = e^(3x\u00b2) \u00b7 6x = 6xe^(3x\u00b2)\n\n## Exponential Functions with Other Bases\n\n$$\\frac{d}{dx}[a^x] = a^x \\ln(a)$$\n\nExample: d/dx[2^x] = 2^x ln(2)\n\n### With Chain Rule\n\n$$\\frac{d}{dx}[a^{f(x)}] = a^{f(x)} \\ln(a) \\cdot f'(x)$$\n\n## Natural Logarithmic Function\n\n$$\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}$$\n\n### With Chain Rule\n\n$$\\frac{d}{dx}[\\ln(f(x))] = \\frac{f'(x)}{f(x)}$$\n\nExample: d/dx[ln(3x\u00b2+1)] = (6x)/(3x\u00b2+1)\n\n## Logarithmic Functions with Other Bases\n\n$$\\frac{d}{dx}[\\log_a(x)] = \\frac{1}{x \\ln(a)}$$\n\nExample: d/dx[log\u2082(x)] = 1/(x ln(2))\n\n## Examples\n\n$$\\begin{aligned}\n\\frac{d}{dx}[e^{5x}] &= e^{5x} \\cdot 5 = 5e^{5x} \\\\\n\\frac{d}{dx}[\\ln(x^2)] &= \\frac{2x}{x^2} = \\frac{2}{x} \\\\\n\\frac{d}{dx}[3^x] &= 3^x \\ln(3) \\\\\n\\frac{d}{dx}[e^{\\sin(x)}] &= e^{\\sin(x)} \\cos(x) \\\\\n\\frac{d}{dx}[\\ln(\\cos(x))] &= \\frac{-\\sin(x)}{\\cos(x)} = -\\tan(x)\n\\end{aligned}$$",
          "questions": [
            {
              "id": "calc_u2_l5_q1",
              "type": "typing",
              "question": "Derivative of e^x?",
              "correctAnswer": [
                "e^x"
              ],
              "explanation": "d/dx[e^x] = e^x (it's its own derivative!)",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q2",
              "type": "typing",
              "question": "Derivative of ln(x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "d/dx[ln(x)] = 1/x",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q3",
              "type": "typing",
              "question": "Derivative of e^(3x)?",
              "correctAnswer": [
                "3e^(3x)"
              ],
              "explanation": "e^(3x) \u00b7 3 = 3e^(3x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q4",
              "type": "typing",
              "question": "Derivative of 2^x?",
              "correctAnswer": [
                "2^x ln(2)"
              ],
              "explanation": "d/dx[a^x] = a^x ln(a), so d/dx[2^x] = 2^x ln(2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q5",
              "type": "typing",
              "question": "Derivative of ln(2x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "(1/(2x)) \u00b7 2 = 2/2x = 1/x",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q6",
              "type": "multiple-choice",
              "question": "Derivative of e^(5x\u00b2) is:",
              "options": [
                "10xe^(5x\u00b2)",
                "e^(5x\u00b2)",
                "5e^(5x\u00b2)",
                "5x\u00b2e^(5x\u00b2)"
              ],
              "correct": 0,
              "explanation": "e^(5x\u00b2) \u00b7 10x = 10xe^(5x\u00b2)",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q7",
              "type": "typing",
              "question": "Derivative of ln(x\u00b2+1)?",
              "correctAnswer": [
                "2x/(x^2+1)",
                "2x/(x\u00b2+1)"
              ],
              "explanation": "(2x)/(x\u00b2+1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q8",
              "type": "typing",
              "question": "Derivative of e^(sin(x))?",
              "correctAnswer": [
                "cos(x) e^(sin(x))",
                "e^(sin(x)) cos(x)"
              ],
              "explanation": "e^(sin(x)) \u00b7 cos(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q9",
              "type": "typing",
              "question": "Derivative of ln(cos(x))?",
              "correctAnswer": [
                "-tan(x)",
                "-sin(x)/cos(x)"
              ],
              "explanation": "-sin(x)/cos(x) = -tan(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q10",
              "type": "multiple-choice",
              "question": "Derivative of a^x uses:",
              "options": [
                "natural log of base",
                "base",
                "exponent",
                "constant"
              ],
              "correct": 0,
              "explanation": "d/dx[a^x] = a^x ln(a) - uses natural log of the base",
              "xp": 3
            },
            {
              "id": "calc_u2_l5_q11",
              "type": "typing",
              "question": "Derivative of 10^x?",
              "correctAnswer": [
                "10^x ln(10)"
              ],
              "explanation": "d/dx[10^x] = 10^x ln(10)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q12",
              "type": "typing",
              "question": "Derivative of e^(-x)?",
              "correctAnswer": [
                "-e^(-x)"
              ],
              "explanation": "e^(-x) \u00b7 (-1) = -e^(-x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q13",
              "type": "typing",
              "question": "Derivative of ln(e^x)?",
              "correctAnswer": [
                "1"
              ],
              "explanation": "(1/e^x) \u00b7 e^x = 1",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q14",
              "type": "multiple-choice",
              "question": "Derivative of ln(x\u00b3) is:",
              "options": [
                "3/x",
                "1/x\u00b3",
                "3x\u00b2",
                "1/x"
              ],
              "correct": 0,
              "explanation": "(3x\u00b2)/x\u00b3 = 3/x",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q15",
              "type": "typing",
              "question": "Derivative of 3e^x?",
              "correctAnswer": [
                "3e^x"
              ],
              "explanation": "3 \u00b7 e^x = 3e^x (constant multiple rule)",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q16",
              "type": "typing",
              "question": "Derivative of ln(1/x)?",
              "correctAnswer": [
                "-1/x"
              ],
              "explanation": "(-1/x\u00b2)/(1/x) = -1/x\u00b2 \u00b7 x = -1/x",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q17",
              "type": "multiple-choice",
              "question": "What is unique about e^x?",
              "options": [
                "derivative equals itself",
                "derivative is 0",
                "derivative is x",
                "no derivative"
              ],
              "correct": 0,
              "explanation": "e^x is unique because d/dx[e^x] = e^x",
              "xp": 3
            },
            {
              "id": "calc_u2_l5_q18",
              "type": "typing",
              "question": "Derivative of log_5(x)?",
              "correctAnswer": [
                "1/(x ln(5))",
                "1/(xln5)"
              ],
              "explanation": "d/dx[log_a(x)] = 1/(x ln(a))",
              "xp": 5
            }
          ]
        },
        {
          "id": "2-6",
          "title": "Derivatives of trigonometric and inverse trig functions",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Derivatives of Trigonometric Functions\n\n## Basic Trigonometric Derivatives\n\n$$\\begin{aligned}\n\\frac{d}{dx}[\\sin(x)] &= \\cos(x) \\\\\n\\frac{d}{dx}[\\cos(x)] &= -\\sin(x) \\\\\n\\frac{d}{dx}[\\tan(x)] &= \\sec^2(x) \\\\\n\\frac{d}{dx}[\\csc(x)] &= -\\csc(x)\\cot(x) \\\\\n\\frac{d}{dx}[\\sec(x)] &= \\sec(x)\\tan(x) \\\\\n\\frac{d}{dx}[\\cot(x)] &= -\\csc^2(x)\n\\end{aligned}$$\n\n## With Chain Rule\n\n$$\\begin{aligned}\n\\frac{d}{dx}[\\sin(f(x))] &= \\cos(f(x)) \\cdot f'(x) \\\\\n\\frac{d}{dx}[\\cos(f(x))] &= -\\sin(f(x)) \\cdot f'(x) \\\\\n\\frac{d}{dx}[\\tan(f(x))] &= \\sec^2(f(x)) \\cdot f'(x)\n\\end{aligned}$$\n\n## Inverse Trigonometric Derivatives\n\n$$\\begin{aligned}\n\\frac{d}{dx}[\\arcsin(x)] &= \\frac{1}{\\sqrt{1 - x^2}} \\\\\n\\frac{d}{dx}[\\arccos(x)] &= -\\frac{1}{\\sqrt{1 - x^2}} \\\\\n\\frac{d}{dx}[\\arctan(x)] &= \\frac{1}{1 + x^2} \\\\\n\\frac{d}{dx}[\\text{arccsc}(x)] &= -\\frac{1}{|x|\\sqrt{x^2 - 1}} \\\\\n\\frac{d}{dx}[\\text{arcsec}(x)] &= \\frac{1}{|x|\\sqrt{x^2 - 1}} \\\\\n\\frac{d}{dx}[\\text{arccot}(x)] &= -\\frac{1}{1 + x^2}\n\\end{aligned}$$\n\n## Examples\n\n### Trig Examples\n\n$$\\begin{aligned}\n\\frac{d}{dx}[\\sin(3x)] &= \\cos(3x) \\cdot 3 = 3\\cos(3x) \\\\\n\\frac{d}{dx}[\\cos(x^2)] &= -\\sin(x^2) \\cdot 2x = -2x\\sin(x^2) \\\\\n\\frac{d}{dx}[\\tan(5x)] &= \\sec^2(5x) \\cdot 5 = 5\\sec^2(5x)\n\\end{aligned}$$\n\n### Inverse Trig Examples\n\n$$\\begin{aligned}\n\\frac{d}{dx}[\\arcsin(2x)] &= \\frac{2}{\\sqrt{1 - (2x)^2}} = \\frac{2}{\\sqrt{1 - 4x^2}} \\\\\n\\frac{d}{dx}[\\arctan(3x)] &= \\frac{3}{1 + (3x)^2} = \\frac{3}{1 + 9x^2} \\\\\n\\frac{d}{dx}[\\arccos(x^2)] &= -\\frac{2x}{\\sqrt{1 - x^4}}\n\\end{aligned}$$\n\n## Memory Aids\n\n**Basic Trig:** \n- sin \u2192 cos (positive)\n- cos \u2192 -sin (negative)\n- tan \u2192 sec\u00b2\n\n**Inverse Trig:**\n- arcsin \u2192 +1/\u221a(1-x\u00b2)\n- arccos \u2192 -1/\u221a(1-x\u00b2)\n- arctan \u2192 +1/(1+x\u00b2)",
          "questions": [
            {
              "id": "calc_u2_l6_q1",
              "type": "typing",
              "question": "Derivative of sin(x)?",
              "correctAnswer": [
                "cos(x)"
              ],
              "explanation": "d/dx[sin(x)] = cos(x)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q2",
              "type": "typing",
              "question": "Derivative of cos(x)?",
              "correctAnswer": [
                "-sin(x)"
              ],
              "explanation": "d/dx[cos(x)] = -sin(x)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q3",
              "type": "typing",
              "question": "Derivative of tan(x)?",
              "correctAnswer": [
                "sec^2(x)",
                "sec\u00b2(x)"
              ],
              "explanation": "d/dx[tan(x)] = sec\u00b2(x)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q4",
              "type": "typing",
              "question": "Derivative of sin(2x)?",
              "correctAnswer": [
                "2cos(2x)"
              ],
              "explanation": "cos(2x) \u00b7 2 = 2cos(2x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q5",
              "type": "typing",
              "question": "Derivative of arcsin(x)?",
              "correctAnswer": [
                "1/\u221a(1-x^2)",
                "1/\u221a(1-x\u00b2)"
              ],
              "explanation": "d/dx[arcsin(x)] = 1/\u221a(1-x\u00b2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q6",
              "type": "multiple-choice",
              "question": "Derivative of arccos(x) is:",
              "options": [
                "-1/\u221a(1-x\u00b2)",
                "1/\u221a(1-x\u00b2)",
                "-1/(1+x\u00b2)",
                "1/(1+x\u00b2)"
              ],
              "correct": 0,
              "explanation": "d/dx[arccos(x)] = -1/\u221a(1-x\u00b2) (negative of arcsin)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q7",
              "type": "typing",
              "question": "Derivative of arctan(x)?",
              "correctAnswer": [
                "1/(1+x^2)",
                "1/(1+x\u00b2)"
              ],
              "explanation": "d/dx[arctan(x)] = 1/(1+x\u00b2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q8",
              "type": "typing",
              "question": "Derivative of sec(x)?",
              "correctAnswer": [
                "sec(x)tan(x)",
                "sec(x)tan(x)"
              ],
              "explanation": "d/dx[sec(x)] = sec(x)tan(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q9",
              "type": "typing",
              "question": "Derivative of csc(x)?",
              "correctAnswer": [
                "-csc(x)cot(x)",
                "-csc(x)cot(x)"
              ],
              "explanation": "d/dx[csc(x)] = -csc(x)cot(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q10",
              "type": "multiple-choice",
              "question": "Derivative of cos(3x) is:",
              "options": [
                "-3sin(3x)",
                "3sin(3x)",
                "-3cos(3x)",
                "3cos(3x)"
              ],
              "correct": 0,
              "explanation": "-sin(3x) \u00b7 3 = -3sin(3x)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q11",
              "type": "typing",
              "question": "Derivative of arcsin(3x)?",
              "correctAnswer": [
                "3/\u221a(1-9x^2)",
                "3/\u221a(1-9x\u00b2)"
              ],
              "explanation": "3/\u221a(1-(3x)\u00b2) = 3/\u221a(1-9x\u00b2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q12",
              "type": "typing",
              "question": "Derivative of arctan(2x)?",
              "correctAnswer": [
                "2/(1+4x^2)",
                "2/(1+4x\u00b2)"
              ],
              "explanation": "2/(1+(2x)\u00b2) = 2/(1+4x\u00b2)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q13",
              "type": "typing",
              "question": "Derivative of cot(x)?",
              "correctAnswer": [
                "-csc^2(x)",
                "-csc\u00b2(x)"
              ],
              "explanation": "d/dx[cot(x)] = -csc\u00b2(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q14",
              "type": "multiple-choice",
              "question": "Derivative of tan(5x) is:",
              "options": [
                "5sec\u00b2(5x)",
                "sec\u00b2(5x)",
                "5tan(5x)",
                "tan(5x)"
              ],
              "correct": 0,
              "explanation": "sec\u00b2(5x) \u00b7 5 = 5sec\u00b2(5x)",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q15",
              "type": "typing",
              "question": "Derivative of arccos(x\u00b2)?",
              "correctAnswer": [
                "-2x/\u221a(1-x^4)",
                "-2x/\u221a(1-x\u2074)"
              ],
              "explanation": "-2x/\u221a(1-(x\u00b2)\u00b2) = -2x/\u221a(1-x\u2074)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q16",
              "type": "typing",
              "question": "Derivative of sin\u00b2(x)?",
              "correctAnswer": [
                "2sin(x)cos(x)",
                "sin(2x)"
              ],
              "explanation": "2sin(x) \u00b7 cos(x) = 2sin(x)cos(x)",
              "xp": 5
            },
            {
              "id": "calc_u2_l6_q17",
              "type": "multiple-choice",
              "question": "Derivative of sec\u00b2(x) uses:",
              "options": [
                "chain rule",
                "product rule only",
                "power rule only",
                "quotient rule"
              ],
              "correct": 0,
              "explanation": "sec\u00b2(x) is a composite function: outer is ( )\u00b2, inner is sec(x)",
              "xp": 3
            },
            {
              "id": "calc_u2_l6_q18",
              "type": "typing",
              "question": "Derivative of arcsin(0) is:",
              "correctAnswer": [
                "1"
              ],
              "explanation": "1/\u221a(1-0) = 1/1 = 1",
              "xp": 4
            }
          ]
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "Applications of Derivatives",
      "lessons": [
        {
          "id": "7-1",
          "title": "Tangent lines and linear approximation",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-2",
          "title": "Related rates",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-3",
          "title": "Critical points and the first derivative test",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-4",
          "title": "Concavity and the second derivative test",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-5",
          "title": "Optimization problems",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-6",
          "title": "L'H\u00f4pital's Rule",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "4",
      "unitName": "Integrals",
      "lessons": [
        {
          "id": "8-1",
          "title": "Antiderivatives and indefinite integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "8-2",
          "title": "Riemann sums and definite integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "8-3",
          "title": "The Fundamental Theorem of Calculus",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "5",
      "unitName": "Integration Techniques",
      "lessons": [
        {
          "id": "9-1",
          "title": "Substitution (u-substitution)",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "9-2",
          "title": "Integration by parts",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "9-3",
          "title": "Trigonometric integrals and substitutions",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "9-4",
          "title": "Partial fraction decomposition",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "9-5",
          "title": "Improper integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "6",
      "unitName": "Applications of Integrals",
      "lessons": [
        {
          "id": "10-1",
          "title": "Area between curves",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-2",
          "title": "Volumes of solids (disk, washer, shell)",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-3",
          "title": "Arc length and surface area",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-4",
          "title": "Basic separable differential equations",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "7",
      "unitName": "Sequences & Series",
      "lessons": [
        {
          "id": "11-1",
          "title": "Sequences and limits of sequences",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-2",
          "title": "Infinite series and geometric series",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-3",
          "title": "Convergence tests (comparison, ratio, root, integral, alternating)",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-4",
          "title": "Power series and radius of convergence",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-5",
          "title": "Taylor and Maclaurin series",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "8",
      "unitName": "Vectors & Geometry",
      "lessons": [
        {
          "id": "12-1",
          "title": "Vectors in 3D, dot product, and cross product",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "12-2",
          "title": "Lines and planes in space",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "9",
      "unitName": "Vector-Valued Functions",
      "lessons": [
        {
          "id": "13-1",
          "title": "Vector functions, velocity, and acceleration",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "13-2",
          "title": "Arc length and curvature",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "10",
      "unitName": "Multivariable Functions",
      "lessons": [
        {
          "id": "14-1",
          "title": "Functions of several variables and level curves",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-2",
          "title": "Partial derivatives and higher partials",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-3",
          "title": "Chain rule in multiple variables",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-4",
          "title": "Gradient and directional derivatives",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-5",
          "title": "Tangent planes and linear approximation",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "11",
      "unitName": "Multivariable Optimization",
      "lessons": [
        {
          "id": "15-1",
          "title": "Critical points in multivariable functions",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "15-2",
          "title": "Lagrange multipliers",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "12",
      "unitName": "Multiple Integrals",
      "lessons": [
        {
          "id": "16-1",
          "title": "Double integrals and iterated integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-2",
          "title": "Double integrals over general regions",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-3",
          "title": "Polar coordinates in integration",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-4",
          "title": "Triple integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-5",
          "title": "Cylindrical and spherical coordinates",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "13",
      "unitName": "Vector Calculus",
      "lessons": [
        {
          "id": "17-1",
          "title": "Vector fields and line integrals",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-2",
          "title": "Conservative fields and potential functions",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-3",
          "title": "Surface integrals and flux",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-4",
          "title": "Major Theorems",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "14",
      "unitName": "Major Theorems",
      "lessons": [
        {
          "id": "18-1",
          "title": "Green's Theorem",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "18-2",
          "title": "Stokes' Theorem",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "18-3",
          "title": "Divergence Theorem",
          "xp": 0,
          "type": "lesson",
          "lessonText": "",
          "questions": []
        }
      ]
    }
  ]
};
