func cantor(a int, b int) int {
  return (a + b) * (a + b + 1) / 2 + b
}
func numEquivDominoPairs(dominoes [][]int) int {
  m := map[int]int{}
  ans := 0
  for i := range(dominoes) {
    if dominoes[i][0] > dominoes[i][1] {
      dominoes[i][0], dominoes[i][1] = dominoes[i][1], dominoes[i][0]
    }
    k := cantor(dominoes[i][0], dominoes[i][1])
    if count, ok := m[k]; ok {
      ans += count
    }
    m[k]++
  }
  return ans
}