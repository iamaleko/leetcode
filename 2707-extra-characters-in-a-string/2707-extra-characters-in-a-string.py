class Solution:
  def minExtraChar(self, s: str, words: List[str]) -> int:
    pos = []
    for word in words:
      i = 0
      while True:
        i = s.find(word, i)
        if i == -1: break
        pos.append((i, i + len(word)))
        i += 1
    pos.sort()

    mem = {}
    def traverse(i: int, j: int, val: int) -> int:
      mem[j] = val
      for i in range(i, len(pos)):
        l, r = pos[i]
        if j <= l and (r not in mem or mem[r] > mem[j] - (r - l)):
          val = min(val, traverse(i + 1, r, mem[j] - (r - l)))
      return val

    return traverse(0, 0, len(s))