<template>
  <div
    :class="['l-alert', {
    'info': status === 'info',
    'success': status === 'success',
    'error': status === 'error',
    'warning': status === 'warning',
    'closed': isClose,
  }]"
  >
    <l-icon class="icon" :icon-name="icons[status]" size="30" :color="colors[status]" v-show="showIcon"></l-icon>
    <div :class="['content', { 'show-icon': showIcon , 'show-title': title, 'show-close': closable}]">
      <div class="title" v-show="title">{{title}}</div>
      <div class="message">
        <slot></slot>
      </div>
    </div>
    <span :class="['close-btn', {
    'info': status === 'info',
    'success': status === 'success',
    'error': status === 'error',
    'warning': status === 'warning',
     }]"
     @click="close"
     v-show="closable"
     >×</span>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
  name: "l-alert",
  props: {
    title: String,
    showIcon: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "info",
      validator(val) {
        return ["info", "error", "warning", "success"].includes(val);
      }
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "l-icon": Icon
  },
  data() {
    return {
      colors: {
        'info': '#6190e8',
        'success': '#13ce66',
        'error': '#ff4949',
        'warning': '#ffc82c',
      },
      icons: {
        'info': 'wow',
        'warning': 'wow',
        'success': 'select',
        'error': 'close',
      },
      isClose: false,
    }
  },
  methods: {
    close() {
      this.isClose = true;
    }
  }
};
</script>

<style lang="scss" scoped>
$info: rgb(97, 144, 232);
$success: rgb(19, 206, 102);
$error: rgb(255, 73, 73);
$warning: rgb(255, 200, 44);

$infoBackground: rgba(97, 144, 232, 0.1);
$successBackground: rgba(19, 206, 102, 0.1);
$errorBackground: rgba(255, 73, 73, 0.1);
$warningBackground: rgba(255, 200, 44, 0.1);

$infoBorder: rgba(97, 144, 232, 0.3);
$successBorder: rgba(19, 206, 102, 0.3);
$errorBorder: rgba(255, 73, 73, 0.3);
$warningBorder: rgba(255, 200, 44, 0.3);

.l-alert {
  position: relative;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  line-height: 16px;
  padding: 5px;
  margin: 5px;

  &.closed {
    display: none;
  }

  .icon {
    position: absolute;
    top: 3px;
    left: 5px;
  }

  .close-btn {
    position: absolute;
    display: block;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;

    &.info { color: $info; }
    &.success { color: $success; }
    &.warning { color: $warning; }
    &.error { color: $error; }
  }

  .content {

    font-size: 16px;

    .title, .message {
      margin: 5px;
      word-wrap: break-word;
    }

    .title {
      font-weight: bold;
    }

    &.show-icon {
      margin-left: 30px;
    }

    &.show-title {
      font-size: 14px;
    }

    &.show-close {
      margin-right: 20px;
    }
  }

  &.info {
    border-color: $infoBorder;
    color: $info;
    background: $infoBackground;
  }
  &.success {
    border-color: $successBorder;
    color: $success;
    background: $successBackground;
  }
  &.error {
    border-color: $errorBorder;
    color: $error;
    background: $errorBackground;
  }
  &.warning {
    border-color: $warningBorder;
    color: $warning;
    background: $warningBackground;
  }
}
</style>
