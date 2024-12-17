class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count, ans, last, repeat, r, l = [0] * 123, [], -1, 0, 122, 121
    for ch in s: count[ord(ch)] += 1
    while True:
      while r >= 0 and not count[r]: r -= 1
      code = r
      if repeat == limit and code == last:
        if l >= r: l = r - 1
        while l >= 0 and not count[l]: l -= 1
        code = l
      if code < 0: break
      count[code] -= 1
      ans.append(chr(code))
      if last != code: last, repeat = code, 0
      repeat += 1
    return ''.join(ans)
        