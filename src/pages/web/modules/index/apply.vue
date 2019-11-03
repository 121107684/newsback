<template>
    <div class="contents clearfix">
        <el-menu
            default-active="2"
            class="el-menu-vertical"
            @select="handleSelect">
            <el-menu-item class="pl23 pr23 h46" index="news">协会章程</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="menber">入会条件</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="party">入会程序</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="industry">会费标准</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="brand">会员权利</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="notice">会员义务</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="notice">入会申请</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { Menu, MenuItem } from 'element-ui';
export default {
    components: {
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
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
</style>