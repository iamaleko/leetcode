class Solution:
  def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
    ln = len(grid)
    ans = [[0] * (ln - 2)  for _ in range(ln - 2)]
    for y in range(1, ln - 1):
      for x in range(1, ln - 1):
        ans[y - 1][x - 1] = max(
          grid[y][x],
          grid[y][x - 1],
          grid[y][x + 1],
          grid[y - 1][x],
          grid[y - 1][x - 1],
          grid[y - 1][x + 1],
          grid[y + 1][x],
          grid[y + 1][x - 1],
          grid[y + 1][x + 1],
        )
    return ans
        