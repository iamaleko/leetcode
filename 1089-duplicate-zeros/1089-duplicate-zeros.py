class Solution:
  def duplicateZeros(self, arr: List[int]) -> None:
    i = -1
    j = -1
    for n in arr:
      i += 1
      j += 1
      if n == 0:
        j += 1
      if j > len(arr):
        break
    while i < j:
      if j < len(arr):
        arr[j] = arr[i]
      if arr[i] == 0:
        j -= 1
        if j < len(arr):
          arr[j] = arr[i]
      i -= 1
      j -= 1

        