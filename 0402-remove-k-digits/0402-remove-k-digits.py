class Solution:
  def removeKdigits(self, s: str, k: int) -> str:
    stack = []
    for chr in s:
      chr = int(chr)
      while k and stack and int(chr) < stack[-1]:
        stack.pop(-1)
        k -= 1
      if chr or stack:
        stack.append(chr)
    
    if k:
      stack = stack[:-k]

    if not stack:
      stack.append(0)

    return ''.join(map(str, stack))
        