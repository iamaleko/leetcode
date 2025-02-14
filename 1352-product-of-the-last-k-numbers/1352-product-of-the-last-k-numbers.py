class ProductOfNumbers:
  def __init__(self):
    self.nums = []
    self.zeroIndex = -1

  def add(self, num: int) -> None:
    if not num:
      self.zeroIndex = len(self.nums)
      self.nums.append(0)
    elif len(self.nums):
      if self.nums[len(self.nums) - 1]:
        self.nums.append(num * self.nums[len(self.nums) - 1])
      else:
        self.nums.append(num)
    else:
      self.nums.append(num)

  def getProduct(self, k: int) -> int:
    lastIndex = len(self.nums) - 1
    dividerIndex = len(self.nums) - k - 1
    # stream is empty
    if lastIndex < 0:
      return 0
    # all stream is requested
    if dividerIndex < 0:
      if self.zeroIndex == -1:
        return self.nums[lastIndex]
      return 0
    # stream part is requested
    if self.zeroIndex > dividerIndex:
      return 0
    if self.zeroIndex == dividerIndex:
      return self.nums[lastIndex]
    return int(self.nums[lastIndex] / self.nums[dividerIndex])