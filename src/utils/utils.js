export default {
  getStyle(elem, attr) {
    const win = document.defaultView || window;
    let attrName;
    if (attr === 'float') {
      attrName = 'cssFloat';
    } else {
      attrName = attr;
    }
    return elem.style[attrName] || win.getComputedStyle(elem)[attrName];
  },
};
