import (
  "slices"
)

func fourSum(nums []int, target int) [][]int {
  slices.Sort(nums)
  ans := [][]int{}
  n := len(nums)
  if n > 3 {
    for a := 0; a < n - 3; a++ {
      if nums[a] + nums[a+1] + nums[a+2] + nums[a+3] > target { break }
      if a == 0 || nums[a] != nums[a-1] {
        for b := a + 1; b < n - 2; b++ {
          if b == a + 1 || nums[b] != nums[b-1] {
            for c := b + 1; c < n - 1; c++ {
              if c == b + 1 || nums[c] != nums[c-1] {
                for d := c + 1; d < n; d++ {
                  if (d == c+1 || nums[d] != nums[d-1]) && nums[a] + nums[b] + nums[c] + nums[d] == target {
                    ans = append(ans, []int{nums[a], nums[b], nums[c], nums[d]})
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return ans
}