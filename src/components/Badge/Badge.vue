<template>
  <div class="l-badge-div">
    <span :class="['l-badge', status, { 'dot': dot, 'reminder': this.$slots.default}]" v-show="show">
      <span v-show="!dot">{{currentValue}}</span>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "l-badge",
  props: {
    value: [String, Number],
    maxNum: {
      type: Number,
      default: Infinity
    },
    dot: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: "info",
      validator(val) {
        return ["info", "success", "warning", "primary"].includes(val);
      }
    }
  },
  computed: {
    currentValue() {
      let val = this.value;
      if (typeof this.value === "number") {
        if (this.maxNum && this.value >= this.maxNum) {
          val = `${this.maxNum}+`;
        }
      }
      return val;
    }
  },
};
</script>

<style lang="scss" scoped>
$info: #6190e8;
$success: #13ce66;
$primary: #ff4949;
$warning: #ffc82c;

.l-badge-div {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;

  .l-badge {
    display: inline-block;
    padding: 1px 6px;
    font-size: 12px;
    color: #fff;
    height: 14px;
    line-height: 14px;
    border-radius: 9px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    &.reminder {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%,-50%);
      z-index: 99;
    }

    &.dot {
      padding: 0;
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }

    &.info {
      background: $info;
    }

    &.success {
      background: $success;
    }

    &.warning {
      background: $warning;
    }

    &.primary {
      background: $primary;
    }
  }
}
</style>
