/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, i = 0) => {
  if (nums[i] === true || nums[i] === false) return nums[i];
  if (i === nums.length - 1) return nums[i] = true;
  if (i > nums.length - 1) return nums[i] = false;
  let jump = nums[i];
  while (jump) {
    if (i + jump < nums.length && canJump(nums, i + jump)) {
      return true;
    }
    --jump;
  }
  return nums[i] = false;
};