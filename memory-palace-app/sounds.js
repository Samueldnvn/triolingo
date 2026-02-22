// ============================================
// ASMR SOUND EFFECTS
// ============================================

class SoundManager {
    constructor() {
        this.enabled = true;
        this.type = 'pop';
        this.volume = 0.7;
        this.audioContext = null;
        this.initialized = false;
    }

    // Initialize audio context on first interaction
    init() {
        if (this.initialized) return;

        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
        }
    }

    // Play ASMR sound effect
    play(soundType) {
        if (!this.enabled) return;

        this.init();

        if (!this.audioContext) return;

        try {
            switch (soundType) {
                case 'click':
                    this.playClickSound();
                    break;
                case 'pop':
                    this.playPopSound();
                    break;
                case 'soft':
                    this.playSoftSound();
                    break;
                case 'mechanical-click':
                    this.playMechanicalClick();
                    break;
                case 'wooden-click':
                    this.playWoodenClick();
                    break;
                case 'pen-click':
                    this.playPenClick();
                    break;
                case 'keyboard-key':
                    this.playKeyboardKey();
                    break;
                case 'light-switch':
                    this.playLightSwitch();
                    break;
                case 'soft-thud':
                    this.playSoftThud();
                    break;
                case 'deep-thud':
                    this.playDeepThud();
                    break;
                case 'tap-click':
                    this.playTapClick();
                    break;
                case 'button-press':
                    this.playButtonPress();
                    break;
                case 'toggle-switch':
                    this.playToggleSwitch();
                    break;
                case 'test':
                    this.playTestSound();
                    break;
                case 'success':
                    this.playSuccessSound();
                    break;
                case 'correct':
                    this.playCorrectSound();
                    break;
                case 'error':
                    this.playErrorSound();
                    break;
                case 'type':
                    this.playTypeSound();
                    break;
                default:
                    this.playPopSound();
            }
        } catch (e) {
            console.warn('Failed to play sound:', e);
        }
    }

    // Click sound - sharp, crisp click
    playClickSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Natural click with harmonics
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(2400, t);
        osc2.frequency.exponentialRampToValueAtTime(400, t + 0.02);

        // Soft filter for natural sound
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(4000, t);
        filter.frequency.exponentialRampToValueAtTime(1000, t + 0.03);
        filter.Q.setValueAtTime(2, t);

        // Natural attack and decay
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.25, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + 0.04);
        osc2.stop(t + 0.04);
    }

    // Pop sound - satisfying bubble pop
    playPopSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Bubble pop - rising frequency then drop
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, t);
        osc.frequency.linearRampToValueAtTime(1000, t + 0.01);
        osc.frequency.exponentialRampToValueAtTime(200, t + 0.06);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1400, t);
        osc2.frequency.exponentialRampToValueAtTime(400, t + 0.05);

        // Smooth envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, t + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + 0.08);
        osc2.stop(t + 0.08);
    }

    // Soft sound - gentle chime
    playSoftSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Gentle chime with rich harmonics
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1100, t);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.12);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(2200, t);
        osc2.frequency.exponentialRampToValueAtTime(1800, t + 0.12);

        // Very soft attack
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.2, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + 0.18);
        osc2.stop(t + 0.18);
    }

    // Test sound - pleasant ding
    playTestSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Pleasant bell-like ding
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1560, t);
        osc.frequency.exponentialRampToValueAtTime(1300, t + 0.2);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(3120, t);
        osc2.frequency.exponentialRampToValueAtTime(2600, t + 0.2);

        // Smooth bell envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.35, t + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + 0.25);
        osc2.stop(t + 0.25);
    }

    // Success sound - satisfying chord
    playSuccessSound() {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C major chord
        notes.forEach((freq, i) => {
            setTimeout(() => {
                this.playNote(freq, 0.35, this.volume * 0.25);
            }, i * 60);
        });
    }

    // Correct sound - quick confirmation
    playCorrectSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(700, t + 0.1);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.35, t + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

        osc.start(t);
        osc.stop(t + 0.12);
    }

    // Error sound - gentle indication
    playErrorSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Gentle low frequency wobble
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, t);
        osc.frequency.linearRampToValueAtTime(200, t + 0.1);
        osc.frequency.linearRampToValueAtTime(280, t + 0.2);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(140, t);
        osc2.frequency.linearRampToValueAtTime(100, t + 0.1);
        osc2.frequency.linearRampToValueAtTime(140, t + 0.2);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.22, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + 0.22);
        osc2.stop(t + 0.22);
    }

    // Typing sound - subtle click
    playTypeSound() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Subtle keyboard key sound
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1600, t);
        osc.frequency.exponentialRampToValueAtTime(600, t + 0.015);

        // Soft filter for natural sound
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(5000, t);
        filter.frequency.exponentialRampToValueAtTime(2000, t + 0.015);

        // Very short, subtle
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.08, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);

        osc.start(t);
        osc.stop(t + 0.02);
    }

    // ============================================
    // CLICK-Y SOUNDS
    // ============================================

    // Mechanical click - like a mouse button
    playMechanicalClick() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Mouse-like click with body
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2000, t);
        osc.frequency.exponentialRampToValueAtTime(400, t + 0.02);

        // Filtered for acoustic realism
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1500, t);
        filter.Q.setValueAtTime(3, t);
        filter.frequency.exponentialRampToValueAtTime(500, t + 0.02);

        // Very short, sharp attack
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.2, t + 0.001);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

        osc.start(t);
        osc.stop(t + 0.025);
    }

    // Wooden click - like clicking two wooden objects
    playWoodenClick() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();

        osc1.connect(gain);
        osc2.connect(gain);
        osc3.connect(gain);
        gain.connect(this.audioContext.destination);

        // Complex wood tone with harmonics
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(580, t);
        osc1.frequency.exponentialRampToValueAtTime(320, t + 0.05);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1160, t);
        osc2.frequency.exponentialRampToValueAtTime(640, t + 0.04);

        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(1740, t);
        osc3.frequency.exponentialRampToValueAtTime(960, t + 0.03);

        // Natural wood envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.28, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

        osc1.start(t);
        osc2.start(t);
        osc3.start(t);
        osc1.stop(t + 0.06);
        osc2.stop(t + 0.06);
        osc3.stop(t + 0.06);
    }

    // Pen click - like retracting a pen
    playPenClick() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Metallic spring with resonance
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(2600, t);
        osc1.frequency.exponentialRampToValueAtTime(1800, t + 0.015);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1300, t);
        osc2.frequency.exponentialRampToValueAtTime(800, t + 0.02);

        // Bright, metallic filter
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(2000, t);
        filter.frequency.exponentialRampToValueAtTime(1000, t + 0.02);

        // Sharp mechanical attack
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.18, t + 0.001);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.025);
        osc2.stop(t + 0.025);
    }

    // Keyboard key - mechanical switch sound
    playKeyboardKey() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Mechanical keyboard switch
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1700, t);
        osc1.frequency.exponentialRampToValueAtTime(1000, t + 0.018);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(850, t);
        osc2.frequency.exponentialRampToValueAtTime(450, t + 0.022);

        // Natural key bottoming out
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, t);
        filter.frequency.exponentialRampToValueAtTime(1500, t + 0.018);

        // Satisfying key press envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.24, t + 0.0015);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.025);
        osc2.stop(t + 0.025);
    }

    // Light switch - satisfying snap
    playLightSwitch() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Clicky switch sound
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1300, t);
        osc1.frequency.exponentialRampToValueAtTime(700, t + 0.025);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(650, t);
        osc2.frequency.exponentialRampToValueAtTime(280, t + 0.03);

        // Solid switch feel
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.28, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.035);
        osc2.stop(t + 0.035);
    }

    // ============================================
    // THOCCY SOUNDS
    // ============================================

    // Soft thud - like tapping a cushion
    playSoftThud() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Deep, soft cushion thud
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(180, t);
        osc1.frequency.exponentialRampToValueAtTime(80, t + 0.1);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(360, t);
        osc2.frequency.exponentialRampToValueAtTime(160, t + 0.08);

        // Soft, muffled filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(500, t);
        filter.frequency.exponentialRampToValueAtTime(200, t + 0.1);

        // Soft, pillow-like envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.32, t + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.12);
        osc2.stop(t + 0.12);
    }

    // Deep thud - like dropping a soft object
    playDeepThud() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const filter = this.audioContext.createBiquadFilter();

        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Rich, deep thud
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, t);
        osc1.frequency.exponentialRampToValueAtTime(55, t + 0.15);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(220, t);
        osc2.frequency.exponentialRampToValueAtTime(110, t + 0.12);

        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(82, t);
        osc3.frequency.exponentialRampToValueAtTime(41, t + 0.18);

        // Warm, deep filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, t);
        filter.frequency.exponentialRampToValueAtTime(100, t + 0.15);

        // Satisfying deep impact
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.38, t + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

        osc1.start(t);
        osc2.start(t);
        osc3.start(t);
        osc1.stop(t + 0.18);
        osc2.stop(t + 0.18);
        osc3.stop(t + 0.18);
    }

    // Tap click - like tapping a finger on wood
    playTapClick() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Finger tap on wood
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(820, t);
        osc1.frequency.exponentialRampToValueAtTime(580, t + 0.025);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1640, t);
        osc2.frequency.exponentialRampToValueAtTime(1160, t + 0.02);

        // Natural finger tap attack
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.03);
        osc2.stop(t + 0.03);
    }

    // Button press - satisfying push button
    playButtonPress() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Push button tactile feel
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1050, t);
        osc1.frequency.exponentialRampToValueAtTime(680, t + 0.028);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(525, t);
        osc2.frequency.exponentialRampToValueAtTime(340, t + 0.032);

        // Solid button press
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.26, t + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.038);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.038);
        osc2.stop(t + 0.038);
    }

    // Toggle switch - satisfying toggle
    playToggleSwitch() {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Two-phase toggle movement
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(920, t);
        osc1.frequency.linearRampToValueAtTime(720, t + 0.012);
        osc1.frequency.exponentialRampToValueAtTime(380, t + 0.04);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(460, t);
        osc2.frequency.linearRampToValueAtTime(360, t + 0.012);
        osc2.frequency.exponentialRampToValueAtTime(190, t + 0.045);

        // Satisfying toggle envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, t + 0.002);
        gain.gain.setValueAtTime(this.volume * 0.34, t + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 0.045);
        osc2.stop(t + 0.045);
    }

    // Helper: Play a single note
    playNote(frequency, duration, volume) {
        const t = this.audioContext.currentTime;
        const gain = this.audioContext.createGain();
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.audioContext.destination);

        // Rich note with harmonic
        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, t);
        osc.frequency.exponentialRampToValueAtTime(frequency * 0.85, t + duration * 0.9);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(frequency * 2, t);
        osc2.frequency.exponentialRampToValueAtTime(frequency * 1.7, t + duration * 0.85);

        // Smooth musical envelope
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(volume, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc.start(t);
        osc2.start(t);
        osc.stop(t + duration);
        osc2.stop(t + duration);
    }

    // Set enabled state
    setEnabled(enabled) {
        this.enabled = enabled;
    }

    // Set sound type
    setType(type) {
        this.type = type;
    }

    // Set volume
    setVolume(volume) {
        this.volume = volume;
    }
}

// Initialize sound manager
const soundManager = new SoundManager();

// Export for app.js
window.soundManager = soundManager;