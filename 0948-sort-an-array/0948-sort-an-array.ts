function sortArray(nums: number[]): number[] {
  function sink(i: number, ln: number) {
    const l = i * 2 + 1,
          r = i * 2 + 2;
    let t = i;
    if (l < ln && nums[t] < nums[l]) t = l;
    if (r < ln && nums[t] < nums[r]) t = r;
    if (t !== i) {
      [nums[t], nums[i]] = [nums[i], nums[t]];
      sink(t, ln);
    }
  }

  for (let i = (nums.length - 1) << 1; i > -1; i--) {
    sink(i, nums.length);
  }

  for (let i = 1; i < nums.length; i++) {
    [nums[0], nums[nums.length - i]] = [nums[nums.length - i], nums[0]];
    sink(0, nums.length - i)
  }

  return nums;
};