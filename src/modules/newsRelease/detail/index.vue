<template>
  <div>
    <common-title 
        :name="name"
        :subName="subName"
        :toPath="toPath">
    </common-title>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="ruleForm">
      <el-form-item label="新闻标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="协会要问" value="shanghai"></el-option>
          <el-option label="会员动态" value="beijing"></el-option>
          <el-option label="党建工作" value="shanghai"></el-option>
          <el-option label="产业研究" value="beijing"></el-option>
          <el-option label="通知公告" value="shanghai"></el-option>
          <el-option label="品牌活动" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新闻配图" required>
            <pic-upload></pic-upload>
       </el-form-item> 
      <el-form-item label="新闻内容" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import commonTitle from '@/components/title';
import picUpload from '@/components/picUpload';
export default {
    components: {
        commonTitle,
        picUpload
    },
  data() {
    return {
        name: '编辑新闻',
        subName: '新闻列表',
        toPath: '/newsRelease/list',
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
.ruleForm
    width 600px
</style>