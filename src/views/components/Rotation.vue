<template>
    <div style="padding: 30px; background: #f3f3f3">
        <div
            class="rotate"
            ref="rotate"
            @mousedown.stop="dragStart"
            @dragstart.prevent
        >
            <div>Text</div>
            <div
                class="handle-bar"
                ref="rotateIcon"
                @mousedown.stop="clickStart"
                @dragstart.prevent
            >
                <img
                    src="../../assets/images/rotation_right.png"
                    alt="rotation"
                />
            </div>
        </div>
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
        }
    },
    methods: {
        clickStart(event) {
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
            document.addEventListener('mousemove', this.handleMove)
            document.addEventListener('mouseup', this.handleStop)
        },
        handleMove(event) {
            if (this.startRotate) {
                const { clientX, clientY } = event
                this.startRotate = true
                const node = this.$refs.rotate
                const center = this.center
                this.diffAngle = this.diffAngle || 0
                this.endAngle =
                    Math.atan2(clientY - center.y, clientX - center.x) *
                    (180 / Math.PI)
                const diff = this.endAngle - this.startAngle
                node.style.transform = `rotate(${diff + this.diffAngle}deg)`
                // update rotation
                this.diffAngle = diff + this.diffAngle
                this.startAngle = this.endAngle
            }
        },
        handleStop() {
            this.startRotate = false
            this.$refs.rotateIcon.style.cursor = 'grab'
            document.removeEventListener('mousemove', this.handleMove)
            document.removeEventListener('mouseup', this.handleStop)
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
                    const { moveX = 0, moveY = 0 } = this.lastMoveState || {}
                    const diffX = clientX_new - clientX
                    const diffY = clientY_new - clientY
                    node.style.transform = `translate(${diffX + moveX}px,${
                        diffY + moveY
                    }px)`
                    // update new position ,this is very important
                    clientX = clientX_new
                    clientY = clientY_new
                    this.lastMoveState = {
                        moveX: diffX + moveX,
                        moveY: diffY + moveY,
                    }
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
    },
}
</script>

<style scoped lang="scss">
.rotate {
    border: 1px solid orangered;
    width: 120px;
    height: 60px;
    line-height: 60px;
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
</style>
