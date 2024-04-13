class Solution:
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    h = len(matrix)
    w = len(matrix[0])

    for y in range(h):
      for x in range(w):
        matrix[y][x] = int(matrix[y][x])
        if matrix[y][x] and y > 0:
          matrix[y][x] += matrix[y - 1][x]

    res = 0
    y = h - 1
    x = w - 1
    while True:
      if matrix[y][x]:
        res = max(res, self.calc(y,x,matrix))
      x -= 1
      if x < 0:
        x = w - 1
        y -= 1
      if y < 0:
        break
    return res

  def calc(self, y, x, matrix):
    res = matrix[y][x]
    ys = matrix[y][x]
    xs = 1
    while x > 0 and matrix[y][x - 1]:
      xs += 1
      x -= 1
      ys = min(ys, matrix[y][x])
      res = max(res, ys * xs)
    return res