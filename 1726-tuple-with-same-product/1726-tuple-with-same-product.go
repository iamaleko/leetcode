func tupleSameProduct(nums []int) int {
  ans, k, n, m := 0, 0, len(nums), map[int]int{}
  for i := 0; i < n-1; i++ {
    for j := i+1; j < n; j++ {
      k = nums[i] * nums[j]
      if m[k] > 0 {
        ans += 8 * m[k]
      }
      m[k]++
    }
  }
  return ans
}