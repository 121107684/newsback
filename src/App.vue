<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import watcher from '@/common/watcher';
export default {
    async created() {
        watcher.watch({
            show: (err) => {
                this.$message.error(err);
            }
        });
    }
}
</script>

<style  lang="stylus" scoped>
#app
    padding 0px
    height 100%
    background url(./assets/img/loginbg.jpg) no-repeat center top / 100% 100%
</style>
