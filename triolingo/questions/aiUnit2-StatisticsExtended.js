// AI - Statistics Extended
// Generated: 2026-03-08 13:59:18

// Lesson 1: Bayesian Statistics
{
  "lessonId": "bayesian-statistics",
  "lessonName": "Bayesian Statistics",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Bayesian Statistics\n\n## Introduction\nThis lesson covers fundamental concepts of bayesian statistics in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-1-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "Set of all outcomes.",
      "xp": 5
    },
    {
      "id": "ai-2-1-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability is 1.",
      "xp": 5
    },
    {
      "id": "ai-2-1-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Probability is non-negative.",
      "xp": 5
    },
    {
      "id": "ai-2-1-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Probability of not A.",
      "xp": 5
    },
    {
      "id": "ai-2-1-5",
      "type": "typing",
      "question": "Conditional probability?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Probability of A given B.",
      "xp": 4
    },
    {
      "id": "ai-2-1-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverses conditionals.",
      "xp": 5
    },
    {
      "id": "ai-2-1-7",
      "type": "typing",
      "question": "What is prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Probability before evidence.",
      "xp": 5
    },
    {
      "id": "ai-2-1-8",
      "type": "typing",
      "question": "What is posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Probability after evidence.",
      "xp": 5
    },
    {
      "id": "ai-2-1-9",
      "type": "typing",
      "question": "What is likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Probability of evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-2-1-10",
      "type": "typing",
      "question": "Independent events?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Joint equals product.",
      "xp": 4
    },
    {
      "id": "ai-2-1-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint events.",
      "xp": 5
    },
    {
      "id": "ai-2-1-12",
      "type": "typing",
      "question": "Expectation formula?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-2-1-13",
      "type": "typing",
      "question": "Variance formula?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Measure of spread.",
      "xp": 5
    },
    {
      "id": "ai-2-1-14",
      "type": "typing",
      "question": "Normal distribution?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric around mean.",
      "xp": 5
    },
    {
      "id": "ai-2-1-15",
      "type": "typing",
      "question": "Binomial trials?",
      "correctAnswer": [
        "n independent attempts"
      ],
      "explanation": "Fixed number of trials.",
      "xp": 4
    },
    {
      "id": "ai-2-1-16",
      "type": "typing",
      "question": "What is p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Statistical significance.",
      "xp": 5
    },
    {
      "id": "ai-2-1-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Range containing true value.",
      "xp": 5
    },
    {
      "id": "ai-2-1-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-2-1-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-1-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 2: MCMC
{
  "lessonId": "mcmc",
  "lessonName": "MCMC",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# MCMC\n\n## Introduction\nThis lesson covers fundamental concepts of mcmc in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-2-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-2-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-2-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-2-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-2-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-2-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-2-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-2-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-2-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-2-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-2-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-2-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-2-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-2-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-2-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-2-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-2-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-2-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-2-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-2-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 3: Maximum Likelihood
{
  "lessonId": "maximum-likelihood",
  "lessonName": "Maximum Likelihood",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Maximum Likelihood\n\n## Introduction\nThis lesson covers fundamental concepts of maximum likelihood in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-3-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-3-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-3-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-3-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-3-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-3-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-3-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-3-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-3-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-3-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-3-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-3-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-3-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-3-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-3-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-3-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-3-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-3-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-3-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-3-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 4: MLE Examples
{
  "lessonId": "mle-examples",
  "lessonName": "MLE Examples",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# MLE Examples\n\n## Introduction\nThis lesson covers fundamental concepts of mle examples in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-4-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-4-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-4-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-4-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-4-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-4-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-4-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-4-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-4-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-4-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-4-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-4-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-4-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-4-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-4-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-4-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-4-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-4-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-4-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-4-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 5: MAP Estimation
{
  "lessonId": "map-estimation",
  "lessonName": "MAP Estimation",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# MAP Estimation\n\n## Introduction\nThis lesson covers fundamental concepts of map estimation in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-5-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-5-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-5-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-5-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-5-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-5-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-5-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-5-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-5-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-5-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-5-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-5-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-5-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-5-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-5-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-5-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-5-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-5-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-5-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-5-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 6: Conjugate Priors
{
  "lessonId": "conjugate-priors",
  "lessonName": "Conjugate Priors",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Conjugate Priors\n\n## Introduction\nThis lesson covers fundamental concepts of conjugate priors in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-6-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-6-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-6-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-6-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-6-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-6-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-6-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-6-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-6-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-6-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-6-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-6-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-6-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-6-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-6-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-6-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-6-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-6-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-6-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-6-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 7: Hierarchical Models
{
  "lessonId": "hierarchical-models",
  "lessonName": "Hierarchical Models",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Hierarchical Models\n\n## Introduction\nThis lesson covers fundamental concepts of hierarchical models in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-7-1",
      "type": "typing",
      "question": "What is ML?",
      "correctAnswer": [
        "learning from data"
      ],
      "explanation": "Machine learning.",
      "xp": 5
    },
    {
      "id": "ai-2-7-2",
      "type": "typing",
      "question": "What is training?",
      "correctAnswer": [
        "fit parameters"
      ],
      "explanation": "Learn from examples.",
      "xp": 5
    },
    {
      "id": "ai-2-7-3",
      "type": "typing",
      "question": "What is testing?",
      "correctAnswer": [
        "evaluate performance"
      ],
      "explanation": "Measure on new data.",
      "xp": 5
    },
    {
      "id": "ai-2-7-4",
      "type": "typing",
      "question": "What is a feature?",
      "correctAnswer": [
        "input attribute"
      ],
      "explanation": "Characteristics of data.",
      "xp": 5
    },
    {
      "id": "ai-2-7-5",
      "type": "typing",
      "question": "What is a label?",
      "correctAnswer": [
        "output",
        "target"
      ],
      "explanation": "What we predict.",
      "xp": 4
    },
    {
      "id": "ai-2-7-6",
      "type": "typing",
      "question": "Supervised learning?",
      "correctAnswer": [
        "with labels"
      ],
      "explanation": "Learn from labeled data.",
      "xp": 5
    },
    {
      "id": "ai-2-7-7",
      "type": "typing",
      "question": "Unsupervised learning?",
      "correctAnswer": [
        "without labels"
      ],
      "explanation": "Find patterns in data.",
      "xp": 5
    },
    {
      "id": "ai-2-7-8",
      "type": "typing",
      "question": "What is classification?",
      "correctAnswer": [
        "predict category"
      ],
      "explanation": "Discrete output.",
      "xp": 5
    },
    {
      "id": "ai-2-7-9",
      "type": "typing",
      "question": "What is regression?",
      "correctAnswer": [
        "predict value"
      ],
      "explanation": "Continuous output.",
      "xp": 5
    },
    {
      "id": "ai-2-7-10",
      "type": "typing",
      "question": "What is model?",
      "correctAnswer": [
        "function approximation"
      ],
      "explanation": "Learned mapping.",
      "xp": 4
    },
    {
      "id": "ai-2-7-11",
      "type": "typing",
      "question": "What is validation?",
      "correctAnswer": [
        "tune hyperparameters"
      ],
      "explanation": "Model selection.",
      "xp": 5
    },
    {
      "id": "ai-2-7-12",
      "type": "typing",
      "question": "What is dataset?",
      "correctAnswer": [
        "collection of examples"
      ],
      "explanation": "Training/testing data.",
      "xp": 5
    },
    {
      "id": "ai-2-7-13",
      "type": "typing",
      "question": "What is accuracy?",
      "correctAnswer": [
        "correct predictions"
      ],
      "explanation": "Fraction correct.",
      "xp": 5
    },
    {
      "id": "ai-2-7-14",
      "type": "typing",
      "question": "What is precision?",
      "correctAnswer": [
        "TP / (TP+FP)"
      ],
      "explanation": "Of predicted positive, how many are correct?",
      "xp": 5
    },
    {
      "id": "ai-2-7-15",
      "type": "typing",
      "question": "What is recall?",
      "correctAnswer": [
        "TP / (TP+FN)"
      ],
      "explanation": "Of actual positive, how many found?",
      "xp": 4
    },
    {
      "id": "ai-2-7-16",
      "type": "typing",
      "question": "F1 score?",
      "correctAnswer": [
        "harmonic mean"
      ],
      "explanation": "Balance precision and recall.",
      "xp": 5
    },
    {
      "id": "ai-2-7-17",
      "type": "typing",
      "question": "What is confusion matrix?",
      "correctAnswer": [
        "classification table"
      ],
      "explanation": "TP FP FN TN.",
      "xp": 5
    },
    {
      "id": "ai-2-7-18",
      "type": "typing",
      "question": "True positive?",
      "correctAnswer": [
        "correct positive prediction"
      ],
      "explanation": "Rightly predicted positive.",
      "xp": 5
    },
    {
      "id": "ai-2-7-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-7-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

// Lesson 8: Empirical Bayes
{
  "lessonId": "empirical-bayes",
  "lessonName": "Empirical Bayes",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Empirical Bayes\n\n## Introduction\nThis lesson covers fundamental concepts of empirical bayes in AI.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "ai-2-8-1",
      "type": "typing",
      "question": "Sample space symbol?",
      "correctAnswer": [
        "Ω",
        "omega"
      ],
      "explanation": "Set of all outcomes.",
      "xp": 5
    },
    {
      "id": "ai-2-8-2",
      "type": "typing",
      "question": "P(Ω)?",
      "correctAnswer": [
        "1"
      ],
      "explanation": "Total probability is 1.",
      "xp": 5
    },
    {
      "id": "ai-2-8-3",
      "type": "typing",
      "question": "Can P(A) be negative?",
      "correctAnswer": [
        "no"
      ],
      "explanation": "Probability is non-negative.",
      "xp": 5
    },
    {
      "id": "ai-2-8-4",
      "type": "typing",
      "question": "P(Aᶜ)?",
      "correctAnswer": [
        "1 - P(A)",
        "complement"
      ],
      "explanation": "Probability of not A.",
      "xp": 5
    },
    {
      "id": "ai-2-8-5",
      "type": "typing",
      "question": "Conditional probability?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Probability of A given B.",
      "xp": 4
    },
    {
      "id": "ai-2-8-6",
      "type": "typing",
      "question": "Bayes' formula?",
      "correctAnswer": [
        "P(A|B) = P(B|A)P(A)/P(B)"
      ],
      "explanation": "Reverses conditionals.",
      "xp": 5
    },
    {
      "id": "ai-2-8-7",
      "type": "typing",
      "question": "What is prior?",
      "correctAnswer": [
        "P(A)"
      ],
      "explanation": "Probability before evidence.",
      "xp": 5
    },
    {
      "id": "ai-2-8-8",
      "type": "typing",
      "question": "What is posterior?",
      "correctAnswer": [
        "P(A|B)"
      ],
      "explanation": "Probability after evidence.",
      "xp": 5
    },
    {
      "id": "ai-2-8-9",
      "type": "typing",
      "question": "What is likelihood?",
      "correctAnswer": [
        "P(B|A)"
      ],
      "explanation": "Probability of evidence given A.",
      "xp": 5
    },
    {
      "id": "ai-2-8-10",
      "type": "typing",
      "question": "Independent events?",
      "correctAnswer": [
        "P(A∩B) = P(A)P(B)"
      ],
      "explanation": "Joint equals product.",
      "xp": 4
    },
    {
      "id": "ai-2-8-11",
      "type": "typing",
      "question": "Mutually exclusive?",
      "correctAnswer": [
        "cannot both occur"
      ],
      "explanation": "Disjoint events.",
      "xp": 5
    },
    {
      "id": "ai-2-8-12",
      "type": "typing",
      "question": "Expectation formula?",
      "correctAnswer": [
        "E[X] = Σ x·P(x)"
      ],
      "explanation": "Weighted average.",
      "xp": 5
    },
    {
      "id": "ai-2-8-13",
      "type": "typing",
      "question": "Variance formula?",
      "correctAnswer": [
        "Var(X) = E[X²] - E[X]²"
      ],
      "explanation": "Measure of spread.",
      "xp": 5
    },
    {
      "id": "ai-2-8-14",
      "type": "typing",
      "question": "Normal distribution?",
      "correctAnswer": [
        "bell curve",
        "Gaussian"
      ],
      "explanation": "Symmetric around mean.",
      "xp": 5
    },
    {
      "id": "ai-2-8-15",
      "type": "typing",
      "question": "Binomial trials?",
      "correctAnswer": [
        "n independent attempts"
      ],
      "explanation": "Fixed number of trials.",
      "xp": 4
    },
    {
      "id": "ai-2-8-16",
      "type": "typing",
      "question": "What is p-value?",
      "correctAnswer": [
        "probability of results"
      ],
      "explanation": "Statistical significance.",
      "xp": 5
    },
    {
      "id": "ai-2-8-17",
      "type": "typing",
      "question": "Confidence interval?",
      "correctAnswer": [
        "range with probability"
      ],
      "explanation": "Range containing true value.",
      "xp": 5
    },
    {
      "id": "ai-2-8-18",
      "type": "typing",
      "question": "Type I error?",
      "correctAnswer": [
        "false positive"
      ],
      "explanation": "Reject true null.",
      "xp": 5
    },
    {
      "id": "ai-2-8-19",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    },
    {
      "id": "ai-2-8-20",
      "type": "code",
      "question": "Calculate mean of [1,2,3,4,5]",
      "codeTemplate": "import numpy as np\narr = [1,2,3,4,5]\nprint(np.mean(arr))",
      "expectedOutput": "3.0",
      "explanation": "Mean = (1+2+3+4+5)/5 = 3",
      "xp": 6
    }
  ]
}

