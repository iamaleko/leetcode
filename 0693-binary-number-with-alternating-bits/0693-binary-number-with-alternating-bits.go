func hasAlternatingBits(n int) bool {
  b := n & 1
  n >>= 1
  for n > 0 {
    if b == n & 1 { return false }
    b = n & 1
    n >>= 1
  }
  return true
}