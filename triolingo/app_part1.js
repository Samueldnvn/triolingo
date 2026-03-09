// Missing functions for app.js - add this to the beginning of app.js

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
      // Fallback to localStorage for non-Electron environments
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
      // Fallback to localStorage
      localStorage.setItem('triolingo-progress', JSON.stringify(progress));
    }
  } catch (err) {
    console.error('Error in saveProgress:', err);
  }
}

function setupEventListeners() {
  // Navigation buttons
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) {
        renderView(view);
      }
    });
  });

  // Language selector (legacy)
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
}

// View rendering
function renderView(viewName) {
  console.log('Rendering view:', viewName);
  currentView = viewName;

  const container = document.getElementById('view-container');
  if (!container) {
    console.error('View container not found');
    return;
  }

  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  // Update header title
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

  // Render the view
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
    case 'progress':
      container.innerHTML = renderProgress();
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
      // Already handled by renderConversationChat
      break;
    default:
      console.error('Unknown view:', viewName);
      container.innerHTML = '<p>Unknown view</p>';
  }
}

// Dashboard view
function renderDashboard() {
  const courseId = document.getElementById('courseSelect').value;
  const course = courses[courseId];

  if (!course) {
    return '<p>Course not found</p>';
  }

  const unitsHtml = course.units.map(unit => renderUnit(unit)).join('');

  return `
    <div class="dashboard">
      <div class="course-header">
        <h2>${course.flag} ${course.name}</h2>
        <div class="stats">
          <span class="xp-badge">🏆 ${progress.xp} XP</span>
          <span class="streak-badge">🔥 ${progress.streak} Day Streak</span>
        </div>
      </div>
      <div class="units-container">
        ${unitsHtml}
      </div>
    </div>
  `;
}

// Setup dashboard listeners
function setupDashboardListeners() {
  document.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.dataset.lessonId;
      startLesson(lessonId);
    });
  });
}

// Settings listeners
function setupSettingsListeners() {
  // Sound toggle
  const soundToggle = document.querySelector('.sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      toggleSound();
      renderView('settings');
    });
  }

  // TTS toggle
  const ttsToggle = document.querySelector('.tts-toggle');
  if (ttsToggle) {
    ttsToggle.addEventListener('click', () => {
      toggleTTS();
      renderView('settings');
    });
  }
}

// Lesson listeners
function setupLessonListeners() {
  const continueBtn = document.querySelector('.continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', continueLesson);
  }

  const quitBtn = document.querySelector('.quit-btn');
  if (quitBtn) {
    quitBtn.addEventListener('click', quitLesson);
  }

  const typingInput = document.querySelector('.typing-input');
  if (typingInput) {
    typingInput.addEventListener('input', handleTypingInput);
    typingInput.addEventListener('keydown', handleTypingEnter);
  }
}

// Language change
function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  // Small delay to allow UI to update
  setTimeout(() => {
    renderView(currentView);
  }, 100);
}

// Save settings helper
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

// Make functions available globally if needed
if (typeof window !== 'undefined') {
  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;
  window.setupEventListeners = setupEventListeners;
  window.renderView = renderView;
  window.changeLanguage = changeLanguage;
  window.saveSettings = saveSettings;
}      <div class="view-header conversation-header">
        <button class="back-btn" id="backToConversationsBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="conversation-title">
          <h2>${lesson.icon} ${lesson.title}</h2>
          <p>${lesson.description}</p>
        </div>
        <button class="end-conversation-btn" id="endConversationBtn">
          End & Evaluate
        </button>
      </div>

      <div class="conversation-container">
        <div class="conversation-instructions">
          <div class="instructions-box">
            <h3>📋 Instructions</h3>
            <p><strong>Your Role:</strong> ${lesson.roleplay}</p>
            <p><strong>Scenario:</strong> ${lesson.scenario}</p>
            <p><strong>Tips:</strong> Be natural, make mistakes (it's okay!), and have fun!</p>
          </div>
        </div>

        <div class="chat-container" id="chatContainer">
          <div class="chat-message system-message">
