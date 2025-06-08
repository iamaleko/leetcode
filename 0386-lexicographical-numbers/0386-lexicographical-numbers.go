func lexicalOrder(n int) []int {
  ans := make([]int, n)
  ans[0] = 1
  for i, d := 1, 1; i < n; i++ {
    if d * 10 <= n {
      d *= 10
    } else {
      for d % 10 == 9 || d >= n {
        d /= 10
      }
      d++
    }
    ans[i] = d
  } 
  return ans
}