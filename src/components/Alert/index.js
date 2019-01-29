import Alert from './Alert.vue';

Alert.install = function install(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
