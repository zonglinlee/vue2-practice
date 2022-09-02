<template>
    <div class="wrapper">
        <div class="card">
            <span class="inner-card-backface">
                <!-- back of the card -->
                <span class="image">
                    <span class="unflip">Unflip</span>
                </span>
            </span>
            <span class="inner-card">
                <!-- front of the card -->
                <span class="flip">Flip</span>
                <span class="glare"></span>
                <!-- to store the glare effect -->
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreeDCards',
    mounted() {
        this.addEvent()
    },
    methods: {
        calculateAngle(e, item, parent) {
            let dropShadowColor = `rgba(0, 0, 0, 0.3)`

            parent.classList.add('animated')
            // Get the x position of the users mouse, relative to the button itself
            let x = Math.abs(item.getBoundingClientRect().x - e.clientX)
            // Get the y position relative to the button
            let y = Math.abs(item.getBoundingClientRect().y - e.clientY)

            // Calculate half the width and height
            let halfWidth = item.getBoundingClientRect().width / 2
            let halfHeight = item.getBoundingClientRect().height / 2

            // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
            // Changing these numbers will change the depth of the effect.
            let calcAngleX = (x - halfWidth) / 6
            let calcAngleY = (y - halfHeight) / 14

            let gX = (1 - x / (halfWidth * 2)) * 100
            let gY = (1 - y / (halfHeight * 2)) * 100

            // Add the glare at the reflection of where the user's mouse is hovering
            item.querySelector(
                '.glare'
            ).style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`
            // And set its container's perspective.
            parent.style.perspective = `${halfWidth * 6}px`
            item.style.perspective = `${halfWidth * 6}px`

            // Set the items transform CSS property
            item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`
            parent.querySelector(
                '.inner-card-backface'
            ).style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`

            // Reapply this to the shadow, with different dividers
            let calcShadowX = (x - halfWidth) / 3
            let calcShadowY = (y - halfHeight) / 6

            // Add a filter shadow - this is more performant to animate than a regular box shadow.
            item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`
        },
        addEvent() {
            const that = this
            document.querySelectorAll('.card').forEach(function (item) {
                // For flipping the card backwards and forwards
                if (item.querySelector('.flip') !== null) {
                    item.querySelector('.flip').addEventListener(
                        'click',
                        function () {
                            item.classList.add('flipped')
                        }
                    )
                }

                // For 'unflipping' the card.
                if (item.querySelector('.unflip') !== null) {
                    item.querySelector('.unflip').addEventListener(
                        'click',
                        function () {
                            item.classList.remove('flipped')
                        }
                    )
                }

                // For when the user's mouse 'enters' the card
                item.addEventListener('mouseenter', function (e) {
                    that.calculateAngle(
                        e,
                        this.querySelector('.inner-card'),
                        this
                    )
                })

                // For when the users mouse moves on top of the card
                item.addEventListener('mousemove', function (e) {
                    that.calculateAngle(
                        e,
                        this.querySelector('.inner-card'),
                        this
                    )
                })

                // For when the user's mouse leaves the card.
                item.addEventListener('mouseleave', function () {
                    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
                    item.classList.remove('animated')
                    item.querySelector(
                        '.inner-card'
                    ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
                    item.querySelector(
                        '.inner-card-backface'
                    ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`
                    item.querySelector(
                        '.inner-card'
                    ).style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`
                })
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.wrapper {
    margin: 0;
    background: #152036;
    padding: 2rem;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    box-shadow: none;
    backface-visibility: visible;
    background: transparent;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
    transform-style: preserve-3d;
    padding: 0;
    margin: 0 2rem 4rem 0;
    width: 18rem;
    height: 25rem;
    transition: all 0.2s ease-out;
    border: none;
    letter-spacing: 1px;
}
.flip,
.unflip {
    background: rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 100px;
    line-height: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-out;
}
.card .flip,
.card .unflip {
    background: #1b29ed;
    box-shadow: 0 2px 20px #0b1485;
}

.card .inner-card-backface .image {
    background-image: url('../../assets/images/inner.png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 14px;
    height: 100%;
    transform: rotateY(180deg);
    background-size: auto 102%;
    background-position: -2px -5px;
}
.unflip {
    top: auto;
    background: #2d2d62;
    bottom: 1rem;
}
.flip:hover {
    background: rgba(0, 0, 0, 0.3);
}

.card .flip:hover,
.card .unflip:hover {
    background: #0f1cc5;
}
.inner-card-backface {
    transform: rotateX(0) rotateY(0deg) scale(1) translateZ(-4px);
    border-radius: 14px;
    background: linear-gradient(45deg, #0b0b2a, #0b0b2a);
    position: absolute;
    top: 0;
    color: white;
    padding: 2rem;
    box-sizing: border-box;
    transition: all 0.15s ease-out;
    will-change: transform, filter;
    left: 0;
    width: 100%;
    height: 100%;
}
.card.flipped {
    transform: rotateY(180deg);
}
.card .inner-card {
    font-size: 2rem;
    color: white;
    padding: 1rem 2rem;
    line-height: 3rem;
    will-change: transform, filter;
    float: none;
    background: black;
    background-size: calc(100% + 6px) auto;
    background-position: -3px -3px;
    transition: all 0.15s ease-out;
    border-radius: 14px;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    transform: rotateX(0deg) rotateY(0deg) scale(1);
    top: 0;
    height: 100%;
    filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
    font-weight: 500;
    perspective-origin: 0 0;
    letter-spacing: 0;
}
.card .inner-card {
    background-image: url('../../assets/images/blastoise.jpg');
}
.card .glare {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.1s ease-out;
    opacity: 0.6;
    pointer-events: none;
    height: 100%;
    border-radius: 14px;
    z-index: 9999;
    mix-blend-mode: hard-light;
    background: radial-gradient(
        circle at 50% 50%,
        rgb(199 198 243),
        transparent
    );
}

.card .glare {
    opacity: 0;
}
.card.animated .glare {
    opacity: 0.3;
}
</style>
