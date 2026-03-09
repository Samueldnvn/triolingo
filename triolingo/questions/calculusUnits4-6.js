/**
 * QUESTION DATABASE - UNITS 4-6 CALCULUS (COMPLETE)
 * Databases for Units 4, 5, and 6 - Complete with all lessons
 *
 * Structure:
 * - 5 lessons each (Unit 4), 5 lessons each (Unit 5), 6 lessons (Unit 6)
 * - 15-20 questions per lesson
 * - Majority typing questions (60-70%)
 * - Seaborn-style colored diagrams
 */

// ============================================================================
// UNIT 4: INTEGRATION BASICS
// ============================================================================
const CalculusUnit4Database = {
  unit: "Calculus Unit 4",
  title: "Integration Basics",
  lessons: {
    "u4_l1": {
      id: "calc4_u4_l1",
      title: "Introduction to Integration",
      icon: "calculus_icons/integral.png",
      xp: 85,
      difficulty: "basic",
      questions: [
        // Multiple Choice (5)
        {id: "u4_l1_q1", type: "multiple_choice", question: "What is the integral of 1?", options: ["1", "x", "0", "undefined"], correct: 1, explanation: "∫1 dx = x + C", xp: 4},
        {id: "u4_l1_q2", type: "multiple_choice", question: "∫x dx =", options: ["x²", "x²/2", "2x", "1"], correct: 1, explanation: "∫x dx = x²/2 + C", xp: 4},
        {id: "u4_l1_q3", type: "multiple_choice", question: "∫x² dx =", options: ["2x", "x³/3", "3x²", "x³"], correct: 1, explanation: "∫x² dx = x³/3 + C", xp: 5},
        {id: "u4_l1_q4", type: "multiple_choice", question: "Integration is the _____ of differentiation.", options: ["opposite", "same", "square", "cube"], correct: 0, explanation: "Integration reverses differentiation.", xp: 4},
        {id: "u4_l1_q5", type: "multiple_choice", question: "What does +C represent?", options: ["A constant", "Zero", "The answer", "C variable"], correct: 0, explanation: "+C is the constant of integration.", xp: 4},
        // Typing (13)
        {id: "u4_l1_q6", type: "typing", question: "Find ∫2 dx:", correctAnswer: "2x", prompt: "Type your answer:", xp: 4},
        {id: "u4_l1_q7", type: "typing", question: "Find ∫3 dx:", correctAnswer: "3x", prompt: "Type your answer:", xp: 4},
        {id: "u4_l1_q8", type: "typing", question: "Find ∫x dx:", correctAnswer: "x^2/2", prompt: "Type your answer:", xp: 4},
        {id: "u4_l1_q9", type: "typing", question: "Find ∫x² dx:", correctAnswer: "x^3/3", prompt: "Type your answer:", xp: 5},
        {id: "u4_l1_q10", type: "typing", question: "Find ∫x³ dx:", correctAnswer: "x^4/4", prompt: "Type your answer:", xp: 5},
        {id: "u4_l1_q11", type: "typing", question: "Find ∫4x dx:", correctAnswer: "2x^2", prompt: "Type your answer:", xp: 5},
        {id: "u4_l1_q12", type: "typing", question: "Find ∫3x² dx:", correctAnswer: "x^3", prompt: "Type your answer:", xp: 5},
        {id: "u4_l1_q13", type: "typing", question: "Find ∫5 dx:", correctAnswer: "5x", prompt: "Type your answer:", xp: 4},
        {id: "u4_l1_q14", type: "typing", question: "Find ∫0 dx:", correctAnswer: "0", prompt: "Type your answer:", xp: 4},
        {id: "u4_l1_q15", type: "typing", question: "Find ∫x⁴ dx:", correctAnswer: "x^5/5", prompt: "Type your answer:", xp: 5},
        {id: "u4_l1_q16", type: "typing", question: "Find ∫2x² dx:", correctAnswer: "(2/3)x^3", prompt: "Type your answer:", xp: 6},
        {id: "u4_l1_q17", type: "typing", question: "Find ∫3x³ dx:", correctAnswer: "(3/4)x^4", prompt: "Type your answer:", xp: 6},
        {id: "u4_l1_q18", type: "typing", question: "Find ∫x⁵ dx:", correctAnswer: "x^6/6", prompt: "Type your answer:", xp: 5}
      ]
    },
    "u4_l2": {
      id: "calc4_u4_l2",
      title: "Integration Rules",
      icon: "calculus_icons/integral.png",
      xp: 88,
      difficulty: "basic",
      questions: [
        {id: "u4_l2_q1", type: "multiple_choice", question: "∫[f(x) + g(x)] dx =", options: ["∫f(x) + ∫g(x)", "∫f(x)·∫g(x)", "f(x)g(x)", "f(x)/g(x)"], correct: 0, explanation: "Sum rule: ∫(f+g) = ∫f + ∫g", xp: 4},
        {id: "u4_l2_q2", type: "multiple_choice", question: "∫cf(x) dx =", options: ["f(x)", "c∫f(x)", "c", "∫f(x)"], correct: 1, explanation: "Constant multiple: ∫cf = c∫f", xp: 4},
        {id: "u4_l2_q3", type: "multiple_choice", question: "∫(2x + 3) dx =", options: ["x² + 3x", "x² + 3", "2x + 3", "x² + x"], correct: 0, explanation: "∫2x + ∫3 = x² + 3x + C", xp: 5},
        {id: "u4_l2_q4", type: "multiple_choice", question: "∫(x² + 2x + 1) dx =", options: ["x³/3 + x² + x", "x³ + x + 1", "3x² + 2x", "x² + 2x"], correct: 0, explanation: "x³/3 + x² + x + C", xp: 6},
        {id: "u4_l2_q5", type: "multiple_choice", question: "∫(3x² - 2x) dx =", options: ["x³ - x²", "3x³ - x", "x³ - 2x", "3x - 2"], correct: 0, explanation: "x³ - x² + C", xp: 5},
        {id: "u4_l2_q6", type: "typing", question: "Find ∫(x + 1) dx:", correctAnswer: "x^2/2+x", prompt: "Type your answer:", xp: 5},
        {id: "u4_l2_q7", type: "typing", question: "Find ∫(2x + 1) dx:", correctAnswer: "x^2+x", prompt: "Type your answer:", xp: 5},
        {id: "u4_l2_q8", type: "typing", question: "Find ∫(x² + x) dx:", correctAnswer: "x^3/3+x^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u4_l2_q9", type: "typing", question: "Find ∫(3x² + 2x + 1) dx:", correctAnswer: "x^3+x^2+x", prompt: "Type your answer:", xp: 6},
        {id: "u4_l2_q10", type: "typing", question: "Find ∫(4x³ + 2x) dx:", correctAnswer: "x^4+x^2", prompt: "Type your answer:", xp: 6},
        {id: "u4_l2_q11", type: "typing", question: "Find ∫(5x² - 3x + 2) dx:", correctAnswer: "(5/3)x^3-(3/2)x^2+2x", prompt: "Type your answer:", xp: 7},
        {id: "u4_l2_q12", type: "typing", question: "Find ∫(x³ + x² + x + 1) dx:", correctAnswer: "x^4/4+x^3/3+x^2/2+x", prompt: "Type your answer:", xp: 7},
        {id: "u4_l2_q13", type: "typing", question: "Find ∫(2x³ - x² + 3x) dx:", correctAnswer: "x^4/2-x^3/3+3x^2/2", prompt: "Type your answer:", xp: 7},
        {id: "u4_l2_q14", type: "typing", question: "Find ∫(6x² + 4x + 2) dx:", correctAnswer: "2x^3+2x^2+2x", prompt: "Type your answer:", xp: 6},
        {id: "u4_l2_q15", type: "typing", question: "Find ∫(x⁴ + x³ + x²) dx:", correctAnswer: "x^5/5+x^4/4+x^3/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l2_q16", type: "typing", question: "Find ∫(3x⁴ - 2x³) dx:", correctAnswer: "(3/5)x^5-(1/2)x^4", prompt: "Type your answer:", xp: 7},
        {id: "u4_l2_q17", type: "typing", question: "Find ∫(x² - 2x + 1) dx:", correctAnswer: "x^3/3-x^2+x", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u4_l3": {
      id: "calc4_u4_l3",
      title: "Definite Integrals",
      icon: "calculus_icons/integral.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        {id: "u4_l3_q1", type: "multiple_choice", question: "\\(\\int_0^1 x dx = \\)", options: ["0", "1/2", "1", "2"], correct: 1, explanation: "[x²/2]₀¹ = 1/2 - 0 = 1/2", xp: 5},
        {id: "u4_l3_q2", type: "multiple_choice", question: "\\(\\int_0^2 x dx = \\)", options: ["1", "2", "4", "8"], correct: 1, explanation: "[x²/2]₀² = 4/2 - 0 = 2", xp: 5},
        {id: "u4_l3_q3", type: "multiple_choice", question: "\\(\\int_0^1 x² dx = \\)", options: ["0", "1/3", "1/2", "1"], correct: 1, explanation: "[x³/3]₀¹ = 1/3 - 0 = 1/3", xp: 6},
        {id: "u4_l3_q4", type: "multiple_choice", question: "\\(\\int_{-1}^1 x dx = \\)", options: ["0", "1", "2", "-2"], correct: 0, explanation: "[x²/2]₋₁¹ = 1/2 - 1/2 = 0", xp: 5},
        {id: "u4_l3_q5", type: "multiple_choice", question: "\\(\\int_0^3 2x dx = \\)", options: ["3", "6", "9", "18"], correct: 2, explanation: "[x²]₀³ = 9 - 0 = 9", xp: 6},
        {id: "u4_l3_q6", type: "typing", question: "Find \\(\\int_0^2 x dx\\):", correctAnswer: "2", prompt: "Type your answer:", xp: 5},
        {id: "u4_l3_q7", type: "typing", question: "Find \\(\\int_0^3 x dx\\):", correctAnswer: "4.5", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q8", type: "typing", question: "Find \\(\\int_1^2 x dx\\):", correctAnswer: "1.5", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q9", type: "typing", question: "Find \\(\\int_0^1 x² dx\\):", correctAnswer: "1/3", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q10", type: "typing", question: "Find \\(\\int_0^2 x² dx\\):", correctAnswer: "8/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l3_q11", type: "typing", question: "Find \\(\\int_0^1 (x+1) dx\\):", correctAnswer: "1.5", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q12", type: "typing", question: "Find \\(\\int_0^2 (2x+1) dx\\):", correctAnswer: "6", prompt: "Type your answer:", xp: 7},
        {id: "u4_l3_q13", type: "typing", question: "Find \\(\\int_0^1 3x² dx\\):", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q14", type: "typing", question: "Find \\(\\int_1^2 2x dx\\):", correctAnswer: "3", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q15", type: "typing", question: "Find \\(\\int_0^3 3x dx\\):", correctAnswer: "13.5", prompt: "Type your answer:", xp: 7},
        {id: "u4_l3_q16", type: "typing", question: "Find \\(\\int_{-1}^1 x³ dx\\):", correctAnswer: "0", prompt: "Type your answer:", xp: 6},
        {id: "u4_l3_q17", type: "typing", question: "Find \\(\\int_0^1 (x²+x) dx\\):", correctAnswer: "5/6", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u4_l4": {
      id: "calc4_u4_l4",
      title: "Area Under Curves",
      icon: "calculus_icons/integral.png",
      xp: 88,
      difficulty: "intermediate",
      questions: [
        {id: "u4_l4_q1", type: "multiple_choice", question: "The area under f(x) = x from x=0 to x=2 is:", options: ["1", "2", "3", "4"], correct: 1, explanation: "∫₀² x dx = [x²/2]₀² = 2", xp: 5},
        {id: "u4_l4_q2", type: "multiple_choice", question: "The area under f(x) = x² from x=0 to x=1 is:", options: ["1/2", "1/3", "1/4", "1"], correct: 1, explanation: "∫₀¹ x² dx = 1/3", xp: 6},
        {id: "u4_l4_q3", type: "multiple_choice", question: "The area under f(x) = 2x from x=0 to x=3 is:", options: ["3", "6", "9", "27"], correct: 2, explanation: "∫₀³ 2x dx = [x²]₀³ = 9", xp: 6},
        {id: "u4_l4_q4", type: "multiple_choice", question: "The area under f(x) = 3 from x=0 to x=2 is:", options: ["3", "6", "9", "12"], correct: 1, explanation: "∫₀² 3 dx = 6", xp: 5},
        {id: "u4_l4_q5", type: "multiple_choice", question: "The area under f(x) = x+1 from x=0 to x=1 is:", options: ["1", "1.5", "2", "3"], correct: 1, explanation: "∫₀¹ (x+1) dx = 1.5", xp: 6},
        {id: "u4_l4_q6", type: "typing", question: "Find the area under f(x) = x from x=0 to x=3:", correctAnswer: "4.5", prompt: "Type your answer:", xp: 6},
        {id: "u4_l4_q7", type: "typing", question: "Find the area under f(x) = 2x from x=0 to x=2:", correctAnswer: "4", prompt: "Type your answer:", xp: 5},
        {id: "u4_l4_q8", type: "typing", question: "Find the area under f(x) = x² from x=0 to x=2:", correctAnswer: "8/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l4_q9", type: "typing", question: "Find the area under f(x) = 3 from x=0 to x=5:", correctAnswer: "15", prompt: "Type your answer:", xp: 5},
        {id: "u4_l4_q10", type: "typing", question: "Find the area under f(x) = x+2 from x=0 to x=2:", correctAnswer: "6", prompt: "Type your answer:", xp: 6},
        {id: "u4_l4_q11", type: "typing", question: "Find the area under f(x) = 2x+1 from x=0 to x=1:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u4_l4_q12", type: "typing", question: "Find the area under f(x) = x² from x=1 to x=2:", correctAnswer: "7/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l4_q13", type: "typing", question: "Find the area under f(x) = 4x from x=0 to x=3:", correctAnswer: "18", prompt: "Type your answer:", xp: 6},
        {id: "u4_l4_q14", type: "typing", question: "Find the area under f(x) = 5 from x=0 to x=3:", correctAnswer: "15", prompt: "Type your answer:", xp: 5},
        {id: "u4_l4_q15", type: "typing", question: "Find the area under f(x) = x+3 from x=0 to x=2:", correctAnswer: "8", prompt: "Type your answer:", xp: 6},
        {id: "u4_l4_q16", type: "typing", question: "Find the area under f(x) = 3x from x=0 to x=2:", correctAnswer: "6", prompt: "Type your answer:", xp: 5},
        {id: "u4_l4_q17", type: "typing", question: "Find the area under f(x) = x²+1 from x=0 to x=1:", correctAnswer: "4/3", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u4_l5": {
      id: "calc4_u4_l5",
      title: "Integration Review",
      icon: "calculus_icons/integral.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        {id: "u4_l5_q1", type: "multiple_choice", question: "∫xⁿ dx =", options: ["xⁿ", "xⁿ⁺¹/(n+1)", "nxⁿ⁻¹", "n"], correct: 1, explanation: "Power rule for integration: xⁿ⁺¹/(n+1)", xp: 4},
        {id: "u4_l5_q2", type: "multiple_choice", question: "\\(\\int_0^1 x² dx = \\)", options: ["1/2", "1/3", "1", "0"], correct: 1, explanation: "[x³/3]₀¹ = 1/3", xp: 5},
        {id: "u4_l5_q3", type: "multiple_choice", question: "∫(x + 1) dx =", options: ["x² + 1", "x²/2 + x", "x + 1", "x² + x"], correct: 1, explanation: "x²/2 + x + C", xp: 5},
        {id: "u4_l5_q4", type: "multiple_choice", question: "The area under f(x)=2x from 0 to 3 is:", options: ["3", "6", "9", "27"], correct: 2, explanation: "[x²]₀³ = 9", xp: 6},
        {id: "u4_l5_q5", type: "multiple_choice", question: "∫3x² dx =", options: ["x³", "3x³", "x³/3", "3"], correct: 0, explanation: "3·x³/3 = x³ + C", xp: 5},
        {id: "u4_l5_q6", type: "typing", question: "Find ∫(2x² + 3x) dx:", correctAnswer: "(2/3)x^3+(3/2)x^2", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q7", type: "typing", question: "Find \\(\\int_0^2 3x dx\\):", correctAnswer: "6", prompt: "Type your answer:", xp: 6},
        {id: "u4_l5_q8", type: "typing", question: "Find ∫(x³ + x² + x) dx:", correctAnswer: "x^4/4+x^3/3+x^2/2", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q9", type: "typing", question: "Find the area under f(x)=x from 0 to 4:", correctAnswer: "8", prompt: "Type your answer:", xp: 6},
        {id: "u4_l5_q10", type: "typing", question: "Find \\(\\int_0^1 x³ dx\\):", correctAnswer: "1/4", prompt: "Type your answer:", xp: 6},
        {id: "u4_l5_q11", type: "typing", question: "Find ∫(4x³ + 2x²) dx:", correctAnswer: "x^4+(2/3)x^3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q12", type: "typing", question: "Find \\(\\int_{-1}^1 x² dx\\):", correctAnswer: "2/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q13", type: "typing", question: "Find ∫(5x² - 2x + 3) dx:", correctAnswer: "(5/3)x^3-x^2+3x", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q14", type: "typing", question: "Find the area under f(x)=3x+1 from 0 to 2:", correctAnswer: "8", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q15", type: "typing", question: "Find ∫(x⁴ + x³ + x² + x) dx:", correctAnswer: "x^5/5+x^4/4+x^3/3+x^2/2", prompt: "Type your answer:", xp: 8},
        {id: "u4_l5_q16", type: "typing", question: "Find \\(\\int_1^2 x² dx\\):", correctAnswer: "7/3", prompt: "Type your answer:", xp: 7},
        {id: "u4_l5_q17", type: "typing", question: "Find ∫(6x² - 3x + 2) dx:", correctAnswer: "2x^3-(3/2)x^2+2x", prompt: "Type your answer:", xp: 7}
      ]
    }
  }
};

// ============================================================================
// UNIT 5: INTEGRATION TECHNIQUES
// ============================================================================
const CalculusUnit5Database = {
  unit: "Calculus Unit 5",
  title: "Integration Techniques",
  lessons: {
    "u5_l1": {
      id: "calc5_u5_l1",
      title: "U-Substitution",
      icon: "calculus_icons/integral.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        {id: "u5_l1_q1", type: "multiple_choice", question: "For ∫2x(x²+1) dx, let u =", options: ["x", "x²", "x²+1", "2x"], correct: 2, explanation: "Let u = x²+1, du = 2x dx", xp: 6},
        {id: "u5_l1_q2", type: "multiple_choice", question: "∫2x(x²+1) dx =", options: ["(x²+1)²", "(x²+1)²/2", "x²+1", "x⁴"], correct: 1, explanation: "u²/2 = (x²+1)²/2", xp: 6},
        {id: "u5_l1_q3", type: "multiple_choice", question: "For ∫3x²(x³+1) dx, let u =", options: ["x", "x²", "x³", "x³+1"], correct: 3, explanation: "Let u = x³+1, du = 3x² dx", xp: 6},
        {id: "u5_l1_q4", type: "multiple_choice", question: "∫3x²(x³+1) dx =", options: ["(x³+1)²", "(x³+1)²/2", "x³+1", "x⁶"], correct: 1, explanation: "u²/2 = (x³+1)²/2", xp: 6},
        {id: "u5_l1_q5", type: "multiple_choice", question: "For ∫cos(x)sin(x) dx, let u =", options: ["sin(x)", "cos(x)", "x", "1"], correct: 0, explanation: "Let u = sin(x), du = cos(x) dx", xp: 6},
        {id: "u5_l1_q6", type: "typing", question: "Find ∫2x(x²+1) dx:", correctAnswer: "(x^2+1)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q7", type: "typing", question: "Find ∫3x²(x³+1) dx:", correctAnswer: "(x^3+1)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q8", type: "typing", question: "Find ∫2x(x²+2) dx:", correctAnswer: "(x^2+2)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q9", type: "typing", question: "Find ∫4x³(x⁴+1) dx:", correctAnswer: "(x^4+1)^2/2", prompt: "Type your answer:", xp: 7},
        {id: "u5_l1_q10", type: "typing", question: "Find ∫3x²(x³-1) dx:", correctAnswer: "(x^3-1)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q11", type: "typing", question: "Find ∫2x(x²) dx:", correctAnswer: "x^4/2", prompt: "Type your answer:", xp: 5},
        {id: "u5_l1_q12", type: "typing", question: "Find ∫3x²(x³) dx:", correctAnswer: "x^6/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q13", type: "typing", question: "Find ∫2x(x²+3) dx:", correctAnswer: "(x^2+3)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q14", type: "typing", question: "Find ∫4x³(x⁴-1) dx:", correctAnswer: "(x^4-1)^2/2", prompt: "Type your answer:", xp: 7},
        {id: "u5_l1_q15", type: "typing", question: "Find ∫6x²(x³+2) dx:", correctAnswer: "(x^3+2)^2", prompt: "Type your answer:", xp: 7},
        {id: "u5_l1_q16", type: "typing", question: "Find ∫2x(x²+5) dx:", correctAnswer: "(x^2+5)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l1_q17", type: "typing", question: "Find ∫4x³(x⁴+2) dx:", correctAnswer: "(x^4+2)^2/2", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u5_l2": {
      id: "calc5_u5_l2",
      title: "Integration by Parts",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u5_l2_q1", type: "multiple_choice", question: "Integration by parts formula:", options: ["∫u dv = uv - ∫v du", "∫u dv = uv + ∫v du", "∫u dv = u - v", "∫u dv = uv"], correct: 0, explanation: "∫u dv = uv - ∫v du", xp: 4},
        {id: "u5_l2_q2", type: "multiple_choice", question: "For ∫x·e^x dx, let u =", options: ["e^x", "x", "x·e^x", "1"], correct: 1, explanation: "Let u = x, dv = e^x dx", xp: 5},
        {id: "u5_l2_q3", type: "multiple_choice", question: "∫x·e^x dx =", options: ["xe^x", "xe^x - e^x", "e^x - x", "x + e^x"], correct: 1, explanation: "xe^x - ∫e^x dx = xe^x - e^x", xp: 6},
        {id: "u5_l2_q4", type: "multiple_choice", question: "For ∫x·ln(x) dx, let u =", options: ["x", "ln(x)", "x·ln(x)", "1/x"], correct: 1, explanation: "Let u = ln(x), dv = x dx", xp: 6},
        {id: "u5_l2_q5", type: "multiple_choice", question: "∫x·ln(x) dx =", options: ["x²ln(x)", "(x²/2)ln(x) - x²/4", "ln(x)", "x²"], correct: 1, explanation: "(x²/2)ln(x) - ∫(x²/2)(1/x) dx = (x²/2)ln(x) - x²/4", xp: 7},
        {id: "u5_l2_q6", type: "typing", question: "Find ∫x·e^x dx:", correctAnswer: "xe^x-e^x", prompt: "Type your answer:", xp: 6},
        {id: "u5_l2_q7", type: "typing", question: "Find ∫x·ln(x) dx:", correctAnswer: "(x^2/2)ln(x)-x^2/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l2_q8", type: "typing", question: "Find ∫2x·e^x dx:", correctAnswer: "2xe^x-2e^x", prompt: "Type your answer:", xp: 7},
        {id: "u5_l2_q9", type: "typing", question: "Find ∫x²·e^x dx:", correctAnswer: "x^2e^x-2xe^x+2e^x", prompt: "Type your answer:", xp: 8},
        {id: "u5_l2_q10", type: "typing", question: "Find ∫3x·ln(x) dx:", correctAnswer: "(3x^2/2)ln(x)-3x^2/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l2_q11", type: "typing", question: "Find ∫x·cos(x) dx:", correctAnswer: "xsin(x)+cos(x)", prompt: "Type your answer:", xp: 7},
        {id: "u5_l2_q12", type: "typing", question: "Find ∫x·sin(x) dx:", correctAnswer: "-xcos(x)+sin(x)", prompt: "Type your answer:", xp: 7},
        {id: "u5_l2_q13", type: "typing", question: "Find ∫2x·cos(x) dx:", correctAnswer: "2xsin(x)+2cos(x)", prompt: "Type your answer:", xp: 8},
        {id: "u5_l2_q14", type: "typing", question: "Find ∫x²·ln(x) dx:", correctAnswer: "(x^3/3)ln(x)-x^3/9", prompt: "Type your answer:", xp: 8},
        {id: "u5_l2_q15", type: "typing", question: "Find ∫x·e^(2x) dx:", correctAnswer: "(xe^(2x))/2-e^(2x)/4", prompt: "Type your answer:", xp: 8},
        {id: "u5_l2_q16", type: "typing", question: "Find ∫x·e^(-x) dx:", correctAnswer: "-xe^(-x)-e^(-x)", prompt: "Type your answer:", xp: 8},
        {id: "u5_l2_q17", type: "typing", question: "Find ∫4x·ln(x) dx:", correctAnswer: "2x^2ln(x)-2x^2", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u5_l3": {
      id: "calc5_u5_l3",
      title: "Trigonometric Integrals",
      icon: "calculus_icons/integral.png",
      xp: 93,
      difficulty: "intermediate",
      questions: [
        {id: "u5_l3_q1", type: "multiple_choice", question: "∫sin(x) dx =", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 1, explanation: "∫sin(x) dx = -cos(x) + C", xp: 4},
        {id: "u5_l3_q2", type: "multiple_choice", question: "∫cos(x) dx =", options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"], correct: 0, explanation: "∫cos(x) dx = sin(x) + C", xp: 4},
        {id: "u5_l3_q3", type: "multiple_choice", question: "∫sec²(x) dx =", options: ["sec(x)", "tan(x)", "cot(x)", "csc(x)"], correct: 1, explanation: "∫sec²(x) dx = tan(x) + C", xp: 5},
        {id: "u5_l3_q4", type: "multiple_choice", question: "∫tan(x) dx =", options: ["ln|sec(x)|", "ln|cos(x)|", "sec(x)", "-ln|cos(x)|"], correct: 3, explanation: "∫tan(x) dx = -ln|cos(x)| = ln|sec(x)|", xp: 6},
        {id: "u5_l3_q5", type: "multiple_choice", question: "∫sin²(x) dx =", options: ["sin(x)", "x/2 - sin(2x)/4", "cos(x)", "x"], correct: 1, explanation: "Using identity: sin²(x) = (1-cos(2x))/2", xp: 6},
        {id: "u5_l3_q6", type: "typing", question: "Find ∫sin(2x) dx:", correctAnswer: "-cos(2x)/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q7", type: "typing", question: "Find ∫cos(2x) dx:", correctAnswer: "sin(2x)/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q8", type: "typing", question: "Find ∫sin(3x) dx:", correctAnswer: "-cos(3x)/3", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q9", type: "typing", question: "Find ∫cos(3x) dx:", correctAnswer: "sin(3x)/3", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q10", type: "typing", question: "Find ∫sin²(x) dx:", correctAnswer: "x/2-sin(2x)/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l3_q11", type: "typing", question: "Find ∫cos²(x) dx:", correctAnswer: "x/2+sin(2x)/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l3_q12", type: "typing", question: "Find ∫tan(2x) dx:", correctAnswer: "-ln|cos(2x)|/2", prompt: "Type your answer:", xp: 7},
        {id: "u5_l3_q13", type: "typing", question: "Find ∫sin(x)cos(x) dx:", correctAnswer: "sin^2(x)/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q14", type: "typing", question: "Find ∫sec²(2x) dx:", correctAnswer: "tan(2x)/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l3_q15", type: "typing", question: "Find ∫sin²(2x) dx:", correctAnswer: "x/2-sin(4x)/8", prompt: "Type your answer:", xp: 8},
        {id: "u5_l3_q16", type: "typing", question: "Find ∫cos²(2x) dx:", correctAnswer: "x/2+sin(4x)/8", prompt: "Type your answer:", xp: 8},
        {id: "u5_l3_q17", type: "typing", question: "Find ∫csc²(x) dx:", correctAnswer: "-cot(x)", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u5_l4": {
      id: "calc5_u5_l4",
      title: "Partial Fractions",
      icon: "calculus_icons/integral.png",
      xp: 94,
      difficulty: "advanced",
      questions: [
        {id: "u5_l4_q1", type: "multiple_choice", question: "\\(\\frac{1}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1}\\), A =", options: ["1", "0", "-1", "2"], correct: 0, explanation: "1 = A(x+1) + Bx, x=0: 1 = A(1)", xp: 6},
        {id: "u5_l4_q2", type: "multiple_choice", question: "\\(\\frac{1}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1}\\), B =", options: ["1", "0", "-1", "2"], correct: 2, explanation: "1 = A(x+1) + Bx, x=-1: 1 = B(-1)", xp: 6},
        {id: "u5_l4_q3", type: "multiple_choice", question: "∫\\(\\frac{1}{x(x+1)}\\) dx =", options: ["ln|x| - ln|x+1|", "ln|x+1| - ln|x|", "ln|x|", "1/(x(x+1))"], correct: 0, explanation: "∫(1/x - 1/(x+1)) dx = ln|x| - ln|x+1|", xp: 7},
        {id: "u5_l4_q4", type: "multiple_choice", question: "\\(\\frac{2}{x(x-1)} = \\frac{A}{x} + \\frac{B}{x-1}\\), B =", options: ["1", "2", "-2", "0"], correct: 1, explanation: "2 = A(x-1) + Bx, x=1: 2 = B(1)", xp: 6},
        {id: "u5_l4_q5", type: "multiple_choice", question: "\\(\\frac{3}{x(x+2)} = \\frac{A}{x} + \\frac{B}{x+2}\\), A =", options: ["3", "1.5", "-1.5", "0"], correct: 1, explanation: "3 = A(x+2) + Bx, x=0: 3 = A(2)", xp: 6},
        {id: "u5_l4_q6", type: "typing", question: "Find ∫\\(\\frac{1}{x(x+1)}\\) dx:", correctAnswer: "ln|x|-ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q7", type: "typing", question: "Find ∫\\(\\frac{2}{x(x-1)}\\) dx:", correctAnswer: "2ln|x-1|-2ln|x|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q8", type: "typing", question: "Find ∫\\(\\frac{1}{x(x-1)}\\) dx:", correctAnswer: "ln|x-1|-ln|x|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q9", type: "typing", question: "Find ∫\\(\\frac{3}{x(x+2)}\\) dx:", correctAnswer: "1.5ln|x|-1.5ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q10", type: "typing", question: "Find ∫\\(\\frac{2}{x(x+2)}\\) dx:", correctAnswer: "ln|x|-ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q11", type: "typing", question: "Find ∫\\(\\frac{1}{x(x-2)}\\) dx:", correctAnswer: "0.5ln|x-2|-0.5ln|x|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q12", type: "typing", question: "Find ∫\\(\\frac{4}{x(x+1)}\\) dx:", correctAnswer: "4ln|x|-4ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q13", type: "typing", question: "Find ∫\\(\\frac{1}{(x+1)(x+2)}\\) dx:", correctAnswer: "ln|x+1|-ln|x+2|", prompt: "Type your answer:", xp: 8},
        {id: "u5_l4_q14", type: "typing", question: "Find ∫\\(\\frac{3}{(x+1)(x+2)}\\) dx:", correctAnswer: "3ln|x+1|-3ln|x+2|", prompt: "Type your answer:", xp: 8},
        {id: "u5_l4_q15", type: "typing", question: "Find ∫\\(\\frac{2}{(x-1)(x+1)}\\) dx:", correctAnswer: "ln|x-1|-ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q16", type: "typing", question: "Find ∫\\(\\frac{5}{x(x+3)}\\) dx:", correctAnswer: "(5/3)ln|x|-(5/3)ln|x+3|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l4_q17", type: "typing", question: "Find ∫\\(\\frac{1}{x(x+3)}\\) dx:", correctAnswer: "(1/3)ln|x|-(1/3)ln|x+3|", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u5_l5": {
      id: "calc5_u5_l5",
      title: "Integration Techniques Review",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u5_l5_q1", type: "multiple_choice", question: "∫2x(x²+1) dx =", options: ["(x²+1)²", "(x²+1)²/2", "x²+1", "x⁴"], correct: 1, explanation: "u-substitution: (x²+1)²/2", xp: 6},
        {id: "u5_l5_q2", type: "multiple_choice", question: "∫sin(x) dx =", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 1, explanation: "∫sin(x) dx = -cos(x)", xp: 4},
        {id: "u5_l5_q3", type: "multiple_choice", question: "∫x·e^x dx =", options: ["xe^x", "xe^x - e^x", "e^x", "x + e^x"], correct: 1, explanation: "Integration by parts: xe^x - e^x", xp: 6},
        {id: "u5_l5_q4", type: "multiple_choice", question: "\\(\\int\\frac{1}{x(x+1)}dx = \\)", options: ["ln|x+1| - ln|x|", "ln|x| - ln|x+1|", "ln|x|", "1/(x(x+1))"], correct: 1, explanation: "Partial fractions: ln|x| - ln|x+1|", xp: 7},
        {id: "u5_l5_q5", type: "multiple_choice", question: "∫cos(2x) dx =", options: ["sin(2x)", "sin(2x)/2", "cos(2x)", "2cos(2x)"], correct: 1, explanation: "∫cos(2x) dx = sin(2x)/2", xp: 6},
        {id: "u5_l5_q6", type: "typing", question: "Find ∫2x(x²+1) dx:", correctAnswer: "(x^2+1)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l5_q7", type: "typing", question: "Find ∫x·e^x dx:", correctAnswer: "xe^x-e^x", prompt: "Type your answer:", xp: 6},
        {id: "u5_l5_q8", type: "typing", question: "Find ∫sin(2x) dx:", correctAnswer: "-cos(2x)/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l5_q9", type: "typing", question: "Find ∫x·ln(x) dx:", correctAnswer: "(x^2/2)ln(x)-x^2/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l5_q10", type: "typing", question: "Find ∫tan(x) dx:", correctAnswer: "-ln|cos(x)|", prompt: "Type your answer:", xp: 6},
        {id: "u5_l5_q11", type: "typing", question: "Find ∫3x²(x³+1) dx:", correctAnswer: "(x^3+1)^2/2", prompt: "Type your answer:", xp: 6},
        {id: "u5_l5_q12", type: "typing", question: "Find ∫x·sin(x) dx:", correctAnswer: "-xcos(x)+sin(x)", prompt: "Type your answer:", xp: 7},
        {id: "u5_l5_q13", type: "typing", question: "Find ∫sin²(x) dx:", correctAnswer: "x/2-sin(2x)/4", prompt: "Type your answer:", xp: 7},
        {id: "u5_l5_q14", type: "typing", question: "Find ∫\\(\\frac{1}{x(x+1)}\\) dx:", correctAnswer: "ln|x|-ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u5_l5_q15", type: "typing", question: "Find ∫4x³(x⁴+1) dx:", correctAnswer: "(x^4+1)^2/2", prompt: "Type your answer:", xp: 7},
        {id: "u5_l5_q16", type: "typing", question: "Find ∫2x·cos(x) dx:", correctAnswer: "2xsin(x)+2cos(x)", prompt: "Type your answer:", xp: 8},
        {id: "u5_l5_q17", type: "typing", question: "Find ∫sec²(2x) dx:", correctAnswer: "tan(2x)/2", prompt: "Type your answer:", xp: 7}
      ]
    }
  }
};

// ============================================================================
// UNIT 6: APPLICATIONS OF INTEGRATION
// ============================================================================
const CalculusUnit6Database = {
  unit: "Calculus Unit 6",
  title: "Applications of Integration",
  lessons: {
    "u6_l1": {
      id: "calc6_u6_l1",
      title: "Area Between Curves",
      icon: "calculus_icons/integral.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        {id: "u6_l1_q1", type: "multiple_choice", question: "Area between f(x)=x and g(x)=0 from 0 to 2:", options: ["1", "2", "4", "8"], correct: 1, explanation: "∫₀² x dx = [x²/2]₀² = 2", xp: 5},
        {id: "u6_l1_q2", type: "multiple_choice", question: "Area between f(x)=x² and g(x)=0 from 0 to 1:", options: ["1/2", "1/3", "1/4", "1"], correct: 1, explanation: "∫₀¹ x² dx = 1/3", xp: 6},
        {id: "u6_l1_q3", type: "multiple_choice", question: "Area between f(x)=2 and g(x)=0 from 0 to 3:", options: ["3", "6", "9", "12"], correct: 1, explanation: "∫₀³ 2 dx = 6", xp: 5},
        {id: "u6_l1_q4", type: "multiple_choice", question: "Area between f(x)=x and g(x)=x² from 0 to 1:", options: ["1/2", "1/3", "1/6", "1"], correct: 2, explanation: "∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/6", xp: 7},
        {id: "u6_l1_q5", type: "multiple_choice", question: "Area between f(x)=2x and g(x)=x from 0 to 1:", options: ["0", "0.5", "1", "2"], correct: 1, explanation: "∫₀¹ (2x - x) dx = ∫₀¹ x dx = 0.5", xp: 6},
        {id: "u6_l1_q6", type: "typing", question: "Find area between f(x)=x and g(x)=0 from 0 to 3:", correctAnswer: "4.5", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q7", type: "typing", question: "Find area between f(x)=x² and g(x)=0 from 0 to 2:", correctAnswer: "8/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l1_q8", type: "typing", question: "Find area between f(x)=3x and g(x)=x from 0 to 2:", correctAnswer: "4", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q9", type: "typing", question: "Find area between f(x)=x+1 and g(x)=x from 0 to 2:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q10", type: "typing", question: "Find area between f(x)=2x and g(x)=x² from 0 to 2:", correctAnswer: "4/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l1_q11", type: "typing", question: "Find area between f(x)=x² and g(x)=x from 0 to 1:", correctAnswer: "1/6", prompt: "Type your answer:", xp: 7},
        {id: "u6_l1_q12", type: "typing", question: "Find area between f(x)=4 and g(x)=0 from 0 to 3:", correctAnswer: "12", prompt: "Type your answer:", xp: 5},
        {id: "u6_l1_q13", type: "typing", question: "Find area between f(x)=3x and g(x)=0 from 0 to 2:", correctAnswer: "6", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q14", type: "typing", question: "Find area between f(x)=x+2 and g(x)=0 from 0 to 1:", correctAnswer: "2.5", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q15", type: "typing", question: "Find area between f(x)=2x+1 and g(x)=x+1 from 0 to 1:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q16", type: "typing", question: "Find area between f(x)=x³ and g(x)=0 from 0 to 1:", correctAnswer: "1/4", prompt: "Type your answer:", xp: 6},
        {id: "u6_l1_q17", type: "typing", question: "Find area between f(x)=x²+1 and g(x)=1 from 0 to 1:", correctAnswer: "1/3", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u6_l2": {
      id: "calc6_u6_l2",
      title: "Volume by Slicing",
      icon: "calculus_icons/integral.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        {id: "u6_l2_q1", type: "multiple_choice", question: "Volume of a solid with cross-section A(x) from a to b:", options: ["A(a) - A(b)", "∫ₐᵇ A(x) dx", "A(a) + A(b)", "A(x)"], correct: 1, explanation: "V = ∫ A(x) dx", xp: 4},
        {id: "u6_l2_q2", type: "multiple_choice", question: "For a solid with square cross-section, A(x) =", options: ["r²", "s²", "πr²", "2πr"], correct: 1, explanation: "Area of square = side²", xp: 5},
        {id: "u6_l2_q3", type: "multiple_choice", question: "For a solid with circular cross-section, A(x) =", options: ["r²", "πr²", "2πr", "πr"], correct: 1, explanation: "Area of circle = πr²", xp: 5},
        {id: "u6_l2_q4", type: "multiple_choice", question: "Volume of a cube with side s:", options: ["s", "s²", "s³", "6s²"], correct: 2, explanation: "V = s³", xp: 4},
        {id: "u6_l2_q5", type: "multiple_choice", question: "Volume of a solid with A(x)=x from 0 to 2:", options: ["1", "2", "4", "8"], correct: 1, explanation: "∫₀² x dx = [x²/2]₀² = 2", xp: 6},
        {id: "u6_l2_q6", type: "typing", question: "Find volume if A(x)=x from 0 to 3:", correctAnswer: "4.5", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q7", type: "typing", question: "Find volume if A(x)=x² from 0 to 1:", correctAnswer: "1/3", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q8", type: "typing", question: "Find volume if A(x)=2x from 0 to 2:", correctAnswer: "4", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q9", type: "typing", question: "Find volume if A(x)=4 from 0 to 3:", correctAnswer: "12", prompt: "Type your answer:", xp: 5},
        {id: "u6_l2_q10", type: "typing", question: "Find volume if A(x)=x+1 from 0 to 2:", correctAnswer: "4", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q11", type: "typing", question: "Find volume if A(x)=3x from 0 to 2:", correctAnswer: "6", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q12", type: "typing", question: "Find volume if A(x)=x²+1 from 0 to 1:", correctAnswer: "4/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l2_q13", type: "typing", question: "Find volume if A(x)=2x² from 0 to 2:", correctAnswer: "16/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l2_q14", type: "typing", question: "Find volume if A(x)=x+2 from 0 to 3:", correctAnswer: "13.5", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q15", type: "typing", question: "Find volume if A(x)=3 from 0 to 4:", correctAnswer: "12", prompt: "Type your answer:", xp: 5},
        {id: "u6_l2_q16", type: "typing", question: "Find volume if A(x)=5x from 0 to 2:", correctAnswer: "10", prompt: "Type your answer:", xp: 6},
        {id: "u6_l2_q17", type: "typing", question: "Find volume if A(x)=x³ from 0 to 1:", correctAnswer: "1/4", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u6_l3": {
      id: "calc6_u6_l3",
      title: "Solids of Revolution - Disk Method",
      icon: "calculus_icons/integral.png",
      xp: 94,
      difficulty: "intermediate",
      questions: [
        {id: "u6_l3_q1", type: "multiple_choice", question: "Disk method volume: V =", options: ["∫πr² dx", "∫2πr dx", "∫πr dx", "∫r² dx"], correct: 0, explanation: "V = ∫ πr² dx", xp: 4},
        {id: "u6_l3_q2", type: "multiple_choice", question: "For y=x rotated about x-axis from 0 to 1, r =", options: ["x", "x²", "1", "0"], correct: 0, explanation: "r = y = x", xp: 5},
        {id: "u6_l3_q3", type: "multiple_choice", question: "Volume of y=x rotated about x-axis from 0 to 1:", options: ["π", "π/2", "π/3", "π/4"], correct: 2, explanation: "V = ∫₀¹ πx² dx = π[x³/3]₀¹ = π/3", xp: 7},
        {id: "u6_l3_q4", type: "multiple_choice", question: "Volume of y=1 rotated about x-axis from 0 to 2:", options: ["π", "2π", "4π", "π²"], correct: 1, explanation: "V = ∫₀² π(1)² dx = π[x]₀² = 2π", xp: 6},
        {id: "u6_l3_q5", type: "multiple_choice", question: "Volume of y=√x rotated about x-axis from 0 to 1:", options: ["π/2", "π", "π/3", "2π"], correct: 0, explanation: "V = ∫₀¹ πx dx = π[x²/2]₀¹ = π/2", xp: 7},
        {id: "u6_l3_q6", type: "typing", question: "Find volume of y=x rotated about x-axis from 0 to 2:", correctAnswer: "8pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q7", type: "typing", question: "Find volume of y=x² rotated about x-axis from 0 to 1:", correctAnswer: "pi/5", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q8", type: "typing", question: "Find volume of y=2 rotated about x-axis from 0 to 3:", correctAnswer: "12pi", prompt: "Type your answer:", xp: 6},
        {id: "u6_l3_q9", type: "typing", question: "Find volume of y=x³ rotated about x-axis from 0 to 1:", correctAnswer: "pi/7", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q10", type: "typing", question: "Find volume of y=3x rotated about x-axis from 0 to 1:", correctAnswer: "3pi", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q11", type: "typing", question: "Find volume of y=2x rotated about x-axis from 0 to 1:", correctAnswer: "4pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q12", type: "typing", question: "Find volume of y=x+1 rotated about x-axis from 0 to 1:", correctAnswer: "5pi/3", prompt: "Type your answer:", xp: 8},
        {id: "u6_l3_q13", type: "typing", question: "Find volume of y=2x² rotated about x-axis from 0 to 1:", correctAnswer: "4pi/5", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q14", type: "typing", question: "Find volume of y=3 rotated about x-axis from 0 to 2:", correctAnswer: "18pi", prompt: "Type your answer:", xp: 6},
        {id: "u6_l3_q15", type: "typing", question: "Find volume of y=√x rotated about x-axis from 0 to 2:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q16", type: "typing", question: "Find volume of y=4x rotated about x-axis from 0 to 1:", correctAnswer: "16pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l3_q17", type: "typing", question: "Find volume of y=x²+1 rotated about x-axis from 0 to 1:", correctAnswer: "8pi/5", prompt: "Type your answer:", xp: 8}
      ]
    },
    "u6_l4": {
      id: "calc6_u6_l4",
      title: "Solids of Revolution - Shell Method",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u6_l4_q1", type: "multiple_choice", question: "Shell method volume: V =", options: ["∫πr² dx", "∫2πrh dx", "∫πr dx", "∫r² dx"], correct: 1, explanation: "V = ∫ 2πrh dx", xp: 4},
        {id: "u6_l4_q2", type: "multiple_choice", question: "For y=x rotated about y-axis from 0 to 1, h =", options: ["x", "x²", "1", "0"], correct: 0, explanation: "h = y = x", xp: 5},
        {id: "u6_l4_q3", type: "multiple_choice", question: "Volume of y=x rotated about y-axis from 0 to 1:", options: ["π", "2π/3", "π/2", "π/3"], correct: 1, explanation: "V = ∫₀¹ 2πx·x dx = 2π∫₀¹ x² dx = 2π/3", xp: 7},
        {id: "u6_l4_q4", type: "multiple_choice", question: "Volume of y=1 rotated about y-axis from 0 to 2:", options: ["2π", "π", "4π", "2π²"], correct: 0, explanation: "V = ∫₀² 2πx·1 dx = 2π[x²/2]₀² = 2π", xp: 6},
        {id: "u6_l4_q5", type: "multiple_choice", question: "Volume of y=x² rotated about y-axis from 0 to 1:", options: ["π/2", "π/3", "π/4", "π"], correct: 0, explanation: "V = ∫₀¹ 2πx·x² dx = 2π∫₀¹ x³ dx = 2π/4 = π/2", xp: 7},
        {id: "u6_l4_q6", type: "typing", question: "Find volume of y=x rotated about y-axis from 0 to 2:", correctAnswer: "16pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q7", type: "typing", question: "Find volume of y=x² rotated about y-axis from 0 to 1:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q8", type: "typing", question: "Find volume of y=2x rotated about y-axis from 0 to 1:", correctAnswer: "4pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q9", type: "typing", question: "Find volume of y=3x rotated about y-axis from 0 to 1:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q10", type: "typing", question: "Find volume of y=x³ rotated about y-axis from 0 to 1:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q11", type: "typing", question: "Find volume of y=x+1 rotated about y-axis from 0 to 1:", correctAnswer: "5pi/6", prompt: "Type your answer:", xp: 8},
        {id: "u6_l4_q12", type: "typing", question: "Find volume of y=2 rotated about y-axis from 0 to 3:", correctAnswer: "18pi", prompt: "Type your answer:", xp: 6},
        {id: "u6_l4_q13", type: "typing", question: "Find volume of y=3x² rotated about y-axis from 0 to 1:", correctAnswer: "3pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q14", type: "typing", question: "Find volume of y=4x rotated about y-axis from 0 to 1:", correctAnswer: "4pi", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q15", type: "typing", question: "Find volume of y=x²+1 rotated about y-axis from 0 to 1:", correctAnswer: "pi", prompt: "Type your answer:", xp: 8},
        {id: "u6_l4_q16", type: "typing", question: "Find volume of y=5x rotated about y-axis from 0 to 1:", correctAnswer: "10pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l4_q17", type: "typing", question: "Find volume of y=2x² rotated about y-axis from 0 to 1:", correctAnswer: "pi", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u6_l5": {
      id: "calc6_u6_l5",
      title: "Arc Length",
      icon: "calculus_icons/integral.png",
      xp: 93,
      difficulty: "advanced",
      questions: [
        {id: "u6_l5_q1", type: "multiple_choice", question: "Arc length formula: L =", options: ["∫√(1+f'(x)²) dx", "∫(1+f'(x)) dx", "∫f'(x) dx", "∫f(x) dx"], correct: 0, explanation: "L = ∫ √(1+f'(x)²) dx", xp: 4},
        {id: "u6_l5_q2", type: "multiple_choice", question: "For f(x) = x, f'(x) =", options: ["0", "1", "x", "x²"], correct: 1, explanation: "f'(x) = 1", xp: 4},
        {id: "u6_l5_q3", type: "multiple_choice", question: "Arc length of y=x from 0 to 1:", options: ["1", "√2", "2", "√2/2"], correct: 1, explanation: "∫₀¹ √(1+1) dx = √2", xp: 6},
        {id: "u6_l5_q4", type: "multiple_choice", question: "For f(x) = 2x, f'(x) =", options: ["0", "1", "2", "x"], correct: 2, explanation: "f'(x) = 2", xp: 4},
        {id: "u6_l5_q5", type: "multiple_choice", question: "Arc length of y=2x from 0 to 1:", options: ["1", "√5", "√2", "2"], correct: 1, explanation: "∫₀¹ √(1+4) dx = √5", xp: 6},
        {id: "u6_l5_q6", type: "typing", question: "Find arc length of y=x from 0 to 2:", correctAnswer: "2sqrt(2)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q7", type: "typing", question: "Find arc length of y=2x from 0 to 1:", correctAnswer: "sqrt(5)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q8", type: "typing", question: "Find arc length of y=3x from 0 to 1:", correctAnswer: "sqrt(10)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q9", type: "typing", question: "Find arc length of y=2x from 0 to 2:", correctAnswer: "2sqrt(5)", prompt: "Type your answer:", xp: 7},
        {id: "u6_l5_q10", type: "typing", question: "Find arc length of y=x from 0 to 3:", correctAnswer: "3sqrt(2)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q11", type: "typing", question: "Find arc length of y=4x from 0 to 1:", correctAnswer: "sqrt(17)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q12", type: "typing", question: "Find arc length of y=3x from 0 to 2:", correctAnswer: "2sqrt(10)", prompt: "Type your answer:", xp: 7},
        {id: "u6_l5_q13", type: "typing", question: "Find arc length of y=5x from 0 to 1:", correctAnswer: "sqrt(26)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q14", type: "typing", question: "Find arc length of y=x from 1 to 2:", correctAnswer: "sqrt(2)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l5_q15", type: "typing", question: "Find arc length of y=2x from 0 to 3:", correctAnswer: "3sqrt(5)", prompt: "Type your answer:", xp: 7},
        {id: "u6_l5_q16", type: "typing", question: "Find arc length of y=4x from 0 to 2:", correctAnswer: "2sqrt(17)", prompt: "Type your answer:", xp: 7},
        {id: "u6_l5_q17", type: "typing", question: "Find arc length of y=6x from 0 to 1:", correctAnswer: "sqrt(37)", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u6_l6": {
      id: "calc6_u6_l6",
      title: "Applications Review",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u6_l6_q1", type: "multiple_choice", question: "Area between f(x)=x and g(x)=x² from 0 to 1:", options: ["1/2", "1/3", "1/6", "1"], correct: 2, explanation: "∫₀¹ (x-x²) dx = 1/6", xp: 7},
        {id: "u6_l6_q2", type: "multiple_choice", question: "Volume (disk) of y=x rotated about x-axis from 0 to 1:", options: ["π", "π/2", "π/3", "π/4"], correct: 2, explanation: "∫₀¹ πx² dx = π/3", xp: 7},
        {id: "u6_l6_q3", type: "multiple_choice", question: "Volume (shell) of y=x rotated about y-axis from 0 to 1:", options: ["π", "2π/3", "π/2", "π/3"], correct: 1, explanation: "∫₀¹ 2πx·x dx = 2π/3", xp: 7},
        {id: "u6_l6_q4", type: "multiple_choice", question: "Arc length of y=x from 0 to 1:", options: ["1", "√2", "2", "√2/2"], correct: 1, explanation: "∫₀¹ √2 dx = √2", xp: 6},
        {id: "u6_l6_q5", type: "multiple_choice", question: "Disk method formula:", options: ["∫πr² dx", "∫2πrh dx", "∫πr dx", "∫r² dx"], correct: 0, explanation: "V = ∫ πr² dx", xp: 4},
        {id: "u6_l6_q6", type: "typing", question: "Find area between f(x)=2x and g(x)=x from 0 to 2:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u6_l6_q7", type: "typing", question: "Find volume (disk) of y=x rotated about x-axis from 0 to 2:", correctAnswer: "8pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q8", type: "typing", question: "Find volume (shell) of y=x² rotated about y-axis from 0 to 1:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q9", type: "typing", question: "Find arc length of y=2x from 0 to 1:", correctAnswer: "sqrt(5)", prompt: "Type your answer:", xp: 6},
        {id: "u6_l6_q10", type: "typing", question: "Find area between f(x)=x+1 and g(x)=1 from 0 to 2:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u6_l6_q11", type: "typing", question: "Find volume (disk) of y=x² rotated about x-axis from 0 to 1:", correctAnswer: "pi/5", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q12", type: "typing", question: "Find volume (shell) of y=2x rotated about y-axis from 0 to 1:", correctAnswer: "4pi/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q13", type: "typing", question: "Find arc length of y=3x from 0 to 2:", correctAnswer: "2sqrt(10)", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q14", type: "typing", question: "Find area between f(x)=x² and g(x)=0 from 0 to 2:", correctAnswer: "8/3", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q15", type: "typing", question: "Find volume (disk) of y=√x rotated about x-axis from 0 to 1:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q16", type: "typing", question: "Find volume (shell) of y=x³ rotated about y-axis from 0 to 1:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 7},
        {id: "u6_l6_q17", type: "typing", question: "Find arc length of y=4x from 0 to 1:", correctAnswer: "sqrt(17)", prompt: "Type your answer:", xp: 6}
      ]
    }
  }
};

/**
 * Export the databases
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusUnit4Database, CalculusUnit5Database, CalculusUnit6Database };
} else {
  window.CalculusUnit4Database = CalculusUnit4Database;
  window.CalculusUnit5Database = CalculusUnit5Database;
  window.CalculusUnit6Database = CalculusUnit6Database;
}