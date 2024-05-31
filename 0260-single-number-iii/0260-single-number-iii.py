class Solution:
  def singleNumber(self, nums: List[int]) -> List[int]:
    # find xor
    xor = 0
    for num in nums:
      xor ^= num
    
    #find first differing bit
    bit = 1
    while True:
      if xor & bit:
        break
      bit <<= 1

    # xor by groups
    a = 0
    b = 0
    for num in nums:
      if num & bit:
        a ^= num
      else:
        b ^= num

    return [a, b]