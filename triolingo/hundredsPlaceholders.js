// Generate hundreds of placeholder lessons for all technical courses

// Helper function to create a placeholder lesson
function createPlaceholderLesson(courseId, unitId, lessonNum, lessonName, subunitName) {
  return {
    id: `${courseId}-u${unitId}-l${lessonNum}`,
    title: lessonName,
    unitTitle: subunitName,
    xp: 15,
    type: 'lesson',
    difficulty: 'beginner',
    questions: [] // Empty - to be filled later
  };
}

// Helper function to create a unit with placeholder lessons
function createPlaceholderUnit(courseId, unitId, unitName, description, lessonCount) {
  const lessons = [];
  for (let i = 1; i <= lessonCount; i++) {
    lessons.push(createPlaceholderLesson(
      courseId,
      unitId,
      i,
      `Lesson ${i}`,
      unitName
    ));
  }

  return {
    id: unitId,
    title: unitName,
    description: description,
    lessons: lessons
  };
}

// Linear Algebra Placeholders (7 units)
const LinearAlgebraPlaceholders = [
  createPlaceholderUnit('linearAlgebra', 1, 'Vector Spaces', 'Master the fundamentals of vector spaces', 8),
  createPlaceholderUnit('linearAlgebra', 2, 'Matrix Algebra', 'Matrix operations and transformations', 8),
  createPlaceholderUnit('linearAlgebra', 3, 'Matrix Factorizations', 'LU, QR, and SVD decompositions', 8),
  createPlaceholderUnit('linearAlgebra', 4, 'Eigenvalues', 'Eigenvalues and eigenvectors', 8),
  createPlaceholderUnit('linearAlgebra', 5, 'Norms', 'Vector and matrix norms', 6),
  createPlaceholderUnit('linearAlgebra', 6, 'Linear Transformations', 'Linear maps and their properties', 7),
  createPlaceholderUnit('linearAlgebra', 7, 'Tensor Algebra', 'Tensors and tensor products', 6)
];

// AI Placeholders (29 units)
const AIPlaceholders = [
  createPlaceholderUnit('ai', 1, 'Probability Theory', 'Foundations of probability', 8),
  createPlaceholderUnit('ai', 2, 'Statistics', 'Statistical methods and inference', 8),
  createPlaceholderUnit('ai', 3, 'Data Systems', 'Data structures and databases', 8),
  createPlaceholderUnit('ai', 4, 'Classical Machine Learning', 'Traditional ML algorithms', 10),
  createPlaceholderUnit('ai', 5, 'Supervised Learning', 'Regression and classification', 9),
  createPlaceholderUnit('ai', 6, 'Unsupervised Learning', 'Clustering and dimensionality reduction', 8),
  createPlaceholderUnit('ai', 7, 'Deep Learning', 'Neural networks fundamentals', 10),
  createPlaceholderUnit('ai', 8, 'CNNs', 'Convolutional neural networks', 9),
  createPlaceholderUnit('ai', 9, 'RNNs', 'Recurrent neural networks', 8),
  createPlaceholderUnit('ai', 10, 'Transformers', 'Attention mechanisms and transformers', 9),
  createPlaceholderUnit('ai', 11, 'NLP', 'Natural language processing', 9),
  createPlaceholderUnit('ai', 12, 'Computer Vision', 'Image processing and recognition', 9),
  createPlaceholderUnit('ai', 13, 'Reinforcement Learning', 'RL algorithms and applications', 9),
  createPlaceholderUnit('ai', 14, 'Advanced RL', 'Multi-agent and hierarchical RL', 7),
  createPlaceholderUnit('ai', 15, 'Generative Models', 'GANs and VAEs', 8),
  createPlaceholderUnit('ai', 16, 'AI Ethics', 'Ethical considerations in AI', 6),
  createPlaceholderUnit('ai', 17, 'AI Safety', 'AI alignment and safety', 6),
  createPlaceholderUnit('ai', 18, 'Optimization', 'Gradient-based optimization', 8),
  createPlaceholderUnit('ai', 19, 'Regularization', 'Overfitting and regularization', 7),
  createPlaceholderUnit('ai', 20, 'Ensemble Methods', 'Bagging, boosting, and stacking', 7),
  createPlaceholderUnit('ai', 21, 'Feature Engineering', 'Feature selection and creation', 7),
  createPlaceholderUnit('ai', 22, 'Model Evaluation', 'Metrics and cross-validation', 7),
  createPlaceholderUnit('ai', 23, 'Bayesian Methods', 'Bayesian inference and MCMC', 7),
  createPlaceholderUnit('ai', 24, 'Graph Neural Networks', 'GNNs and graph learning', 7),
  createPlaceholderUnit('ai', 25, 'Time Series', 'Time series forecasting', 7),
  createPlaceholderUnit('ai', 26, 'Explainable AI', 'Model interpretability', 6),
  createPlaceholderUnit('ai', 27, 'AI Systems', 'Production ML systems', 7),
  createPlaceholderUnit('ai', 28, 'Frontier AI', 'Latest research and trends', 6),
  createPlaceholderUnit('ai', 29, 'Research Skills', 'AI research methodology', 5)
];

