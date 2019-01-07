import Button from './Button.vue';

Button.install = function install(Vue) {
  Vue.compoenent(Button.name, Button);
};

export default Button;
