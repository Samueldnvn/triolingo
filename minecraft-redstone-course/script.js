// ========== MINECRAFT REDSTONE COURSE JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    // ===== FAQ Accordion =====
    initFAQ();

    // ===== Scroll to Top Button =====
    initScrollTop();

    // ===== Animated Hero Elements =====
    initHeroAnimations();

    // ===== Navigation Active State =====
    updateActiveNavLink();

    // ===== Computer Schematic Hover Effects =====
    initSchematicEffects();

    // ===== Parallax Effect =====
    initParallax();
});

// ===== FAQ ACCORDION =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            this.classList.toggle('active');
        });
    });

    // Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
}

// ===== SCROLL TO TOP BUTTON =====
function initScrollTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '▲';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== HERO ANIMATIONS =====
function initHeroAnimations() {
    const redstoneLamp = document.querySelector('.lamp-block');
    const signalLines = document.querySelectorAll('.signal-line');

    // Add random delays to signal animations
    signalLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
    });

    // Make lamp interactive
    if (redstoneLamp) {
        redstoneLamp.addEventListener('click', function() {
            this.style.animation = 'none';
            void this.offsetWidth; // Trigger reflow
            this.style.animation = 'lampGlow 0.5s ease-in-out 5';
            setTimeout(() => {
                this.style.animation = 'lampGlow 2s ease-in-out infinite';
            }, 3000);
        });
    }
}

// ===== NAVIGATION ACTIVE STATE =====
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== SCHEMATIC HOVER EFFECTS =====
function initSchematicEffects() {
    const schematicBlocks = document.querySelectorAll('.computer-schematic > div');

    const blockNames = {
        'cpu-block': 'Central Processing Unit - Executes instructions',
        'ram-block': 'Random Access Memory - 256 bytes',
        'rom-block': 'Read Only Memory - 256 bytes',
        'alu-block': 'Arithmetic Logic Unit - Performs calculations',
        'display-block': 'Hex Display - Shows output values'
    };

    schematicBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            const blockClass = this.classList[0];
            if (blockNames[blockClass]) {
                this.setAttribute('title', blockNames[blockClass]);
            }
        });

        block.addEventListener('click', function() {
            const blockClass = this.classList[0];
            const descriptions = {
                'cpu-block': 'The CPU fetches, decodes, and executes instructions. It contains the control unit, ALU, and registers.',
                'ram-block': 'RAM is volatile memory used for storing data and program instructions during execution.',
                'rom-block': 'ROM stores fixed programs and cannot be modified during normal operation.',
                'alu-block': 'The ALU performs arithmetic operations (add, subtract) and bitwise operations (AND, OR, XOR, NOT).',
                'display-block': 'The display shows output in hexadecimal format (0-F).'
            };

            if (descriptions[blockClass]) {
                alert(descriptions[blockClass]);
            }
        });
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    const clouds = document.querySelector('.clouds');
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                if (clouds) {
                    clouds.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== MODULE PROGRESS TRACKING =====
class ModuleProgress {
    constructor() {
        this.progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
        this.updateUI();
    }

    markComplete(moduleId) {
        this.progress[moduleId] = true;
        this.save();
        this.updateUI();
    }

    isComplete(moduleId) {
        return this.progress[moduleId] === true;
    }

    getCompletionPercentage() {
        const totalModules = 10;
        const completedModules = Object.keys(this.progress).length;
        return Math.round((completedModules / totalModules) * 100);
    }

    save() {
        localStorage.setItem('courseProgress', JSON.stringify(this.progress));
    }

    updateUI() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            bar.style.width = `${this.getCompletionPercentage()}%`;
        });

        const progressTexts = document.querySelectorAll('.progress-text');
        progressTexts.forEach(text => {
            text.textContent = `${this.getCompletionPercentage()}% Complete`;
        });
    }
}

// ===== QUIZ FUNCTIONALITY =====
class QuizManager {
    constructor(quizId) {
        this.quizId = quizId;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = {};
    }

    loadQuestions() {
        // Quiz questions would be loaded from data or fetched
        return [];
    }

    selectAnswer(questionId, answer) {
        this.answers[questionId] = answer;
    }

    submitQuiz() {
        const questions = this.loadQuestions();
        this.score = 0;

        questions.forEach((question, index) => {
            if (this.answers[index] === question.correctAnswer) {
                this.score++;
            }
        });

        return {
            score: this.score,
            total: questions.length,
            percentage: Math.round((this.score / questions.length) * 100)
        };
    }
}

// ===== MODULE NAVIGATION =====
class ModuleNavigation {
    constructor() {
        this.modules = [
            'logic-gates',
            'advanced-circuitry',
            'binary-systems',
            'alu-design',
            'memory',
            'control-unit',
            'io-systems',
            'full-computer',
            'advanced-topics',
            'final-project'
        ];
    }

    getCurrentModuleIndex() {
        const currentPath = window.location.hash.substring(1);
        return this.modules.indexOf(currentPath);
    }

