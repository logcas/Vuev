import Vue from 'vue';
import App from './App.vue';

import './assets/icon/iconfont';

import LoadingBar from './components/LoadingBar';

Vue.prototype.$loadingBar = LoadingBar;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
