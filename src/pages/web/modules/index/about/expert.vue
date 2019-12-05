<template>
    <div class="content">
        <div class="title">协会资源</div>
        <p class="color">学术支持单位</p>
        <p class="small">清华大学美术学院</p>
        <p class="small">北京大学建筑与景观设计学院</p>
        <p class="small">北京大学新闻与传播学院</p>
        <p class="small">北京大学文化产业研究院</p>
        <p class="small">中国人民大学文化产业研究院</p>
        <p class="small">中国人民大学后勤集团</p>
        <p class="small">中国劳动关系学院</p>
        <p class="small">南开大学旅游与服务学院</p>
        <p class="small">北京第二外国语学院旅游科学学院</p>
        <p class="color">合作支持单位</p>
        <p class="small">中国教育电视台</p>
        <p class="small">教育部中外人文交流中心</p>
        <p class="small">中国纺织工业联合会流通分会</p>
        <p class="small">中国商业联合会市场委员会</p>
        <p class="small">中国人类学民族学研究会博物馆文化专业委员会</p>
        <p class="small">中国妇女旅游委员会</p>
        <p class="small">中国百货协会时尚定制委员会</p>
        <p class="small">中国职业经理人协会</p>
        <p class="small">中国文化国际旅行社有限公司</p>
        <p class="small">中国纺织摄影协会</p>
        <p class="small">北京市文化创意产业促进中心</p>
        <p class="small">北京文化产业商会</p>
        <p class="small">北京设计学会</p>
        <p class="small">首都民间组织促进会</p>
        <p class="color">战略伙伴单位</p>
        <p class="small">中国邮政广告传媒公司</p>
        <p class="small">北京出版集团伦洋图书出版有限公司</p>
        <p class="small mb60">京版梅尔杜蒙（北京）文化传媒有限公司</p>
        <p>会员企业涵盖文旅相关行业，经营范围：</p>
        <div class="flex mt20">
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
    p.small
        font-size 16px
        text-indent 4em
        font-style italic
    .flex
        display flex
        >div
            border 1px #999 dashed
            flex 1
    &.color
        color #f86664
</style>