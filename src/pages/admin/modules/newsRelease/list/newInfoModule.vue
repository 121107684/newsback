<template>
    <div class="flex">
        <div class="img">
             <img :src="row.newimg" alt="">
        </div>
        <div class="text">
            <p>{{row.title}}</p>
            <p>{{row.editTime}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        row: Object
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
            display block
    .text
        flex 1
        margin-left 8px
</style>