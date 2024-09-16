class Solution:
  def findMinDifference(self, timePoints: List[str]) -> int:
    timePoints = sorted(list(map(lambda x: int(x[3:5]) + int(x[0:2]) * 60, timePoints)))

    ans = timePoints[0] - timePoints[-1] + 24 * 60
    for i in range(1, len(timePoints)):
      diff = timePoints[i] - timePoints[i - 1]
      if diff < ans:
        ans = diff
    
    return ans

        