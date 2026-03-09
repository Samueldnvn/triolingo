const { app, BrowserWindow, ipcMain, protocol } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false
    },
    backgroundColor: '#ffffff'
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // Register custom protocol for serving images
  protocol.registerFileProtocol('assets', (request, callback) => {
    const url = request.url.substr(8); // Remove 'assets://'
    
    // Check if it's a graph or a sticker
    if (url.startsWith('graphs/')) {
      // Serve from graphs directory
      const imagePath = path.join(__dirname, url);
      callback({ path: imagePath });
    } else {
      // Serve from japanese stickers directory
      const imagePath = path.join(__dirname, 'IMAGE_ASSETS', 'japanese stickers', url);
      callback({ path: imagePath });
    }
  }, (error) => {
    if (error) console.error('Failed to register protocol', error);
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for progress persistence
const userDataPath = app.getPath('userData');
const progressFile = path.join(userDataPath, 'progress.json');
const settingsFile = path.join(userDataPath, 'settings.json');

function loadProgress() {
  try {
    if (fs.existsSync(progressFile)) {
      return JSON.parse(fs.readFileSync(progressFile, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading progress:', err);
  }
  return {};
}

function saveProgress(progress) {
  try {
    fs.mkdirSync(userDataPath, { recursive: true });
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
  } catch (err) {
    console.error('Error saving progress:', err);
  }
}

ipcMain.handle('loadProgress', () => {
  return loadProgress();
});

ipcMain.handle('saveProgress', (event, progress) => {
  saveProgress(progress);
  return { success: true };
});

ipcMain.handle('resetProgress', () => {
  saveProgress({});
  return { success: true };
});

// Settings handlers
function loadSettings() {
  try {
    if (fs.existsSync(settingsFile)) {
      return JSON.parse(fs.readFileSync(settingsFile, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading settings:', err);
  }
  return {};
}

function saveSettings(settings) {
  try {
    fs.mkdirSync(userDataPath, { recursive: true });
    fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2));
  } catch (err) {
    console.error('Error saving settings:', err);
  }
}

ipcMain.handle('loadSettings', () => {
  return loadSettings();
});

ipcMain.handle('saveSettings', (event, settings) => {
  saveSettings(settings);
  return { success: true };
});