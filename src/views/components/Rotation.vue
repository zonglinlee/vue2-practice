<template>
    <div style="padding: 30px">
        <div
            class="rotate"
            ref="rotate"
            @mousedown.stop="dragStart"
            @contextmenu="handleContextMenu"
            @dragstart.prevent
        >
            <div style="user-select: none">Text</div>
            <div
                class="handle-bar"
                ref="rotateIcon"
                @mousedown.stop="rotateStart"
                @dragstart.prevent
            >
                <img
                    src="../../assets/images/rotation_right.png"
                    alt="rotation"
                />
            </div>
            <template v-if="isMounted">
                <div
                    v-for="item in pointList"
                    :key="item"
                    :style="getPointStyle(item)"
                    :ref="item"
                    @mousedown.stop="handleResize($event, item)"
                ></div>
            </template>
        </div>

        <ul v-if="showContextMenu" class="context-menu" ref="context">
            <li @click="reset">复位</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Rotation',
    data() {
        return {
            startX: null,
            startY: null,
            startRotate: false,
            startMove: false,
            isResizing: false,
            pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'], // 八个方向
            isMounted: false,
            showContextMenu: false,
        }
    },
    mounted() {
        this.isMounted = true
        const that = this
        document.addEventListener('click', () => {
            that.showContextMenu = false
        })
    },
    methods: {
        rotateStart(event) {
            const { clientX, clientY } = event
            this.$refs.rotateIcon.style.cursor = 'grabbing'
            this.startRotate = true
            const center = {}
            const node = this.$refs.rotate
            const { left, top } = node.getBoundingClientRect()
            center.x = left + node.offsetWidth / 2
            center.y = top + node.offsetHeight / 2
            this.center = center
            this.startAngle =
                Math.atan2(clientY - center.y, clientX - center.x) *
                (180 / Math.PI)
            document.addEventListener('mousemove', this.handleRotate)
            document.addEventListener('mouseup', this.handleRotateStop)
        },
        handleRotate(event) {
            if (this.startRotate) {
                const { clientX, clientY } = event
                this.startRotate = true
                const node = this.$refs.rotate
                const center = this.center
                let { rotate = 0 } = this.lastTransformState || {}
                this.endAngle =
                    Math.atan2(clientY - center.y, clientX - center.x) *
                    (180 / Math.PI)
                const diff = this.endAngle - this.startAngle

                // update rotation
                this.setTransform(null, null, diff + rotate, node)
                this.startAngle = this.endAngle
            }
        },
        handleRotateStop() {
            this.startRotate = false
            this.$refs.rotateIcon.style.cursor = 'grab'
            document.removeEventListener('mousemove', this.handleRotate)
            document.removeEventListener('mouseup', this.handleRotateStop)
        },
        // @dragstart.prevent : this is also very important, you should prevent default action of how browser handle dragstart event,otherwise the mouseup event won't trigger
        // https://zh.javascript.info/mouse-drag-and-drop
        dragStart(event) {
            // console.log('mousemove trigger')
            this.startMove = true
            let { clientX, clientY } = event
            const node = this.$refs.rotate
            const move = (event) => {
                const { startMove } = this
                const { clientX: clientX_new, clientY: clientY_new } = event
                if (startMove) {
                    const { moveX = 0, moveY = 0 } =
                        this.lastTransformState || {}
                    const diffX = clientX_new - clientX
                    const diffY = clientY_new - clientY
                    // update new position ,this is very important
                    clientX = clientX_new
                    clientY = clientY_new
                    this.setTransform(diffX + moveX, diffY + moveY, null, node)
                }
            }
            const stop = () => {
                // console.log('mouseup trigger')
                this.startMove = false
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', stop)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', stop)
        },
        getPointStyle(item) {
            const hasT = item.indexOf('t') !== -1
            const hasL = item.indexOf('l') !== -1
            const defaultStyle = {
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'green',
                position: 'absolute',
            }
            // const cursors = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
            const width = this.$refs.rotate.offsetWidth
            const height = this.$refs.rotate.offsetHeight

            if (item.length === 2) {
                if (hasT) {
                    const left = hasL ? '-4px' : width - 4 + 'px'
                    const cur = hasL ? 'nw' : 'ne'
                    defaultStyle.top = '-4px'
                    defaultStyle.left = left
                    defaultStyle.cursor = cur + '-resize'
                } else {
                    const cur = hasL ? 'sw' : 'se'
                    const left = hasL ? '-4px' : width - 4 + 'px'
                    defaultStyle.top = height - 4 + 'px'
                    defaultStyle.left = left
                    defaultStyle.cursor = cur + '-resize'
                }
            } else {
                if (item === 't') {
                    const left = width / 2 - 4 + 'px'
                    defaultStyle.top = '-4px'
                    defaultStyle.left = left
                    defaultStyle.cursor = 'n' + '-resize'
                }
                if (item === 'r') {
                    const left = width - 4 + 'px'
                    defaultStyle.top = height / 2 - 4 + 'px'
                    defaultStyle.left = left
                    defaultStyle.cursor = 'e' + '-resize'
                }
                if (item === 'b') {
                    const left = width / 2 - 4 + 'px'
                    defaultStyle.top = height - 4 + 'px'
                    defaultStyle.left = left
                    defaultStyle.cursor = 's' + '-resize'
                }
                if (item === 'l') {
                    const left = '-4px'
                    defaultStyle.top = height / 2 - 4 + 'px'
                    defaultStyle.left = left
                    defaultStyle.cursor = 'w' + '-resize'
                }
                defaultStyle.background = 'lightblue'
            }

            return defaultStyle
        },
        handleResize(event, item) {
            this.isResizing = true
            let { clientX, clientY } = event
            const node = this.$refs.rotate
            const that = this
            const resize = (e) => {
                if (this.isResizing) {
                    const width = node.offsetWidth
                    const height = node.offsetHeight
                    // let ratio = width / height
                    const { clientX: clientX_new, clientY: clientY_new } = e
                    let deltaY = clientY_new - clientY
                    let deltaX = clientX_new - clientX
                    const { moveX = 0, moveY = 0 } =
                        this.lastTransformState || {}
                    if (item.length === 1) {
                        // 单方向移动
                        if (item === 'l') {
                            // l/t 方向 需要对节点进行平移
                            node.style.width = width - deltaX + 'px'
                            // update move status
                            this.setTransform(deltaX + moveX, null, null, node)
                        }
                        if (item === 'r') {
                            node.style.width = width + deltaX + 'px'
                        }
                        if (item === 't') {
                            node.style.height = height - deltaY + 'px'
                            node.style.height = height - deltaY + 'px'
                            // update move status
                            this.setTransform(null, deltaY + moveY, null, node)
                        }
                        if (item === 'b') {
                            node.style.height = height + deltaY + 'px'
                        }
                    } else {
                        // 四个角方向  todo
                        if (item === 'lt') {
                            // l/t 方向 需要对节点进行平移
                            node.style.width = width - deltaX + 'px'
                            node.style.height = height - deltaY + 'px'
                            this.setTransform(
                                deltaX + moveX,
                                deltaY + moveY,
                                null,
                                node
                            )
                        }
                        if (item === 'rb') {
                            node.style.width = width + deltaX + 'px'
                            node.style.height = height + deltaY + 'px'
                        }
                        if (item === 'rt') {
                            node.style.height = height - deltaY + 'px'
                            node.style.width = width + deltaX + 'px'
                            this.setTransform(null, deltaY + moveY, null, node)
                        }
                        if (item === 'lb') {
                            node.style.width = width - deltaX + 'px'
                            node.style.height = height + deltaY + 'px'
                            this.setTransform(deltaX + moveX, null, null, node)
                        }
                    }
                    clientY = clientY_new
                    clientX = clientX_new
                    for (let i = 0; i < that.pointList.length; i++) {
                        let ref = that.pointList[i]
                        const styles = that.getPointStyle(ref)
                        Object.keys(styles).forEach((s) => {
                            that.$refs[ref][0].style[s] = styles[s]
                        })
                    }
                }
            }
            const stop = () => {
                this.isResizing = false
                document.removeEventListener('mousemove', resize)
                document.removeEventListener('mouseup', stop)
            }
            document.addEventListener('mousemove', resize)
            document.addEventListener('mouseup', stop)
        },
        setTransform(x, y, angle, node) {
            let {
                moveX = 0,
                moveY = 0,
                rotate = 0,
            } = this.lastTransformState || {}

            if (Object.is(x, null)) {
                x = moveX
            }
            if (Object.is(y, null)) {
                y = moveY
            }
            if (Object.is(angle, null)) {
                angle = rotate
            }
            this.lastTransformState = {
                moveX: x,
                moveY: y,
                rotate: angle,
            }
            node.style.transform = `translate(${x}px,${y}px) rotate(${angle}deg)`
        },
        handleContextMenu(event) {
            console.log(event)
            event.preventDefault()
            event.stopPropagation()
            this.showContextMenu = true
            const { clientX, clientY } = event
            this.$nextTick(() => {
                const node = this.$refs.context
                const gap = 8
                node.style.left = clientX + gap + 'px'
                node.style.top = clientY + gap + 'px'
            })
        },
        reset() {
            this.setTransform(0, 0, 0, this.$refs.rotate)
        },
    },
}
</script>

<style scoped lang="scss">
.rotate {
    border: 1px solid orangered;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: relative;

    &:hover {
        cursor: move;
    }

    .handle-bar {
        position: absolute;
        left: 50%;
        top: -28px;
        transform: translateX(-50%);
        width: 25px;
        height: 25px;
        cursor: grab;
    }
}
.context-menu {
    position: fixed;
    background: #c5ddf6;
    border: 1px solid #3ccdf8;
    border-radius: 4px;
    width: 90px;
    text-align: center;
    li {
        display: block;
        cursor: pointer;
        padding: 12px;
        width: 100%;
    }
}
</style>
