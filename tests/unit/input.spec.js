import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Input from '@/components/Input/Input.vue';

const text = 'hello,world';

describe('input', () => {
  // 实例
  it('Input is a Vue instance', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  // 包含特定类名
  it('contains specified classname', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
      },
    });
    expect(wrapper.classes()).contain('l-input');
  });
  // 检测输入文本正确性
  it('validate input text', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'text',
        value: text,
      },
    });
    expect(wrapper.props('value')).to.be.equal(text);
  });
  // 检测input,focus,blur事件
  it('validate input event emit', () => {
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
  it('validate disbaled input event emit', () => {
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
});
