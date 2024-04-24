# class Solution:
#   def __init__(self):
#     self.ls = [0,1,1]
#     for i in range(3, 38):
#       self.ls.append(self.ls[i - 3] + self.ls[i - 2] + self.ls[i - 1])
#   def tribonacci(self, n: int) -> int:
#     return self.ls[n]

class Solution:
  def tribonacci(self, n: int) -> int:
    if n == 0: return 0
    if n < 3: return 1
    a = 0
    b = 1
    c = 1
    n -= 2
    while n:
      a, b, c = b, c, a + b + c
      n -= 1
    return c
        