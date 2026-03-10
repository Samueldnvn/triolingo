---
name: triolingo-lesson-builder
description: Create high-quality, manually-written TRIOlingO lessons with detailed explanations, questions, diagrams, math rendering, and answer feedback. Use when user asks to build lessons, add lesson content, or fill in lesson placeholders for TRIOlingO. Creates lessons with 15-25 questions, detailed text, type-in answers, code questions, Matplotlib diagrams, LaTeX math, two-phase lesson flow (content → questions), and stores in lessons.json.
---

# TRIOlingO Lesson Builder

Build comprehensive, high-quality TRIOlingO lessons manually, one question at a time.

## Core Principles

- **Create questions by hand** - Never batch-generate with scripts. Each question is crafted individually.
- **Two-phase lesson flow** - Lessons show detailed teaching content first, then questions for practice.
- **Detailed explanations first** - Start every lesson with comprehensive text that teaches all concepts the lesson covers.
- **Majority type-in** - Most questions should be type-in answers (not multiple choice).
- **15-25 questions per lesson** - Balance comprehensiveness with manageability.
- **Answer feedback** - Always provide explanations showing correct/incorrect answers.
- **Technical depth** - Put significant effort into each lesson.
- **No JS/Python generation files** - Store lessons in JSON/text files, never use scripts to batch generate.
- **Diagrams in questions** - Diagrams should appear in both lesson content and questions that reference them.

## Lesson Storage

Lessons are stored in `/home/samueldnvn4/.openclaw/workspace/triolingo/lessons.json`.

**Important:** Do NOT modify or remove lesson placeholders in `app.js`. Only add content to `lessons.json`.

### lessons.json Structure

```json
{
  "courses": {
    "courseId": {
      "id": "courseId",
      "name": "Course Name",
      "units": [
        {
          "id": 1,
          "title": "Unit Title",
          "lessons": [
            {
              "id": "unit-lesson",
              "title": "Lesson Title",
              "xp": 75,
              "type": "lesson",
              "lessonText": "Detailed explanation...",
              "questions": [
                {
                  "id": "unique-question-id",
                  "type": "typing|multiple-choice|code",
                  "question": "Question text",
                  "correctAnswer": ["answer1", "answer2"],
                  "options": ["A", "B", "C", "D"],
                  "correct": 0,
                  "codeTemplate": "// template",
                  "expectedOutput": "output",
                  "explanation": "Why this is correct",
                  "xp": 5
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Lesson Structure

Every lesson must have:

1. **Detailed lesson text** (`lessonText`) - Teaches all concepts before asking questions
2. **15-25 questions** (`questions` array)
3. **Appropriate XP** (`xp` field) - Typically 75-100 for full lessons

### Lesson Text Guidelines

- Teach **all concepts** that will be tested
- Include examples and explanations
- Use LaTeX for math notation: `$\lim_{x\to 0} \frac{\sin x}{x} = 1$`
- Include code examples for programming topics
- Make it comprehensive enough that someone can learn from just this text

## Question Types

### Type-in Questions (Default)

Majority of questions should be type-in:

```json
{
  "id": "unique-id",
  "type": "typing",
  "question": "What is the derivative of x²?",
  "correctAnswer": ["2x", "2*x"],
  "explanation": "Using the power rule: d/dx(x^n) = nx^(n-1), so d/dx(x²) = 2x",
  "xp": 5
}
```

**Guidelines:**
- Accept multiple variations of correct answers
- Provide detailed explanations
- 3-5 XP per question

### Multiple Choice Questions

Use sparingly - type-in should be majority:

```json
{
  "id": "unique-id",
  "type": "multiple-choice",
  "question": "Which is NOT a derivative rule?",
  "options": ["Power rule", "Product rule", "Quotient rule", "Integration rule"],
  "correct": 3,
  "explanation": "Integration is the reverse of differentiation, not a derivative rule",
  "xp": 3
}
```

**Guidelines:**
- Use for conceptual questions
- 4 options typically
- 2-3 XP per question
- Keep to <50% of questions

### Code Questions (Programming Lessons)

For programming topics, several questions per lesson require writing brief code:

```json
{
  "id": "unique-id",
  "type": "code",
  "question": "Write a function that calculates factorial",
  "codeTemplate": "// Write your factorial function here\n\n",
  "expectedOutput": "120",
  "explanation": "A recursive or iterative solution works. Test with factorial(5).",
  "xp": 10,
  "localLLMGrade": true
}
```

**Guidelines:**
- 3-5 code questions per programming lesson
- Provide clear code template
- Simple expected outputs for testing
- Local LLM will grade (check if code would work)
- 8-12 XP per code question

## Math Notation

Use LaTeX for all math expressions. TRIOlingO is configured to render both inline and display math:

- **Inline math** (within text): Use `$` or `\\(` `\\)` delimiters
  - `$x^2 + 1$` renders as inline equation
  - `$\\frac{a}{b}$` renders as inline fraction

- **Display math** (on separate lines): Use `$$` or `\\[` `\\]` delimiters
  - `$$\\int_0^1 x dx = \\frac{1}{2}$$` renders as centered equation
  - `$$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$$`

**Common LaTeX commands:**
- Fractions: `$\\frac{a}{b}$` or `$\\frac{\\partial f}{\\partial x}$`
- Limits: `$\\lim_{x\\to a} f(x)$`
- Derivatives: `$\\frac{d}{dx}$` or `$\\frac{\\partial}{\\partial x}$`
- Integrals: `$\\int_a^b f(x) dx$` or `$\\iiint_V f(x,y,z) dV$`
- Greek letters: `$\\alpha, \\beta, \\theta, \\pi, \\Sigma, \\Pi$`
- Subscripts/superscripts: `$x_1, x^2, f'(x)$`
- Sums/products: `$\\sum_{i=1}^n x_i, \\prod_{i=1}^n x_i$`
- Brackets: `$\\left[ ... \\right]$, \\left( ... \\right)$`

