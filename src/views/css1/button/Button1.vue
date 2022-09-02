<template>
    <div class="content-container">
        <h3>普通 button 样式</h3>
        <div>
            <a
                href="https://dev.to/gscode/20-css-buttons-4cni"
                style="margin-right: 20px"
                >好看的button链接1</a
            >
            <a href="https://github.com/r1/cssbuttons">好看的button链接2</a>
        </div>
        <div class="b-group">
            <button>浏览器默认样式</button>
            <button class="button -blue">ButtonNormal</button>
        </div>
        <h3>hover button</h3>
        <a class="btn-hover btn-hover1" href="#">btnhover1</a>
        <a class="btn-hover btn-hover2" href="#">btnhover2</a>
        <a
            ref="hover3"
            class="btn-hover btn-hover3"
            @mouseenter="hoverEnterLeave"
            @mouseleave="hoverEnterLeave"
            >btnhover3<span ref="hoverSpan" :style="{ left, top }"></span
        ></a>
    </div>
</template>

<script>
export default {
    name: 'Button1',
    props: {},
    data() {
        return {
            left: 0,
            top: 0,
        }
    },
    methods: {
        hoverEnterLeave(e) {
            let left = this.$refs.hover3.offsetLeft
            let top = this.$refs.hover3.offsetTop
            let relX = e.pageX - left
            let relY = e.pageY - top
            this.left = relX + 'px'
            this.top = relY + 'px'
        },
    },
}
</script>

<style lang="scss" scoped>
.b-group {
    --color-ocean: #416dea;
    --color-snow: #ffffff;
    --borderRadius: 10px;
    --color-smoke: #e4e4e4;
    @include flexbox();
    flex-wrap: wrap;
}

/* normal button */
.button {
    display: flex;
    overflow: hidden;
    margin: 10px;
    padding: 12px 12px;
    cursor: pointer;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;
    //text-transform: none;
    text-transform: capitalize;
    user-select: none;
    box-sizing: border-box;
    outline: none;
    color: #fff;
    border: 0 none;
    border-radius: var(--borderRadius);

    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    appearance: none;

    justify-content: center;
    align-items: center;
    flex: 0 0 160px;

    box-shadow: 2px 5px 10px var(--color-smoke);

    &:hover {
        transition: all 150ms linear;
        opacity: 0.85;
    }

    &:active {
        transition: all 150ms linear;
        opacity: 0.75;
    }

    &:focus {
        outline: 1px dotted #959595;
        outline-offset: -4px;
    }
}

.button.-blue {
    color: var(--color-snow);
    background: var(--color-ocean);
}

/* hover button */
[class^='btn-'] {
    position: relative;
    display: block;
    overflow: hidden; // 很关键，隐藏伪元素超出的部分内容，产生hover过渡效果
    width: 100%;
    height: 60px;
    max-width: 200px;
    margin: 1rem auto;
    text-transform: uppercase;
    border: 1px solid currentColor;
}

a[class^='btn-'] {
    text-decoration: none;
    line-height: 60px;
    color: black;
    text-align: center;
}

.btn-hover1 {
    color: #726965;

    &:before {
        content: '';
        @include position(absolute, top 0 bottom 0 right 0 left 0);
        background-color: #352f2c;
        transform: translateX(
            -100%
        ); // 伪元素初始位置，由于父元素overflow：hidden 所有看不见
        transition: 0.5s ease-in-out; // 添加过渡效果
        z-index: -1; // 设置伪元素层级
    }

    &:hover {
        color: #d6d3d2;
    }

    &:hover:before {
        transform: translateX(0);
    }
}

.btn-hover2 {
    color: #c2ecea;

    &:before {
        content: '';
        @include position(absolute, top 0 bottom 0 right -30px left 0);
        border-bottom: #1da1f2 60px solid; // 这里用下边框和右边框模拟了背景色，形成了一个斜边
        border-right: 30px solid transparent;
        transform: translateX(
            -100%
        ); // 伪元素初始位置，由于父元素overflow：hidden 所有看不见
        transition: 0.5s ease-in-out; // 添加过渡效果
        z-index: -1; // 设置伪元素层级
    }

    &:hover:before {
        transform: translateX(0);
    }
}

.btn-hover3 {
    color: #494c74;

    & span {
        position: absolute;
        display: block;
        width: 0; // span 的宽高都为0 hover的时候 放大
        height: 0;
        border-radius: 50%; // 圆形的span标签
        background-color: #191a37;
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    &:hover {
        color: #cacad6;
    }

    &:hover span {
        width: 225%;
        height: 562.5px;
    }

    &:active {
        background-color: #292c5b;
    }
}
</style>
