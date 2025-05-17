func sortColors(nums []int)  {
  lo := 0
  mid := 0
  hi := len(nums) - 1
  for mid <= hi {
    if nums[mid] == 1 {
      mid++
    } else if nums[mid] == 0 {
      nums[lo], nums[mid] = nums[mid], nums[lo]
      mid++
      lo += 1
    } else if nums[mid] == 2 {
      nums[hi], nums[mid] = nums[mid], nums[hi]
      hi--
    }
  }
}