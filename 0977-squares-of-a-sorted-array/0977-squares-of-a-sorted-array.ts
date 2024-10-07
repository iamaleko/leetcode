function sortedSquares(nums: number[]): number[] {
  const n = nums.length, ans: number[] = new Array(n);
  let p = 0, l = -1, r = 0;
  while (nums[r] < 0) l = r++;
  while (p < n) ans[p++] = l === -1 || r < n && -nums[l] > nums[r] ? nums[r++] ** 2 : nums[l--] ** 2;
  return ans;
};

// function sortedSquares(nums: number[]): number[] {
//   const a: number[] = [],
//         b: number[] = [],
//         c: number[] = [];
//   for (const num of nums) num < 0 ? a.push(num ** 2) : b.push(num ** 2);
//   a.reverse();
//   let i = 0, j = 0;
//   while (i < a.length && j < b.length) a[i] < b[j] ? c.push(a[i++]) : c.push(b[j++]);
//   return i === a.length ? c.concat(b.slice(j)) : c.concat(a.slice(i))
// };