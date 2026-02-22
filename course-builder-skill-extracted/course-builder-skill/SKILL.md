---
name: course-builder
description: "Build comprehensive, interactive educational websites from scratch. Use when users request: Creating a complete course on any subject; Building thorough learning materials with lessons and assessments; Developing local educational websites with practice problems and quizzes; Creating training materials that include research, examples, diagrams, and testing. Handles subject research, course structure design, content creation with 500+ problems, interactive systems, and thematic styling."
---

# Course Builder

Build complete, thorough educational courses with hundreds of practice problems, interactive assessments, and polished thematic websites.

## Quick Start

When a user requests a course on a subject:

1. **Clarify requirements** (subject, scope, style preferences)
2. **Research the subject** thoroughly
3. **Plan the course structure** (8-10 modules)
4. **Create the course directory** and infrastructure
5. **Build content module by module** with practice problems
6. **Add assessments** (quizzes, exams)
7. **Test and refine**

## Critical Course Creation Rules

These rules are MANDATORY and must be followed without exception:

### 1. NO EMOJOS

Emojis are never allowed in any course content. This includes:
- Lesson pages
- Practice problems and feedback
- Quiz questions and explanations
- Navigation elements
- Any instructional content

### 2. COMPLETE COURSES ONLY

When a user asks you to make a course, you MUST create the ENTIRE course. This is non-negotiable:

- All modules must be fully complete
- All lessons within every module must be complete and thorough
- No placeholder pages, no "coming soon", no exceptions
- Every HTML page must be fully written with actual content
- All practice problems must be included in the JavaScript files
- All quizzes must be fully populated with questions

**NO PARTIAL COURSES.** If you're asked to create a course, the final result must be a complete, fully-functional educational website with all content written out.

### 3. COMPLETENESS CHECKLIST

Before considering a course finished, ensure:
- Every module HTML file exists and is complete (no empty or placeholder files)
- Every lesson page has full content, not just "Lesson 1" headings
- All practice problem arrays are populated with actual problems (50-100+ per module)
- All quiz arrays have questions (8-15 per module, 20-30 for final)
- Every section has substantive explanations, examples, and content
- No pages are "non-existent" or marked as "to be added later"

### 4. WHOLE-COURSE APPLICATION

If the user requests changes to the course:
- Apply changes to ALL modules
- Apply changes to ALL lessons
- Apply changes to ALL practice problems
- Apply changes to ALL quizzes
- No selective or partial updates unless explicitly requested

### 5. MATH RENDERING

When any course involves mathematical content:
- Use LaTeX-style rendering for all mathematical expressions
- Use MathJax, KaTeX, or similar in the HTML template
- Format equations properly with appropriate delimiters:
  - $$E = mc^2$$ for block equations
  - $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ for inline equations
- Ensure all formulas are properly rendered, not plain text
- Test that all mathematical notation displays correctly in the browser

**Failure to follow these rules results in an incomplete course.** Always deliver full, complete courses with all content written out.

Use the **Calculus III course** in `assets/course-template/` as your primary reference—it's a fully functional example.

## Course Planning

### Step 1: Understand Requirements

Ask clarifying questions:
- What specific subject/topic?
- Target audience level (beginner, intermediate, advanced)?
- Scope: comprehensive overview or specialized deep-dive?
- Style/theme preferences (professional, playful, construction theme, etc.)?
- Any specific focus areas or applications?
- How many practice problems desired (default: 300-500+)?

### Step 2: Subject Research

**Research Strategy:**
1. Search for comprehensive course syllabuses (university sources)
2. Find authoritative textbooks/curriculum guidelines
3. Identify key topics and their relationships
4. Gather multiple explanations for each concept
5. Find real-world applications and examples

**Search query patterns:**
- "[subject] complete course syllabus"
- "[subject] comprehensive guide"
- "[subject] applications in [field]"
- "[specific topic] explanation"
- `site:edu "[subject] course"`

