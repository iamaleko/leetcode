class Solution:
  def minFallingPathSum(self, grid: List[List[int]]) -> int:
    if len(grid) == 1:
      return grid[0][0]
    
    size = len(grid)
    
    for i in range(1, size):
      m = min(grid[i - 1])
      for j in range(0, size):
        if m == grid[i - 1][j]:
          t = grid[i - 1][j]
          grid[i - 1][j] = math.inf
          grid[i][j] += min(grid[i - 1])
          grid[i - 1][j] = t
        else:
          grid[i][j] += m

    return min(grid[size - 1])


        