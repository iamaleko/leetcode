import (
  "slices"
)

func lexicographicallySmallestArray(nums []int, limit int) []int {
  // split into backward sorted groups and build group index
  sorted := slices.Clone(nums)
  slices.Sort(sorted)
  index := map[int]int{ sorted[0]: 0 }
  groups := [][]int{{ sorted[0] }}
  for _, num := range sorted[1:] {
    group := &groups[len(groups) - 1]
    if num - (*group)[len(*group) - 1] <= limit {
      *group = append(*group, num)
    } else {
      groups = append(groups, []int{ num })
    }
    index[num] = len(groups) - 1
  }
  fmt.Println(groups)

  // replace elements in input array
  for i, num := range nums {
    j := index[num]
    nums[i] = groups[j][0]
    groups[j] = groups[j][1:]
  }

  return nums
}