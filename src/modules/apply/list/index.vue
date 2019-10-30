<template>
    <div  class="page-full-height">
        <common-title 
            :name="name">
        </common-title>
        <el-form size="small" :inline="true" class="demo-form-inline">
            <el-form-item label="申请时间范围">
                <el-radio-group @change="timeChange" v-model="time">
                    <el-radio-button label="week">本周</el-radio-button>
                    <el-radio-button label="month">本月</el-radio-button>
                    <el-radio-button label="year">本年</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="自定义">
                <el-date-picker
                    v-model="datatime"
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
import { getMshipApplypage} from './api';
export default {
    components: {
        commonTitle,
        pagination,
        newTable
    },
    data() {
      return {
        name: '入会申请',
        querys: {
            beginDate: '',
            endDate: '',
            pageNum: 1,
            pageSize: 10,
            totalCount: 0,
            lastId: ''
        },
        list: [],
        time: 1,
        datatime: ''
      }
    },
    methods: {
        timeChange() {
            let timestamp = Date.parse(new Date());
            let serverDate = new Date(timestamp); 
            let sundayTime = timestamp + ((7 - serverDate.getDay())* 24 * 60 * 60 * 1000)
            let SundayData = new Date(sundayTime);
            let mondayTime = timestamp - ((serverDate.getDay()-1) * 24 * 60 * 60 * 1000)
            let mondayData = new Date(mondayTime);
            console.debug(sundayTime, mondayTime)
        },
        onSubmit() {},
        change(v) {
            Object.keys(v).forEach(key=>{
                this.querys[key] = v[key]
            })
            this.getList();
        },
        getList() {
            getMshipApplypage(this.querys).then(v=>{
                this.list = v.result;
                console.debug(v)
            })
        }
    },
    created() {
        
    }
}
</script>

<style lang="stylus" scoped>

</style>