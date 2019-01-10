import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Input from '@/components/Input/Input.vue';

const text = 'hello,world';

describe('Input 单元测试', () => {
  // 实例
  it('Input 是一个Vue实例', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  // 包含特定类名
  it('Input 包含特定类名', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
      },
    });
    expect(wrapper.classes()).contain('l-input');
  });
  // 检测input,focus,blur事件
  it('验证input,focus,blur事件触发', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
        value: text,
      },
    });
    const input = wrapper.find('input');
    input.trigger('input');
    expect(wrapper.emitted('input')).to.exist;
    expect(wrapper.emitted('input')[0][0]).to.be.equal(text);
    input.trigger('focus');
    expect(wrapper.emitted().focus).to.exist;
    input.trigger('blur');
    expect(wrapper.emitted().blur).to.exist;
  });
  // 检测禁用时输入等事件失效
  it('验证禁用时事件失效', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
        disabled: true,
      },
    });
    const input = wrapper.find('input');
    input.trigger('input');
    expect(wrapper.emitted().input).to.undefined;
    input.trigger('focus');
    expect(wrapper.emitted().focus).to.undefined;
    input.trigger('blur');
    expect(wrapper.emitted().blur).to.undefined;
  });
  // 测试props
  it('验证 Props 与 Attributes 的正确性', () => {
    const props = {
      type: 'text',
      placeholder: 'hello,world',
      name: 'input1',
      value: 'hello,world',
      disabled: false,
      readonly: false,
      maxLength: 100,
      minLength: 0,
      max: 50,
      min: 0,
      autofocus: false,
      size: 'normal',
      status: 'default',
    };
    const wrapper = shallowMount(Input, {
      propsData: props,
    });
    const input = wrapper.find('input');
    const attrs = input.attributes();
    expect(attrs.type).to.be.equal(props.type);
    expect(attrs.placeholder).to.be.equal(props.placeholder);
    expect(attrs.name).to.be.equal(props.name);
    expect(input.element.value).to.be.equal(props.value);
    expect(attrs.maxlength).to.be.equal(String(props.maxLength));
    expect(attrs.minlength).to.be.equal(String(props.minLength));
    expect(attrs.max).to.be.equal(String(props.max));
    expect(attrs.min).to.be.equal(String(props.min));
    expect(attrs.size).to.be.equal(props.size);
    expect(attrs.status).to.be.equal(props.status);
  });
});
