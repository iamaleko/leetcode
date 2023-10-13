/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  const res = [];
  for (let i = 1; i <= arr.length; ++i) {
    if (i % size === 0) res.push(arr.slice(i - size, i))
  }
  if (arr.length % size !== 0) res.push(arr.slice(arr.length - arr.length % size));
  return res;
};
