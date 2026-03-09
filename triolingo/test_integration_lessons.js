// Test integration lessons specifically
try {
  const CalculusLessons = require('./calculusGenerators_v3.js').CalculusLessons;
  
  console.log('Testing Unit 3: Integration Lessons...\n');
  
  for (let i = 1; i <= 5; i++) {
    console.log(`\nIntegration Lesson ${i}:`);
    
    try {
      const lesson = CalculusLessons[`integrationLesson${i}`]();
      console.log(`  ✅ Generated: ${lesson.title}`);
      console.log(`     ID: ${lesson.id}`);
      console.log(`     Questions: ${lesson.questions.length}`);
      console.log(`     XP: ${lesson.xp}`);
      
      if (lesson.questions.length === 0) {
        console.log(`  ⚠️ WARNING: No questions generated!`);
      } else {
        lesson.questions.forEach((q, idx) => {
          if (q && q.question) {
            console.log(`     Q${idx + 1}: ${q.type} - ${q.question.substring(0, 50)}...`);
          } else {
            console.log(`     Q${idx + 1}: ${q.type} - (no question text)`);
          }
        });
      }
    } catch (error) {
      console.log(`  ❌ ERROR: ${error.message}`);
      console.log(`     Stack: ${error.stack.split('\n').slice(0, 3).join('\n')}`);
    }
  }
  
  console.log('\n✅ Integration lessons test complete!');
  
} catch (error) {
  console.error('❌ Fatal error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}