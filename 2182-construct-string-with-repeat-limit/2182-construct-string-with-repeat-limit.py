class Solution:
  def repeatLimitedString(self, s: str, limit: int) -> str:
    count = [0] * 26
    for ch in s:
      count[ord(ch) - 97] += 1

    ans = []
    last = -1
    repeat = 0

    p = len(count) - 1
    while p > -1 and not count[p]: p -= 1

    while p > -1:
      code = 0
      # print(count, last, p, repeat, chr(p + 97), repeat == limit and last == p)
      if repeat == limit and last == p:
        j = p - 1
        while j > -1 and not count[j]: j -= 1
        if j == -1: break
        code = j
        count[j] -= 1
      else:
        code = p
        count[p] -= 1
        while p > -1 and not count[p]: p -= 1
      if last != code:
        last = code
        repeat = 0
      repeat += 1
      ans.append(code)
    return ''.join([chr(code + 97) for code in ans])
        