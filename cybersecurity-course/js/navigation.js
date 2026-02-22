// ============================================
// NAVIGATION AND PROGRESS TRACKING
// ============================================

const modules = [
    { id: '01-foundations', title: 'Foundations & Fundamentals' },
    { id: '02-network-security', title: 'Network Security' },
    { id: '03-operating-system-security', title: 'OS Security' },
    { id: '04-cryptography', title: 'Cryptography' },
    { id: '05-anonymity-privacy', title: 'Anonymity & Privacy' },
    { id: '06-web-security', title: 'Web Application Security' },
    { id: '07-social-engineering', title: 'Social Engineering' },
    { id: '08-incident-response', title: 'Incident Response & Forensics' },
    { id: '09-advanced-anonymity', title: 'Advanced Anonymity' },
    { id: '10-defensive-strategies', title: 'Defensive Strategies' },
    { id: 'final', title: 'Final Exam' }
];

function saveProgress(moduleId, sectionId) {
    const progress = JSON.parse(localStorage.getItem('cybersecurity-progress') || '{}');
    progress[moduleId] = progress[moduleId] || { sections: [], completed: false };
    if (!progress[moduleId].sections.includes(sectionId)) {
        progress[moduleId].sections.push(sectionId);
    }
    localStorage.setItem('cybersecurity-progress', JSON.stringify(progress));
    updateProgressDisplay();
}

function markModuleComplete(moduleId) {
    const progress = JSON.parse(localStorage.getItem('cybersecurity-progress') || '{}');
    if (progress[moduleId]) {
        progress[moduleId].completed = true;
    }
    localStorage.setItem('cybersecurity-progress', JSON.stringify(progress));
    updateProgressDisplay();
}

function loadProgress() {
    updateProgressDisplay();
    highlightActiveModule();
}

function updateProgressDisplay() {
    const progress = JSON.parse(localStorage.getItem('cybersecurity-progress') || '{}');
    const totalModules = modules.length;
    const completedModules = modules.filter(m => progress[m.id] && progress[m.id].completed).length;

    const percentage = Math.round((completedModules / totalModules) * 100);
    const progressBar = document.getElementById('overallProgress');
    const progressText = document.getElementById('progressText');

    if (progressBar) progressBar.style.width = percentage + '%';
    if (progressText) progressText.textContent = percentage + '% Complete';
}

function highlightActiveModule() {
    const currentPath = window.location.pathname;
    const activeLink = document.querySelector(`.toc-lesson a[href="${currentPath.split('/').pop()}"]`);
    if (activeLink) {
        document.querySelectorAll('.toc-lesson a').forEach(a => a.classList.remove('active'));
        activeLink.classList.add('active');
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showSection(sectionId) {
    document.querySelectorAll('[data-section]').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetSection) {
        targetSection.classList.add('active');
        saveProgress(getCurrentModuleId(), sectionId);
    }
}

function getCurrentModuleId() {
    const path = window.location.pathname;
    const match = path.match(/(\d{2}-[^/]+)\.html/);
    return match ? match[1] : null;
}

function navigateTo(moduleId) {
    if (moduleId) {
        window.location.href = `lessons/${moduleId}.html`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
});

console.log('Navigation loaded');