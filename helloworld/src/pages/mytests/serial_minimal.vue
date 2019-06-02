<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section class="q-mt-md">
            <div
                v-for="(device, index) in deviceList"
                :key="index"
            >
                <pre>{{ device }}</pre>
            </div>
        </section>
    </q-page>
</template>

<script>

// Serial things
// import { SerialPort } from 'serialport'
// ^ this does not work in SPA

// const SerialPort = require('serialport')

// let SerialPort
// try {
//     SerialPort = require('serialport')
// } catch (e) {
//     console.error('SerialPort loading failed.\n', e)
// }

// let SerialPort
// import('serialport')
//     .then(module => {
//         SerialPort = module
//         console.info('import serialport\n', module)
//     })
//     .catch(err => {
//         console.error('import serialport\n', err)
//     })

// if (SerialPort) {
//     SerialPort.list().then(
//         ports => console.log('ports', ports),
//         err => console.error('serialport.list:', err)
//     )
// }

export default {
    name: 'SerialList',
    data () {
        return {
            serialAvailable: false,
            deviceList: [{
                comName: 'dummyResponder'
            }]
        }
    },
    mounted: function () {
        console.log('mounted..')

        // let SerialPort
        // try {
        //     SerialPort = require('serialport')
        // } catch (e) {
        //     console.error('SerialPort loading failed.\n', e)
        // }

        console.log('SerialPort', SerialPort)
        if (SerialPort) {
            try {
                SerialPort.list().then(
                    ports => {
                        console.log('ports', ports)
                        ports.forEach(console.log)
                        this.deviceList = []
                        this.deviceList.push(...ports)
                    },
                    err => {
                        console.error('serialport.list:', err)
                    }
                )
            } catch (e) {
                console.error('SerialPort.list() failed:\n', e)
            }
            console.log('setup done.')
        }
        console.log('mounted - done')
    }
}
</script>

<style lang="stylus">
</style>
