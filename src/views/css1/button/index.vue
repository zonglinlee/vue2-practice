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
import Button1 from '@/views/css1/button/Button1'
import Button2 from '@/views/css1/button/Button2'
import hoverBtn from '@/views/css1/button/hoverBtn'
import pressBtn from '@/views/css1/button/pressBtn'
import maskImage from '@/views/css1/button/maskImage'
export default {
    name: 'index',
    components: {
        Button1,
        Button2,
        hoverBtn,
        pressBtn,
        maskImage,
    },
    data() {
        return {
            nameList: [
                'Button1',
                'Button2',
                'hoverBtn',
                'pressBtn',
                'maskImage',
            ],
            componentName: 'hoverBtn',
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
