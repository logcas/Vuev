# Checkbox 选择器
VueV为Checkbox改变了一个样式，并且通过封装和新添加的`l-checkbox-group`，使得用起来更方便。

### 单一个普通的Checkbox

这是最简单的`Checkbox`了，不过这样似乎并没有什么用。

<ClientOnly>
<l-checkbox>选我</l-checkbox>
</ClientOnly>

```html
<l-checkbox>选我</l-checkbox>
```

### 默认选中的Checkbox
你可以通过传入`checked`使它默认选中。

<ClientOnly>
<l-checkbox :checked="true">选我</l-checkbox>
</ClientOnly>

```html
<l-checkbox :checked="true">选我</l-checkbox>
```

### 禁用的Checkbox
通过传入`disabled`可以使它被禁用，这样它就不会改变值了。

<ClientOnly>
<l-checkbox :disabled="true">选我</l-checkbox>
</ClientOnly>

```html
<l-checkbox :disabled="true">选我</l-checkbox>
```

### 与`checkbox-group`一起使用
当然，真正需要用到Checkbox，大多数时候都是多个选择器一起联合作用。为了更方便，VueV封装了`l-checkbox-group`组件，这样，将多个`l-checkbox`通过`l-checkbox-group`包裹起来，你再也不需要添加多个`v-model`了，这样，只需要在根组件上加一个`v-model`就行了。
<ClientOnly>
<l-checkbox-group>
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
</l-checkbox-group>
</ClientOnly>

```html
<l-checkbox-group v-model="vals">
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
  <l-checkbox>选我</l-checkbox>
</l-checkbox-group>
```