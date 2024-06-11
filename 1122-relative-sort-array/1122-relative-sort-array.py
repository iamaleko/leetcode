class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    m = {}
    for i, num in enumerate(arr2):
      m[num] = i
    maxVal = max(arr2)
    arr1.sort(key=lambda num: m[num] - maxVal if num in m else num)
    return arr1

        