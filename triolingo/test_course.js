// Test script to check if there's an error loading the course
try {
  // Load the generators
  const CalculusLessonsExpanded = require('./calculusGenerators_expanded.js');
  
  console.log('Loading loaded successfully');
  
  // Try to generate a lesson
  console.log('Generating lesson 1...');
  const lesson1 = CalculusLessonsExpanded.unit1Limits(1);
  console.log('Lesson 1 generated:', lesson1.id);
  console.log('Questions:', lesson1.questions.length);
  
  console.log('✅ No errors!');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
}