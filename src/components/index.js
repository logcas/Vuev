import '../assets/icon/iconfont';

import Button from './Button';
import CheckBox from './Checkbox';
import CheckboxGroup from './Checkbox-Group';
import Icon from './Icon';
import Tag from './Tag';

const components = {
  Button,
  CheckBox,
  CheckboxGroup,
  Icon,
  Tag,
};

const install = function install(Vue) {
  Object.keys(components).forEach(key => Vue.component(components[key].name, components[key]));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
