class Solution:
  def mergeSort(self, a: List[str], l: int, r: int) -> List[str]:
    if r - l == 2:
      if a[l] + a[r - 1] < a[r - 1] + a[l]:
        a[r - 1], a[l] = a[l], a[r - 1]
    elif r - l > 2:
      i = l + r >> 1
      self.mergeSort(a, l, i)
      self.mergeSort(a, i, r)
      b = a[l:i]
      for j in range(len(b)):
        while i < r and b[j] + a[i] < a[i] + b[j]:
          a[l] = a[i]
          i += 1
          l += 1
        a[l] = b[j]
        j += 1
        l += 1

  def largestNumber(self, nums: List[int]) -> str:
    if max(nums):
      nums = list(map(str, nums))
      self.mergeSort(nums, 0, len(nums))
      return ''.join(nums)
    else:
      return '0'
        