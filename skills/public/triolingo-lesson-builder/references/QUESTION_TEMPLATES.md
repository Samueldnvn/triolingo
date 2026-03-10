# Question Templates

Reusable question templates and schemas for creating TRIOlingO lessons. These are structural patterns that can be adapted to different topics - not programmatic generation, but fill-in-the-blank templates.

## Template Structure

Each template follows this schema:
```json
{
  "template_id": "domain-type-complexity",
  "name": "Template name",
  "type": "typing|multiple-choice|code",
  "domain": "math|programming|language|ai|engineering|general",
  "complexity": "recall|application|synthesis",
  "xp": 3-5,
  "pattern": {
    "question": "Question template with {{placeholders}}",
    "correctAnswer": ["{{variations}}"],
    "options": ["{{option_1}}", "{{option_2}}", "{{option_3}}", "{{option_4}}"],
    "correct": 0-3,
    "explanation": "Explanation template with {{concepts}}",
    "codeTemplate": "{{code_skeleton}}",
    "expectedOutput": "{{expected}}"
  }
}
```

## Type-in Templates

### T1: Definition Recall
**Template ID:** `typing-definition-recall`
**Complexity:** recall
**XP:** 3

```json
{
  "name": "Definition Recall",
  "domain": "general",
  "pattern": {
    "question": "What is the definition of {{term}}?",
    "correctAnswer": ["{{answer_1}}", "{{answer_2}}"],
    "explanation": "{{term}} is defined as {{definition}}",
    "xp": 3
  }
}
```

**Examples:**
- "What is the definition of derivative?" → "Instantaneous rate of change"
- "What is the definition of backpropagation?" → "Algorithm for computing gradients"

---

### T2: Formula Application
**Template ID:** `typing-formula-application`
**Complexity:** application
**XP:** 4

```json
{
  "name": "Formula Application",
  "domain": "math",
  "pattern": {
    "question": "Using the {{formula_name}}, what is {{expression}}?",
    "correctAnswer": ["{{answer_1}}", "{{answer_2}}", "{{answer_3}}"],
    "explanation": "The {{formula_name}} states: {{formula}}\nApplying it: {{steps}}",
    "xp": 4
  }
}
```

**Examples:**
- "Using the power rule, what is d/dx(x⁵)?" → "5x⁴"
- "Using Ohm's law (V=IR), what is the current if V=12V and R=4Ω?" → "3A"

---

### T3: Concept Identification
**Template ID:** `typing-concept-identification`
**Complexity:** recall
**XP:** 3

```json
{
  "name": "Concept Identification",
  "domain": "general",
  "pattern": {
    "question": "{{scenario}}\n\nWhat concept does this describe?",
    "correctAnswer": ["{{concept}}"],
    "explanation": "{{scenario}} describes {{concept}} because {{reason}}",
    "xp": 3
  }
}
```

**Examples:**
- "When x approaches a value but never reaches it..." → "limit"
- "When output depends on weighted sum of inputs..." → "neural network"

---

### T4: Numerical Computation
**Template ID:** `typing-numerical-computation`
**Complexity:** application
**XP:** 4

```json
{
  "name": "Numerical Computation",
  "domain": "math",
  "pattern": {
    "question": "Calculate {{quantity}} given: {{inputs}}",
    "correctAnswer": ["{{answer_1}}", "{{answer_2}}"],
    "explanation": "Computation: {{steps}}\nResult: {{answer}}",
    "xp": 4
  }
}
```

**Examples:**
- "Calculate the area of a circle with radius 5" → "78.54"
- "What is 20% of 150?" → "30"

---

### T5: Relationship Understanding
**Template ID:** `typing-relationship`
**Complexity:** application
**XP:** 5

```json
{
  "name": "Relationship Understanding",
  "domain": "general",
  "pattern": {
    "question": "{{concept_A}} and {{concept_B}} have what relationship?",
    "correctAnswer": ["{{relationship}}"],
    "explanation": "{{concept_A}} {{relationship}} {{concept_B}} because {{explanation}}",
    "xp": 5
  }
}
```

**Examples:**
- "Differentiation and integration have what relationship?" → "inverse operations"
- "Precision and recall have what relationship?" → "trade-off"

---

### T6: Process Description
**Template ID:** `typing-process`
**Complexity:** synthesis
**XP:** 5

```json
{
  "name": "Process Description",
  "domain": "general",
  "pattern": {
    "question": "{{task}}. What is the first step?",
    "correctAnswer": ["{{step_1}}"],
    "explanation": "To {{task}}:\n1. {{step_1}}\n2. {{step_2}}\n3. {{step_3}}",
    "xp": 5
  }
}
```

**Examples:**
- "To train a neural network. What is the first step?" → "initialize weights"
- "To optimize a function. What is the first step?" → "compute gradient"

---

