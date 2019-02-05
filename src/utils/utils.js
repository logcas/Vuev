export const getType = function getType(obj) {
  const types = {
    '[object Array]': 'array',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Symbol]': 'symbol',
    '[object Function]': 'function',
    '[object Object]': 'object',
  };
  return types[Object.prototype.toString.call(obj)];
};
export const isType = obj => type => getType(obj) === type;
export default {
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
