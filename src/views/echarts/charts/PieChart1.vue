<template>
    <v-chart autoresize ref="chart1" :options="titlePieData" />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'

export default {
    components: {
        'v-chart': ECharts,
    },
    data() {
        return {
            titlePieData: {
                title: {
                    text: 'Pie chart Example',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {d}%',
                },
                // legend过长后滚动
                legend: {
                    type: 'scroll',
                    left: 'center',
                    bottom: 0,
                },
                series: [
                    {
                        name: '职称',
                        type: 'pie',
                        radius: '50%',
                        label: {
                            formatter: '{b}: {d}%',
                        },
                        data: [
                            { value: 0, name: 'share1' },
                            { value: 0, name: 'share2' },
                            { value: 0, name: 'share3' },
                            { value: 0, name: 'share4' },
                            { value: 0, name: 'share5' },
                            { value: 0, name: 'share6' },
                            { value: 0, name: 'share7' },
                            { value: 0, name: 'share8' },
                            { value: 0, name: 'share9' },
                            { value: 0, name: 'share10' },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            },
        }
    },
    mounted() {
        this.$refs.chart1.showLoading({ text: '数据加载中...' })
        setTimeout(() => {
            this.titlePieData.series[0].data = [
                { value: 48, name: 'share1' },
                { value: 250, name: 'share2' },
                { value: 300, name: 'share3' },
                { value: 25, name: 'share4' },
                { value: 111, name: 'share5' },
                { value: 63, name: 'share6' },
                { value: 99, name: 'share7' },
                { value: 6, name: 'share8' },
                { value: 170, name: 'share9' },
                { value: 132, name: 'share10' },
            ]
            this.$refs.chart1.hideLoading()
        }, 1500)
    },
}
</script>
<style>
.echarts {
    width: 50%;
}
</style>
