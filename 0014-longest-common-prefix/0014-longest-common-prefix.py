class Tree:
  def __init__(self, char = '_'):
    self.map = {}
    self.cnt = 1

  def inc(self):
    self.cnt += 1

  def add(self, char):
    if char in self.map:
      self.map[char].inc()
    else:
      self.map[char] = Tree(char)
    return self.map[char]


class Solution(object):
  def longestCommonPrefix(self, strs):
    tree = Tree()
    sub = ''
    for str in strs:
      node = tree
      for char in str:
        node = node.add(char)
        if node.cnt == len(strs):
          sub += char
    return sub