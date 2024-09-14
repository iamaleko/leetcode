import (
  "slices"
)

func longestSubarray(nums []int) int {
  maxNum := slices.Max(nums)
  ans, contiguous := 0, 0
  for _, num := range nums {
    if num == maxNum {
      contiguous++
      if contiguous > ans {
        ans = contiguous
      }
    } else {
      contiguous = 0
    }
  }
  return ans 
}