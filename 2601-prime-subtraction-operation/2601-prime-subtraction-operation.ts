function primeSubOperation(nums: number[]): boolean {
  // generate primes
  const max = Math.max(...nums),
        primes: number[] = [];
  main: for (let i = 2; i < max; i++) {
    for (let j = 2; j < i; j++) if (i % j === 0) continue main;
    primes.push(i);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      if (!primes.length) return false;
      let p = 0;
      while (primes[p] >= nums[i] || nums[i] - primes[p] >= nums[i + 1]) {
        if (++p === primes.length || nums[i] - primes[p] <= 0) return false;
      }
      nums[i] -= primes[p];
    }
  }
  return true;
};