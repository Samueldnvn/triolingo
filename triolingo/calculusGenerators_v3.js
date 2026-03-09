// calculusGenerators_v3.js
// Enhanced Calculus course with improved progression, more lessons, and better question variety

// =====================================================================
// MATHJAX HELPER FUNCTIONS
// =====================================================================

const MathHelper = {
  // Calculate limit by substitution
  evaluateLimit(expr, point) {
    try {
      const tokens = {
        'x^2': point * point,
        'x^3': point * point * point,
        'x^4': Math.pow(point, 4),
        'x': point,
        '2x': 2 * point,
        '3x': 3 * point,
        '4x': 4 * point,
        '5x': 5 * point,
        'x + 1': point + 1,
        'x + 2': point + 2,
        'x - 1': point - 1,
        'x - 2': point - 2,
        '2x + 1': 2 * point + 1,
        '3x - 2': 3 * point - 2,
        'x^2 + 1': point * point + 1,
        'x^2 - 1': point * point - 1,
        '2': 2,
        '3': 3,
        '5': 5,
        'constant': 0
      };
      
      for (const [pattern, result] of Object.entries(tokens)) {
        if (expr.includes(pattern)) {
          return result;
        }
      }
      return eval(expr.replace(/x/g, point).replace(/\^/g, '**'));
    } catch (e) {
      return 0;
    }
  },

  // Calculate derivative
  derivative(expr) {
    const patterns = {
      'x^2': '2x',
      'x^3': '3x^2',
      'x^4': '4x^3',
      'x^5': '5x^4',
      'x': '1',
      '2x': '2',
      '3x': '3',
      '4x': '4',
      '5x': '5',
      'x + 1': '1',
      'x + 2': '1',
      'x - 1': '1',
      '2x + 1': '2',
      '3x - 2': '3',
      'x^2 + x': '2x + 1',
      '2': '0',
      '3': '0',
      '5': '0',
      'constant': '0'
    };
    return patterns[expr] || 'derivative';
  },

  // Calculate integral (power rule)
  integral(expr) {
    const patterns = {
      'x': 'x^2/2',
      'x^2': 'x^3/3',
      'x^3': 'x^4/4',
      'x^4': 'x^5/5',
      '2x': 'x^2',
      '3x': '3x^2/2',
      '4x': '2x^2',
      '5x': '5x^2/2',
      '2': '2x',
      '3': '3x',
      '5': '5x',
      'x + 1': 'x^2/2 + x',
      'x^2 + x': 'x^3/3 + x^2/2',
      '2x + 1': 'x^2 + x'
    };
    const base = patterns[expr];
    return base ? `${base} + C` : '? + C';
  },

  // Generate wrong answers
  generateWrongAnswers(correct, count = 3, type = 'basic') {
    const wrong = new Set();
    const correctNum = parseFloat(correct) || 0;
    
    while (wrong.size < count) {
      let answer;
      if (type === 'limit') {
        const offsets = [1, -1, 2, -2, correctNum * 2, 0, correctNum + 0.5, correctNum - 0.5];
        answer = (correctNum + offsets[Math.floor(Math.random() * offsets.length)]).toString();
      } else if (type === 'derivative') {
        const wrongDerivatives = ['x^2', '2x^2', 'x', '2', '3', `${correct}x`, '1', '0', '2x', '3x^2'];
        answer = wrongDerivatives[Math.floor(Math.random() * wrongDerivatives.length)];
      } else if (type === 'integral') {
        const wrongIntegrals = ['x^2', 'x^3', '2x', 'x', 'C', 'x + C', '2x^2', 'x^2/2'];
        answer = wrongIntegrals[Math.floor(Math.random() * wrongIntegrals.length)];
      } else {
        answer = Math.abs(correctNum + Math.floor(Math.random() * 10) - 5).toString();
      }
      
      if (answer !== correct && !wrong.has(answer)) {
        wrong.add(answer);
      }
    }
    
    return Array.from(wrong);
  },

  // Convert plain math to LaTeX
  toLaTeX(expr) {
    return expr
      .replace(/x\^(\d+)/g, 'x^{$1}')
      .replace(/frac\{d\}\{dx\}/g, '\\frac{d}{dx}')
      .replace(/lim_\{x->(\d+)\}/g, '\\lim_{x \\to $1}')
      .replace(/lim_\{x→(\d+)\}/g, '\\lim_{x \\to $1}')
      .replace(/lim_\{x\\to\{?(\d+)\}?\}/g, '\\lim_{x \\to $1}')
      .replace(/int/g, '\\int')
      .replace(/\{(.+)\}/g, '{$1}');  // Ensure braces are preserved
  },

  // Wrap text in MathJax LaTeX delimiters
  wrapLatex(expr) {
    return `\\(${this.toLaTeX(expr)}\\)`;
  }
};

