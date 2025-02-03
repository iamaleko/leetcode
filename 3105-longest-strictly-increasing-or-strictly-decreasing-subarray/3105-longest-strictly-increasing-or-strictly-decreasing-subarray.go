func longestMonotonicSubarray(nums []int) int {
  inc, dec, ans := 1, 1, 1
  for i := 1; i < len(nums); i++ {
    if nums[i] > nums[i-1] {
      inc++
      dec = 1
      ans = max(ans, inc)
    } else if nums[i] < nums[i-1] {
      dec++
      inc = 1
      ans = max(ans, dec)
    } else if inc > 1 || dec > 1 {
      inc = 1
      dec = 1
    }
  }
  return ans
}