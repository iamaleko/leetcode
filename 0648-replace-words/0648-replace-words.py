class Solution:
  def replaceWords(self, words: List[str], s: str) -> str:
    root = 'root'

    tree = {}
    for word in words:
      node = tree
      for letter in word:
        if letter not in node:
          node[letter] = {}
        node = node[letter]
      node[root] = word
    
    s = s.split(' ')
    for i, word in enumerate(s):
      node = tree
      for letter in word:
        if root in node:
          s[i] = node[root]
          break
        elif letter in node:
          node = node[letter]
        else:
          break

    return ' '.join(s)
        