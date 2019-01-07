<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  name:'l-checkbox-group',
  data() {
    return {
      values: [],
      childrens:[]
    }
  },
  methods: {
    updateValues() {
      this.values = [];
      this.childrens.forEach(child => {
        if(child.currentValue) {
          this.values.push(child.label);
        }
      });
      this.$emit('input', this.values);
      this.$emit('on-change', this.values);
    },
    findChildren() {
      if(this.$children) {
        this.$children.forEach(child => {
          if(child.$options.name === 'l-checkbox') {
            this.childrens.push(child);
          }
        });
      }
    }
  },
  mounted() {
    this.findChildren();
    this.updateValues();
  },
}
</script>

<style lang="scss" scoped>

</style>
