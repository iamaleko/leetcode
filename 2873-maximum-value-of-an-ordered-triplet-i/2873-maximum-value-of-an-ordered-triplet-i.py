class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    ans = 0
    a, b = nums[:2]
    d = a - b
    for c in nums[2:]:
      if ans < d * c: ans = d * c
      if b > a: a = b
      if a - c > d: d = a - c
      b = c
    return ans