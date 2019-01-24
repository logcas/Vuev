export default {
  bind(el, binding) {
    el.$handler = (event) => {
      if (!el.contains(event.target) && binding.expression) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.$handler);
  },
  unbind(el) {
    document.removeEventListener('click', el.$handler);
  },
};
