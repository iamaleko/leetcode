/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const res = [];
  let a = 0, b = n;
  while (n--) {
    res.push(nums[a++]);
    res.push(nums[b++]);
  }
  return res;
};