func binaryGap(n int) int {
  ans := 0
  l, r := 1, math.MaxInt
  for n > 0 {
    if n & 1 == 1 {
      ans, r = max(ans, l - r), l
    }
    n >>= 1
    l++
  }
  return ans 
}