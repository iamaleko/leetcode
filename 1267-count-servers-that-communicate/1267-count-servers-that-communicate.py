class Solution:
  def countServers(self, grid: List[List[int]]) -> int:
    rows = [set() for _ in range(len(grid))]
    cols = [set() for _ in range(len(grid[0]))]
    for y in range(len(grid)):
      for x in range(len(grid[0])):
        if grid[y][x] == 1:
          rows[y].add((y, x))
          cols[x].add((y, x))
    s = set()
    for row in rows:
      if len(row) > 1:
        s.update(row)
    for col in cols:
      if len(col) > 1:
        s.update(col)
    return len(s)

        