func minBitFlips(start int, goal int) int {
  ans := 0
  start ^= goal
  for start > 0 {
    ans += start & 1
    start >>= 1
  }
  return ans
}