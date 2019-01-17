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
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
import Icon from "./components/Icon/Icon.vue";
import Tag from "./components/Tag/Tag.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import CheckboxGroup from "./components/Checkbox/CheckboxGroup.vue";
import Input from "./components/Input/Input.vue";

export default {
  name: "app",
  data() {
    return {
      val: "1234567"
    };
  },
  components: {
    "l-button": Button,
    "l-icon": Icon,
    "l-tag": Tag,
    "l-checkbox": Checkbox,
    "l-checkbox-group": CheckboxGroup,
    "l-input": Input
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
    }
  }
};
</script>

<style lang="scss">
</style>
