func minZeroArray(nums []int, queries [][]int) int {
  n, m := len(nums), len(queries)
  apply := make([]int, n)
  var p, d, l, r, v int
  for i, num := range nums {
    for num - d - apply[i] > 0 {
      if p == m {
        return -1
      }
      l, r, v = queries[p][0], queries[p][1] + 1, queries[p][2]
      if r > i {
        if i > l {
          l = i
        }
        apply[l] += v
        if r < n {
          apply[r] -= v
        }
      }
      p++
    }
    d += apply[i]
  }
  return p
}