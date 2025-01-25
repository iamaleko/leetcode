import (
  "slices"
)

func lexicographicallySmallestArray(nums []int, limit int) []int {
  // split into backward sorted groups and build group index
  sorted := slices.Clone(nums)
  slices.SortFunc(sorted, func(a int, b int) int { return a - b })
  groups := [][]int{ []int{ sorted[0] } }
  index := map[int]int{ sorted[0]: 0 }
  for i := 1; i < len(sorted); i++ {
    j := len(groups) - 1
    if sorted[i] - groups[j][len(groups[j]) - 1] <= limit {
      groups[j] = append(groups[j], sorted[i])
    } else {
      groups = append(groups, []int{ sorted[i] })
    }
    index[sorted[i]] = len(groups) - 1
  }

  // replace elements in input array
  for i := 0; i < len(nums); i++ {
    j := index[nums[i]]
    nums[i] = groups[j][0]
    groups[j] = groups[j][1:]
  }

  return nums
}