/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumIndicesWithKSetBits = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    let n = i, cnt = 0;
    while (n) {
      if (n & 1) ++cnt;
      n = n >>> 1;
    }
    if (cnt === k) sum += nums[i];
  }
  return sum;
};