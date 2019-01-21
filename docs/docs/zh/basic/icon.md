# Icon 图标
Vuev中的图标组件对[阿里妈妈Iconfont](https://www.iconfont.cn/)中的部分图标进行了封装。

### 使用方法

如果需要一个相机图标：

<ClientOnly>
  <l-icon icon-name="camera" size="30" color="#000"></l-icon>
</ClientOnly>

```html
<l-icon icon-name="camera" size="30" color="#000"></l-icon>
```

图标是通过Symbol方式进行引用的，因此，你可以指定你喜欢的颜色和任意尺寸的大小。

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|icon-name| 图标名 | String | 见下表 | 无 |
|color| 图标颜色 | String | 任意十六进制的颜色 | #6190e8 |
|size| 图标尺寸 | String | 任意尺寸，仅传入数字部分，单位固定为px | 14 |

### 完整图标列表
正在制作中...