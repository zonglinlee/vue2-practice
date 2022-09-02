<template>
    <div class="wrapper">
        <div style="height: 120px; position: relative">
            <div class="div-common div1"></div>
            <p class="p1">
                The queue length is:
                <span>{{ queue1Len.length }} : {{ queue1Len }}</span>
            </p>
        </div>
        <button @click="triggerDiv2">trigger div2</button>
        <div style="height: 120px; position: relative">
            <div class="div-common div2"></div>
        </div>
        <p><button @click="triggerDiv3s">trigger div3s</button></p>
        <div class="div3-wrapper">
            <div class="div-common div3"></div>
            <div class="div-common div3"></div>
            <div class="div-common div3"></div>
            <div class="div-common div3"></div>
            <div class="div-common div3"></div>
            <div class="div-common div3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jquery1',

    data() {
        return {
            queue1Len: [],
        }
    },
    mounted() {
        this.div1()
    },
    methods: {
        runIt() {
            this.div1
                .show('slow')
                .animate({ left: '+=200' }, 2000)
                .slideToggle(1000)
                .slideToggle('fast')
                .animate({ left: '-=200' }, 1500)
                .hide('slow')
                .show(1200)
                .slideUp('normal', this.runIt)
        },

        showIt() {
            // Default queue name is 'fx', the standard effects queue.
            const n = this.div1.queue('fx')
            this.queue1Len = n
            setTimeout(this.showIt, 100)
        },
        div1() {
            this.div1 = $('.div1')
            this.runIt()
            this.showIt()
        },
        triggerDiv2() {
            $('.div2')
                .show('slow')
                .animate({ left: '+=200' }, 2000)
                .queue(function () {
                    $(this).addClass('newcolor').dequeue()
                })
                .animate({ left: '-=200' }, 500)
                .queue(function () {
                    $(this).removeClass('newcolor').dequeue()
                })
                .slideUp()
        },
        triggerDiv3s() {
            // 第一个 div 运动
            $('.div3')
                .first()
                .animate(
                    {
                        left: 100,
                    },
                    {
                        duration: 1000,
                        // eslint-disable-next-line no-unused-vars
                        step: function (now, fx) {
                            // console.log(now, fx)
                            // 其他的 div 依照第一个div设置 css left
                            $('.div3').slice(1).css('left', now)
                        },
                    }
                )
        },
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    min-height: 100%;
    .div-common {
        margin: 3px;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        top: 60px;
        display: none;
    }
    .p1 {
        color: red;
    }
    .div1 {
        background: green;
    }
    .div2 {
        background: #0c455e;
    }
    .div2.newcolor {
        background: blueviolet;
    }
    .div3-wrapper {
        display: flex;
    }
    .div3 {
        background: #abc;
        display: block;
        position: relative;
    }
}
</style>
