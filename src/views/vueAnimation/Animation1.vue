<template>
    <transition name="slide" appear>
        <div>
            <div>
                <button @click="showModal = true" class="button">
                    Show Modal
                </button>
                <transition name="fade">
                    <div
                        class="modal-overlay"
                        v-if="showModal"
                        @click="showModal = false"
                    ></div>
                </transition>
                <transition name="pop">
                    <div class="modal1" role="dialog" v-if="showModal">
                        <h1>Vue Transitions</h1>
                        <p>
                            The <code>&lt;transition&gt;</code> component in Vue
                            can create wonderful animated entrances and exits.
                        </p>
                        <button @click="showModal = false" class="button">
                            Hide Modal
                        </button>
                    </div>
                </transition>
            </div>
            <div>
                <button @click="toggle1 = !toggle1" class="m--10 btn-primary">
                    click Me
                </button>
                <transition name="toggle1">
                    <div class="toggle1 m--10" v-if="toggle1">toggle1</div>
                </transition>
            </div>
            <div class="m--10">
                <ul>
                    <li>
                        1.v-enter-to，v-leave一般不写，不写的原因是：按照一般的过渡效果（动画），进入的最后状态就是元素本身的样式，离开的最初状态也是元素本身的样式，所以是没有必要写的。
                    </li>
                    <li>
                        2.v-enter,
                        v-leave-to中的css一般相同，一个是进入时过渡（动画）的初始样式，一个是离开过渡（动画）结束时的样式。
                    </li>
                    <li>
                        3.v-enter-active ，v-leave-active
                        中的css一般相同，一般都是用于定义过渡（动画）的过程时间，延迟和曲线函数。当然离开的过渡（动画）的过程时间，延迟和曲线函数和进入的可以是不同的。
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Animation1',
    data() {
        return {
            showModal: false,
            toggle1: false,
        }
    },
}
</script>

<style scoped lang="scss">
.button {
    border: none;
    color: #fff;
    background: #42b983;
    appearance: none;
    font: inherit;
    font-size: 1.8rem;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    cursor: pointer;
}

.modal1 {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: fit-content;
    height: fit-content;
    max-width: 22em;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: #fff;
    z-index: 999;
    transform: none;
}
.modal h1 {
    margin: 0 0 1rem;
}

.modal-overlay {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: #2c3e50;
    opacity: 0.6;
    cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}

.toggle1 {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background: #2e7668;
}
.toggle1-enter {
    background: green;
    border-radius: 50%;
}
.toggle1-enter-active {
    transition: all 5s linear;
}
.toggle1-enter-to {
    background: red;
}

.slide-enter {
    transform: translateY(300px);
    opacity: 0.1;
}
.slide-enter-active {
    transition: all 0.3s ease-in-out;
}
</style>
