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
        <el-form-item label="广告图" required>
            <pic-upload></pic-upload>
            <p>图片大小推荐使用1024*128</p>
        </el-form-item>
        <el-form-item label="广告图标题" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
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
            name: '编辑广告栏',
            subName: '广告列表',
            toPath: '/adSeting/list',
            ruleForm: {},
            rules: {}
        }
    }
}
</script>

<style lang="scss" scoped>

</style>