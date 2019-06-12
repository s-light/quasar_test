import { app, BrowserWindow } from 'electron'

/**
* Set `__statics` path to static files in production;
* The reason we are setting it here is that the path needs to be evaluated at runtime
*/
if (process.env.PROD) {
    global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow

function createWindow () {
    /**
    * Initial window options
    */
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        useContentSize: true,
        webPreferences: {
            enableRemoteModule: false
        }
    })

    mainWindow.loadURL(process.env.APP_URL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

// https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows
app.on('web-contents-created', (event, contents) => {
    contents.on('new-window', async (event, navigationUrl) => {
        event.preventDefault()
        // console.error('no new windows allowed.')
    })
})

// https://electronjs.org/docs/tutorial/security#csp-http-header
// const { session } = require('electron')
//
// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
//     callback({
//         responseHeaders: {
//             ...details.responseHeaders,
//             'Content-Security-Policy': ['default-src \'none\'']
//         }
//     })
// })
