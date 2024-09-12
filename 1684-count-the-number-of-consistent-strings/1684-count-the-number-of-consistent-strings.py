class Solution:
  def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
    ans = 0
    allowed = set(allowed)
    for word in words:
      if set(word).issubset(allowed):
        ans += 1
    return ans
        