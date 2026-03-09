/**
 * QUESTION SCHEMA
 * Standardized format for all questions in Triolingo
 *
 * This schema defines the structure for all question types and supports:
 * - Multiple choice
 * - Typing
 * - Fill in the blank
 * - Match pairs
 * - Images
 * - Programmatic diagrams
 */

/**
 * Base Question Schema
 * All question types inherit from this base structure
 */
const QuestionSchema = {
  // Required fields for all questions
  id: "string",              // Unique identifier (e.g., "calc_u1_l1_q1")
  type: "string",            // Question type: 'multiple_choice', 'typing', 'fill_blank', 'match_pairs'
  question: "string",        // The question text (HTML supported)

  // Optional fields (used by some question types)
  options: "array",          // Array of options (for multiple choice)
  correct: "number",         // Index of correct option (for multiple choice)
  correctAnswer: "string",   // Correct answer text (for typing)
  pairs: "array",            // Array of {left, right} pairs (for match pairs)

  // Content fields
  xp: "number",              // Experience points awarded
  explanation: "string",     // Explanation shown after answering

  // Visual content
  image: "string",           // Path to image file (optional)
  diagram: "string",         // Diagram generator function name (optional)
  diagramParams: "object",   // Parameters for diagram generation (optional)

  // Categorization
  category: "string",        // Category (e.g., "calculus", "spanish")
  lesson: "string",          // Lesson identifier (e.g., "u1_l1")
  difficulty: "string",      // 'basic', 'intermediate', 'advanced'
  tags: "array"              // Tags for filtering (optional)
};

/**
 * Question Type Schemas
 */

// Multiple Choice Question
const MultipleChoiceQuestion = {
  ...QuestionSchema,
  type: "multiple_choice",
  options: ["string", "string", "string", "string"],  // Exactly 4 options
  correct: "number",                                    // Index (0-3)
  explanation: "string",                               // Why this is correct
  xp: 4                                                // Default XP
};

// Typing Question
const TypingQuestion = {
  ...QuestionSchema,
  type: "typing",
  correctAnswer: "string",  // The expected answer
  prompt: "string",         // Input placeholder text
  caseSensitive: "boolean", // Whether case matters (default: false)
  xp: 5                     // Default XP
};

// Fill in the Blank Question
const FillBlankQuestion = {
  ...QuestionSchema,
  type: "fill_blank",
  correctAnswer: "string",  // The answer for the blank
  prompt: "string",         // Input placeholder text
  options: "array",         // Optional hints/options
  xp: 4                     // Default XP
};

// Match Pairs Question
const MatchPairsQuestion = {
  ...QuestionSchema,
  type: "match_pairs",
  pairs: [                   // Array of left-right pairs
    { left: "string", right: "string" },
    { left: "string", right: "string" },
    { left: "string", right: "string" },
    { left: "string", right: "string" }
  ],
  xp: 8                      // Default XP
};

/**
 * Image Support Schema
 */
const ImageSchema = {
  image: "string",           // Path relative to images/ directory
  caption: "string",         // Image caption
  position: "string",        // 'top', 'bottom', 'left', 'right' (default: 'top')
  size: "string",            // 'small', 'medium', 'large' (default: 'medium')
  alt: "string"              // Alt text for accessibility
};

/**
 * Programmatic Diagram Schema
 */
const DiagramSchema = {
  diagram: "string",         // Function name in diagram generator
  diagramParams: {           // Parameters to pass to diagram function
    type: "string",          // Diagram type
    data: "array|object",    // Data for the diagram
    title: "string",         // Diagram title
    xlabel: "string",        // X-axis label
    ylabel: "string",        // Y-axis label
    colors: "array",         // Color palette
    style: "string"          // Diagram style
  },
  // Diagram generators available:
  // - "barChart": Horizontal or vertical bar charts
  // - "lineChart": Multi-series line charts
  // - "pieChart": Pie charts
  // - "scatterPlot": Scatter plots
  // - "functionGraph": Mathematical function graphs
  // - "limitGraph": Limit visualization
  // - "integralGraph": Integral visualization
};

/**
 * Example Questions
 */

// Example: Multiple Choice with MathJax
const exampleMultipleChoice = {
  id: "calc_u1_l1_q1",
  type: "multiple_choice",
  category: "calculus",
  lesson: "u1_l1",
  difficulty: "basic",
  question: "What does the limit notation \\(\\lim_{x \\to a} f(x)\\) represent?",
  options: [
    "The value of f(x) at x = a",
    "The value f(x) approaches as x gets close to a",
    "The derivative of f(x)",
    "The integral of f(x)"
  ],
  correct: 1,
  explanation: "A limit represents the value that a function approaches as the input approaches a certain value.",
  xp: 4,
  diagram: "limitGraph",
  diagramParams: {
    type: "approach",
    function: "x^2",
    a: 2
  }
};

// Example: Typing with image
const exampleTyping = {
  id: "spanish_v1_l2_q5",
  type: "typing",
  category: "spanish",
  lesson: "v1_l2",
  difficulty: "basic",
  question: "Type the Spanish word for 'Hello':",
  image: "images/greeting_wave.png",
  prompt: "Type your answer:",
  correctAnswer: "Hola",
  caseSensitive: false,
  xp: 5
};

// Example: Match Pairs
const exampleMatchPairs = {
  id: "calc_u1_l3_q8",
  type: "match_pairs",
  category: "calculus",
  lesson: "u1_l3",
  difficulty: "intermediate",
  question: "Match each limit with its value:",
  pairs: [
    { left: "\\(\\lim_{x \\to 0} x\\)", right: "0" },
    { left: "\\(\\lim_{x \\to 1} x^2\\)", right: "1" },
    { left: "\\(\\lim_{x \\to 2} (x + 1)\\)", right: "3" },
    { left: "\\(\\lim_{x \\to 3} 2x\\)", right: "6" }
  ],
  xp: 8
};

// Example: Fill in Blank with diagram
const exampleFillBlank = {
  id: "calc_u2_l1_q3",
  type: "fill_blank",
  category: "calculus",
  lesson: "u2_l1",
  difficulty: "intermediate",
  question: "Evaluate \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\) _____",
  correctAnswer: "6",
  prompt: "Type your answer:",
  explanation: "Factor: \\(\\frac{(x-3)(x+3)}{x-3} = x + 3\\). Then: 3 + 3 = 6",
  diagram: "functionGraph",
  diagramParams: {
    function: "(x^2-9)/(x-3)",
    xRange: [-1, 5],
    showPoint: 3
  },
  xp: 5
};

/**
 * Export schemas and examples
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    QuestionSchema,
    MultipleChoiceQuestion,
    TypingQuestion,
    FillBlankQuestion,
    MatchPairsQuestion,
    ImageSchema,
    DiagramSchema,
    exampleMultipleChoice,
    exampleTyping,
    exampleMatchPairs,
    exampleFillBlank
  };
} else {
  window.QuestionSchema = {
    QuestionSchema,
    MultipleChoiceQuestion,
    TypingQuestion,
    FillBlankQuestion,
    MatchPairsQuestion,
    ImageSchema,
    DiagramSchema,
    exampleMultipleChoice,
    exampleTyping,
    exampleMatchPairs,
    exampleFillBlank
  };
}