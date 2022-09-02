<template>
    <div>
        <div class="div1 m--100" @click="fn1"></div>
    </div>
</template>

<script>
import anime from '@/lib/anime/anime'
export default {
    name: 'animeDem',
    methods: {
        fn1() {
            anime({
                targets: 'div.div1',
                translateX: [
                    { value: 400, duration: 1000, delay: 500 },
                    { value: 0, duration: 1000, delay: 500 },
                ],
                translateY: [
                    { value: -80, duration: 500 },
                    { value: 200, duration: 500, delay: 1000 },
                    { value: 0, duration: 500, delay: 1000 },
                ],
                scaleX: [
                    {
                        value: 4,
                        duration: 100,
                        delay: 500,
                        easing: 'easeOutExpo',
                    },
                    { value: 1, duration: 900 },
                    {
                        value: 4,
                        duration: 100,
                        delay: 500,
                        easing: 'easeOutExpo',
                    },
                    { value: 1, duration: 900 },
                ],
                scaleY: [
                    { value: [1.75, 1], duration: 500 },
                    {
                        value: 2,
                        duration: 50,
                        delay: 1000,
                        easing: 'easeOutExpo',
                    },
                    { value: 1, duration: 450 },
                    {
                        value: 1.75,
                        duration: 50,
                        delay: 1000,
                        easing: 'easeOutExpo',
                    },
                    { value: 1, duration: 450 },
                ],
                easing: 'easeOutElastic(1, .8)',
                loop: false,
            })
        },
    },
}
</script>

<style scoped lang="scss">
.div1 {
    width: 50px;
    height: 50px;
    background: orangered;
    border-radius: 50%;
    cursor: pointer;
}
</style>
