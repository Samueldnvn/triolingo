// ============================================
// LINEAR ALGEBRA - QUIZ & ASSESSMENT SYSTEM
// ============================================

// Quiz State
letquizAnswers = {};

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
        }
    }
    
    const percentage = Math.round((score / total) * 100);
    
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) {
        let resultClass = percentage >= 70 ? 'correct' : 'incorrect';
        feedbackHTML = `<div class="quiz-result ${resultClass}">
            <div style="font-size: 1.5em; font-weight: 700; margin-bottom: 15px;">
                📊 Score: ${score}/${total} (${percentage}%)
            </div>
        `;
        
        if (percentage >= 70) {
            feedbackHTML += `<div style="font-weight: 700; color: var(--green-heavy);">
                🎉 Congratulations! You've mastered this module!
            </div>`;
        } else {
            feedbackHTML += `<div style="font-weight: 700; color: var(--orange-heavy);">
                📚 Keep practicing! Review the material and try again.
            </div>`;
        }
        
        feedbackHTML += `</div>`;
        feedbackEl.innerHTML = feedbackHTML;
        feedbackEl.style.display = 'block';
    }
}

// Module 1 Quiz: Numbers and Notation
const quizModule1 = {
    'Q1': 'B',
    'Q2': 'A',
    'Q3': 'C',
    'Q4': 'A',
    'Q5': 'B',
    'Q6': 'C',
    'Q7': 'A',
    'Q8': 'B'
};

const questionsModule1 = [
    {
        id: 'Q1',
        question: 'What is | -7 | (absolute value)?',
        options: ['A. -7', 'B. 7', 'C. 0', 'D. 49'],
        correct: 'B',
        explanation: '| -7 | = 7 because -7 is 7 units from zero on the number line.'
    },
    {
        id: 'Q2',
        question: 'What is √25?',
        options: ['A. 5', 'B. -5', 'C. 25', 'D. ±5'],
        correct: 'A',
        explanation: '√25 = 5 because 5 × 5 = 25.'
    },
    {
        id: 'Q3',
        question: 'What is the union of A = {1, 2} and B = {2, 3}?',
        options: ['A. {2}', 'B. {1, 3}', 'C. {1, 2, 3}', 'D. {}'],
        correct: 'C',
        explanation: 'Union of {1, 2} and {2, 3} means all elements from either set: {1, 2, 3}.'
    },
    {
        id: 'Q4',
        question: 'What is the intersection of A = {1, 2} and B = {3, 4}?',
        options: ['A. {1, 2, 3, 4}', 'B. {2, 3}', 'C. {}', 'D. {1, 4}'],
        correct: 'C',
        explanation: 'No elements are common to both sets, so intersection is empty: {}'
    },
    {
        id: 'Q5',
        question: 'Solve: x + 5 = 13',
        options: ['A. x = 5', 'B. x = 8', 'C. x = 18', 'D. x = 65'],
        correct: 'B',
        explanation: 'x + 5 = 13 → x = 13 - 5 = 8'
    },
    {
        id: 'Q6',
        question: 'What is 5²?',
        options: ['A. 10', 'B. 25', 'C. 3', 'D. 32'],
        correct: 'B',
        explanation: '5² = 5 × 5 = 25'
    },
    {
        id: 'Q7',
        question: 'Which is a complex number?',
        options: ['A. 5', 'B. -3.2', 'C. 2 + 3i', 'D. 0'],
        correct: 'C',
        explanation: '2 + 3i is a complex number with real part 2 and imaginary part 3i.'
    },
    {
        id: 'Q8',
        question: 'What is the conjugate of 2 + 5i?',
        options: ['A. 2 - 5i', 'B. -2 + 5i', 'C. -2 - 5i', 'D. 2 + 5i'],
        correct: 'A',
        explanation: 'The conjugate of a + bi is a - bi, so conjugate of 2 + 5i is 2 - 5i.'
    }
];

