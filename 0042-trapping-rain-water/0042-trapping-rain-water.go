func trap(height []int) int {
  n := len(height)
  r := slices.Clone(height)
  for i := n-2; i >= 0; i-- {
    r[i] = max(r[i], r[i+1])
  }
  ans := 0
  for l, i := 0, 0; i < n; i++ {
    l = max(height[i], l)
    ans += max(0, min(l, r[i]) - height[i])
  }
  return ans
}