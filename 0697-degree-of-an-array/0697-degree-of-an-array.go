func findShortestSubArray(nums []int) int {
  type Item struct {
    First int
    Last int
    Count int
  }
  m := map[int]*Item{}
  ans, count := 1, 1
  for i, num := range nums {
    if _, ok := m[num]; ok {
      m[num].Count++
      m[num].Last = i
      if m[num].Count > count {
        ans = m[num].Last - m[num].First + 1
        count = m[num].Count
      } else if m[num].Count == count {
        ans = min(ans, m[num].Last - m[num].First + 1)
      }
    } else {
      m[num] = &Item{ i, i, 1 }
    }
  }
  return ans
}