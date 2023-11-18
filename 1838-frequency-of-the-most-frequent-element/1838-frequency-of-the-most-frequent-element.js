/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = (nums, k) => {
  nums.sort((a,b) => a - b);
  
  let l = 0, r = 0, sum = 0, res = 0;
  for (; r < nums.length; ++r) {
    sum += nums[r];
    while ((r - l + 1) * nums[r] - sum > k) {
      sum -= nums[l++];
    }
    if (r - l + 1 > res) res = r - l + 1;
  }
  
  return res;
};

