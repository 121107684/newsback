
const adSettingList = {
    path: 'list',
    name: 'adSettingList',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/adSetting/list')));
    }
};
const adSettingDetail = {
    path: 'detail',
    name: 'adSettingDetail',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/adSetting/detail')));
    }
};

export default {
    path: '/adSetting',
    name: 'adSetting',
    meta: {
        requiresAuth: true
    },
    component(resolve) {
        require.ensure([], () => resolve(require('modules/adSetting')));
    },
    redirect: {
        name: 'adSettingList'
    },
    children: [adSettingList, adSettingDetail]
};