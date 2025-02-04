func firstMissingPositive(nums []int) int {
  min, n := math.MaxInt, len(nums)
  for _, num := range nums {
    if num > 0 && num < min {
      min = num
    }
  } 
  if min > 1 {
    return 1
  }
  for i, _ := range nums {
    for nums[i]-1 != i {
      if nums[i]-1 < 0 || nums[i]-1 >= n || nums[nums[i]-1] == nums[i] {
        nums[i] = 0
        break
      } else {
        nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
      }
    }
  }
  for i, num := range nums {
    if num == 0 {
      return i+1
    }
  }
  return n+1
}