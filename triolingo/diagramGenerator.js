/**
 * DIAGRAM GENERATOR
 * Programmatic diagram generation for questions using matplotlib (Python backend)
 *
 * This module defines the diagram schemas and generation functions.
 * Diagrams are generated server-side via Python and served as images.
 */

const DiagramTypes = {
  // Limit Visualizations
  "limitGraph": {
    description: "Visualizes limit approaching from both sides",
    params: {
      type: "string",      // "approach", "oneSided", "infinite"
      function: "string",  // Mathematical function (e.g., "x^2")
      a: "number",         // The limit point
      xRange: "array",     // [min, max] for x-axis
      showApproach: "boolean" // Show approach arrows
    },
    examples: [
      {
        type: "approach",
        function: "x^2",
        a: 2
      },
      {
        type: "specialLimit",
        type: "sinx_over_x"
      }
    ]
  },

  "functionGraph": {
    description: "Plots a mathematical function",
    params: {
      function: "string",  // Mathematical function (e.g., "(x^2-9)/(x-3)")
      xRange: "array",     // [min, max] for x-axis
      showPoint: "number", // Highlight this x value
      title: "string",     // Graph title
      xlabel: "string",    // X-axis label
      ylabel: "string"     // Y-axis label
    },
    examples: [
      {
        function: "(x^2-9)/(x-3)",
        xRange: [0, 5],
        showPoint: 3
      }
    ]
  },

  "oneSidedLimit": {
    description: "Visualizes one-sided limits",
    params: {
      type: "string",      // "equal", "unequal"
      a: "number",         // The limit point
      L: "number",         // Limit value (for equal) or [L_left, L_right] (for unequal)
      showArrows: "boolean" // Show approach arrows
    },
    examples: [
      {
        type: "equal",
        a: 2,
        L: 5
      },
      {
        type: "unequal",
        a: 0,
        L: [1, 2]
      }
    ]
  },

  "integralGraph": {
    description: "Visualizes definite integrals with shading",
    params: {
      function: "string",  // Function to integrate
      bounds: "array",     // [a, b] integration bounds
      showRiemann: "boolean", // Show Riemann sum approximation
      rectangles: "number"   // Number of rectangles for Riemann
    },
    examples: [
      {
        function: "x^2",
        bounds: [0, 2],
        showRiemann: true,
        rectangles: 4
      }
    ]
  },

  "derivativeGraph": {
    description: "Visualizes derivative as slope of tangent line",
    params: {
      function: "string",  // Original function
      point: "number",     // Point to show derivative
      showTangent: "boolean", // Show tangent line
      showSecant: "boolean"   // Show secant line approximation
    },
    examples: [
      {
        function: "x^2",
        point: 2,
        showTangent: true
      }
    ]
  },

  "barChart": {
    description: "Horizontal or vertical bar chart",
    params: {
      data: "object",      // {label: value} pairs
      title: "string",     // Chart title
      xlabel: "string",    // X-axis label
      ylabel: "string",    // Y-axis label
      horizontal: "boolean", // Horizontal bars
      colors: "array"      // Color palette
    },
    examples: [
      {
        data: {"A": 10, "B": 20, "C": 15},
        title: "Sample Chart",
        horizontal: true
      }
    ]
  },

  "lineChart": {
    description: "Multi-series line chart",
    params: {
      series: "object",    // {name: [values]} pairs
      title: "string",     // Chart title
      xlabel: "string",    // X-axis label
      ylabel: "string",    // Y-axis label
      colors: "array"      // Color palette
    },
    examples: [
      {
        series: {
          "Series 1": [1, 2, 3, 4],
          "Series 2": [2, 4, 6, 8]
        },
        title: "Trend Chart"
      }
    ]
  },

  "specialLimit": {
    description: "Special limits (sin(x)/x, etc.)",
    params: {
      type: "string",      // "sinx_over_x", "cosx_minus_1_over_x", etc.
      showProof: "boolean" // Show proof visualization
    },
    examples: [
      {
        type: "sinx_over_x"
      }
    ]
  },

  // ========================================================================
  // UNIT 2: DERIVATIVES DIAGRAMS (Seaborn Style)
  // ========================================================================
  "tangentLine": {
    description: "Visualizes tangent line and derivative as slope",
    params: {
      function: "string",  // Mathematical function (e.g., "x^2")
      point: "number",     // Point to show tangent line
      style: "string",     // "seaborn" for colored style
      colors: "array"      // Color palette for seaborn style
    },
    examples: [
      {
        function: "x^2",
        point: 1,
        style: "seaborn"
      }
    ]
  },

  "powerRule": {
    description: "Visualizes power rule with multiple function plots",
    params: {
      powers: "array",     // Array of powers to plot (e.g., [1, 2, 3])
      xRange: "array",     // [min, max] for x-axis
      style: "string",     // "seaborn" for colored style
      showLegend: "boolean" // Show legend
    },
    examples: [
      {
        powers: [1, 2, 3, 4],
        xRange: [0, 2],
        style: "seaborn"
      }
    ]
  },

  "productRule": {
    description: "Visualizes product rule with f, g, and f*g",
    params: {
      f: "string",         // First function
      g: "string",         // Second function
      xRange: "array",     // [min, max] for x-axis
      style: "string",     // "seaborn" for colored style
      showComponents: "boolean" // Show f, g, and product
    },
    examples: [
      {
        f: "x",
        g: "x+1",
        xRange: [0, 2],
        style: "seaborn"
      }
    ]
  },

  "quotientRule": {
    description: "Visualizes quotient rule with f, g, and f/g",
    params: {
      f: "string",         // Numerator function
      g: "string",         // Denominator function
      xRange: "array",     // [min, max] for x-axis
      style: "string",     // "seaborn" for colored style
      showComponents: "boolean" // Show f, g, and quotient
    },
    examples: [
      {
        f: "x",
        g: "x+1",
        xRange: [0, 2],
        style: "seaborn"
      }
    ]
  }
};

