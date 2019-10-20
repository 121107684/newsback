<template>
    <div>
        <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="申请时间范围">
                <el-radio-group v-model="formInline.time">
                    <el-radio-button label="本周"></el-radio-button>
                    <el-radio-button label="本月"></el-radio-button>
                    <el-radio-button label="本年"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="自定义">
                <el-date-picker
                    v-model="formInline.datatime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            size="small"
            :data="list"
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
    </div>
</template>

<script>
    export default {
        props: {
            list:Array
        },
        data() {
            return {
                formInline:{
                    time: 1,
                    datatime: ''
                },
                columns: [{
                    id: '',
                    text: '企业名称'
                }, {
                    id: 'type',
                    text: '提交时间'
                }, {
                    id: 'createTime',
                    text: '所属环境'
                }, {
                    id: 'createTime',
                    text: '所在地区'
                }, {
                    id: 'createTime',
                    text: '企业法人'
                }, {
                    id: 'createTime',
                    text: '申请人姓名'
                }, {
                    id: 'createTime',
                    text: '申请人联系方式'
                }]
            }
        },
        methods: {
            onSubmit() {},
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