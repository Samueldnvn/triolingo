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
    name: 'Calculus 1-3',
    flag: '📐',
    units: []
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

  // Load C++ data
  console.log('Checking cppCombined:', typeof window.cppCombined);
  if (window.cppCombined && window.cppCombined.units && window.cppCombined.units.length > 0) {
    courses.cpp.units = window.cppCombined.units;
    console.log('✅ C++ loaded:', courses.cpp.units.length, 'units');
  } else {
    console.warn('⚠️ C++ not loaded');
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
      }
    } else if (typeof window !== 'undefined' && window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.invoke('loadProgress').then(saved => {
        if (saved) {
          progress = saved;
        }
      }).catch(err => {
        console.error('Error loading progress:', err);
      });
    } else {
      const saved = localStorage.getItem('triolingo-progress');
      if (saved) {
        try {
          progress = JSON.parse(saved);
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

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
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
      'conversation-chat': 'Conversation Practice'
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
    case 'lesson':
      container.innerHTML = renderLesson();
      setupLessonListeners();
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
function renderLesson() {
  if (!currentLesson) {
    return '<p>No lesson loaded</p>';
  }

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
      </div>
      <div class="lesson-controls">
        <button class="btn btn-secondary quit-btn" onclick="quitLesson()">Quit</button>
        <button class="btn btn-primary continue-btn" onclick="continueLesson()">Continue</button>
      </div>
    </div>
  `;
}

function renderQuestion(question) {
  switch (question.type) {
    case 'multiple-choice':
      return renderMultipleChoiceQuestion(question);
    case 'fill-blank':
      return renderFillBlankQuestion(question);
    case 'typing':
      return renderTypingQuestion(question);
    default:
      return `<p>Unknown question type: ${question.type}</p>`;
  }
}

function renderMultipleChoiceQuestion(question) {
  return `
    <div class="multiple-choice-question">
      <p class="question-text">${question.question}</p>
      <div class="options-grid">
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
  return `
    <div class="fill-blank-question">
      <p class="question-text">${question.question}</p>
    </div>
  `;
}

function renderTypingQuestion(question) {
  return `
    <div class="typing-question">
      <p class="question-text">${question.question}</p>
      <input type="text" class="typing-input" placeholder="Type your answer...">
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

// =====================================================================
// LESSON FUNCTIONS
// =====================================================================
function selectAnswer(index) {
  selectedAnswer = index;
  renderView('lesson');
}

function handleTypingInput() {
  // Handle typing input
}

function handleTypingEnter(event) {
  if (event.key === 'Enter') {
    continueLesson();
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
      currentLesson = lesson;
      currentQuestionIndex = 0;
      selectedAnswer = null;
      renderView('lesson');
      return;
    }
  }

  console.error('Lesson not found:', lessonId);
}

function continueLesson() {
  if (!currentLesson) {
    console.error('No lesson in progress');
    return;
  }

  currentQuestionIndex++;
  selectedAnswer = null;

  if (currentQuestionIndex >= currentLesson.questions.length) {
    completeLesson();
  } else {
    renderView('lesson');
  }
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
  renderView('dashboard');
}

function quitLesson() {
  currentLesson = null;
  renderView('dashboard');
}

// =====================================================================
// UTILITY FUNCTIONS
// =====================================================================
function isLessonCompleted(courseId, lessonId) {
  const key = `${courseId}-${lessonId}`;
  return progress.completedLessons?.includes(key) || false;
}

function isLessonLocked(courseId, lessonId) {
  if (lessonId === 1) return false;
  if (courseId === 'calculus') return false;

  const course = courses[courseId];
  let currentUnit = null;
  let currentUnitIndex = 0;

  for (let i = 0; i < course.units.length; i++) {
    const unit = course.units[i];
    const hasLesson = unit.lessons.some(l => l.id == lessonId);
    if (hasLesson) {
      currentUnit = unit;
      currentUnitIndex = i;
      break;
    }
  }

  if (!currentUnit) return true;

  if (currentUnitIndex === 0) {
    return !isLessonCompleted(courseId, parseInt(lessonId) - 1);
  }

  const previousUnit = course.units[currentUnitIndex - 1];
  const lastLessonOfPrevUnit = previousUnit.lessons[previousUnit.lessons.length - 1];

  return !isLessonCompleted(courseId, lastLessonOfPrevUnit.id);
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
  setTimeout(() => {
    renderView(currentView);
  }, 100);
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
    renderView('dashboard');
    console.log('Initialization complete!');
  } catch (error) {
    console.error('Error during initialization:', error);
    setupEventListeners();
    renderView('dashboard');
  }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);