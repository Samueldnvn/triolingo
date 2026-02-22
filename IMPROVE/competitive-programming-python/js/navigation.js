// ============================================
// COMPETITIVE PROGRAMMING COURSE - NAVIGATION & PROGRESS TRACKING
// ============================================

// Progress data structure
const courseProgress = {
    lessonsCompleted: [],
    problemsSolved: [],
    quizzesPassed: [],
    currentLesson: 1
};

// Module names for tracking
const moduleNames = [
    'foundations',
    'datastructures',
    'hashtables',
    'slidingwindow',
    'twopointers',
    'binarysearch',
    'dynamicprogramming',
    'greedy',
    'graphs',
    'advanced'
];

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('competitiveProgrammingProgress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            courseProgress.lessonsCompleted = parsed.lessonsCompleted || [];
            courseProgress.problemsSolved = parsed.problemsSolved || [];
            courseProgress.quizzesPassed = parsed.quizzesPassed || [];
            courseProgress.currentLesson = parsed.currentLesson || 1;
        } catch (e) {
            console.log('No saved progress found');
        }
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('competitiveProgrammingProgress', JSON.stringify(courseProgress));
}

// Update overall progress display
function updateOverallProgress() {
    const totalLessons = 10;
    const totalQuizzes = 10;
    const totalProblems = 500;
    const lessonsCompleted = courseProgress.lessonsCompleted.length;
    const quizzesPassed = courseProgress.quizzesPassed.length;
    const problemsSolved = courseProgress.problemsSolved.length;

    // Calculate overall percentage
    const lessonWeight = 0.4;
    const quizWeight = 0.3;
    const problemWeight = 0.3;

    const lessonScore = lessonsCompleted / totalLessons;
    const quizScore = quizzesPassed / totalQuizzes;
    const problemScore = Math.min(problemsSolved / totalProblems, 1);

    const overallPercent = Math.round((lessonScore * lessonWeight +
                                       quizScore * quizWeight +
                                       problemScore * problemWeight) * 100);

    // Update display
    const progressFill = document.getElementById('overallProgressFill');
    if (progressFill) {
        progressFill.style.width = overallPercent + '%';
        progressFill.textContent = overallPercent + '%';
    }

    const lessonsElement = document.getElementById('lessonsCompleted');
    if (lessonsElement) {
        lessonsElement.textContent = lessonsCompleted;
    }

    const problemsElement = document.getElementById('problemsSolved');
    if (problemsElement) {
        problemsElement.textContent = problemsSolved;
    }

    const quizzesElement = document.getElementById('quizzesPassed');
    if (quizzesElement) {
        quizzesElement.textContent = quizzesPassed;
    }

    // Update module statuses
    updateModuleStatuses();
}

// Update individual module status indicators
function updateModuleStatuses() {
    for (let i = 1; i <= 10; i++) {
        const statusElement = document.getElementById('module' + i + '-status');
        if (statusElement) {
            const moduleName = moduleNames[i - 1];

            // Check if lesson is completed
            const lessonCompleted = courseProgress.lessonsCompleted.includes(moduleName);
            const quizPassed = courseProgress.quizzesPassed.includes(moduleName);

            if (lessonCompleted && quizPassed) {
                statusElement.textContent = '✓';
                statusElement.style.color = '#22c55e';
            } else if (lessonCompleted) {
                statusElement.textContent = '○';
                statusElement.style.color = '#f59e0b';
            } else {
                statusElement.textContent = '○';
                statusElement.style.color = '#64748b';
            }
        }
    }
}

// Mark lesson as complete
function markLessonComplete(moduleName) {
    if (!courseProgress.lessonsCompleted.includes(moduleName)) {
        courseProgress.lessonsCompleted.push(moduleName);
        saveProgress();
        updateOverallProgress();
    }
}

// Mark quiz as passed
function markQuizPassed(moduleName) {
    if (!courseProgress.quizzesPassed.includes(moduleName)) {
        courseProgress.quizzesPassed.push(moduleName);
        saveProgress();
        updateOverallProgress();
    }
}

// Mark problem as solved
function markProblemSolved(problemId) {
    if (!courseProgress.problemsSolved.includes(problemId)) {
        courseProgress.problemsSolved.push(problemId);
        saveProgress();
        updateOverallProgress();
    }
}

