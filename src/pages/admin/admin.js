import Vue from 'vue'
import App from './admin.vue'
import Element from 'element-ui';
import 'common/global.styl';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import store from './vuex/store.js';

Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
