<template>
    <div>
        <div class="btn-primary w-16 mb-2" @click="addRec">框选</div>
        <div class="btn-primary w-32 mb-2" @click="getCoordinates">
            获取坐标
        </div>
        <canvas
            :width="maxWidth"
            height="600"
            id="canvas1"
            ref="canvas1"
        ></canvas>
    </div>
</template>

<script>
import { fabric } from 'fabric' // v5
export default {
    name: 'FabricDemo2',
    data() {
        return {
            maxWidth: 600,
            canvas: null,
            scaleRatio: 1,
            rectList: [],
        }
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        async initCanvas() {
            // create a wrapper around native canvas element (with id="c")
            const canvas = new fabric.Canvas('canvas1')
            this.canvas = canvas
            //  add image onto canvas
            const url = 'https://wallpapercave.com/wp/wp4633360.jpg'

            const img = await this.getImgInfo(url)
            const imgWidth = img.width
            const maxWidth = this.maxWidth
            if (imgWidth > maxWidth) {
                this.scaleRatio = maxWidth / imgWidth
            }
            const scaleHeight = this.scaleRatio * img.height
            canvas.setHeight(scaleHeight)
            const that = this
            fabric.Image.fromURL(url, function (oImg) {
                oImg.scale(that.scaleRatio)
                oImg.set('selectable', false)
                canvas.add(oImg)
            })
        },
        getImgInfo(url) {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.src = url
                img.onload = () => {
                    resolve(img)
                }
                img.onerror = (event) => {
                    reject(event)
                }
            })
        },
        addRec() {
            const rect = new fabric.Rect({
                left: 20,
                top: 20,
                width: 100,
                height: 100,
                fill: 'transparent',
                stroke: 'black',
                strokeWidth: 1,
            })
            const tipText = new fabric.Text('请输入提示文字', {
                left: 20,
                top: 125,
                fontSize: 12,
                textAlign: 'center',
            })
            const group = new fabric.Group([rect, tipText], {
                left: 20,
                top: 20,
            })
            // this.canvas.setActiveObject(group)
            // this.canvas.add(rect)
            this.canvas.add(tipText)
            // this.canvas.add(group)
            // this.rectList.push(rect)
        },
        getCoordinates() {
            const result = this.rectList.map((item) => {
                const width = item.get('width')
                const height = item.get('height')
                const left = item.get('left')
                const top = item.get('top')
                return [
                    width * this.scaleRatio,
                    height * this.scaleRatio,
                    left * this.scaleRatio,
                    top * this.scaleRatio,
                ]
            })
            console.log(result)
        },
    },
}
</script>

<style scoped lang="scss">
#canvas1 {
    border: solid 1px #cccccc;
}
</style>
