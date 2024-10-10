// O(n * 2), monotonic stack, PASS
function maxWidthRamp(nums: number[]): number {
  if (!nums.length) return 0;
  const st: number[] = [0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[st[st.length - 1]] >= nums[i]) st.push(i);
  }
  let ans = 0;
  for (let i = nums.length - 1; i > 0 && st.length; i--) {
    while (st.length && nums[st[st.length - 1]] <= nums[i]) {
      ans = Math.max(ans, i - st.pop());
    }
  }
  return ans;
};

// O(n * log n), tracking min, PASS
// function maxWidthRamp(nums: number[]): number {
//   const pairs = nums.map((v, i) => [i, v]).sort((a, b) => a[1] - b[1]);
//   let ans = 0, min = nums.length;
//   for (const [i, ] of pairs) {
//     if (i < min) {
//       min = i;
//     } else if (ans < i - min) {
//       ans = i - min
//     }
//   }
//   return ans;
// };

// O(n * n), brute force, TLE 100/101
// function maxWidthRamp(nums: number[]): number {
//   let ans = 0;
//   for (let l = 0; l < nums.length - 1; l++) {
//     for (let r = nums.length - 1; r > l + ans; r--) {
//       if (nums[l] <= nums[r] && r - l > ans) ans = r - l;
//     }
//   }
//   return ans;
// };