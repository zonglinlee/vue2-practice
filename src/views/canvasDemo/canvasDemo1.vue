<template>
    <div>
        <canvas width="500" height="500" id="canvas" ref="canvas1"></canvas>
    </div>
</template>

<script>
export default {
    name: 'canvasDemo1',
    data() {
        return {
            canvasData: [16, 68, 20, 30, 54],
        }
    },
    mounted() {
        this.drawCanvas()
    },
    methods: {
        drawCanvas() {
            const ctx = this.$refs.canvas1.getContext('2d')
            this.ctx = ctx
            ctx.fillStyle = '#cccccc'
            ctx.fillRect(0, 0, 500, 500)
            // draw data
            ctx.fillStyle = 'blue'
            for (let i = 0; i < this.canvasData.length; i++) {
                const dp = this.canvasData[i]
                ctx.fillRect(40 + i * 100, 500 - dp * 5 - 40, 50, dp * 5)
            }
            //draw axis lines
            ctx.fillStyle = 'black'
            ctx.lineWidth = 2.0
            ctx.beginPath()
            ctx.moveTo(30, 10)
            ctx.lineTo(30, 460)
            ctx.lineTo(490, 460)
            ctx.stroke()
            //draw text and vertical lines
            ctx.fillStyle = 'black'
            for (let i = 0; i < 6; i++) {
                ctx.fillText((5 - i) * 20 + '', 4, i * 80 + 60)
                ctx.beginPath()
                ctx.moveTo(25, i * 80 + 60)
                ctx.lineTo(30, i * 80 + 60)
                ctx.stroke()
            }

            const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
            //draw horiz text
            for (let i = 0; i < 5; i++) {
                ctx.fillText(labels[i], 50 + i * 100, 475)
            }
        },
    },
}
</script>

<style scoped lang="scss"></style>
