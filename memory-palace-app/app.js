// ============================================
// MEMORY PALACE PRACTICE - MAIN APPLICATION
// ============================================

class MemoryPalaceApp {
    constructor() {
        this.currentSequence = '';
        this.originalSequence = '';
        this.memorizationTime = 0;
        this.timerInterval = null;
        this.timerRunning = false;
        this.practiceState = 'idle'; // idle, memorizing, recalling, result
        this.startTime = null;

        // Load settings
        this.settings = this.loadSettings();
        this.history = this.loadHistory();
        this.customSequences = this.loadCustomSequences();

        // Initialize
        this.init();
    }

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.applySettings();
        this.updateStats();
        this.renderCustomSequences();
        this.renderHistory();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Sound effects for all interactive elements
        document.querySelectorAll('[data-sound]').forEach(el => {
            el.addEventListener('click', (e) => this.handleSoundClick(e));
            el.addEventListener('change', (e) => this.handleSoundChange(e));
        });

        // Practice controls
        document.getElementById('startPracticeBtn').addEventListener('click', () => this.startPractice());
        document.getElementById('startRecallBtn').addEventListener('click', () => this.startRecall());
        document.getElementById('submitRecallBtn').addEventListener('click', () => this.submitRecall());
        document.getElementById('giveUpBtn').addEventListener('click', () => this.giveUp());
        document.getElementById('newRoundBtn').addEventListener('click', () => this.newRound());

