// Practice.js - Interactive Practice Problem System

const PracticeManager = {
  problems: {},

  // Initialize practice problems
  init(lessonId, problems) {
    this.problems[lessonId] = {
      problems: problems,
      attempts: {},
      bestScores: {}
    };
    this.renderProblems(lessonId);
  },

  // Render problems to DOM
  renderProblems(lessonId) {
    const lessonData = this.problems[lessonId];
    const container = document.getElementById(`${lessonId}-practice`);
    if (!container) return;

    let html = `<div class="practice-problems">
      <h2>Practice Problems</h2>
      <div class="problem-stats" id="${lessonId}-stats">Complete all problems to see your score!</div>`;

    lessonData.problems.forEach((problem, index) => {
      const difficultyClass = problem.difficulty || 'beginner';

      html += `
        <div class="problem" data-problem="${index}">
          <div class="problem-title">
            <span>Problem ${index + 1}</span>
            <span class="difficulty ${difficultyClass}">${problem.difficulty || 'beginner'}</span>
          </div>
          <p>${this.formatMath(problem.question)}</p>
      `;

      if (problem.type === 'multiple-choice') {
        html += `<div class="quiz-options">`;
        problem.options.forEach((option, optIndex) => {
          html += `
            <label class="quiz-option">
              <input type="radio" name="${lessonId}-p${index}" value="${optIndex}">
              <span>${this.formatMath(option)}</span>
            </label>
          `;
        });
        html += `</div>`;
      } else if (problem.type === 'numerical') {
        html += `
          <div class="problem-input">
            <input type="number" step="any" id="${lessonId}-p${index}-input" 
                   placeholder="Enter your answer">
            <button onclick="PracticeManager.checkAnswer('${lessonId}', ${index})">Check Answer</button>
          </div>
        `;
      } else if (problem.type === 'fill-blank') {
        html += `
          <div class="problem-input">
            <input type="text" id="${lessonId}-p${index}-input" 
                   placeholder="Fill in the blank">
            <button onclick="PracticeManager.checkAnswer('${lessonId}', ${index})">Check Answer</button>
          </div>
        `;
      }

      html += `
          <div class="feedback" id="${lessonId}-p${index}-feedback"></div>
          <div class="solution" id="${lessonId}-p${index}-solution">
            <strong>Solution:</strong>
            <p>${this.formatMath(problem.solution || problem.correct)}</p>
            ${problem.steps ? `<div class="steps">${problem.steps}</div>` : ''}
          </div>
        </div>
      `;
    });

    html += `
      <div class="practice-summary" id="${lessonId}-summary" style="display:none;">
        <h3>Practice Summary</h3>
        <p id="${lessonId}-final-score"></p>
        <button onclick="PracticeManager.retryPractice('${lessonId}')" class="secondary">Retry Problems</button>
      </div>
    </div>`;

    container.innerHTML = html;
  },

  // Format math with MathJax
  formatMath(text) {
    return text;
  },

  // Check individual answer
  checkAnswer(lessonId, problemIndex) {
    const lessonData = this.problems[lessonId];
    const problem = lessonData.problems[problemIndex];
    const feedbackEl = document.getElementById(`${lessonId}-p${problemIndex}-feedback`);
    const solutionEl = document.getElementById(`${lessonId}-p${problemIndex}-solution`);

    if (!feedbackEl) return;

    let isCorrect = false;
    let userAnswer = null;

    if (problem.type === 'multiple-choice') {
      const selected = document.querySelector(`input[name="${lessonId}-p${problemIndex}"]:checked`);
      if (selected) {
        userAnswer = parseInt(selected.value);
        isCorrect = userAnswer === problem.correct;
      }
    } else if (problem.type === 'numerical') {
      const inputEl = document.getElementById(`${lessonId}-p${problemIndex}-input`);
      if (inputEl && inputEl.value) {
        userAnswer = parseFloat(inputEl.value);
        const tolerance = problem.tolerance || 0.01;
        isCorrect = Math.abs(userAnswer - parseFloat(problem.correct)) <= tolerance;
      }
    } else if (problem.type === 'fill-blank') {
      const inputEl = document.getElementById(`${lessonId}-p${problemIndex}-input`);
      if (inputEl && inputEl.value) {
        userAnswer = inputEl.value.trim().toLowerCase();
        isCorrect = userAnswer === problem.correct.toString().toLowerCase();
      }
    }

    // Track attempt
    if (!lessonData.attempts[problemIndex]) {
      lessonData.attempts[problemIndex] = 0;
    }
    lessonData.attempts[problemIndex]++;

    if (isCorrect) {
      feedbackEl.textContent = '✓ Correct!';
      feedbackEl.className = 'feedback correct';

      // Record best score (1 for first attempt, 0.8 for second, etc.)
      const scoreValue = 1 / lessonData.attempts[problemIndex];
      if (!lessonData.bestScores[problemIndex] || scoreValue > lessonData.bestScores[problemIndex]) {
        lessonData.bestScores[problemIndex] = scoreValue;
      }

      // Update progress manager
      if (window.ProgressManager) {
        const correctCount = Object.values(lessonData.bestScores).filter(s => s > 0).length;
        const totalCount = lessonData.problems.length;
        ProgressManager.savePracticeScore(lessonId, correctCount, totalCount);
      }
    } else {
      let correctText = problem.correct;
      if (problem.type === 'multiple-choice') {
        correctText = problem.options[problem.correct];
      }
      feedbackEl.textContent = `✗ Incorrect. Try again!`;
      feedbackEl.className = 'feedback incorrect';
      // Don't show solution yet for practice - let them try again
    }

    this.updateStats(lessonId);

    // Re-render math
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([feedbackEl]);
    }
  },

  // Show solution for a problem
  showSolution(lessonId, problemIndex) {
    const solutionEl = document.getElementById(`${lessonId}-p${problemIndex}-solution`);
    if (solutionEl) {
      solutionEl.classList.add('visible');
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([solutionEl]);
      }
    }
  },

  // Update practice statistics
  updateStats(lessonId) {
    const lessonData = this.problems[lessonId];
    const statsEl = document.getElementById(`${lessonId}-stats`);

    if (!statsEl) return;

    const correctCount = Object.values(lessonData.bestScores).filter(s => s > 0).length;
    const totalCount = lessonData.problems.length;

    if (correctCount === totalCount) {
      const avgScore = Object.values(lessonData.bestScores).reduce((a, b) => a + b, 0) / totalCount;
      const percentage = Math.round(avgScore * 100);

      statsEl.innerHTML = `<strong>🎉 All problems completed!</strong> Score: ${percentage}%`;
      this.showSummary(lessonId);
    } else {
      statsEl.innerHTML = `Progress: ${correctCount} / ${totalCount} problems solved`;
    }
  },

  // Show practice summary
  showSummary(lessonId) {
    const lessonData = this.problems[lessonId];
    const summaryEl = document.getElementById(`${lessonId}-summary`);
    const scoreEl = document.getElementById(`${lessonId}-final-score`);

    if (!summaryEl || !scoreEl) return;

    const avgScore = Object.values(lessonData.bestScores).reduce((a, b) => a + b, 0) / lessonData.problems.length;
    const percentage = Math.round(avgScore * 100);

    scoreEl.innerHTML = `
      <strong>Final Score:</strong> ${percentage}%<br>
      <strong>Problems Solved:</strong> ${Object.values(lessonData.bestScores).filter(s => s > 0).length} / ${lessonData.problems.length}
    `;

    summaryEl.style.display = 'block';

    // Hide all problem inputs to prevent re-answering
    const inputs = document.querySelectorAll(`#${lessonId}-practice input`);
    inputs.forEach(input => input.disabled = true);

    // Ensure all solutions are shown
    lessonData.problems.forEach((_, index) => {
      this.showSolution(lessonId, index);
    });
  },

  // Retry practice problems
  retryPractice(lessonId) {
    const lessonData = this.problems[lessonId];
    lessonData.attempts = {};
    lessonData.bestScores = {};
    this.renderProblems(lessonId);
  },

  // Generate random variations of problems
  generateVariation(problem, seed) {
    const rng = this.seededRandom(seed);
    const result = { ...problem };

    // Simple randomization for numerical values
    if (problem.randomization) {
      problem.randomization.forEach(({ placeholder, min, max, integer = false }) => {
        const value = integer 
          ? Math.floor(rng() * (max - min + 1)) + min
          : rng() * (max - min) + min;

        result.question = result.question.replace(`{${placeholder}}`, value);
        result.solution = result.solution.replace(`{${placeholder}}`, value);
        result.correct = result.correct.replace(`{${placeholder}}`, value);
      });
    }

    return result;
  },

  // Seeded random number generator
  seededRandom(seed) {
    let state = seed;
    return function() {
      state = (state * 9301 + 49297) % 233280;
      return state / 233280;
    };
  },

  // Get practice statistics
  getStats(lessonId) {
    const lessonData = this.problems[lessonId];
    if (!lessonData) return null;

    const correctCount = Object.values(lessonData.bestScores).filter(s => s > 0).length;
    const avgScore = correctCount > 0
      ? Object.values(lessonData.bestScores).reduce((a, b) => a + b, 0) / lessonData.problems.length
      : 0;
    const totalAttempts = Object.values(lessonData.attempts).reduce((a, b) => a + b, 0);

    return {
      total: lessonData.problems.length,
      solved: correctCount,
      averageScore: Math.round(avgScore * 100),
      totalAttempts: totalAttempts
    };
  }
};

// Practice problem templates
const PracticeTemplates = {
  multipleChoice: (question, options, correct, solution, difficulty = 'beginner') => ({
    type: 'multiple-choice',
    question,
    options,
    correct,
    solution,
    difficulty
  }),

  numerical: (question, correct, solution, tolerance = 0.01, difficulty = 'beginner') => ({
    type: 'numerical',
    question,
    correct,
    solution,
    tolerance,
    difficulty
  }),

  fillBlank: (question, correct, solution, difficulty = 'beginner') => ({
    type: 'fill-blank',
    question,
    correct,
    solution,
    difficulty
  }),

  // Advanced template with randomization
  randomized: (question, correct, solution, randomization, difficulty = 'intermediate') => ({
    type: 'numerical',
    question,
    correct,
    solution,
    randomization,
    difficulty
  })
};

// Export for global use
window.PracticeManager = PracticeManager;
window.PracticeTemplates = PracticeTemplates;

console.log('Practice.js loaded - Practice system ready');