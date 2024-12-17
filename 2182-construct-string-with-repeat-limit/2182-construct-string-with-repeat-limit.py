class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count, codes, last, repeat, code = [0] * 123, [], -1, 0, 122
    for ch in s: count[ord(ch)] += 1
    while True:
      while code >= 0 and not count[code]: code -= 1
      add = code
      if repeat == limit and add == last:
        add -= 1
        while add >= 0 and not count[add]: add -= 1
      if add < 0: break
      count[add] -= 1
      repeat = repeat + 1 if last == add else 1
      codes.append(add)
      last = add
    return ''.join([chr(code) for code in codes])
        