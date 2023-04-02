<template>
    <div>
        <div class="mask1">
            <img :src="galaxyImg" alt="Galaxy" width="600" />
        </div>
    </div>
</template>

<script>
import galaxyImg from '../../../assets/images/galaxy1.jpg'
export default {
    name: 'maskImage',
    data() {
        return {
            galaxyImg,
        }
    },
}
</script>

<style scoped lang="scss">
.mask1 {
    mask-image: url('../../../assets/images/w3logo.png');
    mask-repeat: no-repeat;
    mask-position: 50% 50%;
    img {
        filter: blur(2px);
    }
}
</style>
