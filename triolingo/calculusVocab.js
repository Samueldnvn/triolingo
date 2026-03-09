// Calculus Vocabulary and Concepts Database
// Contains calculus terminology, formulas, and concepts for lessons

const calculusVocab = {
  term: 'limits',
  concepts: [
    {
      term: 'Limit',
      notation: '\\lim_{x \\to a} f(x)',
      definition: 'The value that a function approaches as the input approaches a certain value',
      example: '\\lim_{x \\to 2} x^2 = 4',
      unit: 'limits'
    },
    {
      term: 'Approaching from left',
      notation: '\\lim_{x \\to a^-} f(x)',
      definition: 'The limit as x approaches a from values less than a',
      example: '\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty',
      unit: 'limits'
    },
    {
      term: 'Approaching from right',
      notation: '\\lim_{x \\to a^+} f(x)',
      definition: 'The limit as x approaches a from values greater than a',
      example: '\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty',
      unit: 'limits'
    },
    {
      term: 'Infinite limit',
      notation: '\\lim_{x \\to a} f(x) = \\pm\\infty',
      definition: 'A limit that grows without bound',
      example: '\\lim_{x \\to \\infty} x^2 = +\\infty',
      unit: 'limits'
    },
    {
      term: 'Limit properties',
      notation: '\\lim [f(x) \\pm g(x)] = \\lim f(x) \\pm \\lim g(x)',
      definition: 'Limits can be split for addition, subtraction, multiplication, and division',
      example: '\\lim_{x\\to2}(x^2 + x) = 4 + 2 = 6',
      unit: 'limits'
    }
  ],
  derivatives: [
    {
      term: 'Derivative',
      notation: "f'(x) = \\frac{df}{dx}",
      definition: 'The rate of change of a function at a point',
      example: "If f(x) = x^2, then f'(x) = 2x",
      unit: 'derivatives'
    },
    {
      term: 'Power rule',
      notation: "\\frac{d}{dx}(x^n) = nx^{n-1}",
      definition: 'Rule for differentiating power functions',
      example: "\\frac{d}{dx}(x^3) = 3x^2",
      unit: 'derivatives'
    },
    {
      term: 'Chain rule',
      notation: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
      definition: 'Rule for differentiating composite functions',
      example: "\\frac{d}{dx}(\\sin(x^2)) = 2x \\cdot \\cos(x^2)",
      unit: 'derivatives'
    },
    {
      term: 'Product rule',
      notation: "\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x)g(x) + f(x)g'(x)",
      definition: 'Rule for differentiating products of functions',
      example: "\\frac{d}{dx}(x \\cdot \\sin(x)) = \\sin(x) + x\\cos(x)",
      unit: 'derivatives'
    },
    {
      term: 'Quotient rule',
      notation: "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}",
      definition: 'Rule for differentiating quotients of functions',
      example: "\\frac{d}{dx}\\left[\\frac{\\sin(x)}{x}\\right]",
      unit: 'derivatives'
    }
  ],
  integration: [
    {
      term: 'Indefinite integral',
      notation: '\\int f(x)dx',
      definition: 'The antiderivative of a function, includes a constant C',
      example: '\\int x^2 dx = \\frac{x^3}{3} + C',
      unit: 'integration'
    },
    {
      term: 'Power rule for integration',
      notation: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
      definition: 'Rule for integrating power functions (when n ≠ -1)',
      example: '\\int x^3 dx = \\frac{x^4}{4} + C',
      unit: 'integration'
    },
    {
      term: 'Definite integral',
      notation: '\\int_a^b f(x)dx',
      definition: 'The signed area under a curve from a to b',
      example: '\\int_0^2 x dx = 2',
      unit: 'integration'
    },
    {
      term: 'Fundamental Theorem of Calculus',
      notation: '\\int_a^b f(x)dx = F(b) - F(a)',
      definition: 'Connects differentiation and integration',
      example: '\\int_0^1 2x dx = [x^2]_0^1 = 1 - 0 = 1',
      unit: 'integration'
    }
  ],
  applications: [
    {
      term: 'Tangent line',
      notation: 'y - y_0 = m(x - x_0)',
      definition: 'Line that touches a curve at exactly one point',
      example: 'At x=2 on f(x)=x², tangent: y - 4 = 4(x - 2)',
      unit: 'applications'
    },
    {
      term: 'Instantaneous velocity',
      notation: 'v(t) = s\'(t)',
      definition: 'Derivative of position with respect to time',
      example: 'If s(t)=t², then v(t)=2t',
      unit: 'applications'
    },
    {
      term: 'Area under curve',
      notation: 'A = \\int_a^b f(x)dx',
      definition: 'Total area between a function and x-axis',
      example: 'Area under y=x from 0 to 3 is 4.5',
      unit: 'applications'
    }
  ]
};

