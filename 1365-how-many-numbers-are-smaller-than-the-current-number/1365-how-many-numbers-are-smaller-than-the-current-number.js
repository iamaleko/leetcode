/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  const map = {};
  Array.from(nums).sort((a, b) => b - a).forEach((e,i) => map[e] = nums.length - i - 1);
  return nums.map((e) => map[e]);
};