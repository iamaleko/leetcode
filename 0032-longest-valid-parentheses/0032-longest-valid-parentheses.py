class Solution:
  def longestValidParentheses(self, s: str) -> int:
    stack = []
    index = []
    intervals = []
    for i, ch in enumerate(s):
      if ch == '(':
        stack.append(ch)
        index.append(i)
      elif stack and stack[-1] == '(':
        stack.pop()
        j = index.pop()
        while intervals and intervals[-1][0] > j:
          intervals.pop()
        if intervals and intervals[-1][1] == j - 1:
          intervals[-1][1] = i
        else:
          intervals.append([j, i])
    ans = 0
    for j, i in intervals:
      ans = max(ans, i - j + 1)
    return ans
          