### T7: Syntax Knowledge
**Template ID:** `typing-syntax`
**Complexity:** recall
**XP:** 3

```json
{
  "name": "Syntax Knowledge",
  "domain": "programming",
  "pattern": {
    "question": "In {{language}}, what {{syntax_element}} is used for {{purpose}}?",
    "correctAnswer": ["{{syntax}}"],
    "explanation": "{{syntax}} in {{language}} is used for {{purpose}}",
    "xp": 3
  }
}
```

**Examples:**
- "In Python, what keyword is used to define a function?" → "def"
- "In C++, what symbol is used to access class members?" → "."

---

### T8: Value Prediction
**Template ID:** `typing-prediction`
**Complexity:** application
**XP:** 4

```json
{
  "name": "Value Prediction",
  "domain": "programming",
  "pattern": {
    "question": "What does this code output?\n\n```\n{{code}}\n```",
    "correctAnswer": ["{{output_1}}", "{{output_2}}"],
    "explanation": "The code {{explanation}} → outputs: {{output}}",
    "xp": 4
  }
}
```

**Examples:**
- "What does `print(2**3)` output?" → "8"
- "What does `len([1,2,3])` output?" → "3"

---

### T9: Translation
**Template ID:** `typing-translation`
**Complexity:** recall
**XP:** 3

```json
{
  "name": "Translation",
  "domain": "language",
  "pattern": {
    "question": "What does '{{source_text}}' mean in {{target_language}}?",
    "correctAnswer": ["{{translation_1}}", "{{translation_2}}"],
    "explanation": "'{{source_text}}' translates to '{{translation}}' in {{target_language}}",
    "xp": 3
  }
}
```

**Examples:**
- "What does 'Bonjour' mean in English?" → "hello"
- "What does 'arigato' mean in English?" → "thank you"

---

### T10: Diagram Interpretation
**Template ID:** `typing-diagram-interpretation`
**Complexity:** application
**XP:** 5

```json
{
  "name": "Diagram Interpretation",
  "domain": "general",
  "pattern": {
    "question": "Looking at the diagram in `{{diagram_path}}`, what is {{property}}?",
    "correctAnswer": ["{{value}}"],
    "explanation": "In the diagram, {{explanation}} showing {{value}}",
    "xp": 5
  }
}
```

**Examples:**
- "Looking at `diagrams/prob-tree.png`, what is P(B|A)?" → "0.6"
- "Looking at `diagrams/nn-arch.png`, how many hidden layers?" → "2"

---

## Multiple Choice Templates

### MC1: Concept Selection
**Template ID:** `mc-concept-selection`
**Complexity:** recall
**XP:** 2

```json
{
  "name": "Concept Selection",
  "domain": "general",
  "pattern": {
    "question": "{{scenario}}\n\nWhich concept does this describe?",
    "options": [
      "{{correct_concept}}",
      "{{distractor_1}}",
      "{{distractor_2}}",
      "{{distractor_3}}"
    ],
    "correct": 0,
    "explanation": "{{scenario}} describes {{correct_concept}} because {{reason}}",
    "xp": 2
  }
}
```

**Examples:**
- "The rate of change at a point describes..." → "derivative"
- "Weighted sum followed by non-linearity describes..." → "neuron"

---

### MC2: Best Method
**Template ID:** `mc-best-method`
**Complexity:** application
**XP:** 3

```json
{
  "name": "Best Method",
  "domain": "general",
  "pattern": {
    "question": "{{problem}}\n\nWhich method is best suited for this problem?",
    "options": [
      "{{distractor_1}}",
      "{{correct_method}}",
      "{{distractor_2}}",
      "{{distractor_3}}"
    ],
    "correct": 1,
    "explanation": "{{correct_method}} is best because {{reason}}",
    "xp": 3
  }
}
```

**Examples:**
- "For image recognition tasks, which method is best?" → "CNN"
- "For sequential data, which method is best?" → "RNN"

---

### MC3: False Statement
**Template ID:** `mc-false-statement`
**Complexity:** application
**XP:** 3

```json
{
  "name": "False Statement",
  "domain": "general",
  "pattern": {
    "question": "Which statement about {{topic}} is FALSE?",
    "options": [
      "{{true_statement_1}}",
      "{{false_statement}}",
      "{{true_statement_2}}",
      "{{true_statement_3}}"
    ],
    "correct": 1,
    "explanation": "{{false_statement}} is false because {{reason}}",
    "xp": 3
  }
}
```

**Examples:**
- "Which statement about derivatives is FALSE?" → "Derivative measures area under curve"
- "Which statement about neural networks is FALSE?" → "Backpropagation is used for data preprocessing"

---

### MC4: Comparison
**Template ID:** `mc-comparison`
**Complexity:** application
**XP:** 3

