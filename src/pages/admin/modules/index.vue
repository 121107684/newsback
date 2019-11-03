<template>
<div class="full-height">
    <el-header class="header" height="64px">
    </el-header>
    <el-container>
        <el-aside width="182px">
            <sidebar></sidebar>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</div>

</template>
<script>
import elHeader from '@/components/header';
import sidebar from '@/components/sidebar';
export default {
	name: 'app',
	components: {
		elHeader,
		sidebar
	}
}
</script>
<style lang="stylus" scoped>
.full-height
    height 100%
.el-container
    height calc(100% - 64px)
    width 100%
    display flex
</style>