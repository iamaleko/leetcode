class Solution:
  def stringMatching(self, words: List[str]) -> List[str]:
    s = ' ' + ' '.join(words) + ' '
    ans = []
    for word in words:
      p = s.find(word)
      if ~p and s[p - 1] == ' ' and s[p + len(word)] == ' ':
        p = s.find(word, p + 1)
      if ~p:
        ans.append(word)
    return ans
        