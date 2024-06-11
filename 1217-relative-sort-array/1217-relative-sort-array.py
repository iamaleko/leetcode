class Solution:
  def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
    m = {val: i for i, val in enumerate(arr2)}
    arr1.sort(key = lambda num: (
      notInArr2 := num not in m,
      num if notInArr2 else m[num]
    ))
    return arr1

        