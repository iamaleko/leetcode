func check(nums []int) bool {
  nums = append(nums, nums[0])
  for i, fold := 1, false; i < len(nums); i++ {
    if nums[i] < nums[i-1] {
      if fold {
        return false
      }
      fold = true
    }
  }
  return true
}