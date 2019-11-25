<template>
    <div class="detail">
        <div class="title">
            {{data.title}}
            <span>{{data.publishDate}}</span>
        </div>
        <div class="imgs" v-for="datas in data.imgDatas" :key="datas.url">
            <img :src="datas.url" alt="">
        </div>
        <div class="content">
            {{data.digest}}
        </div>
        <ul>    
            <li class="frist">
                <h2>这里是第一条协会动态新闻的标题</h2>
                <div class="flex-box">
                    <img src="" alt="">
                    <p>
                        <span>2019.01.01</span>
                        <span>
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        </span>
                    </p>
                </div>
            </li>
            <li class="frist">
                <h2>这里是第一条协会动态新闻的标题</h2>
                <div class="flex-box">
                    <img src="" alt="">
                    <p>
                        <span>2019.01.01</span>
                        <span>
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        </span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { newsInfo} from '@/common/api';
export default {
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        let {id, pageNum, pageSize} = this.$route.query;
        newsInfo({
           id, pageNum, pageSize
        }).then(v=>{
            this.data = v.data;
        })
    },
}
</script>

<style lang="stylus" scoped>
.detail
    padding 50px 20px 
    width 1100px
    margin 0 auto    
    >.title
        font-size 26px
        text-align center
        span 
            display block
            font-size 16px
            line-height 2
    .imgs
        img 
            display block
            margin 0 auto 20px
            width 400px
    >.content
        font-size 16px
        line-height 2
        text-indent 2em
    ul 
        padding-top 20px
        display flex
        justify-content space-between
        li.frist 
            h2 
                font-size 22px
                font-weight bold
            .flex-box
                width 100%
                display flex
                justify-content space-between
                height 245px
                img
                    width 245px
                    height 115px
                    background-color #ccc
                p 
                    width 250px
                    padding-left 20px
                    span 
                        display block
                        font-size 16px
                        padding-bottom 14px
</style>