// Module 2 Quiz: Vectors
const quizModule2 = {
    'Q1': 'A',
    'Q2': 'B',
    'Q3': 'C',
    'Q4': 'A',
    'Q5': 'B',
    'Q6': 'C',
    'Q7': 'A',
    'Q8': 'B',
    'Q9': 'C',
    'Q10': 'A'
};

const questionsModule2 = [
    {
        id: 'Q1',
        question: 'Add: 〈2, 3〉 + 〈4, 5〉',
        options: ['A. 〈6, 8〉', 'B. 〈8, 6〉', 'C. 〈2, 5〉', 'D. 〈4, 3〉'],
        correct: 'A',
        explanation: '〈2+4, 3+5〉 = 〈6, 8〉'
    },
    {
        id: 'Q2',
        question: 'Find the norm of 〈3, 4〉',
        options: ['A. 4', 'B. 5', 'C. 7', 'D. 12'],
        correct: 'B',
        explanation: '|〈3, 4〉| = √(3² + 4²) = √(9 + 16) = √25 = 5'
    },
    {
        id: 'Q3',
        question: 'Calculate dot product: 〈1, 2〉 · 〈3, 4〉',
        options: ['A. 11', 'B. 14', 'C. 10', 'D. 6'],
        correct: 'A',
        explanation: '1×3 + 2×4 = 3 + 8 = 11'
    },
    {
        id: 'Q4',
        question: 'If two vectors are orthogonal, their dot product is:',
        options: ['A. 0', 'B. 1', 'C. -1', 'D. undefined'],
        correct: 'A',
        explanation: 'Orthogonal vectors have dot product equal to 0'
    },
    {
        id: 'Q5',
        question: 'Find |〈0, 0, 5〉|',
        options: ['A. 0', 'B. 5', 'C. 25', 'D. -5'],
        correct: 'B',
        explanation: '√(0² + 0² + 5²) = √25 = 5'
    },
    {
        id: 'Q6',
        question: 'What is the unit vector in direction of 〈3, 0, 0〉',
        options: ['A. 〈1, 0, 0〉', 'B. 〈0, 1, 0〉', 'C. 〈0, 0, 1〉', 'D. 〈3, 0, 0〉'],
        correct: 'A',
        explanation: '|〈3, 0, 0〉| = 3, so unit vector = 〈3/3, 0/3, 0/3〉 = 〈1, 0, 0〉'
    },
    {
        id: 'Q7',
        question: 'The standard basis for ℝ³ is:',
        options: ['A. {〈1,0,0〉, 〈0,1,0〉, 〈0,0,1〉}', 'B. {〈1,1,0〉, 〈0,1,1〉, 〈1,0,1〉}', 'C. {〈1,0,0〉, 〈1,0,0〉, 〈1,0,0〉}', 'D. {〈1,1,1〉}'],
        correct: 'A',
        explanation: 'The standard basis vectors (î, ĵ, k̂) are 〈1,0,0〉, 〈0,1,0〉, 〈0,0,1〉'
    },
    {
        id: 'Q8',
        question: 'Are 〈2, 4〉 and 〈1, 2〉 linearly independent?',
        options: ['A. No', 'B. Yes', 'C. Sometimes', 'D. Cannot determine'],
        correct: 'A',
        explanation: '〈2, 4〉 = 2·〈1, 2〉, so they are linearly dependent'
    },
    {
        id: 'Q9',
        question: 'The span of a single non-zero vector is:',
        options: ['A. A line', 'B. A plane', 'C. A point', 'D. Space'],
        correct: 'A',
        explanation: 'All scalar multiples of one vector forms a line through the origin'
    },
    {
        id: 'Q10',
        question: 'What is 〈1, 2〉 · 〈2, -1〉?',
        options: ['A. 0', 'B. 2', 'C. 4', 'D. -4'],
        correct: 'A',
        explanation: '1×2 + 2×(-1) = 2 - 2 = 0'
    }
];

