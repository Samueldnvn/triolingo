// Linear Algebra Lesson Generators for Triolingo
// Generates lessons for all Linear Algebra topics

function generateLinearAlgebraLesson(topic, difficulty = 'beginner') {
  const generators = {
    // 1.1.1 Vector Spaces
    'scalars': () => generateScalarsLesson(),
    'vectors': () => generateVectorsLesson(),
    'vectorOperations': () => generateVectorOperationsLesson(),
    'linearCombinations': () => generateLinearCombinationsLesson(),
    'span': () => generateSpanLesson(),
    'basis': () => generateBasisLesson(),
    'dimension': () => generateDimensionLesson(),
    'subspaces': () => generateSubspacesLesson(),

    // 1.1.2 Matrix Algebra
    'matrixMultiplication': () => generateMatrixMultiplicationLesson(),
    'matrixTransposition': () => generateMatrixTranspositionLesson(),
    'matrixInverse': () => generateMatrixInverseLesson(),
    'identityMatrix': () => generateIdentityMatrixLesson(),
    'orthogonalMatrices': () => generateOrthogonalMatricesLesson(),
    'symmetricMatrices': () => generateSymmetricMatricesLesson(),

    // 1.1.3 Matrix Factorizations
    'luDecomposition': () => generateLUDecompositionLesson(),
    'qrDecomposition': () => generateQRDecompositionLesson(),
    'eigenDecomposition': () => generateEigenDecompositionLesson(),
    'svd': () => generateSVDLesson(),

    // 1.1.4 Eigenvalues and Eigenvectors
    'characteristicPolynomial': () => generateCharacteristicPolynomialLesson(),
    'spectralTheorem': () => generateSpectralTheoremLesson(),
    'diagonalization': () => generateDiagonalizationLesson(),
    'powerIteration': () => generatePowerIterationLesson(),

    // 1.1.5 Norms and Metrics
    'l1Norm': () => generateL1NormLesson(),
    'l2Norm': () => generateL2NormLesson(),
    'frobeniusNorm': () => generateFrobeniusNormLesson(),
    'infinityNorm': () => generateInfinityNormLesson(),

    // 1.1.6 Linear Transformations
    'rank': () => generateRankLesson(),
    'nullSpace': () => generateNullSpaceLesson(),
    'columnSpace': () => generateColumnSpaceLesson(),
    'range': () => generateRangeLesson(),

    // 1.1.7 Tensor Algebra
    'tensorRank': () => generateTensorRankLesson(),
    'tensorContraction': () => generateTensorContractionLesson(),
    'tensorDecomposition': () => generateTensorDecompositionLesson(),
    'kroneckerProduct': () => generateKroneckerProductLesson(),
    'outerProducts': () => generateOuterProductsLesson()
  };

  const generator = generators[topic];
  if (generator) {
    return generator();
  }

  // Fallback for unknown topics
  return generateGenericLinearAlgebraLesson(topic);
}

// Vector Space Generators
function generateScalarsLesson() {
  const vocab = linearAlgebraVocab.scalars;
  return {
    title: "Scalars",
    description: "Learn about scalars - the building blocks of linear algebra!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "Is 5 a scalar?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! 5 is a scalar - a single number that can multiply vectors."
      },
      {
        question: "Is [1,2,3] a scalar?",
        options: ["Yes", "No"],
        answer: "No",
        explanation: "No! [1,2,3] is a vector, not a scalar. Scalars are single numbers."
      }
    ]
  };
}

function generateVectorsLesson() {
  const vocab = linearAlgebraVocab.vectors;
  return {
    title: "Vectors",
    description: "Discover vectors - arrays with magnitude and direction!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is the dimension of vector [1,2,3]?",
        options: ["2D", "3D", "1D", "4D"],
        answer: "3D",
        explanation: "[1,2,3] has 3 elements, so it's a 3-dimensional vector."
      },
      {
        question: "What is the first element of [4,5,6]?",
        options: ["4", "5", "6", "0"],
        answer: "4",
        explanation: "The first element (index 0) is 4."
      }
    ]
  };
}

