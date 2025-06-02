func numEquivDominoPairs(dominoes [][]int) int {
  m := map[int]int{}
  ans := 0
  for i := range(dominoes) {
    if dominoes[i][0] > dominoes[i][1] {
      dominoes[i][0], dominoes[i][1] = dominoes[i][1], dominoes[i][0]
    }
    k := (dominoes[i][0] << 4) + dominoes[i][1]
    if count, ok := m[k]; ok {
      ans += count
    }
    m[k]++
  }
  return ans
}