<template>
    <div>
        <Animation1 />
        <hua-wei-chargeing />
        <step-animation />
        <loading />
    </div>
</template>

<script>
import Animation1 from '@/views/vueAnimation/Animation1'
import huaWeiChargeing from '@/views/vueAnimation/huaWeiChargeing'
import stepAnimation from '@/views/vueAnimation/stepAnimation'
import loading from '@/views/vueAnimation/loading'
export default {
    name: 'Index',
    components: {
        Animation1,
        huaWeiChargeing,
        stepAnimation,
        loading,
    },
}
</script>

<style scoped></style>
