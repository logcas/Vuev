<template>
  <label class="l-select-tag">
    {{ label }}
    <span class="close-button" @click.stop="cancel">×</span>
  </label>
</template>

<script>
export default {
  name: 'l-select-tag',
  props: {
    label: {
      type: String,
      default: '',
    },
    index: Number,
  },
  methods: {
    cancel() {
      this.$emit('remove-selection', this.index);
    },
  },
}
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$disabled: #dfdfdf;
$disabledDark: #b9b9b9;

$fontColor: #3f536e;
$lightFontColor: #8dabc4;

$borderColor: #c5d9e8;


.l-select-tag {
  position: relative;
  display: inline-block;
  margin: 2px;
  padding: 2px 15px 2px 4px;
  font-size: 14px;
  color: #fff;
  background: $primary;
  border-radius: 2px;

  .close-button {
    position: absolute;
    display: block;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
  }
}
</style>

