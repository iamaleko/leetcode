class Solution:
  def nearestPalindromic(self, n: str) -> str:
    if int(n) <= 10:
      return str(int(n) - 1)
    hl = len(n) // 2
    left = n[0:hl]
    right = str(left)[::-1]
    center = n[hl] if len(n) % 2 else ''
    variants = []
    # as is
    variants.append(left + center + right)
    if center:
      # center +1
      if int(center) < 9:
        variants.append(left + str(int(center) + 1) + right)
      # center -1
      if int(center) > 0:
        variants.append(left + str(int(center) - 1) + right)
    else:
      # left -1
      if int(left):
        _left = str(int(left) + 1)
        _right = str(_left)[::-1]
        variants.append(_left + _right)
      # left +1
      if int(left) > 1:
        _left = str(int(left) - 1)
        _right = str(_left)[::-1]
        variants.append(_left + _right)
    # pos +1
    variants.append('1' + ('0' * (len(n) - 1)) + '1')
    # pos -1
    variants.append('9' * (len(n) - 1))
    min = math.inf
    ans = ''
    for variant in variants:
      diff = abs(int(variant) - int(n))
      if diff and (min > diff or (min == diff and ans and int(ans) > int(variant))):
        min = diff
        ans = variant
    return ans
    