func tupleSameProduct(nums []int) int {
  ans, m := 0, map[int]int{}
  for i, a := range nums {
    for _, b := range nums[i+1:] {
      if m[a * b] > 0 {
        ans += 8 * m[a * b]
      }
      m[a * b]++
    }
  }
  return ans
}