// =====================================================================
// CALCULUS QUESTION GENERATORS
// =====================================================================

const CalculusQuestionGenerator = {
  // Generate multiple choice questions with math
  multipleChoice(count = 5, difficulty = 'basic') {
    const questions = [];
    
    // Choose question types based on difficulty
    const basicTypes = [this.limitMC, this.derivativeBasicMC];
    const intermediateTypes = [this.limitMC, this.derivativeBasicMC, this.powerRuleMC, this.continuityMC];
    const advancedTypes = [this.limitMC, this.derivativeBasicMC, this.powerRuleMC, this.chainRuleMC, this.productRuleMC, this.quotientRuleMC];
    
    let questionTypes;
    if (difficulty === 'basic') {
      questionTypes = basicTypes;
    } else if (difficulty === 'intermediate') {
      questionTypes = intermediateTypes;
    } else {
      questionTypes = advancedTypes;
    }

    for (let i = 0; i < count; i++) {
      const gen = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      questions.push(gen.call(this));
    }

    return questions;
  },

  // Limit multiple choice - basic
  limitMC() {
    const problems = [
      { expr: 'x^2', point: 3, answer: 9 },
      { expr: 'x^2', point: 2, answer: 4 },
      { expr: 'x^3', point: 2, answer: 8 },
      { expr: 'x^3', point: 3, answer: 27 },
      { expr: '2x', point: 4, answer: 8 },
      { expr: '3x', point: 5, answer: 15 },
      { expr: 'x + 1', point: 5, answer: 6 },
      { expr: 'x + 2', point: 3, answer: 5 },
      { expr: 'x - 1', point: 4, answer: 3 },
      { expr: 'x^2 + 1', point: 2, answer: 5 },
      { expr: 'x^2 - 1', point: 3, answer: 8 },
      { expr: '2x + 1', point: 2, answer: 5 },
      { expr: '3x - 2', point: 3, answer: 7 }
    ];

    const problem = problems[Math.floor(Math.random() * problems.length)];
    const correct = problem.answer;
    const wrong = MathHelper.generateWrongAnswers(correct.toString(), 3, 'limit');
    
    const options = [...wrong, correct.toString()].sort(() => Math.random() - 0.5);
    const latexOptions = options.map(opt => MathHelper.wrapLatex(opt));

    return {
      id: `calc_limit_${Math.random()}`,
      type: 'multiple_choice',
      question: `Evaluate the limit: \\(\\lim_{x \\to ${problem.point}} ${MathHelper.toLaTeX(problem.expr)}\\)`,
      options: latexOptions,
      correct: latexOptions.indexOf(MathHelper.wrapLatex(correct.toString())),
      xp: 4
    };
  },

  // Derivative multiple choice - basic
  derivativeBasicMC() {
    const functions = [
      { expr: 'x^2', deriv: '2x' },
      { expr: 'x^3', deriv: '3x^2' },
      { expr: 'x^4', deriv: '4x^3' },
      { expr: 'x^5', deriv: '5x^4' },
      { expr: 'x', deriv: '1' },
      { expr: '2x', deriv: '2' },
      { expr: '3x', deriv: '3' },
      { expr: '4x', deriv: '4' },
      { expr: '5x', deriv: '5' }
    ];

    const func = functions[Math.floor(Math.random() * functions.length)];
    const wrong = MathHelper.generateWrongAnswers(func.deriv, 3, 'derivative');
    
    const options = [...wrong, func.deriv].sort(() => Math.random() - 0.5);
    const latexOptions = options.map(opt => MathHelper.wrapLatex(opt));

    return {
      id: `calc_deriv_basic_${Math.random()}`,
      type: 'multiple_choice',
      question: `Find the derivative: \\(\\frac{d}{dx}(${MathHelper.toLaTeX(func.expr)})\\)`,
      options: latexOptions,
      correct: latexOptions.indexOf(MathHelper.wrapLatex(func.deriv)),
      xp: 4
    };
  },

  // Power rule multiple choice
  powerRuleMC() {
    const problems = [
      { expr: 'x^2', deriv: '2x' },
      { expr: 'x^3', deriv: '3x^2' },
      { expr: 'x^4', deriv: '4x^3' },
      { expr: 'x^5', deriv: '5x^4' }
    ];

    const prob = problems[Math.floor(Math.random() * problems.length)];
    const n = prob.expr.match(/x\^(\d+)/)[1];
    const wrong = ['n x^n', 'x^{n-1}', 'n x^{n}', `${n}x`, 'x^{n+1}'];
    
    const options = [...wrong.slice(0, 3), prob.deriv].sort(() => Math.random() - 0.5);
    const latexOptions = options.map(opt => MathHelper.wrapLatex(opt));

    return {
      id: `calc_power_${Math.random()}`,
      type: 'multiple_choice',
      question: `Power Rule: If \\(f(x) = x^${n}\\), then \\(f'(x) = ?\\)`,
      options: latexOptions,
      correct: latexOptions.indexOf(MathHelper.wrapLatex(prob.deriv)),
      xp: 5
    };
  },

  // Continuity multiple choice
  continuityMC() {
    const questions = [
      {
        q: 'A function f(x) is continuous at x = a if:',
        options: ['f(a) exists, lim_{x→a} f(x) exists, and they are equal', 'f(a) exists only', 'lim_{x→a} f(x) exists only', 'Both exist but are not equal'],
        correct: 0
      },
      {
        q: 'Which of these functions is continuous everywhere?',
        options: ['f(x) = x^2', 'f(x) = 1/x', 'f(x) = 1/(x-2)', 'f(x) = √x'],
        correct: 0
      },
      {
        q: 'If lim_{x→2^-} f(x) = 3 and lim_{x→2^+} f(x) = 3, then lim_{x→2} f(x) = ?',
        options: ['3', '2', 'Does not exist', '6'],
        correct: 0
      }
    ];

    const q = questions[Math.floor(Math.random() * questions.length)];

    return {
      id: `calc_continuity_${Math.random()}`,
      type: 'multiple_choice',
      question: q.q,
      options: q.options,
      correct: q.correct,
      xp: 5
    };
  },

  // Chain rule multiple choice
  chainRuleMC() {
    const optionsRaw = [
      "f'(g(x)) * g'(x)",
      "f'(x) * g'(x)",
      "f(x) * g(x)",
      "f'(x) + g'(x)"
    ];
    const latexOptions = optionsRaw.map(opt => MathHelper.wrapLatex(opt));

    return {
      id: `calc_chain_${Math.random()}`,
      type: 'multiple_choice',
      question: `Chain Rule: \\(\\frac{d}{dx}[f(g(x))] = ?\\)`,
      options: latexOptions,
      correct: 0,
      xp: 5
    };
  },

  // Product rule multiple choice
  productRuleMC() {
    const optionsRaw = [
      "f'(x)g(x) + f(x)g'(x)",
      "f'(x)g'(x)",
      "f(x)g(x)",
      "f'(x) + g'(x)"
    ];
    const latexOptions = optionsRaw.map(opt => MathHelper.wrapLatex(opt));

    return {
      id: `calc_product_${Math.random()}`,
      type: 'multiple_choice',
      question: `Product Rule: \\(\\frac{d}{dx}[f(x)g(x)] = ?\\)`,
      options: latexOptions,
      correct: 0,
      xp: 5
    };
  },

  // Quotient rule multiple choice
  quotientRuleMC() {
    const options = [
      "\\(\\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}\\)",
      "\\(\\frac{f'(x)g'(x)}{[g(x)]^2}\\)",
      "\\(\\frac{f(x)g'(x)}{g(x)}\\)",
      "\\(\\frac{f'(x)}{g'(x)}\\)"
    ];

    return {
      id: `calc_quotient_${Math.random()}`,
      type: 'multiple_choice',
      question: `Quotient Rule: \\(\\frac{d}{dx}[\\frac{f(x)}{g(x)}] = ?\\)`,
      options: options,
      correct: 0,
      xp: 5
    };
  },

  // Typing questions for derivatives
  derivativeTyping(count = 3, difficulty = 'basic') {
    const questions = [];
    
    let functions;
    if (difficulty === 'basic') {
      functions = [
        { expr: 'x^2', deriv: '2x' },
        { expr: 'x^3', deriv: '3x^2' },
        { expr: 'x', deriv: '1' },
        { expr: '2x', deriv: '2' },
        { expr: '3x', deriv: '3' },
        { expr: '5x', deriv: '5' }
      ];
    } else {
      functions = [
        { expr: 'x^4', deriv: '4x^3' },
        { expr: 'x^5', deriv: '5x^4' },
        { expr: 'x^2 + x', deriv: '2x + 1' },
        { expr: '2x + 1', deriv: '2' },
        { expr: 'x^3 + x^2', deriv: '3x^2 + 2x' }
      ];
    }

    for (let i = 0; i < count; i++) {
      const func = functions[Math.floor(Math.random() * functions.length)];

      questions.push({
        id: `calc_deriv_typing_${Math.random()}`,
        type: 'typing',
        question: `Find the derivative: \\(\\frac{d}{dx}(${MathHelper.toLaTeX(func.expr)}) = ?\\)`,
        correctAnswer: func.deriv,
        prompt: `Type your answer:`,
        xp: 5
      });
    }

    return questions;
  },

  // Typing questions for limits
  limitTyping(count = 3) {
    const questions = [];
    const problems = [
      { expr: 'x^2', point: 3, answer: 9 },
      { expr: 'x^3', point: 2, answer: 8 },
      { expr: '2x', point: 4, answer: 8 },
      { expr: 'x + 1', point: 5, answer: 6 },
      { expr: 'x^2 + 1', point: 2, answer: 5 },
      { expr: '3x - 2', point: 3, answer: 7 }
    ];

    for (let i = 0; i < count; i++) {
      const problem = problems[Math.floor(Math.random() * problems.length)];

      questions.push({
        id: `calc_limit_typing_${Math.random()}`,
        type: 'typing',
        question: `Evaluate: \\(\\lim_{x \\to ${problem.point}} ${MathHelper.toLaTeX(problem.expr)} = ?\\)`,
        correctAnswer: problem.answer.toString(),
        prompt: `Type your answer:`,
        xp: 4
      });
    }

    return questions;
  },

  // Integral typing questions
  integralTyping(count = 3, difficulty = 'basic') {
    const questions = [];
    
    let functions;
    if (difficulty === 'basic') {
      functions = [
        { expr: 'x', integral: 'x^2/2' },
        { expr: 'x^2', integral: 'x^3/3' },
        { expr: '2x', integral: 'x^2' },
        { expr: '3x', integral: '3x^2/2' }
      ];
    } else {
      functions = [
        { expr: 'x^3', integral: 'x^4/4' },
        { expr: 'x^4', integral: 'x^5/5' },
        { expr: 'x + 1', integral: 'x^2/2 + x' },
        { expr: '2x + 1', integral: 'x^2 + x' }
      ];
    }

    for (let i = 0; i < count; i++) {
      const func = functions[Math.floor(Math.random() * functions.length)];

      questions.push({
        id: `calc_int_typing_${Math.random()}`,
        type: 'typing',
        question: `Integrate: \\(\\int ${MathHelper.toLaTeX(func.expr)} dx = ?\\)`,
        correctAnswer: `${func.integral} + C`,
        prompt: `Type your answer (don't forget +C):`,
        xp: 5
      });
    }

    return questions;
  }
};

