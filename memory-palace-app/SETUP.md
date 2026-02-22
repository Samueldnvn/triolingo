# ⚙️ Setup Guide

## Choose Your Installation Method

### 🌐 Method 1: Open in Browser (Easiest - No Installation)

**Best for:** Quick testing, no installation required

1. Navigate to the `memory-palace-app` folder
2. Double-click `index.html`
3. Or right-click → Open with → Your browser

**✅ Pros:**
- No setup required
- Works immediately
- All features available

**❌ Cons:**
- No desktop shortcut
- Subject to browser limitations

---

### 💻 Method 2: Electron Desktop App (Full Experience)

**Best for:** Full desktop application experience with file menus, shortcuts

#### Step 1: Install Node.js

1. Go to https://nodejs.org
2. Download **LTS** version (recommended)
3. Run installer with default settings
4. Verify installation: Open terminal and run:
   ```bash
   node --version
   ```
   Should show v14 or higher

#### Step 2: Install Dependencies

Open terminal/command prompt in the app folder:

**Linux/Mac:**
```bash
cd /path/to/memory-palace-app
npm install
```

**Windows (PowerShell):**
```powershell
cd C:\path\to\memory-palace-app
npm install
```

This downloads Electron and required packages (~150MB, takes 1-2 minutes)

#### Step 3: Run the App

```bash
npm start
```

The app opens in its own window!

---

### 🖥️ Method 3: Build Native Desktop App

Best for distributing or having a standalone executable

#### Build for Windows
```bash
npm run build-win
```
Creates: `dist/Memory Palace Practice Setup.exe` (installable)

#### Build for macOS
```bash
npm run build-mac
```
Creates: `dist/Memory Palace Practice-1.0.0.dmg` (drag-to-install)

#### Build for Linux
```bash
npm run build-linux
```
Creates: `dist/Memory Palace Practice-1.0.0.AppImage` (portable)

**Requirements:**
- Windows: Must run from Windows (not WSL)
- macOS: Must run from macOS
- Linux: Requires gtk+3 libs

---

### 🔗 Method 4: Create Desktop Shortcut

Run the appropriate script for your OS:

#### Linux / WSL
```bash
chmod +x create-shortcut.sh
./create-shortcut.sh
```

Creates shortcut on desktop with app icon.

#### Windows
```powershell
# Open Command Prompt as Administrator
cd C:\path\to\memory-palace-app
create-shortcut.bat
```

Creates shortcut on desktop.

#### macOS
```bash
chmod +x create-shortcut-mac.sh
./create-shortcut-mac.sh
```

Creates app bundle, optionally copies to Applications.

---

## 📋 Platform-Specific Notes

### Windows

1. **PowerShell Script Execution Policy:**
   - If blocked: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

2. **Shortcuts:**
   - Run `create-shortcut.bat` as Administrator for best results

3. **Building:**
   - Cannot build Windows .exe from WSL
   - Use Windows PowerShell/Command Prompt

### macOS

1. **Security Warning on First Run:**
   - Right-click app → Open → Open (to bypass Gatekeeper)
   - Or: System Settings → Privacy & Security → Allow Anyway

2. **Building:**
   - Requires Xcode Command Line Tools: `xcode-select --install`

3. **App Bundle:**
   - The `create-shortcut-mac.sh` script creates a .app bundle
   - Can be placed anywhere (Applications, Desktop, etc.)

### Linux

1. **Dependencies for building:**
   - Ubuntu/Debian: `sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1 libxtst6 xdg-utils libatspi2.0-0 libdrm2 libgbm1 libasound2`
   - Fedora: `sudo dnf install gtk3 libnotify nss libXScrnSaver libXtst xdg-utils at-spi2-core alsa-lib`

2. **Desktop Entry:**
   - The `create-shortcut.sh` creates a proper .desktop file

3. **AppImage:**
   - Make executable after building: `chmod +x dist/*.AppImage`

---

## 🧪 Verification

After installation, verify everything works:

1. **Run the app:**
   ```bash
   npm start
   ```

2. **Test all features:**
   - ✅ Navigate between sections
   - ✅ Try a practice round
   - ✅ Test ASMR sounds (Settings → Test Sound)
   - ✅ Add custom sequence
   - ✅ Check history

3. **Test shortcuts:**
   - `Ctrl/Cmd + N` - New practice
   - `Enter` - Submit answer
   - `Ctrl/Cmd + Q` - Quit (desktop app)

---

## 🔧 Troubleshooting

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### "node: command not found"  
**Solution:** Add Node.js to PATH:
- Windows: Restart computer after Node.js installation
- Mac: Reopen terminal
- Linux: `export PATH=$PATH:/usr/local/bin`

### "Cannot find module 'electron'"
**Solution:** Run `npm install` in the app folder

### App opens but buttons don't work
**Solution:** Check browser console (F12) for errors. Usually due to missing dependencies.

### Sounds don't play
**Solution:** Click anywhere in the app first. Browsers require user interaction before playing audio.

### Permission denied on scripts
**Solution:**
```bash
chmod +x *.sh
```

### Windows: PowerShell says scripts disabled
**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### macOS: "can't be opened because it is from an unidentified developer"
**Solution:** Right-click app → Open → Click Open in dialog

---

## 📦 File Permissions

Make sure all scripts are executable:

```bash
# Linux/Mac
chmod +x create-shortcut.sh
chmod +x create-shortcut-mac.sh

# All scripts
chmod +x *.sh
```

---

## 🎯 Recommended Setup

### For Personal Use
1. **Quick Start:** Open `index.html` in browser
2. **Or:** Run `npm start` for desktop app experience
3. **Optional:** Create desktop shortcut for easy access

### For Sharing/Distribution
1. Run appropriate build command (Windows/macOS/Linux)
2. Share the executable with others
3. No Node.js installation needed for recipients!

### For Development
1. Install Node.js
2. Run `npm install`
3. Run `npm start` during development
4. Build native app when ready to deploy

---

## 💡 Tips

1. **Keep the app folder:** Don't move it after installing dependencies
2. **Backup settings:** Use "Export Data" in Settings periodically
3. **Update:** Run `npm update` to get latest Electron versions
4. **Clean install:** Delete `node_modules` folder and run `npm install` if issues persist

---

## 🎓 Next Steps

After setup:
1. Read **QUICKSTART.md** for first practice session
2. Try the ASMR sounds in Settings
3. Start with shorter sequences (4-5 characters)
4. Gradually increase difficulty

---

## 📞 Need Help?

If you encounter issues:
1. Check Node.js version: `node --version` (should be v14+)
2. Check npm: `npm --version` (should be v6+)
3. Try clearing node_modules:
   ```bash
   rm -rf node_modules
   npm install
   ```
4. Check browser console (F12) for error messages

---

Happy memorizing! 🧠✨