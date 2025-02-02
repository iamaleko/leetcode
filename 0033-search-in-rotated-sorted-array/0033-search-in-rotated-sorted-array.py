class Solution:
  def search(self, nums: List[int], target: int) -> int:
    l, r = 0, len(nums) - 1
    # if array is rotated
    if nums[0] > nums[r]:
      # find rotation point
      while l < r:
        c = l + r >> 1
        if nums[c] > nums[l]:
          l = c
        else:
          r = c
      # select search side
      if target < nums[0]:
        l += 1
        r = len(nums) - 1
      else:
        r = l
        l = 0
    # perform target search
    if target < nums[l] or target > nums[r]:
      return -1
    while l < r:
      c = l + r >> 1
      if nums[c] < target:
        l = c + 1
      else:
        r = c
    return l if nums[l] == target else -1