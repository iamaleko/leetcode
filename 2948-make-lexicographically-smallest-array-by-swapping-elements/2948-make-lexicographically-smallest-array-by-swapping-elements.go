import (
  "slices"
)

func lexicographicallySmallestArray(nums []int, limit int) []int {
  // split into backward sorted groups and build group index
  sorted := slices.Clone(nums)
  slices.Sort(sorted)
  groups := [][]int{{ sorted[0] }}
  index := map[int]int{ sorted[0]: 0 }
  for _, num := range sorted[1:] {
    j := len(groups) - 1
    if num - groups[j][len(groups[j]) - 1] <= limit {
      groups[j] = append(groups[j], num)
    } else {
      groups = append(groups, []int{ num })
      j++
    }
    index[num] = j
  }

  // replace elements in input array
  for i, num := range nums {
    j := index[num]
    nums[i] = groups[j][0]
    groups[j] = groups[j][1:]
  }

  return nums
}