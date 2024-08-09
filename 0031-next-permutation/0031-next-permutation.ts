/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let k = 0;
  main: for (let i = nums.length - 2; i > -1; i--) {
    let diff = Infinity, t = null;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && diff > nums[j] - nums[i]) {
        diff = nums[j] - nums[i];
        t = j;
      }
    }
    if (t !== null) {
      [nums[t], nums[i]] = [nums[i], nums[t]];
      k = ++i;
      break main;
    }
  }
  // bubble sort ascending from k
  for (let i = k; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];
    }
  }
};