See [content-research.md](references/content-research.md) for detailed research methodology.

### Step 3: Structure the Course

**Standard Course Layout:**
- **Module 1**: Foundations & Prerequisites (10% of content)
- **Modules 2-7**: Core Topics (70% of content)
- **Module 8**: Applications & Advanced Topics (15% of content)
- **Final**: Review & Assessment (5% of content)

**Each Module Structure:**
1. Introduction & learning objectives
2. Concept explanations (3-5 subsections)
3. Examples and demonstrations
4. Practice problems (progressive difficulty)
5. Module quiz (8-15 questions, 70%+ to pass)

See [course-structure.md](references/course-structure.md) for complete course planning framework.

## Content Creation

### Course Infrastructure

**File structure:**
```
course-name/
├── index.html                 # Homepage with navigation
├── css/
│   └── styles.css            # Theme styling
├── js/
│   ├── navigation.js         # Progress tracking
│   ├── problems.js           # Problem database
│   ├── quizzes.js            # Quiz system
│   └── diagrams.js           # Visualizations
├── lessons/
│   ├── 01-foundations.html   # Module 1
│   ├── 02-topic1.html        # Module 2
│   └── 08-final.html         # Last module
├── practice/
│   └── [topic]-problems.html # Practice pages
├── exams/
│   ├── midterm.html
│   └── final.html
└── README.md
```

**IMPORTANT - Math Rendering:**
For any course with mathematical content, you must include a math rendering library in your HTML templates. Add this to `<head>` in all HTML files:

