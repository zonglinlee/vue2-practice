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
import canvasDemo1 from '@/views/canvasDemo/canvasDemo1.vue'
import FabricDemo1 from '@/views/canvasDemo/FabricDemo1'
import FabricDemo2 from '@/views/canvasDemo/FabricDemo2'
export default {
    name: 'index',
    components: {
        canvasDemo1,
        FabricDemo1,
        FabricDemo2,
    },
    data() {
        return {
            nameList: ['canvasDemo1', 'FabricDemo1', 'FabricDemo2'],
            componentName: 'canvasDemo1',
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
