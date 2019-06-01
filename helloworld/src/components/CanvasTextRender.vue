<template>
    <div class="canvas-text-render">
        <!-- :width="width" -->
        <canvas
            ref="canvas"
        >
            {{ value }}
        </canvas>
        <p>
            {{ width }}x{{ height }}
        </p>
    </div>
</template>

<style>
    canvas {
        border: 1px solid black;
    }
</style>

<script>
export default {
    // name: 'CanvasTextRender',
    // props: ['value', 'font', 'width', 'height'],
    props: {
        value: {
            type: String,
            default: ''
        },
        fontFamily: {
            type: String,
            default: 'sans'
        },
        fontSize: {
            type: Number,
            default: 11
        },
        fontWeight: {
            type: Number,
            default: 500
        },
        fontStyle: {
            type: String,
            default: ''
        },
        // width: {
        //     type: Number,
        //     default: 44
        // }
        height: {
            type: Number,
            default: 11
        }
    },
    data () {
        return {
            testmessage: '01:42 Hello World :-)',
            width: 100
            // height: 10
        }
    },
    computed: {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/font
        font: function () {
            let font = ''
            font += this.fontStyle + ' '
            font += this.fontWeight + ' '
            font += this.height + 'px'
            // font += ' ' + this.fontSize
            font += ' "' + this.fontFamily + '"'
            return font
        }
        // },
        // width: function () {
        //     let textWidth = 200
        //     if (this.$refs.canvas) {
        //         console.log('this.$refs.canvas', this.$refs.canvas)
        //         const ctx = this.$refs.canvas.getContext('2d')
        //         textWidth = ctx.measureText(this.value).width
        //     }
        //     console.log('textWidth', textWidth)
        //     return textWidth
        //     // return 100
        // }
    },
    methods: {
        updateCanvas: function () {
            // console.log('this', this)
            const canvas = this.$refs.canvas
            if (canvas) {
                const ctx = canvas.getContext('2d')

                // get new width
                let textWidth = ctx.measureText(this.value).width
                this.width = textWidth
                // ^- fires after updateCanvas is done and so clears the canvas..
                canvas.width = textWidth
                // console.log('textWidth', textWidth)

                // clean up
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                // console.log('this.font', this.font)
                // render
                ctx.fillStyle = 'black'
                ctx.font = this.font
                ctx.fillText(this.value, 0, this.height - 1)
            }
        }
    },
    watch: {
        value: function () {
            this.updateCanvas()
        },
        font: function () {
            this.updateCanvas()
            this.updateCanvas()
        },
        height: function (value) {
            const canvas = this.$refs.canvas
            if (canvas) {
                canvas.height = value
            }
            this.updateCanvas()
        }
        // width: function () {
        //     this.updateCanvas()
        // }
    },
    mounted: function () {
        const canvas = this.$refs.canvas
        if (canvas) {
            canvas.height = this.height
            canvas.width = this.width
        }
        this.updateCanvas()
        this.updateCanvas()
    }
}
</script>
