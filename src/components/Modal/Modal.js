import Vue from 'vue';
import Modal from './Modal.vue';

const ModalConstructor = Vue.extend(Modal);
const defaultOptions = {
  title: '',
  content: '',
};
const modalQueue = [];
let currentModal = null;
let instance = null;

function initInstance() {
  instance = new ModalConstructor({
    el: document.createElement('div'),
  });
}

function getCallback() {
  const callback = function callback(action, type) {
    if (currentModal) {
      const cb = currentModal.callback;
      if (typeof cb === 'function') {
        if (instance.showInput) {
          cb(instance.inputValue, instance);
        }
        cb(instance);
      }
      if (currentModal.resolve) {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentModal.resolve(instance.inputValue, instance);
          }
          currentModal.resolve(instance);
        }
        if (action === 'cancel' && currentModal.reject) {
          if (type === 'confirm' || type === 'prompt') {
            currentModal.reject(instance);
          }
        }
      }
    }
  };
  return callback;
}

function next() {
  initInstance();
  if (!instance.visible && modalQueue.length) {
    currentModal = modalQueue.shift();
    const {
      options,
    } = currentModal;
    Object.keys(options).forEach((opt) => {
      instance[opt] = options[opt];
    });
    const cb = getCallback(currentModal.type);
    instance.callback = function callback(action, type) {
      cb(action, type);
      next();
    };
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
    });
  }
}

const ModalDialog = function ModalDialog(options) {
  if (!Vue.prototype.$isServer) {
    // 如果支持Promise，就用Promise执行回调
    // callback 可不提供，如果提供，则callback的执行会覆盖resolve
    // cancel => reject
    // confirm => resolve
    if (typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => {
        modalQueue.push({
          options: {
            ...defaultOptions,
            ...options,
          },
          resolve,
          reject,
          callback: options.callback,
        });

        next();
      });
    }
    // 如果不支持Promise, 必须显示提供callback
    modalQueue.push({
      options: {
        ...defaultOptions,
        ...options,
      },
      callback: options.callback,
    });
    next();
  }
};

ModalDialog.alert = function alert(options) {
  return ModalDialog({
    ...options,
    type: 'alert',
    showCancel: false,
  });
};

ModalDialog.confirm = function confirm(options) {
  return ModalDialog({
    ...options,
    type: 'confirm',
  });
};

ModalDialog.prompt = function prompt(options) {
  return ModalDialog({
    ...options,
    type: 'prompt',
    showInput: true,
  });
};

export default ModalDialog;
