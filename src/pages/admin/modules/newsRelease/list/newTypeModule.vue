<template>
    <div>
        {{type}}
    </div>
</template>

<script>
import {newsType} from '@/common/config';
export default {
    props: {
        row: Object
    },
    computed: {
        type() {
            return newsType.filter(v=>{
                return parseInt(v.keys, 10) === parseInt(this.row.type, 10)
            })[0].name;
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>