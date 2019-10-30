<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            user: 'userInfo'
        })
    },
    methods: {
        exit() {
            window.location.href = 'https://cas.zuoyebang.cc/logout';
            localStorage.removeItem('Authorization');
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>管理平台</h1>
        <div class="user-info">
            <span class="user-name">白玉姑娘</span>
            <span class="exit" @click="exit"><i class="el-icon-mall-exit"></i></span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.container
    height 64px
    line-height 64px
    background rgba(255, 255, 255, .8)
    clearfix()
    h1
        float left
        margin 0
        font-size 20px
        width 182px
        height 64px
        text-align center
        line-height 64px
    .user-info
        float right
        font-size 0
        color fontColorD
        padding-right 41px
        height 64px
        span
            font-size 16px
    .user-name
        padding-right 6px
        margin-right 6px
    .exit
        cursor pointer
</style>

