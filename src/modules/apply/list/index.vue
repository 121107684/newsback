<template>
    <div>
        <common-title 
            :name="name">
        </common-title>

        <new-table :list="list"></new-table>
        <pagination
            @changePageInfo="change"
            :pageInfo="pageInfo">
        </pagination>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import pagination from '@/components/pagination';
import newTable from './table';
import { getNewsList} from './api';
export default {
    components: {
        commonTitle,
        pagination,
        newTable
    },
    data() {
      return {
        name: '入会申请',
        pageInfo: {
            pageNo: 1,
            pageSize: 10,
            totalCount: 50
        },
        list: []
      }
    },
    methods: {
        change() {}
    },
    created() {
        getNewsList({
            pageSize: 1
        }).then(v=>{
            this.list = v.result;
            console.debug(v)
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>