function generateVectorOperationsLesson() {
  const vocab = linearAlgebraVocab.vectorOperations;
  return {
    title: "Vector Operations",
    description: "Learn to add, multiply, and compute dot products of vectors!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is [1,2] + [3,4]?",
        options: ["[4,6]", "[3,8]", "[4,8]", "[3,6]"],
        answer: "[4,6]",
        explanation: "Add element by element: [1+3, 2+4] = [4,6]."
      },
      {
        question: "What is 3·[2,1]?",
        options: ["[3,1]", "[6,3]", "[2,3]", "[1,3]"],
        answer: "[6,3]",
        explanation: "Multiply each element by 3: [3·2, 3·1] = [6,3]."
      },
      {
        question: "What is [1,2]·[3,4]? (dot product)",
        options: ["11", "7", "14", "10"],
        answer: "11",
        explanation: "Dot product: 1·3 + 2·4 = 3 + 8 = 11."
      }
    ]
  };
}

function generateLinearCombinationsLesson() {
  const vocab = linearAlgebraVocab.linearCombinations;
  return {
    title: "Linear Combinations",
    description: "Combine vectors using scalars!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is 2[1,0] + 3[0,1]?",
        options: ["[2,3]", "[3,2]", "[5,0]", "[0,5]"],
        answer: "[2,3]",
        explanation: "2[1,0] + 3[0,1] = [2,0] + [0,3] = [2,3]."
      },
      {
        question: "Express [4,2] as a linear combination of [1,0] and [0,1].",
        options: ["4[1,0] + 2[0,1]", "2[1,0] + 4[0,1]", "[1,0] + [0,1]", "[4,2] = [1,0]"],
        answer: "4[1,0] + 2[0,1]",
        explanation: "[4,2] = 4[1,0] + 2[0,1] = [4,0] + [0,2] = [4,2]."
      }
    ]
  };
}

function generateSpanLesson() {
  const vocab = linearAlgebraVocab.span;
  return {
    title: "Span",
    description: "Understand the span of a set of vectors!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is span{[1,0], [0,1]}?",
        options: ["A line through origin", "The entire ℝ² plane", "A single point", "A circle"],
        answer: "The entire ℝ² plane",
        explanation: "These two vectors form a basis, so their span is all of ℝ²."
      },
      {
        question: "What does span{[1,1]} look like?",
        options: ["Entire plane", "Line through origin", "Single point", "Diagonal line"],
        answer: "Line through origin",
        explanation: "All multiples of [1,1] form a line through the origin."
      }
    ]
  };
}

function generateBasisLesson() {
  const vocab = linearAlgebraVocab.basis;
  return {
    title: "Basis",
    description: "Learn about minimal sets that span vector spaces!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "Is {[1,0], [0,1]} a basis for ℝ²?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! They are linearly independent and span ℝ²."
      },
      {
        question: "How many vectors are in a basis for ℝ³?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "ℝ³ is 3-dimensional, so a basis has 3 vectors."
      }
    ]
  };
}

function generateDimensionLesson() {
  const vocab = linearAlgebraVocab.dimension;
  return {
    title: "Dimension",
    description: "Measure the size of vector spaces!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is dim(ℝ²)?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "ℝ² is 2-dimensional, so dim(ℝ²) = 2."
      },
      {
        question: "What is dim(ℝ⁵)?",
        options: ["5", "2", "3", "10"],
        answer: "5",
        explanation: "ℝ⁵ is 5-dimensional, so dim(ℝ⁵) = 5."
      }
    ]
  };
}

