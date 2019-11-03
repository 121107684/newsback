
const index = {
    path: '/index',
    name: 'index',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/index')));
    }
};
const list = {
    path: 'list',
    name: 'list',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/new/list')));
    }
};
const detail = {
    path: 'detail',
    name: 'detail',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/new/detail')));
    }
};
const news = {
    path: '/news',
    name: 'news',
    meta: {
        requiresAuth: true
    },
    redirect: 'news/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};
const menber = {
    path: '/menber',
    name: 'menber',
    meta: {
        requiresAuth: true
    },
    redirect: 'menber/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};
const party = {
    path: '/party',
    name: 'party',
    meta: {
        requiresAuth: true
    },
    redirect: 'party/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};
const industry = {
    path: '/industry',
    name: 'industry',
    meta: {
        requiresAuth: true
    },
    redirect: 'industry/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};
const brand = {
    path: '/brand',
    name: 'brand',
    meta: {
        requiresAuth: true
    },
    redirect: 'brand/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};
const notice = {
    path: '/notice',
    name: 'notice',
    meta: {
        requiresAuth: true
    },
    redirect: 'notice/list',
    children: [list, detail],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/news')));
    }
};


const apply = {
    path: '/apply',
    name: 'apply',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply')));
    }
};
const about = {
    path: '/about',
    name: 'about',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about')));
    }
};

export default {
    path: '/',
    name: 'pages',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules')));
    },
    redirect: {
        name: 'index'
    },
    children: [index, news, menber, party, industry, brand, notice, apply, about]
};