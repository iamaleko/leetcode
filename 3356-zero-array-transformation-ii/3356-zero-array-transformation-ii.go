func minZeroArray(nums []int, queries [][]int) int {
  n, m := len(nums), len(queries)
  apply := make([]int, n)
  pos, dec := 0, 0
  for i, num := range nums {
    for num - (dec + apply[i]) > 0 {
      if pos == m {
        return -1
      }
      if queries[pos][1] >= i {
        apply[max(i, queries[pos][0])] += queries[pos][2]
        if queries[pos][1] + 1 < n {
          apply[queries[pos][1] + 1] -= queries[pos][2]
        }
      }
      pos++
    }
    dec += apply[i]
  }
  return pos
}