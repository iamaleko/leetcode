func numberOfAlternatingGroups(colors []int, k int) int {
  ans, cur := 0, 1
  n := len(colors)
  m := n + k - 1
  for i := 1; i < m; i++ {
    if colors[i % n] != colors[(i - 1) % n] {
      cur++
    } else {
      cur = 1
    }
    if cur == k {
      ans++
      cur--
    }
  }
  return ans
}