function generateSubspacesLesson() {
  const vocab = linearAlgebraVocab.subspaces;
  return {
    title: "Subspaces",
    description: "Explore subsets that are vector spaces themselves!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "Is a line through the origin a subspace of ℝ²?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! It's closed under addition and scalar multiplication."
      },
      {
        question: "Is a line NOT through the origin a subspace?",
        options: ["Yes", "No"],
        answer: "No",
        explanation: "No! It doesn't contain the zero vector and isn't closed under scalar multiplication."
      }
    ]
  };
}

// Matrix Algebra Generators
function generateMatrixMultiplicationLesson() {
  const vocab = linearAlgebraVocab.matrixMultiplication;
  return {
    title: "Matrix Multiplication",
    description: "Learn how to multiply matrices!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "A 2×3 matrix times a 3×4 matrix produces what?",
        options: ["2×4 matrix", "3×3 matrix", "2×3 matrix", "3×4 matrix"],
        answer: "2×4 matrix",
        explanation: "The result dimensions are: (2×3) × (3×4) = 2×4."
      },
      {
        question: "Is matrix multiplication commutative (AB = BA)?",
        options: ["Always", "Never", "Sometimes", "Only for identity"],
        answer: "Never",
        explanation: "Matrix multiplication is generally NOT commutative!"
      }
    ]
  };
}

function generateMatrixTranspositionLesson() {
  const vocab = linearAlgebraVocab.matrixTransposition;
  return {
    title: "Matrix Transposition",
    description: "Flip matrices over their diagonal!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is [[1,2],[3,4]]^T?",
        options: ["[[1,2],[3,4]]", "[[1,3],[2,4]]", "[[4,3],[2,1]]", "[[3,1],[4,2]]"],
        answer: "[[1,3],[2,4]]",
        explanation: "Transpose swaps rows and columns: [[1,2],[3,4]]^T = [[1,3],[2,4]]."
      }
    ]
  };
}

function generateMatrixInverseLesson() {
  const vocab = linearAlgebraVocab.matrixInverse;
  return {
    title: "Matrix Inverse",
    description: "Find matrices that undo each other!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is A × A^(-1)?",
        options: ["A", "A^(-1)", "I (identity)", "0"],
        answer: "I (identity)",
        explanation: "A × A^(-1) = I, the identity matrix."
      },
      {
        question: "Do all matrices have inverses?",
        options: ["Yes", "No"],
        answer: "No",
        explanation: "No! Only non-singular matrices (with non-zero determinant) have inverses."
      }
    ]
  };
}

function generateIdentityMatrixLesson() {
  const vocab = linearAlgebraVocab.identityMatrix;
  return {
    title: "Identity Matrix",
    description: "The '1' of matrix multiplication!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is I₂ (2×2 identity matrix)?",
        options: ["[[1,0],[0,1]]", "[[1,1],[1,1]]", "[[0,1],[1,0]]", "[[2,0],[0,2]]"],
        answer: "[[1,0],[0,1]]",
        explanation: "I₂ = [[1,0],[0,1]] has 1s on diagonal, 0s elsewhere."
      },
      {
        question: "What is A × I for any matrix A?",
        options: ["0", "I", "A", "A^T"],
        answer: "A",
        explanation: "Multiplying by identity matrix gives back A: A × I = A."
      }
    ]
  };
}

function generateOrthogonalMatricesLesson() {
  const vocab = linearAlgebraVocab.orthogonalMatrices;
  return {
    title: "Orthogonal Matrices",
    description: "Matrices with orthonormal columns!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "For orthogonal matrix Q, what is Q^T?",
        options: ["Q", "Q^(-1)", "I", "0"],
        answer: "Q^(-1)",
        explanation: "For orthogonal matrices: Q^T = Q^(-1)."
      },
      {
        question: "Are rotation matrices orthogonal?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! Rotation matrices are orthogonal."
      }
    ]
  };
}

