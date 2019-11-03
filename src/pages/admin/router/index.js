

import VueRouter from 'vue-router';
import Vue from 'vue';
import apply from './apply';
import newsRelease from './newsRelease';
import adSetting from './adSetting';
import userlogin from './userlogin';
Vue.use(VueRouter);


// TODO add 404 page
const notFound = {
    path: '*',
    redirect: '/'
};
const home = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    component: () => import ('../modules'),
    children: [newsRelease, apply, adSetting]
};
const router = new VueRouter({
    routes: [
        home,
        userlogin,
        // newsRelease,  // 新闻发布
        // apply, // 入户申请
        // adSetting, // 广告栏设置
        notFound
    ]
});
// router.beforeEach(async (to, from, next) => {
    // if (to.meta.requiresQuery && to.meta.requiresQuery.some(q => !to.query[q])) {
    //     console.warn('[router] query unmet: ', from.path, to.path, to.query);
    //     next(false);
    //     return;
    // }
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     const hasAuth = await getUserAuth(to.meta.requiresAuth);
    //     if (!hasAuth) {
    //         // alert('您没有访问权限，请联系系统管理员');
    //         next(false);
    //         return;
    //     }
    // }
    // next();
// });

export default router;
