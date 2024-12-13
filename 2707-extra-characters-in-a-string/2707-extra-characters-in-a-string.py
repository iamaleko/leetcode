class Solution:
  def minExtraChar(self, s: str, words: List[str]) -> int:
    pos = [(0, 0)]
    for word in words:
      i = 0
      while True:
        i = s.find(word, i)
        if i == -1: break
        pos.append((i, i + len(word)))
        i += 1
    pos.sort()

    mem = {}
    def traverse(k: int, val: int) -> int:
      mem[pos[k][1]] = val
      res = val
      for i in range(k + 1, len(pos)):
        l, r = pos[i]
        if pos[k][1] <= l and (r not in mem or mem[r] > val - (r - l)):
          res = min(res, traverse(i, val - (r - l)))
      return res

    return traverse(0, len(s))