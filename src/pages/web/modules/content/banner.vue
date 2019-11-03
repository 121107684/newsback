<template>
<div class="add-thumb">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <swiper-slide class="slide-4">4</swiper-slide>
        <swiper-slide class="slide-5">5</swiper-slide>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
</div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getAdPagePublished} from '@/common/api';
export default {
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
        }
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
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
        // getAdPagePublished().then(v=>{
        //     console.debug(v)
        // })
    },
    methods: {
        callback(v) {
            console.debug(v)
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
.gallery-thumbs {
    height: 127px;
    box-sizing: border-box;
    padding: 10px 0;
    margin-top 30px
}
.gallery-thumbs .swiper-slide {
    width: 204px;
    height: 100%;
    opacity: 0.4;
    background-color #fff
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>