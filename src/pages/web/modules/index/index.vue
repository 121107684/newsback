<template>
    <div class="banner">
        <web-banner></web-banner>
        <web-ad></web-ad>
        <web-about></web-about>
        <web-news></web-news>
        <web-friends></web-friends>
    </div>
</template>

<script>
import webBanner from '../content/banner'
import webAd from '../content/ad'
import webAbout from '../content/about'
import webNews from '../content/news'
import webFriends from '../content/friends'
export default {
    components: {
        webBanner,
        webAd,
        webAbout,
        webNews,
        webFriends
    }
}
</script>

<style lang="scss" scoped>

</style>