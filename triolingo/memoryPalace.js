// Memory Palace - Pan/zoom map viewer with pins and flashcards
// All data stored in localStorage

const MP = {
  // ─── State ───────────────────────────────────────────────────────────────
  palaces: [],
  activePalaceId: null,
  activePinIndex: 0,
  cardFlipped: false,
  editingCard: false,
  studyMode: false,
  studyFields: { image: true, desc: true, info: true },
  studyState: null,
  studyConfiguring: false,
  cardListOpen: false,    // toggleable pin list sidebar

  pan: { x: 0, y: 0 },
  zoom: 1,
  dragging: false,
  dragStart: { x: 0, y: 0 },
  placingPin: false,

  // ─── Persistence ─────────────────────────────────────────────────────────
  // Images live in IndexedDB (no size limit); everything else in localStorage.
  save() {
    // Strip imageDataUrl before writing to localStorage — stored separately in IDB
    const slim = this.palaces.map(p => {
      const { imageDataUrl, ...rest } = p;
      return rest;
    });
    try { localStorage.setItem('mp_palaces', JSON.stringify(slim)); } catch(e) {
      console.warn('MP save failed', e);
    }
  },
  load() {
    const stored = localStorage.getItem('mp_palaces');
    if (stored) {
      try { this.palaces = JSON.parse(stored); }
      catch { this.palaces = []; }
      this._rehydrateImages();
    } else {
      // First load: try bundled data file
      fetch('data/memoryPalaces.json')
        .then(r => r.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            this.palaces = data;
            this.save();
            this.refresh();
          }
        })
        .catch(() => {});
      this.palaces = [];
      this._rehydrateImages();
    }
  },
  _rehydrateImages() {
    MPIDB.loadAllImages().then(imgMap => {
      let changed = false;
      this.palaces.forEach(p => {
        if (imgMap[p.id]) { p.imageDataUrl = imgMap[p.id]; changed = true; }
      });
      if (changed && this.activePalaceId) this.refresh();
      else if (changed) this._refreshListThumbs();
    });
  },
  _refreshListThumbs() {
    // Lightweight refresh only if on list view
    if (!this.activePalaceId) this.refresh();
  },
  async saveImage(palaceId, dataUrl) {
    await MPIDB.saveImage(palaceId, dataUrl);
    const p = this.palaces.find(x => x.id === palaceId);
    if (p) p.imageDataUrl = dataUrl;
    this.save();
  },
  async deleteImage(palaceId) {
    await MPIDB.deleteImage(palaceId);
    const p = this.palaces.find(x => x.id === palaceId);
    if (p) p.imageDataUrl = null;
  },

  uid: () => '_' + Math.random().toString(36).slice(2, 9),
  activePalace() { return this.palaces.find(p => p.id === this.activePalaceId) || null; },

  // ─── Export / Import ─────────────────────────────────────────────────────
  exportPalaces() {
    const slim = this.palaces.map(p => { const { imageDataUrl, ...rest } = p; return rest; });
    const blob = new Blob([JSON.stringify(slim, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'memoryPalaces.json'; a.click();
    // hint
    alert('Saved! To bundle with the app, replace triolingo/data/memoryPalaces.json with this file and push.');
  },
  importPalaces(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result);
        if (!Array.isArray(data)) throw new Error('Not an array');
        if (!confirm(`Import ${data.length} palace(s)? This will MERGE with existing palaces.`)) return;
        const existingIds = new Set(this.palaces.map(p => p.id));
        data.forEach(p => { if (!existingIds.has(p.id)) this.palaces.push(p); });
        this.save(); this.refresh();
      } catch(err) { alert('Import failed: ' + err.message); }
    };
    reader.readAsText(file);
  },

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
          <span class="mp-palace-type ${p.type === '3d' ? 'mp-palace-type-3d' : 'mp-palace-type-2d'}">${p.type === '3d' ? '3D' : '2D'}</span>
        </div>
        <button class="mp-palace-delete" onclick="event.stopPropagation();MP.deletePalace('${p.id}')" title="Delete palace">🗑 Delete</button>
      </div>
    `).join('');
    return `
      <div class="mp-list-panel">
        <div class="mp-list-header">
          <h3>Memory Palaces</h3>
          <div style="display:flex;gap:6px;align-items:center">
            <label class="btn btn-secondary" style="font-size:0.78rem;padding:4px 10px;cursor:pointer" title="Import palaces from JSON">
              📥 Import
              <input type="file" accept=".json" style="display:none" onchange="MP.importPalaces(event)">
            </label>
            <button class="btn btn-secondary" style="font-size:0.78rem;padding:4px 10px" onclick="MP.exportPalaces()" title="Export palaces to JSON">📤 Export</button>
            <button class="btn btn-primary mp-new-btn" onclick="MP.createNew()">+ New Palace</button>
          </div>
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
            <button class="btn btn-secondary" onclick="MPPicker.open('${palace.id}')" title="Pick from satellite/street/topo map">
              🛰 Browse Map
            </button>
            <label class="btn btn-secondary mp-upload-btn" title="Upload your own image">
              🖼 Upload
              <input type="file" accept="image/*" style="display:none"
                     onchange="MP.handleImageUpload(event, '${palace.id}')">
            </label>
            <button class="btn btn-secondary" onclick="MP.resetView()">⌖ Reset</button>
            <button class="btn btn-danger" onclick="MP.deletePalace('${palace.id}')" title="Delete this palace">🗑 Delete Palace</button>
            <button class="btn ${this.cardListOpen ? 'btn-primary' : 'btn-secondary'}"
                    onclick="MP.toggleCardList()" title="Toggle card list">
              ☰ Cards ${palace.pins.length > 0 ? `(${palace.pins.length})` : ''}
            </button>
          </div>
        </div>

        ${this.cardListOpen ? this.renderCardList(palace) : ''}

        <div class="mp-canvas-wrapper" id="mp-canvas-wrapper">
          <div class="mp-canvas" id="mp-canvas"
               style="transform: translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})">
            ${palace.imageDataUrl
              ? `<img src="${palace.imageDataUrl}" class="mp-map-img" draggable="false" id="mp-map-img">`
              : `<div class="mp-no-map">
                  <p>No map yet. Choose a source:</p>
                  <button class="btn btn-primary" onclick="MPPicker.open('${palace.id}')">🛰 Browse Satellite / Street Map</button>
                  <label class="btn btn-secondary" style="margin-top:8px">📁 Upload Image
                    <input type="file" accept="image/*" style="display:none"
                           onchange="MP.handleImageUpload(event, '${palace.id}')">
                  </label>
                </div>`}
            ${this.renderConnectors(palace)}
            ${pins}
          </div>
          ${this.placingPin ? '<div class="mp-placing-overlay">Click anywhere on the map to place a pin</div>' : ''}
          ${palace.pins.length > 0 ? this.renderFlashcardBar() : ''}
        </div>
      </div>
    `;
  },

  // ─── Render: Card List (toggleable) ──────────────────────────────────────
  renderCardList(palace) {
    const rows = palace.pins.map((pin, i) => {
      const isActive = i === this.activePinIndex;
      const img = pin.image
        ? (pin.image.startsWith('http') || pin.image.startsWith('data')
            ? `<img src="${pin.image}" class="mp-list-thumb" alt="">`
            : `<span class="mp-list-emoji">${pin.image}</span>`)
        : `<span class="mp-list-emoji mp-list-emoji-empty">🗺️</span>`;
      return `
        <div class="mp-card-list-row ${isActive ? 'active' : ''}" onclick="MP.selectPin(${i})">
          <div class="mp-list-num">${i + 1}</div>
          <div class="mp-list-img-col">${img}</div>
          <div class="mp-list-text-col">
            <div class="mp-list-desc">${pin.desc || pin.front || '<em>No description</em>'}</div>
            <div class="mp-list-info">${pin.info || pin.back || ''}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="mp-card-list-panel" id="mp-card-list">
        <div class="mp-card-list-header">
          <span>📋 All Cards</span>
          <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.toggleCardList()">✕</button>
        </div>
        <div class="mp-card-list-rows">
          ${rows || '<p style="padding:12px;color:var(--text-secondary)">No pins yet.</p>'}
        </div>
      </div>
    `;
  },

  toggleCardList() {
    this.cardListOpen = !this.cardListOpen;
    this.refresh();
    if (this.activePalaceId) requestAnimationFrame(() => this.bindCanvasEvents());
  },

  // ─── Render: Flashcard Bar ────────────────────────────────────────────────
  renderFlashcardBar() {
    const palace = this.activePalace();
    if (!palace || palace.pins.length === 0) return '';
    const pin = palace.pins[this.activePinIndex];
    const total = palace.pins.length;
    const isFirst = this.activePinIndex === 0;
    const isLast = this.activePinIndex === total - 1;

    // Study config overlay
    if (this.studyConfiguring) {
      return `
        <div class="mp-flashcard-bar mp-bar-study-config">
          <div class="mp-study-config-card">
            <div class="mp-study-config-title">📖 Study Mode — Choose fields to test</div>
            <div class="mp-study-config-fields">
              <label class="mp-study-field-check">
                <input type="checkbox" id="sc-image" ${this.studyFields.image ? 'checked' : ''}
                       onchange="MP.studyFields.image = this.checked"> 🖼 Memory Image
              </label>
              <label class="mp-study-field-check">
                <input type="checkbox" id="sc-desc" ${this.studyFields.desc ? 'checked' : ''}
                       onchange="MP.studyFields.desc = this.checked"> 📌 Description
              </label>
              <label class="mp-study-field-check">
                <input type="checkbox" id="sc-info" ${this.studyFields.info ? 'checked' : ''}
                       onchange="MP.studyFields.info = this.checked"> 💡 Info to Remember
              </label>
            </div>
            <div class="mp-study-config-btns">
              <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.cancelStudy()">Cancel</button>
              <button class="mp-card-icon-btn mp-save-btn" onclick="MP.startStudyRun()">▶ Start</button>
            </div>
          </div>
        </div>
      `;
    }

    // Study question overlay
    if (this.studyMode && this.studyState) {
      return this.renderStudyQuestion();
    }

    // Normal card content (edit or view)
    const cardContent = this.editingCard ? `
      <div class="mp-card-edit-mode">
        <div class="mp-card-edit-header">
          <span class="mp-card-counter-inline">${this.activePinIndex + 1} / ${total}</span>
          <div class="mp-card-edit-btns">
            <button class="mp-card-icon-btn mp-save-btn" onclick="MP.saveCard()">✓ Save</button>
            <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.cancelEdit()">✕</button>
            <button class="mp-card-icon-btn mp-delete-btn" onclick="MP.deletePin(${this.activePinIndex})">🗑</button>
          </div>
        </div>
        <div class="mp-card-field">
          <label class="mp-field-label">💭 Mental Image / Vivid Scene</label>
          <textarea id="mp-edit-image" class="mp-field-input" rows="2" placeholder="Describe a vivid mental image or scene to anchor this memory…">${pin.image || ''}</textarea>
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
          <div style="display:flex;gap:4px">
            <button class="mp-card-icon-btn mp-study-btn" onclick="MP.openStudyConfig()">📖 Study</button>
            <button class="mp-card-icon-btn mp-edit-btn" onclick="MP.startEdit()">✏️ Edit</button>
          </div>
        </div>
        <div class="mp-card-body">
          <div class="mp-card-text-col">
            <div class="mp-card-section-label">💭 Mental Image</div>
            <div class="mp-card-mental-image">${pin.image || '<em class="mp-placeholder">No mental image — click Edit</em>'}</div>
            <div class="mp-card-section-label" style="margin-top:4px">📌 Description</div>
            <div class="mp-card-desc">${pin.desc || pin.front || '<em class="mp-placeholder">No description — click Edit</em>'}</div>
            <div class="mp-card-section-label" style="margin-top:4px">💡 Remember</div>
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

  // ─── Render: Study question ───────────────────────────────────────────────
  renderStudyQuestion() {
    const palace = this.activePalace();
    const s = this.studyState;
    if (!s || !palace) return '';
    const pin = palace.pins[s.pinIndex];
    const total = palace.pins.length;
    const fieldLabels = { image: '💭 Mental Image', desc: '📌 Description', info: '💡 Info to Remember' };

    // Build hint: show the OTHER two fields as context
    const contextParts = [];
    if (s.field !== 'image' && pin.image)
      contextParts.push(`<span class="mp-q-context-item">${pin.image.startsWith('http') ? '<em>[image]</em>' : pin.image}</span>`);
    if (s.field !== 'desc' && (pin.desc || pin.front))
      contextParts.push(`<span class="mp-q-context-item">${pin.desc || pin.front}</span>`);
    if (s.field !== 'info' && (pin.info || pin.back))
      contextParts.push(`<span class="mp-q-context-item">${pin.info || pin.back}</span>`);

    const correctAnswer = s.field === 'image' ? (pin.image || '')
                        : s.field === 'desc'  ? (pin.desc || pin.front || '')
                        : (pin.info || pin.back || '');

    const feedbackHtml = s.revealed ? `
      <div class="mp-q-feedback ${s.correct ? 'correct' : 'wrong'}">
        ${s.correct ? '✅ Correct!' : `❌ Answer: <strong>${correctAnswer}</strong>`}
        <button class="mp-card-icon-btn mp-save-btn" style="margin-left:8px" onclick="MP.studyNext()">Next →</button>
      </div>
    ` : `
      <div class="mp-q-input-row">
        <input id="mp-study-input" type="text" class="mp-field-input" placeholder="Type your answer..."
               onkeydown="if(event.key==='Enter')MP.submitStudyAnswer()">
        <button class="mp-card-icon-btn mp-save-btn" onclick="MP.submitStudyAnswer()">Check</button>
        <button class="mp-card-icon-btn" onclick="MP.revealStudyAnswer()" style="opacity:0.7">Reveal</button>
      </div>
    `;

    return `
      <div class="mp-flashcard-bar mp-bar-study">
        <button class="mp-nav-btn" onclick="MP.cancelStudy()" title="Stop studying">✕</button>
        <div class="mp-flashcard mp-flashcard-study">
          <div class="mp-card-view-mode">
            <div class="mp-card-top-row">
              <span class="mp-card-counter-inline">Pin ${s.pinIndex + 1}/${total} · ${fieldLabels[s.field]}</span>
              <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.cancelStudy()">Stop</button>
            </div>
            <div class="mp-q-prompt">What is the <strong>${fieldLabels[s.field]}</strong> for this pin?</div>
            ${contextParts.length ? `<div class="mp-q-context">Hint: ${contextParts.join(' · ')}</div>` : ''}
            ${feedbackHtml}
          </div>
        </div>
        <button class="mp-nav-btn" onclick="MP.studyNext()">›</button>
      </div>
    `;
  },

  // ─── Render: 3D Viewer ────────────────────────────────────────────────────
  render3DViewer() {
    const palace = this.activePalace();
    if (!palace) return '';
    const total = palace.pins.length;
    const isFirst = this.activePinIndex === 0;
    const isLast  = this.activePinIndex === total - 1;

    return `
      <div class="mp-viewer-panel">
        <div class="mp-viewer-toolbar">
          <button class="btn btn-secondary mp-back-btn" onclick="MP.closeViewer()">← Back</button>
          <span class="mp-palace-title">${palace.name} <span class="mp-3d-badge">3D</span></span>
          <div class="mp-toolbar-actions">
            <button class="btn btn-primary" onclick="window.MP3D?.startPinPlacement()" title="Add a pin at current position">📍 Add Pin</button>
            <label class="btn btn-secondary" title="Load 3D map file (GLB, GLTF, OBJ, FBX, BSP)">
              📁 Load Map
              <input type="file" style="display:none"
                     accept=".glb,.gltf,.obj,.fbx,.bsp"
                     onchange="MP.handle3DMapUpload(event)">
            </label>
            <button class="btn btn-secondary" onclick="window.MP3D?.teleportToPin(MP.activePinIndex)" title="Teleport to active pin">⊛ Go to Pin</button>
            <button class="btn ${this.cardListOpen ? 'btn-primary' : 'btn-secondary'}"
                    onclick="MP.toggleCardList()">☰ Cards (${total})</button>
            <button class="btn btn-danger" onclick="MP.deletePalace('${palace.id}')">🗑 Delete</button>
          </div>
        </div>

        ${this.cardListOpen ? this.renderCardList(palace) : ''}

        <div class="mp3d-wrapper">
          <div id="mp3d-viewport" class="mp3d-viewport"></div>
          <div class="mp3d-crosshair">+</div>
          <div id="mp3d-status" class="mp3d-status" style="display:none"></div>
          ${total > 0 ? `
          <div class="mp-flashcard-bar mp-flashcard-bar-3d">
            <button class="mp-nav-btn" onclick="MP.prevPin()" ${isFirst ? 'disabled' : ''}>‹</button>
            <div class="mp-flashcard">${this._renderCardContent(palace.pins[this.activePinIndex], this.activePinIndex, total)}</div>
            <button class="mp-nav-btn" onclick="MP.nextPin()" ${isLast ? 'disabled' : ''}>›</button>
          </div>` : ''}
        </div>
      </div>
    `;
  },

  _renderCardContent(pin, idx, total) {
    if (!pin) return '';
    if (this.editingCard) {
      return `
        <div class="mp-card-edit-mode">
          <div class="mp-card-edit-header">
            <span class="mp-card-counter-inline">${idx + 1} / ${total}</span>
            <div class="mp-card-edit-btns">
              <button class="mp-card-icon-btn mp-save-btn" onclick="MP.saveCard()">✓ Save</button>
              <button class="mp-card-icon-btn mp-cancel-btn" onclick="MP.cancelEdit()">✕</button>
              <button class="mp-card-icon-btn mp-delete-btn" onclick="MP.deletePin(${idx})">🗑</button>
            </div>
          </div>
          <div class="mp-card-field">
            <label class="mp-field-label">💭 Mental Image / Vivid Scene</label>
            <textarea id="mp-edit-image" class="mp-field-input" rows="2" placeholder="Describe a vivid mental image…">${pin.image || ''}</textarea>
          </div>
          <div class="mp-card-field">
            <label class="mp-field-label">📌 Description</label>
            <input id="mp-edit-desc" type="text" class="mp-field-input" placeholder="Short label…" value="${pin.desc || pin.front || ''}">
          </div>
          <div class="mp-card-field">
            <label class="mp-field-label">💡 Info to Remember</label>
            <textarea id="mp-edit-info" class="mp-field-input" rows="2">${pin.info || pin.back || ''}</textarea>
          </div>
        </div>`;
    }
    return `
      <div class="mp-card-view-mode">
        <div class="mp-card-top-row">
          <span class="mp-card-counter-inline">${idx + 1} / ${total}</span>
          <div style="display:flex;gap:4px">
            <button class="mp-card-icon-btn mp-study-btn" onclick="MP.openStudyConfig()">📖 Study</button>
            <button class="mp-card-icon-btn mp-edit-btn" onclick="MP.startEdit()">✏️ Edit</button>
          </div>
        </div>
        <div class="mp-card-body">
          <div class="mp-card-text-col">
            <div class="mp-card-section-label">💭 Mental Image</div>
            <div class="mp-card-mental-image">${pin.image || '<em class="mp-placeholder">No mental image</em>'}</div>
            <div class="mp-card-section-label" style="margin-top:4px">📌 Description</div>
            <div class="mp-card-desc">${pin.desc || pin.front || '<em class="mp-placeholder">—</em>'}</div>
            <div class="mp-card-section-label" style="margin-top:4px">💡 Remember</div>
            <div class="mp-card-info">${pin.info || pin.back || '<em class="mp-placeholder">—</em>'}</div>
          </div>
        </div>
      </div>`;
  },

  // ─── Full render ──────────────────────────────────────────────────────────
  render() {
    const palace = this.activePalaceId ? this.activePalace() : null;
    if (palace?.type === '3d') {
      return `<div class="mp-root">${this.render3DViewer()}</div>`;
    }
    return `<div class="mp-root">${this.activePalaceId ? this.renderViewer() : this.renderList()}</div>`;
  },

  // ─── Actions ──────────────────────────────────────────────────────────────
  createNew() {
    const name = prompt('Name your Memory Palace:', 'My Palace');
    if (!name) return;
    const type = confirm('Create a 3D palace?\n\nOK = 3D (walk-through)\nCancel = 2D (flat map)') ? '3d' : '2d';
    this.palaces.push({ id: this.uid(), name: name.trim(), type, imageDataUrl: null, pins: [] });
    this.save();
    this.openPalace(this.palaces[this.palaces.length - 1].id);
  },

  deletePalace(id) {
    const palace = this.palaces.find(p => p.id === id);
    const name = palace ? palace.name : 'this palace';
    if (!confirm(`Delete "${name}" and all its pins?\n\nThis cannot be undone.`)) return;
    if (!confirm(`Are you sure? All ${palace?.pins?.length || 0} pin(s) will be permanently deleted.`)) return;
    this.palaces = this.palaces.filter(p => p.id !== id);
    if (this.activePalaceId === id) this.activePalaceId = null;
    this.deleteImage(id);
    this.save(); this.refresh();
  },

  openPalace(id) {
    // Tear down 3D if switching away
    if (window.MP3D?.renderer) window.MP3D.destroy();
    this.activePalaceId = id;
    this.activePinIndex = 0;
    this.cardFlipped = false;
    this.editingCard = false;
    this.placingPin = false;
    this.pan = { x: 0, y: 0 };
    this.zoom = 1;
    this.refresh();
    const palace = this.activePalace();
    if (palace?.type === '3d') {
      requestAnimationFrame(() => {
        window.MP3D?.init('mp3d-viewport');
        window.MP3D?._renderPinMeshes();
      });
    } else {
      requestAnimationFrame(() => this.bindCanvasEvents());
    }
  },

  closeViewer() {
    if (window.MP3D?.renderer) window.MP3D.destroy();
    this.activePalaceId = null;
    this.placingPin = false;
    this.refresh();
  },

  handle3DMapUpload(event) {
    const file = event.target.files[0];
    if (!file || !window.MP3D) return;
    window.MP3D.loadFile(file);
  },

  handleImageUpload(event, palaceId) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async e => {
      await this.saveImage(palaceId, e.target.result);
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
    window.MP3D?.updateActivePinIndex?.(index);
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
    const palace = this.activePalace();
    const pin = palace?.pins?.[index];
    const label = pin?.desc || pin?.front || `Pin ${index + 1}`;
    if (!confirm(`Delete pin "${label}"?`)) return;
    if (!confirm('Are you sure? This cannot be undone.')) return;
    if (!palace) return;
    palace.pins.splice(index, 1);
    if (this.activePinIndex >= palace.pins.length)
      this.activePinIndex = Math.max(0, palace.pins.length - 1);
    this.save();
    this.refresh();
    requestAnimationFrame(() => this.bindCanvasEvents());
  },

  // ─── Study mode actions ───────────────────────────────────────────────────
  openStudyConfig() {
    this.studyConfiguring = true;
    this.studyMode = false;
    this.studyState = null;
    this.refreshFlashcard();
  },

  cancelStudy() {
    this.studyConfiguring = false;
    this.studyMode = false;
    this.studyState = null;
    this.refreshFlashcard();
  },

  startStudyRun() {
    // Read checkboxes (they're live since we bound onchange already)
    if (!this.studyFields.image && !this.studyFields.desc && !this.studyFields.info) {
      alert('Pick at least one field to test!'); return;
    }
    this.studyConfiguring = false;
    this.studyMode = true;
    this.studyState = null;
    this._studyQueue = this._buildStudyQueue();
    this._studyQueueIdx = 0;
    this._loadStudyQuestion();
    this.refreshFlashcard();
  },

  _buildStudyQueue() {
    const palace = this.activePalace();
    if (!palace) return [];
    const queue = [];
    palace.pins.forEach((pin, i) => {
      if (this.studyFields.image && (pin.image)) queue.push({ pinIndex: i, field: 'image' });
      if (this.studyFields.desc  && (pin.desc || pin.front)) queue.push({ pinIndex: i, field: 'desc' });
      if (this.studyFields.info  && (pin.info || pin.back))  queue.push({ pinIndex: i, field: 'info' });
    });
    return queue;
  },

  _loadStudyQuestion() {
    const q = this._studyQueue[this._studyQueueIdx];
    if (!q) { this.cancelStudy(); return; }
    this.studyState = { pinIndex: q.pinIndex, field: q.field, revealed: false, correct: false, answer: '' };
    this.activePinIndex = q.pinIndex;
    this.highlightPin();
  },

  submitStudyAnswer() {
    const input = document.getElementById('mp-study-input');
    if (!input) return;
    const answer = input.value.trim().toLowerCase();
    const palace = this.activePalace();
    if (!palace || !this.studyState) return;
    const pin = palace.pins[this.studyState.pinIndex];
    const correct = (this.studyState.field === 'image' ? (pin.image || '')
                   : this.studyState.field === 'desc'  ? (pin.desc || pin.front || '')
                   : (pin.info || pin.back || '')).toLowerCase();
    this.studyState.answer = answer;
    this.studyState.revealed = true;
    this.studyState.correct = correct.length > 0 && correct.includes(answer) || answer.includes(correct);
    this.refreshFlashcard();
  },

  revealStudyAnswer() {
    if (!this.studyState) return;
    this.studyState.revealed = true;
    this.studyState.correct = false;
    this.refreshFlashcard();
  },

  studyNext() {
    this._studyQueueIdx++;
    if (this._studyQueueIdx >= this._studyQueue.length) {
      alert('🎉 You finished studying all ' + this._studyQueue.length + ' questions!');
      this.cancelStudy(); return;
    }
    this._loadStudyQuestion();
    this.refreshFlashcard();
  },

  resetView() {
    this.pan = { x: 0, y: 0 };
    this.zoom = 1;
    const canvas = document.getElementById('mp-canvas');
    if (canvas) canvas.style.transform = `translate(0px,0px) scale(1)`;
    this._rescalePins();
  },

  _rescalePins() {
    const s = 1 / this.zoom;
    document.querySelectorAll('.mp-pin').forEach(el => {
      // counter-scale so pins stay visually constant size
      el.style.transform = `translate(-50%, -${50 + 50 * s}%) scale(${s})`;
    });
  },

  refreshFlashcard() {
    const palace = this.activePalace();
    if (palace?.type === '3d') {
      // In 3D mode, refresh just the card content
      const card = document.querySelector('.mp-flashcard');
      if (card) {
        card.innerHTML = this._renderCardContent(
          palace.pins[this.activePinIndex], this.activePinIndex, palace.pins.length
        );
      }
      window.MP3D?.updateActivePinIndex?.(this.activePinIndex);
      return;
    }
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
      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      const newZoom = Math.min(Math.max(this.zoom * factor, 0.2), 8);
      // Adjust pan so the point under the cursor stays fixed
      this.pan.x = mouseX - (mouseX - this.pan.x) * (newZoom / this.zoom);
      this.pan.y = mouseY - (mouseY - this.pan.y) * (newZoom / this.zoom);
      this.zoom = newZoom;
      canvas.style.transform = `translate(${this.pan.x}px,${this.pan.y}px) scale(${this.zoom})`;
      this._rescalePins();
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

// ─── IndexedDB image store ────────────────────────────────────────────────────
const MPIDB = {
  _db: null,
  async _open() {
    if (this._db) return this._db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('mp_images', 1);
      req.onupgradeneeded = e => {
        e.target.result.createObjectStore('images', { keyPath: 'id' });
      };
      req.onsuccess = e => { this._db = e.target.result; resolve(this._db); };
      req.onerror = e => reject(e);
    });
  },
  async saveImage(id, dataUrl) {
    const db = await this._open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('images', 'readwrite');
      tx.objectStore('images').put({ id, dataUrl });
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  },
  async deleteImage(id) {
    const db = await this._open();
    return new Promise((resolve) => {
      const tx = db.transaction('images', 'readwrite');
      tx.objectStore('images').delete(id);
      tx.oncomplete = resolve;
      tx.onerror = resolve;
    });
  },
  async loadAllImages() {
    const db = await this._open();
    return new Promise((resolve) => {
      const tx = db.transaction('images', 'readonly');
      const req = tx.objectStore('images').getAll();
      req.onsuccess = e => {
        const map = {};
        (e.target.result || []).forEach(r => { map[r.id] = r.dataUrl; });
        resolve(map);
      };
      req.onerror = () => resolve({});
    });
  }
};

