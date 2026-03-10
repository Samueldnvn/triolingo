# Triolingo - Quick Start Guide

## 🚀 Get Started Fast

### Run the App
```bash
cd /home/samueldnvn4/.openclaw/workspace/triolingo
npm start
```

### Want to Understand the Modular System?

**Start here:** Read `MODULAR_LESSONS.md` - Complete guide to creating lessons

**Quick reference:** See `GENERATOR_REFERENCE.md` - All generators API

**What changed:** Read `UPDATE_SUMMARY.md` - Overview of the refactoring

---

## 📚 File Overview

### Core Files
```
lessonGenerators.js    # Vocab database + question generators (NEW!)
app.js                 # Course definitions + UI logic (refactored)
index.html             # Main HTML
styles.css             # Styling (includes match pairs)
main.js                # Electron process
```

### Documentation
```
MODULAR_LESSONS.md         # NEW! Complete guide to modular system
GENERATOR_REFERENCE.md     # NEW! API documentation
UPDATE_SUMMARY.md          # NEW! Overview of changes
README.md                  # App overview (updated)
START_HERE.md              # Quick reference
```

---

## 🎯 Key Features of Modular System

### 1. Vocabulary Database (`lessonGenerators.js`)
All vocab organized by course and category:
```javascript
vocabDatabase.french = {
  greetings: [
    { french: 'Bonjour', english: 'Hello', type: 'greeting' }
  ]
};
```

### 2. Question Generators
Automatically create questions from vocab:
```javascript
QuestionGenerator.multipleChoice(vocabList, 6)     // 6 MCQs
QuestionGenerator.matchPairs(vocabList, 5)         // 5 pairs to match
QuestionGenerator.fillInBlank(vocabList, 5)        // 5 fill blanks
QuestionGenerator.mixed(vocabList, 8)              // Mixed types
```

### 3. Lesson Templates
Create complete lessons with one line:
```javascript
LessonTemplate.translation('french', 1, 1, 'Greetings', ['greetings'], 6)
LessonTemplate.matchPairs('french', 1, 2, 'WordMatcher', ['greetings'], 5)
```

---

## 💡 Quick Examples

### Add a new word to French
In `lessonGenerators.js`:
```javascript
vocabDatabase.french.greetings.push({
  french: 'Bonsoir',
  english: 'Good evening',
  type: 'greeting'
});
```

### Create a new lesson
In `app.js`:
```javascript
LessonTemplate.translation('french', 1, 5, 'Evening Greetings', ['greetings'], 4)
```

That's it - the lesson uses ALL words in the 'greetings' category automatically!

---

## 🎨 Question Types

| Type | Example | Best For |
|------|---------|----------|
| **Translation** | "Translate: Bonjour" | Initial learning |
| **Reverse** | "Bonjour in English" | Backwards recall |
| **Match Pairs** | Click left + right match | Reinforcement (fun!) |
| **Fill Blank** | "___ means 'hello'" | Testing understanding |
| **Mixed** | Random mix of above | Reviews |

---

## 📖 Documentation Guide

**I want to...**

| Learn the system | Read `MODULAR_LESSONS.md` |
| Add new lessons | See LessonTemplate docs in `GENERATOR_REFERENCE.md` |
| Add a language | Step-by-step in `MODULAR_LESSONS.md` |
| Understand generators | All methods in `GENERATOR_REFERENCE.md` |
| Quick vocab reference | Top of `lessonGenerators.js` |

---

## 🔧 Tech Stack

- **Electron** - Desktop app framework
- **Vanilla JavaScript** - No frameworks
- **CSS Variables** - Easy theming ready
- **LocalStorage/Files** - Progress persistence

---

## 📦 File Structure

```
triolingo/
├── lessonGenerators.js      # Vocab + Generators + Templates ⭐ NEW!
├── app.js                   # Course definitions + UI (refactored)
├── index.html               # Main HTML
├── styles.css               # Styling (match pairs added)
├── main.js                  # Electron main process
├── package.json             # Dependencies
├── MODULAR_LESSONS.md       # Complete system guide ⭐ READ THIS FIRST
├── GENERATOR_REFERENCE.md   # API documentation
├── UPDATE_SUMMARY.md        # What changed
├── README.md                # App overview
└── START_HERE.md            # Quick reference
```

---

## ✅ Test the App

1. Start the app: `npm start`
2. Try the **"WordMatcher"** lesson - that's the new drag-and-drop style!
3. Try **"FillBlanks"** - fill in the blank questions
4. Try **"Basics Review"** - mixed question types

---

## 🎓 Learning Path

1. **Run the app** - Experience the new question types
2. **Read `MODULAR_LESSONS.md`** - Understand how it works
3. **Look at `app.js`** - See how French course is defined
4. **Add your own vocab** - Try creating a lesson!

---

## 🤔 Questions?

- **How do I add Spanish?** See `MODULAR_LESSONS.md` section "Adding a New Language Course"
- **How do math lessons work?** See "Non-Language Skills" in `MODULAR_LESSONS.md`
- **Can I add custom questions?** Yes, use `LessonTemplate.custom()` - see reference

---

**Ready to create content?** Start with `MODULAR_LESSONS.md`! 📚