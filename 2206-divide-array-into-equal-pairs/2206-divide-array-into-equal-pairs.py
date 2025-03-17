class Solution:
  def divideArray(self, nums: List[int]) -> bool:
    s = [0] * 501
    for num in nums:
      s[num] ^= 1
    return sum(s) == 0
        