// C++ Placeholders (54 units)
const CppPlaceholders = [
  createPlaceholderUnit('cpp', 1, 'Environment and Language Basics', 'Setting up C++ and basic concepts', 6),
  createPlaceholderUnit('cpp', 2, 'Core Fundamentals', 'Variables, types, and control flow', 7),
  createPlaceholderUnit('cpp', 3, 'Functions', 'Functions and parameter passing', 7),
  createPlaceholderUnit('cpp', 4, 'Pointers', 'Pointer fundamentals', 8),
  createPlaceholderUnit('cpp', 5, 'Arrays', 'Array operations', 6),
  createPlaceholderUnit('cpp', 6, 'OOP Basics', 'Classes and objects', 8),
  createPlaceholderUnit('cpp', 7, 'Resources', 'Memory management', 7),
  createPlaceholderUnit('cpp', 8, 'Memory', 'Dynamic memory', 7),
  createPlaceholderUnit('cpp', 9, 'STL Containers', 'Standard template library', 8),
  createPlaceholderUnit('cpp', 10, 'Templates', 'Template programming', 7),
  createPlaceholderUnit('cpp', 11, 'Advanced OOP', 'Inheritance and polymorphism', 8),
  createPlaceholderUnit('cpp', 12, 'Modern C++', 'C++11/14/17 features', 8),
  createPlaceholderUnit('cpp', 13, 'Exceptions', 'Error handling', 6),
  createPlaceholderUnit('cpp', 14, 'Concurrency', 'Threads and synchronization', 8),
  createPlaceholderUnit('cpp', 15, 'File I/O', 'File operations', 6),
  createPlaceholderUnit('cpp', 16, 'Performance', 'Optimization techniques', 7),
  createPlaceholderUnit('cpp', 17, 'Build Systems', 'Make and CMake', 6),
  createPlaceholderUnit('cpp', 18, 'Best Practices', 'Code quality guidelines', 6),
  createPlaceholderUnit('cpp', 19, 'Interoperability', 'C++ and other languages', 6),
  createPlaceholderUnit('cpp', 20, 'Algorithms', 'Fundamental algorithms', 9),
  createPlaceholderUnit('cpp', 21, 'Data Structures', 'Advanced data structures', 8),
  createPlaceholderUnit('cpp', 22, 'Hash Tables', 'Hash-based data structures', 6),
  createPlaceholderUnit('cpp', 23, 'Trees', 'Tree data structures', 7),
  createPlaceholderUnit('cpp', 24, 'Graphs', 'Graph algorithms', 8),
  createPlaceholderUnit('cpp', 25, 'Strings', 'String processing', 6),
  createPlaceholderUnit('cpp', 26, 'Sorting', 'Sorting algorithms', 7),
  createPlaceholderUnit('cpp', 27, 'Searching', 'Search algorithms', 6),
  createPlaceholderUnit('cpp', 28, 'Dynamic Programming', 'DP techniques', 8),
  createPlaceholderUnit('cpp', 29, 'Greedy Algorithms', 'Greedy approaches', 6),
  createPlaceholderUnit('cpp', 30, 'Graph Algorithms', 'Advanced graph algorithms', 7),
  createPlaceholderUnit('cpp', 31, 'Range Queries', 'Segment trees and BIT', 6),
  createPlaceholderUnit('cpp', 32, 'Heaps', 'Priority queues', 6),
  createPlaceholderUnit('cpp', 33, 'Graph Traversal', 'BFS and DFS', 6),
  createPlaceholderUnit('cpp', 34, 'Connectivity', 'Connected components', 6),
  createPlaceholderUnit('cpp', 35, 'Shortest Path', 'Path algorithms', 7),
  createPlaceholderUnit('cpp', 36, 'MST', 'Minimum spanning trees', 6),
  createPlaceholderUnit('cpp', 37, 'Flow Algorithms', 'Network flow', 6),
  createPlaceholderUnit('cpp', 38, 'Matching', 'Bipartite matching', 6),
  createPlaceholderUnit('cpp', 39, 'Graph Theory', 'Advanced graph concepts', 6),
  createPlaceholderUnit('cpp', 40, 'Pattern Matching', 'String algorithms', 6),
  createPlaceholderUnit('cpp', 41, 'String Processing', 'Advanced string algorithms', 6),
  createPlaceholderUnit('cpp', 42, 'Advanced Data Structures', 'Complex data structures', 7),
  createPlaceholderUnit('cpp', 43, 'Advanced DP', 'Advanced DP techniques', 7),
  createPlaceholderUnit('cpp', 44, 'Divide and Conquer', 'Divide and conquer algorithms', 6),
  createPlaceholderUnit('cpp', 45, 'Computational Geometry', 'Geometric algorithms', 7),
  createPlaceholderUnit('cpp', 46, 'Randomized Algorithms', 'Randomization in algorithms', 6),
  createPlaceholderUnit('cpp', 47, 'Approximation', 'Approximation algorithms', 6),
  createPlaceholderUnit('cpp', 48, 'Parallel Algorithms', 'Parallel computing', 6),
  createPlaceholderUnit('cpp', 49, 'Advanced Graph', 'Advanced graph theory', 6),
  createPlaceholderUnit('cpp', 50, 'Advanced Strings', 'Advanced string algorithms', 6),
  createPlaceholderUnit('cpp', 51, 'External Algorithms', 'External memory algorithms', 5),
  createPlaceholderUnit('cpp', 52, 'Specialized Paradigms', 'Special algorithmic paradigms', 5),
  createPlaceholderUnit('cpp', 53, 'Advanced Topics', 'Cutting-edge topics', 5),
  createPlaceholderUnit('cpp', 54, 'Final Topics', 'Capstone topics', 4)
];