**Math in questions:** Questions with math will automatically render LaTeX when displayed.

## Diagrams

For technical lessons, create diagrams using Matplotlib or download from web.

### Critical Rule: Diagram Variety

**DO NOT reuse diagrams across lessons.** Each lesson should have its own unique diagrams that are specifically designed for that lesson's content.

**Why variety matters:**
- Each diagram illustrates a specific concept for its lesson
- Reusing diagrams creates confusion about which concepts they represent
- Unique diagrams enhance learning by providing fresh visualizations
- Professional courses don't recycle generic visualizations

**Best practices:**
- Create 2-4 diagrams per lesson (more for complex topics)
- Each diagram should be unique to its lesson
- Use different distributions, examples, and visual approaches
- Reference the correct diagram file in each lesson

**Example of good diagram variety:**

| Lesson | Diagrams (unique to lesson) |
|--------|----------------------------|
| Discrete Variables | discrete-vs-continuous-examples.png<br>discrete-variable-types.png<br>discrete-countable-explanation.png |
| Continuous Variables | continuous-uncountable.png<br>continuous-variable-types.png<br>continuous-point-vs-interval.png |
| PMF | pmf-die-roll.png<br>pmf-poisson-comparison.png<br>pmf-binomial-comparison.png |
| PDF | pdf-exponential.png<br>pdf-uniform.png<br>pdf-area-under-curve.png |
| CDF | cdf-distributions-comparison.png<br>cdf-properties.png<br>cdf-quantile-function.png |

### Diagram Creation Strategies

When creating diagrams for a new lesson, consider these approaches:

**1. Illustrate key concepts directly**
- PMF lesson: Show PMF for different distributions (die roll, Poisson, Binomial)
- PDF lesson: Show PDF for exponential, uniform, normal with area highlighting
- CDF lesson: Show CDF properties (monotonic, limits, bounds)

