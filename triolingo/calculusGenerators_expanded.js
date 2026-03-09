// calculusGenerators_expanded.js
// Expanded Calculus course with more lessons, more questions, typing-focused, fuzzy matching, and graphs

// =====================================================================
// GRAPH ASSETS - Reference to generated matplotlib/seaborn graphs
// =====================================================================
const GRAPHS = {
  // Unit 1: Limits
  limit_approach: 'graphs/limit_approach.png',
  limit_piecewise: 'graphs/limit_piecewise.png',
  limit_hole: 'graphs/limit_hole.png',
  
  // Unit 2: Derivatives
  derivative_slope: 'graphs/derivative_slope.png',
  derivative_tangent: 'graphs/derivative_tangent.png',
  power_rule: 'graphs/power_rule.png',
  
  // Unit 3: Integration
  integral_area: 'graphs/integral_area.png',
  integral_antiderivative: 'graphs/integral_antiderivative.png',
  integral_accumulation: 'graphs/integral_accumulation.png',
  
  // Unit 4: Chain Rule & Advanced
  chain_rule_composite: 'graphs/chain_rule_composite.png',
  product_rule: 'graphs/product_rule.png',
  
  // Unit 5: Applications
  optimization: 'graphs/optimization.png',
  related_rates: 'graphs/related_rates.png',
  curve_sketching: 'graphs/curve_sketching.png',
  
  // Formula references
  formula_integrals: 'graphs/formula_integrals.png',
  formula_derivatives: 'graphs/formula_derivatives.png'
};

// =====================================================================
// FUZZY ANSWER MATCHING
// =====================================================================
const AnswerMatcher = {
  // Check if answer is close enough to correct
  isClose(userAnswer, correctAnswer, tolerance = 0.1) {
    const userNum = parseFloat(userAnswer);
    const correctNum = parseFloat(correctAnswer);
    
    if (isNaN(userNum) || isNaN(correctNum)) {
      // If not numbers, do string matching
      return this.stringMatch(userAnswer, correctAnswer);
    }
    
    // Check if within tolerance
    const diff = Math.abs(userNum - correctNum);
    return diff <= tolerance;
  },
  
  // String matching with some flexibility
  stringMatch(userAnswer, correctAnswer) {
    const normalize = (str) => str
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('²', '^2')
      .replace('³', '^3')
      .replace('*', '')
      .replace(/\+/g, 'p')
      .replace(/-/g, 'm');
    
    return normalize(userAnswer) === normalize(correctAnswer) ||
           userAnswer.includes(correctAnswer) ||
           correctAnswer.includes(userAnswer);
  },
  
  // Check for derivative form variations
  matchesDerivative(userAnswer, correctDerivative) {
    // Accept multiple forms: 2x, 2*x, x*2, 2x^1
    const variants = [
      correctDerivative,
      correctDerivative.replace('*', ''),
      correctDerivative.replace('^1', ''),
      correctDerivative.replace(/\*x/g, 'x*')
    ];
    
    return variants.some(variant => AnswerMatcher.stringMatch(userAnswer, variant));
  },
  
  // Check for integral form variations
  matchesIntegral(userAnswer, correctIntegral) {
    // Accept variations: x^2/2 + C, x²/2+C, (1/2)x² + C
    const userNoSpace = userAnswer.replace(/\s+/g, '');
    const correctNoSpace = correctIntegral.replace(/\s+/g, '');
    
    return AnswerMatcher.stringMatch(userNoSpace, correctNoSpace) ||
           (userNoSpace.includes('+c') && correctNoSpace.includes('+c'));
  },
  
  // Get detailed feedback
  getFeedback(userAnswer, correctAnswer, questionType) {
    if (this.isClose(userAnswer, correctAnswer)) {
      return { correct: true, message: 'Correct!' };
    }
    
    let hint = `The correct answer is: ${correctAnswer}`;
    
    if (questionType === 'derivative') {
      if (userAnswer.includes('x') && !correctAnswer.includes('x')) {
        hint = 'Remember: the derivative of a constant is 0';
      }
    } else if (questionType === 'integral') {
      if (!userAnswer.match(/[+][cC]/)) {
        hint = "Don't forget the +C for indefinite integrals";
      }
    }
    
    return { correct: false, message: hint, correctAnswer };
  }
};

