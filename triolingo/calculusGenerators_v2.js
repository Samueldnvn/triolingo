// calculusGenerators_v2.js
// Calculus question generators using standard Triolingo question types
// This version reuses existing infrastructure instead of creating custom types

// =====================================================================
// MATHJAX HELPER FUNCTIONS
// =====================================================================

const MathHelper = {
  // Calculate limit by substitution
  evaluateLimit(expr, point) {
    try {
      // Simple evaluation for common forms
      const tokens = {
        'x^2': point * point,
        'x^3': point * point * point,
        'x': point,
        '2x': 2 * point,
        '3x': 3 * point,
        '5x': 5 * point,
        'x + 1': point + 1,
        'x + 2': point + 2,
        'x - 1': point - 1,
        '2': 2
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
      'x': '1',
      '2x': '2',
      '3x': '3',
      '5x': '5',
      '2': '0',
      'constant': '0'
    };
    return patterns[expr] || 'derivative';
  },

  // Generate wrong answers
  generateWrongAnswers(correct, count = 3, type = 'basic') {
    const wrong = new Set();
    const correctNum = parseFloat(correct) || 0;
    
    while (wrong.size < count) {
      let answer;
      if (type === 'limit') {
        const offsets = [1, -1, 2, -2, correctNum * 2, 0];
        answer = (correctNum + offsets[Math.floor(Math.random() * offsets.length)]).toString();
      } else if (type === 'derivative') {
        const wrongDerivatives = ['x^2', '2x^2', 'x', `${correct}x`, '1'];
        answer = wrongDerivatives[Math.floor(Math.random() * wrongDerivatives.length)];
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
      .replace(/lim_{x->(\d+)}/g, '\\lim_{x \\to $1}')
      .replace(/dx/g, 'dx')
      .replace(/int/g, '\\int');
  }
};

// =====================================================================
// CALCULUS QUESTION GENERATORS
// =====================================================================

const CalculusQuestionGenerator = {
  // Generate multiple choice questions with math
  multipleChoice(count = 5) {
    const questions = [];
    const questionTypes = [
      this.limitMC,
      this.derivativeMC,
      this.powerRuleMC,
      this.chainRuleMC
    ];

    for (let i = 0; i < count; i++) {
      const gen = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      questions.push(gen.call(this));
    }

    return questions;
  },

  // Limit multiple choice
  limitMC() {
    const problems = [
      { expr: 'x^2', point: 3 },
      { expr: 'x^3', point: 2 },
      { expr: '2x', point: 4 },
      { expr: 'x + 1', point: 5 }
    ];

    const problem = problems[Math.floor(Math.random() * problems.length)];
    const correct = MathHelper.evaluateLimit(problem.expr, problem.point);
    const wrong = MathHelper.generateWrongAnswers(correct.toString(), 3, 'limit');
    
    const options = [...wrong, correct.toString()].sort(() => Math.random() - 0.5);

    return {
      id: `calc_limit_${Math.random()}`,
      type: 'multiple_choice',
      question: `Evaluate the limit: \\(\\lim_{x \\to ${problem.point}} ${MathHelper.toLaTeX(problem.expr)}\\)`,
      options: options,
      correct: options.indexOf(correct.toString()),
      xp: 5
    };
  },

  // Derivative multiple choice
  derivativeMC() {
    const functions = [
      { expr: 'x^2', deriv: '2x' },
      { expr: 'x^3', deriv: '3x^2' },
      { expr: '2x', deriv: '2' },
      { expr: '5x', deriv: '5' }
    ];

    const func = functions[Math.floor(Math.random() * functions.length)];
    const wrong = MathHelper.generateWrongAnswers(func.deriv, 3, 'derivative');
    
    const options = [...wrong, func.deriv].sort(() => Math.random() - 0.5);

    return {
      id: `calc_deriv_${Math.random()}`,
      type: 'multiple_choice',
      question: `Find the derivative: \\(\\frac{d}{dx}(${MathHelper.toLaTeX(func.expr)})\\)`,
      options: options,
      correct: options.indexOf(func.deriv),
      xp: 5
    };
  },

  // Power rule multiple choice
  powerRuleMC() {
    const problems = [
      { expr: 'x^2', deriv: '2x^1' },
      { expr: 'x^3', deriv: '3x^2' },
      { expr: 'x^4', deriv: '4x^3' }
    ];

    const prob = problems[Math.floor(Math.random() * problems.length)];
    const wrong = ['n x^{n-1}', 'n x^n', 'x^{n+1}'];
    
    const options = [...wrong, prob.deriv].sort(() => Math.random() - 0.5);

    return {
      id: `calc_power_${Math.random()}`,
      type: 'multiple_choice',
      question: `Power Rule: \\(\\frac{d}{dx}(x^n) = ?\\)`,
      options: options,
      correct: options.indexOf(prob.deriv),
      xp: 5
    };
  },

  // Chain rule multiple choice
  chainRuleMC() {
    const options = [
      "f'(g(x)) * g'(x)",
      "f'(x) * g'(x)",
      "f(x) * g(x)",
      "f'(x) + g'(x)"
    ];

    return {
      id: `calc_chain_${Math.random()}`,
      type: 'multiple_choice',
      question: `Chain Rule: \\(\\frac{d}{dx}[f(g(x))] = ?\\)`,
      options: options,
      correct: 0,
      xp: 5
    };
  },

  // Typing questions for math
  typing(count = 3) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const functions = [
        { expr: 'x^2', deriv: '2x' },
        { expr: 'x^3', deriv: '3x^2' },
        { expr: '2x', deriv: '2' },
        { expr: '5x', deriv: '5' }
      ];

      const func = functions[Math.floor(Math.random() * functions.length)];

      questions.push({
        id: `calc_typing_${Math.random()}`,
        type: 'typing',
        question: `Find the derivative: \\(\\frac{d}{dx}(${MathHelper.toLaTeX(func.expr)})\\) = ?`,
        correctAnswer: func.deriv,
        prompt: `Type your answer (e.g., "2x"):`,
        xp: 5
      });
    }

    return questions;
  },

  // Integral typing questions
  integralTyping(count = 3) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const functions = [
        { expr: 'x', integral: 'x^2/2 + C' },
        { expr: 'x^2', integral: 'x^3/3 + C' },
        { expr: '2x', integral: 'x^2 + C' }
      ];

      const func = functions[Math.floor(Math.random() * functions.length)];

      questions.push({
        id: `calc_int_${Math.random()}`,
        type: 'typing',
        question: `Integrate: \\(\\int ${MathHelper.toLaTeX(func.expr)} dx = ?\\)`,
        correctAnswer: func.integral,
        prompt: `Type your answer (remember +C):`,
        xp: 5
      });
    }

    return questions;
  }
};