// Section navigation within a lesson
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Find and activate the nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(sectionId)) {
            item.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Check answer for practice problems
function checkAnswer(problemId, correctAnswer, alternatives, inputId, hintId, explanationId) {
    const inputElement = document.getElementById(inputId);
    const feedbackElement = document.getElementById(inputId + '-feedback');
    const hintElement = document.getElementById(hintId);
    const explanationElement = document.getElementById(explanationId);

    if (!inputElement || !feedbackElement) {
        console.error('Elements not found:', inputId, feedbackElement);
        return;
    }

    const input = inputElement.value.trim();
    if (!input) {
        feedbackElement.className = 'feedback incorrect';
        feedbackElement.textContent = 'Please enter an answer.';
        feedbackElement.style.display = 'block';
        return;
    }

    // Normalize input and answers for comparison
    const normalizedInput = input.toLowerCase().replace(/\s+/g, '');
    const normalizedCorrect = correctAnswer.toLowerCase().replace(/\s+/g, '');

    let isCorrect = normalizedInput === normalizedCorrect;

    // Check alternatives
    if (!isCorrect && alternatives) {
        for (const alt of alternatives) {
            const normalizedAlt = alt.toLowerCase().replace(/\s+/g, '');
            if (normalizedInput === normalizedAlt) {
                isCorrect = true;
                break;
            }
        }
    }

    if (isCorrect) {
        feedbackElement.className = 'feedback correct';
        feedbackElement.textContent = 'Correct! Great job!';
        feedbackElement.style.display = 'block';

        // Show explanation
        if (explanationElement) {
            explanationElement.style.display = 'block';
        }

        // Mark problem as solved
        markProblemSolved(problemId);
    } else {
        feedbackElement.className = 'feedback incorrect';
        feedbackElement.textContent = 'Not quite right. Try again or check the hint.';
        feedbackElement.style.display = 'block';

        // Show hint if available
        if (hintElement) {
            hintElement.style.display = 'block';
        }
    }
}

// Show hint for a problem
function showHint(hintId) {
    const hintElement = document.getElementById(hintId);
    if (hintElement) {
        hintElement.style.display = 'block';
    }
}

// Show explanation for a problem
function showExplanation(explanationId) {
    const explanationElement = document.getElementById(explanationId);
    if (explanationElement) {
        explanationElement.style.display = 'block';
    }
}

// Quiz management
class QuizManager {
    constructor(quizKey) {
        this.quizKey = quizKey;
        this.answers = {};
    }

    recordAnswer(questionId, answer) {
        this.answers[questionId] = answer;
    }

    submitQuiz(correctAnswers) {
        let score = 0;
        let total = Object.keys(correctAnswers).length;
        let results = [];

        for (const questionId in correctAnswers) {
            if (this.answers[questionId] === correctAnswers[questionId]) {
                score++;
                results.push({
                    questionId: questionId,
                    correct: true,
                    yourAnswer: this.answers[questionId] || 'Not answered'
                });
            } else {
                results.push({
                    questionId: questionId,
                    correct: false,
                    yourAnswer: this.answers[questionId] || 'Not answered',
                    correctAnswer: correctAnswers[questionId]
                });
            }
        }

        const percentage = Math.round((score / total) * 100);
        return { score, total, percentage, results };
    }
}

// Display quiz results
function displayQuizResults(results, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const passed = results.percentage >= 70;

    let html = `
        <div class="score-display ${passed ? 'pass' : 'fail'}">
            ${passed ? 'PASSED!' : 'NEEDS IMPROVEMENT'}
        </div>
        <div class="score-details">
            <p><strong>Score:</strong> ${results.score} / ${results.total} (${results.percentage}%)</p>
        </div>
    `;

    html += '<div class="question-results">';
    results.results.forEach((result, index) => {
        html += `
            <div class="question-result ${result.correct ? 'correct' : 'incorrect'}">
                <p><strong>Question ${index + 1}:</strong> ${result.correct ? 'Correct' : 'Incorrect'}</p>
                ${!result.correct ? `<p>Your answer: ${result.yourAnswer}</p>
                <p>Correct answer: ${result.correctAnswer}</p>` : ''}
            </div>
        `;
    });
    html += '</div>';

    if (!passed) {
        html += `
            <div class="safety-sign important">
                You need 70% to pass. Review the material and try again!
            </div>
        `;
    }

    container.innerHTML = html;
    container.style.display = 'block';

    return passed;
}

// Get current module from URL
function getCurrentModule() {
    const path = window.location.pathname;
    const match = path.match(/\/(\d+)-/);
    return match ? parseInt(match[1]) : 1;
}

// Navigate between modules
function goToModule(moduleNumber) {
    if (moduleNumber >= 1 && moduleNumber <= 10) {
        const moduleFile = `lessons/${String(moduleNumber).padStart(2, '0')}-${moduleNames[moduleNumber - 1]}.html`;
        window.location.href = moduleFile;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateOverallProgress();
});

// Reset progress (for testing)
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('competitiveProgrammingProgress');
        courseProgress.lessonsCompleted = [];
        courseProgress.problemsSolved = [];
        courseProgress.quizzesPassed = [];
        courseProgress.currentLesson = 1;
        updateOverallProgress();
        location.reload();
    }
}