        // Settings
        document.getElementById('sequenceLength').addEventListener('change', (e) => this.saveSettings());
        document.getElementById('timedMode').addEventListener('change', (e) => this.handleTimedModeToggle(e));
        document.getElementById('timeLimit').addEventListener('change', (e) => this.saveSettings());
        document.querySelectorAll('input[name="seqType"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.saveSettings());
        });
        document.querySelectorAll('input[name="soundType"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleSoundTypeChange(e));
        });
        document.getElementById('asmrEnabled').addEventListener('change', (e) => this.handleAsmrToggle(e));
        document.getElementById('volumeSlider').addEventListener('input', (e) => this.handleVolumeChange(e));
        document.getElementById('testSoundBtn').addEventListener('click', () => soundManager.play('test'));
        document.querySelectorAll('input[name="theme"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleThemeChange(e));
        });
        document.querySelectorAll('input[name="fontSize"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleFontSizeChange(e));
        });

        // Custom sequences
        document.getElementById('addCustomBtn').addEventListener('click', () => this.addCustomSequence());
        document.getElementById('customName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addCustomSequence();
        });

        // Data management
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());
        document.getElementById('importDataBtn').addEventListener('click', () => this.importData());
        document.getElementById('resetAllBtn').addEventListener('click', () => this.resetAll());
        document.getElementById('clearHistoryBtn').addEventListener('click', () => this.clearHistory());

        // Number controls
        document.querySelectorAll('.control-btn').forEach(btn => {
            if (btn.classList.contains('minus')) {
                btn.parentElement.querySelector('input').addEventListener('input', () => soundManager.play('pop'));
                btn.addEventListener('click', (e) => this.handleNumberControl(e, -1));
            } else if (btn.classList.contains('plus')) {
                btn.addEventListener('click', (e) => this.handleNumberControl(e, 1));
            }
        });

        // Recall input
        const recallInput = document.getElementById('recallInput');
        recallInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitRecall();
        });
        recallInput.addEventListener('input', () => {
            if (Math.random() > 0.7) soundManager.play('type');
        });

        // Modal
        document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') this.closeModal();
        });

        // Electron IPC listeners
        if (typeof require !== 'undefined') {
            const { ipcRenderer } = require('electron');
            if (ipcRenderer) {
                ipcRenderer.on('new-practice', () => this.newRound());
                ipcRenderer.on('reset-settings', () => this.resetSettings());
                ipcRenderer.on('show-shortcuts', () => this.showShortcuts());
                ipcRenderer.on('show-about', () => this.showAbout());
            }
        }
    }

    // Handle navigation
    handleNavigation(e) {
        const targetSection = e.currentTarget.dataset.section;
        this.switchSection(targetSection);
    }

    // Switch to a section
    switchSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        document.getElementById(`${sectionId}-section`).classList.add('active');

        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === sectionId) {
                link.classList.add('active');
            }
        });

        // Update body theme based on section
        document.body.classList.remove('practice-section--active', 'custom-section--active',
                                    'history-section--active', 'settings-section--active');
        document.body.classList.add(`${sectionId}-section--active`);
    }

    // Handle sound on click
    handleSoundClick(e) {
        const soundType = e.currentTarget.dataset.sound;
        soundManager.play(soundType);
    }

    // Handle sound on change
    handleSoundChange(e) {
        const soundType = e.currentTarget.dataset.sound;
        soundManager.play(soundType);
    }

    // Start practice session
    startPractice() {
        this.practiceState = 'active';
        document.getElementById('startArea').classList.add('hidden');
        document.getElementById('practiceArea').classList.remove('hidden');

        // Reset stage-related body classes
        document.body.classList.remove('stage--sequence', 'stage--recall',
                                    'stage--result-success', 'stage--result-failure');

        // Immediately show the sequence
        this.showSequence();
    }

    // Generate and show the sequence
    showSequence() {
        const length = parseInt(document.getElementById('sequenceLength').value);
        const seqType = document.querySelector('input[name="seqType"]:checked').value;

        this.currentSequence = this.generateSequence(length, seqType);
        this.originalSequence = this.currentSequence;

        // Display sequence
        const display = document.getElementById('sequenceDisplay');
        display.innerHTML = this.currentSequence.split('').join(' ');
        display.style.opacity = '1';

        // Update body theme for sequence stage
        document.body.classList.remove('stage--recall', 'stage--result-success', 'stage--result-failure');
        document.body.classList.add('stage--sequence');

        // Show recall button after a moment
        setTimeout(() => {
            document.getElementById('startRecallBtn').classList.remove('hidden');
        }, 1000);
    }

    // Generate a random sequence
    generateSequence(length, type) {
        let pool = '';

        switch (type) {
            case 'numbers':
                pool = '0123456789';
                break;
            case 'letters':
                pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case 'mixed':
                pool = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
        }

        let sequence = '';
        for (let i = 0; i < length; i++) {
            sequence += pool.charAt(Math.floor(Math.random() * pool.length));
        }

        return sequence;
    }

    // Start recall phase
    startRecall() {
        this.practiceState = 'recalling';
        this.startTime = Date.now();

        // Hide practice area
        document.getElementById('practiceArea').classList.add('hidden');

        // Update body theme for recall stage
        document.body.classList.remove('stage--sequence', 'stage--result-success', 'stage--result-failure');
        document.body.classList.add('stage--recall');

        // Start timer
        this.startTimer();

        // Show recall area
        document.getElementById('recallArea').classList.remove('hidden');
        document.getElementById('recallInput').focus();
    }

    // Start the timer
    startTimer() {
        const timedMode = document.getElementById('timedMode').checked;
        const timerDisplay = document.getElementById('timerValue');
        const timerContainer = document.getElementById('timerDisplay');

        if (!timedMode) {
            // Untimed mode - show elapsed time
            this.timerInterval = setInterval(() => {
                this.memorizationTime = Math.floor((Date.now() - this.startTime) / 1000);
                timerDisplay.textContent = this.formatTime(this.memorizationTime);
                timerDisplay.classList.remove('warning', 'danger');
            }, 100);
        } else {
            // Timed mode - countdown
            const timeLimit = parseInt(document.getElementById('timeLimit').value);
            let remainingTime = timeLimit;

            this.timerInterval = setInterval(() => {
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                remainingTime = Math.max(0, timeLimit - elapsed);
                this.memorizationTime = elapsed;

                timerDisplay.textContent = this.formatTime(remainingTime);

                // Update color based on time remaining
                timerDisplay.classList.remove('warning', 'danger');
                if (remainingTime <= timeLimit * 0.25) {
                    timerDisplay.classList.add('danger');
                } else if (remainingTime <= timeLimit * 0.5) {
                    timerDisplay.classList.add('warning');
                }

                if (remainingTime <= 0) {
                    clearInterval(this.timerInterval);
                    this.timeUp();
                }
            }, 100);
        }

        this.timerRunning = true;
        timerContainer.classList.remove('hidden');
    }

    // Format time as MM:SS
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Time's up
    timeUp() {
        this.practiceState = 'timeout';
        this.submitRecall();
    }

    // Submit recall
    submitRecall() {
        if (!this.timerRunning || this.practiceState !== 'recalling') return;

        this.stopTimer();

        const userAnswer = document.getElementById('recallInput').value.trim().toUpperCase();
        const isCorrect = userAnswer === this.originalSequence;

        this.showResult(isCorrect, userAnswer);
        this.saveToHistory(isCorrect);

        if (isCorrect) {
            soundManager.play('success');
        } else {
            soundManager.play('error');
        }

        this.updateStats();
    }

    // Show result
    showResult(isCorrect, userAnswer) {
        this.practiceState = 'result';

        document.getElementById('recallArea').classList.add('hidden');
        document.getElementById('resultArea').classList.remove('hidden');

        const resultHeader = document.getElementById('resultHeader');
        resultHeader.textContent = isCorrect ? 'Perfect!' : 'Not Quite!';
        resultHeader.className = 'result-header ' + (isCorrect ? 'success' : 'failure');

        document.getElementById('originalSequence').textContent = this.originalSequence;
        document.getElementById('originalSequence').className = 'result-value';

        document.getElementById('yourAnswer').textContent = userAnswer || '(empty)';
        document.getElementById('yourAnswer').className = 'result-value ' + (isCorrect ? 'correct' : 'incorrect');

        // Show digit comparison
        this.showDigitComparison(this.originalSequence, userAnswer || '');

        const timedMode = document.getElementById('timedMode').checked;
        document.getElementById('resultTime').textContent = timedMode
            ? `Timed mode (${this.formatTime(parseInt(document.getElementById('timeLimit').value))})`
            : this.formatTime(this.memorizationTime) + ' elapsed';

        // Update body theme for result stage
        document.body.classList.remove('stage--sequence', 'stage--recall');
        if (isCorrect) {
            document.body.classList.remove('stage--result-failure');
            document.body.classList.add('stage--result-success');
        } else {
            document.body.classList.remove('stage--result-success');
            document.body.classList.add('stage--result-failure');
        }
    }

    // Show digit-by-digit comparison
    showDigitComparison(original, userAnswer) {
        const comparisonDiv = document.getElementById('digitComparison');
        comparisonDiv.innerHTML = '';

        const originalDigits = original.split('');
        const userDigits = userAnswer.split('');
        const maxLength = Math.max(original.length, userAnswer.length);

        let correctCount = 0;

        for (let i = 0; i < maxLength; i++) {
            const originalDigit = originalDigits[i];
            const userDigit = userDigits[i];

            let status, digitToShow;
            if (userDigit === undefined) {
                status = 'missing';
                digitToShow = originalDigit;
            } else if (originalDigit === userDigit) {
                status = 'correct';
                digitToShow = originalDigit;
                correctCount++;
            } else {
                status = 'incorrect';
                digitToShow = userDigit;
            }

            const pairDiv = document.createElement('div');
            pairDiv.className = `digit-pair ${status}`;

            const valueDiv = document.createElement('div');
            valueDiv.className = 'digit-value';
            valueDiv.textContent = originalDigit;

            pairDiv.appendChild(valueDiv);

            comparisonDiv.appendChild(pairDiv);
        }

        // Update correct digits count
        document.getElementById('correctDigits').textContent = `${correctCount}/${original.length}`;
    }

    // Give up
    giveUp() {
        if (!this.timerRunning) return;

        this.stopTimer();
        this.showResult(false, '');
        this.saveToHistory(false);
        this.updateStats();
        soundManager.play('error');
    }

    // Stop timer
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.timerRunning = false;
    }

    // New round
    newRound() {
        this.practiceState = 'idle';
        this.memorizationTime = 0;
        this.currentSequence = '';
        this.originalSequence = '';

        // Reset displays
        document.getElementById('timerValue').textContent = '00:00';
        document.getElementById('timerValue').classList.remove('warning', 'danger');
        document.getElementById('sequenceDisplay').style.opacity = '0';
        document.getElementById('sequenceDisplay').textContent = '';
        document.getElementById('recallInput').value = '';

        // Clear digit comparison
        document.getElementById('digitComparison').innerHTML = '';

        // Reset buttons
        document.getElementById('startRecallBtn').classList.add('hidden');

        // Reset areas
        document.getElementById('practiceArea').classList.add('hidden');
        document.getElementById('recallArea').classList.add('hidden');
        document.getElementById('resultArea').classList.add('hidden');
        document.getElementById('startArea').classList.remove('hidden');

        // Reset stage-related body classes
        document.body.classList.remove('stage--sequence', 'stage--recall',
                                    'stage--result-success', 'stage--result-failure');

        soundManager.play('pop');
    }

    // Handle number control (plus/minus)
    handleNumberControl(e, delta) {
        const input = e.target.parentElement.querySelector('input');
        const min = parseInt(input.min) || 0;
        const max = parseInt(input.max) || 100;
        let value = parseInt(input.value) + delta;

        value = Math.max(min, Math.min(max, value));
        input.value = value;

        this.saveSettings();
    }

    // Handle timed mode toggle
    handleTimedModeToggle(e) {
        const timedOptions = document.getElementById('timedOptions');
        if (e.target.checked) {
            timedOptions.classList.add('visible');
        } else {
            timedOptions.classList.remove('visible');
        }
        this.saveSettings();
    }

    // Handle sound type change
    handleSoundTypeChange(e) {
        soundManager.setType(e.target.value);
        this.saveSettings();
    }

    // Handle ASMR toggle
    handleAsmrToggle(e) {
        soundManager.setEnabled(e.target.checked);
        const textSpan = e.target.parentElement.querySelector('.toggle-text');
        textSpan.textContent = e.target.checked ? 'Enabled' : 'Disabled';
        this.saveSettings();
    }

    // Handle volume change
    handleVolumeChange(e) {
        const volume = e.target.value / 100;
        soundManager.setVolume(volume);
        document.getElementById('volumeValue').textContent = e.target.value + '%';
        this.saveSettings();
    }

    // Handle theme change
    handleThemeChange(e) {
        document.body.classList.toggle('dark', e.target.value === 'dark');
        this.saveSettings();
    }

    // Handle font size change
    handleFontSizeChange(e) {
        document.getElementById('sequenceDisplay').classList.remove('small', 'large');
        document.getElementById('sequenceDisplay').classList.add(e.target.value);
        this.saveSettings();
    }

    // Add custom sequence
    addCustomSequence() {
        const name = document.getElementById('customName').value.trim();
        const pool = document.getElementById('customPool').value.trim();
        const desc = document.getElementById('customDesc').value.trim();

        if (!name || !pool) {
            this.showError('Please enter a name and at least one character pool.');
            return;
        }

        const sequence = {
            id: Date.now(),
            name: name,
            pool: pool.split(',').map(s => s.trim()),
            desc: desc || 'Custom sequence'
        };

        this.customSequences.push(sequence);
        this.saveCustomSequences();
        this.renderCustomSequences();

        // Clear inputs
        document.getElementById('customName').value = '';
        document.getElementById('customPool').value = '';
        document.getElementById('customDesc').value = '';

        soundManager.play('success');
    }

    // Render custom sequences
    renderCustomSequences() {
        const container = document.getElementById('customSequencesList');
        container.innerHTML = '';

        if (this.customSequences.length === 0) {
            container.innerHTML = '<p style="color: var(--text-light); text-align: center;">No custom sequences yet.</p>';
            return;
        }

        this.customSequences.forEach(seq => {
            const item = document.createElement('div');
            item.className = 'sequence-item';
            item.innerHTML = `
                <div class="sequence-item-header">
                    <span class="sequence-name">${seq.name}</span>
                    <div class="sequence-actions">
                        <button class="btn btn-primary sequence-btn" onclick="app.useCustomSequence(${seq.id})">Use</button>
                        <button class="btn btn-danger sequence-btn" onclick="app.deleteCustomSequence(${seq.id})">Delete</button>
                    </div>
                </div>
                ${seq.desc ? `<div class="sequence-desc">${seq.desc}</div>` : ''}
                <div class="sequence-pool">${seq.pool.join(', ')}</div>
            `;
            container.appendChild(item);
        });
    }

    // Use custom sequence
    useCustomSequence(id) {
        const seq = this.customSequences.find(s => s.id === id);
        if (seq) {
            const length = parseInt(document.getElementById('sequenceLength').value);
            let sequence = '';
            for (let i = 0; i < length; i++) {
                sequence += seq.pool[Math.floor(Math.random() * seq.pool.length)];
            }
            this.currentSequence = sequence;
            this.originalSequence = sequence;

            // Display sequence
            const display = document.getElementById('sequenceDisplay');
            display.innerHTML = this.currentSequence.split('').join(' ');
            display.style.opacity = '1';

            // Show recall button after a moment
            setTimeout(() => {
                document.getElementById('showSequenceBtn').classList.add('hidden');
                document.getElementById('startRecallBtn').classList.remove('hidden');
            }, 1000);

            // Switch to practice section
            this.switchSection('practice');
            document.getElementById('startArea').classList.add('hidden');
            document.getElementById('practiceArea').classList.remove('hidden');

            soundManager.play('success');
        }
    }

    // Delete custom sequence
    deleteCustomSequence(id) {
        this.customSequences = this.customSequences.filter(s => s.id !== id);
        this.saveCustomSequences();
        this.renderCustomSequences();
        soundManager.play('pop');
    }

    // Render history
    renderHistory() {
        const container = document.getElementById('historyList');
        container.innerHTML = '';

        if (this.history.length === 0) {
            container.innerHTML = '<p style="color: var(--text-light); text-align: center;">No practice history yet.</p>';
            return;
        }

        this.history.slice().reverse().forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';
            item.innerHTML = `
                <div class="history-header">
                    <span class="history-date">${entry.date}</span>
                    <span class="history-result ${entry.success ? 'success' : 'failure'}">
                        ${entry.success ? '✓' : '✗'}
                    </span>
                </div>
                <div class="history-details">
                    <span>Length: ${entry.length}</span>
                    <span>${entry.timeType}: ${entry.timeValue}</span>
                </div>
            `;
            container.appendChild(item);
        });
    }

    // Save to history
    saveToHistory(success) {
        const entry = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            success: success,
            length: this.originalSequence.length,
            timeType: document.getElementById('timedMode').checked ? 'Timed' : 'Elapsed',
            timeValue: this.formatTime(this.memorizationTime)
        };

        this.history.push(entry);
        // Keep only last 100 entries
        if (this.history.length > 100) {
            this.history = this.history.slice(-100);
        }

        this.saveHistory();
        this.renderHistory();
    }

    // Update stats
    updateStats() {
        const today = new Date().toDateString();
        const todayEntries = this.history.filter(h => new Date(h.date).toDateString() === today);

        document.getElementById('todayAttempts').textContent = todayEntries.length;
        document.getElementById('todaySuccess').textContent = todayEntries.filter(h => h.success).length;

        // Calculate best streak
        let bestStreak = 0;
        let currentStreak = 0;
        this.history.forEach(h => {
            if (h.success) {
                currentStreak++;
                bestStreak = Math.max(bestStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });

        document.getElementById('bestStreak').textContent = bestStreak;
    }

    // Clear history
    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.renderHistory();
        this.updateStats();
        soundManager.play('pop');
    }

    // Export data
    exportData() {
        const data = {
            settings: this.settings,
            history: this.history,
            customSequences: this.customSequences,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `memory-palace-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);

        soundManager.play('success');
    }

    // Import data
    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (data.settings) this.settings = { ...this.settings, ...data.settings };
                    if (data.history) this.history = data.history;
                    if (data.customSequences) this.customSequences = data.customSequences;

                    this.saveAll();
                    this.applySettings();
                    this.updateStats();
                    this.renderCustomSequences();
                    this.renderHistory();

                    soundManager.play('success');
                } catch (error) {
                    this.showError('Invalid backup file.');
                    soundManager.play('error');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    // Reset all data
    resetAll() {
        if (!confirm('Are you sure you want to reset all data? This cannot be undone.')) return;

        localStorage.clear();
        location.reload();
    }

    // Save settings
    saveSettings() {
        this.settings.sequenceLength = parseInt(document.getElementById('sequenceLength').value);
        this.settings.timedMode = document.getElementById('timedMode').checked;
        this.settings.timeLimit = parseInt(document.getElementById('timeLimit').value);
        this.settings.seqType = document.querySelector('input[name="seqType"]:checked').value;
        this.settings.soundType = document.querySelector('input[name="soundType"]:checked').value;
        this.settings.asmrEnabled = document.getElementById('asmrEnabled').checked;
        this.settings.volume = parseInt(document.getElementById('volumeSlider').value);
        this.settings.theme = document.querySelector('input[name="theme"]:checked').value;
        this.settings.fontSize = document.querySelector('input[name="fontSize"]:checked').value;

        localStorage.setItem('memoryPalaceSettings', JSON.stringify(this.settings));
    }

    // Load settings
    loadSettings() {
        const saved = localStorage.getItem('memoryPalaceSettings');
        return saved ? JSON.parse(saved) : {
            sequenceLength: 8,
            timedMode: false,
            timeLimit: 30,
            seqType: 'numbers',
            soundType: 'pop',
            asmrEnabled: true,
            volume: 70,
            theme: 'light',
            fontSize: 'medium'
        };
    }

    // Save history
    saveHistory() {
        localStorage.setItem('memoryPalaceHistory', JSON.stringify(this.history));
    }

    // Load history
    loadHistory() {
        const saved = localStorage.getItem('memoryPalaceHistory');
        return saved ? JSON.parse(saved) : [];
    }

    // Save custom sequences
    saveCustomSequences() {
        localStorage.setItem('memoryPalaceCustom', JSON.stringify(this.customSequences));
    }

    // Load custom sequences
    loadCustomSequences() {
        const saved = localStorage.getItem('memoryPalaceCustom');
        return saved ? JSON.parse(saved) : [];
    }

    // Save all data
    saveAll() {
        localStorage.setItem('memoryPalaceSettings', JSON.stringify(this.settings));
        localStorage.setItem('memoryPalaceHistory', JSON.stringify(this.history));
        localStorage.setItem('memoryPalaceCustom', JSON.stringify(this.customSequences));
    }

    // Apply loaded settings
    applySettings() {
        document.getElementById('sequenceLength').value = this.settings.sequenceLength;
        document.getElementById('timedMode').checked = this.settings.timedMode;
        document.getElementById('timeLimit').value = this.settings.timeLimit;
        document.querySelector(`input[name="seqType"][value="${this.settings.seqType}"]`).checked = true;
        document.querySelector(`input[name="soundType"][value="${this.settings.soundType}"]`).checked = true;
        document.getElementById('asmrEnabled').checked = this.settings.asmrEnabled;
        document.getElementById('volumeSlider').value = this.settings.volume;
        document.getElementById('volumeValue').textContent = this.settings.volume + '%';
        document.querySelector(`input[name="theme"][value="${this.settings.theme}"]`).checked = true;
        document.querySelector(`input[name="fontSize"][value="${this.settings.fontSize}"]`).checked = true;

        // Apply theme
        document.body.classList.toggle('dark', this.settings.theme === 'dark');

        // Apply font size
        document.getElementById('sequenceDisplay').classList.add(this.settings.fontSize);

        // Apply sound settings
        soundManager.setEnabled(this.settings.asmrEnabled);
        soundManager.setType(this.settings.soundType);
        soundManager.setVolume(this.settings.volume / 100);

        // Apply timed mode
        if (this.settings.timedMode) {
            document.getElementById('timedOptions').classList.add('visible');
        }

        // Set initial section class (default to practice)
        document.body.classList.add('practice-section--active');
    }

    // Reset settings
    resetSettings() {
        if (!confirm('Reset all settings to defaults?')) return;

        localStorage.removeItem('memoryPalaceSettings');
        this.settings = this.loadSettings();
        this.applySettings();
        soundManager.play('pop');
    }

    // Show modal
    showModal(title, content) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalContent').innerHTML = content;
        document.getElementById('modal-overlay').classList.remove('hidden');
        soundManager.play('pop');
    }

    // Close modal
    closeModal() {
        document.getElementById('modal-overlay').classList.add('hidden');
        soundManager.play('pop');
    }

    // Show error message
    showError(message) {
        this.showModal('Error', `<p>${message}</p>`);
    }

    // Show keyboard shortcuts
    showShortcuts() {
        const shortcuts = `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <div><kbd>Ctrl/Cmd + N</kbd> - New Practice</div>
                <div><kbd>Ctrl/Cmd + Q</kbd> - Quit</div>
                <div><kbd>Enter</kbd> - Submit / Confirm</div>
            </div>
        `;
        this.showModal('Keyboard Shortcuts', shortcuts);
    }

    // Show about
    showAbout() {
        const about = `
            <div style="text-align: center;">
                <h2>🧠 Memory Palace Practice</h2>
                <p style="margin: 16px 0;">Version 1.0.0</p>
                <p>Practice memorizing sequences with memory palace techniques.</p>
                <p style="margin-top: 16px; color: var(--text-light);">Built with ASMR sound effects</p>
            </div>
        `;
        this.showModal('About', about);
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new MemoryPalaceApp();
});