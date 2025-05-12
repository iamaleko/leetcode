class Solution:
  def findEvenNumbers(self, digits: List[int]) -> List[int]:
    count = Counter(digits)
    ans = []
    udigits = sorted(list(set(digits)))
    for a in udigits:
      if not a: continue
      count[a] -= 1
      for b in udigits:
        if not count[b]: continue
        count[b] -= 1
        for c in udigits:
          if not count[c]: continue
          if c % 2 == 1: continue
          count[c] -= 1
          ans.append(a * 100 + b * 10 + c)
          count[c] += 1
        count[b] += 1
      count[a] += 1
    return ans
        