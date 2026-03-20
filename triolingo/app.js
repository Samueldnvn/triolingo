// =====================================================================
// COURSE DEFINITIONS
// Note: LessonTemplate is defined in lessonGenerators.js
// =====================================================================
const courses = {
  french: {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    units: [
      {
        id: 1,
        title: 'Basics',
        description: 'Learn essential French words and phrases',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 1, 'Greetings', ['greetings'], 12) : {id:'1-1',title:'Greetings',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 2, 'Numbers 1-10', ['numbers'], 10) : {id:'1-2',title:'Numbers 1-10',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 3, 'Colors', ['colors'], 11) : {id:'1-3',title:'Colors',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 4, 'Greetings & Numbers Review', ['greetings', 'numbers'], 14) : {id:'1-4',title:'Greetings & Numbers Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 1, 5, 'Basics Review', ['greetings', 'numbers', 'colors'], 15) : {id:'1-5',title:'Basics Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 2,
        title: 'Family & People',
        description: 'Learn about family members and pronouns',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 6, 'Family Members', ['family'], 12) : {id:'2-6',title:'Family Members',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 7, 'Pronouns', ['pronouns'], 11) : {id:'2-7',title:'Pronouns',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 8, 'Family Review', ['family', 'pronouns'], 14) : {id:'2-8',title:'Family Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 2, 9, 'Family Mastery', ['family', 'pronouns'], 15) : {id:'2-9',title:'Family Mastery',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 3,
        title: 'Food & Verbs',
        description: 'Essential food vocabulary and common verbs',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 10, 'Food Basics', ['food'], 10) : {id:'3-10',title:'Food Basics',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 11, 'Meals', ['meals'], 8) : {id:'3-11',title:'Meals',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 12, 'Common Verbs', ['verbs'], 12) : {id:'3-12',title:'Common Verbs',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 3, 13, 'Food & Verbs Review', ['food', 'meals', 'verbs'], 15) : {id:'3-13',title:'Food & Verbs Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 4,
        title: 'French Mastery',
        description: 'Combine everything you\'ve learned',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 14, 'Comprehensive Review Part 1', ['greetings', 'numbers', 'colors', 'family'], 15) : {id:'4-14',title:'Comprehensive Review Part 1',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 15, 'Comprehensive Review Part 2', ['family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-15',title:'Comprehensive Review Part 2',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('french', 4, 16, 'French Challenge', ['greetings', 'numbers', 'colors', 'family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-16',title:'French Challenge',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      }
    ]
  },
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    units: [
      {
        id: 1,
        title: 'Basics',
        description: 'Learn essential Spanish words and phrases',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 1, 'Greetings', ['greetings'], 12) : {id:'1-1',title:'Greetings',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 2, 'Numbers 1-10', ['numbers'], 10) : {id:'1-2',title:'Numbers 1-10',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 3, 'Colors', ['colors'], 11) : {id:'1-3',title:'Colors',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 4, 'Greetings & Numbers Review', ['greetings', 'numbers'], 14) : {id:'1-4',title:'Greetings & Numbers Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 1, 5, 'Basics Review', ['greetings', 'numbers', 'colors'], 15) : {id:'1-5',title:'Basics Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 2,
        title: 'Family & People',
        description: 'Learn about family members and pronouns',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 6, 'Family Members', ['family'], 12) : {id:'2-6',title:'Family Members',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 7, 'Pronouns', ['pronouns'], 11) : {id:'2-7',title:'Pronouns',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 8, 'Family Review', ['family', 'pronouns'], 14) : {id:'2-8',title:'Family Review',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 2, 9, 'Family Mastery', ['family', 'pronouns'], 15) : {id:'2-9',title:'Family Mastery',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 3,
        title: 'Food & Verbs',
        description: 'Essential food vocabulary and common verbs',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 10, 'Food Basics', ['food'], 10) : {id:'3-10',title:'Food Basics',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 11, 'Meals', ['meals'], 8) : {id:'3-11',title:'Meals',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 12, 'Common Verbs', ['verbs'], 12) : {id:'3-12',title:'Common Verbs',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 3, 13, 'Food & Verbs Review', ['food', 'meals', 'verbs'], 15) : {id:'3-13',title:'Food & Verbs Review',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      },
      {
        id: 4,
        title: 'Spanish Mastery',
        description: 'Combine everything you\'ve learned',
        lessons: [
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 14, 'Comprehensive Review Part 1', ['greetings', 'numbers', 'colors', 'family'], 15) : {id:'4-14',title:'Comprehensive Review Part 1',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 15, 'Comprehensive Review Part 2', ['family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-15',title:'Comprehensive Review Part 2',xp:15,type:'lesson',questions:[]},
          typeof LessonTemplate !== 'undefined' ? LessonTemplate.mixedLesson('spanish', 4, 16, 'Spanish Challenge', ['greetings', 'numbers', 'colors', 'family', 'food', 'verbs', 'pronouns'], 15) : {id:'4-16',title:'Spanish Challenge',xp:15,type:'lesson',questions:[]}
        ].filter(l => l !== null)
      }
    ]
  },
  calculus: {
    id: 'calculus',
    name: 'Calculus',
    flag: '∫',
    units: [
      {
        id: 1,
        title: 'Limits & Continuity',
        description: 'Concept of limits, limit laws, one-sided limits, continuity, and the Squeeze Theorem',
        lessons: [
          {id: '1-1', title: 'Concept of limits and limit laws', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '1-2', title: 'One-sided limits and limits at infinity', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '1-3', title: 'Continuity and types of discontinuities', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '1-4', title: 'The Squeeze Theorem', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 2,
        title: 'Derivatives',
        description: 'Derivative definition and rules including power, sum, constant, product, quotient, chain, and derivatives of special functions',
        lessons: [
          {id: '2-1', title: 'Derivative definition from limits', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '2-2', title: 'Power, sum, and constant rules', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '2-3', title: 'Product and quotient rules', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '2-4', title: 'Chain rule', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '2-5', title: 'Derivatives of exponential and logarithmic functions', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '2-6', title: 'Derivatives of trigonometric and inverse trig functions', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 3,
        title: 'Applications of Derivatives',
        description: 'Applications including tangent lines, related rates, critical points, concavity, optimization, and L\'Hôpital\'s Rule',
        lessons: [
          {id: '7-1', title: 'Tangent lines and linear approximation', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '7-2', title: 'Related rates', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '7-3', title: 'Critical points and the first derivative test', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '7-4', title: 'Concavity and the second derivative test', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '7-5', title: 'Optimization problems', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '7-6', title: "L'Hôpital's Rule", xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 4,
        title: 'Integrals',
        description: 'Antiderivatives, Riemann sums, definite integrals, and the Fundamental Theorem of Calculus',
        lessons: [
          {id: '8-1', title: 'Antiderivatives and indefinite integrals', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '8-2', title: 'Riemann sums and definite integrals', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '8-3', title: 'The Fundamental Theorem of Calculus', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 5,
        title: 'Integration Techniques',
        description: 'Advanced integration techniques including substitution, integration by parts, trig integrals, partial fractions, and improper integrals',
        lessons: [
          {id: '9-1', title: 'Substitution (u-substitution)', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '9-2', title: 'Integration by parts', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '9-3', title: 'Trigonometric integrals and substitutions', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '9-4', title: 'Partial fraction decomposition', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '9-5', title: 'Improper integrals', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 6,
        title: 'Applications of Integrals',
        description: 'Applications including area between curves, volumes, arc length, surface area, and differential equations',
        lessons: [
          {id: '10-1', title: 'Area between curves', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '10-2', title: 'Volumes of solids (disk, washer, shell)', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '10-3', title: 'Arc length and surface area', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '10-4', title: 'Basic separable differential equations', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 7,
        title: 'Sequences & Series',
        description: 'Sequences, infinite series, convergence tests, power series, and Taylor series',
        lessons: [
          {id: '11-1', title: 'Sequences and limits of sequences', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '11-2', title: 'Infinite series and geometric series', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '11-3', title: 'Convergence tests (comparison, ratio, root, integral, alternating)', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '11-4', title: 'Power series and radius of convergence', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '11-5', title: 'Taylor and Maclaurin series', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 8,
        title: 'Vectors & Geometry',
        description: 'Vectors in 3D, dot product, cross product, lines, and planes in space',
        lessons: [
          {id: '12-1', title: 'Vectors in 3D, dot product, and cross product', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '12-2', title: 'Lines and planes in space', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 9,
        title: 'Vector-Valued Functions',
        description: 'Vector functions, velocity, acceleration, arc length, and curvature',
        lessons: [
          {id: '13-1', title: 'Vector functions, velocity, and acceleration', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '13-2', title: 'Arc length and curvature', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 10,
        title: 'Multivariable Functions',
        description: 'Functions of several variables, level curves, partial derivatives, chain rule, gradient, and tangent planes',
        lessons: [
          {id: '14-1', title: 'Functions of several variables and level curves', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '14-2', title: 'Partial derivatives and higher partials', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '14-3', title: 'Chain rule in multiple variables', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '14-4', title: 'Gradient and directional derivatives', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '14-5', title: 'Tangent planes and linear approximation', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 11,
        title: 'Multivariable Optimization',
        description: 'Critical points in multivariable functions and Lagrange multipliers',
        lessons: [
          {id: '15-1', title: 'Critical points in multivariable functions', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '15-2', title: 'Lagrange multipliers', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 12,
        title: 'Multiple Integrals',
        description: 'Double integrals, iterated integrals, general regions, polar coordinates, triple integrals, and cylindrical/spherical coordinates',
        lessons: [
          {id: '16-1', title: 'Double integrals and iterated integrals', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '16-2', title: 'Double integrals over general regions', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '16-3', title: 'Polar coordinates in integration', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '16-4', title: 'Triple integrals', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '16-5', title: 'Cylindrical and spherical coordinates', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 13,
        title: 'Vector Calculus',
        description: 'Vector fields, line integrals, conservative fields, potential functions, surface integrals, and flux',
        lessons: [
          {id: '17-1', title: 'Vector fields and line integrals', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '17-2', title: 'Conservative fields and potential functions', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '17-3', title: 'Surface integrals and flux', xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '17-4', title: 'Major Theorems', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      },
      {
        id: 14,
        title: 'Major Theorems',
        description: 'Green\'s Theorem, Stokes\' Theorem, and the Divergence Theorem',
        lessons: [
          {id: '18-1', title: "Green's Theorem", xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '18-2', title: "Stokes' Theorem", xp: 0, type: 'lesson', lessonText: '', questions: []},
          {id: '18-3', title: 'Divergence Theorem', xp: 0, type: 'lesson', lessonText: '', questions: []}
        ]
      }
    ]
  },
  linearAlgebra: {
    id: 'linearAlgebra',
    name: 'Linear Algebra',
    flag: '➡️',
    units: []
  },
  ai: {
    id: 'ai',
    name: 'Artificial Intelligence',
    flag: '🤖',
    units: []
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    flag: '⚡',
    units: []
  },
  hexapod: {
    id: 'hexapod',
    name: 'Hexapod Engineering',
    flag: '🤖',
    units: []
  }
};

// =====================================================================
// COURSE DATA LOADING
// =====================================================================
function loadCourseData() {
  console.log('=== Loading Course Data ===');

  // Load Linear Algebra data
  console.log('Checking linearAlgebraAllTopics:', typeof window.linearAlgebraAllTopics);
  if (window.linearAlgebraAllTopics && window.linearAlgebraAllTopics.units && window.linearAlgebraAllTopics.units.length > 0) {
    courses.linearAlgebra.units = window.linearAlgebraAllTopics.units;
    console.log('✅ Linear Algebra loaded:', courses.linearAlgebra.units.length, 'units');
  } else {
    console.warn('⚠️ Linear Algebra not loaded');
  }

  // Load AI data
  console.log('Checking aiAllTopics:', typeof window.aiAllTopics);
  if (window.aiAllTopics && window.aiAllTopics.units && window.aiAllTopics.units.length > 0) {
    courses.ai.units = window.aiAllTopics.units;
    console.log('✅ AI loaded:', courses.ai.units.length, 'units');
  } else {
    console.warn('⚠️ AI not loaded');
  }

  // Load Calculus data
  console.log('Checking calculusAllTopics:', typeof window.calculusAllTopics);
  if (window.calculusAllTopics && window.calculusAllTopics.units && window.calculusAllTopics.units.length > 0) {
    courses.calculus.units = window.calculusAllTopics.units;
    console.log('✅ Calculus loaded:', courses.calculus.units.length, 'units');
  } else {
    console.warn('⚠️ Calculus not loaded');
  }

  // Load C++ data - assembled from chunks for mobile compatibility
  const cppChunkVars = [
    'cppChunk_1_5', 'cppChunk_6_10', 'cppChunk_11_15', 'cppChunk_16_20',
    'cppChunk_21_25', 'cppChunk_26_30', 'cppChunk_31_35', 'cppChunk_36_40',
    'cppChunk_41_45', 'cppChunk_46_49'
  ];
  const cppUnits = [];
  cppChunkVars.forEach(varName => {
    if (window[varName] && Array.isArray(window[varName])) {
      cppUnits.push(...window[varName]);
      console.log(`✅ C++ chunk ${varName}: ${window[varName].length} units`);
    } else {
      console.warn(`⚠️ C++ chunk missing: ${varName}`);
    }
  });
  // Also fall back to cppCombined if chunks didn't load
  if (cppUnits.length === 0 && window.cppCombined && window.cppCombined.units) {
    cppUnits.push(...window.cppCombined.units);
    console.log('✅ C++ loaded from cppCombined fallback:', cppUnits.length, 'units');
  }
  if (cppUnits.length > 0) {
    courses.cpp.units = cppUnits;
    console.log('✅ C++ total loaded:', courses.cpp.units.length, 'units');
  } else {
    console.warn('⚠️ C++ not loaded - no chunks or combined file found');
  }

  // Load Hexapod data
  console.log('Checking hexapodAllTopics:', typeof window.hexapodAllTopics);
  if (window.hexapodAllTopics && window.hexapodAllTopics.units && window.hexapodAllTopics.units.length > 0) {
    courses.hexapod.units = window.hexapodAllTopics.units;
    console.log('✅ Hexapod loaded:', courses.hexapod.units.length, 'units');
  } else {
    console.warn('⚠️ Hexapod not loaded');
  }

  console.log('=== Course Data Loading Complete ===');
  console.log('Final counts:', {
    'Linear Algebra': courses.linearAlgebra.units.length,
    'AI': courses.ai.units.length,
    'Calculus': courses.calculus.units.length,
    'C++': courses.cpp.units.length,
    'Hexapod': courses.hexapod.units.length
  });
}

// =====================================================================
// PROGRESS AND SETTINGS
// =====================================================================
let currentLesson = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let matchedPairs = [];
let progress = {
  completedLessons: [],
  xp: 0,
  streak: 0
};
let masteredQuestions = new Set();
let questionPool = [];
let currentQuestionAutoPlayed = false;
let currentView = 'dashboard';
let currentCourse = 'french'; // Default course
let currentConversation = null;
let conversationMessages = [];
let settings = {
  soundEnabled: true,
  ttsEnabled: false,
  ttsAutoPlay: false,
  soundPack: 'default',
  theme: 'light',
  font: 'default'
};

// Load progress from storage
function loadProgress() {
  try {
    if (typeof window !== 'undefined' && window.electron && window.electron.loadProgress) {
      const saved = window.electron.loadProgress();
      if (saved) {
        progress = saved;
        if (saved.currentCourse) {
          currentCourse = saved.currentCourse;
        }
        if (saved.currentView) {
          currentView = saved.currentView;
        }
      }
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('loadProgress').then(saved => {
        if (saved) {
          progress = saved;
          if (saved.currentCourse) {
            currentCourse = saved.currentCourse;
          }
          if (saved.currentView) {
            currentView = saved.currentView;
          }
        }
      }).catch(err => {
        console.error('Error loading progress:', err);
      });
    } else {
      const saved = localStorage.getItem('triolingo-progress');
      if (saved) {
        try {
          progress = JSON.parse(saved);
          if (progress.currentCourse) {
            currentCourse = progress.currentCourse;
          }
          if (progress.currentView) {
            currentView = progress.currentView;
          }
        } catch (e) {
          console.error('Error parsing saved progress:', e);
        }
      }
    }
    console.log('Progress loaded:', progress);
  } catch (err) {
    console.error('Error in loadProgress:', err);
  }
}

// Save progress to storage
function saveProgress() {
  try {
    // Update progress object with current state
    progress.currentCourse = currentCourse;
    progress.currentView = currentView;

    if (typeof window !== 'undefined' && window.electron && window.electron.saveProgress) {
      window.electron.saveProgress(progress);
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('saveProgress', progress).catch(err => {
        console.error('Error saving progress:', err);
      });
    } else {
      localStorage.setItem('triolingo-progress', JSON.stringify(progress));
    }
  } catch (err) {
    console.error('Error in saveProgress:', err);
  }
}

// Setup event listeners
function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) {
        renderView(view);
      }
    });
  });

  const courseSelect = document.getElementById('courseSelect');
  if (courseSelect) {
    courseSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
}

// =====================================================================
// VIEW RENDERING
// =====================================================================
function renderView(viewName) {
  console.log('Rendering view:', viewName);
  currentView = viewName;

  // Save the current view and course to progress
  saveProgress();

  const container = document.getElementById('view-container');
  if (!container) {
    console.error('View container not found');
    return;
  }

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) {
    const titles = {
      'dashboard': 'Triolingo',
      'learn': 'Learn',
      'conversations': 'Conversations',
      'progress': 'Progress',
      'settings': 'Settings',
      'lesson': 'Lesson',
      'conversation-chat': 'Conversation Practice',
      'memory-palace': 'Memory Palaces'
    };
    headerTitle.textContent = titles[viewName] || 'Triolingo';
  }

  switch (viewName) {
    case 'dashboard':
      container.innerHTML = renderDashboard();
      setupDashboardListeners();
      break;
    case 'learn':
      container.innerHTML = renderLearn();
      setupDashboardListeners();
      break;
    case 'conversations':
      container.innerHTML = renderConversations();
      break;
    case 'conversation-chat':
      container.innerHTML = renderConversationChat();
      setupChatInput();
      break;
    case 'progress':
      container.innerHTML = renderProgressView();
      break;
    case 'settings':
      container.innerHTML = renderSettings();
      setupSettingsListeners();
      break;
    case 'memory-palace':
      container.innerHTML = renderMemoryPalace();
      setupMemoryPalaceListeners();
      break;
    case 'lesson':
      container.innerHTML = renderLesson();
      setupLessonListeners();
      // Typeset MathJax after rendering lesson content
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().then(() => {
          console.log('MathJax typeset complete');
        }).catch((err) => {
          console.error('MathJax typeset error:', err);
        });
      }
      break;
    case 'conversation-chat':
      break;
    default:
      console.error('Unknown view:', viewName);
      container.innerHTML = '<p>Unknown view</p>';
  }
}

// Dashboard
function renderDashboard() {
  console.log('=== renderDashboard() called ===');

  const courseSelect = document.getElementById('courseSelect');
  console.log('courseSelect element:', courseSelect);

  if (!courseSelect) {
    console.error('courseSelect element not found!');
    return '<p>Course selector not found</p>';
  }

  const courseId = courseSelect.value;
  console.log('Current courseId:', courseId);

  const course = courses[courseId];
  console.log('Course object:', course);
  console.log('Course units count:', course ? course.units.length : 'course is null');

  if (!course) {
    console.error('Course not found for ID:', courseId);
    return '<p>Course not found</p>';
  }

  console.log('Units to render:', course.units);

  if (!course.units || course.units.length === 0) {
    console.warn('No units in course!');
    return `
      <div class="dashboard">
        <div class="progress-card">
          <div class="progress-stats">
            <div class="progress-stat">
              <span class="progress-icon">🏆</span>
              <span class="progress-value">${progress.xp}</span>
              <span class="progress-label">XP</span>
            </div>
            <div class="progress-stat">
              <span class="progress-icon">🔥</span>
              <span class="progress-value">${progress.streak}</span>
              <span class="progress-label">Day Streak</span>
            </div>
            <div class="progress-stat">
              <span class="progress-icon">📚</span>
              <span class="progress-value">${progress.completedLessons ? progress.completedLessons.length : 0}</span>
              <span class="progress-label">Lessons</span>
            </div>
          </div>
        </div>
        <div class="units-container">
          <p>No units available for this course.</p>
        </div>
      </div>
    `;
  }

  const unitsHtml = course.units.map(unit => renderUnit(unit)).join('');
  console.log('Generated units HTML length:', unitsHtml.length);

  return `
    <div class="dashboard">
      <div class="progress-card">
        <div class="progress-stats">
          <div class="progress-stat">
            <span class="progress-icon">🏆</span>
            <span class="progress-value">${progress.xp}</span>
            <span class="progress-label">XP</span>
          </div>
          <div class="progress-stat">
            <span class="progress-icon">🔥</span>
            <span class="progress-value">${progress.streak}</span>
            <span class="progress-label">Day Streak</span>
          </div>
          <div class="progress-stat">
            <span class="progress-icon">📚</span>
            <span class="progress-value">${progress.completedLessons ? progress.completedLessons.length : 0}</span>
            <span class="progress-label">Lessons</span>
          </div>
        </div>
      </div>
      <div class="units-container">
        ${unitsHtml}
      </div>
    </div>
  `;
}

function renderUnit(unit) {
  console.log('renderUnit called with:', unit);

  const unitName = unit.unitName || unit.title || 'Unit';
  const unitDesc = unit.unitDescription || unit.description || 'Master concepts';

  console.log('Unit name:', unitName);
  console.log('Unit lessons count:', unit.lessons ? unit.lessons.length : 'no lessons array');

  if (!unit.lessons || unit.lessons.length === 0) {
    return `
      <div class="unit">
        <div class="unit-header">
          <h3>${unitName}</h3>
          <p>${unitDesc}</p>
        </div>
        <div class="lessons-grid">
          <p>No lessons available</p>
        </div>
      </div>
    `;
  }

  const lessonsHtml = unit.lessons.map(lesson => renderLessonCard(lesson)).join('');

  return `
    <div class="unit">
      <div class="unit-header">
        <h3>${unitName}</h3>
        <p>${unitDesc}</p>
      </div>
      <div class="lessons-grid">
        ${lessonsHtml}
      </div>
    </div>
  `;
}

function renderLessonCard(lesson) {
  const courseId = document.getElementById('courseSelect').value;
  const isCompleted = progress.completedLessons?.includes(`${courseId}-${lesson.id}`);
  const isLocked = isLessonLocked(courseId, lesson.id);

  return `
    <button class="lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}"
            data-lesson-id="${lesson.id}"
            ${isLocked ? 'disabled' : ''}>
      <div class="lesson-icon">
        ${isCompleted ? '✅' : isLocked ? '🔒' : lesson.type === 'lesson' ? '📚' : '💬'}
      </div>
      <div class="lesson-info">
        <h4>${lesson.title}</h4>
        <span class="xp-badge">+${lesson.xp} XP</span>
      </div>
    </button>
  `;
}

function setupDashboardListeners() {
  document.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.dataset.lessonId;
      startLesson(lessonId);
    });
  });
}

// Learn view
function renderLearn() {
  return `
    <div class="learn-view">
      <h2>Learn</h2>
      <p>Select a lesson to begin learning.</p>
      ${renderDashboard()}
    </div>
  `;
}

// Conversations view
function renderConversations() {
  const courseSelect = document.getElementById('courseSelect');
  const courseId = courseSelect ? courseSelect.value : 'french';

  const conversations = typeof ConversationLessons !== 'undefined' && ConversationLessons[courseId]
    ? ConversationLessons[courseId]
    : [];

  if (conversations.length === 0) {
    return `
      <div class="conversations-view">
        <h2>Conversation Practice</h2>
        <p>No conversation lessons available for this course yet.</p>
      </div>
    `;
  }

  const cards = conversations.map(conv => `
    <div class="conversation-card ${conv.difficulty}" onclick="startConversation('${conv.id}');">
      <div class="conversation-icon">${conv.icon}</div>
      <div class="conversation-info">
        <h3>${conv.title}</h3>
        <p>${conv.description}</p>
        <div class="conversation-meta">
          <span class="difficulty-badge ${conv.difficulty}">${conv.difficulty}</span>
          <span class="time-badge">⏱️ ${conv.estimatedTime} min</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="conversations-view">
      <h2>Conversation Practice</h2>
      <p>Practice real-world conversations with AI roleplay scenarios.</p>
      <div class="conversations-grid">
        ${cards}
      </div>
    </div>
  `;
}

function startConversation(conversationId) {
  const courseSelect = document.getElementById('courseSelect');
  const courseId = courseSelect ? courseSelect.value : 'french';

  const conversations = typeof ConversationLessons !== 'undefined' && ConversationLessons[courseId]
    ? ConversationLessons[courseId]
    : [];

  const conversation = conversations.find(c => c.id === conversationId);

  if (!conversation) {
    console.error('Conversation not found:', conversationId);
    return;
  }

  currentConversation = conversation;
  conversationMessages = [];
  renderView('conversation-chat');
}

function renderConversationChat() {
  if (!currentConversation) {
    renderView('conversations');
    return '';
  }

  const messagesHtml = conversationMessages.map(msg => `
    <div class="chat-message ${msg.role}">
      <div class="message-avatar">${msg.role === 'user' ? '👤' : '🤖'}</div>
      <div class="message-content">
        <div class="message-text">${msg.text}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="conversation-chat-view">
      <div class="chat-header">
        <button class="btn btn-secondary back-btn" onclick="renderView('conversations');">← Back</button>
        <div class="chat-title">
          <span class="chat-icon">${currentConversation.icon}</span>
          <h2>${currentConversation.title}</h2>
        </div>
        <span class="chat-difficulty ${currentConversation.difficulty}">${currentConversation.difficulty}</span>
      </div>
      <div class="chat-scenario">
        <strong>Scenario:</strong> ${currentConversation.scenario}
        <div class="chat-topics">
          <span class="topic-label">Topics:</span>
          ${currentConversation.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="chat-messages">
        ${messagesHtml}
      </div>
      <div class="chat-input-area">
        <div class="chat-input-wrapper">
          <input type="text" class="chat-input" id="chatInput" placeholder="Type your message..." />
          <button class="btn btn-primary send-btn" onclick="sendChatMessage();">Send</button>
        </div>
      </div>
    </div>
  `;
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();

  if (!message) return;

  conversationMessages.push({
    role: 'user',
    text: message
  });

  input.value = '';
  renderView('conversation-chat');

  setTimeout(() => {
    const responses = [
      "That's great! Let's continue practicing.",
      "Good choice of words! Try adding more detail.",
      "Excellent! You're doing well.",
      "Remember to use the vocabulary you learned.",
      "Let's practice that again with a slightly different scenario."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    conversationMessages.push({
      role: 'assistant',
      text: randomResponse
    });

    renderView('conversation-chat');
  }, 1000);
}

function setupChatInput() {
  const input = document.getElementById('chatInput');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }
}

// Progress view
function renderProgressView() {
  return `
    <div class="progress-view">
      <h2>Progress</h2>
      <p>Track your learning journey.</p>
      <div class="progress-stats">
        <div class="stat-card">
          <h3>XP</h3>
          <p class="stat-value">${progress.xp}</p>
        </div>
        <div class="stat-card">
          <h3>Streak</h3>
          <p class="stat-value">${progress.streak} days</p>
        </div>
        <div class="stat-card">
          <h3>Lessons</h3>
          <p class="stat-value">${progress.completedLessons?.length || 0}</p>
        </div>
      </div>
    </div>
  `;
}

// Settings view
function renderSettings() {
  // Get all themes and fonts from themeManager
  const themes = typeof themeManager !== 'undefined' ? themeManager.getThemeNames() : [];
  const fonts = typeof themeManager !== 'undefined' ? themeManager.getFontNames() : [];
  const currentTheme = typeof themeManager !== 'undefined' ? themeManager.currentTheme : 'white';
  const currentFont = typeof themeManager !== 'undefined' ? themeManager.currentFont : 'default';

  const themeCards = themes.map(theme => {
    const themeData = typeof themeManager !== 'undefined' ? themeManager.getTheme(theme.id) : null;
    const accentColor = themeData ? themeData.colors['--accent'] : '#58cc02';
    const bgColor = themeData ? themeData.colors['--bg-primary'] : '#ffffff';

    return `
      <div class="theme-card ${theme.id === currentTheme ? 'active' : ''}" onclick="changeTheme('${theme.id}');"
           style="--theme-accent: ${accentColor}; --theme-bg: ${bgColor};">
        <div class="theme-preview" style="background: ${bgColor}; border: 2px solid ${accentColor};">
        </div>
        <div class="theme-card-content">
          <h4>${theme.name}</h4>
        </div>
      </div>
    `;
  }).join('');

  const fontCards = fonts.map(font => `
    <div class="font-card ${font.id === currentFont ? 'active' : ''}" onclick="changeFont('${font.id}');">
      <h3 style="font-family: ${font.id === 'default' ? 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : `"${font.name}"`}">${font.name}</h3>
    </div>
  `).join('');

  return `
    <div class="settings-view">
      <h2>Settings</h2>

      <!-- Sound Section -->
      <div class="settings-section">
        <h3>Sound</h3>
        <div class="sound-options">
          <button class="btn btn-compact ${settings.soundEnabled ? 'btn-primary' : 'btn-secondary'}" onclick="toggleSound(); renderView('settings');">
            Sound: ${settings.soundEnabled ? 'ON' : 'OFF'}
          </button>
          <button class="btn btn-compact ${settings.ttsEnabled ? 'btn-primary' : 'btn-secondary'}" onclick="toggleTTS(); renderView('settings');">
            TTS: ${settings.ttsEnabled ? 'ON' : 'OFF'}
          </button>
          <button class="btn btn-compact ${settings.ttsAutoPlay ? 'btn-primary' : 'btn-secondary'}" onclick="toggleTTSAutoPlay(); renderView('settings');">
            TTS Auto-Play: ${settings.ttsAutoPlay ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <!-- Themes Section -->
      <div class="settings-section">
        <h3>Themes</h3>
        <div class="theme-grid">
          ${themeCards}
        </div>
      </div>

      <!-- Fonts Section -->
      <div class="settings-section">
        <h3>Fonts</h3>
        <div class="font-grid">
          ${fontCards}
        </div>
      </div>
    </div>
  `;
}

function setupSettingsListeners() {
  // Listeners handled by inline onclick
}

// Lesson view
let lessonPhase = 'content'; // 'content' or 'questions'
let currentAnswerFeedback = null; // Store answer feedback
let userSubmittedAnswer = null; // Store user's submitted answer

function renderLesson() {
  if (!currentLesson) {
    return '<p>No lesson loaded</p>';
  }

  // Show lesson content first, then questions
  if (lessonPhase === 'content') {
    return renderLessonContent();
  } else {
    const question = currentLesson.questions[currentQuestionIndex];
    return `
      <div class="lesson-view">
        <div class="lesson-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / currentLesson.questions.length) * 100}%"></div>
          </div>
          <p>${currentQuestionIndex + 1} / ${currentLesson.questions.length}</p>
        </div>
        <div class="question-container">
          ${renderQuestion(question)}
          ${currentAnswerFeedback ? renderAnswerFeedback(question) : ''}
        </div>
        <div class="lesson-controls">
          <button class="btn btn-secondary quit-btn" onclick="quitLesson()">Quit</button>
          <button class="btn btn-primary continue-btn" onclick="submitAnswer()">
            ${currentAnswerFeedback ? 'Next Question' : 'Submit Answer'}
          </button>
        </div>
      </div>
    `;
  }
}

function renderAnswerFeedback(question) {
  const isCorrect = currentAnswerFeedback.correct;
  const feedback = currentAnswerFeedback.feedback;

  return `
    <div class="answer-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
      <div class="feedback-content">
        <h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>
        ${userSubmittedAnswer ? `
          <div class="user-answer">
            <strong>Your answer:</strong>
            ${userSubmittedAnswer.type === 'code' ? `
              <pre class="code-answer">${userSubmittedAnswer.value}</pre>
            ` : userSubmittedAnswer.type === 'multiple-choice' ? `
              <span class="choice-answer">${userSubmittedAnswer.value}</span>
            ` : `
              <span class="text-answer">${userSubmittedAnswer.value}</span>
            `}
          </div>
        ` : ''}
        ${feedback ? `<p class="feedback-message">${feedback}</p>` : ''}
        ${!isCorrect && question.type === 'multiple-choice' ? `
          <p class="correct-answer"><strong>Correct answer:</strong> ${question.options[question.correct]}</p>
        ` : ''}
        ${!isCorrect && question.explanation ? `<p class="explanation"><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
        ${isCorrect && question.explanation ? `<p class="explanation"><strong>Great job!</strong> ${question.explanation}</p>` : ''}
      </div>
    </div>
  `;
}

function gradeCodeAnswer(question, userCode) {
  console.log('[DEBUG] gradeCodeAnswer called with:', { question, userCode });

  // STRICT REJECT: Require at least 60 characters
  if (userCode.length < 60) {
    console.log('[DEBUG] Code too short (< 60 chars)');
    return {
      correct: false,
      feedback: `❌ Code is too short! You need at least 60 characters. Current: ${userCode.length} characters. Please write a complete solution.`
    };
  }

  // Check if expected output is provided
  if (!question.expectedOutput) {
    return {
      correct: false,
      feedback: '❌ This question does not have an expected output defined for grading. Please contact the instructor.'
    };
  }

  // Normalize code for comparison
  const normalizedUserCode = userCode.toLowerCase().replace(/\s+/g, '');
  const normalizedTemplate = question.codeTemplate ? question.codeTemplate.toLowerCase().replace(/\s+/g, '') : '';

  // Check if user just copied the template without modifications
  if (normalizedUserCode === normalizedTemplate) {
    console.log('[DEBUG] User copied template without modification');
    return {
      correct: false,
      feedback: '❌ Please modify the template code - don\'t just copy it. Complete the exercise!'
    };
  }

  // STRICT CHECK: Must have expected output
  const expectedOutput = question.expectedOutput.toLowerCase();
  const lowerUserCode = userCode.toLowerCase();

  console.log('[DEBUG] Expected output:', expectedOutput);

  // Check if expected output appears in cout/print statements
  if (lowerUserCode.includes('std::cout') || lowerUserCode.includes('printf') || lowerUserCode.includes('print')) {
    // Extract output from code
    const outputMatches = lowerUserCode.match(/<<\s*"([^"]+)"/g) ||
                         lowerUserCode.match(/"([^"]+)"/g) ||
                         [];

    console.log('[DEBUG] Output matches found:', outputMatches);

    if (outputMatches.length > 0) {
      // Check if expected output is in any of the quoted strings
      const foundOutput = outputMatches.some(match =>
        match.toLowerCase().includes(expectedOutput)
      );

      if (foundOutput) {
        console.log('[DEBUG] Found expected output - marking correct');
        return {
          correct: true,
          feedback: '✅ Correct! Your code should output: ' + question.expectedOutput
        };
      } else {
        console.log('[DEBUG] Expected output not found - marking incorrect');
        return {
          correct: false,
          feedback: '❌ Your code doesn\'t output the expected result: "' + question.expectedOutput + '"\n\n' +
                   'Make sure your print statement includes exactly: "' + question.expectedOutput + '"'
        };
      }
    }
  }

  // If no output statement found, reject
  console.log('[DEBUG] No output statement found - marking incorrect');
  return {
    correct: false,
    feedback: '❌ Your code doesn\'t have a print statement (std::cout, printf, etc.)\n\n' +
             'Expected output: "' + question.expectedOutput + '"\n\n' +
             'Please add a print statement with the correct output.'
  };
}

function submitAnswer() {
  if (!currentLesson) {
    console.error('No lesson in progress');
    return;
  }

  // If we already showed feedback, move to next question
  if (currentAnswerFeedback) {
    currentQuestionIndex++;
    selectedAnswer = null;
    currentAnswerFeedback = null;
    userSubmittedAnswer = null;

    if (currentQuestionIndex >= currentLesson.questions.length) {
      completeLesson();
    } else {
      renderView('lesson');
    }
    return;
  }

  // Otherwise, check the answer
  const question = currentLesson.questions[currentQuestionIndex];
  let isCorrect = false;
  let feedback = '';

  switch (question.type) {
    case 'multiple-choice':
      isCorrect = selectedAnswer === question.correct;
      // Store the user's answer
      userSubmittedAnswer = {
        type: 'multiple-choice',
        value: question.options[selectedAnswer] || 'No answer selected'
      };
      if (isCorrect) {
        feedback = 'Correct answer!';
      } else {
        const selectedOption = question.options[selectedAnswer];
        const correctOption = question.options[question.correct];
        feedback = `❌ You selected: "${selectedOption}"\n\n✅ Correct answer: "${correctOption}"\n\n${selectedOption} is not the correct answer. ${correctOption} is the right choice.`;
      }
      break;
    case 'typing':
      const typingInput = document.querySelector('.typing-input');
      const userAnswer = typingInput ? typingInput.value.trim() : '';
      const correctAnswers = question.correctAnswer.map(a => a.toLowerCase());
      const userAnswerLower = userAnswer.toLowerCase();
      isCorrect = correctAnswers.includes(userAnswerLower);
      // Store the user's answer
      userSubmittedAnswer = {
        type: 'typing',
        value: userAnswer || 'No answer'
      };
      if (isCorrect) {
        feedback = 'Correct answer!';
      } else {
        const bestMatch = findBestMatch(userAnswer, question.correctAnswer);
        if (bestMatch) {
          feedback = `❌ You entered: "${userAnswer}"\n\n✅ Correct answer: "${bestMatch}"\n\nYour answer is close but not quite right. The correct answer is "${bestMatch}". Check your spelling and try again.`;
        } else {
          feedback = `❌ You entered: "${userAnswer}"\n\n✅ Acceptable answers: ${question.correctAnswer.map(a => `"${a}"`).join(', ')}\n\nYour answer doesn't match any of the acceptable answers. Try again!`;
        }
      }
      break;
    case 'code':
      console.log('[DEBUG] Code question submitted');
      const codeEditor = document.querySelector(`#code-editor-${currentQuestionIndex}`);
      const userCode = codeEditor ? codeEditor.value.trim() : '';
      console.log('[DEBUG] User code:', userCode);
      console.log('[DEBUG] Code length:', userCode.length);

      // Check if code is empty
      if (!userCode) {
        console.log('[DEBUG] Code is empty - marking incorrect');
        isCorrect = false;
        feedback = 'Please write some code before submitting.';
        // Store the user's answer
        userSubmittedAnswer = {
          type: 'code',
          value: userCode
        };
        break;
      }

      // Grade code question
      console.log('[DEBUG] Calling gradeCodeAnswer...');
      const gradingResult = gradeCodeAnswer(question, userCode);
      console.log('[DEBUG] Grading result:', gradingResult);
      isCorrect = gradingResult.correct;
      feedback = gradingResult.feedback;
      // Store the user's answer
      userSubmittedAnswer = {
        type: 'code',
        value: userCode
      };
      break;
    case 'fill-blank':
      // For fill-in-blank, we need to check the filled value
      // This would need to be implemented based on how fill-blank questions work
      isCorrect = true; // Placeholder
      feedback = 'Answer submitted';
      userSubmittedAnswer = {
        type: 'fill-blank',
        value: 'Answer submitted'
      };
      break;
  }

  currentAnswerFeedback = { correct: isCorrect, feedback };
  renderView('lesson');
}

// =====================================================================
// LESSON FUNCTIONS
// =====================================================================
function selectAnswer(index) {
  selectedAnswer = index;
  // Don't re-render entire view, just update the selection
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
}

function handleTypingInput() {
  // Handle typing input
}

function handleTypingEnter(event) {
  if (event.key === 'Enter') {
    submitAnswer();
  }
}

function startLesson(lessonId) {
  const courseId = document.getElementById('courseSelect').value;
  const course = courses[courseId];

  if (!course) {
    console.error('Course not found');
    return;
  }

  // Find lesson
  for (const unit of course.units) {
    const lesson = unit.lessons.find(l => l.id == lessonId);
    if (lesson) {
      // CRITICAL: Don't start lessons without content
      if (!lessonHasContent(lesson)) {
        console.error('Lesson has no content:', lessonId);
        alert('This lesson does not have content yet. Please try a different lesson.');
        return;
      }
      currentLesson = lesson;
      lessonPhase = 'content'; // Start with lesson content
      currentQuestionIndex = 0;
      selectedAnswer = null;
      currentAnswerFeedback = null;
      renderView('lesson');
      return;
    }
  }

  console.error('Lesson not found:', lessonId);
}

function completeLesson() {
  const courseId = document.getElementById('courseSelect').value;
  const lessonKey = `${courseId}-${currentLesson.id}`;

  if (!progress.completedLessons) {
    progress.completedLessons = [];
  }

  if (!progress.completedLessons.includes(lessonKey)) {
    progress.completedLessons.push(lessonKey);
    progress.xp += currentLesson.xp;
    saveProgress();
  }

  currentLesson = null;
  userSubmittedAnswer = null;
  renderView('dashboard');
}

function quitLesson() {
  currentLesson = null;
  renderView('dashboard');
}

// =====================================================================
// MARKDOWN RENDERING
// =====================================================================
function renderMarkdownContent(text) {
  // Store LaTeX equations to preserve them
  const equations = [];
  let html = text;

  // Store display math ($$...$$)
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (match, eq) => {
    equations.push({ type: 'display', equation: eq });
    return `__MATHJAX_DISPLAY_${equations.length - 1}__`;
  });

  // Store inline math ($...$)
  html = html.replace(/\$([^$\n]+?)\$/g, (match, eq) => {
    equations.push({ type: 'inline', equation: eq });
    return `__MATHJAX_INLINE_${equations.length - 1}__`;
  });

  // Headers
  html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/^- (.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  html = html.replace(/<\/ul>\n<ul>/g, '\n');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

  // Diagram references - MUST come before inline code!
  html = html.replace(/`diagrams\/([^`]+)\.png`/g, '<img src="diagrams/$1.png" class="lesson-diagram" alt="$1 diagram">');

  // Inline code - handles remaining backticks after diagrams
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Restore LaTeX equations
  html = html.replace(/__MATHJAX_DISPLAY_(\d+)__/g, (match, index) => {
    return `$$${equations[index].equation}$$`;
  });
  html = html.replace(/__MATHJAX_INLINE_(\d+)__/g, (match, index) => {
    return `$${equations[index].equation}$`;
  });

  // Paragraphs
  html = html.split('\n\n').map(p => {
    if (!p.trim()) return '';
    if (p.startsWith('<')) return p;
    return `<p>${p.trim()}</p>`;
  }).join('\n');

  return html;
}

function renderLessonContent() {
  const lessonText = currentLesson.lessonText || '';
  const hasText = lessonText && lessonText.length > 10;
  const hasQuestions = currentLesson.questions && currentLesson.questions.length > 0;

  return `
    <div class="lesson-view">
      <div class="lesson-content">
        <h2 class="lesson-title">${currentLesson.title}</h2>
        ${hasText ? `
          <div class="lesson-text-content">
            ${renderMarkdownContent(lessonText)}
          </div>
        ` : hasQuestions ? `
          <div class="lesson-text-content">
            <p>Ready to practice with ${currentLesson.questions.length} questions!</p>
          </div>
        ` : '<p>No lesson content available</p>'}
      </div>
      <div class="lesson-controls">
        <button class="btn btn-secondary quit-btn" onclick="quitLesson()">Quit</button>
        <button class="btn btn-primary continue-btn" onclick="startQuestions()">Start Practice</button>
      </div>
    </div>
  `;
}

function startQuestions() {
  lessonPhase = 'questions';
  currentQuestionIndex = 0;
  selectedAnswer = null;
  currentAnswerFeedback = null;
  renderView('lesson');
}

function renderQuestion(question) {
  switch (question.type) {
    case 'multiple-choice':
      return renderMultipleChoiceQuestion(question);
    case 'fill-blank':
      return renderFillBlankQuestion(question);
    case 'typing':
      return renderTypingQuestion(question);
    case 'code':
      return renderCodeQuestion(question);
    default:
      return `<p>Unknown question type: ${question.type}</p>`;
  }
}

function renderMultipleChoiceQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="multiple-choice-question">
      <p class="question-text">${renderedQuestion}</p>
      <div class="options-vertical">
        ${question.options.map((opt, i) => `
          <button class="option-btn ${selectedAnswer === i ? 'selected' : ''}"
                  onclick="selectAnswer(${i})">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFillBlankQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="fill-blank-question">
      <p class="question-text">${renderedQuestion}</p>
    </div>
  `;
}

function renderTypingQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  return `
    <div class="typing-question">
      <p class="question-text">${renderedQuestion}</p>
      <input type="text" class="typing-input" placeholder="Type your answer...">
    </div>
  `;
}

function renderCodeQuestion(question) {
  const renderedQuestion = renderMarkdownContent(question.question);
  const language = question.language || 'cpp';
  const codeTemplate = question.codeTemplate || '';
  const expectedOutput = question.expectedOutput || '';
  const localLLMGrade = question.localLLMGrade !== false; // Default to true

  return `
    <div class="code-question">
      <p class="question-text">${renderedQuestion}</p>
      <div class="code-editor-container">
        <div class="code-editor-header">
          <span class="code-language">${language}</span>
          <span class="code-status" id="code-status-${currentQuestionIndex}"></span>
        </div>
        <textarea class="code-editor-input" id="code-editor-${currentQuestionIndex}"
                  placeholder="Write your ${language} code here..."
                  rows="12"
                  spellcheck="false">${codeTemplate}</textarea>
        <div class="code-output-section">
          <label class="code-output-label">Expected Output:</label>
          <code class="code-output-display">${expectedOutput}</code>
        </div>
        ${localLLMGrade ? `
        <div class="code-llm-info">
          <small>🤖 This code will be graded by an AI. Write your solution above.</small>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

function setupLessonListeners() {
  const typingInput = document.querySelector('.typing-input');
  if (typingInput) {
    typingInput.addEventListener('input', handleTypingInput);
    typingInput.addEventListener('keydown', handleTypingEnter);
  }
}

function continueLesson() {
  // This is now handled by submitAnswer()
  submitAnswer();
}

// =====================================================================
// UTILITY FUNCTIONS
// =====================================================================
function isLessonCompleted(courseId, lessonId) {
  const key = `${courseId}-${lessonId}`;
  return progress.completedLessons?.includes(key) || false;
}

function lessonHasContent(lesson) {
  // A lesson has content if it has questions
  return lesson.questions && lesson.questions.length > 0;
}

function isLessonLocked(courseId, lessonId) {
  if (courseId === 'calculus') return false;

  const course = courses[courseId];
  let currentLesson = null;

  // Find the lesson
  for (const unit of course.units) {
    const lesson = unit.lessons.find(l => l.id == lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) return true;

  // CRITICAL: Lessons without content (empty placeholders) are ALWAYS locked
  // Lessons WITH content are ALWAYS unlocked (clickable)
  if (!lessonHasContent(currentLesson)) {
    return true;
  }

  return false;
}

function toggleSound() {
  settings.soundEnabled = !settings.soundEnabled;
  if (typeof soundManager !== 'undefined') {
    soundManager.enabled = settings.soundEnabled;
  }
  saveSettings();
}

function toggleTTS() {
  settings.ttsEnabled = !settings.ttsEnabled;
  if (typeof ttsManager !== 'undefined') {
    ttsManager.enabled = settings.ttsEnabled;
  }
  saveSettings();
}

function changeTheme(themeName) {
  if (typeof themeManager !== 'undefined') {
    themeManager.setTheme(themeName);
  }
  renderView('settings');
}

function changeFont(fontId) {
  if (typeof themeManager !== 'undefined') {
    themeManager.applyFont(fontId);
    themeManager.saveFont(fontId);
  }
  renderView('settings');
}

function toggleTTSAutoPlay() {
  settings.ttsAutoPlay = !settings.ttsAutoPlay;
  saveSettings();
}

function changeTheme(themeName) {
  settings.theme = themeName;
  if (typeof themeManager !== 'undefined') {
    themeManager.setTheme(themeName);
  }
  saveSettings();
}

function changeSoundPack(pack) {
  settings.soundPack = pack;
  if (typeof soundManager !== 'undefined') {
    soundManager.setPack(pack);
  }
  saveSettings();
}

function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  currentCourse = lang;
  saveProgress();
  initializeCourseSelector(); // Reorder dropdown to show current course first
  // Force render the learn view when changing course
  setTimeout(() => {
    currentView = 'learn';
    renderView('learn');
  }, 100);
}

function initializeCourseSelector() {
  const courseSelect = document.getElementById('courseSelect');
  if (!courseSelect) return;

  // Get all course data
  const courseIds = Object.keys(courses);
  const currentOptions = Array.from(courseSelect.options);

  // Save current selection
  const savedValue = currentCourse;

  // Clear and rebuild options with saved course first
  courseSelect.innerHTML = '';

  // Add saved course at the top if it exists
  if (courses[savedValue]) {
    const option = document.createElement('option');
    option.value = savedValue;
    option.textContent = `${courses[savedValue].flag} ${courses[savedValue].name}`;
    courseSelect.appendChild(option);
  }

  // Add remaining courses
  courseIds.forEach(courseId => {
    if (courseId !== savedValue) {
      const option = document.createElement('option');
      option.value = courseId;
      option.textContent = `${courses[courseId].flag} ${courses[courseId].name}`;
      courseSelect.appendChild(option);
    }
  });

  // Set the saved value as selected
  courseSelect.value = savedValue;
  console.log('Course selector initialized with:', savedValue);
}

function moveToNextUnmastered() {
  const courseId = document.getElementById('courseSelect').value;
  const course = courses[courseId];

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      if (!isLessonCompleted(courseId, lesson.id) && !isLessonLocked(courseId, lesson.id)) {
        startLesson(lesson.id);
        return;
      }
    }
  }
}

function saveSettings() {
  try {
    if (typeof window !== 'undefined' && window.electron && window.electron.saveSettings) {
      window.electron.saveSettings(settings);
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('saveSettings', settings).catch(err => {
        console.error('Error saving settings:', err);
      });
    } else {
      localStorage.setItem('triolingo-settings', JSON.stringify(settings));
    }
  } catch (err) {
    console.error('Error in saveSettings:', err);
  }
}

// =====================================================================
// INITIALIZATION
// =====================================================================
async function init() {
  try {
    console.log('Initializing Triolingo...');

    // Load course data from external files
    loadCourseData();

    // Ensure themeManager is initialized
    if (typeof themeManager === 'undefined') {
      console.warn('themeManager not defined - waiting for it to load...');
      await new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
          if (typeof themeManager !== 'undefined') {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
          resolve();
        }, 5000);
      });
    }

    console.log('themeManager found, initializing...');
    if (typeof themeManager !== 'undefined' && themeManager.init) {
      await themeManager.init();
    }
    if (typeof soundManager !== 'undefined' && soundManager.init) {
      await soundManager.init();
    }
    if (typeof ttsManager !== 'undefined' && ttsManager.init) {
      await ttsManager.init();
    }

    loadProgress();
    setupEventListeners();
    initializeCourseSelector();
    renderView(currentView); // Use saved view instead of always dashboard
    console.log('Initialization complete!');
  } catch (error) {
    console.error('Error during initialization:', error);
    setupEventListeners();
    renderView('dashboard');
  }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
// =====================================================================
// HELPER FUNCTIONS
// =====================================================================

function findBestMatch(userAnswer, correctAnswers) {
  if (!userAnswer || !correctAnswers || correctAnswers.length === 0) {
    return null;
  }

  const userLower = userAnswer.toLowerCase().trim();

  // Find the closest match based on string similarity
  let bestMatch = null;
  let bestScore = 0;

  for (const correct of correctAnswers) {
    const correctLower = correct.toLowerCase();

    // Exact match
    if (correctLower === userLower) {
      return correct;
    }

    // Calculate similarity score
    const score = calculateSimilarity(userLower, correctLower);
    if (score > bestScore && score > 0.5) {
      bestScore = score;
      bestMatch = correct;
    }
  }

  return bestMatch;
}

function calculateSimilarity(str1, str2) {
  // Simple similarity based on character overlap
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) {
    return 1.0;
  }

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
}

// =====================================================================
// MOBILE DETECTION AND RESPONSIVE BEHAVIOR
// =====================================================================

// Detect if device is mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
}

// Mobile menu functionality
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.mobile-overlay');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  isMobileMenuOpen = !isMobileMenuOpen;
  
  if (isMobileMenuOpen) {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    toggle.classList.add('active');
    toggle.innerHTML = '✕';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.mobile-overlay');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  isMobileMenuOpen = false;
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  toggle.classList.remove('active');
  toggle.innerHTML = '☰';
  document.body.style.overflow = ''; // Re-enable scrolling
}

// Create mobile menu toggle button
function createMobileMenuToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'mobile-menu-toggle';
  toggle.innerHTML = '☰';
  toggle.setAttribute('aria-label', 'Toggle menu');
  toggle.onclick = toggleMobileMenu;
  document.body.appendChild(toggle);
}

// Create mobile overlay
function createMobileOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  overlay.onclick = closeMobileMenu;
  document.body.appendChild(overlay);
}

// Initialize mobile UI
function initMobileUI() {
  // Only create mobile elements if on mobile device
  if (isMobileDevice()) {
    createMobileMenuToggle();
    createMobileOverlay();
    console.log('Mobile UI initialized');
  }
}

// Close mobile menu when navigating to a new view
const originalRenderView = window.renderView;
if (typeof originalRenderView === 'function') {
  window.renderView = function(view) {
    if (isMobileDevice() && isMobileMenuOpen) {
      closeMobileMenu();
    }
    return originalRenderView.call(this, view);
  };
}

// Handle orientation changes
window.addEventListener('orientationchange', function() {
  setTimeout(function() {
    if (isMobileDevice()) {
      console.log('Orientation changed');
      // Adjust any UI if needed
    }
  }, 100);
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    const wasMobile = isMobileMenuOpen;
    const isNowMobile = isMobileDevice();
    
    // If switching from mobile to desktop, close menu
    if (wasMobile && !isNowMobile) {
      closeMobileMenu();
    }
    
    // Recreate mobile UI if switching from desktop to mobile
    if (isNowMobile && !document.querySelector('.mobile-menu-toggle')) {
      createMobileMenuToggle();
      createMobileOverlay();
    }
  }, 250);
});

// Log device info for debugging
function logDeviceInfo() {
  console.log('=== Device Info ===');
  console.log('User Agent:', navigator.userAgent);
  console.log('Is Mobile:', isMobileDevice());
  console.log('Screen Width:', window.innerWidth);
  console.log('Screen Height:', window.innerHeight);
  console.log('Touch Support:', 'ontouchstart' in window);
  console.log('Orientation:', screen.orientation ? screen.orientation.type : 'unknown');
}

// Call initialization
document.addEventListener('DOMContentLoaded', function() {
  initMobileUI();
  logDeviceInfo();
});
