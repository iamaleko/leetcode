import (
  "strconv"
  "slices"
)
func findMinDifference(timePoints []string) int {
  n := len(timePoints)
  minutes := make([]int, n)
  for i, timePoint := range timePoints {
    _hours, _ := strconv.Atoi(string([]rune(timePoint)[0:2]))
    _minutes, _ := strconv.Atoi(string([]rune(timePoint)[3:5]))
    minutes[i] = _hours * 60 + _minutes
  }
  slices.Sort(minutes)
  ans := minutes[0] - minutes[n - 1] + 24 * 60
  for i := 1; i < n; i++ {
    diff := minutes[i] - minutes[i - 1]
    if diff < ans {
      ans = diff
    }
  }
  return ans
}

// class Solution:
//   def findMinDifference(self, timePoints: List[str]) -> int:
//     timePoints = sorted(list(map(lambda x: int(x[3:5]) + int(x[0:2]) * 60, timePoints)))

    // ans = timePoints[0] - timePoints[-1] + 24 * 60
    // for i in range(1, len(timePoints)):
    //   diff = timePoints[i] - timePoints[i - 1]
    //   if diff < ans:
    //     ans = diff
    
//     return ans

        