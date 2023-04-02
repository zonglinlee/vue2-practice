<template>
    <div class="flex flex-wrap">
        <div class="flex items-center flex-1">
            <div
                :draggable="true"
                ref="dragEle"
                id="draggble"
                class="w-24 h-12 p-2 mr-6 text-center text-white bg-red-700 rounded-md cursor-pointer"
            >
                drag me
            </div>
            <div
                ref="dropEle"
                id="droppable"
                class="before:content-['请拖放到此区域'] before:block before:absolute before:inset-x-0 before:inset-y-0 before:text-center relative flex items-center justify-center w-full h-48 text-lg text-gray-500 border-blue-900 border-dashed rounded-lg border-2"
            ></div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'uiEvents',
    data() {
        return {}
    },
    mounted() {
        this.initDragAndDrop()
    },
    methods: {
        initDragAndDrop() {
            this.$refs.dragEle.addEventListener('dragstart', this.dragStart)
            this.$refs.dropEle.addEventListener('dragover', this.dragOver)
            this.$refs.dropEle.addEventListener('dragleave', this.dragLeave)
            this.$refs.dropEle.addEventListener('drop', this.drop)
        },
        dragStart(event) {
            event.dataTransfer.setData('text/plain', event.target.id)
        },
        dragOver(event) {
            // 需要阻止默认事件
            event.preventDefault()
            this.$refs.dropEle.classList.add('border-dynamic-green')
        },
        dragLeave() {
            this.$refs.dropEle.classList.remove('border-dynamic-green')
        },
        drop(event) {
            // 需要阻止默认事件
            event.preventDefault()
            const arr = [...event.dataTransfer.items]
            // console.log(arr)
            arr.forEach((item) => {
                if (item.kind === 'file') {
                    const file = item.getAsFile()
                    console.log(file)
                    this.createPreview(file)
                }
            })
            const id = event.dataTransfer.getData('text/plain')
            if (id) this.$refs.dropEle.appendChild(document.getElementById(id))
        },
        createPreview(imgFile) {
            if (!imgFile.type.startsWith('image/')) return
            const img = new Image()
            img.src = URL.createObjectURL(imgFile)
            img.style.width = '200px'
            img.onload = function () {
                URL.revokeObjectURL(this.src)
            }
            this.$refs.dropEle.appendChild(img)
        },
    },
}
</script>

<style scoped lang="scss">
.border-dynamic-green {
    border-color: green !important;
}
</style>
