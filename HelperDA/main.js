const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const screenshot = require('screenshot-desktop');

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
    // screenshot-desktop doesn't provide source listing, so we return a mock list
    const displays = await screenshot.listDisplays();
    console.log('Available displays:', displays);

    const sources = displays.map((display, index) => ({
      id: `screen:${index}`,
      name: display.name || `Screen ${index + 1}`,
      displayId: display.id
    }));

    return sources;
  } catch (error) {
    console.error('Error getting sources:', error);
    // Fallback to a single screen option
    return [{
      id: 'screen:0',
      name: 'Primary Screen'
    }];
  }
});

ipcMain.handle('take-screenshot', async (event, sourceId) => {
  try {
    console.log('Taking screenshot of:', sourceId);

    // Parse screen index from sourceId (format: "screen:0", "screen:1", etc.)
    const screenIndex = parseInt(sourceId.split(':')[1]) || 0;

    // Take screenshot
    const img = await screenshot({ screen: screenIndex });
    console.log('Screenshot captured, size:', img.length);

    return img;
  } catch (error) {
    console.error('Screenshot failed:', error);
    throw new Error('Failed to capture screenshot: ' + error.message);
  }
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