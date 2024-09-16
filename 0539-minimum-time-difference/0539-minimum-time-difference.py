class Solution:
  def findMinDifference(self, timePoints: List[str]) -> int:
    minutes = []
    for timePoint in timePoints:
      minute = int(timePoint[3:5]) + int(timePoint[0:2]) * 60
      minutes.append(minute)
      minutes.append(minute + 24 * 60)
    minutes.sort()

    ans = math.inf
    for i in range(1, len(minutes)):
      diff = minutes[i] - minutes[i - 1]
      if diff < ans:
        ans = diff
    
    return ans

        