import "slices"

func threeSum(nums []int) [][]int {
	n := len(nums) - 1
	ans := [][]int{}
	slices.Sort(nums)
	for i := range n - 1 {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		j, k := i+1, n
		for j < k {
			switch sum := nums[j] + nums[k] + nums[i]; {
        case sum == 0:
          ans = append(ans, []int{nums[i], nums[j], nums[k]})
          for j++; j < k && nums[j] == nums[j-1]; {
            j++
          }
        case sum < 0:
          j++
        default:
          k--
			}
		}
	}
	return ans
}