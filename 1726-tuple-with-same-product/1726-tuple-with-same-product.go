func tupleSameProduct(nums []int) int {
  d := map[int]bool{}
  for _, num := range nums {
    d[num] = true
  }
  ans := 0
  m := map[int]int{}
  var k int
  for i := 0; i < len(nums)-1; i++ {
    for j := i+1; j < len(nums); j++ {
      k = nums[i] * nums[j]
      if m[k] > 0 {
        ans += 8 * m[k]
      }
      m[k]++
    }
  }
  return ans
}