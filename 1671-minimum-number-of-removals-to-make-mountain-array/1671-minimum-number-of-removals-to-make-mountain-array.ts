function minimumMountainRemovals(nums: number[]): number {
  const n = nums.length,
        ltr: number[] = new Array(nums.length).fill(0),
        rtl: number[] = new Array(nums.length).fill(0),
        lis: number[] = [];

  const insert = (t: number): number => {
    let l = 0, r = lis.length - 1, c: number;
    while (l <= r) {
      c = l + r >>> 1;
      if (lis[c] < t) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    lis[l] = t;
    return l;
  };

  for (let i = 0; i < n; i++) ltr[i] = insert(nums[i]);
  lis.length = 0;
  for (let i = n - 1; i > -1; i--) rtl[i] = insert(nums[i]);
  let max = 0;
  for (let i = 0; i < n; i++) if (ltr[i] && rtl[i]) max = Math.max(ltr[i] + rtl[i], max);

  return n - max - 1;
};

// > 4,5,1,2,3,2,2,1
//   1,2,1,2,3,2,2,1 >  O(n log n) lis ltr
//   4,4,1,2,3,2,2,1 <  O(n log n) lis rtl
//   5,6,2,4,6,4,4,2 +  O(n) lis sum
//     a     b
//   4,5,3,2,1 a
//   1,2,3,2,1 b
