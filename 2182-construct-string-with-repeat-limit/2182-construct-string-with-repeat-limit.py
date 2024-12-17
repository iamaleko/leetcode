class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count, codes, last, repeat, r, l = [0] * 26, [], -1, 0, 25, 24
    for ch in s: count[ord(ch) - 97] += 1
    while True:
      while r >= 0 and not count[r]: r -= 1
      code = r
      if repeat == limit and code == last:
        if l >= r: l = r - 1
        while l >= 0 and not count[l]: l -= 1
        code = l
      if code < 0: break
      count[code] -= 1
      codes.append(code)
      if last != code: last, repeat = code, 0
      repeat += 1
    return ''.join([chr(code + 97) for code in codes])
        