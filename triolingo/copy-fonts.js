#!/usr/bin/env node

/**
 * Copy fonts from OpenClaw FONTS directory to triolingo/fonts
 * and generate font configuration
 */

const fs = require('fs');
const path = require('path');

// Font files to copy
const fonts = [
  { id: 'rugeboogie', name: 'Ruge Boogie', file: 'RugeBoogie-Regular.ttf' },
  { id: 'crazycurlz', name: 'Crazy Curlz', file: 'Crazy Curlz.ttf' },
  { id: 'ikeasans', name: 'IKEA Sans', file: 'ikea.ttf' },
  { id: 'curlyqs', name: 'Curly Qs', file: 'CurlyQs.ttf' },
  { id: 'bmwglobal', name: 'BMW Type Global', file: 'BMW Type Global Regular.ttf' },
  { id: 'neuehaas', name: 'Neue Haas Grotesk', file: 'Neue Haas Grotesk Display Pro 75 Bold.ttf' },
  { id: 'holidayindia', name: 'Holiday India', file: 'Holiday India.otf' }, // May not exist
  { id: 'introscript', name: 'Intro Script Demo', file: 'IntroScriptDemo-Medium.otf' },
  { id: 'minecraft', name: 'Minecraft', file: 'MinecraftRegular-Bmg3.otf' },
  { id: 'volvonovum', name: 'Volvo Novum', file: 'Volvo Novum Light.ttf' },
  { id: 'udmarugo', name: 'Udmarugo', file: 'FOT-UDMarugo_SmallPr6-H.otf' },
  { id: 'mario64', name: 'Mario Font 64', file: 'marioFont 64.ttf' },
  { id: 'mariov3', name: 'Mario Font v3', file: 'MARIO_Font_v3_Solid.otf' },
  { id: 'americantypewriter', name: 'American Typewriter Bold', file: 'AmericanTypewriter-Bold.ttf' }, // May not exist
  { id: 'ckchick', name: 'CK Chick', file: 'CK Chick.ttf' },
  { id: 'oldenglish', name: 'Monotype Old English', file: 'Monotype Old English Text W01.ttf' } // Matching "Monotype English Bold"
];

const sourceDir = '/home/samueldnvn4/.openclaw/workspace/FONTS';
const targetDir = path.join(__dirname, 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Copying fonts to triolingo/fonts/...\n');

const copiedFonts = [];
const missingFonts = [];

fonts.forEach(font => {
  const sourcePath = path.join(sourceDir, font.file);
  const targetPath = path.join(targetDir, font.file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    copiedFonts.push(font);
    console.log(`✅ Copied: ${font.name} (${font.file})`);
  } else {
    missingFonts.push(font);
    console.log(`⚠️  Not found: ${font.name} (${font.file})`);
  }
});

// Generate font configuration for themeManager.js
console.log('\n=== Font Configuration ===\n');

const fontConfig = copiedFonts.map(font => {
  const ext = path.extname(font.file);
  const format = ext === '.otf' ? 'opentype' : 'truetype';
  return `    ${font.id}: {
      name: '${font.name}',
      file: 'fonts/${font.file}',
      family: '${font.name.replace(/\s+/g, '')}',
      format: '${format}'
    }`;
}).join(',\n');

console.log(`this.customFonts = {\n${fontConfig}\n};`);

console.log('\n=== Summary ===');
console.log(`Copied: ${copiedFonts.length} fonts`);
console.log(`Missing: ${missingFonts.length} fonts`);

if (missingFonts.length > 0) {
  console.log('\nMissing fonts (you may need to find these files):');
  missingFonts.forEach(font => {
    console.log(`  - ${font.name}: ${font.file}`);
  });
}

console.log('\nDone! Update themeManager.js with the customFonts configuration above.');