<template>
  <div id="app">
    <l-checkbox-group v-model="arr" @on-change="onchange">
      <l-checkbox label="check1" checked>check1</l-checkbox>
      <l-checkbox label="check2" checked disabled>check2</l-checkbox>
      <l-checkbox label="check3">check3</l-checkbox>
      <l-checkbox label="check4">check4</l-checkbox>
    </l-checkbox-group>
    <p>{{arr}}</p>
    <l-checkbox v-model="check2" checked @on-change="onchange" label="hello,world">check4222</l-checkbox>
    {{check2}}
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
import Icon from "./components/Icon/Icon.vue";
import Tag from "./components/Tag/Tag.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import CheckboxGroup from "./components/Checkbox/CheckboxGroup.vue";

export default {
  name: "app",
  data() {
    return {
      arr: [],
      check2: false,
    };
  },
  components: {
    "my-button": Button,
    "my-icon": Icon,
    "l-tag": Tag,
    "l-checkbox": Checkbox,
    "l-checkbox-group": CheckboxGroup
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
