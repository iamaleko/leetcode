class Solution:
  def firstCompleteIndex(self, arr: List[int], mat: List[List[int]]) -> int:
    h = len(mat)
    w = len(mat[0])
    cols = [0] * w
    rows = [0] * h
    indx = [None] + [None] * w * h
    for y in range(h):
      for x in range(w):
        indx[mat[y][x]] = (y, x)
    for i in range(w * h):
      y, x = indx[arr[i]]
      cols[x] += 1
      rows[y] += 1
      if cols[x] == h or rows[y] == w:
        return i
    return -1