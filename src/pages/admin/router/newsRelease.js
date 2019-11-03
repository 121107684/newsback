
const newsReleaseList = {
    path: 'list',
    name: 'newsReleaseList',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/newsRelease/list')));
    }
};
const newsReleaseDetail = {
    path: 'detail',
    name: 'newsReleaseDetail',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/newsRelease/detail')));
    }
};

export default {
    path: '/newsRelease',
    name: 'newsRelease',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/newsRelease')));
    },
    redirect: {
        name: 'newsReleaseList'
    },
    children: [newsReleaseList, newsReleaseDetail]
};