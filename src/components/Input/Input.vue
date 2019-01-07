<template>
  <div :class="['l-input', status, size]">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="'#icon-' + icon"></use>
    </svg>
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :maxLength="maxLength"
      :minLength="minLength"
      :max="max"
      :min="min"
      :autofocus="autofocus"
      :size="size"
      :status="status"
      @input="input"
      @blur="blur"
      @focus="focus"
    >
  </div>
</template>

<script>
export default {
  name: "l-input",
  props: {
    type: {
      type: String,
      require: true
    },
    name: String,
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    minLength: Number,
    max: Number,
    min: Number,
    autofocus: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal",
      validator(val) {
        return ["small", "normal", "large"].includes(val);
      }
    },
    status: {
      type: String,
      default: "default",
      validator(val) {
        return ["default", "success", "error", "warning"].includes(val);
      }
    },
    icon: String
  },
  methods: {
    input(e) {
      this.$emit("input", e.target.value);
    },
    focus(e) {
      this.$emit("focus", e);
    },
    blur(e) {
      this.$emit("blur", e);
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;
$disbled: #eef0f0;

$success: #13ce66;
$error: #ff4949;
$warning: #ffc82c;

.l-input {
  position: relative;
  margin: 5px 0;
  
  &.normal {
    input {
      padding: 7px 10px;
    }
  }
  &.small {
    input {
      padding: 5px 10px;
    }
  }
  &.large {
    input {
      padding: 10px 10px;
    }
  }

  .icon {
    position: absolute;
    color: $fontColor;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 20px;
    transition: opacity .2s;

    & + input {
      padding-left: 25px;
    }
  }

  input {
    outline: none;
    -webkit-appearance: none;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    color: $fontColor;
    padding: 5px 10px;
    border-width: 1px;
    border-style: solid;
    border-color: $primary;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    opacity: 0.7;

    &:focus {
      border-color: $primary;
      box-shadow: 0 0 1px 0 $primary;
      opacity: 1;
    }

    &:disabled,
    &:read-only {
      border-color: $border;
      background-color: $disbled;
      opacity: 0.5;
    }
  }

  &.success input {
    border-color: $success;
    opacity: 0.7;
  }

  &.error input {
    border-color: $error;
    opacity: 0.7;
  }

  &.warning input {
    border-color: $warning;
    opacity: 0.7;
  }

  &.success input:focus,
  &.error input:focus,
  &.warning input:focus {
    opacity: 1;
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
