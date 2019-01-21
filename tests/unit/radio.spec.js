import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Radio from '@/components/Radio/Radio.vue';

describe('Radio 单元测试', () => {
  it('Radio 是一个Vue实例', () => {
    const wrapper = shallowMount(Radio);
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  it('验证默认Props', () => {
    const wrapper = shallowMount(Radio);
    expect(wrapper.props().disabled).to.be.false;
    expect(wrapper.props().label).to.be.equal('');
  });
  it('验证指定Props', () => {
    const props = {
      label: 'hello',
      disabled: false,
    };
    const wrapper = shallowMount(Radio,{
      propsData: props,
    });
    expect(wrapper.props().disabled).to.be.equal(props.disabled);
    expect(wrapper.props().label).to.be.equal(props.label);
  });
  it('验证正常时emit事件', () => {
    const props = {
      disabled: false,
      label: 'hello',
    };
    const wrapper = shallowMount(Radio,{
      propsData: props,
    });
    const input = wrapper.find('input');
    input.trigger('input');
    expect(wrapper.emitted('input')).to.be.exist;
  });
  it('验证disabled时事件失效', () => {
    const props = {
      disabled: true,
      label: 'hello,world',
    };
    const wrapper = shallowMount(Radio,{
      propsData: props,
    });
    const input = wrapper.find('input');
    input.trigger('input');
    expect(wrapper.emitted('input')).to.be.undefined;
  });
});
