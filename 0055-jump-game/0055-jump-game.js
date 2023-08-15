/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, i = 0, mem = {}) => {
  if (i in mem) return mem[i];
  if (i === nums.length - 1) return mem[i] = true;
  if (i > nums.length - 1) return mem[i] = false;
  let jump = nums[i];
  while (jump) {
    if (canJump(nums, i + jump, mem)) return true;
    --jump;
  }
  return mem[i] = false;
};