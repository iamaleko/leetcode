func getConcatenation(nums []int) []int {
  n := len(nums)
  ans := make([]int, n * 2)
  for i, num := range nums {
    ans[i] = num
    ans[i+n] = num
  }
  return ans
}