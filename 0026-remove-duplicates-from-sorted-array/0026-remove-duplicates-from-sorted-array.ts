function removeDuplicates(nums: number[]): number {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j - 1]) {
      if (i !== j) nums[j] = nums[i];
      j++;
    }
  }
  return j;
};