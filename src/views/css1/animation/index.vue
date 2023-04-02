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
import dropDown from '@/views/css1/animation/dropDown'
import FlipImage from '@/views/css1/animation/FlipImage'
import ImageZoom from '@/views/css1/animation/ImageZoom'
import FlipCard1 from '@/views/css1/animation/FlipCard1'
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
        dropDown,
        FlipImage,
        ImageZoom,
        FlipCard1,
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
                'dropDown',
                'FlipImage',
                'ImageZoom',
                'FlipCard1',
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
