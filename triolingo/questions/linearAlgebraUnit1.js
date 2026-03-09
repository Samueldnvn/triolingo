// Linear Algebra Unit 1 Questions
// 1.1.1 Vector Spaces through 1.1.7 Tensor Algebra

window.linearAlgebraUnit1 = {
  unitId: "linearAlgebra1",
  unitName: "1.1 Linear Algebra",
  subunits: [
    {
      subunitId: "1.1.1",
      subunitName: "Vector Spaces",
      lessons: [
        {
          lessonId: "vectorSpaces-intro",
          lessonName: "Introduction to Vector Spaces",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-1-1",
              type: "multiple-choice",
              question: "What is a scalar?",
              options: ["A single number", "A list of numbers", "A matrix", "A function"],
              correctAnswer: 0,
              explanation: "A scalar is a single number (real or complex) that can multiply vectors.",
              concept: "scalars"
            },
            {
              id: "la-1-1-1-2",
              type: "multiple-choice",
              question: "What is a vector?",
              options: ["A single number", "An array of numbers with magnitude and direction", "A square matrix", "A scalar function"],
              correctAnswer: 1,
              explanation: "A vector is an array of numbers that has both magnitude and direction.",
              concept: "vectors"
            },
            {
              id: "la-1-1-1-3",
              type: "fill-blank",
              question: "A vector in ℝ³ has _____ elements.",
              correctAnswer: ["3", "three"],
              explanation: "A vector in ℝ³ has three elements, corresponding to the three-dimensional space.",
              concept: "vectors"
            }
          ]
        },
        {
          lessonId: "vectorOperations",
          lessonName: "Vector Operations",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-1-4",
              type: "multiple-choice",
              question: "What is [1,2] + [3,4]?",
              options: ["[4,6]", "[3,8]", "[4,8]", "[3,6]"],
              correctAnswer: 0,
              explanation: "Vector addition is component-wise: [1,2] + [3,4] = [1+3, 2+4] = [4,6].",
              concept: "vectorOperations"
            },
            {
              id: "la-1-1-1-5",
              type: "multiple-choice",
              question: "What is 2 · [1,3]?",
              options: ["[1,3]", "[2,3]", "[2,6]", "[1,6]"],
              correctAnswer: 2,
              explanation: "Scalar multiplication multiplies each element: 2·[1,3] = [2·1, 2·3] = [2,6].",
              concept: "vectorOperations"
            },
            {
              id: "la-1-1-1-6",
              type: "multiple-choice",
              question: "What is [1,2] · [3,4]? (dot product)",
              options: ["[3,8]", "11", "7", "14"],
              correctAnswer: 1,
              explanation: "Dot product: [1,2]·[3,4] = (1)(3) + (2)(4) = 3 + 8 = 11.",
              concept: "vectorOperations"
            }
          ]
        },
        {
          lessonId: "linearCombinations",
          lessonName: "Linear Combinations",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-1-7",
              type: "multiple-choice",
              question: "What is 3[1,0] + 2[0,1]?",
              options: ["[3,2]", "[5,0]", "[0,5]", "[3,0]"],
              correctAnswer: 0,
              explanation: "3[1,0] + 2[0,1] = [3,0] + [0,2] = [3,2].",
              concept: "linearCombinations"
            },
            {
              id: "la-1-1-1-8",
              type: "multiple-choice",
              question: "Is [2,4] a linear combination of [1,0] and [0,1]?",
              options: ["No", "Yes, [2,4] = 2[1,0] + 4[0,1]", "Yes, [2,4] = [1,0] + [0,1]", "Cannot determine"],
              correctAnswer: 1,
              explanation: "[2,4] = 2[1,0] + 4[0,1] = [2,0] + [0,4] = [2,4].",
              concept: "linearCombinations"
            }
          ]
        },
        {
          lessonId: "span",
          lessonName: "Span",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-1-9",
              type: "multiple-choice",
              question: "What is span{[1,0], [0,1]}?",
              options: ["A line through origin", "ℝ² (entire 2D plane)", "ℝ³ (entire 3D space)", "A single point"],
              correctAnswer: 1,
              explanation: "span{[1,0], [0,1]} = ℝ² because these vectors form a basis for the entire 2D plane.",
              concept: "span"
            },
            {
              id: "la-1-1-1-10",
              type: "multiple-choice",
              question: "What is span{[1,2]}?",
              options: ["ℝ²", "A line through origin", "A plane", "A single point"],
              correctAnswer: 1,
              explanation: "span{[1,2]} is all scalar multiples of [1,2], which forms a line through the origin.",
              concept: "span"
            }
          ]
        },
        {
          lessonId: "basis",
          lessonName: "Basis",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-1-11",
              type: "multiple-choice",
              question: "What is the standard basis of ℝ²?",
              options: ["{[1,0], [0,1]}", "{[1,1], [0,0]}", "{[2,0], [0,2]}", "{[1,2], [2,1]}"],
              correctAnswer: 0,
              explanation: "The standard basis of ℝ² is {[1,0], [0,1]} - these vectors are linearly independent and span ℝ².",
              concept: "basis"
            },
            {
              id: "la-1-1-1-12",
              type: "true-false",
              question: "A basis must contain the minimum number of vectors needed to span a space.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. A basis is a minimal set of linearly independent vectors that span the space.",
              concept: "basis"
            }
          ]
        },
        {
          lessonId: "dimension",
          lessonName: "Dimension",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-1-13",
              type: "multiple-choice",
              question: "What is dim(ℝ²)?",
              options: ["1", "2", "3", "4"],
              correctAnswer: 1,
              explanation: "dim(ℝ²) = 2 because ℝ² has a basis with 2 vectors.",
              concept: "dimension"
            },
            {
              id: "la-1-1-1-14",
              type: "multiple-choice",
              question: "What is dim(ℝ³)?",
              options: ["1", "2", "3", "4"],
              correctAnswer: 2,
              explanation: "dim(ℝ³) = 3 because ℝ³ has a basis with 3 vectors.",
              concept: "dimension"
            }
          ]
        },
        {
          lessonId: "subspaces",
          lessonName: "Subspaces",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-1-15",
              type: "true-false",
              question: "A line through the origin is a subspace of ℝ².",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. A line through the origin is closed under addition and scalar multiplication, making it a subspace.",
              concept: "subspaces"
            },
            {
              id: "la-1-1-1-16",
              type: "true-false",
              question: "A plane through the origin is a subspace of ℝ³.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. A plane through the origin is closed under vector operations and is therefore a subspace.",
              concept: "subspaces"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.2",
      subunitName: "Matrix Algebra",
      lessons: [
        {
          lessonId: "matrixMultiplication",
          lessonName: "Matrix Multiplication",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-2-1",
              type: "multiple-choice",
              question: "What is the result of multiplying a 2×3 matrix by a 3×4 matrix?",
              options: ["2×4 matrix", "3×3 matrix", "2×3 matrix", "3×4 matrix"],
              correctAnswer: 0,
              explanation: "A 2×3 matrix multiplied by a 3×4 matrix produces a 2×4 matrix.",
              concept: "matrixMultiplication"
            },
            {
              id: "la-1-1-2-2",
              type: "multiple-choice",
              question: "Matrix multiplication is commutative: AB = BA.",
              options: ["Always true", "Always false", "True for square matrices only", "True when A and B commute"],
              correctAnswer: 1,
              explanation: "Matrix multiplication is generally not commutative. AB ≠ BA in most cases.",
              concept: "matrixMultiplication"
            }
          ]
        },
        {
          lessonId: "matrixTransposition",
          lessonName: "Matrix Transposition",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-2-3",
              type: "multiple-choice",
              question: "What is [[1,2],[3,4]]^T (transpose)?",
              options: ["[[1,2],[3,4]]", "[[1,3],[2,4]]", "[[4,3],[2,1]]", "[[3,1],[4,2]]"],
              correctAnswer: 1,
              explanation: "The transpose swaps rows and columns: [[1,2],[3,4]]^T = [[1,3],[2,4]].",
              concept: "matrixTransposition"
            },
            {
              id: "la-1-1-2-4",
              type: "true-false",
              question: "The transpose of a transpose gives the original matrix: (A^T)^T = A.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. Transposing twice returns the original matrix.",
              concept: "matrixTransposition"
            }
          ]
        },
        {
          lessonId: "matrixInverse",
          lessonName: "Matrix Inverse",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-2-5",
              type: "multiple-choice",
              question: "What is the inverse of [[2,0],[0,3]]?",
              options: ["[[2,0],[0,3]]", "[[0.5,0],[0,0.33...]]", "[[3,0],[0,2]]", "[[0,0.5],[0.33...,0]]"],
              correctAnswer: 1,
              explanation: "The inverse of a diagonal matrix is the diagonal matrix with reciprocals: [[0.5,0],[0,1/3]].",
              concept: "matrixInverse"
            },
            {
              id: "la-1-1-2-6",
              type: "true-false",
              question: "All square matrices have inverses.",
              options: ["True", "False"],
              correctAnswer: 1,
              explanation: "False. Only non-singular (invertible) matrices with non-zero determinant have inverses.",
              concept: "matrixInverse"
            }
          ]
        },
        {
          lessonId: "identityMatrix",
          lessonName: "Identity Matrix",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-2-7",
              type: "multiple-choice",
              question: "What is I₂ (the 2×2 identity matrix)?",
              options: ["[[1,1],[1,1]]", "[[1,0],[0,1]]", "[[0,1],[1,0]]", "[[1,1],[0,0]]"],
              correctAnswer: 1,
              explanation: "I₂ = [[1,0],[0,1]] has 1s on the diagonal and 0s elsewhere.",
              concept: "identityMatrix"
            },
            {
              id: "la-1-1-2-8",
              type: "multiple-choice",
              question: "What is AI where A is any matrix and I is the identity matrix?",
              options: ["0", "I", "A", "Undefined"],
              correctAnswer: 2,
              explanation: "AI = A. Multiplying any matrix by the identity matrix yields the same matrix.",
              concept: "identityMatrix"
            }
          ]
        },
        {
          lessonId: "orthogonalMatrices",
          lessonName: "Orthogonal Matrices",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-2-9",
              type: "multiple-choice",
              question: "For an orthogonal matrix Q, which is true?",
              options: ["Q = Q^T", "Q^T = Q^(-1)", "Q = -Q", "Q² = I"],
              correctAnswer: 1,
              explanation: "For orthogonal matrices: Q^T = Q^(-1). The transpose equals the inverse.",
              concept: "orthogonalMatrices"
            },
            {
              id: "la-1-1-2-10",
              type: "multiple-choice",
              question: "Which of these is an example of an orthogonal matrix?",
              options: ["[[1,1],[0,0]]", "[[cosθ,-sinθ],[sinθ,cosθ]]", "[[1,2],[2,1]]", "[[0,0],[0,0]]"],
              correctAnswer: 1,
              explanation: "Rotation matrices like [[cosθ,-sinθ],[sinθ,cosθ]] are orthogonal.",
              concept: "orthogonalMatrices"
            }
          ]
        },
        {
          lessonId: "symmetricMatrices",
          lessonName: "Symmetric Matrices",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-2-11",
              type: "true-false",
              question: "A symmetric matrix is equal to its transpose: A = A^T.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. Symmetric matrices are equal to their own transpose.",
              concept: "symmetricMatrices"
            },
            {
              id: "la-1-1-2-12",
              type: "multiple-choice",
              question: "Which matrix is symmetric?",
              options: ["[[1,2],[3,4]]", "[[1,2],[2,3]]", "[[0,1],[1,0]]", "[[1,3],[2,4]]"],
              correctAnswer: 1,
              explanation: "[[1,2],[2,3]] is symmetric because it equals its transpose.",
              concept: "symmetricMatrices"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.3",
      subunitName: "Matrix Factorizations",
      lessons: [
        {
          lessonId: "luDecomposition",
          lessonName: "LU Decomposition",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-3-1",
              type: "multiple-choice",
              question: "In LU decomposition, what does L represent?",
              options: ["Upper triangular matrix", "Lower triangular matrix", "Identity matrix", "Diagonal matrix"],
              correctAnswer: 1,
              explanation: "L stands for Lower triangular matrix in LU decomposition.",
              concept: "luDecomposition"
            },
            {
              id: "la-1-1-3-2",
              type: "multiple-choice",
              question: "What does the U in LU decomposition represent?",
              options: ["Upper triangular matrix", "Lower triangular matrix", "Unit matrix", "Unknown matrix"],
              correctAnswer: 0,
              explanation: "U stands for Upper triangular matrix in LU decomposition.",
              concept: "luDecomposition"
            },
            {
              id: "la-1-1-3-3",
              type: "true-false",
              question: "Any invertible matrix can be decomposed as A = LU.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. Any invertible matrix can be factorized into L and U matrices.",
              concept: "luDecomposition"
            }
          ]
        },
        {
          lessonId: "qrDecomposition",
          lessonName: "QR Decomposition",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-3-4",
              type: "multiple-choice",
              question: "In QR decomposition, what is Q?",
              options: ["An upper triangular matrix", "A lower triangular matrix", "An orthogonal matrix", "A diagonal matrix"],
              correctAnswer: 2,
              explanation: "In QR decomposition, Q is an orthogonal matrix.",
              concept: "qrDecomposition"
            },
            {
              id: "la-1-1-3-5",
              type: "multiple-choice",
              question: "What is R in QR decomposition?",
              options: ["An orthogonal matrix", "An upper triangular matrix", "A lower triangular matrix", "A diagonal matrix"],
              correctAnswer: 1,
              explanation: "R is an upper triangular matrix in QR decomposition.",
              concept: "qrDecomposition"
            }
          ]
        },
        {
          lessonId: "eigenDecomposition",
          lessonName: "Eigen Decomposition",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-3-6",
              type: "multiple-choice",
              question: "In eigen decomposition A = PDP^(-1), what does D contain?",
              options: ["Eigenvectors", "Eigenvalues", "Identity matrix", "Zeros"],
              correctAnswer: 1,
              explanation: "D is a diagonal matrix containing the eigenvalues of A.",
              concept: "eigenDecomposition"
            },
            {
              id: "la-1-1-3-7",
              type: "multiple-choice",
              question: "What do the columns of P contain in A = PDP^(-1)?",
              options: ["Eigenvalues", "Eigenvectors", "Zeros", "Random numbers"],
              correctAnswer: 1,
              explanation: "The columns of P contain the eigenvectors of A.",
              concept: "eigenDecomposition"
            }
          ]
        },
        {
          lessonId: "svd",
          lessonName: "Singular Value Decomposition (SVD)",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-3-8",
              type: "multiple-choice",
              question: "In SVD A = UΣV^T, which matrices are orthogonal?",
              options: ["U and Σ", "Σ and V^T", "U and V", "Σ only"],
              correctAnswer: 2,
              explanation: "In SVD, both U and V are orthogonal matrices. Σ is diagonal.",
              concept: "svd"
            },
            {
              id: "la-1-1-3-9",
              type: "multiple-choice",
              question: "What does Σ contain in SVD?",
              options: ["Eigenvectors", "Singular values", "Zeros", "Random numbers"],
              correctAnswer: 1,
              explanation: "Σ is a diagonal matrix containing the singular values of A.",
              concept: "svd"
            },
            {
              id: "la-1-1-3-10",
              type: "true-false",
              question: "SVD works for any m×n matrix, not just square matrices.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. SVD is universal and works for any rectangular or square matrix.",
              concept: "svd"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.4",
      subunitName: "Eigenvalues and Eigenvectors",
      lessons: [
        {
          lessonId: "characteristicPolynomial",
          lessonName: "Characteristic Polynomial",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-4-1",
              type: "multiple-choice",
              question: "What is the characteristic polynomial of a 2×2 matrix [[a,b],[c,d]]?",
              options: ["λ² - (a+d)λ + (ad-bc)", "λ² + (a+d)λ - (ad-bc)", "λ² - ad - bc", "(a+d)λ - (ad-bc)"],
              correctAnswer: 0,
              explanation: "The characteristic polynomial is det(A - λI) = λ² - (a+d)λ + (ad-bc).",
              concept: "characteristicPolynomial"
            },
            {
              id: "la-1-1-4-2",
              type: "multiple-choice",
              question: "What do the roots of the characteristic polynomial give you?",
              options: ["Determinants", "Eigenvalues", "Traces", "Inverses"],
              correctAnswer: 1,
              explanation: "The roots of the characteristic polynomial are the eigenvalues of the matrix.",
              concept: "characteristicPolynomial"
            }
          ]
        },
        {
          lessonId: "spectralTheorem",
          lessonName: "Spectral Theorem",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-4-3",
              type: "multiple-choice",
              question: "The spectral theorem applies to which type of matrices?",
              options: ["All matrices", "Symmetric matrices only", "Diagonal matrices only", "Upper triangular matrices"],
              correctAnswer: 1,
              explanation: "The spectral theorem applies to symmetric matrices.",
              concept: "spectralTheorem"
            },
            {
              id: "la-1-1-4-4",
              type: "true-false",
              question: "Symmetric matrices have real eigenvalues.",
              options: ["True", "False"],
              correctAnswer: 0,
              explanation: "True. A key result of the spectral theorem: symmetric matrices have real eigenvalues.",
              concept: "spectralTheorem"
            },
            {
              id: "la-1-1-4-5",
              type: "multiple-choice",
              question: "In the spectral theorem A = QΛQ^T, what are the columns of Q?",
              options: ["Eigenvalues", "Orthonormal eigenvectors", "Random vectors", "Zeros"],
              correctAnswer: 1,
              explanation: "The columns of Q form an orthonormal basis of eigenvectors.",
              concept: "spectralTheorem"
            }
          ]
        },
        {
          lessonId: "diagonalization",
          lessonName: "Diagonalization",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-4-6",
              type: "multiple-choice",
              question: "When is a matrix diagonalizable?",
              options: ["Always", "Never", "When it has n independent eigenvectors", "When it's square"],
              correctAnswer: 2,
              explanation: "A matrix is diagonalizable if it has n linearly independent eigenvectors.",
              concept: "diagonalization"
            },
            {
              id: "la-1-1-4-7",
              type: "multiple-choice",
              question: "What does A = PDP^(-1) represent?",
              options: ["Matrix transpose", "Matrix inverse", "Matrix diagonalization", "Matrix factorization"],
              correctAnswer: 2,
              explanation: "A = PDP^(-1) is the diagonalization of matrix A, where D is diagonal.",
              concept: "diagonalization"
            }
          ]
        },
        {
          lessonId: "powerIteration",
          lessonName: "Power Iteration",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-4-8",
              type: "multiple-choice",
              question: "What does power iteration find?",
              options: ["All eigenvalues", "The dominant (largest) eigenvalue", "The smallest eigenvalue", "No eigenvalues"],
              correctAnswer: 1,
              explanation: "Power iteration finds the dominant (largest magnitude) eigenvalue and its eigenvector.",
              concept: "powerIteration"
            },
            {
              id: "la-1-1-4-9",
              type: "multiple-choice",
              question: "How does power iteration work?",
              options: ["Divide by vector", "Multiply by matrix and normalize", "Add matrices", "Subtract eigenvalues"],
              correctAnswer: 1,
              explanation: "Power iteration repeatedly multiplies by the matrix and normalizes the result.",
              concept: "powerIteration"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.5",
      subunitName: "Norms and Metrics",
      lessons: [
        {
          lessonId: "l1Norm",
          lessonName: "L1 Norm",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-5-1",
              type: "multiple-choice",
              question: "What is ‖[1,-2,3]‖₁ (L1 norm)?",
              options: ["√14", "6", "3", "4"],
              correctAnswer: 1,
              explanation: "L1 norm = sum of absolute values: |1| + |-2| + |3| = 1 + 2 + 3 = 6.",
              concept: "l1Norm"
            },
            {
              id: "la-1-1-5-2",
              type: "multiple-choice",
              question: "The L1 norm is also called:",
              options: ["Euclidean norm", "Manhattan norm", "Frobenius norm", "Infinity norm"],
              correctAnswer: 1,
              explanation: "L1 norm is also called the Manhattan norm or taxicab norm.",
              concept: "l1Norm"
            }
          ]
        },
        {
          lessonId: "l2Norm",
          lessonName: "L2 Norm",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-5-3",
              type: "multiple-choice",
              question: "What is ‖[3,4]‖₂ (L2 norm)?",
              options: ["7", "25", "5", "6"],
              correctAnswer: 2,
              explanation: "L2 norm = √(3² + 4²) = √(9 + 16) = √25 = 5.",
              concept: "l2Norm"
            },
            {
              id: "la-1-1-5-4",
              type: "multiple-choice",
              question: "The L2 norm is also called:",
              options: ["Manhattan norm", "Euclidean norm", "Frobenius norm", "L1 norm"],
              correctAnswer: 1,
              explanation: "L2 norm is also called the Euclidean norm.",
              concept: "l2Norm"
            }
          ]
        },
        {
          lessonId: "frobeniusNorm",
          lessonName: "Frobenius Norm",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-5-5",
              type: "multiple-choice",
              question: "What is the Frobenius norm?",
              options: ["Matrix version of L1 norm", "Matrix version of L2 norm", "Matrix version of infinity norm", "Matrix determinant"],
              correctAnswer: 1,
              explanation: "Frobenius norm is the matrix version of L2 norm: √(sum of squared elements).",
              concept: "frobeniusNorm"
            },
            {
              id: "la-1-1-5-6",
              type: "multiple-choice",
              question: "What is ‖[[1,2],[3,4]]‖_F (Frobenius norm)?",
              options: ["10", "√10", "√30", "5"],
              correctAnswer: 2,
              explanation: "‖A‖_F = √(1²+2²+3²+4²) = √30.",
              concept: "frobeniusNorm"
            }
          ]
        },
        {
          lessonId: "infinityNorm",
          lessonName: "Infinity Norm",
          type: "lesson",
          difficulty: "beginner",
          questions: [
            {
              id: "la-1-1-5-7",
              type: "multiple-choice",
              question: "What is ‖[1,-5,3]‖_∞ (infinity norm)?",
              options: ["9", "3", "5", "-5"],
              correctAnswer: 2,
              explanation: "Infinity norm = max absolute value: max(|1|, |-5|, |3|) = 5.",
              concept: "infinityNorm"
            },
            {
              id: "la-1-1-5-8",
              type: "multiple-choice",
              question: "What does the infinity norm calculate?",
              options: ["Sum of absolute values", "Square root of sum of squares", "Maximum absolute value", "Minimum absolute value"],
              correctAnswer: 2,
              explanation: "Infinity norm is the maximum absolute value among all elements.",
              concept: "infinityNorm"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.6",
      subunitName: "Linear Transformations",
      lessons: [
        {
          lessonId: "rank",
          lessonName: "Rank",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-6-1",
              type: "multiple-choice",
              question: "What does rank(A) represent?",
              options: ["Number of rows", "Number of columns", "Dimension of column space", "Determinant"],
              correctAnswer: 2,
              explanation: "Rank is the dimension of the column space (or row space) of a matrix.",
              concept: "rank"
            },
            {
              id: "la-1-1-6-2",
              type: "multiple-choice",
              question: "What is rank([[1,2],[2,4]])?",
              options: ["0", "1", "2", "4"],
              correctAnswer: 1,
              explanation: "The rows are linearly dependent (second is 2× first), so rank = 1.",
              concept: "rank"
            },
            {
              id: "la-1-1-6-3",
              type: "multiple-choice",
              question: "What is rank(I₃) (3×3 identity matrix)?",
              options: ["0", "1", "2", "3"],
              correctAnswer: 3,
              explanation: "The identity matrix has full rank: rank(I₃) = 3.",
              concept: "rank"
            }
          ]
        },
        {
          lessonId: "nullSpace",
          lessonName: "Null Space",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-6-4",
              type: "multiple-choice",
              question: "What is null(A) also called?",
              options: ["Column space", "Row space", "Kernel", "Range"],
              correctAnswer: 2,
              explanation: "Null space is also called the kernel of the transformation.",
              concept: "nullSpace"
            },
            {
              id: "la-1-1-6-5",
              type: "multiple-choice",
              question: "What does null(A) contain?",
              options: ["All possible outputs", "All solutions to Ax = 0", "All input vectors", "Eigenvectors"],
              correctAnswer: 1,
              explanation: "Null space contains all vectors v such that Av = 0.",
              concept: "nullSpace"
            }
          ]
        },
        {
          lessonId: "columnSpace",
          lessonName: "Column Space",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-6-6",
              type: "multiple-choice",
              question: "What is col(A) (column space)?",
              options: ["Set of all v with Av = 0", "Span of the columns of A", "Set of all inputs", "Determinant of A"],
              correctAnswer: 1,
              explanation: "Column space is the span of the columns of A - all possible outputs.",
              concept: "columnSpace"
            },
            {
              id: "la-1-1-6-7",
              type: "multiple-choice",
              question: "What is the relationship between col(A) and range(T)?",
              options: ["They're different", "They're the same", "One is a subset", "No relationship"],
              correctAnswer: 1,
              explanation: "Column space and range are the same: both represent all possible outputs.",
              concept: "columnSpace"
            }
          ]
        },
        {
          lessonId: "range",
          lessonName: "Range",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-6-8",
              type: "multiple-choice",
              question: "What is range(T) for a linear transformation T?",
              options: ["All inputs to T", "All possible outputs of T", "Kernel of T", "Null space of T"],
              correctAnswer: 1,
              explanation: "Range is the set of all possible outputs of the linear transformation.",
              concept: "range"
            },
            {
              id: "la-1-1-6-9",
              type: "multiple-choice",
              question: "For T: ℝ²→ℝ², T(v) = Av, what is range(T)?",
              options: ["{v : v ∈ ℝ²}", "{Av : v ∈ ℝ²}", "{v : Av = 0}", "The zero vector"],
              correctAnswer: 1,
              explanation: "range(T) = {Av : v ∈ ℝ²} - all outputs of the transformation.",
              concept: "range"
            }
          ]
        }
      ]
    },
    {
      subunitId: "1.1.7",
      subunitName: "Tensor Algebra",
      lessons: [
        {
          lessonId: "tensorRank",
          lessonName: "Tensor Rank",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-7-1",
              type: "multiple-choice",
              question: "What is a rank-1 tensor?",
              options: ["Zero tensor", "Outer product of vectors", "Sum of matrices", "Identity tensor"],
              correctAnswer: 1,
              explanation: "A rank-1 tensor can be expressed as an outer product of vectors.",
              concept: "tensorRank"
            },
            {
              id: "la-1-1-7-2",
              type: "multiple-choice",
              question: "What does tensor rank measure?",
              options: ["Number of dimensions", "Minimum number of rank-1 components", "Number of elements", "Sum of elements"],
              correctAnswer: 1,
              explanation: "Tensor rank is the minimum number of rank-1 tensors needed to express the tensor.",
              concept: "tensorRank"
            }
          ]
        },
        {
          lessonId: "tensorContraction",
          lessonName: "Tensor Contraction",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-7-3",
              type: "multiple-choice",
              question: "What does tensor contraction do?",
              options: ["Increases tensor order", "Reduces tensor order by summing over indices", "Creates identity tensor", "Multiplies all elements"],
              correctAnswer: 1,
              explanation: "Tensor contraction reduces the order of a tensor by summing over matching indices.",
              concept: "tensorContraction"
            },
            {
              id: "la-1-1-7-4",
              type: "multiple-choice",
              question: "Which of these is an example of tensor contraction?",
              options: ["Outer product", "Matrix multiplication", "Tensor addition", "Scalar multiplication"],
              correctAnswer: 1,
              explanation: "Matrix multiplication is a form of tensor contraction.",
              concept: "tensorContraction"
            }
          ]
        },
        {
          lessonId: "tensorDecomposition",
          lessonName: "Tensor Decomposition",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-7-5",
              type: "multiple-choice",
              question: "What does CANDECOMP/PARAFAC do?",
              options: ["Computes eigenvalues", "Decomposes tensor into sum of rank-1 tensors", "Computes singular values", "Computes matrix inverse"],
              correctAnswer: 1,
              explanation: "CANDECOMP/PARAFAC (CP) decomposes a tensor into a sum of rank-1 tensors.",
              concept: "tensorDecomposition"
            },
            {
              id: "la-1-1-7-6",
              type: "multiple-choice",
              question: "What is Tucker decomposition?",
              options: ["Same as CP", "Higher-order SVD", "Eigen decomposition", "LU decomposition"],
              correctAnswer: 1,
              explanation: "Tucker decomposition is a higher-order version of SVD for tensors.",
              concept: "tensorDecomposition"
            }
          ]
        },
        {
          lessonId: "kroneckerProduct",
          lessonName: "Kronecker Product",
          type: "lesson",
          difficulty: "advanced",
          questions: [
            {
              id: "la-1-1-7-7",
              type: "multiple-choice",
              question: "What does the Kronecker product A ⊗ B produce?",
              options: ["A scalar", "A vector", "A block matrix", "A diagonal matrix"],
              correctAnswer: 2,
              explanation: "The Kronecker product produces a block matrix from matrices A and B.",
              concept: "kroneckerProduct"
            },
            {
              id: "la-1-1-7-8",
              type: "multiple-choice",
              question: "What is [[1,2]] ⊗ [[0,1]]?",
              options: ["[[0,1,0,2]]", "[[0,1],[0,2]]", "[[0,2],[0,1]]", "[[1,2],[0,1]]"],
              correctAnswer: 0,
              explanation: "[[1,2]] ⊗ [[0,1]] = [[1·[0,1], 2·[0,1]]] = [[0,1,0,2]].",
              concept: "kroneckerProduct"
            }
          ]
        },
        {
          lessonId: "outerProducts",
          lessonName: "Outer Products",
          type: "lesson",
          difficulty: "intermediate",
          questions: [
            {
              id: "la-1-1-7-9",
              type: "multiple-choice",
              question: "What is the outer product of two vectors?",
              options: ["A scalar", "A vector", "A matrix", "A number"],
              correctAnswer: 2,
              explanation: "The outer product of two vectors produces a matrix.",
              concept: "outerProducts"
            },
            {
              id: "la-1-1-7-10",
              type: "multiple-choice",
              question: "What is [1,2] ⊗ [3,4]?",
              options: ["[[3,4],[6,8]]", "[[1,2],[3,4]]", "[[3,6],[4,8]]", "[[1,3],[2,4]]"],
              correctAnswer: 0,
              explanation: "[1,2] ⊗ [3,4] = [[1·3,1·4],[2·3,2·4]] = [[3,4],[6,8]].",
              concept: "outerProducts"
            }
          ]
        }
      ]
    }
  ]
};