class Solution:
  def maxDiff(self, num: int) -> int:
    arr = list(str(num))
    if len(set(arr)) == 1:
      return int('8' * len(arr))
    x = ''
    y = ''
    for i, ch in enumerate(arr):
      if not x and int(ch) > 1:
        x = ch
      if not y and ch != '9':
        y = ch
      if x and y:
        break
    y = int(''.join(['9' if ch == y else ch for ch in arr]))
    rep = '1' if arr[0] == x else '0'
    x = int(''.join([rep if ch == x else ch for ch in arr]))
    return y - x
    

        