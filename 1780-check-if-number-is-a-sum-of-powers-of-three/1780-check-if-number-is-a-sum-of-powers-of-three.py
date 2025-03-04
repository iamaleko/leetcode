class Solution:
  def __init__(self):
    self.powers = []

  def find(self, n: int, m: int) -> bool:
    for i in range(m, len(self.powers)):
      if self.powers[i] > n:
        break
      if self.powers[i] == n or self.find(n - self.powers[i], i + 1):
        return True
    return False

  def checkPowersOfThree(self, n: int) -> bool:
    if not self.powers:
      limit = floor(math.log(1e7) / math.log(3))
      for power in range(limit + 1):
        self.powers.append(3 ** power)
    return self.find(n,0)