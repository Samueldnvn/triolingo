// Test the new calculus course
try {
  const CalculusLessons = require('./calculusGenerators_v3.js').CalculusLessons;
  
  console.log('Testing Calculus Course v3...\n');
  
  // Test Unit 1: Limits
  console.log('UNIT 1: Limits & Continuity');
  for (let i = 1; i <= 5; i++) {
    const lesson = CalculusLessons[`limitsLesson${i}`]();
    console.log(`  ✅ Lesson ${i}: ${lesson.title} (${lesson.questions.length} questions, ${lesson.xp} XP)`);
  }
  
  // Test Unit 2: Derivatives
  console.log('\nUNIT 2: Derivatives');
  for (let i = 1; i <= 6; i++) {
    const lesson = CalculusLessons[`derivativesLesson${i}`]();
    console.log(`  ✅ Lesson ${i}: ${lesson.title} (${lesson.questions.length} questions, ${lesson.xp} XP)`);
  }
  
  // Test Unit 3: Integration
  console.log('\nUNIT 3: Integration');
  for (let i = 1; i <= 5; i++) {
    const lesson = CalculusLessons[`integrationLesson${i}`]();
    console.log(`  ✅ Lesson ${i}: ${lesson.title} (${lesson.questions.length} questions, ${lesson.xp} XP)`);
  }
  
  // Test Unit 4: Review
  console.log('\nUNIT 4: Comprehensive Review');
  for (let i = 1; i <= 5; i++) {
    const lesson = CalculusLessons[`reviewLesson${i}`]();
    console.log(`  ✅ Lesson ${i}: ${lesson.title} (${lesson.questions.length} questions, ${lesson.xp} XP)`);
  }
  
  console.log('\n✅✅✅ All 21 lessons generated successfully! ✅✅✅');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}