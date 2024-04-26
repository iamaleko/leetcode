class Solution:
  def minFallingPathSum(self, grid: List[List[int]]) -> int:
    if len(grid) == 1:
      return grid[0][0]
    
    size = len(grid)
    for i in range(1, size):
      
      a = math.inf
      b = math.inf
      for e in grid[i - 1]:
        if a > e:
          b = a
          a = e
        elif b > e:
          b = e

      for j in range(size):
        if grid[i - 1][j] == a:
          grid[i][j] += b
        else:
          grid[i][j] += a

    return min(grid[size - 1])


        