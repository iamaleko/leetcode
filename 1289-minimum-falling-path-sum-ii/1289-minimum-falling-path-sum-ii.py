class Solution:
  def minFallingPathSum(self, grid: List[List[int]]) -> int:
    if len(grid) == 1:
      return grid[0][0]
    
    size = len(grid)
    
    for i in range(1, size):
      for j in range(0, size):
        val = grid[i][j]
        grid[i][j] = math.inf
        for k in range(0, size):
          if j == k:
            continue
          grid[i][j] = min(grid[i][j], val + grid[i - 1][k])

    return min(grid[size - 1])


        