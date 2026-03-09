/**
 * MODULAR LESSON SYSTEM
 * Clean, modular system for loading questions from databases
 *
 * Architecture:
 * 1. Question Database - Organized JSON/JS files with questions by lesson
 * 2. Question Schema - Standardized format for all question types
 * 3. Lesson Loader - Fetches and processes questions from databases
 * 4. Diagram Generator - Handles programmatic diagram generation
 *
 * Benefits:
 * - No spaghetti code - questions are just data
 * - Easy to add new questions - just append to database
 * - Separated concerns - content vs. presentation
 * - Reusable components - same loader works for all subjects
 * - Type-safe - schema validation ensures consistency
 */

/**
 * LESSON LOADER
 * Loads lessons from question databases
 */
const LessonLoader = {
  /**
   * Get a lesson by ID
   * @param {string} databaseName - Name of the database (e.g., "CalculusUnit1Database")
   * @param {string} lessonId - Lesson ID (e.g., "u1_l1")
   * @returns {Object} Lesson object with metadata and questions
   */
  getLesson(databaseName, lessonId) {
    const database = window[databaseName];

    if (!database) {
      console.error(`Database not found: ${databaseName}`);
      return null;
    }

    const lesson = database.lessons[lessonId];

    if (!lesson) {
      console.error(`Lesson not found: ${lessonId} in ${databaseName}`);
      return null;
    }

    // Return lesson with questions
    return {
      id: lesson.id,
      title: lesson.title,
      icon: lesson.icon,
      xp: lesson.xp,
      difficulty: lesson.difficulty,
      questions: lesson.questions,
      database: databaseName
    };
  },

  /**
   * Get all lessons from a database
   * @param {string} databaseName - Name of the database
   * @returns {Array} Array of lesson objects
   */
  getAllLessons(databaseName) {
    const database = window[databaseName];

    if (!database) {
      console.error(`Database not found: ${databaseName}`);
      return [];
    }

    return Object.keys(database.lessons).map(lessonId => {
      return this.getLesson(databaseName, lessonId);
    });
  },

  /**
   * Get a specific question
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @param {string} questionId - Question ID
   * @returns {Object} Question object
   */
  getQuestion(databaseName, lessonId, questionId) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return null;
    }

    return lesson.questions.find(q => q.id === questionId);
  },

  /**
   * Get questions by type from a lesson
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @param {string} type - Question type (e.g., "multiple_choice")
   * @returns {Array} Array of questions of the specified type
   */
  getQuestionsByType(databaseName, lessonId, type) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return [];
    }

    return lesson.questions.filter(q => q.type === type);
  },

  /**
   * Get questions by difficulty
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @param {string} difficulty - Difficulty level (e.g., "basic")
   * @returns {Array} Array of questions of the specified difficulty
   */
  getQuestionsByDifficulty(databaseName, lessonId, difficulty) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return [];
    }

    return lesson.questions.filter(q => q.difficulty === difficulty);
  },

  /**
   * Get random questions from a lesson
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @param {number} count - Number of questions to return
   * @returns {Array} Array of random questions
   */
  getRandomQuestions(databaseName, lessonId, count) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return [];
    }

    const shuffled = [...lesson.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },

  /**
   * Calculate total XP for a lesson
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @returns {number} Total XP for the lesson
   */
  getTotalXP(databaseName, lessonId) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return 0;
    }

    return lesson.questions.reduce((total, q) => total + (q.xp || 0), 0);
  },

  /**
   * Get question count by type
   * @param {string} databaseName - Name of the database
   * @param {string} lessonId - Lesson ID
   * @returns {Object} Count of questions by type
   */
  getQuestionCounts(databaseName, lessonId) {
    const lesson = this.getLesson(databaseName, lessonId);

    if (!lesson) {
      return {};
    }

    const counts = {};
    lesson.questions.forEach(q => {
      counts[q.type] = (counts[q.type] || 0) + 1;
    });

    return counts;
  },

  /**
   * Validate lesson structure
   * @param {Object} lesson - Lesson object to validate
   * @returns {boolean} True if valid, false otherwise
   */
  validateLesson(lesson) {
    if (!lesson.id || !lesson.title || !lesson.questions) {
      console.error("Invalid lesson structure");
      return false;
    }

    if (!Array.isArray(lesson.questions) || lesson.questions.length === 0) {
      console.error("Lesson must have at least one question");
      return false;
    }

    // Validate each question
    for (const q of lesson.questions) {
      if (!q.id || !q.type || !q.question) {
        console.error(`Invalid question: ${q.id}`);
        return false;
      }

      // Validate question type
      const validTypes = ['multiple_choice', 'typing', 'fill_blank', 'match_pairs'];
      if (!validTypes.includes(q.type)) {
        console.error(`Invalid question type: ${q.type}`);
        return false;
      }
    }

    return true;
  }
};

