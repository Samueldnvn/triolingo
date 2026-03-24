// questionEditor.js — Standalone Question Editor page
// Renders inside #view-container when data-view="question-editor"

const QE = {
  // ── State ────────────────────────────────────────────────────────────────
  selectedCourse: null,
  selectedUnit:   null,
  selectedLesson: null,
  searchQuery:    '',
  filterType:     'all',

  // ── Entry point: called by renderView ────────────────────────────────────
  render() {
    return `
      <div class="qe-root" id="qe-root">
        <div class="qe-sidebar">
          ${this._renderSidebar()}
        </div>
        <div class="qe-main" id="qe-main">
          ${this._renderMain()}
        </div>
      </div>`;
  },

  // ── Left sidebar: course → unit → lesson tree ────────────────────────────
  _renderSidebar() {
    const courses = window.courses || {};
    const courseItems = Object.entries(courses).map(([id, course]) => {
      const isOpen = this.selectedCourse === id;
      const unitItems = isOpen ? this._renderUnitTree(id, course) : '';
      return `
        <div class="qe-course-item ${isOpen ? 'open' : ''}"
             onclick="QE.selectCourse('${id}')">
          <span class="qe-course-icon">📚</span>
          <span class="qe-course-name">${course.name || id}</span>
          <span class="qe-chevron">${isOpen ? '▾' : '▸'}</span>
        </div>
        ${unitItems}`;
    }).join('');

    return `
      <div class="qe-sidebar-header">
        <span class="qe-sidebar-title">Courses</span>
      </div>
      <div class="qe-tree">${courseItems || '<p class="qe-empty">No courses loaded.</p>'}</div>`;
  },

  _renderUnitTree(courseId, course) {
    return (course.units || []).map(unit => {
      const uid = unit.unitId || unit.id || unit.unitName;
      const isOpen = this.selectedUnit === uid;
      const lessonItems = isOpen ? (unit.lessons || []).map(lesson => {
        const isActive = this.selectedLesson === lesson.id;
        const count = (lesson.questions || []).length;
        return `
          <div class="qe-lesson-item ${isActive ? 'active' : ''}"
               onclick="QE.selectLesson('${courseId}','${uid}','${lesson.id}')">
            <span class="qe-lesson-name">${lesson.title || lesson.id}</span>
            <span class="qe-q-count">${count}q</span>
          </div>`;
      }).join('') : '';

      const lessonCount = (unit.lessons || []).length;
      return `
        <div class="qe-unit-item ${isOpen ? 'open' : ''}"
             onclick="QE.selectUnit('${uid}',event)">
          <span class="qe-unit-name">${unit.unitName || unit.title || uid}</span>
          <span class="qe-unit-meta">${lessonCount} lessons</span>
        </div>
        ${lessonItems}`;
    }).join('');
  },

  // ── Main panel: question list for selected lesson ─────────────────────────
  _renderMain() {
    if (!this.selectedLesson) {
      return `
        <div class="qe-welcome">
          <div class="qe-welcome-icon">📋</div>
          <h2>Question Editor</h2>
          <p>Select a course → unit → lesson from the left panel to view and edit its questions.</p>
        </div>`;
    }

    const lesson = this._getLesson();
    if (!lesson) return `<div class="qe-welcome"><p>Lesson not found.</p></div>`;

    const questions = lesson.questions || [];
    const filtered = this._filterQuestions(questions);

    return `
      <div class="qe-main-header">
        <div class="qe-main-title-row">
          <h2 class="qe-main-title">${lesson.title || lesson.id}</h2>
          <button class="qe-add-btn" onclick="QE.openAddQuestion()">＋ Add Question</button>
        </div>
        <div class="qe-toolbar">
          <input class="qe-search" placeholder="🔍 Search questions…" value="${this._escape(this.searchQuery)}"
                 oninput="QE.setSearch(this.value)">
          <select class="qe-filter-type" onchange="QE.setFilter(this.value)">
            <option value="all" ${this.filterType==='all'?'selected':''}>All types</option>
            <option value="typing" ${this.filterType==='typing'?'selected':''}>Typing</option>
            <option value="multiple" ${this.filterType==='multiple'?'selected':''}>Multiple Choice</option>
            <option value="multiple-choice" ${this.filterType==='multiple-choice'?'selected':''}>Multiple Choice (v2)</option>
            <option value="code" ${this.filterType==='code'?'selected':''}>Code</option>
            <option value="fill-blank" ${this.filterType==='fill-blank'?'selected':''}>Fill in Blank</option>
          </select>
          <span class="qe-count-badge">${filtered.length} / ${questions.length} questions</span>
        </div>
      </div>
      <div class="qe-questions-list" id="qe-questions-list">
        ${filtered.length ? filtered.map((q, i) => this._renderQuestionCard(q, i)).join('') : '<p class="qe-empty">No questions match your filter.</p>'}
      </div>`;
  },

  _filterQuestions(questions) {
    return questions.filter(q => {
      const matchType = this.filterType === 'all' || q.type === this.filterType;
      const matchSearch = !this.searchQuery ||
        (q.question || '').toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (q.explanation || '').toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchType && matchSearch;
    });
  },

  _renderQuestionCard(q, i) {
    const typeLabel = { typing: '⌨️ Typing', multiple: '☑️ Multiple', 'multiple-choice': '☑️ Multiple', code: '💻 Code', 'fill-blank': '📝 Fill Blank' }[q.type] || q.type;
    const answer = Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : (q.correctAnswer || q.correct ?? '');
    const optionsHtml = (q.options || []).length
      ? `<div class="qe-q-options">${(q.options).map((o,oi) => {
          const isCorrect = Array.isArray(q.correctAnswer)
            ? q.correctAnswer.includes(String(oi)) || q.correctAnswer.includes(o)
            : (q.correctAnswer === o || String(q.correct) === String(oi));
          return `<span class="qe-q-option ${isCorrect ? 'correct' : ''}">${o}</span>`;
        }).join('')}</div>` : '';

    return `
      <div class="qe-question-card" data-qid="${this._escape(q.id)}">
        <div class="qe-q-top">
          <span class="qe-q-type-badge">${typeLabel}</span>
          <span class="qe-q-xp">⭐ ${q.xp || 4} XP</span>
          <div class="qe-q-actions">
            <button class="qe-action-btn" onclick="QE.openEditQuestion('${this._escape(q.id)}')">✏️</button>
            <button class="qe-action-btn danger" onclick="QE.deleteQuestion('${this._escape(q.id)}')">🗑</button>
          </div>
        </div>
        <p class="qe-q-text">${this._escape(q.question || '')}</p>
        ${optionsHtml}
        ${answer ? `<div class="qe-q-answer">✅ <em>${this._escape(String(answer))}</em></div>` : ''}
        ${q.explanation ? `<div class="qe-q-explanation">💡 ${this._escape(q.explanation)}</div>` : ''}
        ${q.codeTemplate ? `<pre class="qe-q-code">${this._escape(q.codeTemplate)}</pre>` : ''}
      </div>`;
  },

  // ── Selection handlers ────────────────────────────────────────────────────
  selectCourse(id) {
    this.selectedCourse = this.selectedCourse === id ? null : id;
    this.selectedUnit = null;
    this.selectedLesson = null;
    this._refresh();
  },

  selectUnit(uid, e) {
    e.stopPropagation();
    this.selectedUnit = this.selectedUnit === uid ? null : uid;
    this.selectedLesson = null;
    this._refresh();
  },

  selectLesson(courseId, unitId, lessonId) {
    this.selectedCourse = courseId;
    this.selectedUnit   = unitId;
    this.selectedLesson = lessonId;
    this.searchQuery = '';
    this.filterType  = 'all';
    this._refresh();
  },

  setSearch(v) { this.searchQuery = v; this._refreshMain(); },
  setFilter(v) { this.filterType = v; this._refreshMain(); },

  // ── Edit / Add / Delete ───────────────────────────────────────────────────
  openAddQuestion() {
    this._openQuestionModal(null);
  },

  openEditQuestion(qid) {
    const lesson = this._getLesson();
    const q = (lesson?.questions || []).find(q => q.id === qid);
    if (q) this._openQuestionModal(q);
  },

  _openQuestionModal(q) {
    const isEdit = !!q;
    const title = isEdit ? '✏️ Edit Question' : '➕ Add Question';
    const typeOpts = ['typing','multiple','multiple-choice','code','fill-blank']
      .map(t => `<option value="${t}" ${(q?.type||'typing')===t?'selected':''}>${t}</option>`).join('');
    const opts = (q?.options || []);
    const optRows = opts.map((o, i) => this._optRow(o, i)).join('');
    const correctVal = Array.isArray(q?.correctAnswer) ? q.correctAnswer.join(', ') : (q?.correctAnswer ?? (q?.correct !== undefined ? q.correct : ''));

    document.getElementById('qe-modal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'qe-modal';
    modal.className = 'le-modal-backdrop';
    modal.innerHTML = `
      <div class="le-modal">
        <div class="le-modal-header">
          <span class="le-modal-title">${title}</span>
          <button class="le-close-btn" onclick="QE.closeModal()">✕</button>
        </div>
        <div class="le-modal-body">
          <input type="hidden" id="qe-edit-id" value="${this._escape(q?.id||'')}">

          <div style="display:flex;gap:10px;margin-bottom:10px">
            <div style="flex:1">
              <label class="le-label">Type</label>
              <select id="qe-type" class="le-select" style="width:100%" onchange="QE._onTypeChange()">
                ${typeOpts}
              </select>
            </div>
            <div>
              <label class="le-label">XP</label>
              <input id="qe-xp" type="number" class="le-input" value="${q?.xp||4}" style="width:70px">
            </div>
          </div>

          <label class="le-label">Question Text</label>
          <textarea id="qe-question" class="le-textarea" style="min-height:80px;margin-bottom:10px"
                    placeholder="Enter the question…">${this._escape(q?.question||'')}</textarea>

          <div id="qe-options-section">
            <div class="le-section-header">
              <span>Options (for multiple choice)</span>
              <button class="le-add-btn" onclick="QE._addOptRow()">+ Add Option</button>
            </div>
            <div id="qe-opt-list" class="le-questions-list" style="gap:6px">${optRows}</div>
          </div>

          <label class="le-label" style="margin-top:10px">Correct Answer</label>
          <input id="qe-correct" class="le-input" style="margin-bottom:10px"
                 placeholder="Exact text, or option index (0,1,2…)"
                 value="${this._escape(String(correctVal))}">

          <label class="le-label">Explanation</label>
          <textarea id="qe-explanation" class="le-textarea" style="min-height:60px;margin-bottom:10px"
                    placeholder="Why is this the answer?">${this._escape(q?.explanation||'')}</textarea>

          <div id="qe-code-section">
            <label class="le-label">Code Template (for code questions)</label>
            <textarea id="qe-code-template" class="le-textarea" style="min-height:100px;font-family:monospace"
                      placeholder="#include <iostream>&#10;int main() { ... }">${this._escape(q?.codeTemplate||'')}</textarea>
          </div>
        </div>
        <div class="le-modal-footer">
          <span id="qe-modal-status" class="le-save-status"></span>
          <button class="le-btn le-btn-secondary" onclick="QE.closeModal()">Cancel</button>
          <button class="le-btn le-btn-primary" onclick="QE.saveQuestion(${isEdit})">
            ${isEdit ? '💾 Save' : '➕ Add'}
          </button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) QE.closeModal(); });
    QE._onTypeChange();
  },

  _optRow(val, i) {
    return `<div class="le-opt-row">
      <input class="le-input le-opt-input" placeholder="Option ${i+1}" value="${this._escape(val)}">
      <button class="le-icon-btn" onclick="this.closest('.le-opt-row').remove()">✕</button>
    </div>`;
  },

  _addOptRow() {
    const list = document.getElementById('qe-opt-list');
    const i = list.querySelectorAll('.le-opt-row').length;
    const div = document.createElement('div');
    div.innerHTML = this._optRow('', i);
    list.appendChild(div.firstElementChild);
  },

  _onTypeChange() {
    const type = document.getElementById('qe-type')?.value;
    const codeSection = document.getElementById('qe-code-section');
    if (codeSection) codeSection.style.display = type === 'code' ? 'block' : 'none';
  },

  saveQuestion(isEdit) {
    const lesson = this._getLesson();
    if (!lesson) return;

    const id      = document.getElementById('qe-edit-id').value;
    const type    = document.getElementById('qe-type').value;
    const xp      = parseInt(document.getElementById('qe-xp').value) || 4;
    const question = document.getElementById('qe-question').value.trim();
    const correctRaw = document.getElementById('qe-correct').value.trim();
    const explanation = document.getElementById('qe-explanation').value.trim();
    const codeTemplate = document.getElementById('qe-code-template').value;
    const options = [...document.querySelectorAll('#qe-opt-list .le-opt-input')]
      .map(i => i.value.trim()).filter(Boolean);

    if (!question) { alert('Please enter question text.'); return; }

    // Build correctAnswer in the right format
    let correctAnswer = correctRaw;
    if (type === 'typing' || type === 'fill-blank') {
      correctAnswer = correctRaw.split(',').map(s => s.trim()).filter(Boolean);
      if (correctAnswer.length === 1) correctAnswer = correctAnswer[0];
    } else if (type === 'multiple' || type === 'multiple-choice') {
      // Try numeric index first, else match by text
      const idx = parseInt(correctRaw);
      correctAnswer = isNaN(idx) ? correctRaw : idx;
    }

    const newQ = { id: id || `q-${Date.now()}`, type, xp, question, options, correctAnswer, explanation };
    if (codeTemplate && type === 'code') newQ.codeTemplate = codeTemplate;
    // Clean up empty fields
    if (!options.length) delete newQ.options;

    lesson.questions = lesson.questions || [];
    if (isEdit && id) {
      const idx = lesson.questions.findIndex(q => q.id === id);
      if (idx >= 0) lesson.questions[idx] = newQ; else lesson.questions.push(newQ);
    } else {
      lesson.questions.push(newQ);
    }

    // Persist via LessonEditor
    if (window.LessonEditor) {
      LessonEditor.saveEdit(lesson.id, { questions: lesson.questions, lessonText: lesson.lessonText });
    }

    const status = document.getElementById('qe-modal-status');
    if (status) { status.textContent = '✅ Saved!'; setTimeout(() => QE.closeModal(), 600); }
    else this.closeModal();
  },

  deleteQuestion(qid) {
    if (!confirm('Delete this question? This cannot be undone.')) return;
    const lesson = this._getLesson();
    if (!lesson) return;
    lesson.questions = (lesson.questions || []).filter(q => q.id !== qid);
    if (window.LessonEditor) {
      LessonEditor.saveEdit(lesson.id, { questions: lesson.questions, lessonText: lesson.lessonText });
    }
    this._refreshMain();
  },

  closeModal() { document.getElementById('qe-modal')?.remove(); },

  // ── Helpers ───────────────────────────────────────────────────────────────
  _getLesson() {
    if (!this.selectedCourse || !this.selectedLesson) return null;
    const course = window.courses?.[this.selectedCourse];
    for (const unit of (course?.units || [])) {
      const uid = unit.unitId || unit.id || unit.unitName;
      if (uid == this.selectedUnit || !this.selectedUnit) {
        const lesson = (unit.lessons || []).find(l => l.id === this.selectedLesson);
        if (lesson) return lesson;
      }
    }
    return null;
  },

  _refresh() {
    if (window.currentView === 'question-editor') {
      const container = document.getElementById('view-container');
      if (container) container.innerHTML = this.render();
    }
  },

  _refreshMain() {
    const main = document.getElementById('qe-main');
    if (main) main.innerHTML = this._renderMain();
  },

  _escape(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
};

window.QE = QE;
