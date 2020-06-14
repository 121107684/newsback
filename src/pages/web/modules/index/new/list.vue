<template>
    <div class="list-content">
        <div class="title">{{title}}</div>
        <ul>    
            <li @click="routerGo(data)" v-if="query.pageNum === 1" v-for="data in list.slice(0, 1)" :key="data.id" class="frist">
                <h2>{{data.title}} </h2>
                <div class="flex-box">
                    <img :src="imgurl(data)" alt="">
                    <p>
                        <span>{{getTime(data.publishDate)}}</span>
                        <span>
                        {{data.digest}}
                        </span>
                    </p>
                </div>
            </li>
            <li  @click="routerGo(data)"  v-for="data in pagelist" :key="data.id" class="frist">
                <p>
                    <span>{{data.title}}</span>
                    <span>{{getTime(data.publishDate)}}</span>
                </p>
            </li>
        </ul>
        <el-pagination
            @current-change="handleCurrentChange"
            class="page"
            layout="prev, pager, next"
            :total="query.total">
        </el-pagination>
    </div>
</template>

<script>
import { Pagination } from 'element-ui';
import { getNewsPagePublished} from '@/common/api';
import { newsType} from '@/common/config';
export default {
    components: {
        [Pagination.name]: Pagination
    },
    data() {
        return {
            title: '',
            list: [],
            code: '',
            query: {
                type: 1,
                pageNum: 1,
                pageSize: 10,
                total: 0
            }
        }
    },
    computed: {
        pagelist: {
            get() {
                if(this.query.pageNum === 1) {
                    return this.list.slice(1);
                }
                return this.list;
            }
        }
    },
    mounted() {
        let path = this.$route.path.match(/\/(\S*)\//)[1];
        let arr =  newsType.filter(v=>{
            return v.code === path
        })[0]
        this.title = arr.name;
        this.code = arr.code;
        this.query.type = arr.keys;
        this.getList();
    },
    methods: {
        getTime(date) {
            let dates = new Date(date);
            let s = '';
            s = dates.getFullYear() + '-' + (dates.getMonth() + 1) + '-' + dates.getDay()
            return s;
        },
        imgurl(data) {
            if (data.imgDatas) {
                return data.imgDatas[0].url
            }
            return ''
        },
        getList(){
            getNewsPagePublished(this.query).then(v=>{
               this.list = v.data,
               this.query.total = parseInt(v.page.total, 10)
            })
        },
        routerGo(data) {
            this.$router.push({
                path: `/${this.code}/detail`,
                query: {
                    id:data.richId
                }
            });
        },
        handleCurrentChange(val) {
            this.query.pageNum = val;
            this.getList()
        }
    },
    watch:{
        $route:{
            handler(newRouter){
                let path = newRouter.path.match(/\/(\S*)\//)[1];
                let arr =  newsType.filter(v=>{
                    return v.code === path
                })[0]
                this.title = arr.name;
                this.code = arr.code;
                this.query.type = arr.keys;
                this.getList();
            //    try {
            //         let path = newRouter.path.match(/\/(\S*)\//)[1];
            //         let arr =  newsType.filter(v=>{
            //             return v.code === path
            //         })[0]
            //         console.debug(arr);
            //         this.title = arr.name;
            //         this.query.type = arr.keys;
            //         this.getList()
            //     } catch {}
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.list-content
    padding 50px 20px 
    width 1100px
    margin 0 auto
    .title
        font-size 24px
        border-left 4px solid #2777E2
        padding-left 16px
    ul 
        padding-top 20px
        li.frist 
            h2 
                font-size 22px
                font-weight bold
                span    
                   font-size 16px 
            .flex-box
                width 100%
                display flex
                justify-content space-between
                height 245px
                img
                    width 485px
                    height 245px
                    background-color #ccc
                p 
                    width 550px
                    span 
                        display block
                        font-size 16px
                    span:nth-child(1)
                        padding-bottom 20px
                    span:nth-child(2)
                        overflow hidden
                        line-height 2em
                        height 189px
        li 
            font-size 16px
            padding 20px
            border-bottom 1px dotted #2777E2
            >p 
                display flex
                justify-content space-between
            &:hover
                background-color #f3f3f3
    .page
        margin 30px auto 
</style>