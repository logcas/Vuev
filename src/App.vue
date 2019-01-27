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
      <l-textarea min-row="3" max-row="5" placeholder="hello,vuev" v-model="val"></l-textarea>
      {{val}}
    </div>
    <div>
      <h1>Switch</h1>
      <l-switch v-model="switchVal" checkedText="开啊开" uncheckedText="关啊关" :disabled="true"></l-switch>
      <l-switch v-model="switchVal" checkedText="开啊开" uncheckedText="关啊关" size="large"></l-switch>
      {{ switchVal }}
    </div>
    <l-select v-model="select" style="width:300px;" multiple>
      <l-select-group label="广州">
        <l-select-option>广州市番禺区</l-select-option>
        <l-select-option>广州市天河区</l-select-option>
        <l-select-option>广州市越秀区</l-select-option>
        <l-select-option>广州市荔湾区</l-select-option>
      </l-select-group>
      <l-select-group label="清远">
        <l-select-option>清远市清城区</l-select-option>
        <l-select-option>清远市清新区</l-select-option>
        <l-select-option>清远市洲心镇</l-select-option>
        <l-select-option>清远市XXX</l-select-option>
      </l-select-group>
      <l-select-group label="深圳">
        <l-select-option>深圳市南山区</l-select-option>
        <l-select-option>深圳市罗湖区</l-select-option>
        <l-select-option>深圳市龙岗区</l-select-option>
      </l-select-group>
      <l-select-group label="北京">
        <l-select-option>北京市XX区</l-select-option>
      </l-select-group>
    </l-select>
    {{select}}
    <div>
      <input v-model="len1" type="number">
      <l-slider v-model="len1" :max="90" :min="-10" disabled></l-slider>
      {{len1}}
      <l-slider v-model="len2" :step="5" :max="230" :min="20"></l-slider>
      {{len2}}
      <l-slider v-model="len3" :step="5" :max="100" :min="0"></l-slider>
      {{len3}}
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
import SelectTag from './components/Select/SelectTag.vue';
import Slider from './components/Slider/Slider.vue';
import Textarea from './components/Textarea/Textarea.vue';

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
      vals: "",
      select: '',
      len1: 20,
      len2: 10,
      len3: 0,
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
    'l-slider': Slider,
    'l-textarea': Textarea,
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
