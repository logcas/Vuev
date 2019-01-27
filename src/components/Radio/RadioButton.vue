<template>
  <div
    :class="['l-radio-button',
    {
      'normal': size === 'normal',
      'small': size === 'small',
      'large': size === 'large',
      'checked': isChecked,
      'disabled': disabled,
    }
  ]"
    @click.capture="select"
  >
    <slot></slot>
  </div>
</template>

<script>
import utils from '../../utils/utils.js';
export default {
  name: "l-radio-button",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(val) {
        return ["normal", "small", "large"].includes(val);
      },
      default: "normal"
    }
  },
  computed: {
    currentValue() {
      return this.label;
    }
  },
  data() {
    return {
      isChecked: false,
      parent: null
    };
  },
  methods: {
    select() {
      if (this.disabled) return;
      this.parent && this.parent.updateValue(this.currentValue);
    },
    findParent() {
      this.parent = utils.findParentComponent(this, 'l-radio-group');
    },
    setStatus(isChecked) {
      this.isChecked = isChecked;
    }
  },
  mounted() {
    this.findParent();
  }
};
</script>

<style lang="scss" scoped>
$basicColor: #6190e8;

$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;
$disabled: #eef0f0;

$margin: 5px;
$radius: 5px;
$padding: 5px;
$smallVerticalPadding: 5px;
$normalVerticalPadding: 7px;
$largeVerticalPadding: 10px;
$horizonalPadding: 10px;

.l-radio-button {
  display: inline-block;
  margin: 0;
  padding: $padding;
  font-size: 14px;
  color: $basicColor;
  border: 1px solid $basicColor;
  border-right-width: 0;
  border-collapse: collapse;
  cursor: pointer;
  transition: all 0.2s linear;

  &.disabled {
    background: $disabled;
    color: $primary;

    &.disabled:hover {
      cursor: not-allowed;
    }

    &.checked {
      background: $disabled;
      color: $border;
    }
  }

  &.checked {
    background: $basicColor;
    color: #fff;
  }

  &:last-child {
    border-right-width: 1px;
    border-radius: 0 $radius $radius 0;
  }

  &:first-child {
    border-radius: $radius 0 0 $radius;
  }

  &.normal {
    padding: $normalVerticalPadding $horizonalPadding;
  }

  &.small {
    padding: $smallVerticalPadding $horizonalPadding;
  }

  &.large {
    padding: $largeVerticalPadding $horizonalPadding;
  }
}
</style>
