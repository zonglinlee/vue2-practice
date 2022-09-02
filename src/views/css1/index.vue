<template>
    <div>
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
import svgSectionDivider from '@/views/css1/svgSectionDivider'
import fixedTableHeader from '@/views/css1/FixedTableHeader'
import flipCard from '@/views/css1/flipCard'
import jquery1 from '@/views/css1/jquery1'
import JSAnimations from '@/views/css1/JSAnimations'
import animeDeo from '@/views/css1/animeDeo'
import ThreeDCards from '@/views/css1/ThreeDCards'
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

<style scoped lang="scss">
.list-style {
    list-style: none;
    display: flex;
    background: #0c455e;
    color: white;
    padding: 0;
    flex-wrap: wrap;
    li {
        padding: 5px;
        cursor: pointer;
        text-align: center;
        border-right: solid 1px white;
    }
    li.is-active {
        color: orangered;
    }
}
</style>
