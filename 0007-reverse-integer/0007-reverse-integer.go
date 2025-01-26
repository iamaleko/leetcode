func reverse(x int) int {
  sign, ans := 1, 0
  if x < 0 {
    sign = -1
    x = -x
  }
  for x != 0 {
    ans = ans * 10 + x % 10
    x /= 10
  }
  ans *= sign
  if ans < -(1 << 31) || ans > (1 << 31) - 1 {
    return 0
  }
  return ans
}