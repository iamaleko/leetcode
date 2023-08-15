// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// const canJump = (nums, i = 0) => {
//   if (nums[i] === true || nums[i] === false) return nums[i];
//   if (i >= nums.length - 1) return nums[i] = true;
//   let jump = nums[i];
//   while (jump) {
//     if (canJump(nums, i + jump)) {
//       return true;
//     }
//     --jump;
//   }
//   return nums[i] = false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i + nums[i] > max) max = i + nums[i];
    if (max >= nums.length - 1) return true;
    if (max === i && !nums[i]) return false;
  }
  return false;
};