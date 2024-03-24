const findDuplicate = (nums) => {
  let s = nums[0], f = nums[0];
  while (true) {
    s = nums[s];
    f = nums[nums[f]];
    if (s === f) break;
  }
  f = nums[0];
  while(f !== s) {
    s = nums[s]
    f = nums[f]
  }

  return s;
};