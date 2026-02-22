const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 900,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, 'icon.png')
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

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
        app.quit();
    }
});

// IPC handlers for configuration management
ipcMain.handle('get-config', async () => {
    const configPath = path.join(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return { ollamaUrl: 'http://localhost:11434', models: [], chats: [] };
});

ipcMain.handle('save-config', async (event, config) => {
    const configPath = path.join(__dirname, 'config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
});

ipcMain.handle('test-ollama-connection', async (event, url) => {
    try {
        const fetch = require('node-fetch');
        const response = await fetch(`${url}/api/tags`);
        if (response.ok) {
            const data = await response.json();
            return { success: true, models: data.models || [] };
        }
        return { success: false, error: `HTTP ${response.status}` };
    } catch (error) {
        return { success: false, error: error.message };
    }
});

ipcMain.handle('send-ollama-message', async (event, url, model, messages) => {
    try {
        const fetch = require('node-fetch');
        const response = await fetch(`${url}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: model,
                messages: messages,
                stream: false
            })
        });
        if (response.ok) {
            const data = await response.json();
            return { success: true, message: data.message };
        }
        return { success: false, error: `HTTP ${response.status}` };
    } catch (error) {
        return { success: false, error: error.message };
    }
});