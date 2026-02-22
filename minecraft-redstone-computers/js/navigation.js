// Navigation and progress tracking for Minecraft Redstone Computers Course

const courseModules = [
    { id: '01-logic-gates', title: 'Logic Gates in Minecraft', lessonFile: 'lessons/01-logic-gates.html' },
    { id: '02-adders-arithmetic', title: 'Adders and Arithmetic', lessonFile: 'lessons/02-adders-arithmetic.html' },
    { id: '03-memory-storage', title: 'Memory and Storage', lessonFile: 'lessons/03-memory-storage.html' },
    { id: '04-clocks-timing', title: 'Clocks and Timing', lessonFile: 'lessons/04-clocks-timing.html' },
    { id: '05-data-transmission', title: 'Data Transmission', lessonFile: 'lessons/05-data-transmission.html' },
    { id: '06-alu', title: 'Arithmetic Logic Unit', lessonFile: 'lessons/06-alu.html' },
    { id: '07-control-decoders', title: 'Control Units and Decoders', lessonFile: 'lessons/07-control-decoders.html' },
    { id: '08-cpu-architecture', title: 'Complete CPU Architecture', lessonFile: 'lessons/08-cpu-architecture.html' },
    { id: 'final', title: 'Final: Advanced Design', lessonFile: 'lessons/final.html' }
];

let currentModule = 0;
let quizScores = {};
let problemProgress = {};

// Load/save progress
function loadProgress() {
    const saved = localStorage.getItem('redstoneCourseProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentModule = data.currentModule || 0;
        quizScores = data.quizScores || {};
        problemProgress = data.problemProgress || {};
    }
}

function saveProgress() {
    const data = {
        currentModule: currentModule,
        quizScores: quizScores,
        problemProgress: problemProgress
    };
    localStorage.setItem('redstoneCourseProgress', JSON.stringify(data));
}

// Calculate overall progress
function calculateProgress() {
    let totalModules = courseModules.length;
    let completedModules = 0;

    // Count completed modules based on quiz scores
    for (let moduleId in quizScores) {
        if (quizScores[moduleId] >= 70) {
            completedModules++;
        }
    }

    // Count problem progress
    let totalProblems = Object.keys(practiceProblems).length * 50; // Approximate
    let solvedProblems = Object.keys(problemProgress).length;

    let moduleProgress = (completedModules / totalModules) * 100;
    let problemPercentage = Math.min((solvedProblems / totalProblems) * 100, 100);

    // Weight: 60% module completion, 40% problem completion
    return Math.round((moduleProgress * 0.6) + (problemPercentage * 0.4));
}

// Update progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const progress = calculateProgress();

    progressBar.style.width = progress + '%';
    progressText.textContent = `Overall Progress: ${progress}% Complete`;

    // Update module buttons
    courseModules.forEach((module, index) => {
        const button = document.querySelector(`nav button[data-module="${index}"]`);
        if (button) {
            button.classList.remove('active', 'passed', 'failed');
            if (index === currentModule) {
                button.classList.add('active');
            } else if (quizScores[module.id] >= 70) {
                button.classList.add('passed');
                button.style.background = 'var(--success)';
            } else if (quizScores[module.id] && quizScores[module.id] < 70) {
                button.classList.add('failed');
                button.style.background = 'var(--error)';
            }
        }
    });
}

// Switch to a module
function switchModule(moduleIndex) {
    currentModule = moduleIndex;
    saveProgress();

    // Hide all modules
    document.querySelectorAll('.module').forEach(module => {
        module.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(`module-${moduleIndex}`);
    if (targetModule) {
        targetModule.classList.add('active');
    }

    updateProgressBar();
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();

    // Create navigation buttons
    const navList = document.querySelector('nav ul');
    if (navList) {
        navList.innerHTML = '';
        courseModules.forEach((module, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = module.title;
            button.setAttribute('data-module', index);
            button.addEventListener('click', () => switchModule(index));
            li.appendChild(button);
            navList.appendChild(li);
        });
    }

    // Initialize modules
    if (typeof initializeProblems === 'function') {
        initializeProblems();
    }

    if (typeof initializeQuizzes === 'function') {
        initializeQuizzes();
    }

    updateProgressBar();
    switchModule(currentModule);
});

// Mark problem as solved
function markProblemSolved(problemId) {
    problemProgress[problemId] = true;
    saveProgress();
    updateProgressBar();
}

// Save quiz score
function saveQuizScore(moduleId, score) {
    quizScores[moduleId] = score;
    saveProgress();
    updateProgressBar();
}

// Get module status
function getModuleStatus(moduleId) {
    const score = quizScores[moduleId];
    if (score >= 70) return 'passed';
    if (score) return 'failed';
    return 'not-attempted';
}