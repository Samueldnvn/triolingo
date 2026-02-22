// ============================================
// LINEAR ALGEBRA - PRACTICE PROBLEMS DATABASE
// ============================================

const practiceProblems = {
    // ==========================================
    // MODULE 1: NUMBERS AND NOTATION
    // ==========================================
    numbers: {
        basic: [
            {
                id: '1-1',
                type: 'computational',
                difficulty: 'easy',
                question: 'Calculate: | -5 | (absolute value of -5)',
                answer: '5',
                alternatives: [],
                hint: 'Absolute value is the distance from zero on the number line',
                explanation: '| -5 | = 5 because -5 is 5 units away from 0 on the number line'
            },
            {
                id: '1-2',
                type: 'computational',
                difficulty: 'easy',
                question: 'Simplify: √16',
                answer: '4',
                alternatives: ['4.0'],
                hint: 'What number multiplied by itself equals 16?',
                explanation: '4 × 4 = 16, so √16 = 4'
            },
            {
                id: '1-3',
                type: 'computational',
                difficulty: 'easy',
                question: 'Solve for x: 2x + 3 = 11',
                answer: '4',
                alternatives: ['x=4', '4.0'],
                hint: 'Subtract 3 from both sides first',
                explanation: '2x + 3 = 11 → 2x = 8 → x = 4'
            },
            {
                id: '1-4',
                type: 'computational',
                difficulty: 'medium',
                question: 'Calculate: | 3 - 7 |',
                answer: '4',
                alternatives: ['4.0'],
                hint: 'First compute 3 - 7, then take absolute value',
                explanation: '3 - 7 = -4, then | -4 | = 4'
            },
            {
                id: '1-5',
                type: 'computational',
                difficulty: 'medium',
                question: 'Simplify: | x - 2 | where x = -1',
                answer: '3',
                alternatives: ['3.0'],
                hint: 'Substitute x = -1, then compute absolute value',
                explanation: '| -1 - 2 | = | -3 | = 3'
            }
        ],
        sets: [
            {
                id: '1-6',
                type: 'conceptual',
                difficulty: 'easy',
                question: 'What is the intersection of sets A = {1, 2, 3} and B = {3, 4, 5}?',
                answer: '{3}',
                alternatives: ['{ 3 }', '3'],
                hint: 'Intersection means elements in BOTH sets',
                explanation: 'The only element common to both sets is 3, so A ∩ B = {3}'
            },
            {
                id: '1-7',
                type: 'conceptual',
                difficulty: 'easy',
                question: 'What is the union of sets A = {1, 2, 3} and B = {3, 4, 5}?',
                answer: '{1,2,3,4,5}',
                alternatives: ['{ 1, 2, 3, 4, 5 }', '1,2,3,4,5'],
                hint: 'Union means ALL elements from either set',
                explanation: 'A ∪ B = {1, 2, 3, 4, 5} - all elements that are in A or B (or both)'
            }
        ],
        complex: [
            {
                id: '1-8',
                type: 'computational',
                difficulty: 'medium',
                question: 'Simplify: (2 + 3i) + (4 - i) where i = √(-1)',
                answer: '6+2i',
                alternatives: ['6 + 2i', '(6+2i)'],
                hint: 'Add real parts together and imaginary parts together',
                explanation: '(2 + 3i) + (4 - i) = (2+4) + (3i - i) = 6 + 2i'
            },
            {
                id: '1-9',
                type: 'computational',
                difficulty: 'medium',
                question: 'What is the conjugate of 3 + 4i?',
                answer: '3-4i',
                alternatives: ['3 - 4i'],
                hint: 'Complex conjugate flips the sign of the imaginary part',
                explanation: 'The conjugate of a + bi is a - bi, so conjugate of 3 + 4i is 3 - 4i'
            }
        ]
    },
    
    // ==========================================
    // MODULE 2: VECTORS
    // ==========================================
    vectors: {
        basicOperations: [
            {
                id: '2-1',
                type: 'computational',
                difficulty: 'easy',
                question: 'Add the vectors: 〈1, 2〉 + 〈3, 4〉',
                answer: '<4,6>',
                alternatives: ['(4,6)', '<4, 6>', '(4, 6)'],
                hint: 'Add corresponding components: (1+3, 2+4)',
                explanation: '〈1, 2〉 + 〈3, 4〉 = 〈1+3, 2+4〉 = 〈4, 6〉'
            },
            {
                id: '2-2',
                type: 'computational',
                difficulty: 'easy',
                question: 'Multiply: 3 ⋅ 〈2, 5〉 (scalar multiplication)',
                answer: '<6,15>',
                alternatives: ['(6,15)', '<6, 15>', '(6, 15)'],
                hint: 'Multiply each component by the scalar',
                explanation: '3 ⋅ 〈2, 5〉 = 〈3×2, 3×5〉 = 〈6, 15〉'
            },
            {
                id: '2-3',
                type: 'computational',
                difficulty: 'easy',
                question: 'Subtract: 〈5, 3〉 - 〈2, 1〉',
                answer: '<3,2>',
                alternatives: ['(3,2)', '<3, 2>', '(3, 2)'],
                hint: 'Subtract corresponding components',
                explanation: '〈5, 3〉 - 〈2, 1〉 = 〈5-2, 3-1〉 = 〈3, 2〉'
            },
            {
                id: '2-4',
                type: 'computational',
                difficulty: 'medium',
                question: 'Calculate the norm (magnitude) of 〈3, 4〉',
                answer: '5',
                alternatives: ['5.0'],
                hint: 'Use formula: |v| = √(v₁² + v₂²)',
                explanation: '|〈3, 4〉| = √(3² + 4²) = √(9 + 16) = √25 = 5'
            },
            {
                id: '2-5',
                type: 'computational',
                difficulty: 'medium',
                question: 'Calculate the norm of 〈1, 2, 2〉',
                answer: '3',
                alternatives: ['3.0'],
                hint: 'Use 3D magnitude formula: |v| = √(v₁² + v₂² + v₃²)',
                explanation: '|〈1, 2, 2〉| = √(1 + 4 + 4) = √9 = 3'
            },
            {
                id: '2-6',
                type: 'computational',
                difficulty: 'medium',
                question: 'Find the unit vector in the direction of 〈1, 1〉',
                answer: '<1/√2,1/√2>',
                alternatives: ['<1/sqrt(2),1/sqrt(2)>', '<0.707,0.707>'],
                hint: 'Unit vector = v / |v|',
                explanation: '|〈1, 1〉| = √2, so unit vector = 〈1/√2, 1/√2〉'
            }
        ],
        dotProduct: [
            {
                id: '2-7',
                type: 'computational',
                difficulty: 'easy',
                question: 'Calculate the dot product: 〈1, 2〉 · 〈3, 4〉',
                answer: '11',
                alternatives: ['11.0'],
                hint: 'Dot product = v₁w₁ + v₂w₂',
                explanation: '〈1, 2〉 · 〈3, 4〉 = 1×3 + 2×4 = 3 + 8 = 11'
            },
            {
                id: '2-8',
                type: 'computational',
                difficulty: 'easy',
                question: 'Calculate: 〈2, 0〉 · 〈0, 3〉',
                answer: '0',
                alternatives: ['0.0'],
                hint: 'Perpendicular vectors have dot product of zero',
                explanation: '〈2, 0〉 · 〈0, 3〉 = 2×0 + 0×3 = 0 + 0 = 0'
            },
            {
                id: '2-9',
                type: 'computational',
                difficulty: 'medium',
                question: 'Find the angle between 〈1, 0〉 and 〈1, 1〉',
                answer: '45°',
                alternatives: ['45 degrees', 'π/4'],
                hint: 'Use formula: cos(θ) = (v · w) / (|v| |w|)',
                explanation: 'v · w = 1, |v| = 1, |w| = √2, cos(θ) = 1/√2, so θ = 45°'
            },
            {
                id: '2-10',
                type: 'conceptual',
                difficulty: 'easy',
                question: 'If two vectors are orthogonal, their dot product is:',
                answer: '0',
                alternatives: ['0', 'zero'],
                hint: 'Orthogonal = perpendicular',
                explanation: 'Orthogonal vectors have a dot product of zero: v · w = 0'
            }
        ],
        threeD: [
            {
                id: '2-11',
                type: 'computational',
                difficulty: 'easy',
                question: 'Add: 〈1, 2, 3〉 + 〈4, 5, 6〉',
                answer: '<5,7,9>',
                alternatives: ['(5,7,9)', '<5, 7, 9>', '(5, 7, 9)'],
                hint: 'Add component-wise in 3D',
                explanation: '〈1+4, 2+5, 3+6〉 = 〈5, 7, 9〉'
            },
            {
                id: '2-12',
                type: 'computational',
                difficulty: 'easy',
                question: 'Calculate: 〈1, 2, 3〉 · 〈4, 5, 6〉',
                answer: '32',
                alternatives: ['32.0'],
                hint: 'Dot product in 3D: v₁w₁ + v₂w₂ + v₃w₃',
                explanation: '1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32'
            },
            {
                id: '2-13',
                type: 'computational',
                difficulty: 'medium',
                question: 'Find |〈1, 1, 1〉| (norm in 3D)',
                answer: '√3',
                alternatives: ['sqrt(3)', '1.732'],
                hint: '|v| = √(v₁² + v₂² + v₃²)',
                explanation: '√(1 + 1 + 1) = √3'
            }
        ],
        subspaces: [
            {
                id: '2-14',
                type: 'conceptual',
                difficulty: 'medium',
                question: 'Is 〈1, 0, 0〉 + 〈0, 1, 0〉 + 〈0, 0, 1〉 = 〈0, 0, 0〉?',
                answer: 'No',
                alternatives: ['no', 'false'],
                hint: 'Add the vectors component-wise',
                explanation: '〈1+0+0, 0+1+0, 0+0+1〉 = 〈1, 1, 1〉 ≠ 〈0, 0, 0〉'
            },
            {
                id: '2-15',
                type: 'conceptual',
                difficulty: 'medium',
                question: 'The span of a single non-zero vector in ℝ² is:',
                answer: 'a line',
                alternatives: ['line', '1-dimensional', 'a line through origin'],
                hint: 'All scalar multiples of one vector form a line',
                explanation: 'The span of one vector is all scalar multiples of that vector, which forms a line through the origin'
            },
            {
                id: '2-16',
                type: 'conceptual',
                difficulty: 'hard',
                question: 'Are vectors 〈1, 2〉 and 〈2, 4〉 linearly independent?',
                answer: 'No',
                alternatives: ['no', 'false'],
                hint: 'Check if one is a scalar multiple of the other',
                explanation: '〈2, 4〉 = 2 ⋅ 〈1, 2〉, so they are linearly DEPENDENT'
            }
        ],
        basis: [
            {
                id: '2-17',
                type: 'conceptual',
                difficulty: 'medium',
                question: 'The standard basis for ℝ² is:',
                answer: '{<1,0>,<0,1>}',
                alternatives: ['{<1,0>, <0,1>}', '{(1,0),(0,1)}'],
                hint: 'What are the unit vectors along x and y axes?',
                explanation: 'The standard basis for ℝ² is {î, ĵ} = {〈1, 0〉, 〈0, 1〉}'
            },
            {
                id: '2-18',
                type: 'computational',
                difficulty: 'hard',
                question: 'What is the dimension of the span of 〈1, 0, 0〉 and 〈0, 1, 0〉?',
                answer: '2',
                alternatives: ['2.0'],
                hint: 'These two vectors are linearly independent',
                explanation: '〈1, 0, 0〉 and 〈0, 1, 0〉 span a plane in ℝ³, so dimension = 2'
            }
        ]
    },

    // ==========================================
    // MODULE 3: MATRICES
    // ==========================================
    matrices: {
        operations: [
            {
                id: '3-1',
                type: 'computational',
                difficulty: 'easy',
                question: 'Add: [[1, 2], [3, 4]] + [[5, 6], [7, 8]]',
                answer: '[[6,8],[10,12]]',
                alternatives: ['[[6, 8],[10, 12]]', '[6,8,10,12]'],
                hint: 'Add corresponding entries',
                explanation: '[[1+5, 2+6],[3+7, 4+8]] = [[6, 8],[10, 12]]'
            },
            {
                id: '3-2',
                type: 'computational',
                difficulty: 'easy',
                question: 'Multiply scalar 3 with matrix [[1, 2], [3, 4]]',
                answer: '[[3,6],[9,12]]',
                alternatives: ['[[3, 6],[9, 12]]', '[3,6,9,12]'],
                hint: 'Multiply each entry by the scalar',
                explanation: '3 ⋅ [[1, 2],[3, 4]] = [[3×1, 3×2],[3×3, 3×4]] = [[3, 6],[9, 12]]'
            },
            {
                id: '3-3',
                type: 'computational',
                difficulty: 'medium',
                question: 'Find the transpose of [[1, 2], [3, 4], [5, 6]]',
                answer: '[[1,3,5],[2,4,6]]',
                alternatives: ['[[1, 3, 5],[2, 4, 6]]', '[1,3,5,2,4,6]'],
                hint: 'Transpose swaps rows with columns',
                explanation: 'Original: [[1, 2],[3, 4],[5, 6]] → Transpose: [[1, 3, 5],[2, 4, 6]]'
            }
        ],
        matrixMultiplication: [
            {
                id: '3-4',
                type: 'computational',
                difficulty: 'medium',
                question: 'Multiply: [[1, 2],[3, 4]] [[5],[6]]',
                answer: '[[17],[39]]',
                alternatives: ['[[17],[39]]', '[17,39]'],
                hint: 'Row × Column: (1×5 + 2×6, 3×5 + 4×6)',
                explanation: 'Row 1: 1×5 + 2×6 = 17, Row 2: 3×5 + 4×6 = 39 → [[17],[39]]'
            },
            {
                id: '3-5',
                type: 'computational',
                difficulty: 'hard',
                question: 'Multiply: [[1, 0],[0, 1]] [[a, b],[c, d]]',
                answer: '[[a,b],[c,d]]',
                alternatives: ['[[a, b],[c, d]]'],
                hint: 'This is multiplying by the identity matrix',
                explanation: 'Identity matrix I times any matrix A gives A: IA = A'
            }
        ],
        systems: [
            {
                id: '3-6',
                type: 'computational',
                difficulty: 'easy',
                question: 'Solve the system: x + y = 3, x - y = 1',
                answer: 'x=2,y=1',
                alternatives: ['x=2, y=1', '(2,1)', '2,1'],
                hint: 'Add the two equations to eliminate y',
                explanation: 'Adding: 2x = 4 → x = 2. Then y = 3 - x = 1'
            },
            {
                id: '3-7',
                type: 'computational',
                difficulty: 'medium',
                question: 'Solve: 2x = 4, x + y = 7',
                answer: 'x=2,y=5',
                alternatives: ['x=2, y=5', '(2,5), '2,5'],
                hint: 'Solve for x first, then substitute',
                explanation: '2x = 4 → x = 2. Then 2 + y = 7 → y = 5'
            }
        ]
    },

    // ==========================================
    // MODULE 4: DETERMINANTS
    // ==========================================
    determinants: {
        basic: [
            {
                id: '4-1',
                type: 'computational',
                difficulty: 'easy',
                question: 'Find det([[2, 0],[0, 3]])',
                answer: '6',
                alternatives: ['6.0'],
                hint: 'For diagonal matrix, determinant = product of diagonal',
                explanation: 'det([[2, 0],[0, 3]]) = 2×3 = 6'
            },
            {
                id: '4-2',
                type: 'computational',
                difficulty: 'easy',
                question: 'Find det([[1, 2],[3, 4]])',
                answer: '-2',
                alternatives: ['-2.0'],
                hint: 'Use formula: det([[a, b],[c, d]]) = ad - bc',
                explanation: 'det = 1×4 - 2×3 = 4 - 6 = -2'
            },
            {
                id: '4-3',
                type: 'conceptual',
                difficulty: 'easy',
                question: 'What is det(I) where I is the 2×2 identity matrix?',
                answer: '1',
                alternatives: ['1.0'],
                hint: 'Identity matrix has 1s on diagonal',
                explanation: 'det([[1, 0],[0, 1]]) = 1×1 - 0×0 = 1'
            }
        ],
        threeByThree: [
            {
                id: '4-4',
                type: 'computational',
                difficulty: 'medium',
                question: 'Find det([[1, 0, 0],[0, 2, 0],[0, 0, 3]])',
                answer: '6',
                alternatives: ['6.0'],
                hint: 'Product of diagonal entries for triangular matrix',
                explanation: 'det = 1×2×3 = 6'
            },
            {
                id: '4-5',
                type: 'computational',
                difficulty: 'hard',
                question: 'Calculate det([[2, 0, 0],[1, 3, 0],[2, 1, 4]])',
                answer: '24',
                alternatives: ['24.0'],
                hint: 'Use cofactor expansion along first row',
                explanation: 'Expanding along first row: 2×det([[3, 0],[1, 4]]) = 2×(3×4 - 0×1) = 2×12 = 24'
            }
        ]
    },

    // ==========================================
    // MODULE 5: EIGENVALUES
    // ==========================================
    eigenvalues: {
        basic: [
            {
                id: '5-1',
                type: 'computational',
                difficulty: 'medium',
                question: 'Calculate det([[2, 1],[1, 2]] - λI) (characteristic polynomial)',
                answer: 'λ²-4λ+3',
                alternatives: ['λ^2 - 4λ + 3', 'lambda^2-4lambda+3'],
                hint: 'det([[2-λ, 1],[1, 2-λ]])',
                explanation: '(2-λ)(2-λ) - 1 = 4 - 4λ + λ² - 1 = λ² - 4λ + 3'
            },
            {
                id: '5-2',
                type: 'computational',
                difficulty: 'medium',
                question: 'The eigenvalues of [[2, 0],[0, 3]] are:',
                answer: '2,3',
                alternatives: ['2 and 3', '2,3', '[2,3]'],
                hint: 'Eigenvalues of diagonal matrix are the diagonal entries',
                explanation: 'For diagonal matrix, eigenvalues are the diagonal values: 2 and 3'
            }
        ],
        eigenvectors: [
            {
                id: '5-3',
                type: 'conceptual',
                difficulty: 'medium',
                question: 'An eigenvector x satisfies:',
                answer: 'Ax = λx',
                alternatives: ['Ax = λx', 'A * x = λ * x'],
                hint: 'Definition of eigenvector',
                explanation: 'An eigenvector x for matrix A and eigenvalue λ satisfies Ax = λx'
            }
        ]
    },

    // ==========================================
    // MODULE 6: LINEAR TRANSFORMATIONS
    // ==========================================
    transformations: [
        {
            id: '6-1',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'The kernel of a linear transformation T is:',
            answer: 'all vectors that map to zero',
            alternatives: ['null space', 'ker(T)', 'vectors x where T(x) = 0'],
            hint: 'Kernel = null space = vectors mapped to zero',
            explanation: 'The kernel (or null space) is { x : T(x) = 0 }'
        },
        {
            id: '6-2',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'The range (image) of a linear transformation T is:',
            answer: 'all vectors in the codomain',
            alternatives: ['column space', 'Im(T)', 'outputs'],
            hint: 'Range = image = all possible outputs',
            explanation: 'The range (or image) is all vectors y such that y = T(x) for some x'
        }
    ],

    // ==========================================
    // MODULE 7: ORTHOGONALITY
    // ==========================================
    orthogonality: [
        {
            id: '7-1',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'Two vectors are orthogonal if their dot product is:',
            answer: '0',
            alternatives: ['0', 'zero'],
            hint: 'Orthogonal = perpendicular = dot product zero',
            explanation: 'v ⟂ w ⟺ v · w = 0'
        },
        {
            id: '7-2',
            type: 'computational',
            difficulty: 'medium',
            question: 'Find the projection of 〈1, 1〉 onto 〈1, 0〉',
            answer: '<1,0>',
            alternatives: ['<1, 0>', '(1,0)'],
            hint: 'proj_w(v) = ((v·w)/(w·w))w',
            explanation: '(〈1, 1〉 · 〈1, 0〉) / (〈1, 0〉 · 〈1, 0〉) 〈1, 0〉 = (1/1) 〈1, 0〉 = 〈1, 0〉'
        },
        {
            id: '7-3',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'Is 〈1, 0, 0〉 a unit vector?',
            answer: 'Yes',
                alternatives: ['yes', 'true'],
                hint: 'Check if its norm is 1',
                explanation: '|〈1, 0, 0〉| = √(1² + 0² + 0²) = 1, so it IS a unit vector'
            }
        ]
    ],

    // ==========================================
    // MODULE 8: APPLICATIONS
    // ==========================================
    applications: [
        {
            id: '8-1',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'SVD decomposes matrix A into:',
            answer: 'UΣVᵀ',
            alternatives: ['U sigma V transpose', 'USV^T'],
            hint: 'Singular Value Decomposition',
            explanation: 'A = UΣVᵀ where U and V are orthogonal, Σ is diagonal'
        },
        {
            id: '8-2',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'In machine learning, matrices are commonly used for:',
            answer: 'data representation',
            alternatives: ['data', 'datasets', 'representing data'],
            hint: 'Think of training data as a matrix',
            explanation: 'Matrices represent datasets where rows are samples and columns are features'
        }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        practiceProblems
    };
}