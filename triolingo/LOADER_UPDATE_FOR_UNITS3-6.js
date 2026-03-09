/**
 * UPDATE FOR UNITS 3-6 INTEGRATION
 * Add these methods to calculusLessonLoader.js
 */

// Add these methods after getAllUnit2Lessons():

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
    const lesson = this.getUnit2Lesson(lessonId); // Same converter works
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
    const lesson = this.getUnit2Lesson(lessonId); // Same converter works
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
    const lesson = this.getUnit2Lesson(lessonId); // Same converter works
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
    const lesson = this.getUnit2Lesson(lessonId); // Same converter works
    if (lesson) {
      lessons.push(lesson);
    }
  });

  return lessons;
},