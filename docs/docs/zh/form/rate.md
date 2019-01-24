# Rate 评分
### 普通的星型评分

只需要传入`v-model`即可得到一个完整的评分效果。点击它可以更改评分，并且触发`on-change`事件，你可以在用户设置评分后自定义你的事件处理程序。

<l-rate v-model="rate" @on-change="showRate"></l-rate>

当前评分：{{rate}}

<script>
export default {
  data() {
    return {
      rate: 3,
    }
  },
  methods: {
    showRate(val) {
      alert(`你的评分：${val}`);
    },
  },
};
</script>

```vue
<l-rate v-model="rate"></l-rate>
<script>
export default {
  data() {
    return {
      rate: 3,
    }
  },
  methods: {
    showRate(val) {
      alert(`你的评分：${val}`);
    },
  },
};
</script>
```

### 0.5评分
如果你需要把评分精确到0.5，那么，传入一个`allow-half`属性。

<l-rate v-model="rate" icon-name="likefill" allow-half></l-rate>
{{ rate }}

```vue
<l-rate v-model="rate" icon-name="likefill" allow-half></l-rate>
```

### 自定义评分图案
除了星星，你可以指定任何在VueV中的图标作为评分的图案，传入`icon-name`即可。

<l-rate v-model="rate" icon-name="likefill"></l-rate>

<l-rate v-model="rate" icon-name="smile"></l-rate>

<l-rate v-model="rate" icon-name="planefill"></l-rate>

```vue
<l-rate v-model="rate" icon-name="likefill"></l-rate>
<l-rate v-model="rate" icon-name="smile"></l-rate>
<l-rate v-model="rate" icon-name="planefill"></l-rate>
```

### 自定义颜色
你可以自定义点亮和点灭时的颜色，把十六进制颜色的字符串传入`star-color`和`un-star-color`即可。

<l-rate v-model="rate" icon-name="likefill" un-star-color="#FFC0CB" star-color="#DC143C"></l-rate>

```vue
<l-rate v-model="rate" icon-name="likefill" un-star-color="#FFC0CB" star-color="#DC143C"></l-rate>
```

### 禁用（只读）评分
如果只想把评分设置为只读模式不能修改，可以传入`disabled`属性。

<l-rate :value="3" disabled></l-rate>

```vue
<l-rate :value="3" disabled></l-rate>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|allow-half| 是否启用0.5评分 | Boolean | `true`、`false` |`false` |
|value| 值 | Number |  |  |
|count| 评分总数（星星数） | Number | |
|icon-name| 评分图案 | String | 请看Icon页 | `favfill` |
|star-color| 点亮时颜色 | String | 任何十六进制颜色字符串 |`#FFC82C` |
|un-star-color| 点灭时颜色 | String | 任何十六进制颜色字符串 |`#C9C9C9` |
|disabled| 禁止/只读 | Boolean | `true`、`false` | `false` |

### 事件
| 名称 | 说明 | 返回参数 |
| --- | --- | --- |
| on-change | 评分发生改变时触发 | newVal、oldVal |