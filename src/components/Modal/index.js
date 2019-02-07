import Modal from './Modal.vue';

Modal.install = function install(Vue) {
  Vue.component(Modal.name, Modal);
};

export default Modal;
