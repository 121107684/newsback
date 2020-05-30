<template>
    <div class="detail">
        <div class="title">
            {{data.title}}
            <span>{{data.publishDate}}</span>
        </div>
        <div class="imgs" v-for="datas in data.imgDatas" :key="datas.url">
            <img :src="datas.url" alt="">
        </div>
        <div class="content" v-for="(datas, i) in digest"  :key="i" v-html="datas">
        </div>
        <ul>    
            <li class="frist"  @click="routerGo('previousId')">
                <h2>上一条：{{previousData.title ? previousData.title : '暂无更多'}}</h2>
                <div v-if="data.previousId" class="flex-box">
                    <img :src="imgurl(previousData)" alt="暂无图片">
                    <p>
                        <span>{{previousData.publishDate}}</span>
                        <span>
                        {{previousData.digest}}
                        </span>
                    </p>
                </div>
            </li>
            <li class="frist" @click="routerGo('nextId')">
                <h2>下一条：{{nextData.title ? nextData.title : '暂无更多'}}</h2>
                <div  v-if="data.nextId"  class="flex-box">
                    <img :src="imgurl(nextData)" alt="暂无图片">
                    <p>
                        <span>{{nextData.publishDate}}</span>
                        <span>
                        {{nextData.digest}}
                        </span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { newsRichInfo} from '@/common/api';
import {Message} from 'element-ui';
import Vue from 'vue';
Vue.prototype.$message = Message;
export default {
    data() {
        return {
            data: {
                title:'',
                digest: ''
            },
            nextData: {
                title:'',
            },
            previousData: {
                title:'',
            }
        }
    },
    computed: {
        digest() {
            let rowFilter = this.data ? this.data.digest.split('\n') : '';
            return rowFilter;
        }
    },
    methods: {
        routerGo(data) {
            if (this.data[data]) {
                this.initPage(this.data[data])
            } else {
                this.$message.error('暂时没有更多啦，看看其他新闻吧');
            }
        },
        imgurl(data) {
            if (data.imgDatas) {
                return data.imgDatas[0].url
            }
            return ''
        },
        initPage(id) {
            newsRichInfo({
                richId: id
            }).then(v=>{
                if (v.data) {
                    this.data = v.data;
                    if (v.data && v.data.nextId) {
                        newsRichInfo({
                            richId: v.data.nextId
                        }).then(val=>{
                            this.nextData = val.data;
                        })
                    } else {
                        this.nextData = {}
                    }
                    if(v.data && v.data.previousId) {
                        newsRichInfo({
                            richId: v.data.previousId
                        }).then(val=>{
                            this.previousData = val.data;
                        })
                    } else {
                        this.previousData = {}
                    }
                } else {
                    this.$message.error('暂无新闻');
                }
               
            })
        }
    },
    mounted() {
        let {id} = this.$route.query;
        this.initPage(id)
    },
}
</script>

<style lang="stylus" scoped>
.detail
    padding 50px 20px 
    width 1100px
    margin 0 auto    
    >.title
        font-size 26px
        text-align center
        span 
            display block
            font-size 16px
            line-height 2
    .imgs
        img 
            display block
            margin 0 auto 20px
            width 400px
    >.content
        font-size 16px
        line-height 2
        text-indent 2em
    ul 
        padding-top 20px
        display flex
        justify-content space-between
        li.frist 
            h2 
                font-size 22px
                font-weight bold
                width 500px
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
            .flex-box
                width 100%
                display flex
                justify-content space-between
                height 245px
                img
                    width 245px
                    height 115px
                    background-color #ccc
                p 
                    width 250px
                    padding-left 20px
                    span 
                        display block
                        font-size 16px
                        padding-bottom 14px
                    span:nth-child(2)
                        height 70px
                        overflow hidden
</style>