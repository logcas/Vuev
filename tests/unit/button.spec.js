import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';

describe('Button unit test', () => {
  // 测试实例
  it('Button is a Vue Instance', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.exists()).to.be.equal(true);
    expect(wrapper.isVueInstance()).to.be.equal(true);
  });

  // 测试默认的props
  it('validate default props without deliver any params', () => {
    const wrapper = shallowMount(Button);
    const { vm } = wrapper;
    expect(vm.type).to.be.equal('default');
    expect(vm.size).to.be.equal('normal');
    expect(vm.icon).to.be.equal('');
    expect(vm.disabled).to.be.equal(false);
  });

  // 测试特定的props
  it('validate specified props', () => {
    const props = {
      icon: 'like',
      size: 'normal',
      type: 'primary',
      disabled: false,
    };
    const wrapper = shallowMount(Button, {
      propsData: props,
    });
    const { vm } = wrapper;
    expect(vm.type).to.be.equal(props.type);
    expect(vm.size).to.be.equal(props.size);
    expect(vm.icon).to.be.equal(props.icon);
    expect(vm.disabled).to.be.equal(props.disabled);
  });

  // 测试正常点击事件
  it('test click event emittion when click the button', () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).to.exist;
  });

  // 测试禁用按钮点击失效
  it('test disabled button click event', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
    });
    wrapper.trigger('click');
    expect(wrapper.emitted().click).to.undefined;
  });

  // 测试按钮文本
  it('validate slot text', () => {
    const slotText = '测试按钮';
    const wrapper = shallowMount(Button, {
      slots: {
        default: slotText,
      },
    });
    const text = wrapper.find('span.text');
    expect(text.text()).to.be.equal(slotText);
  });
});
