class Solution:
  def reverseOnlyLetters(self, s: str) -> str:
    ls = list(s)
    f, l, r = 0, 0, len(s) - 1
    while l < r:
      if f & 1 == 0:
        if ls[l].isalpha():
          f |= 1
        else:
          l += 1
      elif f & 2 == 0:
        if ls[r].isalpha():
          f |= 2
        else:
          r -= 1
      if f == 3:
        ls[l], ls[r] = ls[r], ls[l]
        l += 1
        r -= 1
        f = 0
    return ''.join(ls)

        