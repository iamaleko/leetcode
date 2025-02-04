func findShortestSubArray(nums []int) int {
  type Item struct {
    First int
    Count int
  }
  m := map[int]*Item{}
  ans, count := 0, 1
  for i, num := range nums {
    if item, ok := m[num]; ok {
      item.Count++
      if item.Count > count {
        ans = i - item.First
        count = item.Count
      } else if item.Count == count {
        ans = min(ans, i - item.First)
      }
    } else {
      m[num] = &Item{ i, 1 }
    }
  }
  return ans + 1
}