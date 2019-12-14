<template>
    <div class="footer">
        <div class="texts">
            <p>主办单位： 北京旅游衍生品协会</p>
            <p>技术支持：北京鲸保科技有限公司</p>
            <p>地址：北京市东城区建国门内大街26号新闻大厦</p>
        </div>
        <div  class="texts">
            <p>电话：010-8592 1229</p>
            <p>传真：010-8592 1227</p>
            <p>邮箱：100005</p>
        </div>
        <div v-if="false" class="texts">
            <div>京公安网备案号：</div>
            <div>ICP备案号：</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.footer
    height 145px
    background-color #ccc
    padding 50px 214px
    display flex
    justify-content space-between
    .texts 
        line-height 30px
        font-size 16px
</style>