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
import svgSectionDivider from '@/views/css1/animation/svgSectionDivider'
import fixedTableHeader from '@/views/css1/animation/FixedTableHeader'
import flipCard from '@/views/css1/animation/flipCard'
import jquery1 from '@/views/css1/animation/jquery1'
import JSAnimations from '@/views/css1/animation/JSAnimations'
import animeDeo from '@/views/css1/animation/animeDeo'
import ThreeDCards from '@/views/css1/animation/ThreeDCards'
export default {
    name: 'index',
    components: {
        svgSectionDivider,
        fixedTableHeader,
        flipCard,
        jquery1,
        JSAnimations,
        animeDeo,
        ThreeDCards,
    },
    data() {
        return {
            nameList: [
                'svgSectionDivider',
                'fixedTableHeader',
                'flipCard',
                'jquery1',
                'JSAnimations',
                'animeDeo',
                'ThreeDCards',
            ],
            componentName: 'fixedTableHeader',
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
