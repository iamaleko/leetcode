class Solution:
  def countOppositeParity(self, nums: list[int]) -> list[int]:
    odd = 0
    even = 0
    for i in range(len(nums) - 1, -1, -1):
      num = nums[i]
      if num % 2:
        nums[i] = even
        odd += 1
      else:
        nums[i] = odd
        even += 1
    return nums
        