class Solution:
  def longestPalindrome(self, words: List[str]) -> int:
    count = Counter(words)
    center = False
    ans = 0
    for word in count:
      if not count[word]:
        continue
      if word[0] == word[1]:
        ans += 4 * (count[word] // 2)
        if not center and count[word] & 1:
          center = True
          ans += 2
      else:
        rev = word[::-1]
        if rev in count:
          cnt = min(count[word], count[rev])
          ans += 4 * cnt
          count[word] -= cnt
          count[rev] -= cnt
    return ans