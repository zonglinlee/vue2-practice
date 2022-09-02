<template>
    <div class="wrapper">
        <div class="cards-wrapper">
            <div class="card-wrapper">
                <div class="card-1 card-object card-object-hf">
                    <a class="face front" href="#">
                        <div class="title-wrapper">
                            <div class="title">Jenny</div>
                            <div class="subtitle">hello world</div>
                        </div>
                    </a>
                    <a class="face back" href="#">
                        <div class="img-wrapper">
                            <div class="avatar"></div>
                        </div>
                        <div class="info-wrapper">
                            <div class="info-title">Jenny</div>
                            <ul class="info-content">
                                <li class="info-content-item">
                                    Age <span>6 years</span>
                                </li>
                                <li class="info-content-item">
                                    Length <span>46cm</span>
                                </li>
                                <li class="info-content-item">
                                    Weight <span>4kg</span>
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'flipCard',
    data() {
        return {
            cards: null,
        }
    },
    mounted() {
        this.cards = $('.card-object')
        const $faceButtons = $('.face')
        $faceButtons.on('click', this.flipCard)
    },
    methods: {
        openCard($card) {
            $card.removeClass('flip-out').queue(function () {
                // Force reflow hack
                // eslint-disable-next-line no-unused-vars
                let reflow = this.offsetHeight
                $(this).addClass('flip-in').dequeue()
            })
        },
        closeCards() {
            this.cards.each(function () {
                $(this)
                    .filter('.flip-in')
                    .removeClass('flip-in')
                    .queue(function () {
                        // Force reflow hack
                        // eslint-disable-next-line no-unused-vars
                        let reflow = this.offsetHeight
                        $(this).addClass('flip-out').dequeue()
                    })
            })
        },
        flipCard(event) {
            event.preventDefault()

            const $card = $(event.target).parent('.card-object')

            if ($card.hasClass('flip-in')) {
                this.closeCards()
            } else {
                this.closeCards()
                this.openCard($card)
            }
        },
    },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Archivo+Black');

.wrapper {
    font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 500px;
    background: #cfcfcf
        linear-gradient(
            45deg,
            rgba(22, 167, 175, 0.6) 5%,
            rgba(23, 27, 158, 0.7) 55%,
            rgba(68, 9, 82, 0.5) 100%
        )
        no-repeat;
    background-size: 200%;
    color: #222;
}