function generateSymmetricMatricesLesson() {
  const vocab = linearAlgebraVocab.symmetricMatrices;
  return {
    title: "Symmetric Matrices",
    description: "Matrices equal to their transpose!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "Which matrix is symmetric?",
        options: ["[[1,2],[3,4]]", "[[1,2],[2,1]]", "[[0,1],[1,0]]", "[[1,3],[2,4]]"],
        answer: "[[1,2],[2,1]]",
        explanation: "[[1,2],[2,1]] = [[1,2],[2,1]]^T, so it's symmetric."
      },
      {
        question: "If A is symmetric, what is A^T?",
        options: ["A^(-1)", "A", "I", "0"],
        answer: "A",
        explanation: "By definition, if A is symmetric, A = A^T."
      }
    ]
  };
}

// Matrix Factorization Generators
function generateLUDecompositionLesson() {
  const vocab = linearAlgebraVocab.luDecomposition;
  return {
    title: "LU Decomposition",
    description: "Factorize matrices into lower and upper triangular parts!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "In A = LU, what is L?",
        options: ["Upper triangular", "Lower triangular", "Identity", "Diagonal"],
        answer: "Lower triangular",
        explanation: "L is the lower triangular matrix."
      },
      {
        question: "In A = LU, what is U?",
        options: ["Upper triangular", "Lower triangular", "Identity", "Zero"],
        answer: "Upper triangular",
        explanation: "U is the upper triangular matrix."
      }
    ]
  };
}

function generateQRDecompositionLesson() {
  const vocab = linearAlgebraVocab.qrDecomposition;
  return {
    title: "QR Decomposition",
    description: "Decompose matrices into orthogonal and upper triangular parts!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "In A = QR, what is Q?",
        options: ["Upper triangular", "Lower triangular", "Orthogonal", "Diagonal"],
        answer: "Orthogonal",
        explanation: "Q is an orthogonal matrix."
      },
      {
        question: "In A = QR, what is R?",
        options: ["Lower triangular", "Upper triangular", "Orthogonal", "Identity"],
        answer: "Upper triangular",
        explanation: "R is an upper triangular matrix."
      }
    ]
  };
}

function generateEigenDecompositionLesson() {
  const vocab = linearAlgebraVocab.eigenDecomposition;
  return {
    title: "Eigen Decomposition",
    description: "Decompose matrices using eigenvectors and eigenvalues!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "In A = PDP^(-1), what does D contain?",
        options: ["Eigenvectors", "Eigenvalues", "Zeros", "Ones"],
        answer: "Eigenvalues",
        explanation: "D is diagonal with eigenvalues on the diagonal."
      },
      {
        question: "What do the columns of P contain?",
        options: ["Eigenvalues", "Eigenvectors", "Zeros", "Ones"],
        answer: "Eigenvectors",
        explanation: "The columns of P are the eigenvectors of A."
      }
    ]
  };
}

function generateSVDLesson() {
  const vocab = linearAlgebraVocab.svd;
  return {
    title: "Singular Value Decomposition (SVD)",
    description: "The universal matrix factorization!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "In SVD A = UΣV^T, which matrices are orthogonal?",
        options: ["U and Σ", "Σ and V^T", "U and V", "Σ only"],
        answer: "U and V",
        explanation: "Both U and V are orthogonal matrices."
      },
      {
        question: "What does Σ contain?",
        options: ["Eigenvectors", "Singular values", "Zeros", "Random numbers"],
        answer: "Singular values",
        explanation: "Σ contains the singular values of A."
      },
      {
        question: "Does SVD work for non-square matrices?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! SVD works for any m×n matrix."
      }
    ]
  };
}

// Eigenvalues and Eigenvectors Generators
function generateCharacteristicPolynomialLesson() {
  const vocab = linearAlgebraVocab.characteristicPolynomial;
  return {
    title: "Characteristic Polynomial",
    description: "Find eigenvalues using the characteristic polynomial!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "The characteristic polynomial is det(A - ___I) = 0.",
        options: ["λ", "x", "0", "1"],
        answer: "λ",
        explanation: "Characteristic polynomial: det(A - λI) = 0."
      },
      {
        question: "What do the roots of the characteristic polynomial give?",
        options: ["Determinants", "Eigenvalues", "Traces", "Inverses"],
        answer: "Eigenvalues",
        explanation: "The roots are the eigenvalues of the matrix."
      }
    ]
  };
}

