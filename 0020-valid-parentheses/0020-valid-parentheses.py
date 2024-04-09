class Solution:
  def isValid(self, s: str) -> bool:
    dict = { ']': '[', ')': '(', '}': '{' }
    stack = []
    for chr in s:
      if chr in dict:
        if len(stack) == 0 or stack.pop() != dict[chr]:
          return False
      else:
        stack.append(chr)
    return len(stack) == 0
        