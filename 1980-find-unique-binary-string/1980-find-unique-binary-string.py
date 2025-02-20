class Solution:
  def findDifferentBinaryString(self, nums: List[str]) -> str:
    s = set(nums)
    def backtrack(n, v):
      return backtrack(n - 1, v + '1') or backtrack(n - 1, v + '0') if n else '' if v in s else v
    return backtrack(len(nums[0]), '')
        