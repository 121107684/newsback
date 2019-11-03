

import VueRouter from 'vue-router';
import Vue from 'vue';
import web from './web';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    children: [web]
};
const router = new VueRouter({
    routes: [
        home,
        notFound
    ]
});
export default router;
