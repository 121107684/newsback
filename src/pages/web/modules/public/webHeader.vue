<template>
    <div class="h-250">
        <div class="logo"></div>
        <el-menu 
            :default-active="activeIndex"
            class="header-menu"
            mode="horizontal"
            background-color = "transparent"
            text-color = "#666"
            active-text-color = "#2777E2"
            @select="handleSelect">
            <el-menu-item class="pl23 pr23 h46" index="index">首页</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="news">协会要闻</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="menber">会员动态</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="party">党建工作</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="industry">产业研究</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="brand">品牌活动</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="notice">通知公告</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="apply">入会申请</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="about">关于协会</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css';
    import { Menu, MenuItem } from 'element-ui';
    export default {
        components: {
            [Menu.name]: Menu,
            [MenuItem.name]: MenuItem
        },
        data() {
            return {
                activeIndex: 'index'
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
                    } catch {
                        this.activeIndex = 'index'
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
.h-250
    height 250px
    .logo
        background url('~@/assets/img/web/logo_new.png') no-repeat bottom left / auto 160px
        width 496px
        height 177px
        margin-left 114px
    .header-menu
        margin auto
        width 1000px
        border-bottom none
.pl23 
    padding-left 0px
    margin-left 23px
    &:hover
        background-color transparent !important
.pr23
    padding-right 0px
    margin-right 23px
.h46
    height 50px
    font-size 16px
    &.is-active
        font-size 20px
</style>