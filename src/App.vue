<template>
  <div id="app">
    <l-input-number v-model="val" :step="0.1" :min="10" :max="12" style="width:200px"></l-input-number>
    {{val}}
    <l-alert
      title="this is title"
      show-icon
    >hello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,world</l-alert>
    <l-alert title="this is title" show-icon status="warning">hello,world</l-alert>
    <l-alert title="this is title" show-icon status="error" closable>hello,world</l-alert>
    <l-alert show-icon status="success">hello,world</l-alert>
    <div>
      <l-badge :value="666" status="primary" :max-num="20">
        <l-tag>hello</l-tag>
      </l-badge>
      <l-badge :value="3" status="primary">
        <l-button>一个按钮</l-button>
      </l-badge>
      <l-badge :value="3" status="primary" dot>
        <l-button>一个按钮</l-button>
      </l-badge>
    </div>
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

export default {
  name: "app",
  data() {
    return {
      val: 0
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
    "l-badge": Badge
  },
  methods: {
    btnClick() {
      //alert('hello,world');
    },
    closeCallback(e) {
      console.log(e);
    },
    onchange(data) {
      console.log(data);
    },
    show(newVal, oldVal) {
      alert(`新的评分为：${newVal}，旧的评分为：${oldVal}`);
    }
  }
};
</script>

<style lang="scss">
</style>
