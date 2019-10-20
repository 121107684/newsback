<template>
    <div>
        <common-title 
            :name="name">
        </common-title>
        <new-table :list="list"></new-table>
    </div>
</template>

<script>
import commonTitle from '@/components/title';
import newTable from './table';
import { getNewsList} from './api';
export default {
    components: {
        commonTitle,
        newTable
    },
    data() {
      return {
        name: '广告栏设置',
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