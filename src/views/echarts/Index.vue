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
import PieChart1 from '@/views/echarts/charts/PieChart1'
import CanvasCompressImg from '@/views/echarts/canvas/CanvasCompressImg'

export default {
    name: 'Index',
    components: { PieChart1, CanvasCompressImg },
    data() {
        return {
            nameList: ['PieChart1', 'CanvasCompressImg'],
            componentName: 'PieChart1',
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

<style scoped></style>
