<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="ruleForm">
    <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="ruleForm.companyName"></el-input>
    </el-form-item>
    <el-form-item label="所属环境" prop="industry">
        <el-input v-model="ruleForm.industry"></el-input>
    </el-form-item>
    <el-form-item label="所在区域" required prop="area">
        <el-input v-model="ruleForm.area"></el-input>
    </el-form-item>
    <el-form-item label="企业法人" prop="corporate">
        <el-input v-model="ruleForm.corporate"></el-input>
    </el-form-item>
    <el-form-item label="企业网址" prop="companyHref">
        <el-input v-model="ruleForm.companyHref"></el-input>
    </el-form-item>
    <el-form-item label="申请人姓名" prop="linkName">
        <el-input v-model="ruleForm.linkName"></el-input>
    </el-form-item>
    <el-form-item label="申请人性别" prop="linkSex">
        <el-radio-group v-model="ruleForm.linkSex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="申请人联系方式" prop="linkTel">
        <el-input v-model="ruleForm.linkTel"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm">重置</el-button>
    </el-form-item>
</el-form>
</template>
<script>
import {Button, FormItem, Form, Input, RadioGroup, Radio, Message} from 'element-ui';
import {getMshipApply} from '@/common/api';
import {formatDate} from '@/common/utils';
import Vue from 'vue';
Vue.prototype.$message = Message;
  export default {
    components: {
        [Button.name]: Button,
        [FormItem.name]: FormItem,
        [Form.name]: Form,
        [Input.name]: Input,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio
    },
    data() {
      return {
        ruleForm: {
            companyName: '',
            industry: '',
            area: '',
            corporate: '',
            companyHref: '',
            linkName: '',
            linkSex: 1,
            linkTel: ''
        },
        rules: {
            companyName: [
                { required: true, message: '请输入企业名', trigger: 'blur' },
                { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            industry: [
                { required: true, message: '请输入所属环境', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
            area: [
                { required: true, message: '请输入区域', trigger: 'blur' },
                { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
            ],
            corporate: [
                { required: true, message: '请输入企业法人', trigger: 'blur' },
                { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            companyHref: [
                { required: true, message: '请输入企业网址', trigger: 'blur' },
                { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
            ],
            linkName: [
                { required: true, message: '请输入联系人姓名', trigger: 'blur' },
                { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            linkSex: [
                { required: true, message: '请选择联系人性别', trigger: 'change' }
            ],
            linkTel: [
                { required: true, message: '请输入申请人联系方式', trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
                getMshipApply(Object.assign(this.ruleForm, {applyDate: formatDate(new Date())})).then(v=>{
                    this.$message({
                        message: v.message[0].details,
                        type: 'success'
                    });
                    this.$refs.ruleForm.resetFields();
                })
          } else {
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.ruleForm.resetFields();
      }
    }
  }
</script>
<style lang="stylus" scoped>
.ruleForm
    padding 100px 50px
    width 500px
</style>