**2. Use different examples for each lesson**
- Lesson 1: Website visitors, dice rolls, children counts
- Lesson 2: Height, temperature, response time, stock price
- Lesson 3: λ=2 vs λ=5 Poisson comparison
- Lesson 4: λ=0.5, 1.0, 2.0 exponential comparison

**3. Vary visualization types**
- Bar charts (for discrete distributions)
- Line plots (for continuous functions)
- Multi-panel comparisons (side-by-side or grid layouts)
- Step functions (for discrete CDF)
- Smooth curves (for continuous PDF/CDF)
- Area highlighting (for probability as area under curve)

**4. Include mathematical notation**
- Add formulas directly in diagrams
- Use consistent notation with lesson text
- Label axes clearly
- Include value labels on important points

**5. Reference diagrams strategically**
- Include in lesson text when introducing concepts
- Reference in questions that ask about diagram content
- Ensure diagram filenames are descriptive and unique

### Matplotlib Diagrams

Create elegant, colored diagrams:

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-5, 5, 100)
y = x**2

plt.figure(figsize=(8, 6))
plt.plot(x, y, linewidth=2, color='#3498db')
plt.title('Parabola y = x²', fontsize=14)
plt.xlabel('x', fontsize=12)
plt.ylabel('y', fontsize=12)
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='k', linewidth=0.5)
plt.axvline(x=0, color='k', linewidth=0.5)
plt.savefig('/home/samueldnvn4/.openclaw/workspace/triolingo/diagrams/lesson-name-diagram1.png',
            dpi=150, bbox_inches='tight')
