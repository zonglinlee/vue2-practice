<template>
    <div class="demo-btns-group">
        <ul class="text-none-select list-style">
            <li
                v-for="(item, index) in nameList"
                :key="index"
                @click="setComponent(item)"
                :class="{ 'is-active': item === componentName }"
            >
                {{ item }}
            </li>
        </ul>
        <component :is="componentName" />
    </div>
</template>

<script>
import Animation1 from '@/views/vueAnimation/Animation1'
import huaWeiCharge from '@/views/vueAnimation/huaWeiChargeing'
import stepAnimation from '@/views/vueAnimation/stepAnimation'
import loading from '@/views/vueAnimation/loading'
import cssBeer from '@/views/vueAnimation/cssBeer'
import shuffleCardsVue from './shuffleCards.vue'
export default {
    name: 'index',
    components: {
        Animation1,
        huaWeiCharge,
        stepAnimation,
        loading,
        cssBeer,
        shuffleCardsVue,
    },
    data() {
        return {
            nameList: [
                'Animation1',
                'huaWeiCharge',
                'stepAnimation',
                'loading',
                'cssBeer',
                'shuffleCardsVue',
            ],
            componentName: 'Animation1',
        }
    },
    mounted() {},
    methods: {
        setComponent(item) {
            this.componentName = item
        },
    },
}
</script>
