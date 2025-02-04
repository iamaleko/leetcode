func maxAscendingSum(nums []int) int {
  ans, sum := nums[0], nums[0]
  for i := 1; i < len(nums); i++ {
    if nums[i-1] >= nums[i] {
      ans, sum = max(ans, sum), 0
    }
    sum += nums[i]
  }
  return max(ans, sum)
}