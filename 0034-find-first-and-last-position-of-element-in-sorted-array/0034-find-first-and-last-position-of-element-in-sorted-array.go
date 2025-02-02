func searchRange(nums []int, target int) []int {
	if len(nums) == 0 || nums[0] > target {
		return []int{-1, -1}
	}
	var (
		c1, c2 int
		l1, l2 int = 0, 0
		r1, r2 int = len(nums) - 1, len(nums) - 1
	)
	for l1 < r1 || l2 < r2 {
		if l1 < r1 {
			c1 = (l1 + r1) / 2
			if nums[c1] < target {
				l1 = c1 + 1
			} else {
				r1 = c1 - 1
			}
		}
		if l2 < r2 {
			c2 = (l2 + r2) / 2
			if nums[c2] > target {
				r2 = c2 - 1
			} else {
				l2 = c2 + 1
			}
		}
	}
	if nums[l1] != target {
		l1++
	}
	if nums[l2] != target {
		l2--
	}
	if l1 == len(nums) || nums[l1] != target {
		return []int{-1, -1}
	}
	return []int{l1, l2}
}