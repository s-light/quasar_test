<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section class="q-mt-md row justify-around items-center ">
            <!-- <q-select
                rounded
                outlined
                class="q-mr-md"
                style="min-width:12em; background: transparent"
                label="Device"
                option-label="comName"
                v-model="deviceSelected"
                :options="deviceList"
                :disable="portIsOpen"
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
                        :disable="portIsOpen"
                        :loading="deviceSearching"
                        @click="search()"
                    >
                        <template v-slot:loading>
                            <q-spinner-radio />
                        </template>
                    </q-btn>
                </template>
            </q-select> -->

            <q-select
                rounded
                outlined
                class="q-mr-md"
                style="min-width:12em; background: transparent"
                label="Device"
                v-model="deviceSelected"
                :options="deviceNamesList"
                :disable="portIsOpen"
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
                        :disable="portIsOpen"
                        :loading="deviceSearching"
                        @click="search()"
                    >
                        <template v-slot:loading>
                            <q-spinner-radio />
                        </template>
                    </q-btn>
                </template>
            </q-select>

            <!-- <q-select
                style="min-width:12em"
                label="Device"
                option-label="comName"
                v-model="testXX"
                :options="deviceList"
            />

            <p>{{ testXX }}</p>

            <q-btn
                flat
                round
                dense
                hint="search devices"
                icon="refresh"
                :disable="portIsOpen"
                :loading="deviceSearching"
                @click="search()"
            >
                <template v-slot:loading>
                    <q-spinner-radio />
                </template>
            </q-btn>
            -->

            <q-btn
                rounded
                :icon="portIsOpen ? 'phonelink_off' : 'phonelink'"
                :style="{opacity: (deviceSelected ? 'inherit' : '0.05')}"
                :loading="deviceConnecting"
                @click="toggleConnect()"
                :label="portIsOpen ? 'disconnect' : 'connect'"
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
            <p class="q-ma-md">
                {{ deviceSelected }}
                <!-- {{ deviceSelected.comName }}
                {{ deviceSelected.pnpId }} -->
            </p>
        </section>

        <LogView
            class="q-mt-md q-pa-sm"
            ref="mylog"
            show-demo-data
            :log.sync="log"
        />
        <section
            class="q-mt-md"
            style="min-width: 50vw"
        >
            <q-input
                filled
                label="Send Message"
                v-model="messagaeToSend"
                :disable="!portIsOpen"
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
                        :disable="!portIsOpen"
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
import LogView from 'components/LogView.vue'

export default {
    name: 'PageSerialTest',
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
            // deviceSelected: {
            //     comName: '',
            //     pnpId: undefined
            // },
            deviceSelected: 'dummyResponder',
            portIsOpen: false,
            // testXX: 'XXX',
            deviceSearching: false,
            deviceConnecting: false,
            messagaeToSend: 'Hello World :-)',
            log: undefined
        }
    },
    methods: {
        toggleConnect () {
            console.group('toggleConnect()')
            this.deviceConnecting = true
            // console.log('this.deviceConnecting', this.deviceConnecting)
            // console.log('this.portIsOpen', this.portIsOpen)
            if (this.portIsOpen) {
                console.log('we will close now..')
                this.portClose()
            } else {
                console.log('we will open now..')
                this.portOpen()
            }
            console.groupEnd()
        },
        portOpen () {
            console.group('portOpen()')
            // console.log(`this.deviceSelected.comName '${this.deviceSelected.comName}'`)
            console.log(`this.deviceSelected '${this.deviceSelected}'`)
            // if (this.deviceSelected.comName.startsWith('dummyResponder')) {
            if (this.deviceSelected.startsWith('dummyResponder')) {
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceConnecting = false
                    this.portIsOpen = true
                }, 500)
            } else {
                if (this.serialAvailable) {
                    try {
                        this.port = new SerialPort(
                            this.deviceSelected, { baudRate: 115200 })
                        // this.deviceSelected.comName, { baudRate: 115200 })
                        this.port.pipe(this.parser)
                        this.port.on('open', () => {
                            // console.log('event open - port.isOpen:', this.port.isOpen)
                            console.log('event open')
                            this.portIsOpen = this.port.isOpen
                            this.deviceConnecting = false
                        })
                        this.port.on('close', () => {
                            // console.log('event close - port.isOpen:', this.port.isOpen)
                            console.log('event close')
                            this.portIsOpen = this.port.isOpen
                            this.deviceConnecting = false
                        })
                    } catch (e) {
                        console.error('port open failed:\n', e)
                        this.deviceConnecting = false
                    }
                }
            }
            console.groupEnd()
        },
        portClose () {
            // if (this.deviceSelected.comName.startsWith('dummyResponder')) {
            if (this.deviceSelected.startsWith('dummyResponder')) {
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceConnecting = false
                    this.portIsOpen = false
                }, 500)
            } else {
                if (this.serialAvailable && this.port) {
                    this.deviceConnecting = false
                    this.port.close()
                }
            }
        },
        messageSend () {
            // console.log('send message:', this.messagaeToSend)
            // if (this.deviceSelected.comName.startsWith('dummyResponder')) {
            if (this.deviceSelected.startsWith('dummyResponder')) {
                const recMessage = this.messagaeToSend
                setTimeout(() => {
                    this.messageReceive(recMessage)
                }, 1000)
            } else {
                if (this.serialAvailable) {
                    this.port.write(this.messagaeToSend + '\n')
                }
            }
            this.$refs.mylog.addEntryOut(this.messagaeToSend)
            this.messagaeToSend = ''
            // if (this.deviceSelected.startsWith('dummyResponder')) {
            //     this.messagaeToSend = 'Hello World Dummy messagae 2...'
            // }
        },
        messageReceive (value) {
            this.$refs.mylog.addEntryIn(value)
        },
        search () {
            if (this.serialAvailable) {
                this.deviceSearching = true
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
                        // this.deviceList.push(...ports)
                        for (let port of ports) {
                            if (port.vendorId) {
                                // console.log(port)
                                this.deviceList.push(port)
                            }
                        }
                        // this.deviceSelected = this.deviceList[this.deviceList.length - 1]
                        this.deviceSelected = this.deviceNamesList[this.deviceNamesList.length - 1]
                        this.deviceSearching = false
                    },
                    err => {
                        console.error('serialport.list:', err)
                        this.deviceSearching = false
                    }
                )
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
        deviceNamesList: function () {
            let result = []
            for (let port of this.deviceList) {
                result.push(port.comName)
            }
            return result
        }
    },
    mounted: function () {
        // console.group('mounted..')
        // this.deviceSelected = this.deviceList[0]
        this.deviceSelected = this.deviceNamesList[0]
        if (SerialPort) {
            // console.group('setup SerialPort usage')
            try {
                const Readline = SerialPort.parsers.Readline
                this.parser = new Readline()
                this.parser.on('data', line => this.messageReceive(line))
                this.serialAvailable = true
            } catch (e) {
                this.serialAvailable = false
                console.error(e)
            }
            // console.log('search for devices..')
            this.search()
            // console.groupEnd()
        }
        // console.groupEnd()
    },
    beforeDestroy: function () {
        console.group('beforeDestroy..')
        if (this.serialAvailable) {
            if (this.port && this.port.isOpen) {
                console.group('close ports.')
                this.port.close()
            }
        }
        console.groupEnd()
    },
    filters: {
    },
    components: {
        LogView
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
</style>
