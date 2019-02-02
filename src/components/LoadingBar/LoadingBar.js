import Vue from 'vue';
import LoadingBarComponent from './LoadingBar.vue';

const LoadingBarConstructor = Vue.extend(LoadingBarComponent);

export default class LoadingBar {
  constructor(options) {
    this.instance = new LoadingBarConstructor({
      data: options || {},
    });
    this.el = this.instance.$mount().$el;
    console.log('construct');
    document.body.appendChild(this.el);
  }

  update({ progress, show, status }) {
    if (progress) {
      this.instance.progress = progress;
    }
    if (show) {
      this.instance.show = show;
    }
    if (status) {
      this.instance.status = status;
    }
  }

  destroy() {
    document.body.removeChild(this.el);
  }
}
