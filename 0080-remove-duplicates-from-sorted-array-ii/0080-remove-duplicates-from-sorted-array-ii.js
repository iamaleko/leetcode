/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let shift = 0;
  for (const i in nums) {
    if (nums[i] === nums[i - shift - 2]) {
      ++shift;
      continue;
    }
    if (shift) {
      nums[i - shift] = nums[i];
    }
  }
  return nums.length - shift;
};