function generateSpectralTheoremLesson() {
  const vocab = linearAlgebraVocab.spectralTheorem;
  return {
    title: "Spectral Theorem",
    description: "Diagonalize symmetric matrices!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "The spectral theorem applies to which matrices?",
        options: ["All matrices", "Symmetric matrices only", "Diagonal only", "Upper triangular"],
        answer: "Symmetric matrices only",
        explanation: "The spectral theorem applies to symmetric matrices."
      },
      {
        question: "Do symmetric matrices have real eigenvalues?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! Symmetric matrices have real eigenvalues (spectral theorem)."
      }
    ]
  };
}

function generateDiagonalizationLesson() {
  const vocab = linearAlgebraVocab.diagonalization;
  return {
    title: "Diagonalization",
    description: "Transform matrices to diagonal form!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "When is a matrix diagonalizable?",
        options: ["Always", "When it has n independent eigenvectors", "When it's 2×2", "Never"],
        answer: "When it has n independent eigenvectors",
        explanation: "A matrix is diagonalizable if it has n linearly independent eigenvectors."
      },
      {
        question: "What does A = PDP^(-1) represent?",
        options: ["Transpose", "Inverse", "Diagonalization", "Determinant"],
        answer: "Diagonalization",
        explanation: "A = PDP^(-1) is the diagonalization of A."
      }
    ]
  };
}

function generatePowerIterationLesson() {
  const vocab = linearAlgebraVocab.powerIteration;
  return {
    title: "Power Iteration",
    description: "Find the dominant eigenvalue!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What does power iteration find?",
        options: ["All eigenvalues", "Largest eigenvalue", "Smallest eigenvalue", "None"],
        answer: "Largest eigenvalue",
        explanation: "Power iteration finds the dominant (largest) eigenvalue."
      },
      {
        question: "How does power iteration work?",
        options: ["Add matrices", "Multiply and normalize", "Subtract", "Divide"],
        answer: "Multiply and normalize",
        explanation: "Multiply by matrix repeatedly and normalize the result."
      }
    ]
  };
}

// Norms and Metrics Generators
function generateL1NormLesson() {
  const vocab = linearAlgebraVocab.l1Norm;
  return {
    title: "L1 Norm",
    description: "Sum of absolute values!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is ‖[1,-2,3]‖₁?",
        options: ["6", "3", "4", "5"],
        answer: "6",
        explanation: "L1 = |1| + |-2| + |3| = 1 + 2 + 3 = 6."
      },
      {
        question: "L1 norm is also called:",
        options: ["Euclidean", "Manhattan", "Frobenius", "Infinity"],
        answer: "Manhattan",
        explanation: "L1 is also called the Manhattan norm."
      }
    ]
  };
}

function generateL2NormLesson() {
  const vocab = linearAlgebraVocab.l2Norm;
  return {
    title: "L2 Norm",
    description: "Euclidean distance from origin!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is ‖[3,4]‖₂?",
        options: ["7", "25", "5", "6"],
        answer: "5",
        explanation: "L2 = √(3² + 4²) = √25 = 5."
      },
      {
        question: "L2 norm is also called:",
        options: ["Manhattan", "Euclidean", "Frobenius", "L1"],
        answer: "Euclidean",
        explanation: "L2 is also called the Euclidean norm."
      }
    ]
  };
}

function generateFrobeniusNormLesson() {
  const vocab = linearAlgebraVocab.frobeniusNorm;
  return {
    title: "Frobenius Norm",
    description: "Matrix version of L2 norm!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is the Frobenius norm?",
        options: ["Matrix L1", "Matrix L2", "Matrix infinity", "Determinant"],
        answer: "Matrix L2",
        explanation: "Frobenius norm is the matrix version of L2 norm."
      },
      {
        question: "What is ‖[[1,2],[3,4]]‖_F?",
        options: ["10", "√30", "√10", "5"],
        answer: "√30",
        explanation: "‖A‖_F = √(1²+2²+3²+4²) = √30."
      }
    ]
  };
}

