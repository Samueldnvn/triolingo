// Lesson Editor — inline editing for all Triolingo lessons
// Edits saved to localStorage immediately, exportable as lessonEdits.json

const LessonEditor = {
  // ── Storage ────────────────────────────────────────────────────────────────
  STORAGE_KEY: 'triolingo_lesson_edits',

  getEdits() {
    try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}'); }
    catch { return {}; }
  },

  saveEdit(lessonId, data) {
    const edits = this.getEdits();
    edits[lessonId] = { ...edits[lessonId], ...data, _editedAt: new Date().toISOString() };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(edits));
  },

  getEdit(lessonId) {
    return this.getEdits()[lessonId] || null;
  },

  // Apply stored edits on top of a lesson object (call at load time)
  applyEdits(lesson) {
    if (!lesson?.id) return lesson;
    const edit = this.getEdit(lesson.id);
    if (!edit) return lesson;
    return { ...lesson, ...edit };
  },

  // Count pending edits
  pendingCount() { return Object.keys(this.getEdits()).length; },

  // ── Open editor modal ──────────────────────────────────────────────────────
  open(lessonId) {
    // Find the lesson in courses
    let lesson = null;
    for (const course of Object.values(window.courses || {})) {
      for (const unit of (course.units || [])) {
        const found = (unit.lessons || []).find(l => l.id === lessonId);
        if (found) { lesson = found; break; }
      }
      if (lesson) break;
    }
    if (!lesson) { alert('Lesson not found: ' + lessonId); return; }

    // Apply any existing edits
    const merged = this.applyEdits(lesson);

    // Build modal HTML
    const questionsHtml = (merged.questions || []).map((q, i) => this._questionRow(q, i)).join('');

    document.getElementById('le-modal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'le-modal';
    modal.className = 'le-modal-backdrop';
    modal.innerHTML = `
      <div class="le-modal">
        <div class="le-modal-header">
          <span class="le-modal-title">✏️ Edit Lesson: <em>${merged.title || lessonId}</em></span>
          <button class="le-close-btn" onclick="LessonEditor.close()">✕</button>
        </div>
        <div class="le-modal-body">
          <input type="hidden" id="le-lesson-id" value="${lessonId}">

          <label class="le-label">📝 Lesson Text (Markdown)</label>
          <textarea id="le-lesson-text" class="le-textarea le-textarea-large"
                    placeholder="Enter lesson content in Markdown…">${this._escape(merged.lessonText || '')}</textarea>

          <div class="le-section-header">
            <span>❓ Questions (${(merged.questions||[]).length})</span>
            <button class="le-add-btn" onclick="LessonEditor.addQuestion()">+ Add Question</button>
          </div>
          <div id="le-questions-list" class="le-questions-list">${questionsHtml}</div>
        </div>
        <div class="le-modal-footer">
          <span id="le-save-status" class="le-save-status"></span>
          <button class="le-btn le-btn-secondary" onclick="LessonEditor.close()">Cancel</button>
          <button class="le-btn le-btn-primary" onclick="LessonEditor.save()">💾 Save</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    // Close on backdrop click
    modal.addEventListener('click', e => { if (e.target === modal) this.close(); });
  },

  _questionRow(q, i) {
    const typeOpts = ['multiple-choice','fill-blank','typing','code']
      .map(t => `<option value="${t}" ${q.type===t?'selected':''}>${t}</option>`).join('');
    const optsHtml = (q.options || []).map((o, j) =>
      `<div class="le-opt-row">
        <input class="le-input le-opt-input" placeholder="Option ${j+1}" value="${this._escape(o)}">
        <button class="le-icon-btn" onclick="this.closest('.le-opt-row').remove()">✕</button>
       </div>`
    ).join('');
    return `
      <div class="le-question-block" data-qi="${i}">
        <div class="le-q-header">
          <span class="le-q-num">Q${i+1}</span>
          <select class="le-select le-q-type">${typeOpts}</select>
          <input class="le-input le-q-xp" type="number" placeholder="XP" value="${q.xp||4}" style="width:60px">
          <button class="le-icon-btn le-danger" onclick="this.closest('.le-question-block').remove()">🗑</button>
        </div>
        <textarea class="le-textarea le-q-text" placeholder="Question text…">${this._escape(q.question||'')}</textarea>
        <div class="le-opts-container">${optsHtml}</div>
        <button class="le-add-btn" onclick="LessonEditor.addOption(this)" style="margin:4px 0">+ Add Option</button>
        <input class="le-input le-q-correct" placeholder="Correct answer (exact text)…" value="${this._escape(Array.isArray(q.correctAnswer)?q.correctAnswer[0]:q.correctAnswer||'')}">
        <textarea class="le-textarea le-q-explanation" placeholder="Explanation…">${this._escape(q.explanation||'')}</textarea>
      </div>
    `;
  },

  addQuestion() {
    const list = document.getElementById('le-questions-list');
    const i = list.querySelectorAll('.le-question-block').length;
    const div = document.createElement('div');
    div.innerHTML = this._questionRow({type:'multiple-choice',question:'',options:[],correctAnswer:'',explanation:'',xp:4}, i);
    list.appendChild(div.firstElementChild);
  },

  addOption(btn) {
    const container = btn.previousElementSibling;
    const j = container.querySelectorAll('.le-opt-row').length;
    const div = document.createElement('div');
    div.innerHTML = `<div class="le-opt-row">
      <input class="le-input le-opt-input" placeholder="Option ${j+1}" value="">
      <button class="le-icon-btn" onclick="this.closest('.le-opt-row').remove()">✕</button>
    </div>`;
    container.appendChild(div.firstElementChild);
  },

  save() {
    const lessonId = document.getElementById('le-lesson-id').value;
    const lessonText = document.getElementById('le-lesson-text').value;

    // Collect questions
    const questions = [];
    document.querySelectorAll('#le-questions-list .le-question-block').forEach(block => {
      const type    = block.querySelector('.le-q-type').value;
      const xp      = parseInt(block.querySelector('.le-q-xp').value) || 4;
      const text    = block.querySelector('.le-q-text').value.trim();
      const correct = block.querySelector('.le-q-correct').value.trim();
      const expl    = block.querySelector('.le-q-explanation').value.trim();
      const options = [...block.querySelectorAll('.le-opt-input')].map(i => i.value.trim()).filter(Boolean);
      if (!text) return;
      questions.push({ id: lessonId + '-q' + questions.length, type, xp, question: text,
        options, correctAnswer: options.length ? options.find(o => o.toLowerCase().includes(correct.toLowerCase())) || correct : correct,
        explanation: expl });
    });

    // Save to localStorage
    this.saveEdit(lessonId, { lessonText, questions });

    // Apply to live in-memory lesson so change is visible instantly
    for (const course of Object.values(window.courses || {})) {
      for (const unit of (course.units || [])) {
        const lesson = (unit.lessons || []).find(l => l.id === lessonId);
        if (lesson) { lesson.lessonText = lessonText; lesson.questions = questions; }
      }
    }

    const status = document.getElementById('le-save-status');
    if (status) { status.textContent = '✅ Saved!'; setTimeout(() => status.textContent = '', 2000); }

    // Refresh lesson view if currently showing this lesson
    if (window.currentLesson?.id === lessonId) {
      window.currentLesson.lessonText = lessonText;
      window.currentLesson.questions = questions;
      if (window.renderView) renderView('lesson');
    }
  },

  close() { document.getElementById('le-modal')?.remove(); },

  // ── Export edits as JSON ───────────────────────────────────────────────────
  exportEdits() {
    const edits = this.getEdits();
    const count = Object.keys(edits).length;
    if (!count) { alert('No edits to export yet.'); return; }
    const blob = new Blob([JSON.stringify(edits, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'lessonEdits.json'; a.click();
    alert(`Exported ${count} edited lesson(s).\n\nReplace triolingo/data/lessonEdits.json with this file, then commit and push to make edits permanent for all users.`);
  },

  clearEdits() {
    if (!confirm(`Clear ALL ${this.pendingCount()} local edits? This cannot be undone.`)) return;
    localStorage.removeItem(this.STORAGE_KEY);
    alert('Edits cleared.');
  },

  // ── Load bundled edits from data/lessonEdits.json ─────────────────────────
  async loadBundled() {
    try {
      const data = await fetch('data/lessonEdits.json').then(r => r.json());
      if (!data || typeof data !== 'object') return;
      const edits = this.getEdits();
      let applied = 0;
      // Merge bundled into localStorage only if no local edit exists for that lesson
      for (const [id, edit] of Object.entries(data)) {
        if (!edits[id]) { edits[id] = edit; applied++; }
      }
      if (applied) localStorage.setItem(this.STORAGE_KEY, JSON.stringify(edits));
      // Apply to live courses
      this.applyAllToCourses();
    } catch { /* no bundled edits */ }
  },

  // Apply all localStorage edits to live course data
  applyAllToCourses() {
    const edits = this.getEdits();
    if (!Object.keys(edits).length) return;
    for (const course of Object.values(window.courses || {})) {
      for (const unit of (course.units || [])) {
        for (const lesson of (unit.lessons || [])) {
          const edit = edits[lesson.id];
          if (edit) {
            if (edit.lessonText !== undefined) lesson.lessonText = edit.lessonText;
            if (edit.questions  !== undefined) lesson.questions  = edit.questions;
          }
        }
      }
    }
  },

  _escape(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
};

// Auto-load bundled edits after courses are ready (called from app.js)
window.LessonEditor = LessonEditor;
