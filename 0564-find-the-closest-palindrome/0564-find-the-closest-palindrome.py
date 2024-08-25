class Solution:
  def toPalindrome(self, left: int, is_odd: bool) -> int:
    left = str(left)
    return int(left + (left[-2::-1] if is_odd else left[::-1]))

  def nearestPalindromic(self, n: str) -> str:
    ln = len(n)
    left = int(n[0:math.ceil(ln / 2)])
    n = int(n)

    if n <= 10:
      return str(n - 1)
      
    is_odd = ln % 2 == 1
    variants = []

    # as is
    variants.append(self.toPalindrome(left, is_odd))
    # +1
    variants.append(self.toPalindrome(left + 1, is_odd))
    # -1
    variants.append(self.toPalindrome(left - 1, is_odd))
    # pos +1
    variants.append(int('1' + ('0' * (ln - 1)) + '1'))
    # pos -1
    variants.append(int('9' * (ln - 1)))

    min_diff = math.inf
    ans = math.inf
    for variant in variants:
      diff = abs(variant - n)
      if diff and (min_diff > diff or (min_diff == diff and ans > variant)):
        min_diff = diff
        ans = variant
        
    return str(ans)
    