<template>
<div class="add-thumb">
    <swiper @slideChange="callback" :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-big" v-for="(item, index) in imgList" :key="index">
            <el-image class="hei100" :src="item.url">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title">{{item.title}}</div>
        </swiper-slide>
    </swiper>
    <div class="gallery-thumbs">
        <ul>
            <li :class="{'active': index === indexActive}" @click="slideTo(index)" class="slide-small" v-for="(item, index) in imgList" :key="index">
                <el-image class="hei100" :src="item.url">
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
                <div class="title">{{item.title}}</div>
            </li>
        </ul>
    </div>
    <!-- <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-small">
            <el-image class="hei100"  :src="''">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title"></div>
        </swiper-slide>
        <swiper-slide class="slide-small">
            <el-image class="hei100"  :src="">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title"></div>
        </swiper-slide>
        <swiper-slide class="slide-small">
            <el-image class="hei100"  :src="">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title"></div>
        </swiper-slide>
        <swiper-slide class="slide-small">
            <el-image class="hei100"  :src="">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title"></div>
        </swiper-slide>
        <swiper-slide class="slide-small">
            <el-image class="hei100"  :src="">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <div class="title"></div>
        </swiper-slide>
    </swiper> -->
</div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css'
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
        indexActive: 0,
        swiperOptionTop: {
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false
            }
        },
        imgList: [{
            url: 'http://47.92.175.76:8081/api/udc/file/get?key=default/c8c2fdf5efb35b41c8d947ceeef9d36b/850060.jpg',
            title: '天空没有翅膀的痕迹，而我已经飞过。思念是翅膀飞过的痕迹。'
        },{
            url: 'http://47.92.175.76:8081/api/udc/file/get?key=default/4ef716ae4d7af584959fbc776269afd3/157575.jpg',
            title: '想要人生反转走上巅峰，真的没有那么容易。'
        },{
            url: 'http://47.92.175.76:8081/api/udc/file/get?key=default/552e2a6141ce846f4c6d2cdb5154cf5e/435424.jpg',
            title: '飞花两岸照船红，百里榆堤半日风。卧看满天云不动，不知云与我俱东'
        },{
            url: 'http://47.92.175.76:8081/api/udc/file/get?key=default/0c2caffd3c0f5969435d299d51f8b168/044344.jpg',
            title: '枫叶千枝复万枝，江桥掩映暮帆迟。忆君心似西江水，日夜东流无歇时。'
        },{
            url: 'http://47.92.175.76:8081/api/udc/file/get?key=default/f918f6089a7ebbccd0776fd4dc9caa0d/618273.jpg',
            title: '愿你一生有山可靠，有树可栖。春赏花，夏纳凉，秋登山，冬扫雪。'
        }]
        // swiperOptionThumbs: {
        //     spaceBetween: 10,
        //     centeredSlides: true,
        //     slidesPerView: 'auto',
        //     touchRatio: 0.2,
        //     slideToClickedSlide: true,
        //     autoplay: {
        //         delay: 3000,
        //         stopOnLastSlide: false
        //     }
        // }
            // swiperOptionTop: {
            //     renderBullet: function (index, className) {
            //         console.debug(index, className);
			//         return '<span class="' + className + '"><image src="upload/s0' + ( index  + 1 ) + '.jpg"></span>';
		    // 	}
            // }
      }
    },
    computed: {
    },
    mounted() {
        // this.$nextTick(() => {
        //     const swiperTop = this.$refs.swiperTop.swiper
        //     const swiperThumbs = this.$refs.swiperThumbs.swiper
        //     swiperTop.controller.control = swiperThumbs
        //     swiperThumbs.controller.control = swiperTop
        // })
        // this.$refs.swiperTop.swiper.on('slideChange', ()=>{
        //     console.debug(this.activeIndex);
        // })
    },
    methods: {
        callback(v) {
            this.indexActive = this.$refs.swiperTop.swiper.activeIndex
        },
        slideTo(i) {
            this.$refs.swiperTop.swiper.slideTo(i)
        }
    }
}
</script>

<style lang="stylus" scoped>
.gallery-top
    width 100%
    height 540px
    background-color #ccc
.add-thumb
    height 834px
.swiper-slide {
    background-size: cover;
    background-position: center;
// &.slide-1 {
//     background-image:url('/static/images/surmon-1.jpg');
// }
// &.slide-2 {
//     background-image:url('/static/images/surmon-6.jpg');
// }
// &.slide-3 {
//     background-image:url('/static/images/surmon-8.jpg');
// }
// &.slide-4 {
//     background-image:url('/static/images/surmon-9.jpg');
// }
// &.slide-5 {
//     background-image:url('/static/images/surmon-10.jpg');
// }
}
.gallery-thumbs
    height 127px
    box-sizing border-box
    padding 10px 0
    margin-top 30px
    ul
        display flex
        justify-content center
        li
            width 204px
            height 107px
            margin 0 16px
            position relative
            background-color #ccc
            &:after
                content ' '
                display block
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                background-color rgba(255, 255, 255, .6)
        li.active
            &:after
                background-color rgba(255, 255, 255, 0)

.slide-big
    position relative
    img
        display block
        width 100%
        height 100%
    .title
        position absolute
        bottom 0px
        left 0px
        right 0px
        height 48px
        background-color rgba(0, 0, 0, .5)
        color #ffffff
        line-height 48px
        text-indent 2em
        font-size 20px
.slide-small
    position relative
    img
        display block
        width 100%
        height 100%
    .title
        position absolute
        bottom 0px
        left 0px
        right 0px
        height 20px
        background-color rgba(0, 0, 0, .5)
        color #ffffff
        line-height 20px
        font-size 12px
        text-indent 8px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        width 100%
.hei100
    height 100%
</style>