// Sound Manager for Triolingo
class SoundManager {
  constructor() {
    this.enabled = true;
    this.soundPack = 'default';
    this.audioContext = null;
    this.defaultSounds = {
      correct: 'clean-minimal-pop-467466.mp3',
      incorrect: 'sharp-pop-328170.mp3',
      buttonClick: 'pop-402323.mp3',
      lessonComplete: 'pop-402324.mp3',
      matchCorrect: 'water-drip-45622.mp3',
      matchIncorrect: 'battle-pop-424581.mp3'
    };
    this.sounds = { ...this.defaultSounds };
  }

  async init() {
    // Load saved preferences
    await this.loadSettings();

    // Create audio context for Web Audio API
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  getSoundPath(soundName) {
    const fileName = this.sounds[soundName];
    // Use relative path for Electron to serve files properly
    return `sounds/${fileName}`;
  }

  play(soundName) {
    if (!this.enabled || !this.sounds[soundName]) {
      return;
    }

    const soundPath = this.getSoundPath(soundName);
    const audio = new Audio(soundPath);
    audio.volume = 0.3;

    audio.play().catch(err => {
      console.warn('Could not play sound:', err);
    });
  }

  playCorrect() {
    this.play('correct');
  }

  playIncorrect() {
    this.play('incorrect');
  }

  playButtonClick() {
    this.play('buttonClick');
  }

  playLessonComplete() {
    this.play('lessonComplete');
  }

  playMatchCorrect() {
    this.play('matchCorrect');
  }

  playMatchIncorrect() {
    this.play('matchIncorrect');
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
    this.saveSettings();
    return this.enabled;
  }

  setSoundPack(packName) {
    this.soundPack = packName;
    this.applySoundPack(packName);
    this.saveSettings();
  }

  setSound(soundName, fileName) {
    this.sounds[soundName] = fileName;
    this.saveSettings();
  }

  applySoundPack(packName) {
    const packs = {
      default: {
        correct: 'clean-minimal-pop-467466.mp3',
        incorrect: 'sharp-pop-328170.mp3',
        buttonClick: 'pop-402323.mp3',
        lessonComplete: 'pop-402324.mp3',
        matchCorrect: 'water-drip-45622.mp3',
        matchIncorrect: 'battle-pop-424581.mp3'
      },
      minimal: {
        correct: 'water-drip-45622.mp3',
        incorrect: 'droplets-in-a-cave-482871.mp3',
        buttonClick: 'clean-minimal-pop-467466.mp3',
        lessonComplete: 'pop-402323.mp3',
        matchCorrect: 'water-drip-45622.mp3',
        matchIncorrect: 'drop'
      },
      bouncy: {
        correct: 'pop-402323.mp3',
        incorrect: 'pop-402324.mp3',
        buttonClick: 'clean-minimal-pop-467466.mp3',
        lessonComplete: 'battle-pop-424581.mp3',
        matchCorrect: 'pop-402323.mp3',
        matchIncorrect: 'sharp-pop-328170.mp3'
      }
    };

    if (packs[packName]) {
      this.sounds = { ...packs[packName] };
    }
  }

  async loadSettings() {
    try {
      if (window.electronAPI) {
        const settings = await window.electronAPI.loadSettings();
        if (settings) {
          this.enabled = settings.soundEnabled !== false;
          this.soundPack = settings.soundPack || 'default';
          if (settings.customSounds) {
            this.sounds = { ...this.defaultSounds, ...settings.customSounds };
          }
          this.applySoundPack(this.soundPack);
        }
      } else {
        const saved = localStorage.getItem('triolingoSoundSettings');
        if (saved) {
          const settings = JSON.parse(saved);
          this.enabled = settings.soundEnabled !== false;
          this.soundPack = settings.soundPack || 'default';
          if (settings.customSounds) {
            this.sounds = { ...this.defaultSounds, ...settings.customSounds };
          }
          this.applySoundPack(this.soundPack);
        }
      }
    } catch (err) {
      console.error('Could not load sound settings:', err);
    }
  }

  async saveSettings() {
    const settings = {
      soundEnabled: this.enabled,
      soundPack: this.soundPack,
      customSounds: this.sounds
    };

    try {
      if (window.electronAPI) {
        await window.electronAPI.saveSettings(settings);
      } else {
        localStorage.setItem('triolingoSoundSettings', JSON.stringify(settings));
      }
    } catch (err) {
      console.error('Could not save sound settings:', err);
    }
  }

  resetSettings() {
    this.enabled = true;
    this.soundPack = 'default';
    this.sounds = { ...this.defaultSounds };
    this.saveSettings();
  }

  getAvailableSounds() {
    return {
      correct: ['clean-minimal-pop-467466.mp3', 'water-drip-45622.mp3', 'pop-402323.mp3'],
      incorrect: ['sharp-pop-328170.mp3', 'battle-pop-424581.mp3', 'droplets-in-a-cave-482871.mp3'],
      buttonClick: ['pop-402323.mp3', 'clean-minimal-pop-467466.mp3', 'pop-402324.mp3'],
      lessonComplete: ['pop-402324.mp3', 'pop-402323.mp3', 'clean-minimal-pop-467466.mp3'],
      matchCorrect: ['water-drip-45622.mp3', 'clean-minimal-pop-467466.mp3', 'pop-402323.mp3'],
      matchIncorrect: ['sharp-pop-328170.mp3', 'battle-pop-424581.mp3', 'droplets-in-a-cave-482871.mp3']
    };
  }

  getSoundPacks() {
    return [
      { id: 'default', name: 'Default' },
      { id: 'minimal', name: 'Minimal' },
      { id: 'bouncy', name: 'Bouncy' }
    ];
  }
}

// Create global instance
const soundManager = new SoundManager();