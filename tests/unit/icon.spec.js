import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Icon from '@/components/Icon/Icon.vue';

describe('Icon 单元测试', () => {
  it('Icon 是一个Vue实例', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        iconName: 'camera',
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('验证Icon 的默认Props', () => {
    const iconName = 'camera';
    const wrapper = shallowMount(Icon, {
      propsData: {
        iconName,
      },
    });
    expect(wrapper.props('iconName')).to.be.equal(iconName);
    expect(wrapper.props('size')).to.be.equal('14');
    expect(wrapper.props('color')).to.be.equal('#6190e8');
  });

  it('验证Icon 的Props正确性', () => {
    const props = {
      iconName: 'camera',
      size: '50',
      color: '#000',
    };
    const wrapper = shallowMount(Icon, {
      propsData: props,
    });
    expect(wrapper.props('iconName')).to.be.equal(props.iconName);
    expect(wrapper.props('size')).to.be.equal(props.size);
    expect(wrapper.props('color')).to.be.equal(props.color);
  });
});
