// Memory Palace - Pan/zoom map viewer with pins and flashcards
// All data stored in localStorage

const MP = {
  // ─── State ───────────────────────────────────────────────────────────────
  palaces: [],          // array of { id, name, imageDataUrl, pins: [] }
  activePalaceId: null, // currently viewed palace
  pins: [],             // shortcut to activePalace.pins
  activePinIndex: 0,    // flashcard index
  cardFlipped: false,
  editingCard: false,

  // Pan/zoom state
  pan: { x: 0, y: 0 },
  zoom: 1,
  dragging: false,
  dragStart: { x: 0, y: 0 },
  placingPin: false,    // when true, next click drops a pin

  // ─── Persistence ─────────────────────────────────────────────────────────
  save() {
    localStorage.setItem('mp_palaces', JSON.stringify(this.palaces));
  },
  load() {
    try {
      const raw = localStorage.getItem('mp_palaces');
      this.palaces = raw ? JSON.parse(raw) : [];
    } catch { this.palaces = []; }
  },

  // ─── Helpers ─────────────────────────────────────────────────────────────
  uid: () => '_' + Math.random().toString(36).slice(2, 9),

  activePalace() {
    return this.palaces.find(p => p.id === this.activePalaceId) || null;
  },

  // ─── Render: Palace List ──────────────────────────────────────────────────
  renderList() {
    const list = this.palaces.map((p, i) => `
      <div class="mp-palace-card ${p.id === this.activePalaceId ? 'active' : ''}"
           onclick="MP.openPalace('${p.id}')">
        <div class="mp-palace-thumb">
          ${p.imageDataUrl
            ? `<img src="${p.imageDataUrl}" alt="${p.name}">`
            : `<div class="mp-palace-placeholder">🗺️</div>`}
        </div>
        <div class="mp-palace-info">
          <span class="mp-palace-name">${p.name}</span>
          <span class="mp-palace-count">${p.pins.length} pin${p.pins.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="mp-delete-btn" onclick="event.stopPropagation();MP.deletePalace('${p.id}')" title="Delete">✕</button>
      </div>
    `).join('');

    return `
      <div class="mp-list-panel">
        <div class="mp-list-header">
          <h3>Memory Palaces</h3>
          <button class="btn btn-primary mp-new-btn" onclick="MP.createNew()">+ New Palace</button>
        </div>
        <div class="mp-palace-list">
          ${list || '<p class="mp-empty">No palaces yet. Create one to get started!</p>'}
        </div>
      </div>
    `;
  },

  // ─── Render: Map Viewer ───────────────────────────────────────────────────
  renderViewer() {
    const palace = this.activePalace();
    if (!palace) return '';

    const pins = palace.pins.map((pin, i) => {
      const screenX = pin.xPct * 100;
      const screenY = pin.yPct * 100;
      return `
        <div class="mp-pin ${i === this.activePinIndex ? 'active' : ''}"
             style="left:${screenX}%;top:${screenY}%"
             onclick="event.stopPropagation();MP.selectPin(${i})"
             title="${pin.front || 'Pin ' + (i+1)}">
          <div class="mp-pin-number">${i + 1}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="mp-viewer-panel">
        <div class="mp-viewer-toolbar">
          <button class="btn btn-secondary mp-back-btn" onclick="MP.closeViewer()">← Back</button>
          <span class="mp-palace-title">${palace.name}</span>
          <div class="mp-toolbar-actions">
            <button class="btn ${this.placingPin ? 'btn-warning' : 'btn-primary'}"
                    onclick="MP.togglePinMode()"
                    title="${this.placingPin ? 'Cancel pin placement' : 'Add a new pin'}">
              ${this.placingPin ? '✕ Cancel' : '📍 Add Pin'}
            </button>
            <label class="btn btn-secondary mp-upload-btn" title="Change map image">
              🖼️ Change Map
              <input type="file" accept="image/*" style="display:none"
                     onchange="MP.handleImageUpload(event, '${palace.id}')">
            </label>
            <button class="btn btn-secondary" onclick="MP.resetView()" title="Reset view">⌖ Reset</button>
          </div>
        </div>

        <div class="mp-canvas-wrapper" id="mp-canvas-wrapper">
          <div class="mp-canvas" id="mp-canvas"
               style="transform: translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})">
            ${palace.imageDataUrl
              ? `<img src="${palace.imageDataUrl}" class="mp-map-img" draggable="false" id="mp-map-img">`
              : `<div class="mp-no-map">
                  <p>No map uploaded yet.</p>
                  <label class="btn btn-primary">
                    Upload Map Image
                    <input type="file" accept="image/*" style="display:none"
                           onchange="MP.handleImageUpload(event, '${palace.id}')">
                  </label>
                </div>`}
            ${pins}
          </div>
          ${this.placingPin ? '<div class="mp-placing-overlay">Click anywhere on the map to place a pin</div>' : ''}
        </div>

        ${palace.pins.length > 0 ? this.renderFlashcardBar() : ''}
      </div>
    `;
  },

  // ─── Render: Flashcard Bar ─────────────────────────────────────────────────
  renderFlashcardBar() {
    const palace = this.activePalace();
    if (!palace || palace.pins.length === 0) return '';

    const pin = palace.pins[this.activePinIndex];
    const total = palace.pins.length;

    if (this.editingCard) {
      return `
        <div class="mp-flashcard-bar editing">
          <div class="mp-card-nav">
            <button class="mp-nav-btn" onclick="MP.prevPin()" ${this.activePinIndex === 0 ? 'disabled' : ''}>‹</button>
            <span class="mp-card-counter">${this.activePinIndex + 1} / ${total}</span>
            <button class="mp-nav-btn" onclick="MP.nextPin()" ${this.activePinIndex === total - 1 ? 'disabled' : ''}>›</button>
          </div>
          <div class="mp-card-edit-form">
            <div class="mp-edit-row">
              <label>Front (Cue)</label>
              <textarea id="mp-edit-front" rows="2" placeholder="Enter cue / location name...">${pin.front || ''}</textarea>
            </div>
            <div class="mp-edit-row">
              <label>Back (Memory)</label>
              <textarea id="mp-edit-back" rows="3" placeholder="Enter what you're memorizing here...">${pin.back || ''}</textarea>
            </div>
          </div>
          <div class="mp-card-actions">
            <button class="btn btn-secondary" onclick="MP.cancelEdit()">Cancel</button>
            <button class="btn btn-danger" onclick="MP.deletePin(${this.activePinIndex})">🗑 Delete Pin</button>
            <button class="btn btn-primary" onclick="MP.saveCard()">Save</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="mp-flashcard-bar">
        <div class="mp-flashcard">
          <div class="mp-card-nav mp-card-nav-left">
            <button class="mp-nav-btn" onclick="MP.prevPin()" ${this.activePinIndex === 0 ? 'disabled' : ''}>‹</button>
          </div>
          <div class="mp-card-face">
            <div class="mp-card-section mp-card-cue">
              <div class="mp-card-label">CUE</div>
              <div class="mp-card-text">${pin.front || '<em>No cue set — click Edit</em>'}</div>
            </div>
            <div class="mp-card-divider"></div>
            <div class="mp-card-section mp-card-memory">
              <div class="mp-card-label">MEMORY</div>
              <div class="mp-card-text">${pin.back || '<em>No memory set — click Edit</em>'}</div>
            </div>
            <div class="mp-card-counter-inline">${this.activePinIndex + 1} / ${total}</div>
          </div>
          <div class="mp-card-nav mp-card-nav-right">
            <button class="mp-nav-btn" onclick="MP.nextPin()" ${this.activePinIndex === total - 1 ? 'disabled' : ''}>›</button>
          </div>
        </div>
        <div class="mp-card-actions">
          <button class="btn btn-secondary" onclick="MP.startEdit()">✏️ Edit</button>
        </div>
      </div>
    `;
  },

  // ─── Full render ──────────────────────────────────────────────────────────
  render() {
    return `
      <div class="mp-root">
        ${this.activePalaceId ? this.renderViewer() : this.renderList()}
      </div>
    `;
  },

  // ─── Actions ──────────────────────────────────────────────────────────────
  createNew() {
    const name = prompt('Name your Memory Palace:', 'My Palace');
    if (!name) return;
    const palace = { id: this.uid(), name: name.trim(), imageDataUrl: null, pins: [] };
    this.palaces.push(palace);
    this.save();
    this.openPalace(palace.id);
  },

  deletePalace(id) {
    if (!confirm('Delete this palace and all its pins?')) return;
    this.palaces = this.palaces.filter(p => p.id !== id);
    if (this.activePalaceId === id) this.activePalaceId = null;
    this.save();
    this.refresh();
  },

  openPalace(id) {
    this.activePalaceId = id;
    this.activePinIndex = 0;
    this.cardFlipped = false;
    this.editingCard = false;
    this.placingPin = false;
    this.pan = { x: 0, y: 0 };
    this.zoom = 1;
    this.refresh();
    // Bind events after render
    requestAnimationFrame(() => this.bindCanvasEvents());
  },

  closeViewer() {
    this.activePalaceId = null;
    this.placingPin = false;
    this.refresh();
  },

  handleImageUpload(event, palaceId) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const palace = this.palaces.find(p => p.id === palaceId);
      if (!palace) return;
      palace.imageDataUrl = e.target.result;
      this.save();
      this.openPalace(palaceId);
    };
    reader.readAsDataURL(file);
  },

  togglePinMode() {
    this.placingPin = !this.placingPin;
    this.refresh();
    if (this.placingPin) requestAnimationFrame(() => this.bindCanvasEvents());
  },

  selectPin(index) {
    if (this.placingPin) return;
    this.activePinIndex = index;
    this.cardFlipped = false;
    this.editingCard = false;
    this.refreshFlashcard();
    // Update pin highlights
    document.querySelectorAll('.mp-pin').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  },

  prevPin() {
    if (this.activePinIndex > 0) {
      this.activePinIndex--;
      this.cardFlipped = false;
      this.editingCard = false;
      this.refreshFlashcard();
      this.highlightPin();
    }
  },

  nextPin() {
    const palace = this.activePalace();
    if (!palace) return;
    if (this.activePinIndex < palace.pins.length - 1) {
      this.activePinIndex++;
      this.cardFlipped = false;
      this.editingCard = false;
      this.refreshFlashcard();
      this.highlightPin();
    }
  },

  flipCard() {
    this.cardFlipped = !this.cardFlipped;
    const card = document.querySelector('.mp-flashcard');
    if (card) card.classList.toggle('flipped', this.cardFlipped);
  },

  startEdit() {
    this.editingCard = true;
    this.refreshFlashcard();
  },

  cancelEdit() {
    this.editingCard = false;
    this.refreshFlashcard();
  },

  saveCard() {
    const front = document.getElementById('mp-edit-front')?.value || '';
    const back = document.getElementById('mp-edit-back')?.value || '';
    const palace = this.activePalace();
    if (!palace) return;
    palace.pins[this.activePinIndex].front = front;
    palace.pins[this.activePinIndex].back = back;
    this.save();
    this.editingCard = false;
    this.cardFlipped = false;
    this.refresh();
    requestAnimationFrame(() => this.bindCanvasEvents());
  },

  deletePin(index) {
    if (!confirm('Delete this pin?')) return;
    const palace = this.activePalace();
    if (!palace) return;
    palace.pins.splice(index, 1);
    if (this.activePinIndex >= palace.pins.length) {
      this.activePinIndex = Math.max(0, palace.pins.length - 1);
    }
    this.save();
    this.refresh();
    requestAnimationFrame(() => this.bindCanvasEvents());
  },

  resetView() {
    this.pan = { x: 0, y: 0 };
    this.zoom = 1;
    const canvas = document.getElementById('mp-canvas');
    if (canvas) canvas.style.transform = `translate(0px,0px) scale(1)`;
  },

  // Refresh only the flashcard bar (lightweight)
  refreshFlashcard() {
    const bar = document.querySelector('.mp-flashcard-bar');
    if (bar) {
      bar.outerHTML = this.renderFlashcardBar();
    } else {
      // If no bar exists yet (first pin just placed), do full refresh
      this.refresh();
      requestAnimationFrame(() => this.bindCanvasEvents());
    }
    // Re-query after replacement
    const newBar = document.querySelector('.mp-flashcard-bar');
    // nothing extra needed
  },

  highlightPin() {
    document.querySelectorAll('.mp-pin').forEach((el, i) => {
      el.classList.toggle('active', i === this.activePinIndex);
    });
  },

  refresh() {
    const container = document.getElementById('view-container');
    if (container) container.innerHTML = this.render();
    if (this.activePalaceId) requestAnimationFrame(() => this.bindCanvasEvents());
  },

  // ─── Canvas pan/zoom & pin placement ─────────────────────────────────────
  bindCanvasEvents() {
    const wrapper = document.getElementById('mp-canvas-wrapper');
    const canvas = document.getElementById('mp-canvas');
    if (!wrapper || !canvas) return;

    // Mouse wheel zoom
    wrapper.onwheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      this.zoom = Math.min(Math.max(this.zoom * delta, 0.2), 8);
      canvas.style.transform = `translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})`;
    };

    // Drag to pan (only when not placing pin)
    wrapper.onmousedown = (e) => {
      if (this.placingPin) return;
      if (e.target.classList.contains('mp-pin') || e.target.classList.contains('mp-pin-number')) return;
      this.dragging = true;
      this.dragStart = { x: e.clientX - this.pan.x, y: e.clientY - this.pan.y };
      wrapper.style.cursor = 'grabbing';
    };

    window.onmousemove = (e) => {
      if (!this.dragging) return;
      this.pan.x = e.clientX - this.dragStart.x;
      this.pan.y = e.clientY - this.dragStart.y;
      canvas.style.transform = `translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})`;
    };

    window.onmouseup = () => {
      this.dragging = false;
      if (wrapper) wrapper.style.cursor = this.placingPin ? 'crosshair' : 'grab';
    };

    // Click to place pin
    wrapper.onclick = (e) => {
      if (!this.placingPin) return;
      // Only place if click lands on map image area (not on toolbar/UI)
      const img = document.getElementById('mp-map-img');
      if (!img) return;

      const rect = img.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width;
      const yPct = (e.clientY - rect.top) / rect.height;

      if (xPct < 0 || xPct > 1 || yPct < 0 || yPct > 1) return;

      const palace = this.activePalace();
      if (!palace) return;

      palace.pins.push({ id: this.uid(), xPct, yPct, front: '', back: '' });
      this.activePinIndex = palace.pins.length - 1;
      this.cardFlipped = false;
      this.editingCard = true;
      this.placingPin = false;
      this.save();
      this.refresh();
      requestAnimationFrame(() => this.bindCanvasEvents());
    };

    wrapper.style.cursor = this.placingPin ? 'crosshair' : 'grab';
  }
};

// ─── Init ─────────────────────────────────────────────────────────────────────
MP.load();

// ─── Render function (called by app.js) ───────────────────────────────────────
function renderMemoryPalace() {
  return MP.render();
}

function setupMemoryPalaceListeners() {
  if (MP.activePalaceId) {
    requestAnimationFrame(() => MP.bindCanvasEvents());
  }
}
