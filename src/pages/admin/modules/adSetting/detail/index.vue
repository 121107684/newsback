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
        <el-form-item  label="广告图" required prop="fileKey">
            <div class="clearfix" v-if="ruleForm.imgData.url">
                <div class="mb8 imgbox mr12">
                    <img :src="ruleForm.imgData.url" alt="">
                    <i @click="del()" class="el-icon-delete"></i>
                </div>
            </div>
            <pic-upload v-else @uploadSuccess="uploadSucess" :showIng="true"></pic-upload>
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
            toPath: '/adSetting/list',
            ruleForm: {
                imgData: {},
                status: 0,
                title: '',
                url:'',
                fileKey: '',
                publishDate: ''
            },
            rules: {
                publishDate: [
                    { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
                ],
                fileKey: [
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
        del() {
            this.ruleForm.imgData = {}
        },
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
                    this.back()
                } else {
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
            Object.keys(data).forEach(v=>{
                this.ruleForm.imgData[v] = data[v];
            })
            this.ruleForm.fileKey = data.fileKey;
        },
    },
    created() {
        if (this.$route.query.type === 'edit') {
            getAdInfo({
                id:  this.$route.query.id
            }).then(v=>{
                Object.keys(v.data).forEach(key=>{
                    this.ruleForm[key] = v.data[key]
                })
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.imgbox 
    width 150px
    height 150px
    border 1px dashed #d9d9d9
    border-radius 6px
    display block
    position relative
    float left
    img 
        display block
        width 100%
        height 100%
        background-color #ccc
    &:hover
        .el-button
            display block
    .el-icon-delete
        position absolute
        top 4px
        right 4px
        width 24px
        height 24px
        background-color rgba(0,0,0,0.5)
        text-align center
        line-height 24px
        color #fff
        cursor pointer
        &:hover 
            color red
</style>