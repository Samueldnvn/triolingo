// Linear Algebra Icons for Triolingo
// Unicode and emoji representations for Linear Algebra concepts

const linearAlgebraIcons = {
  // 1.1.1 Vector Spaces
  scalars: { unicode: "λ", emoji: "🔢" },
  vectors: { unicode: "v", emoji: "➡️" },
  vectorOperations: { unicode: "⊕", emoji: "➗" },
  linearCombinations: { unicode: "Σ", emoji: "🔗" },
  span: { unicode: "𝕊", emoji: "🌐" },
  basis: { unicode: "β", emoji: "📐" },
  dimension: { unicode: "dim", emoji: "📏" },
  subspaces: { unicode: "⊆", emoji: "🔽" },

  // 1.1.2 Matrix Algebra
  matrixMultiplication: { unicode: "×", emoji: "🎲" },
  matrixTransposition: { unicode: "T", emoji: "🔄" },
  matrixInverse: { unicode: "⁻¹", emoji: "⬅️" },
  identityMatrix: { unicode: "I", emoji: "1️⃣" },
  orthogonalMatrices: { unicode: "⟂", emoji: "📐" },
  symmetricMatrices: { unicode: "=", emoji: "🔰" },

  // 1.1.3 Matrix Factorizations
  luDecomposition: { unicode: "LU", emoji: "🔨" },
  qrDecomposition: { unicode: "QR", emoji: "📐" },
  eigenDecomposition: { unicode: "λ", emoji: "🎯" },
  svd: { unicode: "Σ", emoji: "💫" },

  // 1.1.4 Eigenvalues and Eigenvectors
  characteristicPolynomial: { unicode: "p(λ)", emoji: "📊" },
  spectralTheorem: { unicode: "σ", emoji: "🌟" },
  diagonalization: { unicode: "⬡", emoji: "💠" },
  powerIteration: { unicode: "⚡", emoji: "🔄" },

  // 1.1.5 Norms and Metrics
  l1Norm: { unicode: "‖·‖₁", emoji: "📏" },
  l2Norm: { unicode: "‖·‖₂", emoji: "📐" },
  frobeniusNorm: { unicode: "‖·‖_F", emoji: "🔢" },
  infinityNorm: { unicode: "‖·‖_∞", emoji: "∞" },

  // 1.1.6 Linear Transformations
  rank: { unicode: "rank", emoji: "📊" },
  nullSpace: { unicode: "null", emoji: "⭕" },
  columnSpace: { unicode: "col", emoji: "📊" },
  range: { unicode: "range", emoji: "🎯" },

  // 1.1.7 Tensor Algebra
  tensorRank: { unicode: "rank", emoji: "🎯" },
  tensorContraction: { unicode: "⤵", emoji: "📉" },
  tensorDecomposition: { unicode: "⊗", emoji: "💠" },
  kroneckerProduct: { unicode: "⊗", emoji: "🔗" },
  outerProducts: { unicode: "⊗", emoji: "🔗" },

  // Additional useful terms
  linearIndependence: { unicode: "∐", emoji: "🔓" },
  determinant: { unicode: "det", emoji: "| |" },
  trace: { unicode: "tr", emoji: "Σ" },
  transpose: { unicode: "T", emoji: "🔄" }
};

// Helper functions
function getLinearAlgebraIcon(term, type = "unicode") {
  const icon = linearAlgebraIcons[term];
  if (!icon) return { unicode: "?", emoji: "❓" };
  return icon[type] || icon;
}

function getLinearAlgebraUnicode(term) {
  return getLinearAlgebraIcon(term, "unicode");
}

function getLinearAlgebraEmoji(term) {
  return getLinearAlgebraIcon(term, "emoji");
}