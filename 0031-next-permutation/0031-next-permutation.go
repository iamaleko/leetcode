import (
  "slices"
)

func nextPermutation(nums []int)  {
  n := len(nums)
  i, j := n - 2, n - 1
  st, p := []int{ j }, 0
  for i >= 0 {
    if nums[i] < nums[st[p]] {
      for p >= 0 && nums[i] < nums[st[p]] { p-- }
      j = st[p+1]
      break
    } else if nums[i] > nums[st[p]] {
      st = append(st, i)
      p++
    }
    i--
  }
  if i < 0 {
    slices.Sort(nums)
  } else {
    nums[j], nums[i] = nums[i], nums[j]
    slices.Sort(nums[i+1:])
  }
}