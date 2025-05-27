func differenceOfSums(n int, m int) int {
  ans := 0
  for n > 0 {
    if n % m == 0 {
      ans -= n
    } else {
      ans += n
    }
    n--
  }
  return ans
}