/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = (nums) => {
  if (nums.length === 1) return 1;
  let sum = nums.length, window = 2, pos = 0;
  while (window <= nums.length) {
    if (pos + window > nums.length) {
      pos = 0;
      ++window;
    } else {
      sum += Math.pow(new Set(nums.slice(pos, pos + window)).size, 2);
      ++pos;
    }
  }
  return sum;
};