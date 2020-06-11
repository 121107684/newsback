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
            url: require('@/assets/img/banner/banner1.png'),
            title: '林德汤会长做《协会2019年工作报告》'
        },{
            url: require('@/assets/img/banner/banner2.png'),
            title: '“一江水 一家人”澜湄国家命运共同体公益海报设计大赛征集启事'
        },{
            url: require('@/assets/img/banner/banner3.png'),
            title: '协会联合主办“中国文化与旅游融合发展论坛”在北京顺利举行'
        },{
            url: require('@/assets/img/banner/banner4.png'),
            title: '协会以战略合作伙伴身份参加“科技赋能 邮驿新韵”第四届全国主题邮局文化展'
        },{
            url: require('@/assets/img/banner/banner5.png'),
            title: '李杰书记和林德汤会长向协会首批十位专家智囊颁发聘任证书'
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
    height 670px
    background-color #ccc
.add-thumb
    height 857px
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
            width 242px
            height 107px
            margin 0 16px
            position relative
            background-color #ccc
            overflow hidden
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
    width 100%
</style>