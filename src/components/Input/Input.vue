<template>
  <div :class="['l-input', status, size]">
    <l-icon class="icon" :icon-name="icon" v-if="icon"></l-icon>
    <!--前置slot-->
    <div :class="['l-input-append',{
      'slot-button': appendButton,
    }]" v-if="$slots.append" @click="clickSlotButton">
      <slot name="append"></slot>
    </div>

    <input
      :class="{
        'prepend': $slots.prepend,
        'append': $slots.append,
        }"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :maxLength="maxLength"
      :minLength="minLength"
      :max="max"
      :min="min"
      :autofocus="autofocus"
      :size="size"
      :status="status"
      @input="input"
      @blur="blur"
      @focus="focus"
    >

    <!--后置slot-->
    <div :class="['l-input-prepend',{
      'slot-button': prependButton,
    }]" v-if="$slots.prepend" @click="clickSlotButton">
      <slot name="prepend"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";

export default {
  name: "l-input",
  props: {
    type: {
      type: String,
      require: true
    },
    name: String,
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    minLength: Number,
    max: Number,
    min: Number,
    autofocus: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal",
      validator(val) {
        return ["small", "normal", "large"].includes(val);
      }
    },
    status: {
      type: String,
      default: "default",
      validator(val) {
        return ["default", "success", "error", "warning"].includes(val);
      }
    },
    icon: String,
    appendButton: {
      type: Boolean,
      default: false,
    },
    prependButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
    focus(e) {
      this.$emit('focus', e);
    },
    blur(e) {
      this.$emit('blur', e);
    },
    clickSlotButton(e) {
      if(this.appendButton) {
        this.$emit('click-append', e);
      } else if(this.prependButton) {
        this.$emit('click-prepend', e);
      }
    },
  },
  components: {
    'l-icon': Icon,
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/input.scss";
</style>
