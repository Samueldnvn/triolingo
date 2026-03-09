// AI - Transformers
// Generated: 2026-03-08 16:01:44

// Lesson 1: Self-Attention
{
  "lessonId": "self-attention",
  "lessonName": "Self-Attention",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Self-Attention\n\n## Introduction\nThis lesson covers self-attention in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-1-1",
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
      "id": "ai-7-1-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-1-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-1-4",
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
      "id": "ai-7-1-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-1-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-1-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-1-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-1-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-1-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-1-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-1-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-1-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-1-14",
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
      "id": "ai-7-1-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-1-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-1-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-1-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-1-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-1-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-1-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-1-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 2: Multi-Head Attention
{
  "lessonId": "multi-head-attention",
  "lessonName": "Multi-Head Attention",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Multi-Head Attention\n\n## Introduction\nThis lesson covers multi-head attention in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-2-1",
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
      "id": "ai-7-2-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-2-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-2-4",
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
      "id": "ai-7-2-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-2-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-2-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-2-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-2-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-2-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-2-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-2-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-2-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-2-14",
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
      "id": "ai-7-2-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-2-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-2-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-2-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-2-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-2-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-2-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-2-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 3: Positional Encoding
{
  "lessonId": "positional-encoding",
  "lessonName": "Positional Encoding",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Positional Encoding\n\n## Introduction\nThis lesson covers positional encoding in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-3-1",
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
      "id": "ai-7-3-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-3-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-3-4",
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
      "id": "ai-7-3-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-3-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-3-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-3-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-3-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-3-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-3-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-3-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-3-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-3-14",
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
      "id": "ai-7-3-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-3-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-3-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-3-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-3-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-3-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-3-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-3-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 4: Layer Normalization
{
  "lessonId": "layer-normalization",
  "lessonName": "Layer Normalization",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Layer Normalization\n\n## Introduction\nThis lesson covers layer normalization in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-4-1",
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
      "id": "ai-7-4-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-4-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-4-4",
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
      "id": "ai-7-4-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-4-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-4-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-4-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-4-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-4-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-4-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-4-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-4-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-4-14",
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
      "id": "ai-7-4-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-4-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-4-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-4-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-4-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-4-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-4-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-4-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 5: BERT
{
  "lessonId": "bert",
  "lessonName": "BERT",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# BERT\n\n## Introduction\nThis lesson covers bert in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-5-1",
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
      "id": "ai-7-5-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-5-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-5-4",
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
      "id": "ai-7-5-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-5-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-5-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-5-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-5-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-5-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-5-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-5-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-5-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-5-14",
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
      "id": "ai-7-5-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-5-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-5-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-5-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-5-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-5-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-5-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-5-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 6: GPT
{
  "lessonId": "gpt",
  "lessonName": "GPT",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# GPT\n\n## Introduction\nThis lesson covers gpt in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-6-1",
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
      "id": "ai-7-6-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-6-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-6-4",
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
      "id": "ai-7-6-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-6-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-6-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-6-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-6-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-6-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-6-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-6-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-6-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-6-14",
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
      "id": "ai-7-6-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-6-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-6-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-6-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-6-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-6-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-6-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-6-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 7: T5
{
  "lessonId": "t5",
  "lessonName": "T5",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# T5\n\n## Introduction\nThis lesson covers t5 in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-7-1",
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
      "id": "ai-7-7-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-7-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-7-4",
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
      "id": "ai-7-7-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-7-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-7-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-7-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-7-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-7-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-7-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-7-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-7-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-7-14",
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
      "id": "ai-7-7-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-7-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-7-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-7-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-7-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-7-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-7-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-7-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

// Lesson 8: Encoder-Decoder
{
  "lessonId": "encoder-decoder",
  "lessonName": "Encoder-Decoder",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Encoder-Decoder\n\n## Introduction\nThis lesson covers encoder-decoder in AI.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "ai-7-8-1",
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
      "id": "ai-7-8-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability.",
      "xp": 5
    },
    {
      "id": "ai-7-8-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Non-negative.",
      "xp": 5
    },
    {
      "id": "ai-7-8-4",
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
      "id": "ai-7-8-5",
      "type": "typing",
      "question": "Conditional?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Given B.",
      "xp": 4
    },
    {
      "id": "ai-7-8-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverse.",
      "xp": 5
    },
    {
      "id": "ai-7-8-7",
      "type": "typing",
      "question": "Prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Before evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-8-8",
      "type": "typing",
      "question": "Posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "After evidence.",
      "xp": 5
    },
    {
      "id": "ai-7-8-9",
      "type": "typing",
      "question": "Likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-7-8-10",
      "type": "typing",
      "question": "Independent?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Product.",
      "xp": 4
    },
    {
      "id": "ai-7-8-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint.",
      "xp": 5
    },
    {
      "id": "ai-7-8-12",
      "type": "typing",
      "question": "Expectation?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-7-8-13",
      "type": "typing",
      "question": "Variance?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Spread.",
      "xp": 5
    },
    {
      "id": "ai-7-8-14",
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
      "id": "ai-7-8-15",
      "type": "typing",
      "question": "Binomial?",
      "correctAnswer": [
        "n independent trials"
      ],
      "explanation": "Fixed trials.",
      "xp": 4
    },
    {
      "id": "ai-7-8-16",
      "type": "typing",
      "question": "p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Significance.",
      "xp": 5
    },
    {
      "id": "ai-7-8-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Interval.",
      "xp": 5
    },
    {
      "id": "ai-7-8-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-7-8-19",
      "type": "typing",
      "question": "Type II error?",
      "correctAnswer": [
        "false negative"
      ],
      "explanation": "Fail to reject false.",
      "xp": 5
    },
    {
      "id": "ai-7-8-20",
      "type": "typing",
      "question": "Random variable?",
      "correctAnswer": [
        "variable with probability"
      ],
      "explanation": "Maps to numbers.",
      "xp": 4
    },
    {
      "id": "ai-7-8-21",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    },
    {
      "id": "ai-7-8-22",
      "type": "code",
      "question": "Calculate ReLU",
      "codeTemplate": "import numpy as np\nprint(max(0, -2))",
      "expectedOutput": "0",
      "explanation": "ReLU(-2) = max(0, -2) = 0",
      "xp": 6
    }
  ]
}

