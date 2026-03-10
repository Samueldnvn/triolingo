# Triolingo

A Duolingo-clone desktop app for learning skills, built with Electron.

## Features

- Clean white interface **with 6 beautiful themes** (white, dark, blue, forest, purple, sunset) ✨
- Local progress persistence
- Multiple language/skill support (easily extensible)
- Lesson-based learning with multiple-choice and interactive questions
- XP system and progress tracking
- **Sound effects system** with multiple sound packs 🔊
- **Sound settings** to enable/disable and change sounds
- **Two complete courses**: French and Spanish 🇫🇷🇪🇸
- **Theme switching** with visual previews
- Responsive design

## Installation & Running

1. Install dependencies:
```bash
cd triolingo
npm install
```

2. Start the app:
```bash
npm start
```

For development (opens DevTools):
```bash
npm run dev
```

## Structure

```
triolingo/
├── main.js                  # Electron main process
├── index.html               # Main UI
├── app.js                   # Frontend logic and course data
├── lessonGenerators.js      # Vocab DB + question generators
├── soundManager.js          # Sound effects system
├── styles.css               # Plain white theme (base)
├── package.json             # Dependencies and scripts
├── SOUND_SYSTEM.md          # Sound system documentation
└── README.md                # This file
```

## Adding New Courses/Skills

The course system is now **modular**. Courses are defined in `app.js` but use the template system from `lessonGenerators.js`.

### Step 1: Add Vocabulary Database

In `lessonGenerators.js`, add your vocab to `vocabDatabase`:

```javascript
vocabDatabase.spanish = {
  greetings: [
    { spanish: 'Hola', english: 'Hello', type: 'greeting' },
    { spanish: 'Adiós', english: 'Goodbye', type: 'greeting' }
  ],
  numbers: [
    { spanish: 'uno', english: 'one', type: 'number' },
    { spanish: 'dos', english: 'two', type: 'number' }
  ]
};
```

### Step 2: Define Course Using Templates

In `app.js`, add the course using `LessonTemplate`:

```javascript
courses.spanish = {
  id: 'spanish',
  name: 'Spanish',
  flag: '🇪🇸',
  units: [
    {
      id: 1,
      title: 'Basics',
      description: 'Learn essential Spanish',
      lessons: [
        // Translation lessons
        LessonTemplate.translation('spanish', 1, 1, 'Greetings', ['greetings'], 6),
        LessonTemplate.translation('spanish', 1, 2, 'Numbers', ['numbers'], 6),

        // Match pairs (drag and drop style)
        LessonTemplate.matchPairs('spanish', 1, 3, 'WordMatcher', ['greetings', 'numbers'], 5),

        // Fill in the blank
        LessonTemplate.fillInBlank('spanish', 1, 4, 'FillBlanks', ['greetings'], 5),

        // Mixed question types for review
        LessonTemplate.mixed('spanish', 1, 5, 'Basics Review', ['greetings', 'numbers'], 8)
      ].filter(l => l !== null)
    }
  ]
};
```

### Step 3: Add to Language Selector

Add the course to `<select id="languageSelect">` in `index.html`:

```html
<select id="languageSelect">
  <option value="french">French</option>
  <option value="spanish">Spanish</option>
</select>
```

That's it! The lesson generators will create questions automatically from your vocab lists.

For detailed documentation, see `MODULAR_LESSONS.md`

## Question Types

The modular system supports multiple question types:

1. **Translation** - Standard multiple choice: "Translate: Bonjour"
2. **Reverse Translation** - English to target language
3. **Match Pairs** - Duolingo-style drag and drop matching
4. **Fill in the Blank** - Complete sentences with missing words
5. **Mixed** - Randomly generated mix of question types

All question types are generated automatically from your vocabulary lists!

## Custom Questions

For lessons that don't fit the vocab-based system (grammar rules, special concepts), use custom lessons:

```javascript
LessonTemplate.custom(
  'french',        // course ID
  1,               // unit ID
  22,              // lesson ID
  'Verb Conjugation',  // title
  '📝',            // icon
  [                // custom questions array
    {
      type: 'translation',
      question: 'Which means "I am"?',
      options: ['Je suis', 'Tu es', 'Il est', 'Nous sommes'],
      correct: 0
    }
  ]
);
```

See `GENERATOR_REFERENCE.md` for complete API documentation.

## Progress Data

Progress is stored locally:
- **Desktop app:** Saved to `%APPDATA%/triolingo/progress.json` (Windows) or `~/Library/Application Support/triolingo/progress.json` (macOS)
- **Browser testing:** Saved to `localStorage`

Progress includes:
- Completed lessons
- Total XP per course
- Current streak
- Last active lesson

## Future: Theming System

The CSS uses CSS variables (`--bg-primary`, `--text-primary`, etc.) which makes it easy to add multiple themes. Future settings can change these variables dynamically to create different color schemes without modifying the CSS files.

