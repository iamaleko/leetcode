/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = (nums) => {
  nums.sort((a,b) => a - b);
  let max = 0, l = 0, r = nums.length - 1;
  while (l < r) {
    if (max < nums[l] + nums[r]) max = nums[l] + nums[r];
    ++l;
    --r;
  }
  return max;
};
