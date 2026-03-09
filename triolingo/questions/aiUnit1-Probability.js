// AI - Probability
// Generated: 2026-03-08 16:01:44

// Lesson 1: Probability Axioms
{
  "lessonId": "probability-axioms",
  "lessonName": "Probability Axioms",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Probability Axioms\n\n## Introduction\nThis lesson covers probability axioms in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-1-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-1-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-1-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-1-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-1-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-1-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-1-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-1-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-1-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-1-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-1-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-1-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-1-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-1-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-1-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-1-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-1-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-1-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-1-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-1-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-1-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-1-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 2: Conditional Probability
{
  "lessonId": "conditional-probability",
  "lessonName": "Conditional Probability",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Conditional Probability\n\n## Introduction\nThis lesson covers conditional probability in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-2-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-2-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-2-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-2-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-2-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-2-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-2-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-2-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-2-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-2-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-2-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-2-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-2-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-2-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-2-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-2-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-2-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-2-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-2-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-2-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-2-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-2-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 3: Bayes' Theorem
{
  "lessonId": "bayes'-theorem",
  "lessonName": "Bayes' Theorem",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Bayes' Theorem\n\n## Introduction\nThis lesson covers bayes' theorem in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-3-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-3-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-3-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-3-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-3-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-3-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-3-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-3-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-3-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-3-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-3-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-3-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-3-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-3-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-3-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-3-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-3-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-3-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-3-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-3-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-3-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-3-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 4: Independence
{
  "lessonId": "independence",
  "lessonName": "Independence",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Independence\n\n## Introduction\nThis lesson covers independence in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-4-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-4-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-4-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-4-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-4-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-4-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-4-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-4-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-4-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-4-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-4-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-4-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-4-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-4-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-4-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-4-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-4-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-4-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-4-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-4-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-4-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-4-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 5: Random Variables
{
  "lessonId": "random-variables",
  "lessonName": "Random Variables",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Random Variables\n\n## Introduction\nThis lesson covers random variables in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-5-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-5-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-5-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-5-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-5-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-5-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-5-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-5-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-5-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-5-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-5-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-5-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-5-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-5-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-5-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-5-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-5-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-5-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-5-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-5-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-5-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-5-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 6: Expectation
{
  "lessonId": "expectation",
  "lessonName": "Expectation",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Expectation\n\n## Introduction\nThis lesson covers expectation in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-6-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-6-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-6-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-6-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-6-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-6-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-6-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-6-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-6-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-6-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-6-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-6-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-6-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-6-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-6-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-6-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-6-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-6-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-6-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-6-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-6-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-6-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 7: Variance
{
  "lessonId": "variance",
  "lessonName": "Variance",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Variance\n\n## Introduction\nThis lesson covers variance in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-7-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-7-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-7-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-7-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-7-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-7-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-7-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-7-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-7-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-7-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-7-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-7-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-7-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-7-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-7-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-7-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-7-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-7-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-7-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-7-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-7-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-7-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 8: Distributions
{
  "lessonId": "distributions",
  "lessonName": "Distributions",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Distributions\n\n## Introduction\nThis lesson covers distributions in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-8-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-8-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-8-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-8-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-8-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-8-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-8-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-8-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-8-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-8-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-8-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-8-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-8-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-8-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-8-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-8-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-8-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-8-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-8-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-8-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-8-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-8-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 9: Common Distributions
{
  "lessonId": "common-distributions",
  "lessonName": "Common Distributions",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Common Distributions\n\n## Introduction\nThis lesson covers common distributions in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-1-9-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "All outcomes.",
      "xp": 5
    },
    {
      "id": "ai-1-9-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-1-9-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-1-9-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Not A.",
      "xp": 5
    },
    {
      "id": "ai-1-9-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-1-9-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-1-9-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-9-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-1-9-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-1-9-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-1-9-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-1-9-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-1-9-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-1-9-14",
      "type": "typing",
      "question": "Normal?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric.",
      "xp": 5
    },
    {
      "id": "ai-1-9-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-1-9-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-1-9-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-1-9-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-1-9-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-1-9-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-1-9-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-1-9-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

