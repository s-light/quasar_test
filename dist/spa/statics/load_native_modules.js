// eslint-disable-next-line no-unused-vars
let SerialPort
// eslint-disable-next-line no-unused-vars
let HID

try {
    if (process.versions.electron) {
        // eslint-disable-next-line no-console
        console.info('Running electron.')

        // eslint-disable-next-line no-console
        console.info('→ importing SerialPort')
        try {
            SerialPort = require('serialport')
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('importing SerialPort failed:\n', e)
        }

        // eslint-disable-next-line no-console
        console.info('→ importing HID')
        try {
            HID = require('node-hid')
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('importing HID failed:\n', e)
        }
    }
} catch (e) {
    // eslint-disable-next-line no-console
    console.error('load_native_modules failed:\n', e)
}

// if (SerialPort) {
//     try {
//         SerialPort.list().then(
//             ports => {
//                 // eslint-disable-next-line no-console
//                 console.group('SerialPort list:')
//                 for (let port of ports) {
//                     if (port.vendorId) {
//                         // eslint-disable-next-line no-console
//                         console.log(port)
//                     }
//                 }
//                 // eslint-disable-next-line no-console
//                 console.groupEnd()
//             },
//             err => {
//                 // eslint-disable-next-line no-console
//                 console.error('SerialPort.list:\n', err)
//             }
//         )
//     } catch (e) {
//         // eslint-disable-next-line no-console
//         console.error('SerialPort.list()\n', e)
//     }
// }
