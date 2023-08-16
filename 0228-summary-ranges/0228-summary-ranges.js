/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return nums;
  let a = 0, b = 0, r = [];
  while (a < nums.length) {
    if (nums[b] === nums[b + 1] - 1) {
      ++b;
    } else {
      r.push(a === b ? nums[a]+'' : nums[a]+'->'+nums[b]);
      a = ++b;    
    }
  }
  return r;
};