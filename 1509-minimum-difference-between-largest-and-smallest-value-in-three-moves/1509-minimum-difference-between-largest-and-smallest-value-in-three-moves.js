/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  if (nums.length <= 3) return 0
  nums.sort((a, b) => a - b)
  const r = nums.length - 1;
  return Math.min(
    nums[r - 0] - nums[3],
    nums[r - 1] - nums[2],
    nums[r - 2] - nums[1],
    nums[r - 3] - nums[0]
  )
};