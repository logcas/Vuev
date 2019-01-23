# Radio 单选按钮

### 基本的单选按钮
每个按钮都是独立的，你要为它们传入各自的`v-model`。

<l-radio v-model="val1" label="广州">广州</l-radio>
<l-radio v-model="val2" label="北京">北京</l-radio>

val1:{{val1}}

val2:{{val2}}

```vue
<l-radio v-model="val1" label="广州">广州</l-radio>
<l-radio v-model="val2" label="北京">北京</l-radio>
```

<script>
export default {
  data() {
    return {
      val1: '',
      val2: '',
      vals: '',
    }
  }
}
</script>

### 禁用的单选按钮
通过传入`disabled`属性，可以使它变得不可用。

<l-radio v-model="val1" label="广州" disabled>广州</l-radio>
<l-radio v-model="val2" label="北京" disabled>北京</l-radio>

```vue
<l-radio v-model="val1" label="广州" disabled>广州</l-radio>
<l-radio v-model="val2" label="北京" disabled>北京</l-radio>
```

### 单选按钮组
如果各个按钮之间存在互斥关系，要使用`l-radio-group`把它们包裹起来，然后给`l-radio-group`传入一个`v-model`即可很方便地管理单选按钮之间的问题。

<l-radio-group v-model="vals">
  <l-radio label="广州">广州</l-radio>
  <l-radio label="北京">北京</l-radio>
  <l-radio label="深圳">深圳</l-radio>
  <l-radio label="成都">成都</l-radio>
</l-radio-group>

你的选择：{{vals}}

```vue
<l-radio-group v-model="vals">
  <l-radio label="广州">广州</l-radio>
  <l-radio label="北京">北京</l-radio>
  <l-radio label="深圳">深圳</l-radio>
  <l-radio label="成都">成都</l-radio>
</l-radio-group>
```

### 貌似更好看的组合按钮
有时候，使用`l-radio`时又需要好看一点，或者在某些场合下，按钮组更适合当时的交互逻辑。因此，我们封装了`l-radio-button`组件，与`l-radio`一样，通过`l-radio-group`把他们都包裹起来一起管理。

同时，你也可以通过传入`disabled`去禁用它。另外，`l-radio-button`还支持`size`属性，你可以传入一个可选的大小尺寸。

::: tip
Vuepress 显示存在问题，实际使用是没有问题的。
:::

<l-radio-group v-model="vals">
  <l-radio-button label="广州">广州</l-radio-button>
  <l-radio-button label="北京">北京</l-radio-button>
  <l-radio-button label="深圳">深圳</l-radio-button>
  <l-radio-button label="成都">成都</l-radio-button>
</l-radio-group>

你的选择：{{vals}}

```vue
<l-radio-group v-model="vals">
  <l-radio-button label="广州">广州</l-radio-button>
  <l-radio-button label="北京">北京</l-radio-button>
  <l-radio-button label="深圳">深圳</l-radio-button>
  <l-radio-button label="成都">成都</l-radio-button>
</l-radio-group>
```

### Props
#### `l-radio`
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|checked| 是否选中| Boolean | `true`、`false` |`false` |
|value| 值 | String |  |  |
|label| 选项的值 | String | |
|disabled| 禁用 | Boolean | `true`、`false` | `false` |

#### `l-radio-button`
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|checked| 是否选中| Boolean | `true`、`false` |`false` |
|value| 值 | String |  |  |
|label| 选项的值 | String | |
|disabled| 禁用 | Boolean | `true`、`false` | `false` |
|size| 尺寸 | String | `normal`、`small`、`large` | `normal` |
