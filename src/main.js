import Vue from 'vue';
import App from './App.vue';

import './assets/icon/iconfont';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
