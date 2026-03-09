// =====================================================================
// VOCABULARY DATABASE
// =====================================================================
const vocabDatabase = {
  french: {
    greetings: [
      { french: 'Bonjour', english: 'Hello', type: 'greeting' },
      { french: 'Au revoir', english: 'Goodbye', type: 'greeting' },
      { french: 'Merci', english: 'Thank you', type: 'greeting' },
      { french: 'S\'il vous plaît', english: 'Please', type: 'greeting' },
      { french: 'Excusez-moi', english: 'Excuse me', type: 'greeting' },
      { french: 'De rien', english: 'You\'re welcome', type: 'greeting' },
      { french: 'Pardon', english: 'Sorry', type: 'greeting' },
      { french: 'Salut', english: 'Hi' }
    ],
    numbers: [
      { french: 'un', english: 'one', type: 'number' },
      { french: 'deux', english: 'two', type: 'number' },
      { french: 'trois', english: 'three', type: 'number' },
      { french: 'quatre', english: 'four', type: 'number' },
      { french: 'cinq', english: 'five', type: 'number' },
      { french: 'six', english: 'six', type: 'number' },
      { french: 'sept', english: 'seven', type: 'number' },
      { french: 'huit', english: 'eight', type: 'number' },
      { french: 'neuf', english: 'nine', type: 'number' },
      { french: 'dix', english: 'ten', type: 'number' }
    ],
    colors: [
      { french: 'rouge', english: 'red', type: 'color' },
      { french: 'bleu', english: 'blue', type: 'color' },
      { french: 'vert', english: 'green', type: 'color' },
      { french: 'jaune', english: 'yellow', type: 'color' },
      { french: 'noir', english: 'black', type: 'color' },
      { french: 'blanc', english: 'white', type: 'color' },
      { french: 'orange', english: 'orange', type: 'color' },
      { french: 'violet', english: 'purple', type: 'color' },
      { french: 'marron', english: 'brown', type: 'color' },
      { french: 'rose', english: 'pink', type: 'color' },
      { french: 'gris', english: 'gray', type: 'color' }
    ],
    family: [
      { french: 'mère', english: 'mother', type: 'family' },
      { french: 'père', english: 'father', type: 'family' },
      { french: 'frère', english: 'brother', type: 'family' },
      { french: 'sœur', english: 'sister', type: 'family' },
      { french: 'fille', english: 'daughter', type: 'family' },
      { french: 'fils', english: 'son', type: 'family' },
      { french: 'grand-mère', english: 'grandmother', type: 'family' },
      { french: 'grand-père', english: 'grandfather', type: 'family' },
      { french: 'oncle', english: 'uncle', type: 'family' },
      { french: 'tante', english: 'aunt', type: 'family' },
      { french: 'cousin', english: 'cousin', type: 'family' },
      { french: 'cousine', english: 'cousin (female)', type: 'family' }
    ],
    food: [
      { french: 'pain', english: 'bread', type: 'food' },
      { french: 'eau', english: 'water', type: 'food' },
      { french: 'lait', english: 'milk', type: 'food' },
      { french: 'fromage', english: 'cheese', type: 'food' },
      { french: 'œufs', english: 'eggs', type: 'food' },
      { french: 'pomme', english: 'apple', type: 'food' },
      { french: 'banane', english: 'banana', type: 'food' },
      { french: 'viande', english: 'meat', type: 'food' },
      { french: 'légumes', english: 'vegetables', type: 'food' },
      { french: 'fruit', english: 'fruit', type: 'food' }
    ],
    meals: [
      { french: 'petit déjeuner', english: 'breakfast', type: 'meal' },
      { french: 'déjeuner', english: 'lunch', type: 'meal' },
      { french: 'dîner', english: 'dinner', type: 'meal' },
      { french: 'collation', english: 'snack', type: 'meal' },
      { french: 'manger', english: 'to eat', type: 'verb' },
      { french: 'boire', english: 'to drink', type: 'verb' },
      { french: 'avoir faim', english: 'to be hungry', type: 'expression' },
      { french: 'avoir soif', english: 'to be thirsty', type: 'expression' }
    ],
    verbs: [
      { french: 'être', english: 'to be', type: 'verb' },
      { french: 'avoir', english: 'to have', type: 'verb' },
      { french: 'aller', english: 'to go', type: 'verb' },
      { french: 'faire', english: 'to do', type: 'verb' },
      { french: 'parler', english: 'to speak', type: 'verb' },
      { french: 'écouter', english: 'to listen', type: 'verb' },
      { french: 'lire', english: 'to read', type: 'verb' },
      { french: 'écrire', english: 'to write', type: 'verb' },
      { french: 'voir', english: 'to see', type: 'verb' },
      { french: 'regarder', english: 'to watch', type: 'verb' }
    ],
    pronouns: [
      { french: 'je', english: 'I', type: 'pronoun' },
      { french: 'tu', english: 'you (informal)', type: 'pronoun' },
      { french: 'il/elle', english: 'he/she', type: 'pronoun' },
      { french: 'nous', english: 'we', type: 'pronoun' },
      { french: 'vous', english: 'you (formal/plural)', type: 'pronoun' },
      { french: 'ils/elles', english: 'they', type: 'pronoun' },
      { french: 'mon', english: 'my (masculine)', type: 'pronoun' },
      { french: 'ma', english: 'my (feminine)', type: 'pronoun' },
      { french: 'mes', english: 'my (plural)', type: 'pronoun' },
      { french: 'ton', english: 'your (masculine)', type: 'pronoun' },
      { french: 'ta', english: 'your (feminine)', type: 'pronoun' },
      { french: 'tes', english: 'your (plural)', type: 'pronoun' }
    ]
  },
  spanish: spanishVocab
};

