<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import watcher from '@/common/watcher';
export default {
    async created() {
        document.title = "北京旅游衍生品管理后台"
        watcher.watch({
            show: (err) => {
                this.$message.error(err);
            },
            goRouter: (data) =>{
                this.$router.push(data);
            }
        });
    }
}
</script>

<style  lang="stylus" scoped>
#app
    padding 0px
    height 100%
</style>
