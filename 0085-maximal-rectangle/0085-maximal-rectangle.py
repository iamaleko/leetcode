class Solution:
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    h = len(matrix)
    w = len(matrix[0])
    sum = [None for i in range(h)]

    for y in range(h):
      sum[y] = [0 for i in range(w)]
      for x in range(w):
        t = int(matrix[y - 1][x]) if y > 0 else 0
        v = int(matrix[y][x])
        sum[y][x] = v + (sum[y - 1][x] if t else 0) if v else 0

    max = 0
    y = h - 1
    x = w - 1
    while True:
      if sum[y][x]:
        val = self.calc(y,x,sum)
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