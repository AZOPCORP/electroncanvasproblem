const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow


let mainWindow

function createWindow1 () {

  Window1 = new BrowserWindow({width: 200, height: 200})


  Window1.loadURL(`file://${__dirname}/window1.html`)


  Window1.webContents.openDevTools()


  Window1.on('closed', function () {

    Window1 = null
  })
}
function createWindow2 () {

  Window2 = new BrowserWindow({width: 200, height: 200})


  Window2.loadURL(`file://${__dirname}/window2.html`)


  Window2.webContents.openDevTools()


  Window2.on('closed', function () {

    Window1 = null
  })
}

function createWindows(){
  createWindow1();
  createWindow2();
}

app.on('ready', createWindows)


app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})
