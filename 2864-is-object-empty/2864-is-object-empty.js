/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  return obj instanceof Array ? obj.length === 0 : Object.keys(obj).length === 0;
};