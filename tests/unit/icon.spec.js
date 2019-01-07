import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Icon from '@/components/Icon/Icon.vue';

describe('Icon unit test', () => {
  it('Icon is a Vue constance', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        iconName: 'camera',
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('validate Icon default props without specified size and color', () => {
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

  it('validate Icon props', () => {
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
