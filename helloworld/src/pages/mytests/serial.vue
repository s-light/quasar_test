<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section class="q-mt-md row justify-around items-center ">
            <q-select
                rounded
                outlined
                class="q-mr-md"
                style="min-width:12em; background: transparent"
                label="Device"
                option-label="comName"
                v-model="deviceSelected"
                :options="deviceList"
                :disable="deviceConnected"
            >
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section>
                            No Devices
                        </q-item-section>
                    </q-item>
                </template>
                <template v-slot:append>
                    <q-btn
                        flat
                        round
                        dense
                        hint="search devices"
                        icon="refresh"
                        :disable="deviceConnected"
                        :loading="deviceSearching"
                        @click="search()"
                    >
                        <template v-slot:loading>
                            <q-spinner-radio />
                        </template>
                    </q-btn>
                </template>
            </q-select>
            <q-btn
                rounded
                :icon="deviceConnected ? 'phonelink_off' : 'phonelink'"
                :style="{opacity: (deviceSelected ? 'inherit' : '0.05')}"
                :loading="deviceConnecting"
                @click="toggleConnect()"
                :label="deviceConnected ? 'disconnect' : 'connect'"
                :disable="!deviceSelected"
            >
                <template v-slot:loading>
                    <q-spinner-gears />
                </template>
                <template v-slot:after>
                    <q-icon
                        name="close"
                    />
                </template>
            </q-btn>
        </section>

        <section class="log q-mt-md q-pa-sm">
            <div
                class="line row"
                v-for="(line, index) in log"
                :key="index"
            >
                <div class="info q-px-sm">
                    {{ line.time | timeOnly }} {{ line.direction }}
                </div>
                <pre class="col-grow">{{ line.text }}</pre>
            </div>
        </section>
        <section
            class="q-mt-md"
            style="min-width: 50vw"
        >
            <q-input
                filled
                label="Send Message"
                v-model="messagaeToSend"
                :disable="!deviceConnected"
                @keyup.enter="messageSend()"
            >
                <template v-slot:append>
                    <q-icon
                        :style="{opacity: (messagaeToSend !== '' ? 'inherit' : '0.1')}"
                        name="close"
                        @click="messagaeToSend = ''"
                        class="cursor-pointer"
                    />
                </template>
                <template v-slot:after>
                    <q-btn
                        round
                        v-ripple
                        dense
                        flat
                        icon="send"
                        :disable="!deviceConnected"
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
import { date } from 'quasar'

// Serial things
// import { SerialPort } from 'serialport'
// ^ this does not work in SPA
let SerialPort
// import('serialport')
//     .then(module => {
//         SerialPort = module
//     })
//     .catch(err => {
//         console.error('import serialport\n', err)
//     })

const demoData = [
    {
        direction: '~',
        time: '2019-06-02T11:42:42.000Z',
        text: 'First Line'
    },
    {
        direction: '~',
        time: '2019-06-02T11:42:42.102Z',
        text: 'multiline\n content'
    },
    {
        direction: '~',
        time: '2019-06-02T11:42:42.200Z',
        text: ''
    },
    {
        direction: '~',
        time: '2019-06-02T11:42:42.420Z',
        text: `this 'line' contains a full unicode styled table:
╔════════════════╦═══════╦══════╗
║      Name      ║ Value ║ Unit ║
╠════════════════╬═══════╬══════╣
║ Ambient Light  ║    42 ║ LUX  ║
║ LED-Brightness ║    50 ║ %    ║
╚════════════════╩═══════╩══════╝`
    },
    {
        direction: '~',
        time: '2019-06-02T11:43:00.000Z',
        text: 'the end..'
    }
]

