<template>
    <div>
        {{type}}
    </div>
</template>

<script>
export default {
    props: {
        row: Object
    },
    computed: {
        type() {
            return this.row.statue === 1 ? '未发布' : '已发布'
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>