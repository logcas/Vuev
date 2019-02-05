<template>
  <div :class="['l-collapse-item', {
    'collapsed': isCollapsed,
    'disabled': disabled,
  }]">
    <div class="header" @click="toggleCollapse">
      <span v-if="!$slots.title">{{ title }}</span>
      <slot name="title"></slot>
    </div>
    <div class="body">
      <slot name="content"></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'l-collapse-item',
  props: {
    title: {
      type: String,
      default: '',
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCollapsed: true,
      parent: null, // 对应的父组件 l-collapse
    }
  },
  methods: {
    toggleCollapse() {
      if(this.disabled) return;
      this.isCollapsed = !this.isCollapsed;

      this.$parent && this.$parent.toggle(this, this.isCollapsed);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/collapse.scss';
</style>
