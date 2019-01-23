<template>
  <button @click="$emit('click')" :class="['btn',type,size]" :disabled="disabled">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="'#icon-'+icon"></use>
    </svg>
    <span class="text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'l-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'error'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['small', 'normal', 'large'].includes(value);
      },
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #6190e8;
$primarySecondColor: #78a4fa;
$primaryDisabled: #d0def8;

$errorColor: #ff4949;
$errorSecondColor: #ff6464;
$errorDisabled: #ffc8c8;

$defaultSecondColor: #eef0f0;

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

$btnGroupBorderColor: #c5d9e8;
$btnGroupTextColor: #8dabc4;

.btn:disabled {
  cursor: not-allowed;
}

.btn-group {
  margin: 5px;
  .btn {
    margin: 0;
    border-radius: 0;

    &.default {
      color: $btnGroupTextColor;
      border-top: 1px solid $btnGroupBorderColor;
      border-bottom: 1px solid $btnGroupBorderColor;
      border-left-width: 0;
      border-right-width: 0;

      &:active {
        border-left-width: 0;
        border-right-width: 0;
      }

      &:first-child,
      &:last-child {
        border: 1px solid $btnGroupBorderColor;
      }
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
}

.btn {
  margin: 2px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;

  & .text {
    position: relative;
    font-size: 14px;
    line-height: 14px;
  }

  & .icon {
    font-size: 14px;
  }

  &.normal {
    padding: 5px 10px;
  }

  &.large {
    padding: 10px 20px;
  }

  &.small {
    padding: 2px 5px;
  }

  &.default {
    border: 1px solid $primaryColor;
    color: $primaryColor;
    background: #fff;

    &:active {
      border: 1px solid $primaryColor;
      color: $primaryColor;
      background: $defaultSecondColor;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &.primary {
    border: 1px solid $primaryColor;
    color: #fff;
    background: $primaryColor;

    &:active {
      border-color: $primarySecondColor;
      background: $primarySecondColor;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &.error {
    border: 1px solid $errorColor;
    color: #fff;
    background: $errorColor;
    &:active {
      border-color: $errorSecondColor;
      background: $errorSecondColor;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