.cards-wrapper {
    position: relative;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-wrapper {
    display: block;
    position: relative;
    margin: 0;
    width: 28%;
    height: 0;
    padding: 0 0 28%;
    perspective: 700px;
}

.card-object {
    $size: 88%;
    color: #fff;
    display: block;
    float: left;
    position: absolute;
    top: (100% - $size)/2;
    left: (100% - $size)/2;
    width: $size;
    height: $size;
    transform-style: preserve-3d;

    &.card-1 {
        .front {
            background: #222 url('../../../assets/images/jenny.jpeg') 90% 35%;
            background-size: 115%;
        }

        .back {
            .img-wrapper {
                background: transparent url('../../../assets/images/jenny.jpeg')
                    70% 45%;
                background-size: 160%;
            }

            .avatar {
                background: transparent url('../../../assets/images/jenny.jpeg')
                    40% 20%;
                background-size: 130% 130%;
            }
        }
    }

    //flip-in animations
    &.flip-in {
        &.card-1 {
            // animation: flip-in-hor-1 0.8s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
            animation: flip-2-hor-top-fwd 0.8s
                cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }
    }

    //flip-out animations
    &.flip-out {
        &.card-1 {
            // animation: flip-out-hor-1 0.8s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
            animation: flip-2-hor-top-fwd 0.8s
                cubic-bezier(0.68, -0.55, 0.265, 1.55) reverse both;
        }
    }
}

.card-object-hf {
    .back {
        transform: rotateX(180deg);
    }
}

.face {
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    height: 100%;
    //An element's back face is a mirror image of its front face. Though invisible in 2D, the back face can become visible when a transformation causes the element to be rotated in 3D space. (This property has no effect on 2D transforms, which have no perspective
    backface-visibility: hidden;

    &.front {
        z-index: 20;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        &::before {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            content: '';
            background: linear-gradient(
                    45deg,
                    rgba(0, 0, 0, 0.95) 0%,
                    rgba(0, 0, 0, 0.5) 40%,
                    rgba(0, 0, 0, 0.1) 100%
                )
                no-repeat;
            opacity: 0.7;
            z-index: 20;
            transition: opacity 0.2s ease;
        }

        &::after {
            $padd: 7%;
            position: absolute;
            top: $padd;
            right: $padd;
            bottom: $padd;
            left: $padd;
            border: 1px solid rgba(255, 255, 255, 0.35);
            z-index: 100;
            content: '';
        }

        .title-wrapper {
            position: absolute;
            bottom: 3%;
            left: 25%;
            right: 25%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-wrap: wrap;
            z-index: 100;
            transform: translateY(0);
            transition: transform 0.28s ease;

            .title {
                position: relative;
                font-family: 'Archivo Black', sans-serif;
                width: 100%;
                text-transform: uppercase;
                font-size: 2vw;
                line-height: 1;
                opacity: 0.8;
                transition: opacity 0.2s ease;

                &::after {
                    display: block;
                    margin: 7% auto 8% auto;
                    width: 100%;
                    height: 1px;
                    content: '';
                    background-color: #fff;
                    opacity: 0.5;
                    // opacity: 0;
                    transform: scale(0);
                    transition: transform 0.15s;
                }
            }

            .subtitle {
                font-size: 0.9vw;
                line-height: 1;
                letter-spacing: 1px;
                text-transform: uppercase;
                opacity: 0;
                transition: opacity 0.15s;
            }
        }

        &:hover {
            &::before {
                opacity: 0.9;
            }

            .title-wrapper {
                transform: translateY(-50%);

                .title {
                    opacity: 1;

                    &::after {
                        transform: scale(1);
                        opacity: 0.5;
                        transition-delay: 0.15s;
                        transition-duration: 0.2s;
                    }
                }

                .subtitle {
                    opacity: 0.7;
                    transition-delay: 0.2s;
                    transition-duration: 0.2s;
                }
            }
        }
    }

    &.back {
        color: #222;
        background: #fff;
        z-index: 10;
    }
}

$imgWrapperH: 38%;
$imgWrapperPadd: 32%;
$imgH: 100% - $imgWrapperPadd;
$imgW: $imgWrapperH - ($imgWrapperH/100% * $imgWrapperPadd);
.img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $imgWrapperH;
    z-index: 10;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(14, 6, 70, 0.6);
        // background: linear-gradient(45deg, rgba(217,89,229,0.7) 0%,rgba(41,203,209,0.8) 48%,rgba(41,203,209,0.8) 53%,rgba(17,40,89,0.9) 100%);
        opacity: 0.7;
    }
}

.avatar {
    position: absolute;
    left: 50%;
    height: $imgH;
    width: $imgW;
    display: block;
    border-radius: 50%;
    margin-top: $imgWrapperH - ($imgW / 2);
    margin-left: -($imgW / 2);
    background-color: #fff;
    border: 3px solid #fff;
    z-index: 20;
}

.info-wrapper {
    $padding: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: $imgWrapperH + $imgW / 2;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4% $padding $padding;
}

.info-title {
    font-size: 1.5vw;
    font-family: 'Archivo Black', sans-serif;
    padding: 0;
    margin: 0;
    text-align: center;
    display: block;
    width: 100%;
}

.info-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8% 0 0;
    margin: 8% 0 0;
    border-top: 1px solid #e0e0e0;
}

.info-content-item {
    font-size: 0.75vw;
    line-height: 1;
    text-align: center;
    display: inline-block;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    color: #aaa;

    span {
        display: block;
        font-weight: bold;
        font-size: 1.1vw;
        margin-top: 7px;
        text-transform: none;
        color: #222;
    }
}

.info {
    position: absolute;
    bottom: 30px;
    left: 5%;
    right: 5%;
    font-size: 1em;
    text-align: center;

    a {
        color: #8c0f8c;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
/**
 * ----------------------------------------
 * animation flip-2-hor-top-fwd
 * ----------------------------------------
 */
@keyframes flip-2-hor-top-fwd {
    0% {
        transform: translateY(0) translateZ(0) rotateX(0);
        transform-origin: 50% 0;
    }
    100% {
        transform: translateY(-100%) translateZ(100px) rotateX(-180deg);
        transform-origin: 50% 100%;
    }
}
</style>