// Module 3 Quiz: Matrices
const quizModule3 = {
    'Q1': 'A',
    'Q2': 'B',
    'Q3': 'C',
    'Q4': 'A',
    'Q5': 'B',
    'Q6': 'C'
};

const questionsModule3 = [
    {
        id: 'Q1',
        question: 'Add: [[1, 2], [3, 4]] + [[5, 6], [7, 8]]',
        options: ['A. [[6, 8], [10, 12]]', 'B. [[6, 8], [10, 12]]', 'C. [[5, 6], [7, 8]]', 'D. [[1, 2], [3, 4]]'],
        correct: 'A',
        explanation: '[[]1+5, 2+6], [3+7, 4+8] = [[6, 8], [10, 12]]'
    },
    {
        id: 'Q2',
        question: 'Multiply: 2 × [[1, 0], [0, 1]]',
        options: ['A. [[2, 0], [0, 2]]', 'B. [[2, 0], [0, 2]]', 'C. [[1, 0], [0, 1]]', 'D. [[2, 2], [2, 2]]'],
        correct: 'A',
        explanation: '2×[[1, 0], [0, 1]] = [[2×1, 2×0], [2×0, 2×1]] = [[2, 0], [0, 2]]'
    },
    {
        id: 'Q3',
        question: 'Multiply: [[1, 2], [3, 4]] [[5], [6]]',
        options: ['A. [[17], [39]]', 'B. [[39], [17]]', 'C. [[11], [33]]', 'D. [[11], [17]]'],
        correct: 'A',
        explanation: 'Row 1: 1×5 + 2×6 = 17, Row 2: 3×5 + 4×6 = 39'
    },
    {
        id: 'Q4',
        question: 'What is I (identity matrix) in 2×2?',
        options: ['A. [[1, 0], [0, 1]]', 'B. [[0, 1], [1, 0]]', 'C. [[1, 1], [1, 1]]', 'D. [[0, 0], [0, 0]]'],
        correct: 'A',
        explanation: 'Identity matrix has 1s on diagonal, 0s elsewhere: [[1, 0], [0, 1]]'
    },
    {
        id: 'Q5',
        question: 'What is the transpose of [[1, 2]]?',
        options: ['A. [[1], [2]]', 'B. [[2, 1]]', 'C. [[1, 2]]', 'D. [[2], [1]]'],
        correct: 'A',
        explanation: 'Transpose of [1, 2] (1×2) is [[1], [2]] (2×1)'
    },
    {
        id: 'Q6',
        question: 'What is [[1, 0], [0, 2]] × [[3], [4]]?',
        options: ['A. [[3], [8]]', 'B. [[12], [16]]', 'C. [[3], [4]]', 'D. [[4], [8]]'],
        correct: 'A',
        explanation: 'Row 1: 1×3 + 0×4 = 3, Row 2: 0×3 + 2×4 = 8'
    }
];

// Module 4 Quiz: Determinants
const quizModule4 = {
    'Q1': 'A',
    'Q2': 'B',
    'Q3': 'C',
    'Q4': 'A',
    'Q5': 'B'
};

const questionsModule4 = [
    {
        id: 'Q1',
        question: 'Find det([[2, 0], [0, 3]])',
        options: ['A. 6', 'B. 5', 'C. 0', 'D. -6'],
        correct: 'A',
        explanation: 'For diagonal matrix, determinant = product of diagonal entries: 2×3 = 6'
    },
    {
        id: 'Q2',
        question: 'Find det([[1, 2], [3, 4]])',
        options: ['A. 2', 'B. -2', 'C. 10', 'D. -10'],
        correct: 'B',
        explanation: 'det = (1×4) - (2×3) = 4 - 6 = -2'
    },
    {
        id: 'Q3',
        question: 'What is det(I) where I is identity matrix?',
        options: ['A. 0', 'B. -1', 'C. 1', 'D. Depends on size'],
        correct: 'C',
        explanation: 'det(I) = 1 for any size identity matrix'
    },
    {
        id: 'Q4',
        question: 'If det(A) = 0, the matrix A is:',
        options: ['A. Singular (non-invertible)', 'B. Non-singular (invertible)', 'C. Symmetric', 'D. Orthogonal'],
        correct: 'A',
        explanation: 'det(A) = 0 means A is singular and not invertible'
    },
    {
        id: 'Q5',
        question: 'det(AB) = det(A) × det(B) is:',
        options: ['A. Always true', 'B. Sometimes true', 'C. Never true', 'D. Only true for 2×2 matrices'],
        correct: 'A',
        explanation: 'The determinant is multiplicative: det(AB) = det(A)det(B)'
    }
];

