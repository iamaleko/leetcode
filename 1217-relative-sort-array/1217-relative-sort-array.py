class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    m = {val: i for i, val in enumerate(arr2)}
    arr1.sort(key=lambda num: (num not in m, m[num] if num in m else num))
    return arr1

        