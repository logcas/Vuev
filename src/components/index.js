import '../assets/icon/iconfont';

import Button from './Button';
import CheckBox from './Checkbox';
import CheckboxGroup from './Checkbox-Group';
import Icon from './Icon';
import Tag from './Tag';
import Input from './Input';
import Radio from './Radio';
import RadioGroup from './Radio-Group';
import RadioButton from './Radio-Button';
import Rate from './Rate';
import Switch from './Switch';
import Select from './Select';
import SelectGroup from './Select-Group';
import SelectOption from './Select-Option';
import Slider from './Slider';

const components = {
  Button,
  CheckBox,
  CheckboxGroup,
  Icon,
  Tag,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Rate,
  Switch,
  Select,
  SelectGroup,
  SelectOption,
  Slider,
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
