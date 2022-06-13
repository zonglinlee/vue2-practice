<template>
    <div>
        <div>img-src-error-report</div>
        <div>{{ errorInfo }}</div>
    </div>
</template>

<script>
import { imgSrcHandleError } from '@/utils/imgErrorHandler'

export default {
    name: 'imgErrorReport',
    data() {
        return {
            errorInfo: '',
        }
    },
    mounted() {
        let obj = { name: 'lee' }
        try {
            const total = obj.family.total
            console.log(total)
        } catch (e) {
            this.errorInfo = e.message
            imgSrcHandleError(e)
        }
    },
}
</script>

<style scoped></style>
