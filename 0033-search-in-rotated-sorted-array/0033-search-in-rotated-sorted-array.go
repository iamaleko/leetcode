func search(nums []int, target int) int {
    l, r := 0, len(nums) - 1
    // if array is rotated
    if nums[0] > nums[r] {
      // find rotation point
      for l < r {
        c := (l + r) / 2
        if nums[c] > nums[l] {
          l = c
        } else {
          r = c
        }
      }
      // select search side
      if target < nums[0] {
        l++
        r = len(nums) - 1
      } else {
        r = l
        l = 0
      }
    }
    // perform target search
    if target >= nums[l] && target <= nums[r] {
      for l < r {
        c := (l + r) / 2
        if nums[c] < target {
          l = c + 1
        } else {
          r = c
        }
      }
      if nums[l] == target {
        return l
      }
    }
    return -1
}