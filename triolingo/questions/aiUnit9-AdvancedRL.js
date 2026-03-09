// AI - Advanced RL
// Generated: 2026-03-08 16:01:44

// Lesson 1: Q-Learning
{
  "lessonId": "q-learning",
  "lessonName": "Q-Learning",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Q-Learning\n\n## Introduction\nThis lesson covers q-learning in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-1-1",
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
      "id": "ai-9-1-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-1-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-1-4",
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
      "id": "ai-9-1-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-1-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-1-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-1-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-1-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-1-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-1-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-1-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-1-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-1-14",
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
      "id": "ai-9-1-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-1-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-1-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-1-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-1-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-1-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-1-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-1-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 2: Policy Gradients
{
  "lessonId": "policy-gradients",
  "lessonName": "Policy Gradients",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Policy Gradients\n\n## Introduction\nThis lesson covers policy gradients in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-2-1",
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
      "id": "ai-9-2-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-2-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-2-4",
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
      "id": "ai-9-2-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-2-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-2-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-2-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-2-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-2-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-2-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-2-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-2-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-2-14",
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
      "id": "ai-9-2-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-2-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-2-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-2-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-2-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-2-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-2-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-2-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 3: Actor-Critic
{
  "lessonId": "actor-critic",
  "lessonName": "Actor-Critic",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Actor-Critic\n\n## Introduction\nThis lesson covers actor-critic in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-3-1",
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
      "id": "ai-9-3-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-3-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-3-4",
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
      "id": "ai-9-3-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-3-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-3-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-3-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-3-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-3-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-3-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-3-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-3-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-3-14",
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
      "id": "ai-9-3-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-3-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-3-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-3-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-3-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-3-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-3-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-3-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 4: PPO
{
  "lessonId": "ppo",
  "lessonName": "PPO",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# PPO\n\n## Introduction\nThis lesson covers ppo in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-4-1",
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
      "id": "ai-9-4-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-4-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-4-4",
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
      "id": "ai-9-4-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-4-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-4-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-4-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-4-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-4-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-4-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-4-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-4-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-4-14",
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
      "id": "ai-9-4-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-4-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-4-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-4-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-4-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-4-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-4-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-4-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 5: DDPG
{
  "lessonId": "ddpg",
  "lessonName": "DDPG",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# DDPG\n\n## Introduction\nThis lesson covers ddpg in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-5-1",
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
      "id": "ai-9-5-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-5-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-5-4",
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
      "id": "ai-9-5-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-5-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-5-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-5-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-5-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-5-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-5-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-5-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-5-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-5-14",
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
      "id": "ai-9-5-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-5-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-5-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-5-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-5-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-5-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-5-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-5-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 6: TD3
{
  "lessonId": "td3",
  "lessonName": "TD3",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# TD3\n\n## Introduction\nThis lesson covers td3 in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-6-1",
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
      "id": "ai-9-6-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-6-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-6-4",
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
      "id": "ai-9-6-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-6-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-6-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-6-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-6-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-6-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-6-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-6-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-6-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-6-14",
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
      "id": "ai-9-6-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-6-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-6-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-6-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-6-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-6-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-6-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-6-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 7: SAC
{
  "lessonId": "sac",
  "lessonName": "SAC",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# SAC\n\n## Introduction\nThis lesson covers sac in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-7-1",
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
      "id": "ai-9-7-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-7-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-7-4",
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
      "id": "ai-9-7-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-7-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-7-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-7-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-7-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-7-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-7-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-7-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-7-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-7-14",
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
      "id": "ai-9-7-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-7-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-7-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-7-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-7-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-7-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-7-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-7-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 8: Multi-Agent RL
{
  "lessonId": "multi-agent-rl",
  "lessonName": "Multi-Agent RL",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Multi-Agent RL\n\n## Introduction\nThis lesson covers multi-agent rl in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-9-8-1",
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
      "id": "ai-9-8-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-9-8-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-9-8-4",
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
      "id": "ai-9-8-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-9-8-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-9-8-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-8-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-9-8-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-9-8-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-9-8-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-9-8-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-9-8-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-9-8-14",
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
      "id": "ai-9-8-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-9-8-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-9-8-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-9-8-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-9-8-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-9-8-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-9-8-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-9-8-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

