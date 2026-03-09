// Calculus Lesson Generator
// Creates calculus-specific questions, concept slides, and math exercises

const CalculusQuestionGenerator = {
  // =================== QUESTION TYPE GENERATORS ===================

  // Multiple Choice: Evaluate a limit
  limitMultipleChoice(concept, count = 2) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const types = [
        { expr: 'x^2', point: 3, answer: 9 },
        { expr: 'x^3', point: 2, answer: 8 },
        { expr: '2x', point: 4, answer: 8 },
        { expr: 'x + 3', point: 2, answer: 5 },
        { expr: 'x^2 + 2x', point: 1, answer: 3 }
      ];

      const type = types[Math.floor(Math.random() * types.length)];
      const result = calculateLimit(type.expr, type.point);

      const question = {
        id: `calc_limit_mc_${i}_${Math.random()}`,
        type: 'calculus_mc',
        notation: `\\lim_{x \\to ${type.point}} ${type.expr.replace('^2', '^2').replace('^3', '^3')}`,
        question: `Evaluate the limit:`,
        question_math: `\\lim_{x \\to ${type.point}} ${type.expr.replace('^2', '^2').replace('^3', '^3')}`,
        options: generateCalculusOptions(result.toString(), 'limit_wrong'),
        correct: 0,
        correctValue: result,
        explanation: `Substitute x = ${type.point} into ${type.expr}: ${type.expr} = ${result}`,
        xp: 3
      };

      // Find which option is correct
      question.correct = question.options.indexOf(result.toString());

      questions.push(question);
    }

    return questions;
  },

  // Math Input: Calculate a derivative
  derivativeInput(concept, count = 2) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const functions = [
        { expr: 'x^2', derivative: '2x' },
        { expr: 'x^3', derivative: '3x^2' },
        { expr: '2x', derivative: '2' },
        { expr: 'x^4', derivative: '4x^3' },
        { expr: '3x', derivative: '3' },
        { expr: '5x', derivative: '5' }
      ];

      const func = functions[Math.floor(Math.random() * functions.length)];

      const question = {
        id: `calc_deriv_input_${i}_${Math.random()}`,
        type: 'calculus_input',
        question: `Find the derivative:`,
        question_math: `\\frac{d}{dx}(${func.expr})`,
        prompt: `Enter your answer (e.g., "2x"):`,
        correctAnswer: func.derivative,
        alternatives: [func.derivative.replace('x*', ''), func.derivative.replace('^2', '²')],
        xp: 4,
        unit: 'derivatives'
      };

      questions.push(question);
    }

    return questions;
  },

  // Multiple Choice: Power rule
  powerRuleMultipleChoice(concept, count = 2) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const n = 2 + Math.floor(Math.random() * 4); // 2, 3, 4, 5

      const question = {
        id: `calc_power_mc_${i}_${Math.random()}`,
        type: 'calculus_mc',
        question: `Power rule practice:`,
        question_math: `\\frac{d}{dx}(x^${n})`,
        options: [
          `${n}x^${n-1}`,
          `${n-1}x^${n}`,
          `x^${n-1}`,
          `${n}x^${n}`
        ],
        correct: 0,
        explanation: `Using the power rule: \\frac{d}{dx}(x^n) = nx^{n-1}, so \\frac{d}{dx}(x^${n}) = ${n}x^${n-1}`,
        concept: 'Power Rule',
        xp: 3
      };

      // Shuffle options
      question.options = question.options.sort(() => Math.random() - 0.5);
      question.correct = question.options.indexOf(`${n}x^${n-1}`);

      questions.push(question);
    }

    return questions;
  },

  // Multiple Choice: Chain rule
  chainRuleMultipleChoice(concept, count = 2) {
    const questions = [];

    const chainProblems = [
      {
        outer: 'x^2',
        inner: 'sin(x)',
        derivative: '2x · cos(x^2)',
        notation: `\\frac{d}{dx}[\\sin(x^2)]`
      },
      {
        outer: 'x^3',
        inner: 'cos(x)',
        derivative: '3x^2 · (-sin(x^3))',
        notation: `\\frac{d}{dx}[\\cos(x^3)]`
      }
    ];

    for (let i = 0; i < count; i++) {
      const problem = chainProblems[i % chainProblems.length];

      const question = {
        id: `calc_chain_mc_${i}_${Math.random()}`,
        type: 'calculus_mc',
        question: `Chain rule:`,
        question_math: problem.notation,
        options: [
          problem.derivative,
          problem.derivative.replace('·', '+'),
          problem.derivative.replace('·', '-'),
          problem.derivative.replace(/([-+])\s*\S+$/, '')
        ],
        correct: 0,
        explanation: `Chain rule: f'(g(x)) · g'(x)`,
        concept: 'Chain Rule',
        xp: 4
      };

      question.options = question.options.sort(() => Math.random() - 0.5);
      question.correct = question.options.indexOf(problem.derivative);

      questions.push(question);
    }

    return questions;
  },

  // Concept Introduction Slide
  conceptSlide(conceptData) {
    return {
      id: `calc_concept_${Math.random()}`,
      type: 'calculus_concept',
      title: conceptData.term,
      notation: conceptData.notation,
      definition: conceptData.definition,
      example: conceptData.example,
      unit: conceptData.unit,
      isSlide: true,
      xp: 5
    };
  },

  // Math Input: Integration
  integralInput(concept, count = 2) {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const expressions = [
        { expr: 'x', integral: 'x²/2 + C', power: 1 },
        { expr: 'x^2', integral: 'x³/3 + C', power: 2 },
        { expr: 'x^3', integral: 'x⁴/4 + C', power: 3 },
        { expr: '2x', integral: 'x² + C', power: 1 },
        { expr: 'sin(x)', integral: '-cos(x) + C', power: 0 },
        { expr: 'cos(x)', integral: 'sin(x) + C', power: 0 }
      ];

      const expr = expressions[Math.floor(Math.random() * expressions.length)];

      const question = {
        id: `calc_int_input_${i}_${Math.random()}`,
        type: 'calculus_input',
        question: `Find the indefinite integral:`,
        question_math: `\\int ${expr.expr} dx`,
        prompt: `Enter your answer (format: "x²/2 + C"):`,
        correctAnswer: expr.integral,
        alternatives: [
          expr.integral.replace('²', '^2').replace('³', '^3'),
          expr.integral.replace('⁴', '^4'),
          expr.integral.replace(' + C', '+C')
        ],
        explanation: `Using the power rule: ∫x^n dx = x^{n+1}/(n+1) + C`,
        xp: 5,
        unit: 'integration'
      };

      questions.push(question);
    }

    return questions;
  },

  // =================== LESSON TEMPLATES ===================

  // Limits Lesson
  limitsLesson(lessonNum) {
    const questions = [
      // Concept slide first
      this.conceptSlide({
        term: 'Limits',
        notation: '\\lim_{x \\to a} f(x)',
        definition: 'The value that a function approaches as the input approaches a certain value',
        example: '\\lim_{x \\to 2} x^2 = 4',
        unit: 'limits'
      }),
      // Multiple choice practice
      ...this.limitMultipleChoice('limits', 4),
      // More limit evaluation
      ...this.limitMultipleChoice('limits', 3)
    ];

    return {
      id: `calc_1_${lessonNum}`,
      title: lessonNum === 1 ? 'Limits Introduction' : 'Limits Practice',
      icon: '📊',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Derivatives Lesson
  derivativesLesson(lessonNum) {
    const questions = [
      // Concept: What is a derivative
      this.conceptSlide({
        term: 'Derivative',
        notation: "f'(x) = \\frac{df}{dx}",
        definition: 'The rate of change of a function at a point',
        example: "If f(x) = x^2, then f'(x) = 2x",
        unit: 'derivatives'
      }),
      // Concept: Power rule
      this.conceptSlide({
        term: 'Power Rule',
        notation: "\\frac{d}{dx}(x^n) = nx^{n-1}",
        definition: 'Rule for differentiating power functions',
        example: "\\frac{d}{dx}(x^3) = 3x^2",
        unit: 'derivatives'
      }),
      // Power rule practice
      ...this.powerRuleMultipleChoice('power', 4),
      // Derivative calculations
      ...this.derivativeInput('derivatives', 3)
    ];

    const iconMap = {
      3: '📈',
      4: '📉',
      5: '📏'
    };

    return {
      id: `calc_2_${lessonNum}`,
      title: lessonNum === 3 ? 'Derivatives & Power Rule' :
              lessonNum === 4 ? 'Power Rule Practice' : 'Chain Rule',
      icon: iconMap[lessonNum] || '📈',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Chain Rule Lesson
  chainRuleLesson(lessonNum) {
    const questions = [
      // Concept slide
      this.conceptSlide({
        term: 'Chain Rule',
        notation: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
        definition: 'Rule for differentiating composite functions',
        example: "\\frac{d}{dx}(\\sin(x^2)) = 2x \\cdot \\cos(x^2)",
        unit: 'derivatives'
      }),
      // Chain rule practice
      ...this.chainRuleMultipleChoice('chain', 4),
      // More complex derivatives
      ...this.derivativeInput('derivatives', 2)
    ];

    return {
      id: `calc_2_${lessonNum}`,
      title: 'Chain Rule',
      icon: '⛓️',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Integration Lesson
  integrationLesson(lessonNum) {
    const questions = [
      // Concept: Indefinite integrals
      this.conceptSlide({
        term: 'Indefinite Integral',
        notation: '\\int f(x)dx',
        definition: 'The antiderivative of a function',
        example: '\\int x^2 dx = \\frac{x^3}{3} + C',
        unit: 'integration'
      }),
      // Concept: Power rule for integration
      this.conceptSlide({
        term: 'Power Rule for Integration',
        notation: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
        definition: 'Rule for integrating power functions',
        example: '\\int x^3 dx = \\frac{x^4}{4} + C',
        unit: 'integration'
      }),
      // Integration practice
      ...this.integralInput('integration', 5)
    ];

    const iconMap = {
      6: '∫',
      7: '🎯'
    };

    return {
      id: `calc_3_${lessonNum}`,
      title: lessonNum === 6 ? 'Introduction to Integration' : 'Integration Practice',
      icon: iconMap[lessonNum] || '∫',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  },

  // Review Lesson
  reviewLesson(lessonNum) {
    const questions = [
      // Mix of all question types
      ...this.limitMultipleChoice('limits', 2),
      ...this.powerRuleMultipleChoice('power', 2),
      ...this.chainRuleMultipleChoice('chain', 2),
      ...this.integralInput('integration', 3),
      ...this.derivativeInput('derivatives', 2)
    ];

    const iconMap = {
      8: '🔁',
      9: '🎓'
    };

    return {
      id: `calc_4_${lessonNum}`,
      title: lessonNum === 8 ? 'Calculus Review' : 'Final Review',
      icon: iconMap[lessonNum] || '🔄',
      xp: questions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: questions
    };
  }
};

// Helper functions from calculusVocab.js
function calculateLimit(expression, value) {
  const expressions = {
    'x^2': value * value,
    'x^3': value * value * value,
    '2x': 2 * value,
    'x + 3': value + 3,
    'x^2 + 2x': (value * value) + (2 * value)
  };
  return expressions[expression] || 0;
}

function generateCalculusOptions(correctAnswer, difficulty = 'medium') {
  const options = [correctAnswer, correctAnswer, correctAnswer]; // Start with correct for shuffle

  // Generate wrong answers
  for (let i = 0; i < 3; i++) {
    const offset = (Math.random() * 2 - 1).toFixed(2);
    const wrongOption = (parseFloat(correctAnswer) + parseFloat(offset)).toFixed(2);
    if (!isNaN(parseFloat(correctAnswer)) && !options.includes(wrongOption)) {
      options.push(wrongOption);
    }
  }

  // Remove duplicates and shuffle
  return [...new Set(options)].sort(() => Math.random() - 0.5).slice(0, 4);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusQuestionGenerator, calculateLimit, generateCalculusOptions };
}