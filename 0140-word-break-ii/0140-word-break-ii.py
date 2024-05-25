class Solution:
  def wordBreak(self, s: str, words: List[str]) -> List[str]:
    ans = []
    def backtrack(i, str):
      if i == len(s):
        ans.append(str[1:])
      else:
        for word in words:
          if s[i:i + len(word)] == word:
            backtrack(i + len(word), str + ' ' + s[i:i + len(word)])
    backtrack(0, '')
    return ans
        