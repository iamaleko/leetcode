func firstMissingPositive(nums []int) int {
	for i, _ := range nums {
		for nums[i] != 0 && nums[i]-1 != i {
			if nums[i]-1 < 0 || nums[i]-1 >= len(nums) || nums[nums[i]-1] == nums[i] {
				nums[i] = 0
			} else {
				nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
			}
		}
	}
	for i, num := range nums {
		if num == 0 {
			return i + 1
		}
	}
	return len(nums) + 1
}