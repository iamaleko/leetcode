class Solution:
  def minOperations(self, grid: List[List[int]], x: int) -> int:
    arr = []
    for row in grid:
      for num in row:
        arr.append(num)
    if len(arr) == 1:
      return 0
    arr.sort()
    if arr[0] == arr[-1]:
      return 0
    med = arr[len(arr) // 2] if len(arr) & 1 else ((arr[len(arr) // 2] + arr[(len(arr) // 2) - 1]) // 2 - arr[0]) // x * x + arr[0]
    ans = 0
    # print(arr, med)
    for num in arr:
      # print(num, abs(med - num) % x)
      if abs(med - num) % x:
        return -1
      ans += abs(med - num) // x
    return ans




        