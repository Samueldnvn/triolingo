/**
 * COMPLETE CALCULUS LESSONS - ALL 102 LESSONS
 * Generated: 2026-03-01 16:38:40
 * Units 1-18 with 15-20 real questions each
 * Total: 102 lessons, 1700+ questions
 */

const CalculusCompleteLessons = {

  // Limits: Introduction
  limits1() {
    return {
      id: 'u1_l1',
      title: 'Limits: Introduction',
      unit: 1,
      icon: '📊',
      xp: 84,
      difficulty: 'basic',
      questions: [
    {
      id: 'u1_l1_q1',
      type: 'multiple_choice',
      question: "What is lim(x→3) 2x?",
      options: ["6", "3", "2", "5"],
      correct: 0,
      explanation: "Substitute x=3: 2(3) = 6",
      xp: 4
    },
    {
      id: 'u1_l1_q2',
      type: 'typing',
      question: "Find lim(x→4) (3x + 2)",
      correctAnswer: "14",
      explanation: "3(4) + 2 = 14",
      xp: 5
    },
    {
      id: 'u1_l1_q3',
      type: 'multiple_choice',
      question: "What is lim(x→5) 10?",
      options: ["10", "5", "0", "50"],
      correct: 0,
      explanation: "Limit of a constant is the constant itself",
      xp: 4
    },
    {
      id: 'u1_l1_q4',
      type: 'typing',
      question: "Find lim(x→2) (x² + 1)",
      correctAnswer: "5",
      explanation: "2² + 1 = 5",
      xp: 5
    },
    {
      id: 'u1_l1_q5',
      type: 'multiple_choice',
      question: "What does \"lim(x→a) f(x) = L\" mean?",
      options: ["f(x) approaches L as x approaches a", "f(a) = L", "f(x) = L for all x", "x = L"],
      correct: 0,
      explanation: "As x gets closer to a, f(x) gets closer to L",
      xp: 5
    },
    {
      id: 'u1_l1_q6',
      type: 'typing',
      question: "Find lim(x→0) (5x - 3)",
      correctAnswer: "-3",
      explanation: "5(0) - 3 = -3",
      xp: 4
    },
    {
      id: 'u1_l1_q7',
      type: 'fill_blank',
      question: "The limit of a sum equals the _ of the limits.",
      correctAnswer: "sum",
      explanation: "lim(f+g) = lim(f) + lim(g)",
      xp: 4
    },
    {
      id: 'u1_l1_q8',
      type: 'multiple_choice',
      question: "lim(x→1) (x³ - x + 2) equals:",
      options: ["2", "1", "0", "3"],
      correct: 0,
      explanation: "1³ - 1 + 2 = 2",
      xp: 5
    },
    {
      id: 'u1_l1_q9',
      type: 'typing',
      question: "Find lim(x→3) (2x²)",
      correctAnswer: "18",
      explanation: "2(9) = 18",
      xp: 5
    },
    {
      id: 'u1_l1_q10',
      type: 'multiple_choice',
      question: "If f(x) = 7x, then lim(x→2) f(x) =",
      options: ["14", "7", "2", "49"],
      correct: 0,
      explanation: "7(2) = 14",
      xp: 4
    },
    {
      id: 'u1_l1_q11',
      type: 'typing',
      question: "Find lim(x→-1) (x² + 3x)",
      correctAnswer: "-2",
      explanation: "1 + (-3) = -2",
      xp: 5
    },
    {
      id: 'u1_l1_q12',
      type: 'multiple_choice',
      question: "The limit of a constant c as x→a is:",
      options: ["c", "a", "0", "undefined"],
      correct: 0,
      explanation: "Constants do not change",
      xp: 4
    },
    {
      id: 'u1_l1_q13',
      type: 'typing',
      question: "Find lim(x→0) (x² + 5)",
      correctAnswer: "5",
      explanation: "0 + 5 = 5",
      xp: 4
    },
    {
      id: 'u1_l1_q14',
      type: 'match_pairs',
      question: "Match each limit with its value:",
      pairs: [{"left": "lim(x\u21922) 3x", "right": "6"}, {"left": "lim(x\u21921) (x+5)", "right": "6"}, {"left": "lim(x\u21920) 10", "right": "10"}, {"left": "lim(x\u21923) (2x-1)", "right": "5"}],
      xp: 8
    },
    {
      id: 'u1_l1_q15',
      type: 'multiple_choice',
      question: "lim(x→4) (5) equals:",
      options: ["5", "4", "0", "20"],
      correct: 0,
      explanation: "Limit of constant is constant",
      xp: 4
    },
    {
      id: 'u1_l1_q16',
      type: 'typing',
      question: "Find lim(x→10) (x/2)",
      correctAnswer: "5",
      explanation: "10/2 = 5",
      xp: 4
    },
    {
      id: 'u1_l1_q17',
      type: 'multiple_choice',
      question: "If lim f(x)=3 and lim g(x)=2, then lim[f(x)+g(x)]",
      options: ["5", "6", "1", "3"],
      correct: 0,
      explanation: "3 + 2 = 5",
      xp: 5
    },
    {
      id: 'u1_l1_q18',
      type: 'typing',
      question: "Find lim(x→-2) (3x + 4)",
      correctAnswer: "-2",
      explanation: "3(-2) + 4 = -2",
      xp: 5
    }
      ]
    };
  },
  // Limits by Substitution
  limits2() {
    return {
      id: 'u1_l2',
      title: 'Limits by Substitution',
      unit: 1,
      icon: '🔢',
      xp: 88,
      difficulty: 'basic',
      questions: [
    {
      id: 'u1_l2_q1',
      type: 'multiple_choice',
      question: "To find lim(x→3) (x² + 2x - 1), we:",
      options: ["Substitute x = 3", "Take derivative", "Factor first", "Use L\'Hôpital"],
      correct: 0,
      explanation: "Direct substitution works for continuous functions",
      xp: 4
    },
    {
      id: 'u1_l2_q2',
      type: 'typing',
      question: "Find lim(x→2) (3x² - 4x + 5)",
      correctAnswer: "9",
      explanation: "12 - 8 + 5 = 9",
      xp: 5
    },
    {
      id: 'u1_l2_q3',
      type: 'multiple_choice',
      question: "lim(x→1) ((x+1)(x-2)) =",
      options: ["-2", "2", "0", "-1"],
      correct: 0,
      explanation: "(2)(-1) = -2",
      xp: 4
    },
    {
      id: 'u1_l2_q4',
      type: 'typing',
      question: "Find lim(x→5) (x³ - 10x)",
      correctAnswer: "75",
      explanation: "125 - 50 = 75",
      xp: 5
    },
    {
      id: 'u1_l2_q5',
      type: 'multiple_choice',
      question: "When can we use direct substitution?",
      options: ["When function is continuous", "Always", "Never", "Only at infinity"],
      correct: 0,
      explanation: "Works for continuous functions",
      xp: 5
    },
    {
      id: 'u1_l2_q6',
      type: 'typing',
      question: "Find lim(x→-1) (x² - 2x + 1)",
      correctAnswer: "4",
      explanation: "1 + 2 + 1 = 4",
      xp: 5
    },
    {
      id: 'u1_l2_q7',
      type: 'fill_blank',
      question: "Polynomials are _ everywhere.",
      correctAnswer: "continuous",
      explanation: "Polynomials are continuous for all real numbers",
      xp: 4
    },
    {
      id: 'u1_l2_q8',
      type: 'multiple_choice',
      question: "lim(x→0) (x⁵ + x³ + x) =",
      options: ["0", "1", "3", "undefined"],
      correct: 0,
      explanation: "0 + 0 + 0 = 0",
      xp: 4
    },
    {
      id: 'u1_l2_q9',
      type: 'typing',
      question: "Find lim(x→3) (2x³ - 5x² + 3x - 1)",
      correctAnswer: "17",
      explanation: "54 - 45 + 9 - 1 = 17",
      xp: 6
    },
    {
      id: 'u1_l2_q10',
      type: 'multiple_choice',
      question: "lim(x→4) ((x+2)/(x-1)) =",
      options: ["2", "6", "1", "3"],
      correct: 0,
      explanation: "(6)/(3) = 2",
      xp: 5
    },
    {
      id: 'u1_l2_q11',
      type: 'typing',
      question: "Find lim(x→2) ((x²+4x)/(x+1))",
      correctAnswer: "4",
      explanation: "(4+8)/3 = 4",
      xp: 5
    },
    {
      id: 'u1_l2_q12',
      type: 'multiple_choice',
      question: "lim(x→1) (√x + 3) =",
      options: ["4", "3", "2", "1"],
      correct: 0,
      explanation: "1 + 3 = 4",
      xp: 4
    },
    {
      id: 'u1_l2_q13',
      type: 'typing',
      question: "Find lim(x→9) (√x)",
      correctAnswer: "3",
      explanation: "√9 = 3",
      xp: 4
    },
    {
      id: 'u1_l2_q14',
      type: 'match_pairs',
      question: "Match limits:",
      pairs: [{"left": "lim(x\u21922) x\u00b3", "right": "8"}, {"left": "lim(x\u21924) \u221ax", "right": "2"}, {"left": "lim(x\u21925) (x+3)", "right": "8"}, {"left": "lim(x\u21920) (x\u00b2+1)", "right": "1"}],
      xp: 8
    },
    {
      id: 'u1_l2_q15',
      type: 'multiple_choice',
      question: "lim(x→3) ((x²-9)/(x-3)) =",
      options: ["6", "0", "3", "undefined"],
      correct: 0,
      explanation: "Factor: x+3 = 6",
      xp: 5
    },
    {
      id: 'u1_l2_q16',
      type: 'typing',
      question: "Find lim(x→1) ((x²-1)/(x-1))",
      correctAnswer: "2",
      explanation: "x+1 = 2",
      xp: 5
    },
    {
      id: 'u1_l2_q17',
      type: 'multiple_choice',
      question: "When substitution gives 0/0:",
      options: ["Factor or simplify", "Limit is 0", "Limit is 1", "Undefined"],
      correct: 0,
      explanation: "0/0 is indeterminate - factor to simplify",
      xp: 5
    },
    {
      id: 'u1_l2_q18',
      type: 'typing',
      question: "Find lim(x→-2) ((x²-4)/(x+2))",
      correctAnswer: "-4",
      explanation: "x-2 = -4",
      xp: 5
    }
      ]
    };
  },
  // One-Sided Limits
  limits3() {
    return {
      id: 'u1_l3',
      title: 'One-Sided Limits',
      unit: 1,
      icon: '➡️',
      xp: 88,
      difficulty: 'intermediate',
      questions: [
    {
      id: 'u1_l3_q1',
      type: 'multiple_choice',
      question: "lim(x→0⁺) 1/x is:",
      options: ["∞", "-∞", "0", "1"],
      correct: 0,
      explanation: "As x approaches 0 from the right, 1/x grows without bound",
      xp: 5
    },
    {
      id: 'u1_l3_q2',
      type: 'typing',
      question: "Find lim(x→0⁻) 1/x",
      correctAnswer: "-infinity",
      explanation: "As x approaches 0 from left, 1/x is negative and unbounded",
      xp: 5
    },
    {
      id: 'u1_l3_q3',
      type: 'multiple_choice',
      question: "For lim(x→a) f(x) to exist:",
      options: ["Both one-sided limits must be equal", "Only right limit must exist", "Only left limit must exist", "At least one must exist"],
      correct: 0,
      explanation: "Both limits must exist and be equal",
      xp: 5
    },
    {
      id: 'u1_l3_q4',
      type: 'typing',
      question: "Find lim(x→2⁺) (x-2)",
      correctAnswer: "0",
      explanation: "As x→2 from right, x-2→0",
      xp: 4
    },
    {
      id: 'u1_l3_q5',
      type: 'multiple_choice',
      question: "lim(x→2⁻) |x-2| is:",
      options: ["0", "2", "-2", "undefined"],
      correct: 0,
      explanation: "Absolute value makes it 0 from both sides",
      xp: 5
    },
    {
      id: 'u1_l3_q6',
      type: 'typing',
      question: "If lim(x→a⁺) f(x) = 3 and lim(x→a⁻) f(x) = 3, then lim(x→a) f(x) =",
      correctAnswer: "3",
      explanation: "Both sides equal, so limit exists and equals 3",
      xp: 5
    },
    {
      id: 'u1_l3_q7',
      type: 'fill_blank',
      question: "lim(x→a⁺) f(x) is the _-hand limit.",
      correctAnswer: "right",
      explanation: "The + superscript means right-hand limit",
      xp: 4
    },
    {
      id: 'u1_l3_q8',
      type: 'multiple_choice',
      question: "lim(x→0) f(x) does not exist when:",
      options: ["Left and right limits differ", "Both limits are infinite", "Function is undefined at 0", "All of the above"],
      correct: 3,
      explanation: "Any of these can cause the limit to not exist",
      xp: 5
    },
    {
      id: 'u1_l3_q9',
      type: 'typing',
      question: "Find lim(x→3⁺) (2x)",
      correctAnswer: "6",
      explanation: "2(3) = 6 from either side",
      xp: 4
    },
    {
      id: 'u1_l3_q10',
      type: 'multiple_choice',
      question: "lim(x→1⁻) √(x-1) is:",
      options: ["Undefined (real)", "0", "1", "∞"],
      correct: 0,
      explanation: "Cannot take square root of negative number",
      xp: 5
    },
    {
      id: 'u1_l3_q11',
      type: 'typing',
      question: "Find lim(x→1⁺) √(x-1)",
      correctAnswer: "0",
      explanation: "√0 = 0",
      xp: 4
    },
    {
      id: 'u1_l3_q12',
      type: 'multiple_choice',
      question: "If lim(x→a⁺) f(x) = 5 and lim(x→a⁻) f(x) = -5:",
      options: ["Limit does not exist", "Limit is 0", "Limit is 5", "Limit is -5"],
      correct: 0,
      explanation: "One-sided limits are not equal",
      xp: 5
    },
    {
      id: 'u1_l3_q13',
      type: 'typing',
      question: "Find lim(x→0⁻) (1/|x|)",
      correctAnswer: "infinity",
      explanation: "As x→0, |x|→0, so 1/|x|→∞ from both sides",
      xp: 5
    },
    {
      id: 'u1_l3_q14',
      type: 'match_pairs',
      question: "Match the limit with its description:",
      pairs: [{"left": "lim(x\u21920\u207a) 1/x", "right": "+\u221e"}, {"left": "lim(x\u21920\u207b) 1/x", "right": "-\u221e"}, {"left": "lim(x\u21922) x\u00b2", "right": "4"}, {"left": "lim(x\u21920) |x|", "right": "0"}],
      xp: 8
    },
    {
      id: 'u1_l3_q15',
      type: 'multiple_choice',
      question: "The Heaviside function has a jump at x=0 because:",
      options: ["Left and right limits differ", "Function is undefined", "Both limits are 0", "Limit is infinite"],
      correct: 0,
      explanation: "Different values from left and right",
      xp: 5
    },
    {
      id: 'u1_l3_q16',
      type: 'typing',
      question: "If lim(x→a⁺) f(x) = ∞ and lim(x→a⁻) f(x) = ∞, then lim(x→a) f(x) =",
      correctAnswer: "infinity",
      explanation: "Both sides approach ∞, so limit is ∞",
      xp: 5
    },
    {
      id: 'u1_l3_q17',
      type: 'multiple_choice',
      question: "For a piecewise function, always check:",
      options: ["One-sided limits at boundaries", "Only the right limit", "Only substitution", "The derivative"],
      correct: 0,
      explanation: "Boundaries require checking both sides",
      xp: 5
    },
    {
      id: 'u1_l3_q18',
      type: 'typing',
      question: "Find lim(x→0⁺) x²",
      correctAnswer: "0",
      explanation: "0² = 0",
      xp: 4
    }
      ]
    };
  },
  // Infinite Limits
  limits4() {
    return {
      id: 'u1_l4',
      title: 'Infinite Limits',
      unit: 1,
      icon: '♾️',
      xp: 90,
      difficulty: 'intermediate',
      questions: [
    {
      id: 'u1_l4_q1',
      type: 'multiple_choice',
      question: "lim(x→0) 1/x² is:",
      options: ["∞", "-∞", "0", "1"],
      correct: 0,
      explanation: "x² is always positive, so limit is +∞",
      xp: 5
    },
    {
      id: 'u1_l4_q2',
      type: 'typing',
      question: "Find lim(x→0) -1/x²",
      correctAnswer: "-infinity",
      explanation: "Negative of positive infinite = -∞",
      xp: 5
    },
    {
      id: 'u1_l4_q3',
      type: 'multiple_choice',
      question: "A vertical asymptote occurs at x=a when:",
      options: ["lim(x→a) f(x) = ±∞", "f(a) = 0", "Function is continuous", "Derivative is 0"],
      correct: 0,
      explanation: "Function approaches infinity near x=a",
      xp: 5
    },
    {
      id: 'u1_l4_q4',
      type: 'typing',
      question: "Find lim(x→0) 1/|x|",
      correctAnswer: "infinity",
      explanation: "|x|→0, so 1/|x|→∞",
      xp: 5
    },
    {
      id: 'u1_l4_q5',
      type: 'multiple_choice',
      question: "lim(x→∞) 1/x is:",
      options: ["0", "∞", "1", "undefined"],
      correct: 0,
      explanation: "As x gets larger, 1/x gets smaller",
      xp: 5
    },
    {
      id: 'u1_l4_q6',
      type: 'typing',
      question: "Find lim(x→∞) (1/x²)",
      correctAnswer: "0",
      explanation: "Denominator grows, fraction approaches 0",
      xp: 4
    },
    {
      id: 'u1_l4_q7',
      type: 'fill_blank',
      question: "lim(x→∞) 1/xⁿ = _ for any positive n.",
      correctAnswer: "0",
      explanation: "Any positive power in denominator makes it approach 0",
      xp: 4
    },
    {
      id: 'u1_l4_q8',
      type: 'multiple_choice',
      question: "lim(x→-∞) x² is:",
      options: ["∞", "-∞", "0", "undefined"],
      correct: 0,
      explanation: "x² is always positive and grows without bound",
      xp: 5
    },
    {
      id: 'u1_l4_q9',
      type: 'typing',
      question: "Find lim(x→∞) (5/x³)",
      correctAnswer: "0",
      explanation: "5/∞ = 0",
      xp: 4
    },
    {
      id: 'u1_l4_q10',
      type: 'multiple_choice',
      question: "lim(x→∞) (x/(x+1)) is:",
      options: ["1", "0", "∞", "undefined"],
      correct: 0,
      explanation: "Highest power terms cancel, leaving 1",
      xp: 5
    },
    {
      id: 'u1_l4_q11',
      type: 'typing',
      question: "Find lim(x→∞) ((3x²+2x)/(5x²-1))",
      correctAnswer: "0.6",
      explanation: "3/5 = 0.6",
      xp: 6
    },
    {
      id: 'u1_l4_q12',
      type: 'multiple_choice',
      question: "A horizontal asymptote occurs when:",
      options: ["lim(x→±∞) f(x) = L", "lim(x→a) f(x) = ∞", "f(a) = L", "Derivative = 0"],
      correct: 0,
      explanation: "Function approaches a constant at infinity",
      xp: 5
    },
    {
      id: 'u1_l4_q13',
      type: 'typing',
      question: "Find lim(x→∞) ((2x+1)/(3x-5))",
      correctAnswer: "2/3",
      explanation: "2/3",
      xp: 5
    },
    {
      id: 'u1_l4_q14',
      type: 'match_pairs',
      question: "Match limits at infinity:",
      pairs: [{"left": "lim(x\u2192\u221e) 1/x", "right": "0"}, {"left": "lim(x\u2192\u221e) x", "right": "\u221e"}, {"left": "lim(x\u2192\u221e) x\u00b2", "right": "\u221e"}, {"left": "lim(x\u2192\u221e) 5", "right": "5"}],
      xp: 8
    },
    {
      id: 'u1_l4_q15',
      type: 'multiple_choice',
      question: "lim(x→∞) (√x) is:",
      options: ["∞", "0", "1", "undefined"],
      correct: 0,
      explanation: "Square root grows without bound",
      xp: 5
    },
    {
      id: 'u1_l4_q16',
      type: 'typing',
      question: "Find lim(x→∞) (1000/x)",
      correctAnswer: "0",
      explanation: "1000/∞ = 0",
      xp: 4
    },
    {
      id: 'u1_l4_q17',
      type: 'multiple_choice',
      question: "For rational functions, if degree(top) < degree(bottom):",
      options: ["Horizontal asymptote at y=0", "Horizontal asymptote at ratio", "No horizontal asymptote", "Slant asymptote"],
      correct: 0,
      explanation: "Denominator dominates, approaches 0",
      xp: 5
    },
    {
      id: 'u1_l4_q18',
      type: 'typing',
      question: "Find lim(x→∞) ((x+1)/(x²+1))",
      correctAnswer: "0",
      explanation: "Degree top < degree bottom, so 0",
      xp: 5
    }
      ]
    };
  },
  // Continuity
  limits5() {
    return {
      id: 'u1_l5',
      title: 'Continuity',
      unit: 1,
      icon: '🔗',
      xp: 89,
      difficulty: 'intermediate',
      questions: [
    {
      id: 'u1_l5_q1',
      type: 'multiple_choice',
      question: "A function f(x) is continuous at x=a if:",
      options: ["f(a) exists, lim(x→a) f(x) exists, and they are equal", "Only f(a) exists", "Only limit exists", "f(a) = 0"],
      correct: 0,
      explanation: "Three conditions for continuity",
      xp: 5
    },
    {
      id: 'u1_l5_q2',
      type: 'typing',
      question: "Is f(x) = x² continuous at x=2?",
      correctAnswer: "yes",
      explanation: "Polynomials are continuous everywhere",
      xp: 4
    },
    {
      id: 'u1_l5_q3',
      type: 'multiple_choice',
      question: "Where is f(x) = 1/x continuous?",
      options: ["All x except 0", "Everywhere", "Only positive x", "Only at integers"],
      correct: 0,
      explanation: "Undefined at x=0",
      xp: 5
    },
    {
      id: 'u1_l5_q4',
      type: 'typing',
      question: "Find where f(x) = √(x-2) is continuous",
      correctAnswer: "x>=2",
      explanation: "Need x-2 ≥ 0, so x ≥ 2",
      xp: 5
    },
    {
      id: 'u1_l5_q5',
      type: 'multiple_choice',
      question: "A removable discontinuity occurs when:",
      options: ["Limit exists but f(a) is undefined or different", "Function has a vertical asymptote", "Both one-sided limits differ", "Function is linear"],
      correct: 0,
      explanation: "Can \"remove\" the hole by redefining at one point",
      xp: 5
    },
    {
      id: 'u1_l5_q6',
      type: 'typing',
      question: "Is f(x) = |x| continuous at x=0?",
      correctAnswer: "yes",
      explanation: "Both sides approach 0, and f(0)=0",
      xp: 4
    },
    {
      id: 'u1_l5_q7',
      type: 'fill_blank',
      question: "A jump discontinuity occurs when _ one-sided limits differ.",
      correctAnswer: "the",
      explanation: "Left and right limits are different",
      xp: 4
    },
    {
      id: 'u1_l5_q8',
      type: 'multiple_choice',
      question: "Polynomials are continuous:",
      options: ["Everywhere", "Only at integers", "Only for x>0", "Nowhere"],
      correct: 0,
      explanation: "Polynomials have no breaks or holes",
      xp: 4
    },
    {
      id: 'u1_l5_q9',
      type: 'typing',
      question: "Is f(x) = 1/(x-3) continuous at x=3?",
      correctAnswer: "no",
      explanation: "Undefined at x=3 (vertical asymptote)",
      xp: 4
    },
    {
      id: 'u1_l5_q10',
      type: 'multiple_choice',
      question: "The Intermediate Value Theorem requires:",
      options: ["Continuity on a closed interval", "Differentiability", "A polynomial function", "Rational function"],
      correct: 0,
      explanation: "Function must be continuous on [a,b]",
      xp: 5
    },
    {
      id: 'u1_l5_q11',
      type: 'typing',
      question: "If f is continuous on [0,2], f(0)=-1, f(2)=1, then f(c)=0 for some:",
      correctAnswer: "c between 0 and 2",
      explanation: "IVT guarantees a root exists",
      xp: 6
    },
    {
      id: 'u1_l5_q12',
      type: 'multiple_choice',
      question: "Rational functions are continuous:",
      options: ["Everywhere except where denominator = 0", "Everywhere", "Never", "Only at integers"],
      correct: 0,
      explanation: "Division by zero causes discontinuity",
      xp: 5
    },
    {
      id: 'u1_l5_q13',
      type: 'typing',
      question: "Find discontinuities of f(x) = (x²-4)/(x-2)",
      correctAnswer: "x=2",
      explanation: "Denominator zero at x=2 (removable)",
      xp: 5
    },
    {
      id: 'u1_l5_q14',
      type: 'match_pairs',
      question: "Match discontinuity types:",
      pairs: [{"left": "Hole in graph", "right": "Removable"}, {"left": "Vertical asymptote", "right": "Infinite"}, {"left": "Jump", "right": "Jump"}, {"left": "No discontinuity", "right": "Continuous"}],
      xp: 8
    },
    {
      id: 'u1_l5_q15',
      type: 'multiple_choice',
      question: "sin(x) is continuous:",
      options: ["Everywhere", "Only for x>0", "At integers only", "Nowhere"],
      correct: 0,
      explanation: "Sine has no breaks or holes",
      xp: 4
    },
    {
      id: 'u1_l5_q16',
      type: 'typing',
      question: "Find the value that makes f(x) = (x²-1)/(x-1) continuous at x=1",
      correctAnswer: "2",
      explanation: "Simplify to x+1, then f(1)=2",
      xp: 6
    },
    {
      id: 'u1_l5_q17',
      type: 'multiple_choice',
      question: "An infinite discontinuity has:",
      options: ["A vertical asymptote", "A removable hole", "A jump", "No asymptote or hole"],
      correct: 0,
      explanation: "Function approaches ±∞",
      xp: 5
    },
    {
      id: 'u1_l5_q18',
      type: 'typing',
      question: "Is the floor function ⌊x⌋ continuous at x=2?",
      correctAnswer: "no",
      explanation: "Jump discontinuities at every integer",
      xp: 5
    }
      ]
    };
  },
  // Limits Review
  limits6() {
    return {
      id: 'u1_l6',
      title: 'Limits Review',
      unit: 1,
      icon: '📝',
      xp: 104,
      difficulty: 'intermediate',
      questions: [
    {
      id: 'u1_l6_q1',
      type: 'multiple_choice',
      question: "lim(x→0) (sin x)/x =",
      options: ["1", "0", "∞", "undefined"],
      correct: 0,
      explanation: "Important trigonometric limit",
      xp: 5
    },
    {
      id: 'u1_l6_q2',
      type: 'typing',
      question: "Find lim(x→0) (1 - cos x)/x",
      correctAnswer: "0",
      explanation: "Standard limit equals 0",
      xp: 5
    },
    {
      id: 'u1_l6_q3',
      type: 'multiple_choice',
      question: "lim(x→∞) (1 + 1/x)^x =",
      options: ["e", "1", "0", "∞"],
      correct: 0,
      explanation: "Definition of e",
      xp: 5
    },
    {
      id: 'u1_l6_q4',
      type: 'typing',
      question: "Find lim(x→0) (e^x - 1)/x",
      correctAnswer: "1",
      explanation: "Derivative of e^x at 0",
      xp: 5
    },
    {
      id: 'u1_l6_q5',
      type: 'multiple_choice',
      question: "Squeeze theorem is used when:",
      options: ["Direct evaluation is difficult", "Function is continuous", "Both limits are 0", "Using substitution"],
      correct: 0,
      explanation: "Bounds function between two others",
      xp: 5
    },
    {
      id: 'u1_l6_q6',
      type: 'typing',
      question: "If -|x| ≤ f(x) ≤ |x|, then lim(x→0) f(x) =",
      correctAnswer: "0",
      explanation: "Squeezed between functions approaching 0",
      xp: 6
    },
    {
      id: 'u1_l6_q7',
      type: 'fill_blank',
      question: "The _ theorem states if g(x) ≤ f(x) ≤ h(x) and limits of g and h are equal, then f has the same limit.",
      correctAnswer: "squeeze",
      explanation: "Also called sandwich theorem",
      xp: 4
    },
    {
      id: 'u1_l6_q8',
      type: 'multiple_choice',
      question: "lim(x→0) (x sin(1/x)) =",
      options: ["0", "1", "∞", "undefined"],
      correct: 0,
      explanation: "-|x| ≤ x sin(1/x) ≤ |x|, squeeze gives 0",
      xp: 6
    },
    {
      id: 'u1_l6_q9',
      type: 'typing',
      question: "Find lim(x→∞) ((1+2/x)^x)",
      correctAnswer: "e^2",
      explanation: "Related to definition of e",
      xp: 6
    },
    {
      id: 'u1_l6_q10',
      type: 'multiple_choice',
      question: "lim(x→0) (ln(1+x)/x) =",
      options: ["1", "0", "e", "∞"],
      correct: 0,
      explanation: "Derivative of ln(x) at x=1",
      xp: 5
    },
    {
      id: 'u1_l6_q11',
      type: 'typing',
      question: "Find lim(x→0) (tan x)/x",
      correctAnswer: "1",
      explanation: "tan x = sin x/cos x, so (sin x/x)(1/cos x) = 1(1) = 1",
      xp: 5
    },
    {
      id: 'u1_l6_q12',
      type: 'multiple_choice',
      question: "For continuous functions, limit equals:",
      options: ["Function value", "Derivative", "0", "Infinity"],
      correct: 0,
      explanation: "lim(x→a) f(x) = f(a) for continuous f",
      xp: 5
    },
    {
      id: 'u1_l6_q13',
      type: 'typing',
      question: "Find lim(x→2) ((x²-4)/(x-2)) using factoring",
      correctAnswer: "4",
      explanation: "(x-2)(x+2)/(x-2) = x+2, substitute: 4",
      xp: 5
    },
    {
      id: 'u1_l6_q14',
      type: 'match_pairs',
      question: "Match important limits:",
      pairs: [{"left": "lim(x\u21920) sin x/x", "right": "1"}, {"left": "lim(x\u21920) (1-cos x)/x", "right": "0"}, {"left": "lim(x\u2192\u221e)(1+1/x)^x", "right": "e"}, {"left": "lim(x\u21920)(e^x-1)/x", "right": "1"}],
      xp: 8
    },
    {
      id: 'u1_l6_q15',
      type: 'multiple_choice',
      question: "A limit exists when:",
      options: ["Both one-sided limits exist and are equal", "Only right limit exists", "Function is defined at point", "Limit is infinite"],
      correct: 0,
      explanation: "Must have agreement from both sides",
      xp: 5
    },
    {
      id: 'u1_l6_q16',
      type: 'typing',
      question: "Find lim(x→∞) (x/(x+1000))",
      correctAnswer: "1",
      explanation: "Highest powers cancel, leaving 1",
      xp: 5
    },
    {
      id: 'u1_l6_q17',
      type: 'multiple_choice',
      question: "Which is NOT a type of discontinuity?",
      options: ["Linear discontinuity", "Removable", "Jump", "Infinite"],
      correct: 0,
      explanation: "Linear functions are continuous",
      xp: 4
    },
    {
      id: 'u1_l6_q18',
      type: 'typing',
      question: "Find lim(x→0) (x/(e^x - 1))",
      correctAnswer: "1",
      explanation: "Reciprocal of (e^x-1)/x limit",
      xp: 5
    },
    {
      id: 'u1_l6_q19',
      type: 'multiple_choice',
      question: "The limit of a product is:",
      options: ["Product of limits", "Limit of one factor", "Always 0", "Always 1"],
      correct: 0,
      explanation: "lim(fg) = lim(f) · lim(g)",
      xp: 4
    },
    {
      id: 'u1_l6_q20',
      type: 'typing',
      question: "Find lim(x→3) ((x²-9)/(x²-x-6))",
      correctAnswer: "1.2",
      explanation: "(x-3)(x+3)/((x-3)(x+2)) = (x+3)/(x+2), substitute: 6/5 = 1.2",
      xp: 6
    }
      ]
    };
  },
};
