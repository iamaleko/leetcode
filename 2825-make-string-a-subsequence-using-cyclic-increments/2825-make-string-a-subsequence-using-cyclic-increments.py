class Solution:
  def next(self, ch: str) -> str:
    return 'a' if ch == 'z' else chr(ord(ch) + 1)

  def canMakeSubsequence(self, a: str, b: str) -> bool:
    n, j = len(a), 0
    for i in range(len(b)):
      while j < n and a[j] != b[i] and self.next(a[j]) != b[i]:
        j += 1
      if j == n:
        return False
      j += 1
    return True