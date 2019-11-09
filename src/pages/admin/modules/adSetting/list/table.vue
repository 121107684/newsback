<template>
    <div>
        <el-button class="mb16"  @click="editAd('add')" type="primary" icon="el-icon-plus">添加</el-button>
        <el-row :gutter="20">
            <el-col class="mb20" :span="8" v-for="(o) in list" :key="o.id">
                <el-card :body-style="{ padding: '0px' }">
                <img src="hamburger.png" alt="广告图" class="image">
                <div style="padding: 14px;">
                    <span class="title"> {{o.title}} </span>
                    <div class="bottom clearfix">
                    <el-button v-if="o.status === 1" type="text" @click="publishedAd(o.id)" class="button">发布</el-button>
                    <el-button type="text" @click="editAd('edit', o.id)" class="button">编辑</el-button>
                    <el-button type="text" @click="delAd(o.id)" class="button">删除</el-button>
                    <b v-if="o.status === 2">【已发布】</b>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import {getAdDel, getAdPage, getAdPublish} from '@/common/api';
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
                let query = {};
                if (type === 'edit') {
                    query.id = id;
                    query.type = type;
                } else {
                    query.type = type;
                }
                this.$router.push({
                    path: 'detail',
                    name: 'adSettingDetail',
                    query: query
                });
            }
            
        },
        delAd(id) {
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
                    this.$parent.getList();
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        publishedAd(id) {
            this.$confirm('确认发布此条广告？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                getAdPublish({
                    id: id
                }).then(v=>{
                    this.$message({
                        type: 'success',
                        message: v.message[0].details
                    });
                    this.$parent.getList();
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消发布操作'
                });          
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.image
    width 100%;
    height 120px
    display block
    background-color #efefef
.title
    line-height 32px
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
    width 300px
</style>