// =====================================================================
// MATH HELPER FUNCTIONS
// =====================================================================
const MathHelper = {
  evaluateLimit(expr, point) {
    const patterns = {
      'x^2': point * point,
      'x^3': point * point * point,
      'x^4': point * point * point * point,
      'x': point,
      '2x': 2 * point,
      '3x': 3 * point,
      '5x': 5 * point,
      'x+1': point + 1,
      'x-1': point - 1,
      '2': 2
    };
    
    for (const [pattern, result] of Object.entries(patterns)) {
      if (expr.includes(pattern)) return result;
    }
    
    try {
      return eval(expr.replace(/x/g, point).replace(/\^/g, '**'));
    } catch { return 0; }
  },
  
  derivative(expr) {
    const derivatives = {
      'x^2': '2x',
      'x^3': '3x^2',
      'x^4': '4x^3',
      'x': '1',
      '2x': '2',
      '3x': '3',
      '5x': '5',
      'x^2 + 1': '2x',
      'x^3 - 3x': '3x^2 - 3',
      'constant': '0'
    };
    
    return derivatives[expr] || 'derivative';
  },
  
  integrate(expr) {
    const integrals = {
      'x': 'x^2/2 + C',
      'x^2': 'x^3/3 + C',
      'x^3': 'x^4/4 + C',
      '2x': 'x^2 + C',
      '3x': '1.5x^2 + C',
      '1': 'x + C',
      'constant': 'Cx + C'
    };
    
    return integrals[expr] || 'integral + C';
  },
  
  toLaTeX(expr) {
    return expr
      .replace(/x\^(\d+)/g, 'x^{$1}')
      .replace(/\+/g, ' + ')
      .replace(/-/g, ' - ')
      .replace(/(\d)(x)/g, '$1$2');
  }
};

