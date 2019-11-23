<template>
    <div class="flex">
        <div class="img">
             <img :src="imgurl" alt="暂无图片">
        </div>
        <div class="text">
            <p class="line2">{{row.title}}</p>
            <p class="line1">{{row.digest}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        row: Object
    },
    computed: {
        imgurl() {
            if (this.row.imgDatas) {
                return this.row.imgDatas[0].url
            }
            return ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.flex
    display flex
    width 360px
    .img    
        width 64px
        height 64px
        img
            width 64px
            height 64px
            display block
    .text
        flex 1
        margin-left 8px
    .line2
        width 270px
        height 46px
        overflow hidden
        text-overflow ellipsis
        text-overflow -o-ellipsis-lastline
        display -webkit-box
        line-clamp 2
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        color #000
    .line1
        white-space nowrap
        text-overflow ellipsis
        width 270px
        overflow hidden
        color #777
</style>