import Card from './Card.vue';

Card.install = function install(Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