// Hexapod Placeholders (20 units)
const HexapodPlaceholders = [
  createPlaceholderUnit('hexapod', 1, 'Rigid Body Mechanics', 'Fundamentals of rigid body dynamics', 10),
  createPlaceholderUnit('hexapod', 2, 'Statics and Dynamics', 'Force analysis and motion', 9),
  createPlaceholderUnit('hexapod', 3, 'Kinematics', 'Forward and inverse kinematics', 10),
  createPlaceholderUnit('hexapod', 4, 'Control Theory', 'Feedback control systems', 9),
  createPlaceholderUnit('hexapod', 5, 'Vibrations', 'Mechanical vibrations', 8),
  createPlaceholderUnit('hexapod', 6, 'Thermodynamics', 'Heat and energy', 8),
  createPlaceholderUnit('hexapod', 7, 'Fluid Mechanics', 'Fluid dynamics', 8),
  createPlaceholderUnit('hexapod', 8, 'Heat Transfer', 'Thermal management', 7),
  createPlaceholderUnit('hexapod', 9, 'Materials', 'Material science and selection', 8),
  createPlaceholderUnit('hexapod', 10, 'Electricity', 'Circuit fundamentals', 8),
  createPlaceholderUnit('hexapod', 11, 'Electronics', 'Electronic components', 9),
  createPlaceholderUnit('hexapod', 12, 'Sensors', 'Sensor technology', 8),
  createPlaceholderUnit('hexapod', 13, 'Actuators', 'Motors and actuators', 9),
  createPlaceholderUnit('hexapod', 14, 'Power Systems', 'Power distribution', 8),
  createPlaceholderUnit('hexapod', 15, 'Software', 'Embedded software', 9),
  createPlaceholderUnit('hexapod', 16, 'Communication', 'Wireless communication', 7),
  createPlaceholderUnit('hexapod', 17, 'Navigation', 'Localization and mapping', 8),
  createPlaceholderUnit('hexapod', 18, 'Gait Planning', 'Walking algorithms', 9),
  createPlaceholderUnit('hexapod', 19, 'Balance', 'Stability and balance control', 8),
  createPlaceholderUnit('hexapod', 20, 'Integration', 'System integration', 7)
];

// Export all placeholders
window.LinearAlgebraPlaceholders = LinearAlgebraPlaceholders;
window.AIPlaceholders = AIPlaceholders;
window.CppPlaceholders = CppPlaceholders;
window.HexapodPlaceholders = HexapodPlaceholders;

// Total placeholder count
console.log('Generated placeholders:');
console.log('  Linear Algebra:', LinearAlgebraPlaceholders.length, 'units,', LinearAlgebraPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0), 'lessons');
console.log('  AI:', AIPlaceholders.length, 'units,', AIPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0), 'lessons');
console.log('  C++:', CppPlaceholders.length, 'units,', CppPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0), 'lessons');
console.log('  Hexapod:', HexapodPlaceholders.length, 'units,', HexapodPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0), 'lessons');
const totalLessons = LinearAlgebraPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0) +
                    AIPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0) +
                    CppPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0) +
                    HexapodPlaceholders.reduce((sum, u) => sum + u.lessons.length, 0);
console.log('TOTAL:', totalLessons, 'placeholder lessons');