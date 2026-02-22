// Quizzes.js - Interactive Quiz System

const QuizManager = {
  quizzes: {},

  // Initialize a quiz
  init(quizId, questions) {
    this.quizzes[quizId] = {
      questions: questions,
      currentQuestion: 0,
      answers: {},
      score: 0,
      completed: false,
      attempts: 1
    };
    this.renderQuiz(quizId);
  },

  // Render quiz to DOM
  renderQuiz(quizId) {
    const quiz = this.quizzes[quizId];
    const quizElement = document.getElementById(quizId);
    if (!quizElement) return;

    let html = `
      <div class="quiz-header">
        <h2>${quizElement.dataset.title || 'Quiz'}</h2>
        <div class="quiz-score" id="${quizId}-score">Question ${quiz.currentQuestion + 1} of ${quiz.questions.length}</div>
      </div>
    `;

    quiz.questions.forEach((q, index) => {
      html += `
        <div class="quiz-question" data-question="${index}">
          <h4>${index + 1}. ${this.formatMath(q.question)}</h4>
          <div class="quiz-options">
      `;

      if (q.type === 'multiple-choice') {
        q.options.forEach((option, optIndex) => {
          html += `
            <label class="quiz-option">
              <input type="radio" name="${quizId}-q${index}" value="${optIndex}">
              <span>${this.formatMath(option)}</span>
            </label>
          `;
        });
      } else if (q.type === 'true-false') {
        html += `
          <label class="quiz-option">
            <input type="radio" name="${quizId}-q${index}" value="true">
            <span>True</span>
          </label>
          <label class="quiz-option">
            <input type="radio" name="${quizId}-q${index}" value="false">
            <span>False</span>
          </label>
        `;
      } else if (q.type === 'numerical') {
        html += `
          <div class="problem-input">
            <input type="number" step="any" name="${quizId}-q${index}" placeholder="Enter your answer">
            <button type="button" onclick="QuizManager.checkAnswer('${quizId}', ${index})">Check</button>
          </div>
        `;
      } else if (q.type === 'fill-blank') {
        html += `
          <div class="problem-input">
            <input type="text" name="${quizId}-q${index}" placeholder="Fill in the blank">
          </div>
        `;
      }

      html += `
          </div>
          <div class="feedback" id="${quizId}-q${index}-feedback"></div>
          <div class="solution" id="${quizId}-q${index}-solution">
            <strong>Solution:</strong> ${this.formatMath(q.explanation || q.correct)}
          </div>
        </div>
      `;
    });

    html += `
      <div class="quiz-actions">
        <button onclick="QuizManager.submitQuiz('${quizId}')" id="${quizId}-submit">Submit Quiz</button>
        <button onclick="QuizManager.showAllAnswers('${quizId}')" class="secondary" id="${quizId}-reveal">Show All Answers</button>
        <button onclick="QuizManager.retryQuiz('${quizId}')" class="secondary" id="${quizId}-retry" style="display:none;">Retry Quiz</button>
      </div>
      <div class="quiz-results" id="${quizId}-results"></div>
    `;

    quizElement.innerHTML = html;
  },

  // Format math with MathJax
  formatMath(text) {
    // Already formatted delimiters should pass through
    return text;
  },

  // Record answer for a question
  recordAnswer(quizId, questionIndex, answer) {
    const quiz = this.quizzes[quizId];
    quiz.answers[questionIndex] = answer;
  },

  // Check individual answer (for numerical questions)
  checkAnswer(quizId, questionIndex) {
    const quiz = this.quizzes[quizId];
    const question = quiz.questions[questionIndex];
    const answerEl = document.querySelector(`input[name="${quizId}-q${questionIndex}"]`);
    const feedbackEl = document.getElementById(`${quizId}-q${questionIndex}-feedback`);
    const solutionEl = document.getElementById(`${quizId}-q${questionIndex}-solution`);

    if (!answerEl || !feedbackEl) return;

    const userAnswer = parseFloat(answerEl.value);
    const correctAnswer = parseFloat(question.correct);

    const tolerance = question.tolerance || 0.01;
    const isCorrect = Math.abs(userAnswer - correctAnswer) <= tolerance;

    if (isCorrect) {
      feedbackEl.textContent = '✓ Correct!';
      feedbackEl.className = 'feedback correct';
      quiz.score++;
    } else {
      feedbackEl.textContent = `✗ Incorrect. The answer is ${correctAnswer}.`;
      feedbackEl.className = 'feedback incorrect';
      solutionEl.classList.add('visible');
    }

    quiz.answers[questionIndex] = userAnswer;
  },

  // Submit entire quiz
  submitQuiz(quizId) {
    const quiz = this.quizzes[quizId];
    quiz.score = 0;

    // Check all questions
    quiz.questions.forEach((q, index) => {
      const feedbackEl = document.getElementById(`${quizId}-q${index}-feedback`);
      const solutionEl = document.getElementById(`${quizId}-q${index}-solution`);

      if (q.type === 'multiple-choice' || q.type === 'true-false') {
        const selected = document.querySelector(`input[name="${quizId}-q${index}"]:checked`);
        if (selected) {
          const answer = selected.value;
          const isCorrect = q.type === 'true-false' 
            ? (answer === 'true' ? true : false) === q.correct 
            : parseInt(answer) === q.correct;

          quiz.answers[index] = answer;

          if (isCorrect) {
            quiz.score++;
            if (feedbackEl) {
              feedbackEl.textContent = '✓ Correct!';
              feedbackEl.className = 'feedback correct';
            }
          } else {
            if (feedbackEl) {
              const correctText = q.type === 'true-false' 
                ? (q.correct ? 'True' : 'False')
                : q.options[q.correct];
              feedbackEl.textContent = `✗ Incorrect. The correct answer is: ${correctText}`;
              feedbackEl.className = 'feedback incorrect';
            }
            if (solutionEl) solutionEl.classList.add('visible');
          }
        }
      } else if (q.type === 'fill-blank') {
        const answerEl = document.querySelector(`input[name="${quizId}-q${index}"]`);
        if (answerEl) {
          const userAnswer = answerEl.value.trim().toLowerCase();
          const isCorrect = userAnswer === q.correct.toString().toLowerCase();

          quiz.answers[index] = userAnswer;

          if (isCorrect) {
            quiz.score++;
            if (feedbackEl) {
              feedbackEl.textContent = '✓ Correct!';
              feedbackEl.className = 'feedback correct';
            }
          } else {
            if (feedbackEl) {
              feedbackEl.textContent = `✗ Incorrect. The answer is: ${q.correct}`;
              feedbackEl.className = 'feedback incorrect';
            }
            if (solutionEl) solutionEl.classList.add('visible');
          }
        }
      }
      // Numerical questions checked individually
    });

    quiz.completed = true;
    this.showResults(quizId);

    // Save score to progress manager
    if (window.ProgressManager) {
      const lessonId = document.getElementById(quizId).dataset.lessonId;
      ProgressManager.saveQuizScore(lessonId, quiz.score, quiz.questions.length);
    }
  },

  // Show quiz results
  showResults(quizId) {
    const quiz = this.quizzes[quizId];
    const resultsEl = document.getElementById(`${quizId}-results`);
    const submitBtn = document.getElementById(`${quizId}-submit`);
    const retryBtn = document.getElementById(`${quizId}-retry`);

    if (!resultsEl) return;

    const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
    const passed = percentage >= 70;

    let resultClass = passed ? (percentage >= 90 ? 'mastered' : 'passed') : 'failed';
    let message = passed 
      ? (percentage >= 90 ? 'Excellent work! Mastered!' : 'Good job! You passed!')
      : 'Keep practicing. Try again!';

    resultsEl.innerHTML = `
      <h3>Quiz Results</h3>
      <p><strong>Score:</strong> ${quiz.score} / ${quiz.questions.length} (${percentage}%)</p>
      <p class="${resultClass}">${message}</p>
      <p><strong>Attempts:</strong> ${quiz.attempts}</p>
    `;

    resultsEl.classList.add('visible');
    if (submitBtn) submitBtn.style.display = 'none';
    if (retryBtn) retryBtn.style.display = 'inline-block';

    // Show all solutions
    this.showAllAnswers(quizId);
  },

  // Show all answers and solutions
  showAllAnswers(quizId) {
    const quiz = this.quizzes[quizId];
    quiz.questions.forEach((q, index) => {
      const solutionEl = document.getElementById(`${quizId}-q${index}-solution`);
      if (solutionEl) solutionEl.classList.add('visible');
    });
  },

  // Retry quiz
  retryQuiz(quizId) {
    const quiz = this.quizzes[quizId];
    quiz.score = 0;
    quiz.completed = false;
    quiz.answers = {};
    quiz.attempts++;
    this.renderQuiz(quizId);
  },

  // Calculate quiz statistics
  getStats(quizId) {
    const quiz = this.quizzes[quizId];
    const correctCount = quiz.questions.filter((q, i) => {
      const answer = quiz.answers[i];
      if (q.type === 'multiple-choice') {
        return parseInt(answer) === q.correct;
      } else if (q.type === 'true-false') {
        return (answer === 'true' ? true : false) === q.correct;
      } else if (q.type === 'numerical') {
        const tolerance = q.tolerance || 0.01;
        return Math.abs(parseFloat(answer) - parseFloat(q.correct)) <= tolerance;
      } else if (q.type === 'fill-blank') {
        return answer.toString().toLowerCase() === q.correct.toString().toLowerCase();
      }
      return false;
    }).length;

    return {
      total: quiz.questions.length,
      correct: correctCount,
      percentage: Math.round((correctCount / quiz.questions.length) * 100)
    };
  }
};

// Create standard quiz questions from template
const QuizTemplates = {
  multipleChoice: (question, options, correct, explanation) => ({
    type: 'multiple-choice',
    question,
    options,
    correct,
    explanation
  }),

  trueFalse: (question, correct, explanation) => ({
    type: 'true-false',
    question,
    correct,
    explanation
  }),

  numerical: (question, correct, tolerance, explanation) => ({
    type: 'numerical',
    question,
    correct,
    tolerance,
    explanation
  }),

  fillBlank: (question, correct, explanation) => ({
    type: 'fill-blank',
    question,
    correct,
    explanation
  })
};

// Export for global use
window.QuizManager = QuizManager;
window.QuizTemplates = QuizTemplates;

console.log('Quizzes.js loaded - Quiz system ready');