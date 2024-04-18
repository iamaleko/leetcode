class Solution:
  def islandPerimeter(self, grid: List[List[int]]) -> int:
    maxy = len(grid) - 1
    maxx = len(grid[0]) - 1
    res = 0
    for y in range(maxy + 1):
      for x in range(maxx + 1):
        if grid[y][x]:
          if x == 0 or not grid[y][x - 1]:
            res += 1
          if x == maxx or not grid[y][x + 1]:
            res += 1
          if y == 0 or not grid[y - 1][x]:
            res += 1
          if y == maxy or not grid[y + 1][x]:
            res += 1
    return res
        