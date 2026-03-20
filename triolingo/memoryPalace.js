// Memory Palace - Pan/zoom map viewer with pins and flashcards
// All data stored in localStorage

const MP = {
  // ─── State ───────────────────────────────────────────────────────────────
  palaces: [],
  activePalaceId: null,
  activePinIndex: 0,
  cardFlipped: false,
  editingCard: false,

  pan: { x: 0, y: 0 },
  zoom: 1,
  dragging: false,
  dragStart: { x: 0, y: 0 },
  placingPin: false,

  // ─── Persistence ─────────────────────────────────────────────────────────
  save() { localStorage.setItem('mp_palaces', JSON.stringify(this.palaces)); },
  load() {
    try { const r = localStorage.getItem('mp_palaces'); this.palaces = r ? JSON.parse(r) : []; }
    catch { this.palaces = []; }
  },

  uid: () => '_' + Math.random().toString(36).slice(2, 9),
  activePalace() { return this.palaces.find(p => p.id === this.activePalaceId) || null; },

  // ─── Render: Palace List ──────────────────────────────────────────────────
  renderList() {
    const list = this.palaces.map((p, i) => `
      <div class="mp-palace-card" onclick="MP.openPalace('${p.id}')">
        <div class="mp-palace-thumb">
          ${p.imageDataUrl
            ? `<img src="${p.imageDataUrl}" alt="${p.name}">`
            : `<div class="mp-palace-placeholder">🗺️</div>`}
        </div>
        <div class="mp-palace-info">
          <span class="mp-palace-name">${p.name}</span>
          <span class="mp-palace-count">${p.pins.length} pin${p.pins.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="mp-palace-delete" onclick="event.stopPropagation();MP.deletePalace('${p.id}')" title="Delete">🗑</button>
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

  // ─── Render: SVG connector lines ──────────────────────────────────────────
  renderConnectors(palace) {
    if (!palace || palace.pins.length < 2) return '';
    const lines = [];
    for (let i = 0; i < palace.pins.length - 1; i++) {
      const a = palace.pins[i];
      const b = palace.pins[i + 1];
      const x1 = a.xPct * 100;
      const y1 = a.yPct * 100;
      const x2 = b.xPct * 100;
      const y2 = b.yPct * 100;
      lines.push(`<line x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%"
        class="mp-connector-line" stroke-dasharray="8 5"/>`);
    }
    return `
      <svg class="mp-connector-svg" xmlns="http://www.w3.org/2000/svg">
        ${lines.join('\n')}
      </svg>
    `;
  },

  // ─── Render: Map Viewer ───────────────────────────────────────────────────
  renderViewer() {
    const palace = this.activePalace();
    if (!palace) return '';

    const pins = palace.pins.map((pin, i) => `
      <div class="mp-pin ${i === this.activePinIndex ? 'active' : ''}"
           style="left:${pin.xPct * 100}%;top:${pin.yPct * 100}%"
           onclick="event.stopPropagation();MP.selectPin(${i})"
           title="${pin.cue || 'Pin ' + (i+1)}">
        <div class="mp-pin-number">${i + 1}</div>
      </div>
    `).join('');

    return `
      <div class="mp-viewer-panel">
        <div class="mp-viewer-toolbar">
          <button class="btn btn-secondary mp-back-btn" onclick="MP.closeViewer()">← Back</button>
          <span class="mp-palace-title">${palace.name}</span>
          <div class="mp-toolbar-actions">
            <button class="btn ${this.placingPin ? 'btn-warning' : 'btn-primary'}"
                    onclick="MP.togglePinMode()">
              ${this.placingPin ? '✕ Cancel' : '📍 Add Pin'}
            </button>
            <label class="btn btn-secondary mp-upload-btn">
              🖼️ Change Map
              <input type="file" accept="image/*" style="display:none"
                     onchange="MP.handleImageUpload(event, '${palace.id}')">
            </label>
            <button class="btn btn-secondary" onclick="MP.resetView()">⌖ Reset</button>
          </div>
        </div>

        <div class="mp-canvas-wrapper" id="mp-canvas-wrapper">
          <div class="mp-canvas" id="mp-canvas"
               style="transform: translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})">
            ${palace.imageDataUrl
              ? `<img src="${palace.imageDataUrl}" class="mp-map-img" draggable="false" id="mp-map-img">`
              : `<div class="mp-no-map">
                  <p>No map uploaded yet.</p>
                  <label class="btn btn-primary">Upload Map Image
                    <input type="file" accept="image/*" style="display:none"
                           onchange="MP.handleImageUpload(event, '${palace.id}')">
                  </label>
                </div>`}
            ${this.renderConnectors(palace)}
            ${pins}
          </div>
          ${this.placingPin ? '<div class="mp-placing-overlay">Click anywhere on the map to place a pin</div>' : ''}
        </div>

        ${palace.pins.length > 0 ? this.renderFlashcardBar() : ''}
      </div>
    `;
  },

  // ─── Render: Flashcard Bar ────────────────────────────────────────────────
  renderFlashcardBar() {
    const palace = this.activePalace();
    if (!palace || palace.pins.length === 0) return '';
    const pin = palace.pins[this.activePinIndex];
    const total = palace.pins.length;
    const isFirst = this.activePinIndex === 0;
    const isLast = this.activePinIndex === total - 1;

    // Card content (view or edit mode — inline on card)
    const cardContent = this.editingCard ? `
      <div class="mp-card-edit-mode">
        <div class="mp-card-edit-header">
          <span class="mp-card-counter-inline">${this.activePinIndex + 1} / ${total}</span>
          <div class="mp-card-edit-btns">
            <button class="mp-card-icon-btn mp-save-btn" onclick="MP.saveCard()" title="Save">✓ Save</button>
            <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.cancelEdit()" title="Cancel">✕</button>
            <button class="mp-card-icon-btn mp-delete-btn" onclick="MP.deletePin(${this.activePinIndex})" title="Delete pin">🗑</button>
          </div>
        </div>
        <div class="mp-card-field">
          <label class="mp-field-label">🖼 Memory Image (URL or emoji)</label>
          <input id="mp-edit-image" type="text" class="mp-field-input" placeholder="https://... or 🧠"
                 value="${pin.image || ''}">
        </div>
        <div class="mp-card-field">
          <label class="mp-field-label">📌 Description</label>
          <input id="mp-edit-desc" type="text" class="mp-field-input" placeholder="Short label / location cue..."
                 value="${pin.desc || pin.front || ''}">
        </div>
        <div class="mp-card-field">
          <label class="mp-field-label">💡 Info to Remember</label>
          <textarea id="mp-edit-info" class="mp-field-input" rows="2"
                    placeholder="What you want to remember here...">${pin.info || pin.back || ''}</textarea>
        </div>
      </div>
    ` : `
      <div class="mp-card-view-mode">
        <div class="mp-card-top-row">
          <span class="mp-card-counter-inline">${this.activePinIndex + 1} / ${total}</span>
          <button class="mp-card-icon-btn mp-edit-btn" onclick="MP.startEdit()" title="Edit">✏️ Edit</button>
        </div>
        <div class="mp-card-body">
          <div class="mp-card-image-col">
            ${pin.image
              ? (pin.image.startsWith('http') || pin.image.startsWith('data')
                  ? `<img src="${pin.image}" class="mp-card-img" alt="memory image">`
                  : `<div class="mp-card-emoji">${pin.image}</div>`)
              : `<div class="mp-card-emoji mp-card-img-placeholder">🗺️</div>`}
          </div>
          <div class="mp-card-text-col">
            <div class="mp-card-section-label">📌 Description</div>
            <div class="mp-card-desc">${pin.desc || pin.front || '<em class="mp-placeholder">No description — click Edit</em>'}</div>
            <div class="mp-card-section-label">💡 Remember</div>
            <div class="mp-card-info">${pin.info || pin.back || '<em class="mp-placeholder">Nothing here yet — click Edit</em>'}</div>
          </div>
        </div>
      </div>
    `;

    return `
      <div class="mp-flashcard-bar">
        <button class="mp-nav-btn" onclick="MP.prevPin()" ${isFirst ? 'disabled' : ''}>‹</button>
        <div class="mp-flashcard">${cardContent}</div>
        <button class="mp-nav-btn" onclick="MP.nextPin()" ${isLast ? 'disabled' : ''}>›</button>
      </div>
    `;
  },

  // ─── Full render ──────────────────────────────────────────────────────────
  render() {
    return `<div class="mp-root">${this.activePalaceId ? this.renderViewer() : this.renderList()}</div>`;
  },

  // ─── Actions ──────────────────────────────────────────────────────────────
  createNew() {
    const name = prompt('Name your Memory Palace:', 'My Palace');
    if (!name) return;
    this.palaces.push({ id: this.uid(), name: name.trim(), imageDataUrl: null, pins: [] });
    this.save();
    this.openPalace(this.palaces[this.palaces.length - 1].id);
  },

  deletePalace(id) {
    if (!confirm('Delete this palace and all its pins?')) return;
    this.palaces = this.palaces.filter(p => p.id !== id);
    if (this.activePalaceId === id) this.activePalaceId = null;
    this.save(); this.refresh();
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
    requestAnimationFrame(() => this.bindCanvasEvents());
  },

  closeViewer() { this.activePalaceId = null; this.placingPin = false; this.refresh(); },

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
    document.querySelectorAll('.mp-pin').forEach((el, i) => el.classList.toggle('active', i === index));
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

  flipCard() { /* no-op: no flip animation */ },

  startEdit() { this.editingCard = true; this.refreshFlashcard(); },
  cancelEdit() { this.editingCard = false; this.refreshFlashcard(); },

  saveCard() {
    const image = document.getElementById('mp-edit-image')?.value || '';
    const desc  = document.getElementById('mp-edit-desc')?.value  || '';
    const info  = document.getElementById('mp-edit-info')?.value  || '';
    const palace = this.activePalace();
    if (!palace) return;
    const pin = palace.pins[this.activePinIndex];
    pin.image = image;
    pin.desc  = desc;
    pin.info  = info;
    // Keep legacy fields in sync
    pin.front = desc;
    pin.back  = info;
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
    if (this.activePinIndex >= palace.pins.length)
      this.activePinIndex = Math.max(0, palace.pins.length - 1);
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

  refreshFlashcard() {
    const bar = document.querySelector('.mp-flashcard-bar');
    if (bar) {
      bar.outerHTML = this.renderFlashcardBar();
    } else {
      this.refresh();
      requestAnimationFrame(() => this.bindCanvasEvents());
    }
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
    const canvas  = document.getElementById('mp-canvas');
    if (!wrapper || !canvas) return;

    wrapper.onwheel = (e) => {
      e.preventDefault();
      this.zoom = Math.min(Math.max(this.zoom * (e.deltaY > 0 ? 0.9 : 1.1), 0.2), 8);
      canvas.style.transform = `translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})`;
    };

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

    wrapper.onclick = (e) => {
      if (!this.placingPin) return;
      const img = document.getElementById('mp-map-img');
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width;
      const yPct = (e.clientY - rect.top) / rect.height;
      if (xPct < 0 || xPct > 1 || yPct < 0 || yPct > 1) return;
      const palace = this.activePalace();
      if (!palace) return;
      palace.pins.push({ id: this.uid(), xPct, yPct, image: '', desc: '', info: '', front: '', back: '' });
      this.activePinIndex = palace.pins.length - 1;
      this.editingCard = true;
      this.placingPin = false;
      this.save();
      this.refresh();
      requestAnimationFrame(() => this.bindCanvasEvents());
    };

    wrapper.style.cursor = this.placingPin ? 'crosshair' : 'grab';

    // ── Keyboard navigation (arrow keys) ────────────────────────────────────
    // Attach to document, but only when memory palace is active
    document.onkeydown = (e) => {
      // Don't intercept when typing in an input/textarea
      if (document.activeElement && ['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (!this.activePalaceId) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prevPin(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); this.nextPin(); }
    };
  }
};

// ─── Init ─────────────────────────────────────────────────────────────────────
MP.load();

function renderMemoryPalace() { return MP.render(); }
function setupMemoryPalaceListeners() {
  if (MP.activePalaceId) requestAnimationFrame(() => MP.bindCanvasEvents());
}
