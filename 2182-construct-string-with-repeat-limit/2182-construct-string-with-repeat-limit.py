class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count, codes, last, repeat, code = [0] * 123, [], -1, 0, 122
    for ch in s:
      count[ord(ch)] += 1
    while True:
      while code >= 0 and not count[code]: code -= 1
      if repeat == limit and code == last:
        alt = code - 1
        while alt >= 0 and not count[alt]: alt -= 1
        if alt < 0: break
        count[alt] -= 1
        repeat = 1
        codes.append(alt)
        last = alt
      else:
        if code < 0: break
        count[code] -= 1
        repeat = repeat + 1 if last == code else 1
        codes.append(code)
        last = code
    return ''.join([chr(code) for code in codes])
        