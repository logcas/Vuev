# Select 选择框

### 普通的单选框
对于普通的单选框，传入一个字符串类型的`v-model`即可。

::: tip
你可以选择传或者不传入一个`value`属性作为选项选中的值，如果你不传，则它会自动将`label`的值作为选项的值，如果没有`label`，则会把元素中的文本内容作为该选项的值。

因此，优先级：value > label > 元素文本
::: 

<l-select v-model="val" style="width:150px;">
  <l-select-option>广州</l-select-option>
  <l-select-option label="Beijing">北京</l-select-option>
  <l-select-option value="上海" label="Shanghai">上海</l-select-option>
  <l-select-option>深圳</l-select-option>
</l-select>

你的选择：{{ val }}

<script>
export default {
  data() {
    return {
      val: '',
      vals: [],
    }
  },
}
</script>

```vue
<l-select v-model="val" style="width:150px;">
  <l-select-option>广州</l-select-option>
  <l-select-option label="Beijing">北京</l-select-option>
  <l-select-option value="上海" label="Shanghai">上海</l-select-option>
  <l-select-option>深圳</l-select-option>
</l-select>
```

### 拥有禁用选项的选择框
向对应的`l-select-option`传入`disabled`属性可以使它不能被选择。

<l-select v-model="val" style="width:150px;">
  <l-select-option disabled>广州</l-select-option>
  <l-select-option label="Beijing">北京</l-select-option>
  <l-select-option value="上海" label="Shanghai">上海</l-select-option>
  <l-select-option>深圳</l-select-option>
</l-select>

你的选择：{{val}}

```vue
<l-select v-model="val" style="width:150px;">
  <l-select-option disabled>广州</l-select-option>
  <l-select-option label="Beijing">北京</l-select-option>
  <l-select-option value="上海" label="Shanghai">上海</l-select-option>
  <l-select-option>深圳</l-select-option>
</l-select>
```

### 选项分组
使用`l-select-group`可以把相同类型的`l-select-option`选项包裹在一起，然后传入`label`属性去指定它的类型。

::: tip
Vuepress 显示有bug
:::

<l-select v-model="val" style="width:300px;">
  <l-select-group label="广州">
    <l-select-option>广州市番禺区</l-select-option>
    <l-select-option>广州市天河区</l-select-option>
  </l-select-group>
  <l-select-group label="清远">
    <l-select-option>清远市清城区</l-select-option>
    <l-select-option>清远市清新区</l-select-option>
  </l-select-group>
  <l-select-group label="深圳">
    <l-select-option>深圳市南山区</l-select-option>
    <l-select-option>深圳市龙岗区</l-select-option>
  </l-select-group>
</l-select>

你的选择：{{val}}

```vue
<l-select v-model="val" style="width:300px;">
  <l-select-group label="广州">
    <l-select-option>广州市番禺区</l-select-option>
    <l-select-option>广州市天河区</l-select-option>
  </l-select-group>
  <l-select-group label="清远">
    <l-select-option>清远市清城区</l-select-option>
    <l-select-option>清远市清新区</l-select-option>
  </l-select-group>
  <l-select-group label="深圳">
    <l-select-option>深圳市南山区</l-select-option>
    <l-select-option>深圳市龙岗区</l-select-option>
  </l-select-group>
</l-select>
```

### 多选模式
可以传入`multiple`属性使选择框变成多选选择框。`v-model`属性需要传入一个数组。

<l-select v-model="vals" style="width:300px;" multiple>
  <l-select-option>广州市番禺区</l-select-option>
  <l-select-option>广州市天河区</l-select-option>
  <l-select-option>清远市清城区</l-select-option>
  <l-select-option>清远市清新区</l-select-option>
  <l-select-option>深圳市南山区</l-select-option>
  <l-select-option>深圳市龙岗区</l-select-option>
</l-select>

你的选择： {{vals}}

```vue
<l-select v-model="vals" style="width:300px;" multiple>
  <l-select-option>广州市番禺区</l-select-option>
  <l-select-option>广州市天河区</l-select-option>
  <l-select-option>清远市清城区</l-select-option>
  <l-select-option>清远市清新区</l-select-option>
  <l-select-option>深圳市南山区</l-select-option>
  <l-select-option>深圳市龙岗区</l-select-option>
</l-select>
```

### 自定义的选项内容
对于`l-select-option`标签，除了传入常规文本，还可以传入自定义的`html`，不过，你必须为他传入一个`label`用来作为选项的显示文本。

<l-select v-model="val" style="width:300px;">
  <l-select-option label="广州番禺"><strong>广州市番禺区</strong></l-select-option>
  <l-select-option>深圳市南山区</l-select-option>
  <l-select-option>深圳市龙岗区</l-select-option>
</l-select>

你的选择： {{val}}

```vue
<l-select v-model="vals" style="width:300px;" multiple>
  <l-select-option label="广州番禺"><strong>广州市番禺区</strong></l-select-option>
  <l-select-option>深圳市南山区</l-select-option>
  <l-select-option>深圳市龙岗区</l-select-option>
</l-select>
```

### Props
#### `l-select`
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|multiple| 启用多选 | Boolean | `true`、`false` | `false` |
|placeholder| 没有选项时显示的文本 | String | | |

#### `l-select-option`
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|disabled| 是否禁用 | Boolean | `true`、`false` | `false` |
|label| 选中后显示的文本 | String | | |
|value| 选项的值 | String | | |

#### `l-select-group`
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|label| 分组名称 | String | | |