function generateInfinityNormLesson() {
  const vocab = linearAlgebraVocab.infinityNorm;
  return {
    title: "Infinity Norm",
    description: "Maximum absolute value!",
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is ‖[1,-5,3]‖_∞?",
        options: ["9", "5", "3", "1"],
        answer: "5",
        explanation: "Infinity norm = max(|1|, |-5|, |3|) = 5."
      },
      {
        question: "What does infinity norm calculate?",
        options: ["Sum", "Max absolute", "Min absolute", "Average"],
        answer: "Max absolute",
        explanation: "Infinity norm is the maximum absolute value."
      }
    ]
  };
}

// Linear Transformations Generators
function generateRankLesson() {
  const vocab = linearAlgebraVocab.rank;
  return {
    title: "Rank",
    description: "Dimension of the column space!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What does rank represent?",
        options: ["Number of rows", "Dimension of column space", "Determinant", "Trace"],
        answer: "Dimension of column space",
        explanation: "Rank is the dimension of the column space."
      },
      {
        question: "What is rank([[1,2],[2,4]])?",
        options: ["0", "1", "2", "4"],
        answer: "1",
        explanation: "Rows are linearly dependent, so rank = 1."
      }
    ]
  };
}

function generateNullSpaceLesson() {
  const vocab = linearAlgebraVocab.nullSpace;
  return {
    title: "Null Space",
    description: "Vectors that map to zero!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is null(A) also called?",
        options: ["Column space", "Kernel", "Range", "Row space"],
        answer: "Kernel",
        explanation: "Null space is also called the kernel."
      },
      {
        question: "What does null(A) contain?",
        options: ["Outputs", "Solutions to Ax=0", "Inputs", "Eigenvectors"],
        answer: "Solutions to Ax=0",
        explanation: "Null space contains all v such that Av = 0."
      }
    ]
  };
}

function generateColumnSpaceLesson() {
  const vocab = linearAlgebraVocab.columnSpace;
  return {
    title: "Column Space",
    description: "Span of matrix columns!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is col(A)?",
        options: ["Solutions to Ax=0", "Span of columns", "Span of rows", "Determinant"],
        answer: "Span of columns",
        explanation: "Column space is the span of the columns of A."
      },
      {
        question: "Are column space and range the same?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! Column space and range represent the same thing."
      }
    ]
  };
}

function generateRangeLesson() {
  const vocab = linearAlgebraVocab.range;
  return {
    title: "Range",
    description: "All possible outputs!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is range(T)?",
        options: ["Inputs to T", "Outputs of T", "Kernel of T", "Null space"],
        answer: "Outputs of T",
        explanation: "Range is the set of all possible outputs."
      },
      {
        question: "For T(v) = Av, range(T) = ?",
        options: ["{v : Av=0}", "{Av : v ∈ ℝⁿ}", "null(A)", "kernel(A)"],
        answer: "{Av : v ∈ ℝⁿ}",
        explanation: "range(T) = {Av : v ∈ ℝⁿ} - all outputs."
      }
    ]
  };
}

// Tensor Algebra Generators
function generateTensorRankLesson() {
  const vocab = linearAlgebraVocab.tensorRank;
  return {
    title: "Tensor Rank",
    description: "Minimum rank-1 components!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is a rank-1 tensor?",
        options: ["Zero tensor", "Outer product of vectors", "Sum of matrices", "Identity"],
        answer: "Outer product of vectors",
        explanation: "A rank-1 tensor is an outer product of vectors."
      },
      {
        question: "What does tensor rank measure?",
        options: ["Dimensions", "Min rank-1 components", "Number of elements", "Sum"],
        answer: "Min rank-1 components",
        explanation: "Tensor rank is the minimum number of rank-1 components needed."
      }
    ]
  };
}

