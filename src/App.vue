<template>
  <div id="app">
    <l-button @click="start">start</l-button>
    <l-button @click="finish">finish</l-button>
    <l-button @click="update">update</l-button>
    <l-button @click="error">error</l-button>
    <l-button @click="setWidth">设置宽度为4px</l-button>
    <l-card style="width:300px;" :loading="true">
      <h4 slot="title">Card Title</h4>
      <div slot="extra"><a href="">Extra</a></div>
      <div slot="body">Card ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard Content</div>
    </l-card>
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
import Icon from "./components/Icon/Icon.vue";
import Tag from "./components/Tag/Tag.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import CheckboxGroup from "./components/Checkbox/CheckboxGroup.vue";
import Input from "./components/Input/Input.vue";
import Radio from "./components/Radio/Radio.vue";
import RadioGroup from "./components/Radio/RadioGroup.vue";
import RadioButton from "./components/Radio/RadioButton.vue";
import Rate from "./components/Rate/Rate.vue";
import Switch from "./components/Switch/Switch.vue";
import Select from "./components/Select/Select.vue";
import SelectOption from "./components/Select/SelectOption.vue";
import SelectGroup from "./components/Select/SelectGroup.vue";
import SelectTag from "./components/Select/SelectTag.vue";
import Slider from "./components/Slider/Slider.vue";
import Textarea from "./components/Textarea/Textarea.vue";
import InputNumber from "./components/InputNumber/InputNumber.vue";
import Alert from "./components/Alert/Alert.vue";
import Badge from "./components/Badge/Badge.vue";
import Card from './components/Card/Card.vue';
import LoadingBar from './components/LoadingBar/LoadingBar.vue';

export default {
  name: "app",
  data() {
    return {
      val: 0,
      percent: 20,
    };
  },
  components: {
    "l-button": Button,
    "l-icon": Icon,
    "l-tag": Tag,
    "l-checkbox": Checkbox,
    "l-checkbox-group": CheckboxGroup,
    "l-input": Input,
    "l-radio": Radio,
    "l-radio-group": RadioGroup,
    "l-radio-button": RadioButton,
    "l-rate": Rate,
    "l-switch": Switch,
    "l-select": Select,
    "l-select-option": SelectOption,
    "l-select-group": SelectGroup,
    "l-select-tag": SelectTag,
    "l-slider": Slider,
    "l-textarea": Textarea,
    "l-input-number": InputNumber,
    "l-alert": Alert,
    "l-badge": Badge,
    "l-card": Card,
  },
  methods: {
    start() {
      this.$loadingBar.start();
    },
    finish() {
      this.$loadingBar.finish();
    },
    error() {
      this.$loadingBar.error();
    },
    update() {
      this.$loadingBar.update(50);
    },
    setWidth() {
      this.$loadingBar.config({
        width: 4,
      });
    },
  }
};
</script>

<style lang="scss">
</style>
