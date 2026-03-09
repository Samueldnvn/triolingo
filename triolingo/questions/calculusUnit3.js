/**
 * QUESTION DATABASE - UNIT 3 CALCULUS (COMPLETE)
 * Database for Unit 3: Derivatives Applications - Complete with all lessons
 *
 * Structure:
 * - 6 lessons total
 * - 15-20 questions per lesson
 * - Majority typing questions (60-70%)
 * - Seaborn-style colored diagrams
 */

const CalculusUnit3Database = {
  unit: "Calculus Unit 3",
  title: "Derivatives Applications",
  lessons: {
    // ========================================================================
    // LESSON 1: Chain Rule (18 questions)
    // ========================================================================
    "u3_l1": {
      id: "calc3_u3_l1",
      title: "Chain Rule",
      icon: "calculus_icons/derivative.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u3_l1_q1",
          type: "multiple_choice",
          question: "What is the chain rule formula?",
          options: [
            "\\(\\frac{d}{dx}[f(g(x))] = f'(g(x))\\)",
            "\\(\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)\\)",
            "\\(\\frac{d}{dx}[f(g(x))] = f(x) \\cdot g'(x)\\)",
            "\\(\\frac{d}{dx}[f(g(x))] = f'(x) \\cdot g'(x)\\)"
          ],
          correct: 1,
          explanation: "Chain rule: \\(\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)\\)",
          xp: 4
        },
        {
          id: "u3_l1_q2",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[(x+1)^3] = \\)",
          options: ["3x²", "3(x+1)²", "3(x+1)² ✓", "x²"],
          correct: 2,
          explanation: "Chain rule: 3(x+1)² · 1 = 3(x+1)²",
          xp: 5
        },
        {
          id: "u3_l1_q3",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[(2x+1)^2] = \\)",
          options: ["2(2x+1)", "4(2x+1)", "4x+2", "2x"],
          correct: 1,
          explanation: "Chain rule: 2(2x+1) · 2 = 4(2x+1)",
          xp: 5
        },
        {
          id: "u3_l1_q4",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[\\sqrt{x+1}] = \\)",
          options: [
            "\\(\\frac{1}{2\\sqrt{x+1}}\\)",
            "\\(\\frac{1}{2\\sqrt{x}}\\)",
            "\\(\\frac{1}{2}x^{-1/2}\\)",
            "\\(\\sqrt{x+1}\\)"
          ],
          correct: 0,
          explanation: "Chain rule: \\(\\frac{1}{2}(x+1)^{-1/2} \\cdot 1 = \\frac{1}{2\\sqrt{x+1}}\\)",
          xp: 6
        },
        {
          id: "u3_l1_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[\\frac{1}{(x+1)^2}] = \\)",
          options: [
            "\\(\\frac{2}{(x+1)^3}\\)",
            "\\(-\\frac{2}{(x+1)^3}\\)",
            "\\(\\frac{1}{x+1}\\)",
            "\\(-\\frac{1}{(x+1)^2}\\)"
          ],
          correct: 1,
          explanation: "Chain rule: -2(x+1)^(-3) · 1 = \\(-\\frac{2}{(x+1)^3}\\)",
          xp: 6
        },
        {
          id: "u3_l1_q6",
          type: "multiple_choice",
          question: "For \\(f(g(x))\\), the chain rule says to:",
          options: [
            "Differentiate the inside only",
            "Differentiate the outside, leave inside, multiply by derivative of inside",
            "Differentiate both, then add",
            "Differentiate outside only"
          ],
          correct: 1,
          explanation: "Chain rule: f'(g(x)) · g'(x)",
          xp: 4
        },

        // Typing (12 - majority!)
        {
          id: "u3_l1_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+1)^2]\\):",
          correctAnswer: "2(x+1)",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l1_q8",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x+2)^3]\\):",
          correctAnswer: "3(x+2)^2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l1_q9",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(2x+1)^3]\\):",
          correctAnswer: "6(2x+1)^2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l1_q10",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[\\sqrt{x+4}]\\):",
          correctAnswer: "1/(2*sqrt(x+4))",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l1_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x^2+1)^2]\\):",
          correctAnswer: "4x(x^2+1)",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l1_q12",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(3x-1)^4]\\):",
          correctAnswer: "12(3x-1)^3",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l1_q13",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[\\frac{1}{x+1}]\\):",
          correctAnswer: "-1/(x+1)^2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l1_q14",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x^2+2x)^2]\\):",
          correctAnswer: "2(2x+2)(x^2+2x)",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l1_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(2x^2+1)^3]\\):",
          correctAnswer: "12x(2x^2+1)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l1_q16",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[\\sqrt{2x+1}]\\):",
          correctAnswer: "1/sqrt(2x+1)",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l1_q17",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x^3+1)^2]\\):",
          correctAnswer: "6x^2(x^3+1)",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l1_q18",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(4x+3)^5]\\):",
          correctAnswer: "20(4x+3)^4",
          prompt: "Type your answer:",
          xp: 7
        }
      ]
    },

    // ========================================================================
    // LESSON 2: Implicit Differentiation (17 questions)
    // ========================================================================
    "u3_l2": {
      id: "calc3_u3_l2",
      title: "Implicit Differentiation",
      icon: "calculus_icons/derivative.png",
      xp: 88,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (5)
        {
          id: "u3_l2_q1",
          type: "multiple_choice",
          question: "For \\(x^2 + y^2 = 25\\), what is \\(\\frac{dy}{dx}\\)?",
          options: [
            "\\(\\frac{x}{y}\\)",
            "\\(-\\frac{x}{y}\\)",
            "\\(\\frac{y}{x}\\)",
            "\\(-\\frac{y}{x}\\)"
          ],
          correct: 1,
          explanation: "Differentiate: 2x + 2y·y' = 0, so y' = -x/y",
          xp: 6
        },
        {
          id: "u3_l2_q2",
          type: "multiple_choice",
          question: "Implicit differentiation is used when:",
          options: [
            "y is explicitly solved for x",
            "y is not isolated (y appears with x)",
            "We only have constants",
            "We have a linear equation"
          ],
          correct: 1,
          explanation: "Implicit differentiation is used when y is not isolated.",
          xp: 4
        },
        {
          id: "u3_l2_q3",
          type: "multiple_choice",
          question: "When differentiating y² with respect to x, we get:",
          options: [
            "2y",
            "2y'",
            "2y·y'",
            "2x"
          ],
          correct: 2,
          explanation: "Chain rule: d/dx(y²) = 2y · dy/dx = 2y·y'",
          xp: 5
        },
        {
          id: "u3_l2_q4",
          type: "multiple_choice",
          question: "For \\(xy = 1\\), what is \\(\\frac{dy}{dx}\\)?",
          options: [
            "\\(\\frac{y}{x}\\)",
            "\\(-\\frac{y}{x}\\)",
            "\\(\\frac{x}{y}\\)",
            "\\(-\\frac{x}{y}\\)"
          ],
          correct: 1,
          explanation: "Product rule: x·y' + y·1 = 0, so y' = -y/x",
          xp: 6
        },
        {
          id: "u3_l2_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}(y^3) = \\)",
          options: ["3y²", "3y²·y'", "3x²", "y³"],
          correct: 1,
          explanation: "Chain rule: 3y² · y'",
          xp: 4
        },

        // Typing (12 - majority!)
        {
          id: "u3_l2_q6",
          type: "typing",
          question: "For \\(x^2 + y^2 = 9\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-x/y",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l2_q7",
          type: "typing",
          question: "For \\(x^3 + y^3 = 1\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-x^2/y^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l2_q8",
          type: "typing",
          question: "For \\(2x + 3y = 6\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-2/3",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l2_q9",
          type: "typing",
          question: "For \\(x^2 - y^2 = 1\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "x/y",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l2_q10",
          type: "typing",
          question: "For \\(x + y = 5\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-1",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l2_q11",
          type: "typing",
          question: "For \\(xy = 4\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-y/x",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l2_q12",
          type: "typing",
          question: "For \\(x^2 + 2y^2 = 3\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-x/(2y)",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l2_q13",
          type: "typing",
          question: "For \\(3x + y^2 = 4\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-3/(2y)",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l2_q14",
          type: "typing",
          question: "For \\(x^2 + y = 1\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-2x",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l2_q15",
          type: "typing",
          question: "For \\(x + 2y = 0\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-1/2",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l2_q16",
          type: "typing",
          question: "For \\(y^2 = 4x\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "2/y",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l2_q17",
          type: "typing",
          question: "For \\(x^2 = y^3\\), what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "(2x)/(3y^2)",
          prompt: "Type your answer:",
          xp: 7
        }
      ]
    },

    // ========================================================================
    // LESSON 3: Related Rates (17 questions)
    // ========================================================================
    "u3_l3": {
      id: "calc3_u3_l3",
      title: "Related Rates",
      icon: "calculus_icons/derivative.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (5)
        {
          id: "u3_l3_q1",
          type: "multiple_choice",
          question: "Related rates problems involve:",
          options: [
            "Multiple quantities changing over time",
            "Only constants",
            "Single variables",
            "No time dependence"
          ],
          correct: 0,
          explanation: "Related rates involve quantities that change with time and are related by an equation.",
          xp: 4
        },
        {
          id: "u3_l3_q2",
          type: "multiple_choice",
          question: "If \\(\\frac{dA}{dt} = 5\\) and A = x², then \\(\\frac{dx}{dt} = \\)",
          options: ["2.5/x", "5/x", "10x", "2x"],
          correct: 0,
          explanation: "dA/dt = 2x·dx/dt, so 5 = 2x·dx/dt, dx/dt = 5/(2x) = 2.5/x",
          xp: 6
        },
        {
          id: "u3_l3_q3",
          type: "multiple_choice",
          question: "The key step in related rates is:",
          options: [
            "Differentiate with respect to time (t)",
            "Differentiate with respect to x",
            "Solve for x",
            "Find the maximum"
          ],
          correct: 0,
          explanation: "Differentiate the related equation with respect to time.",
          xp: 4
        },
        {
          id: "u3_l3_q4",
          type: "multiple_choice",
          question: "If V = x³ and \\(\\frac{dV}{dt} = 6\\) when x = 2, then \\(\\frac{dx}{dt} = \\)",
          options: ["1/2", "1/4", "1", "2"],
          correct: 0,
          explanation: "dV/dt = 3x²·dx/dt, 6 = 3·4·dx/dt, dx/dt = 6/12 = 1/2",
          xp: 7
        },
        {
          id: "u3_l3_q5",
          type: "multiple_choice",
          question: "For a circle, A = πr². If r = 3 and \\(\\frac{dr}{dt} = 2\\), then \\(\\frac{dA}{dt} = \\)",
          options: ["6π", "12π", "18π", "36π"],
          correct: 1,
          explanation: "dA/dt = 2πr·dr/dt = 2π·3·2 = 12π",
          xp: 6
        },

        // Typing (12 - majority!)
        {
          id: "u3_l3_q6",
          type: "typing",
          question: "If y = x² and \\(\\frac{dx}{dt} = 3\\) when x = 2, what is \\(\\frac{dy}{dt}\\)?",
          correctAnswer: "12",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l3_q7",
          type: "typing",
          question: "If A = x² and \\(\\frac{dx}{dt} = 4\\) when x = 3, what is \\(\\frac{dA}{dt}\\)?",
          correctAnswer: "24",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l3_q8",
          type: "typing",
          question: "If y = 2x and \\(\\frac{dx}{dt} = 5\\), what is \\(\\frac{dy}{dt}\\)?",
          correctAnswer: "10",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l3_q9",
          type: "typing",
          question: "If V = x³ and \\(\\frac{dx}{dt} = 1\\) when x = 4, what is \\(\\frac{dV}{dt}\\)?",
          correctAnswer: "48",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l3_q10",
          type: "typing",
          question: "If s = 3t² and \\(\\frac{dt}{dt} = 1\\) when t = 2, what is \\(\\frac{ds}{dt}\\)?",
          correctAnswer: "12",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l3_q11",
          type: "typing",
          question: "If y = x³ and \\(\\frac{dx}{dt} = 2\\) when x = 1, what is \\(\\frac{dy}{dt}\\)?",
          correctAnswer: "6",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l3_q12",
          type: "typing",
          question: "If A = πr², r = 5, and \\(\\frac{dr}{dt} = 1\\), what is \\(\\frac{dA}{dt}\\)?",
          correctAnswer: "10pi",
          prompt: "Type your answer (use 'pi'):",
          xp: 7
        },
        {
          id: "u3_l3_q13",
          type: "typing",
          question: "If V = x³ and \\(\\frac{dV}{dt} = 27\\) when x = 3, what is \\(\\frac{dx}{dt}\\)?",
          correctAnswer: "1",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l3_q14",
          type: "typing",
          question: "If y = x² and \\(\\frac{dy}{dt} = 10\\) when x = 5, what is \\(\\frac{dx}{dt}\\)?",
          correctAnswer: "1",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l3_q15",
          type: "typing",
          question: "If A = 4x² and \\(\\frac{dx}{dt} = 3\\) when x = 2, what is \\(\\frac{dA}{dt}\\)?",
          correctAnswer: "48",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l3_q16",
          type: "typing",
          question: "If y = 5x and \\(\\frac{dx}{dt} = 2\\), what is \\(\\frac{dy}{dt}\\)?",
          correctAnswer: "10",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l3_q17",
          type: "typing",
          question: "If V = 2x³ and \\(\\frac{dx}{dt} = 1\\) when x = 2, what is \\(\\frac{dV}{dt}\\)?",
          correctAnswer: "24",
          prompt: "Type your answer:",
          xp: 6
        }
      ]
    },

    // ========================================================================
    // LESSON 4: Higher Order Derivatives (16 questions)
    // ========================================================================
    "u3_l4": {
      id: "calc3_u3_l4",
      title: "Higher Order Derivatives",
      icon: "calculus_icons/derivative.png",
      xp: 85,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (5)
        {
          id: "u3_l4_q1",
          type: "multiple_choice",
          question: "What is the second derivative notation?",
          options: [
            "f'(x)",
            "f''(x)",
            "f'''(x)",
            "f(x)"
          ],
          correct: 1,
          explanation: "f''(x) represents the second derivative (derivative of the derivative).",
          xp: 4
        },
        {
          id: "u3_l4_q2",
          type: "multiple_choice",
          question: "If f(x) = x³, then f''(x) =",
          options: ["6x", "3x²", "6", "x³"],
          correct: 0,
          explanation: "f'(x) = 3x², f''(x) = 6x",
          xp: 5
        },
        {
          id: "u3_l4_q3",
          type: "multiple_choice",
          question: "If f(x) = x², then f''(x) =",
          options: ["2x", "2", "x", "0"],
          correct: 1,
          explanation: "f'(x) = 2x, f''(x) = 2",
          xp: 4
        },
        {
          id: "u3_l4_q4",
          type: "multiple_choice",
          question: "If f(x) = 5x³ + 2x, then f''(x) =",
          options: ["15x² + 2", "30x", "30x + 2", "15x²"],
          correct: 1,
          explanation: "f'(x) = 15x² + 2, f''(x) = 30x",
          xp: 5
        },
        {
          id: "u3_l4_q5",
          type: "multiple_choice",
          question: "The third derivative is denoted as:",
          options: ["f'(x)", "f''(x)", "f'''(x)", "f''''(x)"],
          correct: 2,
          explanation: "f'''(x) is the third derivative notation.",
          xp: 4
        },

        // Typing (11 - majority!)
        {
          id: "u3_l4_q6",
          type: "typing",
          question: "Find f''(x) if f(x) = x⁴:",
          correctAnswer: "12x^2",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l4_q7",
          type: "typing",
          question: "Find f''(x) if f(x) = x⁵:",
          correctAnswer: "20x^3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q8",
          type: "typing",
          question: "Find f'''(x) if f(x) = x³:",
          correctAnswer: "6",
          prompt: "Type your answer:",
          xp: 5
        },
        {
          id: "u3_l4_q9",
          type: "typing",
          question: "Find f''(x) if f(x) = 3x² + 2x:",
          correctAnswer: "6",
          prompt: "Type your answer:",
          xp: 4
        },
        {
          id: "u3_l4_q10",
          type: "typing",
          question: "Find f'''(x) if f(x) = x⁴:",
          correctAnswer: "24x",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q11",
          type: "typing",
          question: "Find f''(x) if f(x) = x⁶:",
          correctAnswer: "30x^4",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q12",
          type: "typing",
          question: "Find f''(x) if f(x) = 2x³ + x²:",
          correctAnswer: "12x+2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q13",
          type: "typing",
          question: "Find f''(x) if f(x) = x³ + x² + x:",
          correctAnswer: "6x+2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q14",
          type: "typing",
          question: "Find f'''(x) if f(x) = x⁵:",
          correctAnswer: "60x^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l4_q15",
          type: "typing",
          question: "Find f''(x) if f(x) = 4x³ + 2x²:",
          correctAnswer: "24x+4",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l4_q16",
          type: "typing",
          question: "Find f''''(x) if f(x) = x⁴:",
          correctAnswer: "24",
          prompt: "Type your answer:",
          xp: 6
        }
      ]
    },

    // ========================================================================
    // LESSON 5: Optimization (17 questions)
    // ========================================================================
    "u3_l5": {
      id: "calc3_u3_l5",
      title: "Optimization",
      icon: "calculus_icons/derivative.png",
      xp: 92,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u3_l5_q1",
          type: "multiple_choice",
          question: "To find a maximum, we:",
          options: [
            "Set f'(x) = 0 and check if f''(x) < 0",
            "Set f'(x) = 0 and check if f''(x) > 0",
            "Set f(x) = 0",
            "Set f''(x) = 0"
          ],
          correct: 0,
          explanation: "Critical point at f'(x) = 0, maximum if f''(x) < 0 (concave down).",
          xp: 5
        },
        {
          id: "u3_l5_q2",
          type: "multiple_choice",
          question: "To find a minimum, we:",
          options: [
            "Set f'(x) = 0 and check if f''(x) < 0",
            "Set f'(x) = 0 and check if f''(x) > 0",
            "Set f(x) = 0",
            "Set f''(x) = 0"
          ],
          correct: 1,
          explanation: "Critical point at f'(x) = 0, minimum if f''(x) > 0 (concave up).",
          xp: 5
        },
        {
          id: "u3_l5_q3",
          type: "multiple_choice",
          question: "For f(x) = x² - 4x + 5, the minimum occurs at:",
          options: ["x = 0", "x = 2", "x = 4", "x = -2"],
          correct: 1,
          explanation: "f'(x) = 2x - 4 = 0, x = 2. f''(x) = 2 > 0, so minimum.",
          xp: 6
        },
        {
          id: "u3_l5_q4",
          type: "multiple_choice",
          question: "For f(x) = -x² + 4x - 3, the maximum occurs at:",
          options: ["x = 0", "x = 2", "x = -2", "x = 4"],
          correct: 1,
          explanation: "f'(x) = -2x + 4 = 0, x = 2. f''(x) = -2 < 0, so maximum.",
          xp: 6
        },
        {
          id: "u3_l5_q5",
          type: "multiple_choice",
          question: "Critical points occur where:",
          options: [
            "f(x) = 0",
            "f'(x) = 0 or f'(x) is undefined",
            "f''(x) = 0",
            "f(x) is maximum"
          ],
          correct: 1,
          explanation: "Critical points are where f'(x) = 0 or undefined.",
          xp: 4
        },
        {
          id: "u3_l5_q6",
          type: "multiple_choice",
          question: "If f'(x) = 3x² - 12x, the critical points are at:",
          options: ["x = 0 only", "x = 4 only", "x = 0, 4", "No critical points"],
          correct: 2,
          explanation: "3x² - 12x = 0, 3x(x - 4) = 0, x = 0 or x = 4",
          xp: 5
        },

        // Typing (11 - majority!)
        {
          id: "u3_l5_q7",
          type: "typing",
          question: "Find the critical point(s) of f(x) = x² - 6x + 5:",
          correctAnswer: "3",
          prompt: "Type the x-value where f'(x) = 0:",
          xp: 5
        },
        {
          id: "u3_l5_q8",
          type: "typing",
          question: "For f(x) = x² + 4x + 3, is x = -2 a max or min?",
          correctAnswer: "min",
          prompt: "Type 'max' or 'min':",
          xp: 6
        },
        {
          id: "u3_l5_q9",
          type: "typing",
          question: "For f(x) = -x² + 2x + 1, is x = 1 a max or min?",
          correctAnswer: "max",
          prompt: "Type 'max' or 'min':",
          xp: 6
        },
        {
          id: "u3_l5_q10",
          type: "typing",
          question: "Find the critical point(s) of f(x) = 2x² - 8x:",
          correctAnswer: "2",
          prompt: "Type the x-value:",
          xp: 5
        },
        {
          id: "u3_l5_q11",
          type: "typing",
          question: "For f(x) = x², is x = 0 a max or min?",
          correctAnswer: "min",
          prompt: "Type 'max' or 'min':",
          xp: 4
        },
        {
          id: "u3_l5_q12",
          type: "typing",
          question: "For f(x) = -x², is x = 0 a max or min?",
          correctAnswer: "max",
          prompt: "Type 'max' or 'min':",
          xp: 4
        },
        {
          id: "u3_l5_q13",
          type: "typing",
          question: "Find the critical point(s) of f(x) = x³ - 3x²:",
          correctAnswer: "0,2",
          prompt: "Type the x-values:",
          xp: 7
        },
        {
          id: "u3_l5_q14",
          type: "typing",
          question: "For f(x) = 3x² - 12x + 5, find the minimum value:",
          correctAnswer: "-7",
          prompt: "Type the minimum value:",
          xp: 7
        },
        {
          id: "u3_l5_q15",
          type: "typing",
          question: "For f(x) = -2x² + 8x - 3, find the maximum value:",
          correctAnswer: "5",
          prompt: "Type the maximum value:",
          xp: 7
        },
        {
          id: "u3_l5_q16",
          type: "typing",
          question: "Find the critical point(s) of f(x) = x² + 2x:",
          correctAnswer: "-1",
          prompt: "Type the x-value:",
          xp: 5
        },
        {
          id: "u3_l5_q17",
          type: "typing",
          question: "For f(x) = x² - 2x + 1, what is the minimum value?",
          correctAnswer: "0",
          prompt: "Type the minimum value:",
          xp: 6
        }
      ]
    },

    // ========================================================================
    // LESSON 6: Derivatives Applications Review (17 questions)
    // ========================================================================
    "u3_l6": {
      id: "calc3_u3_l6",
      title: "Derivatives Applications Review",
      icon: "calculus_icons/derivative.png",
      xp: 90,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice (6)
        {
          id: "u3_l6_q1",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[(x+1)^3] = \\)",
          options: ["3(x+1)²", "3x²", "x²", "3"],
          correct: 0,
          explanation: "Chain rule: 3(x+1)² · 1 = 3(x+1)²",
          xp: 5
        },
        {
          id: "u3_l6_q2",
          type: "multiple_choice",
          question: "For x² + y² = 9, \\(\\frac{dy}{dx} = \\)",
          options: ["x/y", "-x/y", "y/x", "-y/x"],
          correct: 1,
          explanation: "2x + 2y·y' = 0, y' = -x/y",
          xp: 6
        },
        {
          id: "u3_l6_q3",
          type: "multiple_choice",
          question: "If f(x) = x⁴, then f''(x) =",
          options: ["4x³", "12x²", "24x", "24"],
          correct: 1,
          explanation: "f'(x) = 4x³, f''(x) = 12x²",
          xp: 5
        },
        {
          id: "u3_l6_q4",
          type: "multiple_choice",
          question: "For f(x) = x² - 4x, the critical point is at:",
          options: ["x = 0", "x = 2", "x = 4", "x = -2"],
          correct: 1,
          explanation: "f'(x) = 2x - 4 = 0, x = 2",
          xp: 5
        },
        {
          id: "u3_l6_q5",
          type: "multiple_choice",
          question: "\\(\\frac{d}{dx}[\\sqrt{x+1}] = \\)",
          options: [
            "\\(\\frac{1}{2\\sqrt{x+1}}\\)",
            "\\(\\frac{1}{2\\sqrt{x}}\\)",
            "\\(\\frac{1}{\\sqrt{x+1}}\\)",
            "\\(\\frac{1}{2}x^{-1/2}\\)"
          ],
          correct: 0,
          explanation: "Chain rule: \\(\\frac{1}{2}(x+1)^{-1/2}\\)",
          xp: 6
        },
        {
          id: "u3_l6_q6",
          type: "multiple_choice",
          question: "For f(x) = x² + 2x, is x = -1 a max or min?",
          options: ["Max", "Min", "Neither", "Both"],
          correct: 1,
          explanation: "f'(x) = 2x + 2, f''(x) = 2 > 0, so minimum",
          xp: 5
        },

        // Typing (11 - majority!)
        {
          id: "u3_l6_q7",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(2x+1)^2]\\):",
          correctAnswer: "4(2x+1)",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q8",
          type: "typing",
          question: "For x³ + y³ = 1, what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-x^2/y^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l6_q9",
          type: "typing",
          question: "If y = x² and \\(\\frac{dx}{dt} = 3\\) when x = 2, what is \\(\\frac{dy}{dt}\\)?",
          correctAnswer: "12",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q10",
          type: "typing",
          question: "Find f''(x) if f(x) = x⁵:",
          correctAnswer: "20x^3",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q11",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x²+1)^2]\\):",
          correctAnswer: "4x(x^2+1)",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q12",
          type: "typing",
          question: "For xy = 4, what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "-y/x",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q13",
          type: "typing",
          question: "If V = x³ and \\(\\frac{dx}{dt} = 2\\) when x = 3, what is \\(\\frac{dV}{dt}\\)?",
          correctAnswer: "54",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l6_q14",
          type: "typing",
          question: "Find f''(x) if f(x) = 2x³ + x²:",
          correctAnswer: "12x+2",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q15",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(3x-1)^3]\\):",
          correctAnswer: "9(3x-1)^2",
          prompt: "Type your answer:",
          xp: 7
        },
        {
          id: "u3_l6_q16",
          type: "typing",
          question: "For x² - y² = 1, what is \\(\\frac{dy}{dx}\\)?",
          correctAnswer: "x/y",
          prompt: "Type your answer:",
          xp: 6
        },
        {
          id: "u3_l6_q17",
          type: "typing",
          question: "Find \\(\\frac{d}{dx}[(x^3+1)^2]\\):",
          correctAnswer: "6x^2(x^3+1)",
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
  module.exports = { CalculusUnit3Database };
} else {
  window.CalculusUnit3Database = CalculusUnit3Database;
}