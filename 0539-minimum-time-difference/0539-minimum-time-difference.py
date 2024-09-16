class Solution:
  def findMinDifference(self, timePoints: List[str]) -> int:
    mins = []
    for timePoint in timePoints:
      m = int(timePoint[3:5]) + int(timePoint[0:2]) * 60
      mins.append(m)
      mins.append(m + 24 * 60)
    mins.sort()

    ans = math.inf
    for i in range(1, len(mins)):
      diff = mins[i] - mins[i - 1]
      if diff < ans:
        ans = diff
    
    return ans

        