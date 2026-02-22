// ============================================
// CALCULUS III - QUIZ & ASSESSMENT SYSTEM
// ============================================

// Quiz state management
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = 0;
        this.timeRemaining = 0;
        this.timerInterval = null;
    }

    // Initialize a quiz
    initQuiz(quizType, quizData) {
        this.currentQuiz = quizType;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = Object.keys(quizData).length;
        
        // Clear previous selections
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Clear previous feedback
        const feedbackEl = document.getElementById('quiz-feedback');
        if (feedbackEl) {
            feedbackEl.style.display = 'none';
        }
    }

    // Record an answer
    recordAnswer(questionNum, answer) {
        this.answers[questionNum] = answer;
    }

    // Submit quiz and calculate score
    submitQuiz(correctAnswers) {
        this.score = 0;
        let results = [];
        
        for (let q in correctAnswers) {
            if (this.answers[q] === correctAnswers[q]) {
                this.score++;
                results.push(`Q${q.replace('Q', '')}: ✅ Correct`);
            } else {
                results.push(`Q${q.replace('Q', '')}: ❌ Incorrect (Answer: ${correctAnswers[q]})`);
            }
        }
        
        return {
            score: this.score,
            total: this.totalQuestions,
            percentage: Math.round((this.score / this.totalQuestions) * 100),
            results: results
        };
    }

    // Start a timed quiz
    startTimer(minutes, callback) {
        this.timeRemaining = minutes * 60; // Convert to seconds
        
        const timerEl = document.getElementById('exam-timer');
        if (timerEl) {
            this.updateTimerDisplay(timerEl);
        }
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            
            if (timerEl) {
                this.updateTimerDisplay(timerEl);
            }
            
            if (this.timeRemaining <= 0) {
                this.stopTimer();
                if (callback) {
                    callback();
                }
            }
        }, 1000);
    }

    // Update timer display
    updateTimerDisplay(el) {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        el.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Stop the timer
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
}

// Global quiz manager instance
const quizManager = new QuizManager();