// =====================================================================
// ENHANCED LESSON TEMPLATES
// =====================================================================

const CalculusLessons = {
  // UNIT 1: LIMITS (5 lessons)
  
  limitsLesson1() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC()
    ];

    return {
      id: `calc_limits_1`,
      title: 'Limits: The Concept',
      icon: '📊',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  limitsLesson2() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      ...CalculusQuestionGenerator.limitTyping(3),
      CalculusQuestionGenerator.limitMC()
    ];

    return {
      id: `calc_limits_2`,
      title: 'Limits: By Substitution',
      icon: '📈',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  limitsLesson3() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      ...CalculusQuestionGenerator.limitTyping(4),
      CalculusQuestionGenerator.limitMC()
    ];

    return {
      id: `calc_limits_3`,
      title: 'Limits: Practice',
      icon: '🔍',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  limitsLesson4() {
    const questions = [
      CalculusQuestionGenerator.continuityMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.continuityMC(),
      CalculusQuestionGenerator.limitMC(),
      ...CalculusQuestionGenerator.limitTyping(3)
    ];

    return {
      id: `calc_limits_4`,
      title: 'Continuity',
      icon: '✅',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  limitsLesson5() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.continuityMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.continuityMC(),
      ...CalculusQuestionGenerator.limitTyping(3),
      CalculusQuestionGenerator.limitMC()
    ];

    return {
      id: `calc_limits_5`,
      title: 'Limits & Continuity Review',
      icon: '🎯',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // UNIT 2: DERIVATIVES (6 lessons)
  
  derivativesLesson1() {
    const questions = [
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.derivativeBasicMC()
    ];

    return {
      id: `calc_deriv_1`,
      title: 'Derivatives: Introduction',
      icon: '📈',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  derivativesLesson2() {
    const questions = [
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      ...CalculusQuestionGenerator.derivativeTyping(3, 'basic'),
      CalculusQuestionGenerator.derivativeBasicMC()
    ];

    return {
      id: `calc_deriv_2`,
      title: 'Power Rule',
      icon: '🔋',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  derivativesLesson3() {
    const questions = [
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      ...CalculusQuestionGenerator.derivativeTyping(4, 'basic'),
      CalculusQuestionGenerator.powerRuleMC()
    ];

    return {
      id: `calc_deriv_3`,
      title: 'Derivatives Practice',
      icon: '📝',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  derivativesLesson4() {
    const questions = [
      CalculusQuestionGenerator.productRuleMC(),
      CalculusQuestionGenerator.productRuleMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC()
    ];

    return {
      id: `calc_deriv_4`,
      title: 'Product Rule',
      icon: '📦',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  derivativesLesson5() {
    const questions = [
      CalculusQuestionGenerator.quotientRuleMC(),
      CalculusQuestionGenerator.quotientRuleMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.derivativeBasicMC()
    ];

    return {
      id: `calc_deriv_5`,
      title: 'Quotient Rule',
      icon: '➗',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  derivativesLesson6() {
    const questions = [
      CalculusQuestionGenerator.chainRuleMC(),
      CalculusQuestionGenerator.chainRuleMC(),
      CalculusQuestionGenerator.chainRuleMC(),
      ...CalculusQuestionGenerator.derivativeTyping(3, 'intermediate'),
      CalculusQuestionGenerator.productRuleMC()
    ];

    return {
      id: `calc_deriv_6`,
      title: 'Chain Rule',
      icon: '⛓️',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // UNIT 3: INTEGRATION (5 lessons)
  
  integrationLesson1() {
    const questions = [
      ...CalculusQuestionGenerator.integralTyping(3, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(3, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(3, 'basic')
    ];

    return {
      id: `calc_int_1`,
      title: 'Integration: Introduction',
      icon: '∫',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  integrationLesson2() {
    const questions = [
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(3, 'basic')
    ];

    return {
      id: `calc_int_2`,
      title: 'Integration: Power Rule',
      icon: '🎯',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  integrationLesson3() {
    const questions = [
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(3, 'basic')
    ];

    return {
      id: `calc_int_3`,
      title: 'Integration: Practice',
      icon: '💪',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  integrationLesson4() {
    const questions = [
      ...CalculusQuestionGenerator.integralTyping(3, 'intermediate'),
      ...CalculusQuestionGenerator.integralTyping(3, 'intermediate'),
      ...CalculusQuestionGenerator.integralTyping(3, 'intermediate'),
      ...CalculusQuestionGenerator.integralTyping(3, 'intermediate')
    ];

    return {
      id: `calc_int_4`,
      title: 'Integration: Advanced',
      icon: '🚀',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  integrationLesson5() {
    const questions = [
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(4, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(3, 'intermediate')
    ];

    return {
      id: `calc_int_5`,
      title: 'Integration: Review',
      icon: '🔄',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // UNIT 4: COMPREHENSIVE REVIEW (5 lessons)
  
  reviewLesson1() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.integralTyping(2, 'basic'),
      CalculusQuestionGenerator.limitMC(),
      ...CalculusQuestionGenerator.derivativeTyping(2, 'basic')
    ];

    return {
      id: `calc_review_1`,
      title: 'Calculus Review I',
      icon: '📚',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  reviewLesson2() {
    const questions = [
      CalculusQuestionGenerator.continuityMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.integralTyping(3, 'basic'),
      CalculusQuestionGenerator.productRuleMC(),
      ...CalculusQuestionGenerator.limitTyping(2)
    ];

    return {
      id: `calc_review_2`,
      title: 'Calculus Review II',
      icon: '📖',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  reviewLesson3() {
    const questions = [
      CalculusQuestionGenerator.chainRuleMC(),
      CalculusQuestionGenerator.quotientRuleMC(),
      ...CalculusQuestionGenerator.derivativeTyping(3, 'intermediate'),
      CalculusQuestionGenerator.integralTyping(3, 'intermediate'),
      CalculusQuestionGenerator.continuityMC()
    ];

    return {
      id: `calc_review_3`,
      title: 'Calculus Review III',
      icon: '📝',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  reviewLesson4() {
    const questions = [
      ...CalculusQuestionGenerator.multipleChoice(5, 'advanced'),
      ...CalculusQuestionGenerator.derivativeTyping(3, 'basic'),
      ...CalculusQuestionGenerator.integralTyping(2, 'basic')
    ];

    return {
      id: `calc_review_4`,
      title: 'Comprehensive Review',
      icon: '🎓',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  reviewLesson5() {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.derivativeBasicMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.chainRuleMC(),
      CalculusQuestionGenerator.integralTyping(3, 'basic'),
      ...CalculusQuestionGenerator.limitTyping(2),
      ...CalculusQuestionGenerator.derivativeTyping(3, 'basic'),
      CalculusQuestionGenerator.continuityMC()
    ];

    return {
      id: `calc_review_5`,
      title: 'Final Mastery',
      icon: '🏆',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Backward compatibility methods (map old calls to new lessons)
  limitsLesson(lessonNum) {
    const lessons = [
      this.limitsLesson1,
      this.limitsLesson2,
      this.limitsLesson3,
      this.limitsLesson4,
      this.limitsLesson5
    ];
    return lessons[lessonNum - 1]?.call(this) || this.limitsLesson1();
  },

  derivativesLesson(lessonNum) {
    const lessons = [
      this.derivativesLesson1,
      this.derivativesLesson2,
      this.derivativesLesson3,
      this.derivativesLesson4,
      this.derivativesLesson5,
      this.derivativesLesson6
    ];
    return lessons[lessonNum - 1]?.call(this) || this.derivativesLesson1();
  },

  integrationLesson(lessonNum) {
    const lessons = [
      this.integrationLesson1,
      this.integrationLesson2,
      this.integrationLesson3,
      this.integrationLesson4,
      this.integrationLesson5
    ];
    return lessons[lessonNum - 1]?.call(this) || this.integrationLesson1();
  },

  reviewLesson(lessonNum) {
    const lessons = [
      this.reviewLesson1,
      this.reviewLesson2,
      this.reviewLesson3,
      this.reviewLesson4,
      this.reviewLesson5
    ];
    return lessons[lessonNum - 1]?.call(this) || this.reviewLesson1();
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusLessons, CalculusQuestionGenerator };
}