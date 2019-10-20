<template>
    <div>
        <el-table
            size="small"
            :data="list"
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
                        :key="scope.row.commentId"
                        :column="item"
                    ></component>
                    <template v-else>
                        {{scope.row[item.id]}}
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="操作" :width="150">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    @click="handleDel(scope.$index, scope.row)">删除</el-button>
                    <el-button
                    size="mini"
                    @click="handleApply(scope.$index, scope.row)">发布</el-button>
                </template>
                </el-table-column>
            </el-table>
    </div>
</template>

<script>
import newInfoModule from './newInfoModule';
export default {
    components: {
        newInfoModule
    },
    props: {
        list:Array
    },
    data() {
        return {
            columns: [{
                id: '',
                text: '新闻详情',
                cellComponent: 'newInfoModule'
            }, {
                id: 'type',
                text: '类型'
            }, {
                id: 'createTime',
                text: '发布时间'
            }]
        }
    },
    methods: {
        handleEdit() {
            this.$router.push({
                path: 'detail',
                name: 'newsReleaseDetail',
                query: {}
            });
        },
        handleDel() {
            this.$confirm('确认删除此条新闻？', '提示', {
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
        },
        handleApply() {
            this.$confirm('确认发布此条新闻？', '提示', {
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