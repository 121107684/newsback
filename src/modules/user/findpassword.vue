<template>
<div class="container">
    <div class="clearfix centermodel">
        <h3 class="m0">北京旅游衍生品协会管理系统</h3>
        <h5 class="m0">密码找回</h5>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label-width="75px" size="mini" label="用户名" prop="loginName" class="wc form-group">
                <el-input v-model="ruleForm.loginName"></el-input>
            </el-form-item>
            <el-form-item label-width="75px"  size="mini"  label="新密码" prop="newPassword"  class="wc form-group"> 
                <el-input type="password" v-model="ruleForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item label-width="75px"  size="mini"  label="新密码" prop="newPasswordtwo"  class="wc form-group mb0">
                <el-input type="password" v-model="ruleForm.newPasswordtwo"></el-input>
            </el-form-item>
            <router-link class="findpassword" to="/login">前往登录</router-link>
            <div class="row-block">
                <a  class="btnup" @click="userfind('ruleForm')">确认</a>
            </div> 
        </el-form>
        <h4>北京旅游衍生品协会</h4>
    </div>
</div>
</template>
<script>
export default {
  name: "findpassword",
  data() {
    return {
        ruleForm:{
            loginName:'',
            newPassword:'',
             newPasswordtwo:''
        },
        rules: {
          loginName: [
            { required: true, message: '请输入账号', trigger: 'change' }
          ],
          newPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min:6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          newPasswordtwo: [
            { required: true, message: '请再次输入密码', trigger: 'change' },
            { min:6, max:20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
        }
        
    } 
  },
  methods:{
        userfind(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.ruleForm.newPassword!=this.ruleForm.newPasswordtwo){
                        this.$message({
                            showClose: true,
                            message: "两次输入密码不一致",
                            type: 'error'
                        });
                        return false
                    }
                    this.$ajax.post("/api/recover_pwd",{
                        loginName: this.ruleForm.loginName,
                        newPassword: this.ruleForm.newPassword
                    }).then((res)=>{
                        this.$message({
                            showClose: true,
                            message: "找回成功",
                            type: 'success'
                        });
                        
                    }).catch((error)=>{
                        this.$message({
                            showClose: true,
                            message: "错误",
                            type: 'error'
                        });
                    })  
                } else {
                    return false;
                }
            });
           
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/common/global.styl';
    .container  
        background  url(../../assets/img/loginmodel2.png) no-repeat center top / 646px 308px 
        position  fixed 
        top  50% 
        left 50% 
        margin-left  -323px 
        margin-top -86px 
        width 646px
        height  308px
    .centermodel   
        width 250px 
        margin 46px auto 
        position relative
    .findpassword  
        position  absolute 
        top 182px 
        right -16px 
        font-size 12px 
        color  rgb(21, 138, 240) 
        text-align  center 
        line-height  24px
    .centermodel h3  
        position  absolute 
        top -112px 
        left 50%
        transform translateX(-50%)
        font-size  36px 
        color  #fff 
        text-align  center 
        width  540px
    .centermodel h5  
        position  absolute 
        top -32px 
        left -40px 
        font-size 18px 
        color  #fff 
        text-align  center 
        width  280px
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
         margin-left -25px 
         width 250px
    .row-block   
        margin-left  -8px
    .btnup  
        display  block 
        width  75px 
        height  26px 
        margin-left 84px
        margin-top 10px
        line-height  26px 
        color  #fff 
        text-align  center 
        cursor  pointer 
</style>
