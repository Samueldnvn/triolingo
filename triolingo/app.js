// =====================================================================
// COURSE DEFINITIONS
// Note: LessonTemplate is defined in lessonGenerators.js
// =====================================================================
const courses = {
  french: {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    units: [
      {
        id: 1,
        title: 'Basics',
        description: 'Learn essential French words and phrases',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 1, 'Greetings', ['greetings'], 12) : {id:'1-1',title:'Greetings',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 2, 'Numbers 1-10', ['numbers'], 10) : {id:'1-2',title:'Numbers 1-10',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 3, 'Colors', ['colors'], 11) : {id:'1-3',title:'Colors',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 4, 'Greetings & Numbers Review', ['greetings', 'numbers'], 14) : {id:'1-4',title:'Greetings & Numbers Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 5, 'Basics Review', ['greetings', 'numbers', 'colors'], 15) : {id:'1-5',title:'Basics Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 2,
        title: 'Family & People',
        description: 'Learn about family members and pronouns',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 6, 'Family Members', ['family'], 12) : {id:'2-6',title:'Family Members',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 7, 'Pronouns', ['pronouns'], 11) : {id:'2-7',title:'Pronouns',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 8, 'Family Review', ['family', 'pronouns'], 14) : {id:'2-8',title:'Family Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 9, 'Family Mastery', ['family', 'pronouns'], 15) : {id:'2-9',title:'Family Mastery',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 3,
        title: 'Food & Verbs',
        description: 'Essential food vocabulary and common verbs',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 10, 'Food Basics', ['food'], 10) : {id:'3-10',title:'Food Basics',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 11, 'Meals', ['meals'], 8) : {id:'3-11',title:'Meals',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 12, 'Common Verbs', ['verbs'], 12) : {id:'3-12',title:'Common Verbs',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 13, 'Food & Verbs Review', ['food', 'meals', 'verbs'], 15) : {id:'3-13',title:'Food & Verbs Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 4,
        title: 'French Mastery',
        description: 'Combine everything you\'ve learned',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 14, 'Comprehensive Review Part 1', ['greetings', 'numbers', 'colors', 'family'], 15) : {id:'4-14',title:'Comprehensive Review Part 1',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 15, 'Comprehensive Review Part 2', ['family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-15',title:'Comprehensive Review Part 2',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 16, 'French Challenge', ['greetings', 'numbers', 'colors', 'family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-16',title:'French Challenge',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      }
    ]
  },
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    units: [
      {
        id: 1,
        title: 'Basics',
        description: 'Learn essential Spanish words and phrases',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 1, 'Greetings', ['greetings'], 12) : {id:'1-1',title:'Greetings',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 2, 'Numbers 1-10', ['numbers'], 10) : {id:'1-2',title:'Numbers 1-10',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 3, 'Colors', ['colors'], 11) : {id:'1-3',title:'Colors',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 4, 'Greetings & Numbers Review', ['greetings', 'numbers'], 14) : {id:'1-4',title:'Greetings & Numbers Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 5, 'Basics Review', ['greetings', 'numbers', 'colors'], 15) : {id:'1-5',title:'Basics Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 2,
        title: 'Family & People',
        description: 'Learn about family members and pronouns',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 6, 'Family Members', ['family'], 12) : {id:'2-6',title:'Family Members',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 7, 'Pronouns', ['pronouns'], 11) : {id:'2-7',title:'Pronouns',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 8, 'Family Review', ['family', 'pronouns'], 14) : {id:'2-8',title:'Family Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 9, 'Family Mastery', ['family', 'pronouns'], 15) : {id:'2-9',title:'Family Mastery',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 3,
        title: 'Food & Verbs',
        description: 'Essential food vocabulary and common verbs',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 10, 'Food Basics', ['food'], 10) : {id:'3-10',title:'Food Basics',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 11, 'Meals', ['meals'], 8) : {id:'3-11',title:'Meals',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 12, 'Common Verbs', ['verbs'], 12) : {id:'3-12',title:'Common Verbs',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 13, 'Food & Verbs Review', ['food', 'meals', 'verbs'], 15) : {id:'3-13',title:'Food & Verbs Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 4,
        title: 'Spanish Mastery',
        description: 'Combine everything you\'ve learned',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 14, 'Comprehensive Review Part 1', ['greetings', 'numbers', 'colors', 'family'], 15) : {id:'4-14',title:'Comprehensive Review Part 1',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 15, 'Comprehensive Review Part 2', ['family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-15',title:'Comprehensive Review Part 2',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 16, 'Spanish Challenge', ['greetings', 'numbers', 'colors', 'family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-16',title:'Spanish Challenge',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      }
    ]
  },
  calculus: {
    id: 'calculus',
    name: 'Calculus',
    flag: '∫',
    units: [
      {
        id: 1,
        title: 'Limits',
        description: 'Introduction to Limits and Continuity',
        lessons: [
          {
            id: '1-1',
            title: 'Understanding Limits',
            xp: 85,
            type: 'lesson',
            questions: [
              {id: 'calc_u1_l1_q1', type: 'typing', question: 'What is the value of lim(x→2) x²?', correctAnswer: ['4'], xp: 5},
              {id: 'calc_u1_l1_q2', type: 'typing', question: 'What does a limit describe?', correctAnswer: ['The value a function approaches as x approaches a certain value'], xp: 4},
              {id: 'calc_u1_l1_q3', type: 'typing', question: 'What is lim(x→3) (2x + 1)?', correctAnswer: ['7'], xp: 4},
              {id: 'calc_u1_l1_q4', type: 'typing', question: 'If f(x) = x + 1, what is lim(x→2) f(x)?', correctAnswer: ['3'], xp: 4},
              {id: 'calc_u1_l1_q5', type: 'typing', question: 'What is lim(x→0) sin(x)/x?', correctAnswer: ['1'], xp: 5},
              {id: 'calc_u1_l1_q6', type: 'multiple-choice', question: 'What does lim(x→∞) 1/x approach?', options: ['0', '1', '∞', 'Undefined'], correct: 0, xp: 3},
              {id: 'calc_u1_l1_q7', type: 'typing', question: 'What is lim(x→1) (x² - 1)/(x - 1)?', correctAnswer: ['2'], xp: 5},
              {id: 'calc_u1_l1_q8', type: 'multiple-choice', question: 'A limit exists if the left and right limits are:', options: ['Different', 'The same', 'Both infinite', 'Both zero'], correct: 1, xp: 3},
              {id: 'calc_u1_l1_q9', type: 'typing', question: 'What is lim(x→∞) (1/x²)?', correctAnswer: ['0'], xp: 4},
              {id: 'calc_u1_l1_q10', type: 'multiple-choice', question: 'The limit as x approaches a from the right is called:', options: ['Left-hand limit', 'Right-hand limit', 'Two-sided limit', 'Infinite limit'], correct: 1, xp: 3},
              {id: 'calc_u1_l1_q11', type: 'typing', question: 'What is lim(x→2) (x³ - 8)/(x - 2)?', correctAnswer: ['12'], xp: 5},
              {id: 'calc_u1_l1_q12', type: 'multiple-choice', question: 'If lim(x→a) f(x) = f(a), then f is:', options: ['Discontinuous', 'Continuous', 'Differentiable', 'Undefined'], correct: 1, xp: 3},
              {id: 'calc_u1_l1_q13', type: 'typing', question: 'What is lim(x→0) cos(x)?', correctAnswer: ['1'], xp: 4},
              {id: 'calc_u1_l1_q14', type: 'multiple-choice', question: 'Which limit does NOT exist?', options: ['lim(x→0) x²', 'lim(x→0) 1/|x|', 'lim(x→2) 3x', 'lim(x→1) x + 1'], correct: 1, xp: 3},
              {id: 'calc_u1_l1_q15', type: 'typing', question: 'What is lim(x→∞) (2 + 3/x)?', correctAnswer: ['2'], xp: 4},
              {id: 'calc_u1_l1_q16', type: 'multiple-choice', question: 'A function is continuous at a point if:', options: ['It has a hole', 'Left and right limits equal the function value', 'Only right limit exists', 'The function is undefined'], correct: 1, xp: 3},
              {id: 'calc_u1_l1_q17', type: 'typing', question: 'What is lim(x→0) (sin(x))/?', correctAnswer: ['1'], xp: 5},
              {id: 'calc_u1_l1_q18', type: 'multiple-choice', question: 'The squeeze theorem helps find:', options: ['Derivatives', 'Limits', 'Integrals', 'Areas'], correct: 1, xp: 3}
            ]
          },
          {
            id: '1-2',
            title: 'Calculating Limits',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u1_l2_q1', type: 'typing', question: 'What is lim(x→4) (x² - 16)/(x - 4)?', correctAnswer: ['8'], xp: 5},
              {id: 'calc_u1_l2_q2', type: 'typing', question: 'To evaluate lim(x→a) f(x)/g(x) when both approach 0, use:', correctAnswer: ['Factoring or rationalization'], xp: 4},
              {id: 'calc_u1_l2_q3', type: 'typing', question: 'What is lim(x→∞) (3x² + 2x)/(x² + 1)?', correctAnswer: ['3'], xp: 5},
              {id: 'calc_u1_l2_q4', type: 'multiple-choice', question: 'For limits at infinity of rational functions, compare:', options: ['Numerators only', 'Denominators only', 'Highest powers', 'Constants'], correct: 2, xp: 3},
              {id: 'calc_u1_l2_q5', type: 'typing', question: 'What is lim(x→0) (1 - cos(x))/x²?', correctAnswer: ['1/2', '0.5'], xp: 5},
              {id: 'calc_u1_l2_q6', type: 'multiple-choice', question: 'The limit lim(x→0) sin(ax)/x equals:', options: ['0', '1', 'a', '1/a'], correct: 2, xp: 3},
              {id: 'calc_u1_l2_q7', type: 'typing', question: 'What is lim(x→3) (x² - 9)/(x - 3)?', correctAnswer: ['6'], xp: 4},
              {id: 'calc_u1_l2_q8', type: 'multiple-choice', question: 'If the degree of numerator < degree of denominator at infinity, the limit is:', options: ['∞', '0', '1', 'Undefined'], correct: 1, xp: 3},
              {id: 'calc_u1_l2_q9', type: 'typing', question: 'What is lim(x→∞) √(x² + 1) - x?', correctAnswer: ['0'], xp: 5},
              {id: 'calc_u1_l2_q10', type: 'multiple-choice', question: 'L\'Hôpital\'s Rule applies to:', options: ['0/0 or ∞/∞', '1/1', '0×∞', '∞ - ∞'], correct: 0, xp: 3},
              {id: 'calc_u1_l2_q11', type: 'typing', question: 'What is lim(x→2) (x³ - 8)/(x² - 4)?', correctAnswer: ['3'], xp: 5},
              {id: 'calc_u1_l2_q12', type: 'multiple-choice', question: 'To find lim(x→∞) (√(x+1) - √x), multiply by:', options: ['x', '√x', 'Conjugate', '1/x'], correct: 2, xp: 3},
              {id: 'calc_u1_l2_q13', type: 'typing', question: 'What is lim(x→0) (e^x - 1)/x?', correctAnswer: ['1'], xp: 4},
              {id: 'calc_u1_l2_q14', type: 'multiple-choice', question: 'A removable discontinuity is also called a:', options: ['Jump', 'Hole', 'Vertical asymptote', 'Infinite'], correct: 1, xp: 3},
              {id: 'calc_u1_l2_q15', type: 'typing', question: 'What is lim(x→∞) (ln(x)/x)?', correctAnswer: ['0'], xp: 5},
              {id: 'calc_u1_l2_q16', type: 'multiple-choice', question: 'The limit lim(x→∞) (1 + 1/x)^x equals:', options: ['0', '1', 'e', '∞'], correct: 2, xp: 3},
              {id: 'calc_u1_l2_q17', type: 'typing', question: 'What is lim(x→π/2) tan(x)?', correctAnswer: ['undefined', '∞'], xp: 4},
              {id: 'calc_u1_l2_q18', type: 'multiple-choice', question: 'For vertical asymptotes, find where denominator is:', options: ['1', '0', '∞', 'Undefined'], correct: 1, xp: 3}
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Derivatives',
        description: 'Introduction to Derivatives',
        lessons: [
          {
            id: '2-1',
            title: 'Introduction to Derivatives',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u2_l1_q1', type: 'typing', question: 'What is the derivative of f(x) = x²?', correctAnswer: ['2x'], xp: 5},
              {id: 'calc_u2_l1_q2', type: 'typing', question: 'The derivative measures the rate of change of a function with respect to:', correctAnswer: ['x', 'its variable', 'the independent variable'], xp: 4},
              {id: 'calc_u2_l1_q3', type: 'typing', question: 'What is d/dx (x³)?', correctAnswer: ['3x²'], xp: 5},
              {id: 'calc_u2_l1_q4', type: 'multiple-choice', question: 'Geometrically, the derivative at a point is the slope of:', options: ['Secant line', 'Tangent line', 'Normal line', 'Chord'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q5', type: 'typing', question: 'What is f\'(x) if f(x) = 5?', correctAnswer: ['0'], xp: 4},
              {id: 'calc_u2_l1_q6', type: 'multiple-choice', question: 'The derivative of a sum is the sum of the:', options: ['Integrals', 'Derivatives', 'Products', 'Quotients'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q7', type: 'typing', question: 'What is d/dx (x^n)?', correctAnswer: ['nx^(n-1)'], xp: 5},
              {id: 'calc_u2_l1_q8', type: 'multiple-choice', question: 'Which notation represents the derivative?', options: ['∫', '∂', 'f\' or d/dx', 'Δ'], correct: 2, xp: 3},
              {id: 'calc_u2_l1_q9', type: 'typing', question: 'What is the derivative of sin(x)?', correctAnswer: ['cos(x)'], xp: 4},
              {id: 'calc_u2_l1_q10', type: 'multiple-choice', question: 'If a function is constant, its derivative is:', options: ['1', '0', '∞', 'Undefined'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q11', type: 'typing', question: 'What is d/dx (e^x)?', correctAnswer: ['e^x'], xp: 5},
              {id: 'calc_u2_l1_q12', type: 'multiple-choice', question: 'The power rule applies to:', options: ['Exponential functions', 'Polynomials', 'Trigonometric functions', 'Logarithmic functions'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q13', type: 'typing', question: 'What is the derivative of ln(x)?', correctAnswer: ['1/x'], xp: 4},
              {id: 'calc_u2_l1_q14', type: 'multiple-choice', question: 'A differentiable function is always:', options: ['Discontinuous', 'Continuous', 'Constant', 'Linear'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q15', type: 'typing', question: 'What is d/dx (cos(x))?', correctAnswer: ['-sin(x)'], xp: 5},
              {id: 'calc_u2_l1_q16', type: 'multiple-choice', question: 'The derivative gives the:', options: ['Area under curve', 'Instantaneous rate of change', 'Average rate of change', 'Accumulated value'], correct: 1, xp: 3},
              {id: 'calc_u2_l1_q17', type: 'typing', question: 'What is f\'(x) if f(x) = 3x² + 2x?', correctAnswer: ['6x + 2'], xp: 4},
              {id: 'calc_u2_l1_q18', type: 'multiple-choice', question: 'Which is NOT a differentiation rule?', options: ['Power rule', 'Product rule', 'Quotient rule', 'Integration rule'], correct: 3, xp: 3}
            ]
          },
          {
            id: '2-2',
            title: 'Power Rule Practice',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u2_l2_q1', type: 'typing', question: 'What is d/dx (x^5)?', correctAnswer: ['5x^4'], xp: 5},
              {id: 'calc_u2_l2_q2', type: 'typing', question: 'The power rule: d/dx (x^n) =', correctAnswer: ['nx^(n-1)'], xp: 4},
              {id: 'calc_u2_l2_q3', type: 'typing', question: 'What is d/dx (x^-2)?', correctAnswer: ['-2x^-3', '-2/x^3'], xp: 5},
              {id: 'calc_u2_l2_q4', type: 'multiple-choice', question: 'What is d/dx (x^(1/2))?', options: ['x^(-1/2)', '(1/2)x^(-1/2)', '2x^(1/2)', '0'], correct: 1, xp: 3},
              {id: 'calc_u2_l2_q5', type: 'typing', question: 'What is d/dx (x^10)?', correctAnswer: ['10x^9'], xp: 4},
              {id: 'calc_u2_l2_q6', type: 'multiple-choice', question: 'The derivative of x^0 is:', options: ['x', '1', '0', 'undefined'], correct: 2, xp: 3},
              {id: 'calc_u2_l2_q7', type: 'typing', question: 'What is d/dx (x^3/3)?', correctAnswer: ['x^2'], xp: 5},
              {id: 'calc_u2_l2_q8', type: 'multiple-choice', question: 'What is d/dx (√x)?', options: ['1/√x', '1/(2√x)', '2√x', '√x/2'], correct: 1, xp: 3},
              {id: 'calc_u2_l2_q9', type: 'typing', question: 'What is d/dx (1/x)?', correctAnswer: ['-1/x^2', '-x^-2'], xp: 4},
              {id: 'calc_u2_l2_q10', type: 'multiple-choice', question: 'For d/dx (ax^n), the coefficient a:', options: ['Disappears', 'Multiplies by n', 'Becomes 1', 'Divides by n'], correct: 1, xp: 3},
              {id: 'calc_u2_l2_q11', type: 'typing', question: 'What is d/dx (x^0.5)?', correctAnswer: ['0.5x^(-0.5)', '1/(2√x)'], xp: 5},
              {id: 'calc_u2_l2_q12', type: 'multiple-choice', question: 'The power rule applies to any real number:', options: ['n > 0 only', 'n < 0 only', 'n ≠ 0', 'any real n'], correct: 3, xp: 3},
              {id: 'calc_u2_l2_q13', type: 'typing', question: 'What is d/dx (x^4/4)?', correctAnswer: ['x^3'], xp: 4},
              {id: 'calc_u2_l2_q14', type: 'multiple-choice', question: 'What is d/dx (x^-1)?', options: ['-1/x', '-x^-2', '1/x^2', '0'], correct: 1, xp: 3},
              {id: 'calc_u2_l2_q15', type: 'typing', question: 'What is d/dx (2x^3)?', correctAnswer: ['6x^2'], xp: 5},
              {id: 'calc_u2_l2_q16', type: 'multiple-choice', question: 'When applying the power rule to (cx)^n:', options: ['Ignore c', 'c becomes cn', 'Apply to c and x separately', 'c is the derivative'], correct: 2, xp: 3},
              {id: 'calc_u2_l2_q17', type: 'typing', question: 'What is d/dx (x^(2/3))?', correctAnswer: ['(2/3)x^(-1/3)', '2/(3x^(1/3))'], xp: 4},
              {id: 'calc_u2_l2_q18', type: 'multiple-choice', question: 'The derivative of x^n decreases the power by:', options: ['0', '1', 'n', 'n-1'], correct: 1, xp: 3}
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Integration',
        description: 'Introduction to Integration',
        lessons: [
          {
            id: '3-1',
            title: 'Introduction to Integration',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u3_l1_q1', type: 'typing', question: 'What is ∫ x dx?', correctAnswer: ['x^2/2 + C', '(1/2)x^2 + C'], xp: 5},
              {id: 'calc_u3_l1_q2', type: 'typing', question: 'Integration is the reverse process of:', correctAnswer: ['differentiation', 'derivatives'], xp: 4},
              {id: 'calc_u3_l1_q3', type: 'typing', question: 'What is ∫ 2x dx?', correctAnswer: ['x^2 + C'], xp: 5},
              {id: 'calc_u3_l1_q4', type: 'multiple-choice', question: 'The constant C is needed because:', options: ['Derivatives of constants are zero', 'Integration adds C', 'C makes it look better', 'C is arbitrary'], correct: 0, xp: 3},
              {id: 'calc_u3_l1_q5', type: 'typing', question: 'What is ∫ x^n dx (for n ≠ -1)?', correctAnswer: ['x^(n+1)/(n+1) + C'], xp: 5},
              {id: 'calc_u3_l1_q6', type: 'multiple-choice', question: 'What is ∫ 3 dx?', options: ['3x', '3x + C', '3', '3/C'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q7', type: 'typing', question: 'What is ∫ (x + 1) dx?', correctAnswer: ['x^2/2 + x + C'], xp: 4},
              {id: 'calc_u3_l1_q8', type: 'multiple-choice', question: '∫ sin(x) dx equals:', options: ['cos(x) + C', '-cos(x) + C', 'sin(x) + C', '-sin(x) + C'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q9', type: 'typing', question: 'What is ∫ e^x dx?', correctAnswer: ['e^x + C'], xp: 5},
              {id: 'calc_u3_l1_q10', type: 'multiple-choice', question: 'The integral of a sum is the sum of the:', options: ['Products', 'Integrals', 'Derivatives', 'Limits'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q11', type: 'typing', question: 'What is ∫ 1/x dx?', correctAnswer: ['ln|x| + C', 'ln(x) + C'], xp: 4},
              {id: 'calc_u3_l1_q12', type: 'multiple-choice', question: 'Geometrically, ∫ from a to b f(x)dx represents:', options: ['Slope at a point', 'Area under curve', 'Length of curve', 'Volume'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q13', type: 'typing', question: 'What is ∫ cos(x) dx?', correctAnswer: ['sin(x) + C'], xp: 5},
              {id: 'calc_u3_l1_q14', type: 'multiple-choice', question: 'A definite integral has:', options: ['No limits', 'Specific bounds', 'Only C', 'No C'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q15', type: 'typing', question: 'What is ∫ from 0 to 2 x dx?', correctAnswer: ['2'], xp: 4},
              {id: 'calc_u3_l1_q16', type: 'multiple-choice', question: 'The Fundamental Theorem of Calculus connects:', options: ['Limits and derivatives', 'Derivatives and integrals', 'Areas and volumes', 'Slopes and tangents'], correct: 1, xp: 3},
              {id: 'calc_u3_l1_q17', type: 'typing', question: 'What is d/dx ∫ f(x) dx?', correctAnswer: ['f(x)'], xp: 5},
              {id: 'calc_u3_l1_q18', type: 'multiple-choice', question: 'For ∫ k·f(x) dx, k is:', options: ['Divided', 'Multiplied out', 'Ignored', 'Integrated separately'], correct: 1, xp: 3}
            ]
          },
          {
            id: '3-2',
            title: 'Definite Integrals',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u3_l2_q1', type: 'typing', question: 'What is ∫ from 0 to 1 2x dx?', correctAnswer: ['1'], xp: 5},
              {id: 'calc_u3_l2_q2', type: 'typing', question: 'A definite integral evaluates to a:', correctAnswer: ['number', 'constant', 'value'], xp: 4},
              {id: 'calc_u3_l2_q3', type: 'typing', question: 'What is ∫ from 1 to 3 x dx?', correctAnswer: ['4'], xp: 5},
              {id: 'calc_u3_l2_q4', type: 'multiple-choice', question: 'If a > b, then ∫ from a to a f(x)dx equals:', options: ['1', '0', '∞', 'Undefined'], correct: 1, xp: 3},
              {id: 'calc_u3_l2_q5', type: 'typing', question: 'What is ∫ from 0 to π sin(x) dx?', correctAnswer: ['2'], xp: 4},
              {id: 'calc_u3_l2_q6', type: 'multiple-choice', question: '∫ from a to b f(x)dx + ∫ from b to c f(x)dx =', options: ['0', '∫ from a to c f(x)dx', '∫ from b to a f(x)dx', 'f(c) - f(a)'], correct: 1, xp: 3},
              {id: 'calc_u3_l2_q7', type: 'typing', question: 'What is ∫ from 0 to 2 x² dx?', correctAnswer: ['8/3', '2.67'], xp: 5},
              {id: 'calc_u3_l2_q8', type: 'multiple-choice', question: 'By the FTC, ∫ from a to b f(x)dx =', options: ['f(b) - f(a)', 'F(b) - F(a)', 'f\'(b) - f\'(a)', 'f(a) - f(b)'], correct: 1, xp: 3},
              {id: 'calc_u3_l2_q9', type: 'typing', question: 'What is ∫ from -1 to 1 x³ dx?', correctAnswer: ['0'], xp: 4},
              {id: 'calc_u3_l2_q10', type: 'multiple-choice', question: 'The area under f(x) from a to b where f(x) < 0 is:', options: ['Positive', 'Negative', 'Zero', 'Undefined'], correct: 1, xp: 3},
              {id: 'calc_u3_l2_q11', type: 'typing', question: 'What is ∫ from 0 to 1 e^x dx?', correctAnswer: ['e - 1', '1.718'], xp: 5},
              {id: 'calc_u3_l2_q12', type: 'multiple-choice', question: 'If you reverse limits, the integral:', options: ['Doubles', 'Changes sign', 'Stays same', 'Becomes zero'], correct: 1, xp: 3},
              {id: 'calc_u3_l2_q13', type: 'typing', question: 'What is ∫ from 0 to π/2 cos(x) dx?', correctAnswer: ['1'], xp: 4},
              {id: 'calc_u3_l2_q14', type: 'multiple-choice', question: 'The definite integral of an odd function from -a to a is:', options: ['2a', 'a²', '0', '2∫ from 0 to a'], correct: 2, xp: 3},
              {id: 'calc_u3_l2_q15', type: 'typing', question: 'What is ∫ from 1 to 2 1/x dx?', correctAnswer: ['ln(2)', '0.693'], xp: 5},
              {id: 'calc_u3_l2_q16', type: 'multiple-choice', question: 'Net area accounts for:', options: ['Only positive area', 'Only negative area', 'Positive minus negative', 'Total absolute area'], correct: 2, xp: 3},
              {id: 'calc_u3_l2_q17', type: 'typing', question: 'What is ∫ from 0 to 1 (x + x²) dx?', correctAnswer: ['5/6', '0.833'], xp: 4},
              {id: 'calc_u3_l2_q18', type: 'multiple-choice', question: 'The average value of f on [a,b] is:', options: ['(f(a)+f(b))/2', '∫ from a to b f(x)dx/(b-a)', 'f((a+b)/2)', 'f\'(c)'], correct: 1, xp: 3}
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'Applications',
        description: 'Applications of Calculus',
        lessons: [
          {
            id: '4-1',
            title: 'Rates of Change',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u4_l1_q1', type: 'typing', question: 'If position s(t) = t², velocity v(t) =', correctAnswer: ['2t'], xp: 5},
              {id: 'calc_u4_l1_q2', type: 'typing', question: 'Velocity is the derivative of:', correctAnswer: ['position', 'displacement'], xp: 4},
              {id: 'calc_u4_l1_q3', type: 'typing', question: 'If v(t) = 3t + 2, acceleration a(t) =', correctAnswer: ['3'], xp: 5},
              {id: 'calc_u4_l1_q4', type: 'multiple-choice', question: 'Acceleration is the derivative of:', options: ['Position', 'Velocity', 'Jerk', 'Speed'], correct: 1, xp: 3},
              {id: 'calc_u4_l1_q5', type: 'typing', question: 'If s(t) = 5t, what is the average velocity from t=0 to t=2?', correctAnswer: ['5'], xp: 4},
              {id: 'calc_u4_l1_q6', type: 'multiple-choice', question: 'Instantaneous velocity at t = a is:', options: ['s(a)', 's\'(a)', 's(a+1)', 's\'(a+1)'], correct: 1, xp: 3},
              {id: 'calc_u4_l1_q7', type: 'typing', question: 'If s(t) = t³ + t, find v(t).', correctAnswer: ['3t² + 1'], xp: 5},
              {id: 'calc_u4_l1_q8', type: 'multiple-choice', question: 'Speed is the absolute value of:', options: ['Position', 'Velocity', 'Acceleration', 'Distance'], correct: 1, xp: 3},
              {id: 'calc_u4_l1_q9', type: 'typing', question: 'If a ball falls with s(t) = -16t², what is v(t)?', correctAnswer: ['-32t'], xp: 4},
              {id: 'calc_u4_l1_q10', type: 'multiple-choice', question: 'Related rates problems involve:', options: ['Single variable', 'Multiple variables changing together', 'Constants only', 'No time'], correct: 1, xp: 3},
              {id: 'calc_u4_l1_q11', type: 'typing', question: 'If radius r(t) = 2t, dr/dt =', correctAnswer: ['2'], xp: 5},
              {id: 'calc_u4_l1_q12', type: 'multiple-choice', question: 'For A = πr², dA/dt =', options: ['π(dr/dt)', '2πr(dr/dt)', '2πr', 'πr²(dr/dt)'], correct: 1, xp: 3},
              {id: 'calc_u4_l1_q13', type: 'typing', question: 'If water level h(t) = t, dh/dt =', correctAnswer: ['1'], xp: 4},
              {id: 'calc_u4_l1_q14', type: 'multiple-choice', question: 'Displacement from a to b equals:', options: ['s(b) - s(a)', 'v(b) - v(a)', '∫ from a to b v(t)dt', 'Both A and C'], correct: 3, xp: 3},
              {id: 'calc_u4_l1_q15', type: 'typing', question: 'If V(t) = 100 + 5t, rate of change =', correctAnswer: ['5'], xp: 5},
              {id: 'calc_u4_l1_q16', type: 'multiple-choice', question: 'In related rates, differentiate with respect to:', options: ['x', 'y', 't', 'r'], correct: 2, xp: 3},
              {id: 'calc_u4_l1_q17', type: 'typing', question: 'If x(t) = t² and y(t) = t³, find dy/dx.', correctAnswer: ['(3t)/(2)', '(3t²)/(2t)'], xp: 4},
              {id: 'calc_u4_l1_q18', type: 'multiple-choice', question: 'The chain rule for related rates says:', options: ['dy/dx = dy/dt', 'dy/dt = (dy/dx)(dx/dt)', 'dy/dx = dx/dt', 'dy/dt = dy/dx'], correct: 1, xp: 3}
            ]
          },
          {
            id: '4-2',
            title: 'Optimization Problems',
            xp: 88,
            type: 'lesson',
            questions: [
              {id: 'calc_u4_l2_q1', type: 'typing', question: 'To find a maximum, set derivative equal to:', correctAnswer: ['0'], xp: 5},
              {id: 'calc_u4_l2_q2', type: 'typing', question: 'A critical point occurs where f\'(x) =', correctAnswer: ['0', 'undefined'], xp: 4},
              {id: 'calc_u4_l2_q3', type: 'typing', question: 'If f\'(x) changes from + to -, f has a:', correctAnswer: ['maximum', 'local maximum'], xp: 5},
              {id: 'calc_u4_l2_q4', type: 'multiple-choice', question: 'For a minimum, the second derivative is:', options: ['Positive', 'Negative', 'Zero', 'Undefined'], correct: 0, xp: 3},
              {id: 'calc_u4_l2_q5', type: 'typing', question: 'Find the maximum of f(x) = -x² + 4x.', correctAnswer: ['x = 2', 'at x=2'], xp: 4},
              {id: 'calc_u4_l2_q6', type: 'multiple-choice', question: 'The absolute maximum on [a,b] is at:', options: ['Always interior', 'Critical points or endpoints', 'Only endpoints', 'Always at x=0'], correct: 1, xp: 3},
              {id: 'calc_u4_l2_q7', type: 'typing', question: 'If f\'(x) = 2x - 4, where is f minimized?', correctAnswer: ['x = 2', 'at x=2'], xp: 5},
              {id: 'calc_u4_l2_q8', type: 'multiple-choice', question: 'f\'\'(a) < 0 means f has a:', options: ['Minimum at a', 'Maximum at a', 'Inflection at a', 'Saddle at a'], correct: 1, xp: 3},
              {id: 'calc_u4_l2_q9', type: 'typing', question: 'Maximize area of rectangle with perimeter 20.', correctAnswer: ['5x5', 'square 5 by 5'], xp: 4},
              {id: 'calc_u4_l2_q10', type: 'multiple-choice', question: 'For optimization, first:', options: ['Set f\' = 0', 'Write objective function', 'Find endpoints', 'Check second derivative'], correct: 1, xp: 3},
              {id: 'calc_u4_l2_q11', type: 'typing', question: 'Minimize f(x) = x² - 6x + 10.', correctAnswer: ['x = 3', 'at x=3', 'value 1'], xp: 5},
              {id: 'calc_u4_l2_q12', type: 'multiple-choice', question: 'Second derivative test uses:', options: ['f\' at critical points', 'f\'\' at critical points', 'Both f\' and f\'\'', 'Neither'], correct: 1, xp: 3},
              {id: 'calc_u4_l2_q13', type: 'typing', question: 'A function with f\'\' = 2 is:', options: ['Concave down', 'Concave up', 'Linear', 'Constant'], xp: 4},
              {id: 'calc_u4_l2_q14', type: 'multiple-choice', question: 'An inflection point occurs where f\'\' changes sign at:', options: ['Maximum', 'Minimum', 'Critical point', 'Zero'], correct: 3, xp: 3},
              {id: 'calc_u4_l2_q15', type: 'typing', question: 'Maximize product of two numbers summing to 10.', correctAnswer: ['5 and 5', '25', 'each 5'], xp: 5},
              {id: 'calc_u4_l2_q16', type: 'multiple-choice', question: 'To maximize revenue R(p) with demand D(p):', options: ['Maximize D(p)', 'Maximize p·D(p)', 'Minimize p', 'Maximize derivative'], correct: 1, xp: 3},
              {id: 'calc_u4_l2_q17', type: 'typing', question: 'If f\' = 3x² - 12, critical points at:', correctAnswer: ['x = -2, 2', '-2 and 2'], xp: 4},
              {id: 'calc_u4_l2_q18', type: 'multiple-choice', question: 'Global extrema on closed intervals require checking:', options: ['Only critical points', 'Only endpoints', 'Critical points AND endpoints', 'Neither'], correct: 2, xp: 3}
            ]
          }
        ]
      }
    ]
  },
  linearAlgebra: {
    id: 'linearAlgebra',
    name: 'Linear Algebra',
    flag: '➡️',
    units: []
  },
  ai: {
    id: 'ai',
    name: 'Artificial Intelligence',
    flag: '🤖',
    units: []
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    flag: '⚡',
    units: []
  },
  hexapod: {
    id: 'hexapod',
    name: 'Hexapod Engineering',
    flag: '🤖',
    units: []
  }
};

// =====================================================================
// COURSE DATA LOADING
// =====================================================================
function loadCourseData() {
  console.log('=== Loading Course Data ===');

  // Load Linear Algebra data
  console.log('Checking linearAlgebraAllTopics:', typeof window.linearAlgebraAllTopics);
  if (window.linearAlgebraAllTopics && window.linearAlgebraAllTopics.units && window.linearAlgebraAllTopics.units.length > 0) {
    courses.linearAlgebra.units = window.linearAlgebraAllTopics.units;
    console.log('✅ Linear Algebra loaded:', courses.linearAlgebra.units.length, 'units');
  } else {
    console.warn('⚠️ Linear Algebra not loaded');
  }

  // Load AI data
  console.log('Checking aiAllTopics:', typeof window.aiAllTopics);
  if (window.aiAllTopics && window.aiAllTopics.units && window.aiAllTopics.units.length > 0) {
    courses.ai.units = window.aiAllTopics.units;
    console.log('✅ AI loaded:', courses.ai.units.length, 'units');
  } else {
    console.warn('⚠️ AI not loaded');
  }

  // Load C++ data
  console.log('Checking cppCombined:', typeof window.cppCombined);
  if (window.cppCombined && window.cppCombined.units && window.cppCombined.units.length > 0) {
    courses.cpp.units = window.cppCombined.units;
    console.log('✅ C++ loaded:', courses.cpp.units.length, 'units');
  } else {
    console.warn('⚠️ C++ not loaded');
  }

  // Load Hexapod data
  console.log('Checking hexapodAllTopics:', typeof window.hexapodAllTopics);
  if (window.hexapodAllTopics && window.hexapodAllTopics.units && window.hexapodAllTopics.units.length > 0) {
    courses.hexapod.units = window.hexapodAllTopics.units;
    console.log('✅ Hexapod loaded:', courses.hexapod.units.length, 'units');
  } else {
    console.warn('⚠️ Hexapod not loaded');
  }

  console.log('=== Course Data Loading Complete ===');
  console.log('Final counts:', {
    'Linear Algebra': courses.linearAlgebra.units.length,
    'AI': courses.ai.units.length,
    'C++': courses.cpp.units.length,
    'Hexapod': courses.hexapod.units.length
  });
}

// =====================================================================
// PROGRESS AND SETTINGS
// =====================================================================
let currentLesson = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let matchedPairs = [];
let progress = {
  completedLessons: [],
  xp: 0,
  streak: 0
};
let masteredQuestions = new Set();
let questionPool = [];
let currentQuestionAutoPlayed = false;
let currentView = 'dashboard';
let currentConversation = null;
let conversationMessages = [];
let settings = {
  soundEnabled: true,
  ttsEnabled: false,
  ttsAutoPlay: false,
  soundPack: 'default',
  theme: 'light',
  font: 'default'
};

// Load progress from storage
function loadProgress() {
  try {
    if (typeof window !== 'undefined' && window.electron && window.electron.loadProgress) {
      const saved = window.electron.loadProgress();
      if (saved) {
        progress = saved;
      }
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('loadProgress').then(saved => {
        if (saved) {
          progress = saved;
        }
      }).catch(err => {
        console.error('Error loading progress:', err);
      });
    } else {
      const saved = localStorage.getItem('triolingo-progress');
      if (saved) {
        try {
          progress = JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing saved progress:', e);
        }
      }
    }
    console.log('Progress loaded:', progress);
  } catch (err) {
    console.error('Error in loadProgress:', err);
  }
}

// Save progress to storage
function saveProgress() {
  try {
    if (typeof window !== 'undefined' && window.electron && window.electron.saveProgress) {
      window.electron.saveProgress(progress);
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('saveProgress', progress).catch(err => {
        console.error('Error saving progress:', err);
      });
    } else {
      localStorage.setItem('triolingo-progress', JSON.stringify(progress));
    }
  } catch (err) {
    console.error('Error in saveProgress:', err);
  }
}

// Setup event listeners
function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) {
        renderView(view);
      }
    });
  });

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
}

// =====================================================================
// VIEW RENDERING
// =====================================================================
function renderView(viewName) {
  console.log('Rendering view:', viewName);
  currentView = viewName;

  const container = document.getElementById('view-container');
  if (!container) {
    console.error('View container not found');
    return;
  }

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) {
    const titles = {
      'dashboard': 'Triolingo',
      'learn': 'Learn',
      'conversations': 'Conversations',
      'progress': 'Progress',
      'settings': 'Settings',
      'lesson': 'Lesson',
      'conversation-chat': 'Conversation Practice'
    };
    headerTitle.textContent = titles[viewName] || 'Triolingo';
  }

  switch (viewName) {
    case 'dashboard':
      container.innerHTML = renderDashboard();
      setupDashboardListeners();
      break;
    case 'learn':
      container.innerHTML = renderLearn();
      break;
    case 'conversations':
      container.innerHTML = renderConversations();
      break;
    case 'conversation-chat':
      container.innerHTML = renderConversationChat();
      setupChatInput();
      break;
    case 'progress':
      container.innerHTML = renderProgressView();
      break;
    case 'settings':
      container.innerHTML = renderSettings();
      setupSettingsListeners();
      break;
    case 'lesson':
      container.innerHTML = renderLesson();
      setupLessonListeners();
      // Typeset MathJax after rendering lesson content
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().then(() => {
          console.log('MathJax typeset complete');
        }).catch((err) => {
          console.error('MathJax typeset error:', err);
        });
      }
      break;
    case 'conversation-chat':
      break;
    default:
      console.error('Unknown view:', viewName);
      container.innerHTML = '<p>Unknown view</p>';
  }
}

// Dashboard
function renderDashboard() {
  console.log('=== renderDashboard() called ===');

  const courseSelect = document.getElementById('courseSelect');
  console.log('courseSelect element:', courseSelect);

  if (!courseSelect) {
    console.error('courseSelect element not found!');
    return '<p>Course selector not found</p>';
  }

  const courseId = courseSelect.value;
  console.log('Current courseId:', courseId);

  const course = courses[courseId];
  console.log('Course object:', course);
  console.log('Course units count:', course ? course.units.length : 'course is null');

  if (!course) {
    console.error('Course not found for ID:', courseId);
    return '<p>Course not found</p>';
  }

  console.log('Units to render:', course.units);

  if (!course.units || course.units.length === 0) {
    console.warn('No units in course!');
    return `
      <div class="dashboard">
        <div class="progress-card">
          <div class="progress-stats">
            <div class="progress-stat">
              <span class="progress-icon">🏆</span>
              <span class="progress-value">${progress.xp}</span>
              <span class="progress-label">XP</span>
            </div>
            <div class="progress-stat">
              <span class="progress-icon">🔥</span>
              <span class="progress-value">${progress.streak}</span>
              <span class="progress-label">Day Streak</span>
            </div>
            <div class="progress-stat">
              <span class="progress-icon">📚</span>
              <span class="progress-value">${progress.completedLessons ? progress.completedLessons.length : 0}</span>
              <span class="progress-label">Lessons</span>
            </div>
          </div>
        </div>
        <div class="units-container">
          <p>No units available for this course.</p>
        </div>
      </div>
    `;
  }

  const unitsHtml = course.units.map(unit => renderUnit(unit)).join('');
  console.log('Generated units HTML length:', unitsHtml.length);

  return `
    <div class="dashboard">
      <div class="progress-card">
        <div class="progress-stats">
          <div class="progress-stat">
            <span class="progress-icon">🏆</span>
            <span class="progress-value">${progress.xp}</span>
            <span class="progress-label">XP</span>
          </div>
          <div class="progress-stat">
            <span class="progress-icon">🔥</span>
            <span class="progress-value">${progress.streak}</span>
            <span class="progress-label">Day Streak</span>
          </div>
          <div class="progress-stat">
            <span class="progress-icon">📚</span>
            <span class="progress-value">${progress.completedLessons ? progress.completedLessons.length : 0}</span>
            <span class="progress-label">Lessons</span>
          </div>
        </div>
      </div>
      <div class="units-container">
        ${unitsHtml}
      </div>
    </div>
  `;
}

function renderUnit(unit) {
  console.log('renderUnit called with:', unit);

  const unitName = unit.unitName || unit.title || 'Unit';
  const unitDesc = unit.unitDescription || unit.description || 'Master concepts';

  console.log('Unit name:', unitName);
  console.log('Unit lessons count:', unit.lessons ? unit.lessons.length : 'no lessons array');

  if (!unit.lessons || unit.lessons.length === 0) {
    return `
      <div class="unit">
        <div class="unit-header">
          <h3>${unitName}</h3>
          <p>${unitDesc}</p>
        </div>
        <div class="lessons-grid">
          <p>No lessons available</p>
        </div>
      </div>
    `;
  }

  const lessonsHtml = unit.lessons.map(lesson => renderLessonCard(lesson)).join('');

  return `
    <div class="unit">
      <div class="unit-header">
        <h3>${unitName}</h3>
        <p>${unitDesc}</p>
      </div>
      <div class="lessons-grid">
        ${lessonsHtml}
      </div>
    </div>
  `;
}

function renderLessonCard(lesson) {
  const courseId = document.getElementById('courseSelect').value;
  const isCompleted = progress.completedLessons?.includes(`${courseId}-${lesson.id}`);
  const isLocked = isLessonLocked(courseId, lesson.id);

  return `
    <button class="lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}"
            data-lesson-id="${lesson.id}"
            ${isLocked ? 'disabled' : ''}>
      <div class="lesson-icon">
        ${isCompleted ? '✅' : isLocked ? '🔒' : lesson.type === 'lesson' ? '📚' : '💬'}
      </div>
      <div class="lesson-info">
        <h4>${lesson.title}</h4>
        <span class="xp-badge">+${lesson.xp} XP</span>
      </div>
    </button>
  `;
}

function setupDashboardListeners() {
  document.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.dataset.lessonId;
      startLesson(lessonId);
    });
  });
}

// Learn view
function renderLearn() {
  return `
    <div class="learn-view">
      <h2>Learn</h2>
      <p>Select a lesson to begin learning.</p>
      ${renderDashboard()}
    </div>
  `;
}

// Conversations view
function renderConversations() {
  const courseSelect = document.getElementById('courseSelect');
  const courseId = courseSelect ? courseSelect.value : 'french';

  const conversations = typeof ConversationLessons !== 'undefined' && ConversationLessons[courseId]
    ? ConversationLessons[courseId]
    : [];

  if (conversations.length === 0) {
    return `
      <div class="conversations-view">
        <h2>Conversation Practice</h2>
        <p>No conversation lessons available for this course yet.</p>
      </div>
    `;
  }

  const cards = conversations.map(conv => `
    <div class="conversation-card ${conv.difficulty}" onclick="startConversation('${conv.id}');">
      <div class="conversation-icon">${conv.icon}</div>
      <div class="conversation-info">
        <h3>${conv.title}</h3>
        <p>${conv.description}</p>
        <div class="conversation-meta">
          <span class="difficulty-badge ${conv.difficulty}">${conv.difficulty}</span>
          <span class="time-badge">⏱️ ${conv.estimatedTime} min</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="conversations-view">
      <h2>Conversation Practice</h2>
      <p>Practice real-world conversations with AI roleplay scenarios.</p>
      <div class="conversations-grid">
        ${cards}
      </div>
    </div>
  `;
}

function startConversation(conversationId) {
  const courseSelect = document.getElementById('courseSelect');
  const courseId = courseSelect ? courseSelect.value : 'french';

  const conversations = typeof ConversationLessons !== 'undefined' && ConversationLessons[courseId]
    ? ConversationLessons[courseId]
    : [];

  const conversation = conversations.find(c => c.id === conversationId);

  if (!conversation) {
    console.error('Conversation not found:', conversationId);
    return;
  }

  currentConversation = conversation;
  conversationMessages = [];
  renderView('conversation-chat');
}

function renderConversationChat() {
  if (!currentConversation) {
    renderView('conversations');
    return '';
  }

  const messagesHtml = conversationMessages.map(msg => `
    <div class="chat-message ${msg.role}">
      <div class="message-avatar">${msg.role === 'user' ? '👤' : '🤖'}</div>
      <div class="message-content">
        <div class="message-text">${msg.text}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="conversation-chat-view">
      <div class="chat-header">
        <button class="btn btn-secondary back-btn" onclick="renderView('conversations');">← Back</button>
        <div class="chat-title">
          <span class="chat-icon">${currentConversation.icon}</span>
          <h2>${currentConversation.title}</h2>
        </div>
        <span class="chat-difficulty ${currentConversation.difficulty}">${currentConversation.difficulty}</span>
      </div>
      <div class="chat-scenario">
        <strong>Scenario:</strong> ${currentConversation.scenario}
        <div class="chat-topics">
          <span class="topic-label">Topics:</span>
          ${currentConversation.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="chat-messages">
        ${messagesHtml}
      </div>
      <div class="chat-input-area">
        <div class="chat-input-wrapper">
          <input type="text" class="chat-input" id="chatInput" placeholder="Type your message..." />
          <button class="btn btn-primary send-btn" onclick="sendChatMessage();">Send</button>
        </div>
      </div>
    </div>
  `;
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();

  if (!message) return;

  conversationMessages.push({
    role: 'user',
    text: message
  });

  input.value = '';
  renderView('conversation-chat');

  setTimeout(() => {
    const responses = [
      "That's great! Let's continue practicing.",
      "Good choice of words! Try adding more detail.",
      "Excellent! You're doing well.",
      "Remember to use the vocabulary you learned.",
      "Let's practice that again with a slightly different scenario."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    conversationMessages.push({
      role: 'assistant',
      text: randomResponse
    });

    renderView('conversation-chat');
  }, 1000);
}

function setupChatInput() {
  const input = document.getElementById('chatInput');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }
}

// Progress view
function renderProgressView() {
  return `
    <div class="progress-view">
      <h2>Progress</h2>
      <p>Track your learning journey.</p>
      <div class="progress-stats">
        <div class="stat-card">
          <h3>XP</h3>
          <p class="stat-value">${progress.xp}</p>
        </div>
        <div class="stat-card">
          <h3>Streak</h3>
          <p class="stat-value">${progress.streak} days</p>
        </div>
        <div class="stat-card">
          <h3>Lessons</h3>
          <p class="stat-value">${progress.completedLessons?.length || 0}</p>
        </div>
      </div>
    </div>
  `;
}

// Settings view
function renderSettings() {
  // Get all themes and fonts from themeManager
  const themes = typeof themeManager !== 'undefined' ? themeManager.getThemeNames() : [];
  const fonts = typeof themeManager !== 'undefined' ? themeManager.getFontNames() : [];
  const currentTheme = typeof themeManager !== 'undefined' ? themeManager.currentTheme : 'white';
  const currentFont = typeof themeManager !== 'undefined' ? themeManager.currentFont : 'default';

  const themeCards = themes.map(theme => {
    const themeData = typeof themeManager !== 'undefined' ? themeManager.getTheme(theme.id) : null;
    const accentColor = themeData ? themeData.colors['--accent'] : '#58cc02';
    const bgColor = themeData ? themeData.colors['--bg-primary'] : '#ffffff';

    return `
      <div class="theme-card ${theme.id === currentTheme ? 'active' : ''}" onclick="changeTheme('${theme.id}');"
           style="--theme-accent: ${accentColor}; --theme-bg: ${bgColor};">
        <div class="theme-preview" style="background: ${bgColor}; border: 2px solid ${accentColor};">
        </div>
        <div class="theme-card-content">
          <h4>${theme.name}</h4>
        </div>
      </div>
    `;
  }).join('');

  const fontCards = fonts.map(font => `
    <div class="font-card ${font.id === currentFont ? 'active' : ''}" onclick="changeFont('${font.id}');">
      <h3 style="font-family: ${font.id === 'default' ? 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : `"${font.name}"`}">${font.name}</h3>
    </div>
  `).join('');

  return `
    <div class="settings-view">
      <h2>Settings</h2>

      <!-- Sound Section -->
      <div class="settings-section">
        <h3>Sound</h3>
        <div class="sound-options">
          <button class="btn btn-compact ${settings.soundEnabled ? 'btn-primary' : 'btn-secondary'}" onclick="toggleSound(); renderView('settings');">
            Sound: ${settings.soundEnabled ? 'ON' : 'OFF'}
          </button>
          <button class="btn btn-compact ${settings.ttsEnabled ? 'btn-primary' : 'btn-secondary'}" onclick="toggleTTS(); renderView('settings');">
            TTS: ${settings.ttsEnabled ? 'ON' : 'OFF'}
          </button>
          <button class="btn btn-compact ${settings.ttsAutoPlay ? 'btn-primary' : 'btn-secondary'}" onclick="toggleTTSAutoPlay(); renderView('settings');">
            TTS Auto-Play: ${settings.ttsAutoPlay ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <!-- Themes Section -->
      <div class="settings-section">
        <h3>Themes</h3>
        <div class="theme-grid">
          ${themeCards}
        </div>
      </div>

      <!-- Fonts Section -->
      <div class="settings-section">
        <h3>Fonts</h3>
        <div class="font-grid">
          ${fontCards}
        </div>
      </div>
    </div>
  `;
}

function setupSettingsListeners() {
  // Listeners handled by inline onclick
}

// Lesson view
let lessonPhase = 'content'; // 'content' or 'questions'
let currentAnswerFeedback = null; // Store answer feedback

function renderLesson() {
  if (!currentLesson) {
    return '<p>No lesson loaded</p>';
  }

  // Show lesson content first, then questions
  if (lessonPhase === 'content') {
    return renderLessonContent();
  } else {
    const question = currentLesson.questions[currentQuestionIndex];
    return `
      <div class="lesson-view">
        <div class="lesson-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / currentLesson.questions.length) * 100}%"></div>
          </div>
          <p>${currentQuestionIndex + 1} / ${currentLesson.questions.length}</p>
        </div>
        <div class="question-container">
          ${renderQuestion(question)}
          ${currentAnswerFeedback ? renderAnswerFeedback(question) : ''}
        </div>
        <div class="lesson-controls">
          <button class="btn btn-secondary quit-btn" onclick="quitLesson()">Quit</button>
          <button class="btn btn-primary continue-btn" onclick="submitAnswer()">
            ${currentAnswerFeedback ? 'Next Question' : 'Submit Answer'}
          </button>
        </div>
      </div>
    `;
  }
}

function renderAnswerFeedback(question) {
  const isCorrect = currentAnswerFeedback.correct;
  const feedback = currentAnswerFeedback.feedback;

  return `
    <div class="answer-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
      <div class="feedback-content">
        <h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>
        ${!isCorrect && question.type === 'multiple-choice' ? `
          <p class="correct-answer"><strong>Correct answer:</strong> ${question.options[question.correct]}</p>
        ` : ''}
        ${!isCorrect && question.explanation ? `<p class="explanation"><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
        ${isCorrect && question.explanation ? `<p class="explanation"><strong>Great job!</strong> ${question.explanation}</p>` : ''}
      </div>
    </div>
  `;
}

function submitAnswer() {
  if (!currentLesson) {
    console.error('No lesson in progress');
    return;
  }

  // If we already showed feedback, move to next question
  if (currentAnswerFeedback) {
    currentQuestionIndex++;
    selectedAnswer = null;
    currentAnswerFeedback = null;

    if (currentQuestionIndex >= currentLesson.questions.length) {
      completeLesson();
    } else {
      renderView('lesson');
    }
    return;
  }

  // Otherwise, check the answer
  const question = currentLesson.questions[currentQuestionIndex];
  let isCorrect = false;
  let feedback = '';

  switch (question.type) {
    case 'multiple-choice':
      isCorrect = selectedAnswer === question.correct;
      feedback = isCorrect ? 'Correct answer!' : `Incorrect. The correct answer is: ${question.options[question.correct]}`;
      break;
    case 'typing':
      const typingInput = document.querySelector('.typing-input');
      const userAnswer = typingInput ? typingInput.value.trim().toLowerCase() : '';
      const correctAnswers = question.correctAnswer.map(a => a.toLowerCase());
      isCorrect = correctAnswers.includes(userAnswer);
      feedback = isCorrect ? 'Correct answer!' : `Incorrect. Acceptable answers: ${question.correctAnswer.join(', ')}`;
      break;
    case 'fill-blank':
      // For fill-in-blank, we need to check the filled value
      // This would need to be implemented based on how fill-blank questions work
      isCorrect = true; // Placeholder
      feedback = 'Answer submitted';
      break;
  }

  currentAnswerFeedback = { correct: isCorrect, feedback };
  renderView('lesson');
}

// =====================================================================
// LESSON FUNCTIONS
// =====================================================================
function selectAnswer(index) {
  selectedAnswer = index;
  // Don't re-render entire view, just update the selection
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
}

function handleTypingInput() {
  // Handle typing input
}

function handleTypingEnter(event) {
  if (event.key === 'Enter') {
    submitAnswer();
  }
}

function startLesson(lessonId) {
  const courseId = document.getElementById('courseSelect').value;
  const course = courses[courseId];

  if (!course) {
    console.error('Course not found');
    return;
  }

  // Find lesson
  for (const unit of course.units) {
    const lesson = unit.lessons.find(l => l.id == lessonId);
    if (lesson) {
      // CRITICAL: Don't start lessons without content
      if (!lessonHasContent(lesson)) {
        console.error('Lesson has no content:', lessonId);
        alert('This lesson does not have content yet. Please try a different lesson.');
        return;
      }
      currentLesson = lesson;
      lessonPhase = 'content'; // Start with lesson content
      currentQuestionIndex = 0;
      selectedAnswer = null;
      currentAnswerFeedback = null;
      renderView('lesson');
      return;
    }
  }

  console.error('Lesson not found:', lessonId);
}

function completeLesson() {
  const courseId = document.getElementById('courseSelect').value;
  const lessonKey = `${courseId}-${currentLesson.id}`;

  if (!progress.completedLessons) {
    progress.completedLessons = [];
  }

  if (!progress.completedLessons.includes(lessonKey)) {
    progress.completedLessons.push(lessonKey);
    progress.xp += currentLesson.xp;
    saveProgress();
  }

  currentLesson = null;
  renderView('dashboard');
}

function quitLesson() {
  currentLesson = null;
  renderView('dashboard');
}

// =====================================================================
// MARKDOWN RENDERING
// =====================================================================
function renderMarkdownContent(text) {
  // Store LaTeX equations to preserve them
  const equations = [];
  let html = text;

  // Store display math ($$...$$)
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (match, eq) => {
    equations.push({ type: 'display', equation: eq });
    return `__MATHJAX_DISPLAY_${equations.length - 1}__`;
  });

  // Store inline math ($...$)
  html = html.replace(/\$([^$\n]+?)\$/g, (match, eq) => {
    equations.push({ type: 'inline', equation: eq });
    return `__MATHJAX_INLINE_${equations.length - 1}__`;
  });

  // Headers
  html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/^- (.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  html = html.replace(/<\/ul>\n<ul>/g, '\n');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

  // Diagram references - MUST come before inline code!
  html = html.replace(/`diagrams\/([^`]+)\.png`/g, '<img src="diagrams/$1.png" class="lesson-diagram" alt="$1 diagram">');

  // Inline code - handles remaining backticks after diagrams
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Restore LaTeX equations
  html = html.replace(/__MATHJAX_DISPLAY_(\d+)__/g, (match, index) => {
    return `$$${equations[index].equation}$$`;
  });
  html = html.replace(/__MATHJAX_INLINE_(\d+)__/g, (match, index) => {
    return `$${equations[index].equation}$`;
  });

  // Paragraphs
  html = html.split('\n\n').map(p => {
    if (!p.trim()) return '';
    if (p.startsWith('<')) return p;
    return `<p>${p.trim()}</p>`;
  }).join('\n');

  return html;
}

function renderLessonContent() {
  const lessonText = currentLesson.lessonText || '';
  const hasContent = lessonText && lessonText.length > 10;

  return `
    <div class="lesson-view">
      <div class="lesson-content">
        <h2 class="lesson-title">${currentLesson.title}</h2>
        ${hasContent ? `
          <div class="lesson-text-content">
            ${renderMarkdownContent(lessonText)}
          </div>
        ` : '<p>No lesson content available</p>'}
      </div>
      <div class="lesson-controls">
        <button class="btn btn-secondary quit-btn" onclick="quitLesson()">Quit</button>
        <button class="btn btn-primary continue-btn" onclick="startQuestions()">Start Practice</button>
      </div>
    </div>
  `;
}

function startQuestions() {
  lessonPhase = 'questions';
  currentQuestionIndex = 0;
  selectedAnswer = null;
  currentAnswerFeedback = null;
  renderView('lesson');
}

function renderQuestion(question) {
  switch (question.type) {
    case 'multiple-choice':
      return renderMultipleChoiceQuestion(question);
    case 'fill-blank':
      return renderFillBlankQuestion(question);
    case 'typing':
      return renderTypingQuestion(question);
    default:
      return `<p>Unknown question type: ${question.type}</p>`;
  }
}

function renderMultipleChoiceQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="multiple-choice-question">
      <p class="question-text">${renderedQuestion}</p>
      <div class="options-vertical">
        ${question.options.map((opt, i) => `
          <button class="option-btn ${selectedAnswer === i ? 'selected' : ''}"
                  onclick="selectAnswer(${i})">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFillBlankQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="fill-blank-question">
      <p class="question-text">${renderedQuestion}</p>
    </div>
  `;
}

function renderTypingQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="typing-question">
      <p class="question-text">${renderedQuestion}</p>
      <input type="text" class="typing-input" placeholder="Type your answer...">
    </div>
  `;
}

function setupLessonListeners() {
  const typingInput = document.querySelector('.typing-input');
  if (typingInput) {
    typingInput.addEventListener('input', handleTypingInput);
    typingInput.addEventListener('keydown', handleTypingEnter);
  }
}

function continueLesson() {
  // This is now handled by submitAnswer()
  submitAnswer();
}

// =====================================================================
// UTILITY FUNCTIONS
// =====================================================================
function isLessonCompleted(courseId, lessonId) {
  const key = `${courseId}-${lessonId}`;
  return progress.completedLessons?.includes(key) || false;
}

function lessonHasContent(lesson) {
  // A lesson has content if it has questions
  return lesson.questions && lesson.questions.length > 0;
}

function isLessonLocked(courseId, lessonId) {
  if (courseId === 'calculus') return false;

  const course = courses[courseId];
  let currentLesson = null;

  // Find the lesson
  for (const unit of course.units) {
    const lesson = unit.lessons.find(l => l.id == lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) return true;

  // CRITICAL: Lessons without content (empty placeholders) are ALWAYS locked
  // Lessons WITH content are ALWAYS unlocked (clickable)
  if (!lessonHasContent(currentLesson)) {
    return true;
  }

  return false;
}

function toggleSound() {
  settings.soundEnabled = !settings.soundEnabled;
  if (typeof soundManager !== 'undefined') {
    soundManager.enabled = settings.soundEnabled;
  }
  saveSettings();
}

function toggleTTS() {
  settings.ttsEnabled = !settings.ttsEnabled;
  if (typeof ttsManager !== 'undefined') {
    ttsManager.enabled = settings.ttsEnabled;
  }
  saveSettings();
}

function changeTheme(themeName) {
  if (typeof themeManager !== 'undefined') {
    themeManager.setTheme(themeName);
  }
  renderView('settings');
}

function changeFont(fontId) {
  if (typeof themeManager !== 'undefined') {
    themeManager.applyFont(fontId);
    themeManager.saveFont(fontId);
  }
  renderView('settings');
}

function toggleTTSAutoPlay() {
  settings.ttsAutoPlay = !settings.ttsAutoPlay;
  saveSettings();
}

function changeTheme(themeName) {
  settings.theme = themeName;
  if (typeof themeManager !== 'undefined') {
    themeManager.setTheme(themeName);
  }
  saveSettings();
}

function changeSoundPack(pack) {
  settings.soundPack = pack;
  if (typeof soundManager !== 'undefined') {
    soundManager.setPack(pack);
  }
  saveSettings();
}

function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  setTimeout(() => {
    renderView(currentView);
  }, 100);
}

function moveToNextUnmastered() {
  const courseId = document.getElementById('courseSelect').value;
  const course = courses[courseId];

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (!isLessonCompleted(courseId, lesson.id) && !isLessonLocked(courseId, lesson.id)) {
        startLesson(lesson.id);
        return;
      }
    }
  }
}

function saveSettings() {
  try {
    if (typeof window !== 'undefined' && window.electron && window.electron.saveSettings) {
      window.electron.saveSettings(settings);
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('saveSettings', settings).catch(err => {
        console.error('Error saving settings:', err);
      });
    } else {
      localStorage.setItem('triolingo-settings', JSON.stringify(settings));
    }
  } catch (err) {
    console.error('Error in saveSettings:', err);
  }
}

// =====================================================================
// INITIALIZATION
// =====================================================================
async function init() {
  try {
    console.log('Initializing Triolingo...');

    // Load course data from external files
    loadCourseData();

    // Ensure themeManager is initialized
    if (typeof themeManager === 'undefined') {
      console.warn('themeManager not defined - waiting for it to load...');
      await new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
          if (typeof themeManager !== 'undefined') {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
          resolve();
        }, 5000);
      });
    }

    console.log('themeManager found, initializing...');
    if (typeof themeManager !== 'undefined' && themeManager.init) {
      await themeManager.init();
    }
    if (typeof soundManager !== 'undefined' && soundManager.init) {
      await soundManager.init();
    }
    if (typeof ttsManager !== 'undefined' && ttsManager.init) {
      await ttsManager.init();
    }

    loadProgress();
    setupEventListeners();
    renderView('dashboard');
    console.log('Initialization complete!');
  } catch (error) {
    console.error('Error during initialization:', error);
    setupEventListeners();
    renderView('dashboard');
  }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);