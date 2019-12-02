<template>
    <el-table
        size="small"
        :data="list"
        height='height'
        style="width: 100%">
        <el-table-column
            v-for="item in columns"
            :key="item.id"
            :prop="item.id"
            :label="item.text"
            :width="item.width">
            <template slot-scope="scope">
                <component
                    v-if="item.cellComponent"
                    :is="item.cellComponent"
                    :row="scope.row"
                    :key="scope.row.id"
                    :column="item"
                ></component>
                <template v-else>
                    {{scope.row[item.id]}}
                </template>
            </template>
        </el-table-column>
        <el-table-column label="操作" :width="240">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="primary"
                @click="handleDel(scope.$index, scope.row)">删除</el-button>
                <el-button
                size="mini"
                type="primary"
                v-if="statusShow(scope.row)"
                @click="handleApply(scope.$index, scope.row)">发布</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import newinfoModule from './newInfoModule';
import newtypeModule from './newTypeModule';
import newstatueModule from './newStatusModule';
import {newsDelect, newsPublish} from '@/common/api';
import {getCookie} from '@/common/utils';
export default {
    components: {
        newinfoModule,
        newtypeModule,
        newstatueModule
    },
    props: {
        list:Array
    },
    data() {
        return {
            columns: [{
                id: '',
                text: '新闻详情',
                width: '360px',
                cellComponent: 'newinfo-module'
            }, {
                id: 'type',
                text: '类型',
                cellComponent: 'newtype-module'
            }, {
                id: 'publishDate',
                text: '发布时间'
            }, {
                id: 'status',
                text: '发布状态',
                cellComponent: 'newstatue-module'
            }]
        }
    },
    computed: {
        cookieRole() {
            return parseInt(getCookie('role').replace(/\"/g, ""), 10)
        }
    },
    methods: {
        handleEdit(index, data) {
            this.$router.push({
                path: 'detail',
                name: 'newsReleaseDetail',
                query: {
                    type: 'edit',
                    id: data.id
                }
            });
        },
        handleDel(index, data) {
            this.$confirm('确认删除此条新闻？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                newsDelect({
                    id: data.id
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
        handleApply(index, data) {
            this.$confirm('确认发布此条新闻？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // console.debug(data.id);
                newsPublish({
                    id: data.id
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
                    message: '已取消发布'
                });          
            });
        },
        statusShow(data) {
            return data.status === 1 && this.cookieRole === 1
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/global.styl'

</style>
