// Minimal test to see what error we get
console.log('Starting test...');

// Simulate loading files in order
try {
  // Load themeManager (might need for courses)
  console.log('1. Reading themeManager.js...');
  const fs = require('fs');
  eval(fs.readFileSync('themeManager.js', 'utf8'));
  
  console.log('2. Reading soundManager.js...');
  eval(fs.readFileSync('soundManager.js', 'utf8'));
  
  console.log('3. Reading spanishVocab.js...');
  eval(fs.readFileSync('spanishVocab.js', 'utf8'));
  
  console.log('4. Reading lessonGenerators.js...');
  eval(fs.readFileSync('lessonGenerators.js', 'utf8'));
  
  console.log('5. Reading calculusVocab.js...');
  eval(fs.readFileSync('calculusVocab.js', 'utf8'));
  
  console.log('6. Reading calculusGenerators_expanded.js...');
  const calcGenCode = fs.readFileSync('calculusGenerators_expanded.js', 'utf8');
  console.log('   File size:', calcGenCode.length, 'bytes');
  eval(calcGenCode);
  
  console.log('7. Checking if CalculusLessonsExpanded exists...');
  if (typeof CalculusLessonsExpanded === 'undefined') {
    throw new Error('CalculusLessonsExpanded is undefined!');
  }
  console.log('   ✅ CalculusLessonsExpanded loaded');
  
  console.log('8. Trying to generate a lesson...');
  const lesson = CalculusLessonsExpanded.unit1Limits(1);
  console.log('   ✅ Lesson generated:', lesson.id);
  console.log('   Questions:', lesson.questions.length);
  
  console.log('\n✅ All tests passed!');
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}