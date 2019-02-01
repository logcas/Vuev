<template>
  <div class="l-card bordered shadow">
    <div class="header" v-show="$slots.title || $slots.extra">
      <div class="title"><slot name="title"></slot></div>
      <div class="extra"><slot name="extra"></slot></div>
    </div>
    <div class="body" :style="bodyStyle">
      <div class="content" v-show="!loading"><slot name="body"></slot></div>
      <div class="loading" v-show="loading">
        <slot name="loading">
          <skeleton></skeleton>
        </slot>
      </div>
    </div>
  </div>  
</template>

<script>
import Skeleton from './Skeleton.vue';
export default {
  name: 'l-card',
  props: {
    bordered: {
      type: Boolean,
      default: true,
    },
    hover: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    bodyStyle: {
      type: String,
      default: '',
    },
  },
  components: {
    Skeleton,
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';

$primary: #6190e8;
$border: #eee;
$shadow: #EEF0F0;

$fontSize: 14px;
$titleColor: #2C405A;
$textColor: #3F536E;

.l-card {
  margin: 0;
  padding: 0;
  color: $textColor;
  font-size: $fontSize;

  &.bordered {
    border: 1px solid $border;
  }

  &.shadow {
    transition: all 0.2s linear;

    &:hover {
      box-shadow: 0 0 3px 3px $shadow;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $fontSize;
    border-bottom: 1px solid $border;
    color: $titleColor;
  }

  .body {
    padding: $fontSize;
  }

}
</style>
