<template>
    <div class="ad-module">
        <div class="content-box">
            <h4><span>协会要闻</span></h4>
            <ul> 
                <li @click="routerGo(data, 'news')" v-for="data in typeOne.slice(0, 1)" :key="data.id" class="first">
                    <img  class="adimg" src="" alt="暂无图片">
                    <p>{{data.title}}</p>
                </li>
                <li  v-if="typeOne.length>2"> 
                    <p @click="routerGo(data, 'news')" v-for="data in typeOne.slice(1, 10)" :key="data.id">
                        <span>{{data.title}}</span>
                        <span>{{data.publishDate}}</span>
                    </p>
                </li>
            </ul>
            <router-link tag="a" class="link" to="/news/list">查看更多》</router-link>
        </div>
        <div class="content-box">
            <h4><span>会员动态</span></h4>
            <ul>    
                <li @click="routerGo(data, 'menber')" v-for="data in typeTwo.slice(0, 1)" :key="data.id" class="first">
                    <!-- <img  class="adimg" :src="data.imgData.url" alt=""> -->
                    <img class="adimg" src="" alt="暂无图片">
                    <p>{{data.title}}</p>
                </li>
                <li  v-if="typeTwo.length>2">
                    <p  @click="routerGo(data, 'menber')" v-for="data in typeTwo.slice(1)" :key="data.id">
                        <span>{{data.title}}</span>
                        <span>{{data.publishDate}}</span>
                    </p>
                </li>
            </ul>
            <router-link tag="a" class="link" to="/menber/list">查看更多》</router-link>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { getNewsPagePublished} from '@/common/api';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Image } from 'element-ui';
export default {
    props: {
        adList: Array
    },
    components: {
        swiper,
        swiperSlide,
        [Image.name]: Image
    },
    data() {
        return {
            swiperOptionTop: {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false
                }
            },
            typeOne: [],
            typeTwo: []
        }
    },
    created() {
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 1
        }).then(v=>{
            this.typeOne = v.data;
        })
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 3,
            type: 2
        }).then(v=>{
            this.typeTwo = v.data;
        })
    },
    methods: {
        routerGo(data, key) {
            this.$router.push({
                path: `/${key}/detail`,
                query: {
                    id:data.id
                }
            });
        },
        windowOpen(url){
            window.open(url)
        }
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
                .adimg 
                    display block
                    width 260px
                    height 155px
                    background-color #ccc
                p 
                    width 204px
                    height 115px
                    overflow hidden
                    border-bottom none
                    &:hover
                        background-color transparent
            li 
                width 100%
                cursor pointer
                p 
                    display flex
                    justify-content space-between
                    font-size 16px
                    line-height 32px
                    border-bottom 1px dotted #2777E2
                    span:first-child
                        display block
                        width 268px
                        white-space nowrap
                        text-overflow ellipsis
                        overflow hidden
                    span:last-child
                        display block
                        width 157px  
                        text-align right
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