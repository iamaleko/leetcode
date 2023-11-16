/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = (nums) => {
  nums = nums.map(n => parseInt(n, 2));
  nums.sort((a, b) => a - b);
  const res = (num) => num.toString(2).padStart(nums.length, 0);
  
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] - 1 != nums[i - 1]) {
      return res(nums[i] - 1);
    }
  }
  
  if (nums[0] > 0) {
    return res(nums[0] - 1);
  } else {
    return res(nums.at(-1) + 1);
  }
};