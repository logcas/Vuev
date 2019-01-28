<template>
  <div :class="['l-input',{
    normal: size === 'normal',
    small: size === 'small',
    large: size === 'large',
    }]">
    <span class="btn btn-increase" @click="increase"></span>
    <span class="btn btn-decrease" @click="decrease"></span>
    <input
      type="text"
      :value="currentValue"
      @input="$emit('input', $event.target.value)"
      :autofocus="autofocus"
      :disabled="disabled"
      :readonly="readonly"
    >
  </div>
</template>

<script>
export default {
  name: "l-input-number",
  props: {
    value: Number,
    size: {
      type: String,
      default: "normal",
      validator(val) {
        return ["normal", "small", "large"].includes(val);
      }
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue() {
      if (typeof this.value !== "number") return 0;
      let val = Math.max(this.min, this.value);
      val = Math.min(this.max, val);
      return val;
    },
    decimalDigits() {
      let str = this.step.toString(),
        idx = str.indexOf(".");
      if (idx === -1) return 0;
      else return str.slice(idx + 1).length;
    }
  },
  methods: {
    increase() {
      if (this.disabled || this.readonly) return;
      let val = parseFloat((this.value + this.step).toFixed(this.decimalDigits));
      this.emitValue(val);
    },
    decrease() {
      if (this.disabled || this.readonly) return;
      let val = parseFloat((this.value - this.step).toFixed(this.decimalDigits));
      this.emitValue(val);
    },
    emitValue(val) {
      val = Math.max(this.min, val);
      val = Math.min(this.max, val);
      this.$emit('input', val);
    },
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/input.scss";

$primary: #6190e8;

.l-input {
  box-sizing: border-box;
  position: relative;

  input[type="text"] {
    width: 100%;
    padding-right: 25px;
  }

  &:hover .btn {
    opacity: 1;
  }

  &.large .btn {
    height: 17px;
  }

  &.small .btn {
    height: 12px;
  }

  .btn {
    position: absolute;
    z-index: 99;
    height: 14px;
    width: 20px;
    border-left: 1px solid #eee;
    background: #fff;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s linear;
    opacity: 0;

    &:hover {
      background: #eee;
    }

    &.btn-increase {
      top: 1px;
      right: 1px;
      border-top-right-radius: 5px;
      border-bottom: 1px solid #eee;

      &:hover::before {
        border-color: $primary;
      }

      &::before {
        position: absolute;
        display: block;
        top: 6px;
        left: 6px;
        height: 6px;
        width: 6px;
        border: 1px solid #c5d9e8;
        border-right-width: 0;
        border-bottom-width: 0;
        z-index: 999;
        content: " ";
        transform: rotate(45deg);
      }
    }

    &.btn-decrease {
      bottom: 1px;
      right: 1px;
      border-bottom-right-radius: 5px;
      border-top: 1px solid #eee;

      &:hover::before {
        border-color: $primary;
      }

      &::before {
        position: absolute;
        display: block;
        bottom: 6px;
        left: 6px;
        height: 6px;
        width: 6px;
        border: 1px solid #c5d9e8;
        border-top-width: 0;
        border-left-width: 0;
        z-index: 999;
        content: " ";
        transform: rotate(45deg);
      }
    }
  }
}
</style>
