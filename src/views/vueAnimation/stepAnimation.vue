<template>
    <div class="box"></div>
</template>

<script>
export default {
    name: 'stepAnimation',
}
</script>

<style scoped lang="scss">
.box {
    width: 256px;
    height: 256px;
    background: url('../../assets/images/runSprite.png');
    animation: sprite 0.6s steps(6, end) infinite;
}
@keyframes sprite {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -1536px 0;
    }
}
</style>
