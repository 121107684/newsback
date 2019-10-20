<template>
    <div>
        <el-button type="text" class="button">添加</el-button>
        <el-row :gutter="20">
            <el-col :span="8" v-for="(o) in 5" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                <img src="hamburger.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <el-button type="text" @click="editAd" class="button">编辑</el-button>
                    <el-button type="text" @click="delAd" class="button">删除</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default {
        props: {
            list:Array
        },
        data() {
            return {
                
            }
        },
        methods: {
            onSubmit() {},
            editAd() {
                this.$router.push({
                    path: 'detail',
                    name: 'adSettingDetail',
                    query: {}
                });
            },
            delAd() {
                this.$confirm('确认删除此条广告？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            } 
        }

    }
</script>

<style lang="scss" scoped>

</style>