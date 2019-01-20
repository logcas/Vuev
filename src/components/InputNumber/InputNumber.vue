<template>
  <label class="l-input primary normal">
    <l-icon class="btn increase" icon-name="top" color="#3f536e" size="30" @click.native="increase"></l-icon>
    <l-icon class="btn decrease" icon-name="down" color="#3f536e" size="30" @click.native="decrease"></l-icon>
    <input type="text" v-model="currentValue">
  </label>
</template>

<script>
import Icon from '../Icon/Icon.vue';
export default {
  props:{
    value: Number,
    size: {
      type: String,
      default: 'normal',
      validator(val) {
        return ['normal','small','large'].includes(val);
      },
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: 0,
    }
  },
  components: {
    'l-icon': Icon,
  },
  methods: {
    increase() {
      console.log('increase');
      let currentValue = Number(this.value);
      this.currentValue = currentValue + this.step;
    },
    decrease() {
      console.log('decrease');
      let currentValue = Number(this.value);
      this.currentValue = currentValue - this.step;
    },
  },
  mounted() {
    this.currentValue = this.value;
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/input.scss";
.l-input {
  position: relative;

  input[type="text"] {
    padding-left: 20px;
  }

  .btn {
    opacity: 0.3;
    position: absolute;
    z-index: 99;
    left: -5px;
    cursor: pointer;
    transition: opacity 0.5s ease-in;

    &.increase {
      top: 0px;
    }

    &.decrease {
      top: 10px;
    }
  }

  &:hover {
    .btn {
      opacity: 1;
    }
  }
}
</style>
