const { app, BrowserWindow, ipcMain, desktopCapturer } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false // Required for desktopCapturer
    },
    title: 'HelperDA - Screenshot OCR'
  });

  mainWindow.loadFile('renderer.html');

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

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

// IPC handlers
ipcMain.handle('get-sources', async () => {
  try {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen'],
      thumbnailSize: { width: 150, height: 150 }
    });
    console.log('Available sources:', sources.map(s => ({ id: s.id, name: s.name })));
    return sources;
  } catch (error) {
    console.error('Error getting sources:', error);
    return [];
  }
});

ipcMain.handle('take-screenshot', async (event, sourceId) => {
  const sources = await desktopCapturer.getSources({
    types: ['window', 'screen'],
    thumbnailSize: { width: 1920, height: 1080 }
  });

  const source = sources.find(s => s.id === sourceId);
  if (!source) {
    throw new Error('Source not found');
  }

  return source.thumbnail.toPNG();
});

ipcMain.handle('save-text', async (event, text, filename) => {
  const { dialog } = require('electron');
  const { filePath } = await dialog.showSaveDialog(mainWindow, {
    defaultPath: filename || 'extracted-text.txt',
    filters: [
      { name: 'Text Files', extensions: ['txt'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (filePath) {
    fs.writeFileSync(filePath, text, 'utf-8');
    return { success: true, path: filePath };
  }

  return { success: false };
});