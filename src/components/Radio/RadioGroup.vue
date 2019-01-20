<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'l-radio-group',
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
        if(child.currentValue === newVal) {
          child.setStatus(true);
        } else {
          child.setStatus(false);
        }
      });
      this.$emit('input', newVal);
    },
    findChildren() {
      if (this.$children) {
        this.$children.forEach(child => {
          if (child.$options.name === "l-radio" || child.$options.name === 'l-radio-button') {
            this.childrens.push(child);
          }
        });
        this.updateValue(this.value);
      }
    }
  },
  mounted() {
    this.findChildren();
  }
};
</script>

<style lang="scss" scoped>
</style>
