// Test if app.js can be loaded
console.log('Testing app.js...');

const fs = require('fs');
const appCode = fs.readFileSync('app.js', 'utf8');
console.log('app.js size:', appCode.length, 'bytes');

try {
  // Try to see if there are syntax errors first
  const acorn = require('acorn');
  acorn.parse(appCode, { ecmaVersion: 2022, sourceType: 'script' });
  console.log('✅ No syntax errors');
  
  // Try to evaluate a small part
  console.log('✅ app.js parses correctly');
} catch (error) {
  console.error('❌ Error parsing app.js:', error.message);
  console.error('Location:', error.loc);
}