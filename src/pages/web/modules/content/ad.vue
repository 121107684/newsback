<template>
    <div class="ad-module">
        <div class="content-box">
            <h4><span>协会要闻</span></h4>
            <ul>    
                <li class="first">
                    <img src="" alt="">
                    <p>为深入推进“不忘初心、牢记使命”主题教育，不断增强党员守初心、担使命……</p>
                </li>
                <li>
                    <p>
                        <span>这里是第一条协会动态新闻的标题</span>
                        <span>2019.01.01  10:00</span>
                    </p>
                    <p>
                        <span>这里是第一条协会动态新闻的标题</span>
                        <span>2019.01.01  10:00</span>
                    </p>
                </li>
            </ul>
            <a href="">查看更多》</a>
        </div>
        <div class="content-box">
            <h4><span>会员动态</span></h4>
            <ul>    
                <li class="first">
                    <img src="" alt="">
                    <p>为深入推进“不忘初心、牢记使命”主题教育，不断增强党员守初心、担使命……</p>
                </li>
                <li>
                    <p>
                        <span>这里是第一条协会动态新闻的标题</span>
                        <span>2019.01.01  10:00</span>
                    </p>
                    <p>
                        <span>这里是第一条协会动态新闻的标题</span>
                        <span>2019.01.01  10:00</span>
                    </p>
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
        console.debug('111111');
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 1
        }).then(v=>{
            console.debug(v)
        })
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 2
        }).then(v=>{
            console.debug(v)
        })
    }
}
</script>

<style lang="stylus" scoped>
.ad-module
    height 350px
    padding 33px 114px
    display flex
    justify-content space-between
    .content-box
        background #ffffff
        border-radius 26px
        width 528px
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
        >ul
            padding 0px 21px
            li.first 
                display flex
                justify-content space-between
                padding-bottom 12px
                img 
                    display block
                    width 260px
                    height 155px
                    background-color #ccc
                p 
                    width 204px
                    height 115px
                    overflow hidden
            li 
                width 100%
                p 
                    display flex
                    justify-content space-between
                    font-size 16px
                    line-height 1.5
                    margin-bottom 8px
                    span:first-child
                        display block
                        width 268px
                    span:last-child
                        display block
                        width 157px  
                        text-align right
        >a 
            font-size 14px
            line-height 1.5
            float right
            padding-right 15px
            padding-top 20px
            color #2777E2
</style>