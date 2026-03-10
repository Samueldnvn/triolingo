# TRIOlingO App Features and Requirements

This document describes the TRIOlingO app's features and what lessons need to work correctly.

## Lesson Flow

### Two-Phase Structure

TRIOlingO lessons use a two-phase flow:

1. **Content Phase** (`lessonPhase = 'content'`)
   - Shows detailed `lessonText`
   - Renders LaTeX math (MathJax)
   - Renders diagrams inline
   - "Start Practice" button to continue

2. **Questions Phase** (`lessonPhase = 'questions'`)
   - Shows questions one at a time
   - Renders LaTeX in questions
   - Renders diagrams referenced in questions
   - User submits answer
   - Shows feedback (correct/incorrect + explanation)
   - "Next Question" button

## MathJax Configuration

The app uses MathJax 3 for rendering LaTeX math.

### Configuration (index.html)

```javascript
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    renderActions: {
      addMenu: []
    }
  },
  startup: {
    typeset: false
  }
};
```

### Supported Delimiters

- **Inline math**: `$x^2$` or `\\(x^2\\)`
- **Display math**: `$$x^2$$` or `\\[x^2\\]`

**Important:** Both `$` and `$$` delimiters work for inline and display math respectively.

### MathJax Typeset Trigger

MathJax is manually triggered after rendering lesson content:

```javascript
if (window.MathJax && window.MathJax.typesetPromise) {
  window.MathJax.typesetPromise().then(() => {
    console.log('MathJax typeset complete');
  });
}
```

## Markdown Renderer

The app has a custom markdown renderer that processes lesson text and question text.

### Processing Order (Critical!)

The renderer processes in this specific order:

1. **Store LaTeX equations** (preserves `$$...$$` and `$...$`)
2. **Process headers** (`#`, `##`, `###`)
3. **Process bold/italic** (`**text**`, `*text*`)
4. **Process lists** (`- item`)
5. **Process code blocks** (```code```)
6. **Process diagrams** (`` `diagrams/xxx.png` ``) ← Must come before inline code!
7. **Process inline code** (`` `code` ``)
8. **Restore LaTeX equations**
9. **Wrap paragraphs**

**Why this order matters:** Diagram references use backticks (`` `diagrams/xxx.png` ``). If inline code is processed first, the diagram reference becomes `<code>diagrams/xxx.png</code>` instead of an `<img>` tag.

### Diagram References

**Format:** `` `diagrams/filename.png` ``

**Example:**
```
Looking at `diagrams/prob-die-distribution.png`, what is the probability?
```

**Becomes:**
```html
Looking at <img src="diagrams/prob-die-distribution.png" class="lesson-diagram" alt="prob-die-distribution diagram">, what is the probability?
```

**CSS class:** `.lesson-diagram` (styled in styles.css)

## Answer Feedback System

### Feedback Flow

1. User selects answer or types answer
2. User clicks "Submit Answer"
3. App validates answer:
   - Multiple choice: Check if `selectedAnswer === question.correct`
   - Typing: Check if user input matches any in `question.correctAnswer`
4. App displays feedback:
   - ✅ Correct: Shows "Correct!" icon, may show explanation
   - ❌ Incorrect: Shows "Incorrect" icon, correct answer, and explanation
5. Button changes to "Next Question"
6. User clicks "Next Question"
7. Moves to next question or completes lesson

### Feedback HTML Structure

```html
<div class="answer-feedback correct">
  <div class="feedback-icon">✅</div>
  <div class="feedback-content">
    <h3>Correct!</h3>
    <p class="explanation"><strong>Great job!</strong> Explanation text...</p>
  </div>
</div>

<!-- OR -->

<div class="answer-feedback incorrect">
  <div class="feedback-icon">❌</div>
  <div class="feedback-content">
    <h3>Incorrect</h3>
    <p class="correct-answer"><strong>Correct answer:</strong> Option text</p>
    <p class="explanation"><strong>Explanation:</strong> Why this is correct</p>
  </div>
</div>
```

### Feedback CSS

```css
.answer-feedback.correct {
  background: rgba(76, 175, 80, 0.1);
  border-color: var(--success);
}

.answer-feedback.incorrect {
  background: rgba(244, 67, 54, 0.1);
  border-color: var(--error);
}
```

## Question Types

### Multiple Choice

**Rendered as:** Vertical layout (`.options-vertical` class)

**HTML:**
```html
<div class="options-vertical">
  <button class="option-btn">Option 1</button>
  <button class="option-btn selected">Option 2</button>
  <button class="option-btn">Option 3</button>
  <button class="option-btn">Option 4</button>
</div>
```

**Selection updates:** The `selectAnswer()` function updates visual selection without full re-render for smoother UX.

### Typing Questions

**Rendered as:** Text input field

