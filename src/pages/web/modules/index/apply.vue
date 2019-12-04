<template>
    <div class="contents clearfix">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical"
            @select="handleSelect">
            <el-menu-item class="pl23 pr23 h46" index="constitution">协会章程</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="condition">入会条件</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="program">入会程序</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="standard">会费标准</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="right">会员权利</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="obligation">会员义务</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="applypage">入会申请</el-menu-item>
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
             activeIndex: 'constitution'
        }
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
                    let path = newRouter.path.split('/')[2];
                    this.activeIndex = path
                } catch {}
            }
        }
    },
    mounted() {
        try {
            let path = this.$route.path.split('/')[2];
            this.activeIndex = path
        } catch {}
    }
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