export default {
    name: 'SerialTest',
    data () {
        return {
            serialAvailable: false,
            port: undefined,
            parser: undefined,
            deviceList: [{
                comName: 'dummyResponder',
                manufacturer: 's-light.eu',
                serialNumber: '42',
                pnpId: undefined,
                locationId: undefined,
                productId: undefined,
                vendorId: undefined
            }],
            deviceSelected: undefined,
            deviceSearching: false,
            deviceConnecting: false,
            deviceConnected: false,
            messagaeToSend: 'Hello World :-)',
            log: demoData,
            logCountMax: 500
        }
    },
    methods: {
        toggleConnect () {
            this.deviceConnecting = true
            if (this.deviceSelected.comName.startsWith('dummyResponder')) {
                // simulate a delay
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceConnecting = false
                    this.deviceConnected = !this.deviceConnected
                }, 1000)
            } else {
                if (this.deviceConnected) {
                    this.portClose()
                } else {
                    this.portOpen()
                }
            }
        },
        portOpen () {
            if (this.serialAvailable) {
                this.port = new SerialPort(
                    this.deviceSelected.comName, { baudRate: 115200 })
                this.port.pipe(this.parser)
                this.port.on('open', function () {
                    this.deviceConnected = true
                    this.deviceConnecting = false
                })
                this.port.on('close', function () {
                    this.deviceConnected = false
                    this.deviceConnecting = false
                })
            }
        },
        portClose () {
            if (this.serialAvailable) {
                this.port.close()
            }
        },
        messageSend () {
            // console.log('send message:', this.messagaeToSend)
            if (this.deviceSelected.comName.startsWith('dummyResponder')) {
                const recMessage = this.messagaeToSend
                setTimeout(() => {
                    this.messageReceive(recMessage)
                }, 500)
            } else {
                if (this.serialAvailable) {
                    this.port.write(this.messagaeToSend + '\n')
                }
            }
            const logEntry = {
                // https://stackoverflow.com/questions/33253275/what-unicode-symbol-represents-a-person
                // direction: '👤',
                direction: '→',
                time: new Date(),
                text: this.messagaeToSend
            }
            this.log.push(logEntry)
            this.messagaeToSend = ''
        },
        messageReceive (value) {
            // console.log('receive message:', value)
            const logEntry = {
                direction: '*',
                time: new Date(),
                text: value
            }
            this.log.push(logEntry)
            // limit log length
            while (this.log.length > this.logCountMax) {
                this.log.shift()
            }
        },
        search () {
            this.deviceSearching = true
            if (this.serialAvailable) {
                SerialPort.list().then(
                    ports => {
                        // ports.forEach(console.log)
                        // reset list
                        this.deviceList = [{
                            comName: 'dummyResponder',
                            manufacturer: 's-light.eu',
                            serialNumber: '42',
                            pnpId: undefined,
                            locationId: undefined,
                            productId: undefined,
                            vendorId: undefined
                        }]
                        this.deviceList.push(...ports)
                    },
                    err => {
                        console.error('serialport.list:', err)
                        this.deviceSearching = false
                    }
                )
                // SerialPort.list((err, ports) => {
                //     console.log('ports', ports)
                //     if (err) {
                //         console.error('serialport.list:', err)
                //     } else {
                //         // reset list
                //         this.deviceList = ['dummyResponder']
                //         this.deviceList.push(...ports)
                //     }
                //     this.deviceSearching = false
                // })
            } else {
                // simulate a delay
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceList.push({
                        comName: 'dummyResponder' + this.deviceList.length,
                        manufacturer: 's-light.eu',
                        serialNumber: 42 + (this.deviceList.length * 100),
                        pnpId: undefined,
                        locationId: undefined,
                        productId: undefined,
                        vendorId: undefined
                    })
                    this.deviceSearching = false
                }, 2000)
            }
        }
    },
    computed: {
        // example_computed: function () {
        //     return
        // }
    },
    mounted: function () {
        console.log('mounted..')
        this.deviceSelected = this.deviceList[0]
        if (SerialPort) {
            console.log('try setup SerialPort usage..')
            try {
                const Readline = SerialPort.parsers.Readline
                this.parser = new Readline()
                this.parser.on('data', line => this.messageReceive(line))
                this.serialAvailable = true
            } catch (e) {
                this.serialAvailable = false
                console.error(e)
            }
            console.log('search for devices..')
            this.search()
            console.log('setup done.')
        }
        console.log('mounted - done')
    },
    filters: {
        timeOnly: function (value) {
            // console.log('value', value)
            const timeStamp = new Date(value)
            // console.log('timeStamp', timeStamp)
            let result = ''
            if (date.isValid(timeStamp)) {
                // https://quasar.dev/quasar-utils/date-utils#Format-for-display
                result = date.formatDate(timeStamp, 'HH:mm:ss.SSS')
            }
            return result
        }
    }
}

// https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
</script>

<style lang="stylus">
    .log
        flex-grow: 2
        min-width: 50vw
        max-width: 100vw
        overflow: auto
        background-color: hsla(0, 0, 0, 0.05)
        /* white-space: pre */
        font-size: 1em
        line-height: 129%
        font-family: Overpass-mono
    /* .line */
    .log .info
        background $info
        min-width 3em
        text-align right
    .log pre
        margin: 0
        white-space: pre
        font-size: 1em
        line-height: 129%
        font-family: Overpass-mono
</style>
