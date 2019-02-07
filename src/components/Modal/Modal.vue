<template>
  <transition name="fade">
    <div :class="['l-modal-wrapper']" v-show="isShow">
      <div :class="['l-modal-mask']" @click.self="maskClose"></div>
      <div class="l-modal" :style="computedStyles">
        <div class="header" v-if="showHead">
          <slot name="title">{{title}}</slot>
        </div>
        <div class="body">
          <slot name="content">
            {{ content }}
            <l-input v-if="showInput" v-model="inputValue"></l-input>
          </slot>
        </div>
        <div class="footer" v-if="showFooter">
          <slot name="footer">
            <div class="modal-btn-group">
              <l-button type="default" class="modal-btn" @click="cancel" v-if="showCancel">{{ cancelText }}</l-button>
              <l-button type="primary" class="modal-btn" @click="confirm">{{ okText }}</l-button>
            </div>
          </slot>
        </div>
        <span class="close-btn" @click="cancel" v-if="showClose">×</span>
      </div>
    </div>
  </transition>
</template>

<script>
import Input from "../Input/Input.vue";
import Button from "../Button/Button.vue";
import { isType } from "../../utils/utils";
export default {
  name: "l-modal",
  components: {
    "l-button": Button,
    "l-input": Input,
  },
  props: {
    value: Boolean,
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    okText: {
      type: String,
      default: "确定"
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    showHead: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 520,
    },
    closeOnPressEsc: {
      type: Boolean,
      default: false,
    },
    styles: Object,
    beforeClose: Function,
  },
  watch: {
    value(val) {
      this.visible = val;
    },
  },
  computed: {
    isShow() {
      return this.visible;
    },
    computedStyles() {
      return Object.assign({}, this.styles, { width: this.width });
    }
  },
  data() {
    return {
      inputValue: "",
      visible: false,
      callback: null,
      action: '',
      type: 'confirm', // alert confirm prompt
    };
  },
  methods: {
    emitValue(e) {
      // beforeclose 回调
      // 在beforeclose函数中必须执行done()函数，参数为false时不关闭模态框
      let that = this;
      if (isType(this.beforeClose)("function")) {
        this.beforeClose(e, function done(isClose = true) {
          if (isClose) {
            that.$emit("input", false);
          }
        });
      } else {
        this.$emit("input", false);
      }
    },
    cancel(e) {
      this.emitValue(e);
      this.$emit("on-cancel", e);
      typeof this.callback === 'function' && this.callback('cancel', this.type);
      this.visible = false;
      this.inputValue = '';
    },
    confirm(e) {
      this.emitValue(e);
      this.$emit("on-confirm", this.inputValue);
      typeof this.callback === 'function' && this.callback('confirm', this.type);
      this.visible = false;
      this.inputValue = '';
    },
    maskClose(e) {
      if (!this.maskClosable) return;
      this.cancel(e);
    },
    closeOnEsc(e) {
      if (e.keyCode === 27 && this.closeOnPressEsc) {
        this.cancel(e);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEsc);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.closeOnEsc);
  }
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$border: #dfdfdf;
$shadow: #eef0f0;
$header: #f7f7f7;

$mask: rgba(0, 0, 0, 0.5);

$fontSize: 14px;
$titleColor: #2c405a;
$textColor: #3f536e;
$disabledTitle: rgba(44, 64, 90, 0.2);

.l-modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  &.hide {
    display: none;
  }

  .l-modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: $mask;
    z-index: 1000;
    transition: all 0.5s ease;

    &.hide {
      opacity: 0;
    }
  }

  .l-modal {
    position: absolute;
    width: 520px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    font-size: $fontSize;
    z-index: 1001;

    .header {
      position: relative;
      padding: 10px;
      color: $titleColor;
      border-bottom: 1px solid $border;
      font-weight: bold;
    }

    .body,
    .footer {
      position: relative;
      padding: 10px;
      color: $textColor;
    }

    .body + .footer {
      border-top: 1px solid $border;
    }

    .footer {
      .modal-btn-group {
        text-align: right;
        .modal-btn {
          margin-left: 5px;
        }
      }
    }

    .close-btn {
      position: absolute;
      top: 50%;
      top: 10px;
      right: 10px;
      width: 14px;
      height: 14px;
      line-height: 14px;
      user-select: none;
      cursor: pointer;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
