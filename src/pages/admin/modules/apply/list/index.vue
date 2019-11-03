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
                    @change="setChange"
                    :picker-options="pickerOptions"
                    format="yyyy-MM-dd"
                    v-model="datatime"
                    type="daterange"
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
import {getMshipApplypage} from '@/common/api';
import {formatDate} from '@/common/utils';
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
        time: '',
        datatime: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    methods: {
        timeChange() {
            switch (this.time) {
                case 'week': 
                    let timestamp = Date.parse(new Date());
                    let serverDate = new Date(timestamp); 
                    let sundayTime = timestamp + ((7 - serverDate.getDay())* 24 * 60 * 60 * 1000)
                    let SundayData = new Date(sundayTime);
                    let mondayTime = timestamp - ((serverDate.getDay()-1) * 24 * 60 * 60 * 1000)
                    let mondayData = new Date(mondayTime);
                    this.querys.beginDate = formatDate(mondayTime);
                    this.querys.endDate = formatDate(sundayTime);
                    break;
                case 'month':
                    let monthFrist = new Date();
                    monthFrist.setDate(1);
                    let monthLast = new Date();
                    monthLast.setDate(1);
                    monthLast.setMonth(monthLast.getMonth()+1);//这时候day已经变成下个月第一天
                    monthLast.setDate(monthLast.getDate() - 1);//下个月的第一天的前一天就是本月最后一天
                    this.querys.beginDate = formatDate(monthFrist);
                    this.querys.endDate = formatDate(monthLast);
                    break;
                case 'year': 
                    let yearFrist = new Date();
                    yearFrist.setDate(1);
                    yearFrist.setMonth(0);
                    let yearLast = new Date();
                    yearLast.setDate(1);
                    yearLast.setMonth(11);
                    yearLast.setMonth(yearLast.getMonth()+1);//这时候day已经变成下个月第一天
                    yearLast.setDate(yearLast.getDate() - 1);//下个月的第一天的前一天就是本月最后一天
                    this.querys.beginDate = formatDate(yearFrist);
                    this.querys.endDate = formatDate(yearLast);
                    break;
            }
            this.getList();
            this.datatime = '';
        },
        setChange() {
            this.querys.beginDate = formatDate(this.datatime[0]);
            this.querys.endDate = formatDate(this.datatime[1]);
            this.time = '';
            this.getList();
        },
        onSubmit() {
            this.getList();
        },
        change(v) {
            Object.keys(v).forEach(key=>{
                this.querys[key] = v[key]
            })
            this.getList();
        },
        getList() {
            getMshipApplypage(this.querys).then(v=>{
                this.list = v.data;
                this.$message({
                    type: 'success',
                    message: v.message[0].details
                });
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style lang="stylus" scoped>

</style>