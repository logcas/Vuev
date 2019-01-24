<template>
  <div class="l-select-group">
    <label class="title">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'l-select-group',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$disabled: #dfdfdf;
$disabledDark: #b9b9b9;

.l-select-group {
  margin: 0;
  padding: 0;
  user-select: none;

  .title {
    display: block;
    padding: 5px;
    color: $disabledDark;
    font-size: 14px;
  }
}
</style>
