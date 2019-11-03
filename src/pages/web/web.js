import Vue from 'vue'
import App from './web.vue'
import 'common/global.styl';
import router from './router/index.js';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
