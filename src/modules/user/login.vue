<template>
<div class="container">
    <h3 class="m0">北京旅游衍生品协会管理系统</h3>
    <div class="clearfix centermodel">
        <h5 class="m0">用户登录</h5>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label-width="75px" size="mini" label="用户名" prop="username" class="wc form-group">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label-width="75px"  size="mini"  label="密码" prop="password"  class="wc form-group mb0"> 
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <router-link class="findpassword" to="login/findpassword">忘记密码？点击找回</router-link>
            <div class="row-block">
                <a @click="submiForm" class="btnup">登录</a>
            </div> 
        </el-form>
        <!-- <div class="form-group clearfix">
            <label class="f-white" for="inputUsernameEmail">用户名:</label>
            <input type="text" id="inputUsernameEmail" class="form-control" v-model="loginName" >
        </div>
        <div class="form-group  clearfix">
            <label for="inputPassword">密码:</label>
            <input type="password" id="inputPassword" class="form-control" v-model="password">
        </div> -->
        <!-- <router-link class="findpassword" to="login/findpassword">忘记密码？点击找回</router-link>
            <div class="row-block mt44">
                <div class="row">
                <div class="col-md-12 row-block">
                    <a @click="userlogin" class="btnup">登录</a>
                </div>
            </div>
        </div>  -->
        <h4>北京旅游衍生品协会</h4>
    </div>
</div>
</template>
<script>
import {userLogin} from '@/common/api';
export default {
    name: "login",
    data() {
        return {
            ruleForm:{
                username:'test',
                password:'ud888888'
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'change' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submiForm () {
            this.$refs.ruleForm.validate((valid) => {
                if(valid) {
                    userLogin(this.ruleForm).then(v=>{
                        console.debug(v)
                    })
                }
            })
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~@/common/global.styl';
.container
    background  url(../../assets/img/loginmodel.png) no-repeat center top / 646px 308px 
    position  fixed 
    top  50% 
    left 50% 
    margin-left  -323px 
    margin-top -82px 
    width 646px 
    height  308px
    h3
        position  absolute 
        top  -70px
        left 50%
        transform translateX(-50%)
        font-size  36px 
        color  #fff 
        text-align  center 
        width  540px
    .centermodel 
        width 250px 
        margin 46px auto 
        position relative
    .findpassword
        position absolute 
        top 155px 
        right -16px 
        font-size 12px 
        color  rgb(21, 138, 240) 
        text-align  center 
        line-height  24px
    .centermodel h5
        position  absolute 
        top -34px 
        left -40px 
        font-size 18px 
        color  #fff 
        text-align  center 
        width  280px 
        line-height  24px
     .centermodel h4
        position  absolute 
        bottom  -130px 
        left -36px 
        font-size 18px 
        color  #fff 
        text-align  center 
        width  280px 
        line-height  24px
    .form-group
         margin-left  -25px 
         width 250px
    .row-block 
        .btnup
            display  block 
            width  75px 
            height  34px
            line-height  34px 
            color  #fff 
            text-align  center 
            cursor  pointer 
            margin-left 76px
            margin-top 14px
</style>