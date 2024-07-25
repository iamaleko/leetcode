// in-place heap sort
function sortArray(nums: number[]): number[] {
  //  heapify
  for (let i = nums.length - 1 << 1; i >= 0; i--) {
    sink(nums, i);
  }

  // sort
  for (let i = nums.length - 1; i > 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    sink(nums, 0, i)
  }

  return nums;
};

function sink(nums: number[], i: number, ln: number = nums.length) {
  let l: number, t: number, r: number;
  while (true) {
    l = i * 2 + 1;
    r = i * 2 + 2;
    t = i;
    if (l < ln && nums[t] < nums[l]) t = l;
    if (r < ln && nums[t] < nums[r]) t = r;
    if (t === i) break;
    [nums[t], nums[i]] = [nums[i], nums[t]];
    i = t;
  }
}