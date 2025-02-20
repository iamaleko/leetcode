class Solution:
  def findDifferentBinaryString(self, nums: List[str]) -> str:
    n, s = len(nums[0]), set(nums)
    def backtrack(v = ''):
      if len(v) == n:
        return '' if v in s else v
      return backtrack(v + '1') or backtrack(v + '0')
    return backtrack()
        