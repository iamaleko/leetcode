class Solution:
  def gridGame(self, grid: List[List[int]]) -> int:
    n = len(grid[0])
    # minimize
    left, right = 0, sum(grid[0])
    j, best = 0, inf
    for i in range(n):
      right -= grid[0][i]
      if max(left, right) < best:
        best = max(left, right)
        j = i
      left += grid[1][i]
    # clear
    for i in range(n):
      if i <= j: grid[0][i] = 0
      if i >= j: grid[1][i] = 0
    # maximize
    left, right = 0, sum(grid[1])
    j, best = 0, -inf
    for i in range(n):
      left += grid[0][i]
      if left + right > best:
        best = left + right
        j = i
      right -= grid[1][i]
    return best

        