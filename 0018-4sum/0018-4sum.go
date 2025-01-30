import (
  "slices"
)

func fourSum(nums []int, target int) [][]int {
  slices.Sort(nums)
  ans := [][]int{}
  n := len(nums)
  if n > 3 {
    for a := 0; a < n - 3; a++ {
      if a > 0 && nums[a] == nums[a-1] { continue }
      if nums[a] + nums[a+1] + nums[a+2] + nums[a+3] > target { break }
      if nums[a] + nums[n-1] + nums[n-2] + nums[n-3] < target { continue }
      for b := a + 1; b < n - 2; b++ {
        if b > a + 1 && nums[b] == nums[b-1] { continue }
        if nums[a] + nums[b] + nums[b+1] + nums[b+2] > target { break }
        if nums[a] + nums[b] + nums[n-1] + nums[n-2] < target { continue }
        for c := b + 1; c < n - 1; c++ {
          if c > b + 1 && nums[c] == nums[c-1] { continue }
          if nums[a] + nums[b] + nums[c] + nums[c+1] > target { break }
          if nums[a] + nums[b] + nums[c] + nums[n-1] < target { continue }
          for d := c + 1; d < n; d++ {
            if d > c+1 && nums[d] == nums[d-1] { continue }
            if nums[a] + nums[b] + nums[c] + nums[d] > target { break }
            if nums[a] + nums[b] + nums[c] + nums[d] < target { continue }
            ans = append(ans, []int{nums[a], nums[b], nums[c], nums[d]})
          }
        }
      }
    }
  }
  return ans
}