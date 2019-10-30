
 <script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            name: 'pagination',
            pageSizes: [10, 20, 50, 100],
        };
    },
    props: {
        pageInfo: {
            type: Object
        }
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
      @current-change="handlePageInfoChange({pageNum: $event})"
      :current-page="pageInfo.pageNum"
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
