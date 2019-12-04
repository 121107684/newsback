<template>
    <div class="content">
        <div class="title">协会资源</div>
        <p class="color">政府机构</p>
        <p>全国侨联、中国国家博物馆、学习出版社、北京市民政局、北京市文化和旅游局、北京市工商联、北京市民非中心、北京市公园管理中心</p>
        <p class="color">学术机构</p>
        <p>中国科学院、中国社科院、北京大学土人设计研究院、中国人民大学体育研究所、中国企业家杂志社、清华大学美术学院、北京服装学院</p>
        <p class="color">兄弟协会</p>
        <p>中国企业联合会、全国人才交流中心、中国教育装备行业协会、中国期刊协会、中国职业经理人协会、中国百货协会时尚定制委员会、中国旅游协会旅游商品与装备分会、中国人类学研究会博物馆专业委员会、北京设计学会、首都民间组织促进会、北京电影家协会、北京陶瓷工业协会</p>
        <p class="color">战略伙伴</p>
        <p>中国邮政广告传媒有限公司、中国国际旅行社集团、北京出版集团、中国企业家杂志社。</p>
        <p>会员企业涵盖文旅相关行业，经营范围：</p>
        <div class="flex mt40">
            <div class="mr24">
                <p>内容开发</p>
                <p>产品设计、生产</p>
                <p>产品销售</p>
                <p>品牌运营推广</p>
                <p>品牌和IP授权</p>
                <p>连锁运营</p>
                <p>国际文化交流</p>
            </div>
            <div  class="ml24">
                <p>投资服务</p>
                <p>供应链金融</p>
                <p>渠道招商</p>
                <p>展览和论坛</p>
                <p>管理精英培训</p>
                <p>营销人才培训</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.content
     padding  100px 50px
     font-size 16px
     width 900px
    .title
        font-size 20px
        border-left 4px solid #2777E2
        padding-left 16px
        margin-bottom 20px
    p 
        font-size 18px
        line-height 2
        text-indent 2em
    .flex
        display flex
        >div
            border 1px #999 dashed
            flex 1
    &.color
        color #f86664
</style>