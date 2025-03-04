class Solution:
  def __init__(self):
    self.powers = []

  def find(self, n: int, i: int) -> bool:
    while self.powers[i] <= n:
      if self.powers[i] == n or self.find(n - self.powers[i], i + 1):
        return True
      i += 1
    return False

  def checkPowersOfThree(self, n: int) -> bool:
    if not self.powers:
      limit = ceil(math.log(1e7) / math.log(3))
      for power in range(limit + 1):
        self.powers.append(3 ** power)
    return self.find(n,0)