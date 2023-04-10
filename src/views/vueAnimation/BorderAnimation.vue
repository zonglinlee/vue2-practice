<template>
    <div>
        <div
            id="div1"
            class="center-display w-64 p-2 border-4 border-green-900 hover:border-orange-600 :hover:border-4 transition duration-300"
        >
            border-color-transition
        </div>
        <div
            id="div2"
            class="center-display mt-4 w-64 p-2 border-4 border-green-900"
        >
            border-color-animation-at-init
        </div>
        <div style="background: #181818" class="p-6 mt-2">
            <div class="container" id="div4"></div>
        </div>
        <div id="div5" class="text-center mt-2 w-64">div5</div>
        <div class="btn-primary w-64 mt-2" @click="scrollToElement">
            scrollToElement
        </div>
        <div
            id="div3"
            style="margin-top: 1500px; margin-bottom: 200px"
            class="center-display mt-4 w-1/2 p-2 border border-gray-900"
        >
            <div class="btn-primary" @click="addBorderAnimation">
                click-to-add-border-color-animation
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BorderAnimation',
    mounted() {},
    methods: {
        addBorderAnimation() {
            const div3 = document.querySelector('#div3')
            const flag = div3.classList.contains('div3-border')
            if (!flag) {
                div3.classList.add('div3-border')
            } else {
                div3.classList.remove('div3-border')
            }
        },
        scrollToElement() {
            const div3 = document.querySelector('#div3')
            // div3.scrollIntoView({ behavior: 'smooth' })
            div3.scrollIntoView()
            this.addBorderAnimation()
        },
    },
}
</script>
<style>
.div3-border {
    border-color: red;
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both,
        border-color-animation2 0.25s infinite;
}
@keyframes border-color-animation1 {
    to {
        border-color: orangered;
    }
}
@keyframes border-color-animation2 {
    to {
        border-color: rgba(255, 0, 0, 0.5);
    }
}
@keyframes shake-bottom {
    0%,
    100% {
        transform: rotate(0deg);
        transform-origin: 50% 100%;
    }
    10% {
        transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
        transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
        transform: rotate(4deg);
    }
    80% {
        transform: rotate(-2deg);
    }
    90% {
        transform: rotate(2deg);
    }
}
</style>
<style scoped lang="scss">
#div2 {
    animation: border-color-animation1 2s ease-in-out infinite alternate;
}

.container {
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 16px 14px 20px #0000008c;
}

.container::before {
    content: '';
    background-image: conic-gradient(#0084ff 20deg, transparent 120deg);
    width: 150%;
    height: 150%;
    position: absolute;
    animation: border 3s linear infinite;
}

.container::after {
    position: absolute;
    width: 210px;
    height: 210px;
    content: 'CSS is fun';
    display: flex;
    justify-content: center;
    color: #0084ff;
    align-items: center;
    font-family: sans-serif;
    font-size: 30px;
    font-weight: 100;
    text-transform: uppercase;
    border-radius: 10px;
    background: #0e0e0e;
    box-shadow: inset 20px 20px 20px #0000008c;
}

@keyframes border {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}
#div5 {
    position: relative;
    text-align: center;
    font-size: 24px;
    height: 100px;
    line-height: 100px;
    width: 300px;
    box-sizing: border-box;
    cursor: pointer;
    &::before,
    &::after {
        box-sizing: border-box;
        position: absolute;
        display: block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border: solid 1px red;
        transition: clip-path 0.3s linear;
    }
    &::before {
        clip-path: inset(0 250px 70px 0);
    }
    &::after {
        clip-path: inset(70px 0 0 250px);
    }
    &:hover {
        &::before,
        &::after {
            clip-path: inset(0 0 0 0);
        }
    }
}
</style>
