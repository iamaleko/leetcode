class Solution:
  def numIslands(self, grid: List[List[str]]) -> int:
    res = 0
    LAND = '1'
    WATER = '0'
    VISITED = '2'
    maxy = len(grid) - 1
    maxx = len(grid[0]) - 1
    for y in range(maxy + 1):
      for x in range(maxx + 1):
        if grid[y][x] == LAND:
          res += 1
          queue = deque([(y,x)])
          while queue:
            _y, _x = queue.pop()
            grid[_y][_x] = VISITED
            if _y > 0 and grid[_y - 1][_x] == LAND: queue.append((_y - 1, _x))
            if _y < maxy and grid[_y + 1][_x] == LAND: queue.append((_y + 1, _x))
            if _x > 0 and grid[_y][_x - 1] == LAND: queue.append((_y, _x - 1))
            if _x < maxx and grid[_y][_x + 1] == LAND: queue.append((_y, _x + 1))
    return res
        