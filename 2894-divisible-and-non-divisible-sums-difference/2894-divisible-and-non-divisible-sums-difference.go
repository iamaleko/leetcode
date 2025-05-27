func differenceOfSums(n int, m int) int {
  a, b := 0, 0
  for i := 1; i <= n; i++ {
    if i % m == 0 {
      b += i
    } else {
      a += i
    }
  }
  return a - b
}