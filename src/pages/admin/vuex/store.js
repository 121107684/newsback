
import Vue from 'vue';
import Vuex from 'vuex';
import env from './env';
import apply from './apply';
import newsRelease from './newsRelease';
import adSetting from './adSetting';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        env,
        apply,
        newsRelease,
        adSetting
    }
});