// Module 5 Quiz: Eigenvalues & Eigenvectors
const quizModule5 = {
    'Q1': 'A',
    'Q2': 'B',
    'Q3': 'C'
};

const questionsModule5 = [
    {
        id: 'Q1',
        question: 'The eigenvalues of a diagonal matrix are:',
        options: ['A. The diagonal entries', 'B. The off-diagonal entries', 'C. 0', 'D. 1'],
        correct: 'A',
        explanation: 'For diagonal matrix, eigenvalues are the values on the main diagonal'
    },
    {
        id: 'Q2',
        question: 'An eigenvector x satisfies:',
        options: ['A. Ax = λx', 'B. Ax = 0', 'C. x = 0', 'D. Ax = Bx'],
        correct: 'A',
        explanation: 'Definition: Ax = λx where λ is eigenvalue and x is eigenvector'
    },
    {
        id: 'Q3',
        question: 'The characteristic equation gives:',
        options: ['A. Eigenvalues', 'B. Eigenvectors', 'C. The determinant', 'D. The rank'],
        correct: 'A',
        explanation: 'Setting det(A - λI) = 0 gives the characteristic equation whose roots are eigenvalues'
    }
];

// Module 6 Quiz: Linear Transformations
const quizModule6 = {
    'Q1': 'A',
    'Q2': 'B'
};

const questionsModule6 = [
    {
        id: 'Q1',
        question: 'The kernel of a linear transformation T is:',
        options: ['A. {x : T(x) = 0}', 'B. {y : y = T(x)}', 'C. The basis', 'D. The range'],
        correct: 'A',
        explanation: 'Kernel (or null space) is all vectors x where T(x) = 0'
    },
    {
        id: 'Q2',
        question: 'The range (image) of a linear transformation T is:',
        options: ['A. {x : T(x) = 0}', 'B. {y : y = T(x)}', 'C. The dimension', 'D. The determinant'],
        correct: 'B',
        explanation: 'Range (or image) is all possible outputs y such that y = T(x)'
    }
];

// Module 7 Quiz: Orthogonality
const quizModule7 = {
    'Q1': 'A',
    'Q2': 'B',
    'Q3': 'C'
};

const questionsModule7 = [
    {
        id: 'Q1',
        question: 'Two vectors are orthogonal if:',
        options: ['A. Their dot product is 0', 'B. Their dot product is 1', 'C. Their sum is 0', 'D. They are equal'],
        correct: 'A',
        explanation: 'v ⟂ w ⟺ v · w = 0'
    },
    {
        id: 'Q2',
        question: 'Is 〈1, 0, 0〉 a unit vector?',
        options: ['A. Yes, |v| = 1', 'B. No, |v| ≠ 1', 'C. Only in ℝ', 'D. Only in ℝ³'],
        correct: 'A',
        explanation: '|〈1, 0, 0〉| = √(1² + 0² + 0²) = √1 = 1, so it IS a unit vector'
    },
    {
        id: 'Q3',
        question: 'Orthogonal vectors are:',
        options: ['A. Perpendicular', 'B. Parallel', 'C. The same direction', 'D. Diagonal'],
        correct: 'A',
        explanation: 'Orthogonal means perpendicular (90° angle)'
    }
];

// Module 8 Quiz: Applications
const quizModule8 = {
    'Q1': 'A'
};

