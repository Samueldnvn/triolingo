/**
 * QUESTION DATABASE - SPANISH VOCABULARY
 * Database for Spanish vocabulary lessons
 *
 * Structure:
 * - Organized by lesson
 * - Each lesson has multiple question types
 * - Questions can include images
 * - Questions are indexed for easy access
 */

const SpanishVocabDatabase = {
  unit: "Spanish Vocabulary",
  title: "Spanish Language Learning",
  lessons: {
    // ========================================================================
    // LESSON 1: Greetings
    // ========================================================================
    "v1_l1": {
      id: "spanish_v1_l1",
      title: "Greetings",
      icon: "spanish_icons/greeting.png",
      xp: 60,
      difficulty: "basic",
      questions: [
        // Multiple Choice - Translation
        {
          id: "v1_l1_q1",
          type: "multiple_choice",
          question: "What does 'Hola' mean in English?",
          options: ["Goodbye", "Hello", "Thank you", "Please"],
          correct: 1,
          explanation: "'Hola' is Spanish for 'Hello'",
          xp: 4,
          image: "images/greeting_wave.png"
        },
        {
          id: "v1_l1_q2",
          type: "multiple_choice",
          question: "How do you say 'Goodbye' in Spanish?",
          options: ["Hola", "Gracias", "Adiós", "Por favor"],
          correct: 2,
          explanation: "'Adiós' means 'Goodbye' in Spanish",
          xp: 4,
          image: "images/goodbye_wave.png"
        },
        {
          id: "v1_l1_q3",
          type: "multiple_choice",
          question: "What does 'Buenos días' mean?",
          options: ["Good night", "Good morning", "Good afternoon", "Goodbye"],
          correct: 1,
          explanation: "'Buenos días' means 'Good morning' in Spanish",
          xp: 4
        },
        {
          id: "v1_l1_q4",
          type: "multiple_choice",
          question: "How do you say 'Thank you' in Spanish?",
          options: ["De nada", "Gracias", "Por favor", "Lo siento"],
          correct: 1,
          explanation: "'Gracias' means 'Thank you' in Spanish",
          xp: 4
        },

        // Typing - Translate to Spanish
        {
          id: "v1_l1_q5",
          type: "typing",
          question: "Type 'Hello' in Spanish:",
          correctAnswer: "Hola",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },
        {
          id: "v1_l1_q6",
          type: "typing",
          question: "Type 'Goodbye' in Spanish:",
          correctAnswer: "Adiós",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },
        {
          id: "v1_l1_q7",
          type: "typing",
          question: "Type 'Thank you' in Spanish:",
          correctAnswer: "Gracias",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },

        // Match Pairs
        {
          id: "v1_l1_q8",
          type: "match_pairs",
          question: "Match the Spanish greeting with its English meaning:",
          pairs: [
            { left: "Hola", right: "Hello" },
            { left: "Adiós", right: "Goodbye" },
            { left: "Gracias", right: "Thank you" },
            { left: "Por favor", right: "Please" }
          ],
          xp: 8
        },

        // Fill in the Blank
        {
          id: "v1_l1_q9",
          type: "fill_blank",
          question: "_____ días. (Good morning)",
          correctAnswer: "Buenos",
          prompt: "Type your answer:",
          xp: 4
        }
      ]
    },

    // ========================================================================
    // LESSON 2: Numbers
    // ========================================================================
    "v1_l2": {
      id: "spanish_v1_l2",
      title: "Numbers",
      icon: "spanish_icons/numbers.png",
      xp: 70,
      difficulty: "basic",
      questions: [
        // Multiple Choice
        {
          id: "v1_l2_q1",
          type: "multiple_choice",
          question: "What is 'one' in Spanish?",
          options: ["dos", "uno", "tres", "cuatro"],
          correct: 1,
          explanation: "'Uno' means 'one' in Spanish",
          xp: 4
        },
        {
          id: "v1_l2_q2",
          type: "multiple_choice",
          question: "What number is 'cinco'?",
          options: ["3", "4", "5", "6"],
          correct: 2,
          explanation: "'Cinco' means 'five' in Spanish",
          xp: 4
        },
        {
          id: "v1_l2_q3",
          type: "multiple_choice",
          question: "How do you say 'ten' in Spanish?",
          options: ["ocho", "nueve", "diez", "once"],
          correct: 2,
          explanation: "'Diez' means 'ten' in Spanish",
          xp: 4
        },

        // Typing
        {
          id: "v1_l2_q4",
          type: "typing",
          question: "Type '2' in Spanish:",
          correctAnswer: "dos",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },
        {
          id: "v1_l2_q5",
          type: "typing",
          question: "Type '7' in Spanish:",
          correctAnswer: "siete",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },

        // Match Pairs
        {
          id: "v1_l2_q6",
          type: "match_pairs",
          question: "Match the Spanish numbers with English:",
          pairs: [
            { left: "uno", right: "1" },
            { left: "tres", right: "3" },
            { left: "cinco", right: "5" },
            { left: "siete", right: "7" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 3: Colors
    // ========================================================================
    "v1_l3": {
      id: "spanish_v1_l3",
      title: "Colors",
      icon: "spanish_icons/colors.png",
      xp: 65,
      difficulty: "basic",
      questions: [
        // Multiple Choice
        {
          id: "v1_l3_q1",
          type: "multiple_choice",
          question: "What color is 'rojo'?",
          options: ["Blue", "Green", "Red", "Yellow"],
          correct: 2,
          explanation: "'Rojo' means 'red' in Spanish",
          xp: 4,
          image: "images/colors/red.png"
        },
        {
          id: "v1_l3_q2",
          type: "multiple_choice",
          question: "What is 'blue' in Spanish?",
          options: ["verde", "azul", "rojo", "negro"],
          correct: 1,
          explanation: "'Azul' means 'blue' in Spanish",
          xp: 4
        },
        {
          id: "v1_l3_q3",
          type: "multiple_choice",
          question: "What does 'amarillo' mean?",
          options: ["Orange", "Pink", "Yellow", "Purple"],
          correct: 2,
          explanation: "'Amarillo' means 'yellow' in Spanish",
          xp: 4
        },

        // Typing
        {
          id: "v1_l3_q4",
          type: "typing",
          question: "Type 'green' in Spanish:",
          correctAnswer: "verde",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },

        // Match Pairs
        {
          id: "v1_l3_q5",
          type: "match_pairs",
          question: "Match the Spanish colors with English:",
          pairs: [
            { left: "rojo", right: "red" },
            { left: "azul", right: "blue" },
            { left: "verde", right: "green" },
            { left: "negro", right: "black" }
          ],
          xp: 8
        }
      ]
    },

    // ========================================================================
    // LESSON 4: Family
    // ========================================================================
    "v1_l4": {
      id: "spanish_v1_l4",
      title: "Family",
      icon: "spanish_icons/family.png",
      xp: 75,
      difficulty: "intermediate",
      questions: [
        // Multiple Choice
        {
          id: "v1_l4_q1",
          type: "multiple_choice",
          question: "What does 'madre' mean?",
          options: ["Father", "Mother", "Sister", "Brother"],
          correct: 1,
          explanation: "'Madre' means 'mother' in Spanish",
          xp: 4
        },
        {
          id: "v1_l4_q2",
          type: "multiple_choice",
          question: "How do you say 'father' in Spanish?",
          options: ["hermano", "padre", "hijo", "tío"],
          correct: 1,
          explanation: "'Padre' means 'father' in Spanish",
          xp: 4
        },
        {
          id: "v1_l4_q3",
          type: "multiple_choice",
          question: "What is 'hermana'?",
          options: ["Brother", "Sister", "Mother", "Father"],
          correct: 1,
          explanation: "'Hermana' means 'sister' in Spanish",
          xp: 4
        },

        // Typing
        {
          id: "v1_l4_q4",
          type: "typing",
          question: "Type 'brother' in Spanish:",
          correctAnswer: "hermano",
          prompt: "Type your answer:",
          caseSensitive: false,
          xp: 5
        },

        // Match Pairs
        {
          id: "v1_l4_q5",
          type: "match_pairs",
          question: "Match the Spanish family terms with English:",
          pairs: [
            { left: "madre", right: "mother" },
            { left: "padre", right: "father" },
            { left: "hermano", right: "brother" },
            { left: "hermana", right: "sister" }
          ],
          xp: 8
        }
      ]
    }
  }
};

/**
 * Export the database
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SpanishVocabDatabase };
} else {
  window.SpanishVocabDatabase = SpanishVocabDatabase;
}