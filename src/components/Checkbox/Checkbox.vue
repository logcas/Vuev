<template>
  <label :class="['checkbox',disabled ? 'disabled':'']">
    <input type="checkbox" :checked="currentValue" @change="change" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
import utils from '../../utils/utils.js';

export default {
  name: "l-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      parent: null,
      currentValue: false,
      isGroup: false
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    }
  },
  methods: {
    change(e) {
      let checked = e.target.checked;
      this.currentValue = checked;
      this.$emit("input", this.currentValue);
      !this.isGroup && this.$emit("on-change", this.label);
      this.parent && this.parent.updateValues();
    },
  },
  mounted() {
    this.parent = utils.findParentComponent(this, 'l-checkbox-group');
    if (this.parent) {
      this.isGroup = true;
    }
    if (this.checked) {
      this.currentValue = this.checked;
      this.$emit("input", this.currentValue);
    } else if (this.value) {
      this.currentValue = this.value;
      this.$emit("input", this.currentValue);
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;

.checkbox {
  font-size: 14px;
  display: inline-block;
  position: relative;
  color: $fontColor;

  &.disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    top: 50%;
    transform: translateY(4px);
    display: inline-block;
    margin: 3px 3px 3px 4px;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border: 1px solid $primary;
    border-radius: 3px;
    outline: none;
    transition: all 0.2s linear;
    cursor: pointer;

    &:checked {
      position: relative;
      background: $primary;
      color: #ecf5fd;
      transition: all 0.2s linear;
    }

    &:checked::after {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%) rotate(-45deg);
      width: 6px;
      height: 3px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: #fff;
    }
  }
}
</style>
