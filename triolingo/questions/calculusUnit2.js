/**
 * QUESTION DATABASE - UNIT 2 CALCULUS (COMPLETE)
 * Database for Unit 2: Derivatives Basics - Complete with all lessons
 *
 * Structure:
 * - 6 lessons total
 * - 15-20 questions per lesson
 * - Majority typing questions (60-70%)
 * - Seaborn-style colored diagrams
 */

const CalculusUnit2Database = {
  unit: "Calculus Unit 2",
  title: "Derivatives Basics",
  lessons: {
    // ========================================================================
    // LESSON 1: Introduction to Derivatives (18 questions)
    // ========================================================================
    "u2_l1": {
      id: "calc2_u2_l1",
      title: "Introduction to Derivatives",
      icon: "calculus_icons/derivative.png",
      xp: 85,
      difficulty: "basic",
      questions: [
        // Multiple Choice (5)
        {
          id: "u2_l1_q1",
          type: "multiple_choice",
          question: "What does the derivative \\(f'(x)\\) represent?",
          options: [
            "The slope of the tangent line",
            "The area under the curve",
            "The maximum value",
            "The average rate of change"
          ],
          correct: 0,
          explanation: "The derivative represents the instantaneous rate of change, which is the slope of the tangent line.",
          xp: 4,
          diagram: "tangentLine",
          diagramParams: {
            function: "x^2",
            point: 1,
            style: "seaborn"
          }
        },
        {
          id: "u2_l1_q2",
          type: "multiple_choice",
          question: "The derivative is defined as:",
          options: [
            "\\(\\frac{f(x+h) - f(x-h)}{2h}\\)",
            "\\(\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
            "\\(\\lim_{x \\to a} f(x)\\)",
            "\\(\\int f(x) dx\\)"
          ],
          correct: 1,
          explanation: "The derivative is the limit of the difference quotient as h approaches 0.",
          xp: 5
        },
        {
          id: "u2_l1_q3",
          type: "multiple_choice",
          question: "Which function has derivative equal to 0 everywhere?",
          options: [
            "\\(f(x) = x\\)",
            "\\(f(x) = x^2\\)",
            "\\(f(x) = c\\) (constant)",
            "\\(f(x) = e^x\\)"
          ],
          correct: 2,
          explanation: "Constant functions have zero slope everywhere, so their derivative is 0.",
          xp: 4
        },
        {
          id: "u2_l1_q4",
          type: "multiple_choice",
          question: "Geometrically, the derivative at a point represents:",
          options: [
            "The y-intercept",
            "The x-intercept",
            "The slope of the tangent line",
            "The curvature"
          ],
          correct: 2,
          explanation: "The derivative is the slope of the line tangent to the curve at that point.",
          xp: 4
        },
        {
          id: "u2_l1_q5",
          type: "multiple_choice",
          question: "If \\(f'(a) > 0\\), the function is _____ at x = a.",
          options: [
            "Decreasing",
            "Increasing",
            "Constant",
            "Undefined"
          ],
          correct: 1,
          explanation: "A positive derivative means the function is increasing at that point.",
          xp: 4
        },

        // Typing (13 - majority!)
        {
          id: "u2_l1_q6",
          type: "typing",
          question: "Find the derivative: \\(f(x) = 5\\).\\nType your answer:",
          correctAnswer: "0",
          prompt: "Type the derivative:",
          xp: 5
        },
        {
          id: "u2_l1_q7",
          type: "typing",
          question: "Find the derivative: \\(f(x) = x\\).\\nType your answer:",
          correctAnswer: "1",
          prompt: "Type the derivative:",
          xp: 5
        },
        {
          id: "u2_l1_q8",
          type: "typing",
          question: "If \\(f(x) = x^2\\) and we use the definition with h = 0.001, what is the approximate derivative at x = 2?\\n(Hint: \\(\\frac{f(2+0.001) - f(2)}{0.001}\\))",
          correctAnswer: "4.001",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l1_q9",
          type: "typing",
          question: "The derivative of \\(f(x) = x^3\\) at x = 2 is equal to:",
          correctAnswer: "12",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l1_q10",
          type: "typing",
          question: "Write the difference quotient for f(x):",
          correctAnswer: "(f(x+h)-f(x))/h",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 6
        },
        {
          id: "u2_l1_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} (7x)\\):",
          correctAnswer: "7",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l1_q12",
          type: "typing",
          question: "If \\(f(x) = 3x + 1\\), what is \\(f'(x)\\)?",
          correctAnswer: "3",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l1_q13",
          type: "typing",
          question: "At what x-value does \\(f(x) = x^2\\) have derivative = 4?",
          correctAnswer: "2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l1_q14",
          type: "typing",
          question: "If \\(f'(x) = 2x\\), what is f'(3)?",
          correctAnswer: "6",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l1_q15",
          type: "typing",
          question: "The derivative of \\(f(x) = c\\) (constant) is:",
          correctAnswer: "0",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l1_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} (-4x)\\):",
          correctAnswer: "-4",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l1_q17",
          type: "typing",
          question: "If a function has slope 0 at x = 2, what is \\(f'(2)\\)?",
          correctAnswer: "0",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l1_q18",
          type: "typing",
          question: "What is \\(\\frac{d}{dx} (0.5x)\\)?",
          correctAnswer: "0.5",
          prompt: "Type your answer:",
          xp: 5
        }
      ]
    },

    // ========================================================================
    // LESSON 2: Power Rule (19 questions)
    // ========================================================================
    "u2_l2": {
      id: "calc2_u2_l2",
      title: "Power Rule",
      icon: "calculus_icons/derivative.png",
      xp: 88,
      difficulty: "basic",
      questions: [
        // Multiple Choice (6)
        {
          id: "u2_l2_q1",
          type: "multiple_choice",
          question: "What is the power rule formula?",
          options: [
            "\\(\\frac{d}{dx} x^n = x^{n-1}\\)",
            "\\(\\frac{d}{dx} x^n = nx^{n-1}\\)",
            "\\(\\frac{d}{dx} x^n = n^n\\)",
            "\\(\\frac{d}{dx} x^n = nx\\)"
          ],
          correct: 1,
          explanation: "Power rule: \\(\\frac{d}{dx} x^n = nx^{n-1}\\)",
          xp: 4,
          diagram: "powerRule",
          diagramParams: {
            style: "seaborn"
          }
        },
        {
          id: "u2_l2_q2",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} x^5 = \\)",
          options: ["5x^5", "5x^4", "x^4", "4x^5"],
          correct: 1,
          explanation: "Apply power rule: 5x^(5-1) = 5x^4",
          xp: 4
        },
        {
          id: "u2_l2_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} x^{-3} = \\)",
          options: ["-3x^{-4}", "-3x^{-2}", "3x^{-4}", "-3x^2"],
          correct: 0,
          explanation: "Apply power rule: -3x^(-3-1) = -3x^(-4)",
          xp: 5
        },
        {
          id: "u2_l2_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} \\sqrt{x} = \\)",
          options: [
            "\\(\\frac{1}{2\\sqrt{x}}\\)",
            "\\(\\frac{1}{2}x^{1/2}\\)",
            "\\(2\\sqrt{x}\\)",
            "\\(x^{-1/2}\\)"
          ],
          correct: 0,
          explanation: "√x = x^(1/2), so derivative = 1/2 * x^(-1/2) = 1/(2√x)",
          xp: 6
        },
        {
          id: "u2_l2_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} \\frac{1}{x^2} = \\)",
          options: [
            "\\(\\frac{2}{x^3}\\)",
            "\\(-\\frac{2}{x^3}\\)",
            "\\(\\frac{1}{x}\\)",
            "\\(-\\frac{1}{x}\\)"
          ],
          correct: 1,
          explanation: "1/x² = x^(-2), so derivative = -2x^(-3) = -2/x³",
          xp: 6
        },
        {
          id: "u2_l2_q6",
          type: "multiple_choice",
          question: "Which derivative is correct?",
          options: [
            "\\(\\frac{d}{dx} x^{1/3} = \\frac{1}{3}x^{-2/3}\\)",
            "\\(\\frac{d}{dx} x^{1/3} = \\frac{1}{3}x^{-2/3}\\) ✓",
            "\\(\\frac{d}{dx} x^{1/3} = x^{-2/3}\\)",
            "\\(\\frac{d}{dx} x^{1/3} = \\frac{1}{3}x^{-1/3}\\)"
          ],
          correct: 1,
          explanation: "Apply power rule: 1/3 * x^(1/3-1) = 1/3 * x^(-2/3)",
          xp: 5
        },

        // Typing (13 - majority!)
        {
          id: "u2_l2_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^{10}\\):",
          correctAnswer: "10x^9",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l2_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^7\\):",
          correctAnswer: "7x^6",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l2_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^3\\):",
          correctAnswer: "3x^2",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l2_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^2\\):",
          correctAnswer: "2x",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l2_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^1\\):",
          correctAnswer: "1",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l2_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^{-2}\\):",
          correctAnswer: "-2x^-3",
          prompt: "Type your answer (use -2x^-3 or -2/x^3):",
          xp: 6
        },
        {
          id: "u2_l2_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^{1/2}\\):",
          correctAnswer: "0.5x^-0.5",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l2_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} x^{2/3}\\):",
          correctAnswer: "(2/3)x^(-1/3)",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l2_q15",
          type: "typing",
          question: "If \\(f'(x) = 6x^5\\), what was f(x)?",
          correctAnswer: "x^6",
          prompt: "Type your answer (guess the original function):",
          xp: 6
        },
        {
          id: "u2_l2_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} 3x^4\\):",
          correctAnswer: "12x^3",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l2_q17",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} (-2x^3)\\):",
          correctAnswer: "-6x^2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l2_q18",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} 0.5x^8\\):",
          correctAnswer: "4x^7",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l2_q19",
          type: "typing",
          question: "What is the derivative of \\(\\frac{1}{x^3}\\)?",
          correctAnswer: "-3/x^4",
          prompt: "Type your answer:",
          xp: 6
        }
      ]
    },

    // ========================================================================
    // LESSON 3: Constant & Sum Rules (17 questions)
    // ========================================================================
    "u2_l3": {
      id: "calc2_u2_l3",
      title: "Constant & Sum Rules",
      icon: "calculus_icons/derivative.png",
      xp: 82,
      difficulty: "basic",
      questions: [
        // Multiple Choice (5)
        {
          id: "u2_l3_q1",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} [cf(x)] = \\)",
          options: [
            "cf'(x)",
            "f'(x)",
            "c",
            "f(x)"
          ],
          correct: 0,
          explanation: "Constant multiple rule: The constant factor stays outside the derivative.",
          xp: 4
        },
        {
          id: "u2_l3_q2",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} [f(x) + g(x)] = \\)",
          options: [
            "f(x)g'(x)",
            "f'(x) + g'(x)",
            "f'(x)g'(x)",
            "f'(x) - g'(x)"
          ],
          correct: 1,
          explanation: "Sum rule: Derivative of sum is sum of derivatives.",
          xp: 4
        },
        {
          id: "u2_l3_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} [f(x) - g(x)] = \\)",
          options: [
            "f'(x) + g'(x)",
            "f'(x) - g'(x)",
            "f(x) - g(x)",
            "f'(x)g(x)"
          ],
          correct: 1,
          explanation: "Difference rule: Derivative of difference is difference of derivatives.",
          xp: 4
        },
        {
          id: "u2_l3_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx} [3x^2 + 2x - 1] = \\)",
          options: [
            "6x + 2",
            "6x + 2x - 1",
            "3x^2 + 2",
            "6x^2 + 2"
          ],
          correct: 0,
          explanation: "Term by term: 6x + 2 + 0 = 6x + 2",
          xp: 5
        },
        {
          id: "u2_l3_q5",
          type: "multiple_choice",
          question: "What is \\(\\frac{d}{dx} [4x^3 - 2x^2 + 5x - 3]\\)?",
          options: [
            "12x^2 - 4x + 5",
            "12x^3 - 4x^2 + 5",
            "4x^2 - 2x + 5",
            "12x^2 - 4x"
          ],
          correct: 0,
          explanation: "Term by term: 12x² - 4x + 5 + 0 = 12x² - 4x + 5",
          xp: 5
        },

        // Typing (12 - majority!)
        {
          id: "u2_l3_q6",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [5x^3 + 2x^2]\\):",
          correctAnswer: "15x^2+4x",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [x^4 - 3x^2]\\):",
          correctAnswer: "4x^3-6x",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [2x^5 + x^3 - 4x]\\):",
          correctAnswer: "10x^4+3x^2-4",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l3_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [6x^2 + 4x + 1]\\):",
          correctAnswer: "12x+4",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [x^6 - 2x^4 + 3x^2]\\):",
          correctAnswer: "6x^5-8x^3+6x",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l3_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [4x^3 - 7x^2 + 2x - 5]\\):",
          correctAnswer: "12x^2-14x+2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l3_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [10x^4 + 3x^2 - x]\\):",
          correctAnswer: "40x^3+6x-1",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l3_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [3x^2 + 2]\\):",
          correctAnswer: "6x",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u2_l3_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [x^3 - x]\\):",
          correctAnswer: "3x^2-1",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [2x^4 + 3x^2]\\):",
          correctAnswer: "8x^3+6x",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx} [5x^3 - 2x + 7]\\):",
          correctAnswer: "15x^2-2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l3_q17",
          type: "typing",
          question: "What is \\(\\frac{d}{dx} [x^5 + x^4 + x^3 + x^2 + x + 1]\\)?",
          correctAnswer: "5x^4+4x^3+3x^2+2x+1",
          prompt: "Type your answer:",
          xp: 6
        }
      ]
    },

    // ========================================================================
    // LESSON 4: Product Rule (18 questions)
    // ========================================================================
    "u2_l4": {
      id: "calc2_u2_l4",
      title: "Product Rule",
      icon: "calculus_icons/derivative.png",
      xp: 86,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u2_l4_q1",
          type: "multiple_choice",
          question: "What is the product rule formula?",
          options: [
            "\\(\\frac{d}{dx}[fg] = f'g\\)",
            "\\(\\frac{d}{dx}[fg] = f'g + fg'\\)",
            "\\(\\frac{d}{dx}[fg] = f'g'\\)",
            "\\(\\frac{d}{dx}[fg] = fg\\)"
          ],
          correct: 1,
          explanation: "Product rule: \\(\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)\\)",
          xp: 4,
          diagram: "productRule",
          diagramParams: {
            style: "seaborn"
          }
        },
        {
          id: "u2_l4_q2",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[x \\cdot x^2] = \\)",
          options: ["x²", "2x²", "3x²", "x³"],
          correct: 2,
          explanation: "Using product rule: 1·x² + x·2x = x² + 2x² = 3x²",
          xp: 5
        },
        {
          id: "u2_l4_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[x^2 \\cdot x^3] = \\)",
          options: ["5x⁴", "6x⁴", "5x⁵", "x⁵"],
          correct: 0,
          explanation: "Using product rule: 2x·x³ + x²·3x² = 2x⁴ + 3x⁴ = 5x⁴",
          xp: 5
        },
        {
          id: "u2_l4_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[x(2x+1)] = \\)",
          options: ["2x+1", "4x+1", "4x+2", "2x"],
          correct: 1,
          explanation: "Product rule: 1·(2x+1) + x·2 = 2x+1+2x = 4x+1",
          xp: 5
        },
        {
          id: "u2_l4_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[(x+1)(x-1)] = \\)",
          options: ["2x", "2x-2", "2x+2", "x"],
          correct: 0,
          explanation: "Product rule: 1·(x-1) + (x+1)·1 = x-1+x+1 = 2x",
          xp: 6
        },
        {
          id: "u2_l4_q6",
          type: "multiple_choice",
          question: "Which is easier for \\(\\frac{d}{dx}[x(x+2)]\\)?",
          options: [
            "Product rule",
            "Expand first, then differentiate",
            "Chain rule",
            "Quotient rule"
          ],
          correct: 1,
          explanation: "x(x+2) = x²+2x, then derivative = 2x+2. Simpler!",
          xp: 5
        },

        // Typing (12 - majority!)
        {
          id: "u2_l4_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x^2 \\cdot x]\\):",
          correctAnswer: "3x^2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l4_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x \\cdot x^4]\\):",
          correctAnswer: "5x^4",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l4_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x(3x+1)]\\):",
          correctAnswer: "6x+1",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+2)(x+3)]\\):",
          correctAnswer: "2x+5",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x(2x+3)]\\):",
          correctAnswer: "4x+3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+1)(x+1)]\\):",
          correctAnswer: "2x+2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l4_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x^2(2x+1)]\\):",
          correctAnswer: "6x^2+2x",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[2x(x+1)]\\):",
          correctAnswer: "4x+2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l4_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[3x(x+2)]\\):",
          correctAnswer: "6x+6",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x^2+1)(x+1)]\\):",
          correctAnswer: "3x^2+2x+1",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q17",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x(2x^2+1)]\\):",
          correctAnswer: "6x^2+1",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l4_q18",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+3)(x-3)]\\):",
          correctAnswer: "2x",
          prompt: "Type your answer:",
          xp: 5
        }
      ]
    },

    // ========================================================================
    // LESSON 5: Quotient Rule (18 questions)
    // ========================================================================
    "u2_l5": {
      id: "calc2_u2_l5",
      title: "Quotient Rule",
      icon: "calculus_icons/derivative.png",
      xp: 88,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u2_l5_q1",
          type: "multiple_choice",
          question: "What is the quotient rule formula?",
          options: [
            "\\(\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{f'}{g'}\\)",
            "\\(\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{f'g - fg'}{g^2}\\)",
            "\\(\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{f'g + fg'}{g^2}\\)",
            "\\(\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{fg'}{g^2}\\)"
          ],
          correct: 1,
          explanation: "Quotient rule: \\(\\frac{f'g - fg'}{g^2}\\). Remember: 'low d-high minus high d-low, over the square of what's below'",
          xp: 5,
          diagram: "quotientRule",
          diagramParams: {
            style: "seaborn"
          }
        },
        {
          id: "u2_l5_q2",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}\\left[\\frac{x}{x+1}\\right] = \\)",
          options: [
            "\\(\\frac{1}{x+1}\\)",
            "\\(\\frac{1}{(x+1)^2}\\)",
            "\\(\\frac{1}{(x+1)^2}\\) ✓",
            "\\(\\frac{x+1}{x}\\)"
          ],
          correct: 2,
          explanation: "Quotient rule: \\(\\frac{1(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}\\)",
          xp: 6
        },
        {
          id: "u2_l5_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}\\left[\\frac{x^2}{x}\\right] = \\)",
          options: ["1", "2", "x", "2x"],
          correct: 0,
          explanation: "Note: x²/x = x, so derivative = 1. Much simpler than quotient rule!",
          xp: 5
        },
        {
          id: "u2_l5_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}\\left[\\frac{1}{x+1}\\right] = \\)",
          options: [
            "\\(\\frac{1}{x+1}\\)",
            "\\(-\\frac{1}{(x+1)^2}\\)",
            "\\(\\frac{1}{(x+1)^2}\\)",
            "\\(-\\frac{1}{x+1}\\)"
          ],
          correct: 1,
          explanation: "Quotient rule with f=1, g=x+1: \\(\\frac{0(x+1) - 1(1)}{(x+1)^2} = \\frac{-1}{(x+1)^2}\\)",
          xp: 6
        },
        {
          id: "u2_l5_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}\\left[\\frac{x+1}{x-1}\\right] = \\)",
          options: [
            "\\(\\frac{-2}{(x-1)^2}\\)",
            "\\(\\frac{2}{(x-1)^2}\\)",
            "\\(\\frac{2}{x-1}\\)",
            "\\(\\frac{-2}{x-1}\\)"
          ],
          correct: 0,
          explanation: "\\(\\frac{1(x-1) - (x+1)(1)}{(x-1)^2} = \\frac{-2}{(x-1)^2}\\)",
          xp: 6
        },
        {
          id: "u2_l5_q6",
          type: "multiple_choice",
          question: "Which is easier for \\(\\frac{d}{dx}\\left[\\frac{x^2}{x}\\right]\\)?",
          options: [
            "Quotient rule",
            "Simplify first: x²/x = x",
            "Chain rule",
            "Product rule"
          ],
          correct: 1,
          explanation: "Always simplify first! x²/x = x, then derivative = 1",
          xp: 5
        },

        // Typing (12 - majority!)
        {
          id: "u2_l5_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x}{x+2}\\right]\\):",
          correctAnswer: "2/(x+2)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x}{x+3}\\right]\\):",
          correctAnswer: "3/(x+3)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{1}{x^2}\\right]\\):",
          correctAnswer: "-2/x^3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{1}{x+1}\\right]\\):",
          correctAnswer: "-1/(x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{2x}{x+1}\\right]\\):",
          correctAnswer: "2/(x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x^2}{x+1}\\right]\\):",
          correctAnswer: "(x^2+2x)/(x+1)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l5_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{1}{(x+1)^2}\\right]\\):",
          correctAnswer: "-2/(x+1)^3",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l5_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x}{2x+1}\\right]\\):",
          correctAnswer: "1/(2x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x+2}{x+1}\\right]\\):",
          correctAnswer: "-1/(x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{2}{x+1}\\right]\\):",
          correctAnswer: "-2/(x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l5_q17",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x^2+1}{x+1}\\right]\\):",
          correctAnswer: "(x^2+2x-1)/(x+1)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l5_q18",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{3x}{x^2}\\right]\\) (simplify first!):",
          correctAnswer: "-3/x^2",
          prompt: "Type your answer:",
          xp: 7
        }
      ]
    },

    // ========================================================================
    // LESSON 6: Derivatives Review (17 questions)
    // ========================================================================
    "u2_l6": {
      id: "calc2_u2_l6",
      title: "Derivatives Review",
      icon: "calculus_icons/derivative.png",
      xp: 84,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u2_l6_q1",
          type: "multiple_choice",
          question: "What rule should you use for \\(\\frac{d}{dx}\\left[\\frac{x^2}{x+1}\\right]\\)?",
          options: [
            "Power rule",
            "Product rule",
            "Quotient rule",
            "Chain rule"
          ],
          correct: 2,
          explanation: "This is a quotient, so use the quotient rule.",
          xp: 4
        },
        {
          id: "u2_l6_q2",
          type: "multiple_choice",
          question: "What rule should you use for \\(\\frac{d}{dx}[x^2 \\cdot (x+1)]\\)?",
          options: [
            "Power rule",
            "Product rule",
            "Quotient rule",
            "Sum rule"
          ],
          correct: 1,
          explanation: "This is a product, so use the product rule (or expand first).",
          xp: 4
        },
        {
          id: "u2_l6_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[x(x^2+1)] = \\)",
          options: [
            "x²+1",
            "2x²+1",
            "3x²+1",
            "3x"
          ],
          correct: 2,
          explanation: "Product rule: 1·(x²+1) + x·2x = x²+1+2x² = 3x²+1",
          xp: 5
        },
        {
          id: "u2_l6_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}\\left[\\frac{x^2+1}{x}\\right] = \\)",
          options: [
            "\\(\\frac{x^2-1}{x^2}\\)",
            "\\(\\frac{1}{x}\\)",
            "\\(2x\\)",
            "\\(\\frac{x^2+1}{x^2}\\)"
          ],
          correct: 0,
          explanation: "\\(\\frac{2x·x - (x^2+1)·1}{x^2} = \\frac{2x^2 - x^2 - 1}{x^2} = \\frac{x^2 - 1}{x^2}\\)",
          xp: 6
        },
        {
          id: "u2_l6_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[3x^2 + 2x - 1/x] = \\)",
          options: [
            "6x + 2 + 1/x²",
            "6x + 2 - 1/x²",
            "6x + 2 + 1/x",
            "6x + 2"
          ],
          correct: 1,
          explanation: "Term by term: 6x + 2 - (-1)x^(-2) = 6x + 2 + 1/x² = 6x + 2 - (-1/x²)",
          xp: 6
        },
        {
          id: "u2_l6_q6",
          type: "multiple_choice",
          question: "Which derivative is INCORRECT?",
          options: [
            "\\(\\frac{d}{dx}[x^3] = 3x^2\\)",
            "\\(\\frac{d}{dx}[x^{-2}] = -2x^{-3}\\)",
            "\\(\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2}\\)",
            "\\(\\frac{d}{dx}[x^0] = x\\)"
          ],
          correct: 3,
          explanation: "x^0 = 1, so derivative = 0, not x!",
          xp: 5
        },

        // Typing (11 - majority!)
        {
          id: "u2_l6_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[4x^3 + 2x^2 - x + 5]\\):",
          correctAnswer: "12x^2+4x-1",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l6_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x(x^2+2x+1)]\\):",
          correctAnswer: "3x^2+4x+1",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l6_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x^2}{x+2}\\right]\\):",
          correctAnswer: "(x^2+4x)/(x+2)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l6_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x^4 - 2x^3 + 3x^2 - x]\\):",
          correctAnswer: "4x^3-6x^2+6x-1",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l6_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+1)(x+2)(x+3)]\\):",
          correctAnswer: "3x^2+12x+11",
          prompt: "Type your answer:",
          xp: 8
        },
        {
          id: "u2_l6_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{2x+1}{x-1}\\right]\\):",
          correctAnswer: "-3/(x-1)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l6_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[3x(x^2+1)]\\):",
          correctAnswer: "9x^2+3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l6_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{x^3+1}{x}\\right]\\):",
          correctAnswer: "(2x^3-1)/x^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u2_l6_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[x^2 + x^{-2}]\\):",
          correctAnswer: "2x-2x^-3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u2_l6_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}\\left[\\frac{1}{x^3}\\right]\\):",
          correctAnswer: "-3/x^4",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u2_l6_q17",
          type: "typing",
          question: "What is \\(\\frac{d}{dx}[5x^4 - 3x^2 + 2x]\\)?",
          correctAnswer: "20x^3-6x+2",
          prompt: "Type your answer:",
          xp: 7
        }
      ]
    }
  }
};

/**
 * Export the database
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusUnit2Database };
} else {
  window.CalculusUnit2Database = CalculusUnit2Database;
}