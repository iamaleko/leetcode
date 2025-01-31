class Solution:
  def canBeValid(self, s, locked):
    index, stack = [], []
    for i in range(len(s)):
      if locked[i] == '0':
        stack.append(False)
      elif s[i] == ')':
        if not stack:
          return False
        stack.pop(index.pop() if index else -1)
      else:
        index.append(len(stack))
        stack.append(True)
    opened, balanced = 0, True
    for el in stack:
      if el:
        opened += 1
      elif opened:
        opened -= 1
      else:
        balanced = not balanced
    return opened == 0 and balanced
