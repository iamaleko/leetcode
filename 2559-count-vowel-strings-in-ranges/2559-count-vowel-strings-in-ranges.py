class Solution:
  def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
    vowels = 'aeiou'
    rs = [0] * len(words)
    for i in range(len(words)):
      rs[i] = (rs[i - 1] if i else 0) + (1 if words[i][0] in vowels and words[i][-1] in vowels else 0)
    ans = []
    for l, r in queries:
      ans.append(rs[r] - (rs[l - 1] if l else 0))
    return ans
        