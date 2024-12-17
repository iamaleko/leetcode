class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count = [0] * 26
    for ch in s:
      count[ord(ch) - 97] += 1
    ans, last, repeat, p = [], -1, 0, 25
    while True:
      while p >= 0 and not count[p]: p -= 1
      code = p
      if repeat == limit and code == last:
        code = p - 1
        while code >= 0 and not count[code]: code -= 1
      if code < 0: break
      count[code] -= 1
      if last != code:
        last = code
        repeat = 0
      repeat += 1
      ans.append(code)
    return ''.join([chr(code + 97) for code in ans])
        