```html
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

Then use LaTeX syntax for all math content:
- Inline: $E = mc^2$
- Block: $$\int_a^b f(x) dx = F(b) - F(a)$$
- Fractions: $\frac{a}{b}$
- Subscripts/superscripts: $x^2$, $y_i$
- Square roots: $\sqrt{x}$
- Summation: $\sum_{i=1}^{n}$

**Start by copying template:**
```bash
# Copy the Calculus III template as a starting point
cp -r assets/course-template/* course-name/
```

### Module-by-Module Creation

**For each module:**

1. **Create HTML file** (use `lessons/01-introduction.html` template)
2. **Add content sections:**
   - Overview/introduction
   - Each concept with explanation
   - Examples with step-by-step solutions
   - Practice problems (50-100 per module)
3. **Add quiz questions** to `js/quizzes.js`
4. **Add practice problems** to `js/problems.js`
5. **Create diagrams** (when needed) in `js/diagrams.js`

**Content Guidelines:**

- **Thorough explanations**: 500-1000+ words per concept
- **Multiple examples**: Minimum 3 examples per concept
- **Progressive difficulty**: Easy → Medium → Hard
- **Practice problems**: 50-100+ per module (total: 300-500+)
- **Immediate feedback**: All problems have hints and explanations
- **Visual aids**: Diagrams for 3D/spatial concepts

### Problem Database Structure

**Problem format:**
```javascript
practiceProblems.moduleName.categoryName = [
    {
        id: 'M-N',              // Module-Number
        type: 'derivative',     // Problem type
        difficulty: 'easy',     // easy/medium/hard
        question: 'What is the derivative of f(x) = x³?',
        answer: '3x^2',
        alternatives: ['3*x^2', '3x²'],  // Acceptable variations
        hint: 'Use the power rule: d/dx(x^n) = nx^(n-1)',
        explanation: 'Applying power rule: d/dx(x³) = 3x^(3-1) = 3x²'
    }
];
```

**Problem types:**
- **Computational**: Calculate/solve/find
- **Conceptual**: Explain/compare/analyze
- **Application**: Real-world scenarios
- **Proof/Derivation**: Justify/derive (for math/technical subjects)

**Difficulty distribution:**
- 30% Easy (direct application)
- 50% Medium (some thinking required)
- 20% Hard (multi-step, challenging)

### Quiz Creation

**Quiz format:**
```javascript
const quizQuestions.moduleName = [
    {
        id: 'Q1',
        question: 'Question text?',
        options: [
            'A. Option 1',
            'B. Option 2', 
            'C. Option 3',
            'D. Option 4'
        ],
        correct: 'B',
        explanation: 'Why B is correct, why others are wrong'
    }
];
```

**Quiz requirements:**
- 8-15 questions per module
- Mix of computational, conceptual, application
- 70%+ to pass
- Detailed explanations for all answers

**Final exam:**
- 20-30 questions
- 60-90 minutes
- 90%+ for mastery

## Theme & Styling

### Customizing the Theme

**Edit css/styles.css:**
```css
:root {
    --primary-color: #FFD700;      /* Main accent color */
    --secondary-color: #FFC107;    /* Secondary accent */
    --background-dark: #1a1a1a;    /* Dark background */
    --background-medium: #2d2d2d;  /* Medium background */
    --text-light: #f5f5f5;         /* Light text */
    --success: #4CAF50;            /* Success/correct */
    --error: #F44336;              /* Error/incorrect */
}
```

**Theme suggestions:**
- **Scientific/Technical**: Blue/gray, clean lines
- **Nature/Environment**: Greens/browns, organic feel
- **Space/Adventure**: Purples/blues, cosmic
- **Construction/Industrial**: Yellows/oranges, geometric
- **Academic/Formal**: Navy/black, serif fonts
- **Playful/Kids**: Bright colors, fun icons

### Theme Elements to Customize

1. **Colors** (CSS variables)
2. **Patterns** (stripes, grids, gradients)
3. **Icons** (emoji or Unicode characters)
4. **Section dividers** (construction tape, waves, borders)
5. **Warning/caution boxes**
6. **Formula/example box styles**
7. **Navigation button styles

## Interactive Features

### Required Features

All courses must include:

**Progress Tracking**: Saves to LocalStorage
**Instant Feedback**: On all practice problems
**Hints Available**: For difficult problems
**Explanations**: Detailed for all solutions
**Module Quizzes**: With scoring and pass threshold
**Final Exam**: Comprehensive assessment
**Navigation**: Smooth transitions between modules
**Responsive Design**: Works on mobile devices

### Optional Enhancements

- **Adaptive difficulty**
- **Progress dashboards**
- **Achievement badges**
- **Discussion sections**
- **Video tutorials**
- **Audio explanations**
- **AI tutoring integration**

## Testing & Quality Assurance

### Content Verification

**Before completing, verify:**

- [ ] All formulas are correct **and tested**
- [ ] All practice problems have correct answers
- [ ] All quiz answers are accurate
- [ ] Explanations are clear and helpful
- [ ] Examples work and are well-explained
- [ ] No typos or confusing phrasing
- [ ] Topics follow logical progression
- [ ] Content is comprehensive (no major gaps)
- [ ] All mathematical notation uses LaTeX/MathJax format
- [ ] NO emojis anywhere in the course content

**BUT ALSO verify completeness:**
- [ ] ALL module HTML files exist (no missing files)
- [ ] ALL lesson pages have full content (not just headings)
- [ ] ALL practice problem arrays are fully populated
- [ ] ALL quiz arrays have adequate question counts
- [ ] NO placeholder or "coming soon" pages
- [ ] Course is actually complete, not just started

### Technical Testing

**Test the entire system:**

- [ ] All interactive elements work
- [ ] Progress tracking functions correctly
- [ ] Navigation smooth between sections
- [ ] No browser console errors
- [ ] Responsive on different screen sizes
- [ ] Practice problems accept correct alternatives
- [ ] Quiz scoring is accurate
- [ ] All links work
- [ ] All mathematical equations render correctly
- [ ] NO emojis appear anywhere in the interface

### User Testing Checklist

**Simulate user experience:**

- [ ] Can a beginner understand Module 1?
- [ ] Are explanations too brief or too verbose?
- [ ] Do examples clarify concepts?
- [ ] Are practice problems appropriately challenging?
- [ ] Are hints helpful without giving answers?
- [ ] Is feedback clear and actionable?
- [ ] Is navigation intuitive?
- [ ] Is the visual style appealing?
- [ ] Are all mathematical formulas clearly displayed?
- [ ] Is there any emoji usage in content? (answer should be NO)

## Common Patterns

### Problem Checking Function

```javascript
function checkProblem(problemId, correct, alternatives, inputId) {
    const input = document.getElementById(inputId).value.trim().toLowerCase();
    const feedback = document.getElementById(inputId + '-feedback');
    
    const normalized = input.replace(/\s/g, '');
    const normalizedCorrect = correct.toLowerCase().replace(/\s/g, '');
    
    let isCorrect = normalized === normalizedCorrect || 
                   alternatives.some(alt => 
                       alt.toLowerCase().replace(/\s/g, '') === normalized
                   );
    
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct!';
        feedback.style.display = 'block';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Try again!';
        feedback.style.display = 'block';
    }
}
```

### Section Navigation

```javascript
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
```

### Quiz Submission

```javascript
function submitQuiz(correctAnswers) {
    let score = 0;
    for (let q in correctAnswers) {
        if (quizAnswers[q] === correctAnswers[q]) {
            score++;
        }
    }
    const percentage = Math.round((score / total) * 100);
    // Display results...
}
```

## Reference Materials

### Detailed Guides

- **[course-structure.md](references/course-structure.md)** - Complete course planning and organization framework
- **[content-research.md](references/content-research.md)** - Research methodology and content creation best practices

### Template Reference

- **`assets/course-template/`** - Complete, working Calculus III course with:
  - Full CSS styling system
  - Interactive problem checking
  - Progress tracking system
  - Quiz system
  - Canvas diagrams
  - 100+ problems and explanations

Use this as your primary template and copy/modify as needed.

## Quality Standards

### Completeness

A "comprehensive" course includes:
- All major topics in the subject
- Prerequisites clearly stated
- Progression from basic to advanced
- Multiple perspectives/approaches
- Real-world applications
- Common misconceptions addressed
- 300-500+ practice problems
- Assessments at each module
- Final comprehensive exam
- All lessons fully written and complete
- All pages exist with actual content (no placeholders)

### Thoroughness

For each concept:
- Clear definition and explanation
- Why it matters/when to use it
- Multiple examples (minimum 3)
- Step-by-step solutions
- Alternative methods when applicable
- Connections to other topics
- Practice problems (10-20+ per concept)
- For math: Proper LaTeX formatting for all equations

### Engagement

- Active learning (problems throughout, not just end)
- Visual diagrams for spatial/complex concepts
- Real-world examples and applications
- Interesting examples, not just abstract
- Encouraging, supportive tone
- Clear feedback that helps learning
- NO emojis in any feedback or content

## Troubleshooting

### Common Issues

**Progress not saving?**
- Ensure LocalStorage is enabled
- Check for JavaScript errors in console
- Verify correct function calls

**Diagrams not rendering?**
- Check canvas element exists
- Ensure drawDiagrams() is called
- Verify no JavaScript errors

**Quiz not scoring correctly?**
- Check answer format matches
- Verify question IDs match database
- Ensure correct letter format (A, B, C, D)

**Problems too easy/hard?**
- Review difficulty distribution
- Add more problems at appropriate level
- Adjust problem types

## Expansion Guidelines

To expand a completed course:

1. **Add more practice problems** (aim for 100+ per module)
2. **Add more examples** for difficult concepts
3. **Create additional subsections** for complex topics
4. **Add "advanced" extensions** for mastery
5. **Create dedicated practice pages** for each major topic
6. **Add more quiz questions** (increase pool)
7. **Include more real-world applications**
8. **Add multi-media** (optional: video, audio, animations)

---

**Remember**: A great course = accurate content + comprehensive coverage + clear explanations + abundant practice + interactive feedback + polished presentation + COMPLETE (no partial courses) + NO emojis + proper math rendering!