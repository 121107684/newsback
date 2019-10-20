
const applyList = {
    path: 'list',
    name: 'applyList',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/apply/list')));
    }
};
const applyDetail = {
    path: 'detail',
    name: 'applyDetail',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/apply/detail')));
    }
};

export default {
    path: '/apply',
    name: 'apply',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/apply')));
    },
    redirect: {
        name: 'applyList'
    },
    children: [applyList, applyDetail]
};