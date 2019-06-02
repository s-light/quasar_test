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
                v-model="device_selected"
                :options="device_list"
                :disable="device_ready"
            >
                <template v-slot:append>
                    <q-btn
                        flat
                        round
                        dense
                        hint="search devices"
                        icon="refresh"
                        :disable="device_ready"
                        :loading="device_searching"
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
                :icon="device_ready ? 'phonelink_off' : 'phonelink'"
                :style="{opacity: (device_selected ? 'inherit' : '0.05')}"
                :loading="device_connecting"
                @click="toggleConnect()"
                :label="device_ready ? 'disconnect' : 'connect'"
                :disable="!device_selected"
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
                v-model="messagae_to_send"
                :disable="!device_ready"
                @keyup.enter="messageSend()"
            >
                <template v-slot:append>
                    <q-icon
                        :style="{opacity: (messagae_to_send !== '' ? 'inherit' : '0.1')}"
                        name="close"
                        @click="messagae_to_send = ''"
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
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
import { date } from 'quasar'

// test import..
var sp = require('serialport');
sp.list(function(err, ports) {
    console.log(ports);
});

const demoData = [
    {
        direction: '*',
        time: '2019-06-02T11:42:42.000Z',
        text: 'First Line'
    },
    {
        direction: '*',
        time: '2019-06-02T11:42:42.010Z',
        text: 'second line'
    },
    {
        direction: '*',
        time: '2019-06-02T11:42:42.102Z',
        text: 'line with\nmultiline\n content'
    },
    {
        direction: '*',
        time: '2019-06-02T11:42:42.200Z',
        text: ''
    },
    {
        direction: '*',
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
        direction: '*',
        time: '2019-06-02T11:43:00.000Z',
        text: 'the end..'
    }
]

export default {
    name: 'HidTest',
    data () {
        return {
            device_list: [
                'dummyResponder',
                'ttyUSB0',
                'ttyUSB1',
                'ttyACM0',
                'ttyACM1'
            ],
            device_selected: 'dummyResponder',
            device_searching: false,
            device_connecting: false,
            device_ready: false,
            messagae_to_send: 'Hello World :-)',
            log: demoData
        }
    },
    methods: {
        toggleConnect () {
            this.device_connecting = true
            // simulate a delay
            setTimeout(() => {
                // we're done, we reset loading state
                this.device_connecting = false
                this.device_ready = !this.device_ready
            }, 1000)
        },
        messageSend () {
            console.log('send message:', this.messagae_to_send)
            // TODO(s-light): implement sending
            const logEntry = {
                direction: '>',
                time: new Date(),
                text: this.messagae_to_send
            }
            this.log.push(logEntry)
            if (this.device_selected === 'dummyResponder') {
                const recMessage = this.messagae_to_send
                // simulate a delay
                setTimeout(() => {
                    this.messageReceive(recMessage)
                }, 500)
            }
            this.messagae_to_send = ''
        },
        messageReceive (value) {
            // console.log('receive message:', value)
            const logEntry = {
                direction: '<',
                time: new Date(),
                text: value
            }
            this.log.push(logEntry)
        },
        search () {
            this.device_searching = true
            // simulate a delay
            setTimeout(() => {
                // we're done, we reset loading state
                this.device_searching = false
                this.device_list.push('xyz')
            }, 2000)
        }
    },
    computed: {
        // example_computed: function () {
        //     return
        // }
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
