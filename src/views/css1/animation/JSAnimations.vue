<template>
    <div>
        <div class="m--20">click div</div>
        <div class="common-div div1" @click="fn1"></div>
        <div class="m--20">click progress bar</div>
        <progress id="progressEle" style="cursor: pointer" @click="progress" />
        <div class="m--20">click red brick</div>
        <div id="path">
            <div id="brick" @click="brick"></div>
        </div>

        <div class="m--20">
            <button @click="typeText">click to type</button>
        </div>
        <textarea id="textExample" rows="5" cols="60">
            He took his vorpal sword in hand:
            Long time the manxome foe he sought—
            So rested he by the Tumtum tree,
            And stood awhile in thought.</textarea
        >
    </div>
</template>

<script>
export default {
    name: 'JSAnimations',
    mounted() {},
    methods: {
        fn1() {
            this.start = Date.now()
            const that = this
            let timer = window.requestAnimationFrame(function go() {
                // how much time passed from the start?
                let timePassed = Date.now() - that.start
                // console.log(timePassed, that.start)
                if (timePassed >= 2000) {
                    window.cancelAnimationFrame(timer) // finish the animation after 2 seconds
                } else {
                    window.requestAnimationFrame(go)
                }
                // draw the animation at the moment timePassed
                draw(timePassed)
            })

            // as timePassed goes from 0 to 2000 left gets values from 0px to 400px
            function draw(timePassed) {
                $('.div1').css({ left: timePassed / 5 + 'px' })
            }
        },
        /**
         * @param duration Total time of animation
         * @param timing timeFraction,Timing function, like CSS-property transition-timing-function
         * that gets the fraction of time that passed (0 at start, 1 at the end) and returns the animation completion (like y on the Bezier curve)
         * @param draw progress,The function that takes the animation completion state and draws it. The value progress=0 denotes the beginning animation state, and progress=1 – the end state.
         * */
        animate({ timing, draw, duration }) {
            let start = performance.now()

            requestAnimationFrame(function animate(time) {
                // timeFraction goes from 0 to 1
                let timeFraction = (time - start) / duration
                if (timeFraction > 1) timeFraction = 1

                // calculate the current animation state
                let progress = timing(timeFraction)
                console.log('progress::', progress)
                draw(progress) // draw it

                if (timeFraction < 1) {
                    requestAnimationFrame(animate)
                }
            })
        },
        progress() {
            this.animate({
                duration: 1000,
                timing: function (timeFraction) {
                    return timeFraction
                },
                draw: function (progress) {
                    progressEle.style.width = progress * 100 + '%'
                },
            })
        },
        brick() {
            let bounceEaseOut = this.makeEaseOut(this.bounce)
            this.animate({
                duration: 3000,
                timing: bounceEaseOut,
                draw: function (progress) {
                    brick.style.left = progress * 500 + 'px'
                },
            })
        },
        typeText() {
            let text = textExample.value
            let to = text.length,
                from = 0

            this.animate({
                duration: 5000,
                timing: this.bounce,
                draw: function (progress) {
                    let result = (to - from) * progress + from
                    textExample.value = text.slice(0, Math.ceil(result))
                },
            })
        },
        makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction)
            }
        },
        bounce(timeFraction) {
            // eslint-disable-next-line no-constant-condition
            for (let a = 0, b = 1; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return (
                        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +
                        Math.pow(b, 2)
                    )
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
.common-div {
    width: 50px;
    height: 50px;
    background: #0c455e;
    cursor: pointer;
}
.div1 {
    position: relative;
}
#brick {
    width: 40px;
    height: 20px;
    background: #ee6b47;
    position: relative;
    cursor: pointer;
}

#path {
    outline: 1px solid #e8c48e;
    width: 540px;
    height: 20px;
}
textarea {
    display: block;
    border: 1px solid #bbb;
    color: #444;
    font-size: 110%;
}
</style>
