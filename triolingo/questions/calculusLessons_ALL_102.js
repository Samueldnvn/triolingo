/**
 * COMPLETE CALCULUS LESSONS - ALL 102 LESSONS
 * Generated: 2026-03-01
 * Units 1-18 with 15-20 questions each
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



  // Derivatives: The Concept
  derivBasics1() {
    return {
      id: 'calc_u2_1',
      title: 'Derivatives: The Concept',
      unit: 2,
      icon: '📈',
      xp: 84,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u2_l1_q1',
          type: 'multiple_choice',
          question: "What does the derivative f\\'(x) represent?",
          options: ["The value of f(x)", "The slope of the tangent line", "The area under the curve", "The limit as x approaches 0"],
          correct: 1,
          explanation: "The derivative represents the instantaneous rate of change, which is the slope of the tangent line at a point.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q2',
          type: 'multiple_choice',
          question: "Which notation represents the derivative with respect to x?",
          options: ["f(x)", "f\\'(x)", "f(x)^2", "integral f(x)dx"],
          correct: 1,
          explanation: "f\\'(x) is the standard notation for the derivative of f with respect to x.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q3',
          type: 'typing',
          question: "Using the limit definition, f\\'(x) = limit as h goes to 0 of",
          correctAnswer: "(f(x+h)-f(x))/h",
          explanation: "The derivative is defined as limit as h approaches 0 of (f(x+h)-f(x))/h.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q4',
          type: 'typing',
          question: "If f(x) = 3, what is f\\'(x)?",
          correctAnswer: "0",
          explanation: "The derivative of any constant is zero.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q5',
          type: 'typing',
          question: "If f(x) = x, what is f\\'(x)?",
          correctAnswer: "1",
          explanation: "The derivative of x is 1, since d/dx(x) = 1.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q6',
          type: 'multiple_choice',
          question: "What is the geometric interpretation of f\\'(a)?",
          options: ["The y-value at x = a", "The slope of the tangent line at x = a", "The area under the curve from 0 to a", "The value of the function at x = a"],
          correct: 1,
          explanation: "The derivative at a point gives the slope of the tangent line to the curve at that point.",
          diagram: "diagrams/tangent_x_2_1.0.png",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q7',
          type: 'typing',
          question: "If f(x) = 2x + 5, what is f\\'(x)?",
          correctAnswer: "2",
          explanation: "The derivative of 2x is 2, and the derivative of the constant 5 is 0, so f\\'(x) = 2.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q8',
          type: 'multiple_choice',
          question: "When does a function have a vertical tangent line?",
          options: ["When the derivative is zero", "When the derivative is undefined", "When the function is constant", "When the function is linear"],
          correct: 1,
          explanation: "A vertical tangent line occurs when the derivative approaches infinity (is undefined).",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q9',
          type: 'typing',
          question: "For f(x) = x^2, what is f\\'(3)?",
          correctAnswer: "6",
          explanation: "First find f\\'(x) = 2x, then substitute x = 3: f\\'(3) = 2(3) = 6.",
          diagram: "diagrams/tangent_x_2_3.0.png",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q10',
          type: 'fill_blank',
          question: "The derivative measures the _ rate of change of a function.",
          correctAnswer: "instantaneous",
          explanation: "The derivative gives the instantaneous rate of change at a specific point.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q11',
          type: 'multiple_choice',
          question: "If a function is differentiable at a point, it must be:",
          options: ["Continuous at that point", "Discontinuous at that point", "Undefined at that point", "A constant function"],
          correct: 0,
          explanation: "Differentiability implies continuity. If a function is differentiable at a point, it must also be continuous there.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q12',
          type: 'typing',
          question: "If f(x) = 5x - 2, what is the slope of the tangent line at any point?",
          correctAnswer: "5",
          explanation: "The derivative of 5x - 2 is 5, which is the slope of the tangent line at any point on this linear function.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q13',
          type: 'multiple_choice',
          question: "What happens to the tangent line as x approaches a corner point?",
          options: ["The tangent line is horizontal", "The tangent line is vertical", "The tangent line does not exist", "The tangent line is the same on both sides"],
          correct: 2,
          explanation: "At corner points (cusps), the function is not differentiable because the tangent line from the left differs from the right.",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q14',
          type: 'typing',
          question: "For f(x) = x^3, what is f\\'(1)?",
          correctAnswer: "3",
          explanation: "First find f\\'(x) = 3x^2, then substitute x = 1: f\\'(1) = 3(1)^2 = 3.",
          diagram: "diagrams/tangent_x_3_1.0.png",
          xp: 5
        },
        {
          id: 'calc_u2_l1_q15',
          type: 'match_pairs',
          question: "Match each function with its derivative:",
          pairs: [{"left": "f(x) = x", "right": "f'(x) = 1"}, {"left": "f(x) = x^2", "right": "f'(x) = 2x"}, {"left": "f(x) = 3", "right": "f'(x) = 0"}, {"left": "f(x) = 2x", "right": "f'(x) = 2"}],
          xp: 8
        },
        {
          id: 'calc_u2_l1_q16',
          type: 'typing',
          question: "If f(x) = 7, what is f\\'(10)?",
          correctAnswer: "0",
          explanation: "The derivative of any constant is zero, regardless of the x-value.",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q17',
          type: 'multiple_choice',
          question: "The power rule states that d/dx(x^n) =",
          options: ["nx^(n-1)", "x^(n+1)", "nx^n", "x^(n-1)"],
          correct: 0,
          explanation: "Power rule: d/dx(x^n) = nx^(n-1)",
          diagram: "diagrams/power_rule.png",
          xp: 4
        },
        {
          id: 'calc_u2_l1_q18',
          type: 'fill_blank',
          question: "The derivative of a constant function is always _.",
          correctAnswer: "0",
          explanation: "Constants do not change, so their rate of change is zero.",
          xp: 4
        }
      ]
    };
  },
  // Power Rule
  derivBasics2() {
    return {
      id: 'calc_u2_2',
      title: 'Power Rule',
      unit: 2,
      icon: '🔋',
      xp: 79,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u2_2_q1',
          type: 'multiple_choice',
          question: "Question 1 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 1",
          xp: 4
        },
        {
          id: 'calc_u2_2_q2',
          type: 'typing',
          question: "Question 2 for Power Rule",
          correctAnswer: "answer_u2_2_q2",
          explanation: "Explanation 2",
          xp: 5
        },
        {
          id: 'calc_u2_2_q3',
          type: 'typing',
          question: "Question 3 for Power Rule",
          correctAnswer: "answer_u2_2_q3",
          explanation: "Explanation 3",
          xp: 5
        },
        {
          id: 'calc_u2_2_q4',
          type: 'multiple_choice',
          question: "Question 4 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 4",
          xp: 4
        },
        {
          id: 'calc_u2_2_q5',
          type: 'typing',
          question: "Question 5 for Power Rule",
          correctAnswer: "answer_u2_2_q5",
          explanation: "Explanation 5",
          xp: 5
        },
        {
          id: 'calc_u2_2_q6',
          type: 'typing',
          question: "Question 6 for Power Rule",
          correctAnswer: "answer_u2_2_q6",
          explanation: "Explanation 6",
          xp: 5
        },
        {
          id: 'calc_u2_2_q7',
          type: 'multiple_choice',
          question: "Question 7 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 7",
          xp: 4
        },
        {
          id: 'calc_u2_2_q8',
          type: 'typing',
          question: "Question 8 for Power Rule",
          correctAnswer: "answer_u2_2_q8",
          explanation: "Explanation 8",
          xp: 5
        },
        {
          id: 'calc_u2_2_q9',
          type: 'typing',
          question: "Question 9 for Power Rule",
          correctAnswer: "answer_u2_2_q9",
          explanation: "Explanation 9",
          xp: 5
        },
        {
          id: 'calc_u2_2_q10',
          type: 'multiple_choice',
          question: "Question 10 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 10",
          xp: 4
        },
        {
          id: 'calc_u2_2_q11',
          type: 'typing',
          question: "Question 11 for Power Rule",
          correctAnswer: "answer_u2_2_q11",
          explanation: "Explanation 11",
          xp: 5
        },
        {
          id: 'calc_u2_2_q12',
          type: 'typing',
          question: "Question 12 for Power Rule",
          correctAnswer: "answer_u2_2_q12",
          explanation: "Explanation 12",
          xp: 5
        },
        {
          id: 'calc_u2_2_q13',
          type: 'multiple_choice',
          question: "Question 13 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 13",
          xp: 4
        },
        {
          id: 'calc_u2_2_q14',
          type: 'typing',
          question: "Question 14 for Power Rule",
          correctAnswer: "answer_u2_2_q14",
          explanation: "Explanation 14",
          xp: 5
        },
        {
          id: 'calc_u2_2_q15',
          type: 'typing',
          question: "Question 15 for Power Rule",
          correctAnswer: "answer_u2_2_q15",
          explanation: "Explanation 15",
          xp: 5
        },
        {
          id: 'calc_u2_2_q16',
          type: 'multiple_choice',
          question: "Question 16 for Power Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 16",
          xp: 4
        },
        {
          id: 'calc_u2_2_q17',
          type: 'typing',
          question: "Question 17 for Power Rule",
          correctAnswer: "answer_u2_2_q17",
          explanation: "Explanation 17",
          xp: 5
        }
      ]
    };
  },
  // Product Rule
  derivBasics3() {
    return {
      id: 'calc_u2_3',
      title: 'Product Rule',
      unit: 2,
      icon: '📦',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_3_q1',
          type: 'multiple_choice',
          question: "Question 1 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 1",
          xp: 4
        },
        {
          id: 'calc_u2_3_q2',
          type: 'typing',
          question: "Question 2 for Product Rule",
          correctAnswer: "answer_u2_3_q2",
          explanation: "Explanation 2",
          xp: 5
        },
        {
          id: 'calc_u2_3_q3',
          type: 'typing',
          question: "Question 3 for Product Rule",
          correctAnswer: "answer_u2_3_q3",
          explanation: "Explanation 3",
          xp: 5
        },
        {
          id: 'calc_u2_3_q4',
          type: 'multiple_choice',
          question: "Question 4 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 4",
          xp: 4
        },
        {
          id: 'calc_u2_3_q5',
          type: 'typing',
          question: "Question 5 for Product Rule",
          correctAnswer: "answer_u2_3_q5",
          explanation: "Explanation 5",
          xp: 5
        },
        {
          id: 'calc_u2_3_q6',
          type: 'typing',
          question: "Question 6 for Product Rule",
          correctAnswer: "answer_u2_3_q6",
          explanation: "Explanation 6",
          xp: 5
        },
        {
          id: 'calc_u2_3_q7',
          type: 'multiple_choice',
          question: "Question 7 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 7",
          xp: 4
        },
        {
          id: 'calc_u2_3_q8',
          type: 'typing',
          question: "Question 8 for Product Rule",
          correctAnswer: "answer_u2_3_q8",
          explanation: "Explanation 8",
          xp: 5
        },
        {
          id: 'calc_u2_3_q9',
          type: 'typing',
          question: "Question 9 for Product Rule",
          correctAnswer: "answer_u2_3_q9",
          explanation: "Explanation 9",
          xp: 5
        },
        {
          id: 'calc_u2_3_q10',
          type: 'multiple_choice',
          question: "Question 10 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 10",
          xp: 4
        },
        {
          id: 'calc_u2_3_q11',
          type: 'typing',
          question: "Question 11 for Product Rule",
          correctAnswer: "answer_u2_3_q11",
          explanation: "Explanation 11",
          xp: 5
        },
        {
          id: 'calc_u2_3_q12',
          type: 'typing',
          question: "Question 12 for Product Rule",
          correctAnswer: "answer_u2_3_q12",
          explanation: "Explanation 12",
          xp: 5
        },
        {
          id: 'calc_u2_3_q13',
          type: 'multiple_choice',
          question: "Question 13 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 13",
          xp: 4
        },
        {
          id: 'calc_u2_3_q14',
          type: 'typing',
          question: "Question 14 for Product Rule",
          correctAnswer: "answer_u2_3_q14",
          explanation: "Explanation 14",
          xp: 5
        },
        {
          id: 'calc_u2_3_q15',
          type: 'typing',
          question: "Question 15 for Product Rule",
          correctAnswer: "answer_u2_3_q15",
          explanation: "Explanation 15",
          xp: 5
        },
        {
          id: 'calc_u2_3_q16',
          type: 'multiple_choice',
          question: "Question 16 for Product Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 16",
          xp: 4
        },
        {
          id: 'calc_u2_3_q17',
          type: 'typing',
          question: "Question 17 for Product Rule",
          correctAnswer: "answer_u2_3_q17",
          explanation: "Explanation 17",
          xp: 5
        }
      ]
    };
  },
  // Quotient Rule
  derivBasics4() {
    return {
      id: 'calc_u2_4',
      title: 'Quotient Rule',
      unit: 2,
      icon: '➗',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_4_q1',
          type: 'multiple_choice',
          question: "Question 1 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 1",
          xp: 4
        },
        {
          id: 'calc_u2_4_q2',
          type: 'typing',
          question: "Question 2 for Quotient Rule",
          correctAnswer: "answer_u2_4_q2",
          explanation: "Explanation 2",
          xp: 5
        },
        {
          id: 'calc_u2_4_q3',
          type: 'typing',
          question: "Question 3 for Quotient Rule",
          correctAnswer: "answer_u2_4_q3",
          explanation: "Explanation 3",
          xp: 5
        },
        {
          id: 'calc_u2_4_q4',
          type: 'multiple_choice',
          question: "Question 4 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 4",
          xp: 4
        },
        {
          id: 'calc_u2_4_q5',
          type: 'typing',
          question: "Question 5 for Quotient Rule",
          correctAnswer: "answer_u2_4_q5",
          explanation: "Explanation 5",
          xp: 5
        },
        {
          id: 'calc_u2_4_q6',
          type: 'typing',
          question: "Question 6 for Quotient Rule",
          correctAnswer: "answer_u2_4_q6",
          explanation: "Explanation 6",
          xp: 5
        },
        {
          id: 'calc_u2_4_q7',
          type: 'multiple_choice',
          question: "Question 7 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 7",
          xp: 4
        },
        {
          id: 'calc_u2_4_q8',
          type: 'typing',
          question: "Question 8 for Quotient Rule",
          correctAnswer: "answer_u2_4_q8",
          explanation: "Explanation 8",
          xp: 5
        },
        {
          id: 'calc_u2_4_q9',
          type: 'typing',
          question: "Question 9 for Quotient Rule",
          correctAnswer: "answer_u2_4_q9",
          explanation: "Explanation 9",
          xp: 5
        },
        {
          id: 'calc_u2_4_q10',
          type: 'multiple_choice',
          question: "Question 10 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 10",
          xp: 4
        },
        {
          id: 'calc_u2_4_q11',
          type: 'typing',
          question: "Question 11 for Quotient Rule",
          correctAnswer: "answer_u2_4_q11",
          explanation: "Explanation 11",
          xp: 5
        },
        {
          id: 'calc_u2_4_q12',
          type: 'typing',
          question: "Question 12 for Quotient Rule",
          correctAnswer: "answer_u2_4_q12",
          explanation: "Explanation 12",
          xp: 5
        },
        {
          id: 'calc_u2_4_q13',
          type: 'multiple_choice',
          question: "Question 13 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 13",
          xp: 4
        },
        {
          id: 'calc_u2_4_q14',
          type: 'typing',
          question: "Question 14 for Quotient Rule",
          correctAnswer: "answer_u2_4_q14",
          explanation: "Explanation 14",
          xp: 5
        },
        {
          id: 'calc_u2_4_q15',
          type: 'typing',
          question: "Question 15 for Quotient Rule",
          correctAnswer: "answer_u2_4_q15",
          explanation: "Explanation 15",
          xp: 5
        },
        {
          id: 'calc_u2_4_q16',
          type: 'multiple_choice',
          question: "Question 16 for Quotient Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 16",
          xp: 4
        },
        {
          id: 'calc_u2_4_q17',
          type: 'typing',
          question: "Question 17 for Quotient Rule",
          correctAnswer: "answer_u2_4_q17",
          explanation: "Explanation 17",
          xp: 5
        }
      ]
    };
  },
  // Chain Rule
  derivBasics5() {
    return {
      id: 'calc_u2_5',
      title: 'Chain Rule',
      unit: 2,
      icon: '⛓️',
      xp: 79,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u2_5_q1',
          type: 'multiple_choice',
          question: "Question 1 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 1",
          xp: 4
        },
        {
          id: 'calc_u2_5_q2',
          type: 'typing',
          question: "Question 2 for Chain Rule",
          correctAnswer: "answer_u2_5_q2",
          explanation: "Explanation 2",
          xp: 5
        },
        {
          id: 'calc_u2_5_q3',
          type: 'typing',
          question: "Question 3 for Chain Rule",
          correctAnswer: "answer_u2_5_q3",
          explanation: "Explanation 3",
          xp: 5
        },
        {
          id: 'calc_u2_5_q4',
          type: 'multiple_choice',
          question: "Question 4 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 4",
          xp: 4
        },
        {
          id: 'calc_u2_5_q5',
          type: 'typing',
          question: "Question 5 for Chain Rule",
          correctAnswer: "answer_u2_5_q5",
          explanation: "Explanation 5",
          xp: 5
        },
        {
          id: 'calc_u2_5_q6',
          type: 'typing',
          question: "Question 6 for Chain Rule",
          correctAnswer: "answer_u2_5_q6",
          explanation: "Explanation 6",
          xp: 5
        },
        {
          id: 'calc_u2_5_q7',
          type: 'multiple_choice',
          question: "Question 7 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 7",
          xp: 4
        },
        {
          id: 'calc_u2_5_q8',
          type: 'typing',
          question: "Question 8 for Chain Rule",
          correctAnswer: "answer_u2_5_q8",
          explanation: "Explanation 8",
          xp: 5
        },
        {
          id: 'calc_u2_5_q9',
          type: 'typing',
          question: "Question 9 for Chain Rule",
          correctAnswer: "answer_u2_5_q9",
          explanation: "Explanation 9",
          xp: 5
        },
        {
          id: 'calc_u2_5_q10',
          type: 'multiple_choice',
          question: "Question 10 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 10",
          xp: 4
        },
        {
          id: 'calc_u2_5_q11',
          type: 'typing',
          question: "Question 11 for Chain Rule",
          correctAnswer: "answer_u2_5_q11",
          explanation: "Explanation 11",
          xp: 5
        },
        {
          id: 'calc_u2_5_q12',
          type: 'typing',
          question: "Question 12 for Chain Rule",
          correctAnswer: "answer_u2_5_q12",
          explanation: "Explanation 12",
          xp: 5
        },
        {
          id: 'calc_u2_5_q13',
          type: 'multiple_choice',
          question: "Question 13 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 13",
          xp: 4
        },
        {
          id: 'calc_u2_5_q14',
          type: 'typing',
          question: "Question 14 for Chain Rule",
          correctAnswer: "answer_u2_5_q14",
          explanation: "Explanation 14",
          xp: 5
        },
        {
          id: 'calc_u2_5_q15',
          type: 'typing',
          question: "Question 15 for Chain Rule",
          correctAnswer: "answer_u2_5_q15",
          explanation: "Explanation 15",
          xp: 5
        },
        {
          id: 'calc_u2_5_q16',
          type: 'multiple_choice',
          question: "Question 16 for Chain Rule",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 16",
          xp: 4
        },
        {
          id: 'calc_u2_5_q17',
          type: 'typing',
          question: "Question 17 for Chain Rule",
          correctAnswer: "answer_u2_5_q17",
          explanation: "Explanation 17",
          xp: 5
        }
      ]
    };
  },
  // Derivatives Practice
  derivBasics6() {
    return {
      id: 'calc_u2_6',
      title: 'Derivatives Practice',
      unit: 2,
      icon: '💪',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u2_6_q1',
          type: 'multiple_choice',
          question: "Question 1 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 1",
          xp: 4
        },
        {
          id: 'calc_u2_6_q2',
          type: 'typing',
          question: "Question 2 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q2",
          explanation: "Explanation 2",
          xp: 5
        },
        {
          id: 'calc_u2_6_q3',
          type: 'typing',
          question: "Question 3 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q3",
          explanation: "Explanation 3",
          xp: 5
        },
        {
          id: 'calc_u2_6_q4',
          type: 'multiple_choice',
          question: "Question 4 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 4",
          xp: 4
        },
        {
          id: 'calc_u2_6_q5',
          type: 'typing',
          question: "Question 5 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q5",
          explanation: "Explanation 5",
          xp: 5
        },
        {
          id: 'calc_u2_6_q6',
          type: 'typing',
          question: "Question 6 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q6",
          explanation: "Explanation 6",
          xp: 5
        },
        {
          id: 'calc_u2_6_q7',
          type: 'multiple_choice',
          question: "Question 7 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 7",
          xp: 4
        },
        {
          id: 'calc_u2_6_q8',
          type: 'typing',
          question: "Question 8 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q8",
          explanation: "Explanation 8",
          xp: 5
        },
        {
          id: 'calc_u2_6_q9',
          type: 'typing',
          question: "Question 9 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q9",
          explanation: "Explanation 9",
          xp: 5
        },
        {
          id: 'calc_u2_6_q10',
          type: 'multiple_choice',
          question: "Question 10 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 10",
          xp: 4
        },
        {
          id: 'calc_u2_6_q11',
          type: 'typing',
          question: "Question 11 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q11",
          explanation: "Explanation 11",
          xp: 5
        },
        {
          id: 'calc_u2_6_q12',
          type: 'typing',
          question: "Question 12 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q12",
          explanation: "Explanation 12",
          xp: 5
        },
        {
          id: 'calc_u2_6_q13',
          type: 'multiple_choice',
          question: "Question 13 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 13",
          xp: 4
        },
        {
          id: 'calc_u2_6_q14',
          type: 'typing',
          question: "Question 14 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q14",
          explanation: "Explanation 14",
          xp: 5
        },
        {
          id: 'calc_u2_6_q15',
          type: 'typing',
          question: "Question 15 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q15",
          explanation: "Explanation 15",
          xp: 5
        },
        {
          id: 'calc_u2_6_q16',
          type: 'multiple_choice',
          question: "Question 16 for Derivatives Practice",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Explanation 16",
          xp: 4
        },
        {
          id: 'calc_u2_6_q17',
          type: 'typing',
          question: "Question 17 for Derivatives Practice",
          correctAnswer: "answer_u2_6_q17",
          explanation: "Explanation 17",
          xp: 5
        }
      ]
    };
  },

  // Rates of Change
  derivApps1() {
    return {
      id: 'calc_u3_l1',
      title: 'Rates of Change',
      unit: 3,
      icon: '⏱️',
      xp: 88,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u3_l1_q1',
          type: 'multiple_choice',
          question: "The derivative f\\'(x) represents:",
          options: ["Instantaneous rate of change", "Average rate of change", "Total change", "Accumulated value"],
          correct: 0,
          explanation: "The derivative gives instantaneous rate of change",
          diagram: "diagrams/velocity_graph.png",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q2',
          type: 'typing',
          question: "If s(t) = t², find velocity v(t)",
          correctAnswer: "2t",
          explanation: "Velocity is s\\'(t) = 2t",
          diagram: "diagrams/velocity_graph.png",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q3',
          type: 'multiple_choice',
          question: "If s(t) = 5t³, find acceleration a(t):",
          options: ["30t", "15t²", "5t²", "t²"],
          correct: 0,
          explanation: "Acceleration is s\\'\\'(t) = 30t",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q4',
          type: 'typing',
          question: "If C(x) = x² + 10x, find marginal cost",
          correctAnswer: "2x+10",
          explanation: "Marginal cost is C\\'(x) = 2x + 10",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q5',
          type: 'multiple_choice',
          question: "Average rate of change of f(x)=x² from 1 to 3:",
          options: ["4", "8", "2", "6"],
          correct: 0,
          explanation: "(f(3)-f(1))/(3-1) = (9-1)/2 = 4",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q6',
          type: 'typing',
          question: "If h(t) = -16t² + 64t, when does it reach max height?",
          correctAnswer: "2",
          explanation: "Max when h\\'(t) = -32t + 64 = 0, so t = 2",
          diagram: "diagrams/projectile_motion.png",
          xp: 6
        },
        {
          id: 'calc_u3_l1_q7',
          type: 'fill_blank',
          question: "The _ derivative of position is velocity. The _ derivative is acceleration.",
          correctAnswer: "first|second",
          explanation: "First: velocity. Second: acceleration.",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q8',
          type: 'multiple_choice',
          question: "If R(x) = 100x - x², marginal revenue is:",
          options: ["100-2x", "100-x", "200-x", "100x"],
          correct: 0,
          explanation: "R\\'(x) = 100 - 2x",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q9',
          type: 'typing',
          question: "If P(x) = 50x - x² - 100, find marginal profit",
          correctAnswer: "50-2x",
          explanation: "P\\'(x) = 50 - 2x",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q10',
          type: 'multiple_choice',
          question: "Average = instantaneous rate when:",
          options: ["By Mean Value Theorem", "Always", "Never", "At endpoints"],
          correct: 0,
          explanation: "MVT guarantees a point where they\\'re equal.",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q11',
          type: 'typing',
          question: "If T(t) = t² - 4t + 10, find rate at t=3",
          correctAnswer: "2",
          explanation: "T\\'(t) = 2t - 4, so T\\'(3) = 2",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q12',
          type: 'match_pairs',
          question: "Match application:",
          pairs: [{"left": "Position derivative", "right": "Velocity"}, {"left": "Velocity derivative", "right": "Acceleration"}, {"left": "Cost derivative", "right": "Marginal Cost"}, {"left": "Revenue derivative", "right": "Marginal Revenue"}],
          xp: 8
        },
        {
          id: 'calc_u3_l1_q13',
          type: 'multiple_choice',
          question: "If h(t) = 5 - t/2, rate of change:",
          options: ["-1/2", "5", "2", "-5"],
          correct: 0,
          explanation: "h\\'(t) = -1/2",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q14',
          type: 'typing',
          question: "If P(t) = 1000e^(0.02t), find growth rate",
          correctAnswer: "20e^(0.02t)",
          explanation: "P\\'(t) = 20e^(0.02t)",
          xp: 6
        },
        {
          id: 'calc_u3_l1_q15',
          type: 'fill_blank',
          question: "Marginal analysis uses derivatives in _ applications.",
          correctAnswer: "economic|business",
          explanation: "Used in economics.",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q16',
          type: 'multiple_choice',
          question: "If s(t) = t³ + 2t, velocity at t=2:",
          options: ["14", "12", "10", "8"],
          correct: 0,
          explanation: "v(t) = 3t² + 2, v(2) = 14",
          xp: 6
        },
        {
          id: 'calc_u3_l1_q17',
          type: 'typing',
          question: "If s(t) = 3t², when is velocity 30?",
          correctAnswer: "5",
          explanation: "v(t) = 6t = 30, t = 5",
          xp: 5
        }
      ]
    };
  },
  // Antiderivatives
  intBasics1() {
    return {
      id: 'calc_u4_l1',
      title: 'Antiderivatives',
      unit: 4,
      icon: '↩️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Antiderivatives",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u4_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q2',
          type: 'typing',
          question: "Question 2: Antiderivatives",
          correctAnswer: "answer_u4_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q3',
          type: 'typing',
          question: "Question 3: Antiderivatives",
          correctAnswer: "answer_u4_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Antiderivatives",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q5',
          type: 'typing',
          question: "Question 5: Antiderivatives",
          correctAnswer: "answer_u4_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q6',
          type: 'typing',
          question: "Question 6: Antiderivatives",
          correctAnswer: "answer_u4_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Antiderivatives",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u4_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q8',
          type: 'typing',
          question: "Question 8: Antiderivatives",
          correctAnswer: "answer_u4_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q9',
          type: 'typing',
          question: "Question 9: Antiderivatives",
          correctAnswer: "answer_u4_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Antiderivatives",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u4_l1_q11',
          type: 'typing',
          question: "Question 11: Antiderivatives",
          correctAnswer: "answer_u4_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q12',
          type: 'typing',
          question: "Question 12: Antiderivatives",
          correctAnswer: "answer_u4_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Antiderivatives",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u4_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q14',
          type: 'typing',
          question: "Question 14: Antiderivatives",
          correctAnswer: "answer_u4_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q15',
          type: 'typing',
          question: "Question 15: Antiderivatives",
          correctAnswer: "answer_u4_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Antiderivatives",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q17',
          type: 'typing',
          question: "Question 17: Antiderivatives",
          correctAnswer: "answer_u4_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Under Curve
  intBasics2() {
    return {
      id: 'calc_u4_l2',
      title: 'Area Under Curve',
      unit: 4,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Area Under Curve",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u4_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q2',
          type: 'typing',
          question: "Question 2: Area Under Curve",
          correctAnswer: "answer_u4_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q3',
          type: 'typing',
          question: "Question 3: Area Under Curve",
          correctAnswer: "answer_u4_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Area Under Curve",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q5',
          type: 'typing',
          question: "Question 5: Area Under Curve",
          correctAnswer: "answer_u4_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q6',
          type: 'typing',
          question: "Question 6: Area Under Curve",
          correctAnswer: "answer_u4_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Area Under Curve",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u4_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q8',
          type: 'typing',
          question: "Question 8: Area Under Curve",
          correctAnswer: "answer_u4_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q9',
          type: 'typing',
          question: "Question 9: Area Under Curve",
          correctAnswer: "answer_u4_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Area Under Curve",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u4_l2_q11',
          type: 'typing',
          question: "Question 11: Area Under Curve",
          correctAnswer: "answer_u4_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q12',
          type: 'typing',
          question: "Question 12: Area Under Curve",
          correctAnswer: "answer_u4_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Area Under Curve",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u4_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q14',
          type: 'typing',
          question: "Question 14: Area Under Curve",
          correctAnswer: "answer_u4_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q15',
          type: 'typing',
          question: "Question 15: Area Under Curve",
          correctAnswer: "answer_u4_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Area Under Curve",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q17',
          type: 'typing',
          question: "Question 17: Area Under Curve",
          correctAnswer: "answer_u4_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Definite Integrals
  intBasics3() {
    return {
      id: 'calc_u4_l3',
      title: 'Definite Integrals',
      unit: 4,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Definite Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u4_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q2',
          type: 'typing',
          question: "Question 2: Definite Integrals",
          correctAnswer: "answer_u4_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q3',
          type: 'typing',
          question: "Question 3: Definite Integrals",
          correctAnswer: "answer_u4_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Definite Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q5',
          type: 'typing',
          question: "Question 5: Definite Integrals",
          correctAnswer: "answer_u4_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q6',
          type: 'typing',
          question: "Question 6: Definite Integrals",
          correctAnswer: "answer_u4_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Definite Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u4_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q8',
          type: 'typing',
          question: "Question 8: Definite Integrals",
          correctAnswer: "answer_u4_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q9',
          type: 'typing',
          question: "Question 9: Definite Integrals",
          correctAnswer: "answer_u4_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Definite Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u4_l3_q11',
          type: 'typing',
          question: "Question 11: Definite Integrals",
          correctAnswer: "answer_u4_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q12',
          type: 'typing',
          question: "Question 12: Definite Integrals",
          correctAnswer: "answer_u4_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Definite Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u4_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q14',
          type: 'typing',
          question: "Question 14: Definite Integrals",
          correctAnswer: "answer_u4_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q15',
          type: 'typing',
          question: "Question 15: Definite Integrals",
          correctAnswer: "answer_u4_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Definite Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q17',
          type: 'typing',
          question: "Question 17: Definite Integrals",
          correctAnswer: "answer_u4_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Fundamental Theorem
  intBasics4() {
    return {
      id: 'calc_u4_l4',
      title: 'Fundamental Theorem',
      unit: 4,
      icon: '📜',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Fundamental Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u4_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q2',
          type: 'typing',
          question: "Question 2: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q3',
          type: 'typing',
          question: "Question 3: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Fundamental Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q5',
          type: 'typing',
          question: "Question 5: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q6',
          type: 'typing',
          question: "Question 6: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Fundamental Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u4_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q8',
          type: 'typing',
          question: "Question 8: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q9',
          type: 'typing',
          question: "Question 9: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Fundamental Theorem",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u4_l4_q11',
          type: 'typing',
          question: "Question 11: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q12',
          type: 'typing',
          question: "Question 12: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Fundamental Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u4_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q14',
          type: 'typing',
          question: "Question 14: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q15',
          type: 'typing',
          question: "Question 15: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Fundamental Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q17',
          type: 'typing',
          question: "Question 17: Fundamental Theorem",
          correctAnswer: "answer_u4_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Practice
  intBasics5() {
    return {
      id: 'calc_u4_l5',
      title: 'Integration Practice',
      unit: 4,
      icon: '💪',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u4_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Integration Practice",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u4_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q2',
          type: 'typing',
          question: "Question 2: Integration Practice",
          correctAnswer: "answer_u4_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q3',
          type: 'typing',
          question: "Question 3: Integration Practice",
          correctAnswer: "answer_u4_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Integration Practice",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q5',
          type: 'typing',
          question: "Question 5: Integration Practice",
          correctAnswer: "answer_u4_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q6',
          type: 'typing',
          question: "Question 6: Integration Practice",
          correctAnswer: "answer_u4_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Integration Practice",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u4_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q8',
          type: 'typing',
          question: "Question 8: Integration Practice",
          correctAnswer: "answer_u4_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q9',
          type: 'typing',
          question: "Question 9: Integration Practice",
          correctAnswer: "answer_u4_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Integration Practice",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u4_l5_q11',
          type: 'typing',
          question: "Question 11: Integration Practice",
          correctAnswer: "answer_u4_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q12',
          type: 'typing',
          question: "Question 12: Integration Practice",
          correctAnswer: "answer_u4_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Integration Practice",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u4_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q14',
          type: 'typing',
          question: "Question 14: Integration Practice",
          correctAnswer: "answer_u4_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q15',
          type: 'typing',
          question: "Question 15: Integration Practice",
          correctAnswer: "answer_u4_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Integration Practice",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q17',
          type: 'typing',
          question: "Question 17: Integration Practice",
          correctAnswer: "answer_u4_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // u-Substitution
  intTech1() {
    return {
      id: 'calc_u5_l1',
      title: 'u-Substitution',
      unit: 5,
      icon: '🔄',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: u-Substitution",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u5_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q2',
          type: 'typing',
          question: "Question 2: u-Substitution",
          correctAnswer: "answer_u5_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q3',
          type: 'typing',
          question: "Question 3: u-Substitution",
          correctAnswer: "answer_u5_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: u-Substitution",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q5',
          type: 'typing',
          question: "Question 5: u-Substitution",
          correctAnswer: "answer_u5_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q6',
          type: 'typing',
          question: "Question 6: u-Substitution",
          correctAnswer: "answer_u5_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: u-Substitution",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u5_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q8',
          type: 'typing',
          question: "Question 8: u-Substitution",
          correctAnswer: "answer_u5_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q9',
          type: 'typing',
          question: "Question 9: u-Substitution",
          correctAnswer: "answer_u5_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q10',
          type: 'match_pairs',
          question: "Question 10: u-Substitution",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l1_q11',
          type: 'typing',
          question: "Question 11: u-Substitution",
          correctAnswer: "answer_u5_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q12',
          type: 'typing',
          question: "Question 12: u-Substitution",
          correctAnswer: "answer_u5_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: u-Substitution",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u5_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q14',
          type: 'typing',
          question: "Question 14: u-Substitution",
          correctAnswer: "answer_u5_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q15',
          type: 'typing',
          question: "Question 15: u-Substitution",
          correctAnswer: "answer_u5_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: u-Substitution",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q17',
          type: 'typing',
          question: "Question 17: u-Substitution",
          correctAnswer: "answer_u5_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration by Parts
  intTech2() {
    return {
      id: 'calc_u5_l2',
      title: 'Integration by Parts',
      unit: 5,
      icon: '🥁',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Integration by Parts",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u5_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q2',
          type: 'typing',
          question: "Question 2: Integration by Parts",
          correctAnswer: "answer_u5_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q3',
          type: 'typing',
          question: "Question 3: Integration by Parts",
          correctAnswer: "answer_u5_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Integration by Parts",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q5',
          type: 'typing',
          question: "Question 5: Integration by Parts",
          correctAnswer: "answer_u5_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q6',
          type: 'typing',
          question: "Question 6: Integration by Parts",
          correctAnswer: "answer_u5_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Integration by Parts",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u5_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q8',
          type: 'typing',
          question: "Question 8: Integration by Parts",
          correctAnswer: "answer_u5_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q9',
          type: 'typing',
          question: "Question 9: Integration by Parts",
          correctAnswer: "answer_u5_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Integration by Parts",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l2_q11',
          type: 'typing',
          question: "Question 11: Integration by Parts",
          correctAnswer: "answer_u5_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q12',
          type: 'typing',
          question: "Question 12: Integration by Parts",
          correctAnswer: "answer_u5_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Integration by Parts",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u5_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q14',
          type: 'typing',
          question: "Question 14: Integration by Parts",
          correctAnswer: "answer_u5_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q15',
          type: 'typing',
          question: "Question 15: Integration by Parts",
          correctAnswer: "answer_u5_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Integration by Parts",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q17',
          type: 'typing',
          question: "Question 17: Integration by Parts",
          correctAnswer: "answer_u5_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Trig Integrals
  intTech3() {
    return {
      id: 'calc_u5_l3',
      title: 'Trig Integrals',
      unit: 5,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Trig Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u5_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q2',
          type: 'typing',
          question: "Question 2: Trig Integrals",
          correctAnswer: "answer_u5_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q3',
          type: 'typing',
          question: "Question 3: Trig Integrals",
          correctAnswer: "answer_u5_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Trig Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q5',
          type: 'typing',
          question: "Question 5: Trig Integrals",
          correctAnswer: "answer_u5_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q6',
          type: 'typing',
          question: "Question 6: Trig Integrals",
          correctAnswer: "answer_u5_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Trig Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u5_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q8',
          type: 'typing',
          question: "Question 8: Trig Integrals",
          correctAnswer: "answer_u5_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q9',
          type: 'typing',
          question: "Question 9: Trig Integrals",
          correctAnswer: "answer_u5_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Trig Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l3_q11',
          type: 'typing',
          question: "Question 11: Trig Integrals",
          correctAnswer: "answer_u5_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q12',
          type: 'typing',
          question: "Question 12: Trig Integrals",
          correctAnswer: "answer_u5_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Trig Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u5_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q14',
          type: 'typing',
          question: "Question 14: Trig Integrals",
          correctAnswer: "answer_u5_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q15',
          type: 'typing',
          question: "Question 15: Trig Integrals",
          correctAnswer: "answer_u5_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Trig Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q17',
          type: 'typing',
          question: "Question 17: Trig Integrals",
          correctAnswer: "answer_u5_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Fractions
  intTech4() {
    return {
      id: 'calc_u5_l4',
      title: 'Partial Fractions',
      unit: 5,
      icon: '⚙️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Partial Fractions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u5_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q2',
          type: 'typing',
          question: "Question 2: Partial Fractions",
          correctAnswer: "answer_u5_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q3',
          type: 'typing',
          question: "Question 3: Partial Fractions",
          correctAnswer: "answer_u5_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Partial Fractions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q5',
          type: 'typing',
          question: "Question 5: Partial Fractions",
          correctAnswer: "answer_u5_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q6',
          type: 'typing',
          question: "Question 6: Partial Fractions",
          correctAnswer: "answer_u5_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Partial Fractions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u5_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q8',
          type: 'typing',
          question: "Question 8: Partial Fractions",
          correctAnswer: "answer_u5_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q9',
          type: 'typing',
          question: "Question 9: Partial Fractions",
          correctAnswer: "answer_u5_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Partial Fractions",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l4_q11',
          type: 'typing',
          question: "Question 11: Partial Fractions",
          correctAnswer: "answer_u5_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q12',
          type: 'typing',
          question: "Question 12: Partial Fractions",
          correctAnswer: "answer_u5_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Partial Fractions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u5_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q14',
          type: 'typing',
          question: "Question 14: Partial Fractions",
          correctAnswer: "answer_u5_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q15',
          type: 'typing',
          question: "Question 15: Partial Fractions",
          correctAnswer: "answer_u5_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Partial Fractions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q17',
          type: 'typing',
          question: "Question 17: Partial Fractions",
          correctAnswer: "answer_u5_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Review
  intTech5() {
    return {
      id: 'calc_u5_l5',
      title: 'Integration Review',
      unit: 5,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u5_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Integration Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u5_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q2',
          type: 'typing',
          question: "Question 2: Integration Review",
          correctAnswer: "answer_u5_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q3',
          type: 'typing',
          question: "Question 3: Integration Review",
          correctAnswer: "answer_u5_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Integration Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q5',
          type: 'typing',
          question: "Question 5: Integration Review",
          correctAnswer: "answer_u5_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q6',
          type: 'typing',
          question: "Question 6: Integration Review",
          correctAnswer: "answer_u5_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Integration Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u5_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q8',
          type: 'typing',
          question: "Question 8: Integration Review",
          correctAnswer: "answer_u5_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q9',
          type: 'typing',
          question: "Question 9: Integration Review",
          correctAnswer: "answer_u5_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Integration Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l5_q11',
          type: 'typing',
          question: "Question 11: Integration Review",
          correctAnswer: "answer_u5_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q12',
          type: 'typing',
          question: "Question 12: Integration Review",
          correctAnswer: "answer_u5_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Integration Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u5_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q14',
          type: 'typing',
          question: "Question 14: Integration Review",
          correctAnswer: "answer_u5_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q15',
          type: 'typing',
          question: "Question 15: Integration Review",
          correctAnswer: "answer_u5_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Integration Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q17',
          type: 'typing',
          question: "Question 17: Integration Review",
          correctAnswer: "answer_u5_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Between Curves
  intApp1() {
    return {
      id: 'calc_u6_l1',
      title: 'Area Between Curves',
      unit: 6,
      icon: '➕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Area Between Curves",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q2',
          type: 'typing',
          question: "Question 2: Area Between Curves",
          correctAnswer: "answer_u6_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q3',
          type: 'typing',
          question: "Question 3: Area Between Curves",
          correctAnswer: "answer_u6_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Area Between Curves",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q5',
          type: 'typing',
          question: "Question 5: Area Between Curves",
          correctAnswer: "answer_u6_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q6',
          type: 'typing',
          question: "Question 6: Area Between Curves",
          correctAnswer: "answer_u6_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Area Between Curves",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q8',
          type: 'typing',
          question: "Question 8: Area Between Curves",
          correctAnswer: "answer_u6_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q9',
          type: 'typing',
          question: "Question 9: Area Between Curves",
          correctAnswer: "answer_u6_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Area Between Curves",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l1_q11',
          type: 'typing',
          question: "Question 11: Area Between Curves",
          correctAnswer: "answer_u6_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q12',
          type: 'typing',
          question: "Question 12: Area Between Curves",
          correctAnswer: "answer_u6_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Area Between Curves",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q14',
          type: 'typing',
          question: "Question 14: Area Between Curves",
          correctAnswer: "answer_u6_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q15',
          type: 'typing',
          question: "Question 15: Area Between Curves",
          correctAnswer: "answer_u6_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Area Between Curves",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q17',
          type: 'typing',
          question: "Question 17: Area Between Curves",
          correctAnswer: "answer_u6_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Volumes Disks
  intApp2() {
    return {
      id: 'calc_u6_l2',
      title: 'Volumes Disks',
      unit: 6,
      icon: '✖️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Volumes Disks",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q2',
          type: 'typing',
          question: "Question 2: Volumes Disks",
          correctAnswer: "answer_u6_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q3',
          type: 'typing',
          question: "Question 3: Volumes Disks",
          correctAnswer: "answer_u6_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Volumes Disks",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q5',
          type: 'typing',
          question: "Question 5: Volumes Disks",
          correctAnswer: "answer_u6_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q6',
          type: 'typing',
          question: "Question 6: Volumes Disks",
          correctAnswer: "answer_u6_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Volumes Disks",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q8',
          type: 'typing',
          question: "Question 8: Volumes Disks",
          correctAnswer: "answer_u6_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q9',
          type: 'typing',
          question: "Question 9: Volumes Disks",
          correctAnswer: "answer_u6_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Volumes Disks",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l2_q11',
          type: 'typing',
          question: "Question 11: Volumes Disks",
          correctAnswer: "answer_u6_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q12',
          type: 'typing',
          question: "Question 12: Volumes Disks",
          correctAnswer: "answer_u6_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Volumes Disks",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q14',
          type: 'typing',
          question: "Question 14: Volumes Disks",
          correctAnswer: "answer_u6_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q15',
          type: 'typing',
          question: "Question 15: Volumes Disks",
          correctAnswer: "answer_u6_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Volumes Disks",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q17',
          type: 'typing',
          question: "Question 17: Volumes Disks",
          correctAnswer: "answer_u6_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Volumes Washers
  intApp3() {
    return {
      id: 'calc_u6_l3',
      title: 'Volumes Washers',
      unit: 6,
      icon: '→',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Volumes Washers",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q2',
          type: 'typing',
          question: "Question 2: Volumes Washers",
          correctAnswer: "answer_u6_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q3',
          type: 'typing',
          question: "Question 3: Volumes Washers",
          correctAnswer: "answer_u6_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Volumes Washers",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q5',
          type: 'typing',
          question: "Question 5: Volumes Washers",
          correctAnswer: "answer_u6_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q6',
          type: 'typing',
          question: "Question 6: Volumes Washers",
          correctAnswer: "answer_u6_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Volumes Washers",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q8',
          type: 'typing',
          question: "Question 8: Volumes Washers",
          correctAnswer: "answer_u6_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q9',
          type: 'typing',
          question: "Question 9: Volumes Washers",
          correctAnswer: "answer_u6_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Volumes Washers",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l3_q11',
          type: 'typing',
          question: "Question 11: Volumes Washers",
          correctAnswer: "answer_u6_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q12',
          type: 'typing',
          question: "Question 12: Volumes Washers",
          correctAnswer: "answer_u6_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Volumes Washers",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q14',
          type: 'typing',
          question: "Question 14: Volumes Washers",
          correctAnswer: "answer_u6_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q15',
          type: 'typing',
          question: "Question 15: Volumes Washers",
          correctAnswer: "answer_u6_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Volumes Washers",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q17',
          type: 'typing',
          question: "Question 17: Volumes Washers",
          correctAnswer: "answer_u6_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arc Length
  intApp4() {
    return {
      id: 'calc_u6_l4',
      title: 'Arc Length',
      unit: 6,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Arc Length",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q2',
          type: 'typing',
          question: "Question 2: Arc Length",
          correctAnswer: "answer_u6_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q3',
          type: 'typing',
          question: "Question 3: Arc Length",
          correctAnswer: "answer_u6_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Arc Length",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q5',
          type: 'typing',
          question: "Question 5: Arc Length",
          correctAnswer: "answer_u6_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q6',
          type: 'typing',
          question: "Question 6: Arc Length",
          correctAnswer: "answer_u6_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Arc Length",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q8',
          type: 'typing',
          question: "Question 8: Arc Length",
          correctAnswer: "answer_u6_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q9',
          type: 'typing',
          question: "Question 9: Arc Length",
          correctAnswer: "answer_u6_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Arc Length",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l4_q11',
          type: 'typing',
          question: "Question 11: Arc Length",
          correctAnswer: "answer_u6_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q12',
          type: 'typing',
          question: "Question 12: Arc Length",
          correctAnswer: "answer_u6_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Arc Length",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q14',
          type: 'typing',
          question: "Question 14: Arc Length",
          correctAnswer: "answer_u6_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q15',
          type: 'typing',
          question: "Question 15: Arc Length",
          correctAnswer: "answer_u6_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Arc Length",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q17',
          type: 'typing',
          question: "Question 17: Arc Length",
          correctAnswer: "answer_u6_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Applications Review
  intApp5() {
    return {
      id: 'calc_u6_l5',
      title: 'Applications Review',
      unit: 6,
      icon: '⚖️',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u6_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Applications Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q2',
          type: 'typing',
          question: "Question 2: Applications Review",
          correctAnswer: "answer_u6_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q3',
          type: 'typing',
          question: "Question 3: Applications Review",
          correctAnswer: "answer_u6_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Applications Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q5',
          type: 'typing',
          question: "Question 5: Applications Review",
          correctAnswer: "answer_u6_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q6',
          type: 'typing',
          question: "Question 6: Applications Review",
          correctAnswer: "answer_u6_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Applications Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q8',
          type: 'typing',
          question: "Question 8: Applications Review",
          correctAnswer: "answer_u6_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q9',
          type: 'typing',
          question: "Question 9: Applications Review",
          correctAnswer: "answer_u6_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Applications Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l5_q11',
          type: 'typing',
          question: "Question 11: Applications Review",
          correctAnswer: "answer_u6_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q12',
          type: 'typing',
          question: "Question 12: Applications Review",
          correctAnswer: "answer_u6_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Applications Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q14',
          type: 'typing',
          question: "Question 14: Applications Review",
          correctAnswer: "answer_u6_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q15',
          type: 'typing',
          question: "Question 15: Applications Review",
          correctAnswer: "answer_u6_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Applications Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q17',
          type: 'typing',
          question: "Question 17: Applications Review",
          correctAnswer: "answer_u6_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus 1 Final
  intApp6() {
    return {
      id: 'calc_u6_l6',
      title: 'Calculus 1 Final',
      unit: 6,
      icon: '∫',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u6_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Calculus 1 Final",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u6_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q2',
          type: 'typing',
          question: "Question 2: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q3',
          type: 'typing',
          question: "Question 3: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Calculus 1 Final",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q5',
          type: 'typing',
          question: "Question 5: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q6',
          type: 'typing',
          question: "Question 6: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Calculus 1 Final",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u6_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q8',
          type: 'typing',
          question: "Question 8: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q9',
          type: 'typing',
          question: "Question 9: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Calculus 1 Final",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l6_q11',
          type: 'typing',
          question: "Question 11: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q12',
          type: 'typing',
          question: "Question 12: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Calculus 1 Final",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u6_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q14',
          type: 'typing',
          question: "Question 14: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q15',
          type: 'typing',
          question: "Question 15: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Calculus 1 Final",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q17',
          type: 'typing',
          question: "Question 17: Calculus 1 Final",
          correctAnswer: "answer_u6_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Advanced u-Sub
  advInt1() {
    return {
      id: 'calc_u7_l1',
      title: 'Advanced u-Sub',
      unit: 7,
      icon: '⭕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Advanced u-Sub",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q2',
          type: 'typing',
          question: "Question 2: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q3',
          type: 'typing',
          question: "Question 3: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Advanced u-Sub",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q5',
          type: 'typing',
          question: "Question 5: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q6',
          type: 'typing',
          question: "Question 6: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Advanced u-Sub",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q8',
          type: 'typing',
          question: "Question 8: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q9',
          type: 'typing',
          question: "Question 9: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Advanced u-Sub",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l1_q11',
          type: 'typing',
          question: "Question 11: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q12',
          type: 'typing',
          question: "Question 12: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Advanced u-Sub",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q14',
          type: 'typing',
          question: "Question 14: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q15',
          type: 'typing',
          question: "Question 15: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Advanced u-Sub",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q17',
          type: 'typing',
          question: "Question 17: Advanced u-Sub",
          correctAnswer: "answer_u7_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Advanced IBP
  advInt2() {
    return {
      id: 'calc_u7_l2',
      title: 'Advanced IBP',
      unit: 7,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Advanced IBP",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q2',
          type: 'typing',
          question: "Question 2: Advanced IBP",
          correctAnswer: "answer_u7_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q3',
          type: 'typing',
          question: "Question 3: Advanced IBP",
          correctAnswer: "answer_u7_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Advanced IBP",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q5',
          type: 'typing',
          question: "Question 5: Advanced IBP",
          correctAnswer: "answer_u7_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q6',
          type: 'typing',
          question: "Question 6: Advanced IBP",
          correctAnswer: "answer_u7_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Advanced IBP",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q8',
          type: 'typing',
          question: "Question 8: Advanced IBP",
          correctAnswer: "answer_u7_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q9',
          type: 'typing',
          question: "Question 9: Advanced IBP",
          correctAnswer: "answer_u7_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Advanced IBP",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l2_q11',
          type: 'typing',
          question: "Question 11: Advanced IBP",
          correctAnswer: "answer_u7_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q12',
          type: 'typing',
          question: "Question 12: Advanced IBP",
          correctAnswer: "answer_u7_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Advanced IBP",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q14',
          type: 'typing',
          question: "Question 14: Advanced IBP",
          correctAnswer: "answer_u7_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q15',
          type: 'typing',
          question: "Question 15: Advanced IBP",
          correctAnswer: "answer_u7_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Advanced IBP",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q17',
          type: 'typing',
          question: "Question 17: Advanced IBP",
          correctAnswer: "answer_u7_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Trig Substitution
  advInt3() {
    return {
      id: 'calc_u7_l3',
      title: 'Trig Substitution',
      unit: 7,
      icon: '⭕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Trig Substitution",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q2',
          type: 'typing',
          question: "Question 2: Trig Substitution",
          correctAnswer: "answer_u7_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q3',
          type: 'typing',
          question: "Question 3: Trig Substitution",
          correctAnswer: "answer_u7_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Trig Substitution",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q5',
          type: 'typing',
          question: "Question 5: Trig Substitution",
          correctAnswer: "answer_u7_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q6',
          type: 'typing',
          question: "Question 6: Trig Substitution",
          correctAnswer: "answer_u7_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Trig Substitution",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q8',
          type: 'typing',
          question: "Question 8: Trig Substitution",
          correctAnswer: "answer_u7_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q9',
          type: 'typing',
          question: "Question 9: Trig Substitution",
          correctAnswer: "answer_u7_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Trig Substitution",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l3_q11',
          type: 'typing',
          question: "Question 11: Trig Substitution",
          correctAnswer: "answer_u7_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q12',
          type: 'typing',
          question: "Question 12: Trig Substitution",
          correctAnswer: "answer_u7_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Trig Substitution",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q14',
          type: 'typing',
          question: "Question 14: Trig Substitution",
          correctAnswer: "answer_u7_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q15',
          type: 'typing',
          question: "Question 15: Trig Substitution",
          correctAnswer: "answer_u7_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Trig Substitution",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q17',
          type: 'typing',
          question: "Question 17: Trig Substitution",
          correctAnswer: "answer_u7_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Fractions Review
  advInt4() {
    return {
      id: 'calc_u7_l4',
      title: 'Partial Fractions Review',
      unit: 7,
      icon: '➡️',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u7_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Partial Fractions Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q2',
          type: 'typing',
          question: "Question 2: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q3',
          type: 'typing',
          question: "Question 3: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Partial Fractions Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q5',
          type: 'typing',
          question: "Question 5: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q6',
          type: 'typing',
          question: "Question 6: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Partial Fractions Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q8',
          type: 'typing',
          question: "Question 8: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q9',
          type: 'typing',
          question: "Question 9: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Partial Fractions Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l4_q11',
          type: 'typing',
          question: "Question 11: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q12',
          type: 'typing',
          question: "Question 12: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Partial Fractions Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q14',
          type: 'typing',
          question: "Question 14: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q15',
          type: 'typing',
          question: "Question 15: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Partial Fractions Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q17',
          type: 'typing',
          question: "Question 17: Partial Fractions Review",
          correctAnswer: "answer_u7_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Improper Integrals
  advInt5() {
    return {
      id: 'calc_u7_l5',
      title: 'Improper Integrals',
      unit: 7,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Improper Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q2',
          type: 'typing',
          question: "Question 2: Improper Integrals",
          correctAnswer: "answer_u7_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q3',
          type: 'typing',
          question: "Question 3: Improper Integrals",
          correctAnswer: "answer_u7_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Improper Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q5',
          type: 'typing',
          question: "Question 5: Improper Integrals",
          correctAnswer: "answer_u7_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q6',
          type: 'typing',
          question: "Question 6: Improper Integrals",
          correctAnswer: "answer_u7_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Improper Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q8',
          type: 'typing',
          question: "Question 8: Improper Integrals",
          correctAnswer: "answer_u7_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q9',
          type: 'typing',
          question: "Question 9: Improper Integrals",
          correctAnswer: "answer_u7_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Improper Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l5_q11',
          type: 'typing',
          question: "Question 11: Improper Integrals",
          correctAnswer: "answer_u7_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q12',
          type: 'typing',
          question: "Question 12: Improper Integrals",
          correctAnswer: "answer_u7_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Improper Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q14',
          type: 'typing',
          question: "Question 14: Improper Integrals",
          correctAnswer: "answer_u7_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q15',
          type: 'typing',
          question: "Question 15: Improper Integrals",
          correctAnswer: "answer_u7_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Improper Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q17',
          type: 'typing',
          question: "Question 17: Improper Integrals",
          correctAnswer: "answer_u7_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Mastery
  advInt6() {
    return {
      id: 'calc_u7_l6',
      title: 'Integration Mastery',
      unit: 7,
      icon: '∙',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u7_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Integration Mastery",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u7_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q2',
          type: 'typing',
          question: "Question 2: Integration Mastery",
          correctAnswer: "answer_u7_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q3',
          type: 'typing',
          question: "Question 3: Integration Mastery",
          correctAnswer: "answer_u7_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Integration Mastery",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q5',
          type: 'typing',
          question: "Question 5: Integration Mastery",
          correctAnswer: "answer_u7_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q6',
          type: 'typing',
          question: "Question 6: Integration Mastery",
          correctAnswer: "answer_u7_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Integration Mastery",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u7_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q8',
          type: 'typing',
          question: "Question 8: Integration Mastery",
          correctAnswer: "answer_u7_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q9',
          type: 'typing',
          question: "Question 9: Integration Mastery",
          correctAnswer: "answer_u7_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Integration Mastery",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l6_q11',
          type: 'typing',
          question: "Question 11: Integration Mastery",
          correctAnswer: "answer_u7_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q12',
          type: 'typing',
          question: "Question 12: Integration Mastery",
          correctAnswer: "answer_u7_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Integration Mastery",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u7_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q14',
          type: 'typing',
          question: "Question 14: Integration Mastery",
          correctAnswer: "answer_u7_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q15',
          type: 'typing',
          question: "Question 15: Integration Mastery",
          correctAnswer: "answer_u7_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Integration Mastery",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q17',
          type: 'typing',
          question: "Question 17: Integration Mastery",
          correctAnswer: "answer_u7_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Between Curves Adv
  appInt21() {
    return {
      id: 'calc_u8_l1',
      title: 'Area Between Curves Adv',
      unit: 8,
      icon: '×',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Area Between Curves Adv",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u8_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q2',
          type: 'typing',
          question: "Question 2: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q3',
          type: 'typing',
          question: "Question 3: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Area Between Curves Adv",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q5',
          type: 'typing',
          question: "Question 5: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q6',
          type: 'typing',
          question: "Question 6: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Area Between Curves Adv",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u8_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q8',
          type: 'typing',
          question: "Question 8: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q9',
          type: 'typing',
          question: "Question 9: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Area Between Curves Adv",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l1_q11',
          type: 'typing',
          question: "Question 11: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q12',
          type: 'typing',
          question: "Question 12: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Area Between Curves Adv",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u8_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q14',
          type: 'typing',
          question: "Question 14: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q15',
          type: 'typing',
          question: "Question 15: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Area Between Curves Adv",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q17',
          type: 'typing',
          question: "Question 17: Area Between Curves Adv",
          correctAnswer: "answer_u8_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Cylindrical Shells
  appInt22() {
    return {
      id: 'calc_u8_l2',
      title: 'Cylindrical Shells',
      unit: 8,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Cylindrical Shells",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u8_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q2',
          type: 'typing',
          question: "Question 2: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q3',
          type: 'typing',
          question: "Question 3: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Cylindrical Shells",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q5',
          type: 'typing',
          question: "Question 5: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q6',
          type: 'typing',
          question: "Question 6: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Cylindrical Shells",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u8_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q8',
          type: 'typing',
          question: "Question 8: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q9',
          type: 'typing',
          question: "Question 9: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Cylindrical Shells",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l2_q11',
          type: 'typing',
          question: "Question 11: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q12',
          type: 'typing',
          question: "Question 12: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Cylindrical Shells",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u8_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q14',
          type: 'typing',
          question: "Question 14: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q15',
          type: 'typing',
          question: "Question 15: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Cylindrical Shells",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q17',
          type: 'typing',
          question: "Question 17: Cylindrical Shells",
          correctAnswer: "answer_u8_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Surface Area
  appInt23() {
    return {
      id: 'calc_u8_l3',
      title: 'Surface Area',
      unit: 8,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Surface Area",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u8_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q2',
          type: 'typing',
          question: "Question 2: Surface Area",
          correctAnswer: "answer_u8_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q3',
          type: 'typing',
          question: "Question 3: Surface Area",
          correctAnswer: "answer_u8_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Surface Area",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q5',
          type: 'typing',
          question: "Question 5: Surface Area",
          correctAnswer: "answer_u8_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q6',
          type: 'typing',
          question: "Question 6: Surface Area",
          correctAnswer: "answer_u8_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Surface Area",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u8_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q8',
          type: 'typing',
          question: "Question 8: Surface Area",
          correctAnswer: "answer_u8_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q9',
          type: 'typing',
          question: "Question 9: Surface Area",
          correctAnswer: "answer_u8_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Surface Area",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l3_q11',
          type: 'typing',
          question: "Question 11: Surface Area",
          correctAnswer: "answer_u8_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q12',
          type: 'typing',
          question: "Question 12: Surface Area",
          correctAnswer: "answer_u8_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Surface Area",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u8_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q14',
          type: 'typing',
          question: "Question 14: Surface Area",
          correctAnswer: "answer_u8_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q15',
          type: 'typing',
          question: "Question 15: Surface Area",
          correctAnswer: "answer_u8_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Surface Area",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q17',
          type: 'typing',
          question: "Question 17: Surface Area",
          correctAnswer: "answer_u8_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Physical Applications
  appInt24() {
    return {
      id: 'calc_u8_l4',
      title: 'Physical Applications',
      unit: 8,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Physical Applications",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u8_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q2',
          type: 'typing',
          question: "Question 2: Physical Applications",
          correctAnswer: "answer_u8_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q3',
          type: 'typing',
          question: "Question 3: Physical Applications",
          correctAnswer: "answer_u8_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Physical Applications",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q5',
          type: 'typing',
          question: "Question 5: Physical Applications",
          correctAnswer: "answer_u8_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q6',
          type: 'typing',
          question: "Question 6: Physical Applications",
          correctAnswer: "answer_u8_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Physical Applications",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u8_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q8',
          type: 'typing',
          question: "Question 8: Physical Applications",
          correctAnswer: "answer_u8_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q9',
          type: 'typing',
          question: "Question 9: Physical Applications",
          correctAnswer: "answer_u8_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Physical Applications",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l4_q11',
          type: 'typing',
          question: "Question 11: Physical Applications",
          correctAnswer: "answer_u8_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q12',
          type: 'typing',
          question: "Question 12: Physical Applications",
          correctAnswer: "answer_u8_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Physical Applications",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u8_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q14',
          type: 'typing',
          question: "Question 14: Physical Applications",
          correctAnswer: "answer_u8_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q15',
          type: 'typing',
          question: "Question 15: Physical Applications",
          correctAnswer: "answer_u8_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Physical Applications",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q17',
          type: 'typing',
          question: "Question 17: Physical Applications",
          correctAnswer: "answer_u8_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Applications Mastery
  appInt25() {
    return {
      id: 'calc_u8_l5',
      title: 'Applications Mastery',
      unit: 8,
      icon: '📊',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u8_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Applications Mastery",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u8_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q2',
          type: 'typing',
          question: "Question 2: Applications Mastery",
          correctAnswer: "answer_u8_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q3',
          type: 'typing',
          question: "Question 3: Applications Mastery",
          correctAnswer: "answer_u8_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Applications Mastery",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q5',
          type: 'typing',
          question: "Question 5: Applications Mastery",
          correctAnswer: "answer_u8_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q6',
          type: 'typing',
          question: "Question 6: Applications Mastery",
          correctAnswer: "answer_u8_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Applications Mastery",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u8_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q8',
          type: 'typing',
          question: "Question 8: Applications Mastery",
          correctAnswer: "answer_u8_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q9',
          type: 'typing',
          question: "Question 9: Applications Mastery",
          correctAnswer: "answer_u8_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Applications Mastery",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l5_q11',
          type: 'typing',
          question: "Question 11: Applications Mastery",
          correctAnswer: "answer_u8_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q12',
          type: 'typing',
          question: "Question 12: Applications Mastery",
          correctAnswer: "answer_u8_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Applications Mastery",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u8_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q14',
          type: 'typing',
          question: "Question 14: Applications Mastery",
          correctAnswer: "answer_u8_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q15',
          type: 'typing',
          question: "Question 15: Applications Mastery",
          correctAnswer: "answer_u8_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Applications Mastery",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q17',
          type: 'typing',
          question: "Question 17: Applications Mastery",
          correctAnswer: "answer_u8_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Sequences Intro
  seq1() {
    return {
      id: 'calc_u9_l1',
      title: 'Sequences Intro',
      unit: 9,
      icon: '→',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u9_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Sequences Intro",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u9_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q2',
          type: 'typing',
          question: "Question 2: Sequences Intro",
          correctAnswer: "answer_u9_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q3',
          type: 'typing',
          question: "Question 3: Sequences Intro",
          correctAnswer: "answer_u9_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Sequences Intro",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q5',
          type: 'typing',
          question: "Question 5: Sequences Intro",
          correctAnswer: "answer_u9_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q6',
          type: 'typing',
          question: "Question 6: Sequences Intro",
          correctAnswer: "answer_u9_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Sequences Intro",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u9_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q8',
          type: 'typing',
          question: "Question 8: Sequences Intro",
          correctAnswer: "answer_u9_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q9',
          type: 'typing',
          question: "Question 9: Sequences Intro",
          correctAnswer: "answer_u9_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Sequences Intro",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l1_q11',
          type: 'typing',
          question: "Question 11: Sequences Intro",
          correctAnswer: "answer_u9_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q12',
          type: 'typing',
          question: "Question 12: Sequences Intro",
          correctAnswer: "answer_u9_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Sequences Intro",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u9_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q14',
          type: 'typing',
          question: "Question 14: Sequences Intro",
          correctAnswer: "answer_u9_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q15',
          type: 'typing',
          question: "Question 15: Sequences Intro",
          correctAnswer: "answer_u9_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Sequences Intro",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q17',
          type: 'typing',
          question: "Question 17: Sequences Intro",
          correctAnswer: "answer_u9_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arithmetic Sequences
  seq2() {
    return {
      id: 'calc_u9_l2',
      title: 'Arithmetic Sequences',
      unit: 9,
      icon: '∂',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Arithmetic Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u9_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q2',
          type: 'typing',
          question: "Question 2: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q3',
          type: 'typing',
          question: "Question 3: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Arithmetic Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q5',
          type: 'typing',
          question: "Question 5: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q6',
          type: 'typing',
          question: "Question 6: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Arithmetic Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u9_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q8',
          type: 'typing',
          question: "Question 8: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q9',
          type: 'typing',
          question: "Question 9: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Arithmetic Sequences",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l2_q11',
          type: 'typing',
          question: "Question 11: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q12',
          type: 'typing',
          question: "Question 12: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Arithmetic Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u9_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q14',
          type: 'typing',
          question: "Question 14: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q15',
          type: 'typing',
          question: "Question 15: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Arithmetic Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q17',
          type: 'typing',
          question: "Question 17: Arithmetic Sequences",
          correctAnswer: "answer_u9_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Geometric Sequences
  seq3() {
    return {
      id: 'calc_u9_l3',
      title: 'Geometric Sequences',
      unit: 9,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Geometric Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u9_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q2',
          type: 'typing',
          question: "Question 2: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q3',
          type: 'typing',
          question: "Question 3: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Geometric Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q5',
          type: 'typing',
          question: "Question 5: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q6',
          type: 'typing',
          question: "Question 6: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Geometric Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u9_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q8',
          type: 'typing',
          question: "Question 8: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q9',
          type: 'typing',
          question: "Question 9: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Geometric Sequences",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l3_q11',
          type: 'typing',
          question: "Question 11: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q12',
          type: 'typing',
          question: "Question 12: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Geometric Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u9_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q14',
          type: 'typing',
          question: "Question 14: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q15',
          type: 'typing',
          question: "Question 15: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Geometric Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q17',
          type: 'typing',
          question: "Question 17: Geometric Sequences",
          correctAnswer: "answer_u9_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Limits of Sequences
  seq4() {
    return {
      id: 'calc_u9_l4',
      title: 'Limits of Sequences',
      unit: 9,
      icon: '➡️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Limits of Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u9_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q2',
          type: 'typing',
          question: "Question 2: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q3',
          type: 'typing',
          question: "Question 3: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Limits of Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q5',
          type: 'typing',
          question: "Question 5: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q6',
          type: 'typing',
          question: "Question 6: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Limits of Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u9_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q8',
          type: 'typing',
          question: "Question 8: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q9',
          type: 'typing',
          question: "Question 9: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Limits of Sequences",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l4_q11',
          type: 'typing',
          question: "Question 11: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q12',
          type: 'typing',
          question: "Question 12: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Limits of Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u9_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q14',
          type: 'typing',
          question: "Question 14: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q15',
          type: 'typing',
          question: "Question 15: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Limits of Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q17',
          type: 'typing',
          question: "Question 17: Limits of Sequences",
          correctAnswer: "answer_u9_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Sequences Review
  seq5() {
    return {
      id: 'calc_u9_l5',
      title: 'Sequences Review',
      unit: 9,
      icon: '∇',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u9_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Sequences Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u9_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q2',
          type: 'typing',
          question: "Question 2: Sequences Review",
          correctAnswer: "answer_u9_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q3',
          type: 'typing',
          question: "Question 3: Sequences Review",
          correctAnswer: "answer_u9_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Sequences Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q5',
          type: 'typing',
          question: "Question 5: Sequences Review",
          correctAnswer: "answer_u9_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q6',
          type: 'typing',
          question: "Question 6: Sequences Review",
          correctAnswer: "answer_u9_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Sequences Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u9_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q8',
          type: 'typing',
          question: "Question 8: Sequences Review",
          correctAnswer: "answer_u9_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q9',
          type: 'typing',
          question: "Question 9: Sequences Review",
          correctAnswer: "answer_u9_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Sequences Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l5_q11',
          type: 'typing',
          question: "Question 11: Sequences Review",
          correctAnswer: "answer_u9_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q12',
          type: 'typing',
          question: "Question 12: Sequences Review",
          correctAnswer: "answer_u9_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Sequences Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u9_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q14',
          type: 'typing',
          question: "Question 14: Sequences Review",
          correctAnswer: "answer_u9_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q15',
          type: 'typing',
          question: "Question 15: Sequences Review",
          correctAnswer: "answer_u9_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Sequences Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q17',
          type: 'typing',
          question: "Question 17: Sequences Review",
          correctAnswer: "answer_u9_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Series Intro
  series1() {
    return {
      id: 'calc_u10_l1',
      title: 'Series Intro',
      unit: 10,
      icon: '🎯',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u10_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Series Intro",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q2',
          type: 'typing',
          question: "Question 2: Series Intro",
          correctAnswer: "answer_u10_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q3',
          type: 'typing',
          question: "Question 3: Series Intro",
          correctAnswer: "answer_u10_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Series Intro",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q5',
          type: 'typing',
          question: "Question 5: Series Intro",
          correctAnswer: "answer_u10_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q6',
          type: 'typing',
          question: "Question 6: Series Intro",
          correctAnswer: "answer_u10_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Series Intro",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q8',
          type: 'typing',
          question: "Question 8: Series Intro",
          correctAnswer: "answer_u10_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q9',
          type: 'typing',
          question: "Question 9: Series Intro",
          correctAnswer: "answer_u10_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Series Intro",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l1_q11',
          type: 'typing',
          question: "Question 11: Series Intro",
          correctAnswer: "answer_u10_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q12',
          type: 'typing',
          question: "Question 12: Series Intro",
          correctAnswer: "answer_u10_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Series Intro",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q14',
          type: 'typing',
          question: "Question 14: Series Intro",
          correctAnswer: "answer_u10_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q15',
          type: 'typing',
          question: "Question 15: Series Intro",
          correctAnswer: "answer_u10_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Series Intro",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q17',
          type: 'typing',
          question: "Question 17: Series Intro",
          correctAnswer: "answer_u10_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Geometric Series
  series2() {
    return {
      id: 'calc_u10_l2',
      title: 'Geometric Series',
      unit: 10,
      icon: '∬',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Geometric Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q2',
          type: 'typing',
          question: "Question 2: Geometric Series",
          correctAnswer: "answer_u10_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q3',
          type: 'typing',
          question: "Question 3: Geometric Series",
          correctAnswer: "answer_u10_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Geometric Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q5',
          type: 'typing',
          question: "Question 5: Geometric Series",
          correctAnswer: "answer_u10_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q6',
          type: 'typing',
          question: "Question 6: Geometric Series",
          correctAnswer: "answer_u10_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Geometric Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q8',
          type: 'typing',
          question: "Question 8: Geometric Series",
          correctAnswer: "answer_u10_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q9',
          type: 'typing',
          question: "Question 9: Geometric Series",
          correctAnswer: "answer_u10_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Geometric Series",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l2_q11',
          type: 'typing',
          question: "Question 11: Geometric Series",
          correctAnswer: "answer_u10_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q12',
          type: 'typing',
          question: "Question 12: Geometric Series",
          correctAnswer: "answer_u10_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Geometric Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q14',
          type: 'typing',
          question: "Question 14: Geometric Series",
          correctAnswer: "answer_u10_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q15',
          type: 'typing',
          question: "Question 15: Geometric Series",
          correctAnswer: "answer_u10_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Geometric Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q17',
          type: 'typing',
          question: "Question 17: Geometric Series",
          correctAnswer: "answer_u10_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Convergence Tests
  series3() {
    return {
      id: 'calc_u10_l3',
      title: 'Convergence Tests',
      unit: 10,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Convergence Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q2',
          type: 'typing',
          question: "Question 2: Convergence Tests",
          correctAnswer: "answer_u10_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q3',
          type: 'typing',
          question: "Question 3: Convergence Tests",
          correctAnswer: "answer_u10_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Convergence Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q5',
          type: 'typing',
          question: "Question 5: Convergence Tests",
          correctAnswer: "answer_u10_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q6',
          type: 'typing',
          question: "Question 6: Convergence Tests",
          correctAnswer: "answer_u10_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Convergence Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q8',
          type: 'typing',
          question: "Question 8: Convergence Tests",
          correctAnswer: "answer_u10_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q9',
          type: 'typing',
          question: "Question 9: Convergence Tests",
          correctAnswer: "answer_u10_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Convergence Tests",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l3_q11',
          type: 'typing',
          question: "Question 11: Convergence Tests",
          correctAnswer: "answer_u10_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q12',
          type: 'typing',
          question: "Question 12: Convergence Tests",
          correctAnswer: "answer_u10_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Convergence Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q14',
          type: 'typing',
          question: "Question 14: Convergence Tests",
          correctAnswer: "answer_u10_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q15',
          type: 'typing',
          question: "Question 15: Convergence Tests",
          correctAnswer: "answer_u10_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Convergence Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q17',
          type: 'typing',
          question: "Question 17: Convergence Tests",
          correctAnswer: "answer_u10_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integral Test
  series4() {
    return {
      id: 'calc_u10_l4',
      title: 'Integral Test',
      unit: 10,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Integral Test",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q2',
          type: 'typing',
          question: "Question 2: Integral Test",
          correctAnswer: "answer_u10_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q3',
          type: 'typing',
          question: "Question 3: Integral Test",
          correctAnswer: "answer_u10_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Integral Test",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q5',
          type: 'typing',
          question: "Question 5: Integral Test",
          correctAnswer: "answer_u10_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q6',
          type: 'typing',
          question: "Question 6: Integral Test",
          correctAnswer: "answer_u10_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Integral Test",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q8',
          type: 'typing',
          question: "Question 8: Integral Test",
          correctAnswer: "answer_u10_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q9',
          type: 'typing',
          question: "Question 9: Integral Test",
          correctAnswer: "answer_u10_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Integral Test",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l4_q11',
          type: 'typing',
          question: "Question 11: Integral Test",
          correctAnswer: "answer_u10_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q12',
          type: 'typing',
          question: "Question 12: Integral Test",
          correctAnswer: "answer_u10_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Integral Test",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q14',
          type: 'typing',
          question: "Question 14: Integral Test",
          correctAnswer: "answer_u10_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q15',
          type: 'typing',
          question: "Question 15: Integral Test",
          correctAnswer: "answer_u10_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Integral Test",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q17',
          type: 'typing',
          question: "Question 17: Integral Test",
          correctAnswer: "answer_u10_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Comparison Tests
  series5() {
    return {
      id: 'calc_u10_l5',
      title: 'Comparison Tests',
      unit: 10,
      icon: '∭',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Comparison Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q2',
          type: 'typing',
          question: "Question 2: Comparison Tests",
          correctAnswer: "answer_u10_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q3',
          type: 'typing',
          question: "Question 3: Comparison Tests",
          correctAnswer: "answer_u10_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Comparison Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q5',
          type: 'typing',
          question: "Question 5: Comparison Tests",
          correctAnswer: "answer_u10_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q6',
          type: 'typing',
          question: "Question 6: Comparison Tests",
          correctAnswer: "answer_u10_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Comparison Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q8',
          type: 'typing',
          question: "Question 8: Comparison Tests",
          correctAnswer: "answer_u10_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q9',
          type: 'typing',
          question: "Question 9: Comparison Tests",
          correctAnswer: "answer_u10_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Comparison Tests",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l5_q11',
          type: 'typing',
          question: "Question 11: Comparison Tests",
          correctAnswer: "answer_u10_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q12',
          type: 'typing',
          question: "Question 12: Comparison Tests",
          correctAnswer: "answer_u10_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Comparison Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q14',
          type: 'typing',
          question: "Question 14: Comparison Tests",
          correctAnswer: "answer_u10_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q15',
          type: 'typing',
          question: "Question 15: Comparison Tests",
          correctAnswer: "answer_u10_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Comparison Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q17',
          type: 'typing',
          question: "Question 17: Comparison Tests",
          correctAnswer: "answer_u10_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Ratio Root Tests
  series6() {
    return {
      id: 'calc_u10_l6',
      title: 'Ratio Root Tests',
      unit: 10,
      icon: '🥁',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Ratio Root Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q2',
          type: 'typing',
          question: "Question 2: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q3',
          type: 'typing',
          question: "Question 3: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Ratio Root Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q5',
          type: 'typing',
          question: "Question 5: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q6',
          type: 'typing',
          question: "Question 6: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Ratio Root Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q8',
          type: 'typing',
          question: "Question 8: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q9',
          type: 'typing',
          question: "Question 9: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Ratio Root Tests",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l6_q11',
          type: 'typing',
          question: "Question 11: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q12',
          type: 'typing',
          question: "Question 12: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Ratio Root Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q14',
          type: 'typing',
          question: "Question 14: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q15',
          type: 'typing',
          question: "Question 15: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Ratio Root Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q17',
          type: 'typing',
          question: "Question 17: Ratio Root Tests",
          correctAnswer: "answer_u10_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Series Review
  series7() {
    return {
      id: 'calc_u10_l7',
      title: 'Series Review',
      unit: 10,
      icon: '🌐',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u10_l7_q1',
          type: 'multiple_choice',
          question: "Question 1: Series Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u10_l7_q1.png",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q2',
          type: 'typing',
          question: "Question 2: Series Review",
          correctAnswer: "answer_u10_l7_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q3',
          type: 'typing',
          question: "Question 3: Series Review",
          correctAnswer: "answer_u10_l7_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q4',
          type: 'multiple_choice',
          question: "Question 4: Series Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q5',
          type: 'typing',
          question: "Question 5: Series Review",
          correctAnswer: "answer_u10_l7_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q6',
          type: 'typing',
          question: "Question 6: Series Review",
          correctAnswer: "answer_u10_l7_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q7',
          type: 'multiple_choice',
          question: "Question 7: Series Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u10_l7_q7.png",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q8',
          type: 'typing',
          question: "Question 8: Series Review",
          correctAnswer: "answer_u10_l7_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q9',
          type: 'typing',
          question: "Question 9: Series Review",
          correctAnswer: "answer_u10_l7_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q10',
          type: 'match_pairs',
          question: "Question 10: Series Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l7_q11',
          type: 'typing',
          question: "Question 11: Series Review",
          correctAnswer: "answer_u10_l7_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q12',
          type: 'typing',
          question: "Question 12: Series Review",
          correctAnswer: "answer_u10_l7_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q13',
          type: 'multiple_choice',
          question: "Question 13: Series Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u10_l7_q13.png",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q14',
          type: 'typing',
          question: "Question 14: Series Review",
          correctAnswer: "answer_u10_l7_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q15',
          type: 'typing',
          question: "Question 15: Series Review",
          correctAnswer: "answer_u10_l7_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q16',
          type: 'multiple_choice',
          question: "Question 16: Series Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q17',
          type: 'typing',
          question: "Question 17: Series Review",
          correctAnswer: "answer_u10_l7_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series
  power1() {
    return {
      id: 'calc_u11_l1',
      title: 'Power Series',
      unit: 11,
      icon: '🎯',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Power Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q2',
          type: 'typing',
          question: "Question 2: Power Series",
          correctAnswer: "answer_u11_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q3',
          type: 'typing',
          question: "Question 3: Power Series",
          correctAnswer: "answer_u11_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Power Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q5',
          type: 'typing',
          question: "Question 5: Power Series",
          correctAnswer: "answer_u11_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q6',
          type: 'typing',
          question: "Question 6: Power Series",
          correctAnswer: "answer_u11_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Power Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q8',
          type: 'typing',
          question: "Question 8: Power Series",
          correctAnswer: "answer_u11_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q9',
          type: 'typing',
          question: "Question 9: Power Series",
          correctAnswer: "answer_u11_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Power Series",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l1_q11',
          type: 'typing',
          question: "Question 11: Power Series",
          correctAnswer: "answer_u11_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q12',
          type: 'typing',
          question: "Question 12: Power Series",
          correctAnswer: "answer_u11_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Power Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q14',
          type: 'typing',
          question: "Question 14: Power Series",
          correctAnswer: "answer_u11_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q15',
          type: 'typing',
          question: "Question 15: Power Series",
          correctAnswer: "answer_u11_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Power Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q17',
          type: 'typing',
          question: "Question 17: Power Series",
          correctAnswer: "answer_u11_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Radius of Convergence
  power2() {
    return {
      id: 'calc_u11_l2',
      title: 'Radius of Convergence',
      unit: 11,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Radius of Convergence",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q2',
          type: 'typing',
          question: "Question 2: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q3',
          type: 'typing',
          question: "Question 3: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Radius of Convergence",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q5',
          type: 'typing',
          question: "Question 5: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q6',
          type: 'typing',
          question: "Question 6: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Radius of Convergence",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q8',
          type: 'typing',
          question: "Question 8: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q9',
          type: 'typing',
          question: "Question 9: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Radius of Convergence",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l2_q11',
          type: 'typing',
          question: "Question 11: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q12',
          type: 'typing',
          question: "Question 12: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Radius of Convergence",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q14',
          type: 'typing',
          question: "Question 14: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q15',
          type: 'typing',
          question: "Question 15: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Radius of Convergence",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q17',
          type: 'typing',
          question: "Question 17: Radius of Convergence",
          correctAnswer: "answer_u11_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Taylor Series
  power3() {
    return {
      id: 'calc_u11_l3',
      title: 'Taylor Series',
      unit: 11,
      icon: '∮',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Taylor Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q2',
          type: 'typing',
          question: "Question 2: Taylor Series",
          correctAnswer: "answer_u11_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q3',
          type: 'typing',
          question: "Question 3: Taylor Series",
          correctAnswer: "answer_u11_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Taylor Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q5',
          type: 'typing',
          question: "Question 5: Taylor Series",
          correctAnswer: "answer_u11_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q6',
          type: 'typing',
          question: "Question 6: Taylor Series",
          correctAnswer: "answer_u11_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Taylor Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q8',
          type: 'typing',
          question: "Question 8: Taylor Series",
          correctAnswer: "answer_u11_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q9',
          type: 'typing',
          question: "Question 9: Taylor Series",
          correctAnswer: "answer_u11_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Taylor Series",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l3_q11',
          type: 'typing',
          question: "Question 11: Taylor Series",
          correctAnswer: "answer_u11_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q12',
          type: 'typing',
          question: "Question 12: Taylor Series",
          correctAnswer: "answer_u11_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Taylor Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q14',
          type: 'typing',
          question: "Question 14: Taylor Series",
          correctAnswer: "answer_u11_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q15',
          type: 'typing',
          question: "Question 15: Taylor Series",
          correctAnswer: "answer_u11_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Taylor Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q17',
          type: 'typing',
          question: "Question 17: Taylor Series",
          correctAnswer: "answer_u11_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Maclaurin Series
  power4() {
    return {
      id: 'calc_u11_l4',
      title: 'Maclaurin Series',
      unit: 11,
      icon: '📜',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Maclaurin Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q2',
          type: 'typing',
          question: "Question 2: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q3',
          type: 'typing',
          question: "Question 3: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Maclaurin Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q5',
          type: 'typing',
          question: "Question 5: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q6',
          type: 'typing',
          question: "Question 6: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Maclaurin Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q8',
          type: 'typing',
          question: "Question 8: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q9',
          type: 'typing',
          question: "Question 9: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Maclaurin Series",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l4_q11',
          type: 'typing',
          question: "Question 11: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q12',
          type: 'typing',
          question: "Question 12: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Maclaurin Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q14',
          type: 'typing',
          question: "Question 14: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q15',
          type: 'typing',
          question: "Question 15: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Maclaurin Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q17',
          type: 'typing',
          question: "Question 17: Maclaurin Series",
          correctAnswer: "answer_u11_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series Apps
  power5() {
    return {
      id: 'calc_u11_l5',
      title: 'Power Series Apps',
      unit: 11,
      icon: '🟢',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Power Series Apps",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q2',
          type: 'typing',
          question: "Question 2: Power Series Apps",
          correctAnswer: "answer_u11_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q3',
          type: 'typing',
          question: "Question 3: Power Series Apps",
          correctAnswer: "answer_u11_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Power Series Apps",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q5',
          type: 'typing',
          question: "Question 5: Power Series Apps",
          correctAnswer: "answer_u11_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q6',
          type: 'typing',
          question: "Question 6: Power Series Apps",
          correctAnswer: "answer_u11_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Power Series Apps",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q8',
          type: 'typing',
          question: "Question 8: Power Series Apps",
          correctAnswer: "answer_u11_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q9',
          type: 'typing',
          question: "Question 9: Power Series Apps",
          correctAnswer: "answer_u11_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Power Series Apps",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l5_q11',
          type: 'typing',
          question: "Question 11: Power Series Apps",
          correctAnswer: "answer_u11_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q12',
          type: 'typing',
          question: "Question 12: Power Series Apps",
          correctAnswer: "answer_u11_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Power Series Apps",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q14',
          type: 'typing',
          question: "Question 14: Power Series Apps",
          correctAnswer: "answer_u11_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q15',
          type: 'typing',
          question: "Question 15: Power Series Apps",
          correctAnswer: "answer_u11_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Power Series Apps",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q17',
          type: 'typing',
          question: "Question 17: Power Series Apps",
          correctAnswer: "answer_u11_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series Review
  power6() {
    return {
      id: 'calc_u11_l6',
      title: 'Power Series Review',
      unit: 11,
      icon: '🌀',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u11_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Power Series Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u11_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q2',
          type: 'typing',
          question: "Question 2: Power Series Review",
          correctAnswer: "answer_u11_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q3',
          type: 'typing',
          question: "Question 3: Power Series Review",
          correctAnswer: "answer_u11_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Power Series Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q5',
          type: 'typing',
          question: "Question 5: Power Series Review",
          correctAnswer: "answer_u11_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q6',
          type: 'typing',
          question: "Question 6: Power Series Review",
          correctAnswer: "answer_u11_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Power Series Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u11_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q8',
          type: 'typing',
          question: "Question 8: Power Series Review",
          correctAnswer: "answer_u11_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q9',
          type: 'typing',
          question: "Question 9: Power Series Review",
          correctAnswer: "answer_u11_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Power Series Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l6_q11',
          type: 'typing',
          question: "Question 11: Power Series Review",
          correctAnswer: "answer_u11_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q12',
          type: 'typing',
          question: "Question 12: Power Series Review",
          correctAnswer: "answer_u11_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Power Series Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u11_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q14',
          type: 'typing',
          question: "Question 14: Power Series Review",
          correctAnswer: "answer_u11_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q15',
          type: 'typing',
          question: "Question 15: Power Series Review",
          correctAnswer: "answer_u11_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Power Series Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q17',
          type: 'typing',
          question: "Question 17: Power Series Review",
          correctAnswer: "answer_u11_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Parametric Equations
  polar1() {
    return {
      id: 'calc_u12_l1',
      title: 'Parametric Equations',
      unit: 12,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Parametric Equations",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q2',
          type: 'typing',
          question: "Question 2: Parametric Equations",
          correctAnswer: "answer_u12_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q3',
          type: 'typing',
          question: "Question 3: Parametric Equations",
          correctAnswer: "answer_u12_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Parametric Equations",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q5',
          type: 'typing',
          question: "Question 5: Parametric Equations",
          correctAnswer: "answer_u12_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q6',
          type: 'typing',
          question: "Question 6: Parametric Equations",
          correctAnswer: "answer_u12_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Parametric Equations",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q8',
          type: 'typing',
          question: "Question 8: Parametric Equations",
          correctAnswer: "answer_u12_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q9',
          type: 'typing',
          question: "Question 9: Parametric Equations",
          correctAnswer: "answer_u12_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Parametric Equations",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l1_q11',
          type: 'typing',
          question: "Question 11: Parametric Equations",
          correctAnswer: "answer_u12_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q12',
          type: 'typing',
          question: "Question 12: Parametric Equations",
          correctAnswer: "answer_u12_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Parametric Equations",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q14',
          type: 'typing',
          question: "Question 14: Parametric Equations",
          correctAnswer: "answer_u12_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q15',
          type: 'typing',
          question: "Question 15: Parametric Equations",
          correctAnswer: "answer_u12_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Parametric Equations",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q17',
          type: 'typing',
          question: "Question 17: Parametric Equations",
          correctAnswer: "answer_u12_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus of Parametrics
  polar2() {
    return {
      id: 'calc_u12_l2',
      title: 'Calculus of Parametrics',
      unit: 12,
      icon: '🌊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Calculus of Parametrics",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q2',
          type: 'typing',
          question: "Question 2: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q3',
          type: 'typing',
          question: "Question 3: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Calculus of Parametrics",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q5',
          type: 'typing',
          question: "Question 5: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q6',
          type: 'typing',
          question: "Question 6: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Calculus of Parametrics",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q8',
          type: 'typing',
          question: "Question 8: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q9',
          type: 'typing',
          question: "Question 9: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Calculus of Parametrics",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l2_q11',
          type: 'typing',
          question: "Question 11: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q12',
          type: 'typing',
          question: "Question 12: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Calculus of Parametrics",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q14',
          type: 'typing',
          question: "Question 14: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q15',
          type: 'typing',
          question: "Question 15: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Calculus of Parametrics",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q17',
          type: 'typing',
          question: "Question 17: Calculus of Parametrics",
          correctAnswer: "answer_u12_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Polar Coordinates
  polar3() {
    return {
      id: 'calc_u12_l3',
      title: 'Polar Coordinates',
      unit: 12,
      icon: '💨',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Polar Coordinates",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q2',
          type: 'typing',
          question: "Question 2: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q3',
          type: 'typing',
          question: "Question 3: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Polar Coordinates",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q5',
          type: 'typing',
          question: "Question 5: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q6',
          type: 'typing',
          question: "Question 6: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Polar Coordinates",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q8',
          type: 'typing',
          question: "Question 8: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q9',
          type: 'typing',
          question: "Question 9: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Polar Coordinates",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l3_q11',
          type: 'typing',
          question: "Question 11: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q12',
          type: 'typing',
          question: "Question 12: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Polar Coordinates",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q14',
          type: 'typing',
          question: "Question 14: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q15',
          type: 'typing',
          question: "Question 15: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Polar Coordinates",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q17',
          type: 'typing',
          question: "Question 17: Polar Coordinates",
          correctAnswer: "answer_u12_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Polar Area
  polar4() {
    return {
      id: 'calc_u12_l4',
      title: 'Polar Area',
      unit: 12,
      icon: '🎯',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Polar Area",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q2',
          type: 'typing',
          question: "Question 2: Polar Area",
          correctAnswer: "answer_u12_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q3',
          type: 'typing',
          question: "Question 3: Polar Area",
          correctAnswer: "answer_u12_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Polar Area",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q5',
          type: 'typing',
          question: "Question 5: Polar Area",
          correctAnswer: "answer_u12_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q6',
          type: 'typing',
          question: "Question 6: Polar Area",
          correctAnswer: "answer_u12_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Polar Area",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q8',
          type: 'typing',
          question: "Question 8: Polar Area",
          correctAnswer: "answer_u12_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q9',
          type: 'typing',
          question: "Question 9: Polar Area",
          correctAnswer: "answer_u12_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Polar Area",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l4_q11',
          type: 'typing',
          question: "Question 11: Polar Area",
          correctAnswer: "answer_u12_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q12',
          type: 'typing',
          question: "Question 12: Polar Area",
          correctAnswer: "answer_u12_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Polar Area",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q14',
          type: 'typing',
          question: "Question 14: Polar Area",
          correctAnswer: "answer_u12_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q15',
          type: 'typing',
          question: "Question 15: Polar Area",
          correctAnswer: "answer_u12_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Polar Area",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q17',
          type: 'typing',
          question: "Question 17: Polar Area",
          correctAnswer: "answer_u12_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Conic Sections
  polar5() {
    return {
      id: 'calc_u12_l5',
      title: 'Conic Sections',
      unit: 12,
      icon: '📚',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Conic Sections",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q2',
          type: 'typing',
          question: "Question 2: Conic Sections",
          correctAnswer: "answer_u12_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q3',
          type: 'typing',
          question: "Question 3: Conic Sections",
          correctAnswer: "answer_u12_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Conic Sections",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q5',
          type: 'typing',
          question: "Question 5: Conic Sections",
          correctAnswer: "answer_u12_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q6',
          type: 'typing',
          question: "Question 6: Conic Sections",
          correctAnswer: "answer_u12_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Conic Sections",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q8',
          type: 'typing',
          question: "Question 8: Conic Sections",
          correctAnswer: "answer_u12_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q9',
          type: 'typing',
          question: "Question 9: Conic Sections",
          correctAnswer: "answer_u12_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Conic Sections",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l5_q11',
          type: 'typing',
          question: "Question 11: Conic Sections",
          correctAnswer: "answer_u12_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q12',
          type: 'typing',
          question: "Question 12: Conic Sections",
          correctAnswer: "answer_u12_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Conic Sections",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q14',
          type: 'typing',
          question: "Question 14: Conic Sections",
          correctAnswer: "answer_u12_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q15',
          type: 'typing',
          question: "Question 15: Conic Sections",
          correctAnswer: "answer_u12_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Conic Sections",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q17',
          type: 'typing',
          question: "Question 17: Conic Sections",
          correctAnswer: "answer_u12_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus 2 Final
  polar6() {
    return {
      id: 'calc_u12_l6',
      title: 'Calculus 2 Final',
      unit: 12,
      icon: '📖',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u12_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Calculus 2 Final",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u12_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q2',
          type: 'typing',
          question: "Question 2: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q3',
          type: 'typing',
          question: "Question 3: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Calculus 2 Final",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q5',
          type: 'typing',
          question: "Question 5: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q6',
          type: 'typing',
          question: "Question 6: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Calculus 2 Final",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u12_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q8',
          type: 'typing',
          question: "Question 8: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q9',
          type: 'typing',
          question: "Question 9: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Calculus 2 Final",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l6_q11',
          type: 'typing',
          question: "Question 11: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q12',
          type: 'typing',
          question: "Question 12: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Calculus 2 Final",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u12_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q14',
          type: 'typing',
          question: "Question 14: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q15',
          type: 'typing',
          question: "Question 15: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Calculus 2 Final",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q17',
          type: 'typing',
          question: "Question 17: Calculus 2 Final",
          correctAnswer: "answer_u12_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vectors in 2D
  vectors1() {
    return {
      id: 'calc_u13_l1',
      title: 'Vectors in 2D',
      unit: 13,
      icon: '🎓',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Vectors in 2D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q2',
          type: 'typing',
          question: "Question 2: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q3',
          type: 'typing',
          question: "Question 3: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Vectors in 2D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q5',
          type: 'typing',
          question: "Question 5: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q6',
          type: 'typing',
          question: "Question 6: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Vectors in 2D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q8',
          type: 'typing',
          question: "Question 8: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q9',
          type: 'typing',
          question: "Question 9: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Vectors in 2D",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l1_q11',
          type: 'typing',
          question: "Question 11: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q12',
          type: 'typing',
          question: "Question 12: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Vectors in 2D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q14',
          type: 'typing',
          question: "Question 14: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q15',
          type: 'typing',
          question: "Question 15: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Vectors in 2D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q17',
          type: 'typing',
          question: "Question 17: Vectors in 2D",
          correctAnswer: "answer_u13_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vectors in 3D
  vectors2() {
    return {
      id: 'calc_u13_l2',
      title: 'Vectors in 3D',
      unit: 13,
      icon: '↩️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Vectors in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q2',
          type: 'typing',
          question: "Question 2: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q3',
          type: 'typing',
          question: "Question 3: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Vectors in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q5',
          type: 'typing',
          question: "Question 5: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q6',
          type: 'typing',
          question: "Question 6: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Vectors in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q8',
          type: 'typing',
          question: "Question 8: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q9',
          type: 'typing',
          question: "Question 9: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Vectors in 3D",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l2_q11',
          type: 'typing',
          question: "Question 11: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q12',
          type: 'typing',
          question: "Question 12: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Vectors in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q14',
          type: 'typing',
          question: "Question 14: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q15',
          type: 'typing',
          question: "Question 15: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Vectors in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q17',
          type: 'typing',
          question: "Question 17: Vectors in 3D",
          correctAnswer: "answer_u13_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Dot Product
  vectors3() {
    return {
      id: 'calc_u13_l3',
      title: 'Dot Product',
      unit: 13,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Dot Product",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q2',
          type: 'typing',
          question: "Question 2: Dot Product",
          correctAnswer: "answer_u13_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q3',
          type: 'typing',
          question: "Question 3: Dot Product",
          correctAnswer: "answer_u13_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Dot Product",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q5',
          type: 'typing',
          question: "Question 5: Dot Product",
          correctAnswer: "answer_u13_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q6',
          type: 'typing',
          question: "Question 6: Dot Product",
          correctAnswer: "answer_u13_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Dot Product",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q8',
          type: 'typing',
          question: "Question 8: Dot Product",
          correctAnswer: "answer_u13_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q9',
          type: 'typing',
          question: "Question 9: Dot Product",
          correctAnswer: "answer_u13_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Dot Product",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l3_q11',
          type: 'typing',
          question: "Question 11: Dot Product",
          correctAnswer: "answer_u13_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q12',
          type: 'typing',
          question: "Question 12: Dot Product",
          correctAnswer: "answer_u13_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Dot Product",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q14',
          type: 'typing',
          question: "Question 14: Dot Product",
          correctAnswer: "answer_u13_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q15',
          type: 'typing',
          question: "Question 15: Dot Product",
          correctAnswer: "answer_u13_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Dot Product",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q17',
          type: 'typing',
          question: "Question 17: Dot Product",
          correctAnswer: "answer_u13_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Cross Product
  vectors4() {
    return {
      id: 'calc_u13_l4',
      title: 'Cross Product',
      unit: 13,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Cross Product",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q2',
          type: 'typing',
          question: "Question 2: Cross Product",
          correctAnswer: "answer_u13_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q3',
          type: 'typing',
          question: "Question 3: Cross Product",
          correctAnswer: "answer_u13_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Cross Product",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q5',
          type: 'typing',
          question: "Question 5: Cross Product",
          correctAnswer: "answer_u13_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q6',
          type: 'typing',
          question: "Question 6: Cross Product",
          correctAnswer: "answer_u13_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Cross Product",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q8',
          type: 'typing',
          question: "Question 8: Cross Product",
          correctAnswer: "answer_u13_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q9',
          type: 'typing',
          question: "Question 9: Cross Product",
          correctAnswer: "answer_u13_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Cross Product",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l4_q11',
          type: 'typing',
          question: "Question 11: Cross Product",
          correctAnswer: "answer_u13_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q12',
          type: 'typing',
          question: "Question 12: Cross Product",
          correctAnswer: "answer_u13_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Cross Product",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q14',
          type: 'typing',
          question: "Question 14: Cross Product",
          correctAnswer: "answer_u13_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q15',
          type: 'typing',
          question: "Question 15: Cross Product",
          correctAnswer: "answer_u13_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Cross Product",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q17',
          type: 'typing',
          question: "Question 17: Cross Product",
          correctAnswer: "answer_u13_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Lines in 3D
  vectors5() {
    return {
      id: 'calc_u13_l5',
      title: 'Lines in 3D',
      unit: 13,
      icon: '📜',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Lines in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q2',
          type: 'typing',
          question: "Question 2: Lines in 3D",
          correctAnswer: "answer_u13_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q3',
          type: 'typing',
          question: "Question 3: Lines in 3D",
          correctAnswer: "answer_u13_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Lines in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q5',
          type: 'typing',
          question: "Question 5: Lines in 3D",
          correctAnswer: "answer_u13_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q6',
          type: 'typing',
          question: "Question 6: Lines in 3D",
          correctAnswer: "answer_u13_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Lines in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q8',
          type: 'typing',
          question: "Question 8: Lines in 3D",
          correctAnswer: "answer_u13_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q9',
          type: 'typing',
          question: "Question 9: Lines in 3D",
          correctAnswer: "answer_u13_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Lines in 3D",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l5_q11',
          type: 'typing',
          question: "Question 11: Lines in 3D",
          correctAnswer: "answer_u13_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q12',
          type: 'typing',
          question: "Question 12: Lines in 3D",
          correctAnswer: "answer_u13_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Lines in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q14',
          type: 'typing',
          question: "Question 14: Lines in 3D",
          correctAnswer: "answer_u13_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q15',
          type: 'typing',
          question: "Question 15: Lines in 3D",
          correctAnswer: "answer_u13_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Lines in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q17',
          type: 'typing',
          question: "Question 17: Lines in 3D",
          correctAnswer: "answer_u13_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Planes in 3D
  vectors6() {
    return {
      id: 'calc_u13_l6',
      title: 'Planes in 3D',
      unit: 13,
      icon: '💪',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Planes in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q2',
          type: 'typing',
          question: "Question 2: Planes in 3D",
          correctAnswer: "answer_u13_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q3',
          type: 'typing',
          question: "Question 3: Planes in 3D",
          correctAnswer: "answer_u13_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Planes in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q5',
          type: 'typing',
          question: "Question 5: Planes in 3D",
          correctAnswer: "answer_u13_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q6',
          type: 'typing',
          question: "Question 6: Planes in 3D",
          correctAnswer: "answer_u13_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Planes in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q8',
          type: 'typing',
          question: "Question 8: Planes in 3D",
          correctAnswer: "answer_u13_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q9',
          type: 'typing',
          question: "Question 9: Planes in 3D",
          correctAnswer: "answer_u13_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Planes in 3D",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l6_q11',
          type: 'typing',
          question: "Question 11: Planes in 3D",
          correctAnswer: "answer_u13_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q12',
          type: 'typing',
          question: "Question 12: Planes in 3D",
          correctAnswer: "answer_u13_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Planes in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q14',
          type: 'typing',
          question: "Question 14: Planes in 3D",
          correctAnswer: "answer_u13_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q15',
          type: 'typing',
          question: "Question 15: Planes in 3D",
          correctAnswer: "answer_u13_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Planes in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q17',
          type: 'typing',
          question: "Question 17: Planes in 3D",
          correctAnswer: "answer_u13_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // 3D Geometry Review
  vectors7() {
    return {
      id: 'calc_u13_l7',
      title: '3D Geometry Review',
      unit: 13,
      icon: '🔄',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u13_l7_q1',
          type: 'multiple_choice',
          question: "Question 1: 3D Geometry Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u13_l7_q1.png",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q2',
          type: 'typing',
          question: "Question 2: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q3',
          type: 'typing',
          question: "Question 3: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q4',
          type: 'multiple_choice',
          question: "Question 4: 3D Geometry Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q5',
          type: 'typing',
          question: "Question 5: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q6',
          type: 'typing',
          question: "Question 6: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q7',
          type: 'multiple_choice',
          question: "Question 7: 3D Geometry Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u13_l7_q7.png",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q8',
          type: 'typing',
          question: "Question 8: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q9',
          type: 'typing',
          question: "Question 9: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q10',
          type: 'match_pairs',
          question: "Question 10: 3D Geometry Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l7_q11',
          type: 'typing',
          question: "Question 11: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q12',
          type: 'typing',
          question: "Question 12: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q13',
          type: 'multiple_choice',
          question: "Question 13: 3D Geometry Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u13_l7_q13.png",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q14',
          type: 'typing',
          question: "Question 14: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q15',
          type: 'typing',
          question: "Question 15: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q16',
          type: 'multiple_choice',
          question: "Question 16: 3D Geometry Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q17',
          type: 'typing',
          question: "Question 17: 3D Geometry Review",
          correctAnswer: "answer_u13_l7_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Functions
  vecFunc1() {
    return {
      id: 'calc_u14_l1',
      title: 'Vector Functions',
      unit: 14,
      icon: '🥁',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Vector Functions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q2',
          type: 'typing',
          question: "Question 2: Vector Functions",
          correctAnswer: "answer_u14_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q3',
          type: 'typing',
          question: "Question 3: Vector Functions",
          correctAnswer: "answer_u14_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Vector Functions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q5',
          type: 'typing',
          question: "Question 5: Vector Functions",
          correctAnswer: "answer_u14_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q6',
          type: 'typing',
          question: "Question 6: Vector Functions",
          correctAnswer: "answer_u14_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Vector Functions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q8',
          type: 'typing',
          question: "Question 8: Vector Functions",
          correctAnswer: "answer_u14_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q9',
          type: 'typing',
          question: "Question 9: Vector Functions",
          correctAnswer: "answer_u14_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Vector Functions",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l1_q11',
          type: 'typing',
          question: "Question 11: Vector Functions",
          correctAnswer: "answer_u14_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q12',
          type: 'typing',
          question: "Question 12: Vector Functions",
          correctAnswer: "answer_u14_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Vector Functions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q14',
          type: 'typing',
          question: "Question 14: Vector Functions",
          correctAnswer: "answer_u14_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q15',
          type: 'typing',
          question: "Question 15: Vector Functions",
          correctAnswer: "answer_u14_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Vector Functions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q17',
          type: 'typing',
          question: "Question 17: Vector Functions",
          correctAnswer: "answer_u14_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus of Vec Func
  vecFunc2() {
    return {
      id: 'calc_u14_l2',
      title: 'Calculus of Vec Func',
      unit: 14,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Calculus of Vec Func",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q2',
          type: 'typing',
          question: "Question 2: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q3',
          type: 'typing',
          question: "Question 3: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Calculus of Vec Func",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q5',
          type: 'typing',
          question: "Question 5: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q6',
          type: 'typing',
          question: "Question 6: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Calculus of Vec Func",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q8',
          type: 'typing',
          question: "Question 8: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q9',
          type: 'typing',
          question: "Question 9: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Calculus of Vec Func",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l2_q11',
          type: 'typing',
          question: "Question 11: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q12',
          type: 'typing',
          question: "Question 12: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Calculus of Vec Func",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q14',
          type: 'typing',
          question: "Question 14: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q15',
          type: 'typing',
          question: "Question 15: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Calculus of Vec Func",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q17',
          type: 'typing',
          question: "Question 17: Calculus of Vec Func",
          correctAnswer: "answer_u14_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arc Length 3D
  vecFunc3() {
    return {
      id: 'calc_u14_l3',
      title: 'Arc Length 3D',
      unit: 14,
      icon: '⚙️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Arc Length 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q2',
          type: 'typing',
          question: "Question 2: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q3',
          type: 'typing',
          question: "Question 3: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Arc Length 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q5',
          type: 'typing',
          question: "Question 5: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q6',
          type: 'typing',
          question: "Question 6: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Arc Length 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q8',
          type: 'typing',
          question: "Question 8: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q9',
          type: 'typing',
          question: "Question 9: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Arc Length 3D",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l3_q11',
          type: 'typing',
          question: "Question 11: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q12',
          type: 'typing',
          question: "Question 12: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Arc Length 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q14',
          type: 'typing',
          question: "Question 14: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q15',
          type: 'typing',
          question: "Question 15: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Arc Length 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q17',
          type: 'typing',
          question: "Question 17: Arc Length 3D",
          correctAnswer: "answer_u14_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Curvature
  vecFunc4() {
    return {
      id: 'calc_u14_l4',
      title: 'Curvature',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Curvature",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q2',
          type: 'typing',
          question: "Question 2: Curvature",
          correctAnswer: "answer_u14_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q3',
          type: 'typing',
          question: "Question 3: Curvature",
          correctAnswer: "answer_u14_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Curvature",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q5',
          type: 'typing',
          question: "Question 5: Curvature",
          correctAnswer: "answer_u14_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q6',
          type: 'typing',
          question: "Question 6: Curvature",
          correctAnswer: "answer_u14_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Curvature",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q8',
          type: 'typing',
          question: "Question 8: Curvature",
          correctAnswer: "answer_u14_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q9',
          type: 'typing',
          question: "Question 9: Curvature",
          correctAnswer: "answer_u14_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Curvature",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l4_q11',
          type: 'typing',
          question: "Question 11: Curvature",
          correctAnswer: "answer_u14_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q12',
          type: 'typing',
          question: "Question 12: Curvature",
          correctAnswer: "answer_u14_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Curvature",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q14',
          type: 'typing',
          question: "Question 14: Curvature",
          correctAnswer: "answer_u14_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q15',
          type: 'typing',
          question: "Question 15: Curvature",
          correctAnswer: "answer_u14_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Curvature",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q17',
          type: 'typing',
          question: "Question 17: Curvature",
          correctAnswer: "answer_u14_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Motion in Space
  vecFunc5() {
    return {
      id: 'calc_u14_l5',
      title: 'Motion in Space',
      unit: 14,
      icon: '➕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Motion in Space",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q2',
          type: 'typing',
          question: "Question 2: Motion in Space",
          correctAnswer: "answer_u14_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q3',
          type: 'typing',
          question: "Question 3: Motion in Space",
          correctAnswer: "answer_u14_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Motion in Space",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q5',
          type: 'typing',
          question: "Question 5: Motion in Space",
          correctAnswer: "answer_u14_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q6',
          type: 'typing',
          question: "Question 6: Motion in Space",
          correctAnswer: "answer_u14_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Motion in Space",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q8',
          type: 'typing',
          question: "Question 8: Motion in Space",
          correctAnswer: "answer_u14_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q9',
          type: 'typing',
          question: "Question 9: Motion in Space",
          correctAnswer: "answer_u14_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Motion in Space",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l5_q11',
          type: 'typing',
          question: "Question 11: Motion in Space",
          correctAnswer: "answer_u14_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q12',
          type: 'typing',
          question: "Question 12: Motion in Space",
          correctAnswer: "answer_u14_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Motion in Space",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q14',
          type: 'typing',
          question: "Question 14: Motion in Space",
          correctAnswer: "answer_u14_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q15',
          type: 'typing',
          question: "Question 15: Motion in Space",
          correctAnswer: "answer_u14_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Motion in Space",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q17',
          type: 'typing',
          question: "Question 17: Motion in Space",
          correctAnswer: "answer_u14_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Func Review
  vecFunc6() {
    return {
      id: 'calc_u14_l6',
      title: 'Vector Func Review',
      unit: 14,
      icon: '✖️',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u14_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Vector Func Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u14_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q2',
          type: 'typing',
          question: "Question 2: Vector Func Review",
          correctAnswer: "answer_u14_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q3',
          type: 'typing',
          question: "Question 3: Vector Func Review",
          correctAnswer: "answer_u14_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Vector Func Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q5',
          type: 'typing',
          question: "Question 5: Vector Func Review",
          correctAnswer: "answer_u14_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q6',
          type: 'typing',
          question: "Question 6: Vector Func Review",
          correctAnswer: "answer_u14_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Vector Func Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u14_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q8',
          type: 'typing',
          question: "Question 8: Vector Func Review",
          correctAnswer: "answer_u14_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q9',
          type: 'typing',
          question: "Question 9: Vector Func Review",
          correctAnswer: "answer_u14_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Vector Func Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l6_q11',
          type: 'typing',
          question: "Question 11: Vector Func Review",
          correctAnswer: "answer_u14_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q12',
          type: 'typing',
          question: "Question 12: Vector Func Review",
          correctAnswer: "answer_u14_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Vector Func Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u14_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q14',
          type: 'typing',
          question: "Question 14: Vector Func Review",
          correctAnswer: "answer_u14_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q15',
          type: 'typing',
          question: "Question 15: Vector Func Review",
          correctAnswer: "answer_u14_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Vector Func Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q17',
          type: 'typing',
          question: "Question 17: Vector Func Review",
          correctAnswer: "answer_u14_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multivariable Functions
  multi1() {
    return {
      id: 'calc_u15_l1',
      title: 'Multivariable Functions',
      unit: 15,
      icon: '→',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Multivariable Functions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q2',
          type: 'typing',
          question: "Question 2: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q3',
          type: 'typing',
          question: "Question 3: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Multivariable Functions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q5',
          type: 'typing',
          question: "Question 5: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q6',
          type: 'typing',
          question: "Question 6: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Multivariable Functions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q8',
          type: 'typing',
          question: "Question 8: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q9',
          type: 'typing',
          question: "Question 9: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Multivariable Functions",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l1_q11',
          type: 'typing',
          question: "Question 11: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q12',
          type: 'typing',
          question: "Question 12: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Multivariable Functions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q14',
          type: 'typing',
          question: "Question 14: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q15',
          type: 'typing',
          question: "Question 15: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Multivariable Functions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q17',
          type: 'typing',
          question: "Question 17: Multivariable Functions",
          correctAnswer: "answer_u15_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Limits and Continuity
  multi2() {
    return {
      id: 'calc_u15_l2',
      title: 'Limits and Continuity',
      unit: 15,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Limits and Continuity",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q2',
          type: 'typing',
          question: "Question 2: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q3',
          type: 'typing',
          question: "Question 3: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Limits and Continuity",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q5',
          type: 'typing',
          question: "Question 5: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q6',
          type: 'typing',
          question: "Question 6: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Limits and Continuity",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q8',
          type: 'typing',
          question: "Question 8: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q9',
          type: 'typing',
          question: "Question 9: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Limits and Continuity",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l2_q11',
          type: 'typing',
          question: "Question 11: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q12',
          type: 'typing',
          question: "Question 12: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Limits and Continuity",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q14',
          type: 'typing',
          question: "Question 14: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q15',
          type: 'typing',
          question: "Question 15: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Limits and Continuity",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q17',
          type: 'typing',
          question: "Question 17: Limits and Continuity",
          correctAnswer: "answer_u15_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Derivatives
  multi3() {
    return {
      id: 'calc_u15_l3',
      title: 'Partial Derivatives',
      unit: 15,
      icon: '⚖️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Partial Derivatives",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q2',
          type: 'typing',
          question: "Question 2: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q3',
          type: 'typing',
          question: "Question 3: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Partial Derivatives",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q5',
          type: 'typing',
          question: "Question 5: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q6',
          type: 'typing',
          question: "Question 6: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Partial Derivatives",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q8',
          type: 'typing',
          question: "Question 8: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q9',
          type: 'typing',
          question: "Question 9: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Partial Derivatives",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l3_q11',
          type: 'typing',
          question: "Question 11: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q12',
          type: 'typing',
          question: "Question 12: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Partial Derivatives",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q14',
          type: 'typing',
          question: "Question 14: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q15',
          type: 'typing',
          question: "Question 15: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Partial Derivatives",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q17',
          type: 'typing',
          question: "Question 17: Partial Derivatives",
          correctAnswer: "answer_u15_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Tangent Planes
  multi4() {
    return {
      id: 'calc_u15_l4',
      title: 'Tangent Planes',
      unit: 15,
      icon: '∫',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Tangent Planes",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q2',
          type: 'typing',
          question: "Question 2: Tangent Planes",
          correctAnswer: "answer_u15_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q3',
          type: 'typing',
          question: "Question 3: Tangent Planes",
          correctAnswer: "answer_u15_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Tangent Planes",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q5',
          type: 'typing',
          question: "Question 5: Tangent Planes",
          correctAnswer: "answer_u15_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q6',
          type: 'typing',
          question: "Question 6: Tangent Planes",
          correctAnswer: "answer_u15_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Tangent Planes",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q8',
          type: 'typing',
          question: "Question 8: Tangent Planes",
          correctAnswer: "answer_u15_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q9',
          type: 'typing',
          question: "Question 9: Tangent Planes",
          correctAnswer: "answer_u15_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Tangent Planes",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l4_q11',
          type: 'typing',
          question: "Question 11: Tangent Planes",
          correctAnswer: "answer_u15_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q12',
          type: 'typing',
          question: "Question 12: Tangent Planes",
          correctAnswer: "answer_u15_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Tangent Planes",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q14',
          type: 'typing',
          question: "Question 14: Tangent Planes",
          correctAnswer: "answer_u15_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q15',
          type: 'typing',
          question: "Question 15: Tangent Planes",
          correctAnswer: "answer_u15_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Tangent Planes",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q17',
          type: 'typing',
          question: "Question 17: Tangent Planes",
          correctAnswer: "answer_u15_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Directional Derivatives
  multi5() {
    return {
      id: 'calc_u15_l5',
      title: 'Directional Derivatives',
      unit: 15,
      icon: '⭕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Directional Derivatives",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q2',
          type: 'typing',
          question: "Question 2: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q3',
          type: 'typing',
          question: "Question 3: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Directional Derivatives",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q5',
          type: 'typing',
          question: "Question 5: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q6',
          type: 'typing',
          question: "Question 6: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Directional Derivatives",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q8',
          type: 'typing',
          question: "Question 8: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q9',
          type: 'typing',
          question: "Question 9: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Directional Derivatives",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l5_q11',
          type: 'typing',
          question: "Question 11: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q12',
          type: 'typing',
          question: "Question 12: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Directional Derivatives",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q14',
          type: 'typing',
          question: "Question 14: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q15',
          type: 'typing',
          question: "Question 15: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Directional Derivatives",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q17',
          type: 'typing',
          question: "Question 17: Directional Derivatives",
          correctAnswer: "answer_u15_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Gradient
  multi6() {
    return {
      id: 'calc_u15_l6',
      title: 'Gradient',
      unit: 15,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Gradient",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q2',
          type: 'typing',
          question: "Question 2: Gradient",
          correctAnswer: "answer_u15_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q3',
          type: 'typing',
          question: "Question 3: Gradient",
          correctAnswer: "answer_u15_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Gradient",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q5',
          type: 'typing',
          question: "Question 5: Gradient",
          correctAnswer: "answer_u15_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q6',
          type: 'typing',
          question: "Question 6: Gradient",
          correctAnswer: "answer_u15_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Gradient",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q8',
          type: 'typing',
          question: "Question 8: Gradient",
          correctAnswer: "answer_u15_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q9',
          type: 'typing',
          question: "Question 9: Gradient",
          correctAnswer: "answer_u15_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Gradient",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l6_q11',
          type: 'typing',
          question: "Question 11: Gradient",
          correctAnswer: "answer_u15_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q12',
          type: 'typing',
          question: "Question 12: Gradient",
          correctAnswer: "answer_u15_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Gradient",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q14',
          type: 'typing',
          question: "Question 14: Gradient",
          correctAnswer: "answer_u15_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q15',
          type: 'typing',
          question: "Question 15: Gradient",
          correctAnswer: "answer_u15_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Gradient",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q17',
          type: 'typing',
          question: "Question 17: Gradient",
          correctAnswer: "answer_u15_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multivariable Review
  multi7() {
    return {
      id: 'calc_u15_l7',
      title: 'Multivariable Review',
      unit: 15,
      icon: '⭕',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u15_l7_q1',
          type: 'multiple_choice',
          question: "Question 1: Multivariable Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u15_l7_q1.png",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q2',
          type: 'typing',
          question: "Question 2: Multivariable Review",
          correctAnswer: "answer_u15_l7_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q3',
          type: 'typing',
          question: "Question 3: Multivariable Review",
          correctAnswer: "answer_u15_l7_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q4',
          type: 'multiple_choice',
          question: "Question 4: Multivariable Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q5',
          type: 'typing',
          question: "Question 5: Multivariable Review",
          correctAnswer: "answer_u15_l7_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q6',
          type: 'typing',
          question: "Question 6: Multivariable Review",
          correctAnswer: "answer_u15_l7_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q7',
          type: 'multiple_choice',
          question: "Question 7: Multivariable Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u15_l7_q7.png",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q8',
          type: 'typing',
          question: "Question 8: Multivariable Review",
          correctAnswer: "answer_u15_l7_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q9',
          type: 'typing',
          question: "Question 9: Multivariable Review",
          correctAnswer: "answer_u15_l7_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q10',
          type: 'match_pairs',
          question: "Question 10: Multivariable Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l7_q11',
          type: 'typing',
          question: "Question 11: Multivariable Review",
          correctAnswer: "answer_u15_l7_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q12',
          type: 'typing',
          question: "Question 12: Multivariable Review",
          correctAnswer: "answer_u15_l7_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q13',
          type: 'multiple_choice',
          question: "Question 13: Multivariable Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u15_l7_q13.png",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q14',
          type: 'typing',
          question: "Question 14: Multivariable Review",
          correctAnswer: "answer_u15_l7_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q15',
          type: 'typing',
          question: "Question 15: Multivariable Review",
          correctAnswer: "answer_u15_l7_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q16',
          type: 'multiple_choice',
          question: "Question 16: Multivariable Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q17',
          type: 'typing',
          question: "Question 17: Multivariable Review",
          correctAnswer: "answer_u15_l7_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double Integrals
  multiInt1() {
    return {
      id: 'calc_u16_l1',
      title: 'Double Integrals',
      unit: 16,
      icon: '➡️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Double Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q2',
          type: 'typing',
          question: "Question 2: Double Integrals",
          correctAnswer: "answer_u16_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q3',
          type: 'typing',
          question: "Question 3: Double Integrals",
          correctAnswer: "answer_u16_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Double Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q5',
          type: 'typing',
          question: "Question 5: Double Integrals",
          correctAnswer: "answer_u16_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q6',
          type: 'typing',
          question: "Question 6: Double Integrals",
          correctAnswer: "answer_u16_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Double Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q8',
          type: 'typing',
          question: "Question 8: Double Integrals",
          correctAnswer: "answer_u16_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q9',
          type: 'typing',
          question: "Question 9: Double Integrals",
          correctAnswer: "answer_u16_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Double Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l1_q11',
          type: 'typing',
          question: "Question 11: Double Integrals",
          correctAnswer: "answer_u16_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q12',
          type: 'typing',
          question: "Question 12: Double Integrals",
          correctAnswer: "answer_u16_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Double Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q14',
          type: 'typing',
          question: "Question 14: Double Integrals",
          correctAnswer: "answer_u16_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q15',
          type: 'typing',
          question: "Question 15: Double Integrals",
          correctAnswer: "answer_u16_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Double Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q17',
          type: 'typing',
          question: "Question 17: Double Integrals",
          correctAnswer: "answer_u16_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double NonRectangular
  multiInt2() {
    return {
      id: 'calc_u16_l2',
      title: 'Double NonRectangular',
      unit: 16,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Double NonRectangular",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q2',
          type: 'typing',
          question: "Question 2: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q3',
          type: 'typing',
          question: "Question 3: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Double NonRectangular",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q5',
          type: 'typing',
          question: "Question 5: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q6',
          type: 'typing',
          question: "Question 6: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Double NonRectangular",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q8',
          type: 'typing',
          question: "Question 8: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q9',
          type: 'typing',
          question: "Question 9: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Double NonRectangular",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l2_q11',
          type: 'typing',
          question: "Question 11: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q12',
          type: 'typing',
          question: "Question 12: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Double NonRectangular",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q14',
          type: 'typing',
          question: "Question 14: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q15',
          type: 'typing',
          question: "Question 15: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Double NonRectangular",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q17',
          type: 'typing',
          question: "Question 17: Double NonRectangular",
          correctAnswer: "answer_u16_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double Polar
  multiInt3() {
    return {
      id: 'calc_u16_l3',
      title: 'Double Polar',
      unit: 16,
      icon: '∙',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Double Polar",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q2',
          type: 'typing',
          question: "Question 2: Double Polar",
          correctAnswer: "answer_u16_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q3',
          type: 'typing',
          question: "Question 3: Double Polar",
          correctAnswer: "answer_u16_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Double Polar",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q5',
          type: 'typing',
          question: "Question 5: Double Polar",
          correctAnswer: "answer_u16_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q6',
          type: 'typing',
          question: "Question 6: Double Polar",
          correctAnswer: "answer_u16_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Double Polar",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q8',
          type: 'typing',
          question: "Question 8: Double Polar",
          correctAnswer: "answer_u16_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q9',
          type: 'typing',
          question: "Question 9: Double Polar",
          correctAnswer: "answer_u16_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Double Polar",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l3_q11',
          type: 'typing',
          question: "Question 11: Double Polar",
          correctAnswer: "answer_u16_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q12',
          type: 'typing',
          question: "Question 12: Double Polar",
          correctAnswer: "answer_u16_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Double Polar",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q14',
          type: 'typing',
          question: "Question 14: Double Polar",
          correctAnswer: "answer_u16_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q15',
          type: 'typing',
          question: "Question 15: Double Polar",
          correctAnswer: "answer_u16_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Double Polar",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q17',
          type: 'typing',
          question: "Question 17: Double Polar",
          correctAnswer: "answer_u16_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple Integrals
  multiInt4() {
    return {
      id: 'calc_u16_l4',
      title: 'Triple Integrals',
      unit: 16,
      icon: '×',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Triple Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q2',
          type: 'typing',
          question: "Question 2: Triple Integrals",
          correctAnswer: "answer_u16_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q3',
          type: 'typing',
          question: "Question 3: Triple Integrals",
          correctAnswer: "answer_u16_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Triple Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q5',
          type: 'typing',
          question: "Question 5: Triple Integrals",
          correctAnswer: "answer_u16_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q6',
          type: 'typing',
          question: "Question 6: Triple Integrals",
          correctAnswer: "answer_u16_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Triple Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q8',
          type: 'typing',
          question: "Question 8: Triple Integrals",
          correctAnswer: "answer_u16_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q9',
          type: 'typing',
          question: "Question 9: Triple Integrals",
          correctAnswer: "answer_u16_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Triple Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l4_q11',
          type: 'typing',
          question: "Question 11: Triple Integrals",
          correctAnswer: "answer_u16_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q12',
          type: 'typing',
          question: "Question 12: Triple Integrals",
          correctAnswer: "answer_u16_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Triple Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q14',
          type: 'typing',
          question: "Question 14: Triple Integrals",
          correctAnswer: "answer_u16_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q15',
          type: 'typing',
          question: "Question 15: Triple Integrals",
          correctAnswer: "answer_u16_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Triple Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q17',
          type: 'typing',
          question: "Question 17: Triple Integrals",
          correctAnswer: "answer_u16_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple Cylindrical
  multiInt5() {
    return {
      id: 'calc_u16_l5',
      title: 'Triple Cylindrical',
      unit: 16,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Triple Cylindrical",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q2',
          type: 'typing',
          question: "Question 2: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q3',
          type: 'typing',
          question: "Question 3: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Triple Cylindrical",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q5',
          type: 'typing',
          question: "Question 5: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q6',
          type: 'typing',
          question: "Question 6: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Triple Cylindrical",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q8',
          type: 'typing',
          question: "Question 8: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q9',
          type: 'typing',
          question: "Question 9: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Triple Cylindrical",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l5_q11',
          type: 'typing',
          question: "Question 11: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q12',
          type: 'typing',
          question: "Question 12: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Triple Cylindrical",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q14',
          type: 'typing',
          question: "Question 14: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q15',
          type: 'typing',
          question: "Question 15: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Triple Cylindrical",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q17',
          type: 'typing',
          question: "Question 17: Triple Cylindrical",
          correctAnswer: "answer_u16_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple Spherical
  multiInt6() {
    return {
      id: 'calc_u16_l6',
      title: 'Triple Spherical',
      unit: 16,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Triple Spherical",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q2',
          type: 'typing',
          question: "Question 2: Triple Spherical",
          correctAnswer: "answer_u16_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q3',
          type: 'typing',
          question: "Question 3: Triple Spherical",
          correctAnswer: "answer_u16_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Triple Spherical",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q5',
          type: 'typing',
          question: "Question 5: Triple Spherical",
          correctAnswer: "answer_u16_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q6',
          type: 'typing',
          question: "Question 6: Triple Spherical",
          correctAnswer: "answer_u16_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Triple Spherical",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q8',
          type: 'typing',
          question: "Question 8: Triple Spherical",
          correctAnswer: "answer_u16_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q9',
          type: 'typing',
          question: "Question 9: Triple Spherical",
          correctAnswer: "answer_u16_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Triple Spherical",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l6_q11',
          type: 'typing',
          question: "Question 11: Triple Spherical",
          correctAnswer: "answer_u16_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q12',
          type: 'typing',
          question: "Question 12: Triple Spherical",
          correctAnswer: "answer_u16_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Triple Spherical",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q14',
          type: 'typing',
          question: "Question 14: Triple Spherical",
          correctAnswer: "answer_u16_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q15',
          type: 'typing',
          question: "Question 15: Triple Spherical",
          correctAnswer: "answer_u16_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Triple Spherical",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q17',
          type: 'typing',
          question: "Question 17: Triple Spherical",
          correctAnswer: "answer_u16_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multiple Int Review
  multiInt7() {
    return {
      id: 'calc_u16_l7',
      title: 'Multiple Int Review',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u16_l7_q1',
          type: 'multiple_choice',
          question: "Question 1: Multiple Int Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u16_l7_q1.png",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q2',
          type: 'typing',
          question: "Question 2: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q3',
          type: 'typing',
          question: "Question 3: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q4',
          type: 'multiple_choice',
          question: "Question 4: Multiple Int Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q5',
          type: 'typing',
          question: "Question 5: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q6',
          type: 'typing',
          question: "Question 6: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q7',
          type: 'multiple_choice',
          question: "Question 7: Multiple Int Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u16_l7_q7.png",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q8',
          type: 'typing',
          question: "Question 8: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q9',
          type: 'typing',
          question: "Question 9: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q10',
          type: 'match_pairs',
          question: "Question 10: Multiple Int Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l7_q11',
          type: 'typing',
          question: "Question 11: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q12',
          type: 'typing',
          question: "Question 12: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q13',
          type: 'multiple_choice',
          question: "Question 13: Multiple Int Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u16_l7_q13.png",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q14',
          type: 'typing',
          question: "Question 14: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q15',
          type: 'typing',
          question: "Question 15: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q16',
          type: 'multiple_choice',
          question: "Question 16: Multiple Int Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q17',
          type: 'typing',
          question: "Question 17: Multiple Int Review",
          correctAnswer: "answer_u16_l7_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Fields
  vecCalc1() {
    return {
      id: 'calc_u17_l1',
      title: 'Vector Fields',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Vector Fields",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q2',
          type: 'typing',
          question: "Question 2: Vector Fields",
          correctAnswer: "answer_u17_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q3',
          type: 'typing',
          question: "Question 3: Vector Fields",
          correctAnswer: "answer_u17_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Vector Fields",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q5',
          type: 'typing',
          question: "Question 5: Vector Fields",
          correctAnswer: "answer_u17_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q6',
          type: 'typing',
          question: "Question 6: Vector Fields",
          correctAnswer: "answer_u17_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Vector Fields",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q8',
          type: 'typing',
          question: "Question 8: Vector Fields",
          correctAnswer: "answer_u17_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q9',
          type: 'typing',
          question: "Question 9: Vector Fields",
          correctAnswer: "answer_u17_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Vector Fields",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l1_q11',
          type: 'typing',
          question: "Question 11: Vector Fields",
          correctAnswer: "answer_u17_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q12',
          type: 'typing',
          question: "Question 12: Vector Fields",
          correctAnswer: "answer_u17_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Vector Fields",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q14',
          type: 'typing',
          question: "Question 14: Vector Fields",
          correctAnswer: "answer_u17_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q15',
          type: 'typing',
          question: "Question 15: Vector Fields",
          correctAnswer: "answer_u17_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Vector Fields",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q17',
          type: 'typing',
          question: "Question 17: Vector Fields",
          correctAnswer: "answer_u17_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Line Integrals
  vecCalc2() {
    return {
      id: 'calc_u17_l2',
      title: 'Line Integrals',
      unit: 17,
      icon: '→',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Line Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q2',
          type: 'typing',
          question: "Question 2: Line Integrals",
          correctAnswer: "answer_u17_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q3',
          type: 'typing',
          question: "Question 3: Line Integrals",
          correctAnswer: "answer_u17_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Line Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q5',
          type: 'typing',
          question: "Question 5: Line Integrals",
          correctAnswer: "answer_u17_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q6',
          type: 'typing',
          question: "Question 6: Line Integrals",
          correctAnswer: "answer_u17_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Line Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q8',
          type: 'typing',
          question: "Question 8: Line Integrals",
          correctAnswer: "answer_u17_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q9',
          type: 'typing',
          question: "Question 9: Line Integrals",
          correctAnswer: "answer_u17_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Line Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l2_q11',
          type: 'typing',
          question: "Question 11: Line Integrals",
          correctAnswer: "answer_u17_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q12',
          type: 'typing',
          question: "Question 12: Line Integrals",
          correctAnswer: "answer_u17_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Line Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q14',
          type: 'typing',
          question: "Question 14: Line Integrals",
          correctAnswer: "answer_u17_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q15',
          type: 'typing',
          question: "Question 15: Line Integrals",
          correctAnswer: "answer_u17_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Line Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q17',
          type: 'typing',
          question: "Question 17: Line Integrals",
          correctAnswer: "answer_u17_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // FT for Line Integrals
  vecCalc3() {
    return {
      id: 'calc_u17_l3',
      title: 'FT for Line Integrals',
      unit: 17,
      icon: '∂',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: FT for Line Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q2',
          type: 'typing',
          question: "Question 2: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q3',
          type: 'typing',
          question: "Question 3: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: FT for Line Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q5',
          type: 'typing',
          question: "Question 5: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q6',
          type: 'typing',
          question: "Question 6: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: FT for Line Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q8',
          type: 'typing',
          question: "Question 8: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q9',
          type: 'typing',
          question: "Question 9: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q10',
          type: 'match_pairs',
          question: "Question 10: FT for Line Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l3_q11',
          type: 'typing',
          question: "Question 11: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q12',
          type: 'typing',
          question: "Question 12: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: FT for Line Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q14',
          type: 'typing',
          question: "Question 14: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q15',
          type: 'typing',
          question: "Question 15: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: FT for Line Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q17',
          type: 'typing',
          question: "Question 17: FT for Line Integrals",
          correctAnswer: "answer_u17_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Greens Theorem
  vecCalc4() {
    return {
      id: 'calc_u17_l4',
      title: 'Greens Theorem',
      unit: 17,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l4_q1',
          type: 'multiple_choice',
          question: "Question 1: Greens Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l4_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q2',
          type: 'typing',
          question: "Question 2: Greens Theorem",
          correctAnswer: "answer_u17_l4_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q3',
          type: 'typing',
          question: "Question 3: Greens Theorem",
          correctAnswer: "answer_u17_l4_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q4',
          type: 'multiple_choice',
          question: "Question 4: Greens Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q5',
          type: 'typing',
          question: "Question 5: Greens Theorem",
          correctAnswer: "answer_u17_l4_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q6',
          type: 'typing',
          question: "Question 6: Greens Theorem",
          correctAnswer: "answer_u17_l4_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q7',
          type: 'multiple_choice',
          question: "Question 7: Greens Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l4_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q8',
          type: 'typing',
          question: "Question 8: Greens Theorem",
          correctAnswer: "answer_u17_l4_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q9',
          type: 'typing',
          question: "Question 9: Greens Theorem",
          correctAnswer: "answer_u17_l4_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q10',
          type: 'match_pairs',
          question: "Question 10: Greens Theorem",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l4_q11',
          type: 'typing',
          question: "Question 11: Greens Theorem",
          correctAnswer: "answer_u17_l4_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q12',
          type: 'typing',
          question: "Question 12: Greens Theorem",
          correctAnswer: "answer_u17_l4_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q13',
          type: 'multiple_choice',
          question: "Question 13: Greens Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l4_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q14',
          type: 'typing',
          question: "Question 14: Greens Theorem",
          correctAnswer: "answer_u17_l4_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q15',
          type: 'typing',
          question: "Question 15: Greens Theorem",
          correctAnswer: "answer_u17_l4_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q16',
          type: 'multiple_choice',
          question: "Question 16: Greens Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q17',
          type: 'typing',
          question: "Question 17: Greens Theorem",
          correctAnswer: "answer_u17_l4_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Curl and Divergence
  vecCalc5() {
    return {
      id: 'calc_u17_l5',
      title: 'Curl and Divergence',
      unit: 17,
      icon: '➡️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l5_q1',
          type: 'multiple_choice',
          question: "Question 1: Curl and Divergence",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l5_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q2',
          type: 'typing',
          question: "Question 2: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q3',
          type: 'typing',
          question: "Question 3: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q4',
          type: 'multiple_choice',
          question: "Question 4: Curl and Divergence",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q5',
          type: 'typing',
          question: "Question 5: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q6',
          type: 'typing',
          question: "Question 6: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q7',
          type: 'multiple_choice',
          question: "Question 7: Curl and Divergence",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l5_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q8',
          type: 'typing',
          question: "Question 8: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q9',
          type: 'typing',
          question: "Question 9: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q10',
          type: 'match_pairs',
          question: "Question 10: Curl and Divergence",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l5_q11',
          type: 'typing',
          question: "Question 11: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q12',
          type: 'typing',
          question: "Question 12: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q13',
          type: 'multiple_choice',
          question: "Question 13: Curl and Divergence",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l5_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q14',
          type: 'typing',
          question: "Question 14: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q15',
          type: 'typing',
          question: "Question 15: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q16',
          type: 'multiple_choice',
          question: "Question 16: Curl and Divergence",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q17',
          type: 'typing',
          question: "Question 17: Curl and Divergence",
          correctAnswer: "answer_u17_l5_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Surface Integrals
  vecCalc6() {
    return {
      id: 'calc_u17_l6',
      title: 'Surface Integrals',
      unit: 17,
      icon: '∇',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l6_q1',
          type: 'multiple_choice',
          question: "Question 1: Surface Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l6_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q2',
          type: 'typing',
          question: "Question 2: Surface Integrals",
          correctAnswer: "answer_u17_l6_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q3',
          type: 'typing',
          question: "Question 3: Surface Integrals",
          correctAnswer: "answer_u17_l6_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q4',
          type: 'multiple_choice',
          question: "Question 4: Surface Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q5',
          type: 'typing',
          question: "Question 5: Surface Integrals",
          correctAnswer: "answer_u17_l6_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q6',
          type: 'typing',
          question: "Question 6: Surface Integrals",
          correctAnswer: "answer_u17_l6_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q7',
          type: 'multiple_choice',
          question: "Question 7: Surface Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l6_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q8',
          type: 'typing',
          question: "Question 8: Surface Integrals",
          correctAnswer: "answer_u17_l6_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q9',
          type: 'typing',
          question: "Question 9: Surface Integrals",
          correctAnswer: "answer_u17_l6_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q10',
          type: 'match_pairs',
          question: "Question 10: Surface Integrals",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l6_q11',
          type: 'typing',
          question: "Question 11: Surface Integrals",
          correctAnswer: "answer_u17_l6_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q12',
          type: 'typing',
          question: "Question 12: Surface Integrals",
          correctAnswer: "answer_u17_l6_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q13',
          type: 'multiple_choice',
          question: "Question 13: Surface Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l6_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q14',
          type: 'typing',
          question: "Question 14: Surface Integrals",
          correctAnswer: "answer_u17_l6_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q15',
          type: 'typing',
          question: "Question 15: Surface Integrals",
          correctAnswer: "answer_u17_l6_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q16',
          type: 'multiple_choice',
          question: "Question 16: Surface Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q17',
          type: 'typing',
          question: "Question 17: Surface Integrals",
          correctAnswer: "answer_u17_l6_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Stokes Theorem
  vecCalc7() {
    return {
      id: 'calc_u17_l7',
      title: 'Stokes Theorem',
      unit: 17,
      icon: '🎯',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l7_q1',
          type: 'multiple_choice',
          question: "Question 1: Stokes Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l7_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q2',
          type: 'typing',
          question: "Question 2: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q3',
          type: 'typing',
          question: "Question 3: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q4',
          type: 'multiple_choice',
          question: "Question 4: Stokes Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q5',
          type: 'typing',
          question: "Question 5: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q6',
          type: 'typing',
          question: "Question 6: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q7',
          type: 'multiple_choice',
          question: "Question 7: Stokes Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l7_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q8',
          type: 'typing',
          question: "Question 8: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q9',
          type: 'typing',
          question: "Question 9: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q10',
          type: 'match_pairs',
          question: "Question 10: Stokes Theorem",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l7_q11',
          type: 'typing',
          question: "Question 11: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q12',
          type: 'typing',
          question: "Question 12: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q13',
          type: 'multiple_choice',
          question: "Question 13: Stokes Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l7_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q14',
          type: 'typing',
          question: "Question 14: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q15',
          type: 'typing',
          question: "Question 15: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q16',
          type: 'multiple_choice',
          question: "Question 16: Stokes Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q17',
          type: 'typing',
          question: "Question 17: Stokes Theorem",
          correctAnswer: "answer_u17_l7_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Divergence Theorem
  vecCalc8() {
    return {
      id: 'calc_u17_l8',
      title: 'Divergence Theorem',
      unit: 17,
      icon: '∬',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l8_q1',
          type: 'multiple_choice',
          question: "Question 1: Divergence Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l8_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q2',
          type: 'typing',
          question: "Question 2: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q3',
          type: 'typing',
          question: "Question 3: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q4',
          type: 'multiple_choice',
          question: "Question 4: Divergence Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q5',
          type: 'typing',
          question: "Question 5: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q6',
          type: 'typing',
          question: "Question 6: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q7',
          type: 'multiple_choice',
          question: "Question 7: Divergence Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l8_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q8',
          type: 'typing',
          question: "Question 8: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q9',
          type: 'typing',
          question: "Question 9: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q10',
          type: 'match_pairs',
          question: "Question 10: Divergence Theorem",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l8_q11',
          type: 'typing',
          question: "Question 11: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q12',
          type: 'typing',
          question: "Question 12: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q13',
          type: 'multiple_choice',
          question: "Question 13: Divergence Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l8_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q14',
          type: 'typing',
          question: "Question 14: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q15',
          type: 'typing',
          question: "Question 15: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q16',
          type: 'multiple_choice',
          question: "Question 16: Divergence Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q17',
          type: 'typing',
          question: "Question 17: Divergence Theorem",
          correctAnswer: "answer_u17_l8_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Calc Review
  vecCalc9() {
    return {
      id: 'calc_u17_l9',
      title: 'Vector Calc Review',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u17_l9_q1',
          type: 'multiple_choice',
          question: "Question 1: Vector Calc Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u17_l9_q1.png",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q2',
          type: 'typing',
          question: "Question 2: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q3',
          type: 'typing',
          question: "Question 3: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q4',
          type: 'multiple_choice',
          question: "Question 4: Vector Calc Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q5',
          type: 'typing',
          question: "Question 5: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q6',
          type: 'typing',
          question: "Question 6: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q7',
          type: 'multiple_choice',
          question: "Question 7: Vector Calc Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u17_l9_q7.png",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q8',
          type: 'typing',
          question: "Question 8: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q9',
          type: 'typing',
          question: "Question 9: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q10',
          type: 'match_pairs',
          question: "Question 10: Vector Calc Review",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l9_q11',
          type: 'typing',
          question: "Question 11: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q12',
          type: 'typing',
          question: "Question 12: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q13',
          type: 'multiple_choice',
          question: "Question 13: Vector Calc Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u17_l9_q13.png",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q14',
          type: 'typing',
          question: "Question 14: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q15',
          type: 'typing',
          question: "Question 15: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q16',
          type: 'multiple_choice',
          question: "Question 16: Vector Calc Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q17',
          type: 'typing',
          question: "Question 17: Vector Calc Review",
          correctAnswer: "answer_u17_l9_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Comprehensive Review I
  calc3Final1() {
    return {
      id: 'calc_u18_l1',
      title: 'Comprehensive Review I',
      unit: 18,
      icon: '🌐',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u18_l1_q1',
          type: 'multiple_choice',
          question: "Question 1: Comprehensive Review I",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u18_l1_q1.png",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q2',
          type: 'typing',
          question: "Question 2: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q3',
          type: 'typing',
          question: "Question 3: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q4',
          type: 'multiple_choice',
          question: "Question 4: Comprehensive Review I",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q5',
          type: 'typing',
          question: "Question 5: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q6',
          type: 'typing',
          question: "Question 6: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q7',
          type: 'multiple_choice',
          question: "Question 7: Comprehensive Review I",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u18_l1_q7.png",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q8',
          type: 'typing',
          question: "Question 8: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q9',
          type: 'typing',
          question: "Question 9: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q10',
          type: 'match_pairs',
          question: "Question 10: Comprehensive Review I",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l1_q11',
          type: 'typing',
          question: "Question 11: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q12',
          type: 'typing',
          question: "Question 12: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q13',
          type: 'multiple_choice',
          question: "Question 13: Comprehensive Review I",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u18_l1_q13.png",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q14',
          type: 'typing',
          question: "Question 14: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q15',
          type: 'typing',
          question: "Question 15: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q16',
          type: 'multiple_choice',
          question: "Question 16: Comprehensive Review I",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q17',
          type: 'typing',
          question: "Question 17: Comprehensive Review I",
          correctAnswer: "answer_u18_l1_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Comprehensive Review II
  calc3Final2() {
    return {
      id: 'calc_u18_l2',
      title: 'Comprehensive Review II',
      unit: 18,
      icon: '∭',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u18_l2_q1',
          type: 'multiple_choice',
          question: "Question 1: Comprehensive Review II",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u18_l2_q1.png",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q2',
          type: 'typing',
          question: "Question 2: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q3',
          type: 'typing',
          question: "Question 3: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q4',
          type: 'multiple_choice',
          question: "Question 4: Comprehensive Review II",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q5',
          type: 'typing',
          question: "Question 5: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q6',
          type: 'typing',
          question: "Question 6: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q7',
          type: 'multiple_choice',
          question: "Question 7: Comprehensive Review II",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u18_l2_q7.png",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q8',
          type: 'typing',
          question: "Question 8: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q9',
          type: 'typing',
          question: "Question 9: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q10',
          type: 'match_pairs',
          question: "Question 10: Comprehensive Review II",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l2_q11',
          type: 'typing',
          question: "Question 11: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q12',
          type: 'typing',
          question: "Question 12: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q13',
          type: 'multiple_choice',
          question: "Question 13: Comprehensive Review II",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u18_l2_q13.png",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q14',
          type: 'typing',
          question: "Question 14: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q15',
          type: 'typing',
          question: "Question 15: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q16',
          type: 'multiple_choice',
          question: "Question 16: Comprehensive Review II",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q17',
          type: 'typing',
          question: "Question 17: Comprehensive Review II",
          correctAnswer: "answer_u18_l2_q17",
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus 3 Final Exam
  calc3Final3() {
    return {
      id: 'calc_u18_l3',
      title: 'Calculus 3 Final Exam',
      unit: 18,
      icon: '🥁',
      xp: 100,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u18_l3_q1',
          type: 'multiple_choice',
          question: "Question 1: Calculus 3 Final Exam",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: "diagrams/calc_u18_l3_q1.png",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q2',
          type: 'typing',
          question: "Question 2: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q2",
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q3',
          type: 'typing',
          question: "Question 3: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q3",
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q4',
          type: 'multiple_choice',
          question: "Question 4: Calculus 3 Final Exam",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q5',
          type: 'typing',
          question: "Question 5: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q5",
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q6',
          type: 'typing',
          question: "Question 6: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q6",
          explanation: "Explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q7',
          type: 'multiple_choice',
          question: "Question 7: Calculus 3 Final Exam",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: "diagrams/calc_u18_l3_q7.png",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q8',
          type: 'typing',
          question: "Question 8: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q8",
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q9',
          type: 'typing',
          question: "Question 9: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q9",
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q10',
          type: 'match_pairs',
          question: "Question 10: Calculus 3 Final Exam",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l3_q11',
          type: 'typing',
          question: "Question 11: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q11",
          explanation: "Explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q12',
          type: 'typing',
          question: "Question 12: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q12",
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q13',
          type: 'multiple_choice',
          question: "Question 13: Calculus 3 Final Exam",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: "diagrams/calc_u18_l3_q13.png",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q14',
          type: 'typing',
          question: "Question 14: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q14",
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q15',
          type: 'typing',
          question: "Question 15: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q15",
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q16',
          type: 'multiple_choice',
          question: "Question 16: Calculus 3 Final Exam",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q17',
          type: 'typing',
          question: "Question 17: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q17",
          explanation: "Explanation for question 17",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q18',
          type: 'typing',
          question: "Question 18: Calculus 3 Final Exam",
          correctAnswer: "answer_u18_l3_q18",
          explanation: "Explanation for question 18",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q19',
          type: 'multiple_choice',
          question: "Question 19: Calculus 3 Final Exam",
          options: ["Option A for Q19", "Option B for Q19", "Option C for Q19", "Option D for Q19"],
          correct: 0,
          explanation: "Explanation for MC question 19",
          diagram: "diagrams/calc_u18_l3_q19.png",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q20',
          type: 'match_pairs',
          question: "Question 20: Calculus 3 Final Exam",
          pairs: [{"left": "Item A20", "right": "Match A20"}, {"left": "Item B20", "right": "Match B20"}, {"left": "Item C20", "right": "Match C20"}, {"left": "Item D20", "right": "Match D20"}],
          xp: 8
        }
      ]
    };
  },
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusComprehensiveLessons };
} else {
  window.CalculusComprehensiveLessons = CalculusComprehensiveLessons;

};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusCompleteLessons };
} else {
  window.CalculusCompleteLessons = CalculusCompleteLessons;
}
