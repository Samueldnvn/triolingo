// Calculus - All Topics
// Generated from app.js and lessons.json

window.calculusAllTopics = {
  "courseName": "Calculus",
  "units": [
    {
      "unitId": "1",
      "unitName": "1. Limits",
      "lessons": [
        {
          "id": "1-1",
          "title": "Understanding Limits",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# Understanding Limits\n\nA limit describes what value a function approaches as the input approaches a certain value. It's the foundation of calculus!\n\n## Notation:\n\nlim(x\u2192a) f(x) = L\n\nRead as \"the limit of f(x) as x approaches a is L.\"\n\n## Key Concepts:\n\n**The function doesn't need to equal the limit:**\n\nlim(x\u21922) (x\u00b2 - 4)/(x - 2) = 4\n\nEven though the function is undefined at x = 2, the limit exists!\n\n**Left-hand and right-hand limits:**\n\n- lim(x\u2192a\u207b) f(x) - limit from the left (x < a)\n- lim(x\u2192a\u207a) f(x) - limit from the right (x > a)\n\nFor the limit to exist, both must be equal.\n\n**Special limits:**\n\n- lim(x\u21920) sin(x)/x = 1\n- lim(x\u21920) (1 - cos(x))/x\u00b2 = 1/2\n- lim(x\u2192\u221e) (1 + 1/x)^x = e",
          "questions": [
            {
              "id": "calc_u1_l1_q1",
              "type": "typing",
              "question": "What is the value of lim(x\u21922) x\u00b2?",
              "correctAnswer": [
                "4"
              ],
              "xp": 5,
              "explanation": "Direct substitution: lim(x\u21922) x\u00b2 = 2\u00b2 = 4"
            },
            {
              "id": "calc_u1_l1_q2",
              "type": "typing",
              "question": "What does a limit describe?",
              "correctAnswer": [
                "The value a function approaches as x approaches a certain value"
              ],
              "xp": 4,
              "explanation": "Answer: The value a function approaches as x approaches a certain value"
            },
            {
              "id": "calc_u1_l1_q3",
              "type": "typing",
              "question": "What is lim(x\u21923) (2x + 1)?",
              "correctAnswer": [
                "7"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q4",
              "type": "typing",
              "question": "If f(x) = x + 1, what is lim(x\u21922) f(x)?",
              "correctAnswer": [
                "3"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q5",
              "type": "typing",
              "question": "What is lim(x\u21920) sin(x)/x?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "lim(x\u21920) sin(x)/x = 1. This is a standard trigonometric limit."
            },
            {
              "id": "calc_u1_l1_q6",
              "type": "multiple-choice",
              "question": "What does lim(x\u2192\u221e) 1/x approach?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Undefined"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l1_q7",
              "type": "typing",
              "question": "What is lim(x\u21921) (x\u00b2 - 1)/(x - 1)?",
              "correctAnswer": [
                "2"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q8",
              "type": "multiple-choice",
              "question": "A limit exists if the left and right limits are:",
              "options": [
                "Different",
                "The same",
                "Both infinite",
                "Both zero"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q9",
              "type": "typing",
              "question": "What is lim(x\u2192\u221e) (1/x\u00b2)?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l1_q10",
              "type": "multiple-choice",
              "question": "The limit as x approaches a from the right is called:",
              "options": [
                "Left-hand limit",
                "Right-hand limit",
                "Two-sided limit",
                "Infinite limit"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Right-hand limit"
            },
            {
              "id": "calc_u1_l1_q11",
              "type": "typing",
              "question": "What is lim(x\u21922) (x\u00b3 - 8)/(x - 2)?",
              "correctAnswer": [
                "12"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q12",
              "type": "multiple-choice",
              "question": "If lim(x\u2192a) f(x) = f(a), then f is:",
              "options": [
                "Discontinuous",
                "Continuous",
                "Differentiable",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q13",
              "type": "typing",
              "question": "What is lim(x\u21920) cos(x)?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q14",
              "type": "multiple-choice",
              "question": "Which limit does NOT exist?",
              "options": [
                "lim(x\u21920) x\u00b2",
                "lim(x\u21920) 1/|x|",
                "lim(x\u21922) 3x",
                "lim(x\u21921) x + 1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l1_q15",
              "type": "typing",
              "question": "What is lim(x\u2192\u221e) (2 + 3/x)?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l1_q16",
              "type": "multiple-choice",
              "question": "A function is continuous at a point if:",
              "options": [
                "It has a hole",
                "Left and right limits equal the function value",
                "Only right limit exists",
                "The function is undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Left and right limits equal the function value"
            },
            {
              "id": "calc_u1_l1_q17",
              "type": "typing",
              "question": "What is lim(x\u21920) (sin(x))/x?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "lim(x\u21920) sin(x)/x = 1. This is a standard trigonometric limit."
            },
            {
              "id": "calc_u1_l1_q18",
              "type": "multiple-choice",
              "question": "The squeeze theorem helps find:",
              "options": [
                "Derivatives",
                "Limits",
                "Integrals",
                "Areas"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: Limits. Apply the appropriate formula from the lesson."
            }
          ]
        },
        {
          "id": "1-2",
          "title": "Calculating Limits",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Calculating Limits\n\nDifferent techniques for evaluating limits.\n\n## Direct Substitution:\n\nIf plugging in the value doesn't cause problems:\n\nlim(x\u21923) (2x + 1) = 2(3) + 1 = 7\n\n## Factoring:\n\nFor 0/0 forms, try factoring:\n\nlim(x\u21924) (x\u00b2 - 16)/(x - 4)\n= lim(x\u21924) (x - 4)(x + 4)/(x - 4)\n= lim(x\u21924) (x + 4) = 8\n\n## Limits at Infinity:\n\nCompare highest powers:\n\nlim(x\u2192\u221e) (3x\u00b2 + 2x)/(x\u00b2 + 1)\n= lim(x\u2192\u221e) (3 + 2/x)/(1 + 1/x\u00b2)\n= 3/1 = 3\n\n## L'H\u00f4pital's Rule:\n\nFor 0/0 or \u221e/\u221e forms:\n\nlim(x\u2192a) f(x)/g(x) = lim(x\u2192a) f'(x)/g'(x)\n\n## Rationalization:\n\nMultiply by the conjugate:\n\nlim(x\u21920) \u221a(x+1) - 1/x\n= lim(x\u21920) [(\u221a(x+1) - 1)(\u221a(x+1) + 1)]/[x(\u221a(x+1) + 1)]\n= lim(x\u21920) (x+1 - 1)/[x(\u221a(x+1) + 1)]\n= lim(x\u21920) x/[x(\u221a(x+1) + 1)]\n= lim(x\u21920) 1/(\u221a(x+1) + 1) = 1/2",
          "questions": [
            {
              "id": "calc_u1_l2_q1",
              "type": "typing",
              "question": "What is lim(x\u21924) (x\u00b2 - 16)/(x - 4)?",
              "correctAnswer": [
                "8"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q2",
              "type": "typing",
              "question": "To evaluate lim(x\u2192a) f(x)/g(x) when both approach 0, use:",
              "correctAnswer": [
                "Factoring or rationalization"
              ],
              "xp": 4,
              "explanation": "Answer: Factoring or rationalization"
            },
            {
              "id": "calc_u1_l2_q3",
              "type": "typing",
              "question": "What is lim(x\u2192\u221e) (3x\u00b2 + 2x)/(x\u00b2 + 1)?",
              "correctAnswer": [
                "3"
              ],
              "xp": 5,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l2_q4",
              "type": "multiple-choice",
              "question": "For limits at infinity of rational functions, compare:",
              "options": [
                "Numerators only",
                "Denominators only",
                "Highest powers",
                "Constants"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q5",
              "type": "typing",
              "question": "What is lim(x\u21920) (1 - cos(x))/x\u00b2?",
              "correctAnswer": [
                "1/2",
                "0.5"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q6",
              "type": "multiple-choice",
              "question": "The limit lim(x\u21920) sin(ax)/x equals:",
              "options": [
                "0",
                "1",
                "a",
                "1/a"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "lim(x\u21920) sin(x)/x = 1. This is a standard trigonometric limit."
            },
            {
              "id": "calc_u1_l2_q7",
              "type": "typing",
              "question": "What is lim(x\u21923) (x\u00b2 - 9)/(x - 3)?",
              "correctAnswer": [
                "6"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q8",
              "type": "multiple-choice",
              "question": "If the degree of numerator < degree of denominator at infinity, the limit is:",
              "options": [
                "\u221e",
                "0",
                "1",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q9",
              "type": "typing",
              "question": "What is lim(x\u2192\u221e) \u221a(x\u00b2 + 1) - x?",
              "correctAnswer": [
                "0"
              ],
              "xp": 5,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l2_q10",
              "type": "multiple-choice",
              "question": "L'H\u00f4pital's Rule applies to:",
              "options": [
                "0/0 or \u221e/\u221e",
                "1/1",
                "0\u00d7\u221e",
                "\u221e - \u221e"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: 0/0 or \u221e/\u221e. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u1_l2_q11",
              "type": "typing",
              "question": "What is lim(x\u21922) (x\u00b3 - 8)/(x\u00b2 - 4)?",
              "correctAnswer": [
                "3"
              ],
              "xp": 5,
              "explanation": "Direct substitution: lim(x\u21922) x\u00b2 = 2\u00b2 = 4"
            },
            {
              "id": "calc_u1_l2_q12",
              "type": "multiple-choice",
              "question": "To find lim(x\u2192\u221e) (\u221a(x+1) - \u221ax), multiply by:",
              "options": [
                "x",
                "\u221ax",
                "Conjugate",
                "1/x"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l2_q13",
              "type": "typing",
              "question": "What is lim(x\u21920) (e^x - 1)/x?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q14",
              "type": "multiple-choice",
              "question": "A removable discontinuity is also called a:",
              "options": [
                "Jump",
                "Hole",
                "Vertical asymptote",
                "Infinite"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: Hole. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u1_l2_q15",
              "type": "typing",
              "question": "What is lim(x\u2192\u221e) (ln(x)/x)?",
              "correctAnswer": [
                "0"
              ],
              "xp": 5,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l2_q16",
              "type": "multiple-choice",
              "question": "The limit lim(x\u2192\u221e) (1 + 1/x)^x equals:",
              "options": [
                "0",
                "1",
                "e",
                "\u221e"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "As x approaches infinity, 1/x approaches 0."
            },
            {
              "id": "calc_u1_l2_q17",
              "type": "typing",
              "question": "What is lim(x\u2192\u03c0/2) tan(x)?",
              "correctAnswer": [
                "undefined",
                "\u221e"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u1_l2_q18",
              "type": "multiple-choice",
              "question": "For vertical asymptotes, find where denominator is:",
              "options": [
                "1",
                "0",
                "\u221e",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 0. Apply the appropriate formula from the lesson."
            }
          ]
        }
      ]
    },
    {
      "unitId": "2",
      "unitName": "2. Derivatives",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "Answer: slope of the tangent line",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q3",
              "type": "typing",
              "question": "Using the definition, what is the derivative of f(x) = 3x?",
              "correctAnswer": [
                "3"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q4",
              "type": "typing",
              "question": "What is the limit definition expression called?",
              "correctAnswer": [
                "difference quotient"
              ],
              "explanation": "Answer: difference quotient",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q5",
              "type": "typing",
              "question": "What is f'(2) if f(x) = x\u00b3?",
              "correctAnswer": [
                "12"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Answer: horizontal tangent line",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q9",
              "type": "typing",
              "question": "Derivative of f(x) = c (constant)?",
              "correctAnswer": [
                "0"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q10",
              "type": "typing",
              "question": "Derivative of f(x) = x?",
              "correctAnswer": [
                "1"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 4
            },
            {
              "id": "calc_u2_l1_q11",
              "type": "typing",
              "question": "If f'(a) > 0, function is ___ at x = a",
              "correctAnswer": [
                "increasing"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Correct: change in x. Apply the appropriate formula from the lesson.",
              "xp": 3
            },
            {
              "id": "calc_u2_l1_q13",
              "type": "typing",
              "question": "Derivative of f(x) = x\u00b2 at x = 3?",
              "correctAnswer": [
                "6"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q14",
              "type": "typing",
              "question": "Leibniz notation for derivative?",
              "correctAnswer": [
                "dy/dx"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l1_q16",
              "type": "typing",
              "question": "If s(t) is position, s''(t) is?",
              "correctAnswer": [
                "acceleration"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Correct: secant line. Apply the appropriate formula from the lesson.",
              "xp": 3
            },
            {
              "id": "calc_u2_l1_q18",
              "type": "typing",
              "question": "Derivative of f(x) = 5x + 2?",
              "correctAnswer": [
                "5"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Answer: d/dx[x^n] = nx^(n-1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q2",
              "type": "typing",
              "question": "Derivative of x^7?",
              "correctAnswer": [
                "7x^6"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q5",
              "type": "typing",
              "question": "Derivative of 3x^4?",
              "correctAnswer": [
                "12x^3"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Correct: derivative of sum = sum of derivatives",
              "xp": 3
            },
            {
              "id": "calc_u2_l2_q7",
              "type": "typing",
              "question": "Derivative of x^5 + 3x^2?",
              "correctAnswer": [
                "5x^4 + 6x"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q8",
              "type": "typing",
              "question": "Derivative of 2x^3 - 5x?",
              "correctAnswer": [
                "6x^2 - 5"
              ],
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q9",
              "type": "typing",
              "question": "Derivative of constant 7?",
              "correctAnswer": [
                "0"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q12",
              "type": "typing",
              "question": "Derivative of 5x^2 + 2x - 1?",
              "correctAnswer": [
                "10x + 2"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l2_q13",
              "type": "typing",
              "question": "Derivative of x^10 at x = 1?",
              "correctAnswer": [
                "10"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Correct: d/dx[cf] = c\u00b7f'. Apply the appropriate formula from the lesson.",
              "xp": 3
            },
            {
              "id": "calc_u2_l2_q18",
              "type": "typing",
              "question": "Derivative of 7x^4 - 2x^2 + 5x - 3?",
              "correctAnswer": [
                "28x^3 - 4x + 5"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Answer: f'g + fg'. Apply the appropriate formula from the lesson.",
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
              "explanation": "Answer: g(x)^2. Apply the appropriate formula from the lesson.",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q5",
              "type": "typing",
              "question": "Derivative of x / (x+1)?",
              "correctAnswer": [
                "1/(x+1)^2"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q8",
              "type": "typing",
              "question": "Derivative of sin(x)/x?",
              "correctAnswer": [
                "(xcos(x) - sin(x))/x^2"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q9",
              "type": "typing",
              "question": "Derivative of x\u00b3 \u00b7 ln(x)?",
              "correctAnswer": [
                "3x^2 ln(x) + x^2"
              ],
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
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
              "explanation": "Correct: product rule. Apply the appropriate formula from the lesson.",
              "xp": 3
            },
            {
              "id": "calc_u2_l3_q11",
              "type": "typing",
              "question": "Derivative of (x+1)/(x-1)?",
              "correctAnswer": [
                "-2/(x-1)^2"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q12",
              "type": "typing",
              "question": "Derivative of x \u00b7 x\u00b3?",
              "correctAnswer": [
                "4x^3"
              ],
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q13",
              "type": "typing",
              "question": "Derivative of 1/(x\u00b2+1)?",
              "correctAnswer": [
                "-2x/(x^2+1)^2"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 3
            },
            {
              "id": "calc_u2_l3_q15",
              "type": "typing",
              "question": "Derivative of (2x+3)\u00b7(x-1)?",
              "correctAnswer": [
                "4x + 1"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q16",
              "type": "typing",
              "question": "Derivative of 1/x\u00b3?",
              "correctAnswer": [
                "-3/x^4"
              ],
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l3_q17",
              "type": "typing",
              "question": "Derivative of x\u00b2/(x+2)?",
              "correctAnswer": [
                "(2x(x+2) - x^2)/(x+2)^2"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Answer: f'(g(x))g'(x). Apply the appropriate formula from the lesson.",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q2",
              "type": "typing",
              "question": "Derivative of (2x+1)\u00b3?",
              "correctAnswer": [
                "6(2x+1)^2"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q3",
              "type": "typing",
              "question": "Derivative of sin(3x)?",
              "correctAnswer": [
                "3cos(3x)"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q4",
              "type": "typing",
              "question": "Derivative of e^(4x)?",
              "correctAnswer": [
                "4e^(4x)"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Correct: composite functions",
              "xp": 3
            },
            {
              "id": "calc_u2_l4_q7",
              "type": "typing",
              "question": "Derivative of (x\u00b2+1)^5?",
              "correctAnswer": [
                "10x(x^2+1)^4"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q8",
              "type": "typing",
              "question": "Derivative of ln(5x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "d/dx[ln(x)] = 1/x. The derivative of natural log is 1/x.",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q9",
              "type": "typing",
              "question": "Derivative of \u221a(x+1)?",
              "correctAnswer": [
                "1/(2\u221a(x+1))"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q12",
              "type": "typing",
              "question": "Derivative of sin(cos(x))?",
              "correctAnswer": [
                "-sin(x)cos(cos(x))"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q13",
              "type": "typing",
              "question": "Derivative of 1/(x+1)\u00b2?",
              "correctAnswer": [
                "-2/(x+1)^3"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Correct: power, trig, exponential, log",
              "xp": 3
            },
            {
              "id": "calc_u2_l4_q15",
              "type": "typing",
              "question": "Derivative of (x\u00b2)\u00b3?",
              "correctAnswer": [
                "6x^5"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
              "xp": 5
            },
            {
              "id": "calc_u2_l4_q16",
              "type": "typing",
              "question": "Derivative of ln(x\u00b2)?",
              "correctAnswer": [
                "2/x"
              ],
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Correct: differentiate outside, then inside",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "d/dx[e\u02e3] = e\u02e3. The exponential function is its own derivative.",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q2",
              "type": "typing",
              "question": "Derivative of ln(x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "d/dx[ln(x)] = 1/x. The derivative of natural log is 1/x.",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q3",
              "type": "typing",
              "question": "Derivative of e^(3x)?",
              "correctAnswer": [
                "3e^(3x)"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q4",
              "type": "typing",
              "question": "Derivative of 2^x?",
              "correctAnswer": [
                "2^x ln(2)"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q5",
              "type": "typing",
              "question": "Derivative of ln(2x)?",
              "correctAnswer": [
                "1/x"
              ],
              "explanation": "d/dx[ln(x)] = 1/x. The derivative of natural log is 1/x.",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "d/dx[cos(x)] = -sin(x). The derivative of cosine is negative sine.",
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
              "explanation": "Correct: natural log of base",
              "xp": 3
            },
            {
              "id": "calc_u2_l5_q11",
              "type": "typing",
              "question": "Derivative of 10^x?",
              "correctAnswer": [
                "10^x ln(10)"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q12",
              "type": "typing",
              "question": "Derivative of e^(-x)?",
              "correctAnswer": [
                "-e^(-x)"
              ],
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q13",
              "type": "typing",
              "question": "Derivative of ln(e^x)?",
              "correctAnswer": [
                "1"
              ],
              "explanation": "d/dx[e\u02e3] = e\u02e3. The exponential function is its own derivative.",
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
              "explanation": "Power rule: d/dx[x\u00b3] = 3x\u00b2",
              "xp": 4
            },
            {
              "id": "calc_u2_l5_q15",
              "type": "typing",
              "question": "Derivative of 3e^x?",
              "correctAnswer": [
                "3e^x"
              ],
              "explanation": "d/dx[e\u02e3] = e\u02e3. The exponential function is its own derivative.",
              "xp": 5
            },
            {
              "id": "calc_u2_l5_q16",
              "type": "typing",
              "question": "Derivative of ln(1/x)?",
              "correctAnswer": [
                "-1/x"
              ],
              "explanation": "d/dx[ln(x)] = 1/x. The derivative of natural log is 1/x.",
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
              "explanation": "Correct: derivative equals itself",
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
              "explanation": "d/dx[ln(x)] = 1/x. The derivative of natural log is 1/x.",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q2",
              "type": "typing",
              "question": "Derivative of cos(x)?",
              "correctAnswer": [
                "-sin(x)"
              ],
              "explanation": "d/dx[cos(x)] = -sin(x). The derivative of cosine is negative sine.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 4
            },
            {
              "id": "calc_u2_l6_q4",
              "type": "typing",
              "question": "Derivative of sin(2x)?",
              "correctAnswer": [
                "2cos(2x)"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "d/dx[cos(x)] = -sin(x). The derivative of cosine is negative sine.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "d/dx[cos(x)] = -sin(x). The derivative of cosine is negative sine.",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
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
              "explanation": "Power rule: d/dx[x\u00b2] = 2x (multiply by power, decrease by 1)",
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
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
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
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives.",
              "xp": 3
            },
            {
              "id": "calc_u2_l6_q18",
              "type": "typing",
              "question": "Derivative of arcsin(0) is:",
              "correctAnswer": [
                "1"
              ],
              "explanation": "d/dx[sin(x)] = cos(x). The derivative of sine is cosine.",
              "xp": 4
            }
          ]
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "3. Integration",
      "lessons": [
        {
          "id": "3-1",
          "title": "Introduction to Integration",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Introduction to Integration\n\nIntegration is the reverse process of differentiation. If F'(x) = f(x), then F(x) is the antiderivative of f(x).\n\n## The Integral Symbol:\n\n\u222b f(x) dx = F(x) + C\n\nThe symbol \u222b represents integration, f(x) is the integrand, dx tells us the variable of integration, and C is the constant of integration.\n\n## The Power Rule for Integration:\n\n\u222b x\u207f dx = x^(n+1)/(n+1) + C (for n \u2260 -1)\n\n## Key Concepts:\n\n**Why the constant C?**\n\nWhen differentiating, constants disappear (derivative of x\u00b2+5 is 2x, same as derivative of x\u00b2). So when integrating, we add C to account for all possible antiderivatives.\n\n**Common Integrals:**\n\n- \u222b k dx = kx + C (where k is constant)\n- \u222b e\u02e3 dx = e\u02e3 + C\n- \u222b 1/x dx = ln|x| + C\n- \u222b sin(x) dx = -cos(x) + C\n- \u222b cos(x) dx = sin(x) + C",
          "questions": [
            {
              "id": "calc_u3_l1_q1",
              "type": "typing",
              "question": "What is \u222b x dx?",
              "correctAnswer": [
                "x^2/2 + C",
                "(1/2)x^2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q2",
              "type": "typing",
              "question": "Integration is the reverse process of:",
              "correctAnswer": [
                "differentiation",
                "derivatives"
              ],
              "xp": 4,
              "explanation": "Answer: differentiation. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u3_l1_q3",
              "type": "typing",
              "question": "What is \u222b 2x dx?",
              "correctAnswer": [
                "x^2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q4",
              "type": "multiple-choice",
              "question": "The constant C is needed because:",
              "options": [
                "Derivatives of constants are zero",
                "Integration adds C",
                "C makes it look better",
                "C is arbitrary"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Derivatives of constants are zero"
            },
            {
              "id": "calc_u3_l1_q5",
              "type": "typing",
              "question": "What is \u222b x\u207f dx (for n \u2260 -1)?",
              "correctAnswer": [
                "x^(n+1)/(n+1) + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q6",
              "type": "multiple-choice",
              "question": "What is \u222b 3 dx?",
              "options": [
                "3x",
                "3x + C",
                "3",
                "3/C"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q7",
              "type": "typing",
              "question": "What is \u222b (x + 1) dx?",
              "correctAnswer": [
                "x^2/2 + x + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q8",
              "type": "multiple-choice",
              "question": "\u222b sin(x) dx equals:",
              "options": [
                "cos(x) + C",
                "-cos(x) + C",
                "sin(x) + C",
                "-sin(x) + C"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q9",
              "type": "typing",
              "question": "What is \u222b e\u02e3 dx?",
              "correctAnswer": [
                "e^x + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q10",
              "type": "multiple-choice",
              "question": "The integral of a sum is the sum of the:",
              "options": [
                "Products",
                "Integrals",
                "Derivatives",
                "Limits"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u3_l1_q11",
              "type": "typing",
              "question": "What is \u222b 1/x dx?",
              "correctAnswer": [
                "ln|x| + C",
                "ln(x) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q12",
              "type": "multiple-choice",
              "question": "Geometrically, \u222b from a to b f(x)dx represents:",
              "options": [
                "Slope at a point",
                "Area under curve",
                "Length of curve",
                "Volume"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q13",
              "type": "typing",
              "question": "What is \u222b cos(x) dx?",
              "correctAnswer": [
                "sin(x) + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q14",
              "type": "multiple-choice",
              "question": "A definite integral has:",
              "options": [
                "No limits",
                "Specific bounds",
                "Only C",
                "No C"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u3_l1_q15",
              "type": "typing",
              "question": "What is \u222b from 0 to 2 x dx?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q16",
              "type": "multiple-choice",
              "question": "The Fundamental Theorem of Calculus connects:",
              "options": [
                "Limits and derivatives",
                "Derivatives and integrals",
                "Areas and volumes",
                "Slopes and tangents"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Derivatives and integrals"
            },
            {
              "id": "calc_u3_l1_q17",
              "type": "typing",
              "question": "What is d/dx \u222b f(x) dx?",
              "correctAnswer": [
                "f(x)"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l1_q18",
              "type": "multiple-choice",
              "question": "For \u222b k\u00b7f(x) dx, k is:",
              "options": [
                "Divided",
                "Multiplied out",
                "Ignored",
                "Integrated separately"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            }
          ]
        },
        {
          "id": "3-2",
          "title": "Definite Integrals",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Definite Integrals\n\nA definite integral has specific bounds and evaluates to a number (no constant C).\n\n## Notation:\n\n\u222b\u2090\u1d47 f(x) dx = F(b) - F(a)\n\nThis is read as \"the integral of f from a to b.\"\n\n## The Fundamental Theorem of Calculus (Part 2):\n\nIf F is an antiderivative of f, then:\n\n\u222b\u2090\u1d47 f(x) dx = F(b) - F(a)\n\n## Properties:\n\n1. **Reversing limits changes sign:**\n   \u222b\u2090\u1d47 f(x) dx = -\u222b\u1d47\u1d43 f(x) dx\n\n2. **Adding intervals:**\n   \u222b\u2090\u1d47 f(x) dx + \u222b\u1d47\u1d9c f(x) dx = \u222b\u2090\u1d9c f(x) dx\n\n3. **Same limits equal zero:**\n   \u222b\u2090\u1d43 f(x) dx = 0\n\n## Area Interpretation:\n\n- If f(x) > 0 on [a,b], \u222b\u2090\u1d47 f(x) dx is the area under the curve\n- If f(x) < 0 on [a,b], the integral is negative\n- If f(x) changes sign, you get net area (positive minus negative)\n\n## Example:\n\n\u222b\u2080\u00b2 x\u00b2 dx = [x\u00b3/3]\u2080\u00b2 = 8/3 - 0 = 8/3\n\nThis is the area under y = x\u00b2 from x = 0 to x = 2.",
          "questions": [
            {
              "id": "calc_u3_l2_q1",
              "type": "typing",
              "question": "What is \u222b from 0 to 1 2x dx?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q2",
              "type": "typing",
              "question": "A definite integral evaluates to a:",
              "correctAnswer": [
                "number",
                "constant",
                "value"
              ],
              "xp": 4,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u3_l2_q3",
              "type": "typing",
              "question": "What is \u222b from 1 to 3 x dx?",
              "correctAnswer": [
                "4"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q4",
              "type": "multiple-choice",
              "question": "If a > b, then \u222b from a to a f(x)dx equals:",
              "options": [
                "1",
                "0",
                "\u221e",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q5",
              "type": "typing",
              "question": "What is \u222b from 0 to \u03c0 sin(x) dx?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q6",
              "type": "multiple-choice",
              "question": "\u222b from a to b f(x)dx + \u222b from b to c f(x)dx =",
              "options": [
                "0",
                "\u222b from a to c f(x)dx",
                "\u222b from b to a f(x)dx",
                "f(c) - f(a)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q7",
              "type": "typing",
              "question": "What is \u222b from 0 to 2 x\u00b2 dx?",
              "correctAnswer": [
                "8/3",
                "2.67"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u3_l2_q8",
              "type": "multiple-choice",
              "question": "By the FTC, \u222b from a to b f(x)dx =",
              "options": [
                "f(b) - f(a)",
                "F(b) - F(a)",
                "f'(b) - f'(a)",
                "f(a) - f(b)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q9",
              "type": "typing",
              "question": "What is \u222b from -1 to 1 x\u00b3 dx?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b3 dx = x\u2074/4 + C"
            },
            {
              "id": "calc_u3_l2_q10",
              "type": "multiple-choice",
              "question": "The area under f(x) from a to b where f(x) < 0 is:",
              "options": [
                "Positive",
                "Negative",
                "Zero",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Negative. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u3_l2_q11",
              "type": "typing",
              "question": "What is \u222b from 0 to 1 e\u02e3 dx?",
              "correctAnswer": [
                "e - 1",
                "1.718"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q12",
              "type": "multiple-choice",
              "question": "If you reverse limits, the integral:",
              "options": [
                "Doubles",
                "Changes sign",
                "Stays same",
                "Becomes zero"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u3_l2_q13",
              "type": "typing",
              "question": "What is \u222b from 0 to \u03c0/2 cos(x) dx?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q14",
              "type": "multiple-choice",
              "question": "The definite integral of an odd function from -a to a is:",
              "options": [
                "2a",
                "a\u00b2",
                "0",
                "2\u222b from 0 to a"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u3_l2_q15",
              "type": "typing",
              "question": "What is \u222b from 1 to 2 1/x dx?",
              "correctAnswer": [
                "ln(2)",
                "0.693"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u3_l2_q16",
              "type": "multiple-choice",
              "question": "Net area accounts for:",
              "options": [
                "Only positive area",
                "Only negative area",
                "Positive minus negative",
                "Total absolute area"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Positive minus negative"
            },
            {
              "id": "calc_u3_l2_q17",
              "type": "typing",
              "question": "What is \u222b from 0 to 1 (x + x\u00b2) dx?",
              "correctAnswer": [
                "5/6",
                "0.833"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u3_l2_q18",
              "type": "multiple-choice",
              "question": "The average value of f on [a,b] is:",
              "options": [
                "(f(a)+f(b))/2",
                "\u222b from a to b f(x)dx/(b-a)",
                "f((a+b)/2)",
                "f'(c)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: \u222b from a to b f(x)dx/(b-a)"
            }
          ]
        }
      ]
    },
    {
      "unitId": "4",
      "unitName": "4. Applications",
      "lessons": [
        {
          "id": "4-1",
          "title": "Rates of Change",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Rates of Change\n\nDerivatives and integrals describe how quantities change over time.\n\n## Position, Velocity, and Acceleration:\n\n**Position:** s(t) - where an object is at time t\n\n**Velocity:** v(t) = s'(t) - how fast position is changing\n\n**Acceleration:** a(t) = v'(t) = s''(t) - how fast velocity is changing\n\n## Relationships:\n\n- Given position: differentiate to get velocity, then acceleration\n- Given acceleration: integrate to get velocity, then position\n\n## Example:\n\nIf s(t) = t\u00b3 + 2t, find v(t) and a(t).\n\nv(t) = s'(t) = 3t\u00b2 + 2\na(t) = v'(t) = 6t\n\n## From Acceleration to Position:\n\nIf a(t) = 2, then:\nv(t) = \u222b a(t) dt = 2t + C\u2081\ns(t) = \u222b v(t) dt = t\u00b2 + C\u2081t + C\u2082\n\nThe constants C\u2081 and C\u2082 are determined by initial conditions (like initial position and velocity).\n\n## Speed vs Velocity:\n\n- Velocity can be positive or negative (direction matters)\n- Speed is the absolute value of velocity: speed = |v(t)|",
          "questions": [
            {
              "id": "calc_u4_l1_q1",
              "type": "typing",
              "question": "If s(t) = t\u00b2 represents position, what is velocity?",
              "correctAnswer": [
                "2t"
              ],
              "xp": 5,
              "explanation": "Velocity = derivative of position. v(t) = s'(t)"
            },
            {
              "id": "calc_u4_l1_q2",
              "type": "typing",
              "question": "Velocity is the derivative of:",
              "correctAnswer": [
                "position",
                "displacement"
              ],
              "xp": 4,
              "explanation": "Velocity = derivative of position. v(t) = s'(t)"
            },
            {
              "id": "calc_u4_l1_q3",
              "type": "typing",
              "question": "If v(t) = 3t\u00b2, what is acceleration?",
              "correctAnswer": [
                "6t"
              ],
              "xp": 5,
              "explanation": "Acceleration = derivative of velocity. a(t) = v'(t)"
            },
            {
              "id": "calc_u4_l1_q4",
              "type": "multiple-choice",
              "question": "The derivative of position with respect to time is:",
              "options": [
                "Acceleration",
                "Velocity",
                "Speed",
                "Distance"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives."
            },
            {
              "id": "calc_u4_l1_q5",
              "type": "typing",
              "question": "If position is s(t) = 5t\u00b3, what is v(2)?",
              "correctAnswer": [
                "60"
              ],
              "xp": 4,
              "explanation": "Answer: 60. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q6",
              "type": "multiple-choice",
              "question": "Acceleration is the derivative of:",
              "options": [
                "Position",
                "Velocity",
                "Speed",
                "Distance"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives."
            },
            {
              "id": "calc_u4_l1_q7",
              "type": "typing",
              "question": "If s(t) = t\u00b2 + 2t, what is s'(t)?",
              "correctAnswer": [
                "2t + 2"
              ],
              "xp": 5,
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives."
            },
            {
              "id": "calc_u4_l1_q8",
              "type": "multiple-choice",
              "question": "Average rate of change is the slope of:",
              "options": [
                "Tangent line",
                "Secant line",
                "Normal line",
                "Horizontal line"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Secant line. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q9",
              "type": "typing",
              "question": "What is s''(t) if s(t) = t\u00b3?",
              "correctAnswer": [
                "6t"
              ],
              "xp": 4,
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives."
            },
            {
              "id": "calc_u4_l1_q10",
              "type": "multiple-choice",
              "question": "Instantaneous rate of change is:",
              "options": [
                "Average",
                "Derivative",
                "Integral",
                "Limit"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Derivative. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q11",
              "type": "typing",
              "question": "If v(t) = t + 1, what is s(t)?",
              "correctAnswer": [
                "(1/2)t\u00b2 + t + C",
                "t\u00b2/2 + t + C"
              ],
              "xp": 5,
              "explanation": "Answer: (1/2)t\u00b2 + t + C. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q12",
              "type": "multiple-choice",
              "question": "Speed is the absolute value of:",
              "options": [
                "Position",
                "Velocity",
                "Acceleration",
                "Distance"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Velocity = r'(t). Speed = |velocity|. Acceleration = v'(t) = r''(t)."
            },
            {
              "id": "calc_u4_l1_q13",
              "type": "typing",
              "question": "If a(t) = 2, what is v(t)?",
              "correctAnswer": [
                "2t + C"
              ],
              "xp": 4,
              "explanation": "Answer: 2t + C. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q14",
              "type": "multiple-choice",
              "question": "When velocity is positive, position is:",
              "options": [
                "Decreasing",
                "Increasing",
                "Constant",
                "Zero"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Velocity = r'(t). Speed = |velocity|. Acceleration = v'(t) = r''(t)."
            },
            {
              "id": "calc_u4_l1_q15",
              "type": "typing",
              "question": "What is a(t) if s(t) = t\u2074?",
              "correctAnswer": [
                "12t\u00b2"
              ],
              "xp": 5,
              "explanation": "Answer: 12t\u00b2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l1_q16",
              "type": "multiple-choice",
              "question": "Velocity can be:",
              "options": [
                "Always positive",
                "Always negative",
                "Positive or negative",
                "Always zero"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Positive or negative"
            },
            {
              "id": "calc_u4_l1_q17",
              "type": "typing",
              "question": "If s(t) = 5t, what is acceleration?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "Acceleration = derivative of velocity. a(t) = v'(t)"
            },
            {
              "id": "calc_u4_l1_q18",
              "type": "multiple-choice",
              "question": "The second derivative of position is:",
              "options": [
                "Velocity",
                "Acceleration",
                "Speed",
                "Jerk"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Apply derivative rules: power rule, product rule, chain rule, or standard derivatives."
            }
          ]
        },
        {
          "id": "4-2",
          "title": "Area and Volume",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Area and Volume\n\nIntegrals help us calculate geometric quantities like area and volume.\n\n## Area Under a Curve:\n\nThe area under f(x) from a to b is:\n\nArea = \u222b\u2090\u1d47 f(x) dx\n\n## Area Between Curves:\n\nThe area between f(x) (top) and g(x) (bottom) from a to b:\n\nArea = \u222b\u2090\u1d47 [f(x) - g(x)] dx\n\n## Volumes of Revolution:\n\n**Disk Method (rotation about x-axis):**\n\nV = \u222b\u2090\u1d47 \u03c0[f(x)]\u00b2 dx\n\nEach cross-section is a disk with radius f(x).\n\n**Washer Method (rotation about x-axis with hole):**\n\nV = \u222b\u2090\u1d47 \u03c0{[f(x)]\u00b2 - [g(x)]\u00b2} dx\n\nOuter radius f(x), inner radius g(x).\n\n**Shell Method (rotation about y-axis):**\n\nV = \u222b\u2090\u1d47 2\u03c0x\u00b7f(x) dx\n\nEach shell has radius x and height f(x).\n\n## Example (Disk):\n\nVolume of y = \u221ax from 0 to 4 rotated about x-axis:\n\nV = \u222b\u2080\u2074 \u03c0(\u221ax)\u00b2 dx = \u03c0\u222b\u2080\u2074 x dx = 8\u03c0",
          "questions": [
            {
              "id": "calc_u4_l2_q1",
              "type": "typing",
              "question": "What is \u222b from 0 to 1 (x + 1) dx?",
              "correctAnswer": [
                "1.5",
                "3/2"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u4_l2_q2",
              "type": "typing",
              "question": "The area under f(x) = x from 0 to 2 is:",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u4_l2_q3",
              "type": "typing",
              "question": "What is \u222b from 0 to \u03c0 sin(x) dx?",
              "correctAnswer": [
                "2"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u4_l2_q4",
              "type": "multiple-choice",
              "question": "The disk method uses:",
              "options": [
                "Rectangles",
                "Cylinders",
                "Disks",
                "Shells"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: Disks. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l2_q5",
              "type": "typing",
              "question": "Volume of a sphere with radius r is:",
              "correctAnswer": [
                "(4/3)\u03c0r\u00b3"
              ],
              "xp": 4,
              "explanation": "Radius R: series converges for |x-a|<R, diverges for |x-a|>R. Test endpoints."
            },
            {
              "id": "calc_u4_l2_q6",
              "type": "multiple-choice",
              "question": "The washer method is used when there is:",
              "options": [
                "No hole",
                "A hole",
                "Multiple holes",
                "No solid"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: A hole. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l2_q7",
              "type": "typing",
              "question": "What is \u222b from 0 to 1 (x\u00b2) dx?",
              "correctAnswer": [
                "1/3"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u4_l2_q8",
              "type": "multiple-choice",
              "question": "Shell method uses:",
              "options": [
                "Cross-sectional area",
                "Lateral surface area",
                "Circumference \u00d7 height",
                "Base \u00d7 height"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Circumference \u00d7 height"
            },
            {
              "id": "calc_u4_l2_q9",
              "type": "typing",
              "question": "Area between f(x) = x\u00b2 and g(x) = x from 0 to 1:",
              "correctAnswer": [
                "1/6"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u4_l2_q10",
              "type": "multiple-choice",
              "question": "Volume by disks about x-axis uses:",
              "options": [
                "\u03c0\u222b (y)\u00b2 dx",
                "\u03c0\u222b (x)\u00b2 dy",
                "\u222b y dx",
                "\u222b x dy"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: \u03c0\u222b (y)\u00b2 dx. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l2_q11",
              "type": "typing",
              "question": "What is the area under y = x\u00b2 from 0 to 2?",
              "correctAnswer": [
                "8/3"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u4_l2_q12",
              "type": "multiple-choice",
              "question": "For area between curves, you integrate:",
              "options": [
                "Top curve",
                "Bottom curve",
                "Top minus bottom",
                "Bottom minus top"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Top minus bottom"
            },
            {
              "id": "calc_u4_l2_q13",
              "type": "typing",
              "question": "Volume of a cylinder with radius r and height h:",
              "correctAnswer": [
                "\u03c0r\u00b2h"
              ],
              "xp": 4,
              "explanation": "Radius R: series converges for |x-a|<R, diverges for |x-a|>R. Test endpoints."
            },
            {
              "id": "calc_u4_l2_q14",
              "type": "multiple-choice",
              "question": "Arc length formula uses:",
              "options": [
                "f(x)",
                "f'(x)",
                "\u221a(1 + f'(x)\u00b2)",
                "f(x)\u00b2"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Arc length = \u222b|r'(t)| dt. Curvature measures how fast curve bends."
            },
            {
              "id": "calc_u4_l2_q15",
              "type": "typing",
              "question": "Area between y = x and y = x\u00b2 from 0 to 1:",
              "correctAnswer": [
                "1/6"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u4_l2_q16",
              "type": "multiple-choice",
              "question": "Surface area of revolution uses:",
              "options": [
                "2\u03c0\u222b f(x) dx",
                "2\u03c0\u222b f(x)\u221a(1+f'(x)\u00b2) dx",
                "2\u03c0\u222b f'(x) dx",
                "\u03c0\u222b f(x)\u00b2 dx"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: 2\u03c0\u222b f(x)\u221a(1+f'(x)\u00b2) dx"
            },
            {
              "id": "calc_u4_l2_q17",
              "type": "typing",
              "question": "Volume of y = x\u00b2 rotated about x-axis from 0 to 1:",
              "correctAnswer": [
                "\u03c0/5"
              ],
              "xp": 4,
              "explanation": "Answer: \u03c0/5. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u4_l2_q18",
              "type": "multiple-choice",
              "question": "For area, if curves cross, you must:",
              "options": [
                "Ignore crossing",
                "Integrate separately",
                "Use washer method",
                "Use shell method"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Integrate separately"
            }
          ]
        }
      ]
    },
    {
      "unitId": "5",
      "unitName": "5. Integration Techniques",
      "lessons": [
        {
          "id": "5-1",
          "title": "Substitution (u-substitution)",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# U-Substitution\n\nU-substitution is the reverse of the chain rule. It's used when you can see an \"inner function\" and its derivative present.\n\n## The Method:\n\n1. **Choose u** - Pick the inner function (usually inside parentheses or under a root)\n2. **Find du** - Compute du = u' dx\n3. **Substitute** - Replace all instances of x with u, and dx with du/u'\n4. **Integrate** - Now integrate in terms of u\n5. **Back-substitute** - Replace u with the original expression\n\n## Example:\n\n\u222b 2x \u00b7 cos(x\u00b2) dx\n\n**Choose:** u = x\u00b2\n**Find:** du = 2x dx\n**Substitute:** \u222b cos(u) du\n**Integrate:** sin(u) + C\n**Back-substitute:** sin(x\u00b2) + C\n\n## Key Insight:\n\nYou need BOTH u AND du (or a constant multiple) to be present in the integral.",
          "questions": [
            {
              "id": "calc_u5_l1_q1",
              "type": "typing",
              "question": "U-substitution is the reverse of what rule?",
              "correctAnswer": [
                "chain rule",
                "Chain Rule"
              ],
              "xp": 5,
              "explanation": "U-substitution: Choose u, find du, substitute, integrate, back-substitute"
            },
            {
              "id": "calc_u5_l1_q2",
              "type": "typing",
              "question": "What is \u222b 2x\u00b7e^(x\u00b2) dx?",
              "correctAnswer": [
                "e^(x\u00b2) + C",
                "e^(x^2) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q3",
              "type": "typing",
              "question": "What is the first step in u-substitution?",
              "correctAnswer": [
                "Choose u",
                "pick u"
              ],
              "xp": 5,
              "explanation": "U-substitution: Choose u, find du, substitute, integrate, back-substitute"
            },
            {
              "id": "calc_u5_l1_q4",
              "type": "multiple-choice",
              "question": "What is u in \u222b 3x\u00b2\u00b7sin(x\u00b3) dx?",
              "options": [
                "sin(x)",
                "x\u00b2",
                "x\u00b3",
                "3x\u00b2"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q5",
              "type": "typing",
              "question": "What is \u222b cos(x)\u00b7sin(x) dx?",
              "correctAnswer": [
                "sin\u00b2(x)/2 + C",
                "sin^2(x)/2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l1_q6",
              "type": "multiple-choice",
              "question": "For \u222b (2x+1)/(x\u00b2+x) dx, what would you choose as u?",
              "options": [
                "2x+1",
                "x\u00b2+x",
                "x",
                "1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q7",
              "type": "typing",
              "question": "What is \u222b x\u00b7\u221a(x\u00b2+1) dx?",
              "correctAnswer": [
                "(x\u00b2+1)^(3/2)/3 + C",
                "(x^2+1)^(3/2)/3 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q8",
              "type": "multiple-choice",
              "question": "What do you need present for u-substitution to work?",
              "options": [
                "Only u",
                "Only du",
                "Both u and du (or constant multiple)",
                "Neither"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Both u and du (or constant multiple)"
            },
            {
              "id": "calc_u5_l1_q9",
              "type": "typing",
              "question": "What is \u222b e^x/(1+e^x) dx?",
              "correctAnswer": [
                "ln|1+e^x| + C",
                "ln(1+e^x) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l1_q10",
              "type": "multiple-choice",
              "question": "When substituting, what happens to dx?",
              "options": [
                "Stays as dx",
                "Becomes du/u'",
                "Becomes du",
                "Disappears"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Becomes du/u'. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l1_q11",
              "type": "typing",
              "question": "What is \u222b x\u00b7cos(x\u00b2) dx?",
              "correctAnswer": [
                "sin(x\u00b2)/2 + C",
                "sin(x^2)/2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q12",
              "type": "multiple-choice",
              "question": "If du = 2x dx but you only have x dx, what do you do?",
              "options": [
                "Cannot solve",
                "Use du/2",
                "Multiply by 2",
                "Change u"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Use du/2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l1_q13",
              "type": "typing",
              "question": "What is \u222b ln(x)/x dx?",
              "correctAnswer": [
                "(ln(x))\u00b2/2 + C",
                "ln(x)^2/2 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l1_q14",
              "type": "multiple-choice",
              "question": "What is the last step in u-substitution?",
              "options": [
                "Integrate",
                "Back-substitute",
                "Choose u",
                "Find du"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Back-substitute. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l1_q15",
              "type": "typing",
              "question": "What is \u222b tan(x) dx?",
              "correctAnswer": [
                "-ln|cos(x)| + C",
                "ln|sec(x)| + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l1_q16",
              "type": "multiple-choice",
              "question": "Can you use u-substitution on any integral?",
              "options": [
                "Yes",
                "No, only when u and du are present",
                "Only with trig",
                "Only with polynomials"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: No, only when u and du are present"
            },
            {
              "id": "calc_u5_l1_q17",
              "type": "typing",
              "question": "What is \u222b x\u00b2/(x\u00b3+1) dx?",
              "correctAnswer": [
                "(1/3)ln|x\u00b3+1| + C",
                "ln|x\u00b3+1|/3 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l1_q18",
              "type": "multiple-choice",
              "question": "What if du is missing entirely?",
              "options": [
                "Can't use substitution",
                "Try different u",
                "Multiply by constant",
                "Integration impossible"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Try different u. Apply the appropriate formula from the lesson."
            }
          ]
        },
        {
          "id": "5-2",
          "title": "Integration by parts",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Integration by Parts\n\nIntegration by parts is the reverse of the product rule. It's used when integrating products of different function types.\n\n## The Formula:\n\n\u222b u dv = uv - \u222b v du\n\n## LIATE Rule (choosing u):\n\n**L** - Logarithmic (ln x)\n**I** - Inverse trig (arcsin, arctan)\n**A** - Algebraic (x\u00b2, 3x+1)\n**T** - Trigonometric (sin x, cos x)\n**E** - Exponential (e\u02e3, a\u02e3)\n\nPick u from the top of this list!\n\n## Example:\n\n\u222b x\u00b7e\u02e3 dx\n\n**Choose:** u = x, dv = e\u02e3 dx\n**Compute:** du = dx, v = e\u02e3\n**Apply:** x\u00b7e\u02e3 - \u222b e\u02e3 dx = x\u00b7e\u02e3 - e\u02e3 + C\n\n## Sometimes you apply it twice:\n\n\u222b e\u02e3\u00b7sin x dx\n\nAfter applying once, you get another integral that also needs parts. Solve for \u222b e\u02e3\u00b7sin x dx by moving it to the left side.",
          "questions": [
            {
              "id": "calc_u5_l2_q1",
              "type": "typing",
              "question": "Integration by parts is the reverse of what rule?",
              "correctAnswer": [
                "product rule",
                "Product Rule"
              ],
              "xp": 5,
              "explanation": "Integration by parts: \u222bu dv = uv - \u222bv du (reverse of product rule)"
            },
            {
              "id": "calc_u5_l2_q2",
              "type": "typing",
              "question": "What is the formula for integration by parts?",
              "correctAnswer": [
                "\u222b u dv = uv - \u222b v du"
              ],
              "xp": 4,
              "explanation": "Integration by parts: \u222bu dv = uv - \u222bv du (reverse of product rule)"
            },
            {
              "id": "calc_u5_l2_q3",
              "type": "typing",
              "question": "What is \u222b x\u00b7e\u02e3 dx?",
              "correctAnswer": [
                "xe\u02e3 - e\u02e3 + C",
                "xe^x - e^x + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q4",
              "type": "multiple-choice",
              "question": "In the LIATE rule, what does L stand for?",
              "options": [
                "Linear",
                "Logarithmic",
                "Length",
                "Last"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Logarithmic. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l2_q5",
              "type": "typing",
              "question": "What is \u222b x\u00b7cos(x) dx?",
              "correctAnswer": [
                "x\u00b7sin(x) + cos(x) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q6",
              "type": "multiple-choice",
              "question": "For \u222b ln(x) dx, what should you choose as u?",
              "options": [
                "1",
                "ln(x)",
                "x",
                "Cannot use parts"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q7",
              "type": "typing",
              "question": "What is \u222b ln(x) dx?",
              "correctAnswer": [
                "x\u00b7ln(x) - x + C",
                "x ln(x) - x + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q8",
              "type": "multiple-choice",
              "question": "What does the I in LIATE stand for?",
              "options": [
                "Integer",
                "Inverse trig",
                "Identity",
                "Impossible"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Inverse trig. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l2_q9",
              "type": "typing",
              "question": "What is \u222b x\u00b2\u00b7e\u02e3 dx?",
              "correctAnswer": [
                "x\u00b2e\u02e3 - 2xe\u02e3 + 2e\u02e3 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l2_q10",
              "type": "multiple-choice",
              "question": "When do you apply integration by parts twice?",
              "options": [
                "Always",
                "When the result still has a product",
                "Never",
                "Only with e\u02e3"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: When the result still has a product"
            },
            {
              "id": "calc_u5_l2_q11",
              "type": "typing",
              "question": "What is \u222b x\u00b7ln(x) dx?",
              "correctAnswer": [
                "x\u00b2ln(x)/2 - x\u00b2/4 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q12",
              "type": "multiple-choice",
              "question": "What is \u222b arctan(x) dx?",
              "options": [
                "x\u00b7arctan(x) - ln(1+x\u00b2)/2 + C",
                "arctan(x)/x + C",
                "Cannot do with parts",
                "x\u00b2\u00b7arctan(x) + C"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q13",
              "type": "typing",
              "question": "What is \u222b e\u02e3\u00b7sin(x) dx?",
              "correctAnswer": [
                "e\u02e3(sin(x) - cos(x))/2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q14",
              "type": "multiple-choice",
              "question": "What if \u222b v du is simpler than original?",
              "options": [
                "Problem",
                "Good - this is the goal",
                "Wrong choice of u",
                "Impossible"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Good - this is the goal"
            },
            {
              "id": "calc_u5_l2_q15",
              "type": "typing",
              "question": "What is \u222b x\u00b7sin(x) dx?",
              "correctAnswer": [
                "-x\u00b7cos(x) + sin(x) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q16",
              "type": "multiple-choice",
              "question": "Can integration by parts solve any integral?",
              "options": [
                "Yes",
                "No, only product-type integrals",
                "Only with e\u02e3",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: No, only product-type integrals"
            },
            {
              "id": "calc_u5_l2_q17",
              "type": "typing",
              "question": "What is \u222b arcsin(x) dx?",
              "correctAnswer": [
                "x\u00b7arcsin(x) + \u221a(1-x\u00b2) + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l2_q18",
              "type": "multiple-choice",
              "question": "What if vdu is the same as the original integral?",
              "options": [
                "Cannot solve",
                "Solve for the integral algebraically",
                "Try different u",
                "Give up"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Solve for the integral algebraically"
            }
          ]
        },
        {
          "id": "5-3",
          "title": "Trigonometric integrals and substitutions",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Trigonometric Integrals and Substitutions\n\n## Products of Sine and Cosine:\n\n**\u222b sin\u1d50(x)\u00b7cos\u207f(x) dx**\n\n- If m is odd: Save one sin(x), use sin\u00b2(x) = 1 - cos\u00b2(x)\n- If n is odd: Save one cos(x), use cos\u00b2(x) = 1 - sin\u00b2(x)\n- If both even: Use power-reduction formulas\n\n## Products of Tangent and Secant:\n\n**\u222b sec\u1d50(x)\u00b7tan\u207f(x) dx**\n\n- If m is even: Save sec\u00b2(x), use tan\u00b2(x) = sec\u00b2(x) - 1\n- If n is odd: Save sec(x)tan(x), use sec\u00b2(x) = tan\u00b2(x) + 1\n\n## Trig Substitution:\n\nUse when you see:\n- \u221a(a\u00b2 - x\u00b2) \u2192 x = a\u00b7sin(\u03b8)\n- \u221a(a\u00b2 + x\u00b2) \u2192 x = a\u00b7tan(\u03b8)\n- \u221a(x\u00b2 - a\u00b2) \u2192 x = a\u00b7sec(\u03b8)\n\nThen use:\n- 1 - sin\u00b2(\u03b8) = cos\u00b2(\u03b8)\n- 1 + tan\u00b2(\u03b8) = sec\u00b2(\u03b8)\n- sec\u00b2(\u03b8) - 1 = tan\u00b2(\u03b8)",
          "questions": [
            {
              "id": "calc_u5_l3_q1",
              "type": "typing",
              "question": "For \u222b sin\u00b3(x)cos(x) dx, what strategy do you use?",
              "correctAnswer": [
                "Save one cos(x), use cos\u00b2 = 1 - sin\u00b2",
                "u-substitution with u = sin(x)"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q2",
              "type": "typing",
              "question": "What is \u222b sin(x)cos(x) dx?",
              "correctAnswer": [
                "sin\u00b2(x)/2 + C",
                "sin^2(x)/2 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q3",
              "type": "typing",
              "question": "If sin power is odd, what do you save?",
              "correctAnswer": [
                "One sin(x)",
                "sin(x)"
              ],
              "xp": 5,
              "explanation": "Answer: One sin(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q4",
              "type": "multiple-choice",
              "question": "What is sin\u00b2(x) + cos\u00b2(x) equal to?",
              "options": [
                "0",
                "1",
                "sin(2x)",
                "cos(2x)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 1. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q5",
              "type": "typing",
              "question": "What is \u222b sin\u00b2(x) dx?",
              "correctAnswer": [
                "x/2 - sin(2x)/4 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q6",
              "type": "multiple-choice",
              "question": "If both sine and cosine powers are even, use:",
              "options": [
                "U-substitution",
                "Power-reduction formulas",
                "Parts",
                "Trig substitution"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Power-reduction formulas"
            },
            {
              "id": "calc_u5_l3_q7",
              "type": "typing",
              "question": "What is \u222b tan\u00b2(x) dx?",
              "correctAnswer": [
                "tan(x) - x + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q8",
              "type": "multiple-choice",
              "question": "What is 1 + tan\u00b2(x) equal to?",
              "options": [
                "sin\u00b2(x)",
                "cos\u00b2(x)",
                "sec\u00b2(x)",
                "csc\u00b2(x)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: sec\u00b2(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q9",
              "type": "typing",
              "question": "What is \u222b sec\u2074(x)tan(x) dx?",
              "correctAnswer": [
                "sec\u2074(x)/4 + C",
                "sec^4(x)/4 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q10",
              "type": "multiple-choice",
              "question": "For \u221a(4 - x\u00b2), what substitution do you use?",
              "options": [
                "x = 2tan(\u03b8)",
                "x = 2sin(\u03b8)",
                "x = 2sec(\u03b8)",
                "x = 2cos(\u03b8)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: x = 2sin(\u03b8). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q11",
              "type": "typing",
              "question": "What is \u222b cos\u00b2(x) dx?",
              "correctAnswer": [
                "x/2 + sin(2x)/4 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q12",
              "type": "multiple-choice",
              "question": "For \u221a(1 + x\u00b2), what substitution do you use?",
              "options": [
                "x = sin(\u03b8)",
                "x = tan(\u03b8)",
                "x = sec(\u03b8)",
                "x = cos(\u03b8)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: x = tan(\u03b8). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q13",
              "type": "typing",
              "question": "What is \u222b sin\u00b3(x) dx?",
              "correctAnswer": [
                "cos\u00b3(x)/3 - cos(x) + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q14",
              "type": "multiple-choice",
              "question": "What is sec\u00b2(x) - 1 equal to?",
              "options": [
                "sin\u00b2(x)",
                "cos\u00b2(x)",
                "tan\u00b2(x)",
                "cot\u00b2(x)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: tan\u00b2(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q15",
              "type": "typing",
              "question": "What is \u222b tan(x)sec\u00b2(x) dx?",
              "correctAnswer": [
                "tan\u00b2(x)/2 + C",
                "tan^2(x)/2 + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q16",
              "type": "multiple-choice",
              "question": "For \u221a(x\u00b2 - 9), what substitution do you use?",
              "options": [
                "x = 3sin(\u03b8)",
                "x = 3tan(\u03b8)",
                "x = 3sec(\u03b8)",
                "x = 3cos(\u03b8)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: x = 3sec(\u03b8). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l3_q17",
              "type": "typing",
              "question": "What is \u222b cos\u00b3(x) dx?",
              "correctAnswer": [
                "sin(x) - sin\u00b3(x)/3 + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l3_q18",
              "type": "multiple-choice",
              "question": "After trig substitution, what do you need to convert back to?",
              "options": [
                "Trig",
                "x",
                "Numbers",
                "Cannot convert"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "U-substitution: Choose u, find du, substitute, integrate, back-substitute"
            }
          ]
        },
        {
          "id": "5-4",
          "title": "Partial fraction decomposition",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Partial Fraction Decomposition\n\nUsed for integrating rational functions: P(x)/Q(x)\n\n## Steps:\n\n1. **Factor the denominator** Q(x) into irreducible factors\n2. **Write partial fractions** - One term for each factor\n3. **Find the constants** (A, B, C...) using algebra\n4. **Integrate each term separately**\n\n## Types of Factors:\n\n**Linear (ax + b):** A/(ax + b)\n\n**Repeated linear (ax + b)\u207f:** A/(ax + b) + B/(ax + b)\u00b2 + ...\n\n**Quadratic (ax\u00b2 + bx + c):** (Ax + B)/(ax\u00b2 + bx + c)\n\n**Example:** \u222b 1/(x\u00b2 - 1) dx\n\nFactor: 1/[(x-1)(x+1)] = A/(x-1) + B/(x+1)\n\nSolve: 1 = A(x+1) + B(x-1)\n- For x = 1: 1 = 2A, so A = 1/2\n- For x = -1: 1 = -2B, so B = -1/2\n\n\u222b [1/2(x-1) - 1/2(x+1)] dx = (1/2)ln|x-1| - (1/2)ln|x+1| + C",
          "questions": [
            {
              "id": "calc_u5_l4_q1",
              "type": "typing",
              "question": "Partial fractions is used for integrating what type of functions?",
              "correctAnswer": [
                "rational functions",
                "P(x)/Q(x)"
              ],
              "xp": 5,
              "explanation": "Partial fractions: Decompose P(x)/Q(x) into simpler terms, then integrate each"
            },
            {
              "id": "calc_u5_l4_q2",
              "type": "typing",
              "question": "What is the first step in partial fraction decomposition?",
              "correctAnswer": [
                "Factor the denominator",
                "factor Q(x)"
              ],
              "xp": 4,
              "explanation": "Partial fractions: Decompose P(x)/Q(x) into simpler terms, then integrate each"
            },
            {
              "id": "calc_u5_l4_q3",
              "type": "typing",
              "question": "What is \u222b 1/(x\u00b2 - 1) dx?",
              "correctAnswer": [
                "(1/2)ln|x-1| - (1/2)ln|x+1| + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q4",
              "type": "multiple-choice",
              "question": "For factor (x+3), what is the partial fraction form?",
              "options": [
                "A/(x+3)",
                "Ax + B",
                "A/x + B/3",
                "A/(x+3)\u00b2"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: A/(x+3). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l4_q5",
              "type": "typing",
              "question": "What is \u222b 1/(x\u00b2 - 4) dx?",
              "correctAnswer": [
                "(1/4)ln|(x-2)/(x+2)| + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q6",
              "type": "multiple-choice",
              "question": "For factor (x-2)\u00b3, how many partial fractions do you need?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Partial fractions: Decompose P(x)/Q(x) into simpler terms, then integrate each"
            },
            {
              "id": "calc_u5_l4_q7",
              "type": "typing",
              "question": "What is \u222b x/(x\u00b2+2x+1) dx?",
              "correctAnswer": [
                "ln|x+1| + 1/(x+1) + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q8",
              "type": "multiple-choice",
              "question": "For quadratic factor x\u00b2+1, what is the partial fraction form?",
              "options": [
                "A/(x\u00b2+1)",
                "(Ax+B)/(x\u00b2+1)",
                "A/x + B",
                "Cannot do"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: (Ax+B)/(x\u00b2+1). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l4_q9",
              "type": "typing",
              "question": "What is \u222b 1/(x\u00b2 - 9) dx?",
              "correctAnswer": [
                "(1/6)ln|(x-3)/(x+3)| + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q10",
              "type": "multiple-choice",
              "question": "How do you find constants A, B, C?",
              "options": [
                "Guess",
                "Using algebra",
                "Integration",
                "Differentiation"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Using algebra. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u5_l4_q11",
              "type": "typing",
              "question": "What is \u222b (x+1)/(x\u00b2+3x+2) dx?",
              "correctAnswer": [
                "ln|x+2| + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q12",
              "type": "multiple-choice",
              "question": "Can you always use partial fractions?",
              "options": [
                "Yes",
                "No, degree of P must be less than Q",
                "Only for quadratics",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: No, degree of P must be less than Q"
            },
            {
              "id": "calc_u5_l4_q13",
              "type": "typing",
              "question": "What is \u222b 2x/(x\u00b2-1) dx?",
              "correctAnswer": [
                "ln|x\u00b2-1| + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q14",
              "type": "multiple-choice",
              "question": "What if degree of P \u2265 degree of Q?",
              "options": [
                "Cannot integrate",
                "Do polynomial division first",
                "Use different method",
                "Impossible"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Do polynomial division first"
            },
            {
              "id": "calc_u5_l4_q15",
              "type": "typing",
              "question": "What is \u222b 1/(x+1)(x+2) dx?",
              "correctAnswer": [
                "ln|(x+1)/(x+2)| + C"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l4_q16",
              "type": "multiple-choice",
              "question": "After finding A, B, C, what do you do?",
              "options": [
                "Differentiate",
                "Integrate each term",
                "Add them up",
                "Stop"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Integrate each term"
            },
            {
              "id": "calc_u5_l4_q17",
              "type": "typing",
              "question": "What is \u222b 3/(x\u00b2-4x) dx?",
              "correctAnswer": [
                "-(3/4)ln|x| + (3/4)ln|x-4| + C"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l4_q18",
              "type": "multiple-choice",
              "question": "What happens if denominator doesn't factor?",
              "options": [
                "Cannot use partial fractions",
                "Use different integration method",
                "Use complex numbers",
                "Factor by force"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Use different integration method"
            }
          ]
        },
        {
          "id": "5-5",
          "title": "Improper integrals",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# Improper Integrals\n\nAn improper integral has either:\n- An infinite limit of integration\n- An infinite discontinuity within the interval\n\n## Type 1: Infinite Limits\n\n\u222b\u2090^\u221e f(x) dx = lim(b\u2192\u221e) \u222b\u2090\u1d47 f(x) dx\n\nConverges if the limit exists, diverges otherwise.\n\n## Type 2: Infinite Discontinuity\n\nIf f has a discontinuity at c:\n\u222b\u2090\u1d47 f(x) dx = lim(t\u2192c\u207b) \u222b\u2090\u1d57 f(x) dx + lim(t\u2192c\u207a) \u222b\u209c\u1d47 f(x) dx\n\n## Comparison Test:\n\nIf 0 \u2264 f(x) \u2264 g(x):\n- If \u222b g converges, then \u222b f converges\n- If \u222b f diverges, then \u222b g diverges\n\n## p-Test:\n\n\u222b\u2081^\u221e 1/x\u1d56 dx converges if p > 1, diverges if p \u2264 1\n\n## Examples:\n\n\u222b\u2081^\u221e 1/x\u00b2 dx = lim(b\u2192\u221e)[-1/x]\u2081\u1d47 = 0 - (-1) = 1 \u2713 Converges\n\n\u222b\u2081^\u221e 1/x dx = lim(b\u2192\u221e)[ln|x|]\u2081\u1d47 = \u221e \u2717 Diverges",
          "questions": [
            {
              "id": "calc_u5_l5_q1",
              "type": "typing",
              "question": "What makes an integral \"improper\"?",
              "correctAnswer": [
                "Infinite limit or infinite discontinuity"
              ],
              "xp": 5,
              "explanation": "Improper integrals have infinite limits or discontinuities. Use limits to evaluate."
            },
            {
              "id": "calc_u5_l5_q2",
              "type": "typing",
              "question": "What is \u222b\u2081^\u221e 1/x\u00b2 dx?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l5_q3",
              "type": "typing",
              "question": "How do you evaluate \u222b\u2090^\u221e f(x) dx?",
              "correctAnswer": [
                "lim(b\u2192\u221e) \u222b\u2090\u1d47 f(x) dx",
                "limit as b approaches infinity"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q4",
              "type": "multiple-choice",
              "question": "Does \u222b\u2081^\u221e 1/x dx converge or diverge?",
              "options": [
                "Converges",
                "Diverges",
                "Equals 1",
                "Equals 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q5",
              "type": "typing",
              "question": "What is \u222b\u2080^\u221e e^(-x) dx?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q6",
              "type": "multiple-choice",
              "question": "According to the p-test, \u222b\u2081^\u221e 1/x\u1d56 dx converges when:",
              "options": [
                "p < 1",
                "p = 1",
                "p > 1",
                "p \u2265 1"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q7",
              "type": "typing",
              "question": "What is \u222b\u2080^\u221e e^(-2x) dx?",
              "correctAnswer": [
                "1/2"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q8",
              "type": "multiple-choice",
              "question": "What is Type 2 improper integral?",
              "options": [
                "Infinite limit",
                "Infinite discontinuity",
                "Both",
                "Neither"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Infinite discontinuity"
            },
            {
              "id": "calc_u5_l5_q9",
              "type": "typing",
              "question": "Does \u222b\u2081^\u221e 1/x\u00b3 dx converge or diverge?",
              "correctAnswer": [
                "converges"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b3 dx = x\u2074/4 + C"
            },
            {
              "id": "calc_u5_l5_q10",
              "type": "multiple-choice",
              "question": "If 0 \u2264 f(x) \u2264 g(x) and \u222b g converges, then:",
              "options": [
                "\u222b f diverges",
                "\u222b f converges",
                "Cannot tell",
                "Both diverge"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u5_l5_q11",
              "type": "typing",
              "question": "What is \u222b\u2082^\u221e 1/x\u00b2 dx?",
              "correctAnswer": [
                "1/2"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l5_q12",
              "type": "multiple-choice",
              "question": "What does it mean if an improper integral diverges?",
              "options": [
                "Equals 0",
                "The limit doesn't exist",
                "Equals \u221e",
                "Cannot evaluate"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: The limit doesn't exist"
            },
            {
              "id": "calc_u5_l5_q13",
              "type": "typing",
              "question": "What is \u222b\u2080^1 1/\u221ax dx?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u5_l5_q14",
              "type": "multiple-choice",
              "question": "For discontinuity at c, you split the integral:",
              "options": [
                "At c",
                "At endpoints",
                "Don't split",
                "Integrate directly"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Use integration rules: power rule, standard integrals, or substitution/parts."
            },
            {
              "id": "calc_u5_l5_q15",
              "type": "typing",
              "question": "Does \u222b\u2080^\u221e 1/(1+x\u00b2) dx converge or diverge?",
              "correctAnswer": [
                "converges"
              ],
              "xp": 5,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l5_q16",
              "type": "multiple-choice",
              "question": "When does \u222b\u2080\u00b9 1/x\u1d56 converge?",
              "options": [
                "p < 1",
                "p = 1",
                "p > 1",
                "Never"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "\u222b1/x dx = ln|x| + C. The natural log is the antiderivative of 1/x."
            },
            {
              "id": "calc_u5_l5_q17",
              "type": "typing",
              "question": "What is \u222b\u2081^\u221e 1/(x\u00b2+1) dx?",
              "correctAnswer": [
                "\u03c0/4",
                "pi/4"
              ],
              "xp": 4,
              "explanation": "Power rule: \u222bx\u00b2 dx = x\u00b3/3 + C (add 1 to power, divide by new power)"
            },
            {
              "id": "calc_u5_l5_q18",
              "type": "multiple-choice",
              "question": "Can an improper integral be finite?",
              "options": [
                "No",
                "Yes",
                "Only if p < 1",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Improper integrals have infinite limits or discontinuities. Use limits to evaluate."
            }
          ]
        }
      ]
    },
    {
      "unitId": "6",
      "unitName": "6. Applications of Integrals",
      "lessons": [
        {
          "id": "6-1",
          "title": "Area between curves",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# Area Between Curves\n\nThe area between two curves \\(f(x)\\) and \\(g(x)\\) from \\(a\\) to \\(b\\) (where \\(f(x) \\geq g(x)\\)) is given by:\n\n\\[ \\text{Area} = \\int_a^b [f(x) - g(x)] \\, dx \\]\n\n## Key Steps:\n\n1. **Find the points of intersection** - Solve \\(f(x) = g(x)\\)\n2. **Determine which function is on top** - Which is larger in the interval?\n3. **Set up the integral** - Top curve minus bottom curve\n4. **Evaluate** - Compute the definite integral\n\n## Example:\n\nFind the area between \\(y = x\\) and \\(y = x^2\\) from 0 to 1.\n\n**Step 1:** Points of intersection at \\(x = 0\\) and \\(x = 1\\).\n\n**Step 2:** Since \\(x \\geq x^2\\) on \\([0, 1]\\), \\(x\\) is on top.\n\n**Step 3:** Set up the integral.\n\n\\[ \\text{Area} = \\int_0^1 (x - x^2) \\, dx \\]\n\n**Step 4:** Evaluate.\n\n\\[ \\text{Area} = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6} \\]\n\n---\n\n## When Curves Cross:\n\nIf the curves cross within your interval, **split the integral** at the crossing point(s). The \"top\" function changes, so you need separate integrals for each region.",
          "questions": [
            {
              "id": "calc_u6_l1_q1",
              "type": "typing",
              "question": "What is the formula for area between curves f(x) and g(x) from a to b?",
              "correctAnswer": [
                "\u222b\u2090\u1d47 [f(x) - g(x)] dx",
                "integral from a to b of (f(x) - g(x)) dx"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q2",
              "type": "typing",
              "question": "What is the first step to find area between two curves?",
              "correctAnswer": [
                "Find points of intersection",
                "Find where f(x) = g(x)",
                "Solve f(x) = g(x)"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q3",
              "type": "typing",
              "question": "Find the area between y = x and y = x\u00b2 from 0 to 1.",
              "correctAnswer": [
                "1/6"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q4",
              "type": "multiple-choice",
              "question": "If f(x) \u2265 g(x), what represents the vertical distance between curves?",
              "options": [
                "f(x) + g(x)",
                "f(x) - g(x)",
                "f(x) \u00b7 g(x)",
                "f(x) / g(x)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: f(x) - g(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l1_q5",
              "type": "typing",
              "question": "What is the area between y = \u221ax and y = x from 0 to 1?",
              "correctAnswer": [
                "1/6"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q6",
              "type": "multiple-choice",
              "question": "To find intersection points, you set what equal?",
              "options": [
                "f'(x) = g'(x)",
                "\u222bf(x) = \u222bg(x)",
                "f(x) = g(x)",
                "f(x) + g(x) = 0"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: f(x) = g(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l1_q7",
              "type": "typing",
              "question": "Find area between y = x\u00b2 and y = x + 2 from -1 to 2.",
              "correctAnswer": [
                "9/2",
                "4.5"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q8",
              "type": "multiple-choice",
              "question": "What happens if curves cross within the interval?",
              "options": [
                "Ignore it",
                "Use absolute value",
                "Split into separate integrals",
                "Add the areas"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Split into separate integrals"
            },
            {
              "id": "calc_u6_l1_q9",
              "type": "typing",
              "question": "Find area between y = 2x and y = x\u00b2 from 0 to 2.",
              "correctAnswer": [
                "4/3"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q10",
              "type": "multiple-choice",
              "question": "The area between curves is always what type of number?",
              "options": [
                "Negative",
                "Zero",
                "Positive",
                "Complex"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Positive. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l1_q11",
              "type": "typing",
              "question": "Find area between y = e\u02e3 and y = 1 from 0 to ln(2).",
              "correctAnswer": [
                "2 - ln(2)",
                "2 - ln2"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q12",
              "type": "multiple-choice",
              "question": "What if you integrate from right to left (b to a)?",
              "options": [
                "Area doubles",
                "Sign flips",
                "No change",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Sign flips. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l1_q13",
              "type": "typing",
              "question": "Find area between y = cos(x) and y = sin(x) from 0 to \u03c0/4.",
              "correctAnswer": [
                "\u221a2 - 1",
                "sqrt(2) - 1"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q14",
              "type": "multiple-choice",
              "question": "When setting up area integrals, what must be positive?",
              "options": [
                "The limits",
                "The derivative",
                "The integrand f(x) - g(x)",
                "The constant C"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: The integrand f(x) - g(x)"
            },
            {
              "id": "calc_u6_l1_q15",
              "type": "typing",
              "question": "Find area between y = x\u00b3 and y = x from 0 to 1.",
              "correctAnswer": [
                "1/4"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q16",
              "type": "multiple-choice",
              "question": "What is the geometric interpretation of \u222b[f(x) - g(x)]dx?",
              "options": [
                "Volume",
                "Surface area",
                "Sum of infinitesimal rectangles",
                "Arc length"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Power rule: \u222bx\u207f dx = x^(n+1)/(n+1) + C"
            },
            {
              "id": "calc_u6_l1_q17",
              "type": "typing",
              "question": "Find area between y = 4 - x\u00b2 and the x-axis from -2 to 2.",
              "correctAnswer": [
                "32/3"
              ],
              "xp": 4,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l1_q18",
              "type": "multiple-choice",
              "question": "Can you find area using respect to y instead of x?",
              "options": [
                "No",
                "Yes - use horizontal slices",
                "Only for vertical curves",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Yes - use horizontal slices"
            }
          ]
        },
        {
          "id": "6-2",
          "title": "Volumes of solids (disk, washer, shell)",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Volumes of Solids of Revolution\n\n## Disk Method\n\nWhen rotating the region under \\(f(x)\\) from \\(a\\) to \\(b\\) about the **x-axis**, each cross-section is a disk:\n\n\\[ V = \\int_a^b \\pi [f(x)]^2 \\, dx \\]\n\nThe **radius** of each disk is the function value \\(f(x)\\).\n\n## Washer Method\n\nWhen rotating the region between two curves, there's a hole:\n\n\\[ V = \\int_a^b \\pi \\{[f(x)]^2 - [g(x)]^2\\} \\, dx \\]\n\nThe outer radius is \\(f(x)\\), inner radius is \\(g(x)\\).\n\n## Shell Method\n\nFor rotation about the **y-axis** using vertical slices:\n\n\\[ V = \\int_a^b 2\\pi x \\cdot f(x) \\, dx \\]\n\n- **Radius:** \\(x\\) (distance from y-axis)\n- **Height:** \\(f(x)\\) (function value)\n- **Circumference:** \\(2\\pi x\\)\n\n---\n\n## Example (Disk):\n\nVolume of \\(y = \\sqrt{x}\\) from 0 to 4 rotated about x-axis.\n\n\\[ V = \\int_0^4 \\pi (\\sqrt{x})^2 \\, dx = \\pi \\int_0^4 x \\, dx = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = 8\\pi \\]\n\n## Example (Shell):\n\nVolume of \\(y = x^2\\) from 0 to 2 rotated about y-axis.\n\n\\[ V = \\int_0^2 2\\pi x \\cdot x^2 \\, dx = 2\\pi \\int_0^2 x^3 \\, dx = 2\\pi \\left[\\frac{x^4}{4}\\right]_0^2 = 8\\pi \\]",
          "questions": [
            {
              "id": "calc_u6_l2_q1",
              "type": "typing",
              "question": "What does the disk method use for volume?",
              "correctAnswer": [
                "Circular cross-sections",
                "Disks",
                "\u03c0r\u00b2 slices"
              ],
              "xp": 5,
              "explanation": "Disk method: V = \u222b\u03c0[f(x)]\u00b2 dx (solid of revolution about x-axis)"
            },
            {
              "id": "calc_u6_l2_q2",
              "type": "typing",
              "question": "What is the formula for the disk method?",
              "correctAnswer": [
                "\u222b\u2090\u1d47 \u03c0[f(x)]\u00b2 dx",
                "\u03c0\u222b[f(x)]\u00b2 dx"
              ],
              "xp": 4,
              "explanation": "Answer: \u222b\u2090\u1d47 \u03c0[f(x)]\u00b2 dx. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q3",
              "type": "typing",
              "question": "Find volume of y = \u221ax (0 to 4) rotated about x-axis.",
              "correctAnswer": [
                "8\u03c0",
                "8pi"
              ],
              "xp": 5,
              "explanation": "Answer: 8\u03c0. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q4",
              "type": "multiple-choice",
              "question": "Why is it called the 'washer' method?",
              "options": [
                "It washes away volume",
                "It has a hole like a washer",
                "It uses water",
                "It's faster"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: It has a hole like a washer"
            },
            {
              "id": "calc_u6_l2_q5",
              "type": "typing",
              "question": "Find volume of y = x\u00b2 (0 to 2) rotated about y-axis using shells.",
              "correctAnswer": [
                "8\u03c0",
                "8pi"
              ],
              "xp": 4,
              "explanation": "Shell method: V = \u222b2\u03c0x\u00b7f(x) dx (rotation about y-axis)"
            },
            {
              "id": "calc_u6_l2_q6",
              "type": "multiple-choice",
              "question": "What is the radius in the disk method?",
              "options": [
                "f'(x)",
                "f(x)",
                "x",
                "\u222bf(x)dx"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Radius R: series converges for |x-a|<R, diverges for |x-a|>R. Test endpoints."
            },
            {
              "id": "calc_u6_l2_q7",
              "type": "typing",
              "question": "Find volume of y = x\u00b2 (0 to 1) rotated about x-axis.",
              "correctAnswer": [
                "\u03c0/5",
                "pi/5"
              ],
              "xp": 5,
              "explanation": "Answer: \u03c0/5. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q8",
              "type": "multiple-choice",
              "question": "When do you use the washer method?",
              "options": [
                "When there's a hole",
                "For flat curves",
                "Only for circles",
                "Never use it"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: When there's a hole"
            },
            {
              "id": "calc_u6_l2_q9",
              "type": "typing",
              "question": "Find volume between y = x and y = x\u00b2 (0 to 1) rotated about x-axis.",
              "correctAnswer": [
                "2\u03c0/15"
              ],
              "xp": 4,
              "explanation": "Answer: 2\u03c0/15. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q10",
              "type": "multiple-choice",
              "question": "What does the shell method use as the 'height'?",
              "options": [
                "x",
                "2\u03c0x",
                "f(x)",
                "f'(x)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: f(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q11",
              "type": "typing",
              "question": "Find volume of y = \u221ax (0 to 1) rotated about y-axis using shells.",
              "correctAnswer": [
                "4\u03c0/5",
                "4pi/5"
              ],
              "xp": 5,
              "explanation": "Shell method: V = \u222b2\u03c0x\u00b7f(x) dx (rotation about y-axis)"
            },
            {
              "id": "calc_u6_l2_q12",
              "type": "multiple-choice",
              "question": "What is 2\u03c0x in the shell method formula?",
              "options": [
                "Area",
                "Radius",
                "Circumference",
                "Volume"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Circumference. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q13",
              "type": "typing",
              "question": "Find volume of y = 1/x (1 to 2) rotated about x-axis.",
              "correctAnswer": [
                "\u03c0/2",
                "pi/2"
              ],
              "xp": 4,
              "explanation": "Answer: \u03c0/2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q14",
              "type": "multiple-choice",
              "question": "The shell method is best when rotation is about what axis?",
              "options": [
                "x-axis",
                "y-axis",
                "z-axis",
                "Diagonal"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: y-axis. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q15",
              "type": "typing",
              "question": "Find volume of y = x\u00b3 (0 to 1) rotated about y-axis using shells.",
              "correctAnswer": [
                "2\u03c0/5",
                "2pi/5"
              ],
              "xp": 5,
              "explanation": "Shell method: V = \u222b2\u03c0x\u00b7f(x) dx (rotation about y-axis)"
            },
            {
              "id": "calc_u6_l2_q16",
              "type": "multiple-choice",
              "question": "What's the difference between disk and washer?",
              "options": [
                "Washer has no hole",
                "Washer subtracts inner radius",
                "Same thing",
                "Disk has hole"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Washer subtracts inner radius"
            },
            {
              "id": "calc_u6_l2_q17",
              "type": "typing",
              "question": "Find volume of y = \u221a(4 - x\u00b2) (-2 to 2) rotated about x-axis.",
              "correctAnswer": [
                "16\u03c0/3",
                "16pi/3"
              ],
              "xp": 4,
              "explanation": "Answer: 16\u03c0/3. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l2_q18",
              "type": "multiple-choice",
              "question": "Can you use shells for rotation about x-axis?",
              "options": [
                "No",
                "Yes - use horizontal slices",
                "Only vertical",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Yes - use horizontal slices"
            }
          ]
        },
        {
          "id": "6-3",
          "title": "Arc length and surface area",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Arc Length and Surface Area\n\n## Arc Length\n\nFor a curve \\(y = f(x)\\) from \\(a\\) to \\(b\\):\n\n\\[ L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx \\]\n\nThis comes from the **Pythagorean theorem**: each tiny segment has length \\(ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2} dx\\).\n\n## Surface Area\n\nFor rotation about the **x-axis**, the surface area is:\n\n\\[ SA = \\int_a^b 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} \\, dx \\]\n\nThink of this as the sum of the surface areas of many thin bands:\n- **Band width:** \\(ds = \\sqrt{1 + [f'(x)]^2} dx\\) (arc length)\n- **Band circumference:** \\(2\\pi f(x)\\) (circumference of circle with radius f(x))\n\n---\n\n## Example (Arc Length):\n\nFind the length of \\(y = x^{3/2}\\) from 0 to 1.\n\n\\[ f'(x) = \\frac{3}{2}\\sqrt{x} \\]\n\n\\[ L = \\int_0^1 \\sqrt{1 + \\frac{9x}{4}} \\, dx = \\frac{4}{9} \\cdot \\frac{2}{3}\\left[\\left(1 + \\frac{9x}{4}\\right)^{3/2}\\right]_0^1 \\]\n\n\\[ L = \\frac{8}{27}\\left[\\left(\\frac{13}{4}\\right)^{3/2} - 1\\right] \\]\n\n## Example (Surface Area):\n\n\\(y = \\sqrt{x}\\) from 0 to 1 rotated about x-axis.\n\n\\[ SA = 2\\pi \\int_0^1 \\sqrt{x} \\cdot \\sqrt{1 + \\frac{1}{4x}} \\, dx = \\frac{\\pi}{6}(5\\sqrt{5} - 1) \\]",
          "questions": [
            {
              "id": "calc_u6_l3_q1",
              "type": "typing",
              "question": "What is the formula for arc length of y = f(x)?",
              "correctAnswer": [
                "\u222b\u2090\u1d47 \u221a[1 + (f'(x))\u00b2] dx"
              ],
              "xp": 5,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q2",
              "type": "typing",
              "question": "What does \u221a[1 + (f'(x))\u00b2] represent?",
              "correctAnswer": [
                "Differential arc length",
                "ds",
                "Infinitesimal arc length"
              ],
              "xp": 4,
              "explanation": "Answer: Differential arc length"
            },
            {
              "id": "calc_u6_l3_q3",
              "type": "typing",
              "question": "Find arc length of y = (x\u00b3/6) + (1/2x) from 1 to 2.",
              "correctAnswer": [
                "17/6"
              ],
              "xp": 5,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q4",
              "type": "multiple-choice",
              "question": "What is the surface area formula for rotation about x-axis?",
              "options": [
                "\u222b2\u03c0f(x)dx",
                "\u222b2\u03c0f(x)\u221a[1+f'(x)\u00b2]dx",
                "\u222b\u03c0f(x)\u00b2dx",
                "\u222bf'(x)dx"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: \u222b2\u03c0f(x)\u221a[1+f'(x)\u00b2]dx"
            },
            {
              "id": "calc_u6_l3_q5",
              "type": "typing",
              "question": "What is ds in arc length integrals?",
              "correctAnswer": [
                "\u221a[1 + (f'(x))\u00b2] dx",
                "ds",
                "Differential arc length"
              ],
              "xp": 4,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q6",
              "type": "multiple-choice",
              "question": "What does 2\u03c0f(x) represent in surface area?",
              "options": [
                "Arc length",
                "Radius",
                "Circumference",
                "Area"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: Circumference. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l3_q7",
              "type": "typing",
              "question": "Find arc length of y = ln(x) from 1 to e.",
              "correctAnswer": [
                "\u221a(1 + e\u00b2) - 1",
                "sqrt(1+e\u00b2) - 1"
              ],
              "xp": 5,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q8",
              "type": "multiple-choice",
              "question": "What's the relationship between arc length and the derivative?",
              "options": [
                "No relationship",
                "Arc length uses f'(x) in formula",
                "f'(x) is arc length",
                "Arc length = \u222bf'(x)dx"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Arc length uses f'(x) in formula"
            },
            {
              "id": "calc_u6_l3_q9",
              "type": "typing",
              "question": "Find arc length of y = 2x^(3/2) from 0 to 1.",
              "correctAnswer": [
                "(2/27)(10\u221a10 - 1)",
                "(2/27)(10sqrt(10) - 1)"
              ],
              "xp": 4,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q10",
              "type": "multiple-choice",
              "question": "Can arc length be computed for any function?",
              "options": [
                "Always",
                "Only if f' is continuous",
                "Never",
                "Only polynomials"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Only if f' is continuous"
            },
            {
              "id": "calc_u6_l3_q11",
              "type": "typing",
              "question": "Find surface area of y = \u221ax from 0 to 1 rotated about x-axis.",
              "correctAnswer": [
                "\u03c0(5\u221a5 - 1)/6",
                "pi(5sqrt(5)-1)/6"
              ],
              "xp": 5,
              "explanation": "Area = \u222bf(x) dx from a to b. This is the accumulated area under the curve."
            },
            {
              "id": "calc_u6_l3_q12",
              "type": "multiple-choice",
              "question": "What if you rotate about y-axis instead?",
              "options": [
                "Impossible",
                "Use x as a function of y",
                "Same formula",
                "Can't do it"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Use x as a function of y"
            },
            {
              "id": "calc_u6_l3_q13",
              "type": "typing",
              "question": "Find arc length of y = cosh(x) from 0 to ln(2).",
              "correctAnswer": [
                "3/4"
              ],
              "xp": 4,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q14",
              "type": "multiple-choice",
              "question": "Surface area depends on what two factors?",
              "options": [
                "Only f(x)",
                "Only f'(x)",
                "f(x) and f'(x)",
                "dx and dy"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Correct: f(x) and f'(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l3_q15",
              "type": "typing",
              "question": "What is the geometric interpretation of arc length?",
              "options": [
                "Area under curve",
                "Sum of infinitesimal straight segments",
                "Volume",
                "Slope"
              ],
              "correct": 1,
              "xp": 5,
              "explanation": "Apply the formula from the lesson to solve this problem."
            },
            {
              "id": "calc_u6_l3_q16",
              "type": "multiple-choice",
              "question": "Why is arc length formula different from just integrating f(x)?",
              "options": [
                "Same thing",
                "Accounts for diagonal movement",
                "Adds extra length",
                "Uses squares"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Accounts for diagonal movement"
            },
            {
              "id": "calc_u6_l3_q17",
              "type": "typing",
              "question": "What theorem underlies the arc length formula?",
              "correctAnswer": [
                "Pythagorean theorem",
                "Fundamental Theorem",
                "Mean Value Theorem",
                "Chain rule"
              ],
              "xp": 4,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            },
            {
              "id": "calc_u6_l3_q18",
              "type": "multiple-choice",
              "question": "What is L in the arc length formula?",
              "options": [
                "Limit",
                "Length",
                "Logarithm",
                "Line"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Arc length: L = \u222b\u221a[1+(f'(x))\u00b2] dx. This measures the length along the curve."
            }
          ]
        },
        {
          "id": "6-4",
          "title": "Basic separable differential equations",
          "xp": 85,
          "type": "lesson",
          "lessonText": "# Basic Separable Differential Equations\n\n## What is a Separable DE?\n\nA differential equation is **separable** if you can write it in the form:\n\n\\[ \\frac{dy}{dx} = f(x) \\cdot g(y) \\]\n\nThis means all \\(x\\)'s can be on one side and all \\(y\\)'s on the other.\n\n## Solving Steps:\n\n1. **Separate the variables:** Move all \\(y\\)'s to the left, all \\(x\\)'s to the right\n2. **Integrate both sides:** \\(\\int \\frac{dy}{g(y)} = \\int f(x) \\, dx\\)\n3. **Solve for y:** Get \\(y\\) by itself if possible\n4. **Use initial conditions:** Find \\(C\\) if given\n\n---\n\n## Example 1:\n\nSolve \\(\\frac{dy}{dx} = xy\\), with \\(y(0) = 1\\).\n\n**Separate:** \\(\\frac{dy}{y} = x \\, dx\\)\n\n**Integrate:** \\(\\ln|y| = \\frac{x^2}{2} + C\\)\n\n**Apply IC:** \\(\\ln(1) = 0 + C\\), so \\(C = 0\\)\n\n**Solve:** \\(\\ln(y) = \\frac{x^2}{2}\\), so \\(y = e^{x^2/2}\\)\n\n---\n\n## Example 2 (Population Growth):\n\n\\(\\frac{dP}{dt} = kP\\)\n\nThis models exponential growth (or decay if \\(k < 0\\)).\n\n**Separate:** \\(\\frac{dP}{P} = k \\, dt\\)\n\n**Integrate:** \\(\\ln(P) = kt + C\\)\n\n**Solve:** \\(P = Ce^{kt}\\)\n\n---\n\n## Important Notes:\n\n- \\(y = 0\\) might be an **equilibrium solution** (constant solution where \\(dy/dx = 0\\))\n- The constant \\(C\\) represents a **family of solutions**; initial conditions pick one\n- **Exponential growth/decay**, cooling, and radioactive decay are all modeled by separable DEs\n- If \\(dy/dx = f(y)\\) only (no \\(x\\)), it's **autonomous**",
          "questions": [
            {
              "id": "calc_u6_l4_q1",
              "type": "typing",
              "question": "What makes a differential equation 'separable'?",
              "correctAnswer": [
                "Can write as dy/dx = f(x)g(y)",
                "Variables can be separated"
              ],
              "xp": 5,
              "explanation": "Separable DE: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x)dx, then integrate both sides."
            },
            {
              "id": "calc_u6_l4_q2",
              "type": "typing",
              "question": "What is the first step in solving separable DEs?",
              "correctAnswer": [
                "Separate the variables",
                "Get all y on left, all x on right"
              ],
              "xp": 4,
              "explanation": "Separable DE: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x)dx, then integrate both sides."
            },
            {
              "id": "calc_u6_l4_q3",
              "type": "typing",
              "question": "Solve dy/dx = x/y, with y(0) = 1.",
              "correctAnswer": [
                "y = \u221a(1 + x\u00b2)",
                "y = sqrt(1 + x\u00b2)"
              ],
              "xp": 5,
              "explanation": "Answer: y = \u221a(1 + x\u00b2). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q4",
              "type": "multiple-choice",
              "question": "What does the constant C represent in solutions?",
              "options": [
                "A specific solution",
                "A family of solutions",
                "An error term",
                "The limit"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: A family of solutions"
            },
            {
              "id": "calc_u6_l4_q5",
              "type": "typing",
              "question": "Solve dy/dx = 2xy, with y(0) = 3.",
              "correctAnswer": [
                "y = 3e^(x\u00b2)",
                "y = 3e^(x^2)"
              ],
              "xp": 4,
              "explanation": "Answer: y = 3e^(x\u00b2). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q6",
              "type": "multiple-choice",
              "question": "What is the general solution to dP/dt = kP?",
              "options": [
                "P = Ct",
                "P = Ce^(kt)",
                "P = C/t",
                "P = C"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: P = Ce^(kt). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q7",
              "type": "typing",
              "question": "Solve dy/dx = y/x, with y(1) = 2.",
              "correctAnswer": [
                "y = 2x"
              ],
              "xp": 5,
              "explanation": "Answer: y = 2x. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q8",
              "type": "multiple-choice",
              "question": "What happens if y = 0 in a separable DE?",
              "options": [
                "Cannot solve",
                "Might be equilibrium solution",
                "Always zero",
                "Undefined"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Might be equilibrium solution"
            },
            {
              "id": "calc_u6_l4_q9",
              "type": "typing",
              "question": "Solve dy/dx = x\u00b2y, with y(0) = 1.",
              "correctAnswer": [
                "y = e^(x\u00b3/3)",
                "y = e^(x^3/3)"
              ],
              "xp": 4,
              "explanation": "Answer: y = e^(x\u00b3/3). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q10",
              "type": "multiple-choice",
              "question": "How do initial conditions determine the solution?",
              "options": [
                "Change the formula",
                "Determine the constant C",
                "Make it invalid",
                "Add extra terms"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Determine the constant C"
            },
            {
              "id": "calc_u6_l4_q11",
              "type": "typing",
              "question": "Solve dy/dx = e^x/y, with y(0) = 2.",
              "correctAnswer": [
                "y = \u221a(2e^x + 2)",
                "y = sqrt(2e^x + 2)"
              ],
              "xp": 5,
              "explanation": "Answer: y = \u221a(2e^x + 2). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u6_l4_q12",
              "type": "multiple-choice",
              "question": "What is exponential growth?",
              "options": [
                "Linear increase",
                "Solution grows as Ce^(kt)",
                "Square growth",
                "Logarithmic"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Solution grows as Ce^(kt)"
            },
            {
              "id": "calc_u6_l4_q13",
              "type": "typing",
              "question": "Solve dy/dx = 1/(xy), with y(1) = 1.",
              "correctAnswer": [
                "y = \u221a(1 + 2ln(x))",
                "y = sqrt(1 + 2ln(x))"
              ],
              "xp": 4,
              "explanation": "Answer: y = \u221a(1 + 2ln(x))"
            },
            {
              "id": "calc_u6_l4_q14",
              "type": "multiple-choice",
              "question": "What models use separable DEs?",
              "options": [
                "Only physics",
                "Population growth, cooling, decay",
                "Only chemistry",
                "Nothing uses them"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Population growth, cooling, decay"
            },
            {
              "id": "calc_u6_l4_q15",
              "type": "typing",
              "question": "What is equilibrium in differential equations?",
              "options": [
                "Constant solution where dy/dx = 0",
                "Maximum value",
                "Initial condition",
                "Final answer"
              ],
              "correct": 0,
              "xp": 5,
              "explanation": "Apply the formula from the lesson to solve this problem."
            },
            {
              "id": "calc_u6_l4_q16",
              "type": "multiple-choice",
              "question": "Solve dy/dx = x + y (is this separable?).",
              "options": [
                "Yes",
                "No - can't separate variables",
                "Maybe",
                "Always"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: No - can't separate variables"
            },
            {
              "id": "calc_u6_l4_q17",
              "type": "typing",
              "question": "What's special about autonomous equations?",
              "options": [
                "dy/dx = f(y) only",
                "dy/dx = f(x) only",
                "Cannot solve",
                "Always linear"
              ],
              "correct": 0,
              "xp": 4,
              "explanation": "Apply the formula from the lesson to solve this problem."
            },
            {
              "id": "calc_u6_l4_q18",
              "type": "multiple-choice",
              "question": "After integrating, what do you do with C?",
              "options": [
                "Ignore it",
                "Use initial conditions to find it",
                "Set C = 0",
                "Delete it"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Use initial conditions to find it"
            }
          ]
        }
      ]
    },
    {
      "unitId": "7",
      "unitName": "7. Sequences & Series",
      "lessons": [
        {
          "id": "7-1",
          "title": "Sequences and limits of sequences",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Sequences and Limits of Sequences\n\nA sequence is an ordered list of numbers: a\u2081, a\u2082, a\u2083, ..., a\u2099, ...\n\n## Notation:\n\n{a\u2099}\u2099\u208c\u2081^\u221e or simply {a\u2099}\n\n## Limit of a Sequence:\n\nlim(n\u2192\u221e) a\u2099 = L\n\nMeans the terms get arbitrarily close to L as n increases.\n\n## Convergence vs Divergence:\n\n- **Convergent:** lim(n\u2192\u221e) a\u2099 exists and is finite\n- **Divergent:** The limit doesn't exist or is infinite\n\n## Common Sequence Types:\n\n**Arithmetic:** a\u2099 = a\u2081 + (n-1)d\nExample: 2, 5, 8, 11, ... (a\u2099 = 2 + 3(n-1))\n\n**Geometric:** a\u2099 = a\u2081\u00b7r^(n-1)\nExample: 1, 2, 4, 8, ... (a\u2099 = 2^(n-1))\n\n**nth Term Formula:** a\u2099 = f(n)\n\n## Examples:\n\nlim(n\u2192\u221e) 1/n = 0 (converges)\nlim(n\u2192\u221e) n\u00b2 = \u221e (diverges)\nlim(n\u2192\u221e) (-1)^n (doesn't exist, diverges)",
          "questions": [
            {
              "id": "calc_u7_l1_q1",
              "type": "typing",
              "question": "What is a sequence?",
              "correctAnswer": [
                "An ordered list of numbers"
              ],
              "xp": 5,
              "explanation": "A sequence {a\u2099} is an ordered list. lim(n\u2192\u221e)a\u2099 = L means terms approach L."
            },
            {
              "id": "calc_u7_l1_q2",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) 1/n?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q3",
              "type": "typing",
              "question": "What does it mean for a sequence to converge?",
              "correctAnswer": [
                "The limit exists and is finite"
              ],
              "xp": 5,
              "explanation": "A sequence {a\u2099} is an ordered list. lim(n\u2192\u221e)a\u2099 = L means terms approach L."
            },
            {
              "id": "calc_u7_l1_q4",
              "type": "multiple-choice",
              "question": "What is lim(n\u2192\u221e) n?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Doesn't exist"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q5",
              "type": "typing",
              "question": "What is the nth term of 2, 5, 8, 11, ...?",
              "correctAnswer": [
                "2 + 3(n-1)",
                "3n - 1"
              ],
              "xp": 4,
              "explanation": "Answer: 2 + 3(n-1). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l1_q6",
              "type": "multiple-choice",
              "question": "What type of sequence is 1, 2, 4, 8, ...?",
              "options": [
                "Arithmetic",
                "Geometric",
                "Neither",
                "Both"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Geometric. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l1_q7",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) (n+1)/n?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q8",
              "type": "multiple-choice",
              "question": "What is lim(n\u2192\u221e) (-1)^n?",
              "options": [
                "0",
                "1",
                "-1",
                "Doesn't exist"
              ],
              "correct": 3,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q9",
              "type": "typing",
              "question": "What is the nth term of 1, 1/2, 1/4, 1/8, ...?",
              "correctAnswer": [
                "1/2^(n-1)",
                "2^(1-n)"
              ],
              "xp": 4,
              "explanation": "Answer: 1/2^(n-1). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l1_q10",
              "type": "multiple-choice",
              "question": "A bounded monotonic sequence:",
              "options": [
                "Always diverges",
                "Always converges",
                "May diverge",
                "Cannot determine"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Always converges"
            },
            {
              "id": "calc_u7_l1_q11",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) (n\u00b2 - n)/n\u00b2?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q12",
              "type": "multiple-choice",
              "question": "What does lim(n\u2192\u221e) r^n equal (for |r| < 1)?",
              "options": [
                "1",
                "0",
                "\u221e",
                "Doesn't exist"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q13",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) ln(n)/n?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q14",
              "type": "multiple-choice",
              "question": "What is lim(n\u2192\u221e) 1/(n\u00b2 + 1)?",
              "options": [
                "0",
                "1",
                "1/2",
                "\u221e"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q15",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) (2n + 3)/(n - 1)?",
              "correctAnswer": [
                "2"
              ],
              "xp": 5,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q16",
              "type": "multiple-choice",
              "question": "What is the common ratio in 3, 6, 12, 24, ...?",
              "options": [
                "2",
                "3",
                "6",
                "1/2"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l1_q17",
              "type": "typing",
              "question": "What is lim(n\u2192\u221e) sin(1/n)?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l1_q18",
              "type": "multiple-choice",
              "question": "If lim(n\u2192\u221e) a\u2099 = L, then lim(n\u2192\u221e) |a\u2099| = ?",
              "options": [
                "|L|",
                "L",
                "0",
                "Doesn't exist"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            }
          ]
        },
        {
          "id": "7-2",
          "title": "Infinite series and geometric series",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Infinite Series and Geometric Series\n\nAn infinite series is the sum of an infinite sequence.\n\n## Notation:\n\n\u2211(n=1 to \u221e) a\u2099 = a\u2081 + a\u2082 + a\u2083 + ...\n\n## Partial Sums:\n\nS\u2099 = \u2211(i=1 to n) a\u1d62\n\n## Convergence of Series:\n\nA series converges if lim(n\u2192\u221e) S\u2099 exists and is finite.\n\n## Geometric Series:\n\n\u2211(n=0 to \u221e) ar\u207f = a + ar + ar\u00b2 + ...\n\n**Sum Formula:**\n\nIf |r| < 1: S = a/(1 - r)\nIf |r| \u2265 1: Diverges\n\n## Key Tests:\n\n**nth Term Test:**\n\nIf lim(n\u2192\u221e) a\u2099 \u2260 0, then the series diverges.\n\n**Note:** If lim = 0, the test is inconclusive.\n\n## Examples:\n\n\u2211(n=0 to \u221e) (1/2)\u207f = 1/(1 - 1/2) = 2\n\u2211(n=0 to \u221e) 2\u207f = diverges (|r| = 2 \u2265 1)\n\n\u2211(n=1 to \u221e) 1/n diverges (harmonic series)\n\u2211(n=1 to \u221e) 1/n\u00b2 converges (to \u03c0\u00b2/6)",
          "questions": [
            {
              "id": "calc_u7_l2_q1",
              "type": "typing",
              "question": "What is an infinite series?",
              "correctAnswer": [
                "The sum of an infinite sequence"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l2_q2",
              "type": "typing",
              "question": "What is \u2211(n=0 to \u221e) (1/2)\u207f?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Answer: 2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q3",
              "type": "typing",
              "question": "When does a geometric series converge?",
              "correctAnswer": [
                "When |r| < 1"
              ],
              "xp": 5,
              "explanation": "Geometric series: \u2211ar\u207f = a/(1-r) if |r|<1, otherwise diverges"
            },
            {
              "id": "calc_u7_l2_q4",
              "type": "multiple-choice",
              "question": "What is the sum of \u2211(n=0 to \u221e) (1/3)\u207f?",
              "options": [
                "1",
                "3/2",
                "2",
                "3"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 3/2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q5",
              "type": "typing",
              "question": "What does the nth term test say?",
              "correctAnswer": [
                "If lim a\u2099 \u2260 0, the series diverges"
              ],
              "xp": 4,
              "explanation": "Answer: If lim a\u2099 \u2260 0, the series diverges"
            },
            {
              "id": "calc_u7_l2_q6",
              "type": "multiple-choice",
              "question": "Does \u2211(n=1 to \u221e) 1/n converge or diverge?",
              "options": [
                "Converges",
                "Diverges",
                "Equals 0",
                "Equals 1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Diverges. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q7",
              "type": "typing",
              "question": "What is \u2211(n=0 to \u221e) 3(1/2)\u207f?",
              "correctAnswer": [
                "6"
              ],
              "xp": 5,
              "explanation": "Answer: 6. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q8",
              "type": "multiple-choice",
              "question": "What is the sum of \u2211(n=1 to \u221e) (1/4)\u207f?",
              "options": [
                "1",
                "1/3",
                "1/2",
                "4/3"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 1/3. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q9",
              "type": "typing",
              "question": "What is S\u2099 for a series?",
              "correctAnswer": [
                "The nth partial sum",
                "The sum of the first n terms"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l2_q10",
              "type": "multiple-choice",
              "question": "Does \u2211(n=1 to \u221e) 1/n\u00b2 converge?",
              "options": [
                "Yes",
                "No",
                "Equals \u221e",
                "Cannot determine"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: Yes. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q11",
              "type": "typing",
              "question": "What is \u2211(n=0 to \u221e) (-1/2)\u207f?",
              "correctAnswer": [
                "2/3"
              ],
              "xp": 5,
              "explanation": "Answer: 2/3. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q12",
              "type": "multiple-choice",
              "question": "What is the common ratio in 1 + 2 + 4 + 8 + ...?",
              "options": [
                "1",
                "2",
                "4",
                "8"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q13",
              "type": "typing",
              "question": "What is \u2211(n=1 to \u221e) (2/3)\u207f?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Answer: 2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q14",
              "type": "multiple-choice",
              "question": "Does \u2211(n=1 to \u221e) n converge?",
              "options": [
                "Yes",
                "No",
                "Equals -1/12",
                "Equals 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: No. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q15",
              "type": "typing",
              "question": "What is the sum of 3 + 1 + 1/3 + 1/9 + ...?",
              "correctAnswer": [
                "4.5",
                "9/2"
              ],
              "xp": 5,
              "explanation": "Answer: 4.5. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q16",
              "type": "multiple-choice",
              "question": "For \u2211(n=1 to \u221e) a\u2099, if a\u2099 = 1, what happens?",
              "options": [
                "Converges to 1",
                "Diverges to \u221e",
                "Converges to 0",
                "Cannot determine"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Diverges to \u221e. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q17",
              "type": "typing",
              "question": "What is \u2211(n=0 to \u221e) 0.5\u207f?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "Answer: 2. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l2_q18",
              "type": "multiple-choice",
              "question": "What is lim(n\u2192\u221e) (1/n)?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Doesn't exist"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            }
          ]
        },
        {
          "id": "7-3",
          "title": "Convergence tests",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Convergence Tests\n\nSeveral tests determine if an infinite series converges.\n\n## 1. Integral Test:\n\nIf f(x) is positive, continuous, and decreasing, then:\n\n\u222b(1 to \u221e) f(x) dx and \u2211(n=1 to \u221e) f(n) either both converge or both diverge.\n\n## 2. Comparison Test:\n\nIf 0 \u2264 a\u2099 \u2264 b\u2099 for all n:\n- If \u2211 b\u2099 converges, then \u2211 a\u2099 converges\n- If \u2211 a\u2099 diverges, then \u2211 b\u2099 diverges\n\n## 3. Limit Comparison Test:\n\nIf lim(n\u2192\u221e) a\u2099/b\u2099 = c where 0 < c < \u221e, then \u2211 a\u2099 and \u2211 b\u2099 either both converge or both diverge.\n\n## 4. Ratio Test:\n\nLet L = lim(n\u2192\u221e) |a\u2099\u208a\u2081/a\u2099|\n- If L < 1: Converges absolutely\n- If L > 1: Diverges\n- If L = 1: Inconclusive\n\n## 5. Root Test:\n\nLet L = lim(n\u2192\u221e) \u221a\u207f|a\u2099|\n- If L < 1: Converges absolutely\n- If L > 1: Diverges\n- If L = 1: Inconclusive\n\n## 6. Alternating Series Test:\n\nFor \u2211(-1)\u207f\u207b\u00b9b\u2099 where b\u2099 > 0:\nIf b\u2099 is decreasing and lim(n\u2192\u221e) b\u2099 = 0, then the series converges.",
          "questions": [
            {
              "id": "calc_u7_l3_q1",
              "type": "typing",
              "question": "What does the integral test relate?",
              "correctAnswer": [
                "Integrals and series"
              ],
              "xp": 5,
              "explanation": "Answer: Integrals and series"
            },
            {
              "id": "calc_u7_l3_q2",
              "type": "typing",
              "question": "In the ratio test, if L < 1, the series:",
              "correctAnswer": [
                "converges absolutely",
                "converges"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l3_q3",
              "type": "typing",
              "question": "What is the condition for the comparison test?",
              "correctAnswer": [
                "0 \u2264 a\u2099 \u2264 b\u2099"
              ],
              "xp": 5,
              "explanation": "Answer: 0 \u2264 a\u2099 \u2264 b\u2099. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q4",
              "type": "multiple-choice",
              "question": "In the ratio test, if L > 1, the series:",
              "options": [
                "Converges",
                "Diverges",
                "Inconclusive",
                "Equals 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Diverges. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q5",
              "type": "typing",
              "question": "What does the alternating series test require?",
              "correctAnswer": [
                "b\u2099 decreasing and lim b\u2099 = 0"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l3_q6",
              "type": "multiple-choice",
              "question": "For the integral test, f(x) must be:",
              "options": [
                "Negative",
                "Positive, continuous, decreasing",
                "Any function",
                "Constant"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Positive, continuous, decreasing"
            },
            {
              "id": "calc_u7_l3_q7",
              "type": "typing",
              "question": "What is L in the ratio test?",
              "correctAnswer": [
                "lim(n\u2192\u221e) |a\u2099\u208a\u2081/a\u2099|"
              ],
              "xp": 5,
              "explanation": "Answer: lim(n\u2192\u221e) |a\u2099\u208a\u2081/a\u2099|"
            },
            {
              "id": "calc_u7_l3_q8",
              "type": "multiple-choice",
              "question": "If \u2211 b\u2099 converges and 0 \u2264 a\u2099 \u2264 b\u2099, then \u2211 a\u2099:",
              "options": [
                "Diverges",
                "Converges",
                "May converge or diverge",
                "Equals 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Converges. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q9",
              "type": "typing",
              "question": "What does the root test use?",
              "correctAnswer": [
                "The nth root of |a\u2099|"
              ],
              "xp": 4,
              "explanation": "Answer: The nth root of |a\u2099|"
            },
            {
              "id": "calc_u7_l3_q10",
              "type": "multiple-choice",
              "question": "In the limit comparison test, what must c satisfy?",
              "options": [
                "c = 0",
                "c = 1",
                "0 < c < \u221e",
                "c = \u221e"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l3_q11",
              "type": "typing",
              "question": "When is the ratio test inconclusive?",
              "correctAnswer": [
                "When L = 1"
              ],
              "xp": 5,
              "explanation": "Answer: When L = 1. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q12",
              "type": "multiple-choice",
              "question": "Does \u2211(n=1 to \u221e) 1/(n\u00b2+1) converge?",
              "options": [
                "Yes (by comparison with 1/n\u00b2)",
                "No",
                "Cannot determine",
                "Equals \u03c0\u00b2/6"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Yes (by comparison with 1/n\u00b2)"
            },
            {
              "id": "calc_u7_l3_q13",
              "type": "typing",
              "question": "What is the ratio for \u2211 n!?",
              "correctAnswer": [
                "\u221e",
                "diverges"
              ],
              "xp": 4,
              "explanation": "Answer: \u221e. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q14",
              "type": "multiple-choice",
              "question": "Does \u2211(n=1 to \u221e) (-1)\u207f/n converge?",
              "options": [
                "Yes (alternating harmonic)",
                "No",
                "Converges absolutely",
                "Equals 0"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Yes (alternating harmonic)"
            },
            {
              "id": "calc_u7_l3_q15",
              "type": "typing",
              "question": "What test is best for \u2211 n!/10\u207f?",
              "correctAnswer": [
                "Ratio test"
              ],
              "xp": 5,
              "explanation": "Answer: Ratio test. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l3_q16",
              "type": "multiple-choice",
              "question": "What is lim(n\u2192\u221e) (n+1)!/n!?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Doesn't exist"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Direct substitution: plug in the value. For 0/0, use factoring or special limits."
            },
            {
              "id": "calc_u7_l3_q17",
              "type": "typing",
              "question": "Does \u2211(n=1 to \u221e) 1/\u221an converge?",
              "options": [
                "No (p-series with p = 1/2 \u2264 1)",
                "Yes"
              ],
              "xp": 4,
              "explanation": "Apply the formula from the lesson to solve this problem."
            },
            {
              "id": "calc_u7_l3_q18",
              "type": "multiple-choice",
              "question": "What is a p-series?",
              "options": [
                "\u2211 1/n\u1d56",
                "\u2211 n\u1d56",
                "\u2211 p\u207f",
                "\u2211 np"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            }
          ]
        },
        {
          "id": "7-4",
          "title": "Power series and radius of convergence",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Power Series and Radius of Convergence\n\nA power series is an infinite series of the form:\n\n\u2211(n=0 to \u221e) c\u2099(x - a)\u207f = c\u2080 + c\u2081(x-a) + c\u2082(x-a)\u00b2 + ...\n\n**a** is the center of the series.\n\n## Radius of Convergence (R):\n\nThe power series converges for |x - a| < R and diverges for |x - a| > R.\n\n## Finding R:\n\nUse the ratio test:\n\nR = lim(n\u2192\u221e) |c\u2099/c\u2099\u208a\u2081|\n\nOr:\n\nR = 1/lim(n\u2192\u221e) \u221a\u207f|c\u2099|\n\n## Interval of Convergence:\n\nTest the endpoints (x = a \u00b1 R) separately.\n\n## Special Cases:\n\n- R = 0: Converges only at x = a\n- R = \u221e: Converges for all x\n\n## Examples:\n\n**\u2211(n=0 to \u221e) x\u207f/n!**\n\nR = lim(n\u2192\u221e) |1/n! / 1/(n+1)!| = lim(n\u2192\u221e) (n+1) = \u221e\nConverges for all x (this is e\u02e3)\n\n**\u2211(n=0 to \u221e) x\u207f**\n\nR = 1, interval is (-1, 1) (geometric series)",
          "questions": [
            {
              "id": "calc_u7_l4_q1",
              "type": "typing",
              "question": "What is the general form of a power series?",
              "correctAnswer": [
                "\u2211(n=0 to \u221e) c\u2099(x-a)\u207f"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l4_q2",
              "type": "typing",
              "question": "What does R represent in power series?",
              "correctAnswer": [
                "Radius of convergence"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l4_q3",
              "type": "typing",
              "question": "When does a power series converge?",
              "correctAnswer": [
                "When |x - a| < R"
              ],
              "xp": 5,
              "explanation": "Use tests: integral, comparison, ratio, root, alternating series. Check conditions carefully."
            },
            {
              "id": "calc_u7_l4_q4",
              "type": "multiple-choice",
              "question": "What is R for \u2211 x\u207f/n!?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Doesn't exist"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: \u221e. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q5",
              "type": "typing",
              "question": "What is the center a in a power series?",
              "correctAnswer": [
                "The value the series is expanded around"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l4_q6",
              "type": "multiple-choice",
              "question": "What is R for \u2211 x\u207f?",
              "options": [
                "0",
                "1",
                "2",
                "\u221e"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 1. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q7",
              "type": "typing",
              "question": "What happens at x = a \u00b1 R?",
              "correctAnswer": [
                "Must test endpoints separately"
              ],
              "xp": 5,
              "explanation": "Answer: Must test endpoints separately"
            },
            {
              "id": "calc_u7_l4_q8",
              "type": "multiple-choice",
              "question": "If R = 0, the series converges:",
              "options": [
                "Nowhere",
                "Only at x = a",
                "For all x",
                "For |x| < 1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Only at x = a. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q9",
              "type": "typing",
              "question": "What is \u2211(n=0 to \u221e) x\u207f?",
              "correctAnswer": [
                "1/(1-x) for |x| < 1"
              ],
              "xp": 4,
              "explanation": "Answer: 1/(1-x) for |x| < 1"
            },
            {
              "id": "calc_u7_l4_q10",
              "type": "multiple-choice",
              "question": "What test finds the radius of convergence?",
              "options": [
                "Ratio test",
                "Integral test",
                "Comparison test",
                "Alternating test"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Ratio test. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q11",
              "type": "typing",
              "question": "What is R for \u2211 n!x\u207f?",
              "correctAnswer": [
                "0"
              ],
              "xp": 5,
              "explanation": "Answer: 0. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q12",
              "type": "multiple-choice",
              "question": "What is the interval of convergence for \u2211 x\u207f?",
              "options": [
                "(-1, 1)",
                "[-1, 1]",
                "(-\u221e, \u221e)",
                "[0, \u221e)"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: (-1, 1). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q13",
              "type": "typing",
              "question": "What is R for \u2211 (x-2)\u207f/n?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Answer: 1. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q14",
              "type": "multiple-choice",
              "question": "What function does \u2211(n=0 to \u221e) x\u207f/n! represent?",
              "options": [
                "ln(x)",
                "e\u02e3",
                "sin(x)",
                "cos(x)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: e\u02e3. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q15",
              "type": "typing",
              "question": "What is the interval if R = 2 and a = 1?",
              "correctAnswer": [
                "(-1, 3)"
              ],
              "xp": 5,
              "explanation": "Answer: (-1, 3). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q16",
              "type": "multiple-choice",
              "question": "Can a power series converge at its endpoints?",
              "options": [
                "Never",
                "Yes, sometimes",
                "Always",
                "Cannot determine"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: Yes, sometimes. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q17",
              "type": "typing",
              "question": "What is R for \u2211 (x/3)\u207f?",
              "correctAnswer": [
                "3"
              ],
              "xp": 4,
              "explanation": "Answer: 3. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l4_q18",
              "type": "multiple-choice",
              "question": "What is the series representation of 1/(1+x)?",
              "options": [
                "\u2211(-1)\u207fx\u207f",
                "\u2211x\u207f",
                "\u2211x\u00b2\u207f",
                "\u2211(-1)\u207f/n! x\u207f"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: \u2211(-1)\u207fx\u207f. Apply the appropriate formula from the lesson."
            }
          ]
        },
        {
          "id": "7-5",
          "title": "Taylor and Maclaurin series",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Taylor and Maclaurin Series\n\nA Taylor series represents a function as an infinite sum of terms.\n\n## Taylor Series (about x = a):\n\nf(x) = \u2211(n=0 to \u221e) [f\u207d\u207f\u207e(a)/n!](x - a)\u207f\n\n## Maclaurin Series (about x = 0):\n\nf(x) = \u2211(n=0 to \u221e) [f\u207d\u207f\u207e(0)/n!]x\u207f\n\n## Common Maclaurin Series:\n\n**e\u02e3 = \u2211(n=0 to \u221e) x\u207f/n!**\n\n**sin(x) = \u2211(n=0 to \u221e) (-1)\u207fx^(2n+1)/(2n+1)!**\n\n**cos(x) = \u2211(n=0 to \u221e) (-1)\u207fx^(2n)/(2n)!**\n\n**1/(1-x) = \u2211(n=0 to \u221e) x\u207f** (for |x| < 1)\n\n**ln(1+x) = \u2211(n=1 to \u221e) (-1)^(n-1)x\u207f/n** (for |x| < 1)\n\n## Taylor Polynomial:\n\nThe nth degree Taylor polynomial is the partial sum up to n terms.\n\n## Remainder:\n\nR\u2099(x) = f(x) - P\u2099(x)\n\n## Example:\n\nFind Maclaurin series for e\u02e3:\n\nf\u207d\u207f\u207e(0) = 1 for all n\n\ne\u02e3 = \u2211(n=0 to \u221e) x\u207f/n! = 1 + x + x\u00b2/2! + x\u00b3/3! + ...",
          "questions": [
            {
              "id": "calc_u7_l5_q1",
              "type": "typing",
              "question": "What is a Taylor series?",
              "correctAnswer": [
                "Representation of a function as an infinite sum"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q2",
              "type": "typing",
              "question": "What is special about a Maclaurin series?",
              "correctAnswer": [
                "It's a Taylor series about x = 0"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q3",
              "type": "typing",
              "question": "What is the Maclaurin series for e\u02e3?",
              "correctAnswer": [
                "\u2211(n=0 to \u221e) x\u207f/n!"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q4",
              "type": "multiple-choice",
              "question": "What is the Maclaurin series for sin(x)?",
              "options": [
                "\u2211 x\u207f/n!",
                "\u2211(-1)\u207fx^(2n+1)/(2n+1)!",
                "\u2211(-1)\u207fx^(2n)/(2n)!",
                "\u2211x\u00b2\u207f"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Correct: \u2211(-1)\u207fx^(2n+1)/(2n+1)!"
            },
            {
              "id": "calc_u7_l5_q5",
              "type": "typing",
              "question": "What is f\u207d\u207f\u207e(0) for e\u02e3?",
              "correctAnswer": [
                "1",
                "1 for all n"
              ],
              "xp": 4,
              "explanation": "Answer: 1. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l5_q6",
              "type": "multiple-choice",
              "question": "What is the Maclaurin series for cos(x)?",
              "options": [
                "1 - x\u00b2/2! + x\u2074/4! - ...",
                "x - x\u00b3/3! + x\u2075/5! - ...",
                "1 + x + x\u00b2/2! + ...",
                "x - x\u00b2 + x\u00b3/2! - ..."
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: 1 - x\u00b2/2! + x\u2074/4! - ..."
            },
            {
              "id": "calc_u7_l5_q7",
              "type": "typing",
              "question": "What is the Taylor series coefficient?",
              "correctAnswer": [
                "f\u207d\u207f\u207e(a)/n!"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q8",
              "type": "multiple-choice",
              "question": "What is the Maclaurin series for 1/(1-x)?",
              "options": [
                "\u2211 x\u207f",
                "\u2211(-1)\u207fx\u207f",
                "\u2211 x\u00b2\u207f",
                "\u2211 x\u207f/n!"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q9",
              "type": "typing",
              "question": "What is the Taylor polynomial?",
              "correctAnswer": [
                "The partial sum of a Taylor series",
                "Approximation of f(x)"
              ],
              "xp": 4,
              "explanation": "Taylor: f(x)=\u2211[f\u207d\u207f\u207e(a)/n!](x-a)\u207f. Maclaurin has a=0."
            },
            {
              "id": "calc_u7_l5_q10",
              "type": "multiple-choice",
              "question": "What is R\u2099(x) in Taylor series?",
              "options": [
                "Remainder",
                "Radius",
                "Ratio",
                "Root"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Remainder. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l5_q11",
              "type": "typing",
              "question": "What is the Maclaurin series for ln(1+x)?",
              "correctAnswer": [
                "\u2211(-1)^(n-1)x\u207f/n"
              ],
              "xp": 5,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q12",
              "type": "multiple-choice",
              "question": "How do you find Taylor series coefficients?",
              "options": [
                "Using derivatives at a",
                "Integrating",
                "Using antiderivatives",
                "Guessing"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: Using derivatives at a"
            },
            {
              "id": "calc_u7_l5_q13",
              "type": "typing",
              "question": "What is the 3rd degree Maclaurin polynomial for e\u02e3?",
              "correctAnswer": [
                "1 + x + x\u00b2/2 + x\u00b3/6"
              ],
              "xp": 4,
              "explanation": "Taylor: f(x)=\u2211[f\u207d\u207f\u207e(a)/n!](x-a)\u207f. Maclaurin has a=0."
            },
            {
              "id": "calc_u7_l5_q14",
              "type": "multiple-choice",
              "question": "What is the radius of convergence for e\u02e3 Maclaurin series?",
              "options": [
                "0",
                "1",
                "\u221e",
                "2"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Use tests: integral, comparison, ratio, root, alternating series. Check conditions carefully."
            },
            {
              "id": "calc_u7_l5_q15",
              "type": "typing",
              "question": "What is sin(x) approximated by near 0?",
              "correctAnswer": [
                "x",
                "x - x\u00b3/6",
                "x\u00b2/2"
              ],
              "xp": 5,
              "explanation": "Answer: x. Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l5_q16",
              "type": "multiple-choice",
              "question": "What function does \u2211(-1)\u207fx^(2n)/(2n)! represent?",
              "options": [
                "sin(x)",
                "cos(x)",
                "e\u02e3",
                "ln(1+x)"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: cos(x). Apply the appropriate formula from the lesson."
            },
            {
              "id": "calc_u7_l5_q17",
              "type": "typing",
              "question": "What is f'(a) in Taylor series?",
              "correctAnswer": [
                "The coefficient for (x-a) term"
              ],
              "xp": 4,
              "explanation": "A series \u2211a\u2099 is the sum of a sequence. Check convergence using tests."
            },
            {
              "id": "calc_u7_l5_q18",
              "type": "multiple-choice",
              "question": "Can Taylor series approximate any function?",
              "options": [
                "No, only analytic functions",
                "Yes, any function",
                "Only continuous functions",
                "Only differentiable functions"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Correct: No, only analytic functions"
            }
          ]
        }
      ]
    },
    {
      "unitId": "8",
      "unitName": "8. Vectors & Geometry",
      "lessons": [
        {
          "id": "8-1",
          "title": "Vectors in the plane and space",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Vectors in the Plane and Space\n\nA vector has both magnitude (length) and direction.\n\n## Notation:\n\n**Bold:** v = \u27e8v\u2081, v\u2082\u27e9 or v = \u27e8v\u2081, v\u2082, v\u2083\u27e9\n**Unit vectors:** i = \u27e81,0,0\u27e9, j = \u27e80,1,0\u27e9, k = \u27e80,0,1\u27e9\n\n## Vector Operations:\n\n**Addition:** v + w = \u27e8v\u2081+w\u2081, v\u2082+w\u2082\u27e9\n\n**Scalar multiplication:** cv = \u27e8cv\u2081, cv\u2082\u27e9\n\n**Dot product:** v \u00b7 w = v\u2081w\u2081 + v\u2082w\u2082 + v\u2083w\u2083\n\n**Cross product (3D only):** v \u00d7 w = \u27e8v\u2082w\u2083-v\u2083w\u2082, v\u2083w\u2081-v\u2081w\u2083, v\u2081w\u2082-v\u2082w\u2081\u27e9\n\n## Magnitude:\n\n|v| = \u221a(v\u2081\u00b2 + v\u2082\u00b2) (2D)\n|v| = \u221a(v\u2081\u00b2 + v\u2082\u00b2 + v\u2083\u00b2) (3D)\n\n## Direction:\n\n**Unit vector:** \u00fb = v/|v|\n\n## Examples:\n\nv = \u27e83, 4\u27e9\n|v| = \u221a(9+16) = 5\n\u00fb = \u27e83/5, 4/5\u27e9\n\nv = \u27e81, 2, 2\u27e9\n|v| = \u221a(1+4+4) = 3\n\u00fb = \u27e81/3, 2/3, 2/3\u27e9",
          "questions": [
            {
              "id": "calc_u8_l1_q1",
              "type": "typing",
              "question": "What two things does a vector have?",
              "correctAnswer": [
                "Magnitude and direction",
                "Direction and magnitude"
              ],
              "xp": 5,
              "explanation": "Answer: Magnitude and direction"
            },
            {
              "id": "calc_u8_l1_q2",
              "type": "typing",
              "question": "What is the magnitude of v = \u27e83, 4\u27e9?",
              "correctAnswer": [
                "5"
              ],
              "xp": 4,
              "explanation": "|v| = \u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5. Use the Pythagorean theorem."
            },
            {
              "id": "calc_u8_l1_q3",
              "type": "typing",
              "question": "How do you add vectors?",
              "correctAnswer": [
                "Add corresponding components"
              ],
              "xp": 5,
              "explanation": "Vector addition: v + w = \u27e8v\u2081+w\u2081, v\u2082+w\u2082, v\u2083+w\u2083\u27e9. Add corresponding components."
            },
            {
              "id": "calc_u8_l1_q4",
              "type": "multiple-choice",
              "question": "What is i \u00b7 i?",
              "options": [
                "0",
                "1",
                "-1",
                "i"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "i \u00b7 i = \u27e81,0,0\u27e9\u00b7\u27e81,0,0\u27e9 = 1. Any unit vector dotted with itself equals 1."
            },
            {
              "id": "calc_u8_l1_q5",
              "type": "typing",
              "question": "What is the dot product formula?",
              "correctAnswer": [
                "v \u00b7 w = v\u2081w\u2081 + v\u2082w\u2082 + v\u2083w\u2083"
              ],
              "xp": 4,
              "explanation": "Dot product: v\u00b7w = v\u2081w\u2081 + v\u2082w\u2082 + v\u2083w\u2083. Multiply corresponding components and sum."
            },
            {
              "id": "calc_u8_l1_q6",
              "type": "multiple-choice",
              "question": "What is |\u27e81, 0, 0\u27e9|?",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 1"
            },
            {
              "id": "calc_u8_l1_q7",
              "type": "typing",
              "question": "What is the unit vector in direction of v?",
              "correctAnswer": [
                "v/|v|"
              ],
              "xp": 5,
              "explanation": "Unit vector \u00fb = v/|v|. Divide the vector by its magnitude to get length 1."
            },
            {
              "id": "calc_u8_l1_q8",
              "type": "multiple-choice",
              "question": "Is the cross product 2D or 3D only?",
              "options": [
                "2D only",
                "3D only",
                "Both",
                "Neither"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Cross product v \u00d7 w is perpendicular to both v and w. Use determinant formula."
            },
            {
              "id": "calc_u8_l1_q9",
              "type": "typing",
              "question": "What is i + j?",
              "correctAnswer": [
                "<1,1,0>",
                "<1,1>",
                "\u27e81,1,0\u27e9"
              ],
              "xp": 4,
              "explanation": "Answer: <1,1,0>"
            },
            {
              "id": "calc_u8_l1_q10",
              "type": "multiple-choice",
              "question": "What is 2\u27e83, 1\u27e9?",
              "options": [
                "\u27e83, 1\u27e9",
                "\u27e85, 2\u27e9",
                "\u27e86, 2\u27e9",
                "\u27e82, 6\u27e9"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: \u27e86, 2\u27e9"
            },
            {
              "id": "calc_u8_l1_q11",
              "type": "typing",
              "question": "What is |\u27e81, 1, 1\u27e9|?",
              "correctAnswer": [
                "\u221a3",
                "sqrt(3)"
              ],
              "xp": 5,
              "explanation": "Answer: \u221a3"
            },
            {
              "id": "calc_u8_l1_q12",
              "type": "multiple-choice",
              "question": "What is i \u00d7 j?",
              "options": [
                "i",
                "j",
                "k",
                "0"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "i \u00d7 j = k. Use right-hand rule: i to j gives k (z-direction)."
            },
            {
              "id": "calc_u8_l1_q13",
              "type": "typing",
              "question": "What is the angle formula for dot product?",
              "correctAnswer": [
                "v \u00b7 w = |v||w|cos(\u03b8)",
                "|v||w|cos(\u03b8)"
              ],
              "xp": 4,
              "explanation": "Dot product: v\u00b7w = v\u2081w\u2081 + v\u2082w\u2082 + v\u2083w\u2083. Multiply corresponding components and sum."
            },
            {
              "id": "calc_u8_l1_q14",
              "type": "multiple-choice",
              "question": "What is \u27e81,2\u27e9 \u00b7 \u27e83,4\u27e9?",
              "options": [
                "5",
                "7",
                "11",
                "14"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "\u27e81,2\u27e9\u00b7\u27e83,4\u27e9 = 1\u00b73 + 2\u00b74 = 3 + 8 = 11. Multiply corresponding components and add."
            },
            {
              "id": "calc_u8_l1_q15",
              "type": "typing",
              "question": "What is the unit vector of \u27e83, 0, 4\u27e9?",
              "correctAnswer": [
                "<3/5, 0, 4/5>",
                "\u27e83/5, 0, 4/5\u27e9"
              ],
              "xp": 5,
              "explanation": "|\u27e83,0,4\u27e9| = 5, so unit vector = \u27e83/5, 0, 4/5\u27e9. Divide each component by 5."
            },
            {
              "id": "calc_u8_l1_q16",
              "type": "multiple-choice",
              "question": "What is |\u27e86, 8\u27e9|?",
              "options": [
                "10",
                "12",
                "14",
                "100"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 10"
            },
            {
              "id": "calc_u8_l1_q17",
              "type": "typing",
              "question": "What is i \u00b7 j?",
              "correctAnswer": [
                "0"
              ],
              "xp": 4,
              "explanation": "i \u00b7 j = \u27e81,0,0\u27e9\u00b7\u27e80,1,0\u27e9 = 0. Perpendicular vectors have dot product 0."
            },
            {
              "id": "calc_u8_l1_q18",
              "type": "multiple-choice",
              "question": "What is the result of v \u00d7 v?",
              "options": [
                "v",
                "0",
                "1",
                "|v|"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "v \u00d7 v = 0. Any vector crossed with itself is the zero vector."
            }
          ]
        },
        {
          "id": "8-2",
          "title": "Lines and planes in space",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Lines and Planes in Space\n\n## Lines in 3D Space:\n\n**Vector form:** r = r\u2080 + tv\n\nWhere:\n- r\u2080 = \u27e8x\u2080, y\u2080, z\u2080\u27e9 is a point on the line\n- v = \u27e8a, b, c\u27e9 is the direction vector\n- t is a parameter\n\n**Parametric form:**\nx = x\u2080 + at\ny = y\u2080 + bt\nz = z\u2080 + ct\n\n**Symmetric form:**\n(x-x\u2080)/a = (y-y\u2080)/b = (z-z\u2080)/c\n\n## Planes in 3D Space:\n\n**Vector form:** n \u00b7 (r - r\u2080) = 0\n\n**Standard form:**\nax + by + cz = d\n\nWhere:\n- n = \u27e8a, b, c\u27e9 is the normal vector\n- (x\u2080, y\u2080, z\u2080) is a point on the plane\n- d = ax\u2080 + by\u2080 + cz\u2080\n\n## Examples:\n\n**Line:** Through (1,2,3) with direction v = \u27e82,-1,4\u27e9\nParametric: x = 1 + 2t, y = 2 - t, z = 3 + 4t\n\n**Plane:** Through (1,0,2) with normal n = \u27e83,1,-2\u27e9\nEquation: 3(x-1) + y - 2(z-2) = 0\nSimplify: 3x + y - 2z + 1 = 0",
          "questions": [
            {
              "id": "calc_u8_l2_q1",
              "type": "typing",
              "question": "What is the vector form of a line?",
              "correctAnswer": [
                "r = r\u2080 + tv"
              ],
              "xp": 5,
              "explanation": "Vector form: r = r\u2080 + tv. r\u2080 is a point, v is direction vector, t is parameter."
            },
            {
              "id": "calc_u8_l2_q2",
              "type": "typing",
              "question": "What is the standard form of a plane?",
              "correctAnswer": [
                "ax + by + cz = d"
              ],
              "xp": 4,
              "explanation": "Standard form: ax + by + cz = d. The normal vector is n = \u27e8a,b,c\u27e9."
            },
            {
              "id": "calc_u8_l2_q3",
              "type": "typing",
              "question": "What does n represent for a plane?",
              "correctAnswer": [
                "The normal vector"
              ],
              "xp": 5,
              "explanation": "Answer: The normal vector"
            },
            {
              "id": "calc_u8_l2_q4",
              "type": "multiple-choice",
              "question": "In a line equation r = r\u2080 + tv, what is v?",
              "options": [
                "A point",
                "The direction vector",
                "The parameter",
                "The normal"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: The direction vector"
            },
            {
              "id": "calc_u8_l2_q5",
              "type": "typing",
              "question": "What are the parametric equations for x = x\u2080 + at?",
              "correctAnswer": [
                "y = y\u2080 + bt, z = z\u2080 + ct"
              ],
              "xp": 4,
              "explanation": "Parametric: x = x\u2080 + at, y = y\u2080 + bt, z = z\u2080 + ct. Each coordinate is linear in t."
            },
            {
              "id": "calc_u8_l2_q6",
              "type": "multiple-choice",
              "question": "How many parameters define a line in 3D?",
              "options": [
                "1",
                "2",
                "3",
                "0"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 1"
            },
            {
              "id": "calc_u8_l2_q7",
              "type": "typing",
              "question": "What is the symmetric form of a line?",
              "correctAnswer": [
                "(x-x\u2080)/a = (y-y\u2080)/b = (z-z\u2080)/c"
              ],
              "xp": 5,
              "explanation": "Vector form: r = r\u2080 + tv. r\u2080 is a point, v is direction vector, t is parameter."
            },
            {
              "id": "calc_u8_l2_q8",
              "type": "multiple-choice",
              "question": "What is the normal of plane 2x + 3y - z = 5?",
              "options": [
                "\u27e82,3,1\u27e9",
                "\u27e82,3,-1\u27e9",
                "\u27e8-2,-3,1\u27e9",
                "\u27e85,0,0\u27e9"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For ax+by+cz=d, the normal is \u27e8a,b,c\u27e9. Here: n = \u27e82,3,-1\u27e9."
            },
            {
              "id": "calc_u8_l2_q9",
              "type": "typing",
              "question": "What is the vector form of a plane?",
              "correctAnswer": [
                "n \u00b7 (r - r\u2080) = 0"
              ],
              "xp": 4,
              "explanation": "Standard form: ax + by + cz = d. The normal vector is n = \u27e8a,b,c\u27e9."
            },
            {
              "id": "calc_u8_l2_q10",
              "type": "multiple-choice",
              "question": "If a line has direction \u27e81,2,3\u27e9, what is a parallel line's direction?",
              "options": [
                "\u27e81,2,3\u27e9",
                "\u27e82,4,6\u27e9",
                "\u27e8-1,-2,-3\u27e9",
                "All of these"
              ],
              "correct": 3,
              "xp": 3,
              "explanation": "Answer: All of these"
            },
            {
              "id": "calc_u8_l2_q11",
              "type": "typing",
              "question": "What is the plane through (0,0,0) with normal \u27e81,0,0\u27e9?",
              "correctAnswer": [
                "x = 0",
                "x=0"
              ],
              "xp": 5,
              "explanation": "The normal vector n = \u27e8a,b,c\u27e9 is perpendicular to the plane."
            },
            {
              "id": "calc_u8_l2_q12",
              "type": "multiple-choice",
              "question": "How many dimensions does a plane in 3D have?",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: 2"
            },
            {
              "id": "calc_u8_l2_q13",
              "type": "typing",
              "question": "What does t represent in parametric equations?",
              "correctAnswer": [
                "A parameter",
                "The direction vector",
                "A point"
              ],
              "xp": 4,
              "explanation": "Parametric: x = x\u2080 + at, y = y\u2080 + bt, z = z\u2080 + ct. Each coordinate is linear in t."
            },
            {
              "id": "calc_u8_l2_q14",
              "type": "multiple-choice",
              "question": "What is the line through (0,0,0) with direction \u27e81,0,0\u27e9?",
              "options": [
                "The x-axis",
                "The y-axis",
                "The z-axis",
                "The xy-plane"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: The x-axis"
            },
            {
              "id": "calc_u8_l2_q15",
              "type": "typing",
              "question": "What is d in ax + by + cz = d?",
              "correctAnswer": [
                "ax\u2080 + by\u2080 + cz\u2080"
              ],
              "xp": 5,
              "explanation": "Answer: ax\u2080 + by\u2080 + cz\u2080"
            },
            {
              "id": "calc_u8_l2_q16",
              "type": "multiple-choice",
              "question": "Are parallel lines in 3D always in the same plane?",
              "options": [
                "Yes",
                "No",
                "Sometimes",
                "Only if they intersect"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: No"
            },
            {
              "id": "calc_u8_l2_q17",
              "type": "typing",
              "question": "What is the plane through origin with normal \u27e80,1,0\u27e9?",
              "correctAnswer": [
                "y = 0",
                "y=0"
              ],
              "xp": 4,
              "explanation": "The normal vector n = \u27e8a,b,c\u27e9 is perpendicular to the plane."
            },
            {
              "id": "calc_u8_l2_q18",
              "type": "multiple-choice",
              "question": "What is the intersection of two planes?",
              "options": [
                "A point",
                "A line",
                "A plane",
                "Empty or a line"
              ],
              "correct": 3,
              "xp": 3,
              "explanation": "Answer: Empty or a line"
            }
          ]
        }
      ]
    },
    {
      "unitId": "9",
      "unitName": "9. Vector-Valued Functions",
      "lessons": [
        {
          "id": "9-1",
          "title": "Vector-valued functions and calculus",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Vector-Valued Functions and Calculus\n\nA vector-valued function has vectors as outputs.\n\n## Notation:\n\nr(t) = \u27e8f(t), g(t), h(t)\u27e9 = f(t)i + g(t)j + h(t)k\n\n## Derivative:\n\nr'(t) = \u27e8f'(t), g'(t), h'(t)\u27e9\n\nThe derivative is the **tangent vector** (velocity).\n\n## Integral:\n\n\u222br(t) dt = \u27e8\u222bf(t) dt, \u222bg(t) dt, \u222bh(t) dt\u27e9 + C\n\n## Velocity and Acceleration:\n\n**Velocity:** v(t) = r'(t) = \u27e8f'(t), g'(t), h'(t)\u27e9\n\n**Speed:** |v(t)| = \u221a[f'(t)\u00b2 + g'(t)\u00b2 + h'(t)\u00b2]\n\n**Acceleration:** a(t) = v'(t) = r''(t)\n\n## Arc Length:\n\ns = \u222b|v(t)| dt from a to b\n\n## Examples:\n\nr(t) = \u27e8t\u00b2, sin(t), t\u27e9\nr'(t) = \u27e82t, cos(t), 1\u27e9\n|v| = \u221a[4t\u00b2 + cos\u00b2(t) + 1]",
          "questions": [
            {
              "id": "calc_u9_l1_q1",
              "type": "typing",
              "question": "What is a vector-valued function?",
              "correctAnswer": [
                "A function with vectors as outputs",
                "A function with vectors as inputs"
              ],
              "xp": 5,
              "explanation": "A vector-valued function r(t) outputs vectors, not scalars. r(t) = \u27e8f(t), g(t), h(t)\u27e9."
            },
            {
              "id": "calc_u9_l1_q2",
              "type": "typing",
              "question": "What is r'(t)?",
              "correctAnswer": [
                "The tangent vector",
                "Velocity"
              ],
              "xp": 4,
              "explanation": "r'(t) = \u27e8f'(t), g'(t), h'(t)\u27e9. Differentiate each component separately."
            },
            {
              "id": "calc_u9_l1_q3",
              "type": "typing",
              "question": "How do you integrate r(t) = \u27e8f(t), g(t), h(t)\u27e9?",
              "correctAnswer": [
                "Integrate each component"
              ],
              "xp": 5,
              "explanation": "Answer: Integrate each component"
            },
            {
              "id": "calc_u9_l1_q4",
              "type": "multiple-choice",
              "question": "What is speed?",
              "options": [
                "|v(t)|",
                "v(t)",
                "a(t)",
                "r(t)"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Speed = |v(t)| = \u221a(f'(t)\u00b2 + g'(t)\u00b2 + h'(t)\u00b2). Magnitude of velocity vector."
            },
            {
              "id": "calc_u9_l1_q5",
              "type": "typing",
              "question": "What is acceleration in terms of r(t)?",
              "correctAnswer": [
                "r''(t)",
                "The second derivative"
              ],
              "xp": 4,
              "explanation": "Acceleration a(t) = v'(t) = r''(t). Derivative of velocity or second derivative of position."
            },
            {
              "id": "calc_u9_l1_q6",
              "type": "multiple-choice",
              "question": "What is the derivative of \u27e8t\u00b2, t\u00b3\u27e9?",
              "options": [
                "\u27e82t, 3t\u00b2\u27e9",
                "\u27e8t, 3t\u27e9",
                "\u27e8t\u00b2, t\u00b3\u27e9",
                "\u27e82t\u00b2, 3t\u00b3\u27e9"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "r'(t) = \u27e82t, 3t\u00b2\u27e9. Differentiate each component."
            },
            {
              "id": "calc_u9_l1_q7",
              "type": "typing",
              "question": "What is the arc length formula?",
              "correctAnswer": [
                "s = \u222b|v(t)| dt",
                "\u222b|r'(t)| dt"
              ],
              "xp": 5,
              "explanation": "Arc length s = \u222b|v(t)| dt = \u222b\u221a(f'(t)\u00b2 + g'(t)\u00b2 + h'(t)\u00b2) dt. Integrate speed."
            },
            {
              "id": "calc_u9_l1_q8",
              "type": "multiple-choice",
              "question": "What is |\u27e83, 4\u27e9|?",
              "options": [
                "5",
                "7",
                "12",
                "25"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 5"
            },
            {
              "id": "calc_u9_l1_q9",
              "type": "typing",
              "question": "What is v(t) for r(t) = \u27e8t, t\u00b2\u27e9?",
              "correctAnswer": [
                "<1, 2t>",
                "\u27e81, 2t\u27e9"
              ],
              "xp": 4,
              "explanation": "v(t) = r'(t) = \u27e81, 2t\u27e9. Velocity is the derivative of position."
            },
            {
              "id": "calc_u9_l1_q10",
              "type": "multiple-choice",
              "question": "What is a(t) for r(t) = \u27e8t\u00b2, t\u00b3\u27e9?",
              "options": [
                "\u27e82, 6t\u27e9",
                "\u27e82t, 3t\u00b2\u27e9",
                "\u27e82, 3\u27e9",
                "\u27e82t, 3\u27e9"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "a(t) = v'(t) = \u27e82, 6t\u27e9. Differentiate velocity to get acceleration."
            },
            {
              "id": "calc_u9_l1_q11",
              "type": "typing",
              "question": "How do you find speed from velocity?",
              "correctAnswer": [
                "Take the magnitude",
                "Find |v(t)|"
              ],
              "xp": 5,
              "explanation": "Velocity v(t) = r'(t). The tangent vector points in direction of motion."
            },
            {
              "id": "calc_u9_l1_q12",
              "type": "multiple-choice",
              "question": "What is \u222b\u27e8t, 1\u27e9 dt?",
              "options": [
                "\u27e8t\u00b2/2, t\u27e9 + C",
                "\u27e8t, 1\u27e9 + C",
                "\u27e8t\u00b2, t\u27e9 + C",
                "\u27e8t, t\u00b2\u27e9 + C"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: \u27e8t\u00b2/2, t\u27e9 + C"
            },
            {
              "id": "calc_u9_l1_q13",
              "type": "typing",
              "question": "What is r'(t) for r(t) = \u27e8sin(t), cos(t)\u27e9?",
              "correctAnswer": [
                "<cos(t), -sin(t)>",
                "\u27e8cos(t), -sin(t)\u27e9"
              ],
              "xp": 4,
              "explanation": "r'(t) = \u27e8cos(t), -sin(t)\u27e9. Derivative of sin is cos, derivative of cos is -sin."
            },
            {
              "id": "calc_u9_l1_q14",
              "type": "multiple-choice",
              "question": "What is |\u27e81, 0, 0\u27e9|?",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 1"
            },
            {
              "id": "calc_u9_l1_q15",
              "type": "typing",
              "question": "What is the speed for r(t) = \u27e82t, 0\u27e9?",
              "correctAnswer": [
                "2",
                "|v| = 2"
              ],
              "xp": 5,
              "explanation": "|\u27e82t, 0\u27e9| = 2|t|. Speed = |v(t)|, the magnitude of velocity."
            },
            {
              "id": "calc_u9_l1_q16",
              "type": "multiple-choice",
              "question": "What is a(t) for r(t) = \u27e8sin(t), 0\u27e9?",
              "options": [
                "\u27e8-sin(t), 0\u27e9",
                "\u27e80, 0\u27e9",
                "\u27e8cos(t), 0\u27e9",
                "\u27e8-cos(t), 0\u27e9"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Acceleration a(t) = v'(t) = r''(t). Derivative of velocity or second derivative of position."
            },
            {
              "id": "calc_u9_l1_q17",
              "type": "typing",
              "question": "What is the integral of r'(t)?",
              "correctAnswer": [
                "r(t) + C"
              ],
              "xp": 4,
              "explanation": "r'(t) = \u27e8f'(t), g'(t), h'(t)\u27e9. Differentiate each component separately."
            },
            {
              "id": "calc_u9_l1_q18",
              "type": "multiple-choice",
              "question": "Arc length measures:",
              "options": [
                "Area",
                "Volume",
                "Length along a curve",
                "Angle"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Arc length s = \u222b|v(t)| dt = \u222b\u221a(f'(t)\u00b2 + g'(t)\u00b2 + h'(t)\u00b2) dt. Integrate speed."
            }
          ]
        },
        {
          "id": "9-2",
          "title": "Motion in space and curvature",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Motion in Space and Curvature\n\n## Unit Tangent Vector:\n\nT(t) = r'(t)/|r'(t)| = v(t)/|v(t)|\n\nPoints in direction of motion. Always has magnitude 1.\n\n## Curvature:\n\n\u03ba = |T'(t)|/|r'(t)|\n\nOr:\n\u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3\n\nMeasures how sharply the curve bends.\n\n- Straight line: \u03ba = 0\n- Circle radius R: \u03ba = 1/R\n\n## Principal Unit Normal:\n\nN(t) = T'(t)/|T'(t)|\n\nPoints toward center of curvature.\n\n## Binormal Vector:\n\nB(t) = T(t) \u00d7 N(t)\n\nPerpendicular to both T and N.\n\n## Examples:\n\n**Line:** r(t) = \u27e8t, 2t, 3t\u27e9\n\u03ba = 0 (straight line)\n\n**Circle:** r(t) = \u27e8cos(t), sin(t), 0\u27e9\nT = \u27e8-sin(t), cos(t), 0\u27e9\n\u03ba = 1 (radius 1)",
          "questions": [
            {
              "id": "calc_u9_l2_q1",
              "type": "typing",
              "question": "What is the unit tangent vector?",
              "correctAnswer": [
                "T(t) = r'(t)/|r'(t)|",
                "v(t)/|v(t)|"
              ],
              "xp": 5,
              "explanation": "Unit tangent T(t) = r'(t)/|r'(t)| = v(t)/|v(t)|. Points in direction of motion, has magnitude 1."
            },
            {
              "id": "calc_u9_l2_q2",
              "type": "typing",
              "question": "What does curvature measure?",
              "correctAnswer": [
                "How sharply a curve bends",
                "The length of the curve"
              ],
              "xp": 4,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q3",
              "type": "typing",
              "question": "What is the curvature formula?",
              "correctAnswer": [
                "\u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3"
              ],
              "xp": 5,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q4",
              "type": "multiple-choice",
              "question": "What is the curvature of a straight line?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Depends"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "A straight line has curvature \u03ba = 0. It doesn't bend at all."
            },
            {
              "id": "calc_u9_l2_q5",
              "type": "typing",
              "question": "What is the curvature of a circle of radius R?",
              "correctAnswer": [
                "1/R",
                "\u03ba = 1/R"
              ],
              "xp": 4,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q6",
              "type": "multiple-choice",
              "question": "What is |T(t)|?",
              "options": [
                "0",
                "1",
                "|r'(t)|",
                "Depends on t"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Unit tangent T(t) = r'(t)/|r'(t)| = v(t)/|v(t)|. Points in direction of motion, has magnitude 1."
            },
            {
              "id": "calc_u9_l2_q7",
              "type": "typing",
              "question": "What is the principal unit normal?",
              "correctAnswer": [
                "N(t) = T'(t)/|T'(t)|"
              ],
              "xp": 5,
              "explanation": "The normal vector n = \u27e8a,b,c\u27e9 is perpendicular to the plane."
            },
            {
              "id": "calc_u9_l2_q8",
              "type": "multiple-choice",
              "question": "Where does N(t) point?",
              "options": [
                "Along motion",
                "Toward center of curvature",
                "Perpendicular to motion",
                "Any direction"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: Toward center of curvature"
            },
            {
              "id": "calc_u9_l2_q9",
              "type": "typing",
              "question": "What is the binormal vector?",
              "correctAnswer": [
                "B(t) = T(t) \u00d7 N(t)"
              ],
              "xp": 4,
              "explanation": "The normal vector n = \u27e8a,b,c\u27e9 is perpendicular to the plane."
            },
            {
              "id": "calc_u9_l2_q10",
              "type": "multiple-choice",
              "question": "Is B(t) perpendicular to T and N?",
              "options": [
                "Yes",
                "No",
                "Only to T",
                "Only to N"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Binormal B(t) = T(t) \u00d7 N(t). Perpendicular to both T and N, completes the Frenet frame."
            },
            {
              "id": "calc_u9_l2_q11",
              "type": "typing",
              "question": "What is \u03ba for a circle of radius 2?",
              "correctAnswer": [
                "1/2",
                "0.5"
              ],
              "xp": 5,
              "explanation": "Answer: 1/2"
            },
            {
              "id": "calc_u9_l2_q12",
              "type": "multiple-choice",
              "question": "Which has larger curvature?",
              "options": [
                "Circle radius 1",
                "Circle radius 10",
                "Same",
                "Cannot compare"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q13",
              "type": "typing",
              "question": "What is T \u00d7 N equal to?",
              "correctAnswer": [
                "B",
                "B(t)"
              ],
              "xp": 4,
              "explanation": "Cross product v \u00d7 w is perpendicular to both v and w. Use determinant formula."
            },
            {
              "id": "calc_u9_l2_q14",
              "type": "multiple-choice",
              "question": "What happens to curvature as radius increases?",
              "options": [
                "Increases",
                "Decreases",
                "Stays same",
                "Oscillates"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q15",
              "type": "typing",
              "question": "What is |T \u00d7 N|?",
              "correctAnswer": [
                "1"
              ],
              "xp": 5,
              "explanation": "Cross product v \u00d7 w is perpendicular to both v and w. Use determinant formula."
            },
            {
              "id": "calc_u9_l2_q16",
              "type": "multiple-choice",
              "question": "What is T \u00b7 T?",
              "options": [
                "0",
                "1",
                "T",
                "T\u00b2"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Dot product: v\u00b7w = v\u2081w\u2081 + v\u2082w\u2082 + v\u2083w\u2083. Multiply corresponding components and sum."
            },
            {
              "id": "calc_u9_l2_q17",
              "type": "typing",
              "question": "What is the curvature of r(t) = \u27e8t, t\u00b2\u27e9 at t=0?",
              "correctAnswer": [
                "0",
                "\u03ba = 0"
              ],
              "xp": 4,
              "explanation": "Curvature \u03ba = |r'(t) \u00d7 r''(t)|/|r'(t)|\u00b3. Measures how sharply curve bends."
            },
            {
              "id": "calc_u9_l2_q18",
              "type": "multiple-choice",
              "question": "How many Frenet-Serret vectors are there?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: 3"
            }
          ]
        }
      ]
    },
    {
      "unitId": "10",
      "unitName": "10. Multivariable Functions",
      "lessons": [
        {
          "id": "10-1",
          "title": "Functions of several variables",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Functions of Several Variables\n\nA multivariable function has multiple inputs and one output.\n\n## Notation:\n\nf(x, y) = z (2 variables)\nf(x, y, z) = w (3 variables)\n\n## Domain and Range:\n\n**Domain:** All allowed input values (x, y) pairs\n**Range:** All possible output values (z)\n\n## Level Curves:\n\nFor constant k, the level curve is:\nf(x, y) = k\n\nThese are contours on a map (same elevation).\n\n## Level Surfaces (3D):\n\nFor constant k, the level surface is:\nf(x, y, z) = k\n\n## Examples:\n\n**f(x, y) = x\u00b2 + y\u00b2**\n- Domain: All real (x, y)\n- Range: z \u2265 0\n- Level curves: x\u00b2 + y\u00b2 = k (circles)\n\n**f(x, y) = \u221a(25 - x\u00b2 - y\u00b2)**\n- Domain: x\u00b2 + y\u00b2 \u2264 25 (disk radius 5)\n- Range: 0 \u2264 z \u2264 5",
          "questions": [
            {
              "id": "calc_u10_l1_q1",
              "type": "typing",
              "question": "What does f(x, y) represent?",
              "correctAnswer": [
                "A function of two variables",
                "A multivariable function"
              ],
              "xp": 5,
              "explanation": "Answer: A function of two variables"
            },
            {
              "id": "calc_u10_l1_q2",
              "type": "typing",
              "question": "What is the domain of f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "All real numbers",
                "R\u00b2",
                "All (x, y)"
              ],
              "xp": 4,
              "explanation": "x\u00b2 + y\u00b2 is defined for all real (x, y). No restrictions, so domain is R\u00b2."
            },
            {
              "id": "calc_u10_l1_q3",
              "type": "typing",
              "question": "What is a level curve?",
              "correctAnswer": [
                "f(x, y) = k",
                "The set of points where f equals a constant"
              ],
              "xp": 5,
              "explanation": "Answer: f(x, y) = k"
            },
            {
              "id": "calc_u10_l1_q4",
              "type": "multiple-choice",
              "question": "What is the range of f(x, y) = x\u00b2 + y\u00b2?",
              "options": [
                "All real numbers",
                "z \u2265 0",
                "z \u2264 0",
                "z = 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "x\u00b2 + y\u00b2 is always \u2265 0. Can be any non-negative real number."
            },
            {
              "id": "calc_u10_l1_q5",
              "type": "typing",
              "question": "What shape are level curves of f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "Circles",
                "x\u00b2 + y\u00b2 = k"
              ],
              "xp": 4,
              "explanation": "x\u00b2 + y\u00b2 = k are circles centered at origin with radius \u221ak."
            },
            {
              "id": "calc_u10_l1_q6",
              "type": "multiple-choice",
              "question": "What is the domain of \u221a(9 - x\u00b2 - y\u00b2)?",
              "options": [
                "All real numbers",
                "x\u00b2 + y\u00b2 \u2264 9",
                "x\u00b2 + y\u00b2 \u2265 9",
                "x = 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For \u221a, we need 9 - x\u00b2 - y\u00b2 \u2265 0, so x\u00b2 + y\u00b2 \u2264 9 (disk radius 3)."
            },
            {
              "id": "calc_u10_l1_q7",
              "type": "typing",
              "question": "What is the range of \u221a(25 - x\u00b2 - y\u00b2)?",
              "correctAnswer": [
                "0 \u2264 z \u2264 5"
              ],
              "xp": 5,
              "explanation": "\u221a gives values from 0 to \u221a25 = 5. Range is 0 \u2264 z \u2264 5."
            },
            {
              "id": "calc_u10_l1_q8",
              "type": "multiple-choice",
              "question": "How many inputs does f(x, y, z) have?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: 3"
            },
            {
              "id": "calc_u10_l1_q9",
              "type": "typing",
              "question": "What is f(2, 3) for f(x, y) = x + y?",
              "correctAnswer": [
                "5"
              ],
              "xp": 4,
              "explanation": "f(2, 3) = 2 + 3 = 5. Substitute x=2, y=3."
            },
            {
              "id": "calc_u10_l1_q10",
              "type": "multiple-choice",
              "question": "What is the level curve of x + y = 5?",
              "options": [
                "Circle",
                "Line",
                "Parabola",
                "Hyperbola"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "x + y = 5 is a line with slope -1, y-intercept 5."
            },
            {
              "id": "calc_u10_l1_q11",
              "type": "typing",
              "question": "What is the domain of 1/(x - y)?",
              "correctAnswer": [
                "All points where x \u2260 y",
                "x \u2260 y"
              ],
              "xp": 5,
              "explanation": "For 1/(x-y), we need x - y \u2260 0, so x \u2260 y."
            },
            {
              "id": "calc_u10_l1_q12",
              "type": "multiple-choice",
              "question": "What is f(1, 0) for f(x, y) = x\u00b2 + y\u00b2?",
              "options": [
                "0",
                "1",
                "2",
                "-1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f(1, 0) = 1\u00b2 + 0\u00b2 = 1. Square each and add."
            },
            {
              "id": "calc_u10_l1_q13",
              "type": "typing",
              "question": "What is a level surface?",
              "correctAnswer": [
                "f(x, y, z) = k"
              ],
              "xp": 4,
              "explanation": "Answer: f(x, y, z) = k"
            },
            {
              "id": "calc_u10_l1_q14",
              "type": "multiple-choice",
              "question": "What is the domain of ln(x + y)?",
              "options": [
                "All real numbers",
                "x + y > 0",
                "x + y \u2265 0",
                "x + y = 0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For ln(x+y), we need x + y > 0 (positive argument only)."
            },
            {
              "id": "calc_u10_l1_q15",
              "type": "typing",
              "question": "What is f(0, 0) for f(x, y) = \u221a(4 - x\u00b2 - y\u00b2)?",
              "correctAnswer": [
                "2"
              ],
              "xp": 5,
              "explanation": "f(0, 0) = \u221a(4 - 0 - 0) = \u221a4 = 2."
            },
            {
              "id": "calc_u10_l1_q16",
              "type": "multiple-choice",
              "question": "What is the level curve of xy = 1?",
              "options": [
                "Circle",
                "Line",
                "Hyperbola",
                "Parabola"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "xy = 1 is a hyperbola with asymptotes at axes."
            },
            {
              "id": "calc_u10_l1_q17",
              "type": "typing",
              "question": "What is the domain of \u221ax + \u221ay?",
              "correctAnswer": [
                "x \u2265 0 and y \u2265 0"
              ],
              "xp": 4,
              "explanation": "Answer: x \u2265 0 and y \u2265 0"
            },
            {
              "id": "calc_u10_l1_q18",
              "type": "multiple-choice",
              "question": "How many variables in f(x, y, z, w)?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correct": 3,
              "xp": 3,
              "explanation": "Answer: 4"
            }
          ]
        },
        {
          "id": "10-2",
          "title": "Partial derivatives",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Partial Derivatives\n\nPartial derivatives measure the rate of change with respect to one variable while holding others constant.\n\n## Notation:\n\n**\u2202f/\u2202x** or **f\u2093** - derivative with respect to x\n**\u2202f/\u2202y** or **f\u1d67** - derivative with respect to y\n\n## Definition:\n\nf\u2093(x, y) = lim(h\u21920) [f(x+h, y) - f(x, y)]/h\n\nTreating y as a constant, differentiate with respect to x.\n\n## Computing:\n\n**f(x, y) = x\u00b2y + 3y\u00b2**\n\nf\u2093 = 2xy (y is constant)\nf\u1d67 = x\u00b2 + 6y (x is constant)\n\n## Higher Order:\n\n**Second partial derivatives:**\n- f\u2093\u2093 = \u2202\u00b2f/\u2202x\u00b2\n- f\u1d67\u1d67 = \u2202\u00b2f/\u2202y\u00b2\n- f\u2093\u1d67 = \u2202\u00b2f/\u2202x\u2202y\n- f\u1d67\u2093 = \u2202\u00b2f/\u2202y\u2202x\n\n**Clairaut's Theorem:** f\u2093\u1d67 = f\u1d67\u2093 (if continuous)\n\n## Examples:\n\n**f(x, y) = x\u00b2 + y\u00b3**\nf\u2093 = 2x, f\u1d67 = 3y\u00b2\nf\u2093\u2093 = 2, f\u1d67\u1d67 = 6y\nf\u2093\u1d67 = 0, f\u1d67\u2093 = 0",
          "questions": [
            {
              "id": "calc_u10_l2_q1",
              "type": "typing",
              "question": "What is \u2202f/\u2202x?",
              "correctAnswer": [
                "The partial derivative with respect to x",
                "Derivative with respect to x"
              ],
              "xp": 5,
              "explanation": "Answer: The partial derivative with respect to x"
            },
            {
              "id": "calc_u10_l2_q2",
              "type": "typing",
              "question": "When finding f\u2093, what do you do with y?",
              "correctAnswer": [
                "Treat it as a constant",
                "Hold it constant"
              ],
              "xp": 4,
              "explanation": "Answer: Treat it as a constant"
            },
            {
              "id": "calc_u10_l2_q3",
              "type": "typing",
              "question": "What is f\u2093 for f(x, y) = x\u00b2y?",
              "correctAnswer": [
                "2xy"
              ],
              "xp": 5,
              "explanation": "f\u2093 = derivative w.r.t x treating y constant: d/dx[x\u00b2y] = 2xy."
            },
            {
              "id": "calc_u10_l2_q4",
              "type": "multiple-choice",
              "question": "What is f\u1d67 for f(x, y) = x\u00b2y?",
              "options": [
                "2x",
                "x\u00b2",
                "2xy",
                "y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u1d67 = derivative w.r.t y treating x constant: d/dy[x\u00b2y] = x\u00b2."
            },
            {
              "id": "calc_u10_l2_q5",
              "type": "typing",
              "question": "What is f\u2093 for f(x, y) = x + y?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "f\u2093 = d/dx[x + y] = 1 (y is constant)."
            },
            {
              "id": "calc_u10_l2_q6",
              "type": "multiple-choice",
              "question": "What is f\u1d67 for f(x, y) = x + y?",
              "options": [
                "0",
                "1",
                "x",
                "y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u1d67 = d/dy[x + y] = 1 (x is constant)."
            },
            {
              "id": "calc_u10_l2_q7",
              "type": "typing",
              "question": "What is f\u2093 for f(x, y) = xy?",
              "correctAnswer": [
                "y"
              ],
              "xp": 5,
              "explanation": "f\u2093 = d/dx[xy] = y (treat y as constant)."
            },
            {
              "id": "calc_u10_l2_q8",
              "type": "multiple-choice",
              "question": "What is f\u1d67 for f(x, y) = xy?",
              "options": [
                "x",
                "y",
                "0",
                "1"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "f\u1d67 = d/dy[xy] = x (treat x as constant)."
            },
            {
              "id": "calc_u10_l2_q9",
              "type": "typing",
              "question": "What is f\u2093\u2093 for f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "f\u2093 = 2x, so f\u2093\u2093 = d/dx[2x] = 2."
            },
            {
              "id": "calc_u10_l2_q10",
              "type": "multiple-choice",
              "question": "What does Clairaut's Theorem say?",
              "options": [
                "f\u2093\u1d67 = f\u1d67\u2093",
                "f\u2093 = f\u1d67",
                "f\u2093\u2093 = f\u1d67\u1d67",
                "f = 0"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Clairaut's Theorem: f\u2093\u1d67 = f\u1d67\u2093 when partial derivatives are continuous."
            },
            {
              "id": "calc_u10_l2_q11",
              "type": "typing",
              "question": "What is f\u1d67\u1d67 for f(x, y) = y\u00b3?",
              "correctAnswer": [
                "6y"
              ],
              "xp": 5,
              "explanation": "f\u1d67 = 3y\u00b2, so f\u1d67\u1d67 = d/dy[3y\u00b2] = 6y."
            },
            {
              "id": "calc_u10_l2_q12",
              "type": "multiple-choice",
              "question": "What is f\u2093\u1d67 for f(x, y) = xy?",
              "options": [
                "0",
                "1",
                "x",
                "y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u2093 = d/dx[xy] = y (treat y as constant)."
            },
            {
              "id": "calc_u10_l2_q13",
              "type": "typing",
              "question": "What is f\u2093 for f(x, y) = e\u02e3y?",
              "correctAnswer": [
                "e\u02e3y"
              ],
              "xp": 4,
              "explanation": "f\u2093 = d/dx[e\u02e3y] = e\u02e3y (derivative of e\u02e3 is e\u02e3, y constant)."
            },
            {
              "id": "calc_u10_l2_q14",
              "type": "multiple-choice",
              "question": "What is f\u1d67 for f(x, y) = sin(x) + y?",
              "options": [
                "cos(x)",
                "0",
                "1",
                "-cos(x)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "f\u1d67 = d/dy[sin(x) + y] = 1 (sin(x) is constant)."
            },
            {
              "id": "calc_u10_l2_q15",
              "type": "typing",
              "question": "What is f\u2093\u1d67 for f(x, y) = x\u00b2y?",
              "correctAnswer": [
                "2x"
              ],
              "xp": 5,
              "explanation": "f\u2093 = derivative w.r.t x treating y constant: d/dx[x\u00b2y] = 2xy."
            },
            {
              "id": "calc_u10_l2_q16",
              "type": "multiple-choice",
              "question": "What is f\u1d67\u2093 for f(x, y) = x\u00b2y?",
              "options": [
                "2y",
                "2x",
                "y",
                "x"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u1d67 = derivative w.r.t y treating x constant: d/dy[x\u00b2y] = x\u00b2."
            },
            {
              "id": "calc_u10_l2_q17",
              "type": "typing",
              "question": "What is f\u2093 for f(x, y) = x/y?",
              "correctAnswer": [
                "1/y"
              ],
              "xp": 4,
              "explanation": "f\u2093 = d/dx[x/y] = 1/y (treat 1/y as constant)."
            },
            {
              "id": "calc_u10_l2_q18",
              "type": "multiple-choice",
              "question": "What is f\u2093\u2093 for f(x, y) = e\u02e3?",
              "options": [
                "0",
                "1",
                "e\u02e3",
                "-e\u02e3"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "f\u2093 = e\u02e3, so f\u2093\u2093 = d/dx[e\u02e3] = e\u02e3."
            }
          ]
        },
        {
          "id": "10-3",
          "title": "Tangent planes and linear approximations",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Tangent Planes and Linear Approximations\n\n## Tangent Plane at (a, b, f(a,b)):\n\nz = f(a, b) + f\u2093(a, b)(x - a) + f\u1d67(a, b)(y - b)\n\nThis is the best linear approximation to f near (a, b).\n\n## Linear Approximation (Differential):\n\n\u0394z \u2248 f\u2093(a, b)\u0394x + f\u1d67(a, b)\u0394y\n\nor\n\nf(x, y) \u2248 f(a, b) + f\u2093(a, b)(x - a) + f\u1d67(a, b)(y - b)\n\n## Total Differential:\n\ndz = f\u2093(x, y)dx + f\u1d67(x, y)dy\n\n## Gradient:\n\n\u2207f = \u27e8f\u2093, f\u1d67\u27e9\n\nThe gradient points in direction of steepest increase.\n\n## Directional Derivative:\n\nD\u1d64f = \u2207f \u00b7 \u00fb\n\nRate of change in direction of unit vector u.\n\n## Examples:\n\n**f(x, y) = x\u00b2 + y\u00b2 at (1, 2)**\nf\u2093 = 2x = 2, f\u1d67 = 2y = 4\nTangent: z = 5 + 2(x-1) + 4(y-2) = 2x + 4y - 5",
          "questions": [
            {
              "id": "calc_u10_l3_q1",
              "type": "typing",
              "question": "What is the tangent plane formula?",
              "correctAnswer": [
                "z = f(a,b) + f\u2093(a,b)(x-a) + f\u1d67(a,b)(y-b)"
              ],
              "xp": 5,
              "explanation": "Answer: z = f(a,b) + f\u2093(a,b)(x-a) + f\u1d67(a,b)(y-b)"
            },
            {
              "id": "calc_u10_l3_q2",
              "type": "typing",
              "question": "What does the tangent plane approximate?",
              "correctAnswer": [
                "The function near (a,b)",
                "f(x,y)"
              ],
              "xp": 4,
              "explanation": "Answer: The function near (a,b)"
            },
            {
              "id": "calc_u10_l3_q3",
              "type": "typing",
              "question": "What is the gradient?",
              "correctAnswer": [
                "\u2207f = \u27e8f\u2093, f\u1d67\u27e9"
              ],
              "xp": 5,
              "explanation": "Answer: \u2207f = \u27e8f\u2093, f\u1d67\u27e9"
            },
            {
              "id": "calc_u10_l3_q4",
              "type": "multiple-choice",
              "question": "What does the gradient point toward?",
              "options": [
                "Steepest decrease",
                "Steepest increase",
                "Flat",
                "Downhill"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: Steepest increase"
            },
            {
              "id": "calc_u10_l3_q5",
              "type": "typing",
              "question": "What is dz?",
              "correctAnswer": [
                "f\u2093(x,y)dx + f\u1d67(x,y)dy",
                "The total differential"
              ],
              "xp": 4,
              "explanation": "Answer: f\u2093(x,y)dx + f\u1d67(x,y)dy"
            },
            {
              "id": "calc_u10_l3_q6",
              "type": "multiple-choice",
              "question": "What is D\u1d64f?",
              "options": [
                "\u2207f \u00d7 \u00fb",
                "\u2207f \u00b7 \u00fb",
                "\u2207f + \u00fb",
                "\u2207f - \u00fb"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: \u2207f \u00b7 \u00fb"
            },
            {
              "id": "calc_u10_l3_q7",
              "type": "typing",
              "question": "What is \u0394z \u2248?",
              "correctAnswer": [
                "f\u2093(a,b)\u0394x + f\u1d67(a,b)\u0394y"
              ],
              "xp": 5,
              "explanation": "Answer: f\u2093(a,b)\u0394x + f\u1d67(a,b)\u0394y"
            },
            {
              "id": "calc_u10_l3_q8",
              "type": "multiple-choice",
              "question": "At (0,0), what is the tangent plane of z = x + y?",
              "options": [
                "z = 0",
                "z = x + y",
                "z = 1",
                "z = x - y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: z = x + y"
            },
            {
              "id": "calc_u10_l3_q9",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "<2x, 2y>",
                "\u27e82x, 2y\u27e9"
              ],
              "xp": 4,
              "explanation": "\u2207f = \u27e8f\u2093, f\u1d67\u27e9 = \u27e82x, 2y\u27e9. Differentiate each component."
            },
            {
              "id": "calc_u10_l3_q10",
              "type": "multiple-choice",
              "question": "What is the directional derivative in the gradient direction?",
              "options": [
                "0",
                "1",
                "|\u2207f|",
                "-|\u2207f|"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The directional derivative in gradient direction is |\u2207f|, the maximum value."
            },
            {
              "id": "calc_u10_l3_q11",
              "type": "typing",
              "question": "What is the tangent plane of f(x,y)=x\u00b2 at (0,0)?",
              "correctAnswer": [
                "z = 0"
              ],
              "xp": 5,
              "explanation": "f\u2093 = 2x = 0, f\u1d67 = 0, f(0,0) = 0. Plane: z = 0 + 0(x) + 0(y) = 0."
            },
            {
              "id": "calc_u10_l3_q12",
              "type": "multiple-choice",
              "question": "What is dz for f(x,y)=x+y?",
              "options": [
                "dx + dy",
                "dx - dy",
                "xdx + ydy",
                "0"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: dx + dy"
            },
            {
              "id": "calc_u10_l3_q13",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = xy at (1, 1)?",
              "correctAnswer": [
                "<1, 1>",
                "\u27e81, 1\u27e9"
              ],
              "xp": 4,
              "explanation": "\u2207f = \u27e8y, x\u27e9 = \u27e81, 1\u27e9 at (1, 1)."
            },
            {
              "id": "calc_u10_l3_q14",
              "type": "multiple-choice",
              "question": "What is the directional derivative in opposite direction of gradient?",
              "options": [
                "0",
                "|\u2207f|",
                "-|\u2207f|",
                "\u2207f"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The directional derivative opposite to gradient is -|\u2207f|, the minimum value."
            },
            {
              "id": "calc_u10_l3_q15",
              "type": "typing",
              "question": "What is the tangent plane of f(x,y)=x+y at (0,0)?",
              "correctAnswer": [
                "z = x + y"
              ],
              "xp": 5,
              "explanation": "Answer: z = x + y"
            },
            {
              "id": "calc_u10_l3_q16",
              "type": "multiple-choice",
              "question": "If \u2207f = \u27e82, 3\u27e9, what is |\u2207f|?",
              "options": [
                "5",
                "\u221a5",
                "\u221a13",
                "6"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "|\u27e82, 3\u27e9| = \u221a(4 + 9) = \u221a13. Square each component, sum, square root."
            },
            {
              "id": "calc_u10_l3_q17",
              "type": "typing",
              "question": "What is the directional derivative for f(x,y)=x in direction \u27e81,0\u27e9?",
              "correctAnswer": [
                "1"
              ],
              "xp": 4,
              "explanation": "Answer: 1"
            },
            {
              "id": "calc_u10_l3_q18",
              "type": "multiple-choice",
              "question": "What is dz for f(x,y)=xy?",
              "options": [
                "xdx + ydy",
                "ydx + xdy",
                "dx + dy",
                "0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u2093 = y, f\u1d67 = x, so dz = ydx + xdy."
            }
          ]
        },
        {
          "id": "10-4",
          "title": "Chain rule for multivariable functions",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Chain Rule for Multivariable Functions\n\n## Chain Rule (Case 1):\n\nIf z = f(x, y) and x = g(t), y = h(t):\n\ndz/dt = (\u2202f/\u2202x)(dx/dt) + (\u2202f/\u2202y)(dy/dt)\n\n## Chain Rule (Case 2): Tree Diagram\n\nIf z = f(x, y) and x = g(s, t), y = h(s, t):\n\n\u2202z/\u2202s = (\u2202f/\u2202x)(\u2202x/\u2202s) + (\u2202f/\u2202y)(\u2202y/\u2202s)\n\u2202z/\u2202t = (\u2202f/\u2202x)(\u2202x/\u2202t) + (\u2202f/\u2202y)(\u2202y/\u2202t)\n\n## Implicit Differentiation:\n\nFor F(x, y, z) = 0:\n\n\u2202z/\u2202x = -F\u2093/F\u1d67\n\u2202z/\u2202y = -F\u1d67/F\u1d67\n\nActually: \u2202z/\u2202x = -F\u2093/F_z, \u2202z/\u2202y = -F\u1d67/F_z\n\n## Examples:\n\n**z = x\u00b2y, x = t, y = t\u00b2**\n\n\u2202z/\u2202x = 2xy = 2t\u00b3\n\u2202z/\u2202y = x\u00b2 = t\u00b2\ndx/dt = 1, dy/dt = 2t\n\ndz/dt = (2t\u00b3)(1) + (t\u00b2)(2t) = 4t\u00b3",
          "questions": [
            {
              "id": "calc_u10_l4_q1",
              "type": "typing",
              "question": "What is the chain rule for dz/dt?",
              "correctAnswer": [
                "(\u2202f/\u2202x)(dx/dt) + (\u2202f/\u2202y)(dy/dt)",
                "f\u2093(dx/dt) + f\u1d67(dy/dt)"
              ],
              "xp": 5,
              "explanation": "Answer: (\u2202f/\u2202x)(dx/dt) + (\u2202f/\u2202y)(dy/dt)"
            },
            {
              "id": "calc_u10_l4_q2",
              "type": "typing",
              "question": "If z = f(x,y) with x = g(t), y = h(t), what is dz/dt?",
              "correctAnswer": [
                "\u2202z/\u2202x \u00b7 dx/dt + \u2202z/\u2202y \u00b7 dy/dt"
              ],
              "xp": 4,
              "explanation": "Answer: \u2202z/\u2202x \u00b7 dx/dt + \u2202z/\u2202y \u00b7 dy/dt"
            },
            {
              "id": "calc_u10_l4_q3",
              "type": "typing",
              "question": "What is \u2202z/\u2202s in chain rule case 2?",
              "correctAnswer": [
                "(\u2202f/\u2202x)(\u2202x/\u2202s) + (\u2202f/\u2202y)(\u2202y/\u2202s)"
              ],
              "xp": 5,
              "explanation": "Answer: (\u2202f/\u2202x)(\u2202x/\u2202s) + (\u2202f/\u2202y)(\u2202y/\u2202s)"
            },
            {
              "id": "calc_u10_l4_q4",
              "type": "multiple-choice",
              "question": "How many paths does chain rule create?",
              "options": [
                "1",
                "2",
                "3",
                "Depends"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 2"
            },
            {
              "id": "calc_u10_l4_q5",
              "type": "typing",
              "question": "What is implicit differentiation for \u2202z/\u2202x?",
              "correctAnswer": [
                "-F\u2093/F_z"
              ],
              "xp": 4,
              "explanation": "For F(x, y, z) = 0, \u2202z/\u2202x = -F\u2093/F_z. Use negative ratio of partials."
            },
            {
              "id": "calc_u10_l4_q6",
              "type": "multiple-choice",
              "question": "If z = x\u00b2y, what is \u2202z/\u2202x?",
              "options": [
                "y",
                "x\u00b2",
                "2xy",
                "2x"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: 2xy"
            },
            {
              "id": "calc_u10_l4_q7",
              "type": "typing",
              "question": "What does a tree diagram show?",
              "correctAnswer": [
                "The paths of dependence",
                "How variables connect"
              ],
              "xp": 5,
              "explanation": "Tree diagram shows how z depends on x and y, and how x and y depend on s and t."
            },
            {
              "id": "calc_u10_l4_q8",
              "type": "multiple-choice",
              "question": "If z = x + y, x = t, y = t\u00b2, what is dz/dt?",
              "options": [
                "1",
                "2t",
                "1 + 2t",
                "t + t\u00b2"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "dz = f\u2093dx + f\u1d67dy = 1\u00b7dx + 1\u00b7dy = dx + dy."
            },
            {
              "id": "calc_u10_l4_q9",
              "type": "typing",
              "question": "What is \u2202z/\u2202t in chain rule case 2?",
              "correctAnswer": [
                "(\u2202f/\u2202x)(\u2202x/\u2202t) + (\u2202f/\u2202y)(\u2202y/\u2202t)"
              ],
              "xp": 4,
              "explanation": "Answer: (\u2202f/\u2202x)(\u2202x/\u2202t) + (\u2202f/\u2202y)(\u2202y/\u2202t)"
            },
            {
              "id": "calc_u10_l4_q10",
              "type": "multiple-choice",
              "question": "For implicit diff, \u2202z/\u2202x uses which partials?",
              "options": [
                "F\u2093 and F\u1d67",
                "F\u2093 and F_z",
                "F\u1d67 and F_z",
                "Just F\u2093"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For F(x, y, z) = 0, \u2202z/\u2202x = -F\u2093/F_z. Use negative ratio of partials."
            },
            {
              "id": "calc_u10_l4_q11",
              "type": "typing",
              "question": "If z = xy, x = t, y = 2t, what is dz/dt?",
              "correctAnswer": [
                "4t"
              ],
              "xp": 5,
              "explanation": "f\u2093 = y, f\u1d67 = x, so dz = ydx + xdy."
            },
            {
              "id": "calc_u10_l4_q12",
              "type": "multiple-choice",
              "question": "What is -F\u1d67/F_z?",
              "options": [
                "\u2202z/\u2202x",
                "\u2202z/\u2202y",
                "\u2202x/\u2202y",
                "\u2202y/\u2202x"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: \u2202z/\u2202y"
            },
            {
              "id": "calc_u10_l4_q13",
              "type": "typing",
              "question": "What is dz/dt if z = x\u00b2 + y\u00b2, x = t, y = t?",
              "correctAnswer": [
                "4t"
              ],
              "xp": 4,
              "explanation": "\u2202z/\u2202x = 2x = 2t, \u2202z/\u2202y = 2y = 2t, dx/dt = 1, dy/dt = 1. dz/dt = 2t + 2t = 4t."
            },
            {
              "id": "calc_u10_l4_q14",
              "type": "multiple-choice",
              "question": "How many partial derivatives are needed for dz/dt?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: 2"
            },
            {
              "id": "calc_u10_l4_q15",
              "type": "typing",
              "question": "What is dz/dt if z = x + y, x = t, y = t?",
              "correctAnswer": [
                "2"
              ],
              "xp": 5,
              "explanation": "dz = f\u2093dx + f\u1d67dy = 1\u00b7dx + 1\u00b7dy = dx + dy."
            },
            {
              "id": "calc_u10_l4_q16",
              "type": "multiple-choice",
              "question": "For z = f(x,y), what does \u2202z/\u2202s involve?",
              "options": [
                "Only x",
                "Only y",
                "Both x and y",
                "Neither"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: Both x and y"
            },
            {
              "id": "calc_u10_l4_q17",
              "type": "typing",
              "question": "What is \u2202z/\u2202y for implicit differentiation?",
              "correctAnswer": [
                "-F\u1d67/F_z"
              ],
              "xp": 4,
              "explanation": "For F(x, y, z) = 0, \u2202z/\u2202y = -F\u1d67/F_z. Use negative ratio of partials."
            },
            {
              "id": "calc_u10_l4_q18",
              "type": "multiple-choice",
              "question": "If z = f(x,y) and only x depends on t, what is dz/dt?",
              "options": [
                "f\u2093",
                "f\u1d67",
                "f\u2093(dx/dt)",
                "f\u1d67(dy/dt)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "If only x depends on t, then dz/dt = f\u2093(dx/dt). The f\u1d67 term is 0."
            }
          ]
        },
        {
          "id": "10-5",
          "title": "Directional derivatives and gradient",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Directional Derivatives and Gradient\n\n## Directional Derivative:\n\nD\u1d64f(x, y) = \u2207f \u00b7 \u00fb = f\u2093cos(\u03b8) + f\u1d67sin(\u03b8)\n\nRate of change in direction of unit vector u.\n\n## Gradient Properties:\n\n**\u2207f** = \u27e8f\u2093, f\u1d67\u27e9\n\n- Points in direction of steepest increase\n- Magnitude is maximum rate of change\n- Perpendicular to level curves\n\n## Maximum Directional Derivative:\n\n|D\u1d64f| \u2264 |\u2207f|\n\nMaximum = |\u2207f| in direction of \u2207f\n\nMinimum = -|\u2207f| in opposite direction\n\n## Level Curves:\n\n\u2207f is perpendicular to level curves f(x, y) = k.\n\n## Examples:\n\n**f(x, y) = x\u00b2 + y\u00b2 at (1, 1)**\n\u2207f = \u27e82x, 2y\u27e9 = \u27e82, 2\u27e9\n|\u2207f| = \u221a(4 + 4) = \u221a8 = 2\u221a2\n\nMaximum increase: 2\u221a2 in direction \u27e82, 2\u27e9\nDirectional derivative in \u27e81, 0\u27e9: 2\n\n**f(x, y) = xy at (1, 2)**\n\u2207f = \u27e8y, x\u27e9 = \u27e82, 1\u27e9\n|\u2207f| = \u221a5",
          "questions": [
            {
              "id": "calc_u10_l5_q1",
              "type": "typing",
              "question": "What is the directional derivative formula?",
              "correctAnswer": [
                "D\u1d64f = \u2207f \u00b7 \u00fb",
                "\u2207f \u00b7 \u00fb"
              ],
              "xp": 5,
              "explanation": "Answer: D\u1d64f = \u2207f \u00b7 \u00fb"
            },
            {
              "id": "calc_u10_l5_q2",
              "type": "typing",
              "question": "What does \u2207f point toward?",
              "correctAnswer": [
                "Steepest increase",
                "Direction of maximum increase"
              ],
              "xp": 4,
              "explanation": "Answer: Steepest increase"
            },
            {
              "id": "calc_u10_l5_q3",
              "type": "typing",
              "question": "What is |\u2207f|?",
              "correctAnswer": [
                "The maximum rate of change",
                "Maximum directional derivative"
              ],
              "xp": 5,
              "explanation": "Answer: The maximum rate of change"
            },
            {
              "id": "calc_u10_l5_q4",
              "type": "multiple-choice",
              "question": "What is the minimum directional derivative?",
              "options": [
                "0",
                "|\u2207f|",
                "-|\u2207f|",
                "\u221e"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: -|\u2207f|"
            },
            {
              "id": "calc_u10_l5_q5",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "<2x, 2y>",
                "\u27e82x, 2y\u27e9"
              ],
              "xp": 4,
              "explanation": "\u2207f = \u27e8f\u2093, f\u1d67\u27e9 = \u27e82x, 2y\u27e9. Differentiate each component."
            },
            {
              "id": "calc_u10_l5_q6",
              "type": "multiple-choice",
              "question": "What is |\u27e83, 4\u27e9|?",
              "options": [
                "5",
                "7",
                "12",
                "25"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 5"
            },
            {
              "id": "calc_u10_l5_q7",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = xy?",
              "correctAnswer": [
                "<y, x>",
                "\u27e8y, x\u27e9"
              ],
              "xp": 5,
              "explanation": "Answer: <y, x>"
            },
            {
              "id": "calc_u10_l5_q8",
              "type": "multiple-choice",
              "question": "Is \u2207f perpendicular to level curves?",
              "options": [
                "Yes",
                "No",
                "Only at origin",
                "Sometimes"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: Yes"
            },
            {
              "id": "calc_u10_l5_q9",
              "type": "typing",
              "question": "What is D\u1d64f for u = \u27e81, 0\u27e9?",
              "correctAnswer": [
                "f\u2093",
                "The partial with respect to x"
              ],
              "xp": 4,
              "explanation": "Answer: f\u2093"
            },
            {
              "id": "calc_u10_l5_q10",
              "type": "multiple-choice",
              "question": "What is |\u27e81, 1\u27e9|?",
              "options": [
                "1",
                "2",
                "\u221a2",
                "0"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: \u221a2"
            },
            {
              "id": "calc_u10_l5_q11",
              "type": "typing",
              "question": "What is \u2207f at (1, 1) for f(x, y) = x + y?",
              "correctAnswer": [
                "<1, 1>",
                "\u27e81, 1\u27e9"
              ],
              "xp": 5,
              "explanation": "\u2207f = \u27e81, 1\u27e9. Derivative of x is 1, derivative of y is 1."
            },
            {
              "id": "calc_u10_l5_q12",
              "type": "multiple-choice",
              "question": "What is the max of |D\u1d64f|?",
              "options": [
                "0",
                "|\u2207f|",
                "\u221e",
                "Depends"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: |\u2207f|"
            },
            {
              "id": "calc_u10_l5_q13",
              "type": "typing",
              "question": "What is |\u2207f| for f(x, y) = x\u00b2 + y\u00b2 at (1, 0)?",
              "correctAnswer": [
                "2"
              ],
              "xp": 4,
              "explanation": "f(1, 0) = 1\u00b2 + 0\u00b2 = 1. Square each and add."
            },
            {
              "id": "calc_u10_l5_q14",
              "type": "multiple-choice",
              "question": "What is D\u1d64f for u = \u27e80, 1\u27e9?",
              "options": [
                "f\u2093",
                "f\u1d67",
                "f\u2093 + f\u1d67",
                "0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: f\u1d67"
            },
            {
              "id": "calc_u10_l5_q15",
              "type": "typing",
              "question": "What is the direction of steepest decrease?",
              "correctAnswer": [
                "Opposite to \u2207f",
                "-\u2207f"
              ],
              "xp": 5,
              "explanation": "The opposite of gradient (-\u2207f) points in direction of steepest decrease."
            },
            {
              "id": "calc_u10_l5_q16",
              "type": "multiple-choice",
              "question": "What is |\u27e82, 2\u27e9|?",
              "options": [
                "2",
                "4",
                "\u221a8",
                "8"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Answer: \u221a8"
            },
            {
              "id": "calc_u10_l5_q17",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = x\u00b2 - y\u00b2?",
              "correctAnswer": [
                "<2x, -2y>",
                "\u27e82x, -2y\u27e9"
              ],
              "xp": 4,
              "explanation": "Answer: <2x, -2y>"
            },
            {
              "id": "calc_u10_l5_q18",
              "type": "multiple-choice",
              "question": "If \u2207f = 0, what is the directional derivative?",
              "options": [
                "0",
                "1",
                "\u221e",
                "Undefined"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Answer: 0"
            }
          ]
        }
      ]
    },
    {
      "unitId": "11",
      "unitName": "11. Multivariable Optimization",
      "lessons": [
        {
          "id": "11-1",
          "title": "Critical points and classification",
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Critical Points and Classification\n\n## Critical Points:\n\nA point (a, b) is critical if:\n\n\u2207f(a, b) = \u27e80, 0\u27e9\n\ni.e., f\u2093(a, b) = 0 and f\u1d67(a, b) = 0\n\n## Second Derivatives Test:\n\nLet D = f\u2093\u2093(a, b)f\u1d67\u1d67(a, b) - [f\u2093\u1d67(a, b)]\u00b2\n\n**Case 1:** D > 0 and f\u2093\u2093 > 0 \u2192 **Local minimum**\n\n**Case 2:** D > 0 and f\u2093\u2093 < 0 \u2192 **Local maximum**\n\n**Case 3:** D < 0 \u2192 **Saddle point**\n\n**Case 4:** D = 0 \u2192 **Test inconclusive**\n\n## Steps:\n\n1. Find f\u2093 and f\u1d67\n2. Set both = 0, solve for critical points\n3. Find f\u2093\u2093, f\u1d67\u1d67, f\u2093\u1d67\n4. Compute D at each critical point\n5. Classify using the test\n\n## Examples:\n\n**f(x, y) = x\u00b2 + y\u00b2**\nf\u2093 = 2x, f\u1d67 = 2y \u2192 (0, 0) critical\nf\u2093\u2093 = 2, f\u1d67\u1d67 = 2, f\u2093\u1d67 = 0\nD = 4 > 0, f\u2093\u2093 = 2 > 0 \u2192 Local minimum\n\n**f(x, y) = x\u00b2 - y\u00b2**\nf\u2093 = 2x, f\u1d67 = -2y \u2192 (0, 0) critical\nf\u2093\u2093 = 2, f\u1d67\u1d67 = -2, f\u2093\u1d67 = 0\nD = -4 < 0 \u2192 Saddle point",
          "questions": [
            {
              "id": "calc_u11_l1_q1",
              "type": "typing",
              "question": "What is a critical point for f(x, y)?",
              "correctAnswer": [
                "Where \u2207f = <0,0>",
                "Where f\u2093 = 0 and f\u1d67 = 0"
              ],
              "xp": 5,
              "explanation": "A critical point is where \u2207f = \u27e80, 0\u27e9, i.e., f\u2093 = 0 and f\u1d67 = 0 simultaneously."
            },
            {
              "id": "calc_u11_l1_q2",
              "type": "typing",
              "question": "What is the discriminant D formula?",
              "correctAnswer": [
                "f\u2093\u2093f\u1d67\u1d67 - (f\u2093\u1d67)\u00b2",
                "f\u2093\u2093\u00b7f\u1d67\u1d67 - f\u2093\u1d67\u00b2"
              ],
              "xp": 4,
              "explanation": "The discriminant is D = f\u2093\u2093f\u1d67\u1d67 - (f\u2093\u1d67)\u00b2. It determines the type of critical point."
            },
            {
              "id": "calc_u11_l1_q3",
              "type": "typing",
              "question": "If D > 0 and f\u2093\u2093 > 0, what type of point?",
              "correctAnswer": [
                "Local minimum",
                "Minimum"
              ],
              "xp": 5,
              "explanation": "D > 0 means the test is conclusive. f\u2093\u2093 > 0 means the second derivative is positive (curving up). Local minimum."
            },
            {
              "id": "calc_u11_l1_q4",
              "type": "multiple-choice",
              "question": "If D > 0 and f\u2093\u2093 < 0, what type of point?",
              "options": [
                "Local minimum",
                "Local maximum",
                "Saddle point",
                "Inconclusive"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "D > 0 means conclusive. f\u2093\u2093 < 0 means second derivative is negative (curving down). Local maximum."
            },
            {
              "id": "calc_u11_l1_q5",
              "type": "typing",
              "question": "If D < 0, what type of point?",
              "correctAnswer": [
                "Saddle point",
                "Saddle"
              ],
              "xp": 4,
              "explanation": "D < 0 means the discriminant is negative. This always indicates a saddle point (neither max nor min)."
            },
            {
              "id": "calc_u11_l1_q6",
              "type": "multiple-choice",
              "question": "What is f\u2093 for f(x, y) = x\u00b2 + y\u00b2?",
              "options": [
                "2x",
                "2y",
                "0",
                "2"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "f\u2093 = \u2202/\u2202x(x\u00b2 + y\u00b2) = 2x. Treat y as constant."
            },
            {
              "id": "calc_u11_l1_q7",
              "type": "typing",
              "question": "What is the critical point of x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "(0, 0)"
              ],
              "xp": 5,
              "explanation": "For f = x\u00b2 + y\u00b2: f\u2093 = 2x = 0 \u2192 x = 0, f\u1d67 = 2y = 0 \u2192 y = 0. Critical point is (0, 0)."
            },
            {
              "id": "calc_u11_l1_q8",
              "type": "multiple-choice",
              "question": "What is f\u2093\u2093 for f(x, y) = x\u00b2 + y\u00b2?",
              "options": [
                "0",
                "1",
                "2",
                "2x"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "f\u2093 = \u2202/\u2202x(x\u00b2 + y\u00b2) = 2x. Treat y as constant."
            },
            {
              "id": "calc_u11_l1_q9",
              "type": "typing",
              "question": "What is D for f(x, y) = x\u00b2 + y\u00b2 at (0,0)?",
              "correctAnswer": [
                "4"
              ],
              "xp": 4,
              "explanation": "f\u2093\u2093 = 2, f\u1d67\u1d67 = 2, f\u2093\u1d67 = 0. D = 2\u00b72 - 0\u00b2 = 4."
            },
            {
              "id": "calc_u11_l1_q10",
              "type": "multiple-choice",
              "question": "What type of point is (0,0) for x\u00b2 + y\u00b2?",
              "options": [
                "Minimum",
                "Maximum",
                "Saddle",
                "Inconclusive"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "For x\u00b2 + y\u00b2 at (0,0): D = 4 > 0, f\u2093\u2093 = 2 > 0. Local minimum (paraboloid opening up)."
            },
            {
              "id": "calc_u11_l1_q11",
              "type": "typing",
              "question": "What is the critical point of x\u00b2 - y\u00b2?",
              "correctAnswer": [
                "(0, 0)"
              ],
              "xp": 5,
              "explanation": "For f = x\u00b2 - y\u00b2: f\u2093 = 2x = 0 \u2192 x = 0, f\u1d67 = -2y = 0 \u2192 y = 0. Critical point is (0, 0)."
            },
            {
              "id": "calc_u11_l1_q12",
              "type": "multiple-choice",
              "question": "What is D for f(x, y) = x\u00b2 - y\u00b2?",
              "options": [
                "4",
                "-4",
                "0",
                "2"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u2093\u2093 = 2, f\u1d67\u1d67 = -2, f\u2093\u1d67 = 0. D = 2\u00b7(-2) - 0\u00b2 = -4."
            },
            {
              "id": "calc_u11_l1_q13",
              "type": "typing",
              "question": "What type of point is (0,0) for x\u00b2 - y\u00b2?",
              "correctAnswer": [
                "Saddle point",
                "Saddle"
              ],
              "xp": 4,
              "explanation": "For x\u00b2 - y\u00b2 at (0,0): D = -4 < 0. Saddle point (hyperbolic paraboloid)."
            },
            {
              "id": "calc_u11_l1_q14",
              "type": "multiple-choice",
              "question": "What is f\u1d67\u1d67 for f(x, y) = x\u00b2 - y\u00b2?",
              "options": [
                "2",
                "-2",
                "0",
                "2y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u1d67\u1d67 = \u2202\u00b2/\u2202y\u00b2(x\u00b2 - y\u00b2) = \u2202/\u2202y(-2y) = -2. x\u00b2 disappears (treated as constant)."
            },
            {
              "id": "calc_u11_l1_q15",
              "type": "typing",
              "question": "What does D = 0 mean?",
              "correctAnswer": [
                "Test is inconclusive",
                "Cannot determine"
              ],
              "xp": 5,
              "explanation": "D = 0 means the second derivative test is inconclusive. Higher order tests needed."
            },
            {
              "id": "calc_u11_l1_q16",
              "type": "multiple-choice",
              "question": "What is f\u2093 for f(x, y) = xy?",
              "options": [
                "x",
                "y",
                "0",
                "1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "f\u2093 = \u2202/\u2202x(xy) = y. Treat y as constant."
            },
            {
              "id": "calc_u11_l1_q17",
              "type": "typing",
              "question": "What is the critical point of xy?",
              "correctAnswer": [
                "(0, 0)"
              ],
              "xp": 4,
              "explanation": "For f = xy: f\u2093 = y = 0 \u2192 y = 0, f\u1d67 = x = 0 \u2192 x = 0. Critical point is (0, 0)."
            },
            {
              "id": "calc_u11_l1_q18",
              "type": "multiple-choice",
              "question": "What type of point is (0,0) for xy?",
              "options": [
                "Minimum",
                "Maximum",
                "Saddle",
                "Inconclusive"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "For xy at (0,0): f\u2093\u2093 = 0, f\u1d67\u1d67 = 0, f\u2093\u1d67 = 1. D = -1 < 0. Saddle point."
            }
          ]
        },
        {
          "id": "11-2",
          "title": "Lagrange multipliers",
          "xp": 90,
          "type": "lesson",
          "lessonText": "# Lagrange Multipliers\n\nLagrange multipliers find extrema subject to constraints.\n\n## Problem:\n\nMaximize/minimize f(x, y) subject to g(x, y) = k\n\n## Method:\n\n\u2207f(x, y) = \u03bb\u2207g(x, y)\ng(x, y) = k\n\nWhere \u03bb (lambda) is the Lagrange multiplier.\n\n## Steps:\n\n1. Write \u2207f = \u03bb\u2207g as two equations\n2. Include constraint g(x, y) = k\n3. Solve the system for x, y, \u03bb\n4. Evaluate f at candidate points\n5. Identify max and min\n\n## Example:\n\n**Maximize f(x, y) = x + y subject to x\u00b2 + y\u00b2 = 1**\n\n\u2207f = \u27e81, 1\u27e9\n\u2207g = \u27e82x, 2y\u27e9\n\n1 = \u03bb(2x) \u2192 x = 1/(2\u03bb)\n1 = \u03bb(2y) \u2192 y = 1/(2\u03bb)\n\nFrom constraint: (1/(2\u03bb))\u00b2 + (1/(2\u03bb))\u00b2 = 1\n2/(4\u03bb\u00b2) = 1 \u2192 \u03bb = \u00b11/\u221a2\n\n**Candidates:** (1/\u221a2, 1/\u221a2) and (-1/\u221a2, -1/\u221a2)\n**Max:** \u221a2 at (1/\u221a2, 1/\u221a2)\n**Min:** -\u221a2 at (-1/\u221a2, -1/\u221a2)\n\n## Geometric Interpretation:\n\n\u2207f and \u2207g are parallel at optimum (constrained tangent)",
          "questions": [
            {
              "id": "calc_u11_l2_q1",
              "type": "typing",
              "question": "What is the Lagrange multiplier equation?",
              "correctAnswer": [
                "\u2207f = \u03bb\u2207g",
                "gradient of f equals lambda times gradient of g"
              ],
              "xp": 5,
              "explanation": "Answer: \u2207f = \u03bb\u2207g"
            },
            {
              "id": "calc_u11_l2_q2",
              "type": "typing",
              "question": "What does Lagrange multipliers find?",
              "correctAnswer": [
                "Extrema subject to constraints",
                "Maximum and minimum under constraints"
              ],
              "xp": 4,
              "explanation": "Answer: Extrema subject to constraints"
            },
            {
              "id": "calc_u11_l2_q3",
              "type": "typing",
              "question": "What is \u03bb called?",
              "correctAnswer": [
                "Lambda",
                "Lagrange multiplier"
              ],
              "xp": 5,
              "explanation": "\u03bb is called the Lagrange multiplier. It's a scalar multiplier that enforces the constraint."
            },
            {
              "id": "calc_u11_l2_q4",
              "type": "multiple-choice",
              "question": "Besides \u2207f = \u03bb\u2207g, what else is needed?",
              "options": [
                "\u2207f = 0",
                "g(x, y) = k",
                "\u03bb = 0",
                "x = y"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "We also need the constraint equation: g(x, y) = k. Three equations for x, y, \u03bb."
            },
            {
              "id": "calc_u11_l2_q5",
              "type": "typing",
              "question": "How many equations do we solve?",
              "correctAnswer": [
                "3",
                "Two from \u2207f = \u03bb\u2207g, one constraint"
              ],
              "xp": 4,
              "explanation": "We solve 3 equations: 2 from \u2207f = \u03bb\u2207g (one for each component), and 1 from g(x, y) = k."
            },
            {
              "id": "calc_u11_l2_q6",
              "type": "multiple-choice",
              "question": "What is \u2207f for f(x, y) = x + y?",
              "options": [
                "\u27e80, 0\u27e9",
                "\u27e81, 1\u27e9",
                "\u27e81, 0\u27e9",
                "\u27e80, 1\u27e9"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "\u2207f = \u27e8\u2202f/\u2202x, \u2202f/\u2202y\u27e9 = \u27e81, 1\u27e9. Derivative of x is 1, derivative of y is 1."
            },
            {
              "id": "calc_u11_l2_q7",
              "type": "typing",
              "question": "What is \u2207g for g(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "<2x, 2y>",
                "\u27e82x, 2y\u27e9"
              ],
              "xp": 5,
              "explanation": "\u2207g = \u27e8\u2202g/\u2202x, \u2202g/\u2202y\u27e9 = \u27e82x, 2y\u27e9. Same as \u2207f for this function."
            },
            {
              "id": "calc_u11_l2_q8",
              "type": "multiple-choice",
              "question": "At optimum, \u2207f and \u2207g are:",
              "options": [
                "Perpendicular",
                "Parallel",
                "Zero",
                "Unrelated"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Answer: Parallel"
            },
            {
              "id": "calc_u11_l2_q9",
              "type": "typing",
              "question": "What is the geometric meaning of Lagrange multipliers?",
              "correctAnswer": [
                "\u2207f is parallel to \u2207g",
                "Gradients are parallel"
              ],
              "xp": 4,
              "explanation": "Geometrically: \u2207f is parallel to \u2207g at the constrained optimum. Both perpendicular to constraint curve."
            },
            {
              "id": "calc_u11_l2_q10",
              "type": "multiple-choice",
              "question": "How many unknowns in Lagrange multiplier problem?",
              "options": [
                "2",
                "3",
                "4",
                "1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "We have 3 unknowns: x, y, and \u03bb. We need 3 equations to solve."
            },
            {
              "id": "calc_u11_l2_q11",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = xy?",
              "correctAnswer": [
                "<y, x>",
                "\u27e8y, x\u27e9"
              ],
              "xp": 5,
              "explanation": "\u2207f = \u27e8\u2202f/\u2202x, \u2202f/\u2202y\u27e9 = \u27e8y, x\u27e9. Derivative of xy w.r.t x is y, w.r.t y is x."
            },
            {
              "id": "calc_u11_l2_q12",
              "type": "multiple-choice",
              "question": "What is \u2207g for g(x, y) = x + y?",
              "options": [
                "\u27e81, 1\u27e9",
                "\u27e81, 0\u27e9",
                "\u27e80, 1\u27e9",
                "\u27e8x, y\u27e9"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "\u2207g = \u27e8\u2202g/\u2202x, \u2202g/\u2202y\u27e9 = \u27e81, 1\u27e9. Derivative of x is 1, derivative of y is 1."
            },
            {
              "id": "calc_u11_l2_q13",
              "type": "typing",
              "question": "If \u2207f = \u03bb\u2207g and \u03bb = 0, what is \u2207f?",
              "correctAnswer": [
                "0",
                "<0, 0>",
                "\u27e80, 0\u27e9"
              ],
              "xp": 4,
              "explanation": "If \u03bb = 0, then \u2207f = 0. This means we're at an unconstrained critical point."
            },
            {
              "id": "calc_u11_l2_q14",
              "type": "multiple-choice",
              "question": "Lagrange multipliers work for what type of problems?",
              "options": [
                "Unconstrained",
                "Constrained",
                "Both",
                "Neither"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Lagrange multipliers are for constrained optimization problems (with restrictions)."
            },
            {
              "id": "calc_u11_l2_q15",
              "type": "typing",
              "question": "What is \u2207f for f(x, y) = x\u00b2 + y\u00b2?",
              "correctAnswer": [
                "<2x, 2y>",
                "\u27e82x, 2y\u27e9"
              ],
              "xp": 5,
              "explanation": "\u2207f = \u27e8\u2202f/\u2202x, \u2202f/\u2202y\u27e9 = \u27e82x, 2y\u27e9. Power rule on each term."
            },
            {
              "id": "calc_u11_l2_q16",
              "type": "multiple-choice",
              "question": "What is \u2207g for g(x, y) = x - y?",
              "options": [
                "\u27e81, 1\u27e9",
                "\u27e81, -1\u27e9",
                "\u27e8-1, 1\u27e9",
                "\u27e8-1, -1\u27e9"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "\u2207g = \u27e8\u2202g/\u2202x, \u2202g/\u2202y\u27e9 = \u27e81, -1\u27e9. Derivative of x is 1, derivative of -y is -1."
            },
            {
              "id": "calc_u11_l2_q17",
              "type": "typing",
              "question": "After solving, what do you evaluate?",
              "correctAnswer": [
                "f at candidate points",
                "The function f"
              ],
              "xp": 4,
              "explanation": "After finding candidate points (x, y), evaluate f at each to find max and min values."
            },
            {
              "id": "calc_u11_l2_q18",
              "type": "multiple-choice",
              "question": "Can Lagrange multipliers find both max and min?",
              "options": [
                "Yes",
                "No, only max",
                "No, only min",
                "Only minima"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "Yes, Lagrange multipliers can find both maximum and minimum values under the constraint."
            }
          ]
        }
      ]
    },
    {
      "unitId": "12",
      "unitName": "12. Multiple Integrals",
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
      "unitName": "13. Vector Calculus",
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
      "unitName": "14. Major Theorems",
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
