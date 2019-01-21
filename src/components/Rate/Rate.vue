<template>
  <label class="rate">
    <ul class="star-list">
      <li
        v-for="index in count"
        :key="index"
        @mouseover="hoverStar"
        @mouseout="outStar"
        @click="setIndex"
      >
        <l-icon
          class="star right-star"
          :icon-name="iconName"
          :color="dynamicColor(index)"
          size="25"
          data-type="right"
          :data-index="index"
        ></l-icon>
        <div class="half-star">
          <l-icon
            class="star"
            :icon-name="iconName"
            :color="dynamicColor(allowHalf ? index - 0.5 : index)"
            size="25"
            data-type="left"
            :data-index="allowHalf ? index - 0.5 : index"
          ></l-icon>
        </div>
      </li>
    </ul>
  </label>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
  name: "l-rate",
  props: {
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: "favfill"
    },
    starColor: {
      type: String,
      default: "#FFC82C"
    },
    unStarColor: {
      type: String,
      default: "#C9C9C9"
    }
  },
  components: {
    "l-icon": Icon
  },
  computed: {},
  data() {
    return {
      hoverIndex: 0,
      currentIndex: 0,
      timeoutId: null
    };
  },
  methods: {
    hoverStar(e) {
      if (this.disabled) return;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
      if (e.target.dataset.index) {
        this.hoverIndex = e.target.dataset.index;
        this.emitValue();
      }
    },
    outStar(e) {
      if (this.disabled) return;
      this.timeoutId = setTimeout(() => {
        this.hoverIndex = this.currentIndex;
        this.emitValue();
      }, 100);
    },
    setIndex() {
      if (this.disabled) return;
      let oldVal = this.currentIndex;
      this.currentIndex = this.hoverIndex;
      this.emitValue();
      this.$emit("on-change", this.currentIndex, oldVal);
    },
    dynamicColor(idx) {
      return idx <= this.hoverIndex ? this.starColor : this.unStarColor;
    },
    emitValue() {
      this.$emit(
        "input",
        this.allowHalf
          ? Number(this.hoverIndex)
          : Math.ceil(Number(this.hoverIndex))
      );
    }
  },
  mounted() {
    this.currentIndex = this.hoverIndex = this.value;
  }
};
</script>

<style lang="scss" scoped>
.rate {
  .star-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      display: inline-block;

      .half-star {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 50%;
        overflow: hidden;
      }

      .right-star {
        &.hide {
          visibility: hidden;
        }
      }

      .star {
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>

