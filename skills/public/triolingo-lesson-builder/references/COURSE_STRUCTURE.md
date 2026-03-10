# TRIOlingO Course Structure

This reference details the existing TRIOlingO course structure and how lessons are organized in the system.

## Course IDs

Currently available courses:

| Course ID | Name | Flag | Units |
|-----------|------|------|-------|
| `french` | French | 🇫🇷 | 1 (Basics) |
| `spanish` | Spanish | 🇪🇸 | 1 (Basics) |
| `linearAlgebra` | Linear Algebra | 📐 | 1 (Basics) |
| `cpp` | C++ | ⚡ | 1 (Basics) |
| `ai` | Artificial Intelligence | 🤖 | 1 (Introduction) |
| `hexapod` | Hexapod Engineering | 🦗 | 1 (Introduction) |
| `calculus` | Calculus | ∫ | 4 (Limits, Derivatives, Integration, Applications) |

## Unit Structure

Each course contains units with the following structure:

```json
{
  "id": 1,
  "title": "Unit Title",
  "description": "Brief description of unit content",
  "lessons": [...]
}
```

## Lesson Structure

Each lesson in a unit has:

```json
{
  "id": "unit-lesson",
  "title": "Lesson Title",
  "xp": 75,
  "type": "lesson",
  "lessonText": "Comprehensive explanation...",
  "questions": [...]
}
```

## Question Structure

Each question in a lesson has:

### Type-in Question
```json
{
  "id": "unique-id",
  "type": "typing",
  "question": "Question text with LaTeX $x^2$",
  "correctAnswer": ["answer1", "answer2"],
  "explanation": "Detailed explanation...",
  "xp": 5
}
```

### Multiple Choice Question
```json
{
  "id": "unique-id",
  "type": "multiple-choice",
  "question": "Question text",
  "options": ["A", "B", "C", "D"],
  "correct": 0,
  "explanation": "Why correct",
  "xp": 3
}
```

### Code Question
```json
{
  "id": "unique-id",
  "type": "code",
  "question": "Write a function...",
  "codeTemplate": "// template\n",
  "expectedOutput": "output",
  "explanation": "Explanation...",
  "xp": 10,
  "localLLMGrade": true
}
```

## Lesson Placeholders in app.js

The `app.js` file contains lesson placeholders that should NOT be modified. These define the course structure and navigation.

**Do NOT touch** the `courses` object in `app.js`. All lesson content goes into `lessons.json`.

## File Locations

- **Main app:** `/home/samueldnvn4/.openclaw/workspace/triolingo/app.js`
- **Lesson storage:** `/home/samueldnvn4/.openclaw/workspace/triolingo/lessons.json`
- **Diagrams:** `/home/samueldnvn4/.openclaw/workspace/triolingo/diagrams/`

## Course Organization

### Language Courses (French, Spanish)
- Unit 1: Basics
  - Greetings, numbers, basic phrases
  - Grammar fundamentals
  - Simple vocabulary

### Technical Courses

#### Calculus (∫ flag)
- Unit 1: Limits
  - Understanding limits
  - Calculating limits
- Unit 2: Derivatives
  - Introduction to derivatives
  - Power rule practice
- Unit 3: Integration
  - Introduction to integration
  - Definite integrals
- Unit 4: Applications
  - Rates of change
  - Optimization problems

#### Linear Algebra (📐 flag)
- Unit 1: Basics
  - Vectors and operations
  - Matrices and operations

#### C++ (⚡ flag)
- Unit 1: Basics
  - Hello World
  - Basic syntax

#### AI (🤖 flag)
- Unit 1: Introduction
  - What is AI?
  - AI applications

#### Hexapod Engineering (🦗 flag)
- Unit 1: Introduction
  - What is a hexapod?
  - Robot basics

## Adding New Lessons

When adding lessons to an existing course:

1. Identify the correct `courseId` and `unitId`
2. Add to the `lessons` array in `lessons.json`
3. Ensure `id` follows `unit-lesson` pattern
4. Set appropriate XP (75-100 typically)
5. Include comprehensive `lessonText`
6. Add 15-25 questions
7. Test that lesson appears in the app

## Creating New Courses

To create a new course:

1. Add course structure to `app.js` (if needed for navigation)
2. Add course content to `lessons.json`
3. Create units and lessons following the structure
4. Ensure consistent formatting
5. Test course appears and works

## XP Guidelines

Per lesson: 75-100 XP total
- Type-in questions: 3-5 XP each
- Multiple choice: 2-3 XP each
- Code questions: 8-12 XP each

Rough distribution for 20-question lesson:
- 12 type-in × 4 XP = 48 XP
- 5 multiple choice × 3 XP = 15 XP
- 3 code × 10 XP = 30 XP
- Total: 93 XP