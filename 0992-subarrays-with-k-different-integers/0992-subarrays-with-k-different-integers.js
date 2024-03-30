const subarraysWithKDistinct = (nums, k) => {
  const sw = (k) => { // k elements or less
    let l = 0, r = 0, m = {}, s = 0, res = 0;
    while (r < nums.length) {
      if (m.hasOwnProperty(nums[r])) {
        m[nums[r]]++;
      } else {
        m[nums[r]] = 1;
        s++;
      }
      while (s > k) {
        if (m[nums[l]]-- === 1) s--;
        l++;
      }
      res += r - l + 1;
      r++;
    }
    return res;
  };
  return sw(k) - sw(k - 1);
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