// calculusGenerators_comprehensive.js
// Comprehensive Calculus 1, 2, 3 course with placeholder lessons

// Import icons from the icons module (works in both Node and browser)
// CalculusIconMap is already defined in calculusIcons.js and exposed to window

const MathHelper = {
  toLaTeX(expr) {
    return expr
      .replace(/x\^(\d+)/g, 'x^{$1}')
      .replace(/frac\{d\}\{dx\}/g, '\\frac{d}{dx}')
      .replace(/lim_\{x->(\d+)\}/g, '\\lim_{x \\to $1}')
      .replace(/int/g, '\\int');
  },
  
  wrapLatex(expr) {
    return `\\(${this.toLaTeX(expr)}\\)`;
  }
};

const CalculusPlaceholderLessons = {
  // =====================================================================
  // CALCULUS 1 (Units 1-6)
  // =====================================================================
  
  // UNIT 1: LIMITS & CONTINUITY
  limits1() { return this._createLesson('calc1_u1_l1', 'Limits: Introduction', '📊', 5, 'basic'); },
  limits2() { return this._createLesson('calc1_u1_l2', 'Limits by Substitution', '📈', 6, 'basic'); },
  limits3() { return this._createLesson('calc1_u1_l3', 'One-Sided Limits', '⬅️➡️', 5, 'intermediate'); },
  limits4() { return this._createLesson('calc1_u1_l4', 'Infinite Limits', '∞', 5, 'intermediate'); },
  limits5() { return this._createLesson('calc1_u1_l5', 'Continuity', '✅', 6, 'basic'); },
  limits6() { return this._createLesson('calc1_u1_l6', 'Limits Review', '🎯', 8, 'basic'); },
  
  // UNIT 2: DERIVATIVES BASICS
  derivBasics1() { return this._createLesson('calc1_u2_l1', 'Derivatives: The Concept', '📈', 5, 'basic'); },
  derivBasics2() { return this._createLesson('calc1_u2_l2', 'Power Rule', '🔋', 6, 'basic'); },
  derivBasics3() { return this._createLesson('calc1_u2_l3', 'Product Rule', '📦', 5, 'intermediate'); },
  derivBasics4() { return this._createLesson('calc1_u2_l4', 'Quotient Rule', '➗', 5, 'intermediate'); },
  derivBasics5() { return this._createLesson('calc1_u2_l5', 'Chain Rule', '⛓️', 6, 'advanced'); },
  derivBasics6() { return this._createLesson('calc1_u2_l6', 'Derivatives Practice', '💪', 8, 'intermediate'); },
  
  // UNIT 3: DERIVATIVES APPLICATIONS
  derivApps1() { return this._createLesson('calc1_u3_l1', 'Rates of Change', '⏱️', 5, 'intermediate'); },
  derivApps2() { return this._createLesson('calc1_u3_l2', 'Tangent Lines', '📏', 6, 'basic'); },
  derivApps3() { return this._createLesson('calc1_u3_l3', 'Curve Sketching', '📊', 7, 'intermediate'); },
  derivApps4() { return this._createLesson('calc1_u3_l4', 'Optimization', '🎯', 6, 'advanced'); },
  derivApps5() { return this._createLesson('calc1_u3_l5', 'Related Rates', '🔗', 6, 'advanced'); },
  derivApps6() { return this._createLesson('calc1_u3_l6', 'Derivatives Review', '🔄', 8, 'intermediate'); },
  
  // UNIT 4: INTEGRATION BASICS
  intBasics1() { return this._createLesson('calc1_u4_l1', 'Antiderivatives', '↩️', 5, 'basic'); },
  intBasics2() { return this._createLesson('calc1_u4_l2', 'Area Under Curve', '📐', 6, 'intermediate'); },
  intBasics3() { return this._createLesson('calc1_u4_l3', 'Definite Integrals', '📊', 6, 'intermediate'); },
  intBasics4() { return this._createLesson('calc1_u4_l4', 'Fundamental Theorem', '📜', 6, 'advanced'); },
  intBasics5() { return this._createLesson('calc1_u4_l5', 'Integration Practice', '💪', 8, 'intermediate'); },
  
  // UNIT 5: INTEGRATION TECHNIQUES (Calc 1 intro)
  intTech1() { return this._createLesson('calc1_u5_l1', 'u-Substitution', '🔄', 6, 'advanced'); },
  intTech2() { return this._createLesson('calc1_u5_l2', 'Integration by Parts', '📦', 6, 'advanced'); },
  intTech3() { return this._createLesson('calc1_u5_l3', 'Trig Integrals', '📐', 6, 'advanced'); },
  intTech4() { return this._createLesson('calc1_u5_l4', 'Partial Fractions', '➗', 6, 'advanced'); },
  intTech5() { return this._createLesson('calc1_u5_l5', 'Integration Review', '🎯', 8, 'advanced'); },
  
  // UNIT 6: APPLICATIONS OF INTEGRATION (Calc 1)
  intApps1() { return this._createLesson('calc1_u6_l1', 'Area Between Curves', '📊', 6, 'intermediate'); },
  intApps2() { return this._createLesson('calc1_u6_l2', 'Volumes: Disks', '🔵', 6, 'advanced'); },
  intApps3() { return this._createLesson('calc1_u6_l3', 'Volumes: Washers', '🔘', 6, 'advanced'); },
  intApps4() { return this._createLesson('calc1_u6_l4', 'Arc Length', '📏', 5, 'advanced'); },
  intApps5() { return this._createLesson('calc1_u6_l5', 'Applications Review', '🔄', 8, 'advanced'); },
  intApps6() { return this._createLesson('calc1_u6_l6', 'Calculus 1 Final', '🎓', 10, 'advanced'); },
  
  // =====================================================================
  // CALCULUS 2 (Units 7-12)
  // =====================================================================
  
  // UNIT 7: ADVANCED INTEGRATION TECHNIQUES
  advInt1() { return this._createLesson('calc2_u7_l1', 'Advanced u-Substitution', '🔄', 6, 'advanced'); },
  advInt2() { return this._createLesson('calc2_u7_l2', 'Advanced Integration by Parts', '📦', 6, 'advanced'); },
  advInt3() { return this._createLesson('calc2_u7_l3', 'Trigonometric Substitution', '📐', 7, 'advanced'); },
  advInt4() { return this._createLesson('calc2_u7_l4', 'Partial Fractions Review', '➗', 6, 'advanced'); },
  advInt5() { return this._createLesson('calc2_u7_l5', 'Improper Integrals', '∞', 6, 'advanced'); },
  advInt6() { return this._createLesson('calc2_u7_l6', 'Integration Mastery', '🏆', 8, 'advanced'); },
  
  // UNIT 8: APPLICATIONS OF INTEGRATION (Calc 2)
  appInt1() { return this._createLesson('calc2_u8_l1', 'Area Between Curves (Advanced)', '📊', 6, 'advanced'); },
  appInt2() { return this._createLesson('calc2_u8_l2', 'Volume: Cylindrical Shells', '🥁', 7, 'advanced'); },
  appInt3() { return this._createLesson('calc2_u8_l3', 'Surface Area', '🌐', 6, 'advanced'); },
  appInt4() { return this._createLesson('calc2_u8_l4', 'Physical Applications', '⚙️', 6, 'advanced'); },
  appInt5() { return this._createLesson('calc2_u8_l5', 'Applications Mastery', '💪', 8, 'advanced'); },
  
  // UNIT 9: SEQUENCES
  seq1() { return this._createLesson('calc2_u9_l1', 'Sequences: Introduction', '📊', 5, 'basic'); },
  seq2() { return this._createLesson('calc2_u9_l2', 'Arithmetic Sequences', '➕', 5, 'basic'); },
  seq3() { return this._createLesson('calc2_u9_l3', 'Geometric Sequences', '✖️', 6, 'basic'); },
  seq4() { return this._createLesson('calc2_u9_l4', 'Limits of Sequences', '→', 5, 'intermediate'); },
  seq5() { return this._createLesson('calc2_u9_l5', 'Sequences Review', '🎯', 7, 'intermediate'); },
  
  // UNIT 10: SERIES
  series1() { return this._createLesson('calc2_u10_l1', 'Series: Introduction', '📊', 5, 'basic'); },
  series2() { return this._createLesson('calc2_u10_l2', 'Geometric Series', '✖️', 6, 'intermediate'); },
  series3() { return this._createLesson('calc2_u10_l3', 'Convergence Tests', '📏', 7, 'advanced'); },
  series4() { return this._createLesson('calc2_u10_l4', 'Integral Test', '∫', 6, 'advanced'); },
  series5() { return this._createLesson('calc2_u10_l5', 'Comparison Tests', '⚖️', 6, 'advanced'); },
  series6() { return this._createLesson('calc2_u10_l6', 'Ratio & Root Tests', '📊', 6, 'advanced'); },
  series7() { return this._createLesson('calc2_u10_l7', 'Series Review', '🎯', 8, 'advanced'); },
  
  // UNIT 11: POWER SERIES
  power1() { return this._createLesson('calc2_u11_l1', 'Power Series', '📊', 5, 'intermediate'); },
  power2() { return this._createLesson('calc2_u11_l2', 'Radius of Convergence', '⭕', 6, 'advanced'); },
  power3() { return this._createLesson('calc2_u11_l3', 'Taylor Series', '📐', 7, 'advanced'); },
  power4() { return this._createLesson('calc2_u11_l4', 'Maclaurin Series', '📊', 6, 'advanced'); },
  power5() { return this._createLesson('calc2_u11_l5', 'Power Series Applications', '🎯', 7, 'advanced'); },
  power6() { return this._createLesson('calc2_u11_l6', 'Power Series Review', '🏆', 8, 'advanced'); },
  
  // UNIT 12: PARAMETRIC & POLAR
  param1() { return this._createLesson('calc2_u12_l1', 'Parametric Equations', '📊', 5, 'intermediate'); },
  param2() { return this._createLesson('calc2_u12_l2', 'Calculus of Parametrics', '📈', 6, 'advanced'); },
  param3() { return this._createLesson('calc2_u12_l3', 'Polar Coordinates', '🌐', 5, 'intermediate'); },
  param4() { return this._createLesson('calc2_u12_l4', 'Polar Area', '📊', 6, 'advanced'); },
  param5() { return this._createLesson('calc2_u12_l5', 'Conic Sections', '⭕', 6, 'intermediate'); },
  param6() { return this._createLesson('calc2_u12_l6', 'Calc 2 Final', '🎓', 10, 'advanced'); },
  
  // =====================================================================
  // CALCULUS 3 (Units 13-18)
  // =====================================================================
  
  // UNIT 13: VECTORS & 3D GEOMETRY
  vec3d1() { return this._createLesson('calc3_u13_l1', 'Vectors in 2D', '➡️', 5, 'basic'); },
  vec3d2() { return this._createLesson('calc3_u13_l2', 'Vectors in 3D', '📐', 6, 'intermediate'); },
  vec3d3() { return this._createLesson('calc3_u13_l3', 'Dot Product', '∙', 6, 'intermediate'); },
  vec3d4() { return this._createLesson('calc3_u13_l4', 'Cross Product', '×', 6, 'advanced'); },
  vec3d5() { return this._createLesson('calc3_u13_l5', 'Lines in 3D', '📏', 5, 'intermediate'); },
  vec3d6() { return this._createLesson('calc3_u13_l6', 'Planes in 3D', '✈️', 5, 'intermediate'); },
  vec3d7() { return this._createLesson('calc3_u13_l7', '3D Geometry Review', '🎯', 8, 'intermediate'); },
  
  // UNIT 14: VECTOR-VALUED FUNCTIONS
  vecFun1() { return this._createLesson('calc3_u14_l1', 'Vector Functions', '📊', 5, 'intermediate'); },
  vecFun2() { return this._createLesson('calc3_u14_l2', 'Calculus of Vector Functions', '📈', 6, 'advanced'); },
  vecFun3() { return this._createLesson('calc3_u14_l3', 'Arc Length in 3D', '📏', 5, 'advanced'); },
  vecFun4() { return this._createLesson('calc3_u14_l4', 'Curvature', '↩️', 6, 'advanced'); },
  vecFun5() { return this._createLesson('calc3_u14_l5', 'Motion in Space', '🚀', 6, 'advanced'); },
  vecFun6() { return this._createLesson('calc3_u14_l6', 'Vector Functions Review', '🔄', 8, 'advanced'); },
  
  // UNIT 15: FUNCTIONS OF SEVERAL VARIABLES
  multi1() { return this._createLesson('calc3_u15_l1', 'Multivariable Functions', '📊', 5, 'basic'); },
  multi2() { return this._createLesson('calc3_u15_l2', 'Limits & Continuity', '→', 6, 'intermediate'); },
  multi3() { return this._createLesson('calc3_u15_l3', 'Partial Derivatives', '∂', 6, 'intermediate'); },
  multi4() { return this._createLesson('calc3_u15_l4', 'Tangent Planes', '✈️', 6, 'advanced'); },
  multi5() { return this._createLesson('calc3_u15_l5', 'Directional Derivatives', '➡️', 6, 'advanced'); },
  multi6() { return this._createLesson('calc3_u15_l6', 'Gradient', '∇', 6, 'advanced'); },
  multi7() { return this._createLesson('calc3_u15_l7', 'Multivariable Review', '🎯', 8, 'advanced'); },
  
  // UNIT 16: MULTIPLE INTEGRALS
  multiInt1() { return this._createLesson('calc3_u16_l1', 'Double Integrals', '∬', 6, 'intermediate'); },
  multiInt2() { return this._createLesson('calc3_u16_l2', 'Double Integrals: Non-Rectangular', '📊', 7, 'advanced'); },
  multiInt3() { return this._createLesson('calc3_u16_l3', 'Double Integrals: Polar', '🌐', 6, 'advanced'); },
  multiInt4() { return this._createLesson('calc3_u16_l4', 'Triple Integrals', '∭', 7, 'advanced'); },
  multiInt5() { return this._createLesson('calc3_u16_l5', 'Triple Integrals: Cylindrical', '🥁', 6, 'advanced'); },
  multiInt6() { return this._createLesson('calc3_u16_l6', 'Triple Integrals: Spherical', '🌐', 6, 'advanced'); },
  multiInt7() { return this._createLesson('calc3_u16_l7', 'Multiple Integrals Review', '🎯', 8, 'advanced'); },
  
  // UNIT 17: VECTOR CALCULUS
  vecCalc1() { return this._createLesson('calc3_u17_l1', 'Vector Fields', '📊', 5, 'intermediate'); },
  vecCalc2() { return this._createLesson('calc3_u17_l2', 'Line Integrals', '∮', 6, 'advanced'); },
  vecCalc3() { return this._createLesson('calc3_u17_l3', "Fundamental Theorem for Line Integrals", '📜', 6, 'advanced'); },
  vecCalc4() { return this._createLesson('calc3_u17_l4', "Green's Theorem", '🟢', 7, 'advanced'); },
  vecCalc5() { return this._createLesson('calc3_u17_l5', 'Curl & Divergence', '🌀', 6, 'advanced'); },
  vecCalc6() { return this._createLesson('calc3_u17_l6', 'Surface Integrals', '🌐', 7, 'advanced'); },
  vecCalc7() { return this._createLesson('calc3_u17_l7', "Stokes' Theorem", '🌊', 7, 'advanced'); },
  vecCalc8() { return this._createLesson('calc3_u17_l8', "Divergence Theorem", '💨', 7, 'advanced'); },
  vecCalc9() { return this._createLesson('calc3_u17_l9', 'Vector Calculus Review', '🎯', 8, 'advanced'); },
  
  // UNIT 18: CALCULUS 3 FINAL
  calc3Final1() { return this._createLesson('calc3_u18_l1', 'Comprehensive Review I', '📚', 8, 'advanced'); },
  calc3Final2() { return this._createLesson('calc3_u18_l2', 'Comprehensive Review II', '📖', 8, 'advanced'); },
  calc3Final3() { return this._createLesson('calc3_u18_l3', 'Calculus 3 Final Exam', '🎓', 12, 'advanced'); },
  
  // =====================================================================
  // HELPER FUNCTIONS
  // =====================================================================
  
  _createLesson(id, title, icon, numQuestions, difficulty = 'basic') {
    // Use icon from CalculusIconMap if available, otherwise use the emoji
    // Map lesson IDs to function names for icon lookup
    const idToFunctionMap = {
      'calc1_u1': 'limits',
      'calc1_u2': 'derivBasics',
      'calc1_u3': 'derivApps',
      'calc1_u4': 'intBasics',
      'calc1_u5': 'intTech',
      'calc1_u6': 'intApps',
      'calc2_u7': 'advInt',
      'calc2_u8': 'appInt',
      'calc2_u9': 'seq',
      'calc2_u10': 'series',
      'calc2_u11': 'power',
      'calc2_u12': 'param',
      'calc3_u13': 'vec3d',
      'calc3_u14': 'vecFun',
      'calc3_u15': 'multi',
      'calc3_u16': 'multiInt',
      'calc3_u17': 'vecCalc',
      'calc3_u18': 'calc3Final'
    };
    
    const idPrefix = id.split('_').slice(0, 2).join('_'); // Get prefix like 'calc1_u1'
    const functionPrefix = idToFunctionMap[idPrefix] || '';
    
    // Get lesson number from ID (last character after last underscore, or second part)
    const idParts = id.split('_');
    const lessonNum = idParts[idParts.length - 1].replace('l', '');
    
    const iconKey = functionPrefix + lessonNum; // Combine: 'limits' + '1' = 'limits1'
    // Get icon map from window (browser) or module (Node)
    let iconMap = {};
    if (typeof window !== 'undefined' && window.CalculusIconMap) {
      iconMap = window.CalculusIconMap;
    } else if (typeof CalculusIconMap !== 'undefined') {
      iconMap = CalculusIconMap;
    }
    const lessonIcon = iconMap[iconKey] || icon;
    
    const questions = [];
    
    // Generate placeholder questions
    for (let i = 0; i < numQuestions; i++) {
      questions.push({
        id: `${id}_q${i}`,
        type: i % 3 === 0 ? 'multiple_choice' : 'typing',
        question: this._getPlaceholderQuestion(title, i, difficulty),
        options: i % 3 === 0 ? this._getPlaceholderOptions(i) : undefined,
        correct: i % 3 === 0 ? 0 : undefined,
        correctAnswer: i % 3 !== 0 ? this._getPlaceholderAnswer(i, difficulty) : undefined,
        prompt: i % 3 !== 0 ? 'Type your answer:' : undefined,
        xp: difficulty === 'advanced' ? 6 : (difficulty === 'intermediate' ? 5 : 4)
      });
    }
    
    return {
      id: id,
      title: title,
      icon: lessonIcon,
      xp: questions.reduce((sum, q) => sum + q.xp, 0),
      questions: questions,
      description: this._getDescription(title),
      difficulty: difficulty
    };
  },
  
  _getPlaceholderQuestion(title, index, difficulty) {
    const topics = {
      'Limits': [
        `Evaluate \\(\\lim_{x \\to ${index + 2}} x^${index + 1}\\)`,
        `Find the limit of f(x) = x${'^'}${index + 2} as x approaches ${index + 3}`,
        `Calculate \\(\\lim_{x \\to \\infty} \\frac{${index + 1}x}{x + ${index}}\\)`
      ],
      'Derivatives': [
        `Find \\(\\frac{d}{dx}(x^${index + 2})\\)`,
        `Differentiate f(x) = ${index + 1}x${'^'}${index + 2}`,
        `Find the derivative using the chain rule`
      ],
      'Integration': [
        `Evaluate \\(\\int x^${index + 1} dx\\)`,
        `Find the antiderivative of f(x) = ${index + 1}x${'^'}${index + 2}`,
        `Calculate the definite integral`
      ],
      'Series': [
        `Determine if the series converges`,
        `Find the sum of the geometric series`,
        `Apply the ratio test`
      ],
      'Vectors': [
        `Find the dot product of vectors`,
        `Calculate the cross product`,
        `Find the magnitude of the vector`
      ],
      'Multivariable': [
        `Find the partial derivative with respect to x`,
        `Calculate the gradient of the function`,
        `Evaluate the double integral`
      ],
      'default': [
        `Solve this ${difficulty} problem #${index + 1}`,
        `Complete the calculation`,
        `Apply the appropriate method`
      ]
    };
    
    const category = Object.keys(topics).find(key => title.includes(key)) || 'default';
    const questionSet = topics[category];
    const question = questionSet[index % questionSet.length];
    
    return question;
  },
  
  _getPlaceholderOptions(index) {
    const baseOptions = ['\\(A\\)', '\\(B\\)', '\\(C\\)', '\\(D\\)'];
    return baseOptions.map(opt => opt.replace(/[ABCD]/, (_, i) => String.fromCharCode(65 + ((i + index) % 4))));
  },
  
  _getPlaceholderAnswer(index, difficulty) {
    const answers = {
      'basic': ['1', '2', 'x', 'x^2', '+ C'],
      'intermediate': ['2x', '3x^2', 'x^3/3 + C', '2x + 1', 'ln|x| + C'],
      'advanced': ['2x^2', 'e^x + C', 'sin(x) + cos(x)', '∫f(x)g(x)dx', 'convergent']
    };
    const answerSet = answers[difficulty] || answers['basic'];
    return answerSet[index % answerSet.length];
  },
  
  _getDescription(title) {
    const descriptions = {
      'Limits': 'Master limits and continuity',
      'Derivatives': 'Learn rates of change',
      'Integration': 'Introduction to integration',
      'Series': 'Infinite series and convergence',
      'Vectors': 'Vector calculus in 3D',
      'Multivariable': 'Functions of several variables',
      'default': 'Practice and review'
    };
    for (const [key, desc] of Object.entries(descriptions)) {
      if (title.includes(key)) return desc;
    }
    return descriptions['default'];
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusPlaceholderLessons };
} else {
  // Browser: expose to window
  window.CalculusPlaceholderLessons = CalculusPlaceholderLessons;
}