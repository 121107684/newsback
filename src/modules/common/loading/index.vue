<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            user: 'userPermissions'
        }),
        pagePath() {
            let permissionArr = [];
            for (let val in this.user) {
                permissionArr.push(val);
            }
            let permission = permissionArr[0];
            if (permission === 'undefined') {
                permission = permissionArr[1];
            }
            return permission;
        }
    },
    created() {
        this.$router.push({name: this.pagePath});
    }
};
</script>

<template>
    <div></div>
</template>
