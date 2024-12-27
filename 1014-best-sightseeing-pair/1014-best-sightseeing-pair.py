class Solution:
  def maxScoreSightseeingPair(self, values: List[int]) -> int:
    ans = 0
    val = values[0]
    for i in range(1, len(values)):
      val -= 1
      ans = max(ans, values[i] + val)
      val = max(val, values[i])
    return ans