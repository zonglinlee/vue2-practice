<template>
    <div>
        <!--  https://wallpapercave.com/wp/wp4633360.jpg-->
        <canvas width="500" height="500" id="canvas1" ref="canvas1"></canvas>
    </div>
</template>

<script>
import { fabric } from 'fabric' // v5
export default {
    name: 'FabricDemo1',
    data() {
        return {}
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        initCanvas() {
            // create a wrapper around native canvas element (with id="c")
            const canvas = new fabric.Canvas('canvas1')

            // create a rectangle object
            const rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'red',
                width: 50,
                height: 50,
                angle: 45,
            })
            const circle = new fabric.Circle({
                radius: 30,
                fill: 'green',
                left: 100,
                right: 100,
            })
            // add rectangle onto canvas
            canvas.add(rect)
            canvas.setActiveObject(rect)
            // add circle onto canvas
            circle.set('selectable', false)
            circle.set({ strokeWidth: 2, stroke: 'blue' })
            canvas.add(circle)
            // rerender to change the position of rectangle
            setTimeout(() => {
                rect.set({ top: 100, left: 100 })
                canvas.renderAll()
            }, 1000)

            //  add image onto canvas
            const minionsImage =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KJdAauJBp5F8ZNSEpn8CrKm5G00pAXOtGY6Vo6MASlK0mSTztV0vRKFVN_oLlXGA6fo&usqp=CAU'
            fabric.Image.fromURL(minionsImage, function (oImg) {
                oImg.scale(0.3)
                oImg.set({ left: 150, top: 150 })
                canvas.add(oImg)
            })
        },
    },
}
</script>

<style scoped lang="scss">
#canvas1 {
    border: solid 1px #cccccc;
}
</style>