/**
 * Generate diagram URL
 * Returns URL to fetch pre-generated diagram or trigger generation
 */
function getDiagramUrl(diagramType, params) {
  const baseUrl = "/api/diagrams/generate";

  // Encode parameters
  const paramString = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(JSON.stringify(params[key]))}`)
    .join("&");

  return `${baseUrl}?type=${diagramType}&${paramString}`;
}

/**
 * Pre-generated diagram paths
 * For diagrams that are static and don't need dynamic generation
 */
const PreGeneratedDiagrams = {
  "limit_quadratic": "diagrams/limit_quadratic.png",
  "limit_sinx_over_x": "diagrams/limit_sinx_over_x.png",
  "limit_rational": "diagrams/limit_rational.png",
  "one_sided_quadratic": "diagrams/one_sided_quadratic.png",
  "integral_basic": "diagrams/integral_basic.png",
  "derivative_geometric": "diagrams/derivative_geometric.png"
};

/**
 * Get diagram for a question
 * Checks if question has a diagram, returns the path or URL
 */
function getQuestionDiagram(question) {
  if (!question.diagram) return null;

  // Check for pre-generated diagram
  if (PreGeneratedDiagrams[question.diagram]) {
    return PreGeneratedDiagrams[question.diagram];
  }

  // Generate dynamic diagram URL
  if (question.diagramParams) {
    return getDiagramUrl(question.diagram, question.diagramParams);
  }

  return null;
}

/**
 * Export diagram utilities
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DiagramTypes,
    getDiagramUrl,
    PreGeneratedDiagrams,
    getQuestionDiagram
  };
} else {
  window.DiagramUtils = {
    DiagramTypes,
    getDiagramUrl,
    PreGeneratedDiagrams,
    getQuestionDiagram
  };
}