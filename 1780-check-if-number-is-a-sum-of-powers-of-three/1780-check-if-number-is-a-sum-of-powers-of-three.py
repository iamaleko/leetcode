class Solution:
  def __init__(self):
    self.powers = []

  def find(self, n: int, mask: int) -> bool:
    for i, power in enumerate(self.powers):
      if power > n:
        break
      if not mask & 1 << i:
        mask ^= 1 << i
        if power == n or power < n and self.find(n - power, mask):
          return True
    return False

  def checkPowersOfThree(self, n: int) -> bool:
    if not self.powers:
      limit = floor(math.log(1e7) / math.log(3))
      for power in range(limit + 1):
        self.powers.append(3 ** power)
    return self.find(n,0)