// ─── Init ─────────────────────────────────────────────────────────────────────
MP.load();

function renderMemoryPalace() { return MP.render(); }
function setupMemoryPalaceListeners() {
  if (MP.activePalaceId) requestAnimationFrame(() => MP.bindCanvasEvents());
}

// ─── Map Picker ───────────────────────────────────────────────────────────────
const MPPicker = {
  _map: null,
  _layer: null,
  _targetPalaceId: null,

  layers: {
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attr: 'Esri World Imagery',
      exportService: 'World_Imagery'
    },
    street: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attr: '© OpenStreetMap contributors',
      exportService: null
    },
    topo: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      attr: 'Esri World Topo',
      exportService: 'World_Topo_Map'
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attr: '© CartoDB',
      exportService: null
    },
    ocean: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
      attr: 'Esri Ocean',
      exportService: 'Ocean/World_Ocean_Base'
    }
  },

  _currentLayerKey: 'satellite',

  open(palaceId) {
    this._targetPalaceId = palaceId;
    const modal = document.getElementById('mp-map-picker');
    if (!modal) return;
    modal.style.display = 'flex';

    if (!this._map) {
      this._map = L.map('mp-picker-map', { zoomControl: true }).setView([20, 0], 3);
      this._applyLayer('satellite');
      this._map.on('moveend zoomend', () => this._updateHint());
    } else {
      setTimeout(() => this._map.invalidateSize(), 100);
    }
  },

  close() {
    const modal = document.getElementById('mp-map-picker');
    if (modal) modal.style.display = 'none';
  },

  _applyLayer(key) {
    if (this._layer) this._map.removeLayer(this._layer);
    const def = this.layers[key];
    this._layer = L.tileLayer(def.url, { attribution: def.attr, maxZoom: 19 }).addTo(this._map);
    this._currentLayerKey = key;
    document.querySelectorAll('.mp-picker-layer-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('layer-' + key);
    if (btn) btn.classList.add('active');
  },

  setLayer(key) { this._applyLayer(key); },

  async search() {
    const q = document.getElementById('mp-picker-search')?.value?.trim();
    if (!q) return;
    const hint = document.querySelector('.mp-picker-hint');
    if (hint) hint.textContent = 'Searching…';
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`,
        { headers: { 'Accept-Language': 'en', 'User-Agent': 'TriolingoMemoryPalace/1.0' } }
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon, boundingbox } = data[0];
        const sw = [parseFloat(boundingbox[0]), parseFloat(boundingbox[2])];
        const ne = [parseFloat(boundingbox[1]), parseFloat(boundingbox[3])];
        this._map.fitBounds([sw, ne]);
        if (hint) hint.textContent = 'Found! Navigate, then click Capture.';
      } else {
        if (hint) hint.textContent = 'Location not found. Try a different search.';
      }
    } catch(e) {
      if (hint) hint.textContent = 'Search failed. Check your connection.';
    }
  },

  _updateHint() {
    const hint = document.querySelector('.mp-picker-hint');
    if (hint) hint.textContent = 'Navigate to any area, then click Capture.';
  },

  async capture() {
    const hint = document.querySelector('.mp-picker-hint');
    if (hint) hint.textContent = '📸 Capturing…';

    const bounds = this._map.getBounds();
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const def = this.layers[this._currentLayerKey];

    let imageUrl = null;

    // Try Esri Export API first (satellite, topo, ocean)
    if (def.exportService) {
      const bbox = `${sw.lng},${sw.lat},${ne.lng},${ne.lat}`;
      const w = 1200, h = 900;
      const esriUrl =
        `https://services.arcgisonline.com/arcgis/rest/services/${def.exportService}/MapServer/export` +
        `?bbox=${encodeURIComponent(bbox)}&bboxSR=4326&size=${w},${h}` +
        `&imageSR=4326&format=png32&transparent=false&f=image`;

      // Fetch via blob to convert to dataUrl
      try {
        const resp = await fetch(esriUrl);
        if (!resp.ok) throw new Error('Esri fetch failed');
        const blob = await resp.blob();
        imageUrl = await this._blobToDataUrl(blob);
      } catch(e) {
        console.warn('Esri export failed, falling back to canvas snapshot', e);
      }
    }

    // Fallback: snapshot Leaflet canvas tiles using html2canvas-style approach
    if (!imageUrl) {
      imageUrl = await this._snapshotLeaflet();
    }

    if (imageUrl) {
      this._applyImage(imageUrl);
    } else {
      if (hint) hint.textContent = '❌ Capture failed. Try a different layer or use URL.';
    }
  },

  // Snapshot by drawing leaflet tiles onto an offscreen canvas
  async _snapshotLeaflet() {
    try {
      const container = document.getElementById('mp-picker-map');
      const w = container.clientWidth;
      const h = container.clientHeight;
      const canvas = document.createElement('canvas');
      canvas.width = w * 2; canvas.height = h * 2;
      const ctx = canvas.getContext('2d');
      ctx.scale(2, 2);

      const tiles = container.querySelectorAll('.leaflet-tile-pane img.leaflet-tile');
      const promises = [...tiles].map(img => new Promise(resolve => {
        const r = img.getBoundingClientRect();
        const cr = container.getBoundingClientRect();
        const x = r.left - cr.left, y = r.top - cr.top;
        if (img.complete && img.naturalWidth > 0) {
          try { ctx.drawImage(img, x, y, r.width, r.height); } catch {}
          resolve();
        } else {
          img.onload = () => { try { ctx.drawImage(img, x, y, r.width, r.height); } catch {} resolve(); };
          img.onerror = resolve;
        }
      }));
      await Promise.all(promises);
      return canvas.toDataURL('image/png');
    } catch(e) {
      console.warn('Snapshot failed', e);
      return null;
    }
  },

  _blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  },

  useUrl() {
    const url = document.getElementById('mp-picker-url')?.value?.trim();
    if (!url) return;
    this._applyImage(url);
  },

  async _applyImage(imageUrl) {
    const hint = document.querySelector('.mp-picker-hint');
    if (hint) hint.textContent = '💾 Saving image…';
    const palace = MP.palaces.find(p => p.id === this._targetPalaceId);
    if (!palace) { this.close(); return; }
    await MP.saveImage(this._targetPalaceId, imageUrl);
    this.close();
    MP.openPalace(this._targetPalaceId);
  }
};
