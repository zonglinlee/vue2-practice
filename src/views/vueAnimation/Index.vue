<template>
    <div>
        <Animation1 class="m--20" />
        <hua-wei-charge class="m--20" />
        <step-animation class="m--20" />
        <loading class="m--20" />
        <css-beer class="m--20" />
    </div>
</template>

<script>
import Animation1 from '@/views/vueAnimation/Animation1'
import huaWeiCharge from '@/views/vueAnimation/huaWeiChargeing'
import stepAnimation from '@/views/vueAnimation/stepAnimation'
import loading from '@/views/vueAnimation/loading'
import cssBeer from '@/views/vueAnimation/cssBeer'
export default {
    name: 'Index',
    components: {
        Animation1,
        huaWeiCharge,
        stepAnimation,
        loading,
        cssBeer,
    },
}
</script>
