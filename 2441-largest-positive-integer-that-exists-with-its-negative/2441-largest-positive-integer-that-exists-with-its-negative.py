class Solution:
  def findMaxK(self, nums: List[int]) -> int:
    st = set(nums)
    m = -1
    for n in nums:
      if n > 0 and -n in st and m < n:
        m = n
    return m
        