
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


const applypage = {
    path: 'applypage',
    name: 'applypage',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/applypage')));
    }
};
const obligation = {
    path: 'obligation',
    name: 'obligation',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/obligation')));
    }
};
const right = {
    path: 'right',
    name: 'right',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/right')));
    }
};
const standard = {
    path: 'standard',
    name: 'standard',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/standard')));
    }
};
const program = {
    path: 'program',
    name: 'program',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/program')));
    }
};
const condition = {
    path: 'condition',
    name: 'condition',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/condition')));
    }
};
const constitution = {
    path: 'constitution',
    name: 'constitution',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply/constitution')));
    }
};
const apply = {
    path: '/apply',
    name: 'apply',
    meta: {
        requiresAuth: true
    },
    redirect: 'apply/constitution',
    children: [constitution, condition, applypage, program, standard, right, obligation],
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/apply')));
    }
};


const branch = {
    path: 'branch',
    name: 'branch',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/branch')));
    }
};
const set = {
    path: 'set',
    name: 'set',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/set')));
    }
};
const company = {
    path: 'company',
    name: 'company',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/company')));
    }
};
const works = {
    path: 'works',
    name: 'works',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/works')));
    }
};
const expert = {
    path: 'expert',
    name: 'expert',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/expert')));
    }
};  
const leader = {
    path: 'leader',
    name: 'leader',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/leader')));
    }
};                 
const introduce = {
    path: 'introduce',
    name: 'introduce',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/index/about/introduce')));
    }
};

const about = {
    path: '/about',
    name: 'about',
    meta: {
        requiresAuth: true
    },
    redirect: 'apply/introduce',
    children: [introduce, leader, expert, works, company, set, branch],
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