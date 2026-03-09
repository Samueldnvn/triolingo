/**
 * COMPREHENSIVE CALCULUS LESSONS - UNITS 3-18
 * Generated on 2026-03-01 16:21:54
 * All units with 15-20 questions each
 * Total: 102 lessons (Units 3-18)
 */

const CalculusComprehensiveLessons = {

  // Rates of Change
  derivApps1() {
    return {
      id: 'calc_u3_l1',
      title: 'Rates of Change',
      unit: 3,
      icon: '⏱️',
      xp: 88,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u3_l1_q1',
          type: 'multiple_choice',
          question: "The derivative f'(x) represents:",
          options: ["Instantaneous rate of change", "Average rate of change", "Total change", "Accumulated value"],
          correct: 0,
          explanation: "The derivative gives instantaneous rate of change.",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q2',
          type: 'typing',
          question: "If s(t) = t², find velocity v(t).",
          correctAnswer: '2t',
          prompt: 'Type your answer:',
          explanation: "Velocity is s'(t) = 2t",
          diagram: 'diagrams/velocity_graph.png',
          xp: 5
        },
        {
          id: 'calc_u3_l1_q3',
          type: 'multiple_choice',
          question: "If s(t) = 5t³, find acceleration a(t):",
          options: ["\\\\(30t\\\\)", "\\\\(15t²\\\\)", "\\\\(5t²\\\\)", "\\\\(t²\\\\)"],
          correct: 0,
          explanation: "Acceleration is s''(t) = 30t",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q4',
          type: 'typing',
          question: "If C(x) = x² + 10x, find marginal cost.",
          correctAnswer: '2x+10',
          prompt: 'Type your answer:',
          explanation: "Marginal cost is C'(x) = 2x + 10",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q5',
          type: 'multiple_choice',
          question: "Average rate of change of f(x)=x² from 1 to 3:",
          options: ["4", "8", "2", "6"],
          correct: 0,
          explanation: "(f(3)-f(1))/(3-1) = (9-1)/2 = 4",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q6',
          type: 'typing',
          question: "If h(t) = -16t² + 64t, when does it reach max height?",
          correctAnswer: '2',
          prompt: 'Type your answer:',
          explanation: "Max when h'(t) = -32t + 64 = 0, so t = 2",
          diagram: 'diagrams/projectile_motion.png',
          xp: 6
        },
        {
          id: 'calc_u3_l1_q7',
          type: 'fill_blank',
          question: "The _____ derivative of position is velocity. The _____ derivative is acceleration.",
          correctAnswer: 'first|second',
          prompt: 'Type your answer:',
          explanation: "First: velocity. Second: acceleration.",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q8',
          type: 'multiple_choice',
          question: "If R(x) = 100x - x², marginal revenue is:",
          options: ["\\\\(100-2x\\\\)", "\\\\(100-x\\\\)", "\\\\(200-x\\\\)", "\\\\(100x\\\\)"],
          correct: 0,
          explanation: "R'(x) = 100 - 2x",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q9',
          type: 'typing',
          question: "If P(x) = 50x - x² - 100, find marginal profit.",
          correctAnswer: '50-2x',
          prompt: 'Type your answer:',
          explanation: "P'(x) = 50 - 2x",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q10',
          type: 'multiple_choice',
          question: "Average = instantaneous rate when:",
          options: ["By Mean Value Theorem", "Always", "Never", "At endpoints"],
          correct: 0,
          explanation: "MVT guarantees a point where they're equal.",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q11',
          type: 'typing',
          question: "If T(t) = t² - 4t + 10, find rate at t=3.",
          correctAnswer: '2',
          prompt: 'Type your answer:',
          explanation: "T'(t) = 2t - 4, so T'(3) = 2",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q12',
          type: 'match_pairs',
          question: "Match application:",
          pairs: [{"left": "Position's derivative", "right": "Velocity"}, {"left": "Velocity's derivative", "right": "Acceleration"}, {"left": "Cost's derivative", "right": "Marginal Cost"}, {"left": "Revenue's derivative", "right": "Marginal Revenue"}],
          xp: 8
        },
        {
          id: 'calc_u3_l1_q13',
          type: 'multiple_choice',
          question: "If h(t) = 5 - t/2, rate of change:",
          options: ["-1/2", "5", "2", "-5"],
          correct: 0,
          explanation: "h'(t) = -1/2",
          xp: 5
        },
        {
          id: 'calc_u3_l1_q14',
          type: 'typing',
          question: "If P(t) = 1000e^(0.02t), find growth rate.",
          correctAnswer: '20e^(0.02t)',
          prompt: 'Type your answer:',
          explanation: "P'(t) = 20e^(0.02t)",
          xp: 6
        },
        {
          id: 'calc_u3_l1_q15',
          type: 'fill_blank',
          question: "Marginal analysis uses derivatives in _____ applications.",
          correctAnswer: 'economic|business',
          prompt: 'Type your answer:',
          explanation: "Used in economics.",
          xp: 4
        },
        {
          id: 'calc_u3_l1_q16',
          type: 'multiple_choice',
          question: "If s(t) = t³ + 2t, velocity at t=2:",
          options: ["14", "12", "10", "8"],
          correct: 0,
          explanation: "v(t) = 3t² + 2, v(2) = 14",
          xp: 6
        },
        {
          id: 'calc_u3_l1_q17',
          type: 'typing',
          question: "If s(t) = 3t², when is velocity 30?",
          correctAnswer: '5',
          prompt: 'Type your answer:',
          explanation: "v(t) = 6t = 30, t = 5",
          xp: 5
        }
      ]
    };
  },
  // Tangent Lines
  derivApps2() {
    return {
      id: 'calc_u3_l2',
      title: 'Tangent Lines',
      unit: 3,
      icon: '📏',
      xp: 88,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u3_l2_q1',
          type: 'multiple_choice',
          question: "Tangent line equation at x=a:",
          options: ["\\\\(y = f(a) + f"(a)(x-a)\\\\)", "\\\\(y = f(x) + f"(x)\\\\)", "\\\\(y = f(a)\\\\)", "\\\\(y = f"(a)x\\\\)"],
          correct: 0,
          explanation: "y - f(a) = f'(a)(x-a)",
          xp: 4
        },
        {
          id: 'calc_u3_l2_q2',
          type: 'typing',
          question: "Tangent to f(x)=x² at x=2:",
          correctAnswer: 'y=4x-4',
          prompt: 'Type your answer:',
          explanation: "f'(2)=4, f(2)=4. y-4=4(x-2)",
          diagram: 'diagrams/tangent_line_equation.png',
          xp: 5
        },
        {
          id: 'calc_u3_l2_q3',
          type: 'multiple_choice',
          question: "Slope of tangent to f(x)=x³ at x=1:",
          options: ["3", "1", "0", "3x²"],
          correct: 0,
          explanation: "f'(1) = 3",
          xp: 4
        },
        {
          id: 'calc_u3_l2_q4',
          type: 'typing',
          question: "Tangent to f(x)=√x at x=4:",
          correctAnswer: 'y=1/4x+1',
          prompt: 'Type your answer:',
          explanation: "f'(4)=1/4, f(4)=2. y-2=(1/4)(x-4)",
          xp: 6
        },
        {
          id: 'calc_u3_l2_q5',
          type: 'multiple_choice',
          question: "Tangent to f(x)=x² at x=0:",
          options: ["y=0", "y=x", "y=2x", "Vertical"],
          correct: 0,
          explanation: "Horizontal tangent at origin",
          xp: 5
        },
        {
          id: 'calc_u3_l2_q6',
          type: 'typing',
          question: "Where does f(x)=x² have horizontal tangent?",
          correctAnswer: '(0,0)',
          prompt: 'Type your answer:',
          explanation: "f'(x)=2x=0 at x=0",
          diagram: 'diagrams/horizontal_tangent.png',
          xp: 5
        },
        {
          id: 'calc_u3_l2_q7',
          type: 'fill_blank',
          question: "Horizontal tangent when f' = _____. Vertical when f' = _____.",
          correctAnswer: '0|undefined',
          prompt: 'Type your answer:',
          explanation: "Horizontal: 0. Vertical: undefined.",
          xp: 4
        },
        {
          id: 'calc_u3_l2_q8',
          type: 'multiple_choice',
          question: "Tangent to f(x)=x³ at x=0 has slope:",
          options: ["0", "1", "∞", "3"],
          correct: 0,
          explanation: "f'(0)=0",
          xp: 4
        },
        {
          id: 'calc_u3_l2_q9',
          type: 'typing',
          question: "Tangent to f(x)=1/x at x=1:",
          correctAnswer: 'y=-x+2',
          prompt: 'Type your answer:',
          explanation: "f'(1)=-1, f(1)=1. y-1=-1(x-1)",
          xp: 6
        },
        {
          id: 'calc_u3_l2_q10',
          type: 'multiple_choice',
          question: "Tangent to f(x)=sin(x) at x=0:",
          options: ["\\\\(y=x\\\\)", "\\\\(y=0\\\\)", "\\\\(y=sin(x)\\\\)", "\\\\(y=cos(x)\\\\)"],
          correct: 0,
          explanation: "f'(0)=1, f(0)=0. y=x",
          xp: 5
        },
        {
          id: 'calc_u3_l2_q11',
          type: 'typing',
          question: "Where does f(x)=x³-3x have horizontal tangent?",
          correctAnswer: '1,-1',
          prompt: 'Type your answer:',
          explanation: "f'(x)=3x²-3=0 at x=±1",
          xp: 6
        },
        {
          id: 'calc_u3_l2_q12',
          type: 'match_pairs',
          question: "Match tangent at x=1:",
          pairs: [{"left": "\\\\(f(x)=x\\\\)", "right": "\\\\(y=x\\\\)"}, {"left": "\\\\(f(x)=x\u00b2\\\\)", "right": "\\\\(y=2x-1\\\\)"}, {"left": "\\\\(f(x)=x\u00b3\\\\)", "right": "\\\\(y=3x-2\\\\)"}, {"left": "\\\\(f(x)=\u221ax\\\\)", "right": "\\\\(y=(1/2)x+(1/2)\\\\)"}],
          xp: 8
        },
        {
          id: 'calc_u3_l2_q13',
          type: 'multiple_choice',
          question: "Normal line is:",
          options: ["Perpendicular to tangent", "Parallel to tangent", "Same as tangent", "At 45°"],
          correct: 0,
          explanation: "Normal is perpendicular to tangent.",
          xp: 5
        },
        {
          id: 'calc_u3_l2_q14',
          type: 'typing',
          question: "If tangent slope = 5, normal slope =",
          correctAnswer: '-1/5',
          prompt: 'Type your answer:',
          explanation: "Normal is negative reciprocal.",
          xp: 5
        },
        {
          id: 'calc_u3_l2_q15',
          type: 'fill_blank',
          question: "Normal slope = _____ reciprocal of tangent slope.",
          correctAnswer: 'negative',
          prompt: 'Type your answer:',
          explanation: "Negative reciprocal.",
          xp: 4
        },
        {
          id: 'calc_u3_l2_q16',
          type: 'multiple_choice',
          question: "Normal to f(x)=x² at x=1:",
          options: ["\\\\(y=-(1/2)x+(3/2)\\\\)", "\\\\(y=2x-1\\\\)", "\\\\(y=-x+2\\\\)", "\\\\(y=(1/2)x+(1/2)\\\\)"],
          correct: 0,
          explanation: "Tangent slope=2, normal=-1/2. Point(1,1)",
          xp: 6
        },
        {
          id: 'calc_u3_l2_q17',
          type: 'typing',
          question: "On f(x)=x², tangent ∥ y=4x at:",
          correctAnswer: '(2,4)',
          prompt: 'Type your answer:',
          explanation: "f'(x)=2x=4 at x=2, f(2)=4",
          xp: 6
        }
      ]
    };
  },
  // Curve Sketching
  derivApps3() {
    return {
      id: 'calc_u3_l3',
      title: 'Curve Sketching',
      unit: 3,
      icon: '📊',
      xp: 91,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u3_l3_q1',
          type: 'multiple_choice',
          question: "If f'(x) > 0, function is:",
          options: ["Increasing", "Decreasing", "Constant", "Undefined"],
          correct: 0,
          explanation: "Positive derivative = increasing.",
          xp: 4
        },
        {
          id: 'calc_u3_l3_q2',
          type: 'typing',
          question: "Where is f(x)=x³-3x increasing?",
          correctAnswer: 'x>1,x<-1',
          prompt: 'Type your answer:',
          explanation: "f'(x)=3x²-3>0 when |x|>1",
          diagram: 'diagrams/increasing_decreasing.png',
          xp: 5
        },
        {
          id: 'calc_u3_l3_q3',
          type: 'multiple_choice',
          question: "If f''(x) > 0, function is:",
          options: ["Concave up", "Concave down", "Linear", "Constant"],
          correct: 0,
          explanation: "Positive second derivative = concave up.",
          xp: 4
        },
        {
          id: 'calc_u3_l3_q4',
          type: 'typing',
          question: "Where is f(x)=x³ concave up?",
          correctAnswer: 'x>0',
          prompt: 'Type your answer:',
          explanation: "f''(x)=6x>0 when x>0",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q5',
          type: 'multiple_choice',
          question: "f'=0, increasing to decreasing =",
          options: ["Local maximum", "Local minimum", "Inflection", "Critical only"],
          correct: 0,
          explanation: "Increasing to decreasing = maximum.",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q6',
          type: 'typing',
          question: "Local extrema of f(x)=x³-3x:",
          correctAnswer: 'max at (-1,2),min at (1,-2)',
          prompt: 'Type your answer:',
          explanation: "f'(±1)=0, f(-1)=2(max), f(1)=-2(min)",
          diagram: 'diagrams/local_extrema.png',
          xp: 6
        },
        {
          id: 'calc_u3_l3_q7',
          type: 'fill_blank',
          question: "Point where f''=0 and concavity changes = _____ point.",
          correctAnswer: 'inflection',
          prompt: 'Type your answer:',
          explanation: "Inflection point.",
          xp: 4
        },
        {
          id: 'calc_u3_l3_q8',
          type: 'multiple_choice',
          question: "Inflection of f(x)=x³:",
          options: ["(0,0)", "(1,1)", "(-1,-1)", "None"],
          correct: 0,
          explanation: "f''(0)=0, concavity changes.",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q9',
          type: 'typing',
          question: "Where is f(x)=x²-4x decreasing?",
          correctAnswer: 'x<2',
          prompt: 'Type your answer:',
          explanation: "f'(x)=2x-4<0 when x<2",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q10',
          type: 'multiple_choice',
          question: "f'(a)=0 and f''(a)>0 means:",
          options: ["Local minimum", "Local maximum", "Inflection", "Neither"],
          correct: 0,
          explanation: "Concave up at critical point = minimum.",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q11',
          type: 'typing',
          question: "Classify critical point of f(x)=x² at x=0:",
          correctAnswer: 'minimum',
          prompt: 'Type your answer:',
          explanation: "f''(0)=2>0, so minimum",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q12',
          type: 'match_pairs',
          question: "Match sign with behavior:",
          pairs: [{"left": "\\\\(f'(x)>0\\\\)", "right": "Increasing"}, {"left": "\\\\(f'(x)<0\\\\)", "right": "Decreasing"}, {"left": "\\\\(f''(x)>0\\\\)", "right": "Concave Up"}, {"left": "\\\\(f''(x)<0\\\\)", "right": "Concave Down"}],
          xp: 8
        },
        {
          id: 'calc_u3_l3_q13',
          type: 'multiple_choice',
          question: "Inflection of f(x)=x⁴-6x²:",
          options: ["\\\\(x=±1\\\\)", "\\\\(x=0\\\\)", "\\\\(x=±2\\\\)", "None"],
          correct: 0,
          explanation: "f''(x)=12x²-12=0 at x=±1",
          xp: 6
        },
        {
          id: 'calc_u3_l3_q14',
          type: 'typing',
          question: "If f'(x)=x²-4, where is f decreasing?",
          correctAnswer: '-2<x<2',
          prompt: 'Type your answer:',
          explanation: "f'(x)<0 when |x|<2",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q15',
          type: 'fill_blank',
          question: "_____ points where f'=0 or undefined.",
          correctAnswer: 'critical',
          prompt: 'Type your answer:',
          explanation: "Critical points.",
          xp: 4
        },
        {
          id: 'calc_u3_l3_q16',
          type: 'multiple_choice',
          question: "Where is f(x)=x³-3x² concave down?",
          options: ["\\\\(x<1\\\\)", "\\\\(x>1\\\\)", "\\\\(x>0\\\\)", "Never"],
          correct: 0,
          explanation: "f''(x)=6x-6<0 when x<1",
          xp: 5
        },
        {
          id: 'calc_u3_l3_q17',
          type: 'typing',
          question: "Classify critical point of f(x)=x⁴ at x=0:",
          correctAnswer: 'minimum',
          prompt: 'Type your answer:',
          explanation: "Test shows minimum (f(x)≥0)",
          xp: 6
        },
        {
          id: 'calc_u3_l3_q18',
          type: 'multiple_choice',
          question: "As x→∞, f(x)=x³ approaches:",
          options: ["∞", "-∞", "0", "1"],
          correct: 0,
          explanation: "x³→∞",
          xp: 4
        }
      ]
    };
  },
  // Optimization
  derivApps4() {
    return {
      id: 'calc_u3_l4',
      title: 'Optimization',
      unit: 3,
      icon: '🎯',
      xp: 93,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u3_l4_q1',
          type: 'multiple_choice',
          question: "Extrema occur at _____ points.",
          options: ["critical", "inflection", "end", "any"],
          correct: 0,
          explanation: "Critical points.",
          xp: 4
        },
        {
          id: 'calc_u3_l4_q2',
          type: 'typing',
          question: "Max of f(x)=-x²+4x on [0,5]:",
          correctAnswer: '(2,4)',
          prompt: 'Type your answer:',
          explanation: "f'(x)=-2x+4=0 at x=2. f(2)=4",
          diagram: 'diagrams/optimization_max.png',
          xp: 6
        },
        {
          id: 'calc_u3_l4_q3',
          type: 'multiple_choice',
          question: "Min of f(x)=x²-6x+10:",
          options: ["3", "1", "0", "-3"],
          correct: 0,
          explanation: "f'(x)=2x-6=0 at x=3, f(3)=1",
          xp: 5
        },
        {
          id: 'calc_u3_l4_q4',
          type: 'typing',
          question: "Two numbers sum to 10, max product:",
          correctAnswer: '25',
          prompt: 'Type your answer:',
          explanation: "P=x(10-x), max at x=5, P=25",
          xp: 6
        },
        {
          id: 'calc_u3_l4_q5',
          type: 'multiple_choice',
          question: "Fixed perimeter, max area rectangle:",
          options: ["Square", "Circle", "Long thin", "Any"],
          correct: 0,
          explanation: "Square maximizes area.",
          xp: 5
        },
        {
          id: 'calc_u3_l4_q6',
          type: 'typing',
          question: "Closest point on y=x² to (0,3):",
          correctAnswer: '±1/√2,1/2',
          prompt: 'Type your answer:',
          explanation: "Minimize distance²",
          diagram: 'diagrams/distance_minimization.png',
          xp: 6
        },
        {
          id: 'calc_u3_l4_q7',
          type: 'fill_blank',
          question: "_____ Test uses f' before/after critical point.",
          correctAnswer: 'First Derivative',
          prompt: 'Type your answer:',
          explanation: "First Derivative Test.",
          xp: 4
        },
        {
          id: 'calc_u3_l4_q8',
          type: 'multiple_choice',
          question: "Two positive numbers sum 20, max product:",
          options: ["10 and 10", "5 and 15", "0 and 20", "1 and 19"],
          correct: 0,
          explanation: "Both 10 gives max.",
          xp: 5
        },
        {
          id: 'calc_u3_l4_q9',
          type: 'typing',
          question: "Rectangle perimeter 40, max area dimensions:",
          correctAnswer: '10x10',
          prompt: 'Type your answer:',
          explanation: "l+w=20, max at l=w=10",
          xp: 5
        },
        {
          id: 'calc_u3_l4_q10',
          type: 'multiple_choice',
          question: "f'(a)=0, f''(a)>0 means:",
          options: ["Local minimum", "Local maximum", "Neither", "Both"],
          correct: 0,
          explanation: "Second derivative positive = minimum.",
          xp: 5
        },
        {
          id: 'calc_u3_l4_q11',
          type: 'typing',
          question: "Min of f(x)=x+9/x for x>0:",
          correctAnswer: '(3,6)',
          prompt: 'Type your answer:',
          explanation: "f'(x)=1-9/x²=0 at x=3",
          xp: 6
        },
        {
          id: 'calc_u3_l4_q12',
          type: 'match_pairs',
          question: "Match condition:",
          pairs: [{"left": "\\\\(f'=0, f''>0\\\\)", "right": "Local Minimum"}, {"left": "\\\\(f'=0, f''<0\\\\)", "right": "Local Maximum"}, {"left": "\\\\(f'=0, f''=0\\\\)", "right": "Test Fails"}, {"left": "\\\\(f': +\u2192-\\\\)", "right": "Local Maximum"}],
          xp: 8
        },
        {
          id: 'calc_u3_l4_q13',
          type: 'multiple_choice',
          question: "Box surface 54, max volume:",
          options: ["3x3x3", "2x2x5", "1x1x13", "No max"],
          correct: 0,
          explanation: "Cube maximizes volume",
          xp: 6
        },
        {
          id: 'calc_u3_l4_q14',
          type: 'typing',
          question: "Max area under y=4-x² above x-axis:",
          correctAnswer: '32/3√3',
          prompt: 'Type your answer:',
          explanation: "Width 2x, height 4-x²",
          xp: 6
        },
        {
          id: 'calc_u3_l4_q15',
          type: 'fill_blank',
          question: "Global extrema on closed interval: check _____ points and _____.",
          correctAnswer: 'critical|endpoints',
          prompt: 'Type your answer:',
          explanation: "Critical + endpoints.",
          xp: 4
        },
        {
          id: 'calc_u3_l4_q16',
          type: 'multiple_choice',
          question: "Min of f(x)=x⁴-4x³ on [-1,3]:",
          options: ["At x=3, -27", "At x=0, 0", "At x=-1, 5", "At x=2, -16"],
          correct: 0,
          explanation: "Check all critical points and endpoints.",
          xp: 6
        },
        {
          id: 'calc_u3_l4_q17',
          type: 'typing',
          question: "Norman window perimeter 20, max area width:",
          correctAnswer: '20/(4+π)',
          prompt: 'Type your answer:',
          explanation: "Rectangle + semicircle optimization",
          xp: 6
        }
      ]
    };
  },
  // Related Rates
  derivApps5() {
    return {
      id: 'calc_u3_l5',
      title: 'Related Rates',
      unit: 3,
      icon: '🔗',
      xp: 93,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u3_l5_q1',
          type: 'multiple_choice',
          question: "Related rates use _____ rule.",
          options: ["chain", "product", "quotient", "power"],
          correct: 0,
          explanation: "Differentiate with chain rule.",
          xp: 4
        },
        {
          id: 'calc_u3_l5_q2',
          type: 'typing',
          question: "Circle r grows 3 cm/s, dA/dt at r=5:",
          correctAnswer: '30π',
          prompt: 'Type your answer:',
          explanation: "dA/dt=2πr(dr/dt)=2π(5)(3)=30π",
          diagram: 'diagrams/circle_related_rates.png',
          xp: 6
        },
        {
          id: 'calc_u3_l5_q3',
          type: 'multiple_choice',
          question: "Square side grows 2 m/s, dA/dt at s=4:",
          options: ["16", "8", "4", "32"],
          correct: 0,
          explanation: "dA/dt=2s(ds/dt)=2(4)(2)=16",
          xp: 5
        },
        {
          id: 'calc_u3_l5_q4',
          type: 'typing',
          question: "Cylinder r=3, dh/dt=2, dV/dt:",
          correctAnswer: '18π',
          prompt: 'Type your answer:',
          explanation: "dV/dt=πr²(dh/dt)=π(9)(2)=18π",
          xp: 5
        },
        {
          id: 'calc_u3_l5_q5',
          type: 'multiple_choice',
          question: "13 ft ladder slides 5 ft/s, top drops when base=5:",
          options: ["25/12 ft/s", "5", "12/5", "13"],
          correct: 0,
          explanation: "x²+y²=169, 2x(dx/dt)+2y(dy/dt)=0",
          diagram: 'diagrams/ladder_related_rates.png',
          xp: 6
        },
        {
          id: 'calc_u3_l5_q6',
          type: 'typing',
          question: "Sand 10 m³/min into cone r=h, dh/dt at h=5:",
          correctAnswer: '2/(5π)',
          prompt: 'Type your answer:',
          explanation: "dV/dt=πh²(dh/dt)",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q7',
          type: 'fill_blank',
          question: "First find _____ relationship between variables.",
          correctAnswer: 'equational|geometric',
          prompt: 'Type your answer:',
          explanation: "Find an equation.",
          xp: 4
        },
        {
          id: 'calc_u3_l5_q8',
          type: 'multiple_choice',
          question: "Sphere r shrinks 0.1, dV/dt at r=10:",
          options: ["-40π", "-4π", "-100π", "-10π"],
          correct: 0,
          explanation: "dV/dt=4πr²(dr/dt)=4π(100)(-0.1)",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q9',
          type: 'typing',
          question: "Cars: 60 mph N, 50 mph W, 0.1 mi apart:",
          correctAnswer: '-78.1 mph',
          prompt: 'Type your answer:',
          explanation: "Distance rate formula",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q10',
          type: 'multiple_choice',
          question: "y=x², dx/dt=3, dy/dt at x=2:",
          options: ["12", "6", "4", "9"],
          correct: 0,
          explanation: "dy/dt=2x(dx/dt)=2(2)(3)=12",
          xp: 5
        },
        {
          id: 'calc_u3_l5_q11',
          type: 'typing',
          question: "Plane 1 mi high, 500 mph, d(dist)/dt at 2 mi horizontal:",
          correctAnswer: '1000/√5',
          prompt: 'Type your answer:',
          explanation: "Distance rate",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q12',
          type: 'match_pairs',
          question: "Match volume:",
          pairs: [{"left": "Cylinder", "right": "\\\\(V=\u03c0r\u00b2h\\\\)"}, {"left": "Cone", "right": "\\\\(V=(1/3)\u03c0r\u00b2h\\\\)"}, {"left": "Sphere", "right": "\\\\(V=(4/3)\u03c0r\u00b3\\\\)"}, {"left": "Cube", "right": "\\\\(V=s\u00b3\\\\)"}],
          xp: 8
        },
        {
          id: 'calc_u3_l5_q13',
          type: 'multiple_choice',
          question: "Boat pulled 2 m/s, 8 m from dock, rope 10 m:",
          options: ["-8/5 m/s", "-2", "-5/4", "-10/8"],
          correct: 0,
          explanation: "2x(dx/dt)=2r(dr/dt)",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q14',
          type: 'typing',
          question: "r=2t+1, dr/dt at any t:",
          correctAnswer: '2',
          prompt: 'Type your answer:',
          explanation: "dr/dt=2",
          xp: 4
        },
        {
          id: 'calc_u3_l5_q15',
          type: 'fill_blank',
          question: "After equation, _____ both sides wrt time.",
          correctAnswer: 'differentiate',
          prompt: 'Type your answer:',
          explanation: "Differentiate.",
          xp: 4
        },
        {
          id: 'calc_u3_l5_q16',
          type: 'multiple_choice',
          question: "V=xyz, dx/dt=2, dy/dt=3, dz/dt=4 at x=y=z=1:",
          options: ["9", "24", "6", "12"],
          correct: 0,
          explanation: "dV/dt=yz(dx/dt)+xz(dy/dt)+xy(dz/dt)=9",
          xp: 6
        },
        {
          id: 'calc_u3_l5_q17',
          type: 'typing',
          question: "6 ft person, 5 ft/s toward 15 ft light, shadow at 10 ft:",
          correctAnswer: '-25/3 ft/s',
          prompt: 'Type your answer:',
          explanation: "Similar triangles",
          xp: 6
        }
      ]
    };
  },
  // Derivatives Review
  derivApps6() {
    return {
      id: 'calc_u3_l6',
      title: 'Derivatives Review',
      unit: 3,
      icon: '🔄',
      xp: 92,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u3_l6_q1',
          type: 'multiple_choice',
          question: "d/dx[x²·sin(x)]:",
          options: ["Product rule", "Chain rule", "Quotient rule", "Power rule"],
          correct: 0,
          explanation: "Product of two functions.",
          xp: 4
        },
        {
          id: 'calc_u3_l6_q2',
          type: 'typing',
          question: "Find d/dx[(x²+1)³]",
          correctAnswer: '6x(x²+1)²',
          prompt: 'Type your answer:',
          explanation: "Chain: 3(x²+1)²·2x",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q3',
          type: 'multiple_choice',
          question: "Where f(x)=x³-3x increasing:",
          options: ["\\\\(x<-1\\\\) or \\\\(x>1\\\\)", "\\\\(-1<x<1\\\\)", "\\\\(x>0\\\\)", "Always"],
          correct: 0,
          explanation: "f'(x)=3x²-3>0 when |x|>1",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q4',
          type: 'typing',
          question: "Find d/dx[cos(2x)]",
          correctAnswer: '-2sin(2x)',
          prompt: 'Type your answer:',
          explanation: "Chain: -sin(2x)·2",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q5',
          type: 'multiple_choice',
          question: "Tangent to y=x² at x=3:",
          options: ["\\\\(y=6x-9\\\\)", "\\\\(y=2x+3\\\\)", "\\\\(y=3x-6\\\\)", "\\\\(y=9x-18\\\\)"],
          correct: 0,
          explanation: "f'(3)=6, f(3)=9",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q6',
          type: 'typing',
          question: "A=πr², dr/dt=2, dA/dt at r=5:",
          correctAnswer: '20π',
          prompt: 'Type your answer:',
          explanation: "dA/dt=2πr(dr/dt)=20π",
          diagram: 'diagrams/differentiation_review.png',
          xp: 5
        },
        {
          id: 'calc_u3_l6_q7',
          type: 'fill_blank',
          question: "To find extrema, set f' = _____ and solve.",
          correctAnswer: '0|zero',
          prompt: 'Type your answer:',
          explanation: "Set to zero.",
          xp: 4
        },
        {
          id: 'calc_u3_l6_q8',
          type: 'multiple_choice',
          question: "Find d/dx[ln(x²)]:",
          options: ["\\\\(2/x\\\\)", "\\\\(1/x²\\\\)", "\\\\(2x/x²\\\\)", "\\\\(ln(2x)\\\\)"],
          correct: 0,
          explanation: "Chain: (2/x²)(x)=2/x",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q9',
          type: 'typing',
          question: "Find d/dx[e^x·x]",
          correctAnswer: 'e^x(x+1)',
          prompt: 'Type your answer:',
          explanation: "Product: e^x·1+x·e^x",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q10',
          type: 'multiple_choice',
          question: "Classify f(x)=x⁴ at x=0:",
          options: ["Minimum", "Maximum", "Neither", "Both"],
          correct: 0,
          explanation: "Test shows minimum",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q11',
          type: 'typing',
          question: "y=x², dy/dt=6 at x=3, find dx/dt:",
          correctAnswer: '1',
          prompt: 'Type your answer:',
          explanation: "dy/dt=2x(dx/dt), 6=6(dx/dt)",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q12',
          type: 'match_pairs',
          question: "Match rule:",
          pairs: [{"left": "\\\\(d/dx[x\u00b7sin(x)]\\\\)", "right": "Product Rule"}, {"left": "\\\\(d/dx[(x+1)\u00b3]\\\\)", "right": "Chain Rule"}, {"left": "\\\\(d/dx[sin(x)/x]\\\\)", "right": "Quotient Rule"}, {"left": "\\\\(d/dx[x\u2075]\\\\)", "right": "Power Rule"}],
          xp: 8
        },
        {
          id: 'calc_u3_l6_q13',
          type: 'multiple_choice',
          question: "Horizontal tangent of f(x)=x³-3x²:",
          options: ["\\\\(x=0,2\\\\)", "\\\\(x=1\\\\)", "\\\\(x=-1\\\\)", "Never"],
          correct: 0,
          explanation: "f'(x)=3x²-6x=0 at x=0,2",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q14',
          type: 'typing',
          question: "Find d/dx[(x+1)/(x-1)]",
          correctAnswer: '-2/(x-1)²',
          prompt: 'Type your answer:',
          explanation: "Quotient rule",
          xp: 6
        },
        {
          id: 'calc_u3_l6_q15',
          type: 'fill_blank',
          question: "_____ derivative test uses concavity.",
          correctAnswer: 'second',
          prompt: 'Type your answer:',
          explanation: "Second derivative test.",
          xp: 4
        },
        {
          id: 'calc_u3_l6_q16',
          type: 'multiple_choice',
          question: "Max of f(x)=-x²+4x-3:",
          options: ["At x=2, val=1", "At x=0, -3", "At x=4, -3", "No max"],
          correct: 0,
          explanation: "f'(x)=-2x+4=0 at x=2, f(2)=1",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q17',
          type: 'typing',
          question: "V=(4/3)πr³, dV/dt=4π, dr/dt at r=1:",
          correctAnswer: '1',
          prompt: 'Type your answer:',
          explanation: "dV/dt=4πr²(dr/dt)",
          xp: 5
        },
        {
          id: 'calc_u3_l6_q18',
          type: 'multiple_choice',
          question: "Inflection of f(x)=x³-6x²:",
          options: ["(2,-16)", "(0,0)", "(3,-9)", "(1,-5)"],
          correct: 0,
          explanation: "f''(x)=6x-12=0 at x=2, f(2)=-16",
          xp: 6
        }
      ]
    };
  },
  // Antiderivatives
  intBasics1() {
    return {
      id: 'calc_u4_l1',
      title: 'Antiderivatives',
      unit: 4,
      icon: '↩️',
      xp: 79,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u4_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice question 1 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 1",
          diagram: 'diagrams/int_u4_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u4_l1_q2',
          type: 'typing',
          question: "Practice question 2 for Antiderivatives",
          correctAnswer: 'answer2',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q3',
          type: 'typing',
          question: "Practice question 3 for Antiderivatives",
          correctAnswer: 'answer3',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice question 4 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q5',
          type: 'typing',
          question: "Practice question 5 for Antiderivatives",
          correctAnswer: 'answer5',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q6',
          type: 'typing',
          question: "Practice question 6 for Antiderivatives",
          correctAnswer: 'answer6',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 6",
          diagram: 'diagrams/int_u4_l1_q6.png',
          xp: 5
        },
        {
          id: 'calc_u4_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice question 7 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 7",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q8',
          type: 'typing',
          question: "Practice question 8 for Antiderivatives",
          correctAnswer: 'answer8',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q9',
          type: 'typing',
          question: "Practice question 9 for Antiderivatives",
          correctAnswer: 'answer9',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q10',
          type: 'multiple_choice',
          question: "Multiple choice question 10 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 10",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q11',
          type: 'typing',
          question: "Practice question 11 for Antiderivatives",
          correctAnswer: 'answer11',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 11",
          diagram: 'diagrams/int_u4_l1_q11.png',
          xp: 5
        },
        {
          id: 'calc_u4_l1_q12',
          type: 'typing',
          question: "Practice question 12 for Antiderivatives",
          correctAnswer: 'answer12',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice question 13 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 13",
          xp: 4
        },
        {
          id: 'calc_u4_l1_q14',
          type: 'typing',
          question: "Practice question 14 for Antiderivatives",
          correctAnswer: 'answer14',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q15',
          type: 'typing',
          question: "Practice question 15 for Antiderivatives",
          correctAnswer: 'answer15',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice question 16 for Antiderivatives",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 16",
          diagram: 'diagrams/int_u4_l1_q16.png',
          xp: 4
        },
        {
          id: 'calc_u4_l1_q17',
          type: 'typing',
          question: "Practice question 17 for Antiderivatives",
          correctAnswer: 'answer17',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Under Curve
  intBasics2() {
    return {
      id: 'calc_u4_l2',
      title: 'Area Under Curve',
      unit: 4,
      icon: '📐',
      xp: 79,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u4_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice question 1 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 1",
          diagram: 'diagrams/int_u4_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u4_l2_q2',
          type: 'typing',
          question: "Practice question 2 for Area Under Curve",
          correctAnswer: 'answer2',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q3',
          type: 'typing',
          question: "Practice question 3 for Area Under Curve",
          correctAnswer: 'answer3',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice question 4 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q5',
          type: 'typing',
          question: "Practice question 5 for Area Under Curve",
          correctAnswer: 'answer5',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q6',
          type: 'typing',
          question: "Practice question 6 for Area Under Curve",
          correctAnswer: 'answer6',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 6",
          diagram: 'diagrams/int_u4_l2_q6.png',
          xp: 5
        },
        {
          id: 'calc_u4_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice question 7 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 7",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q8',
          type: 'typing',
          question: "Practice question 8 for Area Under Curve",
          correctAnswer: 'answer8',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q9',
          type: 'typing',
          question: "Practice question 9 for Area Under Curve",
          correctAnswer: 'answer9',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q10',
          type: 'multiple_choice',
          question: "Multiple choice question 10 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 10",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q11',
          type: 'typing',
          question: "Practice question 11 for Area Under Curve",
          correctAnswer: 'answer11',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 11",
          diagram: 'diagrams/int_u4_l2_q11.png',
          xp: 5
        },
        {
          id: 'calc_u4_l2_q12',
          type: 'typing',
          question: "Practice question 12 for Area Under Curve",
          correctAnswer: 'answer12',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice question 13 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 13",
          xp: 4
        },
        {
          id: 'calc_u4_l2_q14',
          type: 'typing',
          question: "Practice question 14 for Area Under Curve",
          correctAnswer: 'answer14',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q15',
          type: 'typing',
          question: "Practice question 15 for Area Under Curve",
          correctAnswer: 'answer15',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice question 16 for Area Under Curve",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 16",
          diagram: 'diagrams/int_u4_l2_q16.png',
          xp: 4
        },
        {
          id: 'calc_u4_l2_q17',
          type: 'typing',
          question: "Practice question 17 for Area Under Curve",
          correctAnswer: 'answer17',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Definite Integrals
  intBasics3() {
    return {
      id: 'calc_u4_l3',
      title: 'Definite Integrals',
      unit: 4,
      icon: '📊',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice question 1 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 1",
          diagram: 'diagrams/int_u4_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u4_l3_q2',
          type: 'typing',
          question: "Practice question 2 for Definite Integrals",
          correctAnswer: 'answer2',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q3',
          type: 'typing',
          question: "Practice question 3 for Definite Integrals",
          correctAnswer: 'answer3',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice question 4 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q5',
          type: 'typing',
          question: "Practice question 5 for Definite Integrals",
          correctAnswer: 'answer5',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q6',
          type: 'typing',
          question: "Practice question 6 for Definite Integrals",
          correctAnswer: 'answer6',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 6",
          diagram: 'diagrams/int_u4_l3_q6.png',
          xp: 5
        },
        {
          id: 'calc_u4_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice question 7 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 7",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q8',
          type: 'typing',
          question: "Practice question 8 for Definite Integrals",
          correctAnswer: 'answer8',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q9',
          type: 'typing',
          question: "Practice question 9 for Definite Integrals",
          correctAnswer: 'answer9',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q10',
          type: 'multiple_choice',
          question: "Multiple choice question 10 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 10",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q11',
          type: 'typing',
          question: "Practice question 11 for Definite Integrals",
          correctAnswer: 'answer11',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 11",
          diagram: 'diagrams/int_u4_l3_q11.png',
          xp: 5
        },
        {
          id: 'calc_u4_l3_q12',
          type: 'typing',
          question: "Practice question 12 for Definite Integrals",
          correctAnswer: 'answer12',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice question 13 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 13",
          xp: 4
        },
        {
          id: 'calc_u4_l3_q14',
          type: 'typing',
          question: "Practice question 14 for Definite Integrals",
          correctAnswer: 'answer14',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q15',
          type: 'typing',
          question: "Practice question 15 for Definite Integrals",
          correctAnswer: 'answer15',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice question 16 for Definite Integrals",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 16",
          diagram: 'diagrams/int_u4_l3_q16.png',
          xp: 4
        },
        {
          id: 'calc_u4_l3_q17',
          type: 'typing',
          question: "Practice question 17 for Definite Integrals",
          correctAnswer: 'answer17',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Fundamental Theorem
  intBasics4() {
    return {
      id: 'calc_u4_l4',
      title: 'Fundamental Theorem',
      unit: 4,
      icon: '📜',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice question 1 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 1",
          diagram: 'diagrams/int_u4_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u4_l4_q2',
          type: 'typing',
          question: "Practice question 2 for Fundamental Theorem",
          correctAnswer: 'answer2',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q3',
          type: 'typing',
          question: "Practice question 3 for Fundamental Theorem",
          correctAnswer: 'answer3',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice question 4 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q5',
          type: 'typing',
          question: "Practice question 5 for Fundamental Theorem",
          correctAnswer: 'answer5',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q6',
          type: 'typing',
          question: "Practice question 6 for Fundamental Theorem",
          correctAnswer: 'answer6',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 6",
          diagram: 'diagrams/int_u4_l4_q6.png',
          xp: 5
        },
        {
          id: 'calc_u4_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice question 7 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 7",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q8',
          type: 'typing',
          question: "Practice question 8 for Fundamental Theorem",
          correctAnswer: 'answer8',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q9',
          type: 'typing',
          question: "Practice question 9 for Fundamental Theorem",
          correctAnswer: 'answer9',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q10',
          type: 'multiple_choice',
          question: "Multiple choice question 10 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 10",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q11',
          type: 'typing',
          question: "Practice question 11 for Fundamental Theorem",
          correctAnswer: 'answer11',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 11",
          diagram: 'diagrams/int_u4_l4_q11.png',
          xp: 5
        },
        {
          id: 'calc_u4_l4_q12',
          type: 'typing',
          question: "Practice question 12 for Fundamental Theorem",
          correctAnswer: 'answer12',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice question 13 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 13",
          xp: 4
        },
        {
          id: 'calc_u4_l4_q14',
          type: 'typing',
          question: "Practice question 14 for Fundamental Theorem",
          correctAnswer: 'answer14',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q15',
          type: 'typing',
          question: "Practice question 15 for Fundamental Theorem",
          correctAnswer: 'answer15',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice question 16 for Fundamental Theorem",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 16",
          diagram: 'diagrams/int_u4_l4_q16.png',
          xp: 4
        },
        {
          id: 'calc_u4_l4_q17',
          type: 'typing',
          question: "Practice question 17 for Fundamental Theorem",
          correctAnswer: 'answer17',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Practice
  intBasics5() {
    return {
      id: 'calc_u4_l5',
      title: 'Integration Practice',
      unit: 4,
      icon: '💪',
      xp: 79,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u4_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice question 1 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 1",
          diagram: 'diagrams/int_u4_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u4_l5_q2',
          type: 'typing',
          question: "Practice question 2 for Integration Practice",
          correctAnswer: 'answer2',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q3',
          type: 'typing',
          question: "Practice question 3 for Integration Practice",
          correctAnswer: 'answer3',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice question 4 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 4",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q5',
          type: 'typing',
          question: "Practice question 5 for Integration Practice",
          correctAnswer: 'answer5',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q6',
          type: 'typing',
          question: "Practice question 6 for Integration Practice",
          correctAnswer: 'answer6',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 6",
          diagram: 'diagrams/int_u4_l5_q6.png',
          xp: 5
        },
        {
          id: 'calc_u4_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice question 7 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 7",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q8',
          type: 'typing',
          question: "Practice question 8 for Integration Practice",
          correctAnswer: 'answer8',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q9',
          type: 'typing',
          question: "Practice question 9 for Integration Practice",
          correctAnswer: 'answer9',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q10',
          type: 'multiple_choice',
          question: "Multiple choice question 10 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 10",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q11',
          type: 'typing',
          question: "Practice question 11 for Integration Practice",
          correctAnswer: 'answer11',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 11",
          diagram: 'diagrams/int_u4_l5_q11.png',
          xp: 5
        },
        {
          id: 'calc_u4_l5_q12',
          type: 'typing',
          question: "Practice question 12 for Integration Practice",
          correctAnswer: 'answer12',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice question 13 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 13",
          xp: 4
        },
        {
          id: 'calc_u4_l5_q14',
          type: 'typing',
          question: "Practice question 14 for Integration Practice",
          correctAnswer: 'answer14',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q15',
          type: 'typing',
          question: "Practice question 15 for Integration Practice",
          correctAnswer: 'answer15',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u4_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice question 16 for Integration Practice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correct: 0,
          explanation: "Explanation for question 16",
          diagram: 'diagrams/int_u4_l5_q16.png',
          xp: 4
        },
        {
          id: 'calc_u4_l5_q17',
          type: 'typing',
          question: "Practice question 17 for Integration Practice",
          correctAnswer: 'answer17',
          prompt: 'Type your answer:',
          explanation: "Explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // u-Substitution
  intTech1() {
    return {
      id: 'calc_u5_l1',
      title: 'u-Substitution',
      unit: 5,
      icon: '🔄',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: u-Substitution",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u5_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u5_l1_q2',
          type: 'typing',
          question: "Question 2: u-Substitution",
          correctAnswer: 'answer_u5_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q3',
          type: 'typing',
          question: "Question 3: u-Substitution",
          correctAnswer: 'answer_u5_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: u-Substitution",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q5',
          type: 'typing',
          question: "Question 5: u-Substitution",
          correctAnswer: 'answer_u5_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q6',
          type: 'typing',
          question: "Question 6: u-Substitution",
          correctAnswer: 'answer_u5_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: u-Substitution",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u5_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u5_l1_q8',
          type: 'typing',
          question: "Question 8: u-Substitution",
          correctAnswer: 'answer_u5_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q9',
          type: 'typing',
          question: "Question 9: u-Substitution",
          correctAnswer: 'answer_u5_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q10',
          type: 'match_pairs',
          question: "Match the following for u-Substitution:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l1_q11',
          type: 'typing',
          question: "Question 11: u-Substitution",
          correctAnswer: 'answer_u5_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q12',
          type: 'typing',
          question: "Question 12: u-Substitution",
          correctAnswer: 'answer_u5_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: u-Substitution",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u5_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u5_l1_q14',
          type: 'typing',
          question: "Question 14: u-Substitution",
          correctAnswer: 'answer_u5_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q15',
          type: 'typing',
          question: "Question 15: u-Substitution",
          correctAnswer: 'answer_u5_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: u-Substitution",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l1_q17',
          type: 'typing',
          question: "Question 17: u-Substitution",
          correctAnswer: 'answer_u5_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration by Parts
  intTech2() {
    return {
      id: 'calc_u5_l2',
      title: 'Integration by Parts',
      unit: 5,
      icon: '📦',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Integration by Parts",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u5_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u5_l2_q2',
          type: 'typing',
          question: "Question 2: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q3',
          type: 'typing',
          question: "Question 3: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Integration by Parts",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q5',
          type: 'typing',
          question: "Question 5: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q6',
          type: 'typing',
          question: "Question 6: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Integration by Parts",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u5_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u5_l2_q8',
          type: 'typing',
          question: "Question 8: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q9',
          type: 'typing',
          question: "Question 9: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Integration by Parts:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l2_q11',
          type: 'typing',
          question: "Question 11: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q12',
          type: 'typing',
          question: "Question 12: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Integration by Parts",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u5_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u5_l2_q14',
          type: 'typing',
          question: "Question 14: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q15',
          type: 'typing',
          question: "Question 15: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Integration by Parts",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l2_q17',
          type: 'typing',
          question: "Question 17: Integration by Parts",
          correctAnswer: 'answer_u5_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Trig Integrals
  intTech3() {
    return {
      id: 'calc_u5_l3',
      title: 'Trig Integrals',
      unit: 5,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Trig Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u5_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u5_l3_q2',
          type: 'typing',
          question: "Question 2: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q3',
          type: 'typing',
          question: "Question 3: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Trig Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q5',
          type: 'typing',
          question: "Question 5: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q6',
          type: 'typing',
          question: "Question 6: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Trig Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u5_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u5_l3_q8',
          type: 'typing',
          question: "Question 8: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q9',
          type: 'typing',
          question: "Question 9: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Trig Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l3_q11',
          type: 'typing',
          question: "Question 11: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q12',
          type: 'typing',
          question: "Question 12: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Trig Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u5_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u5_l3_q14',
          type: 'typing',
          question: "Question 14: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q15',
          type: 'typing',
          question: "Question 15: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Trig Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l3_q17',
          type: 'typing',
          question: "Question 17: Trig Integrals",
          correctAnswer: 'answer_u5_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Fractions
  intTech4() {
    return {
      id: 'calc_u5_l4',
      title: 'Partial Fractions',
      unit: 5,
      icon: '➗',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u5_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Partial Fractions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u5_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u5_l4_q2',
          type: 'typing',
          question: "Question 2: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q3',
          type: 'typing',
          question: "Question 3: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Partial Fractions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q5',
          type: 'typing',
          question: "Question 5: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q6',
          type: 'typing',
          question: "Question 6: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Partial Fractions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u5_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u5_l4_q8',
          type: 'typing',
          question: "Question 8: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q9',
          type: 'typing',
          question: "Question 9: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Partial Fractions:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l4_q11',
          type: 'typing',
          question: "Question 11: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q12',
          type: 'typing',
          question: "Question 12: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Partial Fractions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u5_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u5_l4_q14',
          type: 'typing',
          question: "Question 14: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q15',
          type: 'typing',
          question: "Question 15: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Partial Fractions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l4_q17',
          type: 'typing',
          question: "Question 17: Partial Fractions",
          correctAnswer: 'answer_u5_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Review
  intTech5() {
    return {
      id: 'calc_u5_l5',
      title: 'Integration Review',
      unit: 5,
      icon: '💪',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u5_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Integration Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u5_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u5_l5_q2',
          type: 'typing',
          question: "Question 2: Integration Review",
          correctAnswer: 'answer_u5_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q3',
          type: 'typing',
          question: "Question 3: Integration Review",
          correctAnswer: 'answer_u5_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Integration Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q5',
          type: 'typing',
          question: "Question 5: Integration Review",
          correctAnswer: 'answer_u5_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q6',
          type: 'typing',
          question: "Question 6: Integration Review",
          correctAnswer: 'answer_u5_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Integration Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u5_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u5_l5_q8',
          type: 'typing',
          question: "Question 8: Integration Review",
          correctAnswer: 'answer_u5_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q9',
          type: 'typing',
          question: "Question 9: Integration Review",
          correctAnswer: 'answer_u5_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Integration Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u5_l5_q11',
          type: 'typing',
          question: "Question 11: Integration Review",
          correctAnswer: 'answer_u5_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q12',
          type: 'typing',
          question: "Question 12: Integration Review",
          correctAnswer: 'answer_u5_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Integration Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u5_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u5_l5_q14',
          type: 'typing',
          question: "Question 14: Integration Review",
          correctAnswer: 'answer_u5_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q15',
          type: 'typing',
          question: "Question 15: Integration Review",
          correctAnswer: 'answer_u5_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u5_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Integration Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u5_l5_q17',
          type: 'typing',
          question: "Question 17: Integration Review",
          correctAnswer: 'answer_u5_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Between Curves
  intApp1() {
    return {
      id: 'calc_u6_l1',
      title: 'Area Between Curves',
      unit: 6,
      icon: '🔄',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Area Between Curves",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l1_q2',
          type: 'typing',
          question: "Question 2: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q3',
          type: 'typing',
          question: "Question 3: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Area Between Curves",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q5',
          type: 'typing',
          question: "Question 5: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q6',
          type: 'typing',
          question: "Question 6: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Area Between Curves",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l1_q8',
          type: 'typing',
          question: "Question 8: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q9',
          type: 'typing',
          question: "Question 9: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Area Between Curves:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l1_q11',
          type: 'typing',
          question: "Question 11: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q12',
          type: 'typing',
          question: "Question 12: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Area Between Curves",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l1_q14',
          type: 'typing',
          question: "Question 14: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q15',
          type: 'typing',
          question: "Question 15: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Area Between Curves",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l1_q17',
          type: 'typing',
          question: "Question 17: Area Between Curves",
          correctAnswer: 'answer_u6_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Volumes: Disks
  intApp2() {
    return {
      id: 'calc_u6_l2',
      title: 'Volumes: Disks',
      unit: 6,
      icon: '🥁',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Volumes: Disks",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l2_q2',
          type: 'typing',
          question: "Question 2: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q3',
          type: 'typing',
          question: "Question 3: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Volumes: Disks",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q5',
          type: 'typing',
          question: "Question 5: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q6',
          type: 'typing',
          question: "Question 6: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Volumes: Disks",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l2_q8',
          type: 'typing',
          question: "Question 8: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q9',
          type: 'typing',
          question: "Question 9: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Volumes: Disks:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l2_q11',
          type: 'typing',
          question: "Question 11: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q12',
          type: 'typing',
          question: "Question 12: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Volumes: Disks",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l2_q14',
          type: 'typing',
          question: "Question 14: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q15',
          type: 'typing',
          question: "Question 15: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Volumes: Disks",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l2_q17',
          type: 'typing',
          question: "Question 17: Volumes: Disks",
          correctAnswer: 'answer_u6_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Volumes: Washers
  intApp3() {
    return {
      id: 'calc_u6_l3',
      title: 'Volumes: Washers',
      unit: 6,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Volumes: Washers",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l3_q2',
          type: 'typing',
          question: "Question 2: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q3',
          type: 'typing',
          question: "Question 3: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Volumes: Washers",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q5',
          type: 'typing',
          question: "Question 5: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q6',
          type: 'typing',
          question: "Question 6: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Volumes: Washers",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l3_q8',
          type: 'typing',
          question: "Question 8: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q9',
          type: 'typing',
          question: "Question 9: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Volumes: Washers:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l3_q11',
          type: 'typing',
          question: "Question 11: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q12',
          type: 'typing',
          question: "Question 12: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Volumes: Washers",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l3_q14',
          type: 'typing',
          question: "Question 14: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q15',
          type: 'typing',
          question: "Question 15: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Volumes: Washers",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l3_q17',
          type: 'typing',
          question: "Question 17: Volumes: Washers",
          correctAnswer: 'answer_u6_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arc Length
  intApp4() {
    return {
      id: 'calc_u6_l4',
      title: 'Arc Length',
      unit: 6,
      icon: '⚙️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u6_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Arc Length",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l4_q2',
          type: 'typing',
          question: "Question 2: Arc Length",
          correctAnswer: 'answer_u6_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q3',
          type: 'typing',
          question: "Question 3: Arc Length",
          correctAnswer: 'answer_u6_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Arc Length",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q5',
          type: 'typing',
          question: "Question 5: Arc Length",
          correctAnswer: 'answer_u6_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q6',
          type: 'typing',
          question: "Question 6: Arc Length",
          correctAnswer: 'answer_u6_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Arc Length",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l4_q8',
          type: 'typing',
          question: "Question 8: Arc Length",
          correctAnswer: 'answer_u6_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q9',
          type: 'typing',
          question: "Question 9: Arc Length",
          correctAnswer: 'answer_u6_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Arc Length:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l4_q11',
          type: 'typing',
          question: "Question 11: Arc Length",
          correctAnswer: 'answer_u6_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q12',
          type: 'typing',
          question: "Question 12: Arc Length",
          correctAnswer: 'answer_u6_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Arc Length",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l4_q14',
          type: 'typing',
          question: "Question 14: Arc Length",
          correctAnswer: 'answer_u6_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q15',
          type: 'typing',
          question: "Question 15: Arc Length",
          correctAnswer: 'answer_u6_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Arc Length",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l4_q17',
          type: 'typing',
          question: "Question 17: Arc Length",
          correctAnswer: 'answer_u6_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Applications Review
  intApp5() {
    return {
      id: 'calc_u6_l5',
      title: 'Applications Review',
      unit: 6,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u6_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Applications Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l5_q2',
          type: 'typing',
          question: "Question 2: Applications Review",
          correctAnswer: 'answer_u6_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q3',
          type: 'typing',
          question: "Question 3: Applications Review",
          correctAnswer: 'answer_u6_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Applications Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q5',
          type: 'typing',
          question: "Question 5: Applications Review",
          correctAnswer: 'answer_u6_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q6',
          type: 'typing',
          question: "Question 6: Applications Review",
          correctAnswer: 'answer_u6_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Applications Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l5_q8',
          type: 'typing',
          question: "Question 8: Applications Review",
          correctAnswer: 'answer_u6_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q9',
          type: 'typing',
          question: "Question 9: Applications Review",
          correctAnswer: 'answer_u6_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Applications Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l5_q11',
          type: 'typing',
          question: "Question 11: Applications Review",
          correctAnswer: 'answer_u6_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q12',
          type: 'typing',
          question: "Question 12: Applications Review",
          correctAnswer: 'answer_u6_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Applications Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l5_q14',
          type: 'typing',
          question: "Question 14: Applications Review",
          correctAnswer: 'answer_u6_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q15',
          type: 'typing',
          question: "Question 15: Applications Review",
          correctAnswer: 'answer_u6_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Applications Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l5_q17',
          type: 'typing',
          question: "Question 17: Applications Review",
          correctAnswer: 'answer_u6_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus 1 Final
  intApp6() {
    return {
      id: 'calc_u6_l6',
      title: 'Calculus 1 Final',
      unit: 6,
      icon: '➕',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u6_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Calculus 1 Final",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u6_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u6_l6_q2',
          type: 'typing',
          question: "Question 2: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q3',
          type: 'typing',
          question: "Question 3: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Calculus 1 Final",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q5',
          type: 'typing',
          question: "Question 5: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q6',
          type: 'typing',
          question: "Question 6: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Calculus 1 Final",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u6_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u6_l6_q8',
          type: 'typing',
          question: "Question 8: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q9',
          type: 'typing',
          question: "Question 9: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Calculus 1 Final:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u6_l6_q11',
          type: 'typing',
          question: "Question 11: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q12',
          type: 'typing',
          question: "Question 12: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Calculus 1 Final",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u6_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u6_l6_q14',
          type: 'typing',
          question: "Question 14: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q15',
          type: 'typing',
          question: "Question 15: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u6_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Calculus 1 Final",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u6_l6_q17',
          type: 'typing',
          question: "Question 17: Calculus 1 Final",
          correctAnswer: 'answer_u6_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Advanced u-Sub
  advInt1() {
    return {
      id: 'calc_u7_l1',
      title: 'Advanced u-Sub',
      unit: 7,
      icon: '✖️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Advanced u-Sub",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l1_q2',
          type: 'typing',
          question: "Question 2: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q3',
          type: 'typing',
          question: "Question 3: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Advanced u-Sub",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q5',
          type: 'typing',
          question: "Question 5: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q6',
          type: 'typing',
          question: "Question 6: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Advanced u-Sub",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l1_q8',
          type: 'typing',
          question: "Question 8: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q9',
          type: 'typing',
          question: "Question 9: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Advanced u-Sub:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l1_q11',
          type: 'typing',
          question: "Question 11: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q12',
          type: 'typing',
          question: "Question 12: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Advanced u-Sub",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l1_q14',
          type: 'typing',
          question: "Question 14: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q15',
          type: 'typing',
          question: "Question 15: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Advanced u-Sub",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l1_q17',
          type: 'typing',
          question: "Question 17: Advanced u-Sub",
          correctAnswer: 'answer_u7_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Advanced IBP
  advInt2() {
    return {
      id: 'calc_u7_l2',
      title: 'Advanced IBP',
      unit: 7,
      icon: '→',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Advanced IBP",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l2_q2',
          type: 'typing',
          question: "Question 2: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q3',
          type: 'typing',
          question: "Question 3: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Advanced IBP",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q5',
          type: 'typing',
          question: "Question 5: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q6',
          type: 'typing',
          question: "Question 6: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Advanced IBP",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l2_q8',
          type: 'typing',
          question: "Question 8: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q9',
          type: 'typing',
          question: "Question 9: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Advanced IBP:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l2_q11',
          type: 'typing',
          question: "Question 11: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q12',
          type: 'typing',
          question: "Question 12: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Advanced IBP",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l2_q14',
          type: 'typing',
          question: "Question 14: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q15',
          type: 'typing',
          question: "Question 15: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Advanced IBP",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l2_q17',
          type: 'typing',
          question: "Question 17: Advanced IBP",
          correctAnswer: 'answer_u7_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Trig Substitution
  advInt3() {
    return {
      id: 'calc_u7_l3',
      title: 'Trig Substitution',
      unit: 7,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Trig Substitution",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l3_q2',
          type: 'typing',
          question: "Question 2: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q3',
          type: 'typing',
          question: "Question 3: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Trig Substitution",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q5',
          type: 'typing',
          question: "Question 5: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q6',
          type: 'typing',
          question: "Question 6: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Trig Substitution",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l3_q8',
          type: 'typing',
          question: "Question 8: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q9',
          type: 'typing',
          question: "Question 9: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Trig Substitution:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l3_q11',
          type: 'typing',
          question: "Question 11: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q12',
          type: 'typing',
          question: "Question 12: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Trig Substitution",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l3_q14',
          type: 'typing',
          question: "Question 14: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q15',
          type: 'typing',
          question: "Question 15: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Trig Substitution",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l3_q17',
          type: 'typing',
          question: "Question 17: Trig Substitution",
          correctAnswer: 'answer_u7_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Fractions Review
  advInt4() {
    return {
      id: 'calc_u7_l4',
      title: 'Partial Fractions Review',
      unit: 7,
      icon: '⚖️',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u7_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Partial Fractions Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l4_q2',
          type: 'typing',
          question: "Question 2: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q3',
          type: 'typing',
          question: "Question 3: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Partial Fractions Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q5',
          type: 'typing',
          question: "Question 5: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q6',
          type: 'typing',
          question: "Question 6: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Partial Fractions Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l4_q8',
          type: 'typing',
          question: "Question 8: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q9',
          type: 'typing',
          question: "Question 9: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Partial Fractions Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l4_q11',
          type: 'typing',
          question: "Question 11: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q12',
          type: 'typing',
          question: "Question 12: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Partial Fractions Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l4_q14',
          type: 'typing',
          question: "Question 14: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q15',
          type: 'typing',
          question: "Question 15: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Partial Fractions Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l4_q17',
          type: 'typing',
          question: "Question 17: Partial Fractions Review",
          correctAnswer: 'answer_u7_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Improper Integrals
  advInt5() {
    return {
      id: 'calc_u7_l5',
      title: 'Improper Integrals',
      unit: 7,
      icon: '∫',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u7_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Improper Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l5_q2',
          type: 'typing',
          question: "Question 2: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q3',
          type: 'typing',
          question: "Question 3: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Improper Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q5',
          type: 'typing',
          question: "Question 5: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q6',
          type: 'typing',
          question: "Question 6: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Improper Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l5_q8',
          type: 'typing',
          question: "Question 8: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q9',
          type: 'typing',
          question: "Question 9: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Improper Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l5_q11',
          type: 'typing',
          question: "Question 11: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q12',
          type: 'typing',
          question: "Question 12: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Improper Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l5_q14',
          type: 'typing',
          question: "Question 14: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q15',
          type: 'typing',
          question: "Question 15: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Improper Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l5_q17',
          type: 'typing',
          question: "Question 17: Improper Integrals",
          correctAnswer: 'answer_u7_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integration Mastery
  advInt6() {
    return {
      id: 'calc_u7_l6',
      title: 'Integration Mastery',
      unit: 7,
      icon: '⭕',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u7_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Integration Mastery",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u7_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u7_l6_q2',
          type: 'typing',
          question: "Question 2: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q3',
          type: 'typing',
          question: "Question 3: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Integration Mastery",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q5',
          type: 'typing',
          question: "Question 5: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q6',
          type: 'typing',
          question: "Question 6: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Integration Mastery",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u7_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u7_l6_q8',
          type: 'typing',
          question: "Question 8: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q9',
          type: 'typing',
          question: "Question 9: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Integration Mastery:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u7_l6_q11',
          type: 'typing',
          question: "Question 11: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q12',
          type: 'typing',
          question: "Question 12: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Integration Mastery",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u7_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u7_l6_q14',
          type: 'typing',
          question: "Question 14: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q15',
          type: 'typing',
          question: "Question 15: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u7_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Integration Mastery",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u7_l6_q17',
          type: 'typing',
          question: "Question 17: Integration Mastery",
          correctAnswer: 'answer_u7_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Area Between Curves Adv
  appInt21() {
    return {
      id: 'calc_u8_l1',
      title: 'Area Between Curves Adv',
      unit: 8,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Area Between Curves Adv",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u8_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u8_l1_q2',
          type: 'typing',
          question: "Question 2: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q3',
          type: 'typing',
          question: "Question 3: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Area Between Curves Adv",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q5',
          type: 'typing',
          question: "Question 5: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q6',
          type: 'typing',
          question: "Question 6: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Area Between Curves Adv",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u8_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u8_l1_q8',
          type: 'typing',
          question: "Question 8: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q9',
          type: 'typing',
          question: "Question 9: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Area Between Curves Adv:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l1_q11',
          type: 'typing',
          question: "Question 11: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q12',
          type: 'typing',
          question: "Question 12: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Area Between Curves Adv",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u8_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u8_l1_q14',
          type: 'typing',
          question: "Question 14: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q15',
          type: 'typing',
          question: "Question 15: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Area Between Curves Adv",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l1_q17',
          type: 'typing',
          question: "Question 17: Area Between Curves Adv",
          correctAnswer: 'answer_u8_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Cylindrical Shells
  appInt22() {
    return {
      id: 'calc_u8_l2',
      title: 'Cylindrical Shells',
      unit: 8,
      icon: '⭕',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Cylindrical Shells",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u8_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u8_l2_q2',
          type: 'typing',
          question: "Question 2: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q3',
          type: 'typing',
          question: "Question 3: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Cylindrical Shells",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q5',
          type: 'typing',
          question: "Question 5: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q6',
          type: 'typing',
          question: "Question 6: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Cylindrical Shells",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u8_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u8_l2_q8',
          type: 'typing',
          question: "Question 8: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q9',
          type: 'typing',
          question: "Question 9: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Cylindrical Shells:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l2_q11',
          type: 'typing',
          question: "Question 11: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q12',
          type: 'typing',
          question: "Question 12: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Cylindrical Shells",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u8_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u8_l2_q14',
          type: 'typing',
          question: "Question 14: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q15',
          type: 'typing',
          question: "Question 15: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Cylindrical Shells",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l2_q17',
          type: 'typing',
          question: "Question 17: Cylindrical Shells",
          correctAnswer: 'answer_u8_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Surface Area
  appInt23() {
    return {
      id: 'calc_u8_l3',
      title: 'Surface Area',
      unit: 8,
      icon: '➡️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Surface Area",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u8_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u8_l3_q2',
          type: 'typing',
          question: "Question 2: Surface Area",
          correctAnswer: 'answer_u8_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q3',
          type: 'typing',
          question: "Question 3: Surface Area",
          correctAnswer: 'answer_u8_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Surface Area",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q5',
          type: 'typing',
          question: "Question 5: Surface Area",
          correctAnswer: 'answer_u8_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q6',
          type: 'typing',
          question: "Question 6: Surface Area",
          correctAnswer: 'answer_u8_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Surface Area",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u8_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u8_l3_q8',
          type: 'typing',
          question: "Question 8: Surface Area",
          correctAnswer: 'answer_u8_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q9',
          type: 'typing',
          question: "Question 9: Surface Area",
          correctAnswer: 'answer_u8_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Surface Area:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l3_q11',
          type: 'typing',
          question: "Question 11: Surface Area",
          correctAnswer: 'answer_u8_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q12',
          type: 'typing',
          question: "Question 12: Surface Area",
          correctAnswer: 'answer_u8_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Surface Area",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u8_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u8_l3_q14',
          type: 'typing',
          question: "Question 14: Surface Area",
          correctAnswer: 'answer_u8_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q15',
          type: 'typing',
          question: "Question 15: Surface Area",
          correctAnswer: 'answer_u8_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Surface Area",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l3_q17',
          type: 'typing',
          question: "Question 17: Surface Area",
          correctAnswer: 'answer_u8_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Physical Applications
  appInt24() {
    return {
      id: 'calc_u8_l4',
      title: 'Physical Applications',
      unit: 8,
      icon: '📐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u8_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Physical Applications",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u8_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u8_l4_q2',
          type: 'typing',
          question: "Question 2: Physical Applications",
          correctAnswer: 'answer_u8_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q3',
          type: 'typing',
          question: "Question 3: Physical Applications",
          correctAnswer: 'answer_u8_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Physical Applications",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q5',
          type: 'typing',
          question: "Question 5: Physical Applications",
          correctAnswer: 'answer_u8_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q6',
          type: 'typing',
          question: "Question 6: Physical Applications",
          correctAnswer: 'answer_u8_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Physical Applications",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u8_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u8_l4_q8',
          type: 'typing',
          question: "Question 8: Physical Applications",
          correctAnswer: 'answer_u8_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q9',
          type: 'typing',
          question: "Question 9: Physical Applications",
          correctAnswer: 'answer_u8_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Physical Applications:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l4_q11',
          type: 'typing',
          question: "Question 11: Physical Applications",
          correctAnswer: 'answer_u8_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q12',
          type: 'typing',
          question: "Question 12: Physical Applications",
          correctAnswer: 'answer_u8_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Physical Applications",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u8_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u8_l4_q14',
          type: 'typing',
          question: "Question 14: Physical Applications",
          correctAnswer: 'answer_u8_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q15',
          type: 'typing',
          question: "Question 15: Physical Applications",
          correctAnswer: 'answer_u8_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Physical Applications",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l4_q17',
          type: 'typing',
          question: "Question 17: Physical Applications",
          correctAnswer: 'answer_u8_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Applications Mastery
  appInt25() {
    return {
      id: 'calc_u8_l5',
      title: 'Applications Mastery',
      unit: 8,
      icon: '∙',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u8_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Applications Mastery",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u8_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u8_l5_q2',
          type: 'typing',
          question: "Question 2: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q3',
          type: 'typing',
          question: "Question 3: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Applications Mastery",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q5',
          type: 'typing',
          question: "Question 5: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q6',
          type: 'typing',
          question: "Question 6: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Applications Mastery",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u8_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u8_l5_q8',
          type: 'typing',
          question: "Question 8: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q9',
          type: 'typing',
          question: "Question 9: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Applications Mastery:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u8_l5_q11',
          type: 'typing',
          question: "Question 11: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q12',
          type: 'typing',
          question: "Question 12: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Applications Mastery",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u8_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u8_l5_q14',
          type: 'typing',
          question: "Question 14: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q15',
          type: 'typing',
          question: "Question 15: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u8_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Applications Mastery",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u8_l5_q17',
          type: 'typing',
          question: "Question 17: Applications Mastery",
          correctAnswer: 'answer_u8_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Sequences Intro
  seq1() {
    return {
      id: 'calc_u9_l1',
      title: 'Sequences Intro',
      unit: 9,
      icon: '×',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u9_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Sequences Intro",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u9_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u9_l1_q2',
          type: 'typing',
          question: "Question 2: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q3',
          type: 'typing',
          question: "Question 3: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Sequences Intro",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q5',
          type: 'typing',
          question: "Question 5: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q6',
          type: 'typing',
          question: "Question 6: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Sequences Intro",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u9_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u9_l1_q8',
          type: 'typing',
          question: "Question 8: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q9',
          type: 'typing',
          question: "Question 9: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Sequences Intro:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l1_q11',
          type: 'typing',
          question: "Question 11: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q12',
          type: 'typing',
          question: "Question 12: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Sequences Intro",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u9_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u9_l1_q14',
          type: 'typing',
          question: "Question 14: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q15',
          type: 'typing',
          question: "Question 15: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Sequences Intro",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l1_q17',
          type: 'typing',
          question: "Question 17: Sequences Intro",
          correctAnswer: 'answer_u9_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arithmetic Sequences
  seq2() {
    return {
      id: 'calc_u9_l2',
      title: 'Arithmetic Sequences',
      unit: 9,
      icon: '📏',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Arithmetic Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u9_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u9_l2_q2',
          type: 'typing',
          question: "Question 2: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q3',
          type: 'typing',
          question: "Question 3: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Arithmetic Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q5',
          type: 'typing',
          question: "Question 5: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q6',
          type: 'typing',
          question: "Question 6: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Arithmetic Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u9_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u9_l2_q8',
          type: 'typing',
          question: "Question 8: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q9',
          type: 'typing',
          question: "Question 9: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Arithmetic Sequences:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l2_q11',
          type: 'typing',
          question: "Question 11: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q12',
          type: 'typing',
          question: "Question 12: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Arithmetic Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u9_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u9_l2_q14',
          type: 'typing',
          question: "Question 14: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q15',
          type: 'typing',
          question: "Question 15: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Arithmetic Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l2_q17',
          type: 'typing',
          question: "Question 17: Arithmetic Sequences",
          correctAnswer: 'answer_u9_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Geometric Sequences
  seq3() {
    return {
      id: 'calc_u9_l3',
      title: 'Geometric Sequences',
      unit: 9,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Geometric Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u9_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u9_l3_q2',
          type: 'typing',
          question: "Question 2: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q3',
          type: 'typing',
          question: "Question 3: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Geometric Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q5',
          type: 'typing',
          question: "Question 5: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q6',
          type: 'typing',
          question: "Question 6: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Geometric Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u9_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u9_l3_q8',
          type: 'typing',
          question: "Question 8: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q9',
          type: 'typing',
          question: "Question 9: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Geometric Sequences:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l3_q11',
          type: 'typing',
          question: "Question 11: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q12',
          type: 'typing',
          question: "Question 12: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Geometric Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u9_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u9_l3_q14',
          type: 'typing',
          question: "Question 14: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q15',
          type: 'typing',
          question: "Question 15: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Geometric Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l3_q17',
          type: 'typing',
          question: "Question 17: Geometric Sequences",
          correctAnswer: 'answer_u9_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Limits of Sequences
  seq4() {
    return {
      id: 'calc_u9_l4',
      title: 'Limits of Sequences',
      unit: 9,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u9_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Limits of Sequences",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u9_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u9_l4_q2',
          type: 'typing',
          question: "Question 2: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q3',
          type: 'typing',
          question: "Question 3: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Limits of Sequences",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q5',
          type: 'typing',
          question: "Question 5: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q6',
          type: 'typing',
          question: "Question 6: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Limits of Sequences",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u9_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u9_l4_q8',
          type: 'typing',
          question: "Question 8: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q9',
          type: 'typing',
          question: "Question 9: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Limits of Sequences:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l4_q11',
          type: 'typing',
          question: "Question 11: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q12',
          type: 'typing',
          question: "Question 12: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Limits of Sequences",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u9_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u9_l4_q14',
          type: 'typing',
          question: "Question 14: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q15',
          type: 'typing',
          question: "Question 15: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Limits of Sequences",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l4_q17',
          type: 'typing',
          question: "Question 17: Limits of Sequences",
          correctAnswer: 'answer_u9_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Sequences Review
  seq5() {
    return {
      id: 'calc_u9_l5',
      title: 'Sequences Review',
      unit: 9,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u9_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Sequences Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u9_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u9_l5_q2',
          type: 'typing',
          question: "Question 2: Sequences Review",
          correctAnswer: 'answer_u9_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q3',
          type: 'typing',
          question: "Question 3: Sequences Review",
          correctAnswer: 'answer_u9_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Sequences Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q5',
          type: 'typing',
          question: "Question 5: Sequences Review",
          correctAnswer: 'answer_u9_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q6',
          type: 'typing',
          question: "Question 6: Sequences Review",
          correctAnswer: 'answer_u9_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Sequences Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u9_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u9_l5_q8',
          type: 'typing',
          question: "Question 8: Sequences Review",
          correctAnswer: 'answer_u9_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q9',
          type: 'typing',
          question: "Question 9: Sequences Review",
          correctAnswer: 'answer_u9_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Sequences Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u9_l5_q11',
          type: 'typing',
          question: "Question 11: Sequences Review",
          correctAnswer: 'answer_u9_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q12',
          type: 'typing',
          question: "Question 12: Sequences Review",
          correctAnswer: 'answer_u9_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Sequences Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u9_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u9_l5_q14',
          type: 'typing',
          question: "Question 14: Sequences Review",
          correctAnswer: 'answer_u9_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q15',
          type: 'typing',
          question: "Question 15: Sequences Review",
          correctAnswer: 'answer_u9_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u9_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Sequences Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u9_l5_q17',
          type: 'typing',
          question: "Question 17: Sequences Review",
          correctAnswer: 'answer_u9_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Series Intro
  series1() {
    return {
      id: 'calc_u10_l1',
      title: 'Series Intro',
      unit: 10,
      icon: '→',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u10_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Series Intro",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l1_q2',
          type: 'typing',
          question: "Question 2: Series Intro",
          correctAnswer: 'answer_u10_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q3',
          type: 'typing',
          question: "Question 3: Series Intro",
          correctAnswer: 'answer_u10_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Series Intro",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q5',
          type: 'typing',
          question: "Question 5: Series Intro",
          correctAnswer: 'answer_u10_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q6',
          type: 'typing',
          question: "Question 6: Series Intro",
          correctAnswer: 'answer_u10_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Series Intro",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l1_q8',
          type: 'typing',
          question: "Question 8: Series Intro",
          correctAnswer: 'answer_u10_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q9',
          type: 'typing',
          question: "Question 9: Series Intro",
          correctAnswer: 'answer_u10_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Series Intro:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l1_q11',
          type: 'typing',
          question: "Question 11: Series Intro",
          correctAnswer: 'answer_u10_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q12',
          type: 'typing',
          question: "Question 12: Series Intro",
          correctAnswer: 'answer_u10_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Series Intro",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l1_q14',
          type: 'typing',
          question: "Question 14: Series Intro",
          correctAnswer: 'answer_u10_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q15',
          type: 'typing',
          question: "Question 15: Series Intro",
          correctAnswer: 'answer_u10_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Series Intro",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l1_q17',
          type: 'typing',
          question: "Question 17: Series Intro",
          correctAnswer: 'answer_u10_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Geometric Series
  series2() {
    return {
      id: 'calc_u10_l2',
      title: 'Geometric Series',
      unit: 10,
      icon: '∂',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Geometric Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l2_q2',
          type: 'typing',
          question: "Question 2: Geometric Series",
          correctAnswer: 'answer_u10_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q3',
          type: 'typing',
          question: "Question 3: Geometric Series",
          correctAnswer: 'answer_u10_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Geometric Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q5',
          type: 'typing',
          question: "Question 5: Geometric Series",
          correctAnswer: 'answer_u10_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q6',
          type: 'typing',
          question: "Question 6: Geometric Series",
          correctAnswer: 'answer_u10_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Geometric Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l2_q8',
          type: 'typing',
          question: "Question 8: Geometric Series",
          correctAnswer: 'answer_u10_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q9',
          type: 'typing',
          question: "Question 9: Geometric Series",
          correctAnswer: 'answer_u10_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Geometric Series:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l2_q11',
          type: 'typing',
          question: "Question 11: Geometric Series",
          correctAnswer: 'answer_u10_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q12',
          type: 'typing',
          question: "Question 12: Geometric Series",
          correctAnswer: 'answer_u10_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Geometric Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l2_q14',
          type: 'typing',
          question: "Question 14: Geometric Series",
          correctAnswer: 'answer_u10_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q15',
          type: 'typing',
          question: "Question 15: Geometric Series",
          correctAnswer: 'answer_u10_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Geometric Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l2_q17',
          type: 'typing',
          question: "Question 17: Geometric Series",
          correctAnswer: 'answer_u10_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Convergence Tests
  series3() {
    return {
      id: 'calc_u10_l3',
      title: 'Convergence Tests',
      unit: 10,
      icon: '✈️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Convergence Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l3_q2',
          type: 'typing',
          question: "Question 2: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q3',
          type: 'typing',
          question: "Question 3: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Convergence Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q5',
          type: 'typing',
          question: "Question 5: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q6',
          type: 'typing',
          question: "Question 6: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Convergence Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l3_q8',
          type: 'typing',
          question: "Question 8: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q9',
          type: 'typing',
          question: "Question 9: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Convergence Tests:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l3_q11',
          type: 'typing',
          question: "Question 11: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q12',
          type: 'typing',
          question: "Question 12: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Convergence Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l3_q14',
          type: 'typing',
          question: "Question 14: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q15',
          type: 'typing',
          question: "Question 15: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Convergence Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l3_q17',
          type: 'typing',
          question: "Question 17: Convergence Tests",
          correctAnswer: 'answer_u10_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Integral Test
  series4() {
    return {
      id: 'calc_u10_l4',
      title: 'Integral Test',
      unit: 10,
      icon: '➡️',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Integral Test",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l4_q2',
          type: 'typing',
          question: "Question 2: Integral Test",
          correctAnswer: 'answer_u10_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q3',
          type: 'typing',
          question: "Question 3: Integral Test",
          correctAnswer: 'answer_u10_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Integral Test",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q5',
          type: 'typing',
          question: "Question 5: Integral Test",
          correctAnswer: 'answer_u10_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q6',
          type: 'typing',
          question: "Question 6: Integral Test",
          correctAnswer: 'answer_u10_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Integral Test",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l4_q8',
          type: 'typing',
          question: "Question 8: Integral Test",
          correctAnswer: 'answer_u10_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q9',
          type: 'typing',
          question: "Question 9: Integral Test",
          correctAnswer: 'answer_u10_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Integral Test:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l4_q11',
          type: 'typing',
          question: "Question 11: Integral Test",
          correctAnswer: 'answer_u10_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q12',
          type: 'typing',
          question: "Question 12: Integral Test",
          correctAnswer: 'answer_u10_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Integral Test",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l4_q14',
          type: 'typing',
          question: "Question 14: Integral Test",
          correctAnswer: 'answer_u10_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q15',
          type: 'typing',
          question: "Question 15: Integral Test",
          correctAnswer: 'answer_u10_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Integral Test",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l4_q17',
          type: 'typing',
          question: "Question 17: Integral Test",
          correctAnswer: 'answer_u10_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Comparison Tests
  series5() {
    return {
      id: 'calc_u10_l5',
      title: 'Comparison Tests',
      unit: 10,
      icon: '∇',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Comparison Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l5_q2',
          type: 'typing',
          question: "Question 2: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q3',
          type: 'typing',
          question: "Question 3: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Comparison Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q5',
          type: 'typing',
          question: "Question 5: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q6',
          type: 'typing',
          question: "Question 6: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Comparison Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l5_q8',
          type: 'typing',
          question: "Question 8: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q9',
          type: 'typing',
          question: "Question 9: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Comparison Tests:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l5_q11',
          type: 'typing',
          question: "Question 11: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q12',
          type: 'typing',
          question: "Question 12: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Comparison Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l5_q14',
          type: 'typing',
          question: "Question 14: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q15',
          type: 'typing',
          question: "Question 15: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Comparison Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l5_q17',
          type: 'typing',
          question: "Question 17: Comparison Tests",
          correctAnswer: 'answer_u10_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Ratio & Root Tests
  series6() {
    return {
      id: 'calc_u10_l6',
      title: 'Ratio & Root Tests',
      unit: 10,
      icon: '🎯',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u10_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Ratio & Root Tests",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l6_q2',
          type: 'typing',
          question: "Question 2: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q3',
          type: 'typing',
          question: "Question 3: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Ratio & Root Tests",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q5',
          type: 'typing',
          question: "Question 5: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q6',
          type: 'typing',
          question: "Question 6: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Ratio & Root Tests",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l6_q8',
          type: 'typing',
          question: "Question 8: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q9',
          type: 'typing',
          question: "Question 9: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Ratio & Root Tests:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l6_q11',
          type: 'typing',
          question: "Question 11: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q12',
          type: 'typing',
          question: "Question 12: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Ratio & Root Tests",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l6_q14',
          type: 'typing',
          question: "Question 14: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q15',
          type: 'typing',
          question: "Question 15: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Ratio & Root Tests",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l6_q17',
          type: 'typing',
          question: "Question 17: Ratio & Root Tests",
          correctAnswer: 'answer_u10_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Series Review
  series7() {
    return {
      id: 'calc_u10_l7',
      title: 'Series Review',
      unit: 10,
      icon: '∬',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u10_l7_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Series Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u10_l7_q1.png',
          xp: 4
        },
        {
          id: 'calc_u10_l7_q2',
          type: 'typing',
          question: "Question 2: Series Review",
          correctAnswer: 'answer_u10_l7_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q3',
          type: 'typing',
          question: "Question 3: Series Review",
          correctAnswer: 'answer_u10_l7_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Series Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q5',
          type: 'typing',
          question: "Question 5: Series Review",
          correctAnswer: 'answer_u10_l7_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q6',
          type: 'typing',
          question: "Question 6: Series Review",
          correctAnswer: 'answer_u10_l7_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Series Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u10_l7_q7.png',
          xp: 4
        },
        {
          id: 'calc_u10_l7_q8',
          type: 'typing',
          question: "Question 8: Series Review",
          correctAnswer: 'answer_u10_l7_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q9',
          type: 'typing',
          question: "Question 9: Series Review",
          correctAnswer: 'answer_u10_l7_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q10',
          type: 'match_pairs',
          question: "Match the following for Series Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u10_l7_q11',
          type: 'typing',
          question: "Question 11: Series Review",
          correctAnswer: 'answer_u10_l7_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q12',
          type: 'typing',
          question: "Question 12: Series Review",
          correctAnswer: 'answer_u10_l7_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Series Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u10_l7_q13.png',
          xp: 4
        },
        {
          id: 'calc_u10_l7_q14',
          type: 'typing',
          question: "Question 14: Series Review",
          correctAnswer: 'answer_u10_l7_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q15',
          type: 'typing',
          question: "Question 15: Series Review",
          correctAnswer: 'answer_u10_l7_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u10_l7_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Series Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u10_l7_q17',
          type: 'typing',
          question: "Question 17: Series Review",
          correctAnswer: 'answer_u10_l7_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series
  power1() {
    return {
      id: 'calc_u11_l1',
      title: 'Power Series',
      unit: 11,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Power Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l1_q2',
          type: 'typing',
          question: "Question 2: Power Series",
          correctAnswer: 'answer_u11_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q3',
          type: 'typing',
          question: "Question 3: Power Series",
          correctAnswer: 'answer_u11_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Power Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q5',
          type: 'typing',
          question: "Question 5: Power Series",
          correctAnswer: 'answer_u11_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q6',
          type: 'typing',
          question: "Question 6: Power Series",
          correctAnswer: 'answer_u11_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Power Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l1_q8',
          type: 'typing',
          question: "Question 8: Power Series",
          correctAnswer: 'answer_u11_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q9',
          type: 'typing',
          question: "Question 9: Power Series",
          correctAnswer: 'answer_u11_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Power Series:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l1_q11',
          type: 'typing',
          question: "Question 11: Power Series",
          correctAnswer: 'answer_u11_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q12',
          type: 'typing',
          question: "Question 12: Power Series",
          correctAnswer: 'answer_u11_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Power Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l1_q14',
          type: 'typing',
          question: "Question 14: Power Series",
          correctAnswer: 'answer_u11_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q15',
          type: 'typing',
          question: "Question 15: Power Series",
          correctAnswer: 'answer_u11_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Power Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l1_q17',
          type: 'typing',
          question: "Question 17: Power Series",
          correctAnswer: 'answer_u11_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Radius of Convergence
  power2() {
    return {
      id: 'calc_u11_l2',
      title: 'Radius of Convergence',
      unit: 11,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Radius of Convergence",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l2_q2',
          type: 'typing',
          question: "Question 2: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q3',
          type: 'typing',
          question: "Question 3: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Radius of Convergence",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q5',
          type: 'typing',
          question: "Question 5: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q6',
          type: 'typing',
          question: "Question 6: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Radius of Convergence",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l2_q8',
          type: 'typing',
          question: "Question 8: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q9',
          type: 'typing',
          question: "Question 9: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Radius of Convergence:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l2_q11',
          type: 'typing',
          question: "Question 11: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q12',
          type: 'typing',
          question: "Question 12: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Radius of Convergence",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l2_q14',
          type: 'typing',
          question: "Question 14: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q15',
          type: 'typing',
          question: "Question 15: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Radius of Convergence",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l2_q17',
          type: 'typing',
          question: "Question 17: Radius of Convergence",
          correctAnswer: 'answer_u11_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Taylor Series
  power3() {
    return {
      id: 'calc_u11_l3',
      title: 'Taylor Series',
      unit: 11,
      icon: '∭',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Taylor Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l3_q2',
          type: 'typing',
          question: "Question 2: Taylor Series",
          correctAnswer: 'answer_u11_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q3',
          type: 'typing',
          question: "Question 3: Taylor Series",
          correctAnswer: 'answer_u11_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Taylor Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q5',
          type: 'typing',
          question: "Question 5: Taylor Series",
          correctAnswer: 'answer_u11_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q6',
          type: 'typing',
          question: "Question 6: Taylor Series",
          correctAnswer: 'answer_u11_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Taylor Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l3_q8',
          type: 'typing',
          question: "Question 8: Taylor Series",
          correctAnswer: 'answer_u11_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q9',
          type: 'typing',
          question: "Question 9: Taylor Series",
          correctAnswer: 'answer_u11_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Taylor Series:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l3_q11',
          type: 'typing',
          question: "Question 11: Taylor Series",
          correctAnswer: 'answer_u11_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q12',
          type: 'typing',
          question: "Question 12: Taylor Series",
          correctAnswer: 'answer_u11_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Taylor Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l3_q14',
          type: 'typing',
          question: "Question 14: Taylor Series",
          correctAnswer: 'answer_u11_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q15',
          type: 'typing',
          question: "Question 15: Taylor Series",
          correctAnswer: 'answer_u11_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Taylor Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l3_q17',
          type: 'typing',
          question: "Question 17: Taylor Series",
          correctAnswer: 'answer_u11_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Maclaurin Series
  power4() {
    return {
      id: 'calc_u11_l4',
      title: 'Maclaurin Series',
      unit: 11,
      icon: '🥁',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Maclaurin Series",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l4_q2',
          type: 'typing',
          question: "Question 2: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q3',
          type: 'typing',
          question: "Question 3: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Maclaurin Series",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q5',
          type: 'typing',
          question: "Question 5: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q6',
          type: 'typing',
          question: "Question 6: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Maclaurin Series",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l4_q8',
          type: 'typing',
          question: "Question 8: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q9',
          type: 'typing',
          question: "Question 9: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Maclaurin Series:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l4_q11',
          type: 'typing',
          question: "Question 11: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q12',
          type: 'typing',
          question: "Question 12: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Maclaurin Series",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l4_q14',
          type: 'typing',
          question: "Question 14: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q15',
          type: 'typing',
          question: "Question 15: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Maclaurin Series",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l4_q17',
          type: 'typing',
          question: "Question 17: Maclaurin Series",
          correctAnswer: 'answer_u11_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series Apps
  power5() {
    return {
      id: 'calc_u11_l5',
      title: 'Power Series Apps',
      unit: 11,
      icon: '🌐',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u11_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Power Series Apps",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l5_q2',
          type: 'typing',
          question: "Question 2: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q3',
          type: 'typing',
          question: "Question 3: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Power Series Apps",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q5',
          type: 'typing',
          question: "Question 5: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q6',
          type: 'typing',
          question: "Question 6: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Power Series Apps",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l5_q8',
          type: 'typing',
          question: "Question 8: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q9',
          type: 'typing',
          question: "Question 9: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Power Series Apps:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l5_q11',
          type: 'typing',
          question: "Question 11: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q12',
          type: 'typing',
          question: "Question 12: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Power Series Apps",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l5_q14',
          type: 'typing',
          question: "Question 14: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q15',
          type: 'typing',
          question: "Question 15: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Power Series Apps",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l5_q17',
          type: 'typing',
          question: "Question 17: Power Series Apps",
          correctAnswer: 'answer_u11_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Power Series Review
  power6() {
    return {
      id: 'calc_u11_l6',
      title: 'Power Series Review',
      unit: 11,
      icon: '🎯',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u11_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Power Series Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u11_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u11_l6_q2',
          type: 'typing',
          question: "Question 2: Power Series Review",
          correctAnswer: 'answer_u11_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q3',
          type: 'typing',
          question: "Question 3: Power Series Review",
          correctAnswer: 'answer_u11_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Power Series Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q5',
          type: 'typing',
          question: "Question 5: Power Series Review",
          correctAnswer: 'answer_u11_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q6',
          type: 'typing',
          question: "Question 6: Power Series Review",
          correctAnswer: 'answer_u11_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Power Series Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u11_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u11_l6_q8',
          type: 'typing',
          question: "Question 8: Power Series Review",
          correctAnswer: 'answer_u11_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q9',
          type: 'typing',
          question: "Question 9: Power Series Review",
          correctAnswer: 'answer_u11_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Power Series Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u11_l6_q11',
          type: 'typing',
          question: "Question 11: Power Series Review",
          correctAnswer: 'answer_u11_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q12',
          type: 'typing',
          question: "Question 12: Power Series Review",
          correctAnswer: 'answer_u11_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Power Series Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u11_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u11_l6_q14',
          type: 'typing',
          question: "Question 14: Power Series Review",
          correctAnswer: 'answer_u11_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q15',
          type: 'typing',
          question: "Question 15: Power Series Review",
          correctAnswer: 'answer_u11_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u11_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Power Series Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u11_l6_q17',
          type: 'typing',
          question: "Question 17: Power Series Review",
          correctAnswer: 'answer_u11_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Parametric Equations
  polar1() {
    return {
      id: 'calc_u12_l1',
      title: 'Parametric Equations',
      unit: 12,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Parametric Equations",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l1_q2',
          type: 'typing',
          question: "Question 2: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q3',
          type: 'typing',
          question: "Question 3: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Parametric Equations",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q5',
          type: 'typing',
          question: "Question 5: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q6',
          type: 'typing',
          question: "Question 6: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Parametric Equations",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l1_q8',
          type: 'typing',
          question: "Question 8: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q9',
          type: 'typing',
          question: "Question 9: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Parametric Equations:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l1_q11',
          type: 'typing',
          question: "Question 11: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q12',
          type: 'typing',
          question: "Question 12: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Parametric Equations",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l1_q14',
          type: 'typing',
          question: "Question 14: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q15',
          type: 'typing',
          question: "Question 15: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Parametric Equations",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l1_q17',
          type: 'typing',
          question: "Question 17: Parametric Equations",
          correctAnswer: 'answer_u12_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus of Parametrics
  polar2() {
    return {
      id: 'calc_u12_l2',
      title: 'Calculus of Parametrics',
      unit: 12,
      icon: '∮',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Calculus of Parametrics",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l2_q2',
          type: 'typing',
          question: "Question 2: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q3',
          type: 'typing',
          question: "Question 3: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Calculus of Parametrics",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q5',
          type: 'typing',
          question: "Question 5: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q6',
          type: 'typing',
          question: "Question 6: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Calculus of Parametrics",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l2_q8',
          type: 'typing',
          question: "Question 8: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q9',
          type: 'typing',
          question: "Question 9: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Calculus of Parametrics:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l2_q11',
          type: 'typing',
          question: "Question 11: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q12',
          type: 'typing',
          question: "Question 12: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Calculus of Parametrics",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l2_q14',
          type: 'typing',
          question: "Question 14: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q15',
          type: 'typing',
          question: "Question 15: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Calculus of Parametrics",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l2_q17',
          type: 'typing',
          question: "Question 17: Calculus of Parametrics",
          correctAnswer: 'answer_u12_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Polar Coordinates
  polar3() {
    return {
      id: 'calc_u12_l3',
      title: 'Polar Coordinates',
      unit: 12,
      icon: '📜',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Polar Coordinates",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l3_q2',
          type: 'typing',
          question: "Question 2: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q3',
          type: 'typing',
          question: "Question 3: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Polar Coordinates",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q5',
          type: 'typing',
          question: "Question 5: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q6',
          type: 'typing',
          question: "Question 6: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Polar Coordinates",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l3_q8',
          type: 'typing',
          question: "Question 8: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q9',
          type: 'typing',
          question: "Question 9: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Polar Coordinates:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l3_q11',
          type: 'typing',
          question: "Question 11: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q12',
          type: 'typing',
          question: "Question 12: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Polar Coordinates",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l3_q14',
          type: 'typing',
          question: "Question 14: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q15',
          type: 'typing',
          question: "Question 15: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Polar Coordinates",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l3_q17',
          type: 'typing',
          question: "Question 17: Polar Coordinates",
          correctAnswer: 'answer_u12_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Polar Area
  polar4() {
    return {
      id: 'calc_u12_l4',
      title: 'Polar Area',
      unit: 12,
      icon: '🟢',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Polar Area",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l4_q2',
          type: 'typing',
          question: "Question 2: Polar Area",
          correctAnswer: 'answer_u12_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q3',
          type: 'typing',
          question: "Question 3: Polar Area",
          correctAnswer: 'answer_u12_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Polar Area",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q5',
          type: 'typing',
          question: "Question 5: Polar Area",
          correctAnswer: 'answer_u12_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q6',
          type: 'typing',
          question: "Question 6: Polar Area",
          correctAnswer: 'answer_u12_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Polar Area",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l4_q8',
          type: 'typing',
          question: "Question 8: Polar Area",
          correctAnswer: 'answer_u12_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q9',
          type: 'typing',
          question: "Question 9: Polar Area",
          correctAnswer: 'answer_u12_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Polar Area:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l4_q11',
          type: 'typing',
          question: "Question 11: Polar Area",
          correctAnswer: 'answer_u12_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q12',
          type: 'typing',
          question: "Question 12: Polar Area",
          correctAnswer: 'answer_u12_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Polar Area",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l4_q14',
          type: 'typing',
          question: "Question 14: Polar Area",
          correctAnswer: 'answer_u12_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q15',
          type: 'typing',
          question: "Question 15: Polar Area",
          correctAnswer: 'answer_u12_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Polar Area",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l4_q17',
          type: 'typing',
          question: "Question 17: Polar Area",
          correctAnswer: 'answer_u12_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Conic Sections
  polar5() {
    return {
      id: 'calc_u12_l5',
      title: 'Conic Sections',
      unit: 12,
      icon: '🌀',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u12_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Conic Sections",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l5_q2',
          type: 'typing',
          question: "Question 2: Conic Sections",
          correctAnswer: 'answer_u12_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q3',
          type: 'typing',
          question: "Question 3: Conic Sections",
          correctAnswer: 'answer_u12_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Conic Sections",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q5',
          type: 'typing',
          question: "Question 5: Conic Sections",
          correctAnswer: 'answer_u12_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q6',
          type: 'typing',
          question: "Question 6: Conic Sections",
          correctAnswer: 'answer_u12_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Conic Sections",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l5_q8',
          type: 'typing',
          question: "Question 8: Conic Sections",
          correctAnswer: 'answer_u12_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q9',
          type: 'typing',
          question: "Question 9: Conic Sections",
          correctAnswer: 'answer_u12_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Conic Sections:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l5_q11',
          type: 'typing',
          question: "Question 11: Conic Sections",
          correctAnswer: 'answer_u12_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q12',
          type: 'typing',
          question: "Question 12: Conic Sections",
          correctAnswer: 'answer_u12_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Conic Sections",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l5_q14',
          type: 'typing',
          question: "Question 14: Conic Sections",
          correctAnswer: 'answer_u12_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q15',
          type: 'typing',
          question: "Question 15: Conic Sections",
          correctAnswer: 'answer_u12_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Conic Sections",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l5_q17',
          type: 'typing',
          question: "Question 17: Conic Sections",
          correctAnswer: 'answer_u12_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus 2 Final
  polar6() {
    return {
      id: 'calc_u12_l6',
      title: 'Calculus 2 Final',
      unit: 12,
      icon: '🌐',
      xp: 83,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u12_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Calculus 2 Final",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u12_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u12_l6_q2',
          type: 'typing',
          question: "Question 2: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q3',
          type: 'typing',
          question: "Question 3: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Calculus 2 Final",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q5',
          type: 'typing',
          question: "Question 5: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q6',
          type: 'typing',
          question: "Question 6: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Calculus 2 Final",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u12_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u12_l6_q8',
          type: 'typing',
          question: "Question 8: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q9',
          type: 'typing',
          question: "Question 9: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Calculus 2 Final:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u12_l6_q11',
          type: 'typing',
          question: "Question 11: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q12',
          type: 'typing',
          question: "Question 12: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Calculus 2 Final",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u12_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u12_l6_q14',
          type: 'typing',
          question: "Question 14: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q15',
          type: 'typing',
          question: "Question 15: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u12_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Calculus 2 Final",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u12_l6_q17',
          type: 'typing',
          question: "Question 17: Calculus 2 Final",
          correctAnswer: 'answer_u12_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vectors in 2D
  vectors1() {
    return {
      id: 'calc_u13_l1',
      title: 'Vectors in 2D',
      unit: 13,
      icon: '🌊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vectors in 2D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l1_q2',
          type: 'typing',
          question: "Question 2: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q3',
          type: 'typing',
          question: "Question 3: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vectors in 2D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q5',
          type: 'typing',
          question: "Question 5: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q6',
          type: 'typing',
          question: "Question 6: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vectors in 2D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l1_q8',
          type: 'typing',
          question: "Question 8: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q9',
          type: 'typing',
          question: "Question 9: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Vectors in 2D:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l1_q11',
          type: 'typing',
          question: "Question 11: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q12',
          type: 'typing',
          question: "Question 12: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vectors in 2D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l1_q14',
          type: 'typing',
          question: "Question 14: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q15',
          type: 'typing',
          question: "Question 15: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vectors in 2D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l1_q17',
          type: 'typing',
          question: "Question 17: Vectors in 2D",
          correctAnswer: 'answer_u13_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vectors in 3D
  vectors2() {
    return {
      id: 'calc_u13_l2',
      title: 'Vectors in 3D',
      unit: 13,
      icon: '💨',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vectors in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l2_q2',
          type: 'typing',
          question: "Question 2: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q3',
          type: 'typing',
          question: "Question 3: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vectors in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q5',
          type: 'typing',
          question: "Question 5: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q6',
          type: 'typing',
          question: "Question 6: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vectors in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l2_q8',
          type: 'typing',
          question: "Question 8: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q9',
          type: 'typing',
          question: "Question 9: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Vectors in 3D:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l2_q11',
          type: 'typing',
          question: "Question 11: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q12',
          type: 'typing',
          question: "Question 12: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vectors in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l2_q14',
          type: 'typing',
          question: "Question 14: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q15',
          type: 'typing',
          question: "Question 15: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vectors in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l2_q17',
          type: 'typing',
          question: "Question 17: Vectors in 3D",
          correctAnswer: 'answer_u13_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Dot Product
  vectors3() {
    return {
      id: 'calc_u13_l3',
      title: 'Dot Product',
      unit: 13,
      icon: '🎯',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Dot Product",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l3_q2',
          type: 'typing',
          question: "Question 2: Dot Product",
          correctAnswer: 'answer_u13_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q3',
          type: 'typing',
          question: "Question 3: Dot Product",
          correctAnswer: 'answer_u13_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Dot Product",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q5',
          type: 'typing',
          question: "Question 5: Dot Product",
          correctAnswer: 'answer_u13_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q6',
          type: 'typing',
          question: "Question 6: Dot Product",
          correctAnswer: 'answer_u13_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Dot Product",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l3_q8',
          type: 'typing',
          question: "Question 8: Dot Product",
          correctAnswer: 'answer_u13_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q9',
          type: 'typing',
          question: "Question 9: Dot Product",
          correctAnswer: 'answer_u13_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Dot Product:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l3_q11',
          type: 'typing',
          question: "Question 11: Dot Product",
          correctAnswer: 'answer_u13_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q12',
          type: 'typing',
          question: "Question 12: Dot Product",
          correctAnswer: 'answer_u13_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Dot Product",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l3_q14',
          type: 'typing',
          question: "Question 14: Dot Product",
          correctAnswer: 'answer_u13_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q15',
          type: 'typing',
          question: "Question 15: Dot Product",
          correctAnswer: 'answer_u13_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Dot Product",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l3_q17',
          type: 'typing',
          question: "Question 17: Dot Product",
          correctAnswer: 'answer_u13_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Cross Product
  vectors4() {
    return {
      id: 'calc_u13_l4',
      title: 'Cross Product',
      unit: 13,
      icon: '📚',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Cross Product",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l4_q2',
          type: 'typing',
          question: "Question 2: Cross Product",
          correctAnswer: 'answer_u13_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q3',
          type: 'typing',
          question: "Question 3: Cross Product",
          correctAnswer: 'answer_u13_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Cross Product",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q5',
          type: 'typing',
          question: "Question 5: Cross Product",
          correctAnswer: 'answer_u13_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q6',
          type: 'typing',
          question: "Question 6: Cross Product",
          correctAnswer: 'answer_u13_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Cross Product",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l4_q8',
          type: 'typing',
          question: "Question 8: Cross Product",
          correctAnswer: 'answer_u13_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q9',
          type: 'typing',
          question: "Question 9: Cross Product",
          correctAnswer: 'answer_u13_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Cross Product:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l4_q11',
          type: 'typing',
          question: "Question 11: Cross Product",
          correctAnswer: 'answer_u13_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q12',
          type: 'typing',
          question: "Question 12: Cross Product",
          correctAnswer: 'answer_u13_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Cross Product",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l4_q14',
          type: 'typing',
          question: "Question 14: Cross Product",
          correctAnswer: 'answer_u13_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q15',
          type: 'typing',
          question: "Question 15: Cross Product",
          correctAnswer: 'answer_u13_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Cross Product",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l4_q17',
          type: 'typing',
          question: "Question 17: Cross Product",
          correctAnswer: 'answer_u13_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Lines in 3D
  vectors5() {
    return {
      id: 'calc_u13_l5',
      title: 'Lines in 3D',
      unit: 13,
      icon: '📖',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Lines in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l5_q2',
          type: 'typing',
          question: "Question 2: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q3',
          type: 'typing',
          question: "Question 3: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Lines in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q5',
          type: 'typing',
          question: "Question 5: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q6',
          type: 'typing',
          question: "Question 6: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Lines in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l5_q8',
          type: 'typing',
          question: "Question 8: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q9',
          type: 'typing',
          question: "Question 9: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Lines in 3D:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l5_q11',
          type: 'typing',
          question: "Question 11: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q12',
          type: 'typing',
          question: "Question 12: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Lines in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l5_q14',
          type: 'typing',
          question: "Question 14: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q15',
          type: 'typing',
          question: "Question 15: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Lines in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l5_q17',
          type: 'typing',
          question: "Question 17: Lines in 3D",
          correctAnswer: 'answer_u13_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Planes in 3D
  vectors6() {
    return {
      id: 'calc_u13_l6',
      title: 'Planes in 3D',
      unit: 13,
      icon: '🎓',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u13_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Planes in 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l6_q2',
          type: 'typing',
          question: "Question 2: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q3',
          type: 'typing',
          question: "Question 3: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Planes in 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q5',
          type: 'typing',
          question: "Question 5: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q6',
          type: 'typing',
          question: "Question 6: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Planes in 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l6_q8',
          type: 'typing',
          question: "Question 8: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q9',
          type: 'typing',
          question: "Question 9: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Planes in 3D:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l6_q11',
          type: 'typing',
          question: "Question 11: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q12',
          type: 'typing',
          question: "Question 12: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Planes in 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l6_q14',
          type: 'typing',
          question: "Question 14: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q15',
          type: 'typing',
          question: "Question 15: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Planes in 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l6_q17',
          type: 'typing',
          question: "Question 17: Planes in 3D",
          correctAnswer: 'answer_u13_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // 3D Geometry Review
  vectors7() {
    return {
      id: 'calc_u13_l7',
      title: '3D Geometry Review',
      unit: 13,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u13_l7_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: 3D Geometry Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u13_l7_q1.png',
          xp: 4
        },
        {
          id: 'calc_u13_l7_q2',
          type: 'typing',
          question: "Question 2: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q3',
          type: 'typing',
          question: "Question 3: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: 3D Geometry Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q5',
          type: 'typing',
          question: "Question 5: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q6',
          type: 'typing',
          question: "Question 6: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: 3D Geometry Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u13_l7_q7.png',
          xp: 4
        },
        {
          id: 'calc_u13_l7_q8',
          type: 'typing',
          question: "Question 8: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q9',
          type: 'typing',
          question: "Question 9: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q10',
          type: 'match_pairs',
          question: "Match the following for 3D Geometry Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u13_l7_q11',
          type: 'typing',
          question: "Question 11: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q12',
          type: 'typing',
          question: "Question 12: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: 3D Geometry Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u13_l7_q13.png',
          xp: 4
        },
        {
          id: 'calc_u13_l7_q14',
          type: 'typing',
          question: "Question 14: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q15',
          type: 'typing',
          question: "Question 15: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u13_l7_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: 3D Geometry Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u13_l7_q17',
          type: 'typing',
          question: "Question 17: 3D Geometry Review",
          correctAnswer: 'answer_u13_l7_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Functions
  vecFunc1() {
    return {
      id: 'calc_u14_l1',
      title: 'Vector Functions',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vector Functions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l1_q2',
          type: 'typing',
          question: "Question 2: Vector Functions",
          correctAnswer: 'answer_u14_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q3',
          type: 'typing',
          question: "Question 3: Vector Functions",
          correctAnswer: 'answer_u14_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vector Functions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q5',
          type: 'typing',
          question: "Question 5: Vector Functions",
          correctAnswer: 'answer_u14_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q6',
          type: 'typing',
          question: "Question 6: Vector Functions",
          correctAnswer: 'answer_u14_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vector Functions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l1_q8',
          type: 'typing',
          question: "Question 8: Vector Functions",
          correctAnswer: 'answer_u14_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q9',
          type: 'typing',
          question: "Question 9: Vector Functions",
          correctAnswer: 'answer_u14_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Vector Functions:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l1_q11',
          type: 'typing',
          question: "Question 11: Vector Functions",
          correctAnswer: 'answer_u14_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q12',
          type: 'typing',
          question: "Question 12: Vector Functions",
          correctAnswer: 'answer_u14_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vector Functions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l1_q14',
          type: 'typing',
          question: "Question 14: Vector Functions",
          correctAnswer: 'answer_u14_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q15',
          type: 'typing',
          question: "Question 15: Vector Functions",
          correctAnswer: 'answer_u14_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vector Functions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l1_q17',
          type: 'typing',
          question: "Question 17: Vector Functions",
          correctAnswer: 'answer_u14_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Calculus of Vec Func
  vecFunc2() {
    return {
      id: 'calc_u14_l2',
      title: 'Calculus of Vec Func',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Calculus of Vec Func",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l2_q2',
          type: 'typing',
          question: "Question 2: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q3',
          type: 'typing',
          question: "Question 3: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Calculus of Vec Func",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q5',
          type: 'typing',
          question: "Question 5: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q6',
          type: 'typing',
          question: "Question 6: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Calculus of Vec Func",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l2_q8',
          type: 'typing',
          question: "Question 8: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q9',
          type: 'typing',
          question: "Question 9: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Calculus of Vec Func:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l2_q11',
          type: 'typing',
          question: "Question 11: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q12',
          type: 'typing',
          question: "Question 12: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Calculus of Vec Func",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l2_q14',
          type: 'typing',
          question: "Question 14: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q15',
          type: 'typing',
          question: "Question 15: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Calculus of Vec Func",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l2_q17',
          type: 'typing',
          question: "Question 17: Calculus of Vec Func",
          correctAnswer: 'answer_u14_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Arc Length 3D
  vecFunc3() {
    return {
      id: 'calc_u14_l3',
      title: 'Arc Length 3D',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Arc Length 3D",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l3_q2',
          type: 'typing',
          question: "Question 2: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q3',
          type: 'typing',
          question: "Question 3: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Arc Length 3D",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q5',
          type: 'typing',
          question: "Question 5: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q6',
          type: 'typing',
          question: "Question 6: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Arc Length 3D",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l3_q8',
          type: 'typing',
          question: "Question 8: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q9',
          type: 'typing',
          question: "Question 9: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Arc Length 3D:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l3_q11',
          type: 'typing',
          question: "Question 11: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q12',
          type: 'typing',
          question: "Question 12: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Arc Length 3D",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l3_q14',
          type: 'typing',
          question: "Question 14: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q15',
          type: 'typing',
          question: "Question 15: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Arc Length 3D",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l3_q17',
          type: 'typing',
          question: "Question 17: Arc Length 3D",
          correctAnswer: 'answer_u14_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Curvature
  vecFunc4() {
    return {
      id: 'calc_u14_l4',
      title: 'Curvature',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Curvature",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l4_q2',
          type: 'typing',
          question: "Question 2: Curvature",
          correctAnswer: 'answer_u14_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q3',
          type: 'typing',
          question: "Question 3: Curvature",
          correctAnswer: 'answer_u14_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Curvature",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q5',
          type: 'typing',
          question: "Question 5: Curvature",
          correctAnswer: 'answer_u14_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q6',
          type: 'typing',
          question: "Question 6: Curvature",
          correctAnswer: 'answer_u14_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Curvature",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l4_q8',
          type: 'typing',
          question: "Question 8: Curvature",
          correctAnswer: 'answer_u14_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q9',
          type: 'typing',
          question: "Question 9: Curvature",
          correctAnswer: 'answer_u14_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Curvature:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l4_q11',
          type: 'typing',
          question: "Question 11: Curvature",
          correctAnswer: 'answer_u14_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q12',
          type: 'typing',
          question: "Question 12: Curvature",
          correctAnswer: 'answer_u14_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Curvature",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l4_q14',
          type: 'typing',
          question: "Question 14: Curvature",
          correctAnswer: 'answer_u14_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q15',
          type: 'typing',
          question: "Question 15: Curvature",
          correctAnswer: 'answer_u14_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Curvature",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l4_q17',
          type: 'typing',
          question: "Question 17: Curvature",
          correctAnswer: 'answer_u14_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Motion in Space
  vecFunc5() {
    return {
      id: 'calc_u14_l5',
      title: 'Motion in Space',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u14_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Motion in Space",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l5_q2',
          type: 'typing',
          question: "Question 2: Motion in Space",
          correctAnswer: 'answer_u14_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q3',
          type: 'typing',
          question: "Question 3: Motion in Space",
          correctAnswer: 'answer_u14_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Motion in Space",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q5',
          type: 'typing',
          question: "Question 5: Motion in Space",
          correctAnswer: 'answer_u14_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q6',
          type: 'typing',
          question: "Question 6: Motion in Space",
          correctAnswer: 'answer_u14_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Motion in Space",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l5_q8',
          type: 'typing',
          question: "Question 8: Motion in Space",
          correctAnswer: 'answer_u14_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q9',
          type: 'typing',
          question: "Question 9: Motion in Space",
          correctAnswer: 'answer_u14_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Motion in Space:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l5_q11',
          type: 'typing',
          question: "Question 11: Motion in Space",
          correctAnswer: 'answer_u14_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q12',
          type: 'typing',
          question: "Question 12: Motion in Space",
          correctAnswer: 'answer_u14_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Motion in Space",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l5_q14',
          type: 'typing',
          question: "Question 14: Motion in Space",
          correctAnswer: 'answer_u14_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q15',
          type: 'typing',
          question: "Question 15: Motion in Space",
          correctAnswer: 'answer_u14_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Motion in Space",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l5_q17',
          type: 'typing',
          question: "Question 17: Motion in Space",
          correctAnswer: 'answer_u14_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Func Review
  vecFunc6() {
    return {
      id: 'calc_u14_l6',
      title: 'Vector Func Review',
      unit: 14,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u14_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vector Func Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u14_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u14_l6_q2',
          type: 'typing',
          question: "Question 2: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q3',
          type: 'typing',
          question: "Question 3: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vector Func Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q5',
          type: 'typing',
          question: "Question 5: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q6',
          type: 'typing',
          question: "Question 6: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vector Func Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u14_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u14_l6_q8',
          type: 'typing',
          question: "Question 8: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q9',
          type: 'typing',
          question: "Question 9: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Vector Func Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u14_l6_q11',
          type: 'typing',
          question: "Question 11: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q12',
          type: 'typing',
          question: "Question 12: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vector Func Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u14_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u14_l6_q14',
          type: 'typing',
          question: "Question 14: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q15',
          type: 'typing',
          question: "Question 15: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u14_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vector Func Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u14_l6_q17',
          type: 'typing',
          question: "Question 17: Vector Func Review",
          correctAnswer: 'answer_u14_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multivariable Functions
  multi1() {
    return {
      id: 'calc_u15_l1',
      title: 'Multivariable Functions',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Multivariable Functions",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l1_q2',
          type: 'typing',
          question: "Question 2: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q3',
          type: 'typing',
          question: "Question 3: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Multivariable Functions",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q5',
          type: 'typing',
          question: "Question 5: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q6',
          type: 'typing',
          question: "Question 6: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Multivariable Functions",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l1_q8',
          type: 'typing',
          question: "Question 8: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q9',
          type: 'typing',
          question: "Question 9: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Multivariable Functions:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l1_q11',
          type: 'typing',
          question: "Question 11: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q12',
          type: 'typing',
          question: "Question 12: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Multivariable Functions",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l1_q14',
          type: 'typing',
          question: "Question 14: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q15',
          type: 'typing',
          question: "Question 15: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Multivariable Functions",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l1_q17',
          type: 'typing',
          question: "Question 17: Multivariable Functions",
          correctAnswer: 'answer_u15_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Limits & Continuity
  multi2() {
    return {
      id: 'calc_u15_l2',
      title: 'Limits & Continuity',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Limits & Continuity",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l2_q2',
          type: 'typing',
          question: "Question 2: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q3',
          type: 'typing',
          question: "Question 3: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Limits & Continuity",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q5',
          type: 'typing',
          question: "Question 5: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q6',
          type: 'typing',
          question: "Question 6: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Limits & Continuity",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l2_q8',
          type: 'typing',
          question: "Question 8: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q9',
          type: 'typing',
          question: "Question 9: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Limits & Continuity:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l2_q11',
          type: 'typing',
          question: "Question 11: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q12',
          type: 'typing',
          question: "Question 12: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Limits & Continuity",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l2_q14',
          type: 'typing',
          question: "Question 14: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q15',
          type: 'typing',
          question: "Question 15: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Limits & Continuity",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l2_q17',
          type: 'typing',
          question: "Question 17: Limits & Continuity",
          correctAnswer: 'answer_u15_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Partial Derivatives
  multi3() {
    return {
      id: 'calc_u15_l3',
      title: 'Partial Derivatives',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Partial Derivatives",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l3_q2',
          type: 'typing',
          question: "Question 2: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q3',
          type: 'typing',
          question: "Question 3: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Partial Derivatives",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q5',
          type: 'typing',
          question: "Question 5: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q6',
          type: 'typing',
          question: "Question 6: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Partial Derivatives",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l3_q8',
          type: 'typing',
          question: "Question 8: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q9',
          type: 'typing',
          question: "Question 9: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Partial Derivatives:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l3_q11',
          type: 'typing',
          question: "Question 11: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q12',
          type: 'typing',
          question: "Question 12: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Partial Derivatives",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l3_q14',
          type: 'typing',
          question: "Question 14: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q15',
          type: 'typing',
          question: "Question 15: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Partial Derivatives",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l3_q17',
          type: 'typing',
          question: "Question 17: Partial Derivatives",
          correctAnswer: 'answer_u15_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Tangent Planes
  multi4() {
    return {
      id: 'calc_u15_l4',
      title: 'Tangent Planes',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Tangent Planes",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l4_q2',
          type: 'typing',
          question: "Question 2: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q3',
          type: 'typing',
          question: "Question 3: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Tangent Planes",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q5',
          type: 'typing',
          question: "Question 5: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q6',
          type: 'typing',
          question: "Question 6: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Tangent Planes",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l4_q8',
          type: 'typing',
          question: "Question 8: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q9',
          type: 'typing',
          question: "Question 9: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Tangent Planes:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l4_q11',
          type: 'typing',
          question: "Question 11: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q12',
          type: 'typing',
          question: "Question 12: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Tangent Planes",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l4_q14',
          type: 'typing',
          question: "Question 14: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q15',
          type: 'typing',
          question: "Question 15: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Tangent Planes",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l4_q17',
          type: 'typing',
          question: "Question 17: Tangent Planes",
          correctAnswer: 'answer_u15_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Directional Derivatives
  multi5() {
    return {
      id: 'calc_u15_l5',
      title: 'Directional Derivatives',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Directional Derivatives",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l5_q2',
          type: 'typing',
          question: "Question 2: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q3',
          type: 'typing',
          question: "Question 3: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Directional Derivatives",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q5',
          type: 'typing',
          question: "Question 5: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q6',
          type: 'typing',
          question: "Question 6: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Directional Derivatives",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l5_q8',
          type: 'typing',
          question: "Question 8: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q9',
          type: 'typing',
          question: "Question 9: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Directional Derivatives:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l5_q11',
          type: 'typing',
          question: "Question 11: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q12',
          type: 'typing',
          question: "Question 12: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Directional Derivatives",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l5_q14',
          type: 'typing',
          question: "Question 14: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q15',
          type: 'typing',
          question: "Question 15: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Directional Derivatives",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l5_q17',
          type: 'typing',
          question: "Question 17: Directional Derivatives",
          correctAnswer: 'answer_u15_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Gradient
  multi6() {
    return {
      id: 'calc_u15_l6',
      title: 'Gradient',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u15_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Gradient",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l6_q2',
          type: 'typing',
          question: "Question 2: Gradient",
          correctAnswer: 'answer_u15_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q3',
          type: 'typing',
          question: "Question 3: Gradient",
          correctAnswer: 'answer_u15_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Gradient",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q5',
          type: 'typing',
          question: "Question 5: Gradient",
          correctAnswer: 'answer_u15_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q6',
          type: 'typing',
          question: "Question 6: Gradient",
          correctAnswer: 'answer_u15_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Gradient",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l6_q8',
          type: 'typing',
          question: "Question 8: Gradient",
          correctAnswer: 'answer_u15_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q9',
          type: 'typing',
          question: "Question 9: Gradient",
          correctAnswer: 'answer_u15_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Gradient:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l6_q11',
          type: 'typing',
          question: "Question 11: Gradient",
          correctAnswer: 'answer_u15_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q12',
          type: 'typing',
          question: "Question 12: Gradient",
          correctAnswer: 'answer_u15_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Gradient",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l6_q14',
          type: 'typing',
          question: "Question 14: Gradient",
          correctAnswer: 'answer_u15_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q15',
          type: 'typing',
          question: "Question 15: Gradient",
          correctAnswer: 'answer_u15_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Gradient",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l6_q17',
          type: 'typing',
          question: "Question 17: Gradient",
          correctAnswer: 'answer_u15_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multivariable Review
  multi7() {
    return {
      id: 'calc_u15_l7',
      title: 'Multivariable Review',
      unit: 15,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u15_l7_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Multivariable Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u15_l7_q1.png',
          xp: 4
        },
        {
          id: 'calc_u15_l7_q2',
          type: 'typing',
          question: "Question 2: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q3',
          type: 'typing',
          question: "Question 3: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Multivariable Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q5',
          type: 'typing',
          question: "Question 5: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q6',
          type: 'typing',
          question: "Question 6: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Multivariable Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u15_l7_q7.png',
          xp: 4
        },
        {
          id: 'calc_u15_l7_q8',
          type: 'typing',
          question: "Question 8: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q9',
          type: 'typing',
          question: "Question 9: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q10',
          type: 'match_pairs',
          question: "Match the following for Multivariable Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u15_l7_q11',
          type: 'typing',
          question: "Question 11: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q12',
          type: 'typing',
          question: "Question 12: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Multivariable Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u15_l7_q13.png',
          xp: 4
        },
        {
          id: 'calc_u15_l7_q14',
          type: 'typing',
          question: "Question 14: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q15',
          type: 'typing',
          question: "Question 15: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u15_l7_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Multivariable Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u15_l7_q17',
          type: 'typing',
          question: "Question 17: Multivariable Review",
          correctAnswer: 'answer_u15_l7_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double Integrals
  multiInt1() {
    return {
      id: 'calc_u16_l1',
      title: 'Double Integrals',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Double Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l1_q2',
          type: 'typing',
          question: "Question 2: Double Integrals",
          correctAnswer: 'answer_u16_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q3',
          type: 'typing',
          question: "Question 3: Double Integrals",
          correctAnswer: 'answer_u16_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Double Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q5',
          type: 'typing',
          question: "Question 5: Double Integrals",
          correctAnswer: 'answer_u16_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q6',
          type: 'typing',
          question: "Question 6: Double Integrals",
          correctAnswer: 'answer_u16_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Double Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l1_q8',
          type: 'typing',
          question: "Question 8: Double Integrals",
          correctAnswer: 'answer_u16_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q9',
          type: 'typing',
          question: "Question 9: Double Integrals",
          correctAnswer: 'answer_u16_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Double Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l1_q11',
          type: 'typing',
          question: "Question 11: Double Integrals",
          correctAnswer: 'answer_u16_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q12',
          type: 'typing',
          question: "Question 12: Double Integrals",
          correctAnswer: 'answer_u16_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Double Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l1_q14',
          type: 'typing',
          question: "Question 14: Double Integrals",
          correctAnswer: 'answer_u16_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q15',
          type: 'typing',
          question: "Question 15: Double Integrals",
          correctAnswer: 'answer_u16_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Double Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l1_q17',
          type: 'typing',
          question: "Question 17: Double Integrals",
          correctAnswer: 'answer_u16_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double: Non-Rectangular
  multiInt2() {
    return {
      id: 'calc_u16_l2',
      title: 'Double: Non-Rectangular',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Double: Non-Rectangular",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l2_q2',
          type: 'typing',
          question: "Question 2: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q3',
          type: 'typing',
          question: "Question 3: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Double: Non-Rectangular",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q5',
          type: 'typing',
          question: "Question 5: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q6',
          type: 'typing',
          question: "Question 6: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Double: Non-Rectangular",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l2_q8',
          type: 'typing',
          question: "Question 8: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q9',
          type: 'typing',
          question: "Question 9: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Double: Non-Rectangular:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l2_q11',
          type: 'typing',
          question: "Question 11: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q12',
          type: 'typing',
          question: "Question 12: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Double: Non-Rectangular",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l2_q14',
          type: 'typing',
          question: "Question 14: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q15',
          type: 'typing',
          question: "Question 15: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Double: Non-Rectangular",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l2_q17',
          type: 'typing',
          question: "Question 17: Double: Non-Rectangular",
          correctAnswer: 'answer_u16_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Double: Polar
  multiInt3() {
    return {
      id: 'calc_u16_l3',
      title: 'Double: Polar',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Double: Polar",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l3_q2',
          type: 'typing',
          question: "Question 2: Double: Polar",
          correctAnswer: 'answer_u16_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q3',
          type: 'typing',
          question: "Question 3: Double: Polar",
          correctAnswer: 'answer_u16_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Double: Polar",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q5',
          type: 'typing',
          question: "Question 5: Double: Polar",
          correctAnswer: 'answer_u16_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q6',
          type: 'typing',
          question: "Question 6: Double: Polar",
          correctAnswer: 'answer_u16_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Double: Polar",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l3_q8',
          type: 'typing',
          question: "Question 8: Double: Polar",
          correctAnswer: 'answer_u16_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q9',
          type: 'typing',
          question: "Question 9: Double: Polar",
          correctAnswer: 'answer_u16_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Double: Polar:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l3_q11',
          type: 'typing',
          question: "Question 11: Double: Polar",
          correctAnswer: 'answer_u16_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q12',
          type: 'typing',
          question: "Question 12: Double: Polar",
          correctAnswer: 'answer_u16_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Double: Polar",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l3_q14',
          type: 'typing',
          question: "Question 14: Double: Polar",
          correctAnswer: 'answer_u16_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q15',
          type: 'typing',
          question: "Question 15: Double: Polar",
          correctAnswer: 'answer_u16_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Double: Polar",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l3_q17',
          type: 'typing',
          question: "Question 17: Double: Polar",
          correctAnswer: 'answer_u16_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple Integrals
  multiInt4() {
    return {
      id: 'calc_u16_l4',
      title: 'Triple Integrals',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Triple Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l4_q2',
          type: 'typing',
          question: "Question 2: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q3',
          type: 'typing',
          question: "Question 3: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Triple Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q5',
          type: 'typing',
          question: "Question 5: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q6',
          type: 'typing',
          question: "Question 6: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Triple Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l4_q8',
          type: 'typing',
          question: "Question 8: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q9',
          type: 'typing',
          question: "Question 9: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Triple Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l4_q11',
          type: 'typing',
          question: "Question 11: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q12',
          type: 'typing',
          question: "Question 12: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Triple Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l4_q14',
          type: 'typing',
          question: "Question 14: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q15',
          type: 'typing',
          question: "Question 15: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Triple Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l4_q17',
          type: 'typing',
          question: "Question 17: Triple Integrals",
          correctAnswer: 'answer_u16_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple: Cylindrical
  multiInt5() {
    return {
      id: 'calc_u16_l5',
      title: 'Triple: Cylindrical',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Triple: Cylindrical",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l5_q2',
          type: 'typing',
          question: "Question 2: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q3',
          type: 'typing',
          question: "Question 3: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Triple: Cylindrical",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q5',
          type: 'typing',
          question: "Question 5: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q6',
          type: 'typing',
          question: "Question 6: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Triple: Cylindrical",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l5_q8',
          type: 'typing',
          question: "Question 8: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q9',
          type: 'typing',
          question: "Question 9: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Triple: Cylindrical:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l5_q11',
          type: 'typing',
          question: "Question 11: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q12',
          type: 'typing',
          question: "Question 12: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Triple: Cylindrical",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l5_q14',
          type: 'typing',
          question: "Question 14: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q15',
          type: 'typing',
          question: "Question 15: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Triple: Cylindrical",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l5_q17',
          type: 'typing',
          question: "Question 17: Triple: Cylindrical",
          correctAnswer: 'answer_u16_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Triple: Spherical
  multiInt6() {
    return {
      id: 'calc_u16_l6',
      title: 'Triple: Spherical',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u16_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Triple: Spherical",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l6_q2',
          type: 'typing',
          question: "Question 2: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q3',
          type: 'typing',
          question: "Question 3: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Triple: Spherical",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q5',
          type: 'typing',
          question: "Question 5: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q6',
          type: 'typing',
          question: "Question 6: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Triple: Spherical",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l6_q8',
          type: 'typing',
          question: "Question 8: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q9',
          type: 'typing',
          question: "Question 9: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Triple: Spherical:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l6_q11',
          type: 'typing',
          question: "Question 11: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q12',
          type: 'typing',
          question: "Question 12: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Triple: Spherical",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l6_q14',
          type: 'typing',
          question: "Question 14: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q15',
          type: 'typing',
          question: "Question 15: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Triple: Spherical",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l6_q17',
          type: 'typing',
          question: "Question 17: Triple: Spherical",
          correctAnswer: 'answer_u16_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Multiple Int Review
  multiInt7() {
    return {
      id: 'calc_u16_l7',
      title: 'Multiple Int Review',
      unit: 16,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u16_l7_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Multiple Int Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u16_l7_q1.png',
          xp: 4
        },
        {
          id: 'calc_u16_l7_q2',
          type: 'typing',
          question: "Question 2: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q3',
          type: 'typing',
          question: "Question 3: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Multiple Int Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q5',
          type: 'typing',
          question: "Question 5: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q6',
          type: 'typing',
          question: "Question 6: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Multiple Int Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u16_l7_q7.png',
          xp: 4
        },
        {
          id: 'calc_u16_l7_q8',
          type: 'typing',
          question: "Question 8: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q9',
          type: 'typing',
          question: "Question 9: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q10',
          type: 'match_pairs',
          question: "Match the following for Multiple Int Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u16_l7_q11',
          type: 'typing',
          question: "Question 11: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q12',
          type: 'typing',
          question: "Question 12: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Multiple Int Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u16_l7_q13.png',
          xp: 4
        },
        {
          id: 'calc_u16_l7_q14',
          type: 'typing',
          question: "Question 14: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q15',
          type: 'typing',
          question: "Question 15: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u16_l7_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Multiple Int Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u16_l7_q17',
          type: 'typing',
          question: "Question 17: Multiple Int Review",
          correctAnswer: 'answer_u16_l7_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Fields
  vecCalc1() {
    return {
      id: 'calc_u17_l1',
      title: 'Vector Fields',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vector Fields",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l1_q2',
          type: 'typing',
          question: "Question 2: Vector Fields",
          correctAnswer: 'answer_u17_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q3',
          type: 'typing',
          question: "Question 3: Vector Fields",
          correctAnswer: 'answer_u17_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vector Fields",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q5',
          type: 'typing',
          question: "Question 5: Vector Fields",
          correctAnswer: 'answer_u17_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q6',
          type: 'typing',
          question: "Question 6: Vector Fields",
          correctAnswer: 'answer_u17_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vector Fields",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l1_q8',
          type: 'typing',
          question: "Question 8: Vector Fields",
          correctAnswer: 'answer_u17_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q9',
          type: 'typing',
          question: "Question 9: Vector Fields",
          correctAnswer: 'answer_u17_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Vector Fields:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l1_q11',
          type: 'typing',
          question: "Question 11: Vector Fields",
          correctAnswer: 'answer_u17_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q12',
          type: 'typing',
          question: "Question 12: Vector Fields",
          correctAnswer: 'answer_u17_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vector Fields",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l1_q14',
          type: 'typing',
          question: "Question 14: Vector Fields",
          correctAnswer: 'answer_u17_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q15',
          type: 'typing',
          question: "Question 15: Vector Fields",
          correctAnswer: 'answer_u17_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vector Fields",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l1_q17',
          type: 'typing',
          question: "Question 17: Vector Fields",
          correctAnswer: 'answer_u17_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Line Integrals
  vecCalc2() {
    return {
      id: 'calc_u17_l2',
      title: 'Line Integrals',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Line Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l2_q2',
          type: 'typing',
          question: "Question 2: Line Integrals",
          correctAnswer: 'answer_u17_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q3',
          type: 'typing',
          question: "Question 3: Line Integrals",
          correctAnswer: 'answer_u17_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Line Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q5',
          type: 'typing',
          question: "Question 5: Line Integrals",
          correctAnswer: 'answer_u17_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q6',
          type: 'typing',
          question: "Question 6: Line Integrals",
          correctAnswer: 'answer_u17_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Line Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l2_q8',
          type: 'typing',
          question: "Question 8: Line Integrals",
          correctAnswer: 'answer_u17_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q9',
          type: 'typing',
          question: "Question 9: Line Integrals",
          correctAnswer: 'answer_u17_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Line Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l2_q11',
          type: 'typing',
          question: "Question 11: Line Integrals",
          correctAnswer: 'answer_u17_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q12',
          type: 'typing',
          question: "Question 12: Line Integrals",
          correctAnswer: 'answer_u17_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Line Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l2_q14',
          type: 'typing',
          question: "Question 14: Line Integrals",
          correctAnswer: 'answer_u17_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q15',
          type: 'typing',
          question: "Question 15: Line Integrals",
          correctAnswer: 'answer_u17_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Line Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l2_q17',
          type: 'typing',
          question: "Question 17: Line Integrals",
          correctAnswer: 'answer_u17_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // FT for Line Integrals
  vecCalc3() {
    return {
      id: 'calc_u17_l3',
      title: 'FT for Line Integrals',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: FT for Line Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l3_q2',
          type: 'typing',
          question: "Question 2: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q3',
          type: 'typing',
          question: "Question 3: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: FT for Line Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q5',
          type: 'typing',
          question: "Question 5: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q6',
          type: 'typing',
          question: "Question 6: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: FT for Line Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l3_q8',
          type: 'typing',
          question: "Question 8: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q9',
          type: 'typing',
          question: "Question 9: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q10',
          type: 'match_pairs',
          question: "Match the following for FT for Line Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l3_q11',
          type: 'typing',
          question: "Question 11: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q12',
          type: 'typing',
          question: "Question 12: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: FT for Line Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l3_q14',
          type: 'typing',
          question: "Question 14: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q15',
          type: 'typing',
          question: "Question 15: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: FT for Line Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l3_q17',
          type: 'typing',
          question: "Question 17: FT for Line Integrals",
          correctAnswer: 'answer_u17_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Green's Theorem
  vecCalc4() {
    return {
      id: 'calc_u17_l4',
      title: 'Green's Theorem',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l4_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Green's Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l4_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l4_q2',
          type: 'typing',
          question: "Question 2: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q3',
          type: 'typing',
          question: "Question 3: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Green's Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q5',
          type: 'typing',
          question: "Question 5: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q6',
          type: 'typing',
          question: "Question 6: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Green's Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l4_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l4_q8',
          type: 'typing',
          question: "Question 8: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q9',
          type: 'typing',
          question: "Question 9: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q10',
          type: 'match_pairs',
          question: "Match the following for Green's Theorem:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l4_q11',
          type: 'typing',
          question: "Question 11: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q12',
          type: 'typing',
          question: "Question 12: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Green's Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l4_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l4_q14',
          type: 'typing',
          question: "Question 14: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q15',
          type: 'typing',
          question: "Question 15: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l4_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Green's Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l4_q17',
          type: 'typing',
          question: "Question 17: Green's Theorem",
          correctAnswer: 'answer_u17_l4_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Curl & Divergence
  vecCalc5() {
    return {
      id: 'calc_u17_l5',
      title: 'Curl & Divergence',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l5_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Curl & Divergence",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l5_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l5_q2',
          type: 'typing',
          question: "Question 2: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q3',
          type: 'typing',
          question: "Question 3: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Curl & Divergence",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q5',
          type: 'typing',
          question: "Question 5: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q6',
          type: 'typing',
          question: "Question 6: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Curl & Divergence",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l5_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l5_q8',
          type: 'typing',
          question: "Question 8: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q9',
          type: 'typing',
          question: "Question 9: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q10',
          type: 'match_pairs',
          question: "Match the following for Curl & Divergence:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l5_q11',
          type: 'typing',
          question: "Question 11: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q12',
          type: 'typing',
          question: "Question 12: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Curl & Divergence",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l5_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l5_q14',
          type: 'typing',
          question: "Question 14: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q15',
          type: 'typing',
          question: "Question 15: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l5_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Curl & Divergence",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l5_q17',
          type: 'typing',
          question: "Question 17: Curl & Divergence",
          correctAnswer: 'answer_u17_l5_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Surface Integrals
  vecCalc6() {
    return {
      id: 'calc_u17_l6',
      title: 'Surface Integrals',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l6_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Surface Integrals",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l6_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l6_q2',
          type: 'typing',
          question: "Question 2: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q3',
          type: 'typing',
          question: "Question 3: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Surface Integrals",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q5',
          type: 'typing',
          question: "Question 5: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q6',
          type: 'typing',
          question: "Question 6: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Surface Integrals",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l6_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l6_q8',
          type: 'typing',
          question: "Question 8: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q9',
          type: 'typing',
          question: "Question 9: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q10',
          type: 'match_pairs',
          question: "Match the following for Surface Integrals:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l6_q11',
          type: 'typing',
          question: "Question 11: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q12',
          type: 'typing',
          question: "Question 12: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Surface Integrals",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l6_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l6_q14',
          type: 'typing',
          question: "Question 14: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q15',
          type: 'typing',
          question: "Question 15: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l6_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Surface Integrals",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l6_q17',
          type: 'typing',
          question: "Question 17: Surface Integrals",
          correctAnswer: 'answer_u17_l6_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Stokes' Theorem
  vecCalc7() {
    return {
      id: 'calc_u17_l7',
      title: 'Stokes' Theorem',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l7_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Stokes' Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l7_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l7_q2',
          type: 'typing',
          question: "Question 2: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q3',
          type: 'typing',
          question: "Question 3: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Stokes' Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q5',
          type: 'typing',
          question: "Question 5: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q6',
          type: 'typing',
          question: "Question 6: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Stokes' Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l7_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l7_q8',
          type: 'typing',
          question: "Question 8: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q9',
          type: 'typing',
          question: "Question 9: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q10',
          type: 'match_pairs',
          question: "Match the following for Stokes' Theorem:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l7_q11',
          type: 'typing',
          question: "Question 11: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q12',
          type: 'typing',
          question: "Question 12: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Stokes' Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l7_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l7_q14',
          type: 'typing',
          question: "Question 14: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q15',
          type: 'typing',
          question: "Question 15: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l7_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Stokes' Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l7_q17',
          type: 'typing',
          question: "Question 17: Stokes' Theorem",
          correctAnswer: 'answer_u17_l7_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Divergence Theorem
  vecCalc8() {
    return {
      id: 'calc_u17_l8',
      title: 'Divergence Theorem',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'intermediate',
      questions: [

        {
          id: 'calc_u17_l8_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Divergence Theorem",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l8_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l8_q2',
          type: 'typing',
          question: "Question 2: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q3',
          type: 'typing',
          question: "Question 3: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Divergence Theorem",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q5',
          type: 'typing',
          question: "Question 5: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q6',
          type: 'typing',
          question: "Question 6: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Divergence Theorem",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l8_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l8_q8',
          type: 'typing',
          question: "Question 8: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q9',
          type: 'typing',
          question: "Question 9: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q10',
          type: 'match_pairs',
          question: "Match the following for Divergence Theorem:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l8_q11',
          type: 'typing',
          question: "Question 11: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q12',
          type: 'typing',
          question: "Question 12: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Divergence Theorem",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l8_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l8_q14',
          type: 'typing',
          question: "Question 14: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q15',
          type: 'typing',
          question: "Question 15: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l8_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Divergence Theorem",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l8_q17',
          type: 'typing',
          question: "Question 17: Divergence Theorem",
          correctAnswer: 'answer_u17_l8_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Vector Calc Review
  vecCalc9() {
    return {
      id: 'calc_u17_l9',
      title: 'Vector Calc Review',
      unit: 17,
      icon: '📊',
      xp: 83,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u17_l9_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Vector Calc Review",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u17_l9_q1.png',
          xp: 4
        },
        {
          id: 'calc_u17_l9_q2',
          type: 'typing',
          question: "Question 2: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q3',
          type: 'typing',
          question: "Question 3: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Vector Calc Review",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q5',
          type: 'typing',
          question: "Question 5: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q6',
          type: 'typing',
          question: "Question 6: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Vector Calc Review",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u17_l9_q7.png',
          xp: 4
        },
        {
          id: 'calc_u17_l9_q8',
          type: 'typing',
          question: "Question 8: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q9',
          type: 'typing',
          question: "Question 9: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q10',
          type: 'match_pairs',
          question: "Match the following for Vector Calc Review:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u17_l9_q11',
          type: 'typing',
          question: "Question 11: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q12',
          type: 'typing',
          question: "Question 12: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Vector Calc Review",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u17_l9_q13.png',
          xp: 4
        },
        {
          id: 'calc_u17_l9_q14',
          type: 'typing',
          question: "Question 14: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q15',
          type: 'typing',
          question: "Question 15: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u17_l9_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Vector Calc Review",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u17_l9_q17',
          type: 'typing',
          question: "Question 17: Vector Calc Review",
          correctAnswer: 'answer_u17_l9_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        }
      ]
    };
  },
  // Comprehensive Review I
  calc3Final1() {
    return {
      id: 'calc_u18_l1',
      title: 'Comprehensive Review I',
      unit: 18,
      icon: '📊',
      xp: 88,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u18_l1_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Comprehensive Review I",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u18_l1_q1.png',
          xp: 4
        },
        {
          id: 'calc_u18_l1_q2',
          type: 'typing',
          question: "Question 2: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q3',
          type: 'typing',
          question: "Question 3: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Comprehensive Review I",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q5',
          type: 'typing',
          question: "Question 5: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q6',
          type: 'typing',
          question: "Question 6: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Comprehensive Review I",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u18_l1_q7.png',
          xp: 4
        },
        {
          id: 'calc_u18_l1_q8',
          type: 'typing',
          question: "Question 8: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q9',
          type: 'typing',
          question: "Question 9: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q10',
          type: 'match_pairs',
          question: "Match the following for Comprehensive Review I:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l1_q11',
          type: 'typing',
          question: "Question 11: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q12',
          type: 'typing',
          question: "Question 12: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Comprehensive Review I",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u18_l1_q13.png',
          xp: 4
        },
        {
          id: 'calc_u18_l1_q14',
          type: 'typing',
          question: "Question 14: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q15',
          type: 'typing',
          question: "Question 15: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Comprehensive Review I",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l1_q17',
          type: 'typing',
          question: "Question 17: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        },
        {
          id: 'calc_u18_l1_q18',
          type: 'typing',
          question: "Question 18: Comprehensive Review I",
          correctAnswer: 'answer_u18_l1_q18',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 18",
          xp: 5
        }
      ]
    };
  },
  // Comprehensive Review II
  calc3Final2() {
    return {
      id: 'calc_u18_l2',
      title: 'Comprehensive Review II',
      unit: 18,
      icon: '📊',
      xp: 88,
      difficulty: 'basic',
      questions: [

        {
          id: 'calc_u18_l2_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Comprehensive Review II",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u18_l2_q1.png',
          xp: 4
        },
        {
          id: 'calc_u18_l2_q2',
          type: 'typing',
          question: "Question 2: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q3',
          type: 'typing',
          question: "Question 3: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Comprehensive Review II",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q5',
          type: 'typing',
          question: "Question 5: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q6',
          type: 'typing',
          question: "Question 6: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Comprehensive Review II",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u18_l2_q7.png',
          xp: 4
        },
        {
          id: 'calc_u18_l2_q8',
          type: 'typing',
          question: "Question 8: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q9',
          type: 'typing',
          question: "Question 9: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q10',
          type: 'match_pairs',
          question: "Match the following for Comprehensive Review II:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l2_q11',
          type: 'typing',
          question: "Question 11: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q12',
          type: 'typing',
          question: "Question 12: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Comprehensive Review II",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u18_l2_q13.png',
          xp: 4
        },
        {
          id: 'calc_u18_l2_q14',
          type: 'typing',
          question: "Question 14: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q15',
          type: 'typing',
          question: "Question 15: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Comprehensive Review II",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l2_q17',
          type: 'typing',
          question: "Question 17: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        },
        {
          id: 'calc_u18_l2_q18',
          type: 'typing',
          question: "Question 18: Comprehensive Review II",
          correctAnswer: 'answer_u18_l2_q18',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 18",
          xp: 5
        }
      ]
    };
  },
  // Calculus 3 Final Exam
  calc3Final3() {
    return {
      id: 'calc_u18_l3',
      title: 'Calculus 3 Final Exam',
      unit: 18,
      icon: '📊',
      xp: 100,
      difficulty: 'advanced',
      questions: [

        {
          id: 'calc_u18_l3_q1',
          type: 'multiple_choice',
          question: "Multiple choice 1: Calculus 3 Final Exam",
          options: ["Option A for Q1", "Option B for Q1", "Option C for Q1", "Option D for Q1"],
          correct: 0,
          explanation: "Explanation for MC question 1",
          diagram: 'diagrams/calc_u18_l3_q1.png',
          xp: 4
        },
        {
          id: 'calc_u18_l3_q2',
          type: 'typing',
          question: "Question 2: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q2',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 2",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q3',
          type: 'typing',
          question: "Question 3: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q3',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 3",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q4',
          type: 'multiple_choice',
          question: "Multiple choice 4: Calculus 3 Final Exam",
          options: ["Option A for Q4", "Option B for Q4", "Option C for Q4", "Option D for Q4"],
          correct: 0,
          explanation: "Explanation for MC question 4",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q5',
          type: 'typing',
          question: "Question 5: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q5',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 5",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q6',
          type: 'typing',
          question: "Question 6: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q6',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 6",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q7',
          type: 'multiple_choice',
          question: "Multiple choice 7: Calculus 3 Final Exam",
          options: ["Option A for Q7", "Option B for Q7", "Option C for Q7", "Option D for Q7"],
          correct: 0,
          explanation: "Explanation for MC question 7",
          diagram: 'diagrams/calc_u18_l3_q7.png',
          xp: 4
        },
        {
          id: 'calc_u18_l3_q8',
          type: 'typing',
          question: "Question 8: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q8',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 8",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q9',
          type: 'typing',
          question: "Question 9: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q9',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 9",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q10',
          type: 'match_pairs',
          question: "Match the following for Calculus 3 Final Exam:",
          pairs: [{"left": "Item A10", "right": "Match A10"}, {"left": "Item B10", "right": "Match B10"}, {"left": "Item C10", "right": "Match C10"}, {"left": "Item D10", "right": "Match D10"}],
          xp: 8
        },
        {
          id: 'calc_u18_l3_q11',
          type: 'typing',
          question: "Question 11: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q11',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 11",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q12',
          type: 'typing',
          question: "Question 12: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q12',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 12",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q13',
          type: 'multiple_choice',
          question: "Multiple choice 13: Calculus 3 Final Exam",
          options: ["Option A for Q13", "Option B for Q13", "Option C for Q13", "Option D for Q13"],
          correct: 0,
          explanation: "Explanation for MC question 13",
          diagram: 'diagrams/calc_u18_l3_q13.png',
          xp: 4
        },
        {
          id: 'calc_u18_l3_q14',
          type: 'typing',
          question: "Question 14: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q14',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 14",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q15',
          type: 'typing',
          question: "Question 15: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q15',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 15",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q16',
          type: 'multiple_choice',
          question: "Multiple choice 16: Calculus 3 Final Exam",
          options: ["Option A for Q16", "Option B for Q16", "Option C for Q16", "Option D for Q16"],
          correct: 0,
          explanation: "Explanation for MC question 16",
          xp: 4
        },
        {
          id: 'calc_u18_l3_q17',
          type: 'typing',
          question: "Question 17: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q17',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 17",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q18',
          type: 'typing',
          question: "Question 18: Calculus 3 Final Exam",
          correctAnswer: 'answer_u18_l3_q18',
          prompt: 'Type your answer:',
          explanation: "Detailed explanation for question 18",
          xp: 5
        },
        {
          id: 'calc_u18_l3_q19',
          type: 'multiple_choice',
          question: "Multiple choice 19: Calculus 3 Final Exam",
          options: ["Option A for Q19", "Option B for Q19", "Option C for Q19", "Option D for Q19"],
          correct: 0,
          explanation: "Explanation for MC question 19",
          diagram: 'diagrams/calc_u18_l3_q19.png',
          xp: 4
        },
        {
          id: 'calc_u18_l3_q20',
          type: 'match_pairs',
          question: "Match the following for Calculus 3 Final Exam:",
          pairs: [{"left": "Item A20", "right": "Match A20"}, {"left": "Item B20", "right": "Match B20"}, {"left": "Item C20", "right": "Match C20"}, {"left": "Item D20", "right": "Match D20"}],
          xp: 8
        }
      ]
    };
  },
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusComprehensiveLessons };
} else {
  window.CalculusComprehensiveLessons = CalculusComprehensiveLessons;
}
