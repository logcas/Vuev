<template>
  <div :class="['l-input', status, size]">
    <l-icon class="icon" :icon-name="icon" v-if="icon"></l-icon>
    <!--前置slot-->
    <div :class="['l-input-append',{
      'slot-button': appendButton,
    }]" v-if="$slots.append" @click="clickSlotButton">
      <slot name="append"></slot>
    </div>

    <input
      :class="{
        'prepend': $slots.prepend,
        'append': $slots.append,
        }"
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

    <!--后置slot-->
    <div :class="['l-input-prepend',{
      'slot-button': prependButton,
    }]" v-if="$slots.prepend" @click="clickSlotButton">
      <slot name="prepend"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";

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
    icon: String,
    appendButton: {
      type: Boolean,
      default: false,
    },
    prependButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
    focus(e) {
      this.$emit('focus', e);
    },
    blur(e) {
      this.$emit('blur', e);
    },
    clickSlotButton(e) {
      if(this.appendButton) {
        this.$emit('click-append', e);
      } else if(this.prependButton) {
        this.$emit('click-prepend', e);
      }
    },
  },
  components: {
    'l-icon': Icon,
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

$margin: 5px;
$radius: 5px;
$padding: 5px;
$smallVerticalPadding: 5px;
$normalVerticalPadding: 7px;
$largeVerticalPadding: 10px;
$horizonalPadding: 10px;

$blurOpacity: 0.7;
$focusOpacity: 1;

$smallHeight: 26px;
$normalHeight: 30px;
$largeHeight: 36px;

.l-input {
  position: relative;
  margin: $margin 0;
  display: inline-block;
  width: 100%;

  &.normal {
    input {
      padding: $normalVerticalPadding $horizonalPadding;
    }

    .l-input-prepend,
    .l-input-append {
      height: $normalHeight;
      line-height: $normalHeight;
    }
  }
  &.small {
    input {
      padding: $smallVerticalPadding $horizonalPadding;
    }

    .l-input-prepend,
    .l-input-append {
      height: $smallHeight;
      line-height: $smallHeight;
    }
  }
  &.large {
    input {
      padding: $largeVerticalPadding $horizonalPadding;
    }

    .l-input-prepend,
    .l-input-append {
      height: $largeHeight;
      line-height: $largeHeight;
    }
  }

  .slot-button {
    cursor: pointer;

    &:active {
      background: $border;
    }
  }

  .l-input-prepend,
  .l-input-append {
    display: inline-block;
    padding: 0 $horizonalPadding;
    background: $disbled;
    border: 1px solid $border;
    font-size: 12px;
    color: $fontColor;
  }

  .l-input-prepend {
    border-left-width: 0px;
    border-radius: 0 $radius $radius 0;
  }

  .l-input-append {
    border-right-width: 0px;
    border-radius: $radius 0 0 $radius;
  }

  .icon {
    position: absolute;
    color: $fontColor;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 20px;
    opacity: 1;
    z-index: 9;

    & + input {
      padding-left: 25px;
    }
  }

  input {
    outline: none;
    -webkit-appearance: none;
    display: inline-block;
    box-sizing: border-box;
    font-size: 14px;
    color: $fontColor;
    padding: $normalVerticalPadding $horizonalPadding;
    border-width: 1px;
    border-style: solid;
    border-color: $primary;
    border-radius: $radius;
    transition: all 0.2s ease-in-out;
    opacity: $blurOpacity;

    &:focus {
      border-color: $primary;
      opacity: $focusOpacity;
    }

    &:disabled,
    &:read-only {
      border-color: $border;
      background-color: $disbled;
      opacity: $blurOpacity;
    }

    &.append {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.prepend {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.success input {
    border-color: $success;
    opacity: $blurOpacity;
  }

  &.error input {
    border-color: $error;
    opacity: $blurOpacity;
  }

  &.warning input {
    border-color: $warning;
    opacity: $blurOpacity;
  }

  &.success input:focus,
  &.error input:focus,
  &.warning input:focus {
    opacity: $focusOpacity;
  }
}

.icon {
  width: 1em;
  height: 1em;
  horizonal-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
