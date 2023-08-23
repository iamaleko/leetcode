/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = (nums) => {
  let res = [], last;

  for (const a in nums) {
    res[a] = nums[a - 1] ? res[a - 1] + nums[a] : nums[a];
  }
  for (let b = nums.length - 1; b >= 0; --b) {
    res[b] = Math.abs(res[b] - (nums[b] = nums[b + 1] ? nums[b + 1] + nums[b] : nums[b]));
  }

  return res;
};
