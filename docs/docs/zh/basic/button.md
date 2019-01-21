# Button 按钮


### 基本的按钮

目前封装了主要的三种状态按钮样式：`default`、`primary`、`error`。

<ClientOnly>
<l-button type="primary">主要按钮</l-button>
<l-button type="default">默认按钮</l-button>
<l-button type="error">错误按钮</l-button>
</ClientOnly>

```html
<l-button type="primary">主要按钮</l-button>
<l-button type="default">默认按钮</l-button>
<l-button type="error">错误按钮</l-button>
```

### 带图标的按钮

可以通过`icon`属性给它们添上一个图标。

<ClientOnly>
<l-button type="primary" icon="camera">主要按钮</l-button>
<l-button type="default" icon="like">默认按钮</l-button>
</ClientOnly>

```html
<l-button type="primary" icon="camera">主要按钮</l-button>
<l-button type="default" icon="like">默认按钮</l-button>
```

### 禁用的按钮

通过指定`disabled`属性把它们禁用。

<ClientOnly>
  <l-button type="primary" disabled>主要按钮</l-button>
  <l-button type="default" disabled>默认按钮</l-button>
  <l-button type="error" disabled>错误按钮</l-button>
</ClientOnly>

```html
<l-button type="primary" disabled>主要按钮</l-button>
<l-button type="default" disabled>默认按钮</l-button>
<l-button type="error" disabled>错误按钮</l-button>
```

### 三种尺寸

通过指定`size`属性指定按钮的尺寸。

<ClientOnly>
  <l-button type="primary" size="small">小的按钮</l-button>
  <l-button type="primary" size="normal">正常按钮</l-button>
  <l-button type="primary" size="large">大的按钮</l-button>
</ClientOnly>

```html
<l-button type="primary" size="small">小的按钮</l-button>
<l-button type="primary" size="normal">正常按钮</l-button>
<l-button type="primary" size="large">大的按钮</l-button>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|`type`| 按钮类型（非原生属性） | `String` | `default`、`primary`、`error` | `default` |
|`size`| 按钮大小 | `String` | `normal`、`small`、`large` | `normal` |
|`icon`| 图标 | `String` | 详见Icon页 | 无 |
|`disabled` | 是否禁用 | `Boolean` | `true`、`false` | `false` |