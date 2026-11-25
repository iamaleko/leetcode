class Solution:
  def reverseOnlyLetters(self, s: str) -> str:
    ls = list(s)
    lp, rp = False, False
    l, r = 0, len(s) - 1
    while l < r:
      if not lp:
        if ls[l].isalpha():
          lp = True
        else:
          l += 1
      elif not rp:
        if ls[r].isalpha():
          rp = True
        else:
          r -= 1
      if lp and rp:
        ls[l], ls[r] = ls[r], ls[l]
        l += 1
        r -= 1
        lp = rp = False
    return ''.join(ls)

        