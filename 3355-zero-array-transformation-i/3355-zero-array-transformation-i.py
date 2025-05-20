class Solution:
  def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
    dec = [0] * (len(nums) + 1)
    for l, r in queries:
      dec[l] += 1
      dec[r + 1] -= 1
    cur = 0
    for i in range(len(nums)):
      cur += dec[i]
      nums[i] -= cur
      if nums[i] > 0:
        return False
    return True
        