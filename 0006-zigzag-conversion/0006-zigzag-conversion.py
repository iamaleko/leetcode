class Solution:
  def convert(self, s: str, n: int) -> str:
    if n == 1 or len(s) < n:
      return s
    rows = [''] * n
    row, step = 0, 1
    n -= 1
    for ch in s:
      rows[row] += ch
      row += step
      if row == n or not row:
        step = -step
    return ''.join(rows)