**HTML:**
```html
<div class="typing-question">
  <p class="question-text">Question text...</p>
  <input type="text" class="typing-input" placeholder="Type your answer...">
</div>
```

**CSS:** `.typing-input` with focus states

**Validation:** Case-insensitive comparison against `correctAnswer` array

### Code Questions

**Rendered as:** Textarea with code template pre-filled

**Validation:** Expected output comparison or LLM grading (not fully implemented yet)

## Lesson Locking

### Locking Logic

```javascript
function isLessonLocked(courseId, lessonId) {
  const lesson = findLesson(courseId, lessonId);
  if (!lesson) return true;

  // Lessons without content are ALWAYS locked
  if (!lessonHasContent(lesson)) {
    return true;
  }

  // Lessons WITH content are ALWAYS unlocked
  return false;
}
```

**Behavior:**
- Lessons with `questions.length > 0` → Clickable (📚 icon)
- Lessons with `questions.length === 0` → Locked (🔒 icon, disabled button)
- No sequential progression requirement - any lesson with content is clickable

## Data Flow

### Load Sequence

1. `index.html` loads
2. MathJax loads
3. `aiAllTopics.js` loads → `window.aiAllTopics`
4. User navigates to Learn view
5. App renders units and lessons from `window.aiAllTopics`

### Lesson Start

1. User clicks lesson card
2. `startLesson(lessonId)` finds lesson in `window.aiAllTopics`
3. Checks if lesson has content (rejects if empty)
4. Sets `currentLesson`, `lessonPhase = 'content'`
5. `renderView('lesson')` renders lesson content
6. MathJax typeset triggered

### Question Flow

1. User clicks "Start Practice"
2. `lessonPhase = 'questions'`, `currentQuestionIndex = 0`
3. `renderView('lesson')` renders first question
4. User selects/inputs answer
5. User clicks "Submit Answer"
6. `submitAnswer()` validates and sets `currentAnswerFeedback`
7. `renderView('lesson')` re-renders with feedback
8. User clicks "Next Question"
9. `submitAnswer()` moves to next question
10. Repeat until lesson complete

## File Structure

```
triolingo/
├── index.html              # Main HTML, loads MathJax
├── app.js                  # Application logic
├── styles.css              # Styling
├── questions/
│   └── aiAllTopics.js      # Lesson data (generated from lessons.json)
├── diagrams/               # Lesson diagrams (PNG files)
└── lessons.json            # Source of truth for lesson content
```

## Key Functions

### renderView()
Main view router. Handles rendering all views and triggers MathJax typeset for lesson view.

### renderLessonContent()
Renders the lesson text phase. Calls `renderMarkdownContent()` on `lessonText`.

### renderMarkdownContent(text)
Custom markdown renderer. Processes LaTeX, diagrams, markdown syntax in specific order.

### renderQuestion(question)
Router for question types. Calls specific renderer based on `question.type`.

### renderMultipleChoiceQuestion(question)
Renders multiple choice with vertical options layout.

### renderTypingQuestion(question)
Renders typing input field.

### submitAnswer()
Validates answer, shows feedback, manages state.

### startLesson(lessonId)
Finds and starts lesson, checks for content.

### selectAnswer(index)
Updates selected option visual state.

## CSS Classes

### Lesson Content
- `.lesson-view` - Main lesson container
- `.lesson-content` - Content phase container
- `.lesson-title` - Lesson title
- `.lesson-text-content` - Rendered lesson text
- `.lesson-diagram` - Diagram images

### Questions
- `.question-container` - Question area
- `.question-text` - Question text (rendered)
- `.options-vertical` - Vertical MC options layout
- `.option-btn` - Option button
- `.option-btn.selected` - Selected state
- `.typing-input` - Typing field

### Feedback
- `.answer-feedback` - Feedback container
- `.answer-feedback.correct` - Correct answer style
- `.answer-feedback.incorrect` - Incorrect answer style
- `.feedback-icon` - ✅ or ❌ icon
- `.correct-answer` - Correct answer text
- `.explanation` - Explanation text

## Requirements Summary

### Lesson Requirements

- `lessonText`: Must be comprehensive teaching content
- `questions`: Must have at least one question to be clickable
- `id`: Must be unique within course

### Question Requirements

- `explanation`: Required for feedback
- `question`: Supports LaTeX and diagram references
- `correctAnswer` / `options` + `correct`: Required based on type

### Diagram Requirements

- Format: PNG files
- Location: `diagrams/` directory
- Reference: `` `diagrams/filename.png` `` (backticks)
- Works in: Both `lessonText` and `question` fields

### Math Requirements

- Use LaTeX syntax
- Delimiters: `$` for inline, `$$` for display
- Auto-rendered by MathJax
- Works in: Both `lessonText` and `question` fields