<template>
    <div>
        <input
            class="hidden"
            type="file"
            name="upload"
            id="upload"
            ref="upload"
            @change="handleChange"
        />
        <div>
            <button class="btn-primary" @click="triggerSelectFile">
                选择文件
            </button>
            <div v-if="errInfo" class="mt-2 text-red-700 text-lg">
                {{ errInfo }}
            </div>
            <div v-else class="mt-2 text-green-700 text-lg flex flex-col w-1/2">
                <img :src="compressImage" />
                <span class="text-center">{{ fileInfo }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CanvasCompressImg',
    data() {
        return {
            uploadInput: null,
            errInfo: null,
            fileInfo: null,
            compressImage: null,
        }
    },
    mounted() {
        this.uploadInput = this.$refs.upload
    },
    methods: {
        handleChange(event) {
            const files = event.target.files
            if (!files || files.length === 0) {
                return
            }
            const { type, name, size } = files[0]
            const ACCEPT = ['image/jpg', 'image/png', 'image/jpeg']
            const maxSize = 3 * 1024 * 1024
            const maxSizeString = '3M'
            if (!ACCEPT.includes(type)) {
                this.errInfo = `不支持[${type}]文件类型！`
                return
            }
            if (size > maxSize) {
                this.errInfo = `文件超出${maxSizeString}！`
                return
            }
            this.errInfo = null
            this.fileInfo = name
            this.compressImg(files[0], this.doCompress)
        },
        triggerSelectFile() {
            this.uploadInput.click()
        },
        compressImg(file, callback) {
            let reader = new FileReader()
            reader.addEventListener('load', function (e) {
                const base64Image = e.target.result
                callback && callback(base64Image)
                reader = null
            })
            reader.readAsDataURL(file)
        },
        doCompress(base64Image, callback) {
            let maxW = 1024
            let maxH = 1024
            const image = new Image()
            image.addEventListener('load', () => {
                let ratio // 图片的压缩比
                let needCompress = false // 是否需要压缩
                if (maxW < image.naturalWidth) {
                    needCompress = true
                    ratio = image.naturalWidth / maxW
                    maxH = image.naturalHeight / ratio
                }
                if (maxH < image.naturalHeight) {
                    needCompress = true
                    ratio = image.naturalHeight / maxH
                    maxW = image.naturalWidth / ratio
                }
                if (!needCompress) {
                    maxW = image.naturalWidth
                    maxH = image.naturalHeight
                } // 如果不需要压缩，需要获取图片的实际尺寸
                const canvas = document.createElement('canvas')
                canvas.setAttribute('id', '__compress__')
                canvas.width = maxW
                canvas.height = maxH
                canvas.style.visibility = 'hidden'
                document.body.appendChild(canvas)

                const ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, maxW, maxH)
                ctx.drawImage(image, 0, 0, maxW, maxH)
                const compressImage = canvas.toDataURL('image/jpeg', 0.9) // 输出 base64 字符图片
                this.compressImage = compressImage
                callback && callback(compressImage)
                canvas.remove()
            })
            image.src = base64Image
        },
    },
}
</script>

<style scoped lang="scss"></style>
