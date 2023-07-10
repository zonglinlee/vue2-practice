<template>
    <div>
        <div class="flex mb-4">
            <a
                class="mr-2 text-blue-500 hover:underline"
                href="https://github.com/lenosp/v-tree/tree/master"
                >v-tree</a
            >
            |
            <a
                href="https://github.com/lenosp/v-tree/tree/master"
                class="text-blue-500 hover:underline ml-2"
                >Vue-Giant-Tree(基于 z-tree 的封装)</a
            >
        </div>

        <vue-tree
            :tree-node.sync="treeNode"
            :async-call="asyncCall"
            :async="true"
            :node-click="nodeClick"
            :default-select="selectedNodeId"
            :lined="true"
            :checkbox="true"
            :default-checked="[130, 150]"
        />
    </div>
</template>

<script>
import VueTree from '@/views/components/Tree/VueTree'
import json from '@/views/components/Tree/demo/json'

export default {
    name: 'VueTreeDemo',
    data() {
        return {
            treeNode: json,
            selectedNodeId: '',
        }
    },
    components: {
        VueTree,
    },
    methods: {
        asyncCall(item) {
            const { name, id } = item
            return new Promise((resolve) => {
                setTimeout(() => {
                    const subItem = new Array(4)
                        .fill(undefined)
                        .map((_item, index) => {
                            const _subItem = {}
                            const random = Math.ceil(Math.random() * 10000)
                            _subItem.id = id + index + random
                            // console.log(_subItem)
                            _subItem.name = `${name}${_subItem.id}`
                            _subItem.hasChildren = random % 2 === 0 ? '1' : '0'
                            _subItem.pcode = id
                            return _subItem
                        })
                    resolve(subItem)
                }, 500)
            })
        },
        nodeClick(node) {
            // console.log('currentClickedNode is :', node)
            this.selectedNodeId = node.id
        },
    },
}
</script>

<style scoped></style>
