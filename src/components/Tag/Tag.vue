<template>
  <span :class="['tag', type, closable ? 'closable':'']" v-show="isShow">
    <slot></slot>
    <span class="close" @click="close">×</span>
  </span>
</template>

<script>
export default {
  name: 'l-tag',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    close(event) {
      this.isShow = false;
      this.$emit('close', event);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$success: #13ce66;
$error: #ff4949;
$warning: #ffc82c;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;

.tag {
  margin: 0px;
  padding: 2px 10px;
  border-radius: 3px;
  font-size: 14px;

  &.closable {
    padding-right: 5px;

    .close {
      display: inline;
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .close {
    display: none;
  }

  &.primary,
  &.success,
  &.error,
  &.warning {
    color: #fff;
  }

  &.default {
    color: $fontColor;
    border: 1px solid $border;
    background: $default;
  }

  &.primary {
    background: $primary;
    border: 1px solid $primary;
  }

  &.success {
    background: $success;
    border: 1px solid $success;
  }

  &.error {
    background: $error;
    border: 1px solid $error;
  }

  &.warning {
    background: $warning;
    border: 1px solid $warning;
  }
}
</style>
