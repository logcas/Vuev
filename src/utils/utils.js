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
  findChildrenComponent(parent, ...childTagName) {
    const childrens = [];
    if (!parent || !childTagName) {
      return childrens;
    }
    const searchChild = (node, tags) => {
      childrens.push(...node.$children.filter(child => tags.includes(child.$options.name)));
      node.$children.forEach(child => searchChild(child, tags));
    };
    searchChild(parent, childTagName);
    return childrens;
  },
  findParentComponent(child, parentTagName) {
    if (!child || !parentTagName) {
      return null;
    }
    let node = child.$parent;
    let parent = null;
    while (node) {
      if (node.$options.name === parentTagName) {
        parent = node;
        break;
      }
      node = node.$parent;
    }
    return parent;
  },
};
