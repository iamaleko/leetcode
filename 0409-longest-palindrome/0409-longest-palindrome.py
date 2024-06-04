class Solution:
  def longestPalindrome(self, s: str) -> int:
    d = defaultdict(int)
    for letter in s:
      d[letter] += 1
    ans = 0
    addition = 0
    for letter in d:
      ans += d[letter] >> 1 << 1
      if d[letter] & 1:
        addition = 1
    return ans + addition