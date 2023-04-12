<template>
    <div id="app">
        <div
            :class="{ 'top-menu': topMenu }"
            class="css-demo bg-vue dark:bg-dark-800 text-white"
            @click="changeMenuPosition"
        >
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/scroll-snap1"
            >
                仿微信列表滑动删除功能
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/flex1"
                @click.native="topMenu = false"
                >flex布局测试
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/button1"
                @click.native="topMenu = false"
                >CSS style1
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/element-height"
                @click.native="topMenu = false"
                >Vue获取元素尺寸
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/clip-path1"
                @click.native="topMenu = false"
                >svg clipPath动画1
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/img-error-report"
                @click.native="topMenu = false"
                >img-error-report
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/sourcemap-test"
                @click.native="topMenu = false"
                >sourceMapTest
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/animationIndex"
                @click.native="topMenu = false"
                >Animation
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/css1"
                @click.native="topMenu = false"
                >css1
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/ui-events"
                @click.native="topMenu = false"
                >UI events
            </router-link>
            <router-link
                class="link-item border-b border-solid border-light-300 px-4"
                to="/echarts"
                @click.native="topMenu = false"
                >Echarts
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
            clickCount: 0,
            maxInterval: 800,
        }
    },
    mounted() {
        document.addEventListener('click', this.toggleDarkMode)
    },
    methods: {
        toggleDarkMode() {
            if (this.clickCount === 0) {
                this.startTime = Date.now()
                this.clickCount = this.clickCount + 1
            } else if (this.clickCount > 0 && this.clickCount < 5) {
                const interval = Date.now() - this.startTime
                if (interval > this.maxInterval) {
                    this.clickCount = 0
                    this.startTime = Date.now()
                }
                this.clickCount = this.clickCount + 1
            } else if (this.clickCount === 5) {
                document.documentElement.classList.toggle('dark')
                this.clickCount = 0
            } else {
                this.clickCount = 0
            }
        },
        changeMenuPosition(event) {
            console.log(event.target)
            const href = event.target.getAttribute('href')
            if (href.includes('scroll-snap1')) {
                this.topMenu = true
            } else {
                this.topMenu = false
            }
            console.log(this.$route, href)
            if (href && href.includes(this.$route.path)) {
                event.target.classList.add('active')
            }
        },
    },
}
</script>

<style lang="scss">
.css-demo {
    box-sizing: border-box;
    width: 180px;
    font-size: 16px;
    font-weight: bold;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    a.link-item {
        height: 50px;
        line-height: 50px;
        text-decoration: none;
        @include text-ellipsis();
        transition: 0.3s;
        flex-shrink: 0;
    }

    a.link-item:hover {
        color: dodgerblue;
    }

    a.link-item.active {
        color: dodgerblue;
    }
}

.top-menu.css-demo {
    @include flexbox(flex-start, flex-start, row);
    width: 100%;
    position: static;
    flex-wrap: wrap;
    overflow: hidden;

    .link-item {
        width: 180px;
        border-right: 1px solid white;
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding: 0 5px;
    }
}
</style>