// ============================================
// QUIZ QUESTION TEMPLATES
// ============================================
const quizQuestions = {
    introduction: [
        {
            id: 'Q1',
            question: 'In Calculus III, when verifying a limit exists at a point, you must check:',
            options: ['A. Two paths only', 'B. All possible paths', 'C. Horizontal and vertical approaches', 'D. No paths needed'],
            correct: 'B',
            explanation: 'In multivariable calculus, there are infinitely many paths approaching any point. The limit must be the same along ALL paths for it to exist.'
        },
        {
            id: 'Q2',
            question: 'Which of the following is a valid method to prove a limit does NOT exist?',
            options: ['A. Show the limit equals infinity', 'B. Find two different paths with different limits', 'C. Show the function is continuous', 'D. Use L\'Hôpital\'s rule'],
            correct: 'B',
            explanation: 'If you can find even two paths approaching the point that give different limit values, the overall limit does not exist.'
        },
        {
            id: 'Q3',
            question: 'The Fundamental Theorem of Calculus states that:',
            options: ['A. ∫ₐᵇ f\'(x) dx = f(b) - f(a)', 'B. d/dx ∫f(x) dx = f(x)', 'C. All of the above', 'D. None of the above'],
            correct: 'A',
            explanation: 'The FTC Part 2: ∫ₐᵇ f\'(x) dx = f(b) - f(a) relates definite integrals to antiderivatives.'
        },
        {
            id: 'Q4',
            question: 'What is the derivative of ln(x)?',
            options: ['A. 1/x', 'B. x⁻¹', 'C. 1/(x ln(10))', 'D. eˣ'],
            correct: 'A',
            explanation: 'd/dx[ln(x)] = 1/x for x > 0.'
        },
        {
            id: 'Q5',
            question: 'Integration by parts is based on which rule of differentiation?',
            options: ['A. Chain rule', 'B. Product rule', 'C. Quotient rule', 'D. Power rule'],
            correct: 'B',
            explanation: 'Integration by parts ∫u dv = uv - ∫v du comes from the product rule d(uv) = u dv + v du.'
        }
    ],
    
    vectors: [
        {
            id: 'Q1',
            question: 'Find |〈3, 4〉| (the magnitude)',
            options: ['A. 5', 'B. 7', 'C. 12', 'D. 25'],
            correct: 'A',
            explanation: '|〈3, 4〉| = √(3² + 4²) = √(9 + 16) = √25 = 5'
        },
        {
            id: 'Q2',
            question: 'If u · v = 0 and neither vector is zero, then:',
            options: ['A. u = v', 'B. u ⟂ v (orthogonal)', 'C. |u| = |v|', 'D. u + v = 0'],
            correct: 'B',
            explanation: 'A dot product of zero (with non-zero vectors) means the vectors are perpendicular (orthogonal).'
        },
        {
            id: 'Q3',
            question: 'What is i × i?',
            options: ['A. i', 'B. j', 'C. k', 'D. 0 (zero vector)'],
            correct: 'D',
            explanation: 'Any vector crossed with itself yields the zero vector since sin(0°) = 0.'
        },
        {
            id: 'Q4',
            question: 'The dot product operation is:',
            options: ['A. Anti-commutative', 'B. Commutative', 'C. Neither', 'D. Always negative'],
            correct: 'B',
            explanation: 'The dot product is commutative: u · v = v · u'
        },
        {
            id: 'Q5',
            question: 'What is the cross product i × j?',
            options: ['A. i', 'B. j', 'C. k', 'D. -i'],
            correct: 'C',
            explanation: 'Using the right-hand rule and cyclic order: i × j = k'
        },
        {
            id: 'Q6',
            question: 'The area of the parallelogram spanned by u and v is:',
            options: ['A. u · v', 'B. |u × v|', 'C. |u + v|', 'D. u × v'],
            correct: 'B',
            explanation: 'The area equals the magnitude of the cross product: Area = |u × v| = |u||v|sin(θ)'
        },
        {
            id: 'Q7',
            question: 'Which of the following is NOT a property of the dot product?',
            options: ['A. u · v = |u||v|cos(θ)', 'B. u · v = v · u', 'C. u × v = -(v × u)', 'D. (cu) · v = c(u · v)'],
            correct: 'C',
            explanation: 'Option C is a property of the CROSS product, not the dot product.'
        },
        {
            id: 'Q8',
            question: 'The angle between two orthogonal vectors is:',
            options: ['A. 0°', 'B. 45°', 'C. 90°', 'D. 180°'],
            correct: 'C',
            explanation: 'Orthogonal vectors are perpendicular, so the angle between them is 90°.'
        },
        {
            id: 'Q9',
            question: 'Find u · v for u = 〈1, 2, 3〉 and v = 〈4, 5, 6〉',
            options: ['A. 20', 'B. 30', 'C. 32', 'D. 36'],
            correct: 'C',
            explanation: 'u · v = (1)(4) + (2)(5) + (3)(6) = 4 + 10 + 18 = 32'
        },
        {
            id: 'Q10',
            question: 'The scalar projection of u onto v is:',
            options: ['A. |u|cos(θ)', 'B. (u·v)/|v|', 'C. (u·v)v/|v|²', 'D. u × v'],
            correct: 'B',
            explanation: 'scalar projection (or component) = (u · v) / |v|'
        }
    ],
    
    // Add more quiz sections for other modules...
    vectorFunctions: [
        {
            id: 'Q1',
            question: 'If r(t) represents position, what represents velocity?',
            options: ['A. r(t)', 'B. r\'(t)', 'C. r\'\'(t)', 'D. |r(t)|'],
            correct: 'B',
            explanation: 'Velocity is the derivative of position: v(t) = r\'(t)'
        },
        {
            id: 'Q2',
            question: 'Speed is best described as:',
            options: ['A. r\'(t)', 'B. |r\'(t)|', 'C. r\'\'(t)', 'D. ∫|r\'(t)| dt'],
            correct: 'B',
            explanation: 'Speed is the magnitude of velocity: |v(t)| = |r\'(t)|'
        },
        {
            id: 'Q3',
            question: 'What is the curvature of a straight line?',
            options: ['A. 0', 'B. 1', 'C. ∞', 'D. Undefined'],
            correct: 'A',
            explanation: 'A straight line has no curvature, so κ = 0.'
        },
        {
            id: 'Q4',
            question: 'For a unit speed parameterization, |r\'(t)| equals:',
            options: ['A. 0', 'B. 1', 'C. t', 'D. Variable'],
            correct: 'B',
            explanation: 'In a unit speed (or arc-length) parameterization, the speed is always 1.'
        },
        {
            id: 'Q5',
            question: 'The unit tangent vector T(t) is:',
            options: ['A. r\'(t)', 'B. r\'(t)/|r\'(t)|', 'C. r\'\'(t)', 'D. |r\'(t)|'],
            correct: 'B',
            explanation: 'T(t) = r\'(t) / |r\'(t)| - the unit vector in the direction of velocity.'
        },
        {
            id: 'Q6',
            question: 'Arc length is found by integrating:',
            options: ['A. r\'(t)', 'B. |r\'(t)|', 'C. r\'\'(t)', 'D. T(t)'],
            correct: 'B',
            explanation: 'Arc length L = ∫|r\'(t)| dt, the integral of speed.'
        },
        {
            id: 'Q7',
            question: 'The unit normal vector N(t) is:',
            options: ['A. T\'(t)', 'B. T\'(t)/|T\'(t)|', 'C. B(t)', 'D. r\'\'(t)'],
            correct: 'B',
            explanation: 'N(t) = T\'(t) / |T\'(t)|, the unit vector perpendicular to T(t).'
        },
        {
            id: 'Q8',
            question: 'Acceleration is decomposed into:',
            options: ['A. Tangential and normal components', 'B. x and y components', 'C. Radial and angular', 'D. Speed and direction'],
            correct: 'A',
            explanation: 'a(t) = a_T T + a_N N, where a_T is tangential acceleration and a_N is normal acceleration.'
        }
    ]
};

