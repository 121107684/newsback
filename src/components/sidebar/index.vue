
<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            strFlag: [],
            openFlag: true
        };
    },
    computed: {
        ...mapGetters({
            env: 'env'
            // userPermissions: 'userPermissions'
        }),
        nav() {
            return this.env;
        },
        onRoutes() {
            this.strFlag = [];
            let path = this.$route.path;
            let pathArr = path.split('/');
            let routerId = '';
            if (path !== '/') {
                let pathFirst = pathArr[1];
                routerId = pathFirst.replace(/\-\w/, (m) => {
                    return m.substring(1).toUpperCase();
                });
            }
            // if (routerId !== 'orderManage' && routerId !== 'sellerManage' && routerId !== 'messageTool') {
            //     this.strFlag.push(routerId);
            //     if (pathArr[2]) {
            //         let pathSecond = pathArr[2].substring(0, 1).toUpperCase() + pathArr[2].substring(1);
            //         routerId += pathSecond;
            //     }
            // }
            return routerId;
        }
    }
};
</script>
<template>
    <el-menu
        :default-active="onRoutes"
        router
        style="height: 100%"
        active-text-color="#409EFF"
        background-color="#343B54"
        text-color="#ffffff"
        :default-openeds="strFlag"
        :unique-opened="openFlag"
        :collapse="false">
        <template v-for="n in nav">
            <el-submenu
                v-if="n.children && n.children.length>0"
                :index="n.id"
                :key="n.id"
                :route="{name: n.id}">
                <template slot="title">
                    <i :class="n.className"></i>
                    <span>{{n.name}}</span>
                </template>
                <el-menu-item
                    v-for="subN in n.children"
                    :index="subN.id"
                    :key="subN.id"
                    v-show="userPermissions[subN.id]"
                    :route="{name: subN.id}">
                    <template slot="title">
                        <span>{{subN.name}}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
            
            <el-menu-item
                :index="n.id"
                :key="n.id"
                :route="{name: n.id}"
                v-else>
                <template slot="title">
                    <i :class="n.className" class="icon"></i>
                    <span>{{n.name}}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<style lang="stylus">
.el-aside
	&::-webkit-scrollbar-track-piece
		background-color #c2c2c2
	&::-webkit-scrollbar
		width 8px
		height 8px
	&::-webkit-scrollbar-thumb
		background-color #909399
		background-clip padding-box
		border 1px solid #909399
		min-height 28px
.el-menu
	background-color bgColor
	box-shadow 7px 0 4px 0 rgba(0,0,0,0.06)
	border-right: none;
.el-menu-item
	color mainColor
.el-submenu__title i
	color mainColor
.el-submenu [class^=el-icon-]
	font-size 16px
	width 16px
	margin-right 0
.el-menu-item i
	color mainColor
.el-submenu
	.el-menu-item
		min-width 100px
</style>


