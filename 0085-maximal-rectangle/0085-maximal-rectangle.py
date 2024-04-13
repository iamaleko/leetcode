class Solution:
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    h = len(matrix)
    w = len(matrix[0])

    for y in range(h):
      for x in range(w):
        matrix[y][x] = int(matrix[y][x])
        if matrix[y][x] and y > 0:
          matrix[y][x] += matrix[y - 1][x]

    max = 0
    y = h - 1
    x = w - 1
    while True:
      if matrix[y][x]:
        val = self.calc(y,x,matrix)
        if val > max:
          max = val
      x -= 1
      if x < 0:
        x = w - 1
        y -= 1
      if y < 0:
        break
    return max

  def calc(self, y, x, sum):
    max = sum[y][x]
    ys = max
    xs = 1
    while x > 0 and sum[y][x - 1]:
      xs += 1
      if ys > sum[y][x - 1]:
        ys = sum[y][x - 1]
      if max < ys * xs:
        max = ys * xs
      x -= 1
    return max