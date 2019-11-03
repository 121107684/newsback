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
import { getAdPage} from '@/common/api';
export default {
    components: {
        commonTitle,
        newTable
    },
    data() {
      return {
        name: '广告栏设置',
        querys: {
            type: 0,
            pageNum: 1,
            pageSize: 10,
            totalCount: 0,
            lastId: ''
        },
        list: []
      }
    },
    methods: {
        getList() {
            getAdPage(this.querys).then(v=>{
                this.list = v.data;
                this.querys.totalCount = v.page.pageTotal
                console.debug(v)
            })
        }
    },
    async mounted() {
        await this.getList();
    }
}
</script>

<style lang="stylus" scoped>

</style>