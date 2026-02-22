// Navigation and Progress Tracking for Hexapod Robot Engineering Course

// Course modules
const courseModules = [
    { id: '01', title: 'Foundations & Prerequisites', file: 'lessons/01-foundations.html' },
    { id: '02', title: 'Statics & Dynamics', file: 'lessons/02-statics-dynamics.html' },
    { id: '03', title: 'Electricity & Magnetism', file: 'lessons/03-electricity-magnetism.html' },
    { id: '04', title: 'Circuits & Electronics', file: 'lessons/04-circuits-electronics.html' },
    { id: '05', title: 'Materials Science', file: 'lessons/05-materials-science.html' },
    { id: '06', title: 'Differential Equations', file: 'lessons/06-differential-equations.html' },
    { id: '07', title: 'Kinematics', file: 'lessons/07-kinematics.html' },
    { id: '08', title: 'Vibrations & Waves', file: 'lessons/08-vibrations-waves.html' },
    { id: '09', title: 'Control Theory', file: 'lessons/09-control-theory.html' },
    { id: '10', title: 'Fluid Mechanics', file: 'lessons/10-fluid-mechanics.html' },
    { id: '11', title: 'Thermodynamics', file: 'lessons/11-thermodynamics.html' },
    { id: '12', title: 'Hexapod Design', file: 'lessons/12-hexapod-design.html' },
    { id: '13', title: 'Review & Assessment', file: 'lessons/13-final.html' }
];

// Load progress from localStorage
function loadProgress() {
    const progress = localStorage.getItem('hexapodProgress');
    return progress ? JSON.parse(progress) : {
        completedModules: [],
        quizScores: {},
        practiceProblems: {},
        currentModule: '01'
    };
}

// Save progress to localStorage
function saveProgress(progress) {
    localStorage.setItem('hexapodProgress', JSON.stringify(progress));
}

// Update progress bar
function updateProgressBar() {
    const progress = loadProgress();
    const totalModules = courseModules.length;
    const completedCount = progress.completedModules.length;
    const percentage = Math.round((completedCount / totalModules) * 100);

    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = percentage + '% Complete';
    }
}

// Navigate to a module
function navigateTo(modulePath) {
    window.location.href = modulePath;
}

// Mark module as complete
function markModuleComplete(moduleId) {
    const progress = loadProgress();
    if (!progress.completedModules.includes(moduleId)) {
        progress.completedModules.push(moduleId);
    }
    saveProgress(progress);
    updateProgressBar();
}

// Save quiz score
function saveQuizScore(moduleId, score, percentage) {
    const progress = loadProgress();
    progress.quizScores[moduleId] = {
        score: score,
        percentage: percentage,
        timestamp: new Date().toISOString()
    };
    saveProgress(progress);
}

// Save practice problem completion
function savePracticeProblem(moduleId, problemId, completed) {
    const progress = loadProgress();
    if (!progress.practiceProblems[moduleId]) {
        progress.practiceProblems[moduleId] = [];
    }
    if (completed && !progress.practiceProblems[moduleId].includes(problemId)) {
        progress.practiceProblems[moduleId].push(problemId);
    }
    saveProgress(progress);
}

// Get current module ID from URL
function getCurrentModuleId() {
    const path = window.location.pathname;
    const match = path.match(/lessons\/(\d+)-/);
    return match ? match[1] : null;
}

// Navigate to previous module
function goToPrevious() {
    const currentId = getCurrentModuleId();
    if (currentId) {
        const currentIndex = courseModules.findIndex(m => m.id === currentId);
        if (currentIndex > 0) {
            navigateTo(courseModules[currentIndex - 1].file);
        }
    }
}

// Navigate to next module
function goToNext() {
    const currentId = getCurrentModuleId();
    if (currentId) {
        const currentIndex = courseModules.findIndex(m => m.id === currentId);
        if (currentIndex < courseModules.length - 1) {
            navigateTo(courseModules[currentIndex + 1].file);
        }
    }
}

// Show section
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Check problem answer
function checkProblem(problemId, correctAnswer, alternatives = []) {
    const input = document.getElementById('answer-' + problemId);
    const feedback = document.getElementById('feedback-' + problemId);
    const explanation = document.getElementById('explanation-' + problemId);

    if (!input || !feedback || !explanation) return;

    const userAnswer = input.value.trim().toLowerCase().replace(/\s/g, '');
    const normalizedCorrect = correctAnswer.toLowerCase().replace(/\s/g, '');
    const normalizedAlternatives = alternatives.map(alt => alt.toLowerCase().replace(/\s/g, ''));

    let isCorrect = userAnswer === normalizedCorrect || normalizedAlternatives.includes(userAnswer);

    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct!';
        feedback.style.display = 'block';
        explanation.classList.add('show');

        // Save progress
        const moduleId = getCurrentModuleId();
        savePracticeProblem(moduleId, problemId, true);
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.display = 'block';
        explanation.classList.remove('show');
    }
}

// Submit quiz
function submitQuiz(moduleId, correctAnswers) {
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    let unanswered = 0;

    for (let questionId in correctAnswers) {
        const selected = document.querySelector(`input[name="${questionId}"]:checked`);
        const explanation = document.getElementById(`explanation-${questionId}`);

        if (!selected) {
            unanswered++;
            continue;
        }

        if (selected.value === correctAnswers[questionId]) {
            score++;
            if (explanation) {
                explanation.className = 'explanation correct';
            }
        } else {
            if (explanation) {
                explanation.className = 'explanation incorrect';
            }
        }
    }

    const percentage = Math.round((score / total) * 100);

    // Display results
    const resultDiv = document.getElementById('quiz-results');
    if (resultDiv) {
        let passStatus = percentage >= 70 ? 'PASSED' : 'NOT PASSED';
        let resultColor = percentage >= 70 ? '#4CAF50' : '#F44336';
        resultDiv.innerHTML = `
            <h3>Quiz Results</h3>
            <p><strong>Score:</strong> ${score} / ${total} (${percentage}%)</p>
            <p><strong>Status:</strong> ${passStatus}</p>
            <p style="color: ${resultColor}; font-weight: bold; margin-top: 15px;">
                ${percentage >= 70 ? 'Congratulations! You passed this module.' : 'Review the material and try again.'}
            </p>
        `;
    }

    // Save score if passed
    if (percentage >= 70) {
        saveQuizScore(moduleId, score, percentage);
        markModuleComplete(moduleId);
    }

    return { score, total, percentage };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();

    // Show all explanations button
    const showAllBtn = document.getElementById('show-all-explanations');
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            document.querySelectorAll('.explanation').forEach(exp => {
                exp.classList.add('show');
            });
        });
    }
});