const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const screenshot = require('screenshot-desktop');
const robot = require('robotjs');
const http = require('http');

let mainWindow;
let captureInterval;
let isRunning = false;
let captureRate = 2000; // Default: 2 seconds
let ollamaModel = 'llava';

// Create main window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  mainWindow.loadFile('index.html');

  // Dev tools in development
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

// Capture screen and send to vision model
async function captureAndAnalyze() {
  if (!isRunning) return;

  try {
    // Capture screen
    const screenshotPath = path.join(__dirname, 'capture.png');
    await screenshot({ filename: screenshotPath });

    // Read screenshot as base64
    const fs = require('fs');
    const imageBase64 = fs.readFileSync(screenshotPath, 'base64');

    // Send to Ollama vision model
    const analysis = await queryOllama(imageBase64);

    // Send result to renderer
    mainWindow.webContents.send('analysis-result', {
      image: `data:image/png;base64,${imageBase64}`,
      analysis: analysis,
      timestamp: new Date().toISOString()
    });

    // Execute any actions from the analysis
    if (analysis.action) {
      executeAction(analysis.action);
    }

  } catch (error) {
    console.error('Error capturing/analyzing:', error);
    mainWindow.webContents.send('error', error.message);
  }
}

// Query Ollama vision model
function queryOllama(imageBase64) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: ollamaModel,
      prompt: `Analyze this screenshot and determine what action to take. Respond in JSON format:
{
  "description": "What you see on screen",
  "suggested_action": "What should be done next",
  "action": {
    "type": "click|type|scroll|wait|none",
    "x": 0,
    "y": 0,
    "text": "",
    "direction": "up|down|left|right",
    "distance": 0
  }
}

If no action is needed, set action type to "none."`,
      images: [imageBase64]
    });

    const options = {
      hostname: 'localhost',
      port: 11434,
      path: '/api/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          // Parse the response to extract JSON
          const jsonMatch = response.response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            resolve(JSON.parse(jsonMatch[0]));
          } else {
            resolve({ action: { type: 'none' }, description: response.response });
          }
        } catch (e) {
          resolve({ action: { type: 'none' }, description: body });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Execute action from vision model
function executeAction(action) {
  if (!action || action.type === 'none') return;

  try {
    switch (action.type) {
      case 'click':
        robot.moveMouse(action.x, action.y);
        robot.mouseClick();
        break;

      case 'type':
        robot.typeString(action.text);
        break;

      case 'scroll':
        const scrollAmount = action.distance || 100;
        if (action.direction === 'up') {
          robot.scrollMouse(0, scrollAmount);
        } else if (action.direction === 'down') {
          robot.scrollMouse(0, -scrollAmount);
        } else if (action.direction === 'left') {
          robot.scrollMouse(scrollAmount, 0);
        } else if (action.direction === 'right') {
          robot.scrollMouse(-scrollAmount, 0);
        }
        break;

      case 'wait':
        // Wait for specified duration (in ms, default 1000)
        setTimeout(() => {}, (action.duration || 1000));
        break;
    }
  } catch (error) {
    console.error('Error executing action:', error);
  }
}

// IPC handlers
ipcMain.handle('start-capture', async (event, rate) => {
  if (rate) captureRate = rate;
  isRunning = true;
  captureInterval = setInterval(captureAndAnalyze, captureRate);
  return { success: true, rate: captureRate };
});

ipcMain.handle('stop-capture', async () => {
  isRunning = false;
  if (captureInterval) {
    clearInterval(captureInterval);
    captureInterval = null;
  }
  return { success: true };
});

ipcMain.handle('set-rate', async (event, rate) => {
  captureRate = rate;
  // Restart with new rate if running
  if (isRunning) {
    clearInterval(captureInterval);
    captureInterval = setInterval(captureAndAnalyze, captureRate);
  }
  return { success: true, rate: captureRate };
});

ipcMain.handle('set-model', async (event, model) => {
  ollamaModel = model;
  return { success: true, model: ollamaModel };
});

ipcMain.handle('manual-action', async (event, action) => {
  executeAction(action);
  return { success: true };
});

 ipcMain.handle('get-screen-size', async () => {
  const { width, height } = robot.getScreenSize();
  return { width, height };
});

// App lifecycle
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.on('before-quit', () => {
      if (captureInterval) {
        clearInterval(captureInterval);
      }
    });
    app.quit();
  }
});