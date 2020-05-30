<template>
    <div class="contents clearfix">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical"
            active-text-color = "#2777E2"
            @select="handleSelect">
            <el-menu-item class="pl23 pr23 h46" index="news">协会要闻</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="menber">会员动态</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="party">党建工作</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="industry">产业研究</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="brand">品牌活动</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="notice">通知公告</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import { Menu, MenuItem } from 'element-ui';
export default {
    components: {
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem
    },
    data() {
        return {
            activeIndex: 'news'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push({
                name: key
            });
        }
    },
    watch:{
        $route:{
            handler(newRouter){
                try {
                    let path = newRouter.path.match(/\/(\S*)\//)[1];
                    this.activeIndex = path
                } catch {}
            }
        }
    },
    mounted() {
        try {
            let path = this.$route.path.match(/\/(\S*)\//)[1];
            this.activeIndex = path
        } catch {}
    },
}
</script>

<style lang="stylus" scoped>
.el-menu-vertical
    width 140px
    margin 110px 0px 110px 50px
.contents
    overflow hidden
    background-color #fff
    display flex
</style>