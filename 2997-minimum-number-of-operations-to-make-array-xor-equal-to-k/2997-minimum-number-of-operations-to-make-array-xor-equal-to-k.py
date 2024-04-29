class Solution:
  def minOperations(self, nums: List[int], k: int) -> int:
    n = nums[0]
    for i in range(1, len(nums)):
      n ^= nums[i]
    # print(bin(n), bin(k))
    res = 0
    while n or k:
      if n & 1 != k & 1:
        res += 1
      n >>= 1
      k >>= 1
    return res