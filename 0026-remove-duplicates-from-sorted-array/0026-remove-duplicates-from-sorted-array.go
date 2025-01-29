func removeDuplicates(nums []int) int {
	p := 0
	for _, num := range nums {
		if num != nums[p] {
			p += 1
		}
		nums[p] = num
	}
	return p + 1
}