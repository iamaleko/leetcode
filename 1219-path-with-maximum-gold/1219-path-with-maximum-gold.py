class Solution:
  def getMaximumGold(self, grid: List[List[int]]) -> int:
    mx = len(grid[0]) - 1
    my = len(grid) - 1
    self.ans = 0

    def dfs(y, x, s):
      t = grid[y][x]
      s += t
      grid[y][x] = 0
      if y > 0 and grid[y - 1][x]:
        dfs(y - 1, x, s)
      if y < my and grid[y + 1][x]:
        dfs(y + 1, x, s)
      if x > 0 and grid[y][x - 1]:
        dfs(y, x - 1, s)
      if x < mx and grid[y][x + 1]:
        dfs(y, x + 1, s)
      grid[y][x] = t
      if self.ans < s:
        self.ans = s

    for y in range(my + 1):
      for x in range(mx + 1):
        if grid[y][x]:
          dfs(y, x, 0)

    return self.ans