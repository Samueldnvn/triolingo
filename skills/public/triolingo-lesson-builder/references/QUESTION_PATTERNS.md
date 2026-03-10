# Question Patterns

Examples of effective question patterns for different TRIOlingO lesson types.

## Math Questions

### Type-in: Basic Computation
```json
{
  "id": "math-1",
  "type": "typing",
  "question": "What is $\\lim_{x\\to 2} (3x + 1)$?",
  "correctAnswer": ["7"],
  "explanation": "Substitute x=2: 3(2) + 1 = 6 + 1 = 7",
  "xp": 4
}
```

### Type-in: Formula Application
```json
{
  "id": "math-2",
  "type": "typing",
  "question": "Using the power rule, what is $\\frac{d}{dx}(x^5)$?",
  "correctAnswer": ["5x^4", "5*x^4"],
  "explanation": "Power rule: d/dx(x^n) = nx^(n-1). So d/dx(x^5) = 5x^4",
  "xp": 5
}
```

### Multiple Choice: Conceptual Understanding
```json
{
  "id": "math-3",
  "type": "multiple-choice",
  "question": "What does the derivative measure?",
  "options": [
    "Area under a curve",
    "Instantaneous rate of change",
    "Total accumulation",
    "Average rate of change"
  ],
  "correct": 1,
  "explanation": "The derivative f'(x) gives the instantaneous rate of change of f(x) at point x",
  "xp": 3
}
```

## Programming Questions

### Type-in: Syntax Knowledge
```json
{
  "id": "cpp-1",
  "type": "typing",
  "question": "What keyword is used to create a new instance of a class in C++?",
  "correctAnswer": ["new"],
  "explanation": "The 'new' keyword dynamically allocates memory for an object on the heap",
  "xp": 3
}
```

### Type-in: Output Prediction
```json
{
  "id": "cpp-2",
  "type": "typing",
  "question": "What does `std::cout << 5 + 3;` output?",
  "correctAnswer": ["8"],
  "explanation": "The expression 5 + 3 evaluates to 8, which is printed to console",
  "xp": 4
}
```

### Code: Simple Function
```json
{
  "id": "cpp-3",
  "type": "code",
  "question": "Write a function `add(int a, int b)` that returns the sum of two integers.",
  "codeTemplate": "// Write your function here\n\n",
  "expectedOutput": "7",
  "explanation": "A simple function that returns a + b. Test with add(3, 4).",
  "xp": 10,
  "localLLMGrade": true
}
```

### Code: Loop Implementation
```json
{
  "id": "cpp-4",
  "type": "code",
  "question": "Write a function that returns the sum of integers from 1 to n using a loop.",
  "codeTemplate": "int sumToN(int n) {\n    // Your code here\n    return 0;\n}",
  "expectedOutput": "15",
  "explanation": "Use a for loop to accumulate the sum. Test with sumToN(5) = 1+2+3+4+5 = 15",
  "xp": 12,
  "localLLMGrade": true
}
```

## Language Learning Questions

### Type-in: Translation
```json
{
  "id": "french-1",
  "type": "typing",
  "question": "What does \"Bonjour\" mean in English?",
  "correctAnswer": ["hello", "good morning"],
  "explanation": "Bonjour is the French greeting for hello or good morning",
  "xp": 3
}
```

### Type-in: Grammar
```json
{
  "id": "french-2",
  "type": "typing",
  "question": "Complete: \"Je ___ (to be) étudiant.\" (Use the correct form of être)",
  "correctAnswer": ["suis"],
  "explanation": "\"Je suis\" means \"I am\" in French",
  "xp": 4
}
```

### Multiple Choice: Vocabulary
```json
{
  "id": "french-3",
  "type": "multiple-choice",
  "question": "Which word means \"thank you\" in French?",
  "options": ["Bonjour", "Merci", "S'il vous plaît", "Au revoir"],
  "correct": 1,
  "explanation": "Merci is the French word for thank you",
  "xp": 2
}
```

## AI/ML Questions

### Type-in: Definition
```json
{
  "id": "ai-1",
  "type": "typing",
  "question": "What is the most common loss function for binary classification?",
  "correctAnswer": ["binary cross-entropy", "log loss"],
  "explanation": "Binary cross-entropy measures the difference between predicted probabilities and actual labels",
  "xp": 4
}
```

### Type-in: Concept
```json
{
  "id": "ai-2",
  "type": "typing",
  "question": "In neural networks, what does the process of adjusting weights to minimize loss called?",
  "correctAnswer": ["backpropagation", "gradient descent"],
  "explanation": "Backpropagation calculates gradients, and gradient descent updates weights to minimize loss",
  "xp": 5
}
```

