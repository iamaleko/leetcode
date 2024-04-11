class Solution:
  def increasingTriplet(self, nums: List[int]) -> bool:
    a = math.inf
    b = math.inf
    for num in nums:
      if num <= a:
        a = num
      elif num <= b:
        b = num
      else:
        return True
    return False
    
    

      

        