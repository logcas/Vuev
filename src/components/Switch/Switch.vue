<template>
  <label
    :class="['l-switch', {
    unchecked: !currentValue,
    checked: currentValue,
    disabled: disabled, 
    normal: size === 'normal',
    large: size === 'large',
    }]"
    @click="changeStatus"
  >
    <span class="text" v-if="checkedText" v-show="currentValue">{{checkedText}}</span>
    <span class="text" v-if="uncheckedText" v-show="!currentValue">{{uncheckedText}}</span>
    <span class="switch-button"></span>
  </label>
</template>

<script>
export default {
  name: "l-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    checkedText: {
      type: String,
      default: ""
    },
    uncheckedText: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal',
      validator(val) {
        return ['normal','large'].includes(val);
      },
    },
  },
  computed: {
    currentValue() {
      return this.value;
    }
  },
  methods: {
    changeStatus() {
      if (this.disabled) return;
      this.$emit("input", !this.currentValue);
      this.$emit("switch-change", !this.currentValue);
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$disabled: #dfdfdf;
$disabledDark: #b9b9b9;

.l-switch {
  position: relative;
  display: inline-block;
  height: 20px;
  min-width: 40px;
  border: 1px solid $primary;
  border-radius: 10px;
  background: $primary;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s linear;

  &.large {
    height: 26px;
    min-width: 46px;
    border-radius: 13px;

    .switch-button {
      width: 22px;
      height: 22px;
      border-radius: 11px;
      margin-left: -25px;
    }

    .text {
      font-size: 16px;
      line-height: 26px;
    }
  }

  &.unchecked {
    border-color: $disabledDark;
    background: $disabledDark;

    & .switch-button {
      left: 1px;
      margin-left: 0;
    }

    & .text {
      margin-right: 6px;
      margin-left: 24px;
      color: $disabled;
    }
  }

  &.disabled {
    border-color: $disabledDark;
    background: $disabledDark;
    cursor: not-allowed;

    & .text {
      color: $disabled;
    }
  }

  .switch-button {
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    top: 1px;
    left: 100%;
    margin-left: -19px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    transition: all 0.3s ease-out;
  }

  .text {
    display: block;
    margin-left: 6px;
    margin-right: 26px;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
  }
}
</style>
