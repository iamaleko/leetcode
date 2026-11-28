class Solution:
  def firstStableIndex(self, nums: list[int], k: int) -> int:
    maxs = []
    for i in range(len(nums)):
      if i:
        maxs.append(max(nums[i], maxs[i - 1]))
      else:
        maxs.append(nums[i])
    ans = -1
    mins = nums[-1]
    for i in range(len(nums)-1, -1, -1):
      mins = min(mins, nums[i])
      if maxs[i] - mins <= k:
        ans = i
    return ans
        