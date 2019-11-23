<template>
    <div>
        <common-title 
            :name="name"
            :subName="subName"
            :toPath="toPath">
        </common-title>
        <div class="info">
            <div class="row">
                <h3>企业名称：</h3>
                <p>{{apply.companyName}}</p>
            </div>
            <div class="row">
                <h3>所属环境：</h3>
                <p>{{apply.industry}}</p>
            </div>
            <div class="row">
                <h3>所在区域：</h3>
                <p>{{apply.area}}</p>
            </div>
            <div class="row">
                <h3>企业法人：</h3>
                <p>{{apply.corporate}}</p>
            </div>
            <div class="row">
                <h3>企业网址：</h3>
                <p>{{apply.companyHref}}</p>
            </div>
            <div class="row">
                <h3>申请人姓名：</h3>
                <p>{{apply.linkName}}</p>
            </div>
            <!-- <div class="row">
                <h3>申请人性别：</h3>
                <p>{{sex}}</p>
            </div> -->
            <div class="row">
                <h3>申请人联系方式：</h3>
                <p>{{apply.linkTel}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import {getMshipApplyInfo} from '@/common/api';
export default {
    components: {
        commonTitle
    },
    data() {
        return {
            name: '申请详情',
            subName: '申请列表',
            toPath: '/apply/list',
            apply: {}
        }
    },
    computed: {
        sex() {
            switch (this.apply.linkSex) {
                case 1: 
                    return '男'
                    break
                case 2: 
                    return '女'
                    break
            }
        }
    },
    created() {
        getMshipApplyInfo({
            id:  this.$route.query.id
        }).then(v=>{
            this.apply = v.data;
        })
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
            font-size 14px
            color #666
        p 
            margin-left 20px
            font-weight bold
</style>