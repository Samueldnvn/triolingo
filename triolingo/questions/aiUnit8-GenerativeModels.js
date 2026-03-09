// AI - Generative Models
// Generated: 2026-03-08 16:01:44

// Lesson 1: GANs
{
  "lessonId": "gans",
  "lessonName": "GANs",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# GANs\n\n## Introduction\nThis lesson covers gans in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-1-1",
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
      "id": "ai-8-1-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-1-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-1-4",
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
      "id": "ai-8-1-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-1-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-1-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-1-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-1-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-1-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-1-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-1-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-1-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-1-14",
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
      "id": "ai-8-1-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-1-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-1-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-1-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-1-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-1-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-1-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-1-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 2: VAEs
{
  "lessonId": "vaes",
  "lessonName": "VAEs",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# VAEs\n\n## Introduction\nThis lesson covers vaes in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-2-1",
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
      "id": "ai-8-2-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-2-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-2-4",
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
      "id": "ai-8-2-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-2-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-2-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-2-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-2-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-2-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-2-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-2-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-2-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-2-14",
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
      "id": "ai-8-2-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-2-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-2-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-2-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-2-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-2-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-2-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-2-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 3: Normalizing Flows
{
  "lessonId": "normalizing-flows",
  "lessonName": "Normalizing Flows",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Normalizing Flows\n\n## Introduction\nThis lesson covers normalizing flows in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-3-1",
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
      "id": "ai-8-3-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-3-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-3-4",
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
      "id": "ai-8-3-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-3-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-3-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-3-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-3-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-3-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-3-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-3-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-3-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-3-14",
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
      "id": "ai-8-3-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-3-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-3-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-3-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-3-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-3-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-3-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-3-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 4: Diffusion Models
{
  "lessonId": "diffusion-models",
  "lessonName": "Diffusion Models",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Diffusion Models\n\n## Introduction\nThis lesson covers diffusion models in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-4-1",
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
      "id": "ai-8-4-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-4-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-4-4",
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
      "id": "ai-8-4-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-4-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-4-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-4-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-4-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-4-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-4-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-4-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-4-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-4-14",
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
      "id": "ai-8-4-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-4-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-4-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-4-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-4-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-4-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-4-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-4-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 5: Autoregressive Models
{
  "lessonId": "autoregressive-models",
  "lessonName": "Autoregressive Models",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Autoregressive Models\n\n## Introduction\nThis lesson covers autoregressive models in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-5-1",
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
      "id": "ai-8-5-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-5-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-5-4",
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
      "id": "ai-8-5-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-5-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-5-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-5-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-5-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-5-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-5-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-5-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-5-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-5-14",
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
      "id": "ai-8-5-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-5-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-5-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-5-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-5-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-5-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-5-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-5-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 6: Energy-based Models
{
  "lessonId": "energy-based-models",
  "lessonName": "Energy-based Models",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Energy-based Models\n\n## Introduction\nThis lesson covers energy-based models in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-6-1",
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
      "id": "ai-8-6-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-6-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-6-4",
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
      "id": "ai-8-6-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-6-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-6-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-6-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-6-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-6-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-6-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-6-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-6-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-6-14",
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
      "id": "ai-8-6-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-6-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-6-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-6-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-6-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-6-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-6-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-6-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 7: Image Generation
{
  "lessonId": "image-generation",
  "lessonName": "Image Generation",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Image Generation\n\n## Introduction\nThis lesson covers image generation in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-7-1",
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
      "id": "ai-8-7-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-7-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-7-4",
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
      "id": "ai-8-7-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-7-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-7-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-7-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-7-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-7-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-7-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-7-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-7-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-7-14",
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
      "id": "ai-8-7-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-7-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-7-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-7-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-7-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-7-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-7-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-7-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 8: Text Generation
{
  "lessonId": "text-generation",
  "lessonName": "Text Generation",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Text Generation\n\n## Introduction\nThis lesson covers text generation in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-8-8-1",
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
      "id": "ai-8-8-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-8-8-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-8-8-4",
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
      "id": "ai-8-8-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-8-8-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-8-8-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-8-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-8-8-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-8-8-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-8-8-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-8-8-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-8-8-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-8-8-14",
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
      "id": "ai-8-8-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-8-8-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-8-8-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-8-8-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-8-8-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-8-8-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-8-8-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-8-8-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

