class Solution:
  def removeKdigits(self, str: str, k: int) -> str:
    p = 0
    while k and p + 1 < len(str):
      if int(str[p]) > int(str[p + 1]):
        str = str[:p] + str[p + 1:]
        k -= 1
      else:
        p += 1

    if k:
      str = str[:-k]

    while str and str[0] == '0':
      str = str[1:]

    return str if str else '0'
        