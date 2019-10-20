
 <script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            name: 'pagination'
        };
    },
    props: {
        pageInfo: {
            type: Object
        }
    },
    computed: {
        ...mapGetters({
            pageSizes: 'envPageSizes'
        })
    },
    methods: {
        handlePageInfoChange(value) {
            this.$emit('changePageInfo', value);
        }
    }
};
</script>
<template>
    <el-pagination
      @size-change="handlePageInfoChange({pageSize: $event})"
      @current-change="handlePageInfoChange({pageNo: $event})"
      :current-page="pageInfo.pageNo"
      :page-sizes="pageSizes"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.totalCount">
    </el-pagination>
</template>

<style lang="stylus" scoped>
.el-pagination
    float right
    margin-right 20px
    color fontColorM
    font-weight normal
</style>