// ============================================
// FINAL EXAM QUESTIONS
// ============================================
const finalExamQuestions = [
    {
        id: 'Q1',
        question: 'Find ∇f for f(x, y) = x² + y²',
        options: ['A. 〈2x, 2y〉', 'B. 〈x, y〉', 'C. 〈2, 2〉', 'D. 〈x², y²〉'],
        correct: 'A',
        explanation: '∇f = 〈∂f/∂x, ∂f/∂y〉 = 〈2x, 2y〉'
    },
    {
        id: 'Q2',
        question: 'What is |〈3, 4, 0〉|?',
        options: ['A. 5', 'B. 7', 'C. 12', 'D. 25'],
        correct: 'A',
        explanation: '|v| = √(9 + 16 + 0) = √25 = 5'
    },
    {
        id: 'Q3',
        question: 'Evaluate ∫₀² ∫₀¹ (x + y) dy dx',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
        correct: 'B',
        explanation: '∫₀² [xy + y²/2]ᵧ₌₀¹ dx = ∫₀² (x + 1/2) dx = [x²/2 + x/2]₀² = 2 + 1 = 3'
    },
    {
        id: 'Q4',
        question: 'Which theorem relates a line integral to a surface integral?',
        options: ['A. Green\'s', 'B. Stokes\'', 'C. Divergence', 'D. Fubini\'s'],
        correct: 'B',
        explanation: 'Stokes\' Theorem relates ∫ᶜ F · dr (line integral) to ∬ₛ curl F · dS (surface integral).'
    },
    {
        id: 'Q5',
        question: 'Find the arc length of r(t) = 〈t, t, t〉 from 0 to 3',
        options: ['A. 3', 'B. 3√3', 'C. 9', 'D. 3√2'],
        correct: 'B',
        explanation: 'r\'(t) = 〈1, 1, 1〉, |r\'(t)| = √3, L = ∫₀³ √3 dt = 3√3'
    },
    {
        id: 'Q6',
        question: 'What is i × j?',
        options: ['A. i', 'B. j', 'C. k', 'D. 0'],
        correct: 'C',
        explanation: 'Using the cyclic order: i × j = k'
    },
    {
        id: 'Q7',
        question: 'Convert ∫₀¹ ∫₀√(1-x²) f(x, y) dy dx to polar coordinates',
        options: ['A. ∫₀^{π/2} ∫₀¹ f(r cosθ, r sinθ) r dr dθ', 'B. ∫₀^{π/2} ∫₀¹ f(r cosθ, r sinθ) dr dθ', 'C. ∫₀²π ∫₀¹ f(r cosθ, r sinθ) r dr dθ', 'D. ∫₀^{π} ∫₀¹ f(r cosθ, r sinθ) dr dθ'],
        correct: 'A',
        explanation: 'Region is quarter circle in first quadrant. Remember dA = r dr dθ in polar coordinates.'
    },
    {
        id: 'Q8',
        question: 'If F is conservative, then:',
        options: ['A. curl F = 0', 'B. curl F ≠ 0', 'C. div F = 0', 'D. F = 0'],
        correct: 'A',
        explanation: 'A conservative vector field has zero curl: curl F = 0 (and F = ∇f for some potential function f).'
    },
    {
        id: 'Q9',
        question: 'Find ∂/∂x of ln(x² + y²)',
        options: ['A. 2x/(x² + y²)', 'B. 1/(x² + y²)', 'C. 2x', 'D. x/(x² + y²)'],
        correct: 'A',
        explanation: '∂/∂x[ln(x² + y²)] = (2x) / (x² + y²) using the chain rule.'
    },
    {
        id: 'Q10',
        question: 'Level curves of f(x, y) are defined by:',
        options: ['A. ∇f = 0', 'B. f(x, y) = constant', 'C. ∂f/∂x = 0', 'D. ∂f/∂y = 0'],
        correct: 'B',
        explanation: 'Level curves (contour lines) consist of all points where f(x, y) equals a constant value k.'
    },
    {
        id: 'Q11',
        question: 'The Divergence Theorem relates:',
        options: ['A. Line to surface', 'B. Surface to volume', 'C. Line to area', 'D. Two surfaces'],
        correct: 'B',
        explanation: 'Divergence Theorem: ∬ₛ F · dS = ∭ᴱ div F dV (relates surface integral to volume integral)'
    },
    {
        id: 'Q12',
        question: 'What is the Jacobian for cylindrical coordinates?',
        options: ['A. 1', 'B. r', 'C. r²', 'D. sin(φ)'],
        correct: 'B',
        explanation: 'In cylindrical coordinates: dV = r dz dr dθ, so the Jacobian is r.'
    },
    {
        id: 'Q13',
        question: 'The gradient points in the direction of:',
        options: ['A. Steepest descent', 'B. Steepest ascent', 'C. No direction', 'D. Along level curves'],
        correct: 'B',
        explanation: 'The gradient ∇f always points in the direction of steepest increase (ascent) of the function.'
    },
    {
        id: 'Q14',
        question: 'Green\'s Theorem requires the curve to be:',
        options: ['A. Open', 'B. Closed', 'C. Straight', 'D. Elliptical'],
        correct: 'B',
        explanation: 'Green\'s Theorem applies to simple closed curves.'
    },
    {
        id: 'Q15',
        question: 'Find f_xy for f(x, y) = x²y³',
        options: ['A. 0', 'B. 6xy²', 'C. 6x²y', 'D. 2y³'],
        correct: 'B',
        explanation: 'f_x = 2xy³, then f_xy = 6xy²'
    },
    {
        id: 'Q16',
        question: 'The area of a region R can be found by evaluating:',
        options: ['A. ∬ᴿ 1 dA', 'B. ∬ᴿ f(x, y) dA', 'C. ∮ᶜ F · dr', 'D. ∭ᴱ f dV'],
        correct: 'A',
        explanation: 'Area = ∬ᴿ 1 dA, using a double integral over the region with integrand = 1.'
    },
    {
        id: 'Q17',
        question: 'For a conservative field F, the line integral ∫ᶜ F · dr depends on:',
        options: ['A. Only the path', 'B. Only the endpoints', 'C. Both', 'D. Neither'],
        correct: 'B',
        explanation: 'For conservative fields, ∫ᶜ F · dr = f(r(b)) - f(r(a)), depending only on endpoints (path-independent).'
    },
    {
        id: 'Q18',
        question: 'What is curl F for F = 〈y, -x, 0〉?',
        options: ['A. 〈0, 0, -2〉', 'B. 〈0, 0, 0〉', 'C. 〈0, 0, 2〉', 'D. 〈-2, 2, 0〉'],
        correct: 'A',
        explanation: 'curl F = 〈0 - 0, 0 - 0, -1 - 1〉 = 〈0, 0, -2〉'
    },
    {
        id: 'Q19',
            question: 'A Lagrange multiplier λ helps find:',
            options: ['A. Unconstrained maxima', 'B. Constrained extrema', 'C. Integrals', 'D. Derivatives'],
            correct: 'B',
            explanation: 'Lagrange multipliers are used to find extrema subject to constraints.'
        },
    {
        id: 'Q20',
        question: 'What is the volume of the sphere x² + y² + z² ≤ 4 using spherical coordinates?',
        options: ['A. 4π', 'B. 16π/3', 'C. 32π/3', 'D. 8π'],
        correct: 'C',
        explanation: 'In spherical coords: V = ∫₀²π ∫₀π ∫₀² ρ² sin(φ) dρ dφ dθ = (8/3)(2)(2π) = 32π/3'
    }
];

