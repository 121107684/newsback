<template>
    <div class="list-content">
        <div class="title">{{title}}</div>
        <ul>    
            <li class="frist">
                <h2>这里是第一条协会动态新闻的标题</h2>
                <div class="flex-box">
                    <img src="" alt="">
                    <p>
                        <span>2019.01.01</span>
                        <span>
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        这里是协会动态的文章摘要
                        </span>
                    </p>
                </div>
            </li>
            <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
            <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
            <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
             <li>
                <p>
                    <span>这里是第一条协会动态新闻的标题</span>
                    <span>2019.01.01  10:00</span>
                </p>
            </li>
        </ul>
        <el-pagination
            class="page"
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
</template>

<script>
import { Pagination } from 'element-ui';
import { getAdPagePublished} from '@/common/api';
import { newsType} from '@/common/config';
export default {
    components: {
        [Pagination.name]: Pagination
    },
    data() {
        return {
            title: ''
        }
    },
    mounted() {
        let path = this.$route.path.match(/\/(\S*)\//)[1];
        this.title = newsType.filter(v=>{
            return v.code === path
        })[0].name;
    },
    watch:{
        $route:{
            handler(newRouter){
               try {
                    let path = newRouter.path.match(/\/(\S*)\//)[1];
                    this.title = newsType.filter(v=>{
                        return v.code === path
                    })[0].name;
                } catch {}
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