### Multiple Choice: Application
```json
{
  "id": "ai-3",
  "type": "multiple-choice",
  "question": "Which type of neural network is best for image recognition?",
  "options": [
    "Recurrent Neural Network",
    "Convolutional Neural Network",
    "Transformer",
    "Feedforward Network"
  ],
  "correct": 1,
  "explanation": "CNNs are designed for spatial data like images, using filters to detect patterns",
  "xp": 3
}
```

## Engineering/Physics Questions

### Type-in: Formula Recall
```json
{
  "id": "hex-1",
  "type": "typing",
  "question": "What is Newton's second law of motion expressed mathematically?",
  "correctAnswer": ["F = ma", "F=ma"],
  "explanation": "Force equals mass times acceleration: F = ma",
  "xp": 4
}
```

### Type-in: Calculation
```json
{
  "id": "hex-2",
  "type": "typing",
  "question": "If a hexapod leg has 3 joints each with 90° range, what is total angular range?",
  "correctAnswer": ["270°", "270 degrees"],
  "explanation": "3 joints × 90° each = 270° total range",
  "xp": 5
}
```

### Code: Control System
```json
{
  "id": "hex-3",
  "type": "code",
  "question": "Write a simple PID controller function that returns the control signal.",
  "codeTemplate": "float pidController(float error, float Kp, float Ki, float Kd, float integral, float prev_error) {\n    // Your code here\n    return 0.0;\n}",
  "expectedOutput": "positive or negative number",
  "explanation": "Implement u = Kp*e + Ki*integral + Kd*(e - prev_error). The output should scale with error.",
  "xp": 12,
  "localLLMGrade": true
}
```

## Diagram-Referenced Questions

### Type-in with Diagram
```json
{
  "id": "calc-1",
  "type": "typing",
  "question": "Looking at the diagram in `diagrams/tangent-line.png`, what is the slope at x=2?",
  "correctAnswer": ["4"],
  "explanation": "The tangent line at x=2 has slope 4, as shown in the diagram",
  "xp": 5
}
```

### Multiple Choice with Diagram
```json
{
  "id": "calc-2",
  "type": "multiple-choice",
  "question": "In `diagrams/limit-approach.png`, which direction does x approach 0 from?",
  "options": [
    "From the left only",
    "From the right only",
    "From both sides",
    "No approach shown"
  ],
  "correct": 2,
  "explanation": "The arrows show x approaching 0 from both left (negative) and right (positive) sides",
  "xp": 3
}
```

## Progressive Difficulty Pattern

### Lesson Question Flow

1. **Warm-up (3-4 questions)**: Basic recall, simple computations
   - "What is the definition of X?"
   - "Calculate Y given simple inputs"

2. **Core concepts (8-10 questions)**: Apply knowledge, moderate complexity
   - "Using formula X, solve for Y"
   - "What happens when condition Z?"

3. **Application (4-6 questions)**: Apply to new situations, multi-step
   - "Given scenario A, what is the result using method B?"
   - "Combine concepts X and Y to solve Z"

4. **Challenge (2-3 questions)**: Complex, synthesis
   - "Explain why..."
   - "Design a solution for..."

### Example: Derivative Lesson Flow

**Warm-up:**
- "What is d/dx(x³)?"
- "What does derivative measure?"

**Core:**
- "Find derivative of f(x) = 3x² + 2x"
- "What is the slope of y = x² at x=2?"

**Application:**
- "A ball's position is s(t) = 16t². What is its velocity at t=3?"
- "Given f'(x) = 2x, find the tangent line at x=1"

**Challenge:**
- "Explain why d/dx(e^x) = e^x using the limit definition"

## Answer Variation Patterns

### Multiple Correct Answers
```json
{
  "correctAnswer": ["2x", "2*x", "2 x"]
}
```

### Case Insensitive for Code
```json
{
  "correctAnswer": ["Hello", "hello", "HELLO"]
}
```

### Numerical Variations
```json
{
  "correctAnswer": ["1/2", "0.5", ".5"]
}
```

## Explanation Guidelines

### Good Explanations
- ✅ Explain **why** the answer is correct
- ✅ Show the work/steps
- ✅ Reference the concept
- ✅ Keep concise but complete

### Example
```
"Using the chain rule: d/dx(f(g(x))) = f'(g(x))·g'(x)
Here f(u) = u² and g(x) = 2x, so f'(u) = 2u and g'(x) = 2
Thus, d/dx((2x)²) = 2(2x)·2 = 8x"
```

## XP Guidelines by Complexity

| Complexity | Type-in | Multiple Choice | Code |
|------------|---------|-----------------|------|
| Simple recall | 3 XP | 2 XP | - |
| Basic application | 4 XP | 3 XP | 8 XP |
| Multi-step | 5 XP | - | 10 XP |
| Complex/synthesis | - | - | 12 XP |