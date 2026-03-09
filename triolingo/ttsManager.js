// TTS Manager for Triolingo - Text-to-Speech using Web Speech API
class TTSManager {
  constructor() {
    this.enabled = true;
    this.autoPlay = true; // Auto-play question when first loaded
    this.synth = window.speechSynthesis;
    this.speechRate = 0.9; // Slightly slower for clarity
    this.speechPitch = 1.0; // Normal pitch
    this.currentUtterance = null;
    this.voices = [];

    // Language codes for TTS
    this.languageCodes = {
      french: 'fr-FR',
      spanish: 'es-ES'
    };

    this.init();
  }

  async init() {
    // Load voices (they load asynchronously in some browsers)
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
    this.loadVoices();
    await this.loadSettings();
  }

  loadVoices() {
    this.voices = this.synth.getVoices();
  }

  getVoicesForLanguage(courseId) {
    const langCode = this.languageCodes[courseId] || 'en-US';
    return this.voices.filter(voice => voice.lang.startsWith(langCode.split('-')[0]));
  }

  speak(text, courseId = 'french', options = {}) {
    if (!this.enabled || !text) return;

    // Stop any current speech
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const langCode = this.languageCodes[courseId] || 'en-US';

    utterance.lang = langCode;
    utterance.rate = options.rate || this.speechRate;
    utterance.pitch = options.pitch || this.speechPitch;
    utterance.volume = options.volume || 1.0;

    // Try to find a suitable voice for the language
    const languageVoices = this.getVoicesForLanguage(courseId);
    if (languageVoices.length > 0) {
      // Prefer a voice that matches the exact language code
      const exactMatch = languageVoices.find(v => v.lang === langCode);
      utterance.voice = exactMatch || languageVoices[0];
    }

    utterance.onend = () => {
      this.currentUtterance = null;
    };

    utterance.onerror = (event) => {
      console.warn('TTS error:', event.error);
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  // Speak the word (for matching games)
  speakWord(word, courseId) {
    this.speak(word, courseId);
  }

  // Speak a question
  speakQuestion(question) {
    // HTML-stripped version of the question
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = question;
    const cleanText = tempDiv.textContent || tempDiv.innerText || question;

    this.speak(cleanText, currentCourse);
  }

  // Stop any current speech
  stop() {
    this.synth.cancel();
    this.currentUtterance = null;
  }

  // Toggle TTS on/off
  toggleEnabled() {
    this.enabled = !this.enabled;
    this.saveSettings();
    return this.enabled;
  }

  // Toggle auto-play on/off
  toggleAutoPlay() {
    this.autoPlay = !this.autoPlay;
    this.saveSettings();
    return this.autoPlay;
  }

  // Get available voices for testing
  getAllVoices() {
    return this.voices;
  }

  // Test TTS
  test(courseId = 'french') {
    const testPhrases = {
      french: 'Bonjour, comment allez-vous?',
      spanish: 'Hola, ¿qué tal?'
    };
    this.speak(testPhrases[courseId] || testPhrases.french, courseId);
  }

  async loadSettings() {
    try {
      if (window.electronAPI) {
        const settings = await window.electronAPI.loadSettings();
        if (settings) {
          if (settings.ttsEnabled !== undefined) this.enabled = settings.ttsEnabled;
          if (settings.ttsAutoPlay !== undefined) this.autoPlay = settings.ttsAutoPlay;
          if (settings.ttsRate) this.speechRate = settings.ttsRate;
          if (settings.ttsPitch) this.speechPitch = settings.ttsPitch;
        }
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        if (saved) {
          const settings = JSON.parse(saved);
          if (settings.ttsEnabled !== undefined) this.enabled = settings.ttsEnabled;
          if (settings.ttsAutoPlay !== undefined) this.autoPlay = settings.ttsAutoPlay;
          if (settings.ttsRate) this.speechRate = settings.ttsRate;
          if (settings.ttsPitch) this.speechPitch = settings.ttsPitch;
        }
      }
    } catch (err) {
      console.error('Could not load TTS settings:', err);
    }
  }

  async saveSettings() {
    try {
      let settings = {};

      if (window.electronAPI) {
        const existing = await window.electronAPI.loadSettings();
        settings = existing || {};
        settings.ttsEnabled = this.enabled;
        settings.ttsAutoPlay = this.autoPlay;
        settings.ttsRate = this.speechRate;
        settings.ttsPitch = this.speechPitch;
        await window.electronAPI.saveSettings(settings);
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        settings = saved ? JSON.parse(saved) : {};
        settings.ttsEnabled = this.enabled;
        settings.ttsAutoPlay = this.autoPlay;
        settings.ttsRate = this.speechRate;
        settings.ttsPitch = this.speechPitch;
        localStorage.setItem('triolingoSettings', JSON.stringify(settings));
      }
    } catch (err) {
      console.error('Could not save TTS settings:', err);
    }
  }

  setRate(rate) {
    this.speechRate = rate;
    this.saveSettings();
  }

  setPitch(pitch) {
    this.speechPitch = pitch;
    this.saveSettings();
  }
}

// Create global instance
const ttsManager = new TTSManager();