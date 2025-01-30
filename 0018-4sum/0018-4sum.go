import (
  "slices"
)

func fourSum(nums []int, target int) [][]int {
  slices.Sort(nums)
  ans := [][]int{}
  n := len(nums)
  if n > 3 {
    for i := range n {
      if nums[0] + nums[1] + nums[2] + nums[i] > target {
        nums = nums[:i]
        n = i
        break
      }
    }
    for a := 0; a < n - 3; a++ {
      if nums[a] + nums[a+1] + nums[a+2] + nums[a+3] > target { break }
      if a == 0 || nums[a] != nums[a-1] {
        for b := a + 1; b < n - 2; b++ {
          if nums[a] + nums[b] + nums[b+1] + nums[b+2] > target { break }
          if b == a + 1 || nums[b] != nums[b-1] {
            for c := b + 1; c < n - 1; c++ {
              if nums[a] + nums[b] + nums[c] + nums[c+1] > target { break }
              if c == b + 1 || nums[c] != nums[c-1] {
                for d := c + 1; d < n; d++ {
                  if nums[a] + nums[b] + nums[c] + nums[d] > target { break }
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