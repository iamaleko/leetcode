class Solution:
  def __init__(self):
    self.LAND = '1'
    self.WATER = '0'
    self.VISITED = '2'

  def fill(self, y, x):
    queue = deque([(y,x)])
    while queue:
      y, x = queue.pop()
      self.grid[y][x] = self.VISITED
      if y > 0 and self.grid[y - 1][x] == self.LAND:
        queue.append((y - 1, x))
      if y < self.maxy and self.grid[y + 1][x] == self.LAND:
        queue.append((y + 1, x))
      if x > 0 and self.grid[y][x - 1] == self.LAND:
        queue.append((y, x - 1))
      if x < self.maxx and self.grid[y][x + 1] == self.LAND:
        queue.append((y, x + 1))

  def numIslands(self, grid: List[List[str]]) -> int:
    res = 0
    self.grid = grid
    self.maxy = len(grid) - 1
    self.maxx = len(grid[0]) - 1
    for y in range(self.maxy + 1):
      for x in range(self.maxx + 1):
        if grid[y][x] == self.LAND:
          res += 1
          self.fill(y, x)
    return res
        