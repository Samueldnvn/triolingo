// ============================================
// CALCULUS III - NAVIGATION & PROGRESS TRACKING
// ============================================

// Global state
let courseProgress = {
    lessonsCompleted: [],
    problemsSolved: [],
    quizzesPassed: [],
    currentModule: 1,
    totalLessons: 8,
    totalProblems: 740, // Sum of all practice problems
    totalQuizzes: 8
};

// Module completion thresholds
const moduleThresholds = {
    1: { lessons: 1, problems: 50, quiz: 1 },
    2: { lessons: 1, problems: 80, quiz: 1 },
    3: { lessons: 1, problems: 70, quiz: 1 },
    4: { lessons: 1, problems: 90, quiz: 1 },
    5: { lessons: 1, problems: 100, quiz: 1 },
    6: { lessons: 1, problems: 120, quiz: 1 },
    7: { lessons: 1, problems: 130, quiz: 1 },
    8: { lessons: 1, problems: 100, quiz: 1 }
};

// ============================================
// LOAD PROGRESS FROM LOCALSTORAGE
// ============================================
function loadProgress() {
    try {
        const saved = localStorage.getItem('calc3Progress');
        if (saved) {
            courseProgress = JSON.parse(saved);
        }
    } catch (e) {
        console.log('No saved progress found');
    }
    
    updateUI();
    updateModuleStatus();
}

// ============================================
// SAVE PROGRESS TO LOCALSTORAGE
// ============================================
function saveProgress() {
    try {
        localStorage.setItem('calc3Progress', JSON.stringify(courseProgress));
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

// ============================================
// UPDATE UI WITH PROGRESS
// ============================================
function updateUI() {
    // Update progress bar
    const overallProgress = calculateOverallProgress();
    const progressFill = document.getElementById('overallProgressFill');
    if (progressFill) {
        progressFill.style.width = overallProgress + '%';
        progressFill.textContent = overallProgress + '%';
    }
    
    // Update stats
    const lessonsEl = document.getElementById('lessonsCompleted');
    const problemsEl = document.getElementById('problemsSolved');
    const quizzesEl = document.getElementById('quizzesPassed');
    
    if (lessonsEl) lessonsEl.textContent = courseProgress.lessonsCompleted.length;
    if (problemsEl) problemsEl.textContent = courseProgress.problemsSolved.length;
    if (quizzesEl) quizzesEl.textContent = courseProgress.quizzesPassed.length;
}

// ============================================
// CALULATE OVERALL PROGRESS
// ============================================
function calculateOverallProgress() {
    const lessonProgress = (courseProgress.lessonsCompleted.length / courseProgress.totalLessons) * 50;
    const problemProgress = (courseProgress.problemsSolved.length / courseProgress.totalProblems) * 30;
    const quizProgress = (courseProgress.quizzesPassed.length / courseProgress.totalQuizzes) * 20;
    
    return Math.round(lessonProgress + problemProgress + quizProgress);
}

// ============================================
// UPDATE MODULE STATUS
// ============================================
function updateModuleStatus() {
    for (let i = 1; i <= 8; i++) {
        const statusEl = document.getElementById(`module${i}-status`);
        if (statusEl) {
            statusEl.className = 'module-status';
            
            if (isModuleComplete(i)) {
                statusEl.classList.add('completed');
                statusEl.innerHTML = '✅ Complete';
            } else if (isModuleInProgress(i)) {
                statusEl.classList.add('in-progress');
                statusEl.innerHTML = '→ In Progress';
            } else {
                statusEl.classList.add('locked');
                statusEl.innerHTML = '🔒 Locked';
            }
        }
    }
}

// ============================================
// CHECK IF MODULE IS COMPLETE
// ============================================
function isModuleComplete(moduleNum) {
    const thresholds = moduleThresholds[moduleNum];
    if (!thresholds) return false;
    
    const moduleLessons = courseProgress.lessonsCompleted.filter(l => l === moduleNum).length;
    const moduleProblems = courseProgress.problemsSolved.filter(p => p.startsWith(`${moduleNum}-`)).length;
    const moduleQuiz = courseProgress.quizzesPassed.includes(moduleNum);
    
    return moduleLessons >= thresholds.lessons && 
           moduleProblems >= thresholds.problems && 
           moduleQuiz;
}

// ============================================
// CHECK IF MODULE IS IN PROGRESS
// ============================================
function isModuleInProgress(moduleNum) {
    const thresholds = moduleThresholds[moduleNum];
    if (!thresholds) return false;
    
    const moduleLessons = courseProgress.lessonsCompleted.filter(l => l === moduleNum).length;
    const moduleProblems = courseProgress.problemsSolved.filter(p => p.startsWith(`${moduleNum}-`)).length;
    
    return moduleLessons > 0 || moduleProblems > 0;
}

// ============================================
// GET NEXT MODULE
// ============================================
function getNextModule() {
    for (let i = 1; i <= 8; i++) {
        if (isModuleComplete(i - 1) && !isModuleComplete(i)) {
            return i;
        }
    }
    return 1;
}

// ============================================
// MARK LESSON COMPLETE
// ============================================
function markLessonComplete(moduleNum) {
    if (!courseProgress.lessonsCompleted.includes(moduleNum)) {
        courseProgress.lessonsCompleted.push(moduleNum);
        saveProgress();
        updateUI();
        updateModuleStatus();
    }
}

// ============================================
// MARK PROBLEM SOLVED
// ============================================
function markProblemSolved(problemId) {
    if (!courseProgress.problemsSolved.includes(problemId)) {
        courseProgress.problemsSolved.push(problemId);
        saveProgress();
        updateUI();
        updateModuleStatus();
    }
}

// ============================================
// MARK QUIZ PASSED
// ============================================
function markQuizPassed(moduleNum) {
    if (!courseProgress.quizzesPassed.includes(moduleNum)) {
        courseProgress.quizzesPassed.push(moduleNum);
        saveProgress();
        updateUI();
        updateModuleStatus();
    }
}

// ============================================
// NAVIGATION BETWEEN SECTIONS
// ============================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Hide all subsections in current section
    document.querySelectorAll('.subsection-content').forEach(sub => {
        sub.style.display = 'none';
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const navItem = document.querySelector(`.nav-item[onclick*="${sectionId}"]`);
        if (navItem) {
            navItem.classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Draw diagrams for the section
        setTimeout(() => drawSectionDiagrams(sectionId), 100);
    }
}

// ============================================
// SHOW SUBSECTION
// ============================================
function showSubsection(subsectionId) {
    // Hide all subsections
    document.querySelectorAll('.subsection-content').forEach(sub => {
        sub.style.display = 'none';
    });
    
    // Show selected subsection
    const selectedSubsection = document.getElementById(subsectionId);
    if (selectedSubsection) {
        selectedSubsection.style.display = 'block';
        selectedSubsection.classList.add('slide-up');
    }
}

// ============================================
// NAVIGATION BUTTONS
// ============================================
function goToNextModule(currentModule) {
    const nextModule = currentModule + 1;
    if (nextModule <= 8) {
        window.location.href = `lessons/0${nextModule}-` + getModuleFileName(nextModule);
    }
}

function goToPrevModule(currentModule) {
    const prevModule = currentModule - 1;
    if (prevModule >= 1) {
        window.location.href = `lessons/0${prevModule}-` + getModuleFileName(prevModule);
    }
}

function getModuleFileName(moduleNum) {
    const fileNames = {
        1: 'introduction.html',
        2: 'vectors-3d.html',
        3: 'vector-functions.html',
        4: 'multivariable-functions.html',
        5: 'derivatives.html',
        6: 'multiple-integrals.html',
        7: 'vector-calculus.html',
        8: 'applications.html'
    };
    return fileNames[moduleNum] || 'introduction.html';
}

// ============================================
// RESET PROGRESS
// ============================================
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('calc3Progress');
        courseProgress = {
            lessonsCompleted: [],
            problemsSolved: [],
            quizzesPassed: [],
            currentModule: 1,
            totalLessons: 8,
            totalProblems: 740,
            totalQuizzes: 8
        };
        saveProgress();
        updateUI();
        updateModuleStatus();
        alert('Progress has been reset.');
    }
}

// ============================================
// DIAGRAM DRAWING PLACEHOLDER
// ============================================
function drawSectionDiagrams(sectionId) {
    // This will be implemented in diagrams.js
    if (typeof drawDiagrams === 'function') {
        drawDiagrams(sectionId);
    }
}

// ============================================
// QUIZ TRACKING
// ============================================
function trackQuizAttempt(moduleNum, score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 70) {
        markQuizPassed(moduleNum);
        return true;
    }
    
    return false;
}

