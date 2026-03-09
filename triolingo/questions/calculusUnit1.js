/**
 * QUESTION DATABASE - UNIT 1 CALCULUS (COMPLETE)
 * Database for Unit 1: Limits & Continuity - Complete with all lessons
 *
 * Structure:
 * - 6 lessons total
 * - 15-20 questions per lesson
 * - Multiple question types
 * - Images and diagrams included
 */

const CalculusUnit1Database = {
  unit: "Calculus Unit 1",
  title: "Limits & Continuity",
  lessons: {
    // ========================================================================
    // LESSON 1: Limits Introduction (18 questions)
    // ========================================================================
    "u1_l1": {
      id: "calc1_u1_l1",
      title: "Limits: Introduction",
      icon: "calculus_icons/limit.png",
      xp: 82,
      difficulty: "basic",
      questions: [
        // Multiple Choice (8)
        {
          id: "u1_l1_q1",
          type: "multiple_choice",
          question: "What does the limit notation \\(\\lim_{x \\to a} f(x)\\) represent?",
          options: [
            "The value of f(x) at x = a",
            "The value f(x) approaches as x gets close to a",
            "The derivative of f(x)",
            "The integral of f(x)"
          ],
          correct: 1,
          explanation: "A limit represents the value that a function approaches as the input approaches a certain value.",
          xp: 4,
          diagram: "limitGraph",
          diagramParams: {
            type: "approach",
            function: "x^2",
            a: 2
          }
        },
        {
          id: "u1_l1_q2",
          type: "multiple_choice",
          question: "Evaluate \\(\\lim_{x \\to 3} (2x + 1)\\)",
          options: ["6", "7", "8", "9"],
          correct: 1,
          explanation: "Substitute x = 3: 2(3) + 1 = 7",
          xp: 4
        },
        {
          id: "u1_l1_q3",
          type: "multiple_choice",
          question: "For \\(\\lim_{x \\to a} f(x) = L\\), what must be true?",
          options: [
            "f(a) must equal L",
            "As x approaches a, f(x) approaches L",
            "The function must be continuous at a",
            "The limit must exist from only one side"
          ],
          correct: 1,
          explanation: "The limit exists if f(x) approaches L from both sides, regardless of the value at a.",
          xp: 5
        },
        {
          id: "u1_l1_q4",
          type: "multiple_choice",
          question: "If \\(\\lim_{x \\to 2^-} f(x) = 5\\) and \\(\\lim_{x \\to 2^+} f(x) = 5\\), then:",
          options: [
            "\\(\\lim_{x \\to 2} f(x)\\) does not exist",
            "\\(\\lim_{x \\to 2} f(x) = 5\\)",
            "f(2) = 5",
            "Both A and C"
          ],
          correct: 1,
          explanation: "When one-sided limits are equal, the limit exists and equals that value.",
          xp: 5
        },
        {
          id: "u1_l1_q5",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)?",
          options: ["0", "1", "∞", "Does not exist"],
          correct: 1,
          explanation: "This is a famous special limit: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1\\)",
          xp: 5,
          diagram: "specialLimit",
          diagramParams: {
            type: "sinx_over_x"
          }
        },
        {
          id: "u1_l1_q6",
          type: "multiple_choice",
          question: "Which function is continuous everywhere?",
          options: [
            "\\(f(x) = \\frac{1}{x}\\)",
            "\\(f(x) = \\sqrt{x}\\)",
            "\\(f(x) = x^2\\)",
            "\\(f(x) = \\frac{|x|}{x}\\)"
          ],
          correct: 2,
          explanation: "Polynomials like x² are continuous everywhere. The others have discontinuities.",
          xp: 4
        },
        {
          id: "u1_l1_q7",
          type: "multiple_choice",
          question: "The limit \\(\\lim_{x \\to 0} \\frac{|x|}{x}\\) is:",
          options: ["-1", "1", "0", "Does not exist"],
          correct: 3,
          explanation: "The left limit is -1 and right limit is 1, so the limit does not exist.",
          xp: 5
        },
        {
          id: "u1_l1_q8",
          type: "multiple_choice",
          question: "If \\(\\lim_{x \\to 1} f(x) = 4\\) and f(1) = 5, then:",
          options: [
            "The limit does not exist",
            "The limit is 5",
            "The limit is 4, but f(1) ≠ 4",
            "The function is continuous at x = 1"
          ],
          correct: 2,
          explanation: "The limit can exist even if the function value is different. The limit is about approaching values.",
          xp: 5
        },

        // Typing (6)
        {
          id: "u1_l1_q9",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 5} (3x - 2)\\)",
          correctAnswer: "13",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l1_q10",
          type: "typing",
          question: "If \\(\\lim_{x \\to 2} f(x) = 7\\) and \\(\\lim_{x \\to 2} g(x) = 3\\), what is \\(\\lim_{x \\to 2} [f(x) + g(x)]\\)?",
          correctAnswer: "10",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u1_l1_q11",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 0} \\cos(x)\\)",
          correctAnswer: "1",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l1_q12",
          type: "typing",
          question: "What is \\(\\lim_{x \\to 2} x^2\\)?",
          correctAnswer: "4",
          prompt: "Type your answer:",
          xp: 4,
          diagram: "functionGraph",
          diagramParams: {
            function: "x^2",
            xRange: [0, 4],
            showPoint: 2
          }
        },
        {
          id: "u1_l1_q13",
          type: "typing",
          question: "If \\(\\lim_{x \\to a} f(x) = L\\) and c is a constant, what is \\(\\lim_{x \\to a} [c \\cdot f(x)]\\)?",
          correctAnswer: "cL",
          prompt: "Type your answer (in terms of c and L):",
          xp: 6
        },
        {
          id: "u1_l1_q14",
          type: "typing",
          question: "What is \\(\\lim_{x \\to 4} \\sqrt{x}\\)?",
          correctAnswer: "2",
          prompt: "Type your answer:",
          xp: 4
        },

        // Fill in Blank (2)
        {
          id: "u1_l1_q15",
          type: "fill_blank",
          question: "The limit exists only if both the left-hand limit and right-hand limit _____ and are equal.",
          correctAnswer: "exist",
          explanation: "For a limit to exist, both one-sided limits must exist and be equal.",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l1_q16",
          type: "fill_blank",
          question: "\\(\\lim_{x \\to a} c = \\) _____ where c is a constant.",
          correctAnswer: "c",
          explanation: "The limit of a constant is the constant itself.",
          prompt: "Fill in the blank:",
          xp: 4
        },

        // Match Pairs (2)
        {
          id: "u1_l1_q17",
          type: "match_pairs",
          question: "Match each limit with its value:",
          pairs: [
            { left: "\\(\\lim_{x \\to 0} x\\)", right: "0" },
            { left: "\\(\\lim_{x \\to 1} x^2\\)", right: "1" },
            { left: "\\(\\lim_{x \\to 2} (x + 1)\\)", right: "3" },
            { left: "\\(\\lim_{x \\to 3} 2x\\)", right: "6" }
          ],
          xp: 8
        },
        {
          id: "u1_l1_q18",
          type: "match_pairs",
          question: "Match the limit property with its description:",
          pairs: [
            { left: "\\(\\lim_{x \\to a} [f(x) + g(x)]\\)", right: "Sum property" },
            { left: "\\(\\lim_{x \\to a} [f(x) \\cdot g(x)]\\)", right: "Product property" },
            { left: "\\(\\lim_{x \\to a} [c \\cdot f(x)]\\)", right: "Constant multiple" },
            { left: "\\(\\lim_{x \\to a} [f(x) / g(x)]\\)", right: "Quotient property" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 2: Limits by Substitution (17 questions)
    // ========================================================================
    "u1_l2": {
      id: "calc1_u1_l2",
      title: "Limits by Substitution",
      icon: "calculus_icons/limit.png",
      xp: 73,
      difficulty: "basic",
      questions: [
        // Multiple Choice (7)
        {
          id: "u1_l2_q1",
          type: "multiple_choice",
          question: "When can we evaluate a limit by direct substitution?",
          options: [
            "Always",
            "When the function is continuous at the point",
            "Only for polynomial functions",
            "Never"
          ],
          correct: 1,
          explanation: "Direct substitution works when the function is continuous at the limit point.",
          xp: 4
        },
        {
          id: "u1_l2_q2",
          type: "multiple_choice",
          question: "Evaluate \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}\\)",
          options: ["0", "3", "6", "Does not exist"],
          correct: 2,
          explanation: "Factor: \\(\\frac{(x-3)(x+3)}{x-3} = x + 3\\). Then substitute x = 3: 3 + 3 = 6",
          xp: 5,
          diagram: "functionGraph",
          diagramParams: {
            function: "(x^2-9)/(x-3)",
            xRange: [0, 5],
            showPoint: 3
          }
        },
        {
          id: "u1_l2_q3",
          type: "multiple_choice",
          question: "To evaluate \\(\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}\\), what technique might help?",
          options: [
            "Direct substitution",
            "Factoring",
            "Using trigonometric identities",
            "Integration"
          ],
          correct: 2,
          explanation: "Use the identity \\(1 - \\cos(x) = 2\\sin^2(x/2)\\) or multiply by conjugate.",
          xp: 6
        },
        {
          id: "u1_l2_q4",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\)?",
          options: ["0", "2", "4", "Does not exist"],
          correct: 2,
          explanation: "Factor: \\(\\frac{(x-2)(x+2)}{x-2} = x + 2\\). Then: 2 + 2 = 4",
          xp: 4
        },
        {
          id: "u1_l2_q5",
          type: "multiple_choice",
          question: "When direct substitution gives 0/0, this is called:",
          options: [
            "An indeterminate form",
            "A definite limit",
            "A discontinuous function",
            "An infinite limit"
          ],
          correct: 0,
          explanation: "0/0 is an indeterminate form that requires algebraic manipulation to evaluate.",
          xp: 5
        },
        {
          id: "u1_l2_q6",
          type: "multiple_choice",
          question: "Evaluate \\(\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}\\)",
          options: ["4", "8", "16", "Does not exist"],
          correct: 1,
          explanation: "Factor: \\(\\frac{(x-4)(x+4)}{x-4} = x + 4\\). Then: 4 + 4 = 8",
          xp: 4
        },
        {
          id: "u1_l2_q7",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\)",
          options: ["0", "1", "2", "Does not exist"],
          correct: 2,
          explanation: "Factor: \\(\\frac{(x-1)(x+1)}{x-1} = x + 1\\). Then: 1 + 1 = 2",
          xp: 4
        },

        // Typing (6)
        {
          id: "u1_l2_q8",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}\\)",
          correctAnswer: "2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l2_q9",
          type: "typing",
          question: "What is \\(\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}\\)?",
          correctAnswer: "10",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l2_q10",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 2} e^x\\)",
          correctAnswer: "7.389",
          prompt: "Type your answer (round to 3 decimal places):",
          xp: 5
        },
        {
          id: "u1_l2_q11",
          type: "typing",
          question: "\\(\\lim_{x \\to 3} \\ln(x) = \\)",
          correctAnswer: "1.099",
          prompt: "Type your answer (round to 3 decimal places):",
          xp: 5
        },
        {
          id: "u1_l2_q12",
          type: "typing",
          question: "If direct substitution gives ∞/∞, what should you do?",
          correctAnswer: "Simplify",
          prompt: "Type one word:",
          xp: 5
        },
        {
          id: "u1_l2_q13",
          type: "typing",
          question: "What technique helps with \\(\\frac{1 - \\cos(x)}{x}\\)?",
          correctAnswer: "Multiply by conjugate",
          prompt: "Type your answer:",
          xp: 6
        },

        // Fill in Blank (2)
        {
          id: "u1_l2_q14",
          type: "fill_blank",
          question: "When direct substitution gives 0/0, you should _____ the expression.",
          correctAnswer: "factor",
          explanation: "Factor to cancel common terms in the numerator and denominator.",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l2_q15",
          type: "fill_blank",
          question: "\\(\\frac{x^2 - a^2}{x - a} = \\) _____ when x ≠ a.",
          correctAnswer: "x + a",
          explanation: "Difference of squares: \\(\\frac{(x-a)(x+a)}{x-a} = x + a\\)",
          prompt: "Fill in the blank:",
          xp: 5
        },

        // Match Pairs (2)
        {
          id: "u1_l2_q16",
          type: "match_pairs",
          question: "Match each limit with its value:",
          pairs: [
            { left: "\\(\\lim_{x \\to 2} \\frac{x^2-4}{x-2}\\)", right: "4" },
            { left: "\\(\\lim_{x \\to 3} \\frac{x^2-9}{x-3}\\)", right: "6" },
            { left: "\\(\\lim_{x \\to 4} \\frac{x^2-16}{x-4}\\)", right: "8" },
            { left: "\\(\\lim_{x \\to 5} \\frac{x^2-25}{x-5}\\)", right: "10" }
          ],
          xp: 8
        },
        {
          id: "u1_l2_q17",
          type: "match_pairs",
          question: "Match the technique with when to use it:",
          pairs: [
            { left: "Direct substitution", right: "Continuous functions" },
            { left: "Factoring", right: "0/0 rational expressions" },
            { left: "Multiply by conjugate", right: "Roots in numerator" },
            { left: "Divide by highest power", right: "∞/∞ polynomials" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 3: One-Sided Limits (18 questions)
    // ========================================================================
    "u1_l3": {
      id: "calc1_u1_l3",
      title: "One-Sided Limits",
      icon: "calculus_icons/limit.png",
      xp: 78,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (8)
        {
          id: "u1_l3_q1",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 0^-} \\frac{|x|}{x}\\)?",
          options: ["-1", "1", "0", "Does not exist"],
          correct: 0,
          explanation: "From the left, |x| = -x, so \\(\\frac{-x}{x} = -1\\)",
          xp: 5,
          diagram: "oneSidedLimit",
          diagramParams: {
            type: "unequal",
            a: 0,
            L: [-1, 1]
          }
        },
        {
          id: "u1_l3_q2",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 0^+} \\frac{|x|}{x}\\)?",
          options: ["-1", "1", "0", "Does not exist"],
          correct: 1,
          explanation: "From the right, |x| = x, so \\(\\frac{x}{x} = 1\\)",
          xp: 5
        },
        {
          id: "u1_l3_q3",
          type: "multiple_choice",
          question: "If \\(\\lim_{x \\to 2^-} f(x) = 3\\) and \\(\\lim_{x \\to 2^+} f(x) = 5\\), then \\(\\lim_{x \\to 2} f(x)\\):",
          options: ["= 3", "= 5", "= 4", "Does not exist"],
          correct: 3,
          explanation: "The limit doesn't exist because one-sided limits are different.",
          xp: 5
        },
        {
          id: "u1_l3_q4",
          type: "multiple_choice",
          question: "The notation \\(\\lim_{x \\to a^-} f(x)\\) means:",
          options: [
            "x approaches a from the left",
            "x approaches a from the right",
            "x approaches a negative values",
            "x equals negative a"
          ],
          correct: 0,
          explanation: "The minus superscript means approaching from the left (values less than a).",
          xp: 4
        },
        {
          id: "u1_l3_q5",
          type: "multiple_choice",
          question: "For \\(f(x) = \\frac{1}{x}\\), what is \\(\\lim_{x \\to 0^-} f(x)\\)?",
          options: ["∞", "-∞", "0", "Does not exist"],
          correct: 1,
          explanation: "As x approaches 0 from the left, x is negative, so \\(\\frac{1}{x} \\to -\\infty\\)",
          xp: 5
        },
        {
          id: "u1_l3_q6",
          type: "multiple_choice",
          question: "For \\(f(x) = \\sqrt{x}\\), what is \\(\\lim_{x \\to 0^+} f(x)\\)?",
          options: ["0", "1", "Does not exist", "∞"],
          correct: 0,
          explanation: "We only approach from the right (domain of √x), and √0 = 0",
          xp: 4
        },
        {
          id: "u1_l3_q7",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 1^-} \\lfloor x \\rfloor\\)? (floor function)",
          options: ["0", "1", "-1", "Does not exist"],
          correct: 0,
          explanation: "As x approaches 1 from the left (e.g., 0.9), floor(x) = 0",
          xp: 5
        },
        {
          id: "u1_l3_q8",
          type: "multiple_choice",
          question: "What is \\(\\lim_{x \\to 1^+} \\lfloor x \\rfloor\\)? (floor function)",
          options: ["0", "1", "-1", "Does not exist"],
          correct: 1,
          explanation: "As x approaches 1 from the right (e.g., 1.1), floor(x) = 1",
          xp: 5
        },

        // Typing (6)
        {
          id: "u1_l3_q9",
          type: "typing",
          question: "If \\(\\lim_{x \\to 2^-} f(x) = 4\\) and \\(\\lim_{x \\to 2^+} f(x) = 4\\), what is \\(\\lim_{x \\to 2} f(x)\\)?",
          correctAnswer: "4",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l3_q10",
          type: "typing",
          question: "For \\(f(x) = 2^x\\), what is \\(\\lim_{x \\to 0^-} f(x)\\)?",
          correctAnswer: "1",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l3_q11",
          type: "typing",
          question: "For \\(f(x) = \\ln(x)\\), what is \\(\\lim_{x \\to 0^+} f(x)\\)?",
          correctAnswer: "-∞",
          prompt: "Type your answer (use -infinity):",
          xp: 5
        },
        {
          id: "u1_l3_q12",
          type: "typing",
          question: "What is \\(\\lim_{x \\to 0^-} \\frac{1}{x^2}\\)?",
          correctAnswer: "∞",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l3_q13",
          type: "typing",
          question: "What is \\(\\lim_{x \\to 0^+} \\frac{1}{x^2}\\)?",
          correctAnswer: "∞",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l3_q14",
          type: "typing",
          question: "For \\(f(x) = \\lceil x \\rceil\\) (ceiling), what is \\(\\lim_{x \\to 1^+} f(x)\\)?",
          correctAnswer: "2",
          prompt: "Type your answer:",
          xp: 6
        },

        // Fill in Blank (2)
        {
          id: "u1_l3_q15",
          type: "fill_blank",
          question: "\\(\\lim_{x \\to a} f(x)\\) exists only if \\(\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = \\) _____",
          correctAnswer: "L",
          explanation: "The limit exists when both one-sided limits equal the same value.",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l3_q16",
          type: "fill_blank",
          question: "The notation x → a⁻ means x approaches a from the _____.",
          correctAnswer: "left",
          explanation: "The minus indicates approaching from the left (values smaller than a).",
          prompt: "Fill in the blank:",
          xp: 4
        },

        // Match Pairs (2)
        {
          id: "u1_l3_q17",
          type: "match_pairs",
          question: "Match the function with its left limit at 0:",
          pairs: [
            { left: "\\(f(x) = \\frac{1}{x}\\)", right: "-∞" },
            { left: "\\(f(x) = \\frac{1}{x^2}\\)", right: "∞" },
            { left: "\\(f(x) = |x|\\)", right: "0" },
            { left: "\\(f(x) = \\lfloor x \\rfloor\\)", right: "-1" }
          ],
          xp: 8
        },
        {
          id: "u1_l3_q18",
          type: "match_pairs",
          question: "Match the notation with its meaning:",
          pairs: [
            { left: "\\(\\lim_{x \\to a^-}\\)", right: "Left-hand limit" },
            { left: "\\(\\lim_{x \\to a^+}\\)", right: "Right-hand limit" },
            { left: "\\(\\lim_{x \\to a}\\)", right: "Two-sided limit" },
            { left: "\\(\\lim_{x \\to \\infty}\\)", right: "Limit at infinity" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 4: Infinite Limits (16 questions)
    // ========================================================================
    "u1_l4": {
      id: "calc1_u1_l4",
      title: "Infinite Limits",
      icon: "calculus_icons/limit.png",
      xp: 70,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (7)
        {
          id: "u1_l4_q1",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to 0} \\frac{1}{x} = \\)",
          options: ["∞", "-∞", "0", "Does not exist"],
          correct: 3,
          explanation: "Limit doesn't exist because left limit is -∞ and right limit is ∞",
          xp: 5,
          diagram: "oneSidedLimit",
          diagramParams: {
            type: "infinite",
            a: 0,
            L: [-Infinity, Infinity]
          }
        },
        {
          id: "u1_l4_q2",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to 0} \\frac{1}{x^2} = \\)",
          options: ["∞", "-∞", "0", "Does not exist"],
          correct: 0,
          explanation: "\\(x^2\\) is always positive, so \\(\\frac{1}{x^2} \\to \\infty\\) from both sides",
          xp: 5
        },
        {
          id: "u1_l4_q3",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to \\infty} \\frac{1}{x} = \\)",
          options: ["∞", "-∞", "0", "1"],
          correct: 2,
          explanation: "As x gets larger, \\(\\frac{1}{x}\\) approaches 0",
          xp: 4
        },
        {
          id: "u1_l4_q4",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to -\\infty} \\frac{1}{x} = \\)",
          options: ["∞", "-∞", "0", "Does not exist"],
          correct: 2,
          explanation: "As x gets more negative, \\(\\frac{1}{x}\\) approaches 0",
          xp: 4
        },
        {
          id: "u1_l4_q5",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to \\infty} x^2 = \\)",
          options: ["0", "1", "∞", "Does not exist"],
          correct: 2,
          explanation: "As x gets larger, x² grows without bound",
          xp: 4
        },
        {
          id: "u1_l4_q6",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to -\\infty} e^x = \\)",
          options: ["∞", "-∞", "0", "1"],
          correct: 2,
          explanation: "As x → -∞, e^x approaches 0",
          xp: 4
        },
        {
          id: "u1_l4_q7",
          type: "multiple_choice",
          question: "Vertical asymptotes occur when:",
          options: [
            "Function equals 0",
            "Function approaches ±∞",
            "Function is continuous",
            "Function has a minimum"
          ],
          correct: 1,
          explanation: "Vertical asymptotes occur where the function approaches ±∞",
          xp: 5
        },

        // Typing (5)
        {
          id: "u1_l4_q8",
          type: "typing",
          question: "\\(\\lim_{x \\to 0^+} \\frac{1}{x} = \\)",
          correctAnswer: "∞",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l4_q9",
          type: "typing",
          question: "\\(\\lim_{x \\to 0^-} \\frac{1}{x} = \\)",
          correctAnswer: "-∞",
          prompt: "Type your answer (use -infinity):",
          xp: 5
        },
        {
          id: "u1_l4_q10",
          type: "typing",
          question: "\\(\\lim_{x \\to \\infty} \\frac{2}{x} = \\)",
          correctAnswer: "0",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u1_l4_q11",
          type: "typing",
          question: "\\(\\lim_{x \\to \\infty} e^x = \\)",
          correctAnswer: "∞",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u1_l4_q12",
          type: "typing",
          question: "\\(\\lim_{x \\to \\infty} \\ln(x) = \\)",
          correctAnswer: "∞",
          prompt: "Type your answer:",
          xp: 4
        },

        // Fill in Blank (2)
        {
          id: "u1_l4_q13",
          type: "fill_blank",
          question: "\\(\\lim_{x \\to 0} \\frac{1}{x} \\) does not exist because the _____-hand limit differs from the right-hand limit.",
          correctAnswer: "left",
          explanation: "Left limit is -∞, right limit is ∞, so they differ.",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l4_q14",
          type: "fill_blank",
          question: "\\(\\lim_{x \\to \\infty} \\frac{1}{x} = \\) _____",
          correctAnswer: "0",
          explanation: "As denominator grows, fraction approaches 0",
          prompt: "Fill in the blank:",
          xp: 4
        },

        // Match Pairs (2)
        {
          id: "u1_l4_q15",
          type: "match_pairs",
          question: "Match the function with its limit as x → ∞:",
          pairs: [
            { left: "\\(\\frac{1}{x}\\)", right: "0" },
            { left: "\\(\\frac{1}{x^2}\\)", right: "0" },
            { left: "\\(x\\)", right: "∞" },
            { left: "\\(x^2\\)", right: "∞" }
          ],
          xp: 8
        },
        {
          id: "u1_l4_q16",
          type: "match_pairs",
          question: "Match the behavior with the function:",
          pairs: [
            { left: "\\(\\frac{1}{x}\\) at x→0", right: "±∞" },
            { left: "\\(\\frac{1}{x^2}\\) at x→0", right: "∞" },
            { left: "\\(\\frac{1}{x}\\) at x→∞", right: "0" },
            { left: "\\(e^x\\) at x→∞", right: "∞" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 5: Continuity (17 questions)
    // ========================================================================
    "u1_l5": {
      id: "calc1_u1_l5",
      title: "Continuity",
      icon: "calculus_icons/limit.png",
      xp: 75,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (7)
        {
          id: "u1_l5_q1",
          type: "multiple_choice",
          question: "A function f is continuous at x = a if:",
          options: [
            "f(a) is defined",
            "\\(\\lim_{x \\to a} f(x)\\) exists",
            "\\(\\lim_{x \\to a} f(x) = f(a)\\)",
            "All of the above"
          ],
          correct: 3,
          explanation: "All three conditions must be met for continuity",
          xp: 5
        },
        {
          id: "u1_l5_q2",
          type: "multiple_choice",
          question: "Which function is NOT continuous at x = 0?",
          options: [
            "\\(f(x) = x^2\\)",
            "\\(f(x) = \\cos(x)\\)",
            "\\(f(x) = \\frac{1}{x}\\)",
            "\\(f(x) = e^x\\)"
          ],
          correct: 2,
          explanation: "\\(\\frac{1}{x}\\) is undefined at x = 0",
          xp: 4
        },
        {
          id: "u1_l5_q3",
          type: "multiple_choice",
          question: "What type of discontinuity is in f(x) = \\(\\frac{x^2 - 1}{x - 1}\\) at x = 1?",
          options: [
            "Removable",
            "Jump",
            "Infinite",
            "None (continuous)"
          ],
          correct: 0,
          explanation: "Can be made continuous by defining f(1) = 2",
          xp: 5
        },
        {
          id: "u1_l5_q4",
          type: "multiple_choice",
          question: "What type of discontinuity is in f(x) = \\(\\frac{1}{x}\\) at x = 0?",
          options: [
            "Removable",
            "Jump",
            "Infinite",
            "None (continuous)"
          ],
          correct: 2,
          explanation: "Infinite discontinuity with vertical asymptote",
          xp: 5
        },
        {
          id: "u1_l5_q5",
          type: "multiple_choice",
          question: "A removable discontinuity:",
          options: [
            "Has a vertical asymptote",
            "Can be fixed by redefining at one point",
            "Always involves a jump",
            "Cannot be fixed"
          ],
          correct: 1,
          explanation: "Removable discontinuities can be fixed by redefining the function value",
          xp: 5
        },
        {
          id: "u1_l5_q6",
          type: "multiple_choice",
          question: "Polynomials are continuous:",
          options: [
            "Nowhere",
            "At some points",
            "Everywhere",
            "Only at integers"
          ],
          correct: 2,
          explanation: "Polynomials are continuous everywhere",
          xp: 4
        },
        {
          id: "u1_l5_q7",
          type: "multiple_choice",
          question: "The Intermediate Value Theorem requires:",
          options: [
            "Function is differentiable",
            "Function is continuous on closed interval",
            "Function has no discontinuities anywhere",
            "Function is constant"
          ],
          correct: 1,
          explanation: "IVT requires continuity on [a, b]",
          xp: 5
        },

        // Typing (6)
        {
          id: "u1_l5_q8",
          type: "typing",
          question: "For f(x) = \\(\\frac{x^2 - 1}{x - 1}\\), what value of f(1) makes it continuous?",
          correctAnswer: "2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l5_q9",
          type: "typing",
          question: "If f(2) = 5 and \\(\\lim_{x \\to 2} f(x) = 3\\), is f continuous at x = 2?",
          correctAnswer: "No",
          prompt: "Type Yes or No:",
          xp: 4
        },
        {
          id: "u1_l5_q10",
          type: "typing",
          question: "If f is continuous at x = 3 and f(3) = 4, then \\(\\lim_{x \\to 3} f(x) = \\)",
          correctAnswer: "4",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u1_l5_q11",
          type: "typing",
          question: "Is \\(f(x) = \\sqrt{x}\\) continuous at x = 4?",
          correctAnswer: "Yes",
          prompt: "Type Yes or No:",
          xp: 4
        },
        {
          id: "u1_l5_q12",
          type: "typing",
          question: "Is \\(f(x) = \\lfloor x \\rfloor\\) continuous at x = 1?",
          correctAnswer: "No",
          prompt: "Type Yes or No:",
          xp: 4
        },
        {
          id: "u1_l5_q13",
          type: "typing",
          question: "How many conditions must be met for continuity?",
          correctAnswer: "3",
          prompt: "Type your answer:",
          xp: 4
        },

        // Fill in Blank (2)
        {
          id: "u1_l5_q14",
          type: "fill_blank",
          question: "A _____ discontinuity can be removed by redefining the function at one point.",
          correctAnswer: "removable",
          explanation: "Removable discontinuities have a limit that doesn't match the function value",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l5_q15",
          type: "fill_blank",
          question: "For continuity, \\(\\lim_{x \\to a} f(x) = \\) _____",
          correctAnswer: "f(a)",
          explanation: "The limit must equal the function value",
          prompt: "Fill in the blank:",
          xp: 4
        },

        // Match Pairs (2)
        {
          id: "u1_l5_q16",
          type: "match_pairs",
          question: "Match the function with its continuity:",
          pairs: [
            { left: "\\(f(x) = x^2\\)", right: "Continuous everywhere" },
            { left: "\\(f(x) = \\frac{1}{x}\\)", right: "Discontinuous at x=0" },
            { left: "\\(f(x) = \\lfloor x \\rfloor\\)", right: "Discontinuous at integers" },
            { left: "\\(f(x) = \\sqrt{x}\\)", right: "Continuous on [0,∞)" }
          ],
          xp: 8
        },
        {
          id: "u1_l5_q17",
          type: "match_pairs",
          question: "Match the discontinuity type with its example:",
          pairs: [
            { left: "Removable", right: "\\(\\frac{x^2-1}{x-1}\\) at x=1" },
            { left: "Jump", right: "\\(\\lfloor x \\rfloor\\) at x=1" },
            { left: "Infinite", right: "\\(\\frac{1}{x}\\) at x=0" },
            { left: "None", right: "\\(x^2\\) anywhere" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 6: Limits Review (16 questions)
    // ========================================================================
    "u1_l6": {
      id: "calc1_u1_l6",
      title: "Limits Review",
      icon: "calculus_icons/limit.png",
      xp: 72,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (7)
        {
          id: "u1_l6_q1",
          type: "multiple_choice",
          question: "Which statement is TRUE about limits?",
          options: [
            "\\(\\lim_{x \\to a} f(x)\\) always equals f(a)",
            "A limit can exist even if f(a) is undefined",
            "If \\(\\lim_{x \\to a} f(x) = L\\), then f(a) = L",
            "One-sided limits are never needed"
          ],
          correct: 1,
          explanation: "A limit is about approaching values, not the value at the point",
          xp: 5
        },
        {
          id: "u1_l6_q2",
          type: "multiple_choice",
          question: "Evaluate \\(\\lim_{x \\to 0} \\frac{\\sin(2x)}{x}\\)",
          options: ["0", "1", "2", "Does not exist"],
          correct: 2,
          explanation: "Use substitution: Let u = 2x, then \\(\\frac{\\sin(u)}{u/2} = 2 \\cdot \\frac{\\sin(u)}{u} \\to 2\\)",
          xp: 6
        },
        {
          id: "u1_l6_q3",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to \\infty} \\frac{x^2 + 1}{x^2 - 1} = \\)",
          options: ["0", "1", "∞", "-∞"],
          correct: 1,
          explanation: "Leading terms have same degree, ratio of coefficients is 1/1 = 1",
          xp: 6
        },
        {
          id: "u1_l6_q4",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to \\infty} \\frac{x}{x^2 + 1} = \\)",
          options: ["0", "1", "∞", "-∞"],
          correct: 0,
          explanation: "Degree of denominator > degree of numerator, so limit is 0",
          xp: 5
        },
        {
          id: "u1_l6_q5",
          type: "multiple_choice",
          question: "Which limit technique is best for \\(\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}\\)?",
          options: [
            "Direct substitution",
            "Factoring",
            "Multiply by conjugate",
            "L'Hôpital's rule"
          ],
          correct: 2,
          explanation: "Multiply numerator and denominator by conjugate \\(\\sqrt{x+4} + 2\\)",
          xp: 6
        },
        {
          id: "u1_l6_q6",
          type: "multiple_choice",
          question: "\\(\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\)",
          options: ["0", "1", "e", "Does not exist"],
          correct: 1,
          explanation: "This is a standard limit equal to 1",
          xp: 6
        },
        {
          id: "u1_l6_q7",
          type: "multiple_choice",
          question: "If f is continuous on [a, b] and f(a) < K < f(b), then:",
          options: [
            "K = f(a)",
            "K = f(b)",
            "There exists c in (a, b) with f(c) = K",
            "K doesn't exist"
          ],
          correct: 2,
          explanation: "Intermediate Value Theorem guarantees existence of c",
          xp: 6
        },

        // Typing (5)
        {
          id: "u1_l6_q8",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}\\)",
          correctAnswer: "8",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u1_l6_q9",
          type: "typing",
          question: "Evaluate: \\(\\lim_{x \\to 2} \\frac{x - 2}{\\sqrt{x + 2} - 2}\\)",
          correctAnswer: "4",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u1_l6_q10",
          type: "typing",
          question: "\\(\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{5x^2 - 1} = \\)",
          correctAnswer: "0.6",
          prompt: "Type your answer (as decimal):",
          xp: 5
        },
        {
          id: "u1_l6_q11",
          type: "typing",
          question: "\\(\\lim_{x \\to \\infty} \\frac{2x + 1}{x^2 - 1} = \\)",
          correctAnswer: "0",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u1_l6_q12",
          type: "typing",
          question: "How many discontinuity types are covered in this unit?",
          correctAnswer: "3",
          prompt: "Type your answer:",
          xp: 4
        },

        // Fill in Blank (2)
        {
          id: "u1_l6_q13",
          type: "fill_blank",
          question: "\\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = \\) _____",
          correctAnswer: "1",
          explanation: "This is a fundamental limit",
          prompt: "Fill in the blank:",
          xp: 4
        },
        {
          id: "u1_l6_q14",
          type: "fill_blank",
          question: "For \\(\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}\\) where deg(P) = deg(Q), the limit equals the ratio of _____ coefficients.",
          correctAnswer: "leading",
          explanation: "Divide the leading coefficients of numerator and denominator",
          prompt: "Fill in the blank:",
          xp: 5
        },

        // Match Pairs (2)
        {
          id: "u1_l6_q15",
          type: "match_pairs",
          question: "Match the limit with its value:",
          pairs: [
            { left: "\\(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\)", right: "1" },
            { left: "\\(\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}\\)", right: "0" },
            { left: "\\(\\lim_{x \\to 0} \\frac{e^x - 1}{x}\\)", right: "1" },
            { left: "\\(\\lim_{x \\to \\infty} \\frac{1}{x}\\)", right: "0" }
          ],
          xp: 8
        },
        {
          id: "u1_l6_q16",
          type: "match_pairs",
          question: "Match the technique with the limit type:",
          pairs: [
            { left: "0/0 rational", right: "Factor" },
            { left: "∞/∞ polynomials", right: "Divide by highest power" },
            { left: "0/0 with roots", right: "Multiply by conjugate" },
            { left: "Direct substitution", right: "Continuous functions" }
          ],
          xp: 8
        }
      ]
    }
  }
};

/**
 * Export the database
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusUnit1Database };
} else {
  window.CalculusUnit1Database = CalculusUnit1Database;
}