class Solution:
  def shortestPalindrome(self, s: str) -> str:
    if s == s[::-1]:
      return s

    p = len(s) // 2
    right, left = s[p:], s[0:p][::-1]
    print(left, right)

    while left and right:
      if right.startswith(left):
        break
      if (left[0] + right).startswith(left):
        # print(1)
        return right[::-1] + left[0] + right
      right = left[0] + right
      left = left[1:]

    return right[::-1] + right