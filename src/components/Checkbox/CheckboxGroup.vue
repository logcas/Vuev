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
      childrens:[],
      firstLoad: true,
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
      if(!this.firstLoad) this.$emit('on-change', this.values);
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
    this.firstLoad = false;
  },
}
</script>

<style lang="scss" scoped>

</style>
