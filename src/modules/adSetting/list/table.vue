<template>
    <div>
        <el-button class="mb16"  @click="editAd('add')" type="primary" icon="el-icon-plus">添加</el-button>
        <el-row :gutter="20">
            <el-col :span="8" v-for="(o) in 5" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                <img src="hamburger.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <el-button type="text" @click="editAd('edit')" class="button">编辑</el-button>
                    <el-button type="text" @click="delAd" class="button">删除</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import {getAdDel} from '@/common/api';
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
        editAd(type, id=null) {
            if (this.list.length >=5 && type === 'add') {
                this.$message({
                    type: 'info',
                    message: '广告位内容最多添加5项。'
                });  
            } else {
                this.$router.push({
                    path: 'detail',
                    name: 'adSettingDetail',
                    query: {
                        type: 'add',
                        id: id
                    }
                });
            }
            
        },
        delAd() {
            this.$confirm('确认删除此条广告？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                getAdDel({
                    id: id
                }).then(v=>{
                    this.$message({
                        type: 'success',
                        message: v.message[0].details
                    });
                })
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