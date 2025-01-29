import "slices"

func threeSum(nums []int) [][]int {
  n := len(nums)-1
  ans := [][]int{}
  slices.Sort(nums)
  for i := range n-1 {
    if i > 0 && nums[i] == nums[i-1] { continue }
    target, j, k := -nums[i], i+1, n
    for j < k {
      switch {
        case nums[j] + nums[k] == target:
          ans = append(ans, []int{nums[i], nums[j], nums[k]})
          j++
          for j<k && nums[j] == nums[j-1] { j++ }
        case nums[j] + nums[k] < target:
          j++
        default:
          k--
      }
    }
  }
  return ans
}