// =====================================================================
// EXPANDED CALCULUS QUESTION GENERATORS
// =====================================================================
const CalculusQuestionGenerator = {
  // Generate typing questions with graphs
  typingWithGraph(graphFile, question, correctAnswer, questionType = 'general') {
    const questionId = `${questionType}_${String(Math.random()).slice(2)}`;
    
    return {
      id: questionId,
      type: 'typing',
      question: question,
      graph: graphFile,
      correctAnswer: correctAnswer,
      questionType: questionType,
      prompt: 'Type your answer:',
      xp: 6,
      checker: AnswerMatcher
    };
  },
  
  // Graph-based limit questions
  limitGraphQuestions(count = 5) {
    const questions = [];
    const graphs = ['limit_approach', 'limit_piecewise', 'limit_hole'];
    
    for (let i = 0; i < count; i++) {
      const graph = graphs[Math.floor(Math.random() * graphs.length)];
      const graphFile = GRAPHS[graph];
      
      if (graph === 'limit_approach') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Using the graph, evaluate \\(\\lim_{x \\to 2} x^2\\):',
          '4',
          'limit'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'What is \\(\\lim_{x \\to 0} x^2\\)?',
          '0',
          'limit'
        ));
      } else if (graph === 'limit_piecewise') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Evaluate \\(\\lim_{x \\to 0} f(x)\\) using the piecewise function graph:',
          '1',
          'limit'
        ));
      } else if (graph === 'limit_hole') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'What is the limit \\(\\lim_{x \\to 1} \\frac{x^2-1}{x-1}\\)?',
          '2',
          'limit'
        ));
      }
    }
    
    return questions;
  },
  
  // Derivative questions with graphs
  derivativeGraphQuestions(count = 8) {
    const questions = [];
    const graphs = ['derivative_slope', 'derivative_tangent', 'power_rule'];
    
    for (let i = 0; i < count; i++) {
      const graph = graphs[i % graphs.length];
      const graphFile = GRAPHS[graph];
      
      if (graph === 'derivative_slope') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Using the graph, what is f(1)?',
          '1',
          'derivative'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'What is the derivative at x=1 shown in the graph?',
          '2',
          'derivative'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Find f(2) from the graph:',
          '4',
          'derivative'
        ));
      } else if (graph === 'derivative_tangent') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'What is the slope of the tangent line at x=1?',
          '2',
          'derivative'
        ));
      } else if (graph === 'power_rule') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Using the power rule, what is d/dx(x^2)?',
          '2x',
          'derivative'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Find d/dx(x^3):',
          '3x^2',
          'derivative'
        ));
      }
    }
    
    // Additional derivative calculations without graphs
    const derivProblems = [
      { expr: 'x^4', answer: '4x^3' },
      { expr: '5x', answer: '5' },
      { expr: 'x^2 + 2x', answer: '2x + 2' },
      { expr: '3x^2 - x', answer: '6x - 1' }
    ];
    
    derivProblems.forEach(prob => {
      questions.push({
        id: `calc_deriv_${Math.random()}`,
        type: 'typing',
        question: `Find the derivative: \\(\\frac{d}{dx}(${MathHelper.toLaTeX(prob.expr)})\\)`,
        correctAnswer: prob.answer,
        questionType: 'derivative',
        prompt: 'Type your derivative:',
        xp: 4,
        checker: AnswerMatcher
      });
    });
    
    return questions;
  },
  
  // Integral questions with graphs
  integralGraphQuestions(count = 8) {
    const questions = [];
    const graphs = ['integral_area', 'integral_antiderivative', 'integral_accumulation'];
    
    for (let i = 0; i < count; i++) {
      const graph = graphs[i % graphs.length];
      const graphFile = GRAPHS[graph];
      
      if (graph === 'integral_area') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Using the shaded area in the graph, find \\(\\int_0^2 x^2 dx\\):',
          '8/3',
          'integral'
        ));
      } else if (graph === 'integral_antiderivative') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'What is \\(\\int x dx\\)?',
          'x^2/2 + C',
          'integral'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'Find \\(\\int x^2 dx\\):',
          'x^3/3 + C',
          'integral'
        ));
      } else if (graph === 'integral_accumulation') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          graphFile,
          'According to the Fundamental Theorem of Calculus graph, what is \\(\\int_0^x t^2 dt\\)?',
          'x^3/3',
          'integral'
        ));
      }
    }
    
    // Additional integral calculations
    const integralProblems = [
      { expr: '2x', answer: 'x^2 + C' },
      { expr: '3x^2', answer: 'x^3 + C' },
      { expr: '1', answer: 'x + C' },
      { expr: 'x', answer: 'x^2/2 + C' }
    ];
    
    integralProblems.forEach(prob => {
      questions.push({
        id: `calc_int_${Math.random()}`,
        type: 'typing',
        question: `Integrate: \\(\\int ${MathHelper.toLaTeX(prob.expr)} dx\\)`,
        correctAnswer: prob.answer,
        questionType: 'integral',
        prompt: 'Type your integral (remember +C):',
        xp: 5,
        checker: AnswerMatcher
      });
    });
    
    return questions;
  },
  
  // Chain rule and advanced topics
  chainRuleQuestions(count = 6) {
    const questions = [];
    const graphs = ['chain_rule_composite', 'product_rule'];
    
    for (let i = 0; i < count; i++) {
      const gFile = GRAPHS[graphs[i % graphs.length]];
      
      questions.push(CalculusQuestionGenerator.typingWithGraph(
        gFile,
        'Using the chain rule: d/dx[f(g(x))] = ?',
        'f\'(g(x))*g\'(x)',
        'chain_rule'
      ));
    }
    
    // Chain rule practice
    const chainProblems = [
      { func: '(x+1)^2', deriv: '2(x+1)' },
      { func: '(x^2+1)^3', deriv: '3(x^2+1)^2 * 2x' },
      { func: 'sin(x^2)', deriv: '2x * cos(x^2)' }
    ];
    
    chainProblems.forEach(prob => {
      questions.push({
        id: `calc_chain_${Math.random()}`,
        type: 'typing',
        question: `Find the derivative using chain rule: \\(\\frac{d}{dx}[${MathHelper.toLaTeX(prob.func)}]\\)`,
        correctAnswer: prob.deriv,
        questionType: 'chain_rule',
        prompt: 'Type your derivative (simplify if possible):',
        xp: 6,
        checker: AnswerMatcher
      });
    });
    
    return questions;
  },
  
  // Applications with graphs
  applicationQuestions(count = 6) {
    const questions = [];
    const graphs = ['optimization', 'related_rates', 'curve_sketching'];
    
    for (let i = 0; i < count; i++) {
      const gFile = GRAPHS[graphs[i % graphs.length]];
      
      if (graphs[i % graphs.length] === 'optimization') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          gFile,
          'Looking at the optimization graph, at what x-value does the maximum occur?',
          '1',
          'application'
        ));
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          gFile,
          'What is the maximum y-value shown in the graph?',
          '5',
          'application'
        ));
      } else if (graphs[i % graphs.length] === 'curve_sketching') {
        questions.push(CalculusQuestionGenerator.typingWithGraph(
          gFile,
          'From the curve sketching analysis, where does f\'(x) = 0?',
          '1 or -1',
          'application'
        ));
      }
    }
    
    return questions;
  },
  
  // Formula reference questions
  formulaQuestions(count = 4) {
    const questions = [];
    const graphs = ['formula_integrals', 'formula_derivatives'];
    
    questions.push(CalculusQuestionGenerator.typingWithGraph(
      GRAPHS.formula_integrals,
      'Using the integral formulas reference, what is \\(\\int x^n dx\\)?',
      'x^(n+1)/(n+1) + C',
      'formula'
    ));
    
    questions.push(CalculusQuestionGenerator.typingWithGraph(
      GRAPHS.formula_derivatives,
      'Using the derivative rules reference, what is the power rule?',
      'd/dx(x^n) = nx^(n-1)',
      'formula'
    ));
    
    return questions;
  },
  
  // Generate a full lesson with 15-20 questions (mostly typing)
  generateLesson(graphFiles, typingGenerators, mixRatio = 0.8) {
    const questions = [];
    
    // Mostly typing questions (70-80%)
    const typingCount = Math.floor(15 * mixRatio);
    const mcCount = 15 - typingCount;
    
    // Generate typing questions from the graphs
    typingGenerators.forEach(gen => {
      const genQuestions = gen.call(this, Math.ceil(typingCount / typingGenerators.length));
      questions.push(...genQuestions);
    });
    
    // Shuffle and take the right amount
    questions.sort(() => Math.random() - 0.5);
    
    // Keep only the requested question types
    const finalQuestions = [];
    let typingAdded = 0, mcAdded = 0;
    
    for (const q of questions) {
      if (q.type === 'typing' && typingAdded < typingCount) {
        finalQuestions.push(q);
        typingAdded++;
      }
    }
    
    return finalQuestions;
  }
};

