/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  const map = {};
  let cnt = 0;
  for (const i in nums) {
    if (nums[i] in map) {
      for (const _i of map[nums[i]]) {
        if (_i * i % k === 0) ++cnt;
      }
      map[nums[i]].push(i);
    } else {
      map[nums[i]] = [i];
    }
  }
  return cnt;
};