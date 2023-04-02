<template>
    <div>
        <a
            href="https://www.w3schools.com/howto/howto_css_flip_image.asp"
            class="m--20"
            style="display: block"
            >howto_css_flip_image:</a
        >
        <p class="m--20">
            让背面和正面初始状态处于一个垂直状态，即背面先旋转180度，这样背面即处于不可见状态，然后hover时候整体旋转180，此时正面垂直于屏幕（不可见），背面平行于屏幕（可见）
        </p>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img :src="galaxyImg" alt="Paris" />
                </div>
                <div class="flip-box-back">
                    <h2>Galaxy</h2>
                    <p>beautiful galaxy!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import galaxyImg from '@/assets/images/galaxy1.jpg'
export default {
    name: 'FlipImage',
    data() {
        return {
            galaxyImg,
        }
    },
}
</script>

<style scoped lang="scss">
.flip-box {
    width: 300px;
    height: 200px;
    perspective: 800px;
    cursor: pointer;
    &:hover .flip-box-inner {
        transform: rotateY(180deg);
    }
    .flip-box-inner {
        position: relative;
        transform-style: preserve-3d;
        transition: 0.8s;
        width: 100%;
        height: 100%;
        .flip-box-front,
        .flip-box-back {
            backface-visibility: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .flip-box-front {
            img {
                width: 100%;
            }
        }
        .flip-box-back {
            text-align: center;
            background: grey;
            color: white;
            transform: rotateY(180deg);
            border: solid 1px;
        }
    }
}
</style>
