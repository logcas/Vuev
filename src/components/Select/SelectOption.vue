<template>
  <li :class="['l-select-option', {'disabled': disabled, 'selected': selected}]" @click.stop="setValue">
    <slot></slot>
  </li>
</template>

<script>
import utils from '../../utils/utils.js';

export default {
  name: 'l-select-option',
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
  },
  data() {
    return {
      parent: null,
      currentLabel: '',
      currentValue: '',
      selected: false,
    }
  },
  methods: {
    setValue() {
      if(this.disabled) return;
      this.parent && this.parent.setValue(this.currentLabel, this.currentValue);
      if(this.parent && this.parent.multiple) {
        this.selected = !this.selected;
      } else {
        this.parent.isSelect = false;
        this.parent.clearSelections();
        this.selected = true;
      }
    },
  },
  mounted() {
    this.parent = utils.findParentComponent(this, 'l-select');
    if(this.label) this.currentLabel = this.label;
    if(!this.label) this.currentLabel = this.$slots.default[0].text || '';
    if(this.value) this.currentValue = this.value;
    if(!this.value) this.currentValue = this.currentLabel;
  }
}
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$disabled: #dfdfdf;
$disabledDark: #b9b9b9;

$fontColor: #3f536e;
$lightFontColor: #8dabc4;

$borderColor: #c5d9e8;
$hoverColor: #ECF5FD;

.l-select-option {
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: $fontColor;
  white-space: nowrap;
  user-select: none;

  &.selected {
    font-weight: bold;
    background: $disabled;
  }

  &:hover {
    background: $hoverColor;
    cursor: pointer;
  }

  &.disabled {
    color: $disabled;
    cursor: not-allowed;

    &:hover {
      background: #fff;
    }
  }
}

</style>
