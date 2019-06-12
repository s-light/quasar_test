
<!-- usage:

<LogView
    class="q-mt-md q-pa-sm"
    ref="mylog"
    logCountMax="500"
    directionInSymbol="→"
    directionOutSymbol="*"
    directionSpecialSymbol="~"
    directionCommentSymbol="#"
    showDemoData
    v-bind:log.sync="log"
/>

-->

<template>
    <section
        class="log"
    >
        <div
            class="line row"
            v-for="(line, index) in logInternal"
            :key="index"
        >
            <div class="info q-px-sm">
                {{ line.time | timeOnly }} {{ line.direction }}
            </div>
            <pre class="col-grow">{{ line.text }}</pre>
        </div>
    </section>
</template>

<style lang="stylus">
    .log
        flex-grow: 2
        align-self: stretch
        min-width: 50vw
        max-width: 100vw
        max-height: calc(100vh - 15em);
        min-height: 5em;
        overflow: auto
        background-color: hsla(0, 0, 0, 0.05)
        font-size: 1em
        line-height: 129%
        font-family: Overpass-mono
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

<script>
import { date } from 'quasar'

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
    props: {
        log: {
            type: Array,
            default: function () {
                return []
            }
        },
        logCountMax: {
            type: Number,
            default: 500
        },
        // https://stackoverflow.com/questions/33253275/what-unicode-symbol-represents-a-person
        // direction: '👤',
        directionOutSymbol: {
            type: String,
            default: '→'
        },
        directionInSymbol: {
            type: String,
            default: '*'
        },
        directionSpecialSymbol: {
            type: String,
            default: '~'
        },
        directionCommentSymbol: {
            type: String,
            default: '#'
        },
        showDemoData: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            logInternal: []
        }
    },
    computed: {
    },
    methods: {
        addEntry: function (text, direction = this.directionInSymbol, time = new Date()) {
            const logEntry = {
                direction: direction,
                time: time,
                text: text
            }
            this.logInternal.push(logEntry)
            // limit log length
            while (this.logInternal.length > this.logCountMax) {
                this.logInternal.shift()
            }
            this.$emit('update:log', this.logInternal)
        },
        addEntryOut: function (text) {
            this.addEntry(
                text,
                this.directionOutSymbol,
                new Date()
            )
        },
        addEntryIn: function (text) {
            this.addEntry(
                text,
                this.directionInSymbol,
                new Date()
            )
        },
        addEntrySpecial: function (text) {
            this.addEntry(
                text,
                this.directionSpecialSymbol,
                new Date()
            )
        },
        addEntryComment: function (text) {
            this.addEntry(
                text,
                this.directionCommentSymbol,
                new Date()
            )
        },
        clear: function () {
            this.logInternal = []
        }
    },
    watch: {
    },
    mounted: function () {
        if (this.showDemoData) {
            this.logInternal = demoData
        } else {
            this.logInternal = this.log
        }
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
</script>
