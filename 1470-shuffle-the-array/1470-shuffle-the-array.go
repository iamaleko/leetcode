func shuffle(nums []int, n int) []int {
  ans := make([]int, n * 2)
  for i, j := 0, 0; i < n; i, j = i + 1, j + 2 {
    ans[j] = nums[i]
    ans[j+1] = nums[i + n]
  }
  return ans
}