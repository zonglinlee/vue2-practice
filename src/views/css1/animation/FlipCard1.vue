<template>
    <div>
        <div class="container">
            <div class="right">
                <div class="text-lg header-title">hello-world</div>
                <div class="flip-card" ref="card">
                    <div class="front card-content" @click="loadingFlip">
                        <div v-if="!showFlipLoading">
                            <div class="title">XXXXX</div>
                            <div class="title">WWWWW</div>
                        </div>
                        <div v-else class="load-wrapper">
                            <div class="load-3">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="back card-content">
                        <div class="number" ref="number">x</div>
                    </div>
                </div>
                <button class="next-btn" @click="nextLottery">btn-demo</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlipCard1',
    props: {
        parentRow: {
            type: Object,
        },
    },
    data() {
        return {
            showJump: true,
            showFlipLoading: false,
        }
    },
    methods: {
        loadingFlip() {
            this.showFlipLoading = true
            setTimeout(this.flipCard, 1000)
        },
        flipCard() {
            if (this.$refs.card.classList.contains('flipped-out')) {
                this.$refs.card.classList.remove('flipped-out')
                this.$refs.card.classList.add('flipped-in')
                this.$refs.number.classList.add('pop-number')
            } else {
                this.$refs.card.classList.add('flipped-in')
                this.$refs.number.classList.add('pop-number')
            }
        },
        nextLottery() {
            this.showFlipLoading = false
            if (this.$refs.card.classList.contains('flipped-in')) {
                this.$refs.card.classList.remove('flipped-in')
                this.$refs.number.classList.remove('pop-number')
                this.$refs.card.classList.add('flipped-out')
            }
        },
    },
}
</script>

<style scoped lang="scss">
$bg: #2672ae;
$shadow: #aeafb1;
%three-d-effect-btn {
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background: $bg;
    outline: none;
    width: 220px;
    color: white;
    padding: 8px 10px;
    cursor: pointer;
    user-select: none;
    text-shadow: 0 1px 0 #cccccc, 0 5px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 1px 0 $shadow;
    transition: 0.3s;

    &:hover {
        background: lighten($bg, 5%);
    }

    &:active {
        background: darken($bg, 5%);
        transform: translateY(4px);
        box-shadow: 0 4px 1px 0 darken($shadow, 20%);
    }
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;

    .right {
        flex: 50%;
        max-width: 350px;
        text-align: center;
        padding-top: 15px;

        .header-title {
            text-shadow: 0 1px 0 #cccccc, 0 20px 15px rgba(0, 0, 0, 0.3);
        }
    }
}

.flip-card {
    position: relative;
    perspective: 800px;
    transform-style: preserve-3d;
    text-align: center;
    //border: solid 1px #efeeee;
    width: 220px;
    height: 240px;
    margin: 15px auto 0 auto;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

    .card-content {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        transition: 0.3s;
    }

    .front,
    .back {
        border-radius: 10px;
    }

    .front {
        background: rgba(248, 116, 116, 0.96);
        cursor: pointer;

        .title {
            font-size: 20px;
            text-shadow: 0 1px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
        }

        .title:first-child {
            margin-bottom: 25px;
        }
    }

    .back {
        .number {
            font-size: 90px;
            text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
                0 50px 30px rgba(0, 0, 0, 0.3);
        }

        background: #1ab394;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }
}

.flipped-in {
    animation: flip-2-ver-left-1 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

.flipped-out {
    animation: flip-2-ver-left-1-reverse 0.8s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

.pop-number {
    animation: popup 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

.next-btn {
    @extend %three-d-effect-btn;
    margin: 30px auto 0 auto;
}

@keyframes flip-2-ver-left-1 {
    0% {
        transform: translateX(0) rotateY(0);
        transform-origin: 0% 50%;
    }
    50% {
        transform: translateX(-100%) rotateY(180deg);
        transform-origin: 100% 0%;
    }
    65% {
        transform: translateX(-110%) rotateY(180deg) translateY(-10%) scale(1.2);
        transform-origin: 100% 0%;
    }
    85% {
        transform: translateX(-110%) rotateY(180deg) translateY(-10%) scale(1.2);
        transform-origin: 100% 0%;
    }
    100% {
        transform: translateX(-100%) rotateY(180deg) scale(1);
        transform-origin: 100% 0%;
    }
}

@keyframes flip-2-ver-left-1-reverse {
    0% {
        transform: translateX(-100%) rotateY(180deg);
        transform-origin: 100% 0%;
    }

    100% {
        transform: translateX(0) rotateY(0);
        transform-origin: 0% 50%;
    }
}

@keyframes popup {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1.5);
    }
    85% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

/** loading style */

.load-wrapper {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    white-space: nowrap;
}

.load-wrapper p {
    padding: 0 0 20px;
}

.load-3 .line:not(:last-child) {
    margin-right: 8px;
}

.load-wrapper:last-child {
    margin-right: 0;
}

.line {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
}

.line:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
}

.load-3 .line:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
}

.load-3 .line:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
}

@keyframes loadingC {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 15px);
    }
    100% {
        transform: translate(0, 0);
    }
}

/**  jump dialog */
::v-deep .jump-dialog {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .el-dialog__close {
        color: black;
    }
    .jump-header {
        text-align: center;
        svg {
            font-size: 64px;
        }
    }
    .jump-body {
        text-align: center;
        font-size: 20px;
    }
    .dialog-footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .three-d-btn {
            width: 120px;
        }
        .cancel {
            $bg: #2672ae;
            @extend %three-d-effect-btn;
        }
        .confirm {
            width: fit-content;
            $bg: rgba(248, 116, 116, 0.96);
            @extend %three-d-effect-btn;
        }
    }
}
</style>
