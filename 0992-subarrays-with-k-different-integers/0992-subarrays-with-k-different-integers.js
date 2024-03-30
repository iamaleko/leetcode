const subarraysWithKDistinct = (nums, k) => {
  const subarraysWithKDistinctOrLess = (k) => {
    let l = 0, r = 0, m = {}, res = 0;
    while (r < nums.length) {
      m[nums[r]] ? m[nums[r]]++ : (k--, m[nums[r]] = 1);
      while (k < 0) if (m[nums[l++]]-- === 1) k++;
      res += r++ - l + 1;
    }
    return res;
  };
  return subarraysWithKDistinctOrLess(k) - subarraysWithKDistinctOrLess(k - 1);
}

// const subarraysWithKDistinct = (nums, k) => {
//   const mem = {};
//   let p = 0, w = k - 1, res = 0, d = true, size = 0;
//   for (let i = 0; i < nums.length; i++) mem[nums[i]] = 0;
//   for (let i = 0; i < k; i++) if(mem[nums[i]]++ === 0) size++;
//   while (w < nums.length) {
//     if (d) {
//       while (p + w < nums.length) {
//         if (size === k) res++;
//         if (p + w + 1 < nums.length) {
//           if (mem[nums[p]] && mem[nums[p]]-- === 1) size--;
//           if (mem[nums[p + w + 1]]++ === 0) size++;
//         }
//         p++;
//       }
//       d = !d;
//       w++;
//       p = nums.length - w - 1;
//       if (mem[nums[p]]++ === 0) size++;
//     } else {
//       while (p >= 0) {
//         if (size === k) res++;
//         if (p > 0) {
//           if (mem[nums[p + w]] && mem[nums[p + w]]-- === 1) size--;
//           if (mem[nums[p - 1]]++ === 0) size++;
//         }
//         p--;
//       }
//       d = !d;
//       w++;
//       p = 0;
//       if (mem[nums[p + w]]++ === 0) size++;
//     }
//   }
//   return res;
// };