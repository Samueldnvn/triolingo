// =====================================================================
// ADDITIONAL SPANISH VOCABULARY
// =====================================================================

const spanishVocab = {
  greetings: [
    { spanish: 'Hola', english: 'Hello', type: 'greeting' },
    { spanish: 'Adiós', english: 'Goodbye', type: 'greeting' },
    { spanish: 'Buenos días', english: 'Good morning', type: 'greeting' },
    { spanish: 'Buenas tardes', english: 'Good afternoon', type: 'greeting' },
    { spanish: 'Buenas noches', english: 'Good night', type: 'greeting' },
    { spanish: 'Gracias', english: 'Thank you', type: 'greeting' },
    { spanish: 'De nada', english: 'You\'re welcome', type: 'greeting' },
    { spanish: 'Por favor', english: 'Please', type: 'greeting' },
    { spanish: 'Perdón', english: 'Excuse me', type: 'greeting' },
    { spanish: 'Lo siento', english: 'I\'m sorry', type: 'greeting' }
  ],
  numbers: [
    { spanish: 'uno', english: 'one', type: 'number' },
    { spanish: 'dos', english: 'two', type: 'number' },
    { spanish: 'tres', english: 'three', type: 'number' },
    { spanish: 'cuatro', english: 'four', type: 'number' },
    { spanish: 'cinco', english: 'five', type: 'number' },
    { spanish: 'seis', english: 'six', type: 'number' },
    { spanish: 'siete', english: 'seven', type: 'number' },
    { spanish: 'ocho', english: 'eight', type: 'number' },
    { spanish: 'nueve', english: 'nine', type: 'number' },
    { spanish: 'diez', english: 'ten', type: 'number' },
    { spanish: 'once', english: 'eleven', type: 'number' },
    { spanish: 'doce', english: 'twelve', type: 'number' },
    { spanish: 'veinte', english: 'twenty', type: 'number' },
    { spanish: 'treinta', english: 'thirty', type: 'number' },
    { spanish: 'cien', english: 'hundred', type: 'number' }
  ],
  colors: [
    { spanish: 'rojo', english: 'red', type: 'color' },
    { spanish: 'azul', english: 'blue', type: 'color' },
    { spanish: 'verde', english: 'green', type: 'color' },
    { spanish: 'amarillo', english: 'yellow', type: 'color' },
    { spanish: 'negro', english: 'black', type: 'color' },
    { spanish: 'blanco', english: 'white', type: 'color' },
    { spanish: 'naranja', english: 'orange', type: 'color' },
    { spanish: 'morado', english: 'purple', type: 'color' },
    { spanish: 'marrón', english: 'brown', type: 'color' },
    { spanish: 'rosa', english: 'pink', type: 'color' },
    { spanish: 'gris', english: 'gray', type: 'color' }
  ],
  family: [
    { spanish: 'madre', english: 'mother', type: 'family' },
    { spanish: 'padre', english: 'father', type: 'family' },
    { spanish: 'hermano', english: 'brother', type: 'family' },
    { spanish: 'hermana', english: 'sister', type: 'family' },
    { spanish: 'hijo', english: 'son', type: 'family' },
    { spanish: 'hija', english: 'daughter', type: 'family' },
    { spanish: 'abuela', english: 'grandmother', type: 'family' },
    { spanish: 'abuelo', english: 'grandfather', type: 'family' },
    { spanish: 'tío', english: 'uncle', type: 'family' },
    { spanish: 'tía', english: 'aunt', type: 'family' },
    { spanish: 'primo', english: 'cousin (male)', type: 'family' },
    { spanish: 'prima', english: 'cousin (female)', type: 'family' }
  ],
  food: [
    { spanish: 'pan', english: 'bread', type: 'food' },
    { spanish: 'agua', english: 'water', type: 'food' },
    { spanish: 'leche', english: 'milk', type: 'food' },
    { spanish: 'queso', english: 'cheese', type: 'food' },
    { spanish: 'huevos', english: 'eggs', type: 'food' },
    { spanish: 'manzana', english: 'apple', type: 'food' },
    { spanish: 'plátano', english: 'banana', type: 'food' },
    { spanish: 'carne', english: 'meat', type: 'food' },
    { spanish: 'pollo', english: 'chicken', type: 'food' },
    { spanish: 'pescado', english: 'fish', type: 'food' }
  ],
  meals: [
    { spanish: 'desayuno', english: 'breakfast', type: 'meal' },
    { spanish: 'almuerzo', english: 'lunch', type: 'meal' },
    { spanish: 'cena', english: 'dinner', type: 'meal' },
    { spanish: 'snack', english: 'snack', type: 'meal' },
    { spanish: 'comer', english: 'to eat', type: 'verb' },
    { spanish: 'beber', english: 'to drink', type: 'verb' },
    { spanish: 'tener sed', english: 'to be thirsty', type: 'expression' },
    { spanish: 'tener hambre', english: 'to be hungry', type: 'expression' }
  ],
  verbs: [
    { spanish: 'ser', english: 'to be (permanent)', type: 'verb' },
    { spanish: 'estar', english: 'to be (temporary)', type: 'verb' },
    { spanish: 'tener', english: 'to have', type: 'verb' },
    { spanish: 'ir', english: 'to go', type: 'verb' },
    { spanish: 'hacer', english: 'to do', type: 'verb' },
    { spanish: 'hablar', english: 'to speak', type: 'verb' },
    { spanish: 'escuchar', english: 'to listen', type: 'verb' },
    { spanish: 'leer', english: 'to read', type: 'verb' },
    { spanish: 'escribir', english: 'to write', type: 'verb' },
    { spanish: 'ver', english: 'to see', type: 'verb' },
    { spanish: 'mirar', english: 'to watch', type: 'verb' }
  ],
  pronouns: [
    { spanish: 'yo', english: 'I', type: 'pronoun' },
    { spanish: 'tú', english: 'you (informal)', type: 'pronoun' },
    { spanish: 'usted', english: 'you (formal)', type: 'pronoun' },
    { spanish: 'él/ella', english: 'he/she', type: 'pronoun' },
    { spanish: 'nosotros', english: 'we', type: 'pronoun' },
    { spanish: 'ustedes', english: 'you all (Latin Am.)', type: 'pronoun' },
    { spanish: 'vosotros', english: 'you all (Spain)', type: 'pronoun' },
    { spanish: 'ellos/ellas', english: 'they', type: 'pronoun' },
    { spanish: 'mi', english: 'my (masculine)', type: 'pronoun' },
    { spanish: 'mi', english: 'my (feminine)', type: 'pronoun' },
    { spanish: 'mis', english: 'my (plural)', type: 'pronoun' },
    { spanish: 'tu', english: 'your (informal)', type: 'pronoun' },
    { spanish: 'su', english: 'your (formal)', type: 'pronoun' }
  ],
  common: [
    { spanish: 'sí', english: 'yes', type: 'common' },
    { spanish: 'no', english: 'no', type: 'common' },
    { spanish: 'y', english: 'and', type: 'common' },
    { spanish: 'o', english: 'or', type: 'common' },
    { spanish: 'pero', english: 'but', type: 'common' },
    { spanish: 'muy', english: 'very', type: 'common' },
    { spanish: 'también', english: 'also', type: 'common' },
    { spanish: 'aquí', english: 'here', type: 'common' },
    { spanish: 'allí', english: 'there', type: 'common' },
    { spanish: 'ahora', english: 'now', type: 'common' },
    { spanish: 'después', english: 'later', type: 'common' },
    { spanish: 'siempre', english: 'always', type: 'common' }
  ]
};

// Export for use in courses
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { spanishVocab };
}