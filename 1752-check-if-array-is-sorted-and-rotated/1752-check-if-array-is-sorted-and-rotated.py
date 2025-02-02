class Solution:
  def check(self, nums: List[int]) -> bool:
    nums.append(nums[0])
    fold = False
    for i in range(1, len(nums)):
      if nums[i] < nums[i - 1]:
        if fold:
          return False
        fold = True
    return True