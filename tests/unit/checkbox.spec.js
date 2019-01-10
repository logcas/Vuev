import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CheckBox from '@/components/Checkbox/Checkbox.vue';

describe('CheckBox 单元测试', () => {
  it('CheckBox 是一个Vue实例', () => {
    const wrapper = shallowMount(CheckBox);
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  it('验证默认Props', () => {
    const wrapper = shallowMount(CheckBox);
    expect(wrapper.props().value).to.be.false;
    expect(wrapper.props().disabled).to.be.false;
    expect(wrapper.props().checked).to.be.false;
    expect(wrapper.props().label).to.be.equals('');
  });
  it('验证指定Props', () => {
    const props = {
      value: false,
      disabled: false,
      checked: true,
      label: 'hello,world',
    };
    const wrapper = shallowMount(CheckBox,{
      propsData: props,
    });
    expect(wrapper.props().value).to.be.equal(props.value);
    expect(wrapper.props().disabled).to.be.equal(props.disabled);
    expect(wrapper.props().checked).to.be.true;
    expect(wrapper.props().label).to.be.equal(props.label);
  });
  it('验证正常时emit事件', () => {
    const props = {
      disabled: false,
      label: 'hello,world',
    };
    const wrapper = shallowMount(CheckBox,{
      propsData: props,
    });
    const input = wrapper.find('input');
    input.trigger('change');
    expect(wrapper.emitted('input')).to.be.exist;
    expect(wrapper.emitted('on-change')).to.be.exist;
  });
  it('验证disabled时事件失效', () => {
    const props = {
      disabled: true,
      label: 'hello,world',
    };
    const wrapper = shallowMount(CheckBox,{
      propsData: props,
    });
    expect(wrapper.emitted('input')).to.be.undefined;
    expect(wrapper.emitted('on-change')).to.be.undefined;
  });
});
