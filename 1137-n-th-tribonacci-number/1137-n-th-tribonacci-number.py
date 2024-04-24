class Solution:
  def __init__(self):
    self.ls = [0,1,1]
    for i in range(3, 38):
      self.ls.append(self.ls[i - 3] + self.ls[i - 2] + self.ls[i - 1])
  def tribonacci(self, n: int) -> int:
    return self.ls[n]
        