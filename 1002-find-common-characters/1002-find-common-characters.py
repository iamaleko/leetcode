class Solution:
  def commonChars(self, words: List[str]) -> List[str]:
    base = None
    for word in words:
      curr = defaultdict(int)
      for chr in word:
        curr[chr] += 1
      if base:
        for chr in base:
          if chr not in curr:
            base[chr] = 0
          elif base[chr] > curr[chr]:
            base[chr] = curr[chr]
      else:
        base = curr
    res = []
    for chr in base:
      for _ in range(base[chr]):
        res.append(chr)
    return res



        