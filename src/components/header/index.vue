<script>
import {mapGetters} from 'vuex';
import {userLoginOut} from '@/common/api'
import {getCookie} from '@/common/utils';
export default {
    computed: {
        ...mapGetters({
            user: 'userInfo'
        }),
        name() {
            return getCookie('name').replace(/\"/g, "")
        }
    },
    methods: {
        exit() {
            userLoginOut().then(()=>{
                document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                this.$router.push({
                    path: '/userloging',
                    name: 'userloging',
                });
            })
            // window.location.href = 'https://cas.zuoyebang.cc/logout';
            // localStorage.removeItem('Authorization');
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>管理平台</h1>
        <div class="user-info">
            <span class="user-name">{{name}}</span>
            <span class="exit" title="退出登录" @click="exit"><i class="el-icon-setting"></i></span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.container
    height 64px
    line-height 64px
    background rgba(255, 255, 255, .8)
    max-width 100%
    padding 0
    box-shadow 0px 2px 2px #ccc
    clearfix()
    h1
        float left
        margin 0
        font-size 20px
        width 182px
        height 64px
        text-align center
        line-height 64px
        background-color rgb(84, 84, 84)
        color #fff
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

