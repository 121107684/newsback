<template>
    <div class="list-content">
        <div class="title">{{title}}</div>
        <ul>    
            <li @click="routerGo(data)" v-for="data in list.slice(0, 1)" :key="data.id" class="frist">
                <h2>{{data.title}}</h2>
                <div class="flex-box">
                    <img src="" alt="">
                    <p>
                        <span>{{data.publishDate}}</span>
                        <span>
                        {{data.digest}}
                        </span>
                    </p>
                </div>
            </li>
            <li  @click="routerGo(data)"  v-for="data in list.slice(1)" :key="data.id" class="frist">
                <p>
                    <span>{{data.title}}</span>
                    <span>{{data.publishDate}}</span>
                </p>
            </li>
        </ul>
        <el-pagination
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
        getList(){
            getNewsPagePublished(this.query).then(v=>{
               this.list = v.data,
               this.total = v.page.total
            })
        },
        routerGo(data) {
            this.$router.push({
                path: `/${this.code}/detail`,
                query: {
                    id:data.id
                }
            });
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
                    width 485px
                    span 
                        display block
                        font-size 16px
                        padding-bottom 20px
        li 
            font-size 16px
            padding-bottom 20px
            padding-top 20px
            border-bottom 1px dotted #2777E2
            >p 
                display flex
                justify-content space-between
            &:hover
                background-color #f3f3f3
    .page
        margin 30px auto 
</style>