// ============================================
// PRACTICE PROBLEM TRACKING
// ============================================
function trackProblemAttempt(problemId, correct) {
    if (correct) {
        markProblemSolved(problemId);
    }
}

// ============================================
// GET MODULE PROGRESS
// ============================================
function getModuleProgress(moduleNum) {
    const thresholds = moduleThresholds[moduleNum];
    if (!thresholds) return { completed: 0, total: 0, percentage: 0 };
    
    const lessonsCompleted = courseProgress.lessonsCompleted.filter(l => l === moduleNum).length;
    const problemsCompleted = courseProgress.problemsSolved.filter(p => p.startsWith(`${moduleNum}-`)).length;
    const quizCompleted = courseProgress.quizzesPassed.includes(moduleNum) ? 1 : 0;
    
    const completed = lessonsCompleted + problemsCompleted + quizCompleted;
    const total = thresholds.lessons + thresholds.problems + thresholds.quiz;
    const percentage = Math.round((completed / total) * 100);
    
    return { completed, total, percentage };
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            const nextBtn = document.querySelector('.next-module-btn');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        } else if (e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('.prev-module-btn');
            if (prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        }
    });
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadProgress,
        saveProgress,
        markLessonComplete,
        markProblemSolved,
        markQuizPassed,
        trackQuizAttempt,
        trackProblemAttempt,
        getModuleProgress,
        resetProgress
    };
}