# Tag 标签

### 各种状态的标签

通过传入不同的`type`属性得到不同状态的标签。

<l-tag type="default">default</l-tag>
<l-tag type="primary">default</l-tag>
<l-tag type="success">default</l-tag>
<l-tag type="warning">default</l-tag>
<l-tag type="error">default</l-tag>

```vue
<l-tag type="default">default</l-tag>
<l-tag type="primary">default</l-tag>
<l-tag type="success">default</l-tag>
<l-tag type="warning">default</l-tag>
<l-tag type="error">default</l-tag>
```

### 可关闭的标签

可以传入`closable`属性，去控制一个标签能否关闭。

<l-tag type="primary" :closable="true">可关闭的</l-tag>
<l-tag type="primary">不能关闭的</l-tag>

```vue
<l-tag type="primary" :closable="true">可关闭的</l-tag>
<l-tag type="primary">不能关闭的</l-tag>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|type| 类型| String | `primary`、`default`、`success`、`warning`、`error` |`primary` |
|closable| 能否关闭 | Boolean | `true`、`false` | `false` |