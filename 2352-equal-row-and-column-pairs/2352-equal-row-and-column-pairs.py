class Solution:
  def equalPairs(self, grid: List[List[int]]) -> int:
    res = 0
    d = defaultdict(int)
    for row in grid:
      key = str(row)
      d[key] += 1
    for x in range(len(grid[0])):
      col = []
      for row in grid:
        col.append(row[x])
      key = str(col)
      res += d[key]
    return res

