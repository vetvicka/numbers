require('update-electron-app')({
  repo: 'vetvicka/numbers',
  updateInterval: '1 hour',
});

if(require('electron-squirrel-startup')) return;

try {
  require('electron-reloader')(module);
} catch (_) {}


const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 200,
    height: 150,
    webPreferences: {
      nodeIntegration: true
    },
    alwaysOnTop: true,
  })

  win.loadFile('index.html');
  win.removeMenu();
//   win.setAlwaysOnTop(true);
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
