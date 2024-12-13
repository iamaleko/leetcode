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
      if j in mem and mem[j] <= val:
        return mem[j]
      mem[j] = val
      for i in range(i, len(pos)):
        l, r, n = pos[i]
        if j <= l:
          val = min(val, traverse(i + 1, r, mem[j] - n))
      return val

    return traverse(0, 0, len(s))