class Solution:
  def matrixScore(self, grid: List[List[int]]) -> int:
    w = len(grid[0])
    h = len(grid)

    def irow(y):
      for i in range(w): grid[y][i] = 0 if grid[y][i] else 1
    def icol(x):
      for i in range(h): grid[i][x] = 0 if grid[i][x] else 1
    def scol(x, s = 0):
      for i in range(h): s += grid[i][x]
      return s

    # effectivly inv first col
    if scol(0) == 0:
      icol(0)
    else:
      for y in range(h):
        if not grid[y][0]:
          irow(y)

    # inv other cols
    for x in range(1, w):
      if scol(x) < h / 2:
        icol(x)

    # sum
    res = 0
    for row in grid:
      n = 0
      for d in row:
        n <<= 1
        n |= d
      res += n

    return res