/**
 * COMPREHENSIVE CALCULUS LESSONS
 * Generated on 2026-03-01 15:57:56
 * All units with 15-20 questions each
 */

const CalculusComprehensiveLessons = {

  // Derivatives: The Concept
  derivBasics1() {
    return {
      id: 'calc_u2_l1',
      title: 'Derivatives: The Concept',
      unit: 2,
      icon: '📈',
      xp: 84,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u2_l1_q1',
          type: 'multiple_choice',
          question: r"What does the derivative f'(x) represent?",
          options: ["The value of f(x)", "The slope of the tangent line", "The area under the curve", "The limit as x approaches 0"],
          correct: 1,
          explanation: r"The derivative represents the instantaneous rate of change, which is the slope of the tangent line at a point.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q2',
          type: 'multiple_choice',
          question: r"Which notation represents the derivative with respect to x?",
          options: ["\\(f(x)\\)", "\\(f"(x)\\)", "\\(f(x)^2\\)", "\\(\\int f(x)dx\\)"],
          correct: 1,
          explanation: r"\(f'(x)\) is the standard notation for the derivative of f with respect to x.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q3',
          type: 'typing',
          question: r"Using the limit definition, \(f'(x) = \lim_{h \to 0}\) _____",
          correctAnswer: 'frac(f(x+h)-f(x))(h)',
          prompt: 'Type your answer:',
          explanation: r"The derivative is defined as \(\lim_{h \to 0} \frac{f(x+h)-f(x)}{h}\).",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q4',
          type: 'typing',
          question: r"If \(f(x) = 3\), what is \(f'(x)\)?",
          correctAnswer: '0',
          prompt: 'Type your answer:',
          explanation: r"The derivative of any constant is zero.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q5',
          type: 'typing',
          question: r"If \(f(x) = x\), what is \(f'(x)\)?",
          correctAnswer: '1',
          prompt: 'Type your answer:',
          explanation: r"The derivative of x is 1, since \(\frac{d}{dx}(x) = 1\).",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q6',
          type: 'multiple_choice',
          question: r"What is the geometric interpretation of \(f'(a)\)?",
          options: ["The y-value at x = a", "The slope of the tangent line at x = a", "The area under the curve from 0 to a", "The value of the function at x = a"],
          correct: 1,
          explanation: r"The derivative at a point gives the slope of the tangent line to the curve at that point.",
          diagram: 'diagrams/tangent_x_2_1.0.png',
          xp: 5
        },
        {
          id: 'calc_u2_l1_q7',
          type: 'typing',
          question: r"If \(f(x) = 2x + 5\), what is \(f'(x)\)?",
          correctAnswer: '2',
          prompt: 'Type your answer:',
          explanation: r"The derivative of 2x is 2, and the derivative of the constant 5 is 0, so \(f'(x) = 2\).",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q8',
          type: 'multiple_choice',
          question: r"When does a function have a vertical tangent line?",
          options: ["When the derivative is zero", "When the derivative is undefined", "When the function is constant", "When the function is linear"],
          correct: 1,
          explanation: r"A vertical tangent line occurs when the derivative approaches infinity (is undefined).",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q9',
          type: 'typing',
          question: r"For \(f(x) = x^2\), what is \(f'(3)\)?",
          correctAnswer: '6',
          prompt: 'Type your answer:',
          explanation: r"First find \(f'(x) = 2x\), then substitute x = 3: \(f'(3) = 2(3) = 6\).",
          diagram: 'diagrams/tangent_x_2_3.0.png',
          xp: 5
        },
        {
          id: 'calc_u2_l1_q10',
          type: 'fill_blank',
          question: r"The derivative measures the _____ rate of change of a function.",
          correctAnswer: 'instantaneous',
          prompt: 'Type your answer:',
          explanation: r"The derivative gives the instantaneous rate of change at a specific point.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q11',
          type: 'multiple_choice',
          question: r"If a function is differentiable at a point, it must be:",
          options: ["Continuous at that point", "Discontinuous at that point", "Undefined at that point", "A constant function"],
          correct: 0,
          explanation: r"Differentiability implies continuity. If a function is differentiable at a point, it must also be continuous there.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q12',
          type: 'typing',
          question: r"If \(f(x) = 5x - 2\), what is the slope of the tangent line at any point?",
          correctAnswer: '5',
          prompt: 'Type your answer:',
          explanation: r"The derivative of 5x - 2 is 5, which is the slope of the tangent line at any point on this linear function.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q13',
          type: 'multiple_choice',
          question: r"What happens to the tangent line as x approaches a corner point?",
          options: ["The tangent line is horizontal", "The tangent line is vertical", "The tangent line does not exist", "The tangent line is the same on both sides"],
          correct: 2,
          explanation: r"At corner points (cusps), the function is not differentiable because the tangent line from the left differs from the right.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q14',
          type: 'typing',
          question: r"For \(f(x) = x^3\), what is \(f'(1)\)?",
          correctAnswer: '3',
          prompt: 'Type your answer:',
          explanation: r"First find \(f'(x) = 3x^2\), then substitute x = 1: \(f'(1) = 3(1)^2 = 3\).",
          diagram: 'diagrams/tangent_x_3_1.0.png',
          xp: 5
        },
        {
          id: 'calc_u2_l1_q15',
          type: 'match_pairs',
          question: r"Match each function with its derivative:",
          pairs: [{"left": "\\(f(x) = x\\)", "right": "\\(f"(x) = 1\\)"}, {"left": "\\(f(x) = x^2\\)", "right": "\\(f"(x) = 2x\\)"}, {"left": "\\(f(x) = 3\\)", "right": "\\(f"(x) = 0\\)"}, {"left": "\\(f(x) = 2x\\)", "right": "\\(f"(x) = 2\\)"}],
          xp: 8
        },
        {
          id: 'calc_u2_l1_q16',
          type: 'typing',
          question: r"If \(f(x) = 7\), what is \(f'(10)\)?",
          correctAnswer: '0',
          prompt: 'Type your answer:',
          explanation: r"The derivative of any constant is zero, regardless of the x-value.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q17',
          type: 'multiple_choice',
          question: r"The power rule states that \(\frac{d}{dx}(x^n) =\) _____",
          options: ["\\(nx^{n-1}\\)", "\\(x^{n+1}\\)", "\\(nx^n\\)", "\\(x^{n-1}\\)"],
          correct: 0,
          explanation: r"The power rule: \(\frac{d}{dx}(x^n) = nx^{n-1}\)",
          diagram: 'diagrams/power_rule.png',
          xp: 4
        },
        {
          id: 'calc_u2_l1_q18',
          type: 'fill_blank',
          question: r"The derivative of a constant function is always _____.",
          correctAnswer: '0',
          prompt: 'Type your answer:',
          explanation: r"Constants do not change, so their rate of change is zero.",
          xp: 4
        }
      ]
    }};
  }},
  // Power Rule
  derivBasics2() {
    return {
      id: 'calc_u2_l2',
      title: 'Power Rule',
      unit: 2,
      icon: '🔋',
      xp: 82,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u2_l2_q1',
          type: 'multiple_choice',
          question: r"Using the power rule, \(\frac{d}{dx}(x^5) =\) _____",
          options: ["\\(5x^4\\)", "\\(5x^5\\)", "\\(x^4\\)", "\\(4x^4\\)"],
          correct: 0,
          explanation: r"Apply the power rule: \(\frac{d}{dx}(x^5) = 5x^{5-1} = 5x^4\)",
          diagram: 'diagrams/power_rule.png',
          xp: 4
        },
        {
          id: 'calc_u2_l2_q2',
          type: 'typing',
          question: r"\(\frac{d}{dx}(x^{10}) =\) _____",
          correctAnswer: '10x^9',
          prompt: 'Type your answer:',
          explanation: r"Power rule: \(\frac{d}{dx}(x^{10}) = 10x^{10-1} = 10x^9\)",
          xp: 4
        },
        {
          id: 'calc_u2_l2_q3',
          type: 'typing',
          question: r"\(\frac{d}{dx}(x^3) =\) _____",
          correctAnswer: '3x^2',
          prompt: 'Type your answer:',
          explanation: r"Power rule: \(\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2\)",
          xp: 4
        },
        {
          id: 'calc_u2_l2_q4',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}(x^{-2})\)?",
          options: ["\\(-2x^{-3}\\)", "\\(-2x^{-2}\\)", "\\(-x^{-3}\\)", "\\(2x^{-3}\\)"],
          correct: 0,
          explanation: r"Power rule works for negative exponents: \(\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q5',
          type: 'typing',
          question: r"\(\frac{d}{dx}(x^0) =\) _____",
          correctAnswer: '0',
          prompt: 'Type your answer:',
          explanation: r"Any number to the 0 power is 1, and the derivative of a constant (1) is 0.",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q6',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}(\sqrt{x})\)?",
          options: ["\\(\\frac{1}{2\\sqrt{x}}\\)", "\\(\\frac{1}{\\sqrt{x}}\\)", "\\(\\frac{1}{2}x^{1/2}\\)", "\\(\\sqrt{x}\\)"],
          correct: 0,
          explanation: r"Rewrite as \(x^{1/2}\), then apply power rule: \(\frac{d}{dx}(x^{1/2}) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q7',
          type: 'typing',
          question: r"\(\frac{d}{dx}(x^{1/3}) =\) _____",
          correctAnswer: '1/3x^(-2/3)',
          prompt: 'Type your answer:',
          explanation: r"Power rule: \(\frac{d}{dx}(x^{1/3}) = \frac{1}{3}x^{1/3-1} = \frac{1}{3}x^{-2/3}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q8',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}(3x^4) =\) _____",
          options: ["\\(12x^3\\)", "\\(3x^3\\)", "\\(4x^3\\)", "\\(12x^4\\)"],
          correct: 0,
          explanation: r"Constant multiple rule: \(\frac{d}{dx}(3x^4) = 3 \cdot 4x^3 = 12x^3\)",
          xp: 4
        },
        {
          id: 'calc_u2_l2_q9',
          type: 'typing',
          question: r"\(\frac{d}{dx}(5x^2) =\) _____",
          correctAnswer: '10x',
          prompt: 'Type your answer:',
          explanation: r"Constant multiple rule: \(\frac{d}{dx}(5x^2) = 5 \cdot 2x = 10x\)",
          xp: 4
        },
        {
          id: 'calc_u2_l2_q10',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}(2x^3 + 5x^2)\)?",
          options: ["\\(6x^2 + 10x\\)", "\\(6x^3 + 10x^2\\)", "\\(2x^2 + 5x\\)", "\\(6x^2 + 10x^2\\)"],
          correct: 0,
          explanation: r"Apply power rule to each term: \(\frac{d}{dx}(2x^3 + 5x^2) = 6x^2 + 10x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q11',
          type: 'typing',
          question: r"\(\frac{d}{dx}(x^4 + 2x^3 - x) =\) _____",
          correctAnswer: '4x^3+6x^2-1',
          prompt: 'Type your answer:',
          explanation: r"Apply power rule: \(\frac{d}{dx}(x^4 + 2x^3 - x) = 4x^3 + 6x^2 - 1\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q12',
          type: 'fill_blank',
          question: r"For \(\frac{d}{dx}(ax^n)\), the coefficient becomes _____ and the exponent decreases by _____.",
          correctAnswer: 'an|1',
          prompt: 'Type your answer:',
          explanation: r"Constant multiple rule: \(\frac{d}{dx}(ax^n) = anx^{n-1}\)",
          xp: 4
        },
        {
          id: 'calc_u2_l2_q13',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}(7x^{-3})\)?",
          options: ["\\(-21x^{-4}\\)", "\\(-21x^{-3}\\)", "\\(7x^{-4}\\)", "\\(-7x^{-4}\\)"],
          correct: 0,
          explanation: r"Power rule: \(\frac{d}{dx}(7x^{-3}) = 7(-3)x^{-3-1} = -21x^{-4}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q14',
          type: 'typing',
          question: r"\(\frac{d}{dx}(\frac{1}{x}) =\) _____ (express with negative exponent)",
          correctAnswer: '-x^(-2)',
          prompt: 'Type your answer:',
          explanation: r"Rewrite as \(x^{-1}\), then: \(\frac{d}{dx}(x^{-1}) = -1x^{-2} = -x^{-2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q15',
          type: 'match_pairs',
          question: r"Match each function with its derivative:",
          pairs: [{"left": "\\(x^5\\)", "right": "\\(5x^4\\)"}, {"left": "\\(x^2\\)", "right": "\\(2x\\)"}, {"left": "\\(x^{-1}\\)", "right": "\\(-x^{-2}\\)"}, {"left": "\\(x^{1/2}\\)", "right": "\\(\\frac{1}{2}x^{-1/2}\\)"}],
          xp: 8
        },
        {
          id: 'calc_u2_l2_q16',
          type: 'typing',
          question: r"If \(f(x) = x^{100}\), what is \(f'(1)\)?",
          correctAnswer: '100',
          prompt: 'Type your answer:',
          explanation: r"First find \(f'(x) = 100x^{99}\), then \(f'(1) = 100(1)^{99} = 100\)",
          xp: 5
        },
        {
          id: 'calc_u2_l2_q17',
          type: 'multiple_choice',
          question: r"The power rule works for:",
          options: ["Only positive integers", "Only negative integers", "All real numbers", "Only fractions"],
          correct: 2,
          explanation: r"The power rule works for all real exponents, including fractions and negative numbers.",
          xp: 5
        }
      ]
    }};
  }},
  // Product Rule
  derivBasics3() {
    return {
      id: 'calc_u2_l3',
      title: 'Product Rule',
      unit: 2,
      icon: '📦',
      xp: 82,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_l3_q1',
          type: 'multiple_choice',
          question: r"The product rule states: \(\frac{d}{dx}[f(x)g(x)] =\) _____",
          options: ["\\(f"(x)g(x) + f(x)g"(x)\\)", "\\(f"(x)g"(x)\\)", "\\(f(x)g(x)\\)", "\\(f"(x)g(x) - f(x)g"(x)\\)"],
          correct: 0,
          explanation: r"Product rule: \(\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)\)",
          xp: 4
        },
        {
          id: 'calc_u2_l3_q2',
          type: 'typing',
          question: r"Using product rule, \(\frac{d}{dx}[x \cdot x^2] =\) _____",
          correctAnswer: '3x^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x\) and \(g(x) = x^2\). Then \(f'(x) = 1\) and \(g'(x) = 2x\). Product rule: \((1)(x^2) + (x)(2x) = x^2 + 2x^2 = 3x^2\)",
          diagram: 'diagrams/product_rule.png',
          xp: 5
        },
        {
          id: 'calc_u2_l3_q3',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}[x^2 \cdot x^3]\)?",
          options: ["\\(5x^4\\)", "\\(6x^4\\)", "\\(x^5\\)", "\\(2x \\cdot 3x^2\\)"],
          correct: 0,
          explanation: r"Product rule: \(f'(x)g(x) + f(x)g'(x) = 2x \cdot x^3 + x^2 \cdot 3x^2 = 2x^4 + 3x^4 = 5x^4\)",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q4',
          type: 'typing',
          question: r"\(\frac{d}{dx}[x(x+1)] =\) _____",
          correctAnswer: '2x+1',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x\) and \(g(x) = x+1\). Then \(f'(x) = 1\) and \(g'(x) = 1\). Product rule: \(1(x+1) + x(1) = x + 1 + x = 2x + 1\)",
          diagram: 'diagrams/product_rule.png',
          xp: 5
        },
        {
          id: 'calc_u2_l3_q5',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[3x \cdot x^2] =\) _____",
          options: ["\\(9x^2\\)", "\\(3x \\cdot 2x\\)", "\\(6x^2\\)", "\\(3x^2\\)"],
          correct: 0,
          explanation: r"Product rule with constant: \(\frac{d}{dx}[3x \cdot x^2] = 3(1 \cdot x^2 + x \cdot 2x) = 3(x^2 + 2x^2) = 9x^2\)",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q6',
          type: 'typing',
          question: r"\(\frac{d}{dx}[x^2(2x+3)] =\) _____",
          correctAnswer: '6x^2+6x',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x^2\) and \(g(x) = 2x+3\). Then \(f'(x) = 2x\) and \(g'(x) = 2\). Product rule: \(2x(2x+3) + x^2(2) = 4x^2 + 6x + 2x^2 = 6x^2 + 6x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q7',
          type: 'multiple_choice',
          question: r"The product rule is used when:",
          options: ["Multiplying two functions", "Dividing two functions", "Adding two functions", "Composing two functions"],
          correct: 0,
          explanation: r"The product rule is specifically for finding the derivative of the product of two functions.",
          xp: 4
        },
        {
          id: 'calc_u2_l3_q8',
          type: 'fill_blank',
          question: r"In the product rule, you take the derivative of the _____ times the second, plus the first times the derivative of the _____.",
          correctAnswer: 'first|second',
          prompt: 'Type your answer:',
          explanation: r"Product rule: \(f'(x)g(x) + f(x)g'(x)\)",
          xp: 4
        },
        {
          id: 'calc_u2_l3_q9',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(x+1)(x+2)] =\) _____",
          correctAnswer: '2x+3',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x+1\) and \(g(x) = x+2\). Then \(f'(x) = 1\) and \(g'(x) = 1\). Product rule: \(1(x+2) + (x+1)1 = x + 2 + x + 1 = 2x + 3\)",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q10',
          type: 'multiple_choice',
          question: r"What is \(\frac{d}{dx}[x^3 \cdot e^x]\)?",
          options: ["\\(x^3 e^x + 3x^2 e^x\\)", "\\(3x^2 e^x\\)", "\\(x^3 e^x\\)", "\\(3x^2 e^{x+1}\\)"],
          correct: 0,
          explanation: r"Product rule: \(\frac{d}{dx}(x^3) \cdot e^x + x^3 \cdot \frac{d}{dx}(e^x) = 3x^2 e^x + x^3 e^x\)",
          xp: 6
        },
        {
          id: 'calc_u2_l3_q11',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(x^2+1)(x-1)] =\) _____",
          correctAnswer: '3x^2-2x+1',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x^2+1\) and \(g(x) = x-1\). Then \(f'(x) = 2x\) and \(g'(x) = 1\). Product rule: \(2x(x-1) + (x^2+1)(1) = 2x^2 - 2x + x^2 + 1 = 3x^2 - 2x + 1\)",
          xp: 6
        },
        {
          id: 'calc_u2_l3_q12',
          type: 'match_pairs',
          question: r"Match each product with its derivative:",
          pairs: [{"left": "\\(x \\cdot x\\)", "right": "\\(2x\\)"}, {"left": "\\(x \\cdot x^2\\)", "right": "\\(3x^2\\)"}, {"left": "\\(x^2 \\cdot x^2\\)", "right": "\\(4x^3\\)"}, {"left": "\\(x \\cdot (x+1)\\)", "right": "\\(2x+1\\)"}],
          xp: 8
        },
        {
          id: 'calc_u2_l3_q13',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[x^2 \sin(x)] =\) _____",
          options: ["\\(2x \\sin(x) + x^2 \\cos(x)\\)", "\\(2x \\sin(x)\\)", "\\(x^2 \\cos(x)\\)", "\\(2x \\cos(x) + x^2 \\sin(x)\\)"],
          correct: 0,
          explanation: r"Product rule: \(2x \sin(x) + x^2 \cos(x)\)",
          xp: 6
        },
        {
          id: 'calc_u2_l3_q14',
          type: 'fill_blank',
          question: r"The product rule extends to three functions: \(\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'\). This is called the _____ product rule.",
          correctAnswer: 'extended',
          prompt: 'Type your answer:',
          explanation: r"For three functions, the product rule has three terms, each with one function differentiated.",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q15',
          type: 'typing',
          question: r"\(\frac{d}{dx}[x^3(2x)] =\) _____ (simplify)",
          correctAnswer: '8x^3',
          prompt: 'Type your answer:',
          explanation: r"Alternatively, simplify first: \(x^3(2x) = 2x^4\), then \(\frac{d}{dx}(2x^4) = 8x^3\)",
          xp: 5
        },
        {
          id: 'calc_u2_l3_q16',
          type: 'multiple_choice',
          question: r"When using the product rule, how many terms do you get?",
          options: ["Two terms", "Three terms", "One term", "Four terms"],
          correct: 0,
          explanation: r"The product rule produces two terms: one where the first function is differentiated, and one where the second is differentiated.",
          xp: 4
        }
      ]
    }};
  }},
  // Quotient Rule
  derivBasics4() {
    return {
      id: 'calc_u2_l4',
      title: 'Quotient Rule',
      unit: 2,
      icon: '➗',
      xp: 81,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_l4_q1',
          type: 'multiple_choice',
          question: r"The quotient rule states: \(\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] =\) _____",
          options: ["\\(\\frac{f"(x)g(x) - f(x)g"(x)}{g(x)^2}\\)", "\\(\\frac{f"(x)g(x) + f(x)g"(x)}{g(x)^2}\\)", "\\(\\frac{f"(x)g"(x)}{g(x)^2}\\)", "\\(\\frac{f"(x)g(x) - f(x)g"(x)}{g(x)}\\)"],
          correct: 0,
          explanation: r"Quotient rule: \(\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}\)",
          xp: 4
        },
        {
          id: 'calc_u2_l4_q2',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{x}{x+1}\right] =\) _____",
          correctAnswer: '1/(x+1)^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x\) and \(g(x) = x+1\). Then \(f'(x) = 1\) and \(g'(x) = 1\). Quotient rule: \(\frac{1(x+1) - x(1)}{(x+1)^2} = \frac{x+1-x}{(x+1)^2} = \frac{1}{(x+1)^2}\)",
          diagram: 'diagrams/quotient_rule.png',
          xp: 5
        },
        {
          id: 'calc_u2_l4_q3',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}\left[\frac{x^2}{x}\right] =\) _____",
          options: ["\\(1\\)", "\\(\\frac{2x}{x}\\)", "\\(\\frac{x^2 - 2x^2}{x^2}\\)", "\\(2x\\)"],
          correct: 0,
          explanation: r"Method 1: Simplify first: \(\frac{x^2}{x} = x\), then \(\frac{d}{dx}(x) = 1\)",
          xp: 5
        },
        {
          id: 'calc_u2_l4_q4',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{x}{x^2}\right] =\) _____",
          correctAnswer: '-1/x^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x\) and \(g(x) = x^2\). Then \(f'(x) = 1\) and \(g'(x) = 2x\). Quotient rule: \(\frac{1(x^2) - x(2x)}{(x^2)^2} = \frac{x^2 - 2x^2}{x^4} = -\frac{1}{x^2}\)",
          diagram: 'diagrams/quotient_rule.png',
          xp: 5
        },
        {
          id: 'calc_u2_l4_q5',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}\left[\frac{x+1}{x+2}\right] =\) _____",
          options: ["\\(\\frac{1}{(x+2)^2}\\)", "\\(\\frac{x+2 - x-1}{(x+2)^2}\\)", "\\(\\frac{2}{(x+2)^2}\\)", "\\(\\frac{1}{x+2}\\)"],
          correct: 0,
          explanation: r"Let \(f(x) = x+1\) and \(g(x) = x+2\). Then \(f'(x) = 1\) and \(g'(x) = 1\). Quotient rule: \(\frac{1(x+2) - (x+1)1}{(x+2)^2} = \frac{1}{(x+2)^2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l4_q6',
          type: 'fill_blank',
          question: r"In the quotient rule, the denominator is always the _____ function squared.",
          correctAnswer: 'bottom|second|g(x)',
          prompt: 'Type your answer:',
          explanation: r"Quotient rule: \(\frac{f'g - fg'}{g^2}\)",
          xp: 4
        },
        {
          id: 'calc_u2_l4_q7',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{x^2}{x+1}\right] =\) _____",
          correctAnswer: 'x^2+2x/(x+1)^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x^2\) and \(g(x) = x+1\). Then \(f'(x) = 2x\) and \(g'(x) = 1\). Quotient rule: \(\frac{2x(x+1) - x^2(1)}{(x+1)^2} = \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l4_q8',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}\left[\frac{1}{x}\right] =\) _____",
          options: ["\\(-\\frac{1}{x^2}\\)", "\\(\\frac{1}{x^2}\\)", "\\(-\\frac{1}{x}\\)", "\\(\\frac{1}{x}\\)"],
          correct: 0,
          explanation: r"Let \(f(x) = 1\) and \(g(x) = x\). Then \(f'(x) = 0\) and \(g'(x) = 1\). Quotient rule: \(\frac{0(x) - 1(1)}{x^2} = -\frac{1}{x^2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l4_q9',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{x}{2x+1}\right] =\) _____",
          correctAnswer: '1/(2x+1)^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = x\) and \(g(x) = 2x+1\). Then \(f'(x) = 1\) and \(g'(x) = 2\). Quotient rule: \(\frac{1(2x+1) - x(2)}{(2x+1)^2} = \frac{1}{(2x+1)^2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l4_q10',
          type: 'multiple_choice',
          question: r"When using the quotient rule, the sign in the numerator is:",
          options: ["Minus", "Plus", "Times", "Divided by"],
          correct: 0,
          explanation: r"The quotient rule has a minus sign in the numerator: \(\frac{f'g - fg'}{g^2}\)",
          xp: 4
        },
        {
          id: 'calc_u2_l4_q11',
          type: 'match_pairs',
          question: r"Match each quotient with its derivative:",
          pairs: [{"left": "\\(\\frac{x}{x+1}\\)", "right": "\\(\\frac{1}{(x+1)^2}\\)"}, {"left": "\\(\\frac{1}{x}\\)", "right": "\\(-\\frac{1}{x^2}\\)"}, {"left": "\\(\\frac{x^2}{x}\\)", "right": "\\(1\\)"}, {"left": "\\(\\frac{x}{x^2}\\)", "right": "\\(-\\frac{1}{x^2}\\)"}],
          xp: 8
        },
        {
          id: 'calc_u2_l4_q12',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{x^3}{x^2}\right] =\) _____",
          correctAnswer: 'x',
          prompt: 'Type your answer:',
          explanation: r"Method 1: Simplify first: \(\frac{x^3}{x^2} = x\), then \(\frac{d}{dx}(x) = 1\)",
          xp: 5
        },
        {
          id: 'calc_u2_l4_q13',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}\left[\frac{\sin(x)}{x}\right] =\) _____",
          options: ["\\(\\frac{x\\cos(x) - \\sin(x)}{x^2}\\)", "\\(\\frac{\\cos(x)}{x}\\)", "\\(\\frac{x\\cos(x) + \\sin(x)}{x^2}\\)", "\\(\\cos(x)\\)"],
          correct: 0,
          explanation: r"Quotient rule: \(\frac{x\cos(x) - \sin(x)}{x^2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l4_q14',
          type: 'fill_blank',
          question: r"For \(\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]\), the numerator is \(f'g\) _____ \(fg'\).",
          correctAnswer: '-',
          prompt: 'Type your answer:',
          explanation: r"The numerator is \(f'g - fg'\) (top derivative times bottom minus top times bottom derivative).",
          xp: 4
        },
        {
          id: 'calc_u2_l4_q15',
          type: 'typing',
          question: r"\(\frac{d}{dx}\left[\frac{2x}{x+1}\right] =\) _____",
          correctAnswer: '2/(x+1)^2',
          prompt: 'Type your answer:',
          explanation: r"Let \(f(x) = 2x\) and \(g(x) = x+1\). Then \(f'(x) = 2\) and \(g'(x) = 1\). Quotient rule: \(\frac{2(x+1) - 2x(1)}{(x+1)^2} = \frac{2}{(x+1)^2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l4_q16',
          type: 'multiple_choice',
          question: r"If you can simplify a quotient before differentiating, you should:",
          options: ["Simplify first, then differentiate", "Always use the quotient rule", "Never simplify", "Use the chain rule instead"],
          correct: 0,
          explanation: r"Simplifying first often makes the problem easier and reduces the chance of errors.",
          xp: 4
        }
      ]
    }};
  }},
  // Chain Rule
  derivBasics5() {
    return {
      id: 'calc_u2_l5',
      title: 'Chain Rule',
      unit: 2,
      icon: '⛓️',
      xp: 89,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u2_l5_q1',
          type: 'multiple_choice',
          question: r"The chain rule is used to differentiate:",
          options: ["Composite functions", "Products of functions", "Quotients of functions", "Sums of functions"],
          correct: 0,
          explanation: r"The chain rule is specifically for differentiating composite functions (functions within functions).",
          xp: 4
        },
        {
          id: 'calc_u2_l5_q2',
          type: 'typing',
          question: r"If \(y = (x^2 + 1)^3\), then \(y' =\) _____",
          correctAnswer: '3(x^2+1)^2(2x)',
          prompt: 'Type your answer:',
          explanation: r"Let \(u = x^2 + 1\), then \(y = u^3\). By chain rule: \(y' = 3u^2 \cdot u' = 3(x^2+1)^2 \cdot 2x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q3',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[(x+1)^2] =\) _____",
          options: ["\\(2(x+1)\\)", "\\(2x\\)", "\\((x+1)^2\\)", "\\(2(x+1)^2\\)"],
          correct: 0,
          explanation: r"Chain rule: \(2(x+1) \cdot 1 = 2(x+1)\)",
          xp: 4
        },
        {
          id: 'calc_u2_l5_q4',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(2x+3)^5] =\) _____",
          correctAnswer: '5(2x+3)^4(2)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(5(2x+3)^4 \cdot 2 = 10(2x+3)^4\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q5',
          type: 'multiple_choice',
          question: r"For \(y = \sin(x^2)\), what is \(y'\)?",
          options: ["\\(\\cos(x^2) \\cdot 2x\\)", "\\(\\cos(x^2)\\)", "\\(2x\\)", "\\(\\sin(2x)\\)"],
          correct: 0,
          explanation: r"Chain rule: \(\cos(x^2) \cdot 2x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q6',
          type: 'typing',
          question: r"\(\frac{d}{dx}[e^{3x}] =\) _____",
          correctAnswer: 'e^(3x)(3)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(e^{3x} \cdot 3 = 3e^{3x}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q7',
          type: 'fill_blank',
          question: r"In the chain rule, you differentiate the _____ function, then multiply by the derivative of the _____ function.",
          correctAnswer: 'outer|inner',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)\)",
          xp: 4
        },
        {
          id: 'calc_u2_l5_q8',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[(x^3 + 2x)^4] =\) _____",
          options: ["\\(4(x^3 + 2x)^3(3x^2 + 2)\\)", "\\(4(x^3 + 2x)^3\\)", "\\((x^3 + 2x)^3(3x^2 + 2)\\)", "\\(12x(x^3 + 2x)^3\\)"],
          correct: 0,
          explanation: r"Chain rule: \(4(x^3 + 2x)^3 \cdot (3x^2 + 2)\)",
          xp: 6
        },
        {
          id: 'calc_u2_l5_q9',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\sqrt{x^2 + 1}] =\) _____",
          correctAnswer: '1/2(x^2+1)^(-1/2)(2x)',
          prompt: 'Type your answer:',
          explanation: r"Rewrite as \((x^2 + 1)^{1/2}\), then chain rule: \(\frac{1}{2}(x^2 + 1)^{-1/2} \cdot 2x = \frac{x}{\sqrt{x^2+1}}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l5_q10',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[\ln(2x)] =\) _____",
          options: ["\\(\\frac{1}{2x} \\cdot 2 = \\frac{1}{x}\\)", "\\(\\frac{1}{2x}\\)", "\\(\\frac{2}{x}\\)", "\\(\\frac{1}{x}\\)"],
          correct: 0,
          explanation: r"Chain rule: \(\frac{1}{2x} \cdot 2 = \frac{1}{x}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q11',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(3x - 1)^2] =\) _____",
          correctAnswer: '2(3x-1)(3)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(2(3x - 1) \cdot 3 = 6(3x - 1)\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q12',
          type: 'match_pairs',
          question: r"Match each function with its derivative:",
          pairs: [{"left": "\\((x+1)^2\\)", "right": "\\(2(x+1)\\)"}, {"left": "\\((2x)^3\\)", "right": "\\(3(2x)^2 \\cdot 2\\)"}, {"left": "\\(e^{3x}\\)", "right": "\\(e^{3x} \\cdot 3\\)"}, {"left": "\\(\\sin(x^2)\\)", "right": "\\(\\cos(x^2) \\cdot 2x\\)"}],
          xp: 8
        },
        {
          id: 'calc_u2_l5_q13',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[\cos^2(x)] =\) _____",
          options: ["\\(2\\cos(x)(-\\sin(x))\\)", "\\(2\\cos(x)\\)", "\\(-2\\sin(x)\\)", "\\(\\cos^2(x)\\)"],
          correct: 0,
          explanation: r"Chain rule: \(2\cos(x) \cdot (-\sin(x)) = -2\cos(x)\sin(x)\)",
          xp: 6
        },
        {
          id: 'calc_u2_l5_q14',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(x^2 + 1)^{10}] =\) _____",
          correctAnswer: '10(x^2+1)^9(2x)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(10(x^2 + 1)^9 \cdot 2x = 20x(x^2 + 1)^9\)",
          xp: 6
        },
        {
          id: 'calc_u2_l5_q15',
          type: 'fill_blank',
          question: r"The chain rule formula is: \(\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot\) _____",
          correctAnswer: 'g'(x)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)\)",
          xp: 4
        },
        {
          id: 'calc_u2_l5_q16',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[e^{-x}] =\) _____",
          options: ["\\(-e^{-x}\\)", "\\(e^{-x}\\)", "\\(e^{x}\\)", "\\(-e^{x}\\)"],
          correct: 0,
          explanation: r"Chain rule: \(e^{-x} \cdot (-1) = -e^{-x}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l5_q17',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\ln(x^2 + 1)] =\) _____",
          correctAnswer: '2x/(x^2+1)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(\frac{1}{x^2 + 1} \cdot 2x = \frac{2x}{x^2 + 1}\)",
          xp: 6
        }
      ]
    }};
  }},
  // Derivatives Practice
  derivBasics6() {
    return {
      id: 'calc_u2_l6',
      title: 'Derivatives Practice',
      unit: 2,
      icon: '💪',
      xp: 95,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_l6_q1',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[x^3 + 2x^2 - 5x + 1] =\) _____",
          options: ["\\(3x^2 + 4x - 5\\)", "\\(3x^2 + 4x + 5\\)", "\\(x^3 + 2x^2 - 5\\)", "\\(3x^3 + 4x^2 - 5\\)"],
          correct: 0,
          explanation: r"Power rule on each term: \(3x^2 + 4x - 5\)",
          xp: 4
        },
        {
          id: 'calc_u2_l6_q2',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(2x+1)(x-1)] =\) _____",
          correctAnswer: '4x-1',
          prompt: 'Type your answer:',
          explanation: r"Product rule: \(2(x-1) + (2x+1)(1) = 2x - 2 + 2x + 1 = 4x - 1\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q3',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}\left[\frac{x^2}{x+1}\right] =\) _____",
          options: ["\\(\\frac{x^2 + 2x}{(x+1)^2}\\)", "\\(\\frac{2x}{x+1}\\)", "\\(\\frac{x^2 - 2x}{(x+1)^2}\\)", "\\(\\frac{x}{x+1}\\)"],
          correct: 0,
          explanation: r"Quotient rule: \(\frac{2x(x+1) - x^2(1)}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q4',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(x^2 + 1)^3] =\) _____",
          correctAnswer: '3(x^2+1)^2(2x)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(3(x^2 + 1)^2 \cdot 2x = 6x(x^2 + 1)^2\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q5',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[x \cdot e^x] =\) _____",
          options: ["\\(e^x + xe^x\\)", "\\(e^x\\)", "\\(xe^x\\)", "\\(e^{x+1}\\)"],
          correct: 0,
          explanation: r"Product rule: \(1 \cdot e^x + x \cdot e^x = e^x + xe^x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q6',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\sin(x) \cdot \cos(x)] =\) _____",
          correctAnswer: 'cos^2(x)-sin^2(x)',
          prompt: 'Type your answer:',
          explanation: r"Product rule: \(\cos(x) \cdot \cos(x) + \sin(x) \cdot (-\sin(x)) = \cos^2(x) - \sin^2(x)\)",
          xp: 6
        },
        {
          id: 'calc_u2_l6_q7',
          type: 'fill_blank',
          question: r"To find \(\frac{d}{dx}[\frac{f(x)}{g(x)}]\), use the _____ rule.",
          correctAnswer: 'quotient',
          prompt: 'Type your answer:',
          explanation: r"The quotient rule is used for differentiating quotients of functions.",
          xp: 4
        },
        {
          id: 'calc_u2_l6_q8',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[e^{x^2}] =\) _____",
          options: ["\\(e^{x^2} \\cdot 2x\\)", "\\(e^{x^2}\\)", "\\(2xe^{x^2}\\)", "\\(e^{2x}\\)"],
          correct: 0,
          explanation: r"Chain rule: \(e^{x^2} \cdot 2x = 2xe^{x^2}\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q9',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\frac{\sin(x)}{x}] =\) _____",
          correctAnswer: 'xcos(x)-sin(x)/x^2',
          prompt: 'Type your answer:',
          explanation: r"Quotient rule: \(\frac{x\cos(x) - \sin(x)}{x^2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l6_q10',
          type: 'match_pairs',
          question: r"Match each function with the appropriate rule:",
          pairs: [{"left": "\\((x+1)(x-1)\\)", "right": "Product Rule"}, {"left": "\\(\\frac{x}{x+1}\\)", "right": "Quotient Rule"}, {"left": "\\((x^2+1)^3\\)", "right": "Chain Rule"}, {"left": "\\(x^3 + 2x\\)", "right": "Power Rule"}],
          xp: 8
        },
        {
          id: 'calc_u2_l6_q11',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[(3x)^2] =\) _____",
          options: ["\\(18x\\)", "\\(6x\\)", "\\(9x^2\\)", "\\(2(3x)\\)"],
          correct: 0,
          explanation: r"Chain rule: \(2(3x) \cdot 3 = 18x\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q12',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\ln(x) \cdot x] =\) _____",
          correctAnswer: '1+ln(x)',
          prompt: 'Type your answer:',
          explanation: r"Product rule: \(\frac{1}{x} \cdot x + \ln(x) \cdot 1 = 1 + \ln(x)\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q13',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[\sqrt{x} \cdot x^2] =\) _____",
          options: ["\\(\\frac{5}{2}x^{3/2}\\)", "\\(\\frac{3}{2}x^{1/2}\\)", "\\(x^{5/2}\\)", "\\(2x \\cdot x^2\\)"],
          correct: 0,
          explanation: r"Product rule: \(\frac{1}{2\sqrt{x}} \cdot x^2 + \sqrt{x} \cdot 2x = \frac{x^2}{2\sqrt{x}} + 2x\sqrt{x} = \frac{5}{2}x^{3/2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l6_q14',
          type: 'typing',
          question: r"\(\frac{d}{dx}[\frac{1}{x^2 + 1}] =\) _____",
          correctAnswer: '-2x/(x^2+1)^2',
          prompt: 'Type your answer:',
          explanation: r"Chain rule on quotient: \(-1(x^2+1)^{-2} \cdot 2x = -\frac{2x}{(x^2+1)^2}\)",
          xp: 6
        },
        {
          id: 'calc_u2_l6_q15',
          type: 'fill_blank',
          question: r"Before differentiating \(\frac{x^2}{x}\), it's best to _____ first.",
          correctAnswer: 'simplify',
          prompt: 'Type your answer:',
          explanation: r"Simplify \(\frac{x^2}{x} = x\), then \(\frac{d}{dx}(x) = 1\)",
          xp: 4
        },
        {
          id: 'calc_u2_l6_q16',
          type: 'multiple_choice',
          question: r"\(\frac{d}{dx}[\cos(3x)] =\) _____",
          options: ["\\(-3\\sin(3x)\\)", "\\(-\\sin(3x)\\)", "\\(-3\\cos(3x)\\)", "\\(3\\sin(3x)\\)"],
          correct: 0,
          explanation: r"Chain rule: \(-\sin(3x) \cdot 3 = -3\sin(3x)\)",
          xp: 5
        },
        {
          id: 'calc_u2_l6_q17',
          type: 'typing',
          question: r"\(\frac{d}{dx}[(x^3 + 1)^2] =\) _____",
          correctAnswer: '2(x^3+1)(3x^2)',
          prompt: 'Type your answer:',
          explanation: r"Chain rule: \(2(x^3 + 1) \cdot 3x^2 = 6x^2(x^3 + 1)\)",
          xp: 6
        },
        {
          id: 'calc_u2_l6_q18',
          type: 'multiple_choice',
          question: r"Which rule is most efficient for \(\frac{d}{dx}[\frac{x^3}{x}]\)?",
          options: ["Simplify first (power rule)", "Quotient rule", "Product rule", "Chain rule"],
          correct: 0,
          explanation: r"Simplify to \(x^2\), then power rule gives \(2x\). Much easier than quotient rule!",
          xp: 5
        }
      ]
    }};
  }},
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusComprehensiveLessons };
} else {
  window.CalculusComprehensiveLessons = CalculusComprehensiveLessons;
}
