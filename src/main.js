import Vue from 'vue';
import App from './App.vue';

import './assets/icon/iconfont';

import LoadingBar from './components/LoadingBar';
import Modal from './components/Modal/Modal';

Vue.prototype.$loadingBar = LoadingBar;
Vue.prototype.$Modal = Modal;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
