class Solution:
  def isMonotonic(self, nums: List[int]) -> bool:
    inc = None
    for i in range(1, len(nums)):
      if inc == None:
        if nums[i] > nums[i - 1]:
          inc = True
        elif nums[i] < nums[i - 1]:
          inc = False
      elif nums[i] < nums[i - 1] if inc else nums[i] > nums[i - 1]:
        return False
    return True