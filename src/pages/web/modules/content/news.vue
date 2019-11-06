<template>
    <div class="news-box">
        <div class="imgs">
            <img src="" alt="">
        </div>
        <div class="content-box">
            <h4 class="title"><span>产业研究</span></h4>
            <ul> 
                 <li v-for="data in typeThree" :key="data.id">
                    <span>{{data.title}}</span>
                    <span>{{data.publishDate}}</span>
                </li>
            </ul>
            <router-link tag="a" class="link" to="/industry/list">查看更多》</router-link>
        </div>
        <div class="content-box">
            <h4 class="title"><span>党建工作</span></h4>
            <ul> 
                <li v-for="data in typeFour" :key="data.id">
                   <span>{{data.title}}</span>
                    <span>{{data.publishDate}}</span>
                </li>
                
            </ul>
            <router-link tag="a" class="link" to="/party/list">查看更多》</router-link>
        </div>
    </div>
</template>

<script>
import { getNewsPagePublished} from '@/common/api';
export default {
    data() {
        return {
            typeThree: [],
            typeFour: []
        }
    },
    created() {
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 7,
            type: 3
        }).then(v=>{
            this.typeThree = v.data;
        })
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 7,
            type: 4
        }).then(v=>{
            this.typeFour = v.data;
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
                height 26px
                border-bottom 1px dotted #2777E2
                cursor pointer
                span:nth-child(1)
                    font-size 14px
                    width 140px
                    display inline-block
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                span:nth-child(2)
                    width 110px
                    font-size 12px
                    display inline-block
                    overflow hidden
                    white-space nowrap
                &:hover
                    background-color rgba(0, 0, 0, .1)
        >a 
            font-size 14px
            line-height 1.5
            float right
            padding-right 15px
            padding-top 20px
            color #2777E2
</style>