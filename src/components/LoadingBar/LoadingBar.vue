<template>
  <div class="l-loading-bar" v-show="show">
    <div :class="['l-loading-progress', status]"
         :style="getStyle"
    ></div>
  </div>  
</template>

<script>
export default {
  name: 'l-loading-bar',
  data() {
    return {
      width: 2,
      progress: 0,
      show: true,
      status: 'success',
    }
  },
  computed: {
    getStyle() {
      return {
        height: this.width + 'px',
        width: this.progress + '%',
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$error: #ff4949;

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.l-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation-name: fade;
  animation-duration: 0.5s;
  animation-timing-function: linear;

  .l-loading-progress {
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in;

    &.success {
      background: $primary;
    }

    &.error {
      background: $error;
    }
  }
}

</style>