// =====================================================================
// LESSON TEMPLATES (using standard types)
// =====================================================================

const CalculusLessons = {
  // Limit lessons
  limitsLesson(lessonNum) {
    const questions = [
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC(),
      CalculusQuestionGenerator.limitMC()
    ];

    return {
      id: `calc_1_${lessonNum}`,
      title: lessonNum === 1 ? 'Limits Introduction' : 'Limits Practice',
      icon: lessonNum === 1 ? '📊' : '📈',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Derivative lessons
  derivativesLesson(lessonNum) {
    const questions = [
      CalculusQuestionGenerator.derivativeMC(),
      CalculusQuestionGenerator.derivativeMC(),
      CalculusQuestionGenerator.powerRuleMC(),
      CalculusQuestionGenerator.chainRuleMC(),
      CalculusQuestionGenerator.derivativeMC(),
      CalculusQuestionGenerator.typing(2)
    ];

    const titleMap = {
      3: 'Derivatives & Power Rule',
      4: 'Power Rule Practice',
      5: 'Chain Rule'
    };
    const iconMap = {
      3: '📈',
      4: '📉',
      5: '📏'
    };

    return {
      id: `calc_2_${lessonNum}`,
      title: titleMap[lessonNum] || 'Derivatives',
      icon: iconMap[lessonNum] || '📈',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Integration lessons
  integrationLesson(lessonNum) {
    const questions = [
      CalculusQuestionGenerator.integralTyping(3),
      CalculusQuestionGenerator.integralTyping(3),
      CalculusQuestionGenerator.integralTyping(3)
    ];

    const titleMap = {
      6: 'Integration Introduction',
      7: 'Integration Practice',
      8: 'More Integration'
    };
    const iconMap = {
      6: '∫',
      7: '🎯',
      8: '➕'
    };

    return {
      id: `calc_3_${lessonNum}`,
      title: titleMap[lessonNum] || 'Integration',
      icon: iconMap[lessonNum] || '∫',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Review lessons
  reviewLesson(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.multipleChoice(3),
      ...CalculusQuestionGenerator.typing(2),
      ...CalculusQuestionGenerator.integralTyping(2)
    ];

    const titleMap = {
      9: 'Calculus Review',
      10: 'Comprehensive Review',
      11: 'Final Review'
    };
    const iconMap = {
      9: '🔁',
      10: '📝',
      11: '🎓'
    };

    return {
      id: `calc_4_${lessonNum}`,
      title: titleMap[lessonNum] || 'Review',
      icon: iconMap[lessonNum] || '🔁',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusLessons, CalculusQuestionGenerator };
}