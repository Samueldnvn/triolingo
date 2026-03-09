// Linear Algebra Vocabulary for Triolingo
// Covers: Vector Spaces, Matrix Algebra, Matrix Factorizations, Eigenvalues/Eigenvectors, Norms, Linear Transformations, Tensor Algebra

const linearAlgebraVocab = {
  // 1.1.1 Vector Spaces
  scalars: {
    term: "scalars",
    definition: "Single numbers (real or complex) that multiply vectors",
    symbol: "λ, α, β",
    examples: ["λ = 5", "α = -3.14", "β = 2 + 3i"],
    type: "concept"
  },
  vectors: {
    term: "vectors",
    definition: "Arrays of numbers that have both magnitude and direction",
    symbol: "v, u, w",
    examples: ["v = [1, 2, 3]", "u = [4, 5]", "w = [0.5, -1, 2.7]"],
    type: "concept"
  },
  vectorOperations: {
    term: "vector operations",
    definition: "Operations performed on vectors including addition, scalar multiplication, and dot product",
    symbol: "v + w, λv, v · w",
    examples: ["[1,2] + [3,4] = [4,6]", "2·[1,3] = [2,6]", "[1,2]·[3,4] = 11"],
    type: "concept"
  },
  linearCombinations: {
    term: "linear combinations",
    definition: "Expressions formed by multiplying vectors by scalars and adding them together",
    symbol: "c₁v₁ + c₂v₂ + ... + cₙvₙ",
    examples: ["3[1,0] + 2[0,1] = [3,2]", "[2,4] = 2[1,0] + 4[0,1]"],
    type: "concept"
  },
  span: {
    term: "span",
    definition: "The set of all possible linear combinations of given vectors",
    symbol: "span{v₁, v₂, ..., vₙ}",
    examples: ["span{[1,0], [0,1]} = ℝ²", "span{[1,2]} = line through origin"],
    type: "concept"
  },
  basis: {
    term: "basis",
    definition: "A minimal set of linearly independent vectors that span a vector space",
    symbol: "{e₁, e₂, ..., eₙ}",
    examples: ["Standard basis of ℝ²: {[1,0], [0,1]}", "Standard basis of ℝ³: {[1,0,0], [0,1,0], [0,0,1]}"],
    type: "concept"
  },
  dimension: {
    term: "dimension",
    definition: "The number of vectors in a basis for a vector space",
    symbol: "dim(V)",
    examples: ["dim(ℝ²) = 2", "dim(ℝ³) = 3", "dim(plane through origin) = 2"],
    type: "concept"
  },
  subspaces: {
    term: "subspaces",
    definition: "Subsets of a vector space that are themselves vector spaces (closed under addition and scalar multiplication)",
    symbol: "W ⊆ V",
    examples: ["Lines through origin are subspaces of ℝ²", "Planes through origin are subspaces of ℝ³"],
    type: "concept"
  },

  // 1.1.2 Matrix Algebra
  matrixMultiplication: {
    term: "matrix multiplication",
    definition: "An operation that combines two matrices to produce a new matrix",
    symbol: "AB",
    examples: ["[[1,2],[3,4]] × [[5,6],[7,8]] = [[19,22],[43,50]]"],
    type: "concept"
  },
  matrixTransposition: {
    term: "matrix transposition",
    definition: "An operation that flips a matrix over its diagonal, swapping rows and columns",
    symbol: "A^T",
    examples: ["[[1,2],[3,4]]^T = [[1,3],[2,4]]"],
    type: "concept"
  },
  matrixInverse: {
    term: "matrix inverse",
    definition: "A matrix that, when multiplied with the original matrix, yields the identity matrix",
    symbol: "A^(-1)",
    examples: ["[[2,0],[0,3]]^(-1) = [[0.5,0],[0,0.33...]]"],
    type: "concept"
  },
  identityMatrix: {
    term: "identity matrix",
    definition: "A square matrix with ones on the diagonal and zeros elsewhere",
    symbol: "I or Iₙ",
    examples: ["I₂ = [[1,0],[0,1]]", "I₃ = [[1,0,0],[0,1,0],[0,0,1]]"],
    type: "concept"
  },
  orthogonalMatrices: {
    term: "orthogonal matrices",
    definition: "Square matrices whose columns form an orthonormal basis",
    symbol: "Q, where Q^T = Q^(-1)",
    examples: ["Rotation matrices", "Reflection matrices", "[[cosθ,-sinθ],[sinθ,cosθ]]"],
    type: "concept"
  },
  symmetricMatrices: {
    term: "symmetric matrices",
    definition: "Matrices that are equal to their own transpose",
    symbol: "A, where A = A^T",
    examples: ["[[1,2],[2,3]]", "[[0,1,2],[1,3,4],[2,4,5]]"],
    type: "concept"
  },

  // 1.1.3 Matrix Factorizations
  luDecomposition: {
    term: "LU decomposition",
    definition: "Factorizing a matrix into a lower triangular matrix (L) and an upper triangular matrix (U)",
    symbol: "A = LU",
    examples: ["Any invertible matrix can be decomposed", "Used for solving linear systems efficiently"],
    type: "concept"
  },
  qrDecomposition: {
    term: "QR decomposition",
    definition: "Factorizing a matrix into an orthogonal matrix (Q) and an upper triangular matrix (R)",
    symbol: "A = QR",
    examples: ["Used in eigenvalue algorithms", "Gram-Schmidt process yields QR"],
    type: "concept"
  },
  eigenDecomposition: {
    term: "eigen decomposition",
    definition: "Decomposing a matrix into eigenvectors and eigenvalues",
    symbol: "A = PDP^(-1), where D is diagonal",
    examples: ["Diagonalizable matrices", "A^(-1) = PD^(-1)P^(-1)"],
    type: "concept"
  },
  svd: {
    term: "singular value decomposition (SVD)",
    definition: "Factorizing any matrix into U, Σ, V^T where U and V are orthogonal and Σ is diagonal",
    symbol: "A = UΣV^T",
    examples: ["Works for any m×n matrix", "Used in data compression and dimensionality reduction"],
    type: "concept"
  },

  // 1.1.4 Eigenvalues and Eigenvectors
  characteristicPolynomial: {
    term: "characteristic polynomial",
    definition: "A polynomial whose roots are the eigenvalues of a matrix",
    symbol: "det(A - λI) = 0",
    examples: ["For 2×2 matrix: λ² - (tr A)λ + det(A) = 0"],
    type: "concept"
  },
  spectralTheorem: {
    term: "spectral theorem",
    definition: "States that a symmetric matrix can be diagonalized by an orthogonal matrix",
    symbol: "A = QΛQ^T",
    examples: ["Symmetric matrices have real eigenvalues", "Eigenvectors form an orthonormal basis"],
    type: "concept"
  },
  diagonalization: {
    term: "diagonalization",
    definition: "The process of finding a diagonal matrix similar to a given matrix",
    symbol: "A = PDP^(-1)",
    examples: ["Matrix is diagonalizable iff it has n independent eigenvectors"],
    type: "concept"
  },
  powerIteration: {
    term: "power iteration",
    definition: "An algorithm to find the dominant eigenvalue and corresponding eigenvector",
    symbol: "vₙ₊₁ = Avₙ / ‖Avₙ‖",
    examples: ["Start with random vector v₀", "Iteratively multiply by A and normalize"],
    type: "concept"
  },

  // 1.1.5 Norms and Metrics
  l1Norm: {
    term: "L1 norm",
    definition: "Sum of absolute values of vector elements (also called Manhattan norm)",
    symbol: "‖v‖₁",
    examples: ["‖[1,-2,3]‖₁ = 1 + 2 + 3 = 6", "‖[0,5]‖₁ = 5"],
    type: "concept"
  },
  l2Norm: {
    term: "L2 norm",
    definition: "Square root of sum of squared elements (also called Euclidean norm)",
    symbol: "‖v‖₂",
    examples: ["‖[3,4]‖₂ = √(9+16) = 5", "‖[1,1,1]‖₂ = √3"],
    type: "concept"
  },
  frobeniusNorm: {
    term: "Frobenius norm",
    definition: "Square root of sum of squared matrix elements (matrix version of L2 norm)",
    symbol: "‖A‖_F",
    examples: ["‖[[1,2],[3,4]]‖_F = √(1²+2²+3²+4²) = √30"],
    type: "concept"
  },
  infinityNorm: {
    term: "infinity norm",
    definition: "Maximum absolute value of vector elements",
    symbol: "‖v‖_∞",
    examples: ["‖[1,-5,3]‖_∞ = 5", "‖[2,7,4]‖_∞ = 7"],
    type: "concept"
  },

  // 1.1.6 Linear Transformations
  rank: {
    term: "rank",
    definition: "The dimension of the column space (or row space) of a matrix",
    symbol: "rank(A)",
    examples: ["rank([[1,2],[2,4]]) = 1", "rank(I₃) = 3"],
    type: "concept"
  },
  nullSpace: {
    term: "null space",
    definition: "The set of all vectors that map to the zero vector under a linear transformation",
    symbol: "null(A) or ker(T)",
    examples: ["Solutions to Ax = 0", "null([[1,1],[-1,-1]]) = span{[1,-1]}"],
    type: "concept"
  },
  columnSpace: {
    term: "column space",
    definition: "The span of the columns of a matrix (all possible outputs of the matrix)",
    symbol: "col(A) or range(A)",
    examples: ["For A = [[1,0],[0,1]], col(A) = ℝ²", "All b such that Ax = b has a solution"],
    type: "concept"
  },
  range: {
    term: "range",
    definition: "The set of all possible outputs of a linear transformation (same as column space)",
    symbol: "range(T)",
    examples: ["For T: ℝ²→ℝ², T(v) = Av", "range(T) = {Av : v ∈ ℝ²}"],
    type: "concept"
  },

  // 1.1.7 Tensor Algebra
  tensorRank: {
    term: "tensor rank",
    definition: "The minimum number of rank-1 tensors needed to express a given tensor",
    symbol: "rank(T)",
    examples: ["Rank-1 tensor: outer product of vectors", "Higher rank tensors require multiple rank-1 components"],
    type: "concept"
  },
  tensorContraction: {
    term: "tensor contraction",
    definition: "An operation that reduces the order of a tensor by summing over matching indices",
    symbol: "T_{ij}^{j} (sum over j)",
    examples: ["Matrix multiplication is a contraction", "Trace of a matrix is a contraction"],
    type: "concept"
  },
  tensorDecomposition: {
    term: "tensor decomposition",
    definition: "Expressing a tensor as a sum of simpler tensors (like CANDECOMP/PARAFAC)",
    symbol: "T ≈ Σ λᵢ aᵢ ⊗ bᵢ ⊗ cᵢ",
    examples: ["Higher-order SVD", "CP decomposition", "Tucker decomposition"],
    type: "concept"
  },
  kroneckerProduct: {
    term: "Kronecker product",
    definition: "An operation on two matrices that results in a block matrix",
    symbol: "A ⊗ B",
    examples: ["[[1,2]] ⊗ [[0,1]] = [[0,1,0,2]]", "Used in tensor product representations"],
    type: "concept"
  },
  outerProducts: {
    term: "outer products",
    definition: "The tensor product of two vectors, resulting in a matrix",
    symbol: "u ⊗ v or uv^T",
    examples: ["[1,2] ⊗ [3,4] = [[3,4],[6,8]]", "[a,b,c] ⊗ [x,y] = [[ax,ay],[bx,by],[cx,cy]]"],
    type: "concept"
  },

  // Additional useful terms
  linearIndependence: {
    term: "linear independence",
    definition: "A set of vectors where no vector can be expressed as a linear combination of the others",
    symbol: "c₁v₁ + ... + cₙvₙ = 0 ⇒ all cᵢ = 0",
    examples: ["{[1,0], [0,1]} are linearly independent", "{[1,2], [2,4]} are linearly dependent"],
    type: "concept"
  },
  determinant: {
    term: "determinant",
    definition: "A scalar value computed from a square matrix that indicates properties like invertibility",
    symbol: "det(A) or |A|",
    examples: ["det([[a,b],[c,d]]) = ad - bc", "det(Iₙ) = 1"],
    type: "concept"
  },
  trace: {
    term: "trace",
    definition: "The sum of the diagonal entries of a square matrix",
    symbol: "tr(A)",
    examples: ["tr([[1,2],[3,4]]) = 1 + 4 = 5", "tr(A) = sum of eigenvalues"],
    type: "concept"
  },
  transpose: {
    term: "transpose",
    definition: "An operation that flips a matrix over its diagonal",
    symbol: "A^T",
    examples: ["[[1,2,3],[4,5,6]]^T = [[1,4],[2,5],[3,6]]"],
    type: "concept"
  }
};

// Helper functions
function getLinearAlgebraTerm(term) {
  return linearAlgebraVocab[term] || null;
}

function getLinearAlgebraTermsByType(type) {
  return Object.entries(linearAlgebraVocab)
    .filter(([_, value]) => value.type === type)
    .map(([key, value]) => ({ key, ...value }));
}

function getLinearAlgebraExample(term) {
  const termData = getLinearAlgebraTerm(term);
  return termData ? termData.examples[Math.floor(Math.random() * termData.examples.length)] : null;
}