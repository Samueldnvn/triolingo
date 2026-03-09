/**
 * COMPREHENSIVE CALCULUS LESSONS
 * Generated on 2026-03-01 15:53:30
 * All units with 15-20 questions each
 */

const CalculusComprehensiveLessons = {

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
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusComprehensiveLessons };
} else {
  window.CalculusComprehensiveLessons = CalculusComprehensiveLessons;
}
