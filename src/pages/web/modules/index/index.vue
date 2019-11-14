<template>
    <div class="banner">
        <web-banner></web-banner>
        <web-ad :adList="adList"></web-ad>
        <web-about></web-about>
        <web-news :adList="adList"></web-news>
        <web-friends></web-friends>
    </div>
</template>

<script>
import webBanner from '../content/banner'
import webAd from '../content/ad'
import webAbout from '../content/about'
import webNews from '../content/news'
import webFriends from '../content/friends'
import { getAdPagePublished} from '@/common/api';
export default {
    components: {
        webBanner,
        webAd,
        webAbout,
        webNews,
        webFriends
    },
    data() {
        return {
            adList: []
        }
    },
    mounted() {
        getAdPagePublished({
            pageNum: 1,
            pageSize: 10,
        }).then(v=>{
            this.adList = v.data
        }) 
    },
    
}
</script>

<style lang="scss" scoped>

</style>