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
        <el-form-item label="广告图" required prop="imgKey">
            <pic-upload @uploadSuccess="uploadSucess" :showIng="true"></pic-upload>
            <p>图片大小推荐使用1024*128</p>
        </el-form-item>
        <el-form-item label="广告图标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">确定</el-button>
            <el-button @click="back">返回</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import picUpload from '@/components/picUpload';
import { getAdInfo, getAdUpdata, getAdAdd} from '@/common/api';
export default {
    components: {
        commonTitle,
        picUpload
    },
    data() {
        return {
            name: '编辑广告栏',
            subName: '广告列表',
            toPath: '/adSeting/list',
            ruleForm: {
                imgData: {},
                status: 0,
                title: '',
                url:'',
                imgKey: ''
            },
            rules: {
                imgKey: [
                    { required: true, message: '请上传广告图', trigger: 'change' }
                ],
                title: [
                    { required: true, message: '请输入广告图标题', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                url: [
                    { required: true, message: '请输入广告图链接', trigger: 'blur' },
                    { min: 10, max: 200, message: '长度在 10 到 200 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    switch (this.$route.query.type) {
                        case 'edit': 
                            getAdUpdata(
                                this.ruleForm
                            ).then(v=>{
                                this.back();
                            })
                            break;
                        case 'add':
                            getAdAdd(
                                Object.assign(this.ruleForm, {status: 1})
                            ).then(v=>{
                                this.back();
                            })
                            break;
                    }
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        back() {
            this.$router.push({
                path: 'list',
                name: 'adSettingList',
            });
        },
        uploadSucess(data) {
            this.ruleForm.imgDatas.push(data)
            this.ruleForm.imgKey = data.imgKey;
        },
    },
     created() {
        getAdInfo({
            id:  this.$route.query.id
        }).then(v=>{
            Object.keys(v).forEach(key=>{
                this.ruleForm[key] = v[key]
            })
        })
    }
}
</script>

<style lang="scss" scoped>

</style>