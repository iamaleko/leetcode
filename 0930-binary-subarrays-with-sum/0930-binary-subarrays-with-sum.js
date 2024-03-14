const numSubarraysWithSum = (nums, goal) => {
  let p = 0, w = 0, res = 0, sum = 0;
  while (p < nums.length) {
    while (w < nums.length - p) {
      sum += nums[p + w];
      if (sum === goal) res++;
      if (sum > goal) break;
      w++;
    }
    sum = 0;
    w = 0;
    p++;
  }
  return res;
};