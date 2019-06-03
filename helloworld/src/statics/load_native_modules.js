let SerialPort
if (process.versions.electron) {
    // eslint-disable-next-line no-console
    console.info('Running electron → importing SerialPort')
    try {
        SerialPort = require('serialport')
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Patch with SerialPort failed:\n', e)
    }
}

if (SerialPort) {
    try {
        SerialPort.list().then(
            ports => {
                // eslint-disable-next-line no-console
                console.group('SerialPort list:')
                for (let port of ports) {
                    if (port.vendorId) {
                        // eslint-disable-next-line no-console
                        console.log(port)
                    }
                }
                // eslint-disable-next-line no-console
                console.groupEnd()
            },
            err => {
                // eslint-disable-next-line no-console
                console.error('SerialPort.list:\n', err)
            }
        )
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error('SerialPort.list()\n', e)
    }
}