plt.close()
```

**Guidelines:**
- Save to `triolingo/diagrams/` directory
- Use descriptive, lesson-specific filenames
- 150 DPI or higher
- Professional styling (grid, labels, colors)
- Include LaTeX math formulas in diagrams when relevant
- Reference in questions: `diagrams/lesson-name-diagram1.png`

### Diagram References in Questions

**Important:** Diagrams must appear in BOTH lesson content AND questions that reference them.

When a question references a diagram (e.g., "Looking at `diagrams/conditional-tree.png`, what does P(B|A) represent?"), the diagram will automatically render in the question text. The markdown renderer processes backtick-wrapped diagram paths and converts them to `<img>` tags.

**How to reference diagrams:**
- Use backticks around the path: `` `diagrams/prob-die-distribution.png` ``
- This works in both `lessonText` and `question` fields
- The diagram will appear inline with the text
- **Always reference the correct, lesson-specific diagram**

**Example question:**
```json
{
  "id": "prob-2-2-3",
  "type": "multiple-choice",
  "question": "Looking at `diagrams/prob-conditional-tree.png`, what does P(B|A) represent?",
  "options": ["Probability of A given B", "Probability of B given A occurred", ...],
  "correct": 1,
  "explanation": "P(B|A) is shown on the branch from A to B in the tree diagram",
  "xp": 3
}
```

## Diagram Verification Checklist

After creating a lesson with diagrams, verify:

✅ **Diagram uniqueness**
- [ ] Each diagram is specific to this lesson (not reused)
- [ ] Diagram filenames include lesson context (e.g., `pmf-` not `rv-`)
- [ ] No duplicate diagram files across different lessons

✅ **Diagram quality**
- [ ] High resolution (150 DPI or higher)
- [ ] Professional styling (grid, labels, colors)
- [ ] Clear, readable text and labels
- [ ] Appropriate size and aspect ratio

✅ **Diagram content**
- [ ] Illustrates the exact concepts taught in this lesson
- [ ] Includes relevant mathematical notation
- [ ] Uses consistent notation with lesson text
- [ ] Has clear axes labels and titles

✅ **Diagram references**
- [ ] Diagram appears in lesson text where concepts are introduced
- [ ] Questions reference the correct diagram file
- [ ] All diagram files actually exist in `diagrams/` directory
- [ ] Diagram filenames in content match actual files

✅ **No diagram reuse**
- [ ] No diagram appears in multiple lessons
- [ ] Each lesson has its own set of diagrams
- [ ] Old generic diagrams removed (e.g., `rv-*.png`)

**Verification command:**
```bash
# List all diagrams
ls -1 diagrams/*.png | sort

# Check for reuse (should have unique prefixes per lesson)
ls -1 diagrams/*.png | cut -d'-' -f1 | sort | uniq -c
# Each prefix should appear only once
```

## Lesson Flow

TRIOlingO lessons use a two-phase flow:

### Phase 1: Lesson Content
- User sees detailed `lessonText` first
- Text teaches all concepts before testing
- Includes LaTeX math (auto-rendered)
- Includes diagrams (auto-rendered)
- "Start Practice" button to continue

### Phase 2: Questions
- Questions appear one at a time
- Diagrams in questions are rendered inline
- User submits answer
- **Immediate feedback** shows:
  - ✅ Correct or ❌ Incorrect
  - Correct answer for wrong responses
  - Detailed explanation
- "Next Question" button appears after feedback
- Progress tracker shows Question X of N

## Workflow

1. **Understand the lesson topic** - What concepts need to be taught?
2. **Write detailed lesson text** (`lessonText`) - Comprehensive explanation with examples, LaTeX math, diagrams
3. **Plan diagram strategy** - Identify 2-4 unique diagrams needed for this lesson's specific concepts
4. **Create diagrams** - Generate lesson-specific Matplotlib diagrams (no reuse from other lessons)
   - Use lesson-specific filenames (e.g., `pmf-die-roll.png`, not `rv-discrete.png`)
   - Include relevant mathematical notation
   - Ensure diagrams illustrate the exact concepts taught in this lesson
5. **Plan question flow** - Start simple, build complexity
6. **Create questions one by one** - Hand-craft each question
   - Type-in questions for most (50-70%)
   - Mix in some multiple-choice (20-30%)
   - Add code questions for programming topics (15-20%)
   - Reference this lesson's specific diagrams inline in question text
   - Always provide detailed explanations
7. **Add to lessons.json** - Update the JSON storage with correct diagram references
8. **Test** - Verify lesson content displays, questions work, feedback shows, diagrams render correctly

## Question Distribution per Lesson

- **Total:** 15-25 questions
- **Type-in:** 8-15 questions (50-70%)
- **Multiple choice:** 4-8 questions (20-30%)
- **Code** (programming only): 3-5 questions (15-20%)

**XP distribution:**
- Type-in: 3-5 XP each
- Multiple choice: 2-3 XP each
- Code: 8-12 XP each
- Total per lesson: 75-100 XP

## Common Pitfalls

❌ **Don't** batch-generate questions with scripts
❌ **Don't** use JS/Python files to generate content
❌ **Don't** skip the detailed lesson text
❌ **Don't** make multiple choice the majority
❌ **Don't** forget explanations for incorrect answers
❌ **Don't** remove or modify lesson placeholders in app.js
❌ **Don't** use aiAllTopics.js directly - always update lessons.json
❌ **Don't** forget to rebuild aiAllTopics.js after updating lessons.json
❌ **Don't reuse diagrams across lessons** - Each lesson needs unique diagrams

✅ **Do** write each question by hand
✅ **Do** include comprehensive lesson text first
✅ **Do** focus on type-in questions
✅ **Do** provide detailed explanations
✅ **Do** use LaTeX for math (both $ and $$ delimiters work)
✅ **Do** create unique diagrams for each lesson (2-4 diagrams per lesson)
✅ **Do** reference diagrams in both lesson content and questions
✅ **Do** store in lessons.json
✅ **Do** rebuild aiAllTopics.js after updating lessons.json

## App Requirements

The TRIOlingO app expects specific lesson structure and features:

### Required Lesson Fields
Every lesson in `lessons.json` must have:
- `id`: Unique lesson identifier (format: "unit-lesson", e.g., "1-1", "2-3")
- `title`: Lesson title
- `xp`: XP points for completing
- `type`: Always "lesson"
- `lessonText`: Detailed teaching content (can be long, includes LaTeX and diagrams)
- `questions`: Array of question objects

### Required Question Fields
Each question must have:
- `id`: Unique question identifier
- `type`: "typing", "multiple-choice", or "code"
- `question`: The question text (supports LaTeX and diagrams)
- For typing: `correctAnswer` (array of acceptable variations)
- For multiple-choice: `options` (array) and `correct` (index)
- For code: `codeTemplate`, `expectedOutput`, `localLLMGrade`
- `explanation`: Detailed feedback shown after answering
- `xp`: XP points for this question

### App Features Handled Automatically

The app automatically handles:
- **MathJax rendering**: LaTeX math in both lesson content and questions
- **Markdown rendering**: Headers, bold, code blocks, and diagrams
- **Diagram rendering**: `` `diagrams/xxx.png` `` → `<img>` tag
- **Answer feedback**: Shows correct/incorrect with explanations
- **Progress tracking**: Tracks completed lessons and XP
- **Lesson locking**: Lessons without questions are locked (clickable only if has content)

## Updating Lessons: lessons.json → aiAllTopics.js

**Critical:** The TRIOlingO app loads lessons from `questions/aiAllTopics.js`, NOT from `lessons.json` directly. After updating `lessons.json`, you must rebuild `aiAllTopics.js`.

### Process

1. **Update lessons.json** - Add/edit lessons and questions
2. **Rebuild aiAllTopics.js** - Convert lessons.json to app's expected format
3. **Verify** - Check that all lessons appear correctly

### Rebuilding aiAllTopics.js

Use this Python script to convert lessons.json to aiAllTopics.js:

```python
import json

# Load lessons.json
with open('lessons.json', 'r') as f:
    lessons_data = json.load(f)

# Convert to aiAllTopics format
ai_all_topics = {
    "courseName": "AI",
    "units": []
}

for course_id, course in lessons_data['courses'].items():
    for unit in course['units']:
        unit_obj = {
            "unitId": str(unit['id']),
            "unitName": unit['title'],
            "lessons": []
        }
        
        for lesson in unit['lessons']:
            lesson_obj = {
                "id": int(lesson['id'].split('-')[1]),  # Extract number from "1-1" -> 1
                "title": lesson['title'],
                "unitTitle": unit['title'],
                "xp": lesson['xp'],
                "type": lesson['type'],
                "difficulty": "beginner",
                "lessonText": lesson.get('lessonText', ''),
                "questions": lesson['questions']
            }
            unit_obj['lessons'].append(lesson_obj)
        
        ai_all_topics['units'].append(unit_obj)

# Write to aiAllTopics.js
with open('questions/aiAllTopics.js', 'w') as f:
    f.write("// AI - All Topics\n")
    f.write("// Generated from lessons.json\n\n")
    f.write("window.aiAllTopics = ")
    json.dump(ai_all_topics, f, indent=2)
    f.write(";\n")
```

**Important:** Never edit `aiAllTopics.js` directly. Always update `lessons.json` and rebuild.

## Reference: Existing Courses

See [COURSE_STRUCTURE.md](references/COURSE_STRUCTURE.md) for details on existing TRIOlingO course structure and how lessons are organized.

## Reference: Question Patterns

See [QUESTION_PATTERNS.md](references/QUESTION_PATTERNS.md) for examples of effective question patterns across different topic types.

## Reference: Question Templates

See [QUESTION_TEMPLATES.md](references/QUESTION_TEMPLATES.md) for **reusable question templates and schemas** that can be applied to different topics. This is the recommended approach for efficiently creating lessons:

### What Question Templates Are

**Question Templates** are structural patterns (schemas) that can be adapted to different topics - **NOT** programmatic generation or batch creation. Think of them as fill-in-the-blank patterns:

**Template Example:**
```json
{
  "template_id": "typing-formula-application",
  "name": "Formula Application",
  "pattern": {
    "question": "Using the {{formula_name}}, what is {{expression}}?",
    "correctAnswer": ["{{answer_1}}", "{{answer_2}}"],
    "explanation": "The {{formula_name}} states: {{formula}}\nApplying it: {{steps}}",
    "xp": 4
  }
}
```

**Applied to Different Topics:**
- Math: "Using the power rule, what is d/dx(x⁵)?" → "5x⁴"
- Physics: "Using Ohm's law, what is the current if V=12V and R=4Ω?" → "3A"
- ML: "Using cross-entropy, what is the loss for y=1, p̂=0.8?" → "0.22"

### Why Use Templates

**Efficiency:**
- Don't reinvent the wheel for each question
- Quickly adapt proven patterns to new content
- Maintain consistency across lessons

**Quality:**
- Templates are battle-tested structures
- Built-in best practices for explanations
- Appropriate XP values and complexity

**Scalability:**
- Template library covers all common question types
- Easy to add new templates as patterns emerge
- Domain-specific templates for math, programming, languages

### Template Categories

1. **Type-in Templates** (10 templates)
   - Definition Recall, Formula Application, Concept Identification
   - Numerical Computation, Relationship Understanding, Process Description
   - Syntax Knowledge, Value Prediction, Translation
   - Diagram Interpretation

2. **Multiple Choice Templates** (6 templates)
   - Concept Selection, Best Method, False Statement
   - Comparison, Application Scenario, Classification

3. **Code Templates** (4 templates)
   - Simple Function, Loop Implementation, Conditional Logic, Algorithm Implementation

4. **Lesson Templates** (3 pre-built structures)
   - Standard (18 questions, 88 XP)
   - Programming Focus (18 questions, 88 XP)
   - Math Focus (18 questions, 88 XP)

### How to Use Templates

**Step 1:** Select a lesson template (e.g., "Standard Structure")

**Step 2:** For each question in the template, fill in placeholders:
- Replace `{{term}}` with your topic's terminology
- Replace `{{formula}}` with relevant formulas
- Replace `{{answer_1}}`, `{{answer_2}}` with correct answer variations

**Step 3:** Write explanations that reference the filled-in concepts
- Ensure they teach, not just state answers
- Reference the lesson text where possible

**Example Workflow:**

**Create a lesson on "Bayes' Theorem"**

1. Use **Math Focus lesson template** (18 questions)
2. Fill templates with Bayes' Theorem content:
   - T1: Definition Recall → "What is Bayes' Theorem?"
   - T2: Formula Application → "Using Bayes' formula, calculate P(A|B)..."
   - MC1: Concept Selection → "Which describes the prior probability?"
3. Review and adjust difficulty
4. Validate all questions and explanations

### Template Library

The complete template library in [QUESTION_TEMPLATES.md](references/QUESTION_TEMPLATES.md) includes:
- 20+ individual question templates
- 3 complete lesson templates (18 questions each)
- Detailed placeholder descriptions
- Examples for each template
- Progressive difficulty patterns
- Template usage guide
- Best practices for creating new templates

**Important:** Templates are **schemas**, not generators. Each question must still be hand-crafted and reviewed. Templates provide structure and guidance, but human judgment determines the quality of the filled-in content.

### When to Use Templates

✅ **DO use templates when:**
- Creating standard question types (definitions, applications, comparisons)
- Following proven question patterns
- Maintaining consistency across lessons
- Scaling lesson creation for similar topics
- Starting from scratch on a new topic

❌ **DON'T use templates when:**
- The template structure doesn't fit the content
- You need a unique question structure
- Complex multi-part questions don't fit existing patterns
- Creating specialized domain questions (consider adding new template instead)

### Extending the Template Library

When you create a new question pattern that works well:

1. **Document it** as a template in QUESTION_TEMPLATES.md
2. **Define placeholders** clearly (use descriptive names like `{{concept}}`)
3. **Specify domain and complexity**
4. **Provide 2-3 examples** showing applications
5. **Set appropriate XP** value

This way, the template library grows organically based on real lesson creation experience.