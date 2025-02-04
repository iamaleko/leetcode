func findShortestSubArray(nums []int) int {
  type Item struct {
    First int
    Count int
  }
  m := map[int]*Item{}
  ans, count := 0, 1
  for i, num := range nums {
    if _, ok := m[num]; ok {
      m[num].Count++
      if m[num].Count > count {
        ans = i - m[num].First
        count = m[num].Count
      } else if m[num].Count == count {
        ans = min(ans, i - m[num].First)
      }
    } else {
      m[num] = &Item{ i, 1 }
    }
  }
  return ans + 1
}