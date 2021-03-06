<template>
    <div class="g-cascader-item" :style="{height: height}">
        <div class="g-cascader-item-parents">
            <div class="g-cascader-item-parent" v-for="parent in source" @click="onSelectParent(parent)" :class="{'g-cascader-item-parent-active': selected[level] && (parent.name === selected[level].name)}">
                <div class="g-cascader-item-parent-text">
                    {{parent.name}}
                </div>
                <template v-if="loadingItem.id === parent.id && loadingItem.name === parent.name">
                    <g-icon name="loading" class="g-cascader-item-parent-icon g-cascader-item-parent-icon-loading"></g-icon>
                </template>
                <template v-else>
                    <g-icon name="right" class="g-cascader-item-parent-icon" v-if="rightIconVisible(parent)"></g-icon>
                </template>
            </div>
        </div>
        <div class="g-cascader-item-children" v-if="children">
            <bowen-cascader-item :source="children" :selected="selected" :loadData="loadData" :loadingItem="loadingItem" :level="level + 1" @update:selected="onUpdateSelected"  @close-cascader="closeCascader"></bowen-cascader-item>
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon';
export default {
    name: 'bowen-cascader-item',
    components: {
        'g-icon': Icon,
    },
    props: {
        source: {
            type: Array,
            required: true,
        },
        selected: {
            type: Array,
            default() {
                return [];
            },
        },
        level: {
            type: Number,
            required: false,
            default: 0,
        },
        height: {
            type: String,
        },
        loadData: {
            type: Function,
        },
        loadingItem: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    computed: {
        children() {
            if(this.selected[this.level]) {
                let item = this.source.filter(item => item.id === this.selected[this.level].id)
                if(item && item[0].children && item[0].children.length > 0) {
                    return item[0].children;
                } else {
                    return null;
                }
            }
        },
        dynamicClass() {
            return;
        },
    },
    created() {},
    mounted() {},
    methods: {
        onSelectParent(parent) {
            // 需要 深拷贝
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            selectedCopy[this.level] = parent;
            selectedCopy.splice(this.level + 1);
            this.$emit('update:selected', selectedCopy);
        },
        onUpdateSelected(selected) {
            this.$emit('update:selected', selected);
        },
        closeCascader() {
            this.$emit('close-cascader');
        },
        rightIconVisible(parent) {
            return this.loadData ? !parent.isLeaf : parent.children
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../assist/style/_var.scss';
.g-cascader-item {
    @include flex();
    height: 100%;
    > .g-cascader-item-parents {
        height: 100%;
        padding: 4px 0;
        overflow: auto;
        > .g-cascader-item-parent {
            @include flex(flex-start, center);
            padding: $padding $padding-bigger;
            min-width: 6em;
            cursor: pointer;
            &:hover {
                background-color: $bg-color-light;
            }
            &.g-cascader-item-parent-active {
                color: $color-active;
                > .g-cascader-item-parent-icon {
                    fill: $color-active;
                }
            }
            > .g-cascader-item-parent-text{
                margin-right: 1em;
                user-select: none;
                white-space: nowrap;
            }
            > .g-cascader-item-parent-icon {
                margin-left: auto;
                transform: scale(0.8);
                &.g-cascader-item-parent-icon-loading{
                    // fill: inherit;
                    animation: spin 1.5s linear infinite;
                }
            }
        }
    }
    > .g-cascader-item-children {
        border-left: 1px solid $border-color-light;
        height: 100%;
    }
}
</style>


