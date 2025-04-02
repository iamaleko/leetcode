class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    ans = 0
    d = (m := nums[0]) - nums[1]
    for k in range(2, len(nums)):
      if ans < d * nums[k]:
        ans = d * nums[k]
      if nums[k - 1] > m:
        m = nums[k - 1]
      if m - nums[k] > d:
        d = m - nums[k]
    return ans
        