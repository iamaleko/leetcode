class Solution:
  def replaceWords(self, words: List[str], s: str) -> str:
    root = 'root'

    tree = {}
    for i, word in enumerate(words):
      node = tree
      for letter in word:
        if letter not in node:
          node[letter] = {}
        node = node[letter]
      node[root] = i
    
    s = s.split(' ')
    for i, word in enumerate(s):
      node = tree
      for letter in word:
        if root in node:
          s[i] = words[node[root]]
        elif letter in node:
          node = node[letter]
          continue
        break

    return ' '.join(s)
        