    getNextModule() {
        const currentIndex = this.getCurrentModuleIndex();
        if (currentIndex < this.modules.length - 1) {
            return this.modules[currentIndex + 1];
        }
        return null;
    }

    getPreviousModule() {
        const currentIndex = this.getCurrentModuleIndex();
        if (currentIndex > 0) {
            return this.modules[currentIndex - 1];
        }
        return null;
    }

    goToModule(moduleId) {
        window.location.hash = moduleId;
        window.scrollTo(0, 0);
    }
}

// ===== SEARCH FUNCTIONALITY =====
class CourseSearch {
    constructor() {
        this.searchIndex = this.buildSearchIndex();
    }

    buildSearchIndex() {
        const content = {
            'logic gates': 'Module 1 - Basic logic gates: NOT, AND, OR, NAND, NOR, XOR, XNOR',
            'adders': 'Module 2 - Half adder, full adder, ripple-carry adder design',
            'binary': 'Module 3 - Binary number system, decimal to binary conversion',
            'alu': 'Module 4 - Arithmetic Logic Unit design and implementation',
            'memory': 'Module 5 - Flip-flops, registers, RAM, ROM cells',
            'flip-flop': 'Module 1 and 5 - RS, JK, D, T flip-flops',
            'control unit': 'Module 6 - Instruction decoder, control logic',
            'cpu': 'Module 8 - Complete CPU architecture',
            'computer': 'Final Project - Building your own 8-bit computer'
        };
        return content;
    }

    search(query) {
        const results = [];
        const keywords = query.toLowerCase().split(' ');

        Object.entries(this.searchIndex).forEach(([key, value]) => {
            const match = keywords.every(keyword => key.includes(keyword));
            if (match) {
                results.push({ key, value });
            }
        });

        return results;
    }
}

// ===== TOAST NOTIFICATIONS =====
class ToastNotifications {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
        `;
        document.body.appendChild(container);
        return container;
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 25px;
            margin-top: 10px;
            border-radius: 5px;
            border: 3px solid #1D1D1D;
            font-family: 'VT323', monospace;
            font-size: 1.2rem;
            animation: slideIn 0.3s ease-out;
            cursor: pointer;
        `;

        this.container.appendChild(toast);

        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);

        // Auto remove
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, duration);

        // Click to remove
        toast.addEventListener('click', () => {
            toast.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        });
    }
}

// ===== CODE BLOCK HIGHLIGHTING =====
function initCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        const code = block.textContent;
        const lines = code.split('\n');
        let highlightedCode = '';

        lines.forEach((line, index) => {
            let lineHtml = `<span class="line-number">${index + 1}</span>`;
            lineHtml += `<span class="line-content">${line}</span>`;
            highlightedCode += `<div class="code-line">${lineHtml}</div>`;
        });

        block.innerHTML = highlightedCode;
    });
}

// ===== EXPANDABLE CODE SECTIONS =====
function initExpandableSections() {
    const expandButtons = document.querySelectorAll('.expand-toggle');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = content.style.maxHeight;

            if (isExpanded) {
                content.style.maxHeight = null;
                this.textContent = 'Show More ▼';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.textContent = 'Show Less ▲';
            }
        });
    });
}

// ===== IMAGE LAZY LOADING =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// ===== KEYBOARD NAVIGATION =====
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Escape to close modals
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
            }
        }

        // Arrow keys for module navigation
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const nav = new ModuleNavigation();
            if (e.key === 'ArrowRight') {
                const next = nav.getNextModule();
                if (next) nav.goToModule(next);
            } else {
                const prev = nav.getPreviousModule();
                if (prev) nav.goToModule(prev);
            }
        }
    });
}

// ===== TRACKING/ANALYTICS =====
class CourseAnalytics {
    constructor() {
        this.events = [];
    }

    trackEvent(eventName, data = {}) {
        const event = {
            eventName,
            timestamp: new Date().toISOString(),
            data
        };

        this.events.push(event);

        // In production, send to analytics service
        console.log('Event tracked:', event);
    }

    trackModuleView(moduleId) {
        this.trackEvent('module_view', { moduleId });
    }

    trackQuizAttempt(quizId, score, total) {
        this.trackEvent('quiz_attempt', {
            quizId,
            score,
            total,
            percentage: (score / total) * 100
        });
    }

    trackProjectCompletion(projectId) {
        this.trackEvent('project_completion', { projectId });
    }
}

// ===== UTILITIES =====
const Utils = {
    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else if (minutes > 0) {
            return `${minutes}m ${remainingSeconds}s`;
        } else {
            return `${remainingSeconds}s`;
        }
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ===== INITIALIZATION ON EVERY PAGE LOAD =====
window.addEventListener('load', function() {
    initCodeHighlighting();
    initExpandableSections();
    initLazyLoading();
    initKeyboardNavigation();

    // Initialize toast notifications
    window.toast = new ToastNotifications();
});

// ===== EXPORT FOR MODULE PAGE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ModuleProgress,
        QuizManager,
        ModuleNavigation,
        CourseSearch,
        ToastNotifications,
        CourseAnalytics,
        Utils
    };
}