<template>
    <div class="container">
        <div class="m--20">
            <a href="https://www.w3schools.com/howto/howto_js_image_zoom.asp"
                >howto_js_image_zoom</a
            >
        </div>
        <div class="img-zoom-container">
            <img id="myimage" :src="galaxyImg" width="300" height="240" />
            <div id="myresult" class="img-zoom-result"></div>
        </div>
    </div>
</template>

<script>
import galaxyImg from '@/assets/images/galaxy1.jpg'
export default {
    name: 'ImageZoom',
    data() {
        return {
            galaxyImg,
        }
    },
    mounted() {
        this.zoomImg()
    },
    methods: {
        zoomImg() {
            const myImage = document.querySelector('#myimage')
            const myResult = document.querySelector('#myresult')
            /* Create lens: */
            const lens = document.createElement('div')
            lens.classList.add('img-zoom-lens')
            myImage.parentElement.insertBefore(lens, myImage)
            /* Calculate the ratio between result DIV and lens: */
            const cx = myResult.offsetWidth / lens.offsetWidth
            const cy = myResult.offsetHeight / lens.offsetHeight
            /* Set background properties for the result DIV */
            myResult.style.backgroundImage = `url(${myImage.src})`
            myResult.style.backgroundSize =
                myImage.width * cx + 'px ' + myImage.height * cy + 'px'
            /* Execute a function when someone moves the cursor over the image, or the lens: */
            lens.addEventListener('mousemove', moveLens)
            myImage.addEventListener('mousemove', moveLens)
            /* And also for touch screens: */
            lens.addEventListener('touchmove', moveLens)
            myImage.addEventListener('touchmove', moveLens)
            function moveLens(e) {
                let pos, x, y
                /* Prevent any other actions that may occur when moving over the image */
                e.preventDefault()
                /* Get the cursor's x and y positions: */
                pos = getCursorPos(e)
                /* Calculate the position of the lens: */
                x = pos.x - lens.offsetWidth / 2
                y = pos.y - lens.offsetHeight / 2
                /* Prevent the lens from being positioned outside the image: */
                if (x > myImage.width - lens.offsetWidth) {
                    x = myImage.width - lens.offsetWidth
                }
                if (x < 0) {
                    x = 0
                }
                if (y > myImage.height - lens.offsetHeight) {
                    y = myImage.height - lens.offsetHeight
                }
                if (y < 0) {
                    y = 0
                }
                /* Set the position of the lens: */
                lens.style.left = x + 'px'
                lens.style.top = y + 'px'
                /* Display what the lens "sees": */
                myResult.style.backgroundPosition =
                    '-' + x * cx + 'px -' + y * cy + 'px'
            }
            function getCursorPos(e) {
                let a,
                    x = 0,
                    y = 0
                e = e || window.event
                console.log(e)
                /* Get the x and y positions of the image: */
                a = myImage.getBoundingClientRect()
                /* Calculate the cursor's x and y coordinates, relative to the image: */
                x = e.pageX - a.left
                y = e.pageY - a.top
                /* Consider any page scrolling: */
                x = x - window.pageXOffset
                y = y - window.pageYOffset
                return { x, y }
            }
        },
    },
}
</script>
<style>
.img-zoom-lens {
    position: absolute;
    border: 1px solid red;
    /*set the size of the lens:*/
    width: 40px;
    height: 40px;
}
</style>
<style scoped lang="scss">
.container * {
    box-sizing: border-box;
}
.img-zoom-container {
    position: relative;
}

.img-zoom-result {
    width: 300px;
    height: 300px;
    border: solid 1px #cccccc;
    margin-top: 20px;
}
</style>
