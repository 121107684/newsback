<template>
    <div class="col-md-4 content-center">
        <div class="card card-login card-plain">
            <form class="form" method="" action="">
                <div class="header header-primary text-center">
                    <div class="logo-container">
                        <img src="~@/assets/img/logo.png" alt="">
                    </div>
                </div>
                <div class="content">
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input v-model="ruleForm.username" type="text" class="form-control" placeholder="用户名">
                        <span class="input-group-addon">
                            <i class="now-ui-icons users_circle-08"></i>
                        </span>
                    </div>
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input  v-model="ruleForm.oldPassword"  type="text" placeholder="密码" class="form-control" />
                        <span class="input-group-addon">
                            <i class="now-ui-icons text_caps-small"></i>
                        </span>
                    </div>
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input  v-model="ruleForm.newPassword"  type="text" placeholder="新密码" class="form-control" />
                        <span class="input-group-addon">
                            <i class="now-ui-icons text_caps-small"></i>
                        </span>
                    </div>
                </div>
                <div class="footer text-center">
                    <a @click="submiForm" class="btn btn-primary btn-round btn-lg btn-block">确定修改</a>
                </div>
                <!-- <div class="pull-left">
                    <h6>
                        <a href="#pablo" class="link">忘记用户名？点此找回</a>
                    </h6>
                </div> -->
                <div class="pull-right">
                    <h6>
                        <router-link tag="a" class="link" to="/login">返回登录</router-link>
                    </h6>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {userModifyPwd} from '@/common/api';
export default {
     name: "login",
    data() {
        return {
            ruleForm:{
                username:'test',
                oldPassword:'ud888888',
                newPassword:'111111'
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'change' }
                ],
                oldPassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                newPassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submiForm () {
            userModifyPwd(this.ruleForm).then(v=>{
                let date = new Date();
                date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
                document.cookie = `accessToken="${v.data.accessToken}"; expires=${date.toUTCString()}`;
                document.cookie = `name="${v.data.name}"; expires=${date.toUTCString()}`;
                document.cookie = `role="${v.data.role}"; expires=${date.toUTCString()}`;
                this.$router.push({
                    path: '/'
                });
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import '~@/assets/css/bootstrap.min.css';
@import '~@/assets/sass/now-ui-kit.scss';
</style>