function primeSubOperation(nums: number[]): boolean {
  // generate primes
  const max = Math.max(...nums),
        primes: number[] = [];
  main: for (let i = 1; i < max; i++) {
    for (let j = 2; j < i; j++) if (i % j === 0) continue main;
    primes.push(i);
  }
  primes.reverse();
  for (let i = nums.length - 2; i >= 0; i--) {
    let p = primes.length - 1;
    while (primes[p] > nums[i] || nums[i] - primes[p] >= nums[i + 1]) {
      p--;
      if (p < 0 || nums[i] - primes[i] <= 0) return false;
    }
    nums[i] -= primes[p];
  }
  return true;
};