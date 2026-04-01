const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getSources: () => ipcRenderer.invoke('get-sources'),
  takeScreenshot: (sourceId) => ipcRenderer.invoke('take-screenshot', sourceId),
  saveText: (text, filename) => ipcRenderer.invoke('save-text', text, filename)
});