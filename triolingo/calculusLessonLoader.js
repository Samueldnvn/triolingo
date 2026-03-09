/**
 * CALCULUS LESSON LOADER
 * Loads lessons from CalculusUnit1Database for the Triolingo app
 */

// Load the database (must be included in HTML before this file)
const CalculusLessonLoader = {
  /**
   * Convert a database lesson to Triolingo format
   * @param {Object} dbLesson - Lesson from CalculusUnit1Database
   * @returns {Object} Triolingo-formatted lesson
   */
  convertToTriolingoLesson(dbLesson) {
    // Convert questions to Triolingo format
    const triolingoQuestions = dbLesson.questions.map(q => {
      return this.convertQuestion(q);
    });

    return {
      id: dbLesson.id,
      unit: dbLesson.id.split('_')[0], // Extract unit ID
      title: dbLesson.title,
      icon: dbLesson.icon || '📊',
      xp: dbLesson.xp,
      difficulty: dbLesson.difficulty,
      questions: triolingoQuestions,
      completed: false,
      started: false,
      correctCount: 0,
      wrongCount: 0
    };
  },

  /**
   * Convert a database question to Triolingo format
   * @param {Object} dbQuestion - Question from database
   * @returns {Object} Triolingo-formatted question
   */
  convertQuestion(dbQuestion) {
    const baseQuestion = {
      id: dbQuestion.id,
      type: this.convertQuestionType(dbQuestion.type),
      xp: dbQuestion.xp || 4
    };

    // Add question text
    if (dbQuestion.question) {
      baseQuestion.question = dbQuestion.question;
    }

    // Add options for multiple choice
    if (dbQuestion.options) {
      baseQuestion.options = dbQuestion.options;
    }

    // Add correct answer
    if (dbQuestion.correct !== undefined) {
      baseQuestion.correct = dbQuestion.correct;
    }

    if (dbQuestion.correctAnswer !== undefined) {
      baseQuestion.correctAnswer = dbQuestion.correctAnswer;
    }

    if (dbQuestion.pairs) {
      baseQuestion.pairs = dbQuestion.pairs;
    }

    // Add explanation
    if (dbQuestion.explanation) {
      baseQuestion.explanation = dbQuestion.explanation;
    }

    // Add prompt for typing/fill blank
    if (dbQuestion.prompt) {
      baseQuestion.prompt = dbQuestion.prompt;
    }

    // Add case sensitivity for typing
    if (dbQuestion.caseSensitive !== undefined) {
      baseQuestion.caseSensitive = dbQuestion.caseSensitive;
    }

    // Add image
    if (dbQuestion.image) {
      baseQuestion.image = dbQuestion.image;
    }

    // Add diagram info
    if (dbQuestion.diagram) {
      baseQuestion.diagramType = dbQuestion.diagram;
      baseQuestion.diagramParams = dbQuestion.diagramParams;
    }

    return baseQuestion;
  },

  /**
   * Convert database question type to Triolingo type
   * @param {string} dbType - Database question type
   * @returns {string} Triolingo question type
   */
  convertQuestionType(dbType) {
    const typeMap = {
      'multiple_choice': 'mc',
      'typing': 'typing',
      'fill_blank': 'fill_blank',
      'match_pairs': 'match_pairs'
    };

    return typeMap[dbType] || 'mc';
  },

  /**
   * Get a lesson from Unit 1
   * @param {string} lessonId - Lesson ID (e.g., "u1_l1")
   * @returns {Object|null} Triolingo-formatted lesson
   */
  getUnit1Lesson(lessonId) {
    return this.getLessonByUnit('CalculusUnit1Database', lessonId);
  },

  /**
   * Get all Unit 1 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit1Lessons() {
    if (!window.CalculusUnit1Database) {
      console.error('CalculusUnit1Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u1_l1', 'u1_l2', 'u1_l3', 'u1_l4', 'u1_l5', 'u1_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getUnit1Lesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get a lesson from Unit 2
   * @param {string} lessonId - Lesson ID (e.g., "u2_l1")
   * @returns {Object|null} Triolingo-formatted lesson
   */
  getUnit2Lesson(lessonId) {
    return this.getLessonByUnit('CalculusUnit2Database', lessonId);
  },

  /**
   * Generic method to get a lesson from any unit database
   * @param {string} databaseName - Name of the database (e.g., "CalculusUnit1Database")
   * @param {string} lessonId - Lesson ID (e.g., "u1_l1")
   * @returns {Object|null} Triolingo-formatted lesson
   */
  getLessonByUnit(databaseName, lessonId) {
    if (!window[databaseName]) {
      console.error(`${databaseName} not loaded`);
      return null;
    }

    const dbLesson = window[databaseName].lessons[lessonId];

    if (!dbLesson) {
      console.error(`Lesson not found: ${lessonId} in ${databaseName}`);
      return null;
    }

    return this.convertToTriolingoLesson(dbLesson);
  },

  /**
   * Auto-detect which database to use based on lesson ID
   * @param {string} lessonId - Lesson ID (e.g., "u3_l1", "u4_l2")
   * @returns {Object|null} Triolingo-formatted lesson
   */
  getLesson(lessonId) {
    // Extract unit number from lessonId (e.g., "u3_l1" -> 3)
    const match = lessonId.match(/^u(\d+)_/);
    if (!match) {
      console.error(`Invalid lesson ID format: ${lessonId}`);
      return null;
    }

    const unitNumber = parseInt(match[1]);
    const databaseName = `CalculusUnit${unitNumber}Database`;

    return this.getLessonByUnit(databaseName, lessonId);
  },

  /**
   * Get all Unit 2 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit2Lessons() {
    if (!window.CalculusUnit2Database) {
      console.error('CalculusUnit2Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u2_l1', 'u2_l2', 'u2_l3', 'u2_l4', 'u2_l5', 'u2_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getUnit2Lesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 3 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit3Lessons() {
    if (!window.CalculusUnit3Database) {
      console.error('CalculusUnit3Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u3_l1', 'u3_l2', 'u3_l3', 'u3_l4', 'u3_l5', 'u3_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 4 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit4Lessons() {
    if (!window.CalculusUnit4Database) {
      console.error('CalculusUnit4Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u4_l1', 'u4_l2', 'u4_l3', 'u4_l4', 'u4_l5'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 5 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit5Lessons() {
    if (!window.CalculusUnit5Database) {
      console.error('CalculusUnit5Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u5_l1', 'u5_l2', 'u5_l3', 'u5_l4', 'u5_l5'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 6 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit6Lessons() {
    if (!window.CalculusUnit6Database) {
      console.error('CalculusUnit6Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u6_l1', 'u6_l2', 'u6_l3', 'u6_l4', 'u6_l5', 'u6_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 7 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit7Lessons() {
    if (!window.CalculusUnit7Database) {
      console.error('CalculusUnit7Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u7_l1', 'u7_l2', 'u7_l3', 'u7_l4', 'u7_l5', 'u7_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 8 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit8Lessons() {
    if (!window.CalculusUnit8Database) {
      console.error('CalculusUnit8Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u8_l1', 'u8_l2', 'u8_l3', 'u8_l4', 'u8_l5'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 9 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit9Lessons() {
    if (!window.CalculusUnit9Database) {
      console.error('CalculusUnit9Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u9_l1', 'u9_l2', 'u9_l3', 'u9_l4', 'u9_l5'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 10 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit10Lessons() {
    if (!window.CalculusUnit10Database) {
      console.error('CalculusUnit10Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u10_l1', 'u10_l2', 'u10_l3', 'u10_l4', 'u10_l5', 'u10_l6', 'u10_l7'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 11 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit11Lessons() {
    if (!window.CalculusUnit11Database) {
      console.error('CalculusUnit11Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u11_l1', 'u11_l2', 'u11_l3', 'u11_l4', 'u11_l5', 'u11_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 12 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit12Lessons() {
    if (!window.CalculusUnit12Database) {
      console.error('CalculusUnit12Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u12_l1', 'u12_l2', 'u12_l3', 'u12_l4', 'u12_l5', 'u12_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 13 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit13Lessons() {
    if (!window.CalculusUnit13Database) {
      console.error('CalculusUnit13Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u13_l1', 'u13_l2', 'u13_l3', 'u13_l4', 'u13_l5', 'u13_l6', 'u13_l7'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 14 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit14Lessons() {
    if (!window.CalculusUnit14Database) {
      console.error('CalculusUnit14Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u14_l1', 'u14_l2', 'u14_l3', 'u14_l4', 'u14_l5', 'u14_l6'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 15 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit15Lessons() {
    if (!window.CalculusUnit15Database) {
      console.error('CalculusUnit15Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u15_l1', 'u15_l2', 'u15_l3', 'u15_l4', 'u15_l5', 'u15_l6', 'u15_l7'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 16 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit16Lessons() {
    if (!window.CalculusUnit16Database) {
      console.error('CalculusUnit16Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u16_l1', 'u16_l2', 'u16_l3', 'u16_l4', 'u16_l5', 'u16_l6', 'u16_l7'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 17 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit17Lessons() {
    if (!window.CalculusUnit17Database) {
      console.error('CalculusUnit17Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u17_l1', 'u17_l2', 'u17_l3', 'u17_l4', 'u17_l5', 'u17_l6', 'u17_l7', 'u17_l8', 'u17_l9'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Get all Unit 18 lessons
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getAllUnit18Lessons() {
    if (!window.CalculusUnit18Database) {
      console.error('CalculusUnit18Database not loaded');
      return [];
    }

    const lessons = [];
    const lessonIds = ['u18_l1', 'u18_l2', 'u18_l3'];

    lessonIds.forEach(lessonId => {
      const lesson = this.getLesson(lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    });

    return lessons;
  },

  /**
   * Create placeholder lessons for units that aren't ready yet
   * @param {string} lessonName - Name for placeholder
   * @param {string} unitId - Unit ID
   * @param {number} lessonIndex - Lesson index
   * @returns {Object} Placeholder lesson
   */
  createPlaceholder(lessonName, unitId, lessonIndex) {
    const lessonId = `u${unitId}_l${lessonIndex}`;
    return {
      id: lessonId,
      unit: unitId,
      title: lessonName,
      icon: '📊',
      xp: 50,
      difficulty: 'basic',
      questions: [
        {
          id: `${lessonId}_q1`,
          type: 'mc',
          question: `This lesson (${lessonName}) is coming soon!`,
          options: ['OK', 'Got it', 'Understood', 'Sounds good'],
          correct: 0,
          xp: 5,
          explanation: 'More calculus lessons are being developed!'
        }
      ],
      completed: false,
      started: false,
      correctCount: 0,
      wrongCount: 0
    };
  },

  /**
   * Get lessons from CalculusLessonsComplete for a specific unit
   * @param {number} unitId - Unit ID (2 or 3)
   * @returns {Array} Array of Triolingo-formatted lessons
   */
  getCompleteLessons(unitId) {
    if (!window.CalculusLessonsComplete) {
      console.error('CalculusLessonsComplete not loaded');
      return [];
    }

    const completeLessons = window.CalculusLessonsComplete;
    const unitLessons = [];

    // Map lesson keys to units
    const unit2LessonKeys = [
      'derivIntro', 'powerRule', 'productRule', 'quotientRule', 'chainRule', 'derivPractice'
    ];
    const unit3LessonKeys = [
      'ratesOfChange', 'tangentLines', 'curveSketching', 'optimization', 'relatedRates', 'derivAppsPractice'
    ];

    const lessonKeys = unitId === 2 ? unit2LessonKeys : unitId === 3 ? unit3LessonKeys : [];

    lessonKeys.forEach(lessonKey => {
      if (completeLessons[lessonKey]) {
        const dbLesson = completeLessons[lessonKey];
        // Convert to Triolingo format
        const triolingoLesson = this.convertToTriolingoLesson(dbLesson);
        unitLessons.push(triolingoLesson);
      }
    });

    return unitLessons;
  }
};

/**
 * Export for use in app.js
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusLessonLoader };
} else {
  window.CalculusLessonLoader = CalculusLessonLoader;
}