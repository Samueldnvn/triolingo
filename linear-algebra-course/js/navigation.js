// ============================================
// LINEAR ALGEBRA - NAVIGATION & PROGRESS TRACKING
// ============================================

let courseProgress = {
    problemsSolved: [],
    quizzesPassed: [],
    currentModule: 1,
    currentLesson: 1
};

// ============================================
// PROGRESS TRACKING
// ============================================

function saveProgress() {
    try {
        localStorage.setItem('linearAlgebraProgress', JSON.stringify(courseProgress));
    } catch (e) {
        console.log('Progress not saved:', e);
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('linearAlgebraProgress');
        if (saved) {
            courseProgress = JSON.parse(saved);
        }
        updateProgressDisplay();
    } catch (e) {
        console.log('No saved progress found');
    }
}

function updateProgressDisplay() {
    const totalProblems = 400; // Total problems in course
    const solved = courseProgress.problemsSolved.length;
    const percentage = Math.round((solved / totalProblems) * 100);
    
    const progressFill = document.getElementById('overallProgress');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
        progressFill.textContent = percentage + '%';
    }
}

function markProblemSolved(problemId) {
    if (!courseProgress.problemsSolved.includes(problemId)) {
        courseProgress.problemsSolved.push(problemId);
        saveProgress();
        updateProgressDisplay();
    }
}

function markQuizPassed(moduleId) {
    if (!courseProgress.quizzesPassed.includes(moduleId)) {
        courseProgress.quizzesPassed.push(moduleId);
        saveProgress();
    }
}

// ============================================
// NAVIGATION
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show selected section
    const selected = document.getElementById(sectionId);
    if (selected) {
        selected.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToNextLesson(currentLesson) {
    const nextLesson = currentLesson + 1;
    if (nextLesson <= 8) {
        window.location.href = `0${nextLesson}-${getLessonName(nextLesson)}.html`;
    }
}

function goToPrevLesson(currentLesson) {
    const prevLesson = currentLesson - 1;
    if (prevLesson >= 1) {
        window.location.href = `0${prevLesson}-${getLessonName(prevLesson)}.html`;
    }
}

function getLessonName(lessonNum) {
    const names = {
        1: 'numbers',
        2: 'vectors',
        3: 'matrices',
        4: 'determinants',
        5: 'eigenvalues',
        6: 'transformations',
        7: 'orthogonality',
        8: 'applications'
    };
    return names[lessonNum];
}

// ============================================
// PROBLEM CHECKING
// ============================================

function checkProblem(problemId, correct, alternatives, inputId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(inputId + '-feedback');
    
    if (!input || !feedback) return;
    
    const userAnswer = input.value.trim();
    const normalizedUser = userAnswer.replace(/\s/g, '').toLowerCase();
    const normalizedCorrect = correct.replace(/\s/g, '').toLowerCase();
    
    // Check exact match or alternatives
    let isCorrect = normalizedUser === normalizedCorrect;
    
    if (!isCorrect && alternatives.length > 0) {
        isCorrect = alternatives.some(alt => 
            alt.replace(/\s/g, '').toLowerCase() === normalizedUser
        );
    }
    
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = '✅ Correct! Well done!';
        feedback.style.display = 'block';
        markProblemSolved(problemId);
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = '❌ Not quite. Try again!';
        feedback.style.display = 'block';
    }
}

// ============================================
// QUIZ SYSTEM
// ============================================

let quizAnswers = {};

function recordAnswer(questionId, answer) {
    quizAnswers[questionId] = answer;
}

function submitQuiz(moduleId, correctAnswers) {
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    let feedbackHTML = '';
    
    for (let q in correctAnswers) {
        if (quizAnswers[q] === correctAnswers[q]) {
            score++;
            feedbackHTML += `<p>Q${q.replace('Q', '')}: ✅ Correct</p>`;
        } else {
            feedbackHTML += `<p>Q${q.replace('Q', '')}: ❌ Incorrect (Answer: ${correctAnswers[q]})</p>`;
        }
    }
    
    const percentage = Math.round((score / total) * 100);
    
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) {
        let resultClass = percentage >= 70 ? 'correct' : 'incorrect';
        feedbackHTML = `<div class="result-title ${resultClass}">Score: ${score}/${total} (${percentage}%)</div>` + feedbackHTML;
        
        if (percentage >= 70) {
            feedbackHTML += `<p style="margin-top: 20px; font-weight: 700;">🎉 Excellent! You've mastered this module!</p>`;
            markQuizPassed(moduleId);
        } else {
            feedbackHTML += `<p style="margin-top: 20px; font-weight: 700;">📚 Keep practicing! Review and try again.</p>`;
        }
        
        feedbackEl.innerHTML = feedbackHTML;
        feedbackEl.style.display = 'block';
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        checkProblem,
        recordAnswer,
        submitQuiz,
        markProblemSolved,
        markQuizPassed,
        saveProgress
    };
}