```json
{
  "name": "Comparison",
  "domain": "general",
  "pattern": {
    "question": "What is the key difference between {{concept_A}} and {{concept_B}}?",
    "options": [
      "{{distractor_1}}",
      "{{distractor_2}}",
      "{{key_difference}}",
      "{{distractor_3}}"
    ],
    "correct": 2,
    "explanation": "The key difference is {{key_difference}}",
    "xp": 3
  }
}
```

**Examples:**
- "Difference between variance and standard deviation?" → "standard deviation is square root of variance"
- "Difference between precision and recall?" → "precision measures positive predictions, recall measures actual positives"

---

### MC5: Application Scenario
**Template ID:** `mc-application`
**Complexity:** synthesis
**XP:** 4

```json
{
  "name": "Application Scenario",
  "domain": "general",
  "pattern": {
    "question": "{{scenario}}\n\nGiven this situation, what should happen?",
    "options": [
      "{{distractor_1}}",
      "{{distractor_2}}",
      "{{correct_outcome}}",
      "{{distractor_3}}"
    ],
    "correct": 2,
    "explanation": "In this scenario, {{correct_outcome}} because {{reason}}",
    "xp": 4
  }
}
```

**Examples:**
- "If gradient explodes during training, what should happen?" → "use gradient clipping"
- "If model overfits, what should happen?" → "use regularization"

---

### MC6: Classification
**Template ID:** `mc-classification`
**Complexity:** application
**XP:** 3

```json
{
  "name": "Classification",
  "domain": "general",
  "pattern": {
    "question": "{{item}} belongs to which category?",
    "options": [
      "{{distractor_1}}",
      "{{distractor_2}}",
      "{{correct_category}}",
      "{{distractor_3}}"
    ],
    "correct": 2,
    "explanation": "{{item}} is classified as {{correct_category}} because {{reason}}",
    "xp": 3
  }
}
```

**Examples:**
- "A sigmoid activation function belongs to which category?" → "non-linear"
- "Mean Squared Error belongs to which category?" → "regression loss"

---

## Code Templates

### C1: Simple Function
**Template ID:** `code-simple-function`
**Complexity:** application
**XP:** 8

```json
{
  "name": "Simple Function",
  "domain": "programming",
  "pattern": {
    "question": "Write a function `{{function_name}}({{params}})` that {{description}}.",
    "codeTemplate": "// Write your function here\n\n",
    "expectedOutput": "{{expected}}",
    "explanation": "A {{language}} function that {{description}}. Test with {{test_case}}",
    "xp": 8,
    "localLLMGrade": true
  }
}
```

**Examples:**
- "Write a function `add(a, b)` that returns the sum."
- "Write a function `isEven(n)` that returns true if n is even."

---

### C2: Loop Implementation
**Template ID:** `code-loop`
**Complexity:** synthesis
**XP:** 10

```json
{
  "name": "Loop Implementation",
  "domain": "programming",
  "pattern": {
    "question": "Write a function that {{task}} using a loop.",
    "codeTemplate": "{{function_skeleton}}\n    // Your code here\n    return result;\n}",
    "expectedOutput": "{{expected}}",
    "explanation": "Use a loop to {{task}}. Test with {{test_case}}",
    "xp": 10,
    "localLLMGrade": true
  }
}
```

**Examples:**
- "Write a function that calculates factorial using a loop."
- "Write a function that sums elements in an array using a loop."

---

### C3: Conditional Logic
**Template ID:** `code-conditional`
**Complexity:** synthesis
**XP:** 10

```json
{
  "name": "Conditional Logic",
  "domain": "programming",
  "pattern": {
    "question": "Write a function that implements {{logic}} using conditionals.",
    "codeTemplate": "{{function_skeleton}}\n    // Your code here\n}",
    "expectedOutput": "{{expected}}",
    "explanation": "Use if/else to implement {{logic}}. Test with {{test_case}}",
    "xp": 10,
    "localLLMGrade": true
  }
}
```

**Examples:**
- "Write a function that classifies a number as positive, negative, or zero."
- "Write a function that returns the larger of two numbers."

---

### C4: Algorithm Implementation
**Template ID:** `code-algorithm`
**Complexity:** synthesis
**XP:** 12

```json
{
  "name": "Algorithm Implementation",
  "domain": "programming",
  "pattern": {
    "question": "Implement the {{algorithm_name}} algorithm.",
    "codeTemplate": "{{function_skeleton}}\n    // Implement {{algorithm_name}}\n}",
    "expectedOutput": "{{expected}}",
    "explanation": "{{algorithm_name}} works by {{description}}. Test with {{test_case}}",
    "xp": 12,
    "localLLMGrade": true
  }
}
```

**Examples:**
- "Implement binary search algorithm."
- "Implement bubble sort algorithm."

---

## Progressive Difficulty Templates

### Lesson Template: Standard Structure (18 questions)

