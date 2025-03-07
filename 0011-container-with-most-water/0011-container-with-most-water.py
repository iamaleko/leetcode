class Solution:
  def maxArea(self, height: List[int]) -> int:
    ans, l, r = 0, 0, len(height) - 1
    while l != r:
      if height[l] < height[r]:
        ans = max(ans, height[l] * (r - l))
        l += 1
      else:
        ans = max(ans, height[r] * (r - l))
        r -= 1
    return ans
        