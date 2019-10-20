<template>
    <div>
        <common-title 
            :name="name"
            :subName="subName"
            :toPath="toPath">
        </common-title>
        <div class="info">
            <div class="row">
                <h3>企业名称</h3>
                <p>xxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div class="row">
                <h3>企业名称</h3>
                <p>xxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div class="row">
                <h3>企业名称</h3>
                <p>xxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div class="row">
                <h3>企业名称</h3>
                <p>xxxxxxxxxxxxxxxxxxxx</p>
            </div>
        </div>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
export default {
    components: {
        commonTitle
    },
    data() {
        return {
            name: '申请详情',
            subName: '申请列表',
            toPath: '/apply/list'
        }
    }
}
</script>

<style lang="stylus" scoped>
.info 
    font-size 14px
    line-height 28px
    .row
        margin-bottom 12px
        display flex
        h3 
            margin 0px
        p 
            margin-left 20px
</style>