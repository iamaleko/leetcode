class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    ans = 0
    a, b = nums[:2]
    d = a - b
    for c in nums[2:]:
      ans, a, b = max(ans, d * c), max(a, b), c
      d = max(d, a - c)
    return ans