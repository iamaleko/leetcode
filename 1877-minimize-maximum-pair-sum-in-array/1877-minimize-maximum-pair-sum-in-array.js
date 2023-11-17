/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = (nums) => {
  nums.sort((a,b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length / 2; ++i) {
    if (max < nums[i] + nums.at(-1 - i)) max = nums[i] + nums.at(-1 - i);
  }
  return max;
};
