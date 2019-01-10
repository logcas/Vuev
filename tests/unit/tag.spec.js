import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import Tag from '@/components/Tag/Tag.vue';

const tagName = '测试标签';

describe('Tag 单元测试', () => {
  it('Tag 是一个Vue实例', () => {
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
    });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.isVueInstance()).to.be.true;
  });
  it('测试默认Props', () => {
    const wrapper = shallowMount(Tag, {
      slots: {
        default: tagName,
      },
    });
    expect(wrapper.classes()).to.have.members(['tag', 'primary']);
    expect(wrapper.props('type')).to.be.equal('primary');
    expect(wrapper.props('closable')).to.be.false;
  });
  it('验证Props的正确性', () => {
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
  it('测试可关闭标签的点击事件', () => {
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
