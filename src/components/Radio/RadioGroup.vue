<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import utils from "../../utils/utils.js";
export default {
  name: "l-radio-group",
  props: {
    value: [String, Number]
  },
  data() {
    return {
      childrens: []
    };
  },
  methods: {
    updateValue(newVal) {
      this.childrens.forEach(child => {
        if (child.currentValue === newVal) {
          child.setStatus(true);
        } else {
          child.setStatus(false);
        }
      });
      this.$emit("input", newVal);
    },
    findChildren() {
      this.childrens = utils.findChildrenComponent(
        this,
        "l-radio",
        "l-radio-button"
      );
      console.log(this.childrens);
      this.updateValue(this.value);
    }
  },
  mounted() {
    this.findChildren();
  }
};
</script>

<style lang="scss" scoped>
</style>
