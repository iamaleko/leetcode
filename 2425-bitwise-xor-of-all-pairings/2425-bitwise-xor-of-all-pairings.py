class Solution:
  def xorAllNums(self, a: List[int], b: List[int]) -> int:
    xor = 0
    for num in b: xor ^= num
    ans = 0
    if len(b) & 1:
      for num in a: ans ^= xor ^ num
    elif len(a) & 1:
      ans = xor
    return ans
        