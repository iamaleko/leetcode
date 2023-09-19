/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const sub = [];
  for (const num of nums) {
    let l = 0, r = sub.length - 1, c;
    while (l <= r) {
      c = l + r >>> 1;
      if (sub[c] >= num) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    }
    sub[l] = num;
  }
  return sub.length;
};