/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let sum = 0;
  for (const num of nums) sum += num;
  return ((nums.length + 1) * nums.length) / 2 - sum;
};