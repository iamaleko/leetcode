/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i += 2) {
    while(nums[i]--) res.push(nums[i + 1]);
  }
  return res;
};