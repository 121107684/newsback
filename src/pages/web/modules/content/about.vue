<template>
    <div class="about-box">
        <div class="title"><span>协会介绍</span></div>
        <ul>
            <li>
                <img src="" alt="">
            </li>
            <li>
                <img src="" alt="">
            </li>
            <li>
                <img src="" alt="">
            </li>
             <li>
                <img src="" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.about-box
    height 224px
    padding 0px 114px
    display flex
    display space-between
    background-color #E3EEFF
    .title 
        width 20px
        font-size 16px
        height 224px
        display flex
        align-items center
        span 
            display inline-block
            position relative
            &::after,
            &::before
                display block
                content " "
                height 25px
                width 2px
                background-color #2777E2
                position absolute
                left 50%
                margin-left -2px
            &::after
                top -32px
            &::before 
                bottom -32px
    >ul 
        flex 1
        display flex
        justify-content space-between
        padding 0 90px 0px 100px
        li 
            width 120px
        li:nth-child(1)
            background url('~@/assets/img/web/icon1.png') no-repeat center center / 120px auto
        li:nth-child(2)
            background url('~@/assets/img/web/icon2.png') no-repeat center center / 120px auto
        li:nth-child(3)
            background url('~@/assets/img/web/icon3.png') no-repeat center center / 120px auto
        li:nth-child(4)
            background url('~@/assets/img/web/icon4.png') no-repeat center center / 120px auto
</style>