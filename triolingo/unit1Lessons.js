// Unit 1 Lesson Generators - Limits & Continuity
// Each lesson has 15-20 questions with diagrams

const Unit1Lessons = {
  
  // =====================================================================
  // LESSON 1: Limits Introduction (18 questions)
  // =====================================================================
  limits1() {
    return {
      id: 'calc1_u1_l1',
      title: 'Limits: Introduction',
      icon: 'calculus_icons/limit.png',
      xp: 82,
      unit: 'Limits & Continuity',
      difficulty: 'basic',
      questions: [
        {
          id: 'u1_l1_q1',
          type: 'multiple_choice',
          question: 'What does the limit notation \\(\\lim_{x \\to a} f(x)\\) represent?',
          options: ['The value of f(x) at x = a', 'The value f(x) approaches as x gets close to a', 'The derivative of f(x)', 'The integral of f(x)'],
          correct: 1,
          explanation: 'A limit represents the value that a function approaches as the input approaches a certain value.',
          xp: 4,
          diagram: 'diagrams/limit_quadratic.png'
        },
        {
          id: 'u1_l1_q2',
          type: 'multiple_choice',
          question: 'Evaluate \\(\\lim_{x \\to 3} (2x + 1)\\)',
          options: ['6', '7', '8', '9'],
          correct: 1,
          explanation: 'Substitute x = 3: 2(3) + 1 = 7',
          xp: 4
        },
        {
          id: 'u1_l1_q3',
          type: 'multiple_choice',
          question: 'For \\(\\lim_{x \\to a} f(x) = L\\), what must be true?',
          options: ['f(a) must equal L', 'As x approaches a, f(x) approaches L', 'The function must be continuous at a', 'The limit must exist from only one side'],
          correct: 1,
          explanation: 'The limit exists if f(x) approaches L from both sides, regardless of the value at a.',
          xp: 5
        },
        {
          id: 'u1_l1_q4',
          type: 'multiple_choice',
          question: 'If \\(\\lim_{x \\to 2^-} f(x) = 5\\) and \\(\\lim_{x \\to 2^+} f(x) = 5\\), then:',
          options: ['\\(\\lim_{x \\to 2} f(x)\\) does not exist', '\\(\\lim_{x \\to 2} f(x) = 5\\)', 'f(2) = 5', 'Both A and C'],
          correct: 1,
          explanation: 'When one-sided limits are equal, the limit exists and equals that value.',
          xp: 5,
          diagram: 'diagrams/one_sided_quadratic.png'
        },
        {
          id: 'u1_l1_q5',
          type: 'multiple_choice',
          question: 'What is \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)?',
          options: ['0', '1', '∞', 'Does not exist'],
          correct: 1,
          explanation: 'This is a famous special limit: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1\\)',
          xp: 5,
          diagram: 'diagrams/limit_sinx_over_x.png'
        },
        {
          id: 'u1_l1_q6',
          type: 'typing',
          question: 'Evaluate: \\(\\lim_{x \\to 5} (3x - 2)\\)',
          correctAnswer: '13',
          explanation: 'Substitute x = 5: 3(5) - 2 = 15 - 2 = 13',
          prompt: 'Type your answer:',
          xp: 5
        },
        {
          id: 'u1_l1_q7',
          type: 'typing',
          question: 'If \\(\\lim_{x \\to 2} f(x) = 7\\) and \\(\\lim_{x \\to 2} g(x) = 3\\), what is \\(\\lim_{x \\to 2} [f(x) + g(x)]\\)?',
          correctAnswer: '10',
          explanation: 'Limit of sum = sum of limits: 7 + 3 = 10',
          prompt: 'Type your answer:',
          xp: 6
        },
        {
          id: 'u1_l1_q8',
          type: 'typing',
          question: 'Evaluate: \\(\\lim_{x \\to 0} \\cos(x)\\)',
          correctAnswer: '1',
          explanation: 'Substitute x = 0: cos(0) = 1',
          prompt: 'Type your answer:',
          xp: 5
        },
        {
          id: 'u1_l1_q9',
          type: 'fill_blank',
          question: 'The limit exists only if both the left-hand limit and right-hand limit _____ and are equal.',
          correctAnswer: 'exist',
          explanation: 'For a limit to exist, both one-sided limits must exist and be equal.',
          prompt: 'Fill in the blank:',
          xp: 4
        },
        {
          id: 'u1_l1_q10',
          type: 'match_pairs',
          question: 'Match each limit with its value:',
          pairs: [
            { left: '\\(\\lim_{x \\to 0} x\\)', right: '0' },
            { left: '\\(\\lim_{x \\to 1} x^2\\)', right: '1' },
            { left: '\\(\\lim_{x \\to 2} (x + 1)\\)', right: '3' },
            { left: '\\(\\lim_{x \\to 3} 2x\\)', right: '6' }
          ],
          xp: 8
        }
      ]
    };
  },
  
  // =====================================================================
  // LESSON 2: Limits by Substitution (17 questions)
  // =====================================================================
  limits2() {
    return {
      id: 'calc1_u1_l2',
      title: 'Limits by Substitution',
      icon: 'calculus_icons/limit.png',
      xp: 73,
      unit: 'Limits & Continuity',
      difficulty: 'basic',
      questions: [
        {
          id: 'u1_l2_q1',
          type: 'multiple_choice',
          question: 'When can we evaluate a limit by direct substitution?',
          options: ['Always', 'When the function is continuous at the point', 'Only for polynomial functions', 'Never'],
          correct: 1,
          explanation: 'Direct substitution works when the function is continuous at the limit point.',
          xp: 4
        },
        {
          id: 'u1_l2_q2',
          type: 'multiple_choice',
          question: 'Evaluate \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}\\)',
          options: ['0', '3', '6', 'Does not exist'],
          correct: 2,
          explanation: 'Factor: \\(\\frac{(x-3)(x+3)}{x-3} = x + 3\\). Then substitute x = 3: 3 + 3 = 6',
          xp: 5,
          diagram: 'diagrams/limit_rational.png'
        },
        {
          id: 'u1_l2_q3',
          type: 'multiple_choice',
          question: 'What is \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\)?',
          options: ['0', '2', '4', 'Does not exist'],
          correct: 2,
          explanation: 'Factor: \\(\\frac{(x-2)(x+2)}{x-2} = x + 2\\). Then: 2 + 2 = 4',
          xp: 4
        },
        {
          id: 'u1_l2_q4',
          type: 'multiple_choice',
          question: 'When direct substitution gives 0/0, this is called:',
          options: ['An indeterminate form', 'A definite limit', 'A discontinuous function', 'An infinite limit'],
          correct: 0,
          explanation: '0/0 is an indeterminate form that requires algebraic manipulation to evaluate.',
          xp: 5
        },
        {
          id: 'u1_l2_q5',
          type: 'typing',
          question: 'Evaluate: \\(\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}\\)',
          correctAnswer: '2',
          explanation: 'Factor: \\(\\frac{(x-1)(x+1)}{x-1} = x + 1\\). Then: 1 + 1 = 2',
          prompt: 'Type your answer:',
          xp: 5
        },
        {
          id: 'u1_l2_q6',
          type: 'typing',
          question: 'What is \\(\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}\\)?',
          correctAnswer: '10',
          explanation: 'Factor: \\(\\frac{(x-5)(x+5)}{x-5} = x + 5\\). Then: 5 + 5 = 10',
          prompt: 'Type your answer:',
          xp: 5
        },
        {
          id: 'u1_l2_q7',
          type: 'typing',
          question: 'Evaluate: \\(\\lim_{x \\to 2} e^x\\)',
          correctAnswer: '7.389',
          explanation: 'Direct substitution: e² ≈ 7.389',
          prompt: 'Type your answer (round to 3 decimal places):',
          xp: 5,
          diagram: 'diagrams/limit_exponential.png'
        },
        {
          id: 'u1_l2_q8',
          type: 'match_pairs',
          question: 'Match each limit with its value:',
          pairs: [
            { left: '\\(\\lim_{x \\to 2} \\frac{x^2-4}{x-2}\\)', right: '4' },
            { left: '\\(\\lim_{x \\to 3} \\frac{x^2-9}{x-3}\\)', right: '6' },
            { left: '\\(\\lim_{x \\to 4} \\frac{x^2-16}{x-4}\\)', right: '8' }
          ],
          xp: 8
        }
      ]
    };
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Unit1Lessons };
} else {
  window.Unit1Lessons = Unit1Lessons;
}