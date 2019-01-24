<template>
  <div class="l-select">
    <!--select input 选择框-->
    <div
      :class="['l-select-input',{'selected':isSelect}]"
      @click="select"
      v-clickoutside="unselect"
    >{{currentLabel}}</div>
    <!--selections 选择列表-->
    <ul :class="['l-select-list',{'displayed': isSelect }]">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import clickOutSide from "../../directives/clickoutside";

export default {
  name: "l-select",
  directives: {
    clickoutside: clickOutSide
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: '请选择',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSelect: false,
      currentValue: '',
      currentLabel: 'VuevSelect',
      childrens: [],
    };
  },
  methods: {
    select() {
      this.isSelect = !this.isSelect;
    },
    unselect() {
      this.isSelect = false;
    },
    setValue(label, val) {
      this.$emit('input', val);
      this.currentValue = val;
      this.currentLabel = label;
    },
    searchChild(node, arr) {
      let child = node.$children;
      if(child) {
        child.forEach(el => {
          if(el.$options.name === 'l-select-option') {
            arr.push(el);
          }
          this.searchChild(el, arr);
        });
      }
    },
    initChidren() {
      this.searchChild(this, this.childrens);
      if(this.value) {
        this.childrens.forEach(child => {
          if(this.value === child.currentValue) {
            child.setValue();
          }
        });
      }
    },
    clearSelections() {
      if(!this.childrens || this.multiple) return;
      this.childrens.forEach(child => {
        child.selected = false;
      });
    },
  },
  mounted() {
    this.currentLabel = this.placeholder;
    this.initChidren();
  },
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$disabled: #dfdfdf;
$disabledDark: #b9b9b9;

$fontColor: #3f536e;
$lightFontColor: #8dabc4;

$borderColor: #c5d9e8;

@keyframes slideInDown {
  0% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 1;
  }
}

.l-select {
  display: inline-block;
  position: relative;

  .l-select-input {
    position: relative;
    border: 1px solid $borderColor;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 25px 5px 10px;
    user-select: none;
    color: $fontColor;
    transition: all 0.2s linear;
    background: #fff;
    z-index: 99;

    &.selected::after {
      transform: rotate(45deg);
    }

    &:hover {
      cursor: pointer;
      border-color: $primary;
    }

    &::after {
      display: block;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-80%) rotate(225deg);
      width: 5px;
      height: 5px;
      border: 1px solid $fontColor;
      border-right-width: 0;
      border-bottom-width: 0;
      z-index: 99;
      content: " ";
    }
  }

  .l-select-list {
    position: absolute;
    min-width: 100%;
    max-height: 300px;
    overflow-y: auto;
    display: none;
    margin: 2px 1px 1px 1px;
    padding: 0;
    background: #fff;
    box-shadow: 0 0 4px $disabledDark;
    border-radius: 5px;
    z-index: 99;

    &.displayed {
      display: block;
      animation-duration: 0.4s;
      animation-name: slideInDown;
      animation-fill-mode: both;
    }
  }
}
</style>
