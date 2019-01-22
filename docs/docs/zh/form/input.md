# Input 单行输入框

### 简单的不能再简单的普通输入框

可通过`style`属性自定义宽度，双向绑定肯定是通过`v-model`的。

其中，`type`属性为原生属性，你可以指定它为`text`、`password`等类型。

<ClientOnly>
<l-input v-model="val" type="text"></l-input>
</ClientOnly>

{{val}}

```html
<l-input v-model="val" type="text"></l-input>
<script>
export default {
    data() {
        return {
            val:'hello,vuev',
        }
    },
    methods: {
        show(val) {
            alert(val);
        }
    },
}
</script>
```

### 带图标的输入框
通过`icon`属性给定指定图标。

<ClientOnly>
<l-input type="text" icon="like"></l-input>
</ClientOnly>

```html
<l-input type="text" icon="like"></l-input>
```

### 禁用/只读输入框
通过`disabled`和`readonly`禁用或者使其为只读状态。

<ClientOnly>
<l-input type="text" value="禁用的输入框" disabled></l-input>
<l-input type="text" value="只读的输入框" readonly></l-input>
</ClientOnly>

```html
<l-input type="text" value="禁用的输入框" disabled></l-input>
<l-input type="text" value="禁用的输入框" readonly></l-input>
```

### 三种尺寸
目前提供三种不同的尺寸：`normal`、`small`、`large`。通过`size`属性指定。

<ClientOnly>
<l-input type="text" value="正常的大小" size="normal"></l-input>
<l-input type="text" value="小的" size="small"></l-input>
<l-input type="text" value="大的" size="large"></l-input>
</ClientOnly>

```html
<l-input type="text" value="正常的大小" size="normal"></l-input>
<l-input type="text" value="小的" size="small"></l-input>
<l-input type="text" value="大的" size="large"></l-input>
```

### 组合输入框
通过传入插槽内容可以组合一个输入框。

同时，还可以通过传入`prepend-button`或者`append-button`，把插槽变成一个按钮，此时，插槽的内容就是按钮的内容，点击按钮会触发`click-append`或者`click-prepend`事件，你可以为该事件指定事件处理程序。

当然了，传入一个`<l-icon>`是肯定可以的。

<ClientOnly>
<l-input type="text" size="normal" v-model="val" :prepend-button="true" @click-prepend="show">
<template slot="prepend">
<span>搜索</span>
</template>
</l-input>

<l-input type="text" size="large" :append-button="true" @click-append="show">
<template slot="append">
<span>搜索</span>
</template>
<template slot="prepend">
<l-icon icon-name="camera"></l-icon>
</template>
</l-input>

<l-input type="text" size="small">
<template slot="prepend">
<span>.com</span>
</template>
</l-input>

<l-input type="text">
<template slot="append">
<span>http://</span>
</template>
</l-input>
</ClientOnly>

```html
<l-input type="text" size="normal" v-model="val" :prepend-button="true" @click-prepend="show">
<template slot="prepend">
<span>搜索</span>
</template>
</l-input>

<l-input type="text" size="large" :append-button="true" @click-append="show">
<template slot="append">
<span>搜索</span>
</template>
<template slot="prepend">
<l-icon icon-name="camera"></l-icon>
</template>
</l-input>
<l-input  type="text" size="small">
    <template slot="prepend">
        <span>.com</span>
    </template>
</l-input>

<l-input  type="text">
    <template slot="append" size="small">
        <span>http://</span>
    </template>
</l-input>
```

### 带状态的输入框
目前我们定义了四种输入框的状态：`default`、`success`、`error`、`warning`。你可以通过传入`status`属性去更改它，默认是`default`。

<ClientOnly>
<l-input type="text" placeholder="default状态的"></l-input>
<l-input type="text" status="success" placeholder="success状态的"></l-input>
<l-input type="text" status="error" placeholder="error状态的"></l-input>
<l-input type="text" status="warning" placeholder="warning状态的"></l-input>
</ClientOnly>

```html
<l-input type="text" placeholder="default状态的"></l-input>
<l-input type="text" status="success" placeholder="success状态的"></l-input>
<l-input type="text" status="error" placeholder="error状态的"></l-input>
<l-input type="text" status="warning" placeholder="warning状态的"></l-input>
```

<script>
export default {
    data() {
        return {
            val:'hello,vuev',
        }
    },
    methods: {
        show(val) {
            alert(val);
        }
    }
}
</script>

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|type| 原生类型 | String | 原生有什么就有什么 | 无 |
|name| 名称属性 | String |  |  |
|value| 值 | String |  |  |
|disabled| 禁用 | Boolean | `true`、`false` | `false` |
|readonly| 只读 | Boolean | `true`、`false` | `false` |
|max-length| 最大输入长度 | Number | | |
|min-length| 最小输入长度 | Number | | |
|max| 最大值（仅数字） | Number | | |
|min| 最小值（仅数字） | Number | | |
|autofocus| 自己获取焦点 | Boolean | `true`、`false` | `false` |
|size| 尺寸大小 | String | `normal`、`small`、`large` | `normal` |
|status| 状态 | String | `default`、`success`、`error` | `default` |
|icon| 图标 | String | 详细看Icon页 | |
|append-button| 前置插槽按钮 | Boolean | `true`、`false` | `false` |
|prepend-button| 后置插槽按钮 | Boolean | `true`、`false` | `false` |

### Slots
| 名称 | 说明 |
| --- | --- |
| append | 前置插槽 |
| prepend | 后置插槽 |

### 事件
| 名称 | 说明 | 返回参数 |
| --- | --- | --- |
| input | 输入时触发 | value |
| blur | 失去焦点时触发 | event |
| focus | 获取焦点时触发 | event |
| click-append | 当前置插槽为按钮时点击触发 | event |
| click-prepend | 当后置插槽为按钮时点击触发 | event |
