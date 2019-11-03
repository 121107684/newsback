<template>
    <div class="news-box">
        <div class="imgs">
            <img src="" alt="">
        </div>
        <div class="content-box">
            <h4 class="title"><span>产业研究</span></h4>
            <ul> 
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
            </ul>
            <a href="">查看更多》</a>
        </div>
        <div class="content-box">
            <h4 class="title"><span>党建工作</span></h4>
            <ul> 
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
                <li>
                    这里是第一条协会动态新闻的标题
                </li>
            </ul>
            <a href="">查看更多》</a>
        </div>
    </div>
</template>

<script>
import { getNewsPagePublished} from '@/common/api';
export default {
    data() {
        return {}
    },
    created() {
        getAdPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 3
        }).then(v=>{
            console.debug(v)
        })
        getAdPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 4
        }).then(v=>{
            console.debug(v)
        })
    }
}
</script>

<style lang="stylus" scoped>
.news-box
    padding 20px 114px 0px
    display flex
    justify-content space-between
    .imgs
        width 485px
        height 285px
        background-color #ccc
        margin-right 37px
    .content-box
        width 268px
        >h4
            padding 20px 0px
            margin 0
            text-align center
            font-size 20px
            span 
                display inline-block
                position relative
                &::after,
                &::before
                    display block
                    content " "
                    width 60px
                    height 2px
                    background-color #2777E2
                    position absolute
                    top 50%
                &::after
                    left -70px
                &::before 
                    right -70px
        ul 
            li
                font-size 16px
                line-height 26px
        >a 
            font-size 14px
            line-height 1.5
            float right
            padding-right 15px
            padding-top 20px
            color #2777E2
</style>