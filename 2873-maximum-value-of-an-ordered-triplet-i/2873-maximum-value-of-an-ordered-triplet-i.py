class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    ans = 0
    i = 0
    d = nums[i] - nums[1]
    for k in range(2, len(nums)):
      if ans < d * nums[k]:
        ans = d * nums[k]
      if nums[k - 1] > nums[i]:
        i = k - 1
      if nums[i] - nums[k] > d:
        d = nums[i] - nums[k]
    return ans
        