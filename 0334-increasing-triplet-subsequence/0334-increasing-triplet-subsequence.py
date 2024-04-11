class Solution:
  def increasingTriplet(self, nums: List[int]) -> bool:
    ls = [math.inf] * 3
    for num in nums:
      for i in range(len(ls)):
        if ls[i] >= num:
          ls[i] = num
          break
      if i == len(ls) - 1:
        return True
    return False
    
    

      

        