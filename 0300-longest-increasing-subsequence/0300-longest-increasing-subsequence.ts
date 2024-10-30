function lengthOfLIS(nums: number[]): number {
  const lis: number[] = [];
  const insert = (num: number): number => {
    let l = 0, r = lis.length - 1, c: number;
    while (l <= r) {
      c = l + r >>> 1;
      if (lis[c] < num) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    lis[l] = num;
    return lis.length;
  };

  let max = 0;
  for (const num of nums) max = Math.max(max, insert(num));

  return max;
};