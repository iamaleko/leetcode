class Solution:
  def minOperations(self, grid: List[List[int]], x: int) -> int:
    arr, ans = [num for row in grid for num in row], 0
    if (n := len(arr)) > 1:
      arr.sort()
      if arr[0] < arr[-1]:
        med = arr[n // 2] if n & 1 else ((arr[n // 2 - 1] + arr[n // 2]) // 2 - arr[0]) // x * x + arr[0]
        for num in arr:
          if abs(med - num) % x:
            return -1
          ans += abs(med - num) // x
    return ans