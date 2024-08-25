class Solution:
  def toPalindrome(self, l: int) -> int:
    l = str(l)
    return int(l + (l[-2::-1] if self.is_odd else l[::-1]))

  def nearestPalindromic(self, n: str) -> str:
    ln = len(n)
    l = int(n[0:math.ceil(ln / 2)])
    n = int(n)
    self.is_odd = ln % 2 == 1
    variants = []

    # as is
    variants.append(self.toPalindrome(l))
    # +1
    variants.append(self.toPalindrome(l + 1))
    # -1
    if l: variants.append(self.toPalindrome(l - 1))
    # pos +1
    variants.append(int('1' + ('0' * (ln - 1)) + '1'))
    # pos -1
    if ln - 1: variants.append(int('9' * (ln - 1)))

    min_diff = math.inf
    ans = math.inf
    for variant in variants:
      diff = abs(variant - n)
      if diff and (min_diff > diff or (min_diff == diff and ans > variant)):
        min_diff = diff
        ans = variant
        
    return str(ans)
    