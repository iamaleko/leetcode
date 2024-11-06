function canSortArray(nums: number[]): boolean {
  // prepare
  const pairs = nums.map((v) => {
    let bits = 0, n = v;
    while (n) {
      bits++;
      n &= n - 1;
    }
    return [v, bits];
  });
  // sort
  pairs.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : 0);
  // check
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i - 1][0] > pairs[i][0]) return false;
  }
  return true;
};