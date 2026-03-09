// Artificial Intelligence - Unit2
// Generated: 2026-03-08 14:01:27

const Unit2 = {
  "unitId": "2",
  "unitName": "Statistics",
  "unitDescription": "Master descriptive statistics, inference, estimation, regression, Bayesian statistics, and optimization",
  "subunits": [
    {
      "subunitId": "2.1",
      "subunitName": "Descriptive Statistics",
      "lessons": [
        {
          "lessonId": "mean",
          "lessonName": "Mean",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Mean (Average)\n\nThe arithmetic mean is the sum of values divided by the count:\n\n**Formula:** \u03bc = (x\u2081 + x\u2082 + ... + x\u2099) / n = \u03a3x\u1d62 / n\n\n**Example:**\nData: [2, 4, 6, 8, 10]\nMean = (2+4+6+8+10) / 5 = 30 / 5 = 6\n\n**Properties:**\n- Sensitive to outliers\n- Sum of deviations from mean = 0\n- Minimizes sum of squared errors\n\n**Population vs Sample:**\n- Population mean: \u03bc (mu)\n- Sample mean: x\u0304 (x-bar)\n",
          "questions": [
            {
              "id": "ai-2-1-1",
              "type": "typing",
              "question": "What is mean of [1,2,3]?",
              "correctAnswer": [
                "2",
                "two"
              ],
              "explanation": "(1+2+3)/3 = 2",
              "xp": 4
            },
            {
              "id": "ai-2-1-2",
              "type": "typing",
              "question": "Mean of [10,20,30,40]?",
              "correctAnswer": [
                "25",
                "twenty-five"
              ],
              "explanation": "(10+20+30+40)/4 = 25",
              "xp": 5
            },
            {
              "id": "ai-2-1-3",
              "type": "typing",
              "question": "Mean symbol for population?",
              "correctAnswer": [
                "\u03bc",
                "mu"
              ],
              "explanation": "Greek letter mu.",
              "xp": 4
            },
            {
              "id": "ai-2-1-4",
              "type": "typing",
              "question": "Mean symbol for sample?",
              "correctAnswer": [
                "x\u0304",
                "x-bar"
              ],
              "explanation": "x with bar on top.",
              "xp": 4
            },
            {
              "id": "ai-2-1-5",
              "type": "typing",
              "question": "What is \u03a3x\u1d62 / n?",
              "correctAnswer": [
                "mean formula",
                "formula for mean"
              ],
              "explanation": "Sum divided by count.",
              "xp": 5
            },
            {
              "id": "ai-2-1-6",
              "type": "typing",
              "question": "Mean of [5,5,5,5]?",
              "correctAnswer": [
                "5",
                "five"
              ],
              "explanation": "All values are 5.",
              "xp": 4
            },
            {
              "id": "ai-2-1-7",
              "type": "typing",
              "question": "Mean of [0,0,10,10]?",
              "correctAnswer": [
                "5",
                "five"
              ],
              "explanation": "(0+0+10+10)/4 = 5",
              "xp": 5
            },
            {
              "id": "ai-2-1-8",
              "type": "typing",
              "question": "Sensitive to what?",
              "correctAnswer": [
                "outliers",
                "extreme values"
              ],
              "explanation": "Outliers affect mean strongly.",
              "xp": 5
            },
            {
              "id": "ai-2-1-9",
              "type": "code",
              "question": "Calculate mean in Python.",
              "codeTemplate": "import numpy as np; data = [1,2,3]; print(np.mean(data))",
              "expectedOutput": "2.0",
              "explanation": "Using numpy.",
              "xp": 6
            },
            {
              "id": "ai-2-1-10",
              "type": "typing",
              "question": "Sum of deviations from mean?",
              "correctAnswer": [
                "0",
                "zero"
              ],
              "explanation": "Always sums to zero.",
              "xp": 5
            },
            {
              "id": "ai-2-1-11",
              "type": "typing",
              "question": "Mean of [1,3,5,7,9]?",
              "correctAnswer": [
                "5",
                "five"
              ],
              "explanation": "(1+3+5+7+9)/5 = 5",
              "xp": 5
            },
            {
              "id": "ai-2-1-12",
              "type": "typing",
              "question": "What minimizes squared errors?",
              "correctAnswer": [
                "mean",
                "the mean"
              ],
              "explanation": "Mean is optimal for squared error.",
              "xp": 5
            },
            {
              "id": "ai-2-1-13",
              "type": "typing",
              "question": "Mean of [-1,0,1]?",
              "correctAnswer": [
                "0",
                "zero"
              ],
              "explanation": "(-1+0+1)/3 = 0",
              "xp": 4
            },
            {
              "id": "ai-2-1-14",
              "type": "code",
              "question": "Mean of [2,4,6,8].",
              "codeTemplate": "import statistics; print(statistics.mean([2,4,6,8]))",
              "expectedOutput": "5.0",
              "explanation": "Python statistics module.",
              "xp": 6
            },
            {
              "id": "ai-2-1-15",
              "type": "typing",
              "question": "Arithmetic vs geometric mean?",
              "correctAnswer": [
                "arithmetic adds",
                "geometric multiplies"
              ],
              "explanation": "Arithmetic: sum/n, Geometric: nth root of product.",
              "xp": 5
            }
          ]
        },
        {
          "lessonId": "median",
          "lessonName": "Median",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Median\n\nThe median is the middle value when data is sorted.\n\n**Finding the Median:**\n1. Sort the data\n2. If n is odd: middle value\n3. If n is even: average of two middle values\n\n**Examples:**\n[1, 3, 5, 7, 9] \u2192 Median = 5 (middle of 5)\n[1, 3, 5, 7] \u2192 Median = (3+5)/2 = 4 (average of middles)\n\n**Properties:**\n- Robust to outliers\n- Useful for skewed distributions\n- Always exists for non-empty sets\n\n**When to use:**\n- Income data (outliers: billionaires)\n- Test scores (one person gets 0 or 100)\n- Any data with extreme values\n",
          "questions": [
            {
              "id": "ai-2-1-16",
              "type": "typing",
              "question": "Median of [1,3,5]?",
              "correctAnswer": [
                "3",
                "three"
              ],
              "explanation": "Middle value.",
              "xp": 4
            },
            {
              "id": "ai-2-1-17",
              "type": "typing",
              "question": "Median of [1,2,3,4]?",
              "correctAnswer": [
                "2.5",
                "two point five"
              ],
              "explanation": "(2+3)/2 = 2.5",
              "xp": 5
            },
            {
              "id": "ai-2-1-18",
              "type": "typing",
              "question": "First step to find median?",
              "correctAnswer": [
                "sort",
                "sort data"
              ],
              "explanation": "Must sort first.",
              "xp": 4
            },
            {
              "id": "ai-2-1-19",
              "type": "typing",
              "question": "Odd number of values?",
              "correctAnswer": [
                "middle value",
                "the middle"
              ],
              "explanation": "Take the middle value.",
              "xp": 4
            },
            {
              "id": "ai-2-1-20",
              "type": "typing",
              "question": "Even number of values?",
              "correctAnswer": [
                "average of two middle",
                "mean of middle two"
              ],
              "explanation": "Average the two middle values.",
              "xp": 5
            },
            {
              "id": "ai-2-1-21",
              "type": "typing",
              "question": "Median of [5,10,15,20,25]?",
              "correctAnswer": [
                "15",
                "fifteen"
              ],
              "explanation": "Middle of sorted list.",
              "xp": 4
            },
            {
              "id": "ai-2-1-22",
              "type": "typing",
              "question": "Robust to what?",
              "correctAnswer": [
                "outliers",
                "extreme values"
              ],
              "explanation": "Outliers don't affect median much.",
              "xp": 5
            },
            {
              "id": "ai-2-1-23",
              "type": "typing",
              "question": "Median of [1,1,1,1000]?",
              "correctAnswer": [
                "1",
                "one"
              ],
              "explanation": "Outlier 1000 doesn't affect.",
              "xp": 5
            },
            {
              "id": "ai-2-1-24",
              "type": "code",
              "question": "Median in numpy.",
              "codeTemplate": "import numpy as np; print(np.median([1,3,5,7]))",
              "expectedOutput": "4.0",
              "explanation": "numpy median function.",
              "xp": 6
            },
            {
              "id": "ai-2-1-25",
              "type": "typing",
              "question": "Use median when?",
              "correctAnswer": [
                "outliers present",
                "skewed data"
              ],
              "explanation": "When data has extreme values.",
              "xp": 5
            },
            {
              "id": "ai-2-1-26",
              "type": "typing",
              "question": "Median of [10,20,30]?",
              "correctAnswer": [
                "20",
                "twenty"
              ],
              "explanation": "Middle value.",
              "xp": 4
            },
            {
              "id": "ai-2-1-27",
              "type": "typing",
              "question": "Can median be non-integer?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "When averaging two middle values.",
              "xp": 5
            },
            {
              "id": "ai-2-1-28",
              "type": "typing",
              "question": "Median of sorted data?",
              "correctAnswer": [
                "50th percentile",
                "middle 50%"
              ],
              "explanation": "Half above, half below.",
              "xp": 5
            },
            {
              "id": "ai-2-1-29",
              "type": "code",
              "question": "Median of [1,2,3,4,5,6].",
              "codeTemplate": "import statistics; print(statistics.median([1,2,3,4,5,6]))",
              "expectedOutput": "3.5",
              "explanation": "Python statistics.",
              "xp": 6
            },
            {
              "id": "ai-2-1-30",
              "type": "typing",
              "question": "Why use median for income?",
              "correctAnswer": [
                "outliers (billionaires)",
                "skewed"
              ],
              "explanation": "Income has extreme outliers.",
              "xp": 5
            }
          ]
        },
        {
          "lessonId": "mode",
          "lessonName": "Mode",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Mode\n\nThe mode is the most frequently occurring value.\n\n**Finding the Mode:**\n1. Count frequency of each value\n2. Value(s) with highest count is/are mode(s)\n\n**Examples:**\n[1, 2, 2, 3, 4] \u2192 Mode = 2 (appears twice)\n[1, 1, 2, 2, 3] \u2192 Modes = 1 and 2 (bimodal)\n[1, 2, 3, 4, 5] \u2192 No mode (all unique)\n\n**Types:**\n- Unimodal: one mode\n- Bimodal: two modes\n- Multimodal: more than two modes\n- No mode: all values unique\n\n**When to use:**\n- Categorical data (colors, categories)\n- Finding most common value\n- When frequency matters more than magnitude\n",
          "questions": [
            {
              "id": "ai-2-1-31",
              "type": "typing",
              "question": "Mode of [1,2,2,3]?",
              "correctAnswer": [
                "2",
                "two"
              ],
              "explanation": "2 appears most frequently.",
              "xp": 4
            },
            {
              "id": "ai-2-1-32",
              "type": "typing",
              "question": "Mode of [1,1,2,2,3]?",
              "correctAnswer": [
                "1 and 2",
                "both 1 and 2"
              ],
              "explanation": "Both appear twice.",
              "xp": 5
            },
            {
              "id": "ai-2-1-33",
              "type": "typing",
              "question": "What is mode?",
              "correctAnswer": [
                "most frequent",
                "most common"
              ],
              "explanation": "Most occurring value.",
              "xp": 4
            },
            {
              "id": "ai-2-1-34",
              "type": "typing",
              "question": "Unimodal means?",
              "correctAnswer": [
                "one mode",
                "single mode"
              ],
              "explanation": "One mode value.",
              "xp": 4
            },
            {
              "id": "ai-2-1-35",
              "type": "typing",
              "question": "Bimodal means?",
              "correctAnswer": [
                "two modes",
                "two mode values"
              ],
              "explanation": "Two mode values.",
              "xp": 4
            },
            {
              "id": "ai-2-1-36",
              "type": "typing",
              "question": "Mode of [1,2,3,4,5]?",
              "correctAnswer": [
                "none",
                "no mode",
                "no mode"
              ],
              "explanation": "All values unique.",
              "xp": 5
            },
            {
              "id": "ai-2-1-37",
              "type": "typing",
              "question": "Use mode for what data?",
              "correctAnswer": [
                "categorical",
                "categories"
              ],
              "explanation": "Categorical data.",
              "xp": 5
            },
            {
              "id": "ai-2-1-38",
              "type": "typing",
              "question": "Mode of [red, blue, red]?",
              "correctAnswer": [
                "red"
              ],
              "explanation": "Red appears twice.",
              "xp": 4
            },
            {
              "id": "ai-2-1-39",
              "type": "code",
              "question": "Mode in statistics.",
              "codeTemplate": "import statistics; print(statistics.mode([1,2,2,3]))",
              "expectedOutput": "2",
              "explanation": "statistics.mode().",
              "xp": 6
            },
            {
              "id": "ai-2-1-40",
              "type": "typing",
              "question": "Can have multiple modes?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "Multiple values can tie.",
              "xp": 4
            },
            {
              "id": "ai-2-1-41",
              "type": "typing",
              "question": "Mode of [a,a,b,b,b]?",
              "correctAnswer": [
                "b"
              ],
              "explanation": "b appears 3 times.",
              "xp": 4
            },
            {
              "id": "ai-2-1-42",
              "type": "typing",
              "question": "Multimodal means?",
              "correctAnswer": [
                "more than two modes",
                "multiple modes"
              ],
              "explanation": "Three or more modes.",
              "xp": 4
            },
            {
              "id": "ai-2-1-43",
              "type": "typing",
              "question": "When no mode?",
              "correctAnswer": [
                "all unique",
                "all different"
              ],
              "explanation": "Every value appears once.",
              "xp": 5
            },
            {
              "id": "ai-2-1-44",
              "type": "typing",
              "question": "Mode of [5,5,5,10,10]?",
              "correctAnswer": [
                "5"
              ],
              "explanation": "5 appears 3 times.",
              "xp": 4
            },
            {
              "id": "ai-2-1-45",
              "type": "typing",
              "question": "What does mode find?",
              "correctAnswer": [
                "most common",
                "highest frequency"
              ],
              "explanation": "Most frequent value.",
              "xp": 4
            }
          ]
        }
      ]
    }
  ]
};

