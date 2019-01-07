<template>
  <svg class="icon" :style="{fontSize:size + 'px',color:color}" aria-hidden="true">
    <use :xlink:href="'#icon-' + iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'l-icon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '14',
    },
    color: {
      type: String,
      default: '#6190e8',
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
