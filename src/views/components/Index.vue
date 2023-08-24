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
import VueTreeDemo from '@/views/components/Tree/demo/VueTreeDemo'
import Rotation from '@/views/components/Rotation'

export default {
    name: 'index',
    components: {
        VueTreeDemo,
        Rotation,
    },
    data() {
        return {
            nameList: ['VueTreeDemo', 'Rotation'],
            componentName: 'VueTreeDemo',
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
