
<script>
export default {
    props: {
        name: {
            type: String
        },
        subName: {
            type: String
        },
        toPath: {
            type: String
        }
    },
    computed: {
        marginBottom() {
            let numStr;
            if (this.subName) {
                numStr = '8px';
            } else {
                numStr = '15px';
            }
            return numStr;
        }
    }
};
</script>
<template>
    <div class="common-title">
        <p class="main-title" :style="{marginBottom: marginBottom}">{{name}}</p>
        <el-breadcrumb separator=">" v-if="subName">
            <el-breadcrumb-item :to="{ path: toPath }">{{subName}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    
</template>
<style lang="stylus" scoped>
.common-title
    .main-title
        font-size 24px
        line-height 31px
        color #303133
    .el-breadcrumb
        padding-bottom 16px
        .el-breadcrumb__item
            font-size 12px
            color fontColorL
            line-height 16px
            .el-breadcrumb__inner
                font-weight normal
            &:last-child
                color #000015
                .el-breadcrumb__inner
                    font-weight 600
</style>