// =====================================================================
// EXPANDED LESSON TEMPLATES (8 UNITS, 5 LESSONS EACH = 40 LESSONS)
// =====================================================================
const CalculusLessonsExpanded = {
  unit1Limits(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.limitGraphQuestions(4),
      ...CalculusLessonsExpanded._generateLimitTyping(6),
      ...CalculusLessonsExpanded._generateLimitMC(3)
    ];
    
    const titles = [
      'Introduction to Limits',
      'Limit by Substitution',
      'One-Sided Limits',
      'Infinite Limits',
      'Limits of Trig Functions'
    ];
    
    return {
      id: `calc_1_${lessonNum}`,
      title: titles[lessonNum - 1] || 'Limits',
      icon: ['📊', '📈', '🔍', '∞', '🔄'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit2LimitsAdvanced(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.limitGraphQuestions(3),
      ...CalculusQuestionGenerator.typingWithGraph('graphs/limit_hole', 'Evaluate: lim_{x→1} (x²-1)/(x-1)', '2', 'limit'),
      ...CalculusLessonsExpanded._generateLimitTyping(7),
      ...CalculusLessonsExpanded._generateLimitMC(3)
    ];
    
    const titles = [
      'Continuity',
      'Limits at Infinity',
      'Squeeze Theorem',
      'Limit Properties',
      'Special Limits'
    ];
    
    return {
      id: `calc_2_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['🔗', '🌐', '🤝', '📝', '⭐'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit3Derivatives(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.derivativeGraphQuestions(5),
      ...CalculusLessonsExpanded._generateDerivativeTyping(6),
      ...CalculusLessonsExpanded._generateDerivativeMC(3)
    ];
    
    const titles = [
      'Definition of Derivative',
      'Power Rule',
      'Product Rule',
      'Quotient Rule',
      'Chain Rule Basics'
    ];
    
    return {
      id: `calc_3_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['📈', '🔋', '📦', '➗', '⛓️'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit4DerivativesAdvanced(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.chainRuleQuestions(4),
      ...CalculusQuestionGenerator.typingWithGraph('graphs/derivative_tangent', 'Find tangent slope at x=2 for f(x)=x²', '4', 'derivative'),
      ...CalculusLessonsExpanded._generateDerivativeTyping(7),
      ...CalculusLessonsExpanded._generateDerivativeMC(3)
    ];
    
    const titles = [
      'Chain Rule Practice',
      'Higher-Order Derivatives',
      'Implicit Differentiation',
      'Related Rates',
      'Derivative Applications'
    ];
    
    return {
      id: `calc_4_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['⛓️', '📊', '👁️', '⏱️', '🎯'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit5Integration(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.integralGraphQuestions(5),
      ...CalculusLessonsExpanded._generateIntegralTyping(6),
      ...CalculusLessonsExpanded._generateIntegralMC(3)
    ];
    
    const titles = [
      'Antiderivatives',
      'Power Rule for Integration',
      'Basic Integration',
      'U-Substitution Basics',
      'Indefinite Integrals'
    ];
    
    return {
      id: `calc_5_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['∫', '🔌', '➕', '🔄', '🎲'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit6IntegrationAdvanced(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.integralGraphQuestions(4),
      ...CalculusQuestionGenerator.typingWithGraph('graphs/formula_integrals', 'Using the formula, find ∫sin(x) dx', '-cos(x) + C', 'integral'),
      ...CalculusLessonsExpanded._generateIntegralTyping(7),
      ...CalculusLessonsExpanded._generateIntegralMC(3)
    ];
    
    const titles = [
      'Definite Integrals',
      'Fundamental Theorem',
      'Area Under Curves',
      'Accumulation Functions',
      'Integration by Parts'
    ];
    
    return {
      id: `calc_6_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['📐', '🏛️', '🏞️', '📈', '🔗'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit7Applications(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.applicationQuestions(5),
      ...CalculusQuestionGenerator.formulaQuestions(2),
      ...CalculusLessonsExpanded._generateApplicationTyping(5),
      ...CalculusLessonsExpanded._generateApplicationMC(3)
    ];
    
    const titles = [
      'Optimization Basics',
      'Related Rates',
      'Curve Sketching',
      'Newton\'s Method',
      'Max-Min Problems'
    ];
    
    return {
      id: `calc_7_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['🎯', '⏱️', '📉', '🧮', '🔝'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  unit8Review(lessonNum) {
    const questions = [
      ...CalculusQuestionGenerator.limitGraphQuestions(2),
      ...CalculusQuestionGenerator.derivativeGraphQuestions(2),
      ...CalculusQuestionGenerator.integralGraphQuestions(2),
      ...CalculusQuestionGenerator.chainRuleQuestions(2),
      ...CalculusQuestionGenerator.applicationQuestions(2),
      ...CalculusLessonsExpanded._generateMixedTyping(5),
      ...CalculusLessonsExpanded._generateMixedMC(2)
    ];
    
    const titles = [
      'Limits Review',
      'Derivatives Review',
      'Integration Review',
      'Chain Rule Mastery',
      'Applications Review'
    ];
    
    return {
      id: `calc_8_${lessonNum}`,
      title: titles[lessonNum - 1],
      icon: ['🔄', '📚', '📖', '⛓️', '🎓'][lessonNum - 1],
      xp: questions.reduce((sum, q) => sum + (q.xp || 4), 0),
      questions: questions
    };
  },
  
  // Helper: Generate typing questions for limits
  _generateLimitTyping(count) {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const problems = [
        { expr: 'x^2', point: 3, answer: '9' },
        { expr: 'x^3', point: 2, answer: '8' },
        { expr: '2x', point: 5, answer: '10' },
        { expr: 'x+1', point: 4, answer: '5' }
      ];
      const p = problems[Math.floor(Math.random() * problems.length)];
      questions.push({
        id: `limit_typing_${i}`,
        type: 'typing',
        question: `Evaluate: \\(\\lim_{x \\to ${p.point}} ${MathHelper.toLaTeX(p.expr)}\\)`,
        correctAnswer: p.answer,
        questionType: 'limit',
        prompt: 'Type the limit value:',
        xp: 4,
        checker: AnswerMatcher
      });
    }
    return questions;
  },
  
  _generateLimitMC(count) {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const problems = [
        { expr: 'x^2', point: 3, answer: '9', wrong: ['6', '3', '12'] },
        { expr: 'x^3', point: 2, answer: '8', wrong: ['4', '6', '16'] }
      ];
      const p = problems[Math.floor(Math.random() * problems.length)];
      const options = [...p.wrong, p.answer].sort(() => Math.random() - 0.5);
      questions.push({
        id: `limit_mc_${i}`,
        type: 'multiple_choice',
        question: `What is \\(\\lim_{x \\to ${p.point}} ${MathHelper.toLaTeX(p.expr)}\\)?`,
        options: options,
        correct: options.indexOf(p.answer),
        xp: 3
      });
    }
    return questions;
  },
  
  _generateDerivativeTyping(count) {
    const problems = [
      { expr: 'x^5', answer: '5x^4' },
      { expr: '6x', answer: '6' },
      { expr: 'x^3 + x', answer: '3x^2 + 1' },
      { expr: '4x^2 - 2x', answer: '8x - 2' },
      { expr: 'x^10', answer: '10x^9' }
    ];
    
    return problems.slice(0, count).map(p => ({
      id: `deriv_typing_${Math.random()}`,
      type: 'typing',
      question: `Find \\(\\frac{d}{dx}(${MathHelper.toLaTeX(p.expr)})\\):`,
      correctAnswer: p.answer,
      questionType: 'derivative',
      prompt: 'Type the derivative:',
      xp: 5,
      checker: AnswerMatcher
    }));
  },
  
  _generateDerivativeMC(count) {
    const questions = [];
    const mcProblems = [
      { q: 'What is d/dx(x^5)?', correct: '5x^4', wrong: ['x^5', '5x^5', 'x^4'] },
      { q: 'What is d/dx(constant)?', correct: '0', wrong: ['constant', '1', 'undefined'] }
    ];
    
    mcProblems.slice(0, count).forEach(p => {
      const options = [...p.wrong, p.correct].sort(() => Math.random() - 0.5);
      questions.push({
        id: `deriv_mc_${Math.random()}`,
        type: 'multiple_choice',
        question: p.q,
        options: options,
        correct: options.indexOf(p.correct),
        xp: 3
      });
    });
    
    return questions;
  },
  
  _generateIntegralTyping(count) {
    const problems = [
      { expr: '4x', answer: '2x^2 + C' },
      { expr: 'x^2', answer: 'x^3/3 + C' },
      { expr: '3x^2', answer: 'x^3 + C' },
      { expr: '5', answer: '5x + C' },
      { expr: 'x^3', answer: 'x^4/4 + C' }
    ];
    
    return problems.slice(0, count).map(p => ({
      id: `int_typing_${Math.random()}`,
      type: 'typing',
      question: `Integrate: \\(\\int ${MathHelper.toLaTeX(p.expr)} dx\\)`,
      correctAnswer: p.answer,
      questionType: 'integral',
      prompt: 'Type your answer (don\'t forget +C):',
      xp: 6,
      checker: AnswerMatcher
    }));
  },
  
  _generateIntegralMC(count) {
    const questions = [];
    const mcProblems = [
      { q: 'What is ∫ x dx?', correct: 'x^2/2 + C', wrong: ['x^2', 'Cx', 'x/2 + C'] },
      { q: 'What is ∫ 2 dx?', correct: '2x + C', wrong: ['2', 'x + C', '2Cx'] }
    ];
    
    mcProblems.slice(0, count).forEach(p => {
      const options = [...p.wrong, p.correct].sort(() => Math.random() - 0.5);
      questions.push({
        id: `int_mc_${Math.random()}`,
        type: 'multiple_choice',
        question: p.q,
        options: options,
        correct: options.indexOf(p.correct),
        xp: 3
      });
    });
    
    return questions;
  },
  
  _generateApplicationTyping(count) {
    const problems = [
      { q: 'For optimization, set derivative equal to:', answer: '0' },
      { q: 'Critical points occur where f\'(x) = ? or undefined', answer: '0' },
      { q: 'The derivative gives the ____ of a function', answer: 'slope' },
      { q: 'f(x) = -(x-1)² + 5 has a maximum at x = ?', answer: '1' },
      { q: 'The Fundamental Theorem relates derivative and:', answer: 'integral' }
    ];
    
    return problems.slice(0, count).map(p => ({
      id: `app_typing_${Math.random()}`,
      type: 'typing',
      question: p.q,
      correctAnswer: p.answer,
      questionType: 'application',
      prompt: 'Type your answer:',
      xp: 4,
      checker: AnswerMatcher
    }));
  },
  
  _generateApplicationMC(count) {
    const questions = [];
    const mcProblems = [
      { q: 'To find local maxima, solve f\'(x) = ?', correct: '0', wrong: ['1', '∞', 'undefined'] },
      { q: 'The area under a curve is found using?', correct: 'integral', wrong: ['derivative', 'limit', 'product'] }
    ];
    
    mcProblems.slice(0, count).forEach(p => {
      const options = [...p.wrong, p.correct].sort(() => Math.random() - 0.5);
      questions.push({
        id: `app_mc_${Math.random()}`,
        type: 'multiple_choice',
        question: p.q,
        options: options,
        correct: options.indexOf(p.correct),
        xp: 3
      });
    });
    
    return questions;
  },
  
  _generateMixedTyping(count) {
    const allTyping = [
      ...CalculusLessonsExpanded._generateLimitTyping(2),
      ...CalculusLessonsExpanded._generateDerivativeTyping(2),
      ...CalculusLessonsExpanded._generateIntegralTyping(2),
      ...CalculusLessonsExpanded._generateApplicationTyping(2)
    ];
    return allTyping.sort(() => Math.random() - 0.5).slice(0, count);
  },
  
  _generateMixedMC(count) {
    const allMC = [
      ...CalculusLessonsExpanded._generateLimitMC(2),
      ...CalculusLessonsExpanded._generateDerivativeMC(2),
      ...CalculusLessonsExpanded._generateIntegralMC(2),
      ...CalculusLessonsExpanded._generateApplicationMC(2)
    ];
    return allMC.sort(() => Math.random() - 0.5).slice(0, count);
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CalculusLessonsExpanded;
}