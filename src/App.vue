<template>
    <div id="app">
        <div :class="{ 'top-menu': topMenu }" class="css-demo">
            <router-link class="link-item" to="/scroll-snap1">
                <div class="test" @click="changeMenuPosition">
                    仿微信列表滑动删除功能
                </div>
            </router-link>
            <router-link
                class="link-item"
                to="/flex1"
                @click.native="topMenu = false"
                >flex布局测试
            </router-link>
            <router-link
                class="link-item"
                to="/button1"
                @click.native="topMenu = false"
                >Button1样式
            </router-link>
            <router-link
                class="link-item"
                to="/button2"
                @click.native="topMenu = false"
                >Button2样式
            </router-link>
            <router-link
                class="link-item"
                to="/element-height"
                @click.native="topMenu = false"
                >Vue获取元素尺寸
            </router-link>
            <router-link
                class="link-item"
                to="/clip-path1"
                @click.native="topMenu = false"
                >svg clipPath动画1
            </router-link>
            <router-link
                class="link-item"
                to="/img-error-report"
                @click.native="topMenu = false"
                >img-error-report
            </router-link>
            <router-link
                class="link-item"
                to="/sourcemap-test"
                @click.native="topMenu = false"
                >sourceMapTest
            </router-link>
            <router-link
                class="link-item"
                to="/animation1"
                @click.native="topMenu = false"
                >Animation1
            </router-link>
        </div>
        <div style="margin-left: 180px; padding: 15px 0 0 15px">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            topMenu: false,
        }
    },
    methods: {
        changeMenuPosition() {
            this.topMenu = true
        },
    },
}
</script>

<style lang="scss">
.css-demo {
    box-sizing: border-box;
    @include flexbox(flex-start, space-between, column);
    width: 180px;
    //height: 100vh;
    font-size: 16px;
    font-weight: bold;
    //@include position(absolute, left 0 top 0);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #ccc;
    padding: 10px;
    overflow-y: auto;
}

.top-menu {
    @include flexbox();
    height: initial;
    width: 100%;
    position: static;
    flex-wrap: wrap;
    overflow: hidden;

    .link-item {
        max-width: 24%;
    }
}
</style>
