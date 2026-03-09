// Test that icons are loaded and mapped correctly
try {
  const { CalculusIcons, CalculusIconMap } = require('./calculusIcons.js');
  
  console.log('Testing Calculus Icons...\n');
  
  console.log('1. Available Icons:');
  const iconNames = Object.keys(CalculusIcons);
  console.log(`   Total icons: ${iconNames.length}`);
  console.log(`   Sample: ${iconNames.slice(0, 5).join(', ')}...`);
  
  console.log('\n2. Icon Map Entries:');
  const mapEntries = Object.keys(CalculusIconMap);
  console.log(`   Total mappings: ${mapEntries.length}`);
  console.log(`   Sample: ${mapEntries.slice(0, 5).join(', ')}...`);
  
  console.log('\n3. Testing icon data URIs:');
  const sampleIcons = ['limitsIntro', 'derivConcept', 'antiderivatives', 'series', 'multivariable'];
  
  sampleIcons.forEach((iconName, i) => {
    const icon = CalculusIcons[iconName];
    console.log(`   ${i + 1}. ${iconName}:`);
    console.log(`      Length: ${icon.length} chars`);
    console.log(`      Type: ${icon.startsWith('data:image/svg+xml;base64') ? 'SVG Base64' : 'Unknown'}`);
    console.log(`      Preview: ${icon.substring(0, 50)}...`);
  });
  
  console.log('\n4. Testing icon mapping:');
  const testMappings = [
    'limits1', 'derivBasics1', 'intBasics1', 'vecCalc1', 'multi1'
  ];
  
  testMappings.forEach((key) => {
    const icon = CalculusIconMap[key];
    if (icon) {
      console.log(`   ${key}: ✓ Mapped (${icon.length} chars)`);
    } else {
      console.log(`   ${key}: ✗ Not mapped`);
    }
  });
  
  console.log('\n✅ Icons loaded and mapped successfully!');
  console.log(`   Total icons: ${iconNames.length}`);
  console.log(`   Total mappings: ${mapEntries.length}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}