// =====================================================================
// QUESTION GENERATORS
// =====================================================================
const QuestionGenerator = {
  // Generate multiple choice translation questions
  multipleChoice(vocabList, count = 5) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map(word => {
      const distractors = vocabList
        .filter(w => w.french !== word.french)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [word, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt.french === word.french);

      return {
        id: `mc_${word.french}_${Math.random()}`,
        type: 'translation',
        question: `<strong>${word.french}</strong>`,
        options: allOptions.map(opt => opt.english),
        correct: correctIndex,
        xp: 2
      };
    });
  },

  // Generate reverse translation (English -> French)
  reverseTranslation(vocabList, count = 5) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map(word => {
      const distractors = vocabList
        .filter(w => w.french !== word.french)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [word, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt.french === word.french);

      return {
        id: `rt_${word.french}_${Math.random()}`,
        type: 'translation',
        question: `<strong>${word.english}</strong>`,
        options: allOptions.map(opt => opt.french),
        correct: correctIndex,
        xp: 2
      };
    });
  },

  // Generate match pairs questions (drag and drop style)
  matchPairs(vocabList, pairCount = 4) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(pairCount, shuffled.length));

    const pairs = selected.map(word => ({
      id: word.french,
      left: word.french,
      right: word.english
    }));

    const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);

    return {
      id: `mp_${Math.random()}`,
      type: 'matchPairs',
      question: 'Match each word with its translation:',
      pairs: pairs,
      options: shuffledRight.map(p => ({ id: p.id, text: p.right })),
      xp: 3 * pairs.length
    };
  },

  // Single match pairs question (for mixed lessons)
  matchPairsSingle(vocabList, pairCount = 4) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(pairCount, shuffled.length));

    const pairs = selected.map(word => ({
      id: word.french,
      left: word.french,
      right: word.english
    }));

    const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);

    return {
      id: `mps_${Math.random()}`,
      type: 'matchPairs',
      question: 'Match each word with its translation:',
      pairs: pairs,
      options: shuffledRight.map(p => ({ id: p.id, text: p.right })),
      xp: 3 * pairs.length
    };
  },

  // Generate fill-in-the-blank questions
  fillInBlank(vocabList, count = 5) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map(word => {
      const templates = [
        `"${word.english}" = <strong>_____</strong>`,
        `"${word.english}" => <strong>_____</strong>`,
        `<strong>_____</strong> = "${word.english}"`
      ];
      const template = templates[Math.floor(Math.random() * templates.length)];

      const distractors = vocabList
        .filter(w => w.french !== word.french)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [word, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt.french === word.french);

      return {
        id: `fib_${word.french}_${Math.random()}`,
        type: 'fillBlank',
        question: template,
        correctWord: word.french,
        options: allOptions.map(opt => opt.french),
        correct: correctIndex,
        xp: 2
      };
    });
  },

  // Generate a comprehensive mixed lesson with all question types
  mixedLesson(vocabList, totalQuestions = 12) {
    const questions = [];

    // Mix different question types with more sentence focus
    const numMultipleChoice = Math.floor(totalQuestions * 0.20); // ~20% translation
    const numReverse = Math.floor(totalQuestions * 0.20); // ~20% reverse translation
    const numSentenceTranslation = Math.floor(totalQuestions * 0.20); // ~20% sentence translation
    const numFillBlank = Math.floor(totalQuestions * 0.15); // ~15% fill-in-blank
    const numSentenceFillBlank = Math.floor(totalQuestions * 0.15); // ~15% sentence fill-in-blank
    const numTyping = Math.floor(totalQuestions * 0.08); // ~8% typing
    const numMatchPairs = 1; // 1 match-pairs question

    // Translation questions
    const mcQuestions = this.multipleChoice(vocabList, numMultipleChoice);
    questions.push(...mcQuestions);

    // Reverse translation questions
    const rtQuestions = this.reverseTranslation(vocabList, numReverse);
    questions.push(...rtQuestions);

    // Sentence translation questions
    const stQuestions = this.sentenceTranslation(vocabList, numSentenceTranslation);
    questions.push(...stQuestions);

    // Fill-in-the-blank questions
    const fibQuestions = this.fillInBlank(vocabList, numFillBlank);
    questions.push(...fibQuestions);

    // Sentence fill-in-the-blank
    const sfbQuestions = this.sentenceFillBlank(vocabList, numSentenceFillBlank);
    questions.push(...sfbQuestions);

    // Typing questions
    const tpQuestions = this.typing(vocabList, numTyping);
    questions.push(...tpQuestions);

    // One match-pairs question
    const mpQuestion = this.matchPairsSingle(vocabList, 4);
    questions.push(mpQuestion);

    // Shuffle all questions
    return questions.sort(() => Math.random() - 0.5);
  },

  // Sentence translation (translate sentences)
  sentenceTranslation(vocabList, count = 3) {
    const sentences = this.generateSentences(vocabList);
    const selected = sentences.sort(() => Math.random() - 0.5).slice(0, count);

    return selected.map((sent, index) => {
      const distractors = sentences
        .filter(s => s.frenchSentence !== sent.frenchSentence)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [sent, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt.frenchSentence === sent.frenchSentence);

      return {
        id: `st_${index}_${Math.random()}`,
        type: 'translation',
        question: `<strong>${sent.frenchSentence}</strong>`,
        options: allOptions.map(opt => opt.englishSentence),
        correct: correctIndex,
        xp: 3
      };
    });
  },

  // Reverse sentence translation (English to French/Spanish)
  reverseSentenceTranslation(vocabList, count = 3) {
    const sentences = this.generateSentences(vocabList);
    const selected = sentences.sort(() => Math.random() - 0.5).slice(0, count);

    return selected.map((sent, index) => {
      const distractors = sentences
        .filter(s => s.englishSentence !== sent.englishSentence)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const allOptions = [sent, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt.englishSentence === sent.englishSentence);

      return {
        id: `rst_${index}_${Math.random()}`,
        type: 'translation',
        question: `<strong>${sent.englishSentence}</strong>`,
        options: allOptions.map(opt => opt.frenchSentence),
        correct: correctIndex,
        xp: 3
      };
    });
  },

  // Sentence fill-in-the-blank
  sentenceFillBlank(vocabList, count = 3) {
    const sentences = this.generateSentences(vocabList);
    const selected = sentences.sort(() => Math.random() - 0.5).slice(0, count);
    const isSpanish = vocabList.length > 0 && vocabList[0].spanish;

    return selected.map((sent, index) => {
      // Get all vocab words for options
      const allWords = vocabList.map(v => isSpanish ? v.spanish : v.french);

      // Create fill-in-blank by replacing last word with blank
      const sentWords = sent.frenchSentence.split(' ');
      const lastWord = sentWords[sentWords.length - 1].replace(/[^\wàâäéèêëïîôùûüçñ¿¡\s-]/gi, '');
      const blanked = sentWords.slice(0, -1).join(' ') + ' _____';

      const distractors = vocabList
        .filter(v => (isSpanish ? v.spanish : v.french) !== lastWord)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => isSpanish ? v.spanish : v.french);

      const allOptions = [lastWord, ...distractors].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.findIndex(opt => opt === lastWord);

      return {
        id: `sfb_${index}_${Math.random()}`,
        type: 'fillBlank',
        question: blanked,
        correctWord: lastWord,
        options: allOptions,
        correct: correctIndex,
        xp: 3
      };
    });
  },

  // Typing questions (type the answer)
  typing(vocabList, count = 2) {
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    const isSpanish = vocabList.length > 0 && vocabList[0].spanish;

    return selected.map(word => {
      return {
        id: `type_${isSpanish ? word.spanish : word.french}_${Math.random()}`,
        type: 'typing',
        question: `<strong>${word.english}</strong> = <span style="color: #666; font-size: 16px;">_____</span>`,
        correctAnswer: isSpanish ? word.spanish : word.french,
        xp: 4
      };
    });
  },

  // Generate sentences using vocabulary
  generateSentences(vocabList) {
    const sentences = [];
    const isSpanish = vocabList.length > 0 && vocabList[0].spanish;
    const greetings = vocabList.filter(v => v.type === 'greeting');
    const food = vocabList.filter(v => v.type === 'food' || v.type === 'meals');
    const family = vocabList.filter(v => v.type === 'family');
    const numbers = vocabList.filter(v => v.type === 'number');
    const colors = vocabList.filter(v => v.type === 'color');
    const pronouns = vocabList.filter(v => v.type === 'pronoun');
    const verbs = vocabList.filter(v => v.type === 'verb');

    // Language helpers
    const getTarget = (word) => isSpanish ? word.spanish : word.french;
    const getEnglish = (word) => word.english;

    // Build sentences from vocabulary patterns

    const patterns = [
      // Common phrases and sentences
      {
        frenchSentence: 'Comment ça va?',
        englishSentence: 'How are you?'
      },
      {
        frenchSentence: 'Très bien, merci.',
        englishSentence: 'Very good, thank you.'
      },
      {
        frenchSentence: 'Je m\'appelle...',
        englishSentence: 'My name is...'
      },
      {
        frenchSentence: 'C\'est magnifique.',
        englishSentence: 'It\'s magnificent.'
      },
      {
        frenchSentence: 'Je ne sais pas.',
        englishSentence: 'I don\'t know.'
      },
      {
        frenchSentence: 'S\'il vous plaît.',
        englishSentence: 'Please.'
      },
      {
        frenchSentence: 'Merci beaucoup.',
        englishSentence: 'Thank you very much.'
      },
      {
        frenchSentence: 'Au revoir!',
        englishSentence: 'Goodbye!'
      },
      {
        frenchSentence: 'À demain.',
        englishSentence: 'See you tomorrow.'
      },
      {
        frenchSentence: 'Bonne chance!',
        englishSentence: 'Good luck!'
      }
    ];

    if (isSpanish) {
      patterns.push(
        {
          frenchSentence: '¿Cómo estás?',
          englishSentence: 'How are you?'
        },
        {
          frenchSentence: 'Muy bien, gracias.',
          englishSentence: 'Very good, thank you.'
        },
        {
          frenchSentence: 'Me llamo...',
          englishSentence: 'My name is...'
        },
        {
          frenchSentence: 'Es magnífico.',
          englishSentence: 'It\'s magnificent.'
        },
        {
          frenchSentence: 'No lo sé.',
          englishSentence: 'I don\'t know.'
        }
      );
    }

    return patterns;
  }
};
// =====================================================================
// LESSON TEMPLATES
// =====================================================================
const LessonTemplate = {
  // Generate a standardized mixed lesson (10-15 questions, all types)
  mixedLesson(courseId, unitId, lessonId, title, vocabCategories, questionCount = 12) {
    const vocabCategoriesList = Array.isArray(vocabCategories) ? vocabCategories : [vocabCategories];
    const allVocab = vocabCategoriesList.flatMap(cat =>
      vocabDatabase[courseId]?.[cat] || vocabDatabase.french[cat] || []
    );

    if (allVocab.length === 0) {
      console.warn(`No vocabulary found for categories: ${vocabCategoriesList.join(', ')}`);
      return null;
    }

    // Ensure we have enough vocabulary for the requested question count
    const adjustedCount = Math.min(questionCount, allVocab.length + 1);

    return {
      id: lessonId,
      title: title,
      icon: '📚',
      xp: Math.ceil(adjustedCount * 2),
      questions: QuestionGenerator.mixedLesson(allVocab, adjustedCount)
    };
  },

  // Custom lesson with pre-defined questions
  custom(courseId, unitId, lessonId, title, icon, customQuestions) {
    return {
      id: lessonId,
      title: title,
      icon: icon,
      xp: customQuestions.reduce((sum, q) => sum + (q.xp || 2), 0),
      questions: customQuestions
    };
  }
};
