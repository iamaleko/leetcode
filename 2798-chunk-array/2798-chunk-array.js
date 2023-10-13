/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; ++i) {
    if ((i + 1) % size === 0) res.push(arr.slice(i - size + 1, i + 1))
  }
  if (arr.length % size !== 0) res.push(arr.slice(arr.length - arr.length % size));
  return res;
};
