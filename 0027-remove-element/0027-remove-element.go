func removeElement(nums []int, val int) int {
  p := 0
  for i := range len(nums) {
    if nums[i] != val {
      nums[p] = nums[i]
      p += 1
    }
  }
  return p   
}