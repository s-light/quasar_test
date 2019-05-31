<template>
    <div id="canvas_text_render">
        <canvas id="canvas" :height="height" :width="">{{ value }}</canvas>
    </div>
</template>

<style>
    canvas {
        border: 1px solid black;
    }
</style>

<script>
export default {
    name: 'CanvasTextRender',
    el: 'canvas',
    // props: ['value', 'font', 'width', 'height'],
    props: {
        value: String,
        fontFamily: String,
        // fontSize: Number,
        fontWeight: Number,
        italic: Boolean
        height: Number,
        // width: Number,
    },
    data () {
        return {
            testmessage: '16:05 Here we have some text...',
        }
    },
    computed: {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/font
        font: function () {
            let font = ''
            font +=  ' ' + this.fontFamily
            // font += ' ' + this.fontSize
            font += ' ' + this.height
            if (this.italic) {
                font += ' italic'
            }
            return font
        },
        canvas_width: function () {
            const ctx = this.el.getContext("2d");
            return ctx.measureText(this.value).width
        }
    },
    methods: {
        updateCanvas: function () {
            // Get canvas context
            const ctx = this.el.getContext("2d");
            ctx.clearRect(0, 0, 300, this.height);
            ctx.fillStyle = "black";
            ctx.font = this.font;
            ctx.fillText(this.value, 0, this.height);
        }
    },
    watch: {
        value: function () {
            this.updateCanvas()
        },
        font: function () {
            this.updateCanvas()
        },
        height: function () {
            this.updateCanvas()
        }
    }
}
</script>
