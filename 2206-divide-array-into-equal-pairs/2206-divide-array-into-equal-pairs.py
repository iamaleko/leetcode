class Solution:
  def divideArray(self, nums: List[int]) -> bool:
    n = 0
    for num in nums:
      n ^= 1 << num
    return not n
        