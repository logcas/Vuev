<template>
  <div :class="['l-collapse', {
    'simple': simple,
  }]">
    <slot></slot>
  </div>
</template>

<script>
import { getType, isType } from '../../utils/utils';
export default {
  name: "l-collapse",
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Array],
    simple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle(item, isCollapsed) {
      let unfold;
      if (this.accordion) {
        this.$children.forEach((child, index) => {
          if (child !== item) {
            child.isCollapsed = true;
          } else {
            if(!child.isCollapsed) {
              unfold = child.name || index.toString();
            }
          }
        });
      } else {
        unfold = [];
        this.$children.forEach((child, index) => {
          if (!child.isCollapsed) {
            unfold.push(child.name || index.toString());
          }
        });
      }
      this.$emit('on-change', unfold);
    },
    setCollapsed() {
      let initValues = this.value;
      switch(getType(initValues)) {
        case 'number': initValues = initValues.toString();
        case 'string': 
          initValues = [initValues];
        case 'array': 
          this.$children.forEach(child => {
            if(child.name && initValues.includes(child.name)) {
              child.isCollapsed = false;
            } else {
              child.isCollapsed = true;
            }
          });
          break;
      }
    },
  },
  mounted() {
    this.setCollapsed();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/collapse.scss";
</style>