const questionsModule8 = [
    {
        id: 'Q1',
        question: 'SVD (Singular Value Decomposition) decomposes A into:',
        options: ['A. UΣVᵀ', 'B. QR', 'C. LU', 'D. Cholesky'],
        correct: 'A',
        explanation: 'SVD: A = UΣVᵀ where U and V are orthogonal matrices and Σ is diagonal'
    }
];

// Final Exam
const finalExam = {
    'Q1': 'B',
    'Q2': 'A',
    'Q3': 'C',
    'Q4': 'A',
    'Q5': 'B',
    'Q6': 'C',
    'Q7': 'A',
    'Q8': 'B',
    'Q9': 'C',
    'Q10': 'A',
    'Q11': 'B',
    'Q12': 'C',
    'Q13': 'A',
    'Q14': 'B',
    'Q15': 'C',
    'Q16': 'A',
    'Q17': 'B',
    'Q18': 'C',
    'Q19': 'A',
    'Q20': 'B'
};

const questionsFinalExam = [
    {
        id: 'Q1',
        question: 'What is |〈3, 4, 0〉|?',
        options: ['A. 4', 'B. 5', 'C. 7', 'D. 12'],
        correct: 'B',
        explanation: '√(3² + 4² + 0²) = √(9 + 16) = √25 = 5'
    },
    {
        id: 'Q2',
        question: 'Calculate 〈1, 2〉 · 〈2, 1〉',
        options: ['A. 4', 'B. 2', 'C. 3', 'D. 0'],
        correct: 'A',
        explanation: '1×2 + 2×1 = 2 + 2 = 4'
    },
    {
        id: 'Q3',
        question: 'If det(A) ≠ 0, then A is:',
        options: ['A. Singular', 'B. Non-singular', 'C. Zero matrix', 'D. Diagonal'],
        correct: 'B',
        explanation: 'det(A) ≠ 0 means A is invertible (non-singular)'
    },
    {
        id: 'Q4',
        question: 'Multiply: [[2, 0], [0, 1]] [[3], [4]]',
        options: ['A. [[6], [4]]', 'B. [[6], [8]]', 'C. [[12], [4]]', 'D. [[6], [12]]'],
        correct: 'A',
        explanation: 'Row 1: 2×3 + 0×4 = 6, Row 2: 0×3 + 1×4 = 4'
    },
    {
        id: 'Q5',
        question: 'The transpose of [[1, 2, 3]] is:',
        options: ['A. [[1], [2], [3]]', 'B. [[3, 2, 1]]', 'C. [[1, 2, 3]]', 'D. [[3], [2], [1]]'],
        correct: 'A',
        explanation: 'Transpose swaps rows and columns'
    },
    {
        id: 'Q6',
        question: 'What is 3! (3 factorial)?',
        options: ['A. 3', 'B. 6', 'C. 9', 'D. 12'],
        correct: 'B',
        explanation: '3! = 3 × 2 × 1 = 6'
    },
    {
        id: 'Q7',
        question: 'Find the characteristic polynomial of [[2, 1], [1, 2]]',
        options: ['A. λ² - 4λ + 3', 'B. λ² - 4λ + 1', 'C. λ² - 3λ + 2', 'D. λ² - λ'],
        correct: 'A',
        explanation: 'det([[2-λ, 1],[1, 2-λ]]) = (2-λ)² - 1 = λ² - 4λ + 4 - 1 = λ² - 4λ + 3'
    },
    {
        id: 'Q8',
        question: 'The eigenvalues of [[3, 0], [0, 5]] are:',
        options: ['A. 3 and 5', 'B. 0 and 1', 'C. 1 and 3', 'D. 5 and 8'],
        correct: 'A',
        explanation: 'Diagonal entries are eigenvalues: 3 and 5'
    },
    {
        id: 'Q9',
        question: 'What is the kernel of identity matrix?',
        options: ['A. {0}', 'B. All of ℝⁿ', 'C. A line', 'D. A plane'],
        correct: 'A',
        explanation: 'Ix = 0 has only solution x = 0, so kernel = {0}'
    },
    {
        id: 'Q10',
        question: 'What is the span of 〈1, 0〉 and 〈0, 1〉?',
        options: ['A. All of ℝ²', 'B. A line', 'C. The origin', 'D. ℝ³'],
        correct: 'A',
        explanation: 'Any 〈a, b〉 = a〈1, 0〉 + b〈0, 1〉, so span = ℝ²'
    },
    {
        id: 'Q11',
        question: 'Gram-Schmidt process produces:',
        options: ['A. Orthonormal basis', 'B. Diagonal matrix', 'C. Zero vector', 'D. Identity'],
        correct: 'A',
        explanation: 'Gram-Schmidt orthogonalizes and normalizes vectors to produce orthonormal basis'
    },
    {
        id: 'Q12',
        question: 'SVD is used for:',
        options: ['A. Finding eigenvalues', 'B. Dimensionality reduction', 'C. Adding matrices', 'D. Transposing'],
        correct: 'B',
        explanation: 'SVD (Singular Value Decomposition) is used in dimensionality reduction, compression, and more'
    },
    {
        id: 'Q13',
        question: 'If vectors are orthogonal, they are:',
        options: ['A. Linearly independent', 'B. Linearly dependent', 'C. Parallel', 'D. Diagonal'],
        correct: 'A',
        explanation: 'Non-zero orthogonal vectors are linearly independent'
    },
    {
        id: 'Q14',
        question: 'What is 〈a, b, c〉 · 〈d, e, f〉?',
        options: ['A. ad + be + cf', 'B. a + b + c', 'C. abc', 'D. def'],
        correct: 'A',
        explanation: 'Dot product in 3D is sum of products of corresponding components'
    },
    {
        id: 'Q15',
        question: 'The dimension of ℝ³ is:',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. ∞'],
        correct: 'C',
        explanation: 'ℝ³ has dimension 3 (standard basis has 3 vectors)'
    },
    {
        id: 'Q16',
        question: 'What is [[1, 2], [3, 4]]ᵀ (transpose)?',
        options: ['A. [[1, 3], [2, 4]]', 'B. [[4, 3], [2, 1]]', 'C. [[2, 1], [4, 3]]', 'D. [[1, 2], [3, 4]]'],
        correct: 'A',
        explanation: 'Transpose swaps rows and columns'
    },
    {
        id: 'Q17',
        question: 'Solve: 2x + 3 = 7',
        options: ['A. x = 2', 'B. x = 3', 'C. x = 5', 'D. x = 7'],
        correct: 'A',
        explanation: '2x = 7 - 3 = 4 → x = 2'
    },
    {
        id: 'Q18',
        question: 'What is det([[2, 1],[1, 1]])?',
        options: ['A. 1', 'B. -1', 'C. 3', 'D. 2'],
        correct: 'A',
        explanation: 'det = 2×1 - 1×1 = 2 - 1 = 1'
    },
    {
        id: 'Q19',
        question: 'Is [[1, 0], [0, 1]] an orthogonal matrix?',
        options: ['A. Yes', 'B. No', 'C. Sometimes', 'D. Only if det = 0'],
        correct: 'A',
        explanation: 'Identity matrix is orthogonal (rows are orthonormal)'
    },
    {
        id: 'Q20',
        question: 'The projection of v onto unit vector u is:',
        options: ['A. v · u', 'B. (v · u)u', 'C. u', 'D. v'],
        correct: 'B',
        explanation: 'proj_u(v) = (v · u)u when u is a unit vector'
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        recordAnswer,
        submitQuiz,
        quizModule1,
        quizModule2,
        quizModule3,
        quizModule4,
        quizModule5,
        quizModule6,
        quizModule7,
        quizModule8,
        finalExam,
        questionsModule1,
        questionsModule2,
        questionsModule3,
        questionsModule4,
        questionsModule5,
        questionsModule6,
        questionsModule7,
        questionsModule8,
        questionsFinalExam
    };
}