/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  let end = 0;
  for (const num of nums) {
    let l = 0, r = end, c;
    while (l <= r) {
      c = l + r >>> 1;
      if (nums[c] >= num) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    }
    nums[l] = num;
    if (end < l) end = l;
  }
  return end + 1;
};