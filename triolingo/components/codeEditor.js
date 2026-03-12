/**
 * Triolingo Code Editor Component
 * Reusable code editor with syntax highlighting and local LLM grading
 */

(function(window) {
  'use strict';

  // Default configuration
  const DEFAULT_CONFIG = {
    language: 'cpp',
    theme: 'dark',
    lineNumbers: true,
    autoIndent: true,
    tabSize: 2,
    readOnly: false,
    placeholder: '// Write your code here...',
    minHeight: '150px',
    maxHeight: '400px'
  };

  /**
   * Code Editor Class
   */
  class CodeEditor {
    constructor(container, options = {}) {
      this.container = typeof container === 'string' 
        ? document.getElementById(container) 
        : container;
      
      this.config = { ...DEFAULT_CONFIG, ...options };
      this.value = this.config.initialValue || '';
      this.isGrading = false;
      this.gradingResult = null;
      
      this.init();
    }

    /**
     * Initialize the code editor
     */
    init() {
      // Create editor structure
      this.editorContainer = this.createContainer();
      this.container.appendChild(this.editorContainer);
      
      // Create textarea for input
      this.textarea = this.createTextarea();
      this.editorContainer.appendChild(this.textarea);
      
      // Create syntax highlighted display
      this.display = this.createDisplay();
      this.editorContainer.appendChild(this.display);
      
      // Create toolbar
      this.toolbar = this.createToolbar();
      this.editorContainer.appendChild(this.toolbar);
      
      // Create feedback area
      this.feedbackArea = this.createFeedbackArea();
      this.container.appendChild(this.feedbackArea);
      
      // Bind events
      this.bindEvents();
      
      // Initial render
      this.render();
    }

    /**
     * Create the main container
     */
    createContainer() {
      const container = document.createElement('div');
      container.className = `code-editor-container code-editor-${this.config.theme}`;
      container.style.cssText = `
        position: relative;
        border: 2px solid #4a4a4a;
        border-radius: 8px;
        overflow: hidden;
        background: #1e1e1e;
        min-height: ${this.config.minHeight};
        max-height: ${this.config.maxHeight};
      `;
      return container;
    }

    /**
     * Create textarea for input
     */
    createTextarea() {
      const textarea = document.createElement('textarea');
      textarea.className = 'code-editor-textarea';
      textarea.value = this.value;
      textarea.placeholder = this.config.placeholder;
      textarea.readOnly = this.config.readOnly;
      textarea.spellcheck = false;
      textarea.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 16px;
        padding-left: ${this.config.lineNumbers ? '50px' : '16px'};
        font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
        font-size: 14px;
        line-height: 1.6;
        background: transparent;
        color: transparent;
        caret-color: #fff;
        border: none;
        outline: none;
        resize: none;
        white-space: pre;
        overflow: auto;
        z-index: 2;
        tab-size: ${this.config.tabSize};
      `;
      return textarea;
    }

    /**
     * Create syntax highlighted display
     */
    createDisplay() {
      const display = document.createElement('div');
      display.className = 'code-editor-display';
      display.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 16px;
        padding-left: ${this.config.lineNumbers ? '50px' : '16px'};
        font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
        font-size: 14px;
        line-height: 1.6;
        background: #1e1e1e;
        color: #d4d4d4;
        white-space: pre;
        overflow: auto;
        pointer-events: none;
        z-index: 1;
        tab-size: ${this.config.tabSize};
      `;
      return display;
    }

    /**
     * Create toolbar
     */
    createToolbar() {
      const toolbar = document.createElement('div');
      toolbar.className = 'code-editor-toolbar';
      toolbar.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background: #2d2d2d;
        border-top: 1px solid #4a4a4a;
      `;

      // Language indicator
      const language = document.createElement('span');
      language.className = 'code-editor-language';
      language.textContent = this.config.language.toUpperCase();
      language.style.cssText = `
        color: #888;
        font-size: 12px;
        font-weight: 500;
      `;

      // Submit button
      const submitBtn = document.createElement('button');
      submitBtn.className = 'code-editor-submit';
      submitBtn.textContent = 'Submit Code';
      submitBtn.style.cssText = `
        padding: 6px 16px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
      `;
      submitBtn.onmouseover = () => { submitBtn.style.background = '#45a049'; };
      submitBtn.onmouseout = () => { submitBtn.style.background = '#4CAF50'; };
      submitBtn.onclick = () => this.submitCode();

      toolbar.appendChild(language);
      toolbar.appendChild(submitBtn);

      return toolbar;
    }

    /**
     * Create feedback area
     */
    createFeedbackArea() {
      const feedbackArea = document.createElement('div');
      feedbackArea.className = 'code-editor-feedback';
      feedbackArea.style.cssText = `
        margin-top: 12px;
        padding: 12px;
        border-radius: 6px;
        font-size: 14px;
        display: none;
      `;
      return feedbackArea;
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
      // Sync scroll between textarea and display
      this.textarea.addEventListener('scroll', () => {
        this.display.scrollTop = this.textarea.scrollTop;
        this.display.scrollLeft = this.textarea.scrollLeft;
      });

      // Update display on input
      this.textarea.addEventListener('input', () => {
        this.value = this.textarea.value;
        this.render();
      });

      // Handle tab key
      this.textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !this.config.readOnly) {
          e.preventDefault();
          const start = this.textarea.selectionStart;
          const end = this.textarea.selectionEnd;
          const spaces = ' '.repeat(this.config.tabSize);
          
          this.value = this.value.substring(0, start) + spaces + this.value.substring(end);
          this.textarea.value = this.value;
          this.textarea.selectionStart = this.textarea.selectionEnd = start + this.config.tabSize;
          this.render();
        }
      });
    }

    /**
     * Render syntax highlighting
     */
    render() {
      const code = this.value;
      const highlighted = this.highlightCode(code);
      this.display.innerHTML = highlighted;
    }

    /**
     * Simple syntax highlighting (can be extended or replaced with Prism.js)
     */
    highlightCode(code) {
      let highlighted = this.escapeHtml(code);

      // Language-specific highlighting
      const rules = this.getHighlightingRules(this.config.language);
      
      rules.forEach(rule => {
        highlighted = highlighted.replace(rule.pattern, rule.replacement);
      });

      return highlighted;
    }

    /**
     * Escape HTML entities
     */
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    /**
     * Get highlighting rules for language
     */
    getHighlightingRules(language) {
      const commonRules = [
        {
          pattern: /&/g,
          replacement: '&amp;'
        },
        {
          pattern: /</g,
          replacement: '&lt;'
        },
        {
          pattern: />/g,
          replacement: '&gt;'
        }
      ];

      const cppRules = [
        ...commonRules,
        {
          pattern: /(\/\/.*$)/gm,
          replacement: '<span style="color: #6a9955; font-style: italic;">$1</span>'
        },
        {
          pattern: /(\/\*[\s\S]*?\*\/)/g,
          replacement: '<span style="color: #6a9955; font-style: italic;">$1</span>'
        },
        {
          pattern: /\b(int|float|double|char|bool|void|string|auto|const|static|class|struct|public|private|protected|virtual|override|final|template|typename|namespace|using|if|else|for|while|do|switch|case|break|continue|return|new|delete|this|nullptr|true|false)\b/g,
          replacement: '<span style="color: #569cd6;">$1</span>'
        },
        {
          pattern: /\b(std|cout|cin|endl|string|vector|map|set|list|array)\b/g,
          replacement: '<span style="color: #4ec9b0;">$1</span>'
        },
        {
          pattern: /"(?:[^"\\]|\\.)*"/g,
          replacement: '<span style="color: #ce9178;">$&</span>'
        },
        {
          pattern: /'(?:[^'\\]|\\.)*'/g,
          replacement: '<span style="color: #ce9178;">$&</span>'
        },
        {
          pattern: /\b(\d+\.?\d*)\b/g,
          replacement: '<span style="color: #b5cea8;">$1</span>'
        },
        {
          pattern: /([{}[\]();,<>])/g,
          replacement: '<span style="color: #ffd700;">$1</span>'
        }
      ];

      const pythonRules = [
        ...commonRules,
        {
          pattern: /(#.*$)/gm,
          replacement: '<span style="color: #6a9955; font-style: italic;">$1</span>'
        },
        {
          pattern: /\b(def|class|if|elif|else|for|while|try|except|finally|return|import|from|as|with|lambda|yield|global|nonlocal|pass|break|continue|True|False|None|and|or|not|in|is)\b/g,
          replacement: '<span style="color: #569cd6;">$1</span>'
        },
        {
          pattern: /\b(print|input|len|range|list|dict|set|tuple|str|int|float|bool|open|close|read|write|append|extend|pop|remove|sort|reverse|keys|values|items|get|update|clear|copy)\b/g,
          replacement: '<span style="color: #4ec9b0;">$1</span>'
        },
        {
          pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g,
          replacement: '<span style="color: #ce9178;">$&</span>'
        },
        {
          pattern: /\b(\d+\.?\d*)\b/g,
          replacement: '<span style="color: #b5cea8;">$1</span>'
        },
        {
          pattern: /([{}[\]():,])/g,
          replacement: '<span style="color: #ffd700;">$1</span>'
        }
      ];

      switch (language.toLowerCase()) {
        case 'cpp':
        case 'c':
        case 'c++':
          return cppRules;
        case 'python':
        case 'py':
          return pythonRules;
        default:
          return commonRules;
      }
    }

    /**
     * Submit code for grading
     */
    async submitCode() {
      if (this.isGrading || this.config.onGrade === undefined) {
        return;
      }

      this.isGrading = true;
      this.showFeedback('Grading...', 'info');

      try {
        const result = await this.config.onGrade(this.value);
        this.gradingResult = result;
        
        if (result.correct) {
          this.showFeedback(result.explanation || 'Correct! Great job!', 'success');
        } else {
          this.showFeedback(result.explanation || 'Not quite right. Try again!', 'error');
        }

        // Trigger callback
        if (this.config.onGraded) {
          this.config.onGraded(result);
        }
      } catch (error) {
        console.error('Grading error:', error);
        this.showFeedback('Error grading code. Please try again.', 'error');
      } finally {
        this.isGrading = false;
      }
    }

    /**
     * Show feedback message
     */
    showFeedback(message, type) {
      this.feedbackArea.style.display = 'block';
      this.feedbackArea.textContent = message;
      
      switch (type) {
        case 'success':
          this.feedbackArea.style.background = '#d4edda';
          this.feedbackArea.style.color = '#155724';
          this.feedbackArea.style.border = '1px solid #c3e6cb';
          break;
        case 'error':
          this.feedbackArea.style.background = '#f8d7da';
          this.feedbackArea.style.color = '#721c24';
          this.feedbackArea.style.border = '1px solid #f5c6cb';
          break;
        case 'info':
        default:
          this.feedbackArea.style.background = '#d1ecf1';
          this.feedbackArea.style.color = '#0c5460';
          this.feedbackArea.style.border = '1px solid #bee5eb';
      }
    }

    /**
     * Get current code value
     */
    getValue() {
      return this.value;
    }

    /**
     * Set code value
     */
    setValue(value) {
      this.value = value;
      this.textarea.value = value;
      this.render();
    }

    /**
     * Get grading result
     */
    getGradingResult() {
      return this.gradingResult;
    }

    /**
     * Clear grading result
     */
    clearGradingResult() {
      this.gradingResult = null;
      this.feedbackArea.style.display = 'none';
    }

    /**
     * Focus the editor
     */
    focus() {
      this.textarea.focus();
    }

    /**
     * Disable the editor
     */
    disable() {
      this.textarea.readOnly = true;
      this.textarea.style.opacity = '0.6';
    }

    /**
     * Enable the editor
     */
    enable() {
      this.textarea.readOnly = this.config.readOnly;
      this.textarea.style.opacity = '1';
    }
  }

  /**
   * Helper function to create code editor
   */
  window.CodeEditor = function(container, options) {
    return new CodeEditor(container, options);
  };

  /**
   * Create code editor for Triolingo lesson questions
   */
  window.createTriolingoCodeEditor = function(options) {
    const defaultOptions = {
      language: 'cpp',
      theme: 'dark',
      minHeight: '150px',
      onGrade: null,
      onGraded: null
    };

    return window.CodeEditor(options.container, { ...defaultOptions, ...options });
  };

})(window);

/**
 * Integration with Triolingo Question System
 */
if (typeof window.Triolingo !== 'undefined') {
  window.Triolingo.CodeEditor = {
    create: window.createTriolingoCodeEditor
  };
}