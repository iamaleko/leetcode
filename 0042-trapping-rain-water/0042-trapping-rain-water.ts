function trap(height: number[]): number {
  const n = height.length;
  const r = height.slice();
  for (let i = n-2; i >= 0; i--) {
    r[i] = Math.max(r[i], r[i+1]);
  }
  let ans = 0;
  for (let l = 0, i = 0; i < n; i++) {
    l = Math.max(height[i], l);
    ans += Math.max(0, Math.min(l, r[i]) - height[i]);
  }
  return ans;
};