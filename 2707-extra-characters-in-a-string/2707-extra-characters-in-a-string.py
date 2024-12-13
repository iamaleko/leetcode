class Solution:
  def minExtraChar(self, s: str, words: List[str]) -> int:
    pos = []
    for word in words:
      i = 0
      while True:
        i = s.find(word, i)
        if i == -1: break
        pos.append((i, i + len(word), len(word)))
        i += 1
    pos.sort()

    mem = {}
    def traverse(i: int, j: int, val: int) -> int:
      mem[j] = val
      res = val
      for i in range(i, len(pos)):
        l, r, n = pos[i]
        if j <= l:
          if r in mem and mem[r] <= val - n: continue
          res = min(res, traverse(i + 1, r, val - n))
      return res

    return traverse(0, 0, len(s))