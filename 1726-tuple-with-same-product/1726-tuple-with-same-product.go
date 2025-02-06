func tupleSameProduct(nums []int) int {
  ans, k, m := 0, 0, map[int]int{}
  for i, a := range nums {
    for _, b := range nums[i+1:] {
      k = a * b
      if m[k] > 0 {
        ans += 8 * m[k]
      }
      m[k]++
    }
  }
  return ans
}