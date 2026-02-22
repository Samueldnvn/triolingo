// Math.js - MathJax/KaTeX Integration for Calculus II Course

// MathJax Configuration
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      '[+]': ['noerrors', 'noproperties']
    }
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  loader: {
    load: ['[tex]/noerrors', '[tex]/noproperties']
  }
};

// Initialize MathJax when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Load MathJax dynamically
  loadMathJax();
});

function loadMathJax() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = function() {
    console.log('MathJax loaded successfully');
    // Re-render all math after load
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    }
  };

  script.onerror = function() {
    console.error('Failed to load MathJax');
  };
}

// Re-render math when dynamically adding content
function renderMath(element = document.body) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([element]).catch((err) => console.log('MathJax error:', err));
  }
}

// Utility function to safely render math strings
function renderMathInline(mathString) {
  return `<span class="math">${escapeMath(mathString)}</span>`;
}

function renderMathDisplay(mathString) {
  return `<div class="math-display">$$${escapeMath(mathString)}$$</div>`;
}

// Escape special characters for LaTeX
function escapeMath(str) {
  return str
    .replace(/&/g, '\\&')
    .replace(/</g, '\\lt ')
    .replace(/>/g, '\\gt ')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '\\text{'}');
}

// Common mathematical formulas for Calculus II
const Formulas = {
  // Integration formulas
  integrationByParts: '\\[\\int u \\, dv = uv - \\int v \\, du\\]',
  substitutionRule: '\\[\\int f(g(x)) g\'(x) \\, dx = \\int f(u) \\, du\\]',
  trigSubstitutions: {
    aMinusXSquared: '\\[\\int \\frac{1}{\\sqrt{a^2 - x^2}} \\, dx = \\arcsin\\left(\\frac{x}{a}\\right) + C\\]',
    aPlusXSquared: '\\[\\int \\frac{1}{a^2 + x^2} \\, dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C\\]',
    xSquaredMinusA: '\\[\\int \\frac{1}{x\\sqrt{x^2 - a^2}} \\, dx = \\frac{1}{a}\\arcsec\\left(\\frac{|x|}{a}\\right) + C\\]'
  },

  // Series formulas
  geometricSeries: '\\[\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}, \\quad |r| < 1\\]',
  geometricSeriesPartial: '\\[\\sum_{n=0}^{n} ar^k = \\frac{a(1-r^{n+1})}{1-r}, \\quad r \\neq 1\\]',
  
  // Convergence tests
  integralTest: '\\[\\text{If } \\int_1^{\\infty} f(x) \\, dx \\text{ converges, then } \\sum_{n=1}^{\\infty} f(n) \\text{ converges}\\]',
  
  // Power series
  powerSeries: '\\[\\sum_{n=0}^{\\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots\\]',
  taylorSeries: '\\[\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\\]',
  maclaurinSeries: '\\[\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n\\]',

  // Parametric equations
  arcLengthParametric: '\\[L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} \\, dt\\]',
  surfaceAreaParametric: '\\[S = 2\\pi \\int_a^b y \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} \\, dt\\]',

  // Polar coordinates
  areaPolar: '\\[A = \\frac{1}{2}\\int_\\alpha^\\beta r^2 \\, d\\theta\\]',
  arcLengthPolar: '\\[L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} \\, d\\theta\\]',

  // Differential equations
  separatingVariables: '\\[\\int \\frac{dy}{g(y)} = \\int f(x) \\, dx\\]',
  linearFirstOrder: '\\[y = e^{-\\int P(x)dx}\\left(\\int Q(x)e^{\\int P(x)dx} \\, dx + C\\right)\\]'
};

// Expose formulas globally
window.CalculusFormulas = Formulas;

// Auto-render math when DOM changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      renderMath();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('Math.js loaded - MathJax integration ready');