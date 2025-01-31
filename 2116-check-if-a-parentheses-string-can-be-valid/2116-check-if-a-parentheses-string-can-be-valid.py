class Solution:
  def canBeValid(self, s, locked):
    index, stack = [], []
    for i in range(len(s)):
      ch = s[i]
      if locked[i] == '0':
        stack.append('')
      elif ch == ')':
        if not len(stack):
          return False
        if len(index):
          stack.pop(index.pop())
        else:
          stack.pop()
      else:
        index.append(len(stack))
        stack.append('(')
    #   print(ch, stack)
    # print(stack)
    opened, balanced = 0, True
    for ch in stack:
      if ch == '(':
        opened += 1
      elif ch == '':
        if opened:
          opened -= 1
        else:
          balanced = not balanced
    # print(opened, balanced)
    return opened == 0 and balanced
