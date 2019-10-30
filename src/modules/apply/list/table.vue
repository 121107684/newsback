<template>
    <el-table
        size="small"
        :data="list"
        height='height'
        style="width: 100%"
        @row-click="view">
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
    </el-table>
</template>

<script>
    export default {
        props: {
            list:Array
        },
        data() {
            return {
                columns: [{
                    id: 'companyName',
                    text: '企业名称'
                }, {
                    id: 'applyDate',
                    text: '提交时间'
                }, {
                    id: 'industry',
                    text: '所属环境'
                }, {
                    id: 'area',
                    text: '所在地区'
                }, {
                    id: 'corporate',
                    text: '企业法人'
                }, {
                    id: 'linkName',
                    text: '申请人姓名'
                }, {
                    id: 'linkTel',
                    text: '申请人联系方式'
                }]
            }
        },
        methods: {
            view() {
                this.$router.push({
                    path: 'detail',
                    name: 'applyDetail',
                    query: {}
                });
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>