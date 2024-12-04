class Solution:
  def canMakeSubsequence(self, a: str, b: str) -> bool:
    n, j = len(a), 0
    for i in range(len(b)):
      while j < n and a[j] != b[i] and ('a' if a[j] == 'z' else chr(ord(a[j]) + 1)) != b[i]:
        j += 1
      if j == n:
        return False
      j += 1
    return True