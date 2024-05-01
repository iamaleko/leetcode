# class Solution:
#   def reversePrefix(self, word: str, ch: str) -> str:
#     i = word.find(ch)
#     return word if i < 0 else word[i::-1] + word[i + 1:]

class Solution:
  def reversePrefix(self, word: str, k: str) -> str:
    res = ''
    found = False
    for ch in word:
      if found:
        res += ch
      else:
        res = ch + res
        if ch == k:
          found = True
    return res if found else word
        