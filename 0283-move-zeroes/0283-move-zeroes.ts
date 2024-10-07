/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let offset = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) { offset++; }
    else if (offset) {
      nums[i - offset] = nums[i];
      nums[i] = 0;
    }
  }
};