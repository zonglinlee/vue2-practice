<template>
    <div style="height: 80vh; overflow: hidden" class="relative bg-blue-800">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </div>
</template>

<script>
export default {
    name: 'BackgroundWave',
}
</script>

<style scoped lang="scss">
.wave {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 110px;
    background: url('../../assets/images/wave.png');
    background-size: 1000px 110px;
}
.wave1 {
    opacity: 0.7;
    animation: move 10s linear infinite alternate;
}
.wave2 {
    opacity: 0.5;
    animation: move 15s linear infinite alternate;
    animation-delay: -5s;
}
.wave3 {
    opacity: 0.3;
    bottom: -10px;
    animation: move 20s linear infinite alternate;
    animation-delay: -10s;
}
.wave4 {
    opacity: 0.2;
    bottom: -10px;
    animation: move 25s linear infinite alternate;
    animation-delay: -15s;
}

@keyframes move {
    from {
        background-position-x: 0;
    }
    to {
        background-position-x: 500px;
    }
}
</style>
