<template>
    <ul
        class="tree"
        :class="{ line: lined }"
        :style="{ paddingLeft: level > 0 ? 1 * 24 + 'px' : 0 }"
    >
        <li
            class="row"
            v-for="item in treeNode_"
            @click.stop="treeClick($event, item)"
            :key="item.id"
        >
            <div class="row-parent">
                <div
                    class="icon1 icon-plus expand-item"
                    v-if="!item.expand"
                ></div>
                <div class="icon1 icon-minus expand-item" v-else></div>
                <div
                    class="icon-checkbox-unchecked checkbox-item"
                    v-if="checkbox && !item.checked"
                ></div>
                <div
                    class="icon-checkbox-checked checkbox-item"
                    v-if="checkbox && item.checked"
                ></div>
                <div class="content">
                    <div
                        class="loading-icon"
                        v-if="loadingData && loadingItem.id === item.id"
                    ></div>
                    <template v-else>
                        <div
                            class="icon2 icon2-expand"
                            v-if="
                                item.expand &&
                                item.children &&
                                item.children.length > 0
                            "
                        ></div>
                        <div
                            class="icon2 icon2-folded"
                            v-if="
                                !item.expand &&
                                item.children &&
                                item.children.length > 0
                            "
                        ></div>
                        <div class="icon2" v-if="!item.children"></div>
                    </template>

                    <div
                        class="content-title"
                        :class="{
                            'content-title-selected': item.id === defaultSelect,
                        }"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <VueTree
                :lined="lined"
                :level="level + 1"
                v-if="item.expand && item.hasChildren === '1' && item.children"
                :tree-node.sync="item.children"
                :async="true"
                :async-call="asyncCall"
                :node-click="nodeClick"
                :default-select="defaultSelect"
                :checkbox="checkbox"
                :default-checked="defaultChecked"
                @update:treeNode="updateParentTree"
            ></VueTree>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'VueTree',
    props: {
        treeNode: {
            type: Array,
            required: true,
            default: () => [],
        },
        async: {
            type: Boolean,
            default: false,
        },
        asyncCall: {
            type: Function,
        },
        nodeClick: {
            type: Function,
        },
        level: {
            type: Number,
            default: 0,
        },
        defaultSelect: {
            type: [Number, String],
        },
        lined: {
            type: Boolean,
            default: true,
        },
        checkbox: {
            type: Boolean,
            default: false,
        },
        defaultChecked: {
            type: Array,
            default: () => [],
        },
        defaultExpand: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            loadingData: false,
            loadingItem: {},
            treeNode_: [],
        }
    },
    mounted() {
        this.initData(this.treeNode)
    },
    watch: {
        treeNode() {
            console.log('update_treeNode')
            this.initData(this.treeNode)
        },
    },
    methods: {
        initData(data) {
            const copy = JSON.parse(JSON.stringify(data))
            // debugger
            const traversal = (cur) => {
                for (let i = 0; i < cur.length; i++) {
                    const node = cur[i]
                    // checked
                    if (
                        !('checked' in node) ||
                        ('checked' in node && typeof node.checked !== 'boolean')
                    ) {
                        if (this.defaultChecked.includes(node.id)) {
                            node.checked = true
                        } else {
                            node.checked = false
                        }
                    }
                    if (this.defaultChecked.includes(node.id))
                        node.checked = true
                    // expand
                    if (
                        !('expand' in node) ||
                        ('expand' in node && typeof node.expand !== 'boolean')
                    ) {
                        if (this.defaultExpand.includes(node.id)) {
                            node.expand = true
                        } else {
                            node.expand = false
                        }
                    }
                    if (this.defaultChecked.includes(node.id)) {
                        if (!(this.async && node.hasChildren === '1'))
                            node.expand = true
                    }

                    if (
                        node.hasChildren === '1' &&
                        node.children &&
                        node.children.length > 0
                    ) {
                        traversal(node.children)
                    }
                }
            }
            traversal(copy)
            this.treeNode_ = copy
        },
        async treeClick($event, item) {
            // trigger node click first then request children data
            if (this.nodeClick) {
                this.nodeClick(item)
            }
            // console.log($event.currentTarget, $event.target)
            if ($event.target.classList.contains('checkbox-item')) {
                item.checked = !item.checked
                this.$emit('checkbox', item)
                return
            }

            const { hasChildren, children } = item
            if ($event.target.classList.contains('expand-item')) {
                if (children || hasChildren === '0') {
                    item.expand = !item.expand
                }
            }
            if (hasChildren === '1' && !children) {
                this.loadingItem = item
                this.loadingData = true
                if (this.async && typeof this.asyncCall === 'function') {
                    const data = await this.asyncCall(item)
                    this.loadingData = false
                    this.updateTreeNode(item, data)
                }
            }
        },
        updateParentTree() {
            this.$nextTick(() => {
                this.$emit('update:treeNode', this.treeNode_)
            })
        },
        updateTreeNode(item, data) {
            const copy = JSON.parse(JSON.stringify(this.treeNode_))
            let matchNode = null
            const traversal = (cur) => {
                let result = null
                for (let i = 0; i < cur.length; i++) {
                    const node = cur[i]
                    if (node.id === item.id) {
                        result = node
                        break
                    }
                    if (
                        node.hasChildren === '1' &&
                        node.children &&
                        node.children.length > 0
                    ) {
                        const subNode = traversal(node.children)
                        if (subNode) {
                            result = subNode
                            break
                        }
                    }
                }
                return result
            }
            matchNode = traversal(copy)
            if (matchNode) {
                matchNode.children = data
                matchNode.expand = true
                console.log(matchNode.id, matchNode.expand, matchNode.name)
                this.$emit('update:treeNode', copy)
            }
        },
    },
}
</script>

<style scoped lang="scss">
.tree {
    .line {
        background: url('./line_conn.png') repeat-y 0 0;
    }
    .icon1,
    .icon2,
    .checkbox-item {
        cursor: pointer;
    }

    .row-parent {
        display: flex;
        align-items: center;

        .icon-plus {
            width: 21px;
            height: 21px;
            background: url('./icon_sprit.png') -126px 0;
            margin-right: 5px;
        }
        .icon-minus {
            width: 21px;
            height: 21px;
            background: url('./icon_sprit.png') -105px 0;
            margin-right: 5px;
        }
        .icon-checkbox-checked {
            width: 14px;
            height: 14px;
            background: url('./icon_sprit.png') -26px -5px;
            margin-right: 4px;
        }
        .icon-checkbox-unchecked {
            width: 14px;
            height: 14px;
            background: url('./icon_sprit.png') -5px -5px;
            margin-right: 4px;
        }

        .content {
            display: flex;
            align-items: center;

            .icon2 {
                width: 21px;
                height: 21px;
                background: url('./icon_sprit.png') -147px -42px;
                margin-right: 5px;
            }
            .icon2-expand {
                background: url('./icon_sprit.png') -147px -21px;
            }

            .icon2-folded {
                background: url('./icon_sprit.png') -147px 0;
            }
            .loading-icon {
                width: 16px;
                height: 16px;
                margin-right: 5px;
                background: url('./loading.gif') no-repeat;
            }

            .content-title {
                cursor: pointer;
                transition: 0.12s;
                padding: 4px;
                border-radius: 4px;

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
            }

            .content-title-selected {
                color: white;
                background: green;
            }
        }
    }
}
</style>