// Calculate how the function behaves near a point
function calculateLimit(expression, value) {
  const expressions = {
    'x^2': value * value,
    'x^3': value * value * value,
    '2x': 2 * value,
    'x + 3': value + 3,
    'x^2 + 2x': (value * value) + (2 * value),
    'sqrt(x)': Math.sqrt(value),
    '1/x': 1 / value,
    'e^x': Math.exp(value),
    'sin(x)': Math.sin(value),
    'cos(x)': Math.cos(value)
  };
  return expressions[expression] || expression;
}

// Calculate derivative at a point
function calculateDerivative(expression, x) {
  const derivatives = {
    'x^2': 2 * x,
    'x^3': 3 * x * x,
    'x^4': 4 * x * x * x,
    '2x': 2,
    '3x': 3,
    '5x': 5,
    'x + 3': 1,
    'sin(x)': Math.cos(x),
    'cos(x)': -Math.sin(x),
    'e^x': Math.exp(x),
    'ln(x)': 1 / x
  };
  return derivatives[expression] || null;
}

// Calculate indefinite integral
function calculateIntegral(expression) {
  const integrals = {
    'x': 'x²/2 + C',
    'x^2': 'x³/3 + C',
    'x^3': 'x⁴/4 + C',
    '2x': 'x² + C',
    '3x': '1.5x² + C',
    '5x': '2.5x² + C',
    '1': 'x + C',
    'sin(x)': '-cos(x) + C',
    'cos(x)': 'sin(x) + C',
    'e^x': 'eˣ + C'
  };
  return integrals[expression] || null;
}

// Generate multiple choice options for calculus questions
function generateCalculusOptions(correctAnswer, difficulty = 'medium') {
  const options = [correctAnswer];
  const optionGenerators = {
    // Generate wrong limit answers
    limit_wrong: [
      (ans) => {
        const num = parseFloat(ans) * (1 + (Math.random() - 0.5) * 0.5);
        return num.toFixed(2);
      },
      (ans) => {
        const num = parseFloat(ans) * (1 + (Math.random() - 0.5) * 0.3);
        return num.toFixed(2);
      },
      (ans) => {
        if (ans === '∞') return '0';
        if (ans === '-∞') return '∞';
        if (ans === '0') return '1';
        return (parseFloat(ans) * -1).toString();
      }
    ],
    // Generate wrong derivative answers
    derivative_wrong: [
      (ans) => {
        const num = parseFloat(ans) * (1 + (Math.random() - 0.5) * 0.4);
        return num.toFixed(2);
      },
      (ans) => {
        return ans + '+2';
      },
      (ans) => {
        return ans.replace(/\d+/g, (match) => parseInt(match) + 1);
      }
    ],
    // Generate wrong integral answers
    integral_wrong: [
      (ans) => ans.replace('²/2', '²/3'),
      (ans) => ans.replace('³/3', '³/4'),
      (ans) => ans.replace(' + C', '- C'),
      (ans) => ans.replace('x²', '2x')
    ]
  };

  const generatorList = optionGenerators[difficulty] || optionGenerators.limit_wrong;

  generatorList.forEach(generator => {
    const wrongOption = generator(correctAnswer);
    if (!options.includes(wrongOption)) {
      options.push(wrongOption);
    }
  });

  // If we still need more options
  while (options.length < 4) {
    const randomOffset = (Math.random() * 2 - 1).toFixed(2);
    const wrongOption = (parseFloat(correctAnswer) + parseFloat(randomOffset)).toFixed(2);
    if (!options.includes(wrongOption) && !isNaN(parseFloat(correctAnswer))) {
      options.push(wrongOption);
    } else {
      options.push('Undefined');
    }
  }

  // Shuffle and return
  return options.sort(() => Math.random() - 0.5);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculusVocab, calculateLimit, calculateDerivative, calculateIntegral, generateCalculusOptions };
}