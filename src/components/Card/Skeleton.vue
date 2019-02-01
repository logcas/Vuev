<template>
  <div class="skeleton">
    <div class="skeleton-block"></div>
    <div class="skeleton-block" style="width:80%"></div>
    <div class="skeleton-block" style="width:60%"></div>
    <div class="skeleton-block" style="width:30%"></div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.skeleton {
  .skeleton-block {
    height: 10px;
    width: 100%;
    margin-bottom: 10px;
    background: #BFBFBF;
    animation-name: loading;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@keyframes loading {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0.2;
  }
}
</style>
