<template>
    <div class="wrap">
        <div class="g-container">
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
        </div>
        <div class="g-container g-steps">
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
        </div>
        <div class="g-container g-animation">
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
            <div class="g-box"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
}
</script>

<style scoped lang="scss">
$count: 20;

.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #000;
}

.g-container {
    position: relative;
    height: 300px;
    margin: auto;
}

.g-box {
    position: absolute;
    top: 50%;
    left: 50%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #01fd28;
        border-radius: 50%;
    }
}

@for $i from 1 to $count + 1 {
    .g-box:nth-child(#{$i}) {
        --width: 20px;
        width: var(--width);
        height: var(--width);
        margin-top: calc(var(--width) / -2);
        margin-left: calc(var(--width) / -2);
        transform: rotate(#{$i * 18}deg) translate(0, 80px);

        &::before {
            // animation: scale 2s infinite #{$i * -0.1}s linear;
            filter: hue-rotate(#{$i / 20 * 360}deg);
            transform: scale(#{$i / 20 * 1});
            will-change: transform;
        }
    }
}

.g-steps {
    animation: rotate 2s steps(20) infinite;
}
.g-animation {
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes scale {
    100% {
        transform: scale(0);
    }
}

@keyframes scaleAndHueRotate {
    100% {
        transform: scale(0);
        filter: hue-rotate(360deg);
    }
}
</style>
