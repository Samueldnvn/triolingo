/**
 * QUESTION DATABASE - UNITS 7-9 CALCULUS (COMPLETE)
 * Databases for Units 7, 8, and 9 - Complete with all lessons
 *
 * Structure:
- 6 lessons each (Units 7-8), 5 lessons (Unit 9)
 * - 15-17 questions per lesson
 * - Majority typing questions (60-70%)
 * - Seaborn-style colored diagrams
 */

// ============================================================================
// UNIT 7: ADVANCED INTEGRATION
// ============================================================================
const CalculusUnit7Database = {
  unit: "Calculus Unit 7",
  title: "Advanced Integration",
  lessons: {
    "u7_l1": {
      id: "calc7_u7_l1",
      title: "Integration by Parts Advanced",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u7_l1_q1", type: "multiple_choice", question: "∫x²·e^x dx requires integration by parts:", options: ["0 times", "1 time", "2 times", "3 times"], correct: 2, explanation: "x² needs to be differentiated twice to become a constant", xp: 5},
        {id: "u7_l1_q2", type: "multiple_choice", question: "∫x²·e^x dx =", options: ["x²e^x - 2xe^x", "x²e^x - 2xe^x + 2e^x", "x²e^x + 2e^x", "xe^x - e^x"], correct: 1, explanation: "Apply parts twice: x²e^x - 2xe^x + 2e^x + C", xp: 6},
        {id: "u7_l1_q3", type: "multiple_choice", question: "∫e^x·sin(x) dx =", options: ["e^x·sin(x)", "e^x·cos(x)", "(e^x/2)(sin(x) - cos(x))", "(e^x/2)(sin(x) + cos(x))"], correct: 2, explanation: "Cyclic integration by parts", xp: 7},
        {id: "u7_l1_q4", type: "multiple_choice", question: "∫x·cos(2x) dx =", options: ["x·sin(2x)", "x·sin(2x)/2 + cos(2x)/4", "sin(2x)", "cos(2x)"], correct: 1, explanation: "x·sin(2x)/2 + cos(2x)/4 + C", xp: 6},
        {id: "u7_l1_q5", type: "multiple_choice", question: "For ∫x·ln(x)² dx, let u =", options: ["ln(x)", "ln(x)²", "x", "1"], correct: 1, explanation: "Let u = ln(x)², dv = x dx", xp: 6},
        {id: "u7_l1_q6", type: "typing", question: "Find ∫x²·e^x dx:", correctAnswer: "x^2e^x-2xe^x+2e^x", prompt: "Type your answer:", xp: 6},
        {id: "u7_l1_q7", type: "typing", question: "Find ∫x³·e^x dx:", correctAnswer: "x^3e^x-3x^2e^x+6xe^x-6e^x", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q8", type: "typing", question: "Find ∫x·sin(2x) dx:", correctAnswer: "-xcos(2x)/2+sin(2x)/4", prompt: "Type your answer:", xp: 6},
        {id: "u7_l1_q9", type: "typing", question: "Find ∫e^x·cos(x) dx:", correctAnswer: "(e^x/2)(sin(x)+cos(x))", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q10", type: "typing", question: "Find ∫x·cos(x) dx:", correctAnswer: "xsin(x)+cos(x)", prompt: "Type your answer:", xp: 6},
        {id: "u7_l1_q11", type: "typing", question: "Find ∫2x·sin(x) dx:", correctAnswer: "-2xcos(x)+2sin(x)", prompt: "Type your answer:", xp: 6},
        {id: "u7_l1_q12", type: "typing", question: "Find ∫x·ln(x)² dx:", correctAnswer: "(x^2/2)(ln(x))^2-(x^2/2)ln(x)+x^2/4", prompt: "Type your answer:", xp: 8},
        {id: "u7_l1_q13", type: "typing", question: "Find ∫x²·sin(x) dx:", correctAnswer: "-x^2cos(x)+2xsin(x)+2cos(x)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q14", type: "typing", question: "Find ∫x·e^(2x) dx:", correctAnswer: "(xe^(2x))/2-e^(2x)/4", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q15", type: "typing", question: "Find ∫3x·cos(x) dx:", correctAnswer: "3xsin(x)+3cos(x)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q16", type: "typing", question: "Find ∫e^x·sin(x) dx:", correctAnswer: "(e^x/2)(sin(x)-cos(x))", prompt: "Type your answer:", xp: 7},
        {id: "u7_l1_q17", type: "typing", question: "Find ∫x·sin(x) dx:", correctAnswer: "-xcos(x)+sin(x)", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u7_l2": {
      id: "calc7_u7_l2",
      title: "Trigonometric Substitution",
      icon: "calculus_icons/integral.png",
      xp: 96,
      difficulty: "advanced",
      questions: [
        {id: "u7_l2_q1", type: "multiple_choice", question: "For ∫√(a²-x²) dx, use:", options: ["x = a·sec(θ)", "x = a·tan(θ)", "x = a·sin(θ)", "x = a·cos(θ)"], correct: 2, explanation: "x = a·sin(θ) gives √(a²-a²sin²θ) = a·cos(θ)", xp: 6},
        {id: "u7_l2_q2", type: "multiple_choice", question: "For ∫√(a²+x²) dx, use:", options: ["x = a·sin(θ)", "x = a·tan(θ)", "x = a·sec(θ)", "x = a·cos(θ)"], correct: 1, explanation: "x = a·tan(θ) gives √(a²+a²tan²θ) = a·sec(θ)", xp: 6},
        {id: "u7_l2_q3", type: "multiple_choice", question: "For ∫√(x²-a²) dx, use:", options: ["x = a·sin(θ)", "x = a·tan(θ)", "x = a·sec(θ)", "x = a·cos(θ)"], correct: 2, explanation: "x = a·sec(θ) gives √(a²sec²θ-a²) = a·tan(θ)", xp: 6},
        {id: "u7_l2_q4", type: "multiple_choice", question: "∫√(4-x²) dx uses substitution:", options: ["x = 2·sin(θ)", "x = 2·tan(θ)", "x = 2·sec(θ)", "x = 4·sin(θ)"], correct: 0, explanation: "a²=4, so a=2, x=2sin(θ)", xp: 5},
        {id: "u7_l2_q5", type: "multiple_choice", question: "With x = 2·sin(θ), dx =", options: ["2·cos(θ)", "2·cos(θ) dθ", "cos(θ) dθ", "2·sin(θ) dθ"], correct: 1, explanation: "dx = 2·cos(θ) dθ", xp: 5},
        {id: "u7_l2_q6", type: "typing", question: "For ∫√(9-x²) dx, use substitution:", correctAnswer: "x=3sin(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l2_q7", type: "typing", question: "For ∫√(4+x²) dx, use substitution:", correctAnswer: "x=2tan(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l2_q8", type: "typing", question: "For ∫√(x²-9) dx, use substitution:", correctAnswer: "x=3sec(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l2_q9", type: "typing", question: "With x = a·sin(θ), dx =", correctAnswer: "acos(theta)d(theta)", prompt: "Type your answer:", xp: 6},
        {id: "u7_l2_q10", type: "typing", question: "With x = a·tan(θ), dx =", correctAnswer: "asec^2(theta)d(theta)", prompt: "Type your answer:", xp: 6},
        {id: "u7_l2_q11", type: "typing", question: "With x = a·sec(θ), dx =", correctAnswer: "asec(theta)tan(theta)d(theta)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l2_q12", type: "typing", question: "If x = 2·sin(θ) and √(4-x²) = 2·cos(θ), then θ =", correctAnswer: "arcsin(x/2)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l2_q13", type: "typing", question: "If x = 3·tan(θ) and √(9+x²) = 3·sec(θ), then θ =", correctAnswer: "arctan(x/3)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l2_q14", type: "typing", question: "If x = 4·sec(θ) and √(x²-16) = 4·tan(θ), then θ =", correctAnswer: "arcsec(x/4)", prompt: "Type your answer:", xp: 7},
        {id: "u7_l2_q15", type: "typing", question: "∫√(16-x²) dx uses which substitution?", correctAnswer: "x=4sin(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l2_q16", type: "typing", question: "∫√(25+x²) dx uses which substitution?", correctAnswer: "x=5tan(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l2_q17", type: "typing", question: "∫√(x²-1) dx uses which substitution?", correctAnswer: "x=sec(theta)", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u7_l3": {
      id: "calc7_u7_l3",
      title: "Partial Fractions Advanced",
      icon: "calculus_icons/integral.png",
      xp: 95,
      difficulty: "advanced",
      questions: [
        {id: "u7_l3_q1", type: "multiple_choice", question: "\\(\\frac{1}{x^2-1} = \\frac{1}{(x+1)(x-1)}\\) decomposes to:", options: ["\\(\\frac{1}{x+1} + \\frac{1}{x-1}\\)", "\\(\\frac{1}{2}(\\frac{1}{x-1} - \\frac{1}{x+1})\\)", "\\(\\frac{1}{x+1} - \\frac{1}{x-1}\\)", "\\(\\frac{2}{x+1} - \\frac{2}{x-1}\\)"], correct: 1, explanation: "A/(x+1) + B/(x-1), solving: A=1/2, B=-1/2", xp: 6},
        {id: "u7_l3_q2", type: "multiple_choice", question: "\\(\\frac{1}{x^2+2x} = \\frac{1}{x(x+2)}\\) decomposes to:", options: ["\\(\\frac{1}{x} - \\frac{1}{x+2}\\)", "\\(\\frac{1}{2x} - \\frac{1}{2(x+2)}\\)", "\\(\\frac{1}{x} + \\frac{1}{x+2}\\)", "\\(\\frac{1}{x+2} - \\frac{1}{x}\\)"], correct: 1, explanation: "1/(2x) - 1/(2(x+2))", xp: 6},
        {id: "u7_l3_q3", type: "multiple_choice", question: "\\(\\frac{2x+3}{x^2+x-2} = \\frac{2x+3}{(x+2)(x-1)}\\), the denominator is:", options: ["Repeated", "Distinct linear", "Quadratic irreducible", "Mixed"], correct: 1, explanation: "Two distinct linear factors", xp: 5},
        {id: "u7_l3_q4", type: "multiple_choice", question: "For repeated factors like \\(\\frac{1}{x^2}\\), use:", options: ["\\(\\frac{A}{x}\\)", "\\(\\frac{A}{x} + \\frac{B}{x^2}\\)", "\\(\\frac{A}{x^2}\\)", "\\(\\frac{A+B}{x}\\)"], correct: 1, explanation: "A/x + B/x² for repeated factors", xp: 6},
        {id: "u7_l3_q5", type: "multiple_choice", question: "For irreducible quadratic like \\(\\frac{1}{x^2+1}\\), use:", options: ["\\(\\frac{A}{x+1}\\)", "\\(\\frac{Ax+B}{x^2+1}\\)", "\\(\\frac{A}{x^2+1}\\)", "\\(Ax^2+B\\)"], correct: 1, explanation: "(Ax+B)/(x²+1) for irreducible quadratics", xp: 6},
        {id: "u7_l3_q6", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-1}\\) dx:", correctAnswer: "(1/2)ln|x-1|-(1/2)ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q7", type: "typing", question: "Find ∫\\(\\frac{1}{x^2+2x}\\) dx:", correctAnswer: "(1/2)ln|x|-(1/2)ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q8", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-4}\\) dx:", correctAnswer: "(1/4)ln|x-2|-(1/4)ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q9", type: "typing", question: "Find ∫\\(\\frac{2x+1}{x^2+x-2}\\) dx:", correctAnswer: "ln|x-1|+ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q10", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-9}\\) dx:", correctAnswer: "(1/6)ln|x-3|-(1/6)ln|x+3|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q11", type: "typing", question: "Find ∫\\(\\frac{1}{(x+1)(x+2)}\\) dx:", correctAnswer: "ln|x+1|-ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q12", type: "typing", question: "Find ∫\\(\\frac{3}{x^2-1}\\) dx:", correctAnswer: "(3/2)ln|x-1|-(3/2)ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q13", type: "typing", question: "Find ∫\\(\\frac{4}{x^2-4}\\) dx:", correctAnswer: "ln|x-2|-ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q14", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-16}\\) dx:", correctAnswer: "(1/8)ln|x-4|-(1/8)ln|x+4|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q15", type: "typing", question: "Find ∫\\(\\frac{x}{x^2-1}\\) dx:", correctAnswer: "(1/2)ln|x^2-1|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l3_q16", type: "typing", question: "Find ∫\\(\\frac{2x}{x^2+1}\\) dx:", correctAnswer: "ln|x^2+1|", prompt: "Type your answer:", xp: 6},
        {id: "u7_l3_q17", type: "typing", question: "Find ∫\\(\\frac{1}{(x-1)(x-2)}\\) dx:", correctAnswer: "ln|x-2|-ln|x-1|", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u7_l4": {
      id: "calc7_u7_l4",
      title: "Improper Integrals",
      icon: "calculus_icons/integral.png",
      xp: 94,
      difficulty: "advanced",
      questions: [
        {id: "u7_l4_q1", type: "multiple_choice", question: "\\(\\int_1^\\infty \\frac{1}{x^2} dx\\) is:", options: ["Divergent", "Convergent to 1", "Convergent to 0", "Convergent to ∞"], correct: 1, explanation: "∫₁^∞ 1/x² dx = [-1/x]₁^∞ = 0 - (-1) = 1", xp: 6},
        {id: "u7_l4_q2", type: "multiple_choice", question: "\\(\\int_1^\\infty \\frac{1}{x} dx\\) is:", options: ["Convergent", "Divergent to ∞", "Divergent to 0", "Convergent to 1"], correct: 1, explanation: "∫₁^∞ 1/x dx = [ln|x|]₁^∞ = ∞, divergent", xp: 6},
        {id: "u7_l4_q3", type: "multiple_choice", question: "For \\(\\int_a^\\infty f(x) dx\\), we use:", options: ["\\(\\lim_{t\\to a} ∫_t^\\infty f(x) dx\\)", "\\(\\lim_{t\\to\\infty} ∫_a^t f(x) dx\\)", "\\(∫_a^\\infty \\lim_{t\\to\\infty} f(x) dx\\)", "\\(\\lim_{t\\to 0} ∫_a^t f(x) dx\\)"], correct: 1, explanation: "lim(t→∞) ∫ₐᵗ f(x) dx", xp: 5},
        {id: "u7_l4_q4", type: "multiple_choice", question: "\\(\\int_0^1 \\frac{1}{\\sqrt{x}} dx\\) is:", options: ["Divergent", "Convergent to 2", "Convergent to 1", "Convergent to 0"], correct: 1, explanation: "∫₀¹ x^(-1/2) dx = [2x^(1/2)]₀¹ = 2 - 0 = 2", xp: 6},
        {id: "u7_l4_q5", type: "multiple_choice", question: "\\(\\int_0^1 \\frac{1}{x} dx\\) is:", options: ["Convergent", "Divergent", "Convergent to 0", "Convergent to 1"], correct: 1, explanation: "∫₀¹ 1/x dx = [ln|x|]₀¹ = ln(1) - ln(0) = -∞, divergent", xp: 6},
        {id: "u7_l4_q6", type: "typing", question: "Find \\(\\int_1^\\infty \\frac{1}{x^2}\\) dx:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q7", type: "typing", question: "Find \\(\\int_0^\\infty e^{-x}\\) dx:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q8", type: "typing", question: "Find \\(\\int_0^1 \\frac{1}{\\sqrt{x}}\\) dx:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q9", type: "typing", question: "Find \\(\\int_1^\\infty \\frac{1}{x^3}\\) dx:", correctAnswer: "1/2", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q10", type: "typing", question: "Find \\(\\int_0^\\infty e^{-2x}\\) dx:", correctAnswer: "1/2", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q11", type: "typing", question: "Find \\(\\int_1^\\infty \\frac{1}{x^p}\\) dx, converges when:", correctAnswer: "p>1", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q12", type: "typing", question: "Find \\(\\int_0^1 \\frac{1}{x^p}\\) dx, converges when:", correctAnswer: "p<1", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q13", type: "typing", question: "Find \\(\\int_0^1 x^{-2}\\) dx:", correctAnswer: "divergent", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q14", type: "typing", question: "Find \\(\\int_1^\\infty e^{-x}\\) dx:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u7_l4_q15", type: "typing", question: "Find \\(\\int_0^1 x^{-1/3}\\) dx:", correctAnswer: "3/2", prompt: "Type your answer:", xp: 7},
        {id: "u7_l4_q16", type: "typing", question: "Find \\(\\int_2^\\infty \\frac{1}{x^2}\\) dx:", correctAnswer: "1/2", prompt: "Type your answer:", xp: 6},
        {id: "u7_l4_q17", type: "typing", question: "Find \\(\\int_0^\\infty 2e^{-x}\\) dx:", correctAnswer: "2", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u7_l5": {
      id: "calc7_u7_l5",
      title: "Numerical Integration",
      icon: "calculus_icons/integral.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        {id: "u7_l5_q1", type: "multiple_choice", question: "Trapezoidal rule approximates ∫ using:", options: ["Rectangles", "Trapezoids", "Parabolas", "Lines"], correct: 1, explanation: "Trapezoidal rule uses trapezoids", xp: 4},
        {id: "u7_l5_q2", type: "multiple_choice", question: "Simpson's rule approximates ∫ using:", options: ["Rectangles", "Trapezoids", "Parabolas", "Lines"], correct: 2, explanation: "Simpson's rule uses parabolas", xp: 4},
        {id: "u7_l5_q3", type: "multiple_choice", question: "Trapezoidal rule formula:", options: ["∑f(x_i)", "∑(f(x_i) + f(x_{i+1}))/2·Δx", "∑(4f(x_i) + 2f(x_j))", "∑f(x_{mid})", correct: 1, explanation: "Average height times width", xp: 5},
        {id: "u7_l5_q4", type: "multiple_choice", question: "Simpson's rule requires:", options: ["Any number of subintervals", "Even number of subintervals", "Odd number of subintervals", "Divisible by 3"], correct: 1, explanation: "Simpson's rule needs even number of subintervals", xp: 5},
        {id: "u7_l5_q5", type: "multiple_choice", question: "Simpson's rule formula:", options: ["∑(f(x_i) + f(x_{i+1}))/2", "∑(f(x_i) + 4f(x_{mid}) + f(x_{i+1}))/6", "∑4f(x_i)", "∑f(x_i)·Δx"], correct: 1, explanation: "(f(x₀)+4f(x₁)+f(x₂))/6", xp: 6},
        {id: "u7_l5_q6", type: "typing", question: "With n=2, Δx in [0,1] is:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q7", type: "typing", question: "With n=4, Δx in [0,2] is:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q8", type: "typing", question: "With n=5, Δx in [0,5] is:", correctAnswer: "1", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q9", type: "typing", question: "Trapezoidal rule needs:", correctAnswer: "any n", prompt: "Type your answer:", xp: 5},
        {id: "u7_l5_q10", type: "typing", question: "Simpson's rule needs:", correctAnswer: "even n", prompt: "Type your answer:", xp: 5},
        {id: "u7_l5_q11", type: "typing", question: "Riemann sum uses:", correctAnswer: "rectangles", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q12", type: "typing", question: "Midpoint rule uses:", correctAnswer: "midpoint height", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q13", type: "typing", question: "Δx = (b-a)/n, for [0,4] n=4:", correctAnswer: "1", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q14", type: "typing", question: "Δx = (b-a)/n, for [0,2] n=4:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q15", type: "typing", question: "Δx = (b-a)/n, for [1,3] n=4:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 4},
        {id: "u7_l5_q16", type: "typing", question: "Trapezoidal is more accurate than:", correctAnswer: "left/right Riemann", prompt: "Type your answer:", xp: 5},
        {id: "u7_l5_q17", type: "typing", question: "Simpson's is more accurate than:", correctAnswer: "trapezoidal", prompt: "Type your answer:", xp: 5}
      ]
    },
    "u7_l6": {
      id: "calc7_u7_l6",
      title: "Advanced Integration Review",
      icon: "calculus_icons/integral.png",
      xp: 96,
      difficulty: "advanced",
      questions: [
        {id: "u7_l6_q1", type: "multiple_choice", question: "∫x²·e^x dx requires parts:", options: ["0 times", "1 time", "2 times", "3 times"], correct: 2, explanation: "Apply parts twice", xp: 5},
        {id: "u7_l6_q2", type: "multiple_choice", question: "For √(a²-x²), use:", options: ["x = a·tan(θ)", "x = a·sec(θ)", "x = a·sin(θ)", "x = a·cos(θ)"], correct: 2, explanation: "x = a·sin(θ)", xp: 5},
        {id: "u7_l6_q3", type: "multiple_choice", question: "\\(\\int_1^\\infty \\frac{1}{x^2} dx\\) =", options: ["0", "1", "∞", "Divergent"], correct: 1, explanation: "Converges to 1", xp: 6},
        {id: "u7_l6_q4", type: "multiple_choice", question: "Simpson's rule uses:", options: ["Rectangles", "Trapezoids", "Parabolas", "Lines"], correct: 2, explanation: "Parabolic approximation", xp: 4},
        {id: "u7_l6_q5", type: "multiple_choice", question: "\\(\\frac{1}{x^2-1}\\) decomposes to:", options: ["\\(\\frac{1}{x+1} + \\frac{1}{x-1}\\)", "\\(\\frac{1}{2}(\\frac{1}{x-1} - \\frac{1}{x+1})\\)", "\\(\\frac{2}{x+1}\\)", "\\(\\frac{1}{x+1} - \\frac{1}{x-1}\\)"], correct: 1, explanation: "Partial fractions: 1/(2(x-1)) - 1/(2(x+1))", xp: 6},
        {id: "u7_l6_q6", type: "typing", question: "Find ∫x²·e^x dx:", correctAnswer: "x^2e^x-2xe^x+2e^x", prompt: "Type your answer:", xp: 6},
        {id: "u7_l6_q7", type: "typing", question: "Find ∫x·sin(x) dx:", correctAnswer: "-xcos(x)+sin(x)", prompt: "Type your answer:", xp: 6},
        {id: "u7_l6_q8", type: "typing", question: "For √(4-x²), use:", correctAnswer: "x=2sin(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l6_q9", type: "typing", question: "For √(9+x²), use:", correctAnswer: "x=3tan(theta)", prompt: "Type your answer:", xp: 5},
        {id: "u7_l6_q10", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-1}\\) dx:", correctAnswer: "(1/2)ln|x-1|-(1/2)ln|x+1|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l6_q11", type: "typing", question: "Find \\(\\int_1^\\infty \\frac{1}{x^2}\\) dx:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u7_l6_q12", type: "typing", question: "Find \\(\\int_0^1 \\frac{1}{\\sqrt{x}}\\) dx:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u7_l6_q13", type: "typing", question: "Simpson's needs:", correctAnswer: "even n", prompt: "Type your answer:", xp: 5},
        {id: "u7_l6_q14", type: "typing", question: "Find ∫e^x·sin(x) dx:", correctAnswer: "(e^x/2)(sin(x)-cos(x))", prompt: "Type your answer:", xp: 7},
        {id: "u7_l6_q15", type: "typing", question: "Find ∫\\(\\frac{1}{x^2-4}\\) dx:", correctAnswer: "(1/4)ln|x-2|-(1/4)ln|x+2|", prompt: "Type your answer:", xp: 7},
        {id: "u7_l6_q16", type: "typing", question: "Find \\(\\int_0^\\infty e^{-x}\\) dx:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u7_l6_q17", type: "typing", question: "Trapezoidal uses:", correctAnswer: "trapezoids", prompt: "Type your answer:", xp: 4}
      ]
    }
  }
};

// ============================================================================
// UNIT 8: APPLICATIONS OF INTEGRATION II
// ============================================================================
const CalculusUnit8Database = {
  unit: "Calculus Unit 8",
  title: "Applications of Integration II",
  lessons: {
    "u8_l1": {
      id: "calc8_u8_l1",
      title: "Work",
      icon: "calculus_icons/integral.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        {id: "u8_l1_q1", type: "multiple_choice", question: "Work = force ×:", options: ["Time", "Distance", "Velocity", "Acceleration"], correct: 1, explanation: "W = F·d", xp: 4},
        {id: "u8_l1_q2", type: "multiple_choice", question: "If force is variable, work =", options: ["F·d", "∫F dx", "∫F dt", "F/d"], correct: 1, explanation: "Work = ∫ F(x) dx", xp: 5},
        {id: "u8_l1_q3", type: "multiple_choice", question: "Lifting a 10N weight 5m requires:", options: ["2J", "5J", "10J", "50J"], correct: 3, explanation: "W = F·d = 10·5 = 50 J", xp: 5},
        {id: "u8_l1_q4", type: "multiple_choice", question: "Spring force (Hooke's Law): F =", options: ["k", "kx", "x/k", "k/x"], correct: 1, explanation: "F = kx", xp: 5},
        {id: "u8_l1_q5", type: "multiple_choice", question: "Work to stretch spring from x=a to x=b:", options: ["k(b-a)", "k(b²-a²)", "k(b²-a²)/2", "kb²"], correct: 2, explanation: "∫ₐᵇ kx dx = k(b²-a²)/2", xp: 6},
        {id: "u8_l1_q6", type: "typing", question: "Find work: 5N force over 3m:", correctAnswer: "15", prompt: "Type your answer:", xp: 4},
        {id: "u8_l1_q7", type: "typing", question: "Find work: 10N over 2m:", correctAnswer: "20", prompt: "Type your answer:", xp: 4},
        {id: "u8_l1_q8", type: "typing", question: "If F=2x, work from 0 to 2:", correctAnswer: "4", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q9", type: "typing", question: "If F=3x, work from 0 to 1:", correctAnswer: "1.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q10", type: "typing", question: "Spring k=5, work from 0 to 2:", correctAnswer: "10", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q11", type: "typing", question: "Spring k=10, work from 1 to 2:", correctAnswer: "15", prompt: "Type your answer:", xp: 6},
        {id: "u8_l1_q12", type: "typing", question: "If F=x², work from 0 to 1:", correctAnswer: "1/3", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q13", type: "typing", question: "If F=4x, work from 0 to 3:", correctAnswer: "18", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q14", type: "typing", question: "Spring k=2, work from 0 to 3:", correctAnswer: "9", prompt: "Type your answer:", xp: 5},
        {id: "u8_l1_q15", type: "typing", question: "If F=5, work from 0 to 2:", correctAnswer: "10", prompt: "Type your answer:", xp: 4},
        {id: "u8_l1_q16", type: "typing", question: "Work unit:", correctAnswer: "Joule", prompt: "Type your answer:", xp: 4},
        {id: "u8_l1_q17", type: "typing", question: "Variable force work formula:", correctAnswer: "integral of F dx", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u8_l2": {
      id: "calc8_u8_l2",
      title: "Hydrostatic Force",
      icon: "calculus_icons/integral.png",
      xp: 93,
      difficulty: "advanced",
      questions: [
        {id: "u8_l2_q1", type: "multiple_choice", question: "Fluid pressure =", options: ["ρg", "ρgh", "ρ", "gh"], correct: 1, explanation: "Pressure = ρgh (density × gravity × depth)", xp: 5},
        {id: "u8_l2_q2", type: "multiple_choice", question: "Hydrostatic force =", options: ["P·A", "∫P dA", "∫P dx", "P/h"], correct: 1, explanation: "Force = ∫ Pressure dA", xp: 5},
        {id: "u8_l2_q3", type: "multiple_choice", question: "For water (ρ=1000, g=9.8), P at depth h:", options: ["1000h", "9800h", "98h", "9.8h"], correct: 1, explanation: "P = 1000·9.8·h = 9800h", xp: 6},
        {id: "u8_l2_q4", type: "multiple_choice", question: "Force on a vertical plate:", options: ["P·width", "∫P(width dy)", "P·area", "∫P dy"], correct: 1, explanation: "Integrate pressure over plate area", xp: 6},
        {id: "u8_l2_q5", type: "multiple_choice", question: "At depth 2m in water, pressure is:", options: ["2000 Pa", "9800 Pa", "19600 Pa", "4900 Pa"], correct: 2, explanation: "P = 9800·2 = 19600 Pa", xp: 6},
        {id: "u8_l2_q6", type: "typing", question: "At depth 1m in water, pressure (Pa):", correctAnswer: "9800", prompt: "Type your answer:", xp: 5},
        {id: "u8_l2_q7", type: "typing", question: "At depth 3m in water, pressure (Pa):", correctAnswer: "29400", prompt: "Type your answer:", xp: 6},
        {id: "u8_l2_q8", type: "typing", question: "Pressure formula:", correctAnswer: "rgh", prompt: "Type your answer:", xp: 5},
        {id: "u8_l2_q9", type: "typing", question: "Force formula:", correctAnswer: "integral of P dA", prompt: "Type your answer:", xp: 6},
        {id: "u8_l2_q10", type: "typing", question: "At depth 0.5m in water, pressure (Pa):", correctAnswer: "4900", prompt: "Type your answer:", xp: 5},
        {id: "u8_l2_q11", type: "typing", question: "At depth 5m in water, pressure (Pa):", correctAnswer: "49000", prompt: "Type your answer:", xp: 6},
        {id: "u8_l2_q12", type: "typing", question: "If ρ=1000, g=9.8, h=2:", correctAnswer: "19600", prompt: "Type your answer:", xp: 6},
        {id: "u8_l2_q13", type: "typing", question: "If ρ=1000, g=9.8, h=4:", correctAnswer: "39200", prompt: "Type your answer:", xp: 6},
        {id: "u8_l2_q14", type: "typing", question: "Water density (kg/m³):", correctAnswer: "1000", prompt: "Type your answer:", xp: 4},
        {id: "u8_l2_q15", type: "typing", question: "Gravity (m/s²):", correctAnswer: "9.8", prompt: "Type your answer:", xp: 4},
        {id: "u8_l2_q16", type: "typing", question: "Pressure unit:", correctAnswer: "Pascal", prompt: "Type your answer:", xp: 4},
        {id: "u8_l2_q17", type: "typing", question: "Hydrostatic force formula:", correctAnswer: "integral of rho*g*h*dA", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u8_l3": {
      id: "calc8_u8_l3",
      title: "Center of Mass",
      icon: "calculus_icons/integral.png",
      xp: 93,
      difficulty: "advanced",
      questions: [
        {id: "u8_l3_q1", type: "multiple_choice", question: "x-coordinate of center of mass:", options: ["∫x dx", "∫xρ dV / ∫ρ dV", "∫ρ dx / ∫x dx", "x/ρ"], correct: 1, explanation: "x̄ = ∫xρ dV / ∫ρ dV", xp: 6},
        {id: "u8_l3_q2", type: "multiple_choice", question: "For uniform density, x̄ =", options: ["∫xρ / ∫ρ", "∫x dx / ∫dx", "x", "∫x dx"], correct: 1, explanation: "x̄ = ∫x dx / ∫dx = ∫x dx / length", xp: 6},
        {id: "u8_l3_q3", type: "multiple_choice", question: "y-coordinate of center of mass:", options: ["∫y dx", "∫yρ dV / ∫ρ dV", "y", "∫ρ dy"], correct: 1, explanation: "ȳ = ∫yρ dV / ∫ρ dV", xp: 6},
        {id: "u8_l3_q4", type: "multiple_choice", question: "Center of mass of [0,2] on x-axis:", options: ["0", "1", "2", "4"], correct: 1, explanation: "∫₀² x dx / 2 = 2/2 = 1", xp: 6},
        {id: "u8_l3_q5", type: "multiple_choice", question: "Centroid of triangle (0,0), (2,0), (0,2):", options: ["(1,1)", "(2/3, 2/3)", "(1,0)", "(0,1)"], correct: 1, explanation: "Centroid of triangle is at 1/3 from each side", xp: 7},
        {id: "u8_l3_q6", type: "typing", question: "Center of mass of [0,3]:", correctAnswer: "1.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q7", type: "typing", question: "Center of mass of [0,4]:", correctAnswer: "2", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q8", type: "typing", question: "Center of mass of [-1,1]:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q9", type: "typing", question: "x̄ formula (uniform):", correctAnswer: "integral of x dx / integral of dx", prompt: "Type your answer:", xp: 7},
        {id: "u8_l3_q10", type: "typing", question: "Center of mass of [1,3]:", correctAnswer: "2", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q11", type: "typing", question: "Center of mass of [0,6]:", correctAnswer: "3", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q12", type: "typing", question: "Center of mass of [-2,2]:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q13", type: "typing", question: "For uniform rod, x̄ is at:", correctAnswer: "midpoint", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q14", type: "typing", question: "Centroid of square [0,1]×[0,1]:", correctAnswer: "(0.5,0.5)", prompt: "Type your answer:", xp: 6},
        {id: "u8_l3_q15", type: "typing", question: "x̄ of [0,2]:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q16", type: "typing", question: "ȳ of [0,2] on y-axis:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l3_q17", type: "typing", question: "Center of mass formula:", correctAnswer: "integral of x*dm / integral of dm", prompt: "Type your answer:", xp: 7}
      ]
    },
    "u8_l4": {
      id: "calc8_u8_l4",
      title: "Probability Applications",
      icon: "calculus_icons/integral.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        {id: "u8_l4_q1", type: "multiple_choice", question: "Probability density function f(x) must satisfy:", options: ["∫f(x) = 0", "∫f(x) = 1", "∫f(x) = -1", "f(x) > 0"], correct: 1, explanation: "Total probability = 1", xp: 5},
        {id: "u8_l4_q2", type: "multiple_choice", question: "Expected value E[X] =", options: ["∫f(x) dx", "∫x·f(x) dx", "∫x²·f(x) dx", "∫|x|·f(x) dx"], correct: 1, explanation: "E[X] = ∫ x·f(x) dx", xp: 6},
        {id: "u8_l4_q3", type: "multiple_choice", question: "Probability P(a ≤ X ≤ b) =", options: ["f(b)-f(a)", "∫ₐᵇ f(x) dx", "f(b)+f(a)", "∫ₐᵇ x dx"], correct: 1, explanation: "Integrate PDF from a to b", xp: 6},
        {id: "u8_l4_q4", type: "multiple_choice", question: "Variance Var(X) =", options: ["E[X]", "E[X²] - (E[X])²", "E[X²]", "(E[X])²"], correct: 1, explanation: "Var(X) = E[X²] - (E[X])²", xp: 6},
        {id: "u8_l4_q5", type: "multiple_choice", question: "For uniform on [0,1], f(x) =", options: ["0", "1", "x", "1/x"], correct: 1, explanation: "Uniform: f(x) = 1 on [0,1]", xp: 5},
        {id: "u8_l4_q6", type: "typing", question: "E[X] for uniform [0,1]:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q7", type: "typing", question: "E[X] for uniform [0,2]:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q8", type: "typing", question: "P(0 ≤ X ≤ 0.5) for uniform [0,1]:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q9", type: "typing", question: "PDF condition:", correctAnswer: "integral equals 1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q10", type: "typing", question: "Expected value formula:", correctAnswer: "integral of x*f(x)", prompt: "Type your answer:", xp: 6},
        {id: "u8_l4_q11", type: "typing", question: "Variance formula:", correctAnswer: "E[X^2]-(E[X])^2", prompt: "Type your answer:", xp: 6},
        {id: "u8_l4_q12", type: "typing", question: "Probability formula:", correctAnswer: "integral of f(x) from a to b", prompt: "Type your answer:", xp: 6},
        {id: "u8_l4_q13", type: "typing", question: "For uniform [0,1], f(x) =", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q14", type: "typing", question: "For uniform [a,b], f(x) =", correctAnswer: "1/(b-a)", prompt: "Type your answer:", xp: 6},
        {id: "u8_l4_q15", type: "typing", question: "E[X] for uniform [a,b]:", correctAnswer: "(a+b)/2", prompt: "Type your answer:", xp: 6},
        {id: "u8_l4_q16", type: "typing", question: "PDF stands for:", correctAnswer: "probability density function", prompt: "Type your answer:", xp: 5},
        {id: "u8_l4_q17", type: "typing", question: "E[X] is the:", correctAnswer: "mean", prompt: "Type your answer:", xp: 4}
      ]
    },
    "u8_l5": {
      id: "calc8_u8_l5",
      title: "Applications II Review",
      icon: "calculus_icons/integral.png",
      xp: 94,
      difficulty: "advanced",
      questions: [
        {id: "u8_l5_q1", type: "multiple_choice", question: "Work =", options: ["F/t", "F·d", "F/d", "F+t"], correct: 1, explanation: "Work = Force × Distance", xp: 4},
        {id: "u8_l5_q2", type: "multiple_choice", question: "Pressure =", options: ["ρ", "ρg", "ρgh", "gh"], correct: 2, explanation: "P = ρgh", xp: 5},
        {id: "u8_l5_q3", type: "multiple_choice", question: "x̄ =", options: ["∫x dx", "∫xρ / ∫ρ", "x", "∫ρ dx"], correct: 1, explanation: "x̄ = ∫xρ dV / ∫ρ dV", xp: 6},
        {id: "u8_l5_q4", type: "multiple_choice", question: "PDF condition:", options: ["∫f = 0", "∫f = 1", "f = 1", "f = 0"], correct: 1, explanation: "∫ f(x) dx = 1", xp: 5},
        {id: "u8_l5_q5", type: "multiple_choice", question: "E[X] =", options: ["∫f", "∫x·f", "∫x²·f", "∫x"], correct: 1, explanation: "E[X] = ∫ x·f(x) dx", xp: 6},
        {id: "u8_l5_q6", type: "typing", question: "Find work: 10N over 5m:", correctAnswer: "50", prompt: "Type your answer:", xp: 4},
        {id: "u8_l5_q7", type: "typing", question: "If F=kx, k=5, work from 0 to 2:", correctAnswer: "10", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q8", type: "typing", question: "At depth 2m in water, pressure (Pa):", correctAnswer: "19600", prompt: "Type your answer:", xp: 6},
        {id: "u8_l5_q9", type: "typing", question: "Center of mass of [0,2]:", correctAnswer: "1", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q10", type: "typing", question: "E[X] for uniform [0,1]:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q11", type: "typing", question: "Probability P(0≤X≤0.5) uniform [0,1]:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q12", type: "typing", question: "If F=2x, work from 0 to 2:", correctAnswer: "4", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q13", type: "typing", question: "x̄ formula (uniform):", correctAnswer: "integral of x dx / length", prompt: "Type your answer:", xp: 7},
        {id: "u8_l5_q14", type: "typing", question: "Variance formula:", correctAnswer: "E[X^2]-(E[X])^2", prompt: "Type your answer:", xp: 6},
        {id: "u8_l5_q15", type: "typing", question: "Spring k=3, work from 0 to 2:", correctAnswer: "6", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q16", type: "typing", question: "For uniform [0,2], f(x) =", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u8_l5_q17", type: "typing", question: "Pressure formula:", correctAnswer: "rgh", prompt: "Type your answer:", xp: 5}
      ]
    }
  }
};

// ============================================================================
// UNIT 9: SEQUENCES
// ============================================================================
const CalculusUnit9Database = {
  unit: "Calculus Unit 9",
  title: "Sequences",
  lessons: {
    "u9_l1": {
      id: "calc9_u9_l1",
      title: "Introduction to Sequences",
      icon: "calculus_icons/integral.png",
      xp: 88,
      difficulty: "basic",
      questions: [
        {id: "u9_l1_q1", type: "multiple_choice", question: "A sequence is:", options: ["A continuous function", "An ordered list of numbers", "A single number", "A graph"], correct: 1, explanation: "A sequence is an ordered list: a₁, a₂, a₃, ...", xp: 4},
        {id: "u9_l1_q2", type: "multiple_choice", question: "The nth term of sequence a_n = n² is:", options: ["n", "n²", "2n", "n³"], correct: 1, explanation: "a_n = n²", xp: 4},
        {id: "u9_l1_q3", type: "multiple_choice", question: "For a_n = n+1, a_5 =", options: ["5", "6", "7", "4"], correct: 1, explanation: "a₅ = 5 + 1 = 6", xp: 4},
        {id: "u9_l1_q4", type: "multiple_choice", question: "For a_n = 2n, a_3 =", options: ["2", "3", "6", "9"], correct: 2, explanation: "a₃ = 2·3 = 6", xp: 4},
        {id: "u9_l1_q5", type: "multiple_choice", question: "For a_n = n², a_4 =", options: ["4", "8", "16", "2"], correct: 2, explanation: "a₄ = 4² = 16", xp: 4},
        {id: "u9_l1_q6", type: "typing", question: "Find a_5 for a_n = n:", correctAnswer: "5", prompt: "Type your answer:", xp: 4},
        {id: "u9_l1_q7", type: "typing", question: "Find a_5 for a_n = 2n:", correctAnswer: "10", prompt: "Type your answer:", xp: 4},
        {id: "u9_l1_q8", type: "typing", question: "Find a_3 for a_n = n²:", correctAnswer: "9", prompt: "Type your answer:", xp: 4},
        {id: "u9_l1_q9", type: "typing", question: "Find a_4 for a_n = n+1:", correctAnswer: "5", prompt: "Type your answer:", xp: 4},
        {id: "u9_l1_q10", type: "typing", question: "Find a_6 for a_n = n²:", correctAnswer: "36", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q11", type: "typing", question: "Find a_3 for a_n = 2n+1:", correctAnswer: "7", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q12", type: "typing", question: "Find a_4 for a_n = 3n:", correctAnswer: "12", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q13", type: "typing", question: "Find a_5 for a_n = n-1:", correctAnswer: "4", prompt: "Type your answer:", xp: 4},
        {id: "u9_l1_q14", type: "typing", question: "Find a_2 for a_n = n³:", correctAnswer: "8", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q15", type: "typing", question: "Find a_3 for a_n = n/2:", correctAnswer: "1.5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q16", type: "typing", question: "Find a_4 for a_n = 2^n:", correctAnswer: "16", prompt: "Type your answer:", xp: 5},
        {id: "u9_l1_q17", type: "typing", question: "Find a_3 for a_n = (-1)^n:", correctAnswer: "-1", prompt: "Type your answer:", xp: 5}
      ]
    },
    "u9_l2": {
      id: "calc9_u9_l2",
      title: "Sequence Limits",
      icon: "calculus_icons/integral.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        {id: "u9_l2_q1", type: "multiple_choice", question: "lim(n→∞) 1/n =", options: ["∞", "1", "0", "Undefined"], correct: 2, explanation: "As n→∞, 1/n → 0", xp: 5},
        {id: "u9_l2_q2", type: "multiple_choice", question: "lim(n→∞) n =", options: ["0", "1", "∞", "Undefined"], correct: 2, explanation: "As n→∞, n → ∞", xp: 5},
        {id: "u9_l2_q3", type: "multiple_choice", question: "lim(n→∞) (n+1)/n =", options: ["0", "1", "∞", "Undefined"], correct: 1, explanation: "(n+1)/n = 1 + 1/n → 1", xp: 6},
        {id: "u9_l2_q4", type: "multiple_choice", question: "lim(n→∞) 1/n² =", options: ["0", "1", "∞", "Undefined"], correct: 0, explanation: "1/n² → 0", xp: 5},
        {id: "u9_l2_q5", type: "multiple_choice", question: "lim(n→∞) 2^n =", options: ["0", "1", "2", "∞"], correct: 3, explanation: "2^n → ∞", xp: 5},
        {id: "u9_l2_q6", type: "typing", question: "Find lim(n→∞) 1/n:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q7", type: "typing", question: "Find lim(n→∞) n:", correctAnswer: "infinity", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q8", type: "typing", question: "Find lim(n→∞) (2n+1)/n:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
        {id: "u9_l2_q9", type: "typing", question: "Find lim(n→∞) 1/√n:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q10", type: "typing", question: "Find lim(n→∞) (n+2)/n:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u9_l2_q11", type: "typing", question: "Find lim(n→∞) 3/n:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q12", type: "typing", question: "Find lim(n→∞) (n²+1)/n²:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u9_l2_q13", type: "typing", question: "Find lim(n→∞) 10/n:", correctAnswer: "0", prompt: "Type your answer:", fprompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q14", type: "typing", question: "Find lim(n→∞) (n-1)/n:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u9_l2_q15", type: "typing", question: "Find lim(n→∞) 1/(n+1):", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q16", type: "typing", question: "Find lim(n→∞) n/2:", correctAnswer: "infinity", prompt: "Type your answer:", xp: 5},
        {id: "u9_l2_q17", type: "typing", question: "Find lim(n→∞) (3n)/(2n):", correctAnswer: "1.5", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u9_l3": {
      id: "calc9_u9_l3",
      title: "Arithmetic Sequences",
      icon: "calculus_icons/integral.png",
      xp: 89,
      difficulty: "intermediate",
      questions: [
        {id: "u9_l3_q1", type: "multiple_choice", question: "Arithmetic sequence formula:", options: ["a_n = a₁·r^(n-1)", "a_n = a₁ + (n-1)d", "a_n = a₁ + d", "a_n = a₁·n"], correct: 1, explanation: "a_n = a₁ + (n-1)d", xp: 5},
        {id: "u9_l3_q2", type: "multiple_choice", question: "For arithmetic: 2, 5, 8, 11, the common difference d =", options: ["2", "3", "5", "8"], correct: 1, explanation: "5-2 = 3, 8-5 = 3, d=3", xp: 5},
        {id: "u9_l3_q3", type: "multiple_choice", question: "For arithmetic: 1, 4, 7, 10, a_10 =", options: ["25", "28", "30", "31"], correct: 1, explanation: "a₁₀ = 1 + 9·3 = 28", xp: 6},
        {id: "u9_l3_q4", type: "multiple_choice", question: "Sum of arithmetic: S_n =", options: ["n·a₁", "n(a₁ + a_n)/2", "n·d", "n²"], correct: 1, explanation: "S_n = n(a₁ + a_n)/2", xp: 6},
        {id: "u9_l3_q5", type: "multiple_choice", question: "Sum of 1, 2, 3, ..., 100:", options: ["5000", "5050", "5100", "5500"], correct: 1, explanation: "S₁₀₀ = 100(1+100)/2 = 5050", xp: 6},
        {id: "u9_l3_q6", type: "typing", question: "Find d for: 3, 7, 11, 15:", correctAnswer: "4", prompt: "Type your answer:", xp: 5},
        {id: "u9_l3_q7", type: "typing", question: "Find d for: 5, 10, 15, 20:", correctAnswer: "5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l3_q8", type: "typing", question: "Find a_5 for: 2, 5, 8, 11:", correctAnswer: "14", prompt: "Type your answer:", xp: 5},
        {id: "u9_l3_q9", type: "typing", question: "Find a_10 for: 3, 7, 11, 15:", correctAnswer: "39", prompt: "Type your answer:", xp: 6},
        {id: "u9_l3_q10", type: "typing", question: "Sum of 1 to 10:", correctAnswer: "55", prompt: "Type your answer:", xp: 5},
        {id: "u9_l3_q11", type: "typing", question: "Sum of 1 to 20:", correctAnswer: "210", prompt: "Type your answer:", xp: 6},
        {id: "u9_l3_q12", type: "typing", question: "Arithmetic formula:", correctAnswer: "a_n = a_1 + (n-1)d", prompt: "Type your answer:", xp: 6},
        {id: "u9_l3_q13", type: "typing", question: "Sum formula:", correctAnswer: "n(a_1+a_n)/2", prompt: "Type your answer:", xp: 6},
        {id: "u9_l3_q14", type: "typing", question: "Find a_8 for: 4, 8, 12, 16:", correctAnswer: "32", prompt: "Type your answer:", xp: 6},
        {id: "u9_l3_q15", type: "typing", question: "Sum of 2, 4, 6, ..., 20:", correctAnswer: "110", prompt: "Type your answer:", xp: 7},
        {id: "u9_l3_q16", type: "typing", question: "Find d for: 10, 15, 20, 25:", correctAnswer: "5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l3_q17", type: "typing", question: "Find a_6 for: 1, 3, 5, 7:", correctAnswer: "11", prompt: "Type your answer:", xp: 5}
      ]
    },
    "u9_l4": {
      id: "calc9_u9_l4",
      title: "Geometric Sequences",
      icon: "calculus_icons/integral.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        {id: "u9_l4_q1", type: "multiple_choice", question: "Geometric sequence formula:", options: ["a_n = a₁ + (n-1)d", "a_n = a₁·r^(n-1)", "a_n = a₁·r", "a_n = a₁·n"], correct: 1, explanation: "a_n = a₁·r^(n-1)", xp: 5},
        {id: "u9_l4_q2", type: "multiple_choice", question: "For geometric: 2, 6, 18, 54, the common ratio r =", options: ["2", "3", "6", "9"], correct: 1, explanation: "6/2 = 3, 18/6 = 3, r=3", xp: 5},
        {id: "u9_l4_q3", type: "multiple_choice", question: "For geometric: 1, 2, 4, 8, a_5 =", options: ["12", "14", "16", "18"], correct: 2, explanation: "a₅ = 1·2^4 = 16", xp: 6},
        {id: "u9_l4_q4", type: "multiple_choice", question: "Finite geometric sum: S_n =", options: ["a₁(1-r)", "a₁(1-r^n)/(1-r)", "a₁·n", "a₁·r^n"], correct: 1, explanation: "S_n = a₁(1-r^n)/(1-r)", xp: 6},
        {id: "u9_l4_q5", type: "multiple_choice", question: "Infinite geometric sum (|r|<1): S =", options: ["a₁/(1-r)", "a₁·r", "a₁·(1-r)", "∞"], correct: 0, explanation: "S = a₁/(1-r)", xp: 6},
        {id: "u9_l4_q6", type: "typing", question: "Find r for: 3, 6, 12, 24:", correctAnswer: "2", prompt: "Type your answer:", xp: 5},
        {id: "u9_l4_q7", type: "typing", question: "Find r for: 2, 10, 50, 250:", correctAnswer: "5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l4_q8", type: "typing", question: "Find a_5 for: 2, 4, 8, 16:", correctAnswer: "32", prompt: "Type your answer:", xp: 5},
        {id: "u9_l4_q9", type: "typing", question: "Find a_6 for: 3, 9, 27, 81:", correctAnswer: "729", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q10", type: "typing", question: "Sum of 1, 2, 4, 8, 16:", correctAnswer: "31", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q11", type: "typing", question: "Sum of 3, 6, 12, 24, 48:", correctAnswer: "93", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q12", type: "typing", question: "Geometric formula:", correctAnswer: "a_n = a_1*r^(n-1)", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q13", type: "typing", question: "Finite sum formula:", correctAnswer: "a_1(1-r^n)/(1-r)", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q14", type: "typing", question: "Infinite sum formula (|r|<1):", correctAnswer: "a_1/(1-r)", prompt: "Type your answer:", xp: 6},
        {id: "u9_l4_q15", type: "typing", question: "Sum of 1/2, 1/4, 1/8, ... (infinite):", correctAnswer: "1", prompt: "Type your answer:", xp: 7},
        {id: "u9_l4_q16", type: "typing", question: "Find r for: 1, 0.5, 0.25, 0.125:", correctAnswer: "0.5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l4_q17", type: "typing", question: "Find a_4 for: 1, -1, 1, -1:", correctAnswer: "-1", prompt: "Type your answer:", xp: 6}
      ]
    },
    "u9_l5": {
      id: "calc9_u9_l5",
      title: "Sequences Review",
      icon: "calculus_icons/integral.png",
      xp: 91,
      difficulty: "intermediate",
      questions: [
        {id: "u9_l5_q1", type: "multiple_choice", question: "A sequence is:", options: ["Continuous", "Ordered list", "A function", "A graph"], correct: 1, explanation: "Ordered list of numbers", xp: 4},
        {id: "u9_l5_q2", type: "multiple_choice", question: "lim(n→∞) 1/n =", options: ["1", "0", "∞", "Undefined"], correct: 1, explanation: "1/n → 0", xp: 5},
        {id: "u9_l5_q3", type: "multiple_choice", question: "Arithmetic formula:", options: ["a_n = a₁·r^(n-1)", "a_n = a₁ + (n-1)d", "a_n = a₁ + d", "a_n = a₁·n"], correct: 1, explanation: "a_n = a₁ + (n-1)d", xp: 5},
        {id: "u9_l5_q4", type: "multiple_choice", question: "Geometric formula:", options: ["a_n = a₁ + (n-1)d", "a_n = a₁·r^(n-1)", "a_n = a₁·r", "a_n = a₁·n"], correct: 1, explanation: "a_n = a₁·r^(n-1)", xp: 5},
        {id: "u9_l5_q5", type: "multiple_choice", question: "Sum of 1, 2, 3, ..., 10:", options: ["45", "50", "55", "60"], correct: 2, explanation: "S₁₀ = 10(1+10)/2 = 55", xp: 6},
        {id: "u9_l5_q6", type: "typing", question: "Find a_5 for a_n = n+1:", correctAnswer: "6", prompt: "Type your answer:", xp: 4},
        {id: "u9_l5_q7", type: "typing", question: "Find lim(n→∞) 2/n:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
        {id: "u9_l5_q8", type: "typing", question: "Find d for: 5, 10, 15, 20:", correctAnswer: "5", prompt: "Type your answer:", xp: 5},
        {id: "u9_l5_q9", type: "typing", question: "Find r for: 2, 6, 18, 54:", correctAnswer: "3", prompt: "Type your answer:", xp: 5},
        {id: "u9_l5_q10", type: "typing", question: "Find a_5 for: 2, 4, 8, 16:", correctAnswer: "32", prompt: "Type your answer:", xp: 5},
        {id: "u9_l5_q11", type: "typing", question: "Find a_10 for: 3, 7, 11, 15:", correctAnswer: "39", prompt: "Type your answer:", xp: 6},
        {id: "u9_l5_q12", type: "typing", question: "Sum of 1 to 10:", correctAnswer: "55", prompt: "Type your answer:", xp: 5},
        {id: "u9_l5_q13", type: "typing", question: "Sum of 2, 4, 6, 8, 10:", correctAnswer: "30", prompt: "Type your answer:", xp: 6},
        {id: "u9_l5_q14", type: "typing", question: "Sum of 1, 2, 4, 8, 16:", correctAnswer: "31", prompt: "Type your answer:", xp: 6},
        {id: "u9_l5_q15", type: "typing", question: "Find lim(n→∞) (n+1)/n:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
        {id: "u9_l5_q16", type: "typing", question: "Find a_4 for: 1, -1, 1, -1:", correctAnswer: "-1", prompt: "Type your answer:", xp: 6},
        {id: "u9_l5_q17", type: "typing", question: "Infinite sum: 1/2 + 1/4 + 1/8 + ...", correctAnswer: "1", prompt: "Type your answer:", xp: 7}
      ]
    }
  }
};

/**
 * Export the databases
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusUnit7Database, CalculusUnit8Database, CalculusUnit9Database };
} else {
  window.CalculusUnit7Database = CalculusUnit7Database;
  window.CalculusUnit8Database = CalculusUnit8Database;
  window.CalculusUnit9Database = CalculusUnit9Database;
}