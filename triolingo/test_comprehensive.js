// Test comprehensive calculus course
try {
  const CalculusPlaceholderLessons = require('./calculusGenerators_comprehensive.js').CalculusPlaceholderLessons;
  
  console.log('Testing Comprehensive Calculus 1-3 Course...\n');
  
  // Get all lesson functions
  const lessonFunctions = Object.keys(CalculusPlaceholderLessons).filter(key => 
    !key.startsWith('_') && typeof CalculusPlaceholderLessons[key] === 'function'
  );
  
  console.log(`Found ${lessonFunctions.length} lesson generators\n`);
  
  // Define lesson groups by ID pattern
  const groups = {
    'Calculus 1 - Unit 1 (Limits)': lessonFunctions.filter(f => f.includes('limits')),
    'Calculus 1 - Unit 2 (Derivatives Basics)': lessonFunctions.filter(f => f.includes('derivBasics')),
    'Calculus 1 - Unit 3 (Derivatives Apps)': lessonFunctions.filter(f => f.includes('derivApps')),
    'Calculus 1 - Unit 4 (Integration Basics)': lessonFunctions.filter(f => f.includes('intBasics')),
    'Calculus 1 - Unit 5 (Integration Tech)': lessonFunctions.filter(f => f.includes('intTech')),
    'Calculus 1 - Unit 6 (Integration Apps)': lessonFunctions.filter(f => f.includes('intApps')),
    'Calculus 2 - Unit 7 (Advanced Integration)': lessonFunctions.filter(f => f.includes('advInt')),
    'Calculus 2 - Unit 8 (Integration Apps)': lessonFunctions.filter(f => f.includes('appInt')),
    'Calculus 2 - Unit 9 (Sequences)': lessonFunctions.filter(f => f.includes('seq')),
    'Calculus 2 - Unit 10 (Series)': lessonFunctions.filter(f => f.includes('series')),
    'Calculus 2 - Unit 11 (Power Series)': lessonFunctions.filter(f => f.includes('power')),
    'Calculus 2 - Unit 12 (Parametric)': lessonFunctions.filter(f => f.includes('param')),
    'Calculus 3 - Unit 13 (Vectors)': lessonFunctions.filter(f => f.includes('vec3d')),
    'Calculus 3 - Unit 14 (Vector Functions)': lessonFunctions.filter(f => f.includes('vecFun')),
    'Calculus 3 - Unit 15 (Multivariable)': lessonFunctions.filter(f => f === 'multi1' || f === 'multi2' || f === 'multi3' || f === 'multi4' || f === 'multi5' || f === 'multi6' || f === 'multi7'),
    'Calculus 3 - Unit 16 (Multiple Integrals)': lessonFunctions.filter(f => f.includes('multiInt')),
    'Calculus 3 - Unit 17 (Vector Calculus)': lessonFunctions.filter(f => f.includes('vecCalc')),
    'Calculus 3 - Unit 18 (Final)': lessonFunctions.filter(f => f.includes('calc3Final'))
  };
  
  let totalUnits = 0;
  let totalLessons = 0;
  let totalQuestions = 0;
  let totalXP = 0;
  
  for (const [groupName, fns] of Object.entries(groups)) {
    if (fns.length === 0) continue;
    
    console.log('='.repeat(60));
    console.log(`${groupName}`);
    console.log('='.repeat(60));
    
    for (const fn of fns) {
      const lesson = CalculusPlaceholderLessons[fn]();
      console.log(`  ✅ ${lesson.title}`);
      console.log(`     Questions: ${lesson.questions.length} (XP: ${lesson.xp})`);
      console.log(`     Difficulty: ${lesson.difficulty}`);
      
      totalLessons++;
      totalQuestions += lesson.questions.length;
      totalXP += lesson.xp;
    }
    
    totalUnits++;
    console.log(`\nTotal: ${fns.length} lessons\n`);
  }
  
  console.log('='.repeat(60));
  console.log('COURSE SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total Units: ${totalUnits}`);
  console.log(`Total Lessons: ${totalLessons}`);
  console.log(`Total Questions: ${totalQuestions}`);
  console.log(`Total XP: ${totalXP}`);
  console.log(`Average Questions per Lesson: ${(totalQuestions / totalLessons).toFixed(1)}`);
  console.log(`Average XP per Lesson: ${(totalXP / totalLessons).toFixed(0)}`);
  
  console.log('\n✅✅✅ All lessons generated successfully! ✅✅✅');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}