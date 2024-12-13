from functools import lru_cache

class Solution:
  @lru_cache(maxsize=None)
  def traverse(self, i: int, val: int) -> int:
    # self.mem[self.pos[i][1]] = val
    res = val
    for j in range(i + 1, len(self.pos)):
      if self.pos[i][1] <= self.pos[j][0]:
        l, r = self.pos[j]
        # if r not in self.mem or self.mem[r] > val - r + l:
        res = min(res, self.traverse(j, val - r + l))
    return res

  def minExtraChar(self, s: str, words: list[str]) -> int:
    self.pos = [(0, 0)]
    for word in words:
      i = 0
      while True:
        i = s.find(word, i)
        if i == -1: break
        self.pos.append((i, i + len(word)))
        i += 1
    self.pos.sort()
    self.mem = {}
    return self.traverse(0, len(s))