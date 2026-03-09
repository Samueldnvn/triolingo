/**
 * QUESTION DATABASE - UNITS 10-12 CALCULUS (COMPLETE)
 * Series, Power Series, Parametric & Polar
 *
 * Structure:
- 7 lessons (Unit 10), 6 lessons (Unit 11), 6 lessons (Unit 12)
 * - 15-17 questions per lesson
 * - Majority typing questions (60-70%)
 */

// ============================================================================
// UNIT 10: SERIES
// ============================================================================
const CalculusUnit10Database = {
  unit: "Calculus Unit 10",
  title: "Series",
  lessons: {
    "u10_l1": {id: "calc10_u10_l1", title: "Introduction to Series", icon: "calculus_icons/integral.png", xp: 88, difficulty: "basic", questions: [
      {id: "u10_l1_q1", type: "multiple_choice", question: "A series is:", options: ["A sequence", "Sum of sequence terms", "A function", "An integral"], correct: 1, explanation: "Series = sum of sequence terms", xp: 4},
      {id: "u10_l1_q2", type: "multiple_choice", question: "Partial sum S_n =", options: ["a_1", "a_n", "∑_{k=1}^n a_k", "∑_{k=1}^∞ a_k"], correct: 2, explanation: "S_n = sum of first n terms", xp: 4},
      {id: "u10_l1_q3", type: "multiple_choice", question: "∑_{k=1}^3 k =", options: ["3", "6", "9", "1"], correct: 1, explanation: "1 + 2 + 3 = 6", xp: 5},
      {id: "u10_l1_q4", type: "multiple_choice", question: "∑_{k=1}^4 1 =", options: ["1", "2", "3", "4"], correct: 3, explanation: "1 + 1 + 1 + 1 = 4", xp: 4},
      {id: "u10_l1_q5", type: "multiple_choice", question: "∑_{k=1}^3 k² =", options: ["3", "9", "14", "36"], correct: 2, explanation: "1 + 4 + 9 = 14", xp: 5},
      {id: "u10_l1_q6", type: "typing", question: "Find ∑_{k=1}^3 k:", correctAnswer: "6", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q7", type: "typing", question: "Find ∑_{k=1}^4 k:", correctAnswer: "10", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q8", type: "typing", question: "Find ∑_{k=1}^5 k:", correctAnswer: "15", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q9", type: "typing", question: "Find ∑_{k=1}^3 2k:", correctAnswer: "12", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q10", type: "typing", question: "Find ∑_{k=1}^2 k²:", correctAnswer: "5", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q11", type: "typing", question: "Find ∑_{k=1}^4 k²:", correctAnswer: "30", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q12", type: "typing", question: "Partial sum S_n formula:", correctAnswer: "sum from k=1 to n of a_k", prompt: "Type your answer:", xp: 6},
      {id: "u10_l1_q13", type: "typing", question: "Series is:", correctAnswer: "sum of sequence terms", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q14", type: "typing", question: "Find ∑_{k=1}^3 3:", correctAnswer: "9", prompt: "Type your answer:", xp: 4},
      {id: "u10_l1_q15", type: "typing", question: "Find ∑_{k=1}^3 (k+1):", correctAnswer: "9", prompt: "Type your answer:", xp: 5},
      {id: "u10_l1_q16", type: "typing", question: "Find ∑_{k=1}^5 k³:", correctAnswer: "225", prompt: "Type your answer:", xp: 6},
      {id: "u10_l1_q17", type: "typing", question: "Find S_3 for a_n = n:", correctAnswer: "6", prompt: "Type your answer:", xp: 5}
    ]},
    "u10_l2": {id: "calc10_u10_l2", title: "Geometric Series", icon: "calculus_icons/integral.png", xp: 90, difficulty: "intermediate", questions: [
      {id: "u10_l2_q1", type: "multiple_choice", question: "∑_{k=0}^∞ r^k converges when:", options: ["r > 1", "r < -1", "|r| < 1", "r = 1"], correct: 2, explanation: "Converges when |r| < 1", xp: 5},
      {id: "u10_l2_q2", type: "multiple_choice", question: "∑_{k=0}^∞ r^k (|r|<1) =", options: ["1/(1+r)", "1/(1-r)", "r/(1-r)", "∞"], correct: 1, explanation: "Sum = 1/(1-r)", xp: 6},
      {id: "u10_l2_q3", type: "multiple_choice", question: "∑_{k=0}^∞ (1/2)^k =", options: ["1", "1/2", "2", "3/2"], correct: 2, explanation: "1/(1-1/2) = 2", xp: 6},
      {id: "u10_l2_q4", type: "multiple_choice", question: "∑_{k=0}^∞ (1/3)^k =", options: ["1/2", "1", "3/2", "2"], correct: 2, explanation: "1/(1-1/3) = 3/2", xp: 6},
      {id: "u10_l2_q5", type: "multiple_choice", question: "∑_{k=0}^∞ 2^k =", options: ["0", "1", "2", "Divergent"], correct: 3, explanation: "r=2, |r|≥1, divergent", xp: 5},
      {id: "u10_l2_q6", type: "typing", question: "Find ∑_{k=0}^∞ (1/2)^k:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q7", type: "typing", question: "Find ∑_{k=0}^∞ (1/4)^k:", correctAnswer: "4/3", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q8", type: "typing", question: "Find ∑_{k=0}^∞ (0.1)^k:", correctAnswer: "10/9", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q9", type: "typing", question: "Convergence condition |r|:", correctAnswer: "<1", prompt: "Type your answer:", xp: 5},
      {id: "u10_l2_q10", type: "typing", question: "Sum formula (|r|<1):", correctAnswer: "1/(1-r)", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q11", type: "typing", question: "Find ∑_{k=0}^∞ (2/3)^k:", correctAnswer: "3", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q12", type: "typing", question: "∑_{k=0}^∞ (-1/2)^k converges:", correctAnswer: "to 2/3", prompt: "Type your answer:", xp: 7},
      {id: "u10_l2_q13", type: "typing", question: "∑_{k=0}^∞ r^k diverges when:", correctAnswer: "|r|>=1", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q14", type: "typing", question: "Find ∑_{k=0}^∞ (1/5)^k:", correctAnswer: "5/4", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q15", type: "typing", question: "∑_{k=0}^∞ 1 diverges:", correctAnswer: "true", prompt: "Type your answer:", xp: 5},
      {id: "u10_l2_q16", type: "typing", question: "Find ∑_{k=0}^∞ (3/4)^k:", correctAnswer: "4", prompt: "Type your answer:", xp: 6},
      {id: "u10_l2_q17", type: "typing", question: "∑_{k=0}^∞ (-0.5)^k:", correctAnswer: "2/3", prompt: "Type your answer:", xp: 7}
    ]},
    "u10_l3": {id: "calc10_u10_l3", title: "p-Series", icon: "calculus_icons/integral.png", xp: 90, difficulty: "intermediate", questions: [
      {id: "u10_l3_q1", type: "multiple_choice", question: "p-series: ∑_{k=1}^∞ 1/k^p converges when:", options: ["p ≤ 1", "p > 1", "p = 1", "p = 0"], correct: 1, explanation: "Converges when p > 1", xp: 5},
      {id: "u10_l3_q2", type: "multiple_choice", question: "∑_{k=1}^∞ 1/k² converges (p=2>1) to:", options: ["π²/6", "π/6", "π/2", "∞"], correct: 0, explanation: "∑ 1/k² = π²/6", xp: 6},
      {id: "u10_l3_q3", type: "multiple_choice", question: "∑_{k=1}^∞ 1/k (harmonic series) converges:", options: ["Yes", "No", "To 1", "To 0"], correct: 1, explanation: "Harmonic series diverges (p=1)", xp: 5},
      {id: "u10_l3_q4", type: "multiple_choice", question: "∑_{k=1}^∞ 1/k³ converges because:", options: ["p = 3 > 1", "p = 3 < 1", "p = 1", "p = 0"], correct: 0, explanation: "p = 3 > 1, converges", xp: 5},
      {id: "u10_l3_q5", type: "multiple_choice", question: "∑_{k=1}^∞ 1/√k converges:", options: ["Yes", "No", "To 2", "To 1"], correct: 1, explanation: "p = 1/2 < 1, diverges", xp: 5},
      {id: "u10_l3_q6", type: "typing", question: "Does ∑ 1/k² converge?", correctAnswer: "yes", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q7", type: "typing", question: "Does ∑ 1/k converge?", correctAnswer: "no", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q8", type: "typing", question: "Does ∑ 1/k³ converge?", correctAnswer: "yes", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q9", type: "typing", question: "p-series converges when p:", correctAnswer: ">1", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q10", type: "typing", question: "Does ∑ 1/k^0.5 converge?", correctAnswer: "no", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q11", type: "typing", question: "∑ 1/k^4:", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q12", type: "typing", question: "∑ 1/k^2.5:", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q13", type: "typing", question: "∑ 1/k^1.5:", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q14", type: "typing", question: "∑ 1/k^1.1:", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q15", type: "typing", question: "∑ 1/k^0.9:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q16", type: "typing", question: "Harmonic series is:", correctAnswer: "divergent", prompt: "Type your answer:", xp: 5},
      {id: "u10_l3_q17", type: "typing", question: "p-series formula:", correctAnswer: "sum of 1/k^p", prompt: "Type your answer:", xp: 5}
    ]},
    "u10_l4": {id: "calc10_u10_l4", title: "Convergence Tests", icon: "calculus_icons/integral.png", xp: 92, difficulty: "advanced", questions: [
      {id: "u10_l4_q1", type: "multiple_choice", question: "Divergence test: if lim a_n ≠ 0, then ∑ a_n:", options: ["Converges", "Diverges", "Inconclusive", "= 1"], correct: 1, explanation: "Diverges if limit ≠ 0", xp: 5},
      {id: "u10_l4_q2", type: "multiple_choice", question: "Divergence test: if lim a_n = 0, then ∑ a_n:", options: ["Must converge", "Must diverge", "May converge or diverge", "= 0"], correct: 2, explanation: "Inconclusive when limit = 0", xp: 6},
      {id: "u10_l4_q3", type: "multiple_choice", question: "∫ f(x) dx converges means ∑ a_n (a_n = f(n)):", options: ["Converges", "Diverges", "Inconclusive", "= 0"], correct: 0, explanation: "Integral test: integral converges → series converges", xp: 6},
      {id: "u10_l4_q4", type: "multiple_choice", question: "For a_n > 0, if a_{n+1} < a_n, ∑ a_n:", options: ["Converges", "Diverges", "Test needed", "= 0"], correct: 2, explanation: "Decreasing alone is inconclusive", xp: 6},
      {id: "u10_l4_q5", type: "multiple_choice", question: "If lim a_n = 3, ∑ a_n:", options: ["Converges", "Diverges", "= 3", "Inconclusive"], correct: 1, explanation: "Limit = 3 ≠ 0, diverges by divergence test", xp: 5},
      {id: "u10_l4_q6", type: "typing", question: "If lim a_n = 5, ∑ a_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l4_q7", type: "typing", question: "If lim a_n = 0, ∑ a_n:", correctAnswer: "inconclusive", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q8", type: "typing", question: "Divergence test result if lim ≠ 0:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l4_q9", type: "typing", question: "If lim a_n = -1, ∑ a_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l4_q10", type: "typing", question: "If lim a_n = ∞, ∑ a_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l4_q11", type: "typing", question: "Integral test relates:", correctAnswer: "integral to series", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q12", type: "typing", question: "Divergence test uses:", correctAnswer: "limit of a_n", prompt: "Type your answer:", xp: 5},
      {id: "u10_l4_q13", type: "typing", question: "If lim a_n = 0, we need:", correctAnswer: "another test", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q14", type: "typing", question: "∑ (-1)^n (limit doesn't exist):", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q15", type: "typing", question: "∑ 1/k (lim = 0):", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q16", type: "typing", question: "If lim a_n = 0, ∑ may:", correctAnswer: "converge or diverge", prompt: "Type your answer:", xp: 6},
      {id: "u10_l4_q17", type: "typing", question: "Divergence test is conclusive when:", correctAnswer: "limit != 0", prompt: "Type your answer:", xp: 6}
    ]},
    "u10_l5": {id: "calc10_u10_l5", title: "Comparison Tests", icon: "calculus_icons/integral.png", xp: 92, difficulty: "advanced", questions: [
      {id: "u10_l5_q1", type: "multiple_choice", question: "If 0 ≤ a_n ≤ b_n and ∑ b_n converges, then ∑ a_n:", options: ["Converges", "Diverges", "Inconclusive", "= ∞"], correct: 0, explanation: "Comparison test: a_n ≤ b_n, b_n converges → a_n converges", xp: 6},
      {id: "u10_l5_q2", type: "multiple_choice", question: "If 0 ≤ a_n ≤ b_n and ∑ a_n diverges, then ∑ b_n:", options: ["Converges", "Diverges", "Inconclusive", "= 0"], correct: 1, explanation: "a_n ≤ b_n, a_n diverges → b_n diverges", xp: 6},
      {id: "u10_l5_q3", type: "multiple_choice", question: "∑ 1/n³ compared to ∑ 1/n²:", options: ["1/n³ ≤ 1/n²", "1/n³ ≥ 1/n²", "Equal", "No comparison"], correct: 0, explanation: "1/n³ < 1/n² for n > 1", xp: 5},
      {id: "u10_l5_q4", type: "multiple_choice", question: "Since ∑ 1/n² converges, ∑ 1/n³:", options: ["Converges", "Diverges", "Inconclusive", "= 0"], correct: 0, explanation: "1/n³ ≤ 1/n², so converges", xp: 6},
      {id: "u10_l5_q5", type: "multiple_choice", question: "∑ 1/2n compared to ∑ 1/n:", options: ["1/2n ≤ 1/n", "1/2n ≥ 1/n", "Equal", "No relation"], correct: 1, explanation: "1/2n > 1/n for n > 0", xp: 5},
      {id: "u10_l5_q6", type: "typing", question: "If a_n ≤ b_n and ∑ b_n converges, ∑ a_n:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q7", type: "typing", question: "If a_n ≤ b_n and ∑ a_n diverges, ∑ b_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q8", type: "typing", question: "∑ 1/n^4 (compared to 1/n²):", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l5_q9", type: "typing", question: "∑ 1/√n (compared to 1/n):", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q10", type: "typing", question: "Comparison test requires:", correctAnswer: "0 <= a_n <= b_n", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q11", type: "typing", question: "∑ 1/(n²+1) compared to 1/n²:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q12", type: "typing", question: "∑ 1/(n+1) compared to 1/n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q13", type: "typing", question: "If b_n larger convergent, a_n:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q14", type: "typing", question: "If a_n smaller divergent, b_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q15", type: "typing", question: "Comparison test for 1/(n³+1):", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l5_q16", type: "typing", question: "∑ 1/n^5 (compared to 1/n²):", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l5_q17", type: "typing", question: "Direct comparison needs:", correctAnswer: "inequality 0 <= a_n <= b_n", prompt: "Type your answer:", xp: 6}
    ]},
    "u10_l6": {id: "calc10_u10_l6", title: "Ratio & Root Tests", icon: "calculus_icons/integral.png", xp: 94, difficulty: "advanced", questions: [
      {id: "u10_l6_q1", type: "multiple_choice", question: "Ratio test: L = lim |a_{n+1}/a_n|. If L < 1, series:", options: ["Converges", "Diverges", "Inconclusive", "= 0"], correct: 0, explanation: "L < 1: converges", xp: 6},
      {id: "u10_l6_q2", type: "multiple_choice", question: "Ratio test: If L > 1, series:", options: ["Converges", "Diverges", "Inconclusive", "= 1"], correct: 1, explanation: "L > 1: diverges", xp: 6},
      {id: "u10_l6_q3", type: "multiple_choice", question: "Ratio test: If L = 1, test is:", options: ["Convergent", "Divergent", "Inconclusive", "= 0"], correct: 2, explanation: "L = 1: inconclusive", xp: 6},
      {id: "u10_l6_q4", type: "multiple_choice", question: "Root test: L = lim |a_n|^(1/n). If L < 1:", options: ["Converges", "Diverges", "Inconclusive", "= 1"], correct: 0, explanation: "L < 1: converges", xp: 6},
      {id: "u10_l6_q5", type: "multiple_choice", question: "For a_n = 2^n/n!, ratio test L =", options: ["0", "1", "2", "∞"], correct: 0, explanation: "L = 0 < 1: converges", xp: 7},
      {id: "u10_l6_q6", type: "typing", question: "Ratio test L < 1:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q7", type: "typing", question: "Ratio test L > 1:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q8", type: "typing", question: "Ratio test L = 1:", correctAnswer: "inconclusive", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q9", type: "typing", question: "Root test L < 1:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q10", type: "typing", question: "Root test L > 1:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q11", type: "typing", question: "Ratio test uses:", correctAnswer: "limit of |a_{n+1}/a_n|", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q12", type: "typing", question: "Root test uses:", correctAnswer: "limit of |a_n|^(1/n)", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q13", type: "typing", question: "∑ n!/10^n (ratio test L):", correctAnswer: "infinity, diverges", prompt: "Type your answer:", xp: 7},
      {id: "u10_l6_q14", type: "typing", question: "∑ 2^n/3^n (ratio test L):", correctAnswer: "2/3 < 1, converges", prompt: "Type your answer:", xp: 7},
      {id: "u10_l6_q15", type: "typing", question: "∑ 3^n/2^n (ratio test L):", correctAnswer: "3/2 > 1, diverges", prompt: "Type your answer:", xp: 7},
      {id: "u10_l6_q16", type: "typing", question: "Both ratio and root test need:", correctAnswer: "limit calculation", prompt: "Type your answer:", xp: 6},
      {id: "u10_l6_q17", type: "typing", question: "Ratio test works well for:", correctAnswer: "factorials and exponentials", prompt: "Type your answer:", xp: 6}
    ]},
    "u10_l7": {id: "calc10_u10_l7", title: "Series Review", icon: "calculus_icons/integral.png", xp: 94, difficulty: "advanced", questions: [
      {id: "u10_l7_q1", type: "multiple_choice", question: "Series is:", options: ["Sequence", "Sum of terms", "Function", "Integral"], correct: 1, explanation: "Sum of sequence terms", xp: 4},
      {id: "u10_l7_q2", type: "multiple_choice", question: "Geometric series ∑ r^k converges when:", options: ["r > 1", "r < -1", "|r| < 1", "r = 1"], correct: 2, explanation: "|r| < 1", xp: 5},
      {id: "u10_l7_q3", type: "multiple_choice", question: "p-series ∑ 1/k^p converges when:", options: ["p ≤ 1", "p > 1", "p = 1", "p = 0"], correct: 1, explanation: "p > 1", xp: 5},
      {id: "u10_l7_q4", type: "multiple_choice", question: "If lim a_n ≠ 0, ∑ a_n:", options: ["Converges", "Diverges", "Inconclusive", "= 0"], correct: 1, explanation: "Divergence test", xp: 5},
      {id: "u10_l7_q5", type: "multiple_choice", question: "Ratio test L < 1:", options: ["Converges", "Diverges", "Inconclusive", "= 1"], correct: 0, explanation: "Converges", xp: 5},
      {id: "u10_l7_q6", type: "typing", question: "Find ∑_{k=0}^∞ (1/2)^k:", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
      {id: "u10_l7_q7", type: "typing", question: "Does ∑ 1/k² converge?", correctAnswer: "yes", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q8", type: "typing", question: "Does ∑ 1/k converge?", correctAnswer: "no", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q9", type: "typing", question: "If lim a_n = 3, ∑ a_n:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q10", type: "typing", question: "Ratio test L > 1:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q11", type: "typing", question: "Find S_3 for a_n = n:", correctAnswer: "6", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q12", type: "typing", question: "∑ 1/k³:", correctAnswer: "converges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q13", type: "typing", question: "∑ 1/√k:", correctAnswer: "diverges", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q14", type: "typing", question: "∑ 2^n/3^n:", correctAnswer: "converges", prompt: "Type your answer:", xp: 6},
      {id: "u10_l7_q15", type: "typing", question: "∑ (1/3)^k:", correctAnswer: "3/2", prompt: "Type your answer:", xp: 6},
      {id: "u10_l7_q16", type: "typing", question: "p-series converges when p:", correctAnswer: ">1", prompt: "Type your answer:", xp: 5},
      {id: "u10_l7_q17", type: "typing", question: "Geometric converges when |r|:", correctAnswer: "<1", prompt: "Type your answer:", xp: 5}
    ]}
  }
};

// ============================================================================
// UNIT 11: POWER SERIES
// ============================================================================
const CalculusUnit11Database = {
  unit: "Calculus Unit 11",
  title: "Power Series",
  lessons: {
    "u11_l1": {id: "calc11_u11_l1", title: "Power Series Basics", icon: "calculus_icons/integral.png", xp: 90, difficulty: "intermediate", questions: [
      {id: "u11_l1_q1", type: "multiple_choice", question: "Power series form:", options: ["∑ a_n", "∑ a_n(x-c)^n", "∑ x^n", "∑ n!"], correct: 1, explanation: "Power series: ∑ a_n(x-c)^n", xp: 5},
      {id: "u11_l1_q2", type: "multiple_choice", question: "Radius of convergence R:", options: ["x-c", "Distance where series converges", "First term", "Center point"], correct: 1, explanation: "R = radius where series converges", xp: 6},
      {id: "u11_l1_q3", type: "multiple_choice", question: "Interval of convergence is:", options: ["[c-R, c+R]", "(c-R, c+R)", "May include endpoints", "All of the above"], correct: 3, explanation: "Interval: (c-R, c+R), may include endpoints", xp: 6},
      {id: "u11_l1_q4", type: "multiple_choice", question: "For ∑ x^n/n!, R =", options: ["0", "1", "∞", "1/2"], correct: 2, explanation: "Ratio test gives R = ∞ (converges everywhere)", xp: 7},
      {id: "u11_l1_q5", type: "multiple_choice", question: "For ∑ (x-2)^n/3^n, R =", options: ["1", "2", "3", "6"], correct: 2, explanation: "R = 3", xp: 6},
      {id: "u11_l1_q6", type: "typing", question: "Power series form:", correctAnswer: "sum of a_n*(x-c)^n", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q7", type: "typing", question: "Radius of convergence:", correctAnswer: "R", prompt: "Type your answer:", xp: 5},
      {id: "u11_l1_q8", type: "typing", question: "For ∑ x^n/2^n, R =", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q9", type: "typing", question: "For ∑ (x-1)^n, R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q10", type: "typing", question: "Center point is:", correctAnswer: "c", prompt: "Type your answer:", xp: 5},
      {id: "u11_l1_q11", type: "typing", question: "For ∑ x^n/n, R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q12", type: "typing", question: "For ∑ x^n, R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q13", type: "typing", question: "For ∑ (x+1)^n/4^n, R =", correctAnswer: "4", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q14", type: "typing", question: "R = ∞ means:", correctAnswer: "converges everywhere", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q15", type: "typing", question: "Interval: (c-R, c+R):", correctAnswer: "radius R", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q16", type: "typing", question: "For ∑ n!x^n, R =", correctAnswer: "0", prompt: "Type your answer:", xp: 6},
      {id: "u11_l1_q17", type: "typing", question: "Power series centered at c:", correctAnswer: "sum a_n*(x-c)^n", prompt: "Type your answer:", xp: 6}
    ]},
    "u11_l2": {id: "calc11_u11_l2", title: "Taylor Series", icon: "calculus_icons/integral.png", xp: 92, difficulty: "advanced", questions: [
      {id: "u11_l2_q1", type: "multiple_choice", question: "Taylor series of f(x) at x=a:", options: ["∑ f^n(a)", "∑ f^n(a)(x-a)^n/n!", "∑ f(x-a)^n", "∑ n!"], correct: 1, explanation: "Taylor: ∑ f^n(a)(x-a)^n/n!", xp: 6},
      {id: "u11_l2_q2", type: "multiple_choice", question: "Maclaurin series is Taylor with a =", options: ["0", "1", "π", "∞"], correct: 0, explanation: "Maclaurin = Taylor at a = 0", xp: 5},
      {id: "u11_l2_q3", type: "multiple_choice", question: "e^x Maclaurin series:", options: ["∑ x^n", "∑ x^n/n!", "∑ x^n/n", "1 + x + x²"], correct: 1, explanation: "e^x = ∑ x^n/n!", xp: 6},
      {id: "u11_l2_q4", type: "multiple_choice", question: "sin(x) Maclaurin series:", options: ["∑ x^n/n!", "∑ (-1)^n x^(2n+1)/(2n+1)!", "∑ x^(2n)/n", "1 + x + x²/2"], correct: 1, explanation: "sin(x) = ∑ (-1)^n x^(2n+1)/(2n+1)!", xp: 7},
      {id: "u11_l2_q5", type: "multiple_choice", question: "cos(x) Maclaurin series:", options: ["∑ (-1)^n x^(2n)/(2n)!", "∑ x^(2n+1)/n!", "∑ (-1)^n x^(2n+1)/n!", "∑ x^n"], correct: 0, explanation: "cos(x) = ∑ (-1)^n x^(2n)/(2n)!", xp: 7},
      {id: "u11_l2_q6", type: "typing", question: "Maclaurin is Taylor at a:", correctAnswer: "0", prompt: "Type your answer:", xp: 5},
      {id: "u11_l2_q7", type: "typing", question: "e^x Maclaurin:", correctAnswer: "sum x^n/n!", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q8", type: "typing", question: "Taylor at a:", correctAnswer: "sum f^n(a)*(x-a)^n/n!", prompt: "Type your answer:", xp: 7},
      {id: "u11_l2_q9", type: "typing", question: "sin(x) has:", correctAnswer: "odd powers only", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q10", type: "typing", question: "cos(x) has:", correctAnswer: "even powers only", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q11", type: "typing", question: "First 3 terms of e^x:", correctAnswer: "1+x+x^2/2", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q12", type: "typing", question: "First 2 terms of sin(x):", correctAnswer: "x-x^3/6", prompt: "Type your answer:", xp: 7},
      {id: "u11_l2_q13", type: "typing", question: "First 2 terms of cos(x):", correctAnswer: "1-x^2/2", prompt: "Type your answer:", xp: 7},
      {id: "u11_l2_q14", type: "typing", question: "Taylor uses:", correctAnswer: "derivatives at a", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q15", type: "typing", question: "Factorial in denominator:", correctAnswer: "n!", prompt: "Type your answer:", xp: 5},
      {id: "u11_l2_q16", type: "typing", question: "e^x R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l2_q17", type: "typing", question: "Taylor formula:", correctAnswer: "sum of derivatives at a", prompt: "Type your answer:", xp: 7}
    ]},
    "u11_l3": {id: "calc11_u11_l3", title: "Common Taylor Series", icon: "calculus_icons/integral.png", xp: 92, difficulty: "advanced", questions: [
      {id: "u11_l3_q1", type: "multiple_choice", question: "ln(1+x) Maclaurin series:", options: ["∑ x^n", "∑ (-1)^n x^(n+1)/(n+1)", "∑ x^n/n", "∑ (-1)^n x^n"], correct: 1, explanation: "ln(1+x) = ∑ (-1)^n x^(n+1)/(n+1)", xp: 7},
      {id: "u11_l3_q2", type: "multiple_choice", question: "1/(1-x) Maclaurin series:", options: ["∑ x^n", "∑ (-1)^n x^n", "∑ x^n/n", "∑ x^n/n!"], correct: 0, explanation: "1/(1-x) = ∑ x^n for |x| < 1", xp: 6},
      {id: "u11_l3_q3", type: "multiple_choice", question: "arctan(x) Maclaurin series:", options: ["∑ x^n", "∑ (-1)^n x^(2n+1)/(2n+1)", "∑ x^(2n+1)/n", "∑ (-1)^n x^(2n)"], correct: 1, explanation: "arctan(x) = ∑ (-1)^n x^(2n+1)/(2n+1)", xp: 7},
      {id: "u11_l3_q4", type: "multiple_choice", question: "e^x series converges:", options: ["|x| < 1", "|x| < ∞", "|x| < 2", "Never"], correct: 1, explanation: "R = ∞, converges everywhere", xp: 6},
      {id: "u11_l3_q5", type: "multiple_choice", question: "ln(1+x) series converges when:", options: ["x < 1", "-1 < x ≤ 1", "|x| < 1", "Always"], correct: 1, explanation: "Converges for -1 < x ≤ 1", xp: 7},
      {id: "u11_l3_q6", type: "typing", question: "1/(1-x) Maclaurin:", correctAnswer: "sum x^n", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q7", type: "typing", question: "ln(1+x) first 2 terms:", correctAnswer: "x-x^2/2", prompt: "Type your answer:", xp: 7},
      {id: "u11_l3_q8", type: "typing", question: "arctan(x) first 2 terms:", correctAnswer: "x-x^3/3", prompt: "Type your answer:", xp: 7},
      {id: "u11_l3_q9", type: "typing", question: "1/(1-x) R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q10", type: "typing", question: "arctan(x) R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q11", type: "typing", question: "ln(1+x) alternating:", correctAnswer: "yes", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q12", type: "typing", question: "sin(x) R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q13", type: "typing", question: "cos(x) R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q14", type: "typing", question: "1/(1-x) geometric ratio:", correctAnswer: "x", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q15", type: "typing", question: "ln(1+x) convergence:", correctAnswer: "-1 < x <= 1", prompt: "Type your answer:", xp: 7},
      {id: "u11_l3_q16", type: "typing", question: "arctan(x) R:", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l3_q17", type: "typing", question: "All R = ∞: e^x, sin(x), cos(x):", correctAnswer: "true", prompt: "Type your answer:", xp: 6}
    ]},
    "u11_l4": {id: "calc11_u11_l4", title: "Radius of Convergence", icon: "calculus_icons/integral.png", xp: 93, difficulty: "advanced", questions: [
      {id: "u11_l4_q1", type: "multiple_choice", question: "Ratio test for R: R =", options: ["lim |a_{n+1}/a_n|", "1/lim |a_{n+1}/a_n|", "lim |a_n|", "∞"], correct: 1, explanation: "R = 1/L where L = lim |a_{n+1}/a_n|", xp: 6},
      {id: "u11_l4_q2", type: "multiple_choice", question: "For ∑ x^n/n!, R =", options: ["0", "1", "∞", "n!"], correct: 2, explanation: "L = 0, so R = ∞", xp: 7},
      {id: "u11_l4_q3", type: "multiple_choice", question: "For ∑ n!x^n, R =", options: ["0", "1", "∞", "n"], correct: 0, explanation: "L = ∞, so R = 0", xp: 7},
      {id: "u11_l4_q4", type: "multiple_choice", question: "For ∑ (x-2)^n/n, R =", options: ["1", "2", "∞", "0"], correct: 0, explanation: "L = 1, so R = 1", xp: 6},
      {id: "u11_l4_q5", type: "multiple_choice", question: "If L = 1/2, then R =", options: ["1/2", "2", "1", "∞"], correct: 1, explanation: "R = 1/(1/2) = 2", xp: 6},
      {id: "u11_l4_q6", type: "typing", question: "R = 1/L where L =", correctAnswer: "limit of |a_{n+1}/a_n|", prompt: "Type your answer:", xp: 7},
      {id: "u11_l4_q7", type: "typing", question: "If L = 0, R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q8", type: "typing", question: "If L = ∞, R =", correctAnswer: "0", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q9", type: "typing", question: "If L = 1, R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q10", type: "typing", question: "For ∑ (x/3)^n, R =", correctAnswer: "3", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q11", type: "typing", question: "For ∑ (2x)^n/n!, R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 7},
      {id: "u11_l4_q12", type: "typing", question: "For ∑ n!(x-1)^n, R =", correctAnswer: "0", prompt: "Type your answer:", xp: 7},
      {id: "u11_l4_q13", type: "typing", question: "R formula:", correctAnswer: "1/limit", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q14", type: "typing", question: "L = 0 means:", correctAnswer: "R = infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q15", type: "typing", question: "L = 1/3 means:", correctAnswer: "R = 3", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q16", type: "typing", question: "R > 0 interval:", correctAnswer: "(c-R, c+R)", prompt: "Type your answer:", xp: 6},
      {id: "u11_l4_q17", type: "typing", question: "Find R for ∑ (x/5)^n:", correctAnswer: "5", prompt: "Type your answer:", xp: 6}
    ]},
    "u11_l5": {id: "calc11_u11_l5", title: "Applications of Taylor Series", icon: "calculus_icons/integral.png", xp: 94, difficulty: "advanced", questions: [
      {id: "u11_l5_q1", type: "multiple_choice", question: "Use series to approximate:", options: ["e", "π", "Both", "Neither"], correct: 2, explanation: "Can approximate e, π, and other constants", xp: 5},
      {id: "u11_l5_q2", type: "multiple_choice", question: "Using arctan(1) = π/4, we can approximate:", options: ["e", "π", "ln(2)", "√2"], correct: 1, explanation: "π/4 = 1 - 1/3 + 1/5 - ... approximates π", xp: 6},
      {id: "u11_l5_q3", type: "multiple_choice", question: "e ≈ using series (first 3 terms):", options: ["1", "2", "2.5", "3"], correct: 2, explanation: "e ≈ 1 + 1 + 1/2 = 2.5", xp: 6},
      {id: "u11_l5_q4", type: "multiple_choice", question: "More terms in series =", options: ["Less accurate", "More accurate", "Same", "Worse"], correct: 1, explanation: "More terms = more accurate", xp: 5},
      {id: "u11_l5_q5", type: "multiple_choice", question: "Taylor series error decreases as:", options: ["n increases", "n decreases", "x decreases", "x increases"], correct: 0, explanation: "Error decreases as more terms (n) are added", xp: 6},
      {id: "u11_l5_q6", type: "typing", question: "e^x first 3 terms:", correctAnswer: "1+x+x^2/2", prompt: "Type your answer:", xp: 6},
      {id: "u11_l5_q7", type: "typing", question: "Approximate e (2 terms):", correctAnswer: "2", prompt: "Type your answer:", xp: 5},
      {id: "u11_l5_q8", type: "typing", question: "Approximate e (3 terms):", correctAnswer: "2.5", prompt: "Type your answer:", xp: 6},
      {id: "u11_l5_q9", type: "typing", question: "More terms =", correctAnswer: "more accurate", prompt: "Type your answer:", xp: 5},
      {id: "u11_l5_q10", type: "typing", question: "π approximation uses:", correctAnswer: "arctan", prompt: "Type your answer:", xp: 6},
      {id: "u11_l5_q11", type: "typing", question: "e^1 using series:", correctAnswer: "sum of 1/n!", prompt: "Type your answer:", xp: 6},
      {id: "u11_l5_q12", type: "typing", question: "Error decreases with:", correctAnswer: "more terms", prompt: "Type your answer:", xp: 5},
      {id: "u11_l5_q13", type: "typing", question: "Taylor series approximates:", correctAnswer: "functions", prompt: "Type your answer:", xp: 5},
      {id: "u11_l5_q14", type: "typing", question: "π/4 series first 2 terms:", correctAnswer: "1-1/3", prompt: "Type your answer:", xp: 7},
      {id: "u11_l5_q15", type: "typing", question: "π using 2 terms:", correctAnswer: "8/3", prompt: "Type your answer:", xp: 7},
      {id: "u11_l5_q16", type: "typing", question: "Series approximation:", correctAnswer: "truncates to n terms", prompt: "Type your answer:", xp: 6},
      {id: "u11_l5_q17", type: "typing", question: "Remainder term:", correctAnswer: "error after n terms", prompt: "Type your answer:", xp: 6}
    ]},
    "u11_l6": {id: "calc11_u11_l6", title: "Power Series Review", icon: "calculus_icons/integral.png", xp: 95, difficulty: "advanced", questions: [
      {id: "u11_l6_q1", type: "multiple_choice", question: "Power series form:", options: ["∑ a_n", "∑ a_n(x-c)^n", "∑ x^n/n", "∑ n!"], correct: 1, explanation: "∑ a_n(x-c)^n", xp: 5},
      {id: "u11_l6_q2", type: "multiple_choice", question: "Maclaurin is Taylor at a =", options: ["1", "0", "π", "-1"], correct: 1, explanation: "a = 0", xp: 5},
      {id: "u11_l6_q3", type: "multiple_choice", question: "e^x Maclaurin:", options: ["∑ x^n", "∑ x^n/n!", "∑ (-1)^n x^n", "∑ x^n/n"], correct: 1, explanation: "∑ x^n/n!", xp: 6},
      {id: "u11_l6_q4", type: "multiple_choice", question: "R = 1/L, where L =", options: ["lim a_n", "lim |a_{n+1}/a_n|", "lim n!", "lim 1/n"], correct: 1, explanation: "L = lim |a_{n+1}/a_n|", xp: 6},
      {id: "u11_l6_q5", type: "multiple_choice", question: "If L = 0, R =", options: ["0", "1", "∞", "2"], correct: 2, explanation: "R = ∞", xp: 6},
      {id: "u11_l6_q6", type: "typing", question: "Taylor formula:", correctAnswer: "sum f^n(a)*(x-a)^n/n!", prompt: "Type your answer:", xp: 7},
      {id: "u11_l6_q7", type: "typing", question: "sin(x) Maclaurin:", correctAnswer: "sum (-1)^n x^(2n+1)/(2n+1)!", prompt: "Type your answer:", xp: 7},
      {id: "u11_l6_q8", type: "typing", question: "cos(x) Maclaurin:", correctAnswer: "sum (-1)^n x^(2n)/(2n)!", prompt: "Type your answer:", xp: 7},
      {id: "u11_l6_q9", type: "typing", question: "e^x R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q10", type: "typing", question: "1/(1-x) Maclaurin:", correctAnswer: "sum x^n", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q11", type: "typing", question: "ln(1+x) Maclaurin:", correctAnswer: "sum (-1)^n x^(n+1)/(n+1)", prompt: "Type your answer:", xp: 7},
      {id: "u11_l6_q12", type: "typing", question: "R formula:", correctAnswer: "1/limit of ratios", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q13", type: "typing", question: "If L = 2, R =", correctAnswer: "1/2", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q14", type: "typing", question: "For ∑ x^n/n!, R =", correctAnswer: "infinity", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q15", type: "typing", question: "For ∑ n!x^n, R =", correctAnswer: "0", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q16", type: "typing", question: "Approximate e (3 terms):", correctAnswer: "2.5", prompt: "Type your answer:", xp: 6},
      {id: "u11_l6_q17", type: "typing", question: "arctan(x) R =", correctAnswer: "1", prompt: "Type your answer:", xp: 6}
    ]}
  }
};

// ============================================================================
// UNIT 12: PARAMETRIC & POLAR
// ============================================================================
const CalculusUnit12Database = {
  unit: "Calculus Unit 12",
  title: "Parametric & Polar",
  lessons: {
    "u12_l1": {id: "calc12_u12_l1", title: "Parametric Equations", icon: "calculus_icons/integral.png", xp: 90, difficulty: "intermediate", questions: [
      {id: "u12_l1_q1", type: "multiple_choice", question: "Parametric equations:", options: ["y = f(x)", "x = f(t), y = g(t)", "r = f(θ)", "f(x,y) = 0"], correct: 1, explanation: "x = f(t), y = g(t)", xp: 5},
      {id: "u12_l1_q2", type: "multiple_choice", question: "For x = t², y = t, dy/dx =", options: ["2t", "1/(2t)", "t", "1/t"], correct: 1, explanation: "dy/dx = (dy/dt)/(dx/dt) = 1/(2t)", xp: 6},
      {id: "u12_l1_q3", type: "multiple_choice", question: "For x = cos(t), y = sin(t), dy/dx =", options: ["-cos(t)", "-tan(t)", "-cot(t)", "tan(t)"], correct: 1, explanation: "dy/dx = cos(t)/(-sin(t)) = -cot(t)", xp: 7},
      {id: "u12_l1_q4", type: "multiple_choice", question: "dy/dx formula:", options: ["(dy/dt)+(dx/dt)", "(dy/dt)/(dx/dt)", "(dx/dt)/(dy/dt)", "dy/dt"], correct: 1, explanation: "dy/dx = (dy/dt)/(dx/dt)", xp: 6},
      {id: "u12_l1_q5", type: "multiple_choice", question: "d²y/dx² formula:", options: ["d/dt(dy/dx)", "(d/dt(dy/dx))/(dx/dt)", "(dx/dt)/(dy/dt)", "dy/dt"], correct: 1, explanation: "d²y/dx² = (d/dt(dy/dx))/(dx/dt)", xp: 7},
      {id: "u12_l1_q6", type: "typing", question: "Parametric form:", correctAnswer: "x=f(t), y=g(t)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l1_q7", type: "typing", question: "dy/dx =", correctAnswer: "(dy/dt)/(dx/dt)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l1_q8", type: "typing", question: "For x=t, y=t², dy/dx:", correctAnswer: "2t", prompt: "Type your answer:", xp: 6},
      {id: "u12_l1_q9", type: "typing", question: "For x=t², y=2t, dy/dx:", correctAnswer: "1/t", prompt: "Type your answer:", xp: 6},
      {id: "u12_l1_q10", type: "typing", question: "For x=cos(t), y=sin(t), at t=0, dy/dx:", correctAnswer: "0", prompt: "Type your answer:", xp: 7},
      {id: "u12_l1_q11", type: "typing", question: "For x=t³, y=t, dy/dx:", correctAnswer: "1/(3t^2)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l1_q12", type: "typing", question: "d²y/dx²:", correctAnswer: "(d/dt(dy/dx))/(dx/dt)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l1_q13", type: "typing", question: "Parameter is:", correctAnswer: "t", prompt: "Type your answer:", xp: 5},
      {id: "u12_l1_q14", type: "typing", question: "For x=sin(t), y=cos(t), dy/dx:", correctAnswer: "-tan(t)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l1_q15", type: "typing", question: "Eliminate t: x=t, y=t²:", correctAnswer: "y=x^2", prompt: "Type your answer:", xp: 6},
      {id: "u12_l1_q16", type: "typing", question: "Eliminate t: x=cos(t), y=sin(t):", correctAnswer: "x^2+y^2=1", prompt: "Type your answer:", xp: 7},
      {id: "u12_l1_q17", type: "typing", question: "Parametric curve is:", correctAnswer: "trace of (x(t), y(t))", prompt: "Type your answer:", xp: 6}
    ]},
    "u12_l2": {id: "calc12_u12_l2", title: "Arc Length - Parametric", icon: "calculus_icons/integral.png", xp: 92, difficulty: "advanced", questions: [
      {id: "u12_l2_q1", type: "multiple_choice", question: "Arc length L = ∫√[(dx/dt)² + (dy/dt)²] dt", options: ["True", "False", "Only for circles", "Only for lines"], correct: 0, explanation: "Parametric arc length formula", xp: 6},
      {id: "u12_l2_q2", type: "multiple_choice", question: "For x = t, y = t² from 0 to 1, L =", options: ["1", "√5", "(√5)/2", "2"], correct: 2, explanation: "L = ∫₀¹ √(1 + 4t²) dt = (√5)/2 + ln(√5)/4 ≈ (√5)/2", xp: 7},
      {id: "u12_l2_q3", type: "multiple_choice", question: "For x = cos(t), y = sin(t) from 0 to 2π, L =", options: ["π", "2π", "π/2", "4π"], correct: 1, explanation: "Circle circumference = 2π", xp: 6},
      {id: "u12_l2_q4", type: "multiple_choice", question: "Arc length integrand:", options: ["(dx/dt) + (dy/dt)", "√[(dx/dt)² + (dy/dt)²]", "(dx/dt)² + (dy/dt)²", "dx/dt"], correct: 1, explanation: "√[(x')² + (y')²]", xp: 6},
      {id: "u12_l2_q5", type: "multiple_choice", question: "For x = t, y = 0 from 0 to 5, L =", options: ["0", "5", "25", "1"], correct: 1, explanation: "Line segment: L = 5", xp: 5},
      {id: "u12_l2_q6", type: "typing", question: "Arc length formula:", correctAnswer: "integral of sqrt((dx/dt)^2+(dy/dt)^2)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l2_q7", type: "typing", question: "For x=t, y=0, L from 0 to 3:", correctAnswer: "3", prompt: "Type your answer:", xp: 5},
      {id: "u12_l2_q8", type: "typing", question: "For x=cos(t), y=sin(t), 0 to π/2, L:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q9", type: "typing", question: "For x=t, y=t, 0 to 1, L:", correctAnswer: "sqrt(2)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q10", type: "typing", question: "Circle full length:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 5},
      {id: "u12_l2_q11", type: "typing", question: "For x=t, y=2t, 0 to 1, L:", correctAnswer: "sqrt(5)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q12", type: "typing", question: "Parametric arc uses:", correctAnswer: "ds = sqrt(dx^2+dy^2)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q13", type: "typing", question: "For x=3t, y=4t, 0 to 1, L:", correctAnswer: "5", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q14", type: "typing", question: "For x=t, y=t², 0 to 1, L ≈:", correctAnswer: "1.5", prompt: "Type your answer:", xp: 7},
      {id: "u12_l2_q15", type: "typing", question: "ds formula:", correctAnswer: "sqrt((dx/dt)^2+(dy/dt)^2)dt", prompt: "Type your answer:", xp: 7},
      {id: "u12_l2_q16", type: "typing", question: "Arc length is:", correctAnswer: "integral of ds", prompt: "Type your answer:", xp: 6},
      {id: "u12_l2_q17", type: "typing", question: "For x=sin(t), y=cos(t), 0 to 2π, L:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 6}
    ]},
    "u12_l3": {id: "calc12_u12_l3", title: "Polar Coordinates", icon: "calculus_icons/integral.png", xp: 91, difficulty: "intermediate", questions: [
      {id: "u12_l3_q1", type: "multiple_choice", question: "Polar to rectangular: x =", options: ["r", "r·sin(θ)", "r·cos(θ)", "θ"], correct: 2, explanation: "x = r·cos(θ)", xp: 5},
      {id: "u12_l3_q2", type: "multiple_choice", question: "Polar to rectangular: y =", options: ["r", "r·sin(θ)", "r·cos(θ)", "θ"], correct: 1, explanation: "y = r·sin(θ)", xp: 5},
      {id: "u12_l3_q3", type: "multiple_choice", question: "Rectangular to polar: r =", options: ["x+y", "√(x²+y²)", "x/y", "θ"], correct: 1, explanation: "r = √(x² + y²)", xp: 5},
      {id: "u12_l3_q4", type: "multiple_choice", question: "Rectangular to polar: θ =", options: ["r", "arctan(y/x)", "arcsin(y/r)", "x/r"], correct: 1, explanation: "θ = arctan(y/x)", xp: 6},
      {id: "u12_l3_q5", type: "multiple_choice", question: "Polar (r,θ) = (2,π/2) is rectangular:", options: ["(2,π/2)", "(0,2)", "(2,0)", "(√2,√2)"], correct: 1, explanation: "x=2·cos(π/2)=0, y=2·sin(π/2)=2", xp: 6},
      {id: "u12_l3_q6", type: "typing", question: "x from polar:", correctAnswer: "r*cos(theta)", prompt: "Type your answer:", xp: 5},
      {id: "u12_l3_q7", type: "typing", question: "y from polar:", correctAnswer: "r*sin(theta)", prompt: "Type your answer:", xp: 5},
      {id: "u12_l3_q8", type: "typing", question: "r from rectangular:", correctAnswer: "sqrt(x^2+y^2)", prompt: "Type your answer:", xp: 5},
      {id: "u12_l3_q9", type: "typing", question: "θ from rectangular:", correctAnswer: "arctan(y/x)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q10", type: "typing", question: "(2,0) polar is rectangular:", correctAnswer: "(2,0)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q11", type: "typing", question: "(1,π/2) polar to rectangular:", correctAnswer: "(0,1)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q12", type: "typing", question: "(√2,√2) to polar (r):", correctAnswer: "2", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q13", type: "typing", question: "(1,1) to polar (θ):", correctAnswer: "pi/4", prompt: "Type your answer:", xp: 7},
      {id: "u12_l3_q14", type: "typing", question: "(0,1) to polar (r,θ):", correctAnswer: "(1,pi/2)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q15", type: "typing", question: "Polar coordinates:", correctAnswer: "(r,theta)", prompt: "Type your answer:", xp: 5},
      {id: "u12_l3_q16", type: "typing", question: "Rectangular (1,0) to polar:", correctAnswer: "(1,0)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l3_q17", type: "typing", question: "Polar (3,0) to rectangular:", correctAnswer: "(3,0)", prompt: "Type your answer:", xp: 6}
    ]},
    "u12_l4": {id: "calc12_u12_l4", title: "Area in Polar", icon: "calculus_icons/integral.png", xp: 93, difficulty: "advanced", questions: [
      {id: "u12_l4_q1", type: "multiple_choice", question: "Area in polar: A =", options: ["∫r dθ", "∫r² dθ", "∫r²/2 dθ", "∫√r dθ"], correct: 2, explanation: "A = (1/2)∫ r² dθ", xp: 6},
      {id: "u12_l4_q2", type: "multiple_choice", question: "Area of circle r = a from 0 to 2π:", options: ["πa", "πa²", "2πa", "a²"], correct: 1, explanation: "A = (1/2)∫₀²π a² dθ = πa²", xp: 7},
      {id: "u12_l4_q3", type: "multiple_choice", question: "Area in polar uses:", options: ["ds", "dθ", "dr", "r dr dθ"], correct: 1, explanation: "dθ for angular integration", xp: 6},
      {id: "u12_l4_q4", type: "multiple_choice", question: "For r = 2 from 0 to π/2, A =", options: ["π", "π/2", "2π", "4"], correct: 1, explanation: "A = (1/2)∫₀^{π/2} 4 dθ = π/2", xp: 6},
      {id: "u12_l4_q5", type: "multiple_choice", question: "Area formula derivation uses:", options: ["Sectors", "Rectangles", "Triangles", "Squares"], correct: 0, explanation: "Sum of sectors = (1/2)r²dθ", xp: 6},
      {id: "u12_l4_q6", type: "typing", question: "Polar area formula:", correctAnswer: "(1/2) integral of r^2 d(theta)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l4_q7", type: "typing", question: "For r=2, 0 to 2π, A:", correctAnswer: "4pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q8", type: "typing", question: "For r=3, 0 to 2π, A:", correctAnswer: "9pi", prompt: "Type your answer:", fprompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q9", type: "typing", question: "For r=a, 0 to 2π, A:", correctAnswer: "pi*a^2", prompt: "Type your answer:", xp: 7},
      {id: "u12_l4_q10", type: "typing", question: "For r=2, 0 to π, A:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q11", type: "typing", question: "Polar area element:", correctAnswer: "(1/2)r^2 d(theta)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q12", type: "typing", question: "Sector area:", correctAnswer: "(1/2)r^2(theta)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q13", type: "typing", question: "For r=1, 0 to π, A:", correctAnswer: "pi/2", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q14", type: "typing", question: "For r=1, 0 to 2π, A:", correctAnswer: "pi", prompt: "Type your answer:", xp: 5},
      {id: "u12_l4_q15", type: "typing", question: "Full circle r=a area:", correctAnswer: "pi*a^2", prompt: "Type your answer:", xp: 7},
      {id: "u12_l4_q16", type: "typing", question: "Area uses integral of:", correctAnswer: "(1/2)r^2", prompt: "Type your answer:", xp: 6},
      {id: "u12_l4_q17", type: "typing", question: "Semi-circle r=a area:", correctAnswer: "(pi*a^2)/2", prompt: "Type your answer:", xp: 7}
    ]},
    "u12_l5": {id: "calc12_u12_l5", title: "Arc Length - Polar", icon: "calculus_icons/integral.png", xp: 94, difficulty: "advanced", questions: [
      {id: "u12_l5_q1", type: "multiple_choice", question: "Polar arc length: L = ∫√[r² + (dr/dθ)²] dθ", options: ["True", "False", "Only circles", "Only lines"], correct: 0, explanation: "Polar arc length formula", xp: 6},
      {id: "u12_l5_q2", type: "multiple_choice", question: "For r = a from 0 to 2π, L =", options: ["πa", "2πa", "πa²", "2πa²"], correct: 1, explanation: "L = ∫₀²π a dθ = 2πa", xp: 6},
      {id: "u12_l5_q3", type: "multiple_choice", question: "Polar arc integrand:", options: ["r", "√(r² + r'²)", "r² + r'²", "dr/dθ"], correct: 1, explanation: "√(r² + (dr/dθ)²)", xp: 6},
      {id: "u12_l5_q4", type: "multiple_choice", question: "For r = θ from 0 to π, L ≈", options: ["π", "π√2", "π²/2", "π"], correct: 1, explanation: "L = ∫₀π √(θ² + 1) dθ = (1/2)[θ√(θ²+1) + ln(θ+√(θ²+1))]", xp: 7},
      {id: "u12_l5_q5", type: "multiple_choice", question: "For circle r = a, circumference =", options: ["πa", "2πa", "πa²", "a"], correct: 1, explanation: "L = 2πa", xp: 5},
      {id: "u12_l5_q6", type: "typing", question: "Polar arc length formula:", correctAnswer: "integral of sqrt(r^2+(dr/d(theta))^2)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l5_q7", type: "typing", question: "For r=2, 0 to 2π, L:", correctAnswer: "4pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l5_q8", type: "typing", question: "For r=3, 0 to 2π, L:", correctAnswer: "6pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l5_q9", type: "typing", question: "For r=a, 0 to 2π, L:", correctAnswer: "2pi*a", prompt: "Type your answer:", xp: 7},
      {id: "u12_l5_q10", type: "typing", question: "For r=a, 0 to π, L:", correctAnswer: "pi*a", prompt: "Type your answer:", xp: 6},
      {id: "u12_l5_q11", type: "typing", question: "Polar ds =", correctAnswer: "sqrt(r^2+(dr/d(theta))^2)d(theta)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l5_q12", type: "typing", question: "Circle circumference in polar:", correctAnswer: "2pi*r", prompt: "Type your answer:", xp: 5},
      {id: "u12_l5_q13", type: "typing", question: "For r=1, 0 to 2π, L:", correctAnswer: "2pi", prompt: "Type your answer:", xp: 5},
      {id: "u12_l5_q14", type: "typing", question: "For r=5, 0 to 2π, L:", correctAnswer: "10pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l5_q15", type: "typing", question: "Polar integrand is:", correctAnswer: "sqrt(r^2+(dr/dtheta)^2)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l5_q16", type: "typing", question: "Arc in polar uses:", correctAnswer: "theta as parameter", prompt: "Type your answer:", xp: 6},
      {id: "u12_l5_q17", type: "typing", question: "For r=a, dr/dθ =", correctAnswer: "0", prompt: "Type your answer:", xp: 5}
    ]},
    "u12_l6": {id: "calc12_u12_l6", title: "Parametric & Polar Review", icon: "calculus_icons/integral.png", xp: 95, difficulty: "advanced", questions: [
      {id: "u12_l6_q1", type: "multiple_choice", question: "Parametric form:", options: ["y = f(x)", "x = f(t), y = g(t)", "r = f(θ)", "f(x,y)"], correct: 1, explanation: "x = f(t), y = g(t)", xp: 5},
      {id: "u12_l6_q2", type: "multiple_choice", question: "dy/dx =", options: ["dy/dt", "dx/dt", "(dy/dt)/(dx/dt)", "(dx/dt)/(dy/dt)"], correct: 2, explanation: "(dy/dt)/(dx/dt)", xp: 6},
      {id: "u12_l6_q3", type: "multiple_choice", question: "x from polar:", options: ["r·sin(θ)", "r·cos(θ)", "r", "θ"], correct: 1, explanation: "x = r·cos(θ)", xp: 5},
      {id: "u12_l6_q4", type: "multiple_choice", question: "Polar area: A =", options: ["∫r dθ", "∫r² dθ", "(1/2)∫r² dθ", "∫r²/2"], correct: 2, explanation: "(1/2)∫ r² dθ", xp: 6},
      {id: "u12_l6_q5", type: "multiple_choice", question: "Polar arc length integrand:", options: ["r", "√(r²+r'²)", "r²", "dr/dθ"], correct: 1, explanation: "√(r² + (dr/dθ)²)", xp: 6},
      {id: "u12_l6_q6", type: "typing", question: "Parametric:", correctAnswer: "x=f(t), y=g(t)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l6_q7", type: "typing", question: "dy/dx =", correctAnswer: "(dy/dt)/(dx/dt)", prompt: "Type your answer:", xp: 6},
      {id: "u12_l6_q8", type: "typing", question: "x = r·cos(θ), y =", correctAnswer: "r*sin(theta)", prompt: "Type your answer:", xp: 5},
      {id: "u12_l6_q9", type: "typing", question: "Polar area formula:", correctAnswer: "(1/2) integral r^2 d(theta)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l6_q10", type: "typing", question: "Polar arc formula:", correctAnswer: "integral sqrt(r^2+(dr/d(theta))^2)", prompt: "Type your answer:", xp: 7},
      {id: "u12_l6_q11", type: "typing", question: "For r=2, 0 to 2π, A:", correctAnswer: "4pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l6_q12", type: "typing", question: "For r=2, 0 to 2π, L:", correctAnswer: "4pi", prompt: "Type your answer:", xp: 6},
      {id: "u12_l6_q13", type: "typing", question: "For x=t, y=t², dy/dx:", correctAnswer: "2t", prompt: "Type your answer:", xp: 6},
      {id: "u12_l6_q14", type: "typing", question: "r = √(x²+y²)", correctAnswer: "true", prompt: "Type your answer:", xp: 5},
      {id: "u12_l6_q15", type: "typing", question: "For r=a, circle area:", correctAnswer: "pi*a^2", prompt: "Type your answer:", xp: 7},
      {id: "u12_l6_q16", type: "typing", question: "For r=a, circumference:", correctAnswer: "2pi*a", prompt: "Type your answer:", xp: 7},
      {id: "u12_l6_q17", type: "typing", question: "d²y/dx² =", correctAnswer: "(d/dt(dy/dx))/(dx/dt)", prompt: "Type your answer:", xp: 7}
    ]}
  }
};

/**
 * Export the databases
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusUnit10Database, CalculusUnit11Database, CalculusUnit12Database };
} else {
  window.CalculusUnit10Database = CalculusUnit10Database;
  window.CalculusUnit11Database = CalculusUnit11Database;
  window.CalculusUnit12Database = CalculusUnit12Database;
}