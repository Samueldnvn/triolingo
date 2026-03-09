// Direct test of integration lesson generation in app context
const courses = {
  calculus: {
    units: [
      {
        id: 3,
        title: 'Integration',
        description: 'Introduction to integration and area calculations',
        lessons: []
      }
    ]
  }
};

try {
  const CalculusLessons = require('./calculusGenerators_v3.js').CalculusLessons;
  
  // Generate integration lessons and add to course
  courses.calculus.units[0].lessons = [
    CalculusLessons.integrationLesson1(),
    CalculusLessons.integrationLesson2(),
    CalculusLessons.integrationLesson3(),
    CalculusLessons.integrationLesson4(),
    CalculusLessons.integrationLesson5()
  ];
  
  console.log('Generated Integration Lessons (App Context):\n');
  
  courses.calculus.units[0].lessons.forEach((lesson, i) => {
    console.log(`Lesson ${i + 1}: ${lesson.title}`);
    console.log(`  ID: ${lesson.id}`);
    console.log(`  Questions: ${lesson.questions.length}`);
    console.log(`  XP: ${lesson.xp}`);
    
    if (lesson.questions.length > 0) {
      console.log('  Question sample:');
      const q = lesson.questions[0];
      console.log(`    Type: ${q.type}`);
      console.log(`    Has question field: ${!!q.question}`);
      console.log(`    Has correctAnswer field: ${!!q.correctAnswer}`);
      console.log(`    Has prompt field: ${!!q.prompt}`);
      console.log(`    Question text: ${q.question ? q.question.substring(0, 50) : 'MISSING'}`);
    }
    console.log('');
  });
  
  // Test accessing lessons from the course structure
  console.log('\nAccessing lessons from course structure:');
  const integrationUnit = courses.calculus.units.find(u => u.id === 3);
  if (integrationUnit) {
    console.log(`  Found unit: ${integrationUnit.title}`);
    integrationUnit.lessons.forEach((lesson, i) => {
      console.log(`  Lesson ${i + 1}: ${lesson.id} - ${lesson.questions.length} questions`);
    });
  }
  
  console.log('\n✅ Integration lessons generate correctly in app context!');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}