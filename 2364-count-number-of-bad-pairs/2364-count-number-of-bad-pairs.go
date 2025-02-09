func countBadPairs(nums []int) int64 {
  count := map[int]int{}
  for i, num := range nums {
    nums[i] = num - i
    count[nums[i]]++
  }
  n, ans := len(nums), 0
  for i, num := range nums {
    ans += n - i - count[num]
    count[num]--
  }
  return int64(ans)
}