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
    def traverse(i: int, add: int) -> int:
      mem[pos[i][1]] = add
      res = add
      for j in range(i + 1, len(pos)):
        if pos[i][1] <= pos[j][0]:
          l, r = pos[j]
          if r not in mem or mem[r] < add + r - l:
            res = max(res, traverse(j, add + r - l))
      return res

    return len(s) - traverse(0, 0)