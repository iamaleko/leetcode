class Solution:
  def lengthAfterTransformations(self, s: str, t: int) -> int:
    chars = [0] * 26
    for ch in s:
      chars[ord(ch) - 97] += 1
    s = 0
    while t:
      chars[s] += chars[s - 1]
      s = s - 1 if s else 25
      t -= 1
    return sum(chars) % (10 ** 9 + 7)