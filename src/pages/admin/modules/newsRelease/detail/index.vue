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
        <el-form-item label="新闻标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择活动区域">
            <el-option v-for="data in newsType" :key="data.name" :label="data.name" :value="data.keys"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="新闻配图" prop="imgDatas">
                <transition-group class="images" tag="div" name="flip-list">
                    <div class="mb8 imgbox mr12" v-for="(item, index) in ruleForm.imgDatas" :key="item.fileKey">
                        <img :src="item.url" alt="">
                        <i @click="del(index)" class="el-icon-delete"></i>
                        <el-button
                            v-if="index !== 0"
                            class="left is-circle" type="primary"
                            icon="el-icon-arrow-left"
                            @click="movePic('left', index)"></el-button>
                        <el-button
                            v-if="index !== ruleForm.imgDatas.length - 1"
                            class="right is-circle"
                            type="primary"
                            icon="el-icon-arrow-right"
                            @click="movePic('right', index)"></el-button>
                    </div>
                </transition-group>
                <div>
                    <pic-upload @uploadSuccess="uploadSucess"></pic-upload>
                </div>
        </el-form-item> 
        <el-form-item label="新闻内容" prop="digest">
            <el-input rows="20" type="textarea" v-model="ruleForm.digest"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="back">后退</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import picUpload from '@/components/picUpload';
import {newsType} from '@/common/config';
import {newsAdd, newsEdit, newsInfo} from '@/common/api';
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
            newsType: newsType,
            ruleForm: {
                title: "",
                type: "",
                publishDate: '',
                imgDatas: [],
                digest: ""
            },
            rules: {
                title: [
                    { required: true, message: "请输入新闻名称", trigger: "blur" },
                    { min: 3, max: 50, message: "长度在 3 到 50 个字符", trigger: "blur" }
                ],
                publishDate: [
                    { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
                ],
                type: [
                    { required: true, message: "请输入新闻类别", trigger: "change" }
                ],
                digest: [
                    { required: true, message: "请填写新闻内容", trigger: "blur" },
                    { min: 10, max: 5000, message: "长度在 10 到 5000 个字符", trigger: "blur" }
                ],
            }
        };
    },
    created() {
        let {type, id} = this.$route.query
        if(type === 'edit') {
            newsInfo({
                id
            }).then(v=>{
                console.debug(v);
                Object.keys(v.data).forEach(key=>{
                    this.ruleForm[key] = v.data[key]
                })
                
            })
        }
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    switch (this.$route.query.type) {
                        case 'edit': 
                            newsEdit(
                                this.ruleForm
                            ).then(v=>{
                                this.back();
                            })
                            break;
                        case 'add':
                            newsAdd(
                                Object.assign(this.ruleForm, {status: 1})
                            ).then(v=>{
                                this.back();
                            })
                            break;
                    }
                } else {
                    return false;
                }
            });
        },
        back() {
            this.$router.push({
                path: 'list',
                name: 'newsReleaseList',
            });
        },
        del(index) {
            this.ruleForm.imgDatas.splice(index, 1)
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        uploadSucess(data) {
            this.ruleForm.imgDatas.push(data)
        },
        movePic(str, index) {
            let arr = this.ruleForm.imgDatas.concat([]);
            let x;
            let y;
            if (str === 'left') {
                x = index - 1;
                y = index;
            } else {
                x = index;
                y = index + 1;
            }
            arr[x] = this.ruleForm.imgDatas[y];
            arr[y] = this.ruleForm.imgDatas[x];
            this.ruleForm.imgDatas = arr;
        }
    }
};
</script>

<style lang="stylus" scoped>
.ruleForm
    width 600px
    .images
        &:after
            content ''
            height 0
            width 150px
            display block
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
        .el-button
            width 40px
            height 40px
            position absolute
            top 0
            bottom 0
            margin auto
            left 8px
            display none
            &.right
                left auto
                right 8px
.flip-list-move
    transition transform .5s
</style>