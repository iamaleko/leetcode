class Solution:
  def minOperations(self, nums: List[int], k: int) -> int:
    n = 0
    for num in nums:
      n ^= num
    res = 0
    while n or k:
      if n & 1 != k & 1:
        res += 1
      n >>= 1
      k >>= 1
    return res