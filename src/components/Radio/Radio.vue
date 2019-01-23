<template>
  <label class="l-radio">
    <input type="radio" @input="select" ref="radio" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'l-radio',
  props: {
    value: {
      type: [String, Number],
    },
    label: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isGroup: false,
      parent: null,
    }
  },
  computed: {
    currentValue() {
      return this.label;
    },
  },
  watch: {
    value(newVal,oldVal) {
      if(newVal !== this.currentValue) {
        this.$refs.radio.checked = false;
      } else {
        this.$refs.radio.checked = true;
      }
    },
  },
  methods: {
    select(e) {
      if(this.isGroup) {
        this.parent && this.parent.updateValue(this.currentValue);
      } else {
        this.$emit('input', this.currentValue);
      }
    },
    findParent() {
      if (this.$parent && this.$parent.$options.name === "l-radio-group") {
        this.parent = this.$parent;
        this.isGroup = true;
      }
    },
    setStatus(isChecked) {
      this.$refs.radio.checked = isChecked;
    },
  },
  mounted() {
    this.findParent();
  }
}
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;
$disbled: #eef0f0;


.l-radio {
  color: $fontColor;
  font-size: 14px;
  margin-right: 5px;

  input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    position: relative;
    top: 50%;
    transform: translateY(2px);
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid $border;
    background: $default;

    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: $primary;
      opacity: 0;
      transition: all 0.2s linear;
    }

    &:checked::after {
      opacity: 1;
    }

    &:disabled {
      border-color: $disbled;
      background-color: $default;
      &:hover {
        cursor: not-allowed;
      }
    }

    &:disabled:checked::after {
      background: $border;
    }
  }
}
</style>

