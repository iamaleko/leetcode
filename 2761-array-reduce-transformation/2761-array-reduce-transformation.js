/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  for (const num of nums) {
    init = fn(init, num);
  }
  return init;
};