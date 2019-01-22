# Checkbox 选择器
VueV为Checkbox改变了一个样式，并且通过封装和新添加的`l-checkbox-group`，使得用起来更方便。

### 单一个普通的Checkbox

这是最简单的`Checkbox`了，可以通过`v-model`进行双向绑定，传入的值是一个布尔类型。

<ClientOnly>
<l-checkbox v-model="val">选我</l-checkbox>
</ClientOnly>

{{val}}

<script>
export default {
  data() {
    return {
      val: false,
      val2: false,
      val3: [],
    }
  },
  methods: {
    catchEmit(val) {
      alert(val);
    }
  },
}
</script>

```vue
<l-checkbox v-model="val">选我</l-checkbox>
```

### 默认选中
你可以通过传入`checked`使它默认选中。

<ClientOnly>
<l-checkbox :checked="true" v-model="val2">选我</l-checkbox>
</ClientOnly>

{{val2}}

```vue
<l-checkbox :checked="true">选我</l-checkbox>
```

### 禁用的
通过传入`disabled`可以使它被禁用，这样它就不会改变值了。

<ClientOnly>
<l-checkbox :disabled="true">选我</l-checkbox>
</ClientOnly>

```vue
<l-checkbox :disabled="true">选我</l-checkbox>
```

### 与`checkbox-group`一起使用
当然，真正需要用到Checkbox，大多数时候都是多个选择器一起联合作用。为了更方便，VueV封装了`l-checkbox-group`组件，这样，将多个`l-checkbox`通过`l-checkbox-group`包裹起来，你再也不需要添加多个`v-model`了，这样，只需要在根组件上加一个`v-model`就行了。

同时，你必须传入`label`属性，它是选中的值，否则为空。

<ClientOnly>
<l-checkbox-group v-model="val3">
  <l-checkbox label="北京">北京</l-checkbox>
  <l-checkbox label="广州">广州</l-checkbox>
  <l-checkbox label="上海">上海</l-checkbox>
  <l-checkbox label="成都">成都</l-checkbox>
</l-checkbox-group>
</ClientOnly>

{{val3}}

```vue
<l-checkbox-group v-model="val3">
  <l-checkbox label="北京">北京</l-checkbox>
  <l-checkbox label="广州">广州</l-checkbox>
  <l-checkbox label="上海">上海</l-checkbox>
  <l-checkbox label="成都">成都</l-checkbox>
</l-checkbox-group>
```

### 捕获`on-change`事件
当选项发生改变时，会触发`on-change`事件，你可以为它指定事件处理程序，它包含一个`label`的参数。

<ClientOnly>
<l-checkbox v-model="val" @on-change="catchEmit" label="VueV">VueV</l-checkbox>
<l-checkbox v-model="val2" @on-change="catchEmit" label="VueV2">VueV2</l-checkbox>
</ClientOnly>

```vue
<l-checkbox v-model="val" @on-change="catchEmit" label="VueV">VueV</l-checkbox>
<l-checkbox v-model="val2" @on-change="catchEmit" label="VueV2">VueV2</l-checkbox>
<script>
export default {
  data() {
    return {
      val: false,
      val2: false,
    }
  },
  methods: {
    catchEmit(val) {
      alert(val);
    }
  },
}
</script>
```

如果使用在`l-checkbox-group`上，会返回一个已选中的值数组。

<ClientOnly>
<l-checkbox-group v-model="val3" @on-change="catchEmit">
  <l-checkbox label="北京">北京</l-checkbox>
  <l-checkbox label="广州">广州</l-checkbox>
  <l-checkbox label="上海">上海</l-checkbox>
  <l-checkbox label="成都">成都</l-checkbox>
</l-checkbox-group>
</ClientOnly>

{{ val3 }}

```vue
<l-checkbox-group v-model="val3" @on-change="catchEmit">
  <l-checkbox label="北京">北京</l-checkbox>
  <l-checkbox label="广州">广州</l-checkbox>
  <l-checkbox label="上海">上海</l-checkbox>
  <l-checkbox label="成都">成都</l-checkbox>
</l-checkbox-group>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|checked| 是否选中| Boolean | `true`、`false` |`false` |
|value| 是否选中的值 | Boolean |  |  |
|label| 选项的值 | String | |
|disabled| 禁用 | Boolean | `true`、`false` | `false` |


### 事件
| 名称 | 说明 | 返回参数 |
| --- | --- | --- |
| on-change | 选择发生改变时 | 单个使用时返回改变后的值value，联合使用时返回选中选项的数组 |