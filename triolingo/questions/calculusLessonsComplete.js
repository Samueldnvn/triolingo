/**
 * TRIOLINGO CALCULUS LESSONS
 * Generated on 2026-03-01 15:57:05
 * Comprehensive calculus course with diagrams
 */

const CalculusLessonsComplete = {

  derivIntro: {
    id: "derivIntro",
    title: "Introduction to Derivatives",
    icon: "📈",
    unit: 2,
    xp: 81,
    questions: [
      {
        id: 'u2_l1_q1',
        type: 'multiple_choice',
        question: `What does the derivative f\'(x) represent?`,
        options: ["The slope of the tangent line", "The area under the curve", "The maximum value", "The average rate of change"],
        correct: 0,
        explanation: `The derivative represents the instantaneous rate of change, which is the slope of the tangent line.`,
        diagram: 'diagrams/tangent_x2_1.0.png',
        xp: 4
      },
      {
        id: 'u2_l1_q2',
        type: 'typing',
        question: `If f(x) = 3, what is f\'(x)?`,
        correctAnswer: '0',
        prompt: 'Type your answer:',
        explanation: `The derivative of any constant is zero.`,
        xp: 4
      },
      {
        id: 'u2_l1_q3',
        type: 'typing',
        question: `If f(x) = x, what is f\'(x)?`,
        correctAnswer: '1',
        prompt: 'Type your answer:',
        explanation: `The derivative of x is 1.`,
        xp: 4
      },
      {
        id: 'u2_l1_q4',
        type: 'typing',
        question: `If f(x) = 2x + 5, what is f\'(x)?`,
        correctAnswer: '2',
        prompt: 'Type your answer:',
        explanation: `The derivative of 2x is 2, and the derivative of the constant 5 is 0.`,
        xp: 5
      },
      {
        id: 'u2_l1_q5',
        type: 'typing',
        question: `For f(x) = x^2, what is f\'(3)?`,
        correctAnswer: '6',
        prompt: 'Type your answer:',
        explanation: `First find f\'(x) = 2x, then f\'(3) = 2(3) = 6.`,
        xp: 5
      },
      {
        id: 'u2_l1_q6',
        type: 'fill_blank',
        question: `The derivative measures the _____ rate of change.`,
        correctAnswer: 'instantaneous',
        prompt: 'Type your answer:',
        explanation: `The derivative gives the instantaneous rate of change at a specific point.`,
        xp: 4
      },
      {
        id: 'u2_l1_q7',
        type: 'multiple_choice',
        question: `If a function is differentiable at a point, it must be:`,
        options: ["Continuous at that point", "Discontinuous at that point", "Undefined at that point"],
        correct: 0,
        explanation: `Differentiability implies continuity.`,
        xp: 5
      },
      {
        id: 'u2_l1_q8',
        type: 'typing',
        question: `If f(x) = 5x - 2, what is the slope of the tangent line at any point?`,
        correctAnswer: '5',
        prompt: 'Type your answer:',
        explanation: `The derivative of 5x - 2 is 5.`,
        xp: 4
      },
      {
        id: 'u2_l1_q9',
        type: 'multiple_choice',
        question: `When does a function have a vertical tangent line?`,
        options: ["When the derivative is undefined", "When the derivative is zero", "When the function is constant"],
        correct: 0,
        explanation: `A vertical tangent line occurs when the derivative is undefined.`,
        xp: 5
      },
      {
        id: 'u2_l1_q10',
        type: 'typing',
        question: `For f(x) = x^3, what is f\'(1)?`,
        correctAnswer: '3',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 3x^2, so f\'(1) = 3(1)^2 = 3.`,
        xp: 5
      },
      {
        id: 'u2_l1_q11',
        type: 'typing',
        question: `If f(x) = 7, what is f\'(10)?`,
        correctAnswer: '0',
        prompt: 'Type your answer:',
        explanation: `The derivative of any constant is zero.`,
        xp: 4
      },
      {
        id: 'u2_l1_q12',
        type: 'multiple_choice',
        question: `The power rule states that d/dx(x^n) = ?`,
        options: ["nx^(n-1)", "x^(n+1)", "nx^n"],
        correct: 0,
        explanation: `Power rule: d/dx(x^n) = nx^(n-1)`,
        diagram: 'diagrams/power_rule.png',
        xp: 4
      },
      {
        id: 'u2_l1_q13',
        type: 'fill_blank',
        question: `The derivative of a constant function is always _____.`,
        correctAnswer: '0',
        prompt: 'Type your answer:',
        explanation: `Constants do not change.`,
        xp: 4
      },
      {
        id: 'u2_l1_q14',
        type: 'typing',
        question: `If f(x) = x^4, what is f\'(2)?`,
        correctAnswer: '32',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 4x^3, so f\'(2) = 4(8) = 32.`,
        xp: 5
      },
      {
        id: 'u2_l1_q15',
        type: 'typing',
        question: `What is the derivative of x^10?`,
        correctAnswer: '10x^9',
        prompt: 'Type your answer:',
        explanation: `Power rule: d/dx(x^10) = 10x^9.`,
        xp: 5
      },
      {
        id: 'u2_l1_q16',
        type: 'multiple_choice',
        question: `Which represents the derivative notation?`,
        options: ["f\\'(x)", "f(x)", "f(x)^2"],
        correct: 0,
        explanation: `f\'(x) is standard derivative notation.`,
        xp: 4
      },
      {
        id: 'u2_l1_q17',
        type: 'typing',
        question: `For f(x) = x^5, what is f\'(1)?`,
        correctAnswer: '5',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 5x^4, so f\'(1) = 5.`,
        xp: 5
      },
      {
        id: 'u2_l1_q18',
        type: 'typing',
        question: `If f(x) = -3x + 7, what is f\'(x)?`,
        correctAnswer: '-3',
        prompt: 'Type your answer:',
        explanation: `The derivative of -3x is -3, constant 7 has derivative 0.`,
        xp: 5
      }
    ]
  },

  powerRule: {
    id: "powerRule",
    title: "Power Rule",
    icon: "🔋",
    unit: 2,
    xp: 83,
    questions: [
      {
        id: 'u2_l2_q1',
        type: 'multiple_choice',
        question: `Using the power rule, d/dx(x^5) = ?`,
        options: ["5x^4", "5x^5", "x^4"],
        correct: 0,
        explanation: `d/dx(x^5) = 5x^4`,
        diagram: 'diagrams/power_rule.png',
        xp: 4
      },
      {
        id: 'u2_l2_q2',
        type: 'typing',
        question: `What is d/dx(x^10)?`,
        correctAnswer: '10x^9',
        prompt: 'Type your answer:',
        explanation: `Power rule: d/dx(x^10) = 10x^9`,
        xp: 4
      },
      {
        id: 'u2_l2_q3',
        type: 'typing',
        question: `What is d/dx(x^3)?`,
        correctAnswer: '3x^2',
        prompt: 'Type your answer:',
        explanation: `Power rule: d/dx(x^3) = 3x^2`,
        xp: 4
      },
      {
        id: 'u2_l2_q4',
        type: 'multiple_choice',
        question: `What is d/dx(x^(-2))?`,
        options: ["-2x^(-3)", "-2x^(-2)", "-x^(-3)"],
        correct: 0,
        explanation: `Power rule works for negative exponents.`,
        xp: 5
      },
      {
        id: 'u2_l2_q5',
        type: 'typing',
        question: `What is d/dx(x^0)?`,
        correctAnswer: '0',
        prompt: 'Type your answer:',
        explanation: `x^0 = 1, derivative of constant is 0.`,
        xp: 5
      },
      {
        id: 'u2_l2_q6',
        type: 'multiple_choice',
        question: `What is d/dx(√x)?`,
        options: ["1/(2\u221ax)", "1/\u221ax", "(1/2)x^(1/2)"],
        correct: 0,
        explanation: `Rewrite as x^(1/2), then apply power rule.`,
        xp: 5
      },
      {
        id: 'u2_l2_q7',
        type: 'typing',
        question: `What is d/dx(3x^4)?`,
        correctAnswer: '12x^3',
        prompt: 'Type your answer:',
        explanation: `Constant multiple rule: 3 * 4x^3 = 12x^3`,
        xp: 4
      },
      {
        id: 'u2_l2_q8',
        type: 'typing',
        question: `What is d/dx(5x^2)?`,
        correctAnswer: '10x',
        prompt: 'Type your answer:',
        explanation: `Constant multiple rule: 5 * 2x = 10x`,
        xp: 4
      },
      {
        id: 'u2_l2_q9',
        type: 'multiple_choice',
        question: `What is d/dx(2x^3 + 5x^2)?`,
        options: ["6x^2 + 10x", "6x^3 + 10x^2", "2x^2 + 5x"],
        correct: 0,
        explanation: `Apply power rule to each term.`,
        xp: 5
      },
      {
        id: 'u2_l2_q10',
        type: 'typing',
        question: `What is d/dx(x^4 + 2x^3 - x)?`,
        correctAnswer: '4x^3+6x^2-1',
        prompt: 'Type your answer:',
        explanation: `Apply power rule to each term.`,
        xp: 5
      },
      {
        id: 'u2_l2_q11',
        type: 'fill_blank',
        question: `For d/dx(ax^n), the coefficient becomes _____ and the exponent decreases by _____.`,
        correctAnswer: 'an|1',
        prompt: 'Type your answer:',
        explanation: `Constant multiple rule.`,
        xp: 4
      },
      {
        id: 'u2_l2_q12',
        type: 'multiple_choice',
        question: `What is d/dx(7x^(-3))?`,
        options: ["-21x^(-4)", "-21x^(-3)", "7x^(-4)"],
        correct: 0,
        explanation: `Power rule with constant.`,
        xp: 5
      },
      {
        id: 'u2_l2_q13',
        type: 'typing',
        question: `What is d/dx(1/x)? (use negative exponent)`,
        correctAnswer: '-x^(-2)',
        prompt: 'Type your answer:',
        explanation: `Rewrite as x^(-1), then power rule.`,
        xp: 5
      },
      {
        id: 'u2_l2_q14',
        type: 'typing',
        question: `If f(x) = x^100, what is f\'(1)?`,
        correctAnswer: '100',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 100x^99, so f\'(1) = 100.`,
        xp: 5
      },
      {
        id: 'u2_l2_q15',
        type: 'multiple_choice',
        question: `The power rule works for:`,
        options: ["All real numbers", "Only positive integers", "Only negative integers"],
        correct: 0,
        explanation: `Power rule works for all real exponents.`,
        xp: 5
      },
      {
        id: 'u2_l2_q16',
        type: 'typing',
        question: `What is d/dx(x^(1/3))?`,
        correctAnswer: '(1/3)x^(-2/3)',
        prompt: 'Type your answer:',
        explanation: `Power rule with fractional exponent.`,
        xp: 5
      },
      {
        id: 'u2_l2_q17',
        type: 'typing',
        question: `What is d/dx(x^6)?`,
        correctAnswer: '6x^5',
        prompt: 'Type your answer:',
        explanation: `Power rule: d/dx(x^6) = 6x^5.`,
        xp: 4
      },
      {
        id: 'u2_l2_q18',
        type: 'typing',
        question: `What is d/dx(4x^5)?`,
        correctAnswer: '20x^4',
        prompt: 'Type your answer:',
        explanation: `Constant multiple: 4 * 5x^4 = 20x^4.`,
        xp: 5
      }
    ]
  },

  productRule: {
    id: "productRule",
    title: "Product Rule",
    icon: "📦",
    unit: 2,
    xp: 79,
    questions: [
      {
        id: 'u2_l3_q1',
        type: 'multiple_choice',
        question: `The product rule states: d/dx[f(x)g(x)] = ?`,
        options: ["f\\'(x)g(x) + f(x)g\\'(x)", "f\\'(x)g\\'(x)", "f(x)g(x)"],
        correct: 0,
        explanation: `Product rule formula.`,
        xp: 4
      },
      {
        id: 'u2_l3_q2',
        type: 'typing',
        question: `Using product rule, d/dx[x * x^2] = ?`,
        correctAnswer: '3x^2',
        prompt: 'Type your answer:',
        explanation: `Let f(x)=x, g(x)=x^2. Then f\'(x)=1, g\'(x)=2x. Product rule: 1*x^2 + x*2x = 3x^2.`,
        diagram: 'diagrams/product_rule.png',
        xp: 5
      },
      {
        id: 'u2_l3_q3',
        type: 'multiple_choice',
        question: `What is d/dx[x^2 * x^3]?`,
        options: ["5x^4", "6x^4", "x^5"],
        correct: 0,
        explanation: `Product rule: 2x*x^3 + x^2*3x^2 = 5x^4.`,
        xp: 5
      },
      {
        id: 'u2_l3_q4',
        type: 'typing',
        question: `What is d/dx[x(x+1)]?`,
        correctAnswer: '2x+1',
        prompt: 'Type your answer:',
        explanation: `Product rule: 1*(x+1) + x*1 = 2x+1.`,
        xp: 5
      },
      {
        id: 'u2_l3_q5',
        type: 'multiple_choice',
        question: `What is d/dx[3x * x^2]?`,
        options: ["9x^2", "3x*2x", "6x^2"],
        correct: 0,
        explanation: `3*(1*x^2 + x*2x) = 9x^2.`,
        xp: 5
      },
      {
        id: 'u2_l3_q6',
        type: 'typing',
        question: `What is d/dx[x^2(2x+3)]?`,
        correctAnswer: '6x^2+6x',
        prompt: 'Type your answer:',
        explanation: `Product rule: 2x(2x+3) + x^2(2) = 6x^2+6x.`,
        xp: 5
      },
      {
        id: 'u2_l3_q7',
        type: 'multiple_choice',
        question: `The product rule is used when:`,
        options: ["Multiplying two functions", "Dividing two functions", "Adding two functions"],
        correct: 0,
        explanation: `Product rule for products.`,
        xp: 4
      },
      {
        id: 'u2_l3_q8',
        type: 'fill_blank',
        question: `In the product rule, you take the derivative of the _____ times the second, plus the first times the derivative of the _____.`,
        correctAnswer: 'first|second',
        prompt: 'Type your answer:',
        explanation: `Product rule structure.`,
        xp: 4
      },
      {
        id: 'u2_l3_q9',
        type: 'typing',
        question: `What is d/dx[(x+1)(x+2)]?`,
        correctAnswer: '2x+3',
        prompt: 'Type your answer:',
        explanation: `Product rule: 1*(x+2) + (x+1)*1 = 2x+3.`,
        xp: 5
      },
      {
        id: 'u2_l3_q10',
        type: 'multiple_choice',
        question: `What is d/dx[x^3 * e^x]?`,
        options: ["x^3 e^x + 3x^2 e^x", "3x^2 e^x", "x^3 e^x"],
        correct: 0,
        explanation: `Product rule with e^x.`,
        xp: 6
      },
      {
        id: 'u2_l3_q11',
        type: 'typing',
        question: `What is d/dx[(x^2+1)(x-1)]?`,
        correctAnswer: '3x^2-2x+1',
        prompt: 'Type your answer:',
        explanation: `Product rule: 2x(x-1) + (x^2+1)(1) = 3x^2-2x+1.`,
        xp: 6
      },
      {
        id: 'u2_l3_q12',
        type: 'multiple_choice',
        question: `What is d/dx[x^2 sin(x)]?`,
        options: ["2x sin(x) + x^2 cos(x)", "2x sin(x)", "x^2 cos(x)"],
        correct: 0,
        explanation: `Product rule with trig.`,
        xp: 6
      },
      {
        id: 'u2_l3_q13',
        type: 'fill_blank',
        question: `When using the product rule, you get _____ terms.`,
        correctAnswer: 'two',
        prompt: 'Type your answer:',
        explanation: `Product rule produces two terms.`,
        xp: 4
      },
      {
        id: 'u2_l3_q14',
        type: 'typing',
        question: `What is d/dx[x^3(2x)]? (simplify)`,
        correctAnswer: '8x^3',
        prompt: 'Type your answer:',
        explanation: `Simplify: x^3(2x) = 2x^4, then d/dx = 8x^3.`,
        xp: 5
      },
      {
        id: 'u2_l3_q15',
        type: 'typing',
        question: `What is d/dx[2x(x+2)]?`,
        correctAnswer: '4x+4',
        prompt: 'Type your answer:',
        explanation: `Product rule: 2*(x+2) + 2x*1 = 4x+4.`,
        xp: 5
      },
      {
        id: 'u2_l3_q16',
        type: 'typing',
        question: `What is d/dx[x(x^2+1)]?`,
        correctAnswer: '3x^2+1',
        prompt: 'Type your answer:',
        explanation: `Product rule: 1*(x^2+1) + x*2x = 3x^2+1.`,
        xp: 5
      }
    ]
  },

  quotientRule: {
    id: "quotientRule",
    title: "Quotient Rule",
    icon: "➗",
    unit: 2,
    xp: 78,
    questions: [
      {
        id: 'u2_l4_q1',
        type: 'multiple_choice',
        question: `The quotient rule states: d/dx[f(x)/g(x)] = ?`,
        options: ["(f\\'g - fg\\')/g^2", "(f\\'g + fg\\')/g^2", "f\\'g\\'/g^2"],
        correct: 0,
        explanation: `Quotient rule formula.`,
        xp: 4
      },
      {
        id: 'u2_l4_q2',
        type: 'typing',
        question: `What is d/dx[x/(x+1)]?`,
        correctAnswer: '1/(x+1)^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule: (1*(x+1) - x*1)/(x+1)^2 = 1/(x+1)^2.`,
        diagram: 'diagrams/quotient_rule.png',
        xp: 5
      },
      {
        id: 'u2_l4_q3',
        type: 'multiple_choice',
        question: `What is d/dx[x^2/x]?`,
        options: ["1", "2x/x", "(x^2-2x^2)/x^2"],
        correct: 0,
        explanation: `Simplify first: x^2/x = x, derivative is 1.`,
        xp: 5
      },
      {
        id: 'u2_l4_q4',
        type: 'typing',
        question: `What is d/dx[x/x^2]?`,
        correctAnswer: '-1/x^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule or simplify to 1/x first.`,
        xp: 5
      },
      {
        id: 'u2_l4_q5',
        type: 'multiple_choice',
        question: `What is d/dx[(x+1)/(x+2)]?`,
        options: ["1/(x+2)^2", "(x+2-x-1)/(x+2)^2", "2/(x+2)^2"],
        correct: 0,
        explanation: `Quotient rule gives 1/(x+2)^2.`,
        xp: 5
      },
      {
        id: 'u2_l4_q6',
        type: 'fill_blank',
        question: `In the quotient rule, the denominator is the _____ function squared.`,
        correctAnswer: 'bottom|second',
        prompt: 'Type your answer:',
        explanation: `Quotient rule structure.`,
        xp: 4
      },
      {
        id: 'u2_l4_q7',
        type: 'typing',
        question: `What is d/dx[x^2/(x+1)]?`,
        correctAnswer: '(x^2+2x)/(x+1)^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule: (2x(x+1) - x^2(1))/(x+1)^2.`,
        xp: 6
      },
      {
        id: 'u2_l4_q8',
        type: 'multiple_choice',
        question: `What is d/dx[1/x]?`,
        options: ["-1/x^2", "1/x^2", "-1/x"],
        correct: 0,
        explanation: `Quotient rule with constant numerator.`,
        xp: 5
      },
      {
        id: 'u2_l4_q9',
        type: 'typing',
        question: `What is d/dx[x/(2x+1)]?`,
        correctAnswer: '1/(2x+1)^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule gives 1/(2x+1)^2.`,
        xp: 6
      },
      {
        id: 'u2_l4_q10',
        type: 'multiple_choice',
        question: `In the quotient rule numerator, the sign is:`,
        options: ["Minus", "Plus", "Times"],
        correct: 0,
        explanation: `Quotient rule has minus in numerator.`,
        xp: 4
      },
      {
        id: 'u2_l4_q11',
        type: 'typing',
        question: `What is d/dx[x^3/x^2]?`,
        correctAnswer: 'x',
        prompt: 'Type your answer:',
        explanation: `Simplify: x^3/x^2 = x, derivative is 1.`,
        xp: 5
      },
      {
        id: 'u2_l4_q12',
        type: 'multiple_choice',
        question: `What is d/dx[sin(x)/x]?`,
        options: ["(x cos(x) - sin(x))/x^2", "cos(x)/x", "x cos(x) + sin(x)/x^2"],
        correct: 0,
        explanation: `Quotient rule with sin.`,
        xp: 6
      },
      {
        id: 'u2_l4_q13',
        type: 'fill_blank',
        question: `For d/dx[f(x)/g(x)], the numerator is f\'g _____ fg\'.`,
        correctAnswer: '-',
        prompt: 'Type your answer:',
        explanation: `Minus sign in numerator.`,
        xp: 4
      },
      {
        id: 'u2_l4_q14',
        type: 'typing',
        question: `What is d/dx[2x/(x+1)]?`,
        correctAnswer: '2/(x+1)^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule gives 2/(x+1)^2.`,
        xp: 5
      },
      {
        id: 'u2_l4_q15',
        type: 'multiple_choice',
        question: `If you can simplify a quotient before differentiating, you should:`,
        options: ["Simplify first", "Always use quotient rule", "Never simplify"],
        correct: 0,
        explanation: `Simplifying first is often easier.`,
        xp: 4
      },
      {
        id: 'u2_l4_q16',
        type: 'typing',
        question: `What is d/dx[(x+2)/(x+3)]?`,
        correctAnswer: '1/(x+3)^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule gives 1/(x+3)^2.`,
        xp: 5
      }
    ]
  },

  chainRule: {
    id: "chainRule",
    title: "Chain Rule",
    icon: "⛓️",
    unit: 2,
    xp: 86,
    questions: [
      {
        id: 'u2_l5_q1',
        type: 'multiple_choice',
        question: `The chain rule is used to differentiate:`,
        options: ["Composite functions", "Products of functions", "Quotients of functions"],
        correct: 0,
        explanation: `Chain rule for composite functions.`,
        xp: 4
      },
      {
        id: 'u2_l5_q2',
        type: 'typing',
        question: `If y = (x^2 + 1)^3, then y\' = ?`,
        correctAnswer: '3(x^2+1)^2(2x)',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 3(x^2+1)^2 * 2x.`,
        xp: 5
      },
      {
        id: 'u2_l5_q3',
        type: 'multiple_choice',
        question: `What is d/dx[(x+1)^2]?`,
        options: ["2(x+1)", "2x", "(x+1)^2"],
        correct: 0,
        explanation: `Chain rule: 2(x+1) * 1.`,
        xp: 4
      },
      {
        id: 'u2_l5_q4',
        type: 'typing',
        question: `What is d/dx[(2x+3)^5]?`,
        correctAnswer: '10(2x+3)^4',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 5(2x+3)^4 * 2.`,
        xp: 5
      },
      {
        id: 'u2_l5_q5',
        type: 'multiple_choice',
        question: `For y = sin(x^2), what is y\'?`,
        options: ["cos(x^2) * 2x", "cos(x^2)", "2x"],
        correct: 0,
        explanation: `Chain rule with sin.`,
        xp: 5
      },
      {
        id: 'u2_l5_q6',
        type: 'typing',
        question: `What is d/dx[e^(3x)]?`,
        correctAnswer: '3e^(3x)',
        prompt: 'Type your answer:',
        explanation: `Chain rule: e^(3x) * 3.`,
        xp: 5
      },
      {
        id: 'u2_l5_q7',
        type: 'fill_blank',
        question: `In the chain rule, you differentiate the _____ function, then multiply by the derivative of the _____ function.`,
        correctAnswer: 'outer|inner',
        prompt: 'Type your answer:',
        explanation: `Chain rule structure.`,
        xp: 4
      },
      {
        id: 'u2_l5_q8',
        type: 'multiple_choice',
        question: `What is d/dx[(x^3 + 2x)^4]?`,
        options: ["4(x^3+2x)^3(3x^2+2)", "4(x^3+2x)^3", "(x^3+2x)^3(3x^2+2)"],
        correct: 0,
        explanation: `Chain rule.`,
        xp: 6
      },
      {
        id: 'u2_l5_q9',
        type: 'typing',
        question: `What is d/dx[√(x^2+1)]?`,
        correctAnswer: 'x/√(x^2+1)',
        prompt: 'Type your answer:',
        explanation: `Chain rule gives x/√(x^2+1).`,
        xp: 6
      },
      {
        id: 'u2_l5_q10',
        type: 'multiple_choice',
        question: `What is d/dx[ln(2x)]?`,
        options: ["1/x", "1/(2x)", "2/x"],
        correct: 0,
        explanation: `Chain rule: 1/(2x) * 2 = 1/x.`,
        xp: 5
      },
      {
        id: 'u2_l5_q11',
        type: 'typing',
        question: `What is d/dx[(3x-1)^2]?`,
        correctAnswer: '6(3x-1)',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 2(3x-1) * 3 = 6(3x-1).`,
        xp: 5
      },
      {
        id: 'u2_l5_q12',
        type: 'multiple_choice',
        question: `What is d/dx[cos^2(x)]?`,
        options: ["2cos(x)(-sin(x))", "2cos(x)", "-2sin(x)"],
        correct: 0,
        explanation: `Chain rule with cos.`,
        xp: 6
      },
      {
        id: 'u2_l5_q13',
        type: 'typing',
        question: `What is d/dx[(x^2+1)^10]?`,
        correctAnswer: '20x(x^2+1)^9',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 10(x^2+1)^9 * 2x.`,
        xp: 6
      },
      {
        id: 'u2_l5_q14',
        type: 'fill_blank',
        question: `The chain rule formula is: d/dx[f(g(x))] = f\'(g(x)) * _____`,
        correctAnswer: 'g\\'(x)',
        prompt: 'Type your answer:',
        explanation: `Chain rule formula.`,
        xp: 4
      },
      {
        id: 'u2_l5_q15',
        type: 'multiple_choice',
        question: `What is d/dx[e^(-x)]?`,
        options: ["-e^(-x)", "e^(-x)", "-e^x"],
        correct: 0,
        explanation: `Chain rule: e^(-x) * (-1).`,
        xp: 5
      },
      {
        id: 'u2_l5_q16',
        type: 'typing',
        question: `What is d/dx[ln(x^2+1)]?`,
        correctAnswer: '2x/(x^2+1)',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 1/(x^2+1) * 2x.`,
        xp: 6
      },
      {
        id: 'u2_l5_q17',
        type: 'typing',
        question: `What is d/dx[(2x+5)^3]?`,
        correctAnswer: '6(2x+5)^2',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 3(2x+5)^2 * 2.`,
        xp: 5
      }
    ]
  },

  derivPractice: {
    id: "derivPractice",
    title: "Derivatives Practice",
    icon: "💪",
    unit: 2,
    xp: 93,
    questions: [
      {
        id: 'u2_l6_q1',
        type: 'typing',
        question: `What is d/dx[x^3 + 2x^2 - 5x + 1]?`,
        correctAnswer: '3x^2+4x-5',
        prompt: 'Type your answer:',
        explanation: `Power rule on each term.`,
        xp: 5
      },
      {
        id: 'u2_l6_q2',
        type: 'typing',
        question: `What is d/dx[(2x+1)(x-1)]?`,
        correctAnswer: '4x-1',
        prompt: 'Type your answer:',
        explanation: `Product rule: 2(x-1) + (2x+1)(1) = 4x-1.`,
        xp: 5
      },
      {
        id: 'u2_l6_q3',
        type: 'multiple_choice',
        question: `What is d/dx[x^2/(x+1)]?`,
        options: ["(x^2+2x)/(x+1)^2", "2x/(x+1)", "x/(x+1)"],
        correct: 0,
        explanation: `Quotient rule.`,
        xp: 5
      },
      {
        id: 'u2_l6_q4',
        type: 'typing',
        question: `What is d/dx[(x^2+1)^3]?`,
        correctAnswer: '6x(x^2+1)^2',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 3(x^2+1)^2 * 2x.`,
        xp: 5
      },
      {
        id: 'u2_l6_q5',
        type: 'multiple_choice',
        question: `What is d/dx[x * e^x]?`,
        options: ["e^x + xe^x", "e^x", "xe^x"],
        correct: 0,
        explanation: `Product rule with e^x.`,
        xp: 5
      },
      {
        id: 'u2_l6_q6',
        type: 'typing',
        question: `What is d/dx[sin(x) * cos(x)]?`,
        correctAnswer: 'cos^2(x)-sin^2(x)',
        prompt: 'Type your answer:',
        explanation: `Product rule: cos(x)*cos(x) + sin(x)*(-sin(x)).`,
        xp: 6
      },
      {
        id: 'u2_l6_q7',
        type: 'fill_blank',
        question: `To find d/dx[f(x)/g(x)], use the _____ rule.`,
        correctAnswer: 'quotient',
        prompt: 'Type your answer:',
        explanation: `Quotient rule for division.`,
        xp: 4
      },
      {
        id: 'u2_l6_q8',
        type: 'multiple_choice',
        question: `What is d/dx[e^(x^2)]?`,
        options: ["e^(x^2) * 2x", "e^(x^2)", "2xe^(x^2)"],
        correct: 0,
        explanation: `Chain rule with e^x.`,
        xp: 5
      },
      {
        id: 'u2_l6_q9',
        type: 'typing',
        question: `What is d/dx[sin(x)/x]?`,
        correctAnswer: '(xcos(x)-sin(x))/x^2',
        prompt: 'Type your answer:',
        explanation: `Quotient rule.`,
        xp: 6
      },
      {
        id: 'u2_l6_q10',
        type: 'multiple_choice',
        question: `What is d/dx[(3x)^2]?`,
        options: ["18x", "6x", "9x^2"],
        correct: 0,
        explanation: `Chain rule: 2(3x) * 3 = 18x.`,
        xp: 5
      },
      {
        id: 'u2_l6_q11',
        type: 'typing',
        question: `What is d/dx[ln(x) * x]?`,
        correctAnswer: '1+ln(x)',
        prompt: 'Type your answer:',
        explanation: `Product rule: (1/x)*x + ln(x)*1 = 1+ln(x).`,
        xp: 5
      },
      {
        id: 'u2_l6_q12',
        type: 'multiple_choice',
        question: `What is d/dx[√x * x^2]?`,
        options: ["(5/2)x^(3/2)", "(3/2)x^(1/2)", "x^(5/2)"],
        correct: 0,
        explanation: `Product rule.`,
        xp: 6
      },
      {
        id: 'u2_l6_q13',
        type: 'typing',
        question: `What is d/dx[1/(x^2+1)]?`,
        correctAnswer: '-2x/(x^2+1)^2',
        prompt: 'Type your answer:',
        explanation: `Chain rule.`,
        xp: 6
      },
      {
        id: 'u2_l6_q14',
        type: 'fill_blank',
        question: `Before differentiating x^2/x, it\'s best to _____ first.`,
        correctAnswer: 'simplify',
        prompt: 'Type your answer:',
        explanation: `Simplify to x, then derivative is 1.`,
        xp: 4
      },
      {
        id: 'u2_l6_q15',
        type: 'multiple_choice',
        question: `What is d/dx[cos(3x)]?`,
        options: ["-3sin(3x)", "-sin(3x)", "-3cos(3x)"],
        correct: 0,
        explanation: `Chain rule with cos.`,
        xp: 5
      },
      {
        id: 'u2_l6_q16',
        type: 'typing',
        question: `What is d/dx[(x^3+1)^2]?`,
        correctAnswer: '6x^2(x^3+1)',
        prompt: 'Type your answer:',
        explanation: `Chain rule: 2(x^3+1) * 3x^2.`,
        xp: 6
      },
      {
        id: 'u2_l6_q17',
        type: 'typing',
        question: `What is d/dx[x^4 + 3x^2 - 2x]?`,
        correctAnswer: '4x^3+6x-2',
        prompt: 'Type your answer:',
        explanation: `Power rule on each term.`,
        xp: 5
      },
      {
        id: 'u2_l6_q18',
        type: 'typing',
        question: `What is d/dx[(x+2)(x+3)]?`,
        correctAnswer: '2x+5',
        prompt: 'Type your answer:',
        explanation: `Product rule: 1*(x+3) + (x+2)*1 = 2x+5.`,
        xp: 5
      }
    ]
  },

  ratesOfChange: {
    id: "ratesOfChange",
    title: "Rates of Change",
    icon: "⏱️",
    unit: 3,
    xp: 72,
    questions: [
      {
        id: 'u3_l1_q1',
        type: 'multiple_choice',
        question: `The average rate of change from x=a to x=b is:`,
        options: ["(f(b)-f(a))/(b-a)", "(f(a)-f(b))/(a-b)", "f(b)-f(a)"],
        correct: 0,
        explanation: `Slope of secant line.`,
        xp: 4
      },
      {
        id: 'u3_l1_q2',
        type: 'typing',
        question: `For f(x) = x^2, find the average rate of change from x=1 to x=3.`,
        correctAnswer: '4',
        prompt: 'Type your answer:',
        explanation: `(f(3)-f(1))/(3-1) = (9-1)/2 = 4.`,
        xp: 5
      },
      {
        id: 'u3_l1_q3',
        type: 'multiple_choice',
        question: `The instantaneous rate of change at x=a is:`,
        options: ["f\\'(a)", "f(a)", "f\\'\\'(a)"],
        correct: 0,
        explanation: `Derivative at that point.`,
        xp: 4
      },
      {
        id: 'u3_l1_q4',
        type: 'typing',
        question: `For f(x) = x^2, find the instantaneous rate of change at x=2.`,
        correctAnswer: '4',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x, so f\'(2) = 4.`,
        diagram: 'diagrams/tangent_x2_2.0.png',
        xp: 5
      },
      {
        id: 'u3_l1_q5',
        type: 'multiple_choice',
        question: `If height h(t) = -16t^2 + 64t, what is velocity at t=1?`,
        options: ["32 ft/s", "48 ft/s", "64 ft/s"],
        correct: 0,
        explanation: `Velocity = h\'(t) = -32t+64, so h\'(1) = 32.`,
        xp: 5
      },
      {
        id: 'u3_l1_q6',
        type: 'fill_blank',
        question: `The _____ rate of change is the slope of a secant line, while the _____ rate of change is the slope of a tangent line.`,
        correctAnswer: 'average|instantaneous',
        prompt: 'Type your answer:',
        explanation: `Rate of change types.`,
        xp: 4
      },
      {
        id: 'u3_l1_q7',
        type: 'multiple_choice',
        question: `For f(x) = 3x+2, the rate of change is:`,
        options: ["Constant at 3", "Varying", "Zero"],
        correct: 0,
        explanation: `Linear function has constant slope.`,
        xp: 4
      },
      {
        id: 'u3_l1_q8',
        type: 'typing',
        question: `A car\'s position is s(t) = t^2+2t. What is velocity at t=2?`,
        correctAnswer: '6',
        prompt: 'Type your answer:',
        explanation: `v(t) = 2t+2, so v(2) = 6.`,
        xp: 5
      },
      {
        id: 'u3_l1_q9',
        type: 'multiple_choice',
        question: `If f(x) is increasing, then f\'(x) is:`,
        options: ["Positive", "Negative", "Zero"],
        correct: 0,
        explanation: `Increasing function has positive derivative.`,
        xp: 4
      },
      {
        id: 'u3_l1_q10',
        type: 'typing',
        question: `For f(x) = x^3, find the average rate of change from x=0 to x=2.`,
        correctAnswer: '4',
        prompt: 'Type your answer:',
        explanation: `(f(2)-f(0))/(2-0) = 8/2 = 4.`,
        xp: 5
      },
      {
        id: 'u3_l1_q11',
        type: 'fill_blank',
        question: `In physics, if s(t) is position, then v(t) = s\'(t) is _____ and a(t) = v\'(t) is _____.`,
        correctAnswer: 'velocity|acceleration',
        prompt: 'Type your answer:',
        explanation: `Physics relationships.`,
        xp: 4
      },
      {
        id: 'u3_l1_q12',
        type: 'multiple_choice',
        question: `The units of the derivative are:`,
        options: ["Units of y divided by units of x", "Units of x", "Units of y"],
        correct: 0,
        explanation: `Derivative is rate of change.`,
        xp: 4
      },
      {
        id: 'u3_l1_q13',
        type: 'typing',
        question: `If f(x) = e^x, what is the rate of change at x=0?`,
        correctAnswer: '1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = e^x, so f\'(0) = 1.`,
        xp: 5
      },
      {
        id: 'u3_l1_q14',
        type: 'multiple_choice',
        question: `When the instantaneous rate of change is zero, the function has a:`,
        options: ["Horizontal tangent line", "Vertical tangent line", "Maximum"],
        correct: 0,
        explanation: `Zero derivative means horizontal tangent.`,
        xp: 5
      },
      {
        id: 'u3_l1_q15',
        type: 'typing',
        question: `For f(x) = √x, find the average rate of change from x=1 to x=4.`,
        correctAnswer: '1/3',
        prompt: 'Type your answer:',
        explanation: `(2-1)/(4-1) = 1/3.`,
        xp: 5
      },
      {
        id: 'u3_l1_q16',
        type: 'typing',
        question: `For f(x) = 2x+1, what is the rate of change at any point?`,
        correctAnswer: '2',
        prompt: 'Type your answer:',
        explanation: `Constant slope of 2.`,
        xp: 4
      }
    ]
  },

  tangentLines: {
    id: "tangentLines",
    title: "Tangent Lines",
    icon: "📏",
    unit: 3,
    xp: 80,
    questions: [
      {
        id: 'u3_l2_q1',
        type: 'multiple_choice',
        question: `The equation of the tangent line at x=a is:`,
        options: ["y - f(a) = f\\'(a)(x - a)", "y = f\\'(a)x + f(a)", "y = f(a) + f\\'(a)x"],
        correct: 0,
        explanation: `Point-slope form.`,
        diagram: 'diagrams/tangent_x2_1.0.png',
        xp: 4
      },
      {
        id: 'u3_l2_q2',
        type: 'typing',
        question: `Find the tangent line to y = x^2 at x=1.`,
        correctAnswer: 'y-1=2(x-1)',
        prompt: 'Type your answer:',
        explanation: `Point (1,1), slope f\'(1)=2. Equation: y-1=2(x-1).`,
        xp: 5
      },
      {
        id: 'u3_l2_q3',
        type: 'multiple_choice',
        question: `What is the slope of the tangent to y = x^3 at x=2?`,
        options: ["12", "8", "6"],
        correct: 0,
        explanation: `f\'(x) = 3x^2, so f\'(2) = 12.`,
        diagram: 'diagrams/tangent_x3_2.0.png',
        xp: 4
      },
      {
        id: 'u3_l2_q4',
        type: 'typing',
        question: `Find the tangent line to y = 2x+3 at any point.`,
        correctAnswer: 'y=2x+3',
        prompt: 'Type your answer:',
        explanation: `For a line, the tangent is the line itself.`,
        xp: 4
      },
      {
        id: 'u3_l2_q5',
        type: 'fill_blank',
        question: `To find the tangent line equation, you need: a _____ on the line and the _____ of the line.`,
        correctAnswer: 'point|slope',
        prompt: 'Type your answer:',
        explanation: `Tangent line requirements.`,
        xp: 4
      },
      {
        id: 'u3_l2_q6',
        type: 'multiple_choice',
        question: `The tangent to y = √x at x=4 has slope:`,
        options: ["1/4", "1/2", "2"],
        correct: 0,
        explanation: `f\'(x) = 1/(2√x), so f\'(4) = 1/4.`,
        xp: 5
      },
      {
        id: 'u3_l2_q7',
        type: 'typing',
        question: `Find the tangent line to y = x^2 at x=-1.`,
        correctAnswer: 'y-1=-2(x+1)',
        prompt: 'Type your answer:',
        explanation: `Point (-1,1), slope f\'(-1)=-2. Equation: y-1=-2(x+1).`,
        xp: 5
      },
      {
        id: 'u3_l2_q8',
        type: 'multiple_choice',
        question: `If the tangent line is horizontal, then the derivative is:`,
        options: ["Zero", "Undefined", "Positive"],
        correct: 0,
        explanation: `Horizontal line has slope 0.`,
        xp: 4
      },
      {
        id: 'u3_l2_q9',
        type: 'typing',
        question: `At what x-value does y = x^2 have a horizontal tangent?`,
        correctAnswer: '0',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x = 0 when x=0.`,
        xp: 5
      },
      {
        id: 'u3_l2_q10',
        type: 'multiple_choice',
        question: `The tangent to y = cos(x) at x=0 is:`,
        options: ["y = 1", "y = x+1", "y = x"],
        correct: 0,
        explanation: `Point (0,1), slope f\'(0)=-sin(0)=0. Equation: y=1.`,
        xp: 5
      },
      {
        id: 'u3_l2_q11',
        type: 'fill_blank',
        question: `The _____ line approximates the function near a point.`,
        correctAnswer: 'tangent',
        prompt: 'Type your answer:',
        explanation: `Tangent line approximation.`,
        xp: 4
      },
      {
        id: 'u3_l2_q12',
        type: 'typing',
        question: `Find the tangent line to y = 1/x at x=1.`,
        correctAnswer: 'y-1=-1(x-1)',
        prompt: 'Type your answer:',
        explanation: `Point (1,1), slope f\'(1)=-1. Equation: y-1=-1(x-1).`,
        xp: 6
      },
      {
        id: 'u3_l2_q13',
        type: 'multiple_choice',
        question: `If two curves have the same tangent line at a point, they are:`,
        options: ["Tangent to each other", "Parallel", "Perpendicular"],
        correct: 0,
        explanation: `Same tangent means tangent to each other.`,
        xp: 5
      },
      {
        id: 'u3_l2_q14',
        type: 'typing',
        question: `At what point does y = x^2 have tangent slope of 4?`,
        correctAnswer: 'x=2',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x = 4 when x=2.`,
        xp: 5
      },
      {
        id: 'u3_l2_q15',
        type: 'multiple_choice',
        question: `The linearization of f(x) at x=a is:`,
        options: ["L(x) = f(a) + f\\'(a)(x-a)", "L(x) = f\\'(a)(x-a)", "L(x) = f(x) + f\\'(x)"],
        correct: 0,
        explanation: `Linearization formula.`,
        xp: 5
      },
      {
        id: 'u3_l2_q16',
        type: 'typing',
        question: `Find the tangent to y = x^2-2x+1 at x=2.`,
        correctAnswer: 'y-1=2(x-2)',
        prompt: 'Type your answer:',
        explanation: `Point (2,1), slope f\'(2)=2. Equation: y-1=2(x-2).`,
        xp: 5
      },
      {
        id: 'u3_l2_q17',
        type: 'typing',
        question: `Find the tangent to y = x^3 at x=1.`,
        correctAnswer: 'y-1=3(x-1)',
        prompt: 'Type your answer:',
        explanation: `Point (1,1), slope f\'(1)=3. Equation: y-1=3(x-1).`,
        xp: 5
      }
    ]
  },

  curveSketching: {
    id: "curveSketching",
    title: "Curve Sketching",
    icon: "📊",
    unit: 3,
    xp: 77,
    questions: [
      {
        id: 'u3_l3_q1',
        type: 'multiple_choice',
        question: `If f\'(x) > 0 on an interval, the function is:`,
        options: ["Increasing", "Decreasing", "Constant"],
        correct: 0,
        explanation: `Positive derivative means increasing.`,
        xp: 4
      },
      {
        id: 'u3_l3_q2',
        type: 'typing',
        question: `If f(x) = x^3 - 3x, where is f\'(x) = 0?`,
        correctAnswer: 'x=±1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 3x^2-3 = 0 when x=±1.`,
        xp: 5
      },
      {
        id: 'u3_l3_q3',
        type: 'multiple_choice',
        question: `If f\'(x) changes from positive to negative at x=c, then:`,
        options: ["f has a local maximum at c", "f has a local minimum at c", "f is constant at c"],
        correct: 0,
        explanation: `Sign change + to - indicates maximum.`,
        xp: 5
      },
      {
        id: 'u3_l3_q4',
        type: 'typing',
        question: `For f(x) = x^2, what is the behavior at x=0?`,
        correctAnswer: 'minimum',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x, f\'(0)=0, f\'\'(0)=2>0, so minimum.`,
        xp: 5
      },
      {
        id: 'u3_l3_q5',
        type: 'multiple_choice',
        question: `If f\'\'(x) > 0 on an interval, the graph is:`,
        options: ["Concave up", "Concave down", "Linear"],
        correct: 0,
        explanation: `Positive second derivative means concave up.`,
        xp: 4
      },
      {
        id: 'u3_l3_q6',
        type: 'typing',
        question: `For f(x) = x^3 - 3x^2, find inflection points.`,
        correctAnswer: 'x=1',
        prompt: 'Type your answer:',
        explanation: `f\'\'(x) = 6x-6 = 0 when x=1.`,
        xp: 6
      },
      {
        id: 'u3_l3_q7',
        type: 'fill_blank',
        question: `When f\'(x) = 0 and f\'\'(x) > 0, the point is a local _____.`,
        correctAnswer: 'minimum',
        prompt: 'Type your answer:',
        explanation: `Second derivative test.`,
        xp: 4
      },
      {
        id: 'u3_l3_q8',
        type: 'multiple_choice',
        question: `If f\'\'(x) < 0, the function is:`,
        options: ["Concave down", "Concave up", "Neither"],
        correct: 0,
        explanation: `Negative second derivative means concave down.`,
        xp: 4
      },
      {
        id: 'u3_l3_q9',
        type: 'typing',
        question: `For f(x) = x^4 - 4x^2, find critical points.`,
        correctAnswer: 'x=0,±√2',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 4x^3-8x = 0 gives x=0,±√2.`,
        xp: 6
      },
      {
        id: 'u3_l3_q10',
        type: 'multiple_choice',
        question: `An inflection point occurs where:`,
        options: ["f\\'\\'(x) = 0 and changes sign", "f\\'(x) = 0", "f(x) = 0"],
        correct: 0,
        explanation: `Inflection where concavity changes.`,
        xp: 5
      },
      {
        id: 'u3_l3_q11',
        type: 'typing',
        question: `For f(x) = x^3, is x=0 a max, min, or neither?`,
        correctAnswer: 'neither',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 3x^2, f\'(0)=0 but doesn\'t change sign.`,
        xp: 5
      },
      {
        id: 'u3_l3_q12',
        type: 'fill_blank',
        question: `The _____ derivative tells us about the concavity of the function.`,
        correctAnswer: 'second',
        prompt: 'Type your answer:',
        explanation: `Second derivative relates to concavity.`,
        xp: 4
      },
      {
        id: 'u3_l3_q13',
        type: 'multiple_choice',
        question: `If f\'(x) changes from negative to positive at x=c, then:`,
        options: ["f has a local minimum at c", "f has a local maximum at c", "f is constant at c"],
        correct: 0,
        explanation: `Sign change - to + indicates minimum.`,
        xp: 5
      },
      {
        id: 'u3_l3_q14',
        type: 'typing',
        question: `For f(x) = x^2 - 4x, find the vertex.`,
        correctAnswer: 'x=2',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x-4 = 0 when x=2.`,
        xp: 5
      },
      {
        id: 'u3_l3_q15',
        type: 'multiple_choice',
        question: `A horizontal asymptote occurs when:`,
        options: ["limit as x\u2192\u00b1\u221e is finite", "limit as x\u2192a is finite", "f(x) is constant"],
        correct: 0,
        explanation: `Horizontal asymptote at infinity.`,
        xp: 5
      },
      {
        id: 'u3_l3_q16',
        type: 'typing',
        question: `For f(x) = 1/x, what happens at x=0?`,
        correctAnswer: 'vertical asymptote',
        prompt: 'Type your answer:',
        explanation: `Function undefined at x=0.`,
        xp: 5
      }
    ]
  },

  optimization: {
    id: "optimization",
    title: "Optimization",
    icon: "🎯",
    unit: 3,
    xp: 80,
    questions: [
      {
        id: 'u4_l4_q1',
        type: 'multiple_choice',
        question: `To optimize a function, we:`,
        options: ["Find where f\\'(x) = 0", "Find where f(x) = 0", "Find where f\\'\\'(x) = 0"],
        correct: 0,
        explanation: `Critical points where derivative is zero.`,
        xp: 4
      },
      {
        id: 'u4_l4_q2',
        type: 'typing',
        question: `Maximize f(x) = -x^2 + 4x - 3.`,
        correctAnswer: 'x=2',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = -2x+4 = 0 when x=2. f\'\'(x) = -2 < 0, so maximum.`,
        xp: 5
      },
      {
        id: 'u4_l4_q3',
        type: 'multiple_choice',
        question: `Minimize f(x) = x^2 - 6x + 10.`,
        options: ["x=3", "x=0", "x=6"],
        correct: 0,
        explanation: `f\'(x) = 2x-6 = 0 when x=3. f\'\'(x) = 2 > 0, so minimum.`,
        xp: 5
      },
      {
        id: 'u4_l4_q4',
        type: 'typing',
        question: `Find the maximum of f(x) = -x^2 + 2x + 3.`,
        correctAnswer: '4',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = -2x+2 = 0 when x=1. f(1) = 4.`,
        xp: 5
      },
      {
        id: 'u4_l4_q5',
        type: 'fill_blank',
        question: `When f\'\'(x) > 0 at a critical point, we have a local _____.`,
        correctAnswer: 'minimum',
        prompt: 'Type your answer:',
        explanation: `Second derivative test.`,
        xp: 4
      },
      {
        id: 'u4_l4_q6',
        type: 'multiple_choice',
        question: `When f\'\'(x) < 0 at a critical point, we have:`,
        options: ["Local maximum", "Local minimum", "Inflection point"],
        correct: 0,
        explanation: `Negative second derivative means maximum.`,
        xp: 5
      },
      {
        id: 'u4_l4_q7',
        type: 'typing',
        question: `A rectangle has perimeter 20. Maximize its area.`,
        correctAnswer: '5x5',
        prompt: 'Type your answer:',
        explanation: `P=2(l+w)=20, so l+w=10. Area = lw = l(10-l). Max at l=5.`,
        xp: 6
      },
      {
        id: 'u4_l4_q8',
        type: 'multiple_choice',
        question: `Critical points occur where:`,
        options: ["f\\'(x) = 0 or f\\'(x) is undefined", "f(x) = 0", "f\\'\\'(x) = 0"],
        correct: 0,
        explanation: `Critical points definition.`,
        xp: 4
      },
      {
        id: 'u4_l4_q9',
        type: 'typing',
        question: `Find minimum of f(x) = x^4 - 4x^2.`,
        correctAnswer: '-4',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 4x^3-8x = 0. At x=±√2, f(x) = -4.`,
        xp: 6
      },
      {
        id: 'u4_l4_q10',
        type: 'multiple_choice',
        question: `To find global maximum on a closed interval:`,
        options: ["Check critical points and endpoints", "Check only critical points", "Check only endpoints"],
        correct: 0,
        explanation: `Check all candidates.`,
        xp: 5
      },
      {
        id: 'u4_l4_q11',
        type: 'typing',
        question: `Maximize f(x) = 2x - x^2 on [0,3].`,
        correctAnswer: '1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2-2x = 0 when x=1. f(1) = 1 is max.`,
        xp: 5
      },
      {
        id: 'u4_l4_q12',
        type: 'fill_blank',
        question: `The _____ derivative test helps classify critical points.`,
        correctAnswer: 'second',
        prompt: 'Type your answer:',
        explanation: `Second derivative test.`,
        xp: 4
      },
      {
        id: 'u4_l4_q13',
        type: 'multiple_choice',
        question: `If f\'(c) = 0 and f\'\'(c) = 0, the test is:`,
        options: ["Inconclusive", "Maximum", "Minimum"],
        correct: 0,
        explanation: `Need other methods.`,
        xp: 5
      },
      {
        id: 'u4_l4_q14',
        type: 'typing',
        question: `Find the point closest to origin on y = x^2.`,
        correctAnswer: '(0,0)',
        prompt: 'Type your answer:',
        explanation: `Minimize d^2 = x^2 + (x^2)^2 = x^2 + x^4. Derivative: 2x + 4x^3 = 0, x=0.`,
        xp: 6
      },
      {
        id: 'u4_l4_q15',
        type: 'multiple_choice',
        question: `For a constrained optimization problem, we might use:`,
        options: ["Substitution or Lagrange multipliers", "Only second derivative", "Only first derivative"],
        correct: 0,
        explanation: `Methods for constraints.`,
        xp: 5
      },
      {
        id: 'u4_l4_q16',
        type: 'typing',
        question: `Maximize product of two numbers with sum 10.`,
        correctAnswer: '5*5',
        prompt: 'Type your answer:',
        explanation: `Numbers x and (10-x). Product: x(10-x). Max at x=5.`,
        xp: 6
      }
    ]
  },

  relatedRates: {
    id: "relatedRates",
    title: "Related Rates",
    icon: "🔗",
    unit: 3,
    xp: 83,
    questions: [
      {
        id: 'u3_l5_q1',
        type: 'multiple_choice',
        question: `Related rates problems involve:`,
        options: ["Quantities changing with time", "Static quantities", "Only one variable"],
        correct: 0,
        explanation: `Rates of related quantities changing over time.`,
        xp: 4
      },
      {
        id: 'u3_l5_q2',
        type: 'typing',
        question: `If x^2 + y^2 = 25 and dx/dt = 3, find dy/dt when x=3, y=4.`,
        correctAnswer: '-9/4',
        prompt: 'Type your answer:',
        explanation: `2x(dx/dt) + 2y(dy/dt) = 0. 2(3)(3) + 2(4)(dy/dt) = 0. dy/dt = -9/4.`,
        xp: 6
      },
      {
        id: 'u3_l5_q3',
        type: 'multiple_choice',
        question: `For a circle, if radius grows at 2 cm/s, at what rate does area grow when r=5?`,
        options: ["20\u03c0 cm\u00b2/s", "10\u03c0 cm\u00b2/s", "25\u03c0 cm\u00b2/s"],
        correct: 0,
        explanation: `A = πr², dA/dt = 2πr(dr/dt) = 2π(5)(2) = 20π.`,
        xp: 6
      },
      {
        id: 'u3_l5_q4',
        type: 'typing',
        question: `For y = x^3, if dy/dt = 6 when x=2, find dx/dt.`,
        correctAnswer: '1/4',
        prompt: 'Type your answer:',
        explanation: `dy/dt = 3x²(dx/dt). 6 = 3(4)(dx/dt). dx/dt = 1/4.`,
        xp: 5
      },
      {
        id: 'u3_l5_q5',
        type: 'fill_blank',
        question: `In related rates, we use _____ differentiation with respect to time.`,
        correctAnswer: 'implicit',
        prompt: 'Type your answer:',
        explanation: `Differentiate both sides wrt time.`,
        xp: 4
      },
      {
        id: 'u3_l5_q6',
        type: 'multiple_choice',
        question: `For a right triangle with legs x and y, if x grows at 3 and y shrinks at 4, how does hypotenuse change?`,
        options: ["Depends on values", "Always increases", "Always decreases"],
        correct: 0,
        explanation: `Need specific values to determine.`,
        xp: 5
      },
      {
        id: 'u3_l5_q7',
        type: 'typing',
        question: `If V = (4/3)πr³ and dV/dt = 4π when r=2, find dr/dt.`,
        correctAnswer: '1/4',
        prompt: 'Type your answer:',
        explanation: `dV/dt = 4πr²(dr/dt). 4π = 4π(4)(dr/dt). dr/dt = 1/4.`,
        xp: 6
      },
      {
        id: 'u3_l5_q8',
        type: 'multiple_choice',
        question: `Related rates often involve:`,
        options: ["Geometry and physics", "Only algebra", "Only calculus"],
        correct: 0,
        explanation: `Applied problems from various fields.`,
        xp: 5
      },
      {
        id: 'u3_l5_q9',
        type: 'typing',
        question: `For a rectangle, if length grows at 2 and width shrinks at 1, at what rate does area change when l=4, w=3?`,
        correctAnswer: '2',
        prompt: 'Type your answer:',
        explanation: `A = lw, dA/dt = l(dw/dt) + w(dl/dt) = 4(-1) + 3(2) = 2.`,
        xp: 6
      },
      {
        id: 'u3_l5_q10',
        type: 'fill_blank',
        question: `The key to related rates is finding the _____ relationship and differentiating.`,
        correctAnswer: 'equation',
        prompt: 'Type your answer:',
        explanation: `Find equation relating variables.`,
        xp: 4
      },
      {
        id: 'u3_l5_q11',
        type: 'multiple_choice',
        question: `If a ladder 10m long slides down, and top moves at 1 m/s when bottom is 6m from wall, how fast does bottom move?`,
        options: ["0.75 m/s", "1 m/s", "1.33 m/s"],
        correct: 0,
        explanation: `x² + y² = 100. When x=6, y=8. 2x(dx/dt) + 2y(dy/dt) = 0. 12(dx/dt) + 16(-1) = 0. dx/dt = 4/3.`,
        xp: 6
      },
      {
        id: 'u3_l5_q12',
        type: 'typing',
        question: `For xy = 12, if dx/dt = 2 and x=3, find dy/dt.`,
        correctAnswer: '-8/3',
        prompt: 'Type your answer:',
        explanation: `x(dy/dt) + y(dx/dt) = 0. 3(dy/dt) + 4(2) = 0. dy/dt = -8/3.`,
        xp: 6
      },
      {
        id: 'u3_l5_q13',
        type: 'multiple_choice',
        question: `When solving related rates:`,
        options: ["Draw a diagram first", "Skip to differentiation", "Only use numbers"],
        correct: 0,
        explanation: `Visualize the problem first.`,
        xp: 5
      },
      {
        id: 'u3_l5_q14',
        type: 'typing',
        question: `If s = 16t² and ds/dt = 32t, what is d²s/dt²?`,
        correctAnswer: '32',
        prompt: 'Type your answer:',
        explanation: `d²s/dt² = 32 (acceleration is constant).`,
        xp: 5
      },
      {
        id: 'u3_l5_q15',
        type: 'fill_blank',
        question: `Related rates connect the rates of change of _____ quantities.`,
        correctAnswer: 'related',
        prompt: 'Type your answer:',
        explanation: `Connected variables.`,
        xp: 4
      },
      {
        id: 'u3_l5_q16',
        type: 'typing',
        question: `For y² = x and dy/dt = 2 when x=4, find dx/dt.`,
        correctAnswer: '16',
        prompt: 'Type your answer:',
        explanation: `2y(dy/dt) = dx/dt. When x=4, y=±2. 2(2)(2) = dx/dt = 8.`,
        xp: 6
      }
    ]
  },

  derivAppsPractice: {
    id: "derivAppsPractice",
    title: "Applications Practice",
    icon: "💪",
    unit: 3,
    xp: 92,
    questions: [
      {
        id: 'u3_l6_q1',
        type: 'typing',
        question: `Find the tangent line to y = x² at x=3.`,
        correctAnswer: 'y-9=6(x-3)',
        prompt: 'Type your answer:',
        explanation: `Point (3,9), slope f\'(3)=6. Equation: y-9=6(x-3).`,
        xp: 5
      },
      {
        id: 'u3_l6_q2',
        type: 'typing',
        question: `Maximize f(x) = -x² + 6x - 8.`,
        correctAnswer: '1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = -2x+6 = 0 when x=3. f(3) = 1.`,
        xp: 5
      },
      {
        id: 'u3_l6_q3',
        type: 'multiple_choice',
        question: `If f\'(x) > 0 and f\'\'(x) < 0, the function is:`,
        options: ["Increasing and concave down", "Decreasing and concave up", "Increasing and concave up"],
        correct: 0,
        explanation: `First derivative positive (increasing), second negative (concave down).`,
        xp: 5
      },
      {
        id: 'u3_l6_q4',
        type: 'typing',
        question: `Find minimum of f(x) = x² - 8x + 17.`,
        correctAnswer: '1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 2x-8 = 0 when x=4. f(4) = 1.`,
        xp: 5
      },
      {
        id: 'u3_l6_q5',
        type: 'fill_blank',
        question: `The _____ gives the instantaneous rate of change.`,
        correctAnswer: 'derivative',
        prompt: 'Type your answer:',
        explanation: `Derivative definition.`,
        xp: 4
      },
      {
        id: 'u3_l6_q6',
        type: 'multiple_choice',
        question: `At an inflection point:`,
        options: ["Concavity changes sign", "Function reaches maximum", "Derivative is zero"],
        correct: 0,
        explanation: `Inflection point definition.`,
        xp: 5
      },
      {
        id: 'u3_l6_q7',
        type: 'typing',
        question: `For f(x) = x³ - 3x, find where it\'s increasing.`,
        correctAnswer: '|x|>1',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 3x²-3 > 0 when |x| > 1.`,
        xp: 6
      },
      {
        id: 'u3_l6_q8',
        type: 'multiple_choice',
        question: `If f\'(c) = 0 and f\'\'(c) > 0, then x=c is:`,
        options: ["Local minimum", "Local maximum", "Neither"],
        correct: 0,
        explanation: `Second derivative test.`,
        xp: 5
      },
      {
        id: 'u3_l6_q9',
        type: 'typing',
        question: `Find the average rate of change of f(x)=x³ from x=0 to x=2.`,
        correctAnswer: '4',
        prompt: 'Type your answer:',
        explanation: `(8-0)/2 = 4.`,
        xp: 5
      },
      {
        id: 'u3_l6_q10',
        type: 'fill_blank',
        question: `To find global extrema on a closed interval, check _____ points and endpoints.`,
        correctAnswer: 'critical',
        prompt: 'Type your answer:',
        explanation: `Global extrema method.`,
        xp: 4
      },
      {
        id: 'u3_l6_q11',
        type: 'multiple_choice',
        question: `For y = x² + 1, the tangent at x=0 is:`,
        options: ["y = 1", "y = x", "y = x + 1"],
        correct: 0,
        explanation: `Point (0,1), slope f\'(0)=0. Equation: y=1.`,
        xp: 5
      },
      {
        id: 'u3_l6_q12',
        type: 'typing',
        question: `For x² + y² = 100, if dx/dt = 4 and x=6, find dy/dt.`,
        correctAnswer: '-3',
        prompt: 'Type your answer:',
        explanation: `2x(dx/dt) + 2y(dy/dt) = 0. When x=6, y=8. 12(4) + 16(dy/dt) = 0. dy/dt = -3.`,
        xp: 6
      },
      {
        id: 'u3_l6_q13',
        type: 'multiple_choice',
        question: `The second derivative test is:`,
        options: ["Useful for classifying critical points", "Always conclusive", "Only for linear functions"],
        correct: 0,
        explanation: `Second derivative test purpose.`,
        xp: 5
      },
      {
        id: 'u3_l6_q14',
        type: 'typing',
        question: `Find the maximum of f(x) = e^(-x) * x on [0,∞).`,
        correctAnswer: '1/e',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = e^(-x) - xe^(-x) = 0 when x=1. f(1) = 1/e.`,
        xp: 6
      },
      {
        id: 'u3_l6_q15',
        type: 'fill_blank',
        question: `_____ rates involve quantities that change over time and are related.`,
        correctAnswer: 'related',
        prompt: 'Type your answer:',
        explanation: `Related rates definition.`,
        xp: 4
      },
      {
        id: 'u3_l6_q16',
        type: 'multiple_choice',
        question: `If f\'\'(x) = 0 and f\'\' changes sign, we have:`,
        options: ["Inflection point", "Maximum", "Minimum"],
        correct: 0,
        explanation: `Inflection point condition.`,
        xp: 5
      },
      {
        id: 'u3_l6_q17',
        type: 'typing',
        question: `For f(x) = x⁴ - 2x², find local maxima and minima.`,
        correctAnswer: 'min at x=±1, max at x=0',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 4x³-4x = 0. Critical at x=0,±1. f\'\'(x) = 12x²-4. f\'\'(±1)=8>0 (min), f\'\'(0)=-4<0 (max).`,
        xp: 6
      },
      {
        id: 'u3_l6_q18',
        type: 'typing',
        question: `Find where f(x) = x³ - 6x² + 9x is increasing.`,
        correctAnswer: 'x<1 or x>3',
        prompt: 'Type your answer:',
        explanation: `f\'(x) = 3x²-12x+9 = 3(x-1)(x-3). Positive when x<1 or x>3.`,
        xp: 6
      }
    ]
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CalculusLessonsComplete;
} else {
  window.CalculusLessonsComplete = CalculusLessonsComplete;
}
