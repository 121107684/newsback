<template>
    <div class="news-box">
        <div class="imgs">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-big" v-for="(item, index) in adList" :key="index">
                    <el-image @click.stop="windowOpen(item)" class="img-style" :src="item.imgData.url">
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                    <div  @click.stop="windowOpen(item)" class="title">{{item.title}}</div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="content-box">
            <h4 class="title"><span>产业研究</span></h4>
            <ul> 
                 <li  @click="routerGo(data, 'industry')" v-for="data in typeThree" :key="data.id">
                    <span>{{data.title}}</span>
                    <span>{{data.publishDate}}</span>
                </li>
            </ul>
            <router-link tag="a" class="link" to="/industry/list">查看更多》</router-link>
        </div>
        <div class="content-box">
            <h4 class="title"><span>党建工作</span></h4>
            <ul> 
                <li  @click="routerGo(data, 'party')" v-for="data in typeFour" :key="data.id">
                   <span>{{data.title}}</span>
                    <span>{{data.publishDate}}</span>
                </li>
            </ul>
            <router-link tag="a" class="link" to="/party/list">查看更多》</router-link>
        </div>
    </div>
</template>

<script>
import { getNewsPagePublished, getAdPagePublished} from '@/common/api';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Image } from 'element-ui';
export default {
    components: {
        swiper,
        swiperSlide,
        [Image.name]: Image
    },
    data() {
        return {
            typeThree: [],
            typeFour: [],
            adList: [],
            swiperOptionTop: {
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false
                }
            },
        }
    },
    created() {
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 7,
            type: 4
        }).then(v=>{
            this.typeThree = v.data;
        })
        getNewsPagePublished({
            pageNum: 1,
            pageSize: 7,
            type: 3
        }).then(v=>{
            this.typeFour = v.data;
        })
        getAdPagePublished({
            pageNum: 1,
            pageSize: 10,
        }).then(v=>{
            this.adList = v.data
        }) 
    },
    methods: {
        routerGo(data, key) {
            this.$router.push({
                path: `/${key}/detail`,
                query: {
                    id:data.richId
                }
            });
        },
        windowOpen(data){
            let url = data.url;
            if(url && (url.indexOf('http://') === -1 || url.indexOf('https://') === -1)) {
                url = `http://${url}`
                window.open(url)
            } else if (url) {
                window.open(url)
            }
        }
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
        .gallery-top 
            width 485px
            height 285px
            display block
            position relative
            .img-style
                display block
                width 100%
                height 100%
            .title
                position absolute
                bottom 0px
                left 0px
                right 0px
                height 30px
                background-color rgba(0, 0, 0, .5)
                color #ffffff
                line-height 30px
                text-indent 1em
                font-size 16px
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