function generateTensorContractionLesson() {
  const vocab = linearAlgebraVocab.tensorContraction;
  return {
    title: "Tensor Contraction",
    description: "Reduce tensor order!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What does tensor contraction do?",
        options: ["Increases order", "Reduces order", "Creates identity", "Multiplies elements"],
        answer: "Reduces order",
        explanation: "Contraction reduces the tensor order by summing over indices."
      },
      {
        question: "Is matrix multiplication a contraction?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Yes! Matrix multiplication is a form of tensor contraction."
      }
    ]
  };
}

function generateTensorDecompositionLesson() {
  const vocab = linearAlgebraVocab.tensorDecomposition;
  return {
    title: "Tensor Decomposition",
    description: "Express tensors as simpler components!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What does CP decomposition do?",
        options: ["Computes eigenvalues", "Decomposes into rank-1 tensors", "Computes SVD", "Computes inverse"],
        answer: "Decomposes into rank-1 tensors",
        explanation: "CP (CANDECOMP/PARAFAC) decomposes into rank-1 tensors."
      },
      {
        question: "What is Tucker decomposition?",
        options: ["Same as CP", "Higher-order SVD", "Eigen decomp", "LU decomp"],
        answer: "Higher-order SVD",
        explanation: "Tucker decomposition is a higher-order SVD."
      }
    ]
  };
}

function generateKroneckerProductLesson() {
  const vocab = linearAlgebraVocab.kroneckerProduct;
  return {
    title: "Kronecker Product",
    description: "Create block matrices!",
    difficulty: "advanced",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What does A ⊗ B produce?",
        options: ["Scalar", "Vector", "Block matrix", "Diagonal"],
        answer: "Block matrix",
        explanation: "The Kronecker product produces a block matrix."
      },
      {
        question: "What is [[1,2]] ⊗ [[0,1]]?",
        options: ["[[0,1,0,2]]", "[[0,1],[0,2]]", "[[0,2],[0,1]]", "[[1,2],[0,1]]"],
        answer: "[[0,1,0,2]]",
        explanation: "[[1,2]] ⊗ [[0,1]] = [[1·[0,1], 2·[0,1]]] = [[0,1,0,2]]."
      }
    ]
  };
}

function generateOuterProductsLesson() {
  const vocab = linearAlgebraVocab.outerProducts;
  return {
    title: "Outer Products",
    description: "Multiply vectors to get matrices!",
    difficulty: "intermediate",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: "What is the outer product of two vectors?",
        options: ["Scalar", "Vector", "Matrix", "Number"],
        answer: "Matrix",
        explanation: "The outer product of two vectors produces a matrix."
      },
      {
        question: "What is [1,2] ⊗ [3,4]?",
        options: ["[[3,4],[6,8]]", "[[1,2],[3,4]]", "[[3,6],[4,8]]", "[[1,3],[2,4]]"],
        answer: "[[3,4],[6,8]]",
        explanation: "[1,2] ⊗ [3,4] = [[1·3,1·4],[2·3,2·4]] = [[3,4],[6,8]]."
      }
    ]
  };
}

// Generic fallback generator
function generateGenericLinearAlgebraLesson(topic) {
  const vocab = linearAlgebraVocab[topic] || {
    term: topic,
    definition: "Linear algebra concept",
    examples: []
  };

  return {
    title: vocab.term,
    description: `Learn about ${vocab.term} in linear algebra!`,
    difficulty: "beginner",
    concepts: [
      {
        name: vocab.term,
        definition: vocab.definition,
        examples: vocab.examples
      }
    ],
    practiceQuestions: [
      {
        question: `What is ${vocab.term}?`,
        options: [vocab.definition, "A number", "A matrix", "Unknown"],
        answer: vocab.definition,
        explanation: vocab.definition
      }
    ]
  };
}