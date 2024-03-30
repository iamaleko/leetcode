const subarraysWithKDistinct = (nums, k) => {
  const mem = {};
  let p = 0, w = k - 1, res = 0, d = true, size = 0;
  for (let i = 0; i < nums.length; i++) mem[nums[i]] = 0;
  for (let i = 0; i < k; i++) if(mem[nums[i]]++ === 0) size++;
  while (w < nums.length) {
    if (d) {
      while (p + w < nums.length) {
        if (size === k) res++;
        if (p + w + 1 < nums.length) {
          if (mem[nums[p]] && mem[nums[p]]-- === 1) size--;
          if (mem[nums[p + w + 1]]++ === 0) size++;
        }
        p++;
      }
      d = !d;
      w++;
      p = nums.length - w - 1;
      if (mem[nums[p]]++ === 0) size++;
    } else {
      while (p >= 0) {
        if (size === k) res++;
        if (p > 0) {
          if (mem[nums[p + w]] && mem[nums[p + w]]-- === 1) size--;
          if (mem[nums[p - 1]]++ === 0) size++;
        }
        p--;
      }
      d = !d;
      w++;
      p = 0;
      if (mem[nums[p + w]]++ === 0) size++;
    }
  }
  return res;
};