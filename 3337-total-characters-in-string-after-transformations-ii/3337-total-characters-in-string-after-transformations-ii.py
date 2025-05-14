class Solution:
  def lengthAfterTransformations(self, s: str, t: int, nums: List[int]) -> int:
    a, b = [0] * 26, [0] * 26
    for ch in s:
      a[ord(ch) - 97] += 1
    rem, add = [0] * 26, 0
    mod = 10 ** 9 + 7
    while t:
      t -= 1
      for i in range(26):
        b[i] = add % mod
        add += a[i] - rem[i]
        rem[i] = 0
        rem[(i + nums[i]) % 26] += a[i]
      i = 0
      while add:
        b[i] = (b[i] + add) % mod
        add -= rem[i]
        rem[i] = 0
        i += 1
      a, b = b, a
    return sum(a) % mod