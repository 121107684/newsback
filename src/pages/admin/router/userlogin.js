
const userLogin = {
    path: '/',
    name: 'userlogin',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/userLogin/login')));
    }
};
const userRevise = {
    path: 'revisePassword',
    name: 'revisePassword',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/userLogin/revisePassword')));
    }
};
const findPassword = {
    path: 'findpassword',
    name: 'findpassword',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/userLogin/findPassword')));
    }
};

export default {
    path: '/login',
    name: 'login',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('../modules/userLogin')));
    },
    redirect: {
        name: 'userlogin'
    },
    children: [userLogin, userRevise, findPassword]
};