Example theme variables:
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --accent: #58cc02;
}
```

To add a dark theme, change these values and apply them via JavaScript when selected in settings.

## Current Content

### French Course 🇫🇷

**4 units with 21 total lessons (using modular lesson system)**:

**Unit 1: Basics** (6 lessons)
- Greetings (translation)
- Numbers 1-10 (translation)
- Colors (translation)
- WordMatcher (match pairs - drag and drop)
- FillBlanks (fill-in-the-blank)
- Basics Review (mixed question types)

**Unit 2: Family & People** (5 lessons)
- Family Members (translation)
- Match Family (match pairs)
- Pronouns (translation)
- Possessives (fill blanks)
- Family Review (mixed)

**Unit 3: Food & Verbs** (6 lessons)
- Food Basics (translation)
- Meals (translation)
- Match Food (match pairs)
- Common Verbs (translation)
- Verbs in Context (fill blanks)
- Food Review (mixed)

**Unit 4: Advanced Basics** (4 lessons)
- All Vocab (comprehensive review)
- Speed Match (pairs)
- Quick Blanks
- Final Review

### Spanish Course 🇪🇸

**4 units with 21 total lessons (using modular lesson system)**:

**Unit 1: Basics** (6 lessons)
- Greetings (Hola, Adiós, Buenos días...)
- Numbers 1-10
- Colors (rojo, azul, verde...)
- WordMatcher (match pairs)
- FillBlanks
- Basics Review

**Unit 2: Family & People** (5 lessons)
- Family Members (madre, padre, hermano...)
- Match Family
- Pronouns (yo, tú, usted, nosotros...)
- Possessives (mi, tu, su...)
- Family Review

**Unit 3: Food & Verbs** (6 lessons)
- Food Basics (pan, agua, leche...)
- Meals (desayuno, almuerzo, cena...)
- Match Food
- Common Verbs (ser, estar, tener, ir...)
- Verbs in Context
- Food Review

**Unit 4: Spanish Boosters** (4 lessons)
- All Vocab (70+ words, 8 categories)
- Speed Match
- Quick Blanks
- Final Review

**Total Statistics:**
- 2 languages (French, Spanish)
- 8 units total
- 42 lessons total
- 210+ questions
- 6 themes
- 3 sound packs

Each lesson's XP varies based on question count and difficulty.

## Modular Lesson System

The new modular system makes it incredibly easy to create lessons:

```javascript
// Add vocabulary
vocabDatabase.french.mywords = [
  { french: 'chat', english: 'cat', type: 'animal' },
  { french: 'chien', english: 'dog', type: 'animal' }
];

// Create lessons from that vocab
LessonTemplate.translation('french', 1, 1, 'Animals', ['mywords'], 8);
LessonTemplate.matchPairs('french', 1, 2, 'Match Animals', ['mywords'], 6);
```

See `MODULAR_LESSONS.md` for complete documentation on the modular system.

See `GENERATOR_REFERENCE.md` for a quick reference of all question generators.

## Theme System ✨

Triolingo includes a beautiful theme system with 6 options:

| Theme | Description | Vibe |
|-------|-------------|------|
| Plain White | Clean white interface | Classic |
| Dark | Easy on the eyes | Night |
| Ocean Blue | Calm blue tones | Relaxing |
| Forest Green | Natural palette | Fresh |
| Royal Purple | Elegant purple | Sophisticated |
| Warm Sunset | Warm orange/pink | Cheerful |

### Customize Themes

Go to **Settings → Appearance** to:
- View all themes with visual previews
- Click to switch instantly
- Active theme is marked with badge
- Theme persists across sessions

Themes use CSS variables for easy customization and smooth transitions.

## Sound System 🔊

Triolingo includes a comprehensive sound system with:

- Sound effects for correct/incorrect answers
- Button click sounds
- Lesson completion sounds
- Multiple sound packs (Default, Minimal, Bouncy)
- Sound preview in settings
- Toggle sounds on/off

### Sound Packs

| Pack | Description | Vibe |
|------|-------------|------|
| Default | Balanced pop sounds | Familiar |
| Minimal | Subtle, gentle | Quiet |
| Bouncy | Fun, energetic | Playful |

### Customize Sounds

Go to **Settings → Sound Settings** to:
- Toggle sounds on/off
- Change sound pack
- Preview each sound effect

See `SOUND_SYSTEM.md` for complete documentation.

## License

MIT
## Calculus Course

A comprehensive calculus course covering **Units 2-18** with **102 lessons** and **1,700+ questions**.

### Course Structure

The calculus course follows a traditional calculus curriculum:

- **Unit 2**: Derivatives Basics (6 lessons) - Concept, Power Rule, Product Rule, Quotient Rule, Chain Rule
- **Unit 3**: Derivatives Applications (6 lessons) - Rates of Change, Tangent Lines, Curve Sketching, Optimization, Related Rates
- **Unit 4**: Integration Basics (5 lessons) - Antiderivatives, Area Under Curve, Definite Integrals, Fundamental Theorem
- **Unit 5**: Integration Techniques (5 lessons) - u-Substitution, Integration by Parts, Trig Integrals, Partial Fractions
- **Unit 6**: Integration Applications (6 lessons) - Area Between Curves, Volumes, Arc Length
- **Units 7-18**: Advanced topics including Series, Vectors, Multivariable Calculus, Vector Calculus

### Lesson Files

- `calculusLessons_comprehensive.js` - Unit 2 lessons (existing)
- `calculusLessons_final.js` - Units 3-18 lessons (generated)
- Complete combined file available

### Question Types

Each lesson contains 15-20 questions:
- **Typing questions** (~60-70%) - Enter the answer directly
- **Multiple choice** (~30-40%) - Select from options
- **Match pairs** (occasionally) - Drag and drop matching
- **Diagrams** - 2-3 diagrams per lesson where relevant

### Generating Content

The calculus lessons were generated using:
- `complete_final_generator.py` - Main generator script
- Generates valid JavaScript with proper escaping
- Includes diagram references for seaborn generation

Status: **COMPLETE** - All 102 lessons (Units 2-18) generated with valid JavaScript syntax.

