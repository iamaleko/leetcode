/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
  const target = [];
  for (const i in index) {
    target.splice(index[i], 0, nums[i])
  }
  return target;
};