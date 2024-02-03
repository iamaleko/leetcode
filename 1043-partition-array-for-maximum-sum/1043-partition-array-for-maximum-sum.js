const maxSumAfterPartitioning = (arr, k) => {
  const mem = [arr[0]];
  for(let i = 1; i < arr.length; ++i) {
    let n = 1, m = Number.MIN_SAFE_INTEGER;
    mem[i] = Number.MIN_SAFE_INTEGER;
    while (n <= Math.min(i + 1, k)) {
      if (m < arr[i - n + 1]) m = arr[i - n + 1];
      let val = (mem[i - n]||0) + m * n;
      if (mem[i] < val) mem[i] = val;
      ++n;
    }
  }
  return mem.at(-1);
};