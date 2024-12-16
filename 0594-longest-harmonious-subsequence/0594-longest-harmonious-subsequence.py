class Solution:
  def findLHS(self, nums: List[int]) -> int:
    nums.sort()
    ans = 0
    lv, rv, l = nums[0], 0, 0
    for r in range(len(nums)):
      rv = nums[r]
      while rv - lv > 1:
        l += 1
        lv = nums[l]
      if rv - lv == 1 and r - l + 1 > ans:
        ans = r - l + 1
    return ans
        