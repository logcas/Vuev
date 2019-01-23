<template>
  <div id="app">
    <l-radio-group v-model="vals">
  <l-radio-button label="广州" :disabled="true">广州</l-radio-button>
  <l-radio-button label="北京">北京</l-radio-button>
  <l-radio-button label="深圳">深圳</l-radio-button>
  <l-radio-button label="成都">成都</l-radio-button>
</l-radio-group>
    <input type="radio" value="1" v-model="val2">11
    <input type="radio" value="2" v-model="val2">22
    <input type="radio" value="3" v-model="val2">33
    <p>{{val2}}</p>
    <div>
      <p>Rate：{{rate}}</p>
      <l-rate :value="rate" icon-name="likefill" :disabled="true"></l-rate>
      <p>Rate Allow half：{{rate2}}</p>
      <l-rate :allow-half="true" v-model="rate2" icon-name="likefill">></l-rate>
    </div>
    <div>
      <h1>Checkbox</h1>
      <l-checkbox v-model="checkval"></l-checkbox>
    </div>
    <div>
      <h1>Switch</h1>
      <l-switch v-model="switchVal" checkedText="开啊开" uncheckedText="关啊关" :disabled="true"></l-switch>
      <l-switch v-model="switchVal" checkedText="开啊开" uncheckedText="关啊关" size="large"></l-switch>
      {{ switchVal }}
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
import RadioButton from './components/Radio/RadioButton.vue';
import Rate from './components/Rate/Rate.vue';
import Switch from './components/Switch/Switch.vue';

export default {
  name: "app",
  data() {
    return {
      val: "hello3",
      val2: "hello",
      rate: 3,
      rate2: 0,
      checkval: false,
      switchVal: true,
      vals:'',
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
    'l-radio-button': RadioButton,
    'l-rate': Rate,
    'l-switch': Switch,
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
    show(newVal,oldVal) {
      alert(`新的评分为：${newVal}，旧的评分为：${oldVal}`);
    }
  }
};
</script>

<style lang="scss">
</style>
