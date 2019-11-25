<template>
    <div class="page-full-height">
        <common-title 
            :name="name">
        </common-title>
        <el-form :inline="true" label-width="80px" size="small" :model="querys" class="mb12">
            <el-form-item class="mb0" label="新闻类别">
                <el-select clearable v-model="querys.type" placeholder="">
                    <el-option v-for="data in newsType" :key="data.name" :label="data.name" :value="data.keys"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="mb0">
                <el-button type="primary" @click="onSearch">查询</el-button>
                <el-button type="primary" @click="addNews">创建新闻</el-button>
            </el-form-item>
        </el-form>
        <new-table class="table-full-height mb16" :list="list"></new-table>
        <pagination
            @changePageInfo="change"
            :pageInfo="querys">
        </pagination>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import pagination from '@/components/pagination';
import newTable from './table';
import {getNewsPage} from '@/common/api';
import {newsType} from '@/common/config';
export default {
    components: {
        commonTitle,
        pagination,
        newTable
    },
    data() {
        return {
            name: '新闻发布',
            list: [],
            querys: {
                type: '',
                pageNum: 1,
                pageSize: 10,
                totalCount: 0
            },
            newsType: newsType
        }
    },
    methods: {
        change(v) {
            Object.keys(v).forEach(key=>{
                this.querys[key] = v[key]
            })
            this.getList();
        },
        addNews() {
            this.$router.push({
                path: 'detail',
                name: 'newsReleaseDetail',
                query: {
                    type: 'add'
                }
            });
        },
        onSearch() {
            this.getList();
        },
        getList() {
            getNewsPage(this.querys).then(v=>{
                this.list = v.data;
                this.querys.totalCount = parseInt(v.page.total, 10);
                this.querys.pageNum = parseInt(v.page.pageNum, 10);
            })
        }
    },
    async mounted() {
        await this.getList();
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/global.styl'

</style>