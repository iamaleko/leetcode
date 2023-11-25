/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = (nums) => {
  let l = 0, r = 0;
  for (const num of nums) r += num;
  
  const res = [];
  for (const i in nums) {
    res.push(Math.abs(l - nums[i] * i) + Math.abs(r - nums[i] * (nums.length - i)));
    l += nums[i];
    r -= nums[i];
  }
  
  return res;
};