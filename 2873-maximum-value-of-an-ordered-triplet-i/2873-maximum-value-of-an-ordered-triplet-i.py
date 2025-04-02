class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    ans = 0
    a, b = nums[:2]
    d = a - b
    for c in nums[2:]:
      ans = max(ans, d * c)
      a = max(a, b)
      d = max(d, a - c)
      b = c
    return ans