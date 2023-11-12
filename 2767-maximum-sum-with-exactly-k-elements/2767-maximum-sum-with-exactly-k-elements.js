/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let sum = 0, max = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    if (max < num) max = num;
  }
  while (k-- > 0) {
    sum += max;
    ++max;
  }
  return sum;
};