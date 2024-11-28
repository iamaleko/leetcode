class Solution:
  def minimumObstacles(self, grid: List[List[int]]) -> int:
    ans, my, mx = 0, len(grid) - 1, len(grid[0]) - 1
    EMPTY, OBSTACLE, VISITED = 0, 1, 2

    queue = deque([(0,0)])
    grid[0][0] = VISITED
    border = deque()

    while queue:
      while queue:
        y, x = queue.popleft()

        if y == my and x == mx:
          return ans

        if y > 0:
          if grid[y - 1][x] == EMPTY:
            queue.append((y - 1, x))
          elif grid[y - 1][x] == OBSTACLE:
            border.append((y - 1, x))
          grid[y - 1][x] = VISITED
        if y < my:
          if grid[y + 1][x] == EMPTY:
            queue.append((y + 1, x))
          elif grid[y + 1][x] == OBSTACLE:
            border.append((y + 1, x))
          grid[y + 1][x] = VISITED
        if x > 0:
          if grid[y][x - 1] == EMPTY:
            queue.append((y, x - 1))
          elif grid[y][x - 1] == OBSTACLE:
            border.append((y, x - 1))
          grid[y][x - 1] = VISITED
        if x < mx:
          if grid[y][x + 1] == EMPTY:
            queue.append((y, x + 1))
          elif grid[y][x + 1] == OBSTACLE:
            border.append((y, x + 1))
          grid[y][x + 1] = VISITED
          
      ans += 1
      queue, border = border, queue