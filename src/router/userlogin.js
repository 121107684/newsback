
const userLogin = {
    path: '/',
    name: 'userloging',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/user/login')));
    }
};
const userRegister = {
    path: 'register',
    name: 'register',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/user/register')));
    }
};
const findPassword = {
    path: 'findpassword',
    name: 'findpassword',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/user/findpassword')));
    }
};

export default {
    path: '/login',
    name: 'login',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/user')));
    },
    redirect: {
        name: 'userloging'
    },
    children: [userLogin, userRegister, findPassword]
};