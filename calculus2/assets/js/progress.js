// Progress.js - LocalStorage Progress Tracking System

const ProgressManager = {
  STORAGE_KEY: 'calculus2_progress',

  // Initialize progress data structure
  init() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      const initialData = {
        lessons: {},
        quizzes: {},
        practice: {},
        overall: {
          completedLessons: 0,
          masteredLessons: 0,
          totalLessons: 45,
          started: new Date().toISOString(),
          lastAccessed: new Date().toISOString()
        }
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialData));
    }
    this.updateLastAccessed();
  },

  // Get all progress data
  getAll() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  // Save progress data
  save(data) {
    data.overall.lastAccessed = new Date().toISOString();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Mark lesson as started
  startLesson(lessonId) {
    const data = this.getAll();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        status: 'inprogress',
        started: new Date().toISOString(),
        completed: false,
        quizScore: null,
        practiceScore: null
      };
      this.save(data);
    }
    return data.lessons[lessonId];
  },

  // Mark lesson as completed
  completeLesson(lessonId) {
    const data = this.getAll();
    if (data.lessons[lessonId]) {
      data.lessons[lessonId].status = 'completed';
      data.lessons[lessonId].completed = true;
      data.lessons[lessonId].completedAt = new Date().toISOString();
      data.overall.completedLessons = Object.values(data.lessons).filter(l => l.completed).length;
      this.save(data);
    }
    return data.lessons[lessonId];
  },

  // Mark lesson as mastered (>90% quiz score)
  masterLesson(lessonId) {
    const data = this.getAll();
    if (data.lessons[lessonId]) {
      data.lessons[lessonId].status = 'mastered';
      data.lessons[lessonId].mastered = true;
      data.lessons[lessonId].masteredAt = new Date().toISOString();
      data.overall.masteredLessons = Object.values(data.lessons).filter(l => l.mastered).length;
      this.save(data);
    }
    return data.lessons[lessonId];
  },

  // Save quiz score
  saveQuizScore(lessonId, score, totalQuestions) {
    const data = this.getAll();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        status: 'inprogress',
        started: new Date().toISOString()
      };
    }
    
    const percentage = (score / totalQuestions) * 100;
    data.lessons[lessonId].quizScore = {
        score: score,
        total: totalQuestions,
        percentage: percentage,
        timestamp: new Date().toISOString()
    };
    data.quizzes[lessonId] = data.lessons[lessonId].quizScore;

    // Auto-complete if >= 70%, auto-master if >= 90%
    if (percentage >= 90) {
      this.masterLesson(lessonId);
    } else if (percentage >= 70) {
      this.completeLesson(lessonId);
    }

    this.save(data);
    return data.lessons[lessonId].quizScore;
  },

  // Save practice problem score
  savePracticeScore(lessonId, correct, total) {
    const data = this.getAll();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        status: 'inprogress',
        started: new Date().toISOString()
      };
    }

    const percentage = (correct / total) * 100;
    data.lessons[lessonId].practiceScore = {
      correct: correct,
      total: total,
      percentage: percentage,
      timestamp: new Date().toISOString()
    };
    data.practice[lessonId] = data.lessons[lessonId].practiceScore;
    this.save(data);
    return data.lessons[lessonId].practiceScore;
  },

  // Get lesson status
  getLessonStatus(lessonId) {
    const data = this.getAll();
    return data.lessons[lessonId] || null;
  },

  // Get overall completion percentage
  getCompletionPercentage() {
    const data = this.getAll();
    return Math.round((data.overall.completedLessons / data.overall.totalLessons) * 100);
  },

  // Get mastery percentage
  getMasteryPercentage() {
    const data = this.getAll();
    return Math.round((data.overall.masteredLessons / data.overall.totalLessons) * 100);
  },

  // Get quiz average
  getQuizAverage() {
    const data = this.getAll();
    const quizScores = Object.values(data.quizzes).filter(q => q !== undefined);
    if (quizScores.length === 0) return 0;
    const avg = quizScores.reduce((sum, q) => sum + q.percentage, 0) / quizScores.length;
    return Math.round(avg);
  },

  // Get practice average
  getPracticeAverage() {
    const data = this.getAll();
    const practiceScores = Object.values(data.practice).filter(p => p !== undefined);
    if (practiceScores.length === 0) return 0;
    const avg = practiceScores.reduce((sum, p) => sum + p.percentage, 0) / practiceScores.length;
    return Math.round(avg);
  },

  // Update last accessed timestamp
  updateLastAccessed() {
    const data = this.getAll();
    if (data) {
      data.overall.lastAccessed = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }
  },

  // Reset all progress
  resetAll() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem(this.STORAGE_KEY);
      this.init();
      location.reload();
    }
  },

  // Reset specific lesson
  resetLesson(lessonId) {
    const data = this.getAll();
    if (data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        status: 'notstarted',
        started: new Date().toISOString()
      };
      delete data.quizzes[lessonId];
      delete data.practice[lessonId];
      data.overall.completedLessons = Object.values(data.lessons).filter(l => l.completed).length;
      data.overall.masteredLessons = Object.values(data.lessons).filter(l => l.mastered).length;
      this.save(data);
    }
  },

  // Get progress report for dashboard
  getProgressReport() {
    const data = this.getAll();
    return {
      overall: {
        completion: this.getCompletionPercentage(),
        mastery: this.getMasteryPercentage(),
        completedLessons: data.overall.completedLessons,
        masteredLessons: data.overall.masteredLessons,
        totalLessons: data.overall.totalLessons,
        quizAverage: this.getQuizAverage(),
        practiceAverage: this.getPracticeAverage()
      },
      lessons: data.lessons,
      started: data.overall.started,
      lastAccessed: data.overall.lastAccessed
    };
  }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  ProgressManager.init();
});

// Export for use in other files
window.ProgressManager = ProgressManager;

console.log('Progress.js loaded - Tracking system ready');