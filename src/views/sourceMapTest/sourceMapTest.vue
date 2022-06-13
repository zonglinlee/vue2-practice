<template>
    <div style="text-align: center">
        <div>SourceMap 一个存储源代码与编译代码对应位置映射的信息文件</div>
        <div>这东西因为是 Google 开发出来的，所以目前只有 chrome 能够运行</div>
        <div>
            开发者模式 找到 Sources 栏，勾选上允许 JS SourceMap 与 css SourceMap
            （默认应该是选上的）
        </div>
        <div>生成Source Map( .map 文件 )</div>
        <div style="margin: 50px auto">
            报错了~~，打开控制台查看{{ errorInfo }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'sourceMapTest',
    data() {
        return {
            errorInfo: '',
        }
    },
    created() {
        let obj = {}
        this.errorInfo = obj.people.name
    },
}
</script>

<style scoped></style>
