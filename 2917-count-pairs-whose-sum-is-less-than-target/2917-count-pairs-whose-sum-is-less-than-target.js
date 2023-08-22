/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = (nums, target) => {
  let pairs = 0;
  for (const i in nums) {
    for (let j = +i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] < target) {
        ++pairs;
      }
    } 
  }
  return pairs;
};