func totalMoney(n int) int {
  ans := 0
  for add, i := 1, 1; i <= n; i += 1 {
    ans += add
    add += 1
    if i % 7 == 0 {
      add = add - 7 + 1
    }
  }
  return ans
}