<template>
  <div :class="['l-slider',{'disabled': disabled }]" ref="slider" @click="clickValue">
    <div class="l-slider-track" :style="{width: trackWidth}">
      <span class="l-slider-dot" @mousedown="mousedown"></span>
    </div>
  </div>
</template>

<script>
import utils from "../../utils/utils";
export default {
  name: "l-slider",
  props: {
    value: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    trackWidth() {
      return (
        ((this.currentValue - this.min) / (this.max - this.min)) * 100 + "%"
      );
    },
    sliderWidth() {
      return parseInt(utils.getStyle(this.$refs.slider, "width"));
    },
    sliderLeft() {
      return parseInt(this.$refs.slider.getBoundingClientRect().left);
    }
  },
  data() {
    return {
      currentValue: 0,
      isMoving: false,
      mouseX: 0
    };
  },
  watch: {
    currentValue(newVal, oldVal) {
      this.$emit('input', newVal);
      this.$emit('on-change', newVal, oldVal);
    },
    value(newVal) {
      if(newVal >= this.max) newVal = this.max;
      if(newVal <= this.min) newVal = this.min;
      this.currentValue = newVal;
    },
  },
  methods: {
    clickValue(e) {
      if (this.disabled) return;
      this.mouseX = e.clientX;
      this.caculateWidth();
    },
    mousedown() {
      if (this.disabled) return;
      this.isMoving = true;
      window.addEventListener("mousemove", this.mousemove);
      window.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      if (!this.isMoving) return;
      this.mouseX = e.clientX;
      this.caculateWidth();
    },
    mouseup() {
      this.isMoving = false;
      window.removeEventListener("mousemove", this.mousemove);
      window.removeEventListener("mouseup", this.mouseup);
    },
    caculateWidth() {
      let moveWidth = this.mouseX - this.sliderLeft;
      let val =
        (moveWidth / this.sliderWidth) * (this.max - this.min) + this.min;
      if (val > this.max) val = this.max;
      if (val < this.min) val = this.min;
      this.currentValue = this.getTrueValue(val);
    },
    // 如果mod部分超过step的一半，就直接进step
    // 否则就向下(以step为基准)取整
    getTrueValue(val) {
      let mod = val % this.step;
      let integerPart = val - mod;
      if (mod === 0) return val;
      if (mod >= 0.5 * this.step) {
        return integerPart + this.step;
      } else {
        return integerPart;
      }
    }
  },
  mounted() {
    this.currentValue = this.value || 0;
  }
};
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;
$disbled: #eef0f0;
$disabledDark: #b9b9b9;

.l-slider {
  position: relative;
  height: 6px;
  width: 100%;
  background: $disbled;
  border-radius: 3px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }

  &.disabled {
    &:hover {
      cursor: not-allowed;
    }
    .l-slider-track {
      background: $disabledDark;
      &:hover {
        cursor: not-allowed;
      }

      .l-slider-dot {
        background: $disabledDark;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
  }

  .l-slider-track {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 70%;
    background: $primary;
    border-radius: 3px;

    .l-slider-dot {
      position: absolute;
      top: -3px;
      right: -3px;
      width: 12px;
      height: 12px;
      border-radius: 8px;
      background: $primary;
      transition: all 0.2s ease;

      &:hover {
        top: -5px;
        right: -5px;
        width: 16px;
        height: 16px;
        cursor: pointer;
        cursor: grab;
      }
    }
  }
}
</style>
