<template>
    <div class="contents clearfix">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical"
            active-text-color = "#2777E2"
            @select="handleSelect">
            <el-menu-item class="pl23 pr23 h46" index="introduce">协会介绍</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="leader">协会领导</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="expert">协会资源</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="works">主要工作</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="company">会员单位</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="set">部门设置</el-menu-item>
            <el-menu-item class="pl23 pr23 h46" index="branch">分支机构</el-menu-item>
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
            activeIndex: 'introduce'
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