**Warm-up Phase (4 questions):**
- T1: Definition Recall (3 XP) × 1
- T1: Definition Recall (3 XP) × 1
- T7: Syntax Knowledge (3 XP) × 1
- MC1: Concept Selection (2 XP) × 1

**Core Phase (8 questions):**
- T2: Formula Application (4 XP) × 2
- T4: Numerical Computation (4 XP) × 2
- MC2: Best Method (3 XP) × 2
- MC3: False Statement (3 XP) × 2

**Application Phase (4 questions):**
- T5: Relationship Understanding (5 XP) × 1
- T8: Value Prediction (4 XP) × 1
- MC4: Comparison (3 XP) × 1
- MC6: Classification (3 XP) × 1

**Challenge Phase (2 questions):**
- T6: Process Description (5 XP) × 1
- MC5: Application Scenario (4 XP) × 1

**Total XP:** 4×3 + 2×4 + 2×3 + 1×2 + 2×4 + 2×4 + 2×3 + 2×3 + 1×5 + 1×4 + 1×3 + 1×3 + 1×5 + 1×4 = **88 XP**

### Lesson Template: Programming Focus (18 questions)

**Warm-up (4 questions):**
- T7: Syntax Knowledge (3 XP) × 2
- T8: Value Prediction (4 XP) × 1
- T1: Definition Recall (3 XP) × 1

**Core (8 questions):**
- T8: Value Prediction (4 XP) × 3
- MC1: Concept Selection (2 XP) × 2
- MC2: Best Method (3 XP) × 2
- T9: Translation (3 XP) × 1

**Application (4 questions):**
- C1: Simple Function (8 XP) × 2
- C2: Loop Implementation (10 XP) × 1
- C3: Conditional Logic (10 XP) × 1

**Challenge (2 questions):**
- C4: Algorithm Implementation (12 XP) × 1
- MC5: Application Scenario (4 XP) × 1

**Total XP:** **88 XP**

### Lesson Template: Math Focus (18 questions)

**Warm-up (4 questions):**
- T1: Definition Recall (3 XP) × 2
- T2: Formula Application (4 XP) × 1
- MC1: Concept Selection (2 XP) × 1

**Core (8 questions):**
- T2: Formula Application (4 XP) × 3
- T4: Numerical Computation (4 XP) × 3
- T3: Concept Identification (3 XP) × 2

**Application (4 questions):**
- T5: Relationship Understanding (5 XP) × 2
- T10: Diagram Interpretation (5 XP) × 1
- MC4: Comparison (3 XP) × 1

**Challenge (2 questions):**
- T6: Process Description (5 XP) × 1
- MC5: Application Scenario (4 XP) × 1

**Total XP:** **88 XP**

## Template Usage Guide

### Step 1: Choose Domain and Complexity

1. Identify lesson domain (math, programming, language, AI, etc.)
2. Determine target audience level (beginner, intermediate, advanced)
3. Select appropriate lesson template (Standard, Programming, Math, etc.)

### Step 2: Fill Templates with Topic Content

For each question in the template:
1. Replace placeholders with topic-specific content
2. Ensure appropriate difficulty for the position in lesson
3. Write clear explanations
4. Accept multiple answer variations for type-in questions

### Step 3: Review and Adjust

- Check that questions flow logically from simple to complex
- Ensure all concepts from lesson text are tested
- Verify XP values match complexity
- Add diagram references where helpful

### Step 4: Validate

- Test each question has clear correct answer
- Verify explanations are accurate and helpful
- Check that lesson text covers all tested concepts

## Template Library Organization

Templates are organized by:
1. **Question Type** (Type-in, Multiple Choice, Code)
2. **Domain** (Math, Programming, Language, AI, General)
3. **Complexity** (Recall, Application, Synthesis)
4. **Lesson Templates** (Pre-built 18-question structures)

This organization allows quick selection and customization for any topic.

## Creating New Templates

When adding new templates:

1. **Define the pattern** - What structure does this question type have?
2. **Identify placeholders** - What parts vary by topic?
3. **Specify domain** - Which subjects use this pattern?
4. **Set complexity** - What cognitive level does this require?
5. **Determine XP** - What point value is appropriate?
6. **Provide examples** - Show 2-3 concrete examples

## Template Best Practices

✅ Keep placeholders clear and descriptive (e.g., `{{concept}}`, `{{formula}}`)
✅ Provide multiple answer variations for type-in questions
✅ Write explanations that teach, not just state the answer
✅ Match XP to cognitive complexity
✅ Use consistent formatting across templates
✅ Include relevant diagrams in questions when applicable

❌ Don't make templates too specific to one topic
❌ Don't skip explanation templates
❌ Don't forget to account for common misconceptions in distractors
❌ Don't use placeholders that are ambiguous (prefer `{{variable_name}}` over `{{x}}`)