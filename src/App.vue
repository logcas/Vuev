<template>
  <div id="app">
    <div id="inputs">
      <h1>Inputs</h1>
      <l-input v-model="val" type="text" size="normal" prepend-button>
        <template slot="prepend">
          <span>搜索</span>
        </template>
      </l-input>
      <l-input v-model="val" type="text" size="large" append-button>
        <template slot="append">
          <span>搜索</span>
        </template>
        <template slot="prepend">
          <span>hello</span>
        </template>
      </l-input>
      <l-input v-model="val" type="text" size="small">
        <template slot="prepend">
          <span>.com</span>
        </template>
      </l-input>
      <l-input v-model="val" type="text" icon="like"></l-input>
      <l-input v-model="val" type="text" size="large" icon="like"></l-input>
      <l-input v-model="val" type="text" status="warning" icon="like"></l-input>
    </div>
    <div id="buttons">
      <l-button type="primary">主要按钮</l-button>
      <l-button type="default">默认按钮</l-button>
      <l-button type="error">错误按钮</l-button>
      <l-button type="default" icon="like">带图标的</l-button>
      <l-button type="primary" icon="like">带图标的</l-button>
    </div>
    <div>
      <l-radio-group v-model="val">
        <l-radio-button label="hello" disabled>hello</l-radio-button>
        <l-radio-button label="hello2">hello2</l-radio-button>
        <l-radio-button label="hello3">hello3</l-radio-button>
      </l-radio-group>
      <p>{{val}}</p>
    </div>
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

export default {
  name: "app",
  data() {
    return {
      val: "hello3",
      val2: "hello",
      rate: 3,
      rate2: 0,
      checkval: false,
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
