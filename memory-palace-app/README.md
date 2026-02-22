# 🧠 Memory Palace Practice

A beautiful desktop application for practicing memory palace techniques with satisfying ASMR sound effects.

## ✨ Features

- **Random Sequence Generation** - Generate random numbers, letters, or mixed sequences
- **Custom Sequences** - Create your own character pools (syllables, special characters, etc.)
- **Timed & Untimed Modes** - Practice with or without time limits
- **ASMR Sound Effects** - Satisfying pop/click sounds for every interaction
- **Japanese Textbook Aesthetic** - Beautiful, calming interface inspired by Linear Algebra course
- **Practice History** - Track your progress over time
- **Statistics** - View daily attempts, success rate, and best streak

## 🎯 What is Memory Palace?

The Memory Palace (also called Method of Loci) is a mnemonic technique that involves visualizing information in familiar physical spaces. This app helps you practice the foundational skill - memorizing sequences of information.

## 🚀 Quick Start

### Option 1: Run as Node.js Application

1. **Install Node.js** (v14 or higher) from https://nodejs.org

2. **Install dependencies:**
   ```bash
   cd memory-palace-app
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

### Option 2: Build Desktop Application

**Windows:**
```bash
npm run build-win
```
Creates `dist/Memory Palace Practice Setup.exe` in the app folder.

**macOS:**
```bash
npm run build-mac
```
Creates `dist/Memory Palace Practice-1.0.0.dmg` in the app folder.

**Linux:**
```bash
npm run build-linux
```
Creates `dist/Memory Palace Practice-1.0.0.AppImage` in the app folder.

### Option 3: Open as Web App

Simply open `index.html` in your browser! No installation required.

## 📚 How to Use

### Basic Practice

1. **Set your preferences:**
   - Sequence length (2-50 characters)
   - Sequence type (Numbers, Letters, or Mixed)
   - Timed mode (enabled/disabled)

2. **Click "Start Practice"**

3. **Memorize the sequence:**
   - Click "Show Sequence" to see the random sequence
   - Study it using your memory palace technique
   - Click "Start Recall" when ready

4. **Type what you remember:**
   - Untimed: Take your time (elapsed time is shown)
   - Timed: Type within the time limit (countdown shown)

5. **See results:**
   - Your answer is compared to the original
   - Success/failure is recorded in history

### Custom Sequences

1. Go to "Custom Sequences" section
2. Enter a name (e.g., "Japanese Syllables")
3. Enter your character pool (comma-separated):
   - Example: `ka, ki, ku, ke, ko`
   - Example: `!, @, #, $, %`
   - Example: `1, 2, 3, 4, 5` (subset of numbers)
4. Click "Add Sequence"
5. Click "Use" to practice with that sequence

### Settings

**Sound Effects:**
- Toggle ASMR sounds on/off
- Choose sound type: Pop, Click, or Soft
- Adjust volume

**Display:**
- Light or Dark theme
- Sequence display size (Small, Medium, Large)

**Data:**
- Export your data as JSON backup
- Import from backup file
- Reset all data (clears history, settings, custom sequences)

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + N` - Start new practice
- `Ctrl/Cmd + Q` - Quit app
- `Enter` - Submit answer / Confirm action

## 🎨 Design

The app features a calming **Japanese textbook aesthetic** with:
- Rounded design elements (20px border radius)
- Soft color palette (pink, orange, yellow, green, blue, purple)
- Dotted border decorations throughout
- Helvetica Rounded font with Nunito fallback
- Clean, distraction-free interface

## 🔧 Technical Details

- **Framework:** Electron (for desktop app)
- **Technologies:** HTML, CSS, JavaScript (Vanilla)
- **Audio:** Web Audio API (no external audio files needed)
- **Storage:** LocalStorage (persistent browser/app storage)

## 📁 Project Structure

```
memory-palace-app/
├── main.js           # Electron main process
├── index.html        # Main UI
├── styles.css        # Japanese textbook styling
├── sounds.js         # ASMR sound effect system
├── app.js            # Application logic
├── package.json      # Node/npm configuration
├── assets/           # Icons and resources
└── README.md         # This file
```

## 🔊 Sound Effects

All sounds are generated programmatically using the **Web Audio API**:
- **Pop** - Satisfying bubble pop
- **Click** - Sharp, crisp click
- **Soft** - Gentle chime
- **Success** - Pleasant chord progression
- **Error** - Gentle indication sound
- **Type** - Subtle typing clicks

No external audio files required! Sounds are generated in real-time.

## 💾 Data Storage

All data is stored locally in your browser/app:
- **Settings** - Your preferences
- **History** - Practice attempts (last 100)
- **Custom Sequences** - Your character pools
- **Statistics** - Today's attempts, success rate, best streak

Data is automatically saved. Use "Export Data" to create backups.

## 🛠️ Troubleshooting

**Q: Sounds aren't playing**
- Make sure ASMR is enabled in Settings
- Check volume level
- Click anywhere in the app first (browsers require user interaction)

**Q: App won't start after `npm start`**
- Make sure Electron is installed: `npm install`
- Check Node.js version (v14+ required)

**Q: Can't build desktop app**
- Ensure you've installed dependencies: `npm install`
- Check that electron-builder is installed

**Q: Want to reset everything**
- Go to Settings → Reset All Data
- Or clear LocalStorage in browser DevTools

## 📝 License

MIT License - Feel free to use, modify, and distribute!

## 🙏 Acknowledgments

- Inspired by memory palace techniques
- Design aesthetic based on Linear Algebra course
- Built with Electron and pure vanilla JavaScript

---

**Enhance your memory, one sequence at a time! 🧠✨**