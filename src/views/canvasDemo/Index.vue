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
export default {
    name: 'index',
    components: {
        canvasDemo1,
    },
    data() {
        return {
            nameList: ['canvasDemo1'],
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
