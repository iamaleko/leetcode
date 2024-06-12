class Solution:
  def sortColors(self, nums: List[int]) -> None:
    d = { 0: 0, 1: 0, 2: 0 }
    for num in nums:
      d[num] += 1
    p = 0
    for num in d:
      for i in range(d[num]):
        nums[p] = num
        p += 1   
        