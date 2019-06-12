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
                style="min-width:16em; background: transparent"
                label="Device"
                :disable="deviceIsOpen"
                v-model="deviceSelected"
                :option-label="(item) => item.product"
                :option-value="(item) => item"
                :options="deviceList"
            >
                <template v-slot:option="scope">
                    <q-item
                        v-bind="scope.itemProps"
                        v-on="scope.itemEvents"
                    >
                        <q-item-section>
                            <q-item-label>
                                {{ scope.opt.product }}
                            </q-item-label>
                            <q-item-label caption>
                                {{ scope.opt.manufacturer }}
                            </q-item-label>
                            <q-item-label caption>
                                {{ scope.opt.path }}
                            </q-item-label>
                            <q-item-label caption>
                                vendorId:{{ scope.opt.vendorId }}
                            </q-item-label>
                            <q-item-label caption>
                                productId:{{ scope.opt.productId }}
                            </q-item-label>
                            <q-item-label caption>
                                serialNumber:{{ scope.opt.serialNumber }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </template>
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
                        :disable="deviceIsOpen"
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
                :icon="deviceIsOpen ? 'phonelink_off' : 'phonelink'"
                :style="{opacity: (deviceSelected ? 'inherit' : '0.05')}"
                :loading="deviceConnecting"
                @click="toggleConnect()"
                :label="deviceIsOpen ? 'disconnect' : 'connect'"
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
        <section>
            <p class="q-ma-md">
                {{ deviceSelected }}
            </p>
        </section>

        <LogView
            class="q-mt-md q-pa-sm"
            ref="mylog"
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
                :disable="!deviceIsOpen || deviceConnecting"
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
                        :disable="!deviceIsOpen || deviceConnecting"
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
import { extend } from 'quasar'
import LogView from 'components/LogView.vue'

const dummyResponder = {
    vendorId: -1,
    productId: -1,
    path: '/dummyResponder/0',
    serialNumber: '42',
    manufacturer: 's-light.eu',
    product: 'dummyResponder',
    release: -1,
    interface: -1,
    usagePage: -1,
    usage: -1
}

export default {
    name: 'PageSerialTest',
    data () {
        return {
            hidAvailable: false,
            device: undefined,
            parser: undefined,
            deviceList: [dummyResponder],
            // deviceSelected: {
            //     path: '',
            //     usagePage: undefined
            // },
            deviceSelected: null,
            deviceIsOpen: false,
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
            // console.log('this.deviceIsOpen', this.deviceIsOpen)
            if (this.deviceIsOpen) {
                console.log('we will close now..')
                this.deviceClose()
                console.log('close done.')
            } else {
                console.log('we will open now..')
                this.deviceOpen()
            }
            console.groupEnd()
        },
        deviceOpen () {
            console.group('deviceOpen()')
            // console.log(`this.deviceSelected.path '${this.deviceSelected.path}'`)
            console.log(`this.deviceSelected '${this.deviceSelected}'`)
            // if (this.deviceSelected.startsWith('dummyResponder')) {
            if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceConnecting = false
                    this.deviceIsOpen = true
                }, 500)
            } else {
                if (this.hidAvailable) {
                    try {
                        // TODO: implement
                        // this.device = new SerialPort(
                        //     this.deviceSelected, { baudRate: 115200 })
                        // // this.deviceSelected.path, { baudRate: 115200 })
                        // this.device.pipe(this.parser)
                        // this.device.on('open', () => {
                        //     // console.log('event open - port.isOpen:', this.device.isOpen)
                        //     console.log('event open')
                        //     this.deviceIsOpen = this.device.isOpen
                        //     this.deviceConnecting = false
                        // })
                        // this.device.on('close', () => {
                        //     // console.log('event close - port.isOpen:', this.device.isOpen)
                        //     console.log('event close')
                        //     this.deviceIsOpen = this.device.isOpen
                        //     this.deviceConnecting = false
                        // })
                    } catch (e) {
                        console.error('port open failed:\n', e)
                        this.deviceConnecting = false
                    }
                }
            }
            console.groupEnd()
        },
        deviceClose () {
            // if (this.deviceSelected.startsWith('dummyResponder')) {
            if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
                setTimeout(() => {
                    // we're done, we reset loading state
                    this.deviceConnecting = false
                    this.deviceIsOpen = false
                }, 500)
            } else {
                // console.log('this.device', this.device)
                if (this.hidAvailable && this.device) {
                    this.deviceConnecting = true
                    // this.device.close()
                    // TODO: implement
                    // console.log('this.device', this.device)
                }
            }
        },
        messageSend () {
            // console.log('send message:', this.messagaeToSend)
            // if (this.deviceSelected.startsWith('dummyResponder')) {
            if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
                const recMessage = this.messagaeToSend
                setTimeout(() => {
                    this.messageReceive(recMessage)
                }, 1000)
            } else {
                if (this.hidAvailable) {
                    // this.device.write(this.messagaeToSend + '\n')
                    // TODO: implement
                }
            }
            this.$refs.mylog.addEntryOut(this.messagaeToSend)
            this.messagaeToSend = ''
        },
        messageReceive (value) {
            this.$refs.mylog.addEntryIn(value)
        },
        search () {
            console.group('search for devices..')
            this.deviceSearching = true
            if (this.hidAvailable) {
                // TODO: implement
                // SerialPort.list().then(
                //     devices => {
                //         // devices.forEach(console.log)
                //         // reset list
                //         this.deviceList = [{
                //             product: 'dummyResponder',
                //             path: '/dummyResponder/1',
                //             manufacturer: 's-light.eu',
                //             serialNumber: '42',
                //         }]
                //         // this.deviceList.push(...devices)
                //         for (let device of devices) {
                //             if (device.vendorId) {
                //                 // console.log(device)
                //                 this.deviceList.push(device)
                //             }
                //         }
                //         this.deviceSelected = this.deviceList[this.deviceList.length - 1]
                //         // this.deviceSelected = this.deviceNamesList[this.deviceNamesList.length - 1]
                //         this.deviceSearching = false
                //     },
                //     err => {
                //         console.error('serialport.list:', err)
                //         this.deviceSearching = false
                //     }
                // )
            } else {
                // simulate a delay
                setTimeout(() => {
                    // we're done, we reset loading state
                    const dummyResponderNew = {}
                    // https://quasar.dev/quasar-utils/other-utils#(Deep)-Copy-Objects
                    extend(true, dummyResponderNew, dummyResponder)
                    dummyResponderNew.path = '/dummyResponder/' + this.deviceList.length
                    dummyResponderNew.serialNumber = 42 + (this.deviceList.length * 100)
                    dummyResponderNew.product = 'dummyResponder new' + this.deviceList.length

                    this.deviceList.push(dummyResponderNew)
                    this.deviceSearching = false
                }, 2000)
            }
            console.groupEnd()
        }
    },
    computed: {
        // thing: function () {
        //     let result = []
        //     for (let port of this.deviceList) {
        //         result.push(port.path)
        //     }
        //     return result
        // }
    },
    mounted: function () {
        console.group('mounted..')
        // this.deviceSelected = this.deviceList[0]
        if (HID) {
            // for debug purposes:
            console.info('list of HID devices:')
            for (let device of HID.devices()) {
                console.log(device)
            }

            console.group('setup HID usage')
            console.log('TODO!!!!!')
            try {
                // TODO: implement
                // const Readline = SerialPort.parsers.Readline
                // this.parser = new Readline()
                // this.parser.on('data', line => this.messageReceive(line))
                // this.hidAvailable = true
            } catch (e) {
                this.hidAvailable = false
                console.error(e)
            }
            console.groupEnd()
            // console.log('search for devices..')
            this.search()
        }
        if (!this.hidAvailable) {
            console.log('create some dummyResponder entries..')
            this.search()
            this.search()
            this.search()
        }
        console.groupEnd()
    },
    beforeDestroy: function () {
        console.group('beforeDestroy..')
        if (this.hidAvailable) {
            if (this.device && this.device.isOpen) {
                console.group('close devices.')
                this.device.close()
                // TODO: implement
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
