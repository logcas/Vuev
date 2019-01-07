import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import Tag from '@/components/Tag/Tag.vue';

const tagName = '测试标签';

describe('Tag unit test', () => {
  it('Tag is a Vue instance', () => {
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  it('test Tag default props', () => {
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
    });
    expect(wrapper.classes()).to.have.members(['tag', 'primary']);
    expect(wrapper.props('type')).to.be.equal('primary');
    expect(wrapper.props('closable')).to.be.false;
  });
  it('test Tag specified props', () => {
    const props = {
      type: 'success',
      closable: true,
    };
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
      propsData: props,
    });
    expect(wrapper.classes()).to.have.members(['tag', props.type, 'closable']);
    expect(wrapper.props('type')).to.be.equal(props.type);
    expect(wrapper.props('closable')).to.be.equal(props.closable);
  });
  it('test Tag close event emit', () => {
    const props = {
      type: 'success',
      closable: true,
    };
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
      propsData: props,
    });
    const closeBtn = wrapper.find('span.close');
    closeBtn.trigger('click');
    expect(wrapper.emitted().close).to.exist;
  });
});
