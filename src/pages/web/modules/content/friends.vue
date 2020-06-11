<template>
    <div class="friends-box">
        <div class="friends">
            <h2>战略合作</h2>
            <ul>
                <li @click="openWindow('http://www.bjgsl.org.cn')">
                    <img :src="require('@/assets/img/friends/friend1.jpg')" alt="">
                </li>
                <li @click="openWindow('http://gygl.beijing.gov.cn')">
                    <img :src="require('@/assets/img/friends/friend2.jpg')" alt="">
                </li>
                <li @click="openWindow('http://mzj.beijing.gov.cn')">
                    <img :src="require('@/assets/img/friends/friend3.jpg')" alt="">
                </li>
                <li @click="openWindow('http://whlyj.beijing.gov.cn')">
                    <img :src="require('@/assets/img/friends/friend4.jpg')" alt="">
                </li>
                <li @click="openWindow('http://cpac.chinapost.com.cn')">
                    <img :src="require('@/assets/img/friends/friend8.png')" alt="">
                </li>
            </ul>
        </div>
        <div class="friends">
            <h2>友情链接</h2>
            <ul>
                <li>
                   
                </li>
                <li @click="openWindow('http://www.xuexiph.cn')">
                    <img :src="require('@/assets/img/friends/friend5.jpg')" alt="">
                </li>
                <li @click="openWindow('http://www.chnmuseum.cn')">
                    <img :src="require('@/assets/img/friends/friend6.jpg')" alt="">
                </li>
                <li @click="openWindow('http://www.chinaql.org')">
                    <img :src="require('@/assets/img/friends/friend7.jpg')" alt="">
                </li>
                <li>
                   
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            openWindow(url) {
                window.open(url)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.friends-box
    padding 30px 114px 20px
    .friends
        width 100%
        padding-top 20px
        background-color #fff
        margin-bottom 30px
        padding-bottom 30px
        h2  
            width 90px
            margin 0 auto
            font-size 20px
            text-align center
            border-bottom 2px solid #2777E2
        ul 
            margin-top 30px
            padding 0px 20px
            display flex 
            justify-content space-between
            li
                width 22%
                height 64px
                // background-color #ccc
                cursor pointer
                img 
                    // background-color #ccc
                    display block
                    height 64px
                    margin 0 auto
</style>