// ============================================
// QUIZ FUNCTIONS
// ============================================

// Generate quiz HTML
function generateQuiz(questions, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '<div class="quiz-container">';
    
    questions.forEach(q => {
        html += `
            <div class="quiz-question" data-question="${q.id}">
                <p><strong>${q.id}.</strong> ${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map(opt => `
                        <div class="quiz-option" data-answer="${opt.charAt(0)}" onclick="selectQuizOption('${q.id}', '${opt.charAt(0)}')">
                            ${opt}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += `
        <button class="submit-btn" style="width: 100%; margin-top: 20px;" onclick="submitQuiz('${containerId}')">Submit Quiz</button>
        <div class="feedback" id="${containerId}-feedback"></div>
    </div>`;
    
    container.innerHTML = html;
}

// Select quiz option
function selectQuizOption(questionId, answer) {
    const questionEl = document.querySelector(`.quiz-question[data-question="${questionId}"]`);
    if (questionEl) {
        questionEl.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const selectedOption = questionEl.querySelector(`.quiz-option[data-answer="${answer}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        quizManager.recordAnswer(questionId, answer);
    }
}

// Submit quiz
function submitQuiz(containerId) {
    const quizType = containerId.replace('-quiz', '');
    const questions = quizQuestions[quizType];
    const correctAnswers = {};
    
    questions.forEach(q => {
        correctAnswers[q.id] = q.correct;
    });
    
    const result = quizManager.submitQuiz(correctAnswers);
    const feedbackEl = document.getElementById(containerId + '-feedback');
    
    if (feedbackEl) {
        let message = `<h3>📊 Quiz Results</h3>`;
        message += `<p><strong>Score: ${result.score}/${result.total} (${result.percentage}%)</strong></p>`;
        message += `<div class="results-detail">`;
        
        result.results.forEach(r => {
            message += `<p>${r}</p>`;
        });
        
        message += `</div>`;
        
        if (result.percentage >= 80) {
            message += `<p class="success-msg">🎉 Excellent! You\'ve mastered this material!</p>`;
            // Track quiz completion
            if (typeof markQuizPassed === 'function') {
                markQuizPassed(quizType);
            }
        } else if (result.percentage >= 60) {
            message += `<p class="good-msg">👍 Good work! Review the questions you missed and try again.</p>`;
        } else {
            message += `<p class="needs-review">⚠️ Please review the material and try again.</p>`;
        }
        
        feedbackEl.innerHTML = message;
        feedbackEl.className = 'feedback ' + (result.percentage >= 60 ? 'correct' : 'incorrect');
        feedbackEl.style.display = 'block';
    }
}

// Generate final exam
function generateFinalExam(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '<div class="quiz-container">';
    html += '<h2 class="quiz-title">🏆 FINAL EXAM</h2>';
    
    finalExamQuestions.forEach(q => {
        html += `
            <div class="quiz-question" data-question="${q.id}">
                <p><strong>${q.id}.</strong> ${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map(opt => `
                        <div class="quiz-option" data-answer="${opt.charAt(0)}" onclick="selectQuizOption('${q.id}', '${opt.charAt(0)}')">
                            ${opt}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += `
        <button class="submit-btn" style="width: 100%; margin-top: 20px; font-size: 1.2em;" onclick="submitFinalExam('${containerId}')">
            🏆 Submit Final Exam
        </button>
        <div class="feedback" id="${containerId}-feedback"></div>
    </div>`;
    
    container.innerHTML = html;
}

// Submit final exam
function submitFinalExam(containerId) {
    const correctAnswers = {};
    finalExamQuestions.forEach(q => {
        correctAnswers[q.id] = q.correct;
    });
    
    const result = quizManager.submitQuiz(correctAnswers);
    const feedbackEl = document.getElementById(containerId + '-feedback');
    
    if (feedbackEl) {
        let grade;
        if (result.percentage >= 90) grade = 'A';
        else if (result.percentage >= 80) grade = 'B';
        else if (result.percentage >= 70) grade = 'C';
        else if (result.percentage >= 60) grade = 'D';
        else grade = 'F';
        
        let message = `
            <div class="exam-results">
                <h2>🏆 FINAL EXAM RESULTS 🏆</h2>
                <div class="grade-display">
                    <div class="grade-badge grade-${grade.toLowerCase()}">${grade}</div>
                    <p>Score: ${result.score}/${result.total} (${result.percentage}%)</p>
                </div>
        `;
        
        if (result.percentage >= 90) {
            message += `
                <p class="congrats">🎊 CONGRATULATIONS! 🎊</p>
                <p>🏅 YOU HAVE MASTERED CALCULUS III! 🏅</p>
                <p>🔧 Congratulations, Master Builder! 🔧</p>
            `;
        } else if (result.percentage >= 70) {
            message += `
                <p>✨ Great job! You\'ve demonstrated solid understanding of Calculus III!</p>
                <p>👍 Keep practicing to achieve mastery!</p>
            `;
        } else {
            message += `
                <p>📚 Continue studying! Review each module and try again.</p>
                <p>💪 You can do this!</p>
            `;
        }
        
        message += '</div>';
        feedbackEl.innerHTML = message;
        feedbackEl.className = 'feedback correct';
        feedbackEl.style.display = 'block';
    }
}

// ============================================
// AUTO-GENERATE QUIZZES ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Generate any quizzes with ID matching pattern
    document.querySelectorAll('[id$="-quiz"]').forEach(container => {
        const quizType = container.id.replace('-quiz', '');
        if (quizQuestions[quizType]) {
            generateQuiz(quizQuestions[quizType], container.id);
        }
    });
    
    // Generate final exam if exists
    const finalExamContainer = document.getElementById('final-exam');
    if (finalExamContainer) {
        generateFinalExam('final-exam');
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quizManager,
        quizQuestions,
        finalExamQuestions,
        generateQuiz,
        generateFinalExam,
        selectQuizOption,
        submitQuiz,
        submitFinalExam
    };
}