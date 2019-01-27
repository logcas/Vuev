<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>  
</template>

<script>
import utils from '../../utils/utils.js';

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
  },
  mounted() {
    this.childrens = utils.findChildrenComponent(this, 'l-checkbox');
    this.updateValues();
    this.firstLoad = false;
  },
}
</script>

<style lang="scss" scoped>

</style>