/**
 * QUESTION RENDERER
 * Renders questions based on type
 */
const QuestionRenderer = {
  /**
   * Render a question based on its type
   * @param {Object} question - Question object
   * @returns {string} HTML string for the question
   */
  render(question) {
    switch (question.type) {
      case 'multiple_choice':
        return this.renderMultipleChoice(question);

      case 'typing':
        return this.renderTyping(question);

      case 'fill_blank':
        return this.renderFillBlank(question);

      case 'match_pairs':
        return this.renderMatchPairs(question);

      default:
        console.error(`Unknown question type: ${question.type}`);
        return '';
    }
  },

  /**
   * Render multiple choice question
   */
  renderMultipleChoice(question) {
    let html = `<div class="question multiple-choice" data-question-id="${question.id}">`;
    html += `<div class="question-text">${question.question}</div>`;

    // Add diagram if present
    if (question.diagram) {
      const diagramUrl = window.DiagramUtils.getQuestionDiagram(question);
      if (diagramUrl) {
        html += `<div class="question-diagram">
          <img src="${diagramUrl}" alt="Diagram" class="diagram-image" />
        </div>`;
      }
    }

    // Add image if present
    if (question.image) {
      html += `<div class="question-image">
        <img src="${question.image}" alt="Question image" class="question-image-content" />
      </div>`;
    }

    // Add options
    html += `<div class="options">`;
    question.options.forEach((option, index) => {
      html += `
        <button class="option" data-index="${index}">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${option}</span>
        </button>
      `;
    });
    html += `</div>`; // End options

    html += `</div>`; // End question

    return html;
  },

  /**
   * Render typing question
   */
  renderTyping(question) {
    let html = `<div class="question typing" data-question-id="${question.id}">`;
    html += `<div class="question-text">${question.question}</div>`;

    // Add diagram if present
    if (question.diagram) {
      const diagramUrl = window.DiagramUtils.getQuestionDiagram(question);
      if (diagramUrl) {
        html += `<div class="question-diagram">
          <img src="${diagramUrl}" alt="Diagram" class="diagram-image" />
        </div>`;
      }
    }

    // Add image if present
    if (question.image) {
      html += `<div class="question-image">
        <img src="${question.image}" alt="Question image" class="question-image-content" />
      </div>`;
    }

    // Add input field
    html += `
      <div class="typing-input">
        <input
          type="text"
          class="answer-input"
          placeholder="${question.prompt || 'Type your answer:'}"
          data-case-sensitive="${question.caseSensitive || false}"
        />
        <button class="submit-button">Submit</button>
      </div>
    `;

    html += `</div>`; // End question

    return html;
  },

  /**
   * Render fill in the blank question
   */
  renderFillBlank(question) {
    let html = `<div class="question fill-blank" data-question-id="${question.id}">`;
    html += `<div class="question-text">${question.question}</div>`;

    // Add diagram if present
    if (question.diagram) {
      const diagramUrl = window.DiagramUtils.getQuestionDiagram(question);
      if (diagramUrl) {
        html += `<div class="question-diagram">
          <img src="${diagramUrl}" alt="Diagram" class="diagram-image" />
        </div>`;
      }
    }

    // Add input field
    html += `
      <div class="typing-input">
        <input
          type="text"
          class="answer-input"
          placeholder="${question.prompt || 'Fill in the blank:'}"
        />
        <button class="submit-button">Submit</button>
      </div>
    `;

    html += `</div>`; // End question

    return html;
  },

  /**
   * Render match pairs question
   */
  renderMatchPairs(question) {
    let html = `<div class="question match-pairs" data-question-id="${question.id}">`;
    html += `<div class="question-text">${question.question}</div>`;

    // Create pairs array
    const leftItems = question.pairs.map(p => p.left);
    const rightItems = question.pairs.map(p => p.right).sort(() => Math.random() - 0.5);

    html += `<div class="match-pairs-container">`;
    html += `<div class="match-left">`;
    leftItems.forEach((item, index) => {
      html += `<div class="match-item" data-side="left" data-index="${index}">${item}</div>`;
    });
    html += `</div>`; // End left

    html += `<div class="match-right">`;
    rightItems.forEach((item, index) => {
      html += `<div class="match-item" data-side="right" data-index="${index}">${item}</div>`;
    });
    html += `</div>`; // End right

    html += `</div>`; // End container

    html += `<button class="check-pairs-button">Check Matches</button>`;

    html += `</div>`; // End question

    return html;
  }
};

/**
 * Export utilities
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LessonLoader, QuestionRenderer };
} else {
  window.LessonLoader = LessonLoader;
  window.QuestionRenderer = QuestionRenderer;
}