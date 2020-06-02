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
            deviceSelected: null,
            deviceIsOpen: false,
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
                        this.device = new HID.HID(this.deviceSelected.path)
                        this.device.on('error', (err) => {
                            this.$refs.mylog.addEntrySpecial(err)
                        })
                        this.device.on('data', (data) => {
                            this.messageReceive(data)
                        })
                        this.deviceIsOpen = true
                        this.deviceConnecting = false
                    } catch (e) {
                        console.error('device open failed:\n', e)
                        this.deviceIsOpen = false
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
                    this.device.close()
                    this.deviceIsOpen = false
                    this.deviceConnecting = false
                }
            }
        },
        messageSend () {
            console.group('messageSend')
            console.log('messagaeToSend:', this.messagaeToSend)
            if (this.deviceSelected.path.startsWith('/dummyResponder/')) {
                console.log('send to dummyResponder')
                const recMessage = this.messagaeToSend
                setTimeout(() => {
                    this.messageReceive(recMessage)
                }, 1000)
            } else {
                if (this.hidAvailable) {
                    console.log('hid is available.')
                    try {
                        console.log('write to device')
                        // this.device.write([0x05, 42, 0xff])
                        const messgeAsCharCodeArray = (
                            Array.from(this.messagaeToSend)
                                .map((val) => val.charCodeAt(0))
                        )
                        this.device.write(messgeAsCharCodeArray)
                    } catch (e) {
                        console.error('write failed:\n', e)
                    }
                }
            }
            this.$refs.mylog.addEntryOut(this.messagaeToSend)
            this.messagaeToSend = ''
            console.groupEnd()
        },
        messageReceive (value) {
            this.$refs.mylog.addEntryIn(value)
        },
        search () {
            console.group('search for devices..')
            this.deviceSearching = true
            if (this.hidAvailable) {
                // TODO: check/find async version..
                // HID.devices().then(
                //     devices => {
                //         // use code from the 'if part'
                //     },
                //     err => {
                //         console.error('HID.devices:', err)
                //         this.deviceSearching = false
                //     }
                // )
                const devices = HID.devices()
                if (devices) {
                    // reset list
                    const dummyResponderNew = {}
                    extend(dummyResponderNew, dummyResponder)
                    this.deviceList = [dummyResponderNew]
                    // use new list
                    // eslint-disable-next-line no-unused-vars
                    for (let device of devices) {
                        console.log(`device ${device}`)
                        // filter results..
                        // if (device.vendorId) {
                        //     // console.log(device)
                        //     this.deviceList.push(device)
                        // }
                    }
                    this.deviceList.push(...devices)
                    // cleanup
                    this.deviceSelected = this.deviceList[this.deviceList.length - 1]
                    this.deviceSearching = false
                } else {
                    console.error('HID.devices:', 'failed.')
                    this.deviceSearching = false
                }
            } else {
                // simulate a delay
                setTimeout(() => {
                    // we're done, we reset loading state
                    const dummyResponderNew = {}
                    // https://quasar.dev/quasar-utils/other-utils#(Deep)-Copy-Objects
                    extend(dummyResponderNew, dummyResponder)
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
            // console.info('list of HID devices:')
            // for (let device of HID.devices()) {
            //     console.log(device)
            // }

            // console.group('setup HID usage')
            try {
                HID.devices()
                this.hidAvailable = true
            } catch (e) {
                this.hidAvailable = false
                console.error(e)
            }
            // console.groupEnd()
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
        this.deviceClose()
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
