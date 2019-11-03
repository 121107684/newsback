<template>
    <div id="app">
        <web-header></web-header>
        <router-view></router-view>
        <web-footer></web-footer>
    </div>
</template>

<script>
import webHeader from './modules/public/webHeader'
import webFooter from './modules/public/webFooter'
export default {
    components: {
        webHeader,
        webFooter
    }
}
</script>

<style  lang="stylus" scoped>
#app
    width 1366px
    min-height 100%
    margin 0 auto